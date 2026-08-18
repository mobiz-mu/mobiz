import Image from "next/image";
import lockup from "@/assets/mobiz-lockup.png";
import { HoverPrefetchLink } from "@/components/ui/HoverPrefetchLink";
import { cn } from "@/lib/utils";

/*
 * Imported, not referenced by public path.
 *
 * A string src makes Next serve the lockup through /_next/image, and production
 * returned `Cache-Control: max-age=0, must-revalidate` for that endpoint — so the
 * first thing customers look at re-validated on every single navigation. A static
 * import gives the file a content hash and an immutable year-long cache, and it
 * hands width/height to next/image from the file itself, so the box is reserved
 * without us restating the dimensions.
 */

/** Intrinsic size of the derived lockup. */
const LOCKUP_W = 483;
const LOCKUP_H = 200;
const ASPECT = LOCKUP_W / LOCKUP_H; // 2.415

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
 * Source: the approved master `public/images/brand/mobiznew-logo.png`, trimmed
 * to its ink bounds and keyed to transparency by
 * `scripts/migrate-brand-assets.mjs`. The supplied artwork is white-on-solid-
 * black with no alpha, so the black has to be keyed out — otherwise the header
 * would show a black rectangle against the page's near-black surface. Nothing
 * is redrawn, recoloured or reproportioned.
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
    /*
     * Hover/touch prefetch, not viewport prefetch.
     *
     * The logo renders on every route and always links home. On the homepage
     * itself that is a self-referencing prefetch — Next fetched `/`'s own RSC
     * payload every time the logo entered the viewport, which on `/` means
     * "immediately", competing with the very hero it sits above. On inner
     * routes an automatic prefetch here is also low-value: most visitors don't
     * click the logo without a reason to. Hover/touch/focus prefetch keeps the
     * click-to-home feeling instant for anyone who actually reaches for it.
     */
    <HoverPrefetchLink
      href="/"
      aria-label="MoBiz.mu — Home"
      className={cn(
        // min-h-11 keeps the 44px touch target regardless of logo height.
        "flex min-h-11 shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mid",
        className,
      )}
    >
      <Image
        src={lockup}
        alt=""
        width={width}
        height={height}
        priority={priority}
        sizes={`${width}px`}
        className="h-auto w-auto"
        style={{ width, height }}
      />
    </HoverPrefetchLink>
  );
}

export default Logo;
