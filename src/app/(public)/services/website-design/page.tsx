import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cpu,
  Globe,
  LayoutDashboard,
  LineChart,
  MonitorSmartphone,
  Search,
  ServerCog,
  ShoppingBag,
  Sparkles,
  Store,
  Warehouse,
  Wrench,
  Rocket,
  ShieldCheck,
  Palette,
  LayoutTemplate,
  Settings2,
  ShoppingCart,
  Gauge,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Website Design Mauritius | Custom Business Websites, SaaS, E-Commerce & SEO | MoBiz.mu",
  description:
    "MoBiz.mu creates premium website design in Mauritius including custom business websites, corporate websites, e-commerce stores, SaaS websites, accounting software interfaces, warehousing systems, landing pages, responsive redesigns, and SEO-ready digital platforms.",
  keywords: [
    "Website Design Mauritius",
    "Web Development Mauritius",
    "Custom Website Mauritius",
    "Business Website Mauritius",
    "Corporate Website Mauritius",
    "Luxury Website Design Mauritius",
    "E-commerce Website Mauritius",
    "SaaS Website Mauritius",
    "Accounting Software Mauritius",
    "Warehousing Software Mauritius",
    "Landing Page Mauritius",
    "Mobile Responsive Website Mauritius",
    "SEO Website Mauritius",
    "Responsive Redesign Mauritius",
    "Custom Web Application Mauritius",
    "MoBiz.mu Website Design",
  ],
  alternates: {
    canonical: `${siteUrl}/services/website-design`,
  },
  openGraph: {
    title:
      "Premium Website Design in Mauritius | Custom Websites, SaaS & E-Commerce",
    description:
      "Executive website design in Mauritius for businesses that want premium presentation, stronger SEO, mobile responsiveness, and custom digital solutions.",
    url: `${siteUrl}/services/website-design`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Website Design Mauritius | Premium Custom Websites by MoBiz.mu",
    description:
      "Custom business websites, e-commerce, SaaS interfaces, and premium digital platforms built for serious businesses in Mauritius.",
  },
};

const features = [
  "Premium custom design with a more executive and world-class presentation",
  "Mobile-first responsive layouts for phone, tablet, and desktop",
  "SEO-ready page structure with stronger heading and keyword targeting",
  "Fast, modern, and conversion-focused page architecture",
  "WhatsApp, contact, quote, and lead capture integration",
  "High-end service pages, landing pages, and branded sales funnels",
];

const idealFor = [
  "Startups launching their first premium website",
  "Established companies that need a stronger redesign",
  "Consultants, agencies, accountants, and service-based brands",
  "Businesses that want more trust, more leads, and better digital credibility",
];

const websiteTypes = [
  {
    title: "Custom Business Websites",
    description:
      "Elegant company websites designed to present your business professionally and build trust with clients.",
    icon: Building2,
  },
  {
    title: "Corporate Websites",
    description:
      "Executive layouts for companies that want a serious, polished, and established online image.",
    icon: BriefcaseBusiness,
  },
  {
    title: "E-Commerce Websites",
    description:
      "Online stores built for product presentation, better shopping flow, and stronger conversion performance.",
    icon: ShoppingBag,
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for promotions, lead generation, offers, ads, and high-conversion campaigns.",
    icon: LineChart,
  },
  {
    title: "SaaS Websites",
    description:
      "Modern software websites with premium product sections, feature blocks, and trust-building UX.",
    icon: Cpu,
  },
  {
    title: "Accounting Software Interfaces",
    description:
      "Professional front-end systems and dashboards for accounting, invoicing, finance, and workflow tools.",
    icon: LayoutDashboard,
  },
  {
    title: "Warehousing & Logistics Systems",
    description:
      "Clean business interfaces for warehousing, inventory, operations, dispatch, and logistics-related solutions.",
    icon: Warehouse,
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored digital platforms built around your business process, client flow, or internal operations.",
    icon: ServerCog,
  },
  {
    title: "Service Company Websites",
    description:
      "Perfect for maintenance, contracting, cleaning, legal, accounting, marketing, and professional service brands.",
    icon: Wrench,
  },
  {
    title: "Retail & Shop Websites",
    description:
      "Premium websites for stores and retail brands that want stronger visual presentation and better online sales.",
    icon: Store,
  },
  {
    title: "Portfolio & Brand Websites",
    description:
      "Elegant presentation websites for agencies, creatives, architects, studios, and premium personal brands.",
    icon: Sparkles,
  },
  {
    title: "Business Portals & Dashboards",
    description:
      "Structured platforms for internal teams, customer portals, reporting views, and business management tools.",
    icon: Blocks,
  },
];

const businessExamples = [
  "Tourism businesses",
  "Restaurants and cafés",
  "Taxi companies",
  "Car rental businesses",
  "Maintenance companies",
  "Construction firms",
  "Accounting firms",
  "Consultants and agencies",
  "Warehousing operations",
  "Import and export businesses",
  "Beauty salons and wellness brands",
  "Retail and e-commerce sellers",
];

const keywordTags = [
  "website design Mauritius",
  "custom website Mauritius",
  "business website Mauritius",
  "corporate website Mauritius",
  "luxury website Mauritius",
  "e-commerce website Mauritius",
  "SaaS website Mauritius",
  "accounting software Mauritius",
  "warehousing software Mauritius",
  "web development Mauritius",
  "mobile responsive website Mauritius",
  "SEO website Mauritius",
  "landing page Mauritius",
  "responsive redesign Mauritius",
  "custom web application Mauritius",
];

const processSteps = [
  {
    title: "Strategy & Positioning",
    text: "We first understand your business, market, services, and goals so the website is built with clearer structure and stronger business intent.",
  },
  {
    title: "Premium UI & Layout Design",
    text: "We shape the interface to feel more elegant, executive, modern, and conversion-focused across every important section.",
  },
  {
    title: "Mobile, SEO & Performance Build",
    text: "We make sure the website is responsive, SEO-friendly, and built for a smoother user experience on all devices.",
  },
  {
    title: "Launch & Growth Readiness",
    text: "The final website is prepared to help you attract attention, build trust, generate leads, and support your business growth.",
  },
];

const popularPackages = [
  {
    title: "Starter Business Website",
    price: "From Rs 6,500",
    subtitle:
      "A strong entry-level website option for businesses that want a more professional digital presence.",
    points: [
      "Ideal for startups and small businesses",
      "Mobile responsive layout",
      "Premium business presentation",
      "Contact and lead-focused structure",
    ],
    cta: "/contact",
    highlight: "Entry package",
  },
  {
    title: "3-Page Launch Website",
    price: "From Rs 9,999",
    subtitle:
      "Perfect for companies that want a cleaner launch website with stronger credibility and conversion flow.",
    points: [
      "Executive 3-page structure",
      "Strong business introduction flow",
      "Suitable for many service industries",
      "Designed to build trust quickly",
    ],
    cta: "/contact",
    highlight: "Popular choice",
  },
  {
    title: "Custom Business Website",
    price: "From Rs 18,000",
    subtitle:
      "A more complete premium website solution for established businesses that want stronger positioning.",
    points: [
      "Custom structure and premium layout direction",
      "Suitable for more advanced business needs",
      "Better service page depth",
      "Stronger long-term SEO and growth potential",
    ],
    cta: "/b/custom-business-website",
    highlight: "Premium growth",
  },
];

const relatedWebsiteServices = [
  {
    title: "Simple Landing Website",
    description:
      "A focused landing website for businesses that need a clean online presence, offer presentation, or campaign page.",
    href: "/b/simple-landing-website",
    icon: Rocket,
    price: "From Rs 8,000",
  },
  {
    title: "Custom Business Website",
    description:
      "A stronger custom website solution for businesses that want a more premium and established online presentation.",
    href: "/b/custom-business-website",
    icon: LayoutTemplate,
    price: "From Rs 18,000",
  },
  {
    title: "E-Commerce Store (25 Products)",
    description:
      "A premium online store setup for businesses that want to start selling products with a cleaner shopping experience.",
    href: "/b/e-commerce-store-25-products",
    icon: ShoppingCart,
    price: "From Rs 35,000",
  },
  {
    title: "E-Commerce Store (50 Products)",
    description:
      "A more advanced e-commerce setup for businesses with larger product ranges and broader store requirements.",
    href: "/b/e-commerce-store-50-products",
    icon: ShoppingBag,
    price: "From Rs 48,000",
  },
  {
    title: "Website Care & Maintenance",
    description:
      "Ongoing support to keep your website updated, secure, polished, and functioning more reliably.",
    href: "/b/website-care-maintenance",
    icon: Settings2,
    price: "From Rs 3,000/month",
  },
  {
    title: "SEO & Speed Boost",
    description:
      "Optimization support for businesses that want a faster, stronger, and more search-ready website presence.",
    href: "/b/seo-and-speed-boost",
    icon: Gauge,
    price: "From Rs 5,000",
  },
  {
    title: "Responsive Redesign",
    description:
      "A redesign-focused service for businesses that need their existing website to feel more premium and mobile-ready.",
    href: "/b/responsive-redesign",
    icon: Palette,
    price: "From Rs 17,000",
  },
  {
    title: "Website Consultation",
    description:
      "A guided discussion around website structure, branding direction, SEO readiness, and business presentation improvements.",
    href: "/contact",
    icon: ShieldCheck,
    price: "From Rs 1,500",
  },
];

const faqs = [
  {
    q: "What types of websites does MoBiz.mu build?",
    a: "We build custom business websites, corporate websites, landing pages, e-commerce websites, SaaS websites, accounting software interfaces, warehousing systems, service company websites, and custom web applications.",
  },
  {
    q: "Do you make mobile responsive websites?",
    a: "Yes. Every website is designed to work properly across mobile, tablet, and desktop with a premium and user-friendly layout.",
  },
  {
    q: "Do you also optimize websites for SEO?",
    a: "Yes. We structure pages with strong headings, content hierarchy, keyword targeting, internal linking opportunities, and mobile-friendly performance to support SEO.",
  },
  {
    q: "Can you create a custom website for my business type?",
    a: "Yes. We can build websites and digital platforms for many industries including tourism, restaurants, accounting, logistics, maintenance, retail, SaaS, and more.",
  },
];

function WebsiteDesignJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Design & Development",
    provider: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
    },
    areaServed: ["Mauritius", "Rodrigues", "Réunion"],
    serviceType: "Website Design and Development",
    url: `${siteUrl}/services/website-design`,
    description:
      "Premium website design in Mauritius including custom business websites, e-commerce websites, SaaS websites, accounting software interfaces, warehousing systems, responsive redesigns, and mobile-first SEO-ready digital platforms.",
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
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
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

function PremiumIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(243,215,122,0.24),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(54,91,168,0.22),transparent_36%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)] p-4 shadow-[0_22px_60px_rgba(7,18,38,0.28)] backdrop-blur">
        <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#0c1832_0%,#112248_100%)] p-4">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
              <div className="h-3 w-24 rounded-full bg-white/15" />
              <div className="mt-3 h-8 w-4/5 rounded-full bg-[#f3d77a]/20" />
              <div className="mt-3 space-y-2">
                <div className="h-2.5 w-full rounded-full bg-white/10" />
                <div className="h-2.5 w-11/12 rounded-full bg-white/10" />
                <div className="h-2.5 w-9/12 rounded-full bg-white/10" />
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-9 w-28 rounded-full bg-[#f3d77a]/90" />
                <div className="h-9 w-24 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                <div className="h-3 w-16 rounded-full bg-white/15" />
                <div className="mt-3 h-20 rounded-2xl bg-[linear-gradient(135deg,rgba(243,215,122,0.22),rgba(82,130,255,0.20))]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                  <div className="h-3 w-10 rounded-full bg-white/15" />
                  <div className="mt-3 h-10 rounded-xl bg-white/10" />
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                  <div className="h-3 w-10 rounded-full bg-white/15" />
                  <div className="mt-3 h-10 rounded-xl bg-[#f3d77a]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteDesignPage() {
  return (
    <>
      <WebsiteDesignJsonLd />
      <FaqJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                  <Globe className="h-3.5 w-3.5" />
                  Website Design Mauritius
                </div>

                <h1
                  className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Premium Website Design for Businesses That Want to Look World-Class
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  MoBiz.mu creates executive-quality websites in Mauritius for
                  businesses that want far more than a basic online presence. We
                  design custom business websites, corporate websites, e-commerce
                  stores, SaaS websites, accounting software interfaces,
                  warehousing systems, landing pages, and advanced digital
                  platforms that are mobile responsive, SEO-ready, elegant, and
                  built to convert. Our goal is to help Mauritian businesses look
                  more established, communicate more clearly, and generate more
                  trust, leads, and long-term growth online.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {keywordTags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[11px] font-medium text-[#1d2d49] shadow-[0_8px_20px_rgba(7,18,38,0.04)] sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_34px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Your Website Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>

              <div className="lg:justify-self-end">
                <PremiumIllustration />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Premium Presentation",
                  text: "Designed to make your business look more established, elegant, and trustworthy.",
                  icon: Sparkles,
                },
                {
                  title: "Mobile Responsive",
                  text: "Built to feel smooth, clean, and premium on phone, tablet, and desktop.",
                  icon: MonitorSmartphone,
                },
                {
                  title: "SEO Ready",
                  text: "Structured with better content hierarchy, keywords, and search visibility foundations.",
                  icon: Search,
                },
                {
                  title: "Business-Focused",
                  text: "Created to support leads, trust, brand image, and stronger business growth.",
                  icon: BadgeCheck,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-[#e6ebf2] bg-white p-5 shadow-[0_16px_38px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2
                      className="mt-4 text-lg font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div>
                <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  Service Overview
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Rich, Executive, and Built for Modern Business Growth
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Our website design service is made for businesses that want their
                  online presence to match the quality of their ambition. We do not
                  build generic pages that look ordinary. We create premium digital
                  experiences that feel cleaner, more strategic, more elegant, and
                  more aligned with serious business growth in Mauritius and beyond.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need a custom business website, a corporate website,
                  a SaaS website, an accounting software interface, a warehousing
                  platform, a landing page, or a more advanced business portal,
                  MoBiz.mu can build a solution tailored to your brand, your offer,
                  your audience, and your long-term business goals.
                </p>
              </div>

              <div className="grid gap-3">
                {features.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[22px] border border-[#e7edf5] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)]"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8b6a18]" />
                    <p className="text-[14px] leading-7 text-[#20314d]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Website Types We Build
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Real Website Solutions for Real Business Needs
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                We build far more than simple brochure websites. Our work can cover
                customer-facing websites, premium service pages, e-commerce stores,
                software interfaces, business dashboards, structured custom web
                solutions, and executive landing experiences built to convert.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {websiteTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-[#e6ebf2] bg-white p-5 shadow-[0_18px_38px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(7,18,38,0.08)]"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5.5 w-5.5" />
                    </div>

                    <h3
                      className="mt-4 text-xl font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#4a5b76]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 overflow-hidden rounded-[34px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-6 text-white shadow-[0_26px_60px_rgba(7,18,38,0.18)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                  Industry Examples
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.8rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Ideal for Many Types of Businesses
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  Our website design service is suitable for many industries and
                  business models. Whether you are launching, rebranding,
                  expanding, or digitizing operations, we can shape a website or
                  platform that fits your market, supports your brand, and helps
                  your business appear more premium and more credible.
                </p>

                <div className="mt-6 grid gap-3">
                  {idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#f3d77a]" />
                      <p className="text-sm leading-7 text-white/82">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {businessExamples.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Our Process
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                How We Build Premium Websites
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[26px] border border-[#e6ebf2] bg-white p-5 shadow-[0_16px_34px_rgba(7,18,38,0.05)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ead8a1] bg-[#fff9ea] text-sm font-semibold text-[#8b6a18]">
                    {index + 1}
                  </div>

                  <h3
                    className="mt-4 text-xl font-semibold tracking-tight text-[#071226]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#4a5b76]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#08142a_0%,#10224a_100%)] p-6 text-white shadow-[0_26px_60px_rgba(7,18,38,0.18)] sm:p-8 lg:p-10">
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                  Popular Website Packages
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Quick Package Previews for Different Website Goals
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  These package previews make the website design page more
                  commercial and easier for visitors to understand. They help
                  potential clients quickly identify a starting point before moving
                  into a more custom discussion with MoBiz.mu.
                </p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {popularPackages.map((pkg, index) => (
                  <article
                    key={pkg.title}
                    className={`rounded-[28px] border p-5 shadow-[0_18px_38px_rgba(7,18,38,0.22)] ${
                      index === 1
                        ? "border-[#f3d77a]/50 bg-white text-[#071226]"
                        : "border-white/10 bg-white/8 text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                          index === 1
                            ? "bg-[#fff7df] text-[#8b6a18]"
                            : "bg-white/10 text-[#f3d77a]"
                        }`}
                      >
                        {pkg.highlight}
                      </span>
                    </div>

                    <h3
                      className="mt-4 text-2xl font-semibold tracking-tight"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {pkg.title}
                    </h3>

                    <div
                      className={`mt-3 text-3xl font-semibold ${
                        index === 1 ? "text-[#071226]" : "text-white"
                      }`}
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {pkg.price}
                    </div>

                    <p
                      className={`mt-3 text-[14px] leading-7 ${
                        index === 1 ? "text-[#4a5b76]" : "text-white/74"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {pkg.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`mt-1 h-4.5 w-4.5 shrink-0 ${
                              index === 1 ? "text-[#8b6a18]" : "text-[#f3d77a]"
                            }`}
                          />
                          <p
                            className={`text-sm leading-7 ${
                              index === 1 ? "text-[#20314d]" : "text-white/82"
                            }`}
                          >
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link
                        href={pkg.cta}
                        className={`group inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                          index === 1
                            ? "border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] text-[#f3d77a]"
                            : "border border-white/15 bg-white/10 text-white"
                        }`}
                      >
                        Explore Package
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-[#e5eaf2] bg-white p-6 shadow-[0_22px_46px_rgba(7,18,38,0.05)] sm:p-8">
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex rounded-full border border-[#dce4ef] bg-[#f8fbff] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  SEO Keywords
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Search Terms This Page Supports
                </h2>

                <p className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  This service page is structured to help MoBiz.mu rank more
                  strongly for high-intent website design, web development,
                  e-commerce, SaaS, responsive redesign, SEO, and business website
                  searches related to Mauritius and surrounding markets.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                {keywordTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d9e1eb] bg-white px-3.5 py-2 text-[12px] font-medium text-[#1d2d49] shadow-[0_8px_18px_rgba(7,18,38,0.04)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Related Website Services
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Explore Related Website Services and Growth Support
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                MoBiz.mu also provides additional website-related services for
                businesses that want a more complete digital presence. These
                linked services improve internal linking strength, SEO depth, and
                make it easier for visitors to discover the exact website support
                they need.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {relatedWebsiteServices.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="group rounded-[28px] border border-[#e6ebf2] bg-white p-5 shadow-[0_18px_38px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(7,18,38,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                      <span className="rounded-full border border-[#ead8a1] bg-[#fff9ea] px-3 py-1.5 text-[11px] font-semibold text-[#8b6a18]">
                        {item.price}
                      </span>
                    </div>

                    <h3
                      className="mt-4 text-xl font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#4a5b76]">
                      {item.description}
                    </p>

                    <div className="mt-5">
                      <Link
                        href={item.href}
                        className="group/link inline-flex items-center text-sm font-semibold text-[#8b6a18] transition-colors duration-300 hover:text-[#071226]"
                      >
                        Explore Service
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-y border-[#e8edf5] bg-[#fbfcfe] py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                FAQ
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Website Design FAQ
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[24px] border border-[#e4eaf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.04)] sm:p-6"
                >
                  <h3
                    className="text-lg font-semibold tracking-tight text-[#071226]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {item.q}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-8 text-[#44556f] sm:text-[15.5px]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16 lg:py-18">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-7 text-center shadow-[0_20px_46px_rgba(7,18,38,0.05)] sm:p-9 lg:p-12">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Ready to Build Better?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Build a Website That Looks Premium and Performs Like a Serious Business Asset
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need a custom website, business website, SaaS
                  website, e-commerce platform, accounting interface, warehousing
                  system, landing page, or redesign, MoBiz.mu can help you create
                  a digital presence that feels more elegant, more executive, and
                  more ready for growth.
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
                    href="/services"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    Explore All Services
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