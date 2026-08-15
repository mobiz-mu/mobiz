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

function ClientRow({
  clients,
  direction,
}: {
  clients: readonly string[];
  direction: "left" | "right";
}) {
  return (
    <div className="trusted-marquee">
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
            aria-hidden={copy === 1 ? true : undefined}
          >
            {clients.map((name, index) => (
              <li key={`${copy}-${name}`} className="trusted-client">
                <span
                  aria-hidden
                  className={`trusted-client__dot trusted-client__dot--${index % 4}`}
                />

                <span className="trusted-client__name">
                  {name}
                </span>

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
    <section
      aria-labelledby="trusted-by-heading"
      className="trusted-section"
    >
      <div aria-hidden className="trusted-section__grid" />
      <div aria-hidden className="trusted-section__glow" />

      <div className="trusted-section__inner">
        <header className="trusted-section__header">
          <div className="trusted-section__eyebrow">
            <span aria-hidden className="trusted-section__eyebrow-line" />

            <span>Trusted across Mauritius</span>

            <span aria-hidden className="trusted-section__eyebrow-line" />
          </div>

          <h2 id="trusted-by-heading" className="trusted-section__title">
            Businesses that{" "}
            <span>move forward with Mobiz.</span>
          </h2>

          <p className="trusted-section__copy">
            Supporting Mauritian businesses across tourism, retail,
            professional services, education, e-commerce and digital
            operations.
          </p>
        </header>

        <div className="trusted-section__rows">
          <ClientRow clients={ROW_ONE} direction="left" />
          <ClientRow clients={ROW_TWO} direction="right" />
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;