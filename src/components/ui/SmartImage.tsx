import Image from "next/image";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string;
  /**
   * Required. Empty string is allowed ONLY for purely decorative imagery, which
   * also sets aria-hidden so a screen reader skips it entirely.
   */
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Wrapper classes — the aspect-ratio box that prevents layout shift. */
  frameClassName?: string;
  /** Set true only for a genuine LCP image. Never more than one per page. */
  priority?: boolean;
  sizes?: string;
  /** Rounds the frame. Matches the radius scale, not an arbitrary value. */
  rounded?: "none" | "md" | "lg" | "xl" | "2xl";
};

const ROUNDED = {
  none: "",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
} as const;

/**
 * Every content image on the site goes through here.
 *
 * The wrapper carries an explicit aspect ratio derived from the intrinsic
 * dimensions, so the space is reserved before the bytes arrive and CLS stays at
 * zero. AVIF/WebP and the responsive srcset come from next/image; `sizes` should
 * describe the real rendered width so the browser doesn't over-download.
 *
 * Only pass `priority` for the one image that is genuinely the LCP element —
 * preloading everything is slower, not faster.
 */
export function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  frameClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  rounded = "lg",
}: SmartImageProps) {
  const decorative = alt === "";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-1",
        ROUNDED[rounded],
        frameClassName,
      )}
      style={{ aspectRatio: `${width} / ${height}` }}
      {...(decorative ? { "aria-hidden": true } : {})}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={cn("object-cover", className)}
      />
    </div>
  );
}

export default SmartImage;
