"use client";

import { useEffect, useRef, type ReactNode } from "react";

import "./parallax-scene.css";

/**
 * The shared depth shell every service scene is built on.
 *
 * How the motion works, and why it is cheap:
 *
 * - Pointer position is written to TWO CSS custom properties on the scene root
 *   (`--px`, `--py`, both -1..1). Nothing is stored in React state, so a pointer
 *   move never triggers a render — the whole effect is CSS reading two numbers.
 * - The listener is attached to THIS element, not to `window`. Five scenes on
 *   the page therefore cost five element-scoped listeners that only fire while
 *   the pointer is actually over a scene, instead of five global mousemove
 *   handlers all firing on every move anywhere on the page.
 * - Writes are coalesced through one `requestAnimationFrame`, so a burst of
 *   pointer events produces at most one style write per frame. The frame is
 *   requested on demand and never runs as a loop.
 * - The handler reads only `event.clientX/Y` and a rect captured on enter. It
 *   never calls `getComputedStyle`, so it cannot force a synchronous layout.
 *
 * Inertia is CSS, not JS: each layer carries a long eased `transition` on
 * `transform`, so layers lag the pointer slightly and settle rather than snap
 * when it stops. No animation loop is needed to get the damping.
 *
 * Pointer tracking is only attached for real hover pointers. Touch devices and
 * anyone with `prefers-reduced-motion` never get a listener at all — mobile
 * instead runs a slow autonomous drift defined in CSS.
 */

type ParallaxSceneProps = {
  children: ReactNode;
  /** Accent hex; drives the ambient lighting behind the scene. */
  accent: string;
  className?: string;
  /** Accessible description — the scene itself is decorative. */
  label?: string;
};

export function ParallaxScene({ children, accent, className, label }: ParallaxSceneProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    let frame = 0;
    let nx = 0;
    let ny = 0;
    // Captured on enter so the move handler never measures during a gesture.
    let rect = el.getBoundingClientRect();

    const apply = () => {
      frame = 0;
      el.style.setProperty("--px", nx.toFixed(4));
      el.style.setProperty("--py", ny.toFixed(4));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onEnter = () => {
      rect = el.getBoundingClientRect();
      el.dataset.active = "true";
    };

    const onMove = (event: PointerEvent) => {
      // -1..1 from the centre, clamped so a fast exit cannot overshoot.
      nx = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      ny = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      schedule();
    };

    const onLeave = () => {
      nx = 0;
      ny = 0;
      delete el.dataset.active;
      schedule();
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={root}
      className={["pscene", className].filter(Boolean).join(" ")}
      style={{ "--accent": accent } as React.CSSProperties}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span className="pscene__ambient" />
      <span className="pscene__grid" />

      <div className="pscene__stage">{children}</div>
    </div>
  );
}

/** One depth plane. `depth` sets how far it travels and how it sits in Z. */
export function ParallaxLayer({
  depth,
  children,
  className,
}: {
  depth: "back" | "main" | "front" | "lift";
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={["pscene__layer", `pscene__layer--${depth}`, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export default ParallaxScene;
