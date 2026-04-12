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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mauritius Services | Premium Business Solutions by MoBiz.mu",
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

const keyReasons = [
  {
    title: "Mauritius-Focused Positioning",
    text: "Premium service direction shaped for Mauritian businesses, local trust, and stronger market relevance.",
    icon: MapPin,
  },
  {
    title: "Mauritius SEO & Conversion",
    text: "Built around local search visibility, stronger service intent, better trust, and serious buyer conversion flow.",
    icon: Search,
  },
  {
    title: "WhatsApp-Ready Journeys",
    text: "Cleaner mobile-first customer journeys that make inquiry, response, and conversion easier for Mauritius-based clients.",
    icon: MessageCircle,
  },
  {
    title: "Complete Business Support",
    text: "From websites to accounting, logistics, branding, and growth support, MoBiz.mu helps under one premium standard.",
    icon: Landmark,
  },
];

const quickPoints = [
  "Mauritius-facing SEO",
  "Premium mobile UX",
  "WhatsApp conversion flow",
  "Stronger business trust",
  "Executive presentation",
  "Growth-focused structure",
];

const marketAdvantages = [
  {
    title: "Stronger local relevance",
    text: "The page structure, messaging, and service presentation are shaped specifically for Mauritius-focused visibility and buyer intent.",
  },
  {
    title: "Better trust in the market",
    text: "Premium visuals, executive copywriting, and cleaner structure help your business feel more serious and more established.",
  },
  {
    title: "Mobile-first lead readiness",
    text: "Many Mauritius-based users browse and inquire on mobile first, so the journey is shaped for faster action and smoother conversion.",
  },
  {
    title: "Broader business support",
    text: "MoBiz.mu gives businesses access to multiple premium service areas without losing consistency, quality, or professionalism.",
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

const workSteps = [
  {
    title: "We Understand the Business",
    text: "We begin by understanding your services, market, goals, customer type, and how your business needs to appear in Mauritius.",
  },
  {
    title: "We Build Better Direction",
    text: "We shape a stronger direction around service structure, digital presentation, conversion flow, and market positioning.",
  },
  {
    title: "We Refine the Quality",
    text: "We improve the clarity, polish, consistency, and premium feel so the final result looks stronger and performs better.",
  },
  {
    title: "We Support Growth",
    text: "The goal is not just a launch. The goal is stronger trust, stronger visibility, and better business movement over time.",
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

      <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <MapPin className="h-3.5 w-3.5" />
                Mauritius Market Focus
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Mauritius Services Built for Business Growth
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                MoBiz.mu is built for the Mauritius market with a premium business
                approach that combines stronger local trust, cleaner digital
                presentation, mobile-first conversion, WhatsApp readiness, and
                business support designed for real growth.
              </p>

              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Start With MoBiz.mu
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-5 py-2.5 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {keyReasons.map((item) => {
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
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-4 sm:py-6 lg:py-8">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  Mauritius Business Context
                </div>

                <h2
                  className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.7rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Local Relevance Matters When Businesses Want Real Results
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  Businesses in Mauritius often need solutions that balance local
                  trust, fast communication, mobile-first user habits, and premium
                  presentation. A business can lose opportunities when the digital
                  experience feels weak, outdated, slow, or not credible enough.
                </p>

                <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  That is why MoBiz.mu focuses on business experiences that are
                  not only visually strong, but also strategically built for
                  Mauritius search intent, stronger conversion paths, and better
                  business positioning in the local market.
                </p>
              </div>

              <div className="grid gap-3">
                {marketAdvantages.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[20px] border border-[#e7edf5] bg-white p-5 shadow-[0_10px_24px_rgba(7,18,38,0.04)]"
                  >
                    <h3
                      className="text-[1.05rem] font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-5 text-white shadow-[0_22px_52px_rgba(7,18,38,0.16)] sm:p-7 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a] sm:text-[11px]">
                    Why Businesses Choose This Direction
                  </div>

                  <h2
                    className="mt-4 text-balance text-[1.8rem] font-semibold tracking-tight sm:text-[2.2rem] lg:text-[2.7rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    A Better Standard for Mauritius Visibility, Trust, and Conversion
                  </h2>

                  <p className="mt-4 text-[14px] leading-7 text-white/78 sm:text-[15px]">
                    Mauritius-focused service pages should not feel generic. They
                    should communicate local understanding, stronger business
                    standards, faster inquiry readiness, and clearer value at the
                    same time.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {quickPoints.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/84"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                Service Categories
              </div>

              <h2
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.8rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Service Areas for Businesses in Mauritius
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                MoBiz.mu supports Mauritian businesses through multiple premium
                service areas designed to improve visibility, presentation,
                operations, and business growth under one executive standard.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {serviceCategories.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-[22px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(7,18,38,0.08)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3
                      className="mt-4 text-[1.05rem] font-semibold tracking-tight text-[#071226]"
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

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                How We Work
              </div>

              <h2
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.8rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                A Clear Process Built Around Better Business Results
              </h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {workSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[22px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ead8a1] bg-[#fff9ea] text-sm font-semibold text-[#8b6a18]">
                    {index + 1}
                  </div>

                  <h3
                    className="mt-4 text-[1.08rem] font-semibold tracking-tight text-[#071226]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#4a5b76]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-[#e8edf5] bg-[#fbfcfe] py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                FAQ
              </div>

              <h2
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Mauritius Services FAQ
              </h2>
            </div>

            <div className="mt-6 space-y-3">
              {faqs.map((item) => (
                <article
                  key={item.q}
                  className="rounded-[22px] border border-[#e4eaf2] bg-white p-5 shadow-[0_12px_26px_rgba(7,18,38,0.04)] sm:p-6"
                >
                  <h3
                    className="text-[1.05rem] font-semibold tracking-tight text-[#071226]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {item.q}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-6 text-center shadow-[0_18px_40px_rgba(7,18,38,0.05)] sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  <Rocket className="h-3.5 w-3.5" />
                  Ready to Grow in Mauritius?
                </div>

                <h2
                  className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.4rem] lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Help Your Business Look Stronger and Convert Better
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  Whether you need a premium website, stronger digital visibility,
                  accounting support, logistics coordination, or a more polished
                  business image in Mauritius, MoBiz.mu is ready to help you move
                  forward with a higher standard.
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