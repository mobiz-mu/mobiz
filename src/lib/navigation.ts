import type { ComponentType } from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  FileSpreadsheet,
  Globe,
  Megaphone,
  Palette,
  ReceiptText,
  Truck,
} from "lucide-react";

export type NavLink = {
  title: string;
  href: string;
};

export type ServiceMenuGroup = {
  title: string;
  items: {
    title: string;
    description: string;
    href: string;
    icon: ComponentType<{ className?: string }>;
  }[];
};

export const mainNavLinks: NavLink[] = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "Why MoBiz.mu", href: "/why-us" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Mauritius Solutions", href: "/mauritius-services" },
  { title: "Careers", href: "/careers" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

export const serviceMenuGroups: ServiceMenuGroup[] = [
  {
    title: "Website & Digital",
    items: [
      {
        title: "Website Design & Development",
        description:
          "Executive websites, landing pages and mobile-first builds designed to elevate your brand and convert better.",
        href: "/services/website-design",
        icon: Globe,
      },
      {
        title: "Digital Marketing",
        description:
          "SEO, Meta Ads, Google Ads and content strategies built for visibility, leads and long-term growth.",
        href: "/services/digital-marketing",
        icon: Megaphone,
      },
    ],
  },
  {
    title: "Operations & Support",
    items: [
      {
        title: "Accounting & Tax Services",
        description:
          "Bookkeeping, VAT, statutory filing and tax support delivered with structure, clarity and business accuracy.",
        href: "/services/accounting-tax-returns",
        icon: ReceiptText,
      },
      {
        title: "Logistics & Delivery",
        description:
          "Import and export setup, sourcing, procurement and logistics support to help operations run smoothly.",
        href: "/services/logistics",
        icon: Truck,
      },
    ],
  },
  {
    title: "Brand & Business",
    items: [
      {
        title: "Branding & Business Solutions",
        description:
          "Brand identity, business documents, presentations and premium support for businesses that want to look established.",
        href: "/services/branding-business-solutions",
        icon: Palette,
      },
    ],
  },
];

export const heroStats = [
  { label: "Executive Services", value: "5+" },
  { label: "Mauritius Focused", value: "100%" },
  { label: "Mobile First", value: "A+" },
];

export const dashboardHighlights = [
  {
    title: "Analytics",
    icon: BarChart3,
    description:
      "Track visitors, traffic patterns and business performance from one executive dashboard.",
  },
  {
    title: "Invoices & Quotations",
    icon: FileSpreadsheet,
    description:
      "Generate polished, professional documents with structured branded output for clients and operations.",
  },
];