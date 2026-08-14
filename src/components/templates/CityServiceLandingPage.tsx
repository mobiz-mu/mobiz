import { PageHero } from "@/components/page/PageHero";
import {
  BenefitList,
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
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { CityServicePageData } from "@/lib/cityServicePages";
import type { AccentId } from "@/lib/accents";
import type { ServiceDivisionId } from "@/lib/navigation";

/** Which visual world and accent each local service uses. */
const SERVICE_STYLE: Record<
  string,
  { accent: AccentId; division: ServiceDivisionId }
> = {
  "website-design": { accent: "blue", division: "website-design-development" },
  "seo-services": { accent: "yellow", division: "digital-marketing" },
  "accounting-services": { accent: "green", division: "accounting-tax-returns" },
};

/**
 * Template for the 27 city × service pages (`/website-design-port-louis`, …).
 *
 * Every page is generated from structured data, so all 27 are consistent and
 * none is hand-maintained. What varies is genuinely local: the town, its
 * district, the areas it covers, the kinds of businesses actually common there,
 * and links to neighbouring towns.
 *
 * Deliberately NOT emitted: LocalBusiness schema with a street address, or any
 * copy implying Mobiz has an office in the town. Mobiz serves these areas — it
 * does not have premises in each of them, and the schema must not claim it does.
 */
export function CityServiceLandingPage({ data }: { data: CityServicePageData }) {
  const style = SERVICE_STYLE[data.service.key] ?? {
    accent: "red" as AccentId,
    division: "website-design-development" as ServiceDivisionId,
  };

  const path = `/${data.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: data.service.nationalLabel, href: data.service.nationalHref },
    { label: data.city.name },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    serviceType: data.primaryKeyword,
    description: data.metaDescription,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: {
      "@type": "City",
      name: data.city.name,
      containedInPlace: { "@type": "Country", name: "Mauritius" },
    },
  };

  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={breadcrumbs}
        accent={style.accent}
        visual={<ServiceVisual division={style.division} />}
        bullets={data.city.areas.slice(0, 4)}
        primaryCta={{ label: "Get a quote", href: "/contact" }}
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

      <ProseSection
        eyebrow={`In ${data.city.name}`}
        title={data.localContextTitle}
        paragraphs={data.localContextParagraphs}
      />

      <IndustryList
        eyebrow="Local businesses"
        title={`Businesses we work with in ${data.city.name}`}
        industries={data.localBusinesses}
        accent={style.accent}
      />

      <FeatureGrid
        title="What's included"
        features={data.features}
        accent={style.accent}
        surface="raised"
      />

      <BenefitList
        title={data.benefitsTitle}
        benefits={data.benefits}
        accent={style.accent}
      />

      <ProcessSteps
        title={data.processTitle}
        steps={data.process}
        accent={style.accent}
      />

      <FAQSection faqs={data.faqs} />

      <InternalLinks
        title="Nearby and related"
        links={data.relatedLinks.map((link) => ({ title: link.title, href: link.href }))}
      />

      <CTASection
        title={`Let's talk about your ${data.service.label.toLowerCase()} in ${data.city.name}`}
        description={data.subtitle}
        primaryLabel="Get a quote"
        whatsappMessage={data.whatsappText}
      />

      <JsonLd data={serviceSchema} />
      {data.faqs.length ? <JsonLd data={buildFaqSchema(data.faqs)} /> : null}
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}

export default CityServiceLandingPage;
