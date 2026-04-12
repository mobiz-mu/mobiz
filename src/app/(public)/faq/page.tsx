import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

const faqs = [
  {
    question: "What services does MoBiz.mu provide?",
    answer:
      "MoBiz.mu provides premium business services in Mauritius including website design and development, e-commerce solutions, digital marketing, SEO, accounting and tax support, logistics solutions, branding, business plans, proposals, and other executive business support services.",
  },
  {
    question: "Does MoBiz.mu only work with businesses in Mauritius?",
    answer:
      "Mauritius is the main market focus, but MoBiz.mu may also support businesses in Rodrigues, Réunion, and the wider Indian Ocean region depending on the type of project and service required.",
  },
  {
    question: "Can MoBiz.mu create premium business websites?",
    answer:
      "Yes. MoBiz.mu specializes in premium business websites, landing pages, custom business websites, corporate websites, and e-commerce websites designed to look more executive, build stronger trust, and perform well on mobile devices.",
  },
  {
    question: "Does MoBiz.mu offer SEO services?",
    answer:
      "Yes. MoBiz.mu offers SEO-focused services including website SEO structure, page optimization, keyword-focused content direction, speed improvements, and stronger visibility strategies for businesses targeting Mauritius and surrounding markets.",
  },
  {
    question: "Can MoBiz.mu help with digital marketing?",
    answer:
      "Yes. MoBiz.mu provides digital marketing services such as social media management, Google Ads support, content planning, business visibility strategy, and stronger conversion-focused digital communication.",
  },
  {
    question: "Does MoBiz.mu offer accounting and tax support?",
    answer:
      "Yes. MoBiz.mu offers accounting-related business support including bookkeeping, payroll support, VAT filing, statutory filing, tax filing, annual financial statement support, and related business administration services.",
  },
  {
    question: "Can MoBiz.mu help with branding and business documents?",
    answer:
      "Yes. MoBiz.mu can help with logo design, brand kits, pitch decks, investor presentations, business plans, templates, and executive business materials that improve how a company presents itself.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "You can request a quotation by contacting MoBiz.mu through the contact page, WhatsApp, email, or by sharing your service requirements directly. The team will review your needs and provide the appropriate next steps.",
  },
  {
    question: "Does MoBiz.mu work on mobile-friendly websites?",
    answer:
      "Yes. Full mobile responsiveness is a major priority. MoBiz.mu builds websites and digital experiences that work properly across desktop, tablet, and mobile screens.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Timelines depend on the service type, project size, content readiness, revisions, and approval speed. Smaller website or branding tasks may move faster, while larger custom projects or multi-service engagements may require more time.",
  },
  {
    question: "Can MoBiz.mu support existing businesses and new startups?",
    answer:
      "Yes. MoBiz.mu works with startups, entrepreneurs, SMEs, and established businesses that want to improve their online presence, business structure, visibility, and premium presentation.",
  },
  {
    question: "How can I contact MoBiz.mu quickly?",
    answer:
      "The fastest way is usually through WhatsApp or the contact page on the website. You can also contact MoBiz.mu by email for business inquiries and project discussions.",
  },
];

export const metadata: Metadata = {
  title: "FAQ | MoBiz.mu Frequently Asked Questions",
  description:
    "Read the MoBiz.mu FAQ for answers about website design, digital marketing, SEO, accounting, logistics, branding, quotations, and premium business support in Mauritius.",
  keywords: [
    "MoBiz.mu FAQ",
    "FAQ Mauritius business services",
    "Website design FAQ Mauritius",
    "Digital marketing FAQ Mauritius",
    "SEO FAQ Mauritius",
    "Accounting FAQ Mauritius",
    "Branding FAQ Mauritius",
    "Business services FAQ Mauritius",
  ],
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "FAQ | MoBiz.mu Frequently Asked Questions",
    description:
      "Find answers about MoBiz.mu services including websites, digital marketing, SEO, accounting, logistics, branding, and business support in Mauritius.",
    url: `${siteUrl}/faq`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | MoBiz.mu Frequently Asked Questions",
    description:
      "Find answers about MoBiz.mu services including websites, digital marketing, SEO, accounting, logistics, branding, and business support in Mauritius.",
  },
};

function FAQJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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

function FaqItem({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#e5eaf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)] sm:p-6">
      <div className="flex items-start gap-3">
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ead8a1] bg-[#fff9ea] text-sm font-semibold text-[#8b6a18]">
          {index + 1}
        </div>

        <div className="min-w-0">
          <h2
            className="text-[1.1rem] font-semibold tracking-tight text-[#071226] sm:text-[1.2rem]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            {question}
          </h2>

          <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd />

      <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <HelpCircle className="h-3.5 w-3.5" />
                Frequently Asked Questions
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                FAQ
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                Find answers about MoBiz.mu services, website design, digital
                marketing, SEO, accounting support, logistics, branding,
                quotations, and premium business support in Mauritius.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "Clear Answers",
                  text: "This page gives direct answers to common questions about MoBiz.mu services and business support.",
                  icon: CheckCircle2,
                },
                {
                  title: "Better Guidance",
                  text: "Visitors can understand faster how MoBiz.mu works, what services are offered, and how to get started.",
                  icon: Sparkles,
                },
                {
                  title: "Trust & Clarity",
                  text: "A premium FAQ page helps reduce uncertainty and builds stronger confidence before contact.",
                  icon: ShieldCheck,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <h2
                      className="mt-4 text-[1.05rem] font-semibold tracking-tight text-[#071226]"
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
          <Container className="max-w-[980px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4">
              {faqs.map((item, index) => (
                <FaqItem
                  key={item.question}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-6 text-center shadow-[0_18px_40px_rgba(7,18,38,0.05)] sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Still Need Help?
                </div>

                <h2
                  className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.4rem] lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Contact MoBiz.mu for More Information
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  If your question is not covered here, contact MoBiz.mu and we
                  will guide you with the right service direction for your
                  business.
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
                    href="/services"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    Explore Services
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