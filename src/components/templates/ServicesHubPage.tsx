import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { Reveal } from "@/components/motion/Reveal";
import { OrbitScene } from "@/components/visual/OrbitScene";
import { ServiceVisual } from "@/components/visual/ServiceVisual";
import { JsonLd } from "@/lib/services/schema";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/breadcrumbs";
import { serviceDivisions } from "@/lib/navigation";
import { ACCENTS } from "@/lib/accents";
import { HERO_ORBIT_ITEMS } from "@/lib/orbit-items";
import { cn } from "@/lib/utils";

type ServicesHubPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  /** Extra links shown at the foot — used by /mauritius-services for local pages. */
  relatedLinks?: { title: string; href: string; description?: string }[];
  relatedTitle?: string;
};

/**
 * Services discovery.
 *
 * Deliberately not a card directory: the hero carries the full Tech Orbit so
 * the five divisions read as one connected system, then each division gets a
 * full-width alternating panel with its own visual world. That gives the page a
 * rhythm rather than a grid.
 */
export function ServicesHubPage({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  relatedLinks,
  relatedTitle = "Popular services",
}: ServicesHubPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        background="full"
        primaryCta={{ label: "Talk to Mobiz", href: "/contact" }}
        whatsappMessage="Hello Mobiz, I would like to know which service is right for my business."
        visual={
          <OrbitScene items={HERO_ORBIT_ITEMS} duration={42} compact />
        }
      />

      <Section spacing="default" className="bg-ink-900">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Five divisions"
              title="What Mobiz does"
              description="Each division stands on its own — and they work better together, because the same team builds and runs them."
            />
          </Reveal>
        </Container>
      </Section>

      {serviceDivisions.map((division, index) => {
        const accent = ACCENTS[division.accent];
        const visualFirst = index % 2 === 1;

        return (
          <Section
            key={division.id}
            spacing="default"
            className={cn(
              "overflow-hidden",
              index % 2 === 0 ? "bg-ink-950" : "bg-ink-900",
            )}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 h-[420px] w-[520px] -translate-y-1/2 blur-3xl"
              style={{
                [visualFirst ? "left" : "right"]: "-8%",
                background: `radial-gradient(ellipse, ${accent.hex}12, transparent 70%)`,
              }}
            />
            <Container className="relative">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal
                  direction={visualFirst ? "right" : "left"}
                  className={cn(visualFirst && "lg:order-2")}
                >
                  <p className="mb-4 flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
                    <span
                      aria-hidden
                      className="size-1.5 shrink-0 rounded-full"
                      style={{ background: accent.hex }}
                    />
                    <span style={{ color: accent.onDark }}>{division.num}</span>
                    <span className="text-text-muted">{division.shortLabel}</span>
                  </p>
                  <h2 className="mb-5 text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.05] tracking-tight text-text-primary text-balance">
                    {division.label}
                  </h2>
                  <p className="mb-8 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
                    {division.description}
                  </p>
                  <Link
                    href={division.href}
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors"
                    style={{
                      borderColor: `${accent.hex}55`,
                      color: accent.onDark,
                      background: `${accent.hex}12`,
                    }}
                  >
                    Explore {division.shortLabel}
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </Reveal>

                <Reveal
                  direction={visualFirst ? "left" : "right"}
                  className={cn(visualFirst && "lg:order-1")}
                >
                  <ServiceVisual division={division.id} />
                </Reveal>
              </div>
            </Container>
          </Section>
        );
      })}

      {relatedLinks?.length ? (
        <InternalLinks title={relatedTitle} links={relatedLinks} />
      ) : null}

      <CTASection
        title="Not sure where to start?"
        description="Tell us what the business needs and we will point you at the right thing — even if that turns out to be only one of these."
        whatsappMessage="Hello Mobiz, I am not sure which service I need. Can you help?"
      />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}

export default ServicesHubPage;
