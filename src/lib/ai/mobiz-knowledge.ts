/**
 * Grounded knowledge for the Mobiz.mu assistant.
 *
 * Facts that already exist as typed application data (package names/prices, the
 * five service divisions, the WhatsApp number) are IMPORTED, not re-typed, so
 * there is a single source of truth. The approved service catalogues below are
 * the website's own service lists expressed compactly for the model.
 */
import { serviceDivisions } from "@/lib/navigation";
import {
  MONTHLY_PACKAGES,
  WHATSAPP_NUMBER,
  SITE_URL,
} from "@/lib/monthly-packages";
import { CONTACT_EMAIL } from "@/lib/site";

export const AI_WHATSAPP_NUMBER = WHATSAPP_NUMBER;
export const AI_SITE_URL = SITE_URL;
export const AI_CONTACT_EMAIL = CONTACT_EMAIL;

/** Approved service catalogue, grouped by the five divisions. */
const SERVICE_CATALOGUE: Record<string, string[]> = {
  "Website Design & Development": [
    "Business & corporate websites",
    "E-commerce stores",
    "Website redesign, maintenance & speed optimisation",
    "Mobile-responsive & multilingual websites",
    "Next.js / React development & custom web apps / SaaS",
    "Booking systems, payment integrations, WhatsApp integrations",
    "Technical SEO built into the build",
  ],
  "Digital Marketing": [
    "SEO & local SEO",
    "Google Business Profile & Google Ads",
    "Facebook, Instagram & Meta Ads",
    "Social media management & content creation",
    "Lead-generation campaigns, marketing creatives",
    "Landing pages & conversion optimisation",
  ],
  "Accounting & Tax Returns": [
    "Bookkeeping, monthly accounting, bank reconciliation",
    "Expense tracking & financial reporting",
    "VAT support, PAYE support, MRA compliance support",
    "Individual & company tax returns",
    "Financial forecasting & budgeting",
  ],
  "Warehousing & Inventory": [
    "Physical stock counting, cycle counting, inventory verification",
    "Stock reconciliation & variance analysis",
    "Damaged/expired stock identification",
    "Warehouse organisation (rack/bin/SKU), barcode systems",
    "Inventory software, stock dashboards, reorder levels",
    "Warehouse process audits, SOPs, inventory KPI support",
    "(Operations & systems support — NOT physical warehouse-space rental)",
  ],
  "Business Solutions": [
    "Business plans, pitch decks, investor & PowerPoint presentations",
    "Company profiles, service proposals, tender documents",
    "Market research, competitor analysis, pricing strategy",
    "Business processes & SOPs",
    "CRM, accounting software, inventory software, booking systems",
    "Workflow automation, AI business assistants, custom business software",
  ],
};

function buildDivisionSection(): string {
  return serviceDivisions
    .map((d) => {
      const items = SERVICE_CATALOGUE[d.label] ?? [];
      const lines = items.map((i) => `  - ${i}`).join("\n");
      return `• ${d.label} (${AI_SITE_URL}${d.href})\n${lines}`;
    })
    .join("\n");
}

function buildPackageSection(): string {
  return MONTHLY_PACKAGES.map(
    (p) => `• ${p.name}: ${p.priceLabel}, ${p.commitment}. ${p.description}`,
  ).join("\n");
}

/**
 * Returns the compact grounded-knowledge block injected into the system prompt.
 * Prices come straight from MONTHLY_PACKAGES, so they can never drift.
 */
export function buildKnowledgeBlock(): string {
  return [
    "MOBIZ.MU — WHAT IT IS",
    "Mobiz.mu provides business services for Mauritius (and, case by case, Rodrigues/Réunion) across five divisions:",
    "",
    buildDivisionSection(),
    "",
    "MONTHLY WEBSITE PACKAGES (fixed, approved prices — 12-month subscription):",
    buildPackageSection(),
    "Hosting is included in every package. The domain name is NOT included (available as an add-on). Add-ons are available; their price is confirmed after a requirements review. Package checkout/enquiry is completed over WhatsApp.",
    "",
    "CONTACT:",
    `WhatsApp: +${AI_WHATSAPP_NUMBER}  |  Email: ${AI_CONTACT_EMAIL}  |  Site: ${AI_SITE_URL}`,
    "Key pages: /services, /monthly-packages, /portfolio, /contact, /about, /faq.",
  ].join("\n");
}
