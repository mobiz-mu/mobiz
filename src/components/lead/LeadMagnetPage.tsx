import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import LeadMagnetForm from "@/components/lead/LeadMagnetForm";
import type { LeadMagnetData } from "@/lib/leadMagnets";

const BASE_URL = "https://mobiz.mu";

type Props = {
  magnet: LeadMagnetData;
};

export default function LeadMagnetPage({ magnet }: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: magnet.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="bg-white text-[#071226]">
      {/* Hero + form */}
      <section className="relative overflow-hidden bg-[#071226] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_1.02fr] lg:gap-12 lg:px-8 lg:py-20">
          <div className="lg:pt-6">
            <p className="inline-flex rounded-full border border-[#f3d77a]/30 bg-[#f3d77a]/10 px-4 py-2 text-sm font-semibold text-[#f3d77a]">
              {magnet.eyebrow}
            </p>

            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {magnet.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              {magnet.subheadline}
            </p>

            <ul className="mt-7 grid gap-3">
              {magnet.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f3d77a]" />
                  <span className="text-sm leading-7 text-white/85">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {magnet.trust.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/75"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-[#f3d77a]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 text-[#071226] shadow-2xl shadow-black/30 sm:p-7">
            <h2 className="text-xl font-bold">{magnet.ctaLabel}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fill in your details and we&apos;ll get back to you within one
              business day.
            </p>
            <div className="mt-5">
              <LeadMagnetForm magnet={magnet} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a98221]">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {magnet.eyebrow} — common questions
              </h2>
            </div>

            <div className="space-y-4">
              {magnet.faqs.map((faq) => (
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

      {/* Internal links */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold">Explore related services</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {magnet.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#071226] hover:bg-[#071226] hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}

export function leadMagnetMetadata(magnet: LeadMagnetData) {
  const url = `${BASE_URL}/${magnet.slug}`;
  return {
    title: magnet.metaTitle,
    description: magnet.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: magnet.metaTitle,
      description: magnet.metaDescription,
      url,
      siteName: "MoBiz.mu",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: magnet.metaTitle,
      description: magnet.metaDescription,
    },
  };
}
