import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  /**
   * Vertical rhythm. These are the only section paddings on the site.
   *
   * `calm`     — legal, blog body, FAQ
   * `default`  — every standard commercial section
   * `flagship` — homepage hero-adjacent and major storytelling moments
   *
   * Mobile is deliberately much tighter than desktop: the previous site scaled
   * desktop spacing down proportionally and left huge dead gaps on phones.
   */
  spacing?: "none" | "calm" | "default" | "flagship";
  className?: string;
  id?: string;
  /** Skips layout/paint while far offscreen. Safe for static content only. */
  deferPaint?: boolean;
  "aria-labelledby"?: string;
};

const SPACING = {
  none: "",
  calm: "py-14 md:py-16 lg:py-section-sm",
  default: "py-16 md:py-20 lg:py-section",
  flagship: "py-20 md:py-24 lg:py-section-lg",
} as const;

export function Section({
  children,
  spacing = "default",
  className,
  id,
  deferPaint = false,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative", SPACING[spacing], deferPaint && "cv-auto", className)}
      {...rest}
    >
      {children}
    </section>
  );
}

export default Section;
