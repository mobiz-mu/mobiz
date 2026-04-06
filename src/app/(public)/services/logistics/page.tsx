import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  PackageCheck,
  ShipWheel,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Warehouse,
  Search,
  BriefcaseBusiness,
  Route,
  Factory,
  ShoppingCart,
  Layers3,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Logistics Services Mauritius | Import Export, Procurement, Sourcing & Operations | MoBiz.mu",
  description:
    "MoBiz.mu provides premium logistics support in Mauritius including import and export setup, procurement assistance, sourcing support, documentation guidance, warehousing coordination, and business logistics solutions for growing companies.",
  keywords: [
    "Logistics Mauritius",
    "Import Export Mauritius",
    "Procurement Mauritius",
    "Sourcing Mauritius",
    "Business Logistics Mauritius",
    "Operational Support Mauritius",
    "Warehousing Mauritius",
    "Supply Chain Mauritius",
    "Import Setup Mauritius",
    "Export Support Mauritius",
    "Documentation Support Mauritius",
    "Procurement and Sourcing Mauritius",
    "MoBiz.mu Logistics",
  ],
  alternates: {
    canonical: `${siteUrl}/services/logistics`,
  },
  openGraph: {
    title:
      "Premium Logistics Services in Mauritius | Import, Export, Sourcing & Operations",
    description:
      "Executive logistics support in Mauritius for sourcing, procurement, import-export setup, documentation, warehousing coordination, and operational business growth.",
    url: `${siteUrl}/services/logistics`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Logistics Services Mauritius | MoBiz.mu",
    description:
      "Premium logistics support for import-export setup, sourcing, procurement, documentation, and operational coordination in Mauritius.",
  },
};

const features = [
  "Import and export setup support for businesses entering or expanding trade operations",
  "Procurement and sourcing assistance to help identify and structure better supply channels",
  "Documentation guidance for a smoother and more professional logistics process",
  "Operational support to reduce friction in day-to-day coordination",
  "Mauritius-focused logistics assistance with business-minded execution",
  "Scalable service support for brands with growing operational complexity",
];

const idealFor = [
  "Businesses importing products into Mauritius",
  "Entrepreneurs building new sourcing and supply channels",
  "Companies that need procurement or logistics coordination support",
  "Growing brands managing more operational complexity and movement",
];

const logisticsSolutions = [
  {
    title: "Import Setup Support",
    description:
      "Structured support for businesses that need help preparing and organizing import-related setup and business logistics.",
    icon: Globe2,
  },
  {
    title: "Export Setup Support",
    description:
      "Guidance for businesses that want to structure export-related operations with more clarity and better preparation.",
    icon: ShipWheel,
  },
  {
    title: "Procurement Assistance",
    description:
      "Support for businesses that need better purchasing structure, sourcing direction, and supplier coordination.",
    icon: ShoppingCart,
  },
  {
    title: "Sourcing Support",
    description:
      "Help with identifying sourcing opportunities, planning supply channels, and improving purchasing workflow.",
    icon: Search,
  },
  {
    title: "Operational Logistics Guidance",
    description:
      "Practical business support for smoother day-to-day execution, coordination, and movement of goods or materials.",
    icon: Route,
  },
  {
    title: "Documentation Support",
    description:
      "Business-friendly guidance to help companies manage logistics-related paperwork and process structure more professionally.",
    icon: FileCheck2,
  },
  {
    title: "Warehousing Coordination",
    description:
      "Support for warehousing-related business operations, organization, stock flow, and logistics coordination.",
    icon: Warehouse,
  },
  {
    title: "Supply Chain Support",
    description:
      "Assistance for businesses that want better visibility and structure across sourcing, procurement, inventory, and operations.",
    icon: Layers3,
  },
  {
    title: "Business Delivery Flow Support",
    description:
      "Help businesses improve coordination across delivery planning, operational execution, and movement-related processes.",
    icon: Truck,
  },
  {
    title: "Retail & Product Operations",
    description:
      "Logistics support for businesses managing stock, products, procurement, and growing commercial operations.",
    icon: Store,
  },
  {
    title: "Trading & Distribution Support",
    description:
      "Structured assistance for businesses operating in import, wholesale, sourcing, and distribution activities.",
    icon: Boxes,
  },
  {
    title: "Custom Logistics Assistance",
    description:
      "Tailored support depending on your business model, operational structure, and logistics-related needs.",
    icon: BriefcaseBusiness,
  },
];

const businessExamples = [
  "Import and trading companies",
  "Retail businesses",
  "Warehousing operations",
  "Construction and material supply firms",
  "Beauty and cosmetics importers",
  "Food and beverage businesses",
  "E-commerce product businesses",
  "Distribution companies",
  "Procurement-focused businesses",
  "Hospitality supply operations",
  "Growing SMEs",
  "Multi-supplier commercial brands",
];

const keywordTags = [
  "logistics Mauritius",
  "import export Mauritius",
  "procurement Mauritius",
  "sourcing Mauritius",
  "warehousing Mauritius",
  "supply chain Mauritius",
  "business logistics Mauritius",
  "import setup Mauritius",
  "export support Mauritius",
  "documentation support Mauritius",
  "procurement and sourcing Mauritius",
  "operational support Mauritius",
  "business operations Mauritius",
  "MoBiz.mu logistics",
];

const processSteps = [
  {
    title: "Business Needs Review",
    text: "We start by understanding your business model, sourcing needs, product flow, and operational goals.",
  },
  {
    title: "Logistics Structure Planning",
    text: "We help shape a clearer process around procurement, sourcing, import-export setup, and operational coordination.",
  },
  {
    title: "Execution Support",
    text: "We assist with practical guidance, documentation flow, and smoother logistics-related organization.",
  },
  {
    title: "Scalable Business Support",
    text: "The goal is to help your operations become more reliable, more organized, and better positioned for growth.",
  },
];

const faqs = [
  {
    q: "What logistics services does MoBiz.mu provide?",
    a: "MoBiz.mu provides logistics support in Mauritius including import and export setup support, procurement assistance, sourcing help, documentation guidance, warehousing coordination, and operational business logistics support.",
  },
  {
    q: "Do you help businesses that import products?",
    a: "Yes. We support businesses that need help organizing sourcing, procurement, import setup, and related operational logistics processes.",
  },
  {
    q: "Can MoBiz.mu help with procurement and sourcing?",
    a: "Yes. Procurement and sourcing support are part of our logistics solutions, especially for businesses that want smoother operational structure and stronger supply coordination.",
  },
  {
    q: "Is this service only for large companies?",
    a: "No. This service is suitable for startups, SMEs, traders, retailers, and growing businesses that need better logistics, procurement, or operational support.",
  },
];

function LogisticsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Logistics Solutions",
    provider: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
    },
    areaServed: ["Mauritius", "Rodrigues", "Réunion"],
    serviceType: "Logistics Support",
    url: `${siteUrl}/services/logistics`,
    description:
      "Premium logistics support in Mauritius including import and export setup, procurement assistance, sourcing support, documentation guidance, warehousing coordination, and operational business logistics.",
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

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
              <div className="h-3 w-24 rounded-full bg-white/15" />
              <div className="mt-3 h-8 w-4/5 rounded-full bg-[#f3d77a]/20" />
              <div className="mt-3 space-y-2">
                <div className="h-2.5 w-full rounded-full bg-white/10" />
                <div className="h-2.5 w-11/12 rounded-full bg-white/10" />
                <div className="h-2.5 w-8/12 rounded-full bg-white/10" />
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

export default function LogisticsPage() {
  return (
    <>
      <LogisticsJsonLd />
      <FaqJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                  <PackageCheck className="h-3.5 w-3.5" />
                  Logistics Services Mauritius
                </div>

                <h1
                  className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Premium Logistics Support for Businesses That Need Smoother Operations
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  MoBiz.mu provides practical and business-focused logistics support in
                  Mauritius for companies that need stronger sourcing, procurement,
                  import-export setup, documentation guidance, warehousing
                  coordination, and smoother operational execution. Our approach is
                  designed to help businesses reduce friction, improve structure, and
                  operate with more clarity and confidence.
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
                    Request Logistics Support
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
                  title: "Operational Clarity",
                  text: "We help businesses structure logistics flow and reduce confusion across sourcing and operations.",
                  icon: ClipboardCheck,
                },
                {
                  title: "Mauritius-Focused Support",
                  text: "Our service direction is aligned with practical business needs and operational realities in Mauritius.",
                  icon: Building2,
                },
                {
                  title: "Scalable Execution",
                  text: "Our logistics support is suitable for businesses that are growing in complexity and product movement.",
                  icon: ShieldCheck,
                },
                {
                  title: "Business-Oriented Guidance",
                  text: "We approach logistics with practical thinking, professional organization, and business support in mind.",
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
                  Practical Logistics Help with a More Executive Business Approach
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Logistics is not only about moving products. It is also about
                  planning better, sourcing better, coordinating better, and building
                  a stronger operational base for your business. That is why our
                  logistics solutions focus on helping businesses create more
                  organized systems around procurement, sourcing, import-export setup,
                  warehousing, and operations.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you are setting up new product channels, managing supplier
                  flow, expanding distribution, or simply trying to operate more
                  smoothly, MoBiz.mu can provide structured business support to help
                  your logistics function feel more reliable and more scalable.
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
                Logistics Solutions We Support
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Real Support for Sourcing, Procurement, and Operational Flow
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                We provide business-friendly logistics assistance across several
                areas, helping brands structure the operational side of growth with
                more clarity, better organization, and smoother coordination.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {logisticsSolutions.map((item) => {
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
                  Ideal for Businesses with Product and Operational Movement
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  Our logistics service is especially useful for businesses that
                  manage products, suppliers, materials, inventory, or multiple
                  operational steps. We help bring more structure and smoother
                  execution to businesses that need stronger logistics coordination.
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
                How We Support Logistics Projects
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
                  relevance for logistics, sourcing, procurement, import-export, and
                  operational support terms related to Mauritius and nearby markets.
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
                Logistics Services FAQ
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
                  Need Better Operational Flow?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Help Your Business Operate More Smoothly
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need sourcing help, procurement support, import-export
                  setup guidance, warehousing coordination, or broader logistics
                  assistance, MoBiz.mu can help you build a more organized and
                  business-ready operational structure.
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