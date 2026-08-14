import { portfolioItems } from "@/lib/portfolio";

/**
 * Client marquee.
 *
 * Names come from the real portfolio data, so this is a factual statement of who
 * Mobiz has worked with — no invented logos, no fabricated counts.
 *
 * The strip is duplicated once and translated by exactly -50%, which is what
 * makes the loop seamless. `aria-hidden` on the duplicate stops a screen reader
 * reading the list twice.
 */
export function TrustedBy() {
  const clients = portfolioItems.map((item) => item.title);

  return (
    <section
      aria-labelledby="trusted-by-heading"
      className="relative overflow-hidden border-y border-line-faint bg-ink-900 py-14"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-16">
        <h2
          id="trusted-by-heading"
          className="mb-9 text-center font-mono text-[9px] uppercase tracking-widest text-text-muted"
        >
          Trusted by businesses across Mauritius
        </h2>

        <div className="relative overflow-hidden">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-ink-900 to-transparent sm:w-24"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-ink-900 to-transparent sm:w-24"
          />

          <div className="marquee-left flex w-max">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex shrink-0"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {clients.map((name) => (
                  <li key={`${copy}-${name}`} className="mx-8 flex items-center gap-8 sm:mx-10">
                    <span className="whitespace-nowrap text-sm font-semibold text-text-muted">
                      {name}
                    </span>
                    <span
                      aria-hidden
                      className="size-1 shrink-0 rounded-full bg-brand/40"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
