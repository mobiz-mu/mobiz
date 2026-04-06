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
};

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Our Services | Website Design, Marketing, Accounting & Business Solutions in Mauritius | MoBiz.mu",
  description:
    "Explore premium business services in Mauritius with MoBiz.mu, including website design, digital marketing, accounting, tax returns, logistics support, branding, business plans, and executive business solutions for companies across Mauritius, Rodrigues, Réunion, and the Indian Ocean region.",
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
  openGraph: {
    title:
      "Premium Business Services in Mauritius | MoBiz.mu",
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
      "Premium website design and development in Mauritius for businesses that want to look established, elegant, and trustworthy. We build executive websites, landing pages, business websites, service websites, and e-commerce platforms with a strong focus on design quality, mobile responsiveness, SEO foundations, and conversion performance.",
    href: "/services/website-design",
    icon: Globe,
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
      "Executive digital marketing services in Mauritius designed to increase visibility, leads, and real business growth. We support businesses with SEO, content strategy, Google Ads, Meta Ads, brand visibility, and conversion-focused digital communication that helps companies reach the right audience with stronger positioning.",
    href: "/services/digital-marketing",
    icon: Megaphone,
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
      "Every layout should feel clean, premium, and easy to use on mobile, tablet, and desktop without broken spacing or weak user flow.",
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

export default function ServicesPage() {
  return (
    <>
      <JsonLd />
      <FaqJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.14),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.06),transparent_28%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(207,174,82,0.6),transparent)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)] backdrop-blur">
                <Building2 className="h-3.5 w-3.5" />
                Premium Business Services in Mauritius
              </div>

              <h1
                className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Executive Services Built for Serious Business Growth
              </h1>

              <p
                className="mx-auto mt-6 max-w-4xl text-pretty text-[15px] leading-8 text-[#43546f] sm:text-[16px] lg:text-[17px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                At MoBiz.mu, we provide premium business services in Mauritius for
                companies that want more than basic execution. We help brands,
                startups, SMEs, and growing businesses present themselves better,
                operate more professionally, and build stronger visibility across
                Mauritius, Rodrigues, Réunion, and the wider Indian Ocean region.
                From website design and digital marketing to accounting, logistics,
                and branding support, our goal is to help your business look more
                established, feel more polished, and grow with greater confidence.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_34px_rgba(7,18,38,0.18),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(7,18,38,0.22)]"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="#all-services"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  Explore All Services
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                {serviceKeywords.slice(0, 8).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-[#e1e7f0] bg-white px-3 py-1.5 text-[11px] font-medium text-[#1d2d49] shadow-[0_8px_18px_rgba(7,18,38,0.04)] sm:text-xs"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-14 lg:py-16">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {whyChoose.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-[#e6ebf2] bg-white p-6 shadow-[0_18px_40px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#0f2147_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.16)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h2
                      className="mt-4 text-xl font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h2>

                    <p className="mt-3 text-[14px] leading-7 text-[#4b5d79] sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section
          id="all-services"
          className="scroll-mt-24 py-8 sm:py-10 lg:py-12"
        >
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Full Service Coverage
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3.1rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Explore Our Core Services
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                Each MoBiz.mu service is structured to help businesses look more
                professional, communicate more clearly, and operate with stronger
                business support. Whether you need visibility, presentation,
                compliance, operations, or branding, our service ecosystem is
                designed to move your business forward with a more executive edge.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-[30px] border border-[#e6ebf2] bg-white p-6 shadow-[0_20px_44px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_52px_rgba(7,18,38,0.08)] sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#0f2147_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.15)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b6a18] sm:text-[11px]">
                          {service.eyebrow}
                        </div>

                        <h3
                          className="mt-2 text-2xl font-semibold tracking-tight text-[#071226] sm:text-[2rem]"
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
                          <p className="text-[14px] leading-7 text-[#20314d]">
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

                    <div className="mt-6">
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
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-14 lg:py-16">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 overflow-hidden rounded-[34px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-6 text-white shadow-[0_26px_60px_rgba(7,18,38,0.18)] sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                  Why Businesses Choose MoBiz.mu
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[3rem] lg:leading-[1.04]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  More Than Services — We Help You Present, Perform, and Grow Better
                </h2>

                <p className="mt-5 max-w-3xl text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  A business website alone is not enough. A social media post alone is
                  not enough. A tax filing alone is not enough. Serious businesses
                  need consistent presentation, stronger positioning, better
                  structure, and reliable support across multiple areas. That is why
                  MoBiz.mu brings premium services together in one ecosystem, so your
                  company can move forward with more clarity and credibility.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
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

              <div className="rounded-[28px] border border-white/10 bg-white/7 p-5 backdrop-blur sm:p-6">
                <h3
                  className="text-2xl font-semibold tracking-tight text-white"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Ideal for businesses such as:
                </h3>

                <div className="mt-5 grid gap-3">
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

                <div className="mt-6">
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

        <section className="py-12 sm:py-14 lg:py-16">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                SEO Keywords We Target
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Stronger Search Intent for Mauritius and the Indian Ocean Region
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                This page is structured to support premium search visibility around
                core business service terms in Mauritius, while also helping MoBiz.mu
                build relevance for broader Indian Ocean business searches through
                strong category targeting, internal linking, service explanation, and
                location-aware intent.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {serviceKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[#d9e1eb] bg-white px-3.5 py-2 text-[12px] font-medium text-[#1d2d49] shadow-[0_10px_18px_rgba(7,18,38,0.04)]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-[#e8edf5] bg-[#fbfcfe] py-12 sm:py-14 lg:py-16">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Frequently Asked Questions
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Services FAQ
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[24px] border border-[#e4eaf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.04)] sm:p-6"
                >
                  <h3
                    className="text-lg font-semibold tracking-tight text-[#071226] sm:text-[1.18rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-8 text-[#44556f] sm:text-[15.5px]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16 lg:py-20">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-7 text-center shadow-[0_20px_46px_rgba(7,18,38,0.05)] sm:p-9 lg:p-12">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Ready to Build Better?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let MoBiz.mu Help Your Business Look Stronger and Grow Smarter
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need a premium website, stronger SEO, digital marketing
                  support, accounting assistance, better branding, or a more complete
                  business solution, MoBiz.mu is here to help you move forward with a
                  more polished and professional presence.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_32px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact MoBiz.mu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
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