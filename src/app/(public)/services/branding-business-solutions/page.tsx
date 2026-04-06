import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Brush,
  CheckCircle2,
  FileBadge,
  FileText,
  FolderKanban,
  Layers3,
  LayoutTemplate,
  Palette,
  PenTool,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WandSparkles,
  BookText,
  Building2,
  MonitorSmartphone,
  Search,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Branding Services Mauritius | Brand Kits, Business Plans, Decks & Premium Visual Identity | MoBiz.mu",
  description:
    "MoBiz.mu provides premium branding and business solutions in Mauritius including logo direction, brand kits, templates, business plans, pitch decks, proposals, presentations, launch materials, and polished business assets for companies that want stronger positioning and trust.",
  keywords: [
    "Branding Mauritius",
    "Brand Kit Mauritius",
    "Logo Design Mauritius",
    "Business Plan Mauritius",
    "Pitch Deck Mauritius",
    "Proposal Design Mauritius",
    "Presentation Design Mauritius",
    "Business Solutions Mauritius",
    "Visual Identity Mauritius",
    "Brand Strategy Mauritius",
    "Professional Documents Mauritius",
    "Launch Materials Mauritius",
    "MoBiz.mu Branding",
  ],
  alternates: {
    canonical: `${siteUrl}/services/branding-business-solutions`,
  },
  openGraph: {
    title:
      "Premium Branding & Business Solutions in Mauritius | MoBiz.mu",
    description:
      "Executive branding and business support in Mauritius for logos, brand kits, proposals, decks, business plans, presentations, and premium launch materials.",
    url: `${siteUrl}/services/branding-business-solutions`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Branding & Business Solutions Mauritius | MoBiz.mu",
    description:
      "Premium branding support in Mauritius including brand kits, decks, proposals, business plans, and polished business launch assets.",
  },
};

const features = [
  "Logo direction and premium visual brand positioning",
  "Brand kit and template support for better consistency",
  "Proposal and presentation design for stronger credibility",
  "Business plan and pitch deck support for clearer communication",
  "Professional launch materials for startups and growing businesses",
  "Consistent premium visual identity across key business assets",
];

const idealFor = [
  "New brands launching professionally",
  "Businesses refreshing or upgrading their image",
  "Entrepreneurs needing decks, proposals, and business documents",
  "Companies seeking more premium market positioning",
];

const brandingSolutions = [
  {
    title: "Logo Direction",
    description:
      "Professional logo and identity direction for businesses that want a cleaner, more premium, and more memorable brand image.",
    icon: PenTool,
  },
  {
    title: "Brand Kit Support",
    description:
      "Structured brand kit creation including style direction, visual consistency, and reusable brand assets for a stronger professional presence.",
    icon: Palette,
  },
  {
    title: "Brand Templates",
    description:
      "Template support for recurring business materials so your brand stays polished and more visually consistent.",
    icon: LayoutTemplate,
  },
  {
    title: "Proposal Design",
    description:
      "Executive proposal design that helps businesses present offers and opportunities in a more serious and persuasive way.",
    icon: FileText,
  },
  {
    title: "Presentation Design",
    description:
      "Premium presentation and company profile support for meetings, corporate use, sales conversations, and professional communication.",
    icon: Presentation,
  },
  {
    title: "Business Plan Support",
    description:
      "Business plans structured to present your concept, opportunity, and business direction more clearly and professionally.",
    icon: BookText,
  },
  {
    title: "Pitch Deck Support",
    description:
      "Polished pitch deck design for founders and businesses that need stronger investor, partner, or opportunity presentations.",
    icon: FileBadge,
  },
  {
    title: "Launch Materials",
    description:
      "Professional launch assets for businesses entering the market and wanting a stronger first impression.",
    icon: WandSparkles,
  },
  {
    title: "Visual Identity Refinement",
    description:
      "Support for businesses that already exist but want to improve how their brand feels, looks, and communicates.",
    icon: Brush,
  },
  {
    title: "Business Document Styling",
    description:
      "Refinement of key documents and assets so your business appears more established, organized, and trustworthy.",
    icon: FolderKanban,
  },
  {
    title: "Premium Positioning Support",
    description:
      "Branding direction built to help businesses look more executive, more credible, and more aligned with serious growth.",
    icon: Target,
  },
  {
    title: "Custom Branding Solutions",
    description:
      "Tailored support depending on whether you need identity work, launch support, business documents, or full presentation improvement.",
    icon: BriefcaseBusiness,
  },
];

const businessExamples = [
  "Startups launching new brands",
  "Consultants and agencies",
  "Corporate and service businesses",
  "Retail and e-commerce brands",
  "Restaurants and hospitality brands",
  "Beauty and wellness businesses",
  "Construction and contracting companies",
  "Professional firms",
  "Entrepreneurs pitching ideas",
  "Businesses rebranding their image",
  "Founders preparing launch assets",
  "Companies needing polished documents and decks",
];

const keywordTags = [
  "branding Mauritius",
  "brand kit Mauritius",
  "logo design Mauritius",
  "business plan Mauritius",
  "pitch deck Mauritius",
  "proposal design Mauritius",
  "presentation design Mauritius",
  "visual identity Mauritius",
  "business solutions Mauritius",
  "launch materials Mauritius",
  "brand strategy Mauritius",
  "MoBiz.mu branding",
];

const processSteps = [
  {
    title: "Brand & Business Review",
    text: "We start by understanding your business, audience, positioning goals, and the kind of professional image you want to project.",
  },
  {
    title: "Creative Structure",
    text: "We shape the direction for your visual identity, business documents, and presentation assets so they feel more premium and consistent.",
  },
  {
    title: "Design & Refinement",
    text: "We refine the materials, layouts, and brand system to improve clarity, trust, and the overall professional standard of your business presentation.",
  },
  {
    title: "Launch & Positioning Readiness",
    text: "The final goal is to help your business present itself better, communicate more clearly, and move forward with stronger credibility.",
  },
];

const faqs = [
  {
    q: "What branding and business solutions does MoBiz.mu provide?",
    a: "MoBiz.mu provides branding and business solutions in Mauritius including logo direction, brand kit support, templates, proposal design, presentation design, business plan support, pitch deck support, launch materials, and premium business asset refinement.",
  },
  {
    q: "Can you help a new business launch professionally?",
    a: "Yes. We help new brands and startups build a stronger launch presentation through branding direction, business documents, decks, templates, and polished visual assets.",
  },
  {
    q: "Do you only help with logos?",
    a: "No. Branding support can include logo direction, brand kits, templates, business plans, decks, proposals, presentations, and broader brand positioning support.",
  },
  {
    q: "Is this service useful for existing businesses too?",
    a: "Yes. This service is also suitable for existing businesses that want to refresh their image, improve consistency, strengthen documents, and present themselves in a more premium way.",
  },
];

function BrandingJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Branding & Business Solutions",
    provider: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
    },
    areaServed: ["Mauritius", "Rodrigues", "Réunion"],
    serviceType: "Branding and Business Solutions",
    url: `${siteUrl}/services/branding-business-solutions`,
    description:
      "Premium branding and business solutions in Mauritius including brand kits, logo direction, proposals, presentations, business plans, pitch decks, and professional launch materials.",
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
      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(243,215,122,0.24),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(82,130,255,0.22),transparent_36%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)] p-4 shadow-[0_22px_60px_rgba(7,18,38,0.28)] backdrop-blur">
        <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#0c1832_0%,#112248_100%)] p-4">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
              <div className="h-3 w-24 rounded-full bg-white/15" />
              <div className="mt-3 h-8 w-4/5 rounded-full bg-[#f3d77a]/20" />
              <div className="mt-3 space-y-2">
                <div className="h-2.5 w-full rounded-full bg-white/10" />
                <div className="h-2.5 w-11/12 rounded-full bg-white/10" />
                <div className="h-2.5 w-9/12 rounded-full bg-white/10" />
              </div>
              <div className="mt-4 h-24 rounded-2xl bg-[linear-gradient(135deg,rgba(243,215,122,0.22),rgba(82,130,255,0.16))]" />
            </div>

            <div className="space-y-4">
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                <div className="h-3 w-16 rounded-full bg-white/15" />
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="h-11 rounded-xl bg-white/10" />
                  <div className="h-11 rounded-xl bg-[#f3d77a]/20" />
                </div>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                <div className="h-3 w-16 rounded-full bg-white/15" />
                <div className="mt-3 flex gap-2">
                  <div className="h-16 flex-1 rounded-2xl bg-white/10" />
                  <div className="h-16 flex-1 rounded-2xl bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BrandingBusinessSolutionsPage() {
  return (
    <>
      <BrandingJsonLd />
      <FaqJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Branding & Business Solutions Mauritius
                </div>

                <h1
                  className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Premium Branding and Business Support for Companies That Want Stronger Positioning
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  MoBiz.mu helps businesses create polished brand systems, stronger
                  visual consistency, clearer business documents, premium
                  presentations, and refined launch materials that improve
                  perception, trust, and professional positioning. Whether you are
                  launching a new brand or upgrading an existing one, we help your
                  business look more serious, more consistent, and more market-ready.
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
                    Request Branding Support
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
                  title: "Stronger Positioning",
                  text: "We help businesses look more premium, more consistent, and more established through stronger branding assets.",
                  icon: Target,
                },
                {
                  title: "Visual Consistency",
                  text: "Brand kits, templates, and refined assets help your business communicate with more polish and cohesion.",
                  icon: Layers3,
                },
                {
                  title: "Professional Presentation",
                  text: "Decks, proposals, and business documents are shaped to improve trust, clarity, and perceived quality.",
                  icon: Presentation,
                },
                {
                  title: "Launch Readiness",
                  text: "We help new and growing brands prepare the right materials to enter the market more confidently.",
                  icon: TrendingUp,
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
                  Premium Brand Support with Stronger Business Presentation
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Branding is not only about a logo. It is also about how your
                  business feels, how it communicates, how it presents documents,
                  and how consistent it looks across touchpoints. Our branding and
                  business solutions are designed to help businesses appear more
                  polished, more structured, and more credible in front of clients,
                  partners, and opportunities.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need logo direction, a brand kit, proposal design,
                  presentation support, a business plan, a pitch deck, or launch
                  materials, MoBiz.mu can help you build a stronger and more premium
                  business image.
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
                Branding Services We Support
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Real Support for Brand Identity, Documents, Decks, and Launch Materials
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                We provide premium branding and business support across the assets
                that shape how your company is seen, understood, and remembered.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {brandingSolutions.map((item) => {
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
                  Business Examples
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.8rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Ideal for Brands That Want to Look More Polished and More Premium
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  Our branding and business solutions are especially useful for
                  businesses that want stronger positioning, more polished
                  communication, and better consistency across their professional
                  materials. We help shape the assets that influence how people
                  perceive your business.
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
                How We Support Branding and Business Presentation
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
                  This page is structured to help MoBiz.mu build stronger search
                  relevance for branding, brand kits, business plans, pitch decks,
                  proposals, presentations, and visual identity terms related to
                  Mauritius and nearby markets.
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
                Branding & Business Solutions FAQ
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
                  Need Stronger Brand Positioning?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Help Your Business Look More Premium, Consistent, and Market-Ready
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need logo direction, a brand kit, proposal design,
                  presentation support, a business plan, a pitch deck, or premium
                  launch materials, MoBiz.mu can help you present your business in
                  a stronger and more professional way.
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