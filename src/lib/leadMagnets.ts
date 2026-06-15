import type { LeadMagnetKey } from "@/lib/leads";
import { CONTACT_PHONE_RAW } from "@/lib/contact-data";

export type LeadMagnetSlug =
  | "free-seo-audit"
  | "free-website-review"
  | "free-business-consultation";

export type LeadMagnetFaq = { question: string; answer: string };

export type LeadMagnetData = {
  key: LeadMagnetKey;
  slug: LeadMagnetSlug;
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  submitLabel: string;
  metaTitle: string;
  metaDescription: string;
  /** Benefit-driven bullets shown beside the form */
  benefits: string[];
  /** Short trust indicators shown under the hero */
  trust: string[];
  faqs: LeadMagnetFaq[];
  relatedLinks: { title: string; href: string }[];
  /** Default value for the "service interested in" select */
  defaultService: string;
  whatsappIntro: string;
};

export const LEAD_SERVICE_OPTIONS = [
  "Website Design",
  "SEO Services",
  "Digital Marketing",
  "Ecommerce Website",
  "Accounting & Tax",
  "Company Registration",
  "Branding",
  "Not sure yet",
] as const;

export const PREFERRED_CONTACT_OPTIONS = [
  "WhatsApp",
  "Phone call",
  "Email",
] as const;

const commonRelated = [
  { title: "Website Design Mauritius", href: "/website-design-mauritius" },
  { title: "SEO Services Mauritius", href: "/seo-services-mauritius" },
  { title: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
  { title: "Contact MoBiz.mu", href: "/contact" },
];

export const leadMagnets: Record<LeadMagnetSlug, LeadMagnetData> = {
  "free-seo-audit": {
    key: "free_seo_audit",
    slug: "free-seo-audit",
    eyebrow: "Free SEO Audit",
    headline: "Get a Free SEO Audit for Your Mauritius Business",
    subheadline:
      "Find out what is stopping your website from ranking higher on Google and getting more enquiries.",
    ctaLabel: "Get Free SEO Audit",
    submitLabel: "Get My Free SEO Audit",
    metaTitle: "Free SEO Audit Mauritius | MoBiz.mu",
    metaDescription:
      "Request a free SEO audit for your Mauritius business. MoBiz.mu reviews your rankings, keywords, speed and on-page SEO and shows you how to get more enquiries.",
    benefits: [
      "See why your site is not ranking on page one",
      "Spot the keywords your customers actually search",
      "Get clear, prioritised fixes — no jargon",
      "Understand how you compare to competitors",
    ],
    trust: ["Mauritius-focused", "No obligation", "Reply within 1 business day"],
    faqs: [
      {
        question: "Is the SEO audit really free?",
        answer:
          "Yes. The initial SEO audit is completely free and comes with no obligation. We review your website and share clear findings so you can decide your next step.",
      },
      {
        question: "What do I get?",
        answer:
          "A practical summary of what is helping and hurting your Google rankings — covering keywords, on-page SEO, site speed, mobile experience and quick wins you can act on.",
      },
      {
        question: "How fast will you reply?",
        answer:
          "We typically respond within one business day, either over WhatsApp, phone or email depending on your preference.",
      },
    ],
    relatedLinks: commonRelated,
    defaultService: "SEO Services",
    whatsappIntro:
      "Hello MoBiz.mu, I would like a FREE SEO AUDIT for my business.",
  },

  "free-website-review": {
    key: "free_website_review",
    slug: "free-website-review",
    eyebrow: "Free Website Review",
    headline: "Get a Free Website Review from MoBiz.mu",
    subheadline:
      "We'll review your website design, speed, mobile experience, trust signals and conversion flow.",
    ctaLabel: "Get Free Website Review",
    submitLabel: "Get My Free Website Review",
    metaTitle: "Free Website Review Mauritius | MoBiz.mu",
    metaDescription:
      "Request a free website review in Mauritius. MoBiz.mu checks your design, speed, mobile experience, trust signals and conversion flow, then shows you what to improve.",
    benefits: [
      "Know if your design looks premium and trustworthy",
      "Find what slows your site down on mobile",
      "See where visitors drop off instead of enquiring",
      "Get a clear list of improvements that convert",
    ],
    trust: ["Mauritius-focused", "No obligation", "Reply within 1 business day"],
    faqs: [
      {
        question: "What does the website review cover?",
        answer:
          "Design quality, loading speed, mobile responsiveness, trust signals, clarity of your message, and how easily a visitor can contact you or buy.",
      },
      {
        question: "Do I need to change my hosting or platform?",
        answer:
          "Not necessarily. The review is independent — we tell you what is worth improving and you decide what to do with it.",
      },
      {
        question: "Is it free?",
        answer:
          "Yes, the initial website review is free and carries no obligation.",
      },
    ],
    relatedLinks: commonRelated,
    defaultService: "Website Design",
    whatsappIntro:
      "Hello MoBiz.mu, I would like a FREE WEBSITE REVIEW for my business.",
  },

  "free-business-consultation": {
    key: "free_business_consultation",
    slug: "free-business-consultation",
    eyebrow: "Free Business Consultation",
    headline: "Book a Free Business Growth Consultation",
    subheadline:
      "Speak with MoBiz.mu about websites, SEO, marketing, accounting, registration and digital growth opportunities.",
    ctaLabel: "Book Free Business Consultation",
    submitLabel: "Book My Free Consultation",
    metaTitle: "Free Business Consultation Mauritius | MoBiz.mu",
    metaDescription:
      "Book a free business growth consultation with MoBiz.mu. Talk through websites, SEO, marketing, accounting and company registration for your Mauritius business.",
    benefits: [
      "Talk through your goals with a growth partner",
      "Get honest advice tailored to your business",
      "Understand where to invest first for results",
      "Leave with clear, practical next steps",
    ],
    trust: ["Mauritius-focused", "No pressure", "Flexible WhatsApp or call"],
    faqs: [
      {
        question: "What happens in the consultation?",
        answer:
          "We discuss your business, your goals and your current challenges, then suggest the most practical ways to grow — whether that is your website, SEO, marketing, accounting or registration.",
      },
      {
        question: "Is there any cost or obligation?",
        answer:
          "No. The consultation is free and there is no obligation to proceed with anything afterwards.",
      },
      {
        question: "How is the consultation held?",
        answer:
          "Whichever is easiest for you — WhatsApp, a phone call, or email. Just tell us your preferred contact method.",
      },
    ],
    relatedLinks: commonRelated,
    defaultService: "Not sure yet",
    whatsappIntro:
      "Hello MoBiz.mu, I would like to BOOK A FREE BUSINESS CONSULTATION.",
  },
};

export const leadMagnetList = Object.values(leadMagnets);

export type LeadMagnetFormValues = {
  fullName: string;
  businessName: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  service: string;
  preferredContact: string;
  message: string;
};

/** Build a pre-filled WhatsApp deep link including the submitted lead details. */
export function buildLeadMagnetWhatsappUrl(
  magnet: LeadMagnetData,
  values: LeadMagnetFormValues
): string {
  const lines = [
    magnet.whatsappIntro,
    "",
    `Name: ${values.fullName}`,
    values.businessName ? `Business: ${values.businessName}` : null,
    values.phone ? `Phone: ${values.phone}` : null,
    values.whatsapp ? `WhatsApp: ${values.whatsapp}` : null,
    `Email: ${values.email}`,
    values.website ? `Website: ${values.website}` : null,
    `Service: ${values.service}`,
    values.preferredContact
      ? `Preferred contact: ${values.preferredContact}`
      : null,
    values.message ? `Message: ${values.message}` : null,
  ].filter((line) => line !== null) as string[];

  return `https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(
    lines.join("\n")
  )}`;
}
