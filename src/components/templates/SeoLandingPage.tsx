import { PageHero } from "@/components/page/PageHero";
import {
  FeatureGrid,
  IndustryList,
  ProcessSteps,
  ProseSection,
} from "@/components/page/ContentBlocks";
import { FAQSection } from "@/components/ui/FAQSection";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { CTASection } from "@/components/ui/CTASection";
import { ServiceVisual } from "@/components/visual/ServiceVisual";
import { JsonLd, buildFaqSchema } from "@/lib/services/schema";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { CONTACT_AREA_SERVED, SITE_NAME, SITE_URL } from "@/lib/site";
import type { SeoLandingPageData } from "@/lib/seoLandingPages";
import type { AccentId } from "@/lib/accents";
import type { ServiceDivisionId } from "@/lib/navigation";

type SeoLandingPageProps = {
  data: SeoLandingPageData;
  accent: AccentId;
  /** Which service world supplies the hero visual. */
  visualDivision: ServiceDivisionId;
};

/**
 * Template for the national SEO landing pages (`/website-design-mauritius`,
 * `/seo-services-mauritius`, …).
 *
 * These pages have to do two jobs at once: rank and read. So the Tech Orbit
 * treatment is concentrated in the hero and the closing CTA, while the body —
 * intro, features, process, FAQ — is calm, high-contrast and server-rendered,
 * with no animation running behind long paragraphs.
 *
 * All copy comes from `seoLandingPages.ts`, which carries the existing
 * production content. Nothing here is generated.
 */
export function SeoLandingPage({ data, accent, visualDivision }: SeoLandingPageProps) {
  const path = `/${data.slug}`;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: data.eyebrow },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    serviceType: data.primaryKeyword,
    description: data.metaDescription,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: [...CONTACT_AREA_SERVED],
  };

  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={breadcrumbs}
        accent={accent}
        visual={<ServiceVisual division={visualDivision} />}
        primaryCta={{ label: data.ctaLabel, href: data.ctaHref }}
        whatsappMessage={data.whatsappText}
        note={data.priceLabel}
        background="full"
      />

      <ProseSection
        eyebrow="Overview"
        title={data.introTitle}
        paragraphs={data.introParagraphs}
        surface="raised"
      />

      <FeatureGrid title={data.featuresTitle} features={data.features} accent={accent} />

      <IndustryList title={data.industriesTitle} industries={data.industries} accent={accent} />

      <ProcessSteps title={data.processTitle} steps={data.process} accent={accent} />

      <FAQSection faqs={data.faqs} />

      <InternalLinks
        title="Related services"
        links={data.relatedServices.map((service) => ({
          title: service.title,
          href: service.href,
        }))}
      />

      <CTASection
        title={data.ctaLabel}
        description={data.subtitle}
        primaryHref={data.ctaHref}
        primaryLabel={data.ctaLabel}
        whatsappMessage={data.whatsappText}
      />

      <JsonLd data={serviceSchema} />
      {data.faqs.length ? <JsonLd data={buildFaqSchema(data.faqs)} /> : null}
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}

export default SeoLandingPage;
