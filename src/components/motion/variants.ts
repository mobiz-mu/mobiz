import type { Variants } from "motion/react";

/**
 * The Mobiz motion language.
 *
 * One easing curve carries the whole site so entrances feel like one system
 * rather than a per-page choice. Distances stay in the 24–48px range: enough to
 * read as movement, small enough that a slow device never shows a half-empty
 * viewport mid-scroll.
 *
 * Everything here animates only `opacity`, `transform` and `filter` on a small
 * number of elements — never layout properties, never hundreds of nodes.
 */

export const EASE_ORBIT = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.25, 0.46, 0.45, 0.94] as const;

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_ORBIT } },
};

/** Enters from the left edge. Pair with a right-hand visual. */
export const revealLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_ORBIT } },
};

/** Enters from the right edge. Pair with a left-hand visual. */
export const revealRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_ORBIT } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_SOFT } },
};

/** Focus-pull entrance. Used sparingly — blur is expensive to animate. */
export const fadeBlur: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 16 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.75, ease: EASE_ORBIT },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE_ORBIT } },
};

/** Card lifting out of depth — the signature entrance for glowing feature cards. */
export const depthIn: Variants = {
  hidden: { opacity: 0, y: 32, rotateX: 14, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE_ORBIT },
  },
};

export const VARIANTS = {
  up: revealUp,
  left: revealLeft,
  right: revealRight,
  fade: fadeIn,
  blur: fadeBlur,
  scale: scaleIn,
  depth: depthIn,
} as const;

export type RevealDirection = keyof typeof VARIANTS;

export const staggerContainer = (stagger = 0.08, delayChildren = 0.05): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Trigger point. `once` keeps entrances from replaying on scroll-back. */
export const VIEWPORT = { once: true, margin: "-60px" } as const;
export const VIEWPORT_EAGER = { once: true, margin: "0px" } as const;
