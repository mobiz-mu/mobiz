/**
 * The Mobiz motion vocabulary.
 *
 * These names are the contract between components and the CSS reveal engine
 * (see `Reveal`, `Stagger`, and the `[data-reveal]` rules in globals.css).
 * There is no animation library behind them — each value maps to a CSS rule, so
 * a component asks for "left" and the stylesheet decides what that means.
 *
 * Keeping the vocabulary here means entrance directions stay a small, deliberate
 * set rather than ad-hoc inline transforms scattered across pages.
 */

export const REVEAL_DIRECTIONS = [
  "up",
  "left",
  "right",
  "fade",
  "blur",
  "scale",
  "depth",
] as const;

export type RevealDirection = (typeof REVEAL_DIRECTIONS)[number];

/**
 * Shared easing, mirrored by `--ease-orbit` in globals.css. Exported so any
 * one-off inline transition matches the site's curve instead of guessing.
 */
export const EASE_ORBIT = "cubic-bezier(0.16, 1, 0.3, 1)";

/** Delay step between staggered children, in ms. Mirrors the CSS `--i` step. */
export const STAGGER_STEP_MS = 80;
