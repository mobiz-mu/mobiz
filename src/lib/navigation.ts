import type { ComponentType } from "react";
import {
  BriefcaseBusiness,
  Globe2,
  Megaphone,
  ReceiptText,
  Warehouse,
} from "lucide-react";
import type { AccentId } from "@/lib/accents";

export type NavLink = {
  title: string;
  href: string;
};

/**
 * The five core service divisions. Single source of truth for the desktop mega
 * menu, mobile navigation, footer service links, homepage service sections and
 * the AI assistant's knowledge of what Mobiz sells — do not hardcode a second
 * copy of this list anywhere.
 */
export type ServiceDivisionId =
  | "website-design-development"
  | "digital-marketing"
  | "accounting-tax-returns"
  | "warehousing-inventory"
  | "business-solutions";

export type ServiceDivision = {
  id: ServiceDivisionId;
  /** Two-digit index used as the technical eyebrow across the site. */
  num: string;
  label: string;
  /** Short chip-friendly label for tight spaces (hero chips, breadcrumbs). */
  shortLabel: string;
  href: string;
  description: string;
  /** One-line menu blurb — shorter than `description`. */
  tagline: string;
  icon: ComponentType<{ className?: string; size?: number | string }>;
  accent: AccentId;
};

export const serviceDivisions: ServiceDivision[] = [
  {
    id: "website-design-development",
    num: "01",
    label: "Website Design & Development",
    shortLabel: "Websites",
    href: "/services/website-design-development",
    description:
      "Executive websites, landing pages and mobile-first builds designed to elevate your brand and convert better.",
    tagline: "Fast, modern websites built to convert",
    icon: Globe2,
    accent: "blue",
  },
  {
    id: "digital-marketing",
    num: "02",
    label: "Digital Marketing",
    shortLabel: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "SEO, Meta Ads, Google Ads and content strategies built for visibility, leads and long-term growth.",
    tagline: "Get found on Google, grow your audience",
    icon: Megaphone,
    accent: "yellow",
  },
  {
    id: "accounting-tax-returns",
    num: "03",
    label: "Accounting & Tax Returns",
    shortLabel: "Accounting",
    href: "/services/accounting-tax-returns",
    description:
      "Bookkeeping, VAT, statutory filing and tax support delivered with structure, clarity and business accuracy.",
    tagline: "VAT, payroll and MRA compliance",
    icon: ReceiptText,
    accent: "green",
  },
  {
    id: "warehousing-inventory",
    num: "04",
    label: "Warehousing & Inventory",
    shortLabel: "Inventory",
    href: "/services/warehousing-inventory",
    description:
      "Stock counting, warehouse organisation, inventory systems and operational consulting to keep operations running smoothly.",
    tagline: "Stock tracking, barcodes and reporting",
    icon: Warehouse,
    accent: "emerald",
  },
  {
    id: "business-solutions",
    num: "05",
    label: "Business Solutions",
    shortLabel: "Business Plans",
    href: "/services/business-solutions",
    description:
      "Brand identity, business documents, presentations and premium support for businesses that want to look established.",
    tagline: "Plans, registration and AI automation",
    icon: BriefcaseBusiness,
    accent: "red",
  },
];

export function getServiceDivision(id: ServiceDivisionId): ServiceDivision {
  const division = serviceDivisions.find((d) => d.id === id);
  if (!division) throw new Error(`Unknown service division: ${id}`);
  return division;
}

/** Primary header links, in priority order (the header shows the first five). */
export const mainNavLinks: NavLink[] = [
  { title: "Monthly Packages", href: "/monthly-packages" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Why MoBiz.mu", href: "/why-us" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];

/** Secondary links surfaced in the mobile menu and footer, not the desktop bar. */
export const secondaryNavLinks: NavLink[] = [
  { title: "What Clients Value", href: "/testimonials" },
  { title: "Mauritius Solutions", href: "/mauritius-services" },
  { title: "Careers", href: "/careers" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact Us", href: "/contact" },
];
