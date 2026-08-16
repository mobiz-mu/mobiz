/**
 * Single source of truth for the /monthly-packages page.
 * Package cards, comparison table, selection form, checkout summary and the
 * WhatsApp message all read from this file — never duplicate the content.
 */

export type PackageId = "starter" | "business" | "premium";

export type MonthlyPackage = {
  id: PackageId;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  badge?: string;
  /** Short line shown under the price, e.g. "Everything in Starter, plus:" */
  inherits?: string;
  commitment: string;
  launch: string;
  /** Visual identity used by PackageCard. */
  theme: "navy" | "light" | "luxury";
  ctaLabel: string;
  features: {
    website: string[];
    google: string[];
    seo: string[];
    socialMedia: string[];
    support: string[];
  };
};

export type PackageAddOn = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  category:
    | "website"
    | "marketing"
    | "seo"
    | "branding"
    | "content"
    | "business";
};

export const WHATSAPP_NUMBER = "23055068119";
export const WHATSAPP_DISPLAY = "+230 5506 8119";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/*
 * Re-exported from lib/site so the canonical hostname has exactly one source of
 * truth. This file used to declare its own copy, which would have silently
 * diverged from metadataBase/canonical/sitemap/robots the moment the domain
 * changed.
 */
export { SITE_URL } from "@/lib/site";

export const PAGE_PATH = "/monthly-packages";
export const CURRENCY = "MUR";

/** Price shown for every add-on until Mobiz.mu confirms a fixed rate. */
export const ADDON_PRICE_LABEL = "Price confirmed after requirements review";

export const MONTHLY_PACKAGES: readonly MonthlyPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: 1499,
    priceLabel: "Rs 1,499/month",
    description: "Perfect for startups, freelancers and small businesses.",
    commitment: "12-month subscription",
    launch: "3–5 business days",
    theme: "navy",
    ctaLabel: "Choose Starter",
    features: {
      website: [
        "Professional website",
        "Up to 5 pages",
        "Mobile-responsive design",
        "Premium modern layout",
        "Contact form",
        "WhatsApp button",
        "Google Maps",
        "SSL security",
      ],
      google: [
        "Google Business Profile setup",
        "Google Search Console setup",
        "Google Analytics setup",
      ],
      seo: [
        "Basic on-page SEO",
        "Meta titles and descriptions",
        "Sitemap submission",
        "Basic image optimisation",
      ],
      socialMedia: [
        "Facebook integration",
        "Instagram integration",
        "2 social media posts per month",
      ],
      support: [
        "Hosting included",
        "Monthly backup",
        "Basic technical support",
        "Basic content corrections",
      ],
    },
  },
  {
    id: "business",
    name: "Business",
    price: 2299,
    priceLabel: "Rs 2,299/month",
    badge: "MOST POPULAR",
    description:
      "For growing businesses that need more visibility, content and enquiries.",
    inherits: "Everything in Starter, plus:",
    commitment: "12-month subscription",
    launch: "3–5 business days",
    theme: "light",
    ctaLabel: "Choose Business",
    features: {
      website: [
        "Up to 10 pages",
        "Blog section",
        "Image gallery",
        "Online enquiry forms",
        "Service landing pages",
        "Improved website structure",
      ],
      google: [
        "Google Business Profile optimisation",
        "Business information optimisation",
        "Google Maps visibility improvements",
      ],
      seo: [
        "Monthly SEO improvements",
        "Keyword optimisation",
        "Image SEO",
        "Speed optimisation",
        "Internal-link optimisation",
        "Basic monthly SEO review",
      ],
      socialMedia: [
        "6 professional posts per month",
        "Facebook management",
        "Instagram management",
        "Basic content planning",
      ],
      support: [
        "Monthly website updates",
        "Monthly performance summary",
        "Priority support",
        "Regular backups",
      ],
    },
  },
  {
    id: "premium",
    name: "Premium Growth",
    price: 4999,
    priceLabel: "Rs 4,999/month",
    description:
      "A complete digital growth package for businesses that want maximum online visibility.",
    inherits: "Everything in Business, plus:",
    commitment: "12-month subscription",
    launch: "3–5 business days",
    theme: "luxury",
    ctaLabel: "Choose Premium Growth",
    features: {
      website: [
        "Extended website pages",
        "E-commerce-ready structure",
        "Booking-system support",
        "Custom landing pages",
        "Lead-capture forms",
        "Conversion-focused page sections",
      ],
      google: [
        "Complete Google Business Profile management",
        "Google profile content updates",
        "Google visibility monitoring",
        "Local business optimisation",
      ],
      seo: [
        "Complete monthly SEO",
        "Local SEO",
        "Technical SEO",
        "Competitor analysis",
        "Monthly SEO report",
        "Search-performance review",
      ],
      socialMedia: [
        "12 premium social media posts per month",
        "Facebook, Instagram and LinkedIn",
        "Content planning",
        "Monthly content calendar",
        "TikTok available when agreed with the client",
      ],
      support: [
        "One monthly blog article",
        "Monthly strategy review",
        "Advanced analytics reporting",
        "Lead-generation recommendations",
        "Priority technical support",
        "Priority website updates",
        "Regular security monitoring and backups",
      ],
    },
  },
] as const;

export const FEATURE_GROUP_LABELS: Record<
  keyof MonthlyPackage["features"],
  string
> = {
  website: "Website",
  google: "Google",
  seo: "SEO",
  socialMedia: "Social media",
  support: "Support and hosting",
};

export function getPackage(id: PackageId): MonthlyPackage {
  const found = MONTHLY_PACKAGES.find((p) => p.id === id);
  // `id` is a PackageId, so this can only fail if the package list and the union
  // fall out of sync — a build-time authoring error, not a runtime input problem.
  if (!found) throw new Error(`Unknown monthly package: ${id}`);
  return found;
}

export function isPackageId(value: string): value is PackageId {
  return MONTHLY_PACKAGES.some((p) => p.id === value);
}

/* -------------------------------------------------------------------------- */
/* Add-ons                                                                     */
/* -------------------------------------------------------------------------- */

export const PACKAGE_ADDONS: readonly PackageAddOn[] = [
  {
    id: "domain-registration",
    name: "Domain registration",
    description: "We register and manage your .mu or .com domain for you.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "business",
  },
  {
    id: "extra-pages",
    name: "Additional website pages",
    description: "Extra pages beyond the page count in your package.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "website",
  },
  {
    id: "logo-design",
    name: "Logo design",
    description: "An original logo designed for your business.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "branding",
  },
  {
    id: "branding-package",
    name: "Complete branding package",
    description: "Logo, colours, typography and brand usage guide.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "branding",
  },
  {
    id: "extra-social-posts",
    name: "Additional social media posts",
    description: "More designed posts each month than your package includes.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "marketing",
  },
  {
    id: "google-ads",
    name: "Google Ads management",
    description: "Campaign setup and management. Ad budget billed separately.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "marketing",
  },
  {
    id: "meta-ads",
    name: "Facebook and Instagram Ads management",
    description: "Meta campaign management. Ad budget billed separately.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "marketing",
  },
  {
    id: "ecommerce-setup",
    name: "E-commerce setup",
    description: "Product catalogue, cart and checkout structure.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "website",
  },
  {
    id: "online-payments",
    name: "Online payment integration",
    description: "Connect a payment provider to your website.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "website",
  },
  {
    id: "booking-system",
    name: "Advanced booking system",
    description: "Appointment or reservation booking with availability rules.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "website",
  },
  {
    id: "photography",
    name: "Professional photography",
    description: "A photo session for your products, team or premises.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "content",
  },
  {
    id: "promo-video",
    name: "Promotional video",
    description: "A short video for your website and social channels.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "content",
  },
  {
    id: "extra-blog-article",
    name: "Extra blog article",
    description: "An additional written and published article each month.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "content",
  },
  {
    id: "extra-seo",
    name: "Additional SEO work",
    description: "Deeper optimisation beyond your package scope.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "seo",
  },
  {
    id: "extra-language",
    name: "Additional language",
    description: "A second language version of your website, such as French.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "website",
  },
  {
    id: "copywriting",
    name: "Website copywriting",
    description: "We write your page content so you do not have to.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "content",
  },
  {
    id: "business-email",
    name: "Business email setup",
    description: "Professional mailboxes on your own domain.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "business",
  },
  {
    id: "gbp-management",
    name: "Google Business Profile management",
    description: "Ongoing updates, posts and review monitoring.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "seo",
  },
  {
    id: "priority-updates",
    name: "Priority content updates",
    description: "Faster turnaround on website content changes.",
    priceLabel: ADDON_PRICE_LABEL,
    category: "business",
  },
] as const;

export const ADDON_CATEGORY_LABELS: Record<PackageAddOn["category"], string> = {
  website: "Website",
  marketing: "Advertising and social",
  seo: "SEO and Google",
  branding: "Branding",
  content: "Content",
  business: "Business essentials",
};

export function getAddOns(ids: string[]): PackageAddOn[] {
  return PACKAGE_ADDONS.filter((addon) => ids.includes(addon.id));
}

/* -------------------------------------------------------------------------- */
/* Comparison                                                                  */
/* -------------------------------------------------------------------------- */

export type ComparisonValue = boolean | string;

export type ComparisonRow = {
  label: string;
  values: Record<PackageId, ComparisonValue>;
};

export type ComparisonGroup = {
  title: string;
  rows: ComparisonRow[];
};

export const COMPARISON_GROUPS: readonly ComparisonGroup[] = [
  {
    title: "Plan",
    rows: [
      {
        label: "Monthly price",
        values: {
          starter: "Rs 1,499",
          business: "Rs 2,299",
          premium: "Rs 4,999",
        },
      },
      {
        label: "Website pages",
        values: {
          starter: "Up to 5",
          business: "Up to 10",
          premium: "Extended page count",
        },
      },
      { label: "Hosting", values: { starter: true, business: true, premium: true } },
    ],
  },
  {
    title: "Website",
    rows: [
      {
        label: "Mobile-responsive design",
        values: { starter: true, business: true, premium: true },
      },
      { label: "SSL security", values: { starter: true, business: true, premium: true } },
      {
        label: "WhatsApp integration",
        values: { starter: true, business: true, premium: true },
      },
      { label: "Google Maps", values: { starter: true, business: true, premium: true } },
      {
        label: "Contact forms",
        values: { starter: "Contact form", business: "Enquiry forms", premium: "Lead-capture forms" },
      },
      { label: "Blog", values: { starter: false, business: true, premium: true } },
      { label: "Gallery", values: { starter: false, business: true, premium: true } },
      {
        label: "Booking-system support",
        values: { starter: false, business: false, premium: true },
      },
      {
        label: "E-commerce-ready structure",
        values: { starter: false, business: false, premium: true },
      },
    ],
  },
  {
    title: "Google and SEO",
    rows: [
      {
        label: "Google Business Profile",
        values: { starter: "Setup", business: "Optimisation", premium: "Full management" },
      },
      {
        label: "Google Analytics",
        values: { starter: true, business: true, premium: true },
      },
      {
        label: "Google Search Console",
        values: { starter: true, business: true, premium: true },
      },
      { label: "On-page SEO", values: { starter: true, business: true, premium: true } },
      {
        label: "Monthly SEO",
        values: { starter: false, business: "Improvements", premium: "Complete" },
      },
      { label: "Local SEO", values: { starter: false, business: false, premium: true } },
      { label: "Technical SEO", values: { starter: false, business: false, premium: true } },
    ],
  },
  {
    title: "Social media and content",
    rows: [
      {
        label: "Social media posts",
        values: { starter: "2 per month", business: "6 per month", premium: "12 per month" },
      },
      {
        label: "Facebook management",
        values: { starter: "Integration", business: true, premium: true },
      },
      {
        label: "Instagram management",
        values: { starter: "Integration", business: true, premium: true },
      },
      { label: "LinkedIn support", values: { starter: false, business: false, premium: true } },
      {
        label: "Monthly blog article",
        values: { starter: false, business: false, premium: "1 per month" },
      },
    ],
  },
  {
    title: "Support and reporting",
    rows: [
      {
        label: "Monthly reports",
        values: { starter: false, business: "Performance summary", premium: "SEO and analytics report" },
      },
      { label: "Strategy review", values: { starter: false, business: false, premium: true } },
      {
        label: "Priority support",
        values: { starter: false, business: true, premium: true },
      },
    ],
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Copy blocks                                                                 */
/* -------------------------------------------------------------------------- */

export const IMPORTANT_NOTES: readonly string[] = [
  "All packages require a 12-month subscription.",
  "Website hosting is included during the active subscription.",
  "Domain registration and renewal are not included.",
  "Advertising budgets are not included.",
  "Google Ads and Meta Ads management are separate add-ons.",
  "Paid stock images, premium plugins and third-party software fees are not included unless stated.",
  "Content must be supplied by the client unless content creation is included.",
  "Launch within 3–5 business days applies after receiving all required information, content, images, approval and initial payment.",
  "E-commerce, online payments and complex booking systems may require additional fees depending on requirements.",
  "The client must approve all content before publication.",
  "Monthly services are subject to the agreed package scope.",
] as const;

export const TRUST_BADGES: readonly string[] = [
  "Launch in 3–5 business days",
  "12-month subscription",
  "Hosting included",
  "Mobile responsive",
  "Local Mauritius support",
] as const;

export const WHY_MOBIZ: readonly { title: string; body: string }[] = [
  { title: "Affordable monthly payments", body: "One predictable amount each month instead of a large invoice." },
  { title: "No large upfront website cost", body: "Start with a small first payment and launch quickly." },
  { title: "Local Mauritius support", body: "Talk to a team that works in your time zone and knows your market." },
  { title: "Professional modern design", body: "Layouts built to look current on every screen size." },
  { title: "Mobile-responsive websites", body: "Most Mauritian visitors arrive on a phone, so we design for it first." },
  { title: "SEO-ready structure", body: "Clean headings, metadata and speed from the first day online." },
  { title: "Google tools included", body: "Business Profile, Analytics and Search Console set up for you." },
  { title: "Social media support", body: "Designed posts published to your Facebook and Instagram." },
  { title: "Secure hosting", body: "SSL and hosting stay included while your subscription is active." },
  { title: "Ongoing technical assistance", body: "Send a message when something needs changing." },
  { title: "Fast 3–5-day launch", body: "Once your content, approval and first payment arrive." },
  { title: "Transparent package scope", body: "Everything included, and everything excluded, written down." },
] as const;

export const HOW_IT_WORKS: readonly { title: string; body: string }[] = [
  { title: "Choose your package", body: "Select the package that suits your business." },
  { title: "Send your details", body: "Complete the short form with your business requirements." },
  { title: "Confirm on WhatsApp", body: "Send the prefilled enquiry directly to Mobiz.mu." },
  {
    title: "Launch in 3–5 days",
    body: "The launch timeline starts once all required content, approval and payment are received.",
  },
] as const;

export const PACKAGE_FAQS: readonly { question: string; answer: string }[] = [
  {
    question: "Is the domain name included?",
    answer:
      "No. Domain registration and renewal are billed separately. Mobiz.mu can assist you with choosing and registering your domain.",
  },
  {
    question: "Is hosting included?",
    answer: "Yes. Website hosting is included while your monthly package remains active.",
  },
  {
    question: "How quickly will my website be launched?",
    answer:
      "Most standard websites can be launched within 3–5 business days after Mobiz.mu receives all required information, content, images, approval and payment.",
  },
  {
    question: "Is there a contract?",
    answer: "Yes. The monthly packages require a 12-month subscription commitment.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. You can request an upgrade to a higher package. The new scope and billing will be confirmed before the upgrade is applied.",
  },
  {
    question: "Are advertising costs included?",
    answer:
      "No. Google Ads, Meta Ads and other advertising budgets are separate from the monthly package.",
  },
  {
    question: "Do I need to provide my own content?",
    answer:
      "Yes, unless content creation is included in your selected package or purchased as an additional service.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. Select the appropriate option in the enquiry form and provide details about your existing website.",
  },
  {
    question: "Does the Premium Growth package include e-commerce?",
    answer:
      "The package can include an e-commerce-ready structure. Product volume, payment integration and advanced store requirements may involve additional costs.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "You will be redirected to WhatsApp with a prefilled message. The Mobiz.mu team will review your requirements and confirm the next steps.",
  },
] as const;

export const WEBSITE_STATUS_OPTIONS = [
  "I do not have a website",
  "I already have a website",
  "My website needs a redesign",
  "I am not sure",
] as const;

export const CONTACT_METHOD_OPTIONS = ["WhatsApp", "Phone call", "Email"] as const;

export type WebsiteStatus = (typeof WEBSITE_STATUS_OPTIONS)[number];
export type ContactMethod = (typeof CONTACT_METHOD_OPTIONS)[number];
