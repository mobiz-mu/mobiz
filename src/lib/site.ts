/**
 * Single source of truth for site-wide constants.
 *
 * Nothing here may be invented — every value is carried from the live Mobiz.mu
 * production site. If a value isn't verified, it does not belong in this file.
 */

export const SITE_URL = "https://mobiz.mu";
export const SITE_NAME = "MoBiz.mu";
export const SITE_TAGLINE = "Build. Market. Manage. Grow.";

/* ── Contact ──────────────────────────────────────────────────────────────── */

export const CONTACT_PHONE_DISPLAY = "+230 5506 8119";
export const CONTACT_PHONE_RAW = "23055068119";
export const CONTACT_PHONE_E164 = "+23055068119";
export const CONTACT_EMAIL = "support@mobiz.mu";
export const CONTACT_LOCATION = "Mauritius";
export const CONTACT_GEO = { lat: -20.3484, lng: 57.5522 } as const;
export const CONTACT_GEO_LABEL = "-20.3484° S, 57.5522° E";

export const CONTACT_AREA_SERVED = ["Mauritius", "Rodrigues", "Réunion"] as const;

export const CONTACT_BUSINESS_FOCUS =
  "Websites, marketing, accounting, warehousing & inventory, and business solutions";

export const CONTACT_SERVICE_OPTIONS = [
  "Website Design & Development",
  "Digital Marketing",
  "Accounting & Tax Returns",
  "Warehousing & Inventory",
  "Business Solutions",
  "Monthly Packages",
  "Something else",
] as const;

export type ContactServiceOption = (typeof CONTACT_SERVICE_OPTIONS)[number];

/* ── WhatsApp ─────────────────────────────────────────────────────────────── */

export const WHATSAPP_BASE_URL = `https://wa.me/${CONTACT_PHONE_RAW}`;

/**
 * Build a WhatsApp deep link with a prefilled message.
 *
 * Every CTA passes page/service context so the enquiry arrives already framed,
 * rather than as an anonymous "Hello".
 */
export function whatsappUrl(message?: string): string {
  if (!message) return WHATSAPP_BASE_URL;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello Mobiz, I would like to discuss my business needs.";

/* ── Social ───────────────────────────────────────────────────────────────── */

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/mobiz.mu/" },
  { name: "Instagram", href: "https://www.instagram.com/mobiz.mu/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/mobiz-mu/" },
  { name: "TikTok", href: "https://www.tiktok.com/@mobiz.mu" },
] as const;

/* ── Helpers ──────────────────────────────────────────────────────────────── */

/** Absolute URL for canonicals, OG tags and JSON-LD. */
export function absoluteUrl(path = "/"): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
