import { SITE_URL } from "@/lib/site";

export type BreadcrumbItem = {
  label: string;
  /** Omitted on the current page — the last crumb is not a link. */
  href?: string;
};

/**
 * BreadcrumbList schema. Only emitted where a real hierarchy exists; the last
 * item deliberately has no `item` URL because it is the page being viewed.
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}
