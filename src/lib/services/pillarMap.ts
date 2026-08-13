// Maps every supporting SEO landing page to its parent service pillar.
// This is the hub-and-spoke backbone: each supporting page breadcrumbs and
// links UP to one pillar, which establishes a clear intent hierarchy and
// stops the supporting pages from cannibalising each other (or the pillar).

export type Pillar = { label: string; href: string };

const WEBSITE: Pillar = { label: "Website Design & Development", href: "/services/website-design-development" };
const MARKETING: Pillar = { label: "Digital Marketing", href: "/services/digital-marketing" };
const ACCOUNTING: Pillar = { label: "Accounting & Tax Returns", href: "/services/accounting-tax-returns" };
const WAREHOUSING: Pillar = { label: "Warehousing & Inventory", href: "/services/warehousing-inventory" };
const BUSINESS: Pillar = { label: "Business Solutions", href: "/services/business-solutions" };

// Explicit slug → pillar map for the 7 national + 22 business SEO pages.
const PILLAR_BY_SLUG: Record<string, Pillar> = {
  // Website & development intent
  "website-design-mauritius": WEBSITE,
  "custom-website-mauritius": WEBSITE,
  "ecommerce-website-mauritius": WEBSITE,
  "ecommerce-store-mauritius": WEBSITE,
  "car-rental-website-mauritius": WEBSITE,
  "booking-website-mauritius": WEBSITE,
  "tour-operator-website-mauritius": WEBSITE,
  "hotel-website-mauritius": WEBSITE,
  "villa-booking-website-mauritius": WEBSITE,
  "real-estate-website-mauritius": WEBSITE,
  "restaurant-website-mauritius": WEBSITE,
  "salon-website-mauritius": WEBSITE,
  "doctor-clinic-website-mauritius": WEBSITE,
  "school-website-mauritius": WEBSITE,
  "construction-website-mauritius": WEBSITE,
  "accounting-firm-website-mauritius": WEBSITE,
  "law-firm-website-mauritius": WEBSITE,
  "web-application-development-mauritius": WEBSITE,

  // Digital marketing intent
  "digital-marketing-mauritius": MARKETING,
  "seo-services-mauritius": MARKETING,

  // Accounting & tax intent
  "accounting-services-mauritius": ACCOUNTING,
  "vat-filing-mauritius": ACCOUNTING,
  "company-registration-mauritius": ACCOUNTING,

  // Warehousing & inventory intent
  "inventory-management-system-mauritius": WAREHOUSING,
  "stock-management-system-mauritius": WAREHOUSING,

  // Business software / solutions intent
  "accounting-software-mauritius": BUSINESS,
  "crm-software-mauritius": BUSINESS,
  "booking-system-mauritius": BUSINESS,
  "invoice-software-mauritius": BUSINESS,
};

export function pillarForSlug(slug: string): Pillar {
  return PILLAR_BY_SLUG[slug] ?? { label: "All Services", href: "/services" };
}
