import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  FileBarChart2,
  FileCheck2,
  FileDigit,
  FileSpreadsheet,
  FolderKanban,
  FolderOpenDot,
  Landmark,
  LineChart,
  Receipt,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRoundCog,
  Wallet,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Accounting Services Mauritius | Bookkeeping, VAT, Tax Returns & Statutory Filing | MoBiz.mu",
  description:
    "MoBiz.mu provides premium accounting services in Mauritius including bookkeeping, VAT support, tax returns, statutory filing, business registration assistance, payroll-related support, annual financial statements, and finance organization for SMEs, startups, and growing businesses.",
  keywords: [
    "Accounting Services Mauritius",
    "Bookkeeping Mauritius",
    "VAT Filing Mauritius",
    "Tax Returns Mauritius",
    "Statutory Filing Mauritius",
    "Business Registration Mauritius",
    "Payroll Support Mauritius",
    "Annual Financial Statements Mauritius",
    "Financial Organization Mauritius",
    "Compliance Support Mauritius",
    "SME Accounting Mauritius",
    "Startup Accounting Mauritius",
    "Accounting Help Mauritius",
    "MoBiz.mu Accounting",
  ],
  alternates: {
    canonical: `${siteUrl}/services/accounting-tax-returns`,
  },
  openGraph: {
    title:
      "Premium Accounting Services in Mauritius | Bookkeeping, VAT & Tax Returns",
    description:
      "Executive accounting and tax support in Mauritius for businesses that need bookkeeping, VAT assistance, tax returns, statutory filing, payroll support, annual financial statements, and better financial organization.",
    url: `${siteUrl}/services/accounting-tax-returns`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting Services Mauritius | MoBiz.mu",
    description:
      "Premium accounting support in Mauritius including bookkeeping, VAT, tax returns, statutory filing, payroll, and structured finance administration.",
  },
};

const features = [
  "Bookkeeping support for better day-to-day financial organization",
  "VAT and tax return assistance to help businesses stay more structured and compliant",
  "Statutory filing support for important business obligations and reporting flow",
  "Business registration and setup assistance for new and growing entities",
  "Financial document organization for smoother business administration",
  "Professional accounting guidance designed to support clarity and confidence",
];

const idealFor = [
  "SMEs and startups in Mauritius",
  "Businesses that need tax and VAT support",
  "Companies that want more structured finance administration",
  "Entrepreneurs who need compliance and business support",
];

const accountingSolutions = [
  {
    title: "Bookkeeping Support",
    description:
      "Organized bookkeeping support to help businesses maintain cleaner records, better visibility, and more reliable finance administration.",
    icon: BookOpenCheck,
  },
  {
    title: "VAT Support",
    description:
      "Practical VAT-related assistance for businesses that need more confidence and structure around VAT obligations and reporting.",
    icon: Receipt,
  },
  {
    title: "Tax Return Assistance",
    description:
      "Professional support for tax return preparation and organization so businesses can manage filings more clearly and accurately.",
    icon: Calculator,
  },
  {
    title: "Statutory Filing Support",
    description:
      "Support for statutory obligations and business filing requirements with a more dependable and structured approach.",
    icon: FileCheck2,
  },
  {
    title: "Business Registration Support",
    description:
      "Assistance for startups and entrepreneurs that need support with registration and early-stage business administration.",
    icon: Landmark,
  },
  {
    title: "Financial Document Organization",
    description:
      "Help businesses keep records, files, and important finance-related documents better organized and easier to manage.",
    icon: FolderKanban,
  },
  {
    title: "Compliance Support",
    description:
      "Business-focused accounting support to help companies stay aligned with important compliance responsibilities.",
    icon: ShieldCheck,
  },
  {
    title: "Payroll-Related Support",
    description:
      "Structured support for payroll-related administration and related business finance workflow needs.",
    icon: Wallet,
  },
  {
    title: "SME Accounting Assistance",
    description:
      "Accounting support suited to small and medium-sized businesses that need reliability, structure, and ongoing business clarity.",
    icon: Building2,
  },
  {
    title: "Startup Finance Support",
    description:
      "Support for young businesses that need help setting foundations for finance administration, compliance, and reporting.",
    icon: TrendingUp,
  },
  {
    title: "Business Finance Guidance",
    description:
      "Professional guidance to help businesses manage accounting priorities with more confidence and better organization.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Custom Accounting Support",
    description:
      "Tailored finance and compliance assistance depending on the size, activity, and needs of your business.",
    icon: FileSpreadsheet,
  },
];

const businessExamples = [
  "SMEs and growing businesses",
  "Startups and entrepreneurs",
  "Retail and trading companies",
  "Construction and service businesses",
  "Consultants and agencies",
  "Import and distribution businesses",
  "Hospitality and tourism operators",
  "Beauty and wellness businesses",
  "Professional service firms",
  "Companies needing VAT support",
  "Businesses with statutory obligations",
  "Founders setting up new entities",
];

const keywordTags = [
  "accounting services Mauritius",
  "bookkeeping Mauritius",
  "VAT filing Mauritius",
  "tax returns Mauritius",
  "statutory filing Mauritius",
  "business registration Mauritius",
  "payroll support Mauritius",
  "annual financial statements Mauritius",
  "financial organization Mauritius",
  "compliance support Mauritius",
  "SME accounting Mauritius",
  "startup accounting Mauritius",
  "MoBiz.mu accounting",
];

const processSteps = [
  {
    title: "Business Finance Review",
    text: "We start by understanding your business stage, finance administration needs, and the level of support required.",
  },
  {
    title: "Structure & Documentation",
    text: "We help organize the right accounting, filing, and document flow to make finance administration more dependable.",
  },
  {
    title: "Support & Compliance Assistance",
    text: "We assist with bookkeeping, VAT, tax returns, statutory matters, and related business accounting support.",
  },
  {
    title: "Clarity for Ongoing Growth",
    text: "The goal is to help your business stay more organized, more compliant, and more confident as it grows.",
  },
];

type PopularPackage = {
  title: string;
  price: string;
  subtitle: string;
  points: string[];
  cta: string;
  highlight: string;
};

const popularPackages: PopularPackage[] = [
  {
    title: "Startup Compliance Pack",
    price: "From Rs 7,500",
    subtitle: "Best for new founders and small businesses getting started.",
    points: [
      "Business registration support",
      "Basic compliance guidance",
      "Finance admin setup direction",
      "Structured onboarding help",
    ],
    cta: "/contact",
    highlight: "New business setup",
  },
  {
    title: "Monthly Accounting Essentials",
    price: "From Rs 2,000/month",
    subtitle: "Ideal for businesses that want ongoing bookkeeping and finance structure.",
    points: [
      "Monthly bookkeeping support",
      "Organized records and tracking",
      "Suitable for SMEs and growing businesses",
      "Clearer financial administration flow",
    ],
    cta: "/b/monthly-bookkeeping",
    highlight: "Popular choice",
  },
  {
    title: "Tax & VAT Support",
    price: "From Rs 5,000",
    subtitle: "For businesses that need filing support and more confidence around compliance.",
    points: [
      "VAT filing support",
      "Tax filing support",
      "Structured compliance help",
      "Professional document preparation direction",
    ],
    cta: "/b/vat-computation-filing",
    highlight: "Compliance focused",
  },
];

const relatedAccountingServices = [
  {
    title: "Company Registration",
    description:
      "Support for entrepreneurs and founders who want to register a company in Mauritius with a more structured and professional process.",
    href: "/b/company-registration",
    icon: Building,
  },
  {
    title: "Sole Trader Registration",
    description:
      "Practical support for individuals and small business owners setting up as sole traders in Mauritius.",
    href: "/b/sole-trader-registration",
    icon: BriefcaseBusiness,
  },
  {
    title: "VAT Filing",
    description:
      "VAT computation and filing support for businesses that need more reliable tax administration and reporting flow.",
    href: "/b/vat-computation-filing",
    icon: ReceiptText,
  },
  {
    title: "Tax Filing",
    description:
      "Professional tax computation and filing assistance to help businesses stay organized and compliant.",
    href: "/b/tax-computation-filing",
    icon: FileDigit,
  },
  {
    title: "Payroll Services",
    description:
      "Structured payroll support for businesses that need smoother salary administration and employee payment workflows.",
    href: "/b/payroll-services",
    icon: UserRoundCog,
  },
  {
    title: "Monthly Bookkeeping",
    description:
      "Bookkeeping support for businesses that want cleaner records, better visibility, and stronger financial organization.",
    href: "/b/monthly-bookkeeping",
    icon: FolderOpenDot,
  },
  {
    title: "Annual Financial Statements",
    description:
      "Professional support for annual financial statements and year-end finance documentation needs.",
    href: "/b/annual-financial-statements",
    icon: FileBarChart2,
  },
];

const faqs = [
  {
    q: "What accounting services does MoBiz.mu provide?",
    a: "MoBiz.mu provides accounting support in Mauritius including bookkeeping, VAT assistance, tax return support, statutory filing support, business registration assistance, payroll-related support, annual financial statements, financial document organization, and related business finance guidance.",
  },
  {
    q: "Do you help with VAT and tax returns in Mauritius?",
    a: "Yes. We support businesses with VAT-related assistance and tax return organization so they can manage these obligations with more clarity and confidence.",
  },
  {
    q: "Is this service suitable for startups and SMEs?",
    a: "Yes. This service is especially suitable for startups, SMEs, and growing businesses that need better finance administration, compliance support, and structured accounting help.",
  },
  {
    q: "Can MoBiz.mu help with business registration support?",
    a: "Yes. We can assist entrepreneurs and new businesses with registration-related support and other early-stage business administration needs.",
  },
];

function AccountingJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accounting & Tax Returns",
    provider: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
    },
    areaServed: ["Mauritius", "Rodrigues", "Réunion"],
    serviceType: "Accounting Services",
    url: `${siteUrl}/services/accounting-tax-returns`,
    description:
      "Premium accounting services in Mauritius including bookkeeping, VAT support, tax returns, statutory filing, business registration assistance, payroll-related support, annual financial statements, and financial organization for businesses.",
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
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-2xl bg-white/10" />
                <div className="h-16 rounded-2xl bg-[#f3d77a]/18" />
                <div className="h-16 rounded-2xl bg-white/10" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                <div className="h-3 w-16 rounded-full bg-white/15" />
                <div className="mt-3 h-20 rounded-2xl bg-[linear-gradient(135deg,rgba(243,215,122,0.22),rgba(82,130,255,0.20))]" />
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                <div className="h-3 w-16 rounded-full bg-white/15" />
                <div className="mt-3 flex gap-2">
                  <div className="h-10 flex-1 rounded-xl bg-white/10" />
                  <div className="h-10 flex-1 rounded-xl bg-[#f3d77a]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountingTaxReturnsPage() {
  return (
    <>
      <AccountingJsonLd />
      <FaqJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                  <Calculator className="h-3.5 w-3.5" />
                  Accounting Services Mauritius
                </div>

                <h1
                  className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Premium Accounting Support for Businesses That Want More Structure and Confidence
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  MoBiz.mu helps businesses in Mauritius manage essential accounting
                  functions with more clarity, structure, and confidence. From
                  bookkeeping and VAT support to tax returns, statutory filing,
                  business registration assistance, payroll support, annual financial
                  statements, and finance document organization, our service is
                  designed for businesses that want more dependable financial
                  administration and stronger compliance support.
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
                    Request Accounting Support
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
                  title: "Better Organization",
                  text: "We help businesses create more structured accounting and document flow for daily operations.",
                  icon: ClipboardList,
                },
                {
                  title: "Compliance Support",
                  text: "Our service helps businesses stay more aligned with important filing, tax, and statutory obligations.",
                  icon: ShieldCheck,
                },
                {
                  title: "Business Confidence",
                  text: "Clearer accounting support makes it easier for businesses to manage administration and make decisions.",
                  icon: BadgeCheck,
                },
                {
                  title: "Growth Readiness",
                  text: "More dependable finance administration helps businesses scale with better control and visibility.",
                  icon: LineChart,
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
                  Structured Finance Support with a Professional Business Approach
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Good accounting support is not only about numbers. It is also
                  about keeping your business organized, better prepared, and more
                  confident in its operations. That is why our accounting and tax
                  support is designed to help businesses improve record-keeping,
                  document flow, compliance processes, and essential finance
                  administration.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need bookkeeping support, VAT assistance, tax return
                  help, statutory filing support, business registration guidance,
                  payroll support, or annual financial statements, MoBiz.mu can help
                  you build a more reliable accounting foundation for your business.
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
                Accounting Services We Support
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Real Support for Bookkeeping, Tax, VAT, and Compliance
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                We provide business-focused accounting assistance across several
                essential areas, helping companies become more organized, more
                compliant, and better prepared for sustainable growth.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {accountingSolutions.map((item) => {
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
                  Ideal for Businesses That Need Better Financial Structure
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  Our accounting and tax support is especially useful for
                  businesses that need stronger finance administration, cleaner
                  records, more dependable filing support, and a more organized
                  compliance process. We help bring more clarity and structure to
                  essential business finance functions.
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
                How We Support Accounting and Compliance Needs
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
                  Popular Accounting Packages
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Quick Package Previews for Common Business Needs
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  These package previews help visitors quickly understand the kind
                  of support MoBiz.mu can provide. They also make the page more
                  commercial and easier for potential clients to convert from.
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
                  This page is structured to help MoBiz.mu build stronger search
                  relevance for accounting, bookkeeping, VAT, tax returns,
                  compliance, payroll, annual financial statements, and
                  registration-related terms connected to Mauritius and nearby
                  markets.
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
                Related Accounting Services
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Explore Related Finance and Compliance Services
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                MoBiz.mu also provides additional accounting, tax, registration,
                and finance-related services for businesses that want more complete
                support. These linked services improve internal linking depth, SEO
                structure, and help visitors find the exact support they need.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {relatedAccountingServices.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-[28px] border border-[#e6ebf2] bg-white p-5 shadow-[0_18px_38px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(7,18,38,0.08)]"
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
                Accounting Services FAQ
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
                  Need Better Financial Structure?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Help Your Business Stay Organized, Structured, and More Confident
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need bookkeeping, VAT support, tax return
                  assistance, statutory filing help, business registration support,
                  payroll services, annual financial statements, or better finance
                  document organization, MoBiz.mu can help you build a more
                  dependable accounting foundation for your business.
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