import { PageHero } from "@/components/page/PageHero";
import {
  BenefitList,
  FeatureGrid,
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
import type { BusinessSeoPageData } from "@/lib/businessSeoPages";
import type { AccentId } from "@/lib/accents";
import type { ServiceDivisionId } from "@/lib/navigation";

type BusinessSeoLandingPageProps = {
  data: BusinessSeoPageData;
  accent: AccentId;
  visualDivision: ServiceDivisionId;
};

/**
 * Template for the industry and software SEO pages (`/restaurant-website-
 * mauritius`, `/crm-software-mauritius`, …) — 22 routes in total.
 *
 * One template, but each page reads differently because the accent, the hero
 * visual world and every line of copy come from that page's own record in
 * `businessSeoPages.ts`. A restaurant page gets a booking-shaped story and a
 * blue website world; an inventory page gets a stock-shaped story and a green
 * warehouse world.
 */
export function BusinessSeoLandingPage({
  data,
  accent,
  visualDivision,
}: BusinessSeoLandingPageProps) {
  const path = `/${data.slug}`;
  const whatsappMessage = `Hello Mobiz, I am interested in ${data.primaryKeyword}.`;

  const breadcrumbs = [{ label: "Home", href: "/" }, { label: data.eyebrow }];

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
        bullets={data.heroBullets}
        primaryCta={{ label: "Get a quote", href: "/contact" }}
        whatsappMessage={whatsappMessage}
        note={data.priceLabel}
        background="full"
      />

      <ProseSection
        eyebrow="Overview"
        title={data.overviewTitle}
        paragraphs={data.overviewParagraphs}
        surface="raised"
      />

      <FeatureGrid title={data.featuresTitle} features={data.features} accent={accent} />

      <BenefitList title={data.benefitsTitle} benefits={data.benefits} accent={accent} />

      <ProcessSteps title={data.processTitle} steps={data.process} accent={accent} />

      <FAQSection faqs={data.faqs} />

      <InternalLinks
        title="Related solutions"
        links={data.relatedLinks.map((link) => ({ title: link.title, href: link.href }))}
      />

      <CTASection
        title="Ready to get started?"
        description={data.subtitle}
        primaryLabel="Get a quote"
        whatsappMessage={whatsappMessage}
      />

      <JsonLd data={serviceSchema} />
      {data.faqs.length ? <JsonLd data={buildFaqSchema(data.faqs)} /> : null}
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}

export default BusinessSeoLandingPage;
