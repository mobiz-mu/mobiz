export const CONTACT_PHONE_DISPLAY = "+230 5506 8119";
export const CONTACT_PHONE_RAW = "23055068119";
export const CONTACT_EMAIL = "support@mobiz.mu";
export const CONTACT_LOCATION = "Mauritius";

export const CONTACT_WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_RAW}`;

export const CONTACT_SERVICE_OPTIONS = [
  "Website Design",
  "Digital Marketing",
  "Accounting & Tax Returns",
  "Logistics",
  "Branding & Business Solutions",
] as const;

export type ContactServiceOption = (typeof CONTACT_SERVICE_OPTIONS)[number];

export const CONTACT_BUSINESS_FOCUS =
  "Websites, marketing, accounting, logistics, branding, and business support";

export const CONTACT_AREA_SERVED = ["Mauritius", "Rodrigues", "Réunion"] as const;
