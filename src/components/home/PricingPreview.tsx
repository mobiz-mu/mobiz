import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { MONTHLY_PACKAGES } from "@/lib/monthly-packages";
import { ACCENTS, type AccentId } from "@/lib/accents";
import { cn } from "@/lib/utils";

/**
 * Monthly packages summary.
 *
 * Prices, names, badges and feature copy all read from `monthly-packages.ts` —
 * the same verified source the full pricing page and the WhatsApp checkout use.
 * Nothing on this card is written by hand.
 *
 * Only the first two feature groups are shown here; the page itself carries the
 * full breakdown, so the homepage stays scannable.
 */

const ACCENT_BY_PACKAGE: Record<string, AccentId> = {
  starter: "blue",
  business: "red",
  premium: "yellow",
};

export function PricingPreview() {
  return (
    <Section deferPaint spacing="flagship" className="bg-ink-900" aria-labelledby="packages-heading">
      <span aria-hidden className="absolute inset-0 tech-grid" />

      <Container className="relative">
        <Reveal className="mb-12">
          <SectionHeading
            id="packages-heading"
            eyebrow="Monthly website packages"
            title="A complete web presence, on a monthly plan."
            description="Website, hosting, updates and support in one predictable monthly cost — with no large upfront build fee."
          />
        </Reveal>

        <ul className="grid gap-5 lg:grid-cols-3">
          {MONTHLY_PACKAGES.map((pkg, index) => {
            const accentId = ACCENT_BY_PACKAGE[pkg.id] ?? "red";
            const accent = ACCENTS[accentId];
            const featured = Boolean(pkg.badge);

            // Two representative groups keep the homepage card readable.
            const preview = [...pkg.features.website.slice(0, 3), ...pkg.features.seo.slice(0, 2)];

            return (
              <li key={pkg.id} className="flex">
                <Reveal direction="up" delay={index * 0.08} className="flex w-full">
                  <div
                    className={cn(
                      "glow-card flex w-full flex-col p-6 sm:p-7",
                      featured && "lg:-translate-y-3",
                    )}
                    style={{ ["--glow-hue" as string]: accent.rgb }}
                  >
                    {featured ? (
                      <span aria-hidden className="glow-blob absolute -right-16 -top-24" />
                    ) : null}

                    <div className="relative flex flex-1 flex-col">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <h3 className="text-lg font-bold text-text-primary">{pkg.name}</h3>
                        {pkg.badge ? (
                          <span
                            className="rounded-md px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider"
                            style={{
                              border: `1px solid ${accent.hex}70`,
                              color: accent.onDark,
                              background: `${accent.hex}18`,
                            }}
                          >
                            {pkg.badge}
                          </span>
                        ) : null}
                      </div>

                      <p className="mb-1 text-3xl font-bold tracking-tight text-text-primary">
                        {pkg.priceLabel.split("/")[0]}
                        <span className="text-base font-medium text-text-muted">/month</span>
                      </p>
                      <p className="mb-6 text-xs text-text-muted">{pkg.commitment}</p>

                      <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                        {pkg.description}
                      </p>

                      <ul className="mb-7 flex-1 space-y-2.5">
                        {preview.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <Check
                              aria-hidden
                              className="mt-0.5 size-3.5 shrink-0"
                              style={{ color: accent.onDark }}
                            />
                            <span className="text-xs leading-relaxed text-text-body">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/monthly-packages"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors"
                        style={{
                          borderColor: `${accent.hex}55`,
                          color: accent.onDark,
                          background: `${accent.hex}12`,
                        }}
                      >
                        {pkg.ctaLabel}
                        <ArrowRight aria-hidden className="size-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-10 text-center">
          <ButtonLink href="/monthly-packages" withArrow>
            Compare all packages and add-ons
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}

export default PricingPreview;
