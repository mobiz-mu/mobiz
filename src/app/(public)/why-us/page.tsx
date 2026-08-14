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
import { ServiceVisual } from "@/components/visual/ServiceVisual";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/services/schema";
import { WHY_US_REASONS, WHY_US_SERVICES, WHY_US_STEPS } from "@/lib/company";
import { serviceDivisions } from "@/lib/navigation";
import { ACCENTS } from "@/lib/accents";

export const metadata: Metadata = buildMetadata({
  title: "Why Choose MoBiz.mu | One Business Partner in Mauritius",
  description:
    "One partner for websites, marketing, accounting, warehousing and inventory, and business solutions — with practical, WhatsApp-first support for Mauritius businesses.",
  path: "/why-us",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Why MoBiz.mu" }];

/**
 * Why us.
 *
 * Structured as an argument, not a feature list: four headline reasons as
 * alternating horizontal panels, then the five divisions each paired with their
 * own visual world, then how an engagement runs.
 *
 * Deliberately no statistics — the source material establishes no client
 * counts, satisfaction scores or outcome figures, so none appear.
 */
export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Mobiz"
        title="One partner who sees the whole business"
        subtitle="Most suppliers solve one problem well. Running a business means several at once — which is exactly the gap Mobiz was built to close."
        breadcrumbs={breadcrumbs}
        background="full"
        primaryCta={{ label: "Talk to Mobiz", href: "/contact" }}
        whatsappMessage="Hello Mobiz, I would like to know why I should work with you."
        visual={<ServiceVisual division="business-solutions" />}
      />

      {/* Four reasons — alternating panels rather than a card grid. */}
      <Section spacing="default" className="bg-ink-900">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="The difference" title="Four reasons businesses stay" />
          </Reveal>

          <StaggerGroup as="ul" stagger={0.1} className="mt-11 space-y-4">
            {WHY_US_REASONS.map((reason, index) => (
              <StaggerItem
                key={reason.title}
                as="li"
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="flex flex-col gap-5 rounded-2xl border border-line bg-surface-0 p-6 transition-colors hover:border-line-strong sm:flex-row sm:items-start sm:gap-7 sm:p-8">
                  <span
                    aria-hidden
                    className="font-mono text-sm text-brand sm:w-12 sm:shrink-0 sm:pt-1"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2.5 text-lg font-bold text-text-primary sm:text-xl">
                      {reason.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
                      {reason.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Five divisions, each with its own visual world. */}
      {WHY_US_SERVICES.map((service, index) => {
        const division = serviceDivisions[index];
        if (!division) return null;
        const accent = ACCENTS[division.accent];
        const visualFirst = index % 2 === 1;

        return (
          <Section
            key={service.title}
            spacing="default"
            className={index % 2 === 0 ? "overflow-hidden bg-ink-950" : "overflow-hidden bg-ink-900"}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 h-[420px] w-[520px] -translate-y-1/2"
              style={{
                [visualFirst ? "left" : "right"]: "-8%",
                background: `radial-gradient(ellipse, ${accent.hex}12, transparent 70%)`,
              }}
            />
            <Container className="relative">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal
                  direction={visualFirst ? "right" : "left"}
                  className={visualFirst ? "lg:order-2" : undefined}
                >
                  <p className="mb-4 flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
                    <span
                      aria-hidden
                      className="size-1.5 shrink-0 rounded-full"
                      style={{ background: accent.hex }}
                    />
                    <span style={{ color: accent.onDark }}>{division.num}</span>
                  </p>
                  <h2 className="mb-5 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.08] tracking-tight text-text-primary text-balance">
                    {service.title}
                  </h2>
                  <p className="max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
                    {service.text}
                  </p>
                </Reveal>
                <Reveal
                  direction={visualFirst ? "left" : "right"}
                  className={visualFirst ? "lg:order-1" : undefined}
                >
                  <ServiceVisual division={division.id} />
                </Reveal>
              </div>
            </Container>
          </Section>
        );
      })}

      <ProcessSteps
        eyebrow="How we work"
        title="What working with us looks like"
        steps={WHY_US_STEPS.map((step) => ({
          title: step.title,
          description: step.text,
        }))}
      />

      <InternalLinks
        title="Keep exploring"
        links={[
          { title: "About Mobiz", href: "/about" },
          { title: "What clients value", href: "/testimonials" },
          { title: "Selected work", href: "/portfolio" },
          { title: "Monthly packages", href: "/monthly-packages" },
          { title: "All services", href: "/services" },
          { title: "Common questions", href: "/faq" },
        ]}
      />

      <CTASection
        title="Ready to work with one team?"
        description="Tell us what the business needs. We will tell you honestly whether we are the right fit."
        whatsappMessage="Hello Mobiz, I would like to discuss working with you."
      />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}
