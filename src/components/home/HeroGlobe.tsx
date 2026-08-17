import type { CSSProperties } from "react";

import { GLOBE_DOTS_HTML } from "@/components/home/globe-dots";

/**
 * Hero globe — a real sphere, not a sliding flat map.
 *
 * Each dot is placed by its actual coordinates with
 * `rotateY(longitude) rotateX(latitude) translateZ(radius)`, which is the
 * standard spherical-to-cartesian mapping expressed as CSS 3D transforms. So the
 * dots genuinely sit on a sphere's surface: they foreshorten toward the limb,
 * converge at the poles, and `backface-visibility: hidden` culls the far
 * hemisphere — the dots on the back are hidden because they face away, which is
 * exactly how a solid globe occludes itself.
 *
 * Rotation is one `rotateY(0 -> 360deg)` animation on a single parent. Because
 * 360deg of longitude IS the whole sphere, the loop is seamless by construction
 * rather than by a matched-up crossfade, and there is no frame where the
 * geometry jumps.
 *
 * Cost: zero client JavaScript (server component, no hooks), one animated
 * transform, no repaint per frame. The 476 dots are static markup painted once,
 * injected as a single prebuilt string so they are not also serialised into the
 * RSC flight payload element-by-element.
 *
 * Radius and dot size are in `cqmin`, resolved against `.hero-globe` as a size
 * container, so the sphere scales with its box at every breakpoint without a
 * per-breakpoint radius to keep in sync.
 */

/** Seconds for one full revolution. */
const SPIN_DURATION = "58s";

export function HeroGlobe() {
  return (
    <div
      aria-hidden
      className="hero-globe"
      style={{ "--globe-spin": SPIN_DURATION } as CSSProperties}
    >
      <span className="hero-globe__body" />

      <div className="hero-globe__sphere">
        {/*
         * Injected as one prebuilt string, not 476 mapped elements.
         *
         * RSC serialises the rendered tree into the document's inline flight
         * payload, so mapped spans ship twice — as HTML and again as 476 element
         * tuples, ~55KB extra on the inline script whose evaluation Lighthouse
         * measures as this page's largest mobile main-thread cost. The markup is
         * generated at build time by scripts/generate-globe-dots.mjs from
         * computed numbers; nothing dynamic or user-supplied reaches it.
         */}
        <div
          className="hero-globe__spin"
          dangerouslySetInnerHTML={{ __html: GLOBE_DOTS_HTML }}
        />
      </div>

      {/* Flat overlays above the sphere: lighting, then the lit rim. */}
      <span className="hero-globe__shade" />
      <span className="hero-globe__rim" />
    </div>
  );
}

export default HeroGlobe;
