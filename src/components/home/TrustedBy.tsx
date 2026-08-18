import type { CSSProperties } from "react";
import { Star } from "lucide-react";

import { DotPattern } from "@/components/ui/DotPattern";

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
  "MultiiMaint Ltd",
  "Two Souls Boutique",
  "Anytime Anywhere Tour Operator Ltd",
  "Samrn Company Ltd",
] as const;

const COUNTERS = [
  { to: 68, unit: "+", label: "Projects Delivered" },
  { to: 30, unit: "+", label: "Businesses Supported" },
  { to: 15, unit: "+", label: "Digital Solutions" },
  { to: 99, unit: "%", label: "Client Satisfaction" },
] as const;

const TRUST_SIGNALS = [
  {
    label: "Google Reviews",
    value: "5.0",
    srLabel: "Google Reviews, 5 out of 5 stars",
  },
  {
    label: "Facebook Reviews",
    value: "5.0",
    srLabel: "Facebook Reviews, 5 out of 5 stars",
  },
  {
    label: "Service Quality",
    value: "99%",
    srLabel: "Service Quality, 99 percent",
  },
] as const;

function FiveStars() {
  return (
    <span aria-hidden className="trust-rating__stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="trust-rating__star"
          fill="currentColor"
          strokeWidth={1.4}
        />
      ))}
    </span>
  );
}

export function TrustedBy() {
  return (
    <section aria-labelledby="trusted-by-heading" className="trust">
      <div className="trust__inner">
        <h2 id="trusted-by-heading" className="sr-only">
          Businesses that trust Mobiz
        </h2>

        {/* =====================================================
            TOP LIVE COUNTERS
        ====================================================== */}
        <ul className="trust-counters" data-reveal="up">
          {COUNTERS.map((counter, index) => (
            <li
              key={counter.label}
              className="trust-counter"
              style={
                {
                  "--trust-to": counter.to,
                  "--trust-delay": `${index * 0.1}s`,
                } as CSSProperties
              }
            >
              <span aria-hidden className="trust-counter__value">
                <span className="trust-counter__num" />
                <span className="trust-counter__unit">{counter.unit}</span>
              </span>

              <span className="sr-only">
                {`${counter.to}${counter.unit} ${counter.label}`}
              </span>

              <span aria-hidden className="trust-counter__label">
                {counter.label}
              </span>
            </li>
          ))}
        </ul>

        {/* =====================================================
            MAIN — EQUAL HEIGHT LEFT / RIGHT
        ====================================================== */}
        <div className="trust-middle" data-reveal="up">
          {/* ================= LEFT ================= */}
          <div className="trust-story">
            <DotPattern className="trust-story__dots" />

            <div aria-hidden className="trust-story__ambient" />

            <div className="trust-story__content">
              <p className="trust-story__eyebrow">
                <span aria-hidden className="trust-story__rule" />
                Built on trust
              </p>

              <p className="trust-story__statement">
                <span
                  className="trust-story__line trust-story__line--strong"
                  style={{ "--line": 0 } as CSSProperties}
                >
                  We help businesses
                </span>

                <span
                  className="trust-story__line trust-story__line--soft"
                  style={{ "--line": 1 } as CSSProperties}
                >
                  move forward with
                </span>

                <span
                  className="trust-story__line trust-story__line--strong"
                  style={{ "--line": 2 } as CSSProperties}
                >
                  digital solutions built
                </span>

                <span
                  className="trust-story__line trust-story__line--soft"
                  style={{ "--line": 3 } as CSSProperties}
                >
                  to deliver, support
                </span>

                <span
                  className="trust-story__line trust-story__line--soft"
                  style={{ "--line": 4 } as CSSProperties}
                >
                  and{" "}
                  <em className="trust-story__accent">
                    grow.
                  </em>
                </span>
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="trust-companies">
            <div className="trust-companies__top">
              <p className="trust-companies__eyebrow">
                <span aria-hidden className="trust-companies__rule" />
                Trusted across Mauritius
              </p>

              <ul className="trust-companies__list">
                {CLIENTS.map((name, index) => (
                  <li
                    key={name}
                    className="trust-company"
                    style={{ "--i": index } as CSSProperties}
                  >
                    <span
                      aria-hidden
                      className="trust-company__dot"
                    />

                    <span className="trust-company__name">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews directly below companies */}
            <ul
              className="trust-ratings"
              aria-label="Customer trust indicators"
            >
              {TRUST_SIGNALS.map((rating, index) => (
                <li
                  key={rating.label}
                  className="trust-rating"
                  style={{ "--i": index } as CSSProperties}
                >
                  <span className="trust-rating__label">
                    {rating.label}
                  </span>

                  <FiveStars />

                  <span className="trust-rating__value">
                    {rating.value}
                  </span>

                  <span className="sr-only">
                    {rating.srLabel}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;