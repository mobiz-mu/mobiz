import type { CSSProperties } from "react";

/**
 * "Businesses that Trust Us" — client names and the four headline counters.
 *
 * Server component, zero client JavaScript. The counters count up on viewport
 * entry by reusing the site's existing single IntersectionObserver
 * (`RevealObserver`): it stamps `data-visible="true"` on the wrapper, and CSS
 * animates a registered `<integer>` custom property that a CSS counter renders.
 * No per-section observer, no hydration boundary, no animation library.
 *
 * The numbers below were supplied by Mobiz. They are rendered as plain page
 * copy only — deliberately NOT as AggregateRating/Review structured data, since
 * there is no verified review corpus behind them and the rest of the site keeps
 * that guarantee.
 *
 * Names, not logos: no third-party marks are reproduced anywhere here.
 */

const CLIENTS = [
  "Dan & Shi Pest Control Ltd",
  "Travel Holiday Mauritius",
  "Himalay Rental Tours",
  "Codexia Ltd",
  "Hero Car Rental",
  "GPWCCU",
  "Heaven's Seed School",
  "KS Contracting Ltd",
  "Méa Kréation",
  "Ram Pottery Ltd",
  "Multimaint Ltd",
  "Two Souls Boutique",
  "Anytime Anywhere Tour Operator Ltd",
  "Samrn Company Ltd",
] as const;

const ROW_ONE = CLIENTS.slice(0, 7);
const ROW_TWO = CLIENTS.slice(7);

type Stat = { to: number; unit: string; label: string };

const STATS: Stat[] = [
  { to: 68, unit: "+", label: "Projects Delivered" },
  { to: 30, unit: "+", label: "Businesses Supported" },
  { to: 15, unit: "+", label: "Digital Solutions" },
  { to: 99, unit: "%", label: "Client Satisfaction" },
];

function StatCounter({ stat, index }: { stat: Stat; index: number }) {
  return (
    <li
      className="trust-stat"
      style={
        {
          "--trust-to": stat.to,
          "--trust-delay": `${index * 0.11}s`,
        } as CSSProperties
      }
    >
      {/*
        The animated figure is decorative: `::after` content is not dependable
        for assistive tech, so the real value is announced from the visually
        hidden phrase below and this whole visual is hidden from the a11y tree.
      */}
      <span aria-hidden className="trust-stat__value">
        <span className="trust-stat__num" />
        <span className="trust-stat__unit">{stat.unit}</span>
      </span>

      <span className="sr-only">{`${stat.to}${stat.unit} ${stat.label}`}</span>

      <span aria-hidden className="trust-stat__label">
        {stat.label}
      </span>
    </li>
  );
}

function ClientRow({
  clients,
  direction,
  depth,
}: {
  clients: readonly string[];
  direction: "left" | "right";
  depth: "near" | "far";
}) {
  return (
    <div className={`trusted-marquee trusted-marquee--${depth}`}>
      <div
        className={
          direction === "left"
            ? "trusted-marquee__track trusted-marquee__track--left"
            : "trusted-marquee__track trusted-marquee__track--right"
        }
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="trusted-marquee__group"
            /* The second copy exists only to close the loop seamlessly. */
            aria-hidden={copy === 1 ? true : undefined}
          >
            {clients.map((name, index) => (
              <li key={`${copy}-${name}`} className="trusted-client">
                <span
                  aria-hidden
                  className={`trusted-client__dot trusted-client__dot--${index % 4}`}
                />

                <span className="trusted-client__name">{name}</span>

                <span
                  aria-hidden
                  className={`trusted-client__line trusted-client__line--${index % 4}`}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section aria-labelledby="trusted-by-heading" className="trusted-section">
      <div aria-hidden className="trusted-section__grid" />
      <div aria-hidden className="trusted-section__glow" />

      <div className="trusted-section__inner">
        {/* One header for the whole section — names and counters both sit under it. */}
        <header className="trusted-section__header">
          <div className="trusted-section__eyebrow">
            <span aria-hidden className="trusted-section__eyebrow-line" />

            <span>Trusted across Mauritius</span>

            <span aria-hidden className="trusted-section__eyebrow-line" />
          </div>

          <h2 id="trusted-by-heading" className="trusted-section__title">
            Businesses that <span>Trust Us</span>
          </h2>

          <p className="trusted-section__copy">
            Supporting Mauritian businesses across tourism, retail, professional
            services, education, e-commerce and digital operations.
          </p>
        </header>

        {/*
          The 3D stage. One perspective, one tilted plane, and the two rows set
          at different depths travelling in opposite directions — so the whole
          thing is two composited transforms rather than per-plate animation.
        */}
        <div className="trusted-stage">
          <div className="trusted-stage__plane">
            <ClientRow clients={ROW_ONE} direction="left" depth="near" />
            <ClientRow clients={ROW_TWO} direction="right" depth="far" />
          </div>
        </div>

        <ul className="trust-stats" data-reveal="depth">
          {STATS.map((stat, index) => (
            <StatCounter key={stat.label} stat={stat} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustedBy;
