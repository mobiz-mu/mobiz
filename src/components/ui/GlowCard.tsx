import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { accentStyle, type AccentId } from "@/lib/accents";

type GlowCardProps = {
  children: ReactNode;
  /** Tints the gradient border and the bloom behind the card. */
  accent?: AccentId;
  /** Where the soft colour bloom sits. `none` for dense grids. */
  glow?: "top-right" | "top-left" | "bottom" | "none";
  className?: string;
  as?: ElementType;
  /** Lifts on hover. Use for cards that are themselves links. */
  interactive?: boolean;
};

const GLOW_POSITION = {
  "top-right": "-top-24 -right-16",
  "top-left": "-top-24 -left-16",
  bottom: "-bottom-24 left-1/2 -translate-x-1/2",
  none: "",
} as const;

/**
 * The signature Mobiz surface: dark panel, luminous gradient border, soft
 * coloured bloom behind.
 *
 * The bloom is a blurred element that is painted once and never animated —
 * only transform/opacity may change on hover — because animating `filter:
 * blur()` on a dozen cards is what makes this kind of design stutter on mid-
 * range phones.
 */
export function GlowCard({
  children,
  accent = "red",
  glow = "top-right",
  className,
  as: Tag = "div",
  interactive = false,
}: GlowCardProps) {
  return (
    <Tag
      style={accentStyle(accent)}
      className={cn(
        "glow-card",
        interactive &&
          "transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1",
        className,
      )}
    >
      {glow !== "none" ? (
        <span aria-hidden className={cn("glow-blob absolute", GLOW_POSITION[glow])} />
      ) : null}
      <div className="relative">{children}</div>
    </Tag>
  );
}

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** Lighter surface for floating UI, menus and inline callouts. */
export function GlassPanel({ children, className, as: Tag = "div" }: GlassPanelProps) {
  return (
    <Tag className={cn("glass-card rounded-lg", className)}>{children}</Tag>
  );
}

export default GlowCard;
