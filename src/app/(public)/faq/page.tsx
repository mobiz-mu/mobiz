import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd, buildFaqSchema } from "@/lib/services/schema";
import { ALL_FAQS, FAQ_CATEGORIES } from "@/lib/company";
import { ACCENTS, type AccentId } from "@/lib/accents";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | Common Questions About Working With MoBiz.mu",
  description:
    "Common questions about MoBiz.mu websites, marketing, accounting, inventory, business solutions, monthly packages, payments and support in Mauritius.",
  path: "/faq",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "FAQ" }];

/** One accent per category, cycling the fixed palette. */
const ACCENT_CYCLE: AccentId[] = ["blue", "yellow", "green", "emerald", "red", "sky"];

/**
 * FAQ.
 *
 * Built on native `<details>`/`<summary>`: no JavaScript, no hydration, correct
 * keyboard and screen-reader behaviour for free, and every answer is present in
 * the HTML whether open or closed — so it stays crawlable and matches the
 * FAQPage schema exactly.
 *
 * Category jump links are plain anchors with `scroll-mt` so they clear the
 * fixed header. Animation is limited to a single reveal per group.
 */
export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Common questions about working with Mobiz"
        subtitle="Straight answers on what we build, how we work, what it costs and how support works after launch."
        breadcrumbs={breadcrumbs}
        background="calm"
        whatsappMessage="Hello Mobiz, I have a question that isn't answered on your FAQ page."
      />

      <Section spacing="calm" className="bg-ink-950">
        <Container>
          {/* Category index */}
          <nav aria-label="FAQ categories" className="mb-12">
            <ul className="flex flex-wrap gap-2">
              {FAQ_CATEGORIES.map((category, index) => {
                const accent = ACCENTS[ACCENT_CYCLE[index % ACCENT_CYCLE.length] ?? "red"];
                return (
                  <li key={category.id}>
                    <a
                      href={`#faq-${category.id}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-semibold text-text-body transition-colors hover:text-text-primary"
                      style={{ borderColor: `${accent.hex}45`, background: `${accent.hex}0f` }}
                    >
                      <span
                        aria-hidden
                        className="size-1.5 shrink-0 rounded-full"
                        style={{ background: accent.hex }}
                      />
                      {category.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="max-w-[860px] space-y-12">
            {FAQ_CATEGORIES.map((category, index) => {
              const accent = ACCENTS[ACCENT_CYCLE[index % ACCENT_CYCLE.length] ?? "red"];
              return (
                <section key={category.id} id={`faq-${category.id}`} className="scroll-mt-24">
                  <Reveal>
                    <h2 className="mb-5 flex items-center gap-2.5 text-lg font-bold tracking-tight text-text-primary sm:text-xl">
                      <span
                        aria-hidden
                        className="size-2 shrink-0 rounded-full"
                        style={{ background: accent.hex }}
                      />
                      {category.label}
                    </h2>
                  </Reveal>

                  <div className="divide-y divide-[color:var(--color-line-faint)] border-y border-line-faint">
                    {category.faqs.map((faq) => (
                      <details key={faq.question} className="group">
                        <summary className="flex min-h-14 cursor-pointer list-none items-start justify-between gap-6 py-5 text-left text-[15px] font-semibold text-text-primary transition-colors hover:text-brand-mid [&::-webkit-details-marker]:hidden">
                          {faq.question}
                          <span
                            aria-hidden
                            className="relative mt-1.5 size-3 shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-45"
                          >
                            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                            <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current" />
                          </span>
                        </summary>
                        <p className="pb-6 text-[15px] leading-[1.75] text-text-secondary text-pretty">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Still have a question?"
        description="If it isn't answered here, message us on WhatsApp — you will get a real answer from the team."
        whatsappMessage="Hello Mobiz, I have a question that isn't answered on your FAQ page."
      />

      <JsonLd data={buildFaqSchema(ALL_FAQS)} />
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}
