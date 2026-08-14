"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { VARIANTS, VIEWPORT, type RevealDirection } from "./variants";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Entrance direction. Choose by composition, not by rotating mechanically. */
  direction?: RevealDirection;
  delay?: number;
  className?: string;
  /** Render as a semantic element instead of a div. */
  as?: ElementType;
  id?: string;
};

/**
 * Scroll entrance for below-the-fold content.
 *
 * This is a thin client boundary: `children` are still rendered on the server
 * and stream into the HTML, so the text is crawlable and only the wrapper
 * hydrates.
 *
 * Do NOT use this above the fold — it starts at opacity 0, so an LCP element
 * inside it would wait for hydration. Above-the-fold entrances use the CSS-only
 * `.enter-*` classes in globals.css, which paint on the first frame.
 *
 * With `prefers-reduced-motion` the element renders in its final state with no
 * transition at all, rather than animating quickly.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
  id,
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      id={id}
      className={cn(className)}
      variants={VARIANTS[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
