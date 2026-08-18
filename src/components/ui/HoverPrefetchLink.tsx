"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * A `<Link>` that prefetches on hover/touch/focus instead of on viewport entry.
 *
 * `prefetch={false}` on a plain `next/link` does NOT fall back to hover
 * prefetching — verified against the Next 16 docs and confirmed empirically
 * (dispatched a real hover event at a `prefetch={false}` link and captured
 * zero RSC requests). It disables prefetching outright, on both triggers. An
 * earlier pass here believed hover prefetch survived `prefetch={false}`; it
 * does not, so those links were paying full cold-navigation latency with no
 * prefetch benefit at all.
 *
 * This component is the actual fix: `prefetch={false}` stops the automatic
 * viewport prefetch (the thing that was competing with initial page load —
 * `/`, `/services` and `/contact` were being re-fetched via RSC the moment
 * their links entered the viewport, before the visitor had done anything),
 * and an imperative `router.prefetch(href)` on hover/focus/touchstart restores
 * the fast-click feeling for whichever link the visitor is actually about to
 * use. Firing at most once per href avoids re-requesting on every mouse move.
 */
export function HoverPrefetchLink({
  href,
  children,
  onMouseEnter,
  onTouchStart,
  onFocus,
  ...rest
}: LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) {
  const router = useRouter();
  const firedRef = useRef(false);

  const prime = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    router.prefetch(String(href));
  };

  return (
    <Link
      href={href}
      prefetch={false}
      onMouseEnter={(e) => {
        prime();
        onMouseEnter?.(e);
      }}
      onTouchStart={(e) => {
        prime();
        onTouchStart?.(e);
      }}
      onFocus={(e) => {
        prime();
        onFocus?.(e);
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default HoverPrefetchLink;
