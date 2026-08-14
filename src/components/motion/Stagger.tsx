"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { VARIANTS, VIEWPORT, staggerContainer, type RevealDirection } from "./variants";

type StaggerGroupProps = {
  children: ReactNode;
  /** Seconds between child entrances. Keep small — long chains feel sluggish. */
  stagger?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Sequences the entrance of a group of `StaggerItem`s.
 *
 * Cap groups at roughly a dozen items: past that the last card enters long
 * after the user has read the first, and the browser is animating more nodes
 * than a mid-range phone can composite smoothly.
 */
export function StaggerGroup({
  children,
  stagger = 0.08,
  className,
  as = "div",
}: StaggerGroupProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  direction?: RevealDirection;
  className?: string;
  as?: ElementType;
};

export function StaggerItem({
  children,
  direction = "up",
  className,
  as = "div",
}: StaggerItemProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={VARIANTS[direction]}>
      {children}
    </MotionTag>
  );
}
