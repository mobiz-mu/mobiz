import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react";
import type { BusinessSeoPageData } from "@/lib/businessSeoPages";

type BusinessSeoLandingPageProps = {
  page: BusinessSeoPageData;
};

function buildWhatsappUrl(page: BusinessSeoPageData) {
  const text = `Hello MoBiz.mu, I am interested in ${page.title}. Please send me more details.`;
  return `https://wa.me/23055068119?text=${encodeURIComponent(text)}`;
}

export default function BusinessSeoLandingPage({
  page,
}: BusinessSeoLandingPageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.subtitle,
    serviceType: page.primaryKeyword,
    url: `https://mobiz.mu/${page.slug}`,
    provider: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: "https://mobiz.mu",
      email: "support@mobiz.mu",
      telephone: "+230 55068119",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Mauritius",
      },
      {
        "@type": "Place",
        name: "Rodrigues",
      },
      {
        "@type": "Place",
        name: "Réunion",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="overflow-hidden bg-[#f8fafc] text-[#071226]">
      <section className="relative overflow-hidden bg-[#071226] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_36%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f3d77a]/25 bg-[#f3d77a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f3d77a]">
              <Search className="h-4 w-4" />
              {page.eyebrow}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/74 sm:text-lg">
              {page.subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#f3d77a] px-6 py-3 text-sm font-bold text-[#071226] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={buildWhatsappUrl(page)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[#071226]"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp MoBiz.mu
              </a>
            </div>

            <p className="mt-5 text-sm font-bold text-[#f3d77a]">
              {page.priceLabel}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f3d77a]">
                Key Features
              </p>

              <div className="mt-5 space-y-3">
                {page.heroBullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#f3d77a]" />
                    <p className="text-sm leading-6 text-white/78">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-[#f3d77a] p-5 text-[#071226]">
              <p className="text-xs font-black uppercase tracking-[0.18em]">
                Target Keyword
              </p>
              <p className="mt-2 text-xl font-black">{page.primaryKeyword}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a98221]">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {page.overviewTitle}
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            {page.overviewParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="flex flex-wrap gap-2 pt-3">
              {page.secondaryKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a98221]">
              What We Build
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {page.featuresTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071226] text-[#f3d77a]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a98221]">
              Business Benefits
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {page.benefitsTitle}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {page.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#a98221]" />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071226] py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f3d77a]">
              Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {page.processTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f3d77a] text-sm font-black text-[#071226]">
                  {index + 1}
                </div>

                <h3 className="text-lg font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/68">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a98221]">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <summary className="cursor-pointer list-none text-base font-bold">
                  {faq.question}
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#071226] p-7 text-white shadow-2xl sm:p-9 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f3d77a]">
                  Ready to Start?
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Let MoBiz.mu build a stronger digital solution for your business.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                  Contact us today and we’ll help you choose the right website,
                  system or digital platform for your business in Mauritius.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f3d77a] px-6 py-3 text-sm font-bold text-[#071226] transition hover:bg-white"
                >
                  Contact MoBiz.mu
                </Link>

                <a
                  href={buildWhatsappUrl(page)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#071226]"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-bold text-[#071226]">
              Related services
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={`${link.href}-${link.title}`}
                  href={link.href}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-[#071226] hover:bg-[#071226] hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  );
}