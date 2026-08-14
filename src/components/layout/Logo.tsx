import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Header logos load eagerly; the footer copy can wait. */
  priority?: boolean;
};

/**
 * The Mobiz wordmark.
 *
 * Uses the supplied brand asset — never a recreated or approximated mark.
 * Intrinsic width/height are declared so the header reserves the space before
 * the image decodes and the nav never shifts.
 *
 * TODO: Replace /images/logos/mobiz-mu-logo.png with the final supplied logo
 * (SVG preferred). The current file is the existing production asset.
 */
export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="MoBiz.mu — Home"
      className={cn(
        // min-h-11 gives the 44px touch target; the mark itself stays 32px.
        "flex min-h-11 shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mid",
        className,
      )}
    >
      <Image
        src="/images/logos/mobiz-mu-logo.png"
        alt=""
        width={32}
        height={32}
        priority={priority}
        className="size-8 shrink-0 rounded-md object-contain"
      />
      <span className="text-[17px] font-bold tracking-tight text-text-primary">
        Mobiz<span className="text-brand-bright">.mu</span>
      </span>
    </Link>
  );
}

export default Logo;
