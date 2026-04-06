import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Globe2,
  Landmark,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  MonitorSmartphone,
  Palette,
  Calculator,
  PackageCheck,
  Megaphone,
  Users,
  Rocket,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Mauritius Services | Premium Business, Website, Marketing & Growth Solutions | MoBiz.mu",
  description:
    "Explore premium Mauritius-focused services by MoBiz.mu including website design, SEO, digital marketing, accounting support, logistics solutions, branding, WhatsApp-ready conversion systems, and executive business support for companies in Mauritius.",
  keywords: [
    "Mauritius services",
    "Business services Mauritius",
    "Website design Mauritius",
    "SEO Mauritius",
    "Digital marketing Mauritius",
    "Accounting Mauritius",
    "Logistics Mauritius",
    "Branding Mauritius",
    "WhatsApp business Mauritius",
    "Business growth Mauritius",
    "MoBiz.mu Mauritius services",
  ],
  alternates: {
    canonical: `${siteUrl}/mauritius-services`,
  },
  openGraph: {
    title:
      "Mauritius Services | Premium Business Solutions by MoBiz.mu",
    description:
      "Premium Mauritius-focused services including websites, SEO, digital marketing, branding, accounting, logistics, and business support.",
    url: `${siteUrl}/mauritius-services`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauritius Services | Premium Business Solutions by MoBiz.mu",
    description:
      "Discover premium Mauritius-focused business services built for stronger trust, visibility, and growth.",
  },
};

const localHighlights = [
  {
    title: "Mauritius-Focused Positioning",
    description:
      "Luxury website design and executive brand presentation tailored for the Mauritius market, with stronger trust, clarity, and premium business perception.",
    icon: MapPin,
    color:
      "bg-[linear-gradient(180deg,#ef4444_0%,#dc2626_55%,#b91c1c_100%)]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_34%)]",
  },
  {
    title: "Mauritius SEO & Conversion",
    description:
      "SEO structure for Mauritius searches, stronger local service intent, premium messaging, and conversion paths designed for serious buyers.",
    icon: Search,
    color:
      "bg-[linear-gradient(180deg,#3b82f6_0%,#2563eb_55%,#1d4ed8_100%)]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_34%)]",
  },
  {
    title: "WhatsApp-Ready Journeys",
    description:
      "Mobile-first customer journeys with faster inquiry flow, WhatsApp conversion, cleaner interaction, and smoother business decision-making.",
    icon: MessageCircle,
    color:
      "bg-[linear-gradient(180deg,#22c55e_0%,#16a34a_55%,#15803d_100%)]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(22,163,74,0.14),transparent_34%)]",
  },
  {
    title: "Complete Business Support",
    description:
      "From websites to accounting, tax, registration, logistics, visibility, and strategy, MoBiz.mu supports growth under one premium standard.",
    icon: Landmark,
    color:
      "bg-[linear-gradient(180deg,#facc15_0%,#eab308_55%,#ca8a04_100%)]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.14),transparent_34%)]",
  },
];

const quickPoints = [
  { label: "Mauritius-facing SEO", icon: Globe2 },
  { label: "Premium mobile UX", icon: BriefcaseBusiness },
  { label: "WhatsApp conversion", icon: MessageCircle },
  { label: "Business growth support", icon: TrendingUp },
];

const extraBenefits = [
  {
    title: "Built for local trust",
    text: "Cleaner presentation, stronger credibility, and more confidence for Mauritian customers, business clients, and decision-makers.",
    icon: ShieldCheck,
  },
  {
    title: "Made for real growth",
    text: "Not only design — the structure supports leads, calls, WhatsApp, visibility, and long-term business expansion in Mauritius.",
    icon: Building2,
  },
];

const serviceCategories = [
  {
    title: "Website Design & Development",
    text: "Premium business websites, custom platforms, e-commerce stores, and executive digital experiences for Mauritius-based businesses.",
    icon: Globe2,
    href: "/services/website-design",
  },
  {
    title: "Digital Marketing",
    text: "SEO, Meta Ads, Google Ads, content planning, and premium digital visibility support for Mauritian brands.",
    icon: Megaphone,
    href: "/services/digital-marketing",
  },
  {
    title: "Accounting & Tax Returns",
    text: "Bookkeeping, VAT support, tax returns, statutory filing, and structured financial support for businesses in Mauritius.",
    icon: Calculator,
    href: "/services/accounting-tax-returns",
  },
  {
    title: "Logistics Solutions",
    text: "Import-export setup, sourcing support, procurement help, and operational guidance for businesses with movement and supply needs.",
    icon: PackageCheck,
    href: "/services/logistics",
  },
  {
    title: "Branding & Business Solutions",
    text: "Brand kits, presentations, decks, proposals, business plans, and launch materials for stronger business positioning.",
    icon: Palette,
    href: "/services/branding-business-solutions",
  },
];

const marketAdvantages = [
  {
    title: "Stronger local relevance",
    text: "The page structure, messaging, and conversion flow are shaped specifically for Mauritius-focused services and buyer intent.",
  },
  {
    title: "Better trust in the market",
    text: "Premium visuals, executive copywriting, and clear business structure help your brand feel more serious and more established.",
  },
  {
    title: "Mobile-first lead readiness",
    text: "Many Mauritius-based users browse and inquire on mobile first, so the journey is shaped for faster action and smoother conversion.",
  },
  {
    title: "Broader business support",
    text: "MoBiz.mu gives businesses access to multiple service areas without losing consistency, quality, or premium presentation.",
  },
];

const faqs = [
  {
    q: "What does MoBiz.mu provide in Mauritius?",
    a: "MoBiz.mu provides Mauritius-focused services including premium website design, SEO, digital marketing, accounting and tax support, logistics solutions, branding, and executive business support.",
  },
  {
    q: "Why is this page focused on Mauritius services?",
    a: "This page is built to make MoBiz.mu more relevant for Mauritius-based search intent, local trust, and business decision-making while keeping a premium business standard.",
  },
  {
    q: "Are MoBiz.mu services mobile-friendly and SEO-ready?",
    a: "Yes. MoBiz.mu focuses on mobile responsiveness, stronger local SEO foundations, clearer conversion paths, and premium presentation quality.",
  },
  {
    q: "Can businesses outside Mauritius still work with MoBiz.mu?",
    a: "Yes. Mauritius is the main market focus for this page, but MoBiz.mu also supports businesses in Rodrigues, Réunion, and the wider Indian Ocean region depending on the project.",
  },
];

function MauritiusServicesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mauritius Business Services",
    provider: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
    },
    areaServed: ["Mauritius"],
    serviceType: "Business Services",
    url: `${siteUrl}/mauritius-services`,
    description:
      "Premium Mauritius-focused business services including website design, SEO, digital marketing, accounting, logistics, branding, and executive growth support.",
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

export default function MauritiusServicesPage() {
  return (
    <>
      <MauritiusServicesJsonLd />
      <FaqJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                <MapPin className="h-3.5 w-3.5" />
                Mauritius Market Focus
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Mauritius Services Built for Business Growth
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-8 text-[#44556f] sm:text-[16px] lg:text-[17px]">
                MoBiz.mu is built for the Mauritius market with a premium
                business approach that combines luxury digital presentation,
                stronger local SEO structure, mobile-first conversion, WhatsApp
                readiness, and practical service support for real business
                growth. This page is designed for companies that want a cleaner,
                more executive, and more trustworthy standard in how they
                present and grow their business locally.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_34px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Start With MoBiz.mu
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-5 xl:gap-6">
              <div className="relative overflow-hidden rounded-[28px] border border-[#e7ebf2] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,250,255,0.92)_100%)] p-5 shadow-[0_18px_40px_rgba(7,18,38,0.05)] backdrop-blur-[16px] sm:p-6 lg:p-7">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f3d77a]/70 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,215,122,0.08),transparent_24%),radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.06),transparent_24%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.05),transparent_24%)]" />

                <div className="relative z-10">
                  <div
                    className="inline-flex rounded-full border border-[#ead9a8] bg-[#fffdf7] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    Mauritius Service Highlights
                  </div>

                  <h2
                    className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.75rem] lg:leading-[1.04]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    Mauritius digital and business services with an executive luxury standard.
                  </h2>

                  <p
                    className="mt-3 max-w-3xl text-[14px] leading-7 text-slate-600 sm:text-[15px] lg:text-[15.5px]"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    MoBiz.mu is shaped for businesses in Mauritius that want
                    stronger visibility, cleaner presentation, mobile-friendly
                    conversion, and more complete business support under one
                    premium brand standard.
                  </p>
                </div>

                <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                  {localHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white/72 p-4 shadow-[0_10px_26px_rgba(7,18,38,0.04),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-[0_16px_32px_rgba(7,18,38,0.07)]"
                      >
                        <div
                          className={`pointer-events-none absolute inset-0 opacity-90 ${item.glow}`}
                        />
                        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                        <div className="relative z-10 flex items-start gap-3">
                          <div
                            className={`relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-white/20 text-white shadow-[0_10px_22px_rgba(7,18,38,0.10)] ${item.color}`}
                          >
                            <span className="pointer-events-none absolute inset-0 rounded-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_100%)]" />
                            <Icon className="relative z-10 h-4.5 w-4.5" />
                          </div>

                          <div className="min-w-0">
                            <h3
                              className="text-[15px] font-semibold tracking-tight text-[#071226] sm:text-base"
                              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                            >
                              {item.title}
                            </h3>
                            <p
                              className="mt-1.5 text-[13px] leading-6 text-slate-600 sm:text-sm"
                              style={{ fontFamily: '"Poppins", sans-serif' }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-[#1e335f] bg-[linear-gradient(180deg,#071226_0%,#0c1b3f_52%,#102852_100%)] p-5 text-white shadow-[0_22px_52px_rgba(7,18,38,0.14)] sm:p-6 lg:p-7">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f3d77a]/60 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f3d77a]/10 blur-3xl" />
                <div className="pointer-events-none absolute left-0 top-8 h-28 w-28 rounded-full bg-white/5 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(243,215,122,0.08),transparent_26%)]" />

                <div className="relative z-10">
                  <div
                    className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a] sm:text-[11px]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    Luxury Business Advantage
                  </div>

                  <h3
                    className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight sm:text-[2.15rem] lg:text-[2.4rem] lg:leading-[1.05]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    A stronger digital and business standard tailored for Mauritius.
                  </h3>

                  <p
                    className="mt-3 text-[14px] leading-7 text-white/78 sm:text-[15px]"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    This page is crafted for Mauritian businesses that want a
                    more premium image, stronger credibility, smoother mobile
                    conversion, and a cleaner online experience that feels
                    world-class while still being locally relevant.
                  </p>
                </div>

                <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                  {quickPoints.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.10] px-4 py-3 backdrop-blur-md"
                      >
                        <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#071226] shadow-[0_8px_18px_rgba(255,255,255,0.07)]">
                          <Icon className="h-4.5 w-4.5" />
                        </div>

                        <div
                          className="text-[13px] font-medium text-white sm:text-sm"
                          style={{ fontFamily: '"Poppins", sans-serif' }}
                        >
                          {item.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative z-10 mt-5 grid gap-3">
                  {extraBenefits.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[20px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-md"
                      >
                        <div className="flex items-start gap-3">
                          <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white/12 text-[#f3d77a]">
                            <Icon className="h-4.5 w-4.5" />
                          </div>

                          <div>
                            <h4
                              className="text-sm font-semibold text-white"
                              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                            >
                              {item.title}
                            </h4>
                            <p
                              className="mt-1.5 text-[13px] leading-6 text-white/74 sm:text-sm"
                              style={{ fontFamily: '"Poppins", sans-serif' }}
                            >
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative z-10 mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#d9c27c]/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Work With MoBiz.mu
                    <ArrowRight className="h-4 w-4 text-[#f3d77a]" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
              <div>
                <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  Mauritius Business Context
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Local Relevance Matters When Businesses Want Real Results
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Businesses in Mauritius often need solutions that balance local
                  trust, fast communication, mobile-first user habits, and
                  premium presentation. A business can have a good service, but
                  still lose opportunities if the digital experience feels weak,
                  outdated, slow, or not credible enough.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  That is why MoBiz.mu focuses on business experiences that are
                  not only visually strong, but also strategically built for
                  Mauritius search intent, stronger conversion paths, and better
                  business positioning in the local market.
                </p>
              </div>

              <div className="grid gap-3">
                {marketAdvantages.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-[#e7edf5] bg-white p-5 shadow-[0_10px_24px_rgba(7,18,38,0.04)]"
                  >
                    <h3
                      className="text-lg font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
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
                Service Categories
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Service Areas for Businesses in Mauritius
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                MoBiz.mu supports Mauritian businesses through multiple premium
                service areas designed to improve visibility, presentation,
                operations, and business growth under one cleaner and more
                executive standard.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {serviceCategories.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_16px_32px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(7,18,38,0.08)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3
                      className="mt-4 text-lg font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8b6a18] group-hover:text-[#071226]">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
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
                  Why Businesses Choose This Direction
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.8rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  A Better Standard for Mauritius Visibility, Trust, and Conversion
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  Mauritius-focused service pages should not feel generic. They
                  should communicate local understanding, stronger business
                  standards, faster inquiry readiness, and clearer value. That is
                  why this page is designed to support both SEO intent and client
                  confidence at the same time.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "Premium local business positioning",
                    "Stronger Mauritius SEO relevance",
                    "Better mobile and WhatsApp conversion flow",
                    "Clearer trust signals for serious buyers",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f3d77a]" />
                      <p className="text-sm leading-7 text-white/82">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Mauritius business websites",
                  "Mauritius local SEO",
                  "WhatsApp-first conversion",
                  "Premium digital presentation",
                  "Executive brand trust",
                  "Multi-service business support",
                ].map((item) => (
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
                Mauritius Services FAQ
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
                  <Rocket className="h-3.5 w-3.5" />
                  Ready to Grow in Mauritius?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Help Your Business Look Stronger and Convert Better
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need a premium website, stronger digital
                  visibility, accounting support, logistics coordination, or a
                  more polished business image in Mauritius, MoBiz.mu is ready to
                  help you move forward with a higher standard.
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
                    View Portfolio
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