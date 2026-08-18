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

/* ── Social share image ───────────────────────────────────────────────────── */

/**
 * The official Open Graph / Twitter card image, 1200x630.
 *
 * JPEG, not PNG. The artwork is photographic — a globe, light trails and a
 * portrait — so the PNG could only hold it by quantising to a 256-colour
 * palette, and still cost 249KB. The same picture as progressive JPEG at
 * quality 88 with 4:4:4 chroma is 174KB: smaller AND no longer banded. 4:4:4
 * matters here because the headline is red-on-black, and subsampled chroma
 * smears exactly that edge. There is no transparency to preserve.
 *
 * JPEG is safe for every Open Graph consumer (Facebook, LinkedIn, X, WhatsApp,
 * Slack); no `type` is declared in the metadata, so the extension is the only
 * contract. Crawlers for WhatsApp, Facebook and LinkedIn require an ABSOLUTE
 * URL, so this is always emitted against the production origin.
 */
export const OG_IMAGE_PATH = "/images/social/og-image.jpg";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT = "Mobiz.mu — digital business solutions in Mauritius";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

/* ── Helpers ──────────────────────────────────────────────────────────────── */

/** Absolute URL for canonicals, OG tags and JSON-LD. */
export function absoluteUrl(path = "/"): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
