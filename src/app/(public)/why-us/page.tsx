import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Globe,
  LineChart,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Target,
  BriefcaseBusiness,
  Calculator,
  PackageCheck,
  Palette,
  Rocket,
  Building2,
  Search,
  MonitorSmartphone,
  Users,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "About MoBiz.mu | Premium Business Solutions, Websites, Marketing & Growth in Mauritius",
  description:
    "Learn about MoBiz.mu, a premium business solutions company in Mauritius offering executive website design, digital marketing, accounting support, logistics solutions, branding, and business growth services for Mauritius, Rodrigues, Réunion, and the Indian Ocean region.",
  keywords: [
    "About MoBiz.mu",
    "MoBiz.mu Mauritius",
    "Business Solutions Mauritius",
    "Website Design Mauritius",
    "Digital Marketing Mauritius",
    "Accounting Services Mauritius",
    "Logistics Mauritius",
    "Branding Mauritius",
    "Business Growth Mauritius",
    "Premium Agency Mauritius",
    "Executive Business Services Mauritius",
    "Indian Ocean Business Solutions",
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title:
      "About MoBiz.mu | Premium Business Solutions in Mauritius",
    description:
      "MoBiz.mu helps businesses in Mauritius grow through premium websites, marketing, accounting, logistics, branding, and business support services.",
    url: `${siteUrl}/about`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MoBiz.mu | Premium Business Solutions in Mauritius",
    description:
      "Discover MoBiz.mu’s mission, vision, approach, and premium business services for Mauritius and the Indian Ocean region.",
  },
};

const whyImages = [
  {
    src: "/images/whyus/1.png",
    alt: "Premium executive business image representing website design and digital growth services in Mauritius",
    title: "Website Design & Digital Presence",
    text: "Luxury website experiences, mobile-first execution, and stronger online authority for serious businesses.",
  },
  {
    src: "/images/whyus/2.png",
    alt: "Luxury professional business image representing premium company support and brand authority in Mauritius",
    title: "Business Support & Professional Structure",
    text: "Executive support that helps companies look more established, more organized, and more market-ready.",
  },
  {
    src: "/images/whyus/3.jpeg",
    alt: "Executive service image representing premium digital marketing, branding, and business solutions in Mauritius",
    title: "Branding, Marketing & Visibility",
    text: "Premium communication, stronger presentation, and more strategic growth support for businesses in Mauritius.",
  },
  {
    src: "/images/whyus/4.png",
    alt: "High-end business image representing trusted accounting, logistics, and strategic support for companies in Mauritius",
    title: "Accounting, Logistics & Business Operations",
    text: "Structured services that help companies operate with greater confidence, compliance, and clarity.",
  },
];

const whyChoosePoints = [
  "Premium website design in Mauritius with stronger visual presentation and conversion-focused structure.",
  "Executive support across digital marketing, accounting services, logistics solutions, and branding.",
  "Mobile-first experiences with strong SEO foundations for Mauritius, Rodrigues, Réunion, and the Indian Ocean region.",
  "Professional business positioning that helps brands look more established, trustworthy, and market-ready.",
];

const serviceCategories = [
  {
    title: "Website Design & Development",
    text: "Premium business websites, custom digital platforms, e-commerce stores, SaaS websites, and conversion-focused online experiences.",
    icon: Globe,
    href: "/services/website-design",
  },
  {
    title: "Digital Marketing",
    text: "SEO, Meta Ads, Google Ads, content strategy, and premium digital communication built around visibility and lead growth.",
    icon: Megaphone,
    href: "/services/digital-marketing",
  },
  {
    title: "Accounting & Tax Returns",
    text: "Structured bookkeeping, VAT support, tax returns, statutory filing, and accounting guidance for businesses in Mauritius.",
    icon: Calculator,
    href: "/services/accounting-tax-returns",
  },
  {
    title: "Logistics Solutions",
    text: "Import-export setup, procurement support, sourcing assistance, operational guidance, and logistics-related business support.",
    icon: PackageCheck,
    href: "/services/logistics",
  },
  {
    title: "Branding & Business Solutions",
    text: "Brand kits, proposals, business plans, decks, presentations, and premium launch materials for stronger positioning.",
    icon: Palette,
    href: "/services/branding-business-solutions",
  },
];

const advantages = [
  {
    title: "One Premium Business Ecosystem",
    text: "Instead of working with multiple disconnected providers, businesses can access website design, marketing, branding, accounting, and logistics support in one structured ecosystem.",
    icon: Building2,
  },
  {
    title: "Executive Brand Presentation",
    text: "We care deeply about how your business is perceived. The result is a cleaner, more premium, and more trustworthy market presence.",
    icon: Sparkles,
  },
  {
    title: "SEO & Growth Awareness",
    text: "We do not think only in design terms. We also think in search visibility, conversion flow, mobile performance, and long-term growth potential.",
    icon: Search,
  },
  {
    title: "Mobile-First Business Standards",
    text: "Today’s business visitors often arrive on mobile first. We build and shape experiences that stay strong across devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Business-Minded Strategy",
    text: "We think beyond visuals and focus on trust, positioning, operations, clarity, and how each solution supports real business outcomes.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Regional Market Awareness",
    text: "MoBiz.mu is built with Mauritius first, while also supporting the wider opportunity across Rodrigues, Réunion, and the Indian Ocean market.",
    icon: Users,
  },
];

const workSteps = [
  {
    title: "We Listen First",
    text: "Every good result starts with understanding the business properly. We look at your services, market, brand level, and what you want to achieve.",
  },
  {
    title: "We Build Clear Direction",
    text: "Once we understand your goals, we shape a cleaner and more strategic direction around design, content, service structure, and growth priorities.",
  },
  {
    title: "We Refine the Details",
    text: "We work on presentation, consistency, messaging, user experience, and quality so the final result feels more executive and more complete.",
  },
  {
    title: "We Support Long-Term Growth",
    text: "The goal is never only to launch something. It is to help your business move forward with stronger trust, stronger visibility, and better performance.",
  },
];

const faqs = [
  {
    q: "What is MoBiz.mu?",
    a: "MoBiz.mu is a premium business solutions company in Mauritius that helps businesses grow through website design, digital marketing, accounting support, logistics solutions, branding, and business presentation services.",
  },
  {
    q: "Who does MoBiz.mu work with?",
    a: "MoBiz.mu works with startups, SMEs, growing companies, entrepreneurs, and established businesses that want a stronger digital presence and more professional business support.",
  },
  {
    q: "Does MoBiz.mu only serve Mauritius?",
    a: "Mauritius is the main focus, but the business direction also supports Rodrigues, Réunion, and the wider Indian Ocean region depending on the project.",
  },
  {
    q: "Why choose MoBiz.mu?",
    a: "Businesses choose MoBiz.mu for premium presentation, stronger business thinking, mobile responsiveness, SEO awareness, and the ability to access multiple executive-level services in one ecosystem.",
  },
];

function AboutJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MoBiz.mu",
    url: `${siteUrl}/about`,
    description:
      "About MoBiz.mu, a premium business solutions company in Mauritius providing websites, marketing, accounting, logistics, branding, and business support services.",
    mainEntity: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
      areaServed: ["Mauritius", "Rodrigues", "Réunion"],
      description:
        "Premium business solutions company helping brands grow through websites, marketing, accounting, logistics, branding, and executive business support.",
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

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
      <FaqJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                <Sparkles className="h-3.5 w-3.5" />
                About MoBiz.mu
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Business Solutions Built for Modern Growth in Mauritius
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-8 text-[#44556f] sm:text-[16px] lg:text-[17px]">
                MoBiz.mu is built for businesses in Mauritius, Rodrigues,
                Réunion, and the wider Indian Ocean region that want to look more
                premium, operate more professionally, and grow with stronger
                digital and business support. We bring together website design,
                digital marketing, accounting support, logistics solutions, and
                branding with business solutions into one executive-standard
                service ecosystem.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_34px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Work With MoBiz.mu
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Premium Standards",
                  text: "We aim for cleaner presentation, stronger structure, and a more executive result across every service we provide.",
                  icon: Sparkles,
                },
                {
                  title: "Growth Focused",
                  text: "Our work is shaped not only for visual quality, but also for visibility, trust, and better long-term business growth.",
                  icon: LineChart,
                },
                {
                  title: "Business Oriented",
                  text: "We think in terms of real business value, clear positioning, operational support, and decision-making confidence.",
                  icon: BriefcaseBusiness,
                },
                {
                  title: "Mauritius First",
                  text: "We are built around the needs of businesses in Mauritius while also supporting wider Indian Ocean opportunities.",
                  icon: Globe,
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
            <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div>
                <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  About Us
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Built for Businesses That Want to Look Better and Grow Better
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  MoBiz.mu was created for businesses that want more than basic
                  service execution. We believe strong growth starts with strong
                  presentation, stronger structure, and clearer business thinking.
                  That is why our work focuses on helping companies appear more
                  premium, communicate more clearly, and operate with more
                  confidence.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  From luxury website design and SEO-ready digital experiences to
                  digital marketing, accounting support, logistics coordination,
                  brand systems, and executive business assets, MoBiz.mu is shaped
                  as a premium partner for businesses that want to move at a
                  higher level in Mauritius.
                </p>
              </div>

              <div className="grid gap-3">
                {whyChoosePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[22px] border border-[#e7edf5] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)]"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8b6a18]" />
                    <p className="text-[14px] leading-7 text-[#20314d]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 overflow-hidden rounded-[34px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-6 text-white shadow-[0_26px_60px_rgba(7,18,38,0.18)] sm:p-8 lg:grid-cols-2 lg:p-10">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                  Our Vision
                </div>

                <h2
                  className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  To Become a Leading Premium Business Solutions Brand in the Indian Ocean Region
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  Our vision is to help businesses across Mauritius, Rodrigues,
                  Réunion, and the wider Indian Ocean region operate and present
                  themselves at a much higher level. We want MoBiz.mu to stand for
                  premium execution, stronger professionalism, smarter digital
                  growth, and a more executive standard of business support.
                </p>
              </div>

              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                  Our Mission
                </div>

                <h2
                  className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  To Help Businesses Grow Through Better Presentation, Better Structure, and Better Support
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  Our mission is to deliver websites, marketing, accounting,
                  logistics, branding, and business support services that help
                  businesses build trust, improve operations, and grow with more
                  confidence. We focus on quality, clarity, consistency, and
                  solutions that make a real difference to how a business performs.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Our Categories
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Service Areas That Power Business Growth
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                These service categories represent the premium ecosystem behind
                MoBiz.mu. Each one is designed to help businesses present
                themselves better, operate more professionally, and move forward
                with stronger clarity and confidence.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {whyImages.map((item, index) => (
                <article
                  key={item.src}
                  className="group overflow-hidden rounded-[28px] border border-[#e6ebf2] bg-white shadow-[0_18px_38px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(7,18,38,0.08)]"
                >
                  <div className="relative h-[320px] overflow-hidden bg-slate-50">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      priority={index < 2}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3
                      className="text-xl font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                How We Proceed
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                A Clear Process Built Around Quality and Business Clarity
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {workSteps.map((step, index) => (
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
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-[#e6ebf2] bg-white p-6 shadow-[0_18px_38px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5.5 w-5.5" />
                    </div>

                    <h2
                      className="mt-4 text-xl font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h2>

                    <p className="mt-3 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Our Services
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Service Areas That Help Businesses Move Forward
              </h2>
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
                About MoBiz.mu FAQ
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
                  Ready to Work Together?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Help Your Business Look More Premium and Grow More Confidently
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need a premium website, stronger marketing,
                  structured accounting support, better logistics coordination, or
                  a more polished business image, MoBiz.mu is here to help you
                  move forward with higher standards and stronger business
                  results.
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