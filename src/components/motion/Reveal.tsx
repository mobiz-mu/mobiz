import type { ElementType, ReactNode } from "react";
import type { RevealDirection } from "./variants";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Entrance direction. Choose by composition, not by rotating mechanically. */
  direction?: RevealDirection;
  /** Seconds of delay, mapped onto the shared stagger step. */
  delay?: number;
  className?: string;
  as?: ElementType;
  id?: string;
};

/**
 * Scroll entrance for below-the-fold content.
 *
 * This is a SERVER component — it renders a plain element carrying a
 * `data-reveal` attribute and ships no JavaScript of its own. The single
 * `RevealObserver` mounted in the public layout flips `data-visible` when the
 * element scrolls in, and CSS runs the transition on the compositor.
 *
 * Content is server-rendered visible; the hidden state is only applied once the
 * observer is armed. With JS disabled or reduced motion on, everything is simply
 * present.
 *
 * Do not use above the fold for the LCP element — those use the CSS-only
 * `.enter-*` classes so they paint on frame one.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as: Tag = "div",
  id,
}: RevealProps) {
  // The CSS delay step is 80ms; express `delay` in those units.
  const index = delay > 0 ? Math.round((delay * 1000) / 80) : undefined;

  return (
    <Tag
      id={id}
      data-reveal={direction}
      className={cn(className)}
      style={index ? ({ ["--i" as string]: index } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
