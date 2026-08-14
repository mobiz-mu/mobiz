import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { ProcessSteps } from "@/components/page/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { OrbitScene } from "@/components/visual/OrbitScene";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/services/schema";
import { ABOUT_COMBINE, ABOUT_PROBLEMS, ABOUT_STEPS } from "@/lib/company";
import { HERO_ORBIT_ITEMS } from "@/lib/orbit-items";
import { ACCENTS, type AccentId } from "@/lib/accents";
import { CONTACT_AREA_SERVED } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About MoBiz.mu | One Business Partner in Mauritius",
  description:
    "MoBiz.mu brings websites, digital marketing, accounting, warehousing and inventory, and business solutions together under one team for businesses in Mauritius.",
  path: "/about",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About" }];

const COMBINE_ACCENTS: AccentId[] = ["blue", "green", "emerald", "red"];

/**
 * About.
 *
 * Editorial rather than card-heavy: an orbit hero, a three-part problem
 * statement set as large type, a four-area capability band, then the engagement
 * process as a timeline.
 *
 * Every claim is migrated from the live site. There is deliberately no founding
 * date, team size, client count or track-record figure anywhere — none of those
 * are established in the source material.
 */
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mobiz"
        title="One team for the things a business actually needs"
        subtitle="Most businesses in Mauritius end up juggling separate suppliers for their website, their marketing, their books and their stock. Mobiz exists to put those in one place."
        breadcrumbs={breadcrumbs}
        background="full"
        primaryCta={{ label: "Talk to Mobiz", href: "/contact" }}
        whatsappMessage="Hello Mobiz, I would like to know more about how you work."
        visual={<OrbitScene items={HERO_ORBIT_ITEMS} duration={44} compact />}
      />

      {/* The problem, set as editorial type rather than three cards. */}
      <Section spacing="default" className="bg-ink-900">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Mobiz exists"
              title="Three problems we kept seeing"
              description="These came up again and again with businesses across the island — and none of them are solved by hiring one more separate supplier."
            />
          </Reveal>

          <div className="mt-12 space-y-10">
            {ABOUT_PROBLEMS.map((problem, index) => (
              <Reveal
                key={problem.title}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="grid gap-4 border-t border-line-faint pt-8 sm:grid-cols-[auto_1fr] sm:gap-10">
                  <span
                    aria-hidden
                    className="font-mono text-sm text-brand sm:w-16"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="max-w-2xl">
                    <h3 className="mb-3 text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                      {problem.title}
                    </h3>
                    <p className="text-base leading-relaxed text-text-secondary text-pretty">
                      {problem.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* What we combine — a four-up band, not a repeat of the card grid. */}
      <Section spacing="default" className="overflow-hidden bg-ink-950">
        <span aria-hidden className="absolute inset-0 tech-grid-fine" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="What we combine"
              title="Four sides of the same business"
            />
          </Reveal>

          <StaggerGroup as="ul" className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_COMBINE.map((item, index) => {
              const accent = ACCENTS[COMBINE_ACCENTS[index] ?? "red"];
              return (
                <StaggerItem key={item.title} as="li" direction="up">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-0 p-6">
                    <span
                      aria-hidden
                      className="mb-4 h-0.5 w-9 rounded-full"
                      style={{ background: accent.hex }}
                    />
                    <h3 className="mb-2.5 text-base font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {item.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <Reveal className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {CONTACT_AREA_SERVED.map((area) => (
                <li
                  key={area}
                  className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-text-body"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="How we work"
        title="What an engagement looks like"
        steps={ABOUT_STEPS.map((step) => ({
          title: step.title,
          description: step.text,
        }))}
      />

      <InternalLinks
        title="Explore Mobiz"
        links={[
          { title: "Why choose Mobiz", href: "/why-us" },
          { title: "Our services", href: "/services" },
          { title: "Selected work", href: "/portfolio" },
          { title: "Monthly packages", href: "/monthly-packages" },
          { title: "What clients value", href: "/testimonials" },
          { title: "Careers", href: "/careers" },
        ]}
      />

      <CTASection
        title="Let's talk about your business"
        description="Tell us where things stand and what you are trying to do next. We will give you a straight recommendation."
        whatsappMessage="Hello Mobiz, I would like to discuss my business."
      />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}
