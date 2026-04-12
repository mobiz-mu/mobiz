import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileText,
  Globe,
  LayoutGrid,
  Megaphone,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type ServiceCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  bullets: string[];
  keywords: string[];
  examples: string[];
  illustration: "website" | "marketing" | "accounting" | "logistics" | "branding";
};

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Our Services | Premium Website Design, Marketing, Accounting & Business Solutions in Mauritius | MoBiz.mu",
  description:
    "Explore premium business services in Mauritius with MoBiz.mu, including website design, digital marketing, accounting, tax returns, logistics support, branding, business plans, and executive business solutions.",
  keywords: [
    "MoBiz.mu services",
    "business services Mauritius",
    "website design Mauritius",
    "web development Mauritius",
    "digital marketing Mauritius",
    "SEO Mauritius",
    "accounting services Mauritius",
    "tax returns Mauritius",
    "bookkeeping Mauritius",
    "logistics Mauritius",
    "branding Mauritius",
    "business plan Mauritius",
    "pitch deck Mauritius",
    "professional services Mauritius",
    "Mauritius agency services",
    "business solutions Mauritius",
    "Réunion business services",
    "Rodrigues business services",
    "Indian Ocean business solutions",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Premium Business Services in Mauritius | MoBiz.mu",
    description:
      "Website design, digital marketing, accounting, logistics, branding, and business solutions for serious businesses in Mauritius, Rodrigues, Réunion, and the Indian Ocean region.",
    url: `${siteUrl}/services`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Business Services in Mauritius | MoBiz.mu",
    description:
      "Explore executive website design, marketing, accounting, logistics, and branding services with MoBiz.mu.",
  },
};

const services: ServiceCard[] = [
  {
    eyebrow: "Mauritius Digital Solutions",
    title: "Website Design & Development",
    description:
      "Premium website design and development in Mauritius for businesses that want to look established, elegant, and trustworthy. We build executive websites, landing pages, service websites, and e-commerce platforms with strong design quality, mobile responsiveness, SEO foundations, and conversion performance.",
    href: "/services/website-design",
    icon: Globe,
    illustration: "website",
    bullets: [
      "Premium business websites, landing pages, and custom service websites",
      "Mobile-first design with elegant layouts and clearer conversion paths",
      "SEO-ready structure, optimized content blocks, and strong performance",
    ],
    keywords: [
      "Website Design Mauritius",
      "Web Development Mauritius",
      "Business Website Mauritius",
      "E-commerce Website Mauritius",
    ],
    examples: [
      "Tourism websites",
      "Restaurant websites",
      "Taxi and car rental websites",
      "Corporate company websites",
    ],
  },
  {
    eyebrow: "Mauritius Marketing Services",
    title: "Digital Marketing",
    description:
      "Executive digital marketing services in Mauritius designed to increase visibility, leads, and real business growth. We support businesses with SEO, content strategy, Google Ads, Meta Ads, and conversion-focused digital communication that helps companies reach the right audience with stronger positioning.",
    href: "/services/digital-marketing",
    icon: Megaphone,
    illustration: "marketing",
    bullets: [
      "SEO strategy, content planning, and search visibility improvement",
      "Google Ads and Meta Ads support for lead generation and awareness",
      "Premium positioning with clearer messaging and stronger online reach",
    ],
    keywords: [
      "Digital Marketing Mauritius",
      "SEO Mauritius",
      "Google Ads Mauritius",
      "Meta Ads Mauritius",
    ],
    examples: [
      "Local service businesses",
      "Retail and e-commerce brands",
      "Professional firms",
      "Tourism and hospitality marketing",
    ],
  },
  {
    eyebrow: "Mauritius Accounting Services",
    title: "Accounting & Tax Returns",
    description:
      "Professional accounting services in Mauritius for startups, SMEs, and established companies that need reliable financial support and business compliance. We help businesses stay organized and confident with bookkeeping, VAT, payroll, statutory filing, and tax return support delivered with a structured and business-focused approach.",
    href: "/services/accounting-tax-returns",
    icon: FileText,
    illustration: "accounting",
    bullets: [
      "Bookkeeping, VAT, payroll, and statutory filing support",
      "Tax return assistance and compliance-focused accounting structure",
      "Professional support for businesses that want clarity and reliability",
    ],
    keywords: [
      "Accounting Services Mauritius",
      "Bookkeeping Mauritius",
      "VAT Filing Mauritius",
      "Tax Returns Mauritius",
    ],
    examples: [
      "SMEs and startups",
      "Construction companies",
      "Retail businesses",
      "Service-based companies",
    ],
  },
  {
    eyebrow: "Mauritius Logistics Solutions",
    title: "Logistics Solutions",
    description:
      "Business logistics support in Mauritius for companies that want smoother operations, stronger sourcing, and better coordination. MoBiz.mu helps businesses with import and export setup, procurement guidance, sourcing support, and operational logistics services designed to reduce friction and improve day-to-day efficiency.",
    href: "/services/logistics",
    icon: PackageCheck,
    illustration: "logistics",
    bullets: [
      "Import and export setup assistance",
      "Procurement, sourcing, and practical coordination support",
      "Operational help for businesses that want smoother execution",
    ],
    keywords: [
      "Logistics Mauritius",
      "Import Export Mauritius",
      "Procurement Mauritius",
      "Business Logistics Mauritius",
    ],
    examples: [
      "Import businesses",
      "Trading companies",
      "Retail sourcing operations",
      "Growing operational businesses",
    ],
  },
  {
    eyebrow: "Mauritius Branding Solutions",
    title: "Branding & Business Solutions",
    description:
      "High-end branding and business solutions in Mauritius for companies that want to present themselves like serious market leaders. We help with brand kits, pitch decks, business plans, presentations, proposals, CV services, and launch-ready business materials that improve trust, image, and professional presentation.",
    href: "/services/branding-business-solutions",
    icon: BriefcaseBusiness,
    illustration: "branding",
    bullets: [
      "Brand kits, proposals, company presentations, and pitch materials",
      "Business plans, decks, and polished launch documents",
      "Executive branding support for stronger credibility and presentation",
    ],
    keywords: [
      "Branding Mauritius",
      "Business Plan Mauritius",
      "Pitch Deck Mauritius",
      "Professional Branding Mauritius",
    ],
    examples: [
      "Startup launches",
      "Corporate presentations",
      "Investor-ready decks",
      "Business identity upgrades",
    ],
  },
];

const whyChoose = [
  {
    title: "Premium Executive Presentation",
    description:
      "We position businesses to look more established, more polished, and more trustworthy across digital and business-facing touchpoints.",
    icon: Sparkles,
  },
  {
    title: "SEO-Ready Structure",
    description:
      "Our pages and services are built with stronger headings, targeted keywords, internal linking potential, and structured content for better search performance.",
    icon: Search,
  },
  {
    title: "Mobile-First Experience",
    description:
      "Every layout feels clean, premium, and easy to use on mobile, tablet, and desktop with stronger visual balance and user flow.",
    icon: LayoutGrid,
  },
  {
    title: "Business-Focused Execution",
    description:
      "We are not only building visuals. We help improve trust, clarity, communication, and conversion so the business feels more serious and more ready to grow.",
    icon: ShieldCheck,
  },
];

const serviceKeywords = [
  "website design Mauritius",
  "digital marketing Mauritius",
  "SEO Mauritius",
  "accounting services Mauritius",
  "tax returns Mauritius",
  "bookkeeping Mauritius",
  "business solutions Mauritius",
  "branding Mauritius",
  "logistics Mauritius",
  "business plan Mauritius",
  "pitch deck Mauritius",
  "web development Mauritius",
  "professional services Mauritius",
  "executive website Mauritius",
  "premium business services Mauritius",
  "MoBiz.mu",
  "Rodrigues business services",
  "Réunion business solutions",
];

const faqs = [
  {
    question: "What services does MoBiz.mu provide in Mauritius?",
    answer:
      "MoBiz.mu provides premium website design and development, digital marketing, accounting and tax return support, logistics solutions, branding, business plans, decks, and executive business support services for companies in Mauritius and the wider Indian Ocean region.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes. We support startups, SMEs, and growing businesses that want a more professional presentation, stronger business structure, and better online visibility.",
  },
  {
    question: "Can MoBiz.mu help with SEO and mobile responsiveness?",
    answer:
      "Yes. Our service pages and websites are designed with SEO structure, keyword targeting, mobile responsiveness, and conversion clarity in mind so your business can perform better online.",
  },
  {
    question: "Do you only work in Mauritius?",
    answer:
      "Our main focus is Mauritius, but we also support businesses in Rodrigues, Réunion, and the wider Indian Ocean market depending on the project scope.",
  },
  {
    question: "Can I request a custom solution instead of a fixed service?",
    answer:
      "Yes. If your business needs a custom package across website design, marketing, branding, accounting support, or business documents, MoBiz.mu can create a more tailored solution.",
  },
];

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MoBiz.mu Services",
    url: `${siteUrl}/services`,
    description:
      "Premium business services in Mauritius including website design, digital marketing, accounting, logistics, branding, and business solutions.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "Service",
        position: index + 1,
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "MoBiz.mu",
          url: siteUrl,
        },
        areaServed: ["Mauritius", "Rodrigues", "Réunion"],
        url: `${siteUrl}${service.href}`,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function LuxuryServiceIllustration({
  type,
}: {
  type: ServiceCard["illustration"];
}) {
  const gold = "#d7b24d";
  const navy = "#071226";
  const blue = "#163a7a";
  const soft = "#eef4ff";

  if (type === "website") {
    return (
      <svg
        viewBox="0 0 520 320"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bgWeb" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8fbff" />
            <stop offset="100%" stopColor="#eef4ff" />
          </linearGradient>
          <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e5c86d" />
            <stop offset="100%" stopColor="#b88a1c" />
          </linearGradient>
        </defs>
        <rect x="18" y="18" width="484" height="284" rx="28" fill="url(#bgWeb)" />
        <rect x="58" y="54" width="404" height="212" rx="24" fill="white" stroke="#d9e6fb" />
        <rect x="58" y="54" width="404" height="36" rx="24" fill={navy} />
        <circle cx="86" cy="72" r="5" fill="#fff" opacity="0.9" />
        <circle cx="104" cy="72" r="5" fill="#fff" opacity="0.75" />
        <circle cx="122" cy="72" r="5" fill="#fff" opacity="0.6" />
        <rect x="88" y="116" width="130" height="92" rx="20" fill={soft} />
        <rect x="240" y="116" width="190" height="16" rx="8" fill={navy} />
        <rect x="240" y="146" width="170" height="10" rx="5" fill="#8ea3c6" />
        <rect x="240" y="164" width="148" height="10" rx="5" fill="#c2d1ea" />
        <rect x="240" y="186" width="94" height="32" rx="16" fill="url(#goldStroke)">
          <animate attributeName="opacity" values="0.88;1;0.88" dur="2.8s" repeatCount="indefinite" />
        </rect>
        <rect x="88" y="226" width="342" height="16" rx="8" fill="#e8f0fb" />
        <circle cx="152" cy="162" r="28" fill={blue}>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -4; 0 0" dur="3s" repeatCount="indefinite" />
        </circle>
        <rect x="142" y="150" width="20" height="24" rx="8" fill="white" />
      </svg>
    );
  }

  if (type === "marketing") {
    return (
      <svg
         viewBox="0 0 520 320"
         className="h-full w-full drop-shadow-[0_24px_40px_rgba(7,18,38,0.10)]"
         preserveAspectRatio="xMidYMid meet"
         aria-hidden="true"
      >
        <defs>
          <linearGradient id="bgM" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8fbff" />
            <stop offset="100%" stopColor="#eef4ff" />
          </linearGradient>
        </defs>
        <rect x="18" y="18" width="484" height="284" rx="28" fill="url(#bgM)" />
        <rect x="54" y="176" width="58" height="84" rx="14" fill="#d7e4fb" />
        <rect x="132" y="144" width="58" height="116" rx="14" fill="#b8cef5" />
        <rect x="210" y="118" width="58" height="142" rx="14" fill="#8fb0ea" />
        <rect x="288" y="88" width="58" height="172" rx="14" fill="#567fcf" />
        <rect x="366" y="60" width="58" height="200" rx="14" fill="#071226">
          <animate attributeName="height" values="192;200;192" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="y" values="68;60;68" dur="2.6s" repeatCount="indefinite" />
        </rect>
        <path
          d="M64 138C122 126 160 116 214 102C267 88 312 80 380 72"
          fill="none"
          stroke={gold}
          strokeWidth="10"
          strokeLinecap="round"
        >
          <animate attributeName="d" dur="3.6s" repeatCount="indefinite"
            values="
            M64 138C122 126 160 116 214 102C267 88 312 80 380 72;
            M64 144C122 132 160 110 214 98C267 84 312 76 380 68;
            M64 138C122 126 160 116 214 102C267 88 312 80 380 72" />
        </path>
        <circle cx="382" cy="72" r="12" fill={gold} />
      </svg>
    );
  }

  if (type === "accounting") {
    return (
      <svg viewBox="0 0 520 320" className="h-full w-full" aria-hidden="true">
        <rect x="18" y="18" width="484" height="284" rx="28" fill="#f7fbff" />
        <rect x="62" y="52" width="180" height="216" rx="24" fill="white" stroke="#d9e6fb" />
        <rect x="278" y="52" width="180" height="216" rx="24" fill="#071226" />
        <rect x="92" y="88" width="120" height="16" rx="8" fill="#071226" />
        <rect x="92" y="118" width="108" height="10" rx="5" fill="#adc2e7" />
        <rect x="92" y="138" width="96" height="10" rx="5" fill="#c8d6ee" />
        <rect x="92" y="170" width="120" height="48" rx="18" fill="#f0f6ff" />
        <circle cx="328" cy="118" r="34" fill="#163a7a" />
        <text x="328" y="126" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff">Rs</text>
        <rect x="308" y="174" width="120" height="14" rx="7" fill="#fff" opacity="0.9" />
        <rect x="308" y="198" width="92" height="10" rx="5" fill="#fff" opacity="0.55" />
        <rect x="308" y="222" width="70" height="28" rx="14" fill={gold}>
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2.2s" repeatCount="indefinite" />
        </rect>
      </svg>
    );
  }

  if (type === "logistics") {
    return (
      <svg viewBox="0 0 520 320" className="h-full w-full" aria-hidden="true">
        <rect x="18" y="18" width="484" height="284" rx="28" fill="#f7fbff" />
        <path d="M88 228h244v-72h62l38 40v32h-22" fill="#163a7a" />
        <rect x="98" y="120" width="224" height="108" rx="18" fill="#071226" />
        <rect x="350" y="170" width="52" height="28" rx="10" fill="#d7b24d" />
        <circle cx="160" cy="236" r="26" fill="#0f2147" />
        <circle cx="160" cy="236" r="10" fill="white" />
        <circle cx="376" cy="236" r="26" fill="#0f2147" />
        <circle cx="376" cy="236" r="10" fill="white" />
        <rect x="130" y="146" width="64" height="40" rx="12" fill="#fff" opacity="0.95" />
        <rect x="208" y="146" width="78" height="14" rx="7" fill="#b9cdf0" />
        <rect x="208" y="168" width="64" height="10" rx="5" fill="#d3def3" />
        <path d="M92 90C150 58 232 54 296 84" fill="none" stroke="#d7b24d" strokeWidth="10" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0 240;120 120;0 240" dur="3.2s" repeatCount="indefinite" />
        </path>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 520 320" className="h-full w-full" aria-hidden="true">
      <rect x="18" y="18" width="484" height="284" rx="28" fill="#f7fbff" />
      <circle cx="152" cy="158" r="76" fill="#071226" />
      <circle cx="152" cy="158" r="52" fill="#163a7a" />
      <circle cx="152" cy="158" r="22" fill="#d7b24d">
        <animate attributeName="r" values="20;24;20" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <rect x="262" y="92" width="150" height="20" rx="10" fill="#071226" />
      <rect x="262" y="126" width="120" height="12" rx="6" fill="#9fb4d8" />
      <rect x="262" y="148" width="98" height="12" rx="6" fill="#c7d6ef" />
      <rect x="262" y="186" width="126" height="44" rx="18" fill="#fff" stroke="#d7b24d" />
      <path d="M122 110L182 206M182 110L122 206" stroke="#fff" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd />
      <FaqJsonLd />

      <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <Building2 className="h-3.5 w-3.5" />
                Premium Business Services in Mauritius
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Executive Services Built for Serious Business Growth
              </h1>

              <p
                className="mx-auto mt-4 max-w-4xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                MoBiz.mu provides premium business services in Mauritius for companies
                that want more than basic execution. From website design and digital
                marketing to accounting, logistics, and branding support, our goal is
                to help your business look more established, feel more polished, and
                grow with greater confidence.
              </p>

              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="#all-services"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-5 py-2.5 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  Explore All Services
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                {serviceKeywords.slice(0, 8).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[11px] font-medium text-[#1d2d49] shadow-[0_8px_20px_rgba(7,18,38,0.04)]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {whyChoose.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h2
                      className="mt-4 text-[1.1rem] font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h2>

                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section id="all-services" className="scroll-mt-24 py-4 sm:py-6 lg:py-8">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                Full Service Coverage
              </div>

              <h2
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.8rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Explore Our Core Services
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                Each MoBiz.mu service is structured to help businesses look more
                professional, communicate more clearly, and operate with stronger
                business support.
              </p>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
  key={service.title}
  className="group overflow-hidden rounded-[32px] border border-[#e5eaf2] bg-white shadow-[0_22px_48px_rgba(7,18,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_58px_rgba(7,18,38,0.10)]"
>
  <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
    <div className="relative min-h-[280px] overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(215,178,77,0.16),transparent_24%),linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] sm:min-h-[340px] lg:min-h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(7,18,38,0.05),transparent_26%)]" />
      <div className="relative z-10 flex h-full items-center justify-center p-6 sm:p-8 lg:p-10">
        <div className="h-[240px] w-full max-w-[420px] sm:h-[280px] lg:h-[320px] lg:max-w-[460px]">
          <LuxuryServiceIllustration type={service.illustration} />
        </div>
      </div>
    </div>

    <div className="bg-white p-5 sm:p-7 lg:p-8">
      <div className="rounded-[28px] border border-[#edf1f7] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-6">
        <div className="flex items-start gap-4">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
            <Icon className="h-5.5 w-5.5" />
          </div>

          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b6a18] sm:text-[11px]">
              {service.eyebrow}
            </div>

            <h3
              className="mt-2 text-balance text-[1.7rem] font-semibold tracking-tight text-[#071226] sm:text-[2rem] lg:text-[2.15rem]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              {service.title}
            </h3>
          </div>
        </div>

        <p className="mt-5 text-[14.5px] leading-8 text-[#44556f] sm:text-[15.5px]">
          {service.description}
        </p>

        <div className="mt-6 grid gap-3">
          {service.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-4.5 w-4.5 shrink-0 text-[#8b6a18]" />
              <p className="text-[14px] leading-7 text-[#20314d] sm:text-[14.5px]">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#071226]">
            Example business types:
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">
            {service.examples.map((example) => (
              <span
                key={example}
                className="rounded-full border border-[#e3e9f1] bg-[#f8fbff] px-3 py-1.5 text-[11px] font-medium text-[#20314d] sm:text-xs"
              >
                {example}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h4 className="text-sm font-semibold text-[#071226]">
            Target keywords:
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">
            {service.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-[#dfc985]/50 bg-[#fffaf0] px-3 py-1.5 text-[11px] font-medium text-[#8b6a18] sm:text-xs"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <Link
            href={service.href}
            className="group/btn inline-flex items-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Service
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 overflow-hidden rounded-[30px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-5 text-white shadow-[0_22px_52px_rgba(7,18,38,0.16)] lg:grid-cols-[1.05fr_0.95fr] sm:p-7 lg:p-8">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a] sm:text-[11px]">
                  Why Businesses Choose MoBiz.mu
                </div>

                <h2
                  className="mt-4 text-balance text-[1.8rem] font-semibold tracking-tight sm:text-[2.2rem] lg:text-[2.7rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  More Than Services — We Help You Present, Perform, and Grow Better
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-white/78 sm:text-[15px]">
                  Serious businesses need consistent presentation, stronger
                  positioning, better structure, and reliable support across multiple
                  areas. That is why MoBiz.mu brings premium services together in one
                  ecosystem.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Executive website presentation",
                    "Stronger SEO and search visibility structure",
                    "Better trust, credibility, and conversion flow",
                    "Reliable support across business essentials",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#f3d77a]" />
                      <p className="text-sm leading-7 text-white/82">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/8 p-4 sm:p-5">
                <h3
                  className="text-[1.35rem] font-semibold tracking-tight text-white sm:text-[1.5rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Ideal for businesses such as:
                </h3>

                <div className="mt-4 grid gap-3">
                  {[
                    "Tourism companies and travel-related businesses",
                    "Restaurants, cafés, and hospitality brands",
                    "Taxi services and car rental companies",
                    "Construction, maintenance, and contracting firms",
                    "Salons, beauty brands, and wellness businesses",
                    "Retail stores, e-commerce sellers, and import businesses",
                    "Professional firms and service-based companies",
                    "Startups that want a stronger market launch",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/84"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#cfae52] bg-white px-5 py-3 text-sm font-semibold text-[#071226] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                SEO Keywords We Target
              </div>

              <h2
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Stronger Search Intent for Mauritius and the Indian Ocean Region
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                This page is structured to support premium search visibility around
                core business service terms in Mauritius through strong category
                targeting, internal linking, service explanation, and location-aware
                intent.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {serviceKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[#d9e1eb] bg-white px-3 py-1.5 text-[11px] font-medium text-[#1d2d49] shadow-[0_8px_18px_rgba(7,18,38,0.04)]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-[#e8edf5] bg-[#fbfcfe] py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                Frequently Asked Questions
              </div>

              <h2
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Services FAQ
              </h2>
            </div>

            <div className="mt-6 space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[22px] border border-[#e4eaf2] bg-white p-5 shadow-[0_12px_26px_rgba(7,18,38,0.04)] sm:p-6"
                >
                  <h3
                    className="text-[1.05rem] font-semibold tracking-tight text-[#071226] sm:text-[1.12rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-6 text-center shadow-[0_18px_40px_rgba(7,18,38,0.05)] sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Ready to Build Better?
                </div>

                <h2
                  className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.4rem] lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let MoBiz.mu Help Your Business Look Stronger and Grow Smarter
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  Whether you need a premium website, stronger SEO, digital marketing
                  support, accounting assistance, better branding, or a more complete
                  business solution, MoBiz.mu is here to help you move forward with a
                  more polished and professional presence.
                </p>

                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact MoBiz.mu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}