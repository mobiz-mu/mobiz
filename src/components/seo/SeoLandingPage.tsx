import Link from "next/link";
import type { SeoLandingPageData } from "@/lib/seoLandingPages";

type SeoLandingPageProps = {
  page: SeoLandingPageData;
};

function buildWhatsappUrl(text: string) {
  return `https://wa.me/23055068119?text=${encodeURIComponent(text)}`;
}

export default function SeoLandingPage({ page }: SeoLandingPageProps) {
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.subtitle,
    provider: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: "https://mobiz.mu",
      email: "support@mobiz.mu",
      telephone: "+230 55068119",
    },
    areaServed: {
      "@type": "Country",
      name: "Mauritius",
    },
    serviceType: page.primaryKeyword,
  };

  return (
    <main className="min-h-screen bg-[#071226] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-[#f3d77a]/30 bg-[#f3d77a]/10 px-4 py-2 text-sm font-semibold text-[#f3d77a]">
              {page.eyebrow}
            </p>

            <h1 className="max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
              {page.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={page.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-[#f3d77a] px-7 py-3 text-sm font-bold text-[#071226] shadow-lg shadow-[#f3d77a]/20 transition hover:-translate-y-0.5 hover:bg-white"
              >
                {page.ctaLabel}
              </Link>

              <a
                href={buildWhatsappUrl(page.whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[#071226]"
              >
                WhatsApp MoBiz.mu
              </a>
            </div>

            <p className="mt-6 text-sm font-semibold text-[#f3d77a]">
              {page.priceLabel}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#071226]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a98221]">
              Mauritius SEO Landing Page
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {page.introTitle}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/60">
            <h3 className="text-xl font-bold">Target keywords</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This page is built to target the main keyword:
            </p>

            <div className="mt-4 rounded-2xl bg-[#071226] p-5 text-white">
              <p className="text-lg font-bold">{page.primaryKeyword}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {page.secondaryKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] text-[#071226]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a98221]">
              What’s Included
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {page.featuresTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-[#071226]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a98221]">
              Business Types
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {page.industriesTitle}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {page.industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071226] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f3d77a]">
              Our Process
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {page.processTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f3d77a] text-sm font-black text-[#071226]">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-[#071226]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a98221]">
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
        </div>
      </section>

      <section className="bg-[#f8fafc] text-[#071226]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#071226] p-8 text-white shadow-2xl lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f3d77a]">
                  Ready to grow?
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Let MoBiz.mu help you build a stronger online presence.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                  Contact us today and let’s discuss the best solution for your
                  business in Mauritius.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f3d77a] px-7 py-3 text-sm font-bold text-[#071226] transition hover:bg-white"
                >
                  Contact MoBiz.mu
                </Link>
                <a
                  href={buildWhatsappUrl(page.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#071226]"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-bold">Related services</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#071226] hover:bg-[#071226] hover:text-white"
                >
                  {service.title}
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