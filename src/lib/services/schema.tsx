import type { ServiceFaq, ServicePageContent } from "@/lib/services/types";
import { CONTACT_AREA_SERVED, SITE_NAME, SITE_URL } from "@/lib/site";

export { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
export type { BreadcrumbItem } from "@/lib/breadcrumbs";

export function buildServiceSchema(content: ServicePageContent, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: [...CONTACT_AREA_SERVED],
    serviceType: name,
    url: `${SITE_URL}${content.path}`,
    description: content.metaDescription,
  };
}

export function buildFaqSchema(faqs: ServiceFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Renders a JSON-LD block. Server-only — never pass user input here. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
