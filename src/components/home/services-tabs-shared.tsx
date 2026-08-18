import {
  Cpu,
  Globe2,
  Package,
  ReceiptText,
  Search,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ACCENTS, type AccentId } from "@/lib/accents";

/**
 * Shared between `ServicesTabsPoster` (server, resting state) and
 * `ServicesTabs` (client, full interactivity) so the six-division data and
 * decorative sub-components exist in exactly one place. Neither file
 * duplicates this — a poster that quietly drifted from the real data would be
 * worse than no poster at all.
 */

export type ServiceTab = {
  id: string;
  num: string;
  shortLabel: string;
  label: string;
  description: string;
  href: string;
  accent: AccentId;
  icon: LucideIcon;
  highlights: string[];
  tags: string[];
  image: string;
  imageAlt: string;
};

export const SERVICES: ServiceTab[] = [
  {
    id: "website-design-development",
    num: "01",
    shortLabel: "Websites",
    label: "Website Design & Development",
    description:
      "Modern websites built around your business, your customers and the way people search, browse and enquire in Mauritius.",
    href: "/services/website-design-development",
    accent: "blue",
    icon: Globe2,
    highlights: [
      "Custom mobile-first design",
      "Built for speed and Core Web Vitals",
      "WhatsApp enquiry integration",
      "SEO structure from day one",
    ],
    tags: ["Next.js", "E-commerce", "Web apps", "SEO-ready"],
    image: "/images/services/tabs/web-mobiz.webp",
    imageAlt: "Mobiz website design and development services",
  },
  {
    id: "digital-marketing",
    num: "02",
    shortLabel: "Marketing",
    label: "Digital Marketing",
    description:
      "Reach more of the right customers with structured digital campaigns designed around visibility, enquiries and measurable business growth.",
    href: "/services/digital-marketing",
    accent: "yellow",
    icon: TrendingUp,
    highlights: [
      "Local and national campaigns",
      "Google Ads management",
      "Social media campaigns",
      "Monthly performance reporting",
    ],
    tags: ["Google Ads", "Social media", "Lead generation", "Analytics"],
    image: "/images/services/tabs/marketing-mobiz.webp",
    imageAlt: "Mobiz digital marketing and lead generation services",
  },
  {
    id: "seo-services",
    num: "03",
    shortLabel: "SEO",
    label: "SEO & Search Visibility",
    description:
      "Improve how your business appears in local search so people already looking for your products or services can find you more easily.",
    href: "/seo-services-mauritius",
    accent: "red",
    icon: Search,
    highlights: [
      "Local Mauritius search optimisation",
      "Technical SEO foundations",
      "Keyword and content optimisation",
      "Organic visibility reporting",
    ],
    tags: ["Local SEO", "Technical SEO", "Keywords", "Organic traffic"],
    image: "/images/services/tabs/seo-mobiz.webp",
    imageAlt: "Mobiz SEO and search visibility services",
  },
  {
    id: "accounting-tax-returns",
    num: "04",
    shortLabel: "Accounting",
    label: "Accounting & Tax Returns",
    description:
      "Stay organised with practical accounting, payroll, VAT and reporting support built around the needs of Mauritian businesses.",
    href: "/services/accounting-tax-returns",
    accent: "green",
    icon: ReceiptText,
    highlights: [
      "VAT registration and filing",
      "Payroll processing",
      "MRA compliance support",
      "Monthly financial reporting",
    ],
    tags: ["VAT filing", "Payroll", "MRA", "Invoicing"],
    image: "/images/services/tabs/accounting-mobiz.webp",
    imageAlt: "Mobiz accounting VAT payroll and tax services",
  },
  {
    id: "warehousing-inventory",
    num: "05",
    shortLabel: "Inventory",
    label: "Inventory Management",
    description:
      "Know what you hold, what is moving and what needs attention with structured stock and warehouse processes.",
    href: "/services/warehousing-inventory",
    accent: "emerald",
    icon: Package,
    highlights: [
      "Barcode and SKU systems",
      "Real-time low-stock alerts",
      "Supplier and purchase tracking",
      "Stock counts and reporting",
    ],
    tags: ["Stock tracking", "Barcodes", "Warehouse", "Reports"],
    image: "/images/services/tabs/inventory-mobiz.webp",
    imageAlt: "Mobiz inventory and warehouse management services",
  },
  {
    id: "business-solutions",
    num: "06",
    shortLabel: "Software & AI",
    label: "Business Software & AI",
    description:
      "Replace repetitive work with practical software, connected workflows and automation designed around how your business actually operates.",
    href: "/services/business-solutions",
    accent: "red",
    icon: Cpu,
    highlights: [
      "Custom business software",
      "Workflow automation",
      "AI-assisted business processes",
      "Connected business systems",
    ],
    tags: ["Business apps", "CRM", "AI automation", "Workflows"],
    image: "/images/services/tabs/software-mobiz.webp",
    imageAlt: "Mobiz business software and AI automation services",
  },
];

export function ServiceIcon3D({
  Icon,
  accent,
}: {
  Icon: LucideIcon;
  accent: AccentId;
}) {
  const color = ACCENTS[accent];

  return (
    <span
      aria-hidden
      className="service-tab-icon"
      style={{ "--service-color": color.hex } as React.CSSProperties}
    >
      <span className="service-tab-icon__depth" />
      <span className="service-tab-icon__face">
        <span className="service-tab-icon__shine" />
        <Icon className="relative z-10 size-6 text-white" strokeWidth={2} />
      </span>
    </span>
  );
}

export function TopWave() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[70px] -translate-y-[97%] sm:h-[92px] lg:h-[116px]"
    >
      <svg viewBox="0 0 1600 140" preserveAspectRatio="none" className="block size-full">
        <path
          d="M0 82 C118 126 180 101 265 113 C350 126 403 149 495 126 C608 98 681 46 794 62 C920 79 968 121 1092 105 C1223 88 1292 31 1394 44 C1484 56 1532 88 1600 73 L1600 140 L0 140 Z"
          fill="#F8F8F6"
        />
      </svg>
    </div>
  );
}

export function BottomWave() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[70px] translate-y-[97%] sm:h-[92px] lg:h-[116px]"
    >
      <svg viewBox="0 0 1600 140" preserveAspectRatio="none" className="block size-full">
        <path
          d="M0 0 L1600 0 L1600 64 C1515 94 1443 77 1362 89 C1250 106 1194 136 1072 119 C946 101 891 58 758 75 C629 92 586 128 453 112 C332 97 283 55 170 70 C96 81 48 105 0 92 Z"
          fill="#F8F8F6"
        />
      </svg>
    </div>
  );
}
