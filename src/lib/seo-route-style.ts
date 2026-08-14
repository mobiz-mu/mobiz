import type { AccentId } from "@/lib/accents";
import type { ServiceDivisionId } from "@/lib/navigation";
import type { SeoLandingPageKey } from "@/lib/seoLandingPages";
import type { BusinessSeoPageKey } from "@/lib/businessSeoPages";

/**
 * Presentation mapping for every SEO route.
 *
 * Keeping this in one table is what stops 29 near-identical page files from
 * each inventing their own colour and visual. It also makes the colour
 * discipline auditable at a glance: website work is blue, marketing is yellow,
 * accounting is green, stock is emerald, and red is reserved for Mobiz-owned
 * territory (AI, software, business solutions).
 */

export type SeoStyle = {
  accent: AccentId;
  division: ServiceDivisionId;
};

export const NATIONAL_SEO_STYLE: Record<SeoLandingPageKey, SeoStyle> = {
  "website-design-mauritius": { accent: "blue", division: "website-design-development" },
  "ecommerce-website-mauritius": { accent: "blue", division: "website-design-development" },
  "digital-marketing-mauritius": { accent: "yellow", division: "digital-marketing" },
  "seo-services-mauritius": { accent: "sky", division: "digital-marketing" },
  "accounting-services-mauritius": { accent: "green", division: "accounting-tax-returns" },
  "vat-filing-mauritius": { accent: "green", division: "accounting-tax-returns" },
  "company-registration-mauritius": { accent: "red", division: "business-solutions" },
};

export const BUSINESS_SEO_STYLE: Record<BusinessSeoPageKey, SeoStyle> = {
  // Industry websites — all website work, so all blue.
  "car-rental-website-mauritius": { accent: "blue", division: "website-design-development" },
  "booking-website-mauritius": { accent: "blue", division: "website-design-development" },
  "tour-operator-website-mauritius": { accent: "blue", division: "website-design-development" },
  "hotel-website-mauritius": { accent: "blue", division: "website-design-development" },
  "villa-booking-website-mauritius": { accent: "blue", division: "website-design-development" },
  "real-estate-website-mauritius": { accent: "blue", division: "website-design-development" },
  "restaurant-website-mauritius": { accent: "blue", division: "website-design-development" },
  "salon-website-mauritius": { accent: "blue", division: "website-design-development" },
  "doctor-clinic-website-mauritius": { accent: "blue", division: "website-design-development" },
  "school-website-mauritius": { accent: "blue", division: "website-design-development" },
  "construction-website-mauritius": { accent: "blue", division: "website-design-development" },
  "accounting-firm-website-mauritius": { accent: "green", division: "website-design-development" },
  "law-firm-website-mauritius": { accent: "blue", division: "website-design-development" },
  "ecommerce-store-mauritius": { accent: "blue", division: "website-design-development" },
  "custom-website-mauritius": { accent: "blue", division: "website-design-development" },

  // Software and systems — the visual world changes with the subject.
  "web-application-development-mauritius": { accent: "red", division: "business-solutions" },
  "accounting-software-mauritius": { accent: "green", division: "accounting-tax-returns" },
  "invoice-software-mauritius": { accent: "green", division: "accounting-tax-returns" },
  "inventory-management-system-mauritius": { accent: "emerald", division: "warehousing-inventory" },
  "stock-management-system-mauritius": { accent: "emerald", division: "warehousing-inventory" },
  "crm-software-mauritius": { accent: "red", division: "business-solutions" },
  "booking-system-mauritius": { accent: "red", division: "business-solutions" },
};
