"use client";

import { useEffect, useRef, useState } from "react";

/**
 * True once the returned `ref` element has entered the viewport (or come
 * within `rootMargin` of it). Fires once, then disconnects — this is a mount
 * gate, not a visibility tracker.
 *
 * Extracted from the pattern proven on the homepage's review book: below-fold
 * interactive sections (carousels, tab panels, the book) can reserve their
 * exact layout with static server-rendered markup, then swap to a dynamically
 * imported interactive version only once a visitor is actually about to reach
 * them — so the interactive JS never competes with the initial page load.
 */
export function useNearViewport<T extends HTMLElement>(rootMargin = "400px") {
  const ref = useRef<T | null>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;

    // No IntersectionObserver (or a very old browser): just mount it. Deferred
    // to a task so this isn't a synchronous setState inside the effect body.
    if (typeof IntersectionObserver === "undefined") {
      const timer = setTimeout(() => setNear(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [near, rootMargin]);

  return { ref, near };
}

export default useNearViewport;
