"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

type ParallaxLayerProps = {
  children: ReactNode;
  /** Total vertical travel in px across the element's scroll range. */
  distance?: number;
  className?: string;
};

/**
 * Scroll-linked depth. Moves `children` slightly slower than the page so a
 * visual reads as sitting behind (or in front of) the text beside it.
 *
 * Keep `distance` modest — large values push the element far enough that it
 * either clips or opens a gap at the section edge, which is what produced the
 * dead vertical space on the previous site.
 */
export function ParallaxLayer({
  children,
  distance = 60,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance / 2, -distance / 2]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, willChange: "transform" }}>{children}</motion.div>
    </div>
  );
}

export default ParallaxLayer;
