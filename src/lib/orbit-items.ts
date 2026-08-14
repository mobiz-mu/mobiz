import type { OrbitItem } from "@/components/visual/OrbitScene";

/**
 * The eight services that travel the hero's Tech Orbit ring.
 *
 * Accent colours follow the fixed category mapping in `@/lib/accents`, so a
 * service is the same colour here as it is in the mega menu, on its service
 * page and in the AI assistant.
 *
 * TODO: Replace the card imagery with final Mobiz service photography.
 * These currently reuse the existing production service-card artwork.
 */
export const HERO_ORBIT_ITEMS: OrbitItem[] = [
  {
    id: "ecommerce",
    label: "E-Commerce",
    sub: "Online Store",
    accent: "blue",
    image: "/images/services/cards/website-design-development.webp",
  },
  {
    id: "seo",
    label: "SEO",
    sub: "Get Found",
    accent: "sky",
    image: "/images/services/cards/digital-marketing-seo.webp",
  },
  {
    id: "marketing",
    label: "Marketing",
    sub: "Lead Generation",
    accent: "yellow",
    image: "/images/portfolio/cards/digital-marketing-portfolio.webp",
  },
  {
    id: "accounting",
    label: "Accounting",
    sub: "VAT Ready",
    accent: "green",
    image: "/images/services/cards/accounting-tax-services.webp",
  },
  {
    id: "inventory",
    label: "Inventory",
    sub: "Stock Control",
    accent: "emerald",
    image: "/images/services/cards/logistics-import-export.webp",
  },
  {
    id: "ai",
    label: "AI Solutions",
    sub: "Automation",
    accent: "red",
    image: "/images/services/cards/business-software-automation.webp",
  },
  {
    id: "branding",
    label: "Branding",
    sub: "Business Identity",
    accent: "red",
    image: "/images/services/cards/branding-business-solutions.webp",
  },
  {
    id: "websites",
    label: "Websites",
    sub: "Web Platforms",
    accent: "blue",
    image: "/images/portfolio/cards/website-portfolio.webp",
  },
];
