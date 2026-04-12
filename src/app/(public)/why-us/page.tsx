import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  Globe,
  Megaphone,
  MonitorSmartphone,
  PackageCheck,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Why Choose MoBiz.mu | Premium Websites, Marketing, Accounting & Business Solutions in Mauritius",
  description:
    "Discover why businesses choose MoBiz.mu for premium website design, digital marketing, accounting support, logistics solutions, branding, and executive business growth services in Mauritius.",
  keywords: [
    "Why Choose MoBiz.mu",
    "MoBiz.mu Mauritius",
    "Website Design Mauritius",
    "Digital Marketing Mauritius",
    "Accounting Services Mauritius",
    "Business Solutions Mauritius",
    "Branding Mauritius",
    "Logistics Mauritius",
    "Premium Agency Mauritius",
    "Executive Business Services Mauritius",
  ],
  alternates: {
    canonical: `${siteUrl}/why-us`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Why Choose MoBiz.mu | Premium Business Solutions in Mauritius",
    description:
      "Learn why businesses in Mauritius choose MoBiz.mu for premium websites, marketing, accounting, logistics, branding, and business growth support.",
    url: `${siteUrl}/why-us`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose MoBiz.mu | Premium Business Solutions in Mauritius",
    description:
      "Learn why businesses in Mauritius choose MoBiz.mu for premium websites, marketing, accounting, logistics, branding, and business growth support.",
  },
};

const keyReasons = [
  {
    title: "Premium Business Presentation",
    text: "We help businesses look more polished, more credible, and more executive through stronger digital and brand presentation.",
    icon: Sparkles,
  },
  {
    title: "One Business Ecosystem",
    text: "Websites, marketing, accounting, branding, logistics, and business support can be managed through one structured partner.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Mobile-First Standards",
    text: "Your business must perform well on mobile. We build for real-world usage across phones, tablets, and desktop screens.",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO & Growth Awareness",
    text: "We think beyond design and consider search visibility, conversion clarity, performance, and long-term growth potential.",
    icon: Search,
  },
];

const serviceCategories = [
  {
    title: "Website Design & Development",
    text: "Premium business websites, custom websites, e-commerce stores, and digital experiences built for stronger trust and conversion.",
    icon: Globe,
    href: "/services/website-design",
  },
  {
    title: "Digital Marketing",
    text: "SEO, social media, paid campaigns, and growth-focused digital communication for businesses that want stronger visibility.",
    icon: Megaphone,
    href: "/services/digital-marketing",
  },
  {
    title: "Accounting & Tax Support",
    text: "Bookkeeping, VAT support, tax filing, and structured accounting services that help businesses stay clearer and better organized.",
    icon: Calculator,
    href: "/services/accounting-tax-returns",
  },
  {
    title: "Logistics Solutions",
    text: "Import-export setup, sourcing, procurement support, and logistics guidance for smoother business operations.",
    icon: PackageCheck,
    href: "/services/logistics",
  },
  {
    title: "Branding & Business Solutions",
    text: "Brand kits, proposals, pitch decks, presentations, and launch-ready materials that improve business image and confidence.",
    icon: Palette,
    href: "/services/branding-business-solutions",
  },
];

const advantages = [
  "Stronger premium brand image for businesses in Mauritius.",
  "Cleaner websites and digital assets designed to build trust faster.",
  "A more business-minded approach instead of design without strategy.",
  "Better support for companies that want structure, clarity, and growth.",
  "Mobile responsiveness and SEO readiness built into the thinking from the start.",
  "A broader executive service model instead of one isolated service at a time.",
];

const workSteps = [
  {
    title: "We Understand Your Business",
    text: "We begin by understanding your services, target audience, market position, and what your business needs to improve.",
  },
  {
    title: "We Build Better Direction",
    text: "We create a clearer direction around structure, messaging, visual presentation, and business priorities.",
  },
  {
    title: "We Refine the Quality",
    text: "We improve details, polish the presentation, and make the final result feel more premium and more complete.",
  },
  {
    title: "We Support Long-Term Growth",
    text: "The goal is not just launch. The goal is a stronger business presence with better confidence, trust, and performance.",
  },
];

const faqs = [
  {
    q: "Why choose MoBiz.mu?",
    a: "Businesses choose MoBiz.mu because we combine premium presentation, stronger business thinking, mobile responsiveness, SEO awareness, and multiple executive services under one ecosystem.",
  },
  {
    q: "What makes MoBiz.mu different?",
    a: "MoBiz.mu focuses on helping businesses look better, communicate more clearly, and operate more professionally through websites, marketing, accounting, logistics, branding, and business support.",
  },
  {
    q: "Who is MoBiz.mu for?",
    a: "MoBiz.mu works with startups, entrepreneurs, SMEs, and established companies in Mauritius that want a stronger and more premium business presence.",
  },
  {
    q: "Does MoBiz.mu only offer website services?",
    a: "No. MoBiz.mu also provides digital marketing, accounting support, logistics solutions, branding, business plans, decks, and executive business support services.",
  },
];

function WhyUsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Why Choose MoBiz.mu",
    url: `${siteUrl}/why-us`,
    description:
      "Why businesses choose MoBiz.mu for premium website design, digital marketing, accounting, logistics, branding, and business support in Mauritius.",
    mainEntity: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
      areaServed: ["Mauritius", "Rodrigues", "Réunion"],
      description:
        "Premium business solutions company helping brands grow through websites, digital marketing, accounting, logistics, branding, and business support.",
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

export default function WhyUsPage() {
  return (
    <>
      <WhyUsJsonLd />
      <FaqJsonLd />

      <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <Sparkles className="h-3.5 w-3.5" />
                Why MoBiz.mu
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Why Businesses Choose MoBiz.mu for Premium Growth in Mauritius
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                MoBiz.mu helps businesses in Mauritius build stronger credibility,
                better digital presentation, and more executive business structure
                through websites, marketing, accounting, logistics, branding, and
                growth-focused support.
              </p>

              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Work With MoBiz.mu
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-5 py-2.5 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  Explore Services
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
                  Our Approach
                </div>

                <h2
                  className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.7rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Built for Businesses That Want to Look Better and Perform Better
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  MoBiz.mu was created for businesses that want more than basic
                  execution. We help brands look more premium, communicate more
                  clearly, and move forward with stronger business structure and
                  market confidence.
                </p>

                <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  From premium websites and SEO-aware digital experiences to
                  digital marketing, accounting support, logistics solutions, and
                  brand systems, our focus is always quality, trust, and better
                  business positioning.
                </p>
              </div>

              <div className="grid gap-3">
                {advantages.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[20px] border border-[#e7edf5] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)]"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8b6a18]" />
                    <p className="text-[14px] leading-7 text-[#20314d]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-5 text-white shadow-[0_22px_52px_rgba(7,18,38,0.16)] sm:p-7 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a] sm:text-[11px]">
                    Our Vision
                  </div>

                  <h2
                    className="mt-4 text-[1.8rem] font-semibold tracking-tight sm:text-[2.2rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    To Become a Leading Premium Business Solutions Brand in the Indian Ocean Region
                  </h2>

                  <p className="mt-4 text-[14px] leading-7 text-white/78 sm:text-[15px]">
                    Our vision is to help businesses across Mauritius, Rodrigues,
                    Réunion, and the wider Indian Ocean region operate and present
                    themselves at a higher level through premium execution and
                    stronger professionalism.
                  </p>
                </div>

                <div>
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a] sm:text-[11px]">
                    Our Mission
                  </div>

                  <h2
                    className="mt-4 text-[1.8rem] font-semibold tracking-tight sm:text-[2.2rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    To Help Businesses Grow Through Better Presentation, Better Structure, and Better Support
                  </h2>

                  <p className="mt-4 text-[14px] leading-7 text-white/78 sm:text-[15px]">
                    Our mission is to deliver websites, marketing, accounting,
                    logistics, branding, and business support services that help
                    companies build trust, improve clarity, and grow with more
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                Service Ecosystem
              </div>

              <h2
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.8rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Service Areas That Help Businesses Move Forward
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                MoBiz.mu is built as a connected business ecosystem that supports
                presentation, visibility, structure, and growth across multiple
                service areas.
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
                A Clear Process Built Around Quality and Business Clarity
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
                Why MoBiz.mu FAQ
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
                  Ready to Work Together?
                </div>

                <h2
                  className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.4rem] lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Help Your Business Look More Premium and Grow More Confidently
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  Whether you need a premium website, stronger marketing,
                  accounting support, logistics coordination, or a more polished
                  business image, MoBiz.mu is here to help you move forward with
                  stronger standards and better business results.
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