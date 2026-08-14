import { Check, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQSection } from "@/components/ui/FAQSection";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ServiceVisual } from "@/components/visual/ServiceVisual";
import { JsonLd, buildFaqSchema } from "@/lib/services/schema";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { LEAD_SERVICE_OPTIONS, type LeadMagnetData } from "@/lib/leadMagnets";
import type { AccentId } from "@/lib/accents";
import { ACCENTS } from "@/lib/accents";
import type { ServiceDivisionId } from "@/lib/navigation";

type LeadMagnetPageProps = {
  data: LeadMagnetData;
  accent: AccentId;
  visualDivision: ServiceDivisionId;
};

/**
 * Template for the three free-offer conversion pages.
 *
 * Form-first: the hero and the form sit together above the fold on desktop and
 * the form is the first thing after the hero on mobile, so the conversion action
 * is never buried under explanatory copy.
 *
 * The copy is migrated from the live site and describes what the visitor
 * receives. It promises a review, not an outcome — no guaranteed rankings,
 * leads, revenue or growth appear anywhere on these pages, and none should be
 * added.
 */
export function LeadMagnetPage({ data, accent, visualDivision }: LeadMagnetPageProps) {
  const { onDark } = ACCENTS[accent];
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: data.eyebrow }];

  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.headline}
        subtitle={data.subheadline}
        breadcrumbs={breadcrumbs}
        accent={accent}
        background="full"
        bullets={data.trust}
        visual={<ServiceVisual division={visualDivision} />}
      />

      {/* Form + what you get, side by side. */}
      <Section spacing="default" className="bg-ink-900">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal direction="left">
              <div className="glow-card p-6 sm:p-8" style={{ ["--glow-hue" as string]: ACCENTS[accent].rgb }}>
                <span aria-hidden className="glow-blob absolute -right-16 -top-24" />
                <div className="relative">
                  <h2 className="mb-2 text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                    Request it now
                  </h2>
                  <p className="mb-7 text-sm leading-relaxed text-text-secondary">
                    Send us your details and we will come back to you on WhatsApp.
                  </p>
                  <EnquiryForm
                    intro={data.whatsappIntro}
                    submitLabel={data.submitLabel}
                    defaultService={data.defaultService}
                    serviceOptions={LEAD_SERVICE_OPTIONS}
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <SectionHeading eyebrow="What you get" title="What's included" accent={accent} />
              <ul className="mt-8 space-y-3">
                {data.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 rounded-lg border border-line bg-surface-0 px-4 py-3.5"
                  >
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0" style={{ color: onDark }} />
                    <span className="text-sm leading-relaxed text-text-body">{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex items-start gap-3 rounded-lg border border-line bg-surface-0 px-4 py-3.5">
                <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-text-muted" />
                <span className="text-xs leading-relaxed text-text-muted">
                  We use your details only to prepare and discuss this request. No
                  newsletters, no passing your information on.
                </span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FAQSection faqs={data.faqs} />

      <InternalLinks
        title="Related services"
        links={data.relatedLinks.map((link) => ({ title: link.title, href: link.href }))}
      />

      <CTASection
        title={data.ctaLabel}
        description={data.subheadline}
        primaryLabel="Get in touch"
        whatsappMessage={data.whatsappIntro}
      />

      {data.faqs.length ? <JsonLd data={buildFaqSchema(data.faqs)} /> : null}
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}

export default LeadMagnetPage;
