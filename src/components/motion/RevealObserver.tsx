"use client";

import { useEffect } from "react";

/**
 * The site's entire scroll-reveal engine.
 *
 * One IntersectionObserver watches every `[data-reveal]` element on the page and
 * sets `data-visible="true"` once; CSS does the rest. This replaces one React
 * client component per section — on the homepage that was ~40 hydrating
 * boundaries and ~490ms of blocking time.
 *
 * Ordering matters here. Elements are server-rendered *visible*, and this only
 * arms the hidden state (`data-reveal-armed` on <html>) once the observer
 * exists. So if JavaScript never runs, fails, or the browser lacks
 * IntersectionObserver, every section stays on screen rather than being stuck
 * at opacity 0.
 *
 * Respects `prefers-reduced-motion` by never arming at all.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    const root = document.documentElement;
    const seen = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.01 },
    );

    /**
     * `initial` reads geometry to decide what is already on screen. That forces
     * a style/layout pass, so it runs exactly once at arm time — never from the
     * mutation path, where repeating it on every DOM change was measurably
     * worse than the animation it was driving.
     */
    const register = (el: Element, initial: boolean) => {
      if (seen.has(el)) return;
      seen.add(el);

      if (initial) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Above the fold at arm time: show immediately so the first paint is
          // never a blank viewport.
          el.setAttribute("data-visible", "true");
          return;
        }
      }
      observer.observe(el);
    };

    root.setAttribute("data-reveal-armed", "");
    for (const el of document.querySelectorAll("[data-reveal]")) register(el, true);

    /*
     * Catch content added by client-side navigation. Only the added subtrees are
     * inspected — a full-document querySelectorAll on every mutation was the
     * single largest style-recalculation cost on the homepage.
     */
    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.hasAttribute("data-reveal")) register(node, false);
          for (const el of node.querySelectorAll("[data-reveal]")) register(el, false);
        }
      }
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
      root.removeAttribute("data-reveal-armed");
    };
  }, []);

  return null;
}

export default RevealObserver;
