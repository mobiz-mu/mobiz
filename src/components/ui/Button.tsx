import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

/*
 * One CTA system for the whole site.
 *
 * min-h-11 (44px) on every variant meets the touch-target floor without needing
 * a mobile-specific override. Hover uses transform + shadow only, so it costs a
 * composite rather than a repaint.
 */
const BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold " +
  "transition-[transform,box-shadow,background-color,border-color,color] duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50 min-h-11";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-linear-[135deg,var(--color-brand),var(--color-brand-deep)] text-white " +
    "shadow-cta hover:-translate-y-0.5 hover:shadow-cta-hover " +
    "focus-visible:outline-brand-mid",
  secondary:
    "border border-line-strong text-text-secondary hover:border-white/28 hover:text-text-primary " +
    "focus-visible:outline-brand-mid",
  ghost:
    "text-text-secondary hover:bg-white/5 hover:text-text-primary focus-visible:outline-brand-mid",
  whatsapp:
    "border border-[rgba(37,211,102,0.28)] bg-[rgba(37,211,102,0.1)] text-text-primary " +
    "hover:border-[rgba(37,211,102,0.5)] hover:bg-[rgba(37,211,102,0.16)] " +
    "focus-visible:outline-[var(--color-whatsapp)]",
};

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Trailing arrow. Omit on WhatsApp buttons, which carry their own icon. */
  withArrow?: boolean;
  fullWidth?: boolean;
};

type ButtonLinkProps = CommonProps & {
  href: string;
  /** Set for outbound links — adds target/rel and an accessible-name suffix. */
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  fullWidth = false,
  external = false,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], fullWidth && "w-full", className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {withArrow ? <ArrowRight aria-hidden className="size-4 shrink-0" /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      {withArrow ? <ArrowRight aria-hidden className="size-4 shrink-0" /> : null}
    </Link>
  );
}

type ButtonProps = CommonProps & ComponentProps<"button">;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  fullWidth = false,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(BASE, VARIANTS[variant], SIZES[size], fullWidth && "w-full", className)}
      {...rest}
    >
      {children}
      {withArrow ? <ArrowRight aria-hidden className="size-4 shrink-0" /> : null}
    </button>
  );
}
