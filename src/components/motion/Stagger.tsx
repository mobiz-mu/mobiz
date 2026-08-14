import { Children, isValidElement, cloneElement, type ElementType, type ReactNode } from "react";
import type { RevealDirection } from "./variants";
import { cn } from "@/lib/utils";

type StaggerGroupProps = {
  children: ReactNode;
  /** Kept for API compatibility; the step is a CSS constant (80ms). */
  stagger?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Sequences the entrance of a group of `StaggerItem`s.
 *
 * Server component. It walks its children and assigns each one a `--i` index,
 * which CSS turns into a transition-delay — so the whole group costs zero
 * JavaScript and the delays are declarative.
 *
 * The index is capped so a long list's last item never waits more than ~8
 * steps; past that the stagger stops reading as rhythm and starts reading as
 * lag.
 */
export function StaggerGroup({
  children,
  className,
  as: Tag = "div",
}: StaggerGroupProps) {
  let index = 0;

  const indexed = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const i = Math.min(index++, 8);
    return cloneElement(child as React.ReactElement<{ style?: React.CSSProperties }>, {
      style: {
        ...((child.props as { style?: React.CSSProperties }).style ?? {}),
        ["--i" as string]: i,
      } as React.CSSProperties,
    });
  });

  return <Tag className={cn(className)}>{indexed}</Tag>;
}

type StaggerItemProps = {
  children: ReactNode;
  direction?: RevealDirection;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
};

export function StaggerItem({
  children,
  direction = "up",
  className,
  as: Tag = "div",
  style,
}: StaggerItemProps) {
  return (
    <Tag data-reveal={direction} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}
