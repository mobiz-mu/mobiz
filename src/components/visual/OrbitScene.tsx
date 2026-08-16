import Image from "next/image";
import type { CSSProperties } from "react";

/*
 * The stylesheet belongs to this component, not to whoever renders it. It used
 * to be imported by Hero alone, so /services — which renders OrbitScene through
 * ServicesHubPage without Hero — got a completely unstyled orbit: no
 * object-fit, so the card art was stretched, and cards laid out at ~302px
 * instead of ~140px, which is what Lighthouse was reporting as
 * image-aspect-ratio + image-size-responsive failures on that route.
 */
import "./orbit-scene.css";

const ACCENTS = {
  red: {
    border: "rgba(192,24,34,.62)",
    glow: "rgba(192,24,34,.28)",
    dot: "#C01822",
  },
  blue: {
    border: "rgba(37,99,235,.62)",
    glow: "rgba(37,99,235,.25)",
    dot: "#2563EB",
  },
  sky: {
    border: "rgba(14,165,233,.62)",
    glow: "rgba(14,165,233,.24)",
    dot: "#0EA5E9",
  },
  yellow: {
    border: "rgba(234,179,8,.62)",
    glow: "rgba(234,179,8,.23)",
    dot: "#EAB308",
  },
  green: {
    border: "rgba(34,197,94,.62)",
    glow: "rgba(34,197,94,.23)",
    dot: "#22C55E",
  },
  emerald: {
    border: "rgba(16,185,129,.62)",
    glow: "rgba(16,185,129,.23)",
    dot: "#10B981",
  },
} as const;

export type OrbitAccent = keyof typeof ACCENTS;

export type OrbitItem = {
  id: string;
  label: string;
  sub: string;
  accent: OrbitAccent;
  image: string;
};

type OrbitSceneProps = {
  items: readonly OrbitItem[];
  centreImage?: string;
  centreAlt?: string;
  compact?: boolean;
  animate?: boolean;
  duration?: number;
  eagerCentreImage?: boolean;
};

export function OrbitScene({
  items,
  centreImage,
  centreAlt = "",
  compact = false,
  animate = true,
  duration = 38,
  eagerCentreImage = false,
}: OrbitSceneProps) {
  return (
    <div
      className={[
        "orbit-scene",
        compact ? "orbit-scene--compact" : "",
        animate ? "orbit-scene--animated" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--orbit-duration": `${duration}s`,
        } as CSSProperties
      }
    >
      <div aria-hidden className="orbit-ambient" />
      <div aria-hidden className="orbit-floor-grid" />

      <div aria-hidden className="orbit-ring orbit-ring--outer" />
      <div aria-hidden className="orbit-ring orbit-ring--middle" />
      <div aria-hidden className="orbit-ring orbit-ring--inner" />

      <div aria-hidden className="orbit-wheel">
        {items.map((item, index) => {
          const angle = (360 / items.length) * index;
          const accent = ACCENTS[item.accent] ?? ACCENTS.red;

          return (
            <div
              key={item.id}
              className="orbit-node"
              style={
                {
                  "--orbit-angle": `${angle}deg`,
                } as CSSProperties
              }
            >
              <div className="orbit-node-upright">
                <article
                  className="orbit-card"
                  style={{
                    borderColor: accent.border,
                    boxShadow: `
                      0 18px 60px rgba(0,0,0,.46),
                      0 0 34px ${accent.glow}
                    `,
                  }}
                >
                  <div className="orbit-card__media">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="140px"
                      className="orbit-card__image"
                    />

                    <div
                      aria-hidden
                      className="orbit-card__media-overlay"
                    />
                  </div>

                  <div className="orbit-card__content">
                    <div className="orbit-card__top">
                      <span
                        aria-hidden
                        className="orbit-card__dot"
                        style={{ background: accent.dot }}
                      />

                      <span className="orbit-card__label">
                        {item.label}
                      </span>
                    </div>

                    <p className="orbit-card__subtitle">
                      {item.sub}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>

      {centreImage ? (
        <div className="orbit-person">
          <div aria-hidden className="orbit-person__halo" />

          <Image
             src={centreImage}
             alt={centreAlt}
             width={760}
             height={900}
             sizes="(max-width: 639px) 260px, (max-width: 1023px) 360px, 500px"
             className="orbit-person__image"
             /*
              * Deliberately NOT next/image's `priority`. Measured with Lighthouse: the LCP
              * element here is the H1 text (span.hero-headline__word), not this image —
              * `lcp-discovery-insight` reports notApplicable, i.e. there is no LCP image.
              *
              * `fetchPriority="high"` was A/B tested against "auto" (3 Lighthouse runs
              * each): LCP -147ms, FCP +307ms, TBT -366ms — inconsistent in direction and
              * well inside this host's noise, so neither wins. Note React 19 emits the
              * <link rel="preload"> for an eager image either way, so the two configs
              * barely differ. Kept as-is. The source is also now an 82KB WebP delivered
              * as ~20KB AVIF, so there is no longer a large image to compete with.
              */
             loading={eagerCentreImage ? "eager" : "lazy"}
             fetchPriority={eagerCentreImage ? "high" : "auto"}
          />

          <div aria-hidden className="orbit-person__shadow" />
        </div>
      ) : null}

      <div aria-hidden className="orbit-scan orbit-scan--one" />
      <div aria-hidden className="orbit-scan orbit-scan--two" />
    </div>
  );
}

export default OrbitScene;