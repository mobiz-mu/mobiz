"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
};

/**
 * Counts up to `value` when scrolled into view.
 *
 * The final value is rendered as the initial text so it is present in the HTML
 * for crawlers and for anyone without JavaScript — the animation replaces it,
 * it does not reveal it. Tabular numerals keep the width stable so the count
 * never nudges surrounding layout (CLS).
 *
 * Only ever used with figures that are genuinely verifiable.
 */
export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  durationMs = 1400,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduced) return;

    let frame = 0;
    const start = performance.now();

    // The count starts from the first animation frame rather than a synchronous
    // reset here — that would be a cascading render, and the frame lands within
    // ~16ms of the element reaching the viewport edge either way.
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // easeOutExpo — fast start, gentle settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value, durationMs]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
