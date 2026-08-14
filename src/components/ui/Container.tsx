import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  /**
   * `default` — the site-wide 1320px measure used by the header, footer and
   *             every standard section.
   * `wide`    — 1560px, for cinematic full-bleed compositions only.
   * `prose`   — 720px, the reading measure for blog and legal copy.
   */
  size?: "default" | "wide" | "prose";
  className?: string;
  as?: ElementType;
  id?: string;
};

const SIZES = {
  default: "max-w-[1320px]",
  wide: "max-w-[1560px]",
  prose: "max-w-[720px]",
} as const;

/**
 * Horizontal measure and gutters.
 *
 * Gutters step 20px → 32px → 64px so content never touches the edge on a 320px
 * phone and never stretches unreadably wide on a 1920px display.
 */
export function Container({
  children,
  size = "default",
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full px-5 sm:px-8 lg:px-16", SIZES[size], className)}
    >
      {children}
    </Tag>
  );
}

export default Container;
