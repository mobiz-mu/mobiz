import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  LayoutGrid,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  PenSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  MessageSquareText,
  MousePointerClick,
  ChartNoAxesCombined,
  Building2,
  Instagram,
  RadioTower,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Digital Marketing Mauritius | SEO, Google Ads, Meta Ads & Content Strategy | MoBiz.mu",
  description:
    "MoBiz.mu provides premium digital marketing services in Mauritius including SEO, content strategy, Meta Ads, Google Ads, creative direction, social media support, and lead-focused campaigns designed to increase visibility, traffic, and business growth.",
  keywords: [
    "Digital Marketing Mauritius",
    "SEO Mauritius",
    "Google Ads Mauritius",
    "Meta Ads Mauritius",
    "Social Media Marketing Mauritius",
    "Content Strategy Mauritius",
    "Lead Generation Mauritius",
    "Paid Ads Mauritius",
    "Brand Marketing Mauritius",
    "Campaign Strategy Mauritius",
    "On Page SEO Mauritius",
    "Business Marketing Mauritius",
    "MoBiz.mu Digital Marketing",
  ],
  alternates: {
    canonical: `${siteUrl}/services/digital-marketing`,
  },
  openGraph: {
    title:
      "Premium Digital Marketing in Mauritius | SEO, Ads, Content & Lead Growth",
    description:
      "Executive digital marketing services in Mauritius for businesses that want stronger visibility, better campaign structure, premium content direction, and more qualified leads.",
    url: `${siteUrl}/services/digital-marketing`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Mauritius | MoBiz.mu",
    description:
      "Premium digital marketing support in Mauritius including SEO, Meta Ads, Google Ads, content planning, and lead-focused campaigns.",
  },
};

const features = [
  "SEO and on-page optimization to improve search visibility and page relevance",
  "Meta Ads campaign strategy for awareness, engagement, and lead generation",
  "Google Ads support for targeted search and performance-focused campaigns",
  "Content planning, captions, messaging, and campaign communication structure",
  "Brand-aligned creative direction for a more premium and consistent digital presence",
  "Lead-focused marketing systems built around business growth and visibility",
];

const idealFor = [
  "Businesses that want more website traffic and stronger digital visibility",
  "Companies launching new services, promotions, or offers",
  "Brands that need stronger lead generation and campaign clarity",
  "Businesses scaling awareness in Mauritius and the wider region",
];

const marketingSolutions = [
  {
    title: "SEO Services",
    description:
      "Search-focused optimization to improve rankings, visibility, content structure, and discoverability across relevant business keywords.",
    icon: Search,
  },
  {
    title: "On-Page SEO",
    description:
      "Optimization of headings, metadata, keywords, content blocks, and internal structure for stronger search performance.",
    icon: LayoutGrid,
  },
  {
    title: "Google Ads Support",
    description:
      "Campaign support for businesses that want targeted visibility, better traffic intent, and results-driven advertising structure.",
    icon: Target,
  },
  {
    title: "Meta Ads Campaigns",
    description:
      "Strategic campaigns for Facebook and Instagram designed to improve awareness, reach, engagement, and conversions.",
    icon: Instagram,
  },
  {
    title: "Content Strategy",
    description:
      "Content planning built around brand messaging, audience intent, campaign goals, and long-term visibility.",
    icon: PenSquare,
  },
  {
    title: "Social Media Direction",
    description:
      "Premium content direction and communication support for businesses that want stronger presentation across platforms.",
    icon: MessageSquareText,
  },
  {
    title: "Lead Generation Campaigns",
    description:
      "Marketing systems designed to help businesses attract inquiries, build trust, and generate more qualified interest.",
    icon: MousePointerClick,
  },
  {
    title: "Brand Visibility Growth",
    description:
      "Campaign planning and communication strategy to increase presence and strengthen positioning in the market.",
    icon: RadioTower,
  },
  {
    title: "Performance Reporting Support",
    description:
      "Structured support around tracking visibility, clicks, engagement, and campaign direction for smarter decision-making.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Premium Creative Direction",
    description:
      "A more polished visual and messaging approach that helps brands look more serious, premium, and consistent online.",
    icon: Sparkles,
  },
  {
    title: "Marketing for Service Businesses",
    description:
      "Targeted digital strategies for businesses selling services and needing stronger trust, inquiries, and reach.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Growth Campaign Structuring",
    description:
      "Strategic campaign planning built to support launches, promotions, awareness, and long-term business growth.",
    icon: TrendingUp,
  },
];

const businessExamples = [
  "Tourism businesses",
  "Restaurants and cafés",
  "Beauty salons and wellness brands",
  "Car rental companies",
  "Taxi businesses",
  "Construction and maintenance companies",
  "Professional service firms",
  "Retail and e-commerce brands",
  "Hotels and hospitality businesses",
  "Local startups and SMEs",
  "Education and training providers",
  "Corporate brands seeking stronger visibility",
];

const keywordTags = [
  "digital marketing Mauritius",
  "SEO Mauritius",
  "Google Ads Mauritius",
  "Meta Ads Mauritius",
  "social media marketing Mauritius",
  "content strategy Mauritius",
  "lead generation Mauritius",
  "brand marketing Mauritius",
  "campaign strategy Mauritius",
  "on page SEO Mauritius",
  "paid ads Mauritius",
  "business marketing Mauritius",
  "MoBiz.mu digital marketing",
];

const processSteps = [
  {
    title: "Business & Audience Review",
    text: "We start by understanding your business, your offer, your market, and the audience you want to reach more effectively.",
  },
  {
    title: "Strategy & Campaign Planning",
    text: "We shape the right mix of SEO, content, paid campaigns, and digital communication around your business goals.",
  },
  {
    title: "Creative & Execution Support",
    text: "We support the brand direction, messaging, and campaign structure needed to launch and manage a stronger digital presence.",
  },
  {
    title: "Growth Optimization",
    text: "Over time, the focus is on improving visibility, generating more quality leads, and building more consistent marketing results.",
  },
];

const faqs = [
  {
    q: "What digital marketing services does MoBiz.mu provide?",
    a: "MoBiz.mu provides digital marketing services in Mauritius including SEO, on-page optimization, Meta Ads campaign strategy, Google Ads support, content planning, social media direction, and lead-focused campaign structuring.",
  },
  {
    q: "Do you help businesses with SEO in Mauritius?",
    a: "Yes. We help businesses improve search visibility through better page structure, on-page SEO, content direction, keyword targeting, and stronger digital positioning.",
  },
  {
    q: "Can MoBiz.mu help with Google Ads and Meta Ads?",
    a: "Yes. We support businesses with Google Ads and Meta Ads strategy to improve awareness, visibility, traffic quality, and lead generation.",
  },
  {
    q: "Is digital marketing suitable for small businesses?",
    a: "Yes. Digital marketing can be very effective for startups, SMEs, and growing businesses that want more visibility, more traffic, and more inquiries.",
  },
];

function DigitalMarketingJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
    },
    areaServed: ["Mauritius", "Rodrigues", "Réunion"],
    serviceType: "Digital Marketing",
    url: `${siteUrl}/services/digital-marketing`,
    description:
      "Premium digital marketing services in Mauritius including SEO, Meta Ads, Google Ads, content strategy, social media direction, and lead-focused campaign support.",
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
                <div className="mt-3 flex items-end gap-2">
                  <div className="h-10 w-8 rounded-t-xl bg-white/10" />
                  <div className="h-14 w-8 rounded-t-xl bg-white/10" />
                  <div className="h-20 w-8 rounded-t-xl bg-[#f3d77a]/30" />
                  <div className="h-16 w-8 rounded-t-xl bg-white/10" />
                </div>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                <div className="h-3 w-16 rounded-full bg-white/15" />
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="h-11 rounded-xl bg-white/10" />
                  <div className="h-11 rounded-xl bg-[#f3d77a]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DigitalMarketingPage() {
  return (
    <>
      <DigitalMarketingJsonLd />
      <FaqJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                  <Megaphone className="h-3.5 w-3.5" />
                  Digital Marketing Mauritius
                </div>

                <h1
                  className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Premium Digital Marketing That Drives Visibility, Traffic, and Leads
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  MoBiz.mu helps businesses grow through smarter digital marketing
                  systems built around visibility, communication, and results. From
                  SEO and content strategy to Meta Ads, Google Ads, creative
                  direction, and lead-focused campaign planning, we help brands in
                  Mauritius present themselves better, reach the right audience, and
                  turn more attention into real business opportunities.
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
                    Request Marketing Support
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
                  title: "Stronger Visibility",
                  text: "We help businesses become easier to find and more present across search, ads, and digital channels.",
                  icon: Globe2,
                },
                {
                  title: "Lead-Focused Strategy",
                  text: "Marketing direction is built around real business growth, not only vanity metrics or generic posting.",
                  icon: Target,
                },
                {
                  title: "Premium Brand Direction",
                  text: "Creative, messaging, and campaign flow are shaped to make the brand feel more polished and trustworthy.",
                  icon: Sparkles,
                },
                {
                  title: "Performance Thinking",
                  text: "We help structure campaigns with clearer intent, smarter communication, and stronger growth potential.",
                  icon: BarChart3,
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
                  Strategic Marketing Built for Business Growth
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Digital marketing should do more than create noise. It should help
                  your business become more visible, more trusted, and more capable of
                  turning attention into leads. That is why our digital marketing
                  service is structured around strategy, premium communication, and
                  performance-focused execution rather than random posting or weak
                  campaigns.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether your business needs better SEO, stronger ad campaigns,
                  clearer content planning, or more brand-aligned digital direction,
                  MoBiz.mu can help you build a marketing system that feels more
                  organized, more premium, and more effective.
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
                Marketing Services We Support
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Real Campaign Support for Real Growth Goals
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                We help businesses strengthen multiple parts of their marketing
                system, from search visibility and campaign planning to messaging,
                content direction, paid ads, and lead generation flow.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {marketingSolutions.map((item) => {
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
                  Ideal for Brands That Want More Reach and More Leads
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  Our digital marketing service is suitable for businesses that want
                  stronger visibility, better campaign planning, more traffic, better
                  communication, and more consistent lead generation. It is built for
                  businesses that want to grow with more strategy and stronger brand
                  presentation.
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
                How We Build Stronger Marketing Systems
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
                  This page is structured to help MoBiz.mu strengthen search
                  relevance for digital marketing, SEO, paid ads, content strategy,
                  and lead generation terms related to Mauritius and nearby markets.
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
                Digital Marketing FAQ
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
                  Ready to Grow Better?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Build a Smarter Marketing System for Your Business
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need stronger SEO, better ad performance, clearer
                  content direction, or more premium brand communication, MoBiz.mu
                  can help you build a digital marketing presence that supports real
                  growth and stronger business visibility.
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