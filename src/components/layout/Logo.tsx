import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** Intrinsic size of the derived lockup (public/images/logos/mobiz-logo.png). */
const LOCKUP_W = 310;
const LOCKUP_H = 240;
const ASPECT = LOCKUP_W / LOCKUP_H; // 1.2917

type LogoProps = {
  /** Rendered height in px. Width is derived, so the mark is never distorted. */
  height?: number;
  className?: string;
  /** Header logos load eagerly; the footer copy can wait. */
  priority?: boolean;
};

/**
 * The official Mobiz.mu lockup.
 *
 * Source: the supplied master `public/documents/mobiz-logo.png`, trimmed to its
 * ink bounds and keyed to transparency by `scripts/build-brand-assets.mjs`.
 * Nothing is redrawn, recoloured or reproportioned.
 *
 * The artwork is a LOCKUP — it already contains the "mobiz.mu" wordmark between
 * the M's legs. It therefore replaces the previous [tiny mark + CSS text]
 * arrangement rather than sitting beside it; rendering both would print the
 * wordmark twice.
 *
 * Because the wordmark is part of the artwork, the lockup needs real height to
 * stay legible — it is rendered at 40px in the header and 48px in the footer,
 * not squeezed into a 32px square. Width is always derived from the intrinsic
 * aspect ratio and both dimensions are explicit, so no layout shift occurs.
 *
 * The accessible name comes from the link's aria-label; the image itself is
 * decorative to avoid announcing the brand twice.
 */
export function Logo({ height = 40, className, priority = false }: LogoProps) {
  /*
   * FLOOR, not round. next/image's optimizer emits whole pixels constrained by
   * the source aspect; rounding up asked the browser to paint a 52px box with a
   * 51px source, a 1px upscale on every page. Flooring makes the rendered box
   * exactly match what the optimizer produces at DPR 1, while the srcset (up to
   * 3840w) still supplies sharp 2x/3x variants for Retina.
   */
  const width = Math.floor(height * ASPECT);

  return (
    <Link
      href="/"
      aria-label="MoBiz.mu — Home"
      className={cn(
        // min-h-11 keeps the 44px touch target regardless of logo height.
        "flex min-h-11 shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mid",
        className,
      )}
    >
      <Image
        src="/images/logos/mobiz-logo.png"
        alt=""
        width={width}
        height={height}
        priority={priority}
        sizes={`${width}px`}
        className="h-auto w-auto"
        style={{ width, height }}
      />
    </Link>
  );
}

export default Logo;
