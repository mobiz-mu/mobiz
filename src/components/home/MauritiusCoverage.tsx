import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cities, serviceTemplates } from "@/lib/cityServicePages";
import { CONTACT_AREA_SERVED } from "@/lib/site";

/**
 * Local coverage.
 *
 * Links straight into the city × service landing pages, so this section is a
 * real part of the internal linking structure rather than decoration.
 *
 * Wording is careful: Mobiz *works with* businesses in these towns. It does not
 * claim a physical office in any of them, because that would not be true.
 */
export function MauritiusCoverage() {
  const websiteService = serviceTemplates["website-design"];

  return (
    <Section spacing="default" className="overflow-hidden bg-ink-900" aria-labelledby="coverage-heading">
      <span aria-hidden className="absolute inset-0 tech-grid" />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 h-[500px] w-[600px] -translate-y-1/2 blur-3xl"
        style={{
          background: "radial-gradient(ellipse, rgba(192,24,34,0.12), transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal direction="left">
            <SectionHeading
              id="coverage-heading"
              eyebrow="Across Mauritius"
              title="Working with businesses island-wide."
              description="From Port Louis to Grand Baie, we work with businesses across Mauritius — and support clients in Rodrigues and Réunion."
            />

            <ul className="mt-7 flex flex-wrap gap-2">
              {CONTACT_AREA_SERVED.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-xs font-medium text-text-body"
                >
                  <MapPin aria-hidden className="size-3 shrink-0 text-brand" />
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-surface-0 p-5 sm:p-7">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-widest text-text-muted">
                Website design by town
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${websiteService.key}-${city.slug}`}
                      className="group flex min-h-11 items-center gap-2.5 rounded-lg border border-transparent px-3 py-2.5 transition-colors hover:border-line hover:bg-surface-1"
                    >
                      <span
                        aria-hidden
                        className="size-1.5 shrink-0 rounded-full bg-brand/50 transition-colors group-hover:bg-brand"
                      />
                      <span className="min-w-0 flex-1 truncate text-sm text-text-body transition-colors group-hover:text-text-primary">
                        {city.name}
                      </span>
                      <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-text-faint">
                        {city.region.split(" ")[0]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-line-faint pt-4 text-xs leading-relaxed text-text-muted">
                We also cover SEO and accounting services for each of these areas — see{" "}
                <Link href="/mauritius-services" className="text-brand-mid hover:underline">
                  all Mauritius services
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default MauritiusCoverage;
