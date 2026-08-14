import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TechBackground } from "@/components/visual/TechBackground";
import { JsonLd } from "@/lib/services/schema";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { POLICY_INDEX, type PolicyDocument } from "@/lib/policies";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Legal and policy template.
 *
 * The calmest surface on the site: `calm` background (fine grid only — no Data
 * Highway, no glow field), no scroll reveals, a 720px reading measure and
 * generous line height. Nothing animates behind legal text.
 *
 * Structure is genuinely useful rather than decorative: a sticky table of
 * contents on desktop, real anchor targets per section, and `scroll-margin-top`
 * so a deep link never lands under the fixed header.
 *
 * The wording itself is migrated verbatim from `lib/policies.ts`.
 */
export function PolicyPage({ doc }: { doc: PolicyDocument }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Policies", href: "/policies" },
    { label: doc.title },
  ];

  return (
    <>
      <header className="relative overflow-hidden border-b border-line-faint bg-ink-950">
        <TechBackground variant="calm" />
        <Container className="relative pb-12 pt-[calc(68px+2.5rem)]">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-bright">
              Legal
            </p>
            <h1 className="enter-lcp mb-5 text-[clamp(1.875rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-tight text-text-primary">
              {doc.title}
            </h1>
            <p className="text-base leading-relaxed text-text-secondary text-pretty sm:text-lg">
              {doc.intro}
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Effective {doc.effectiveDate}
            </p>
          </div>
        </Container>
      </header>

      <Section spacing="calm" className="bg-ink-950">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            {/* Table of contents — sticky on desktop, inline list on mobile. */}
            <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="mb-4 font-mono text-[9px] uppercase tracking-widest text-text-muted">
                On this page
              </h2>
              <ol className="space-y-1.5">
                {doc.sections.map((section) => (
                  <li key={section.number}>
                    <a
                      href={`#section-${section.number}`}
                      className="flex gap-2.5 rounded-sm py-1 text-xs leading-relaxed text-text-muted transition-colors hover:text-text-primary"
                    >
                      <span aria-hidden className="shrink-0 font-mono text-text-faint">
                        {section.number}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="min-w-0 max-w-[720px]">
              {doc.sections.map((section) => (
                <section
                  key={section.number}
                  id={`section-${section.number}`}
                  className="mb-10 scroll-mt-24"
                >
                  <h2 className="mb-4 flex gap-3 text-lg font-bold leading-snug tracking-tight text-text-primary sm:text-xl">
                    <span aria-hidden className="shrink-0 font-mono text-brand-bright">
                      {section.number}
                    </span>
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-[1.8] text-text-secondary text-pretty"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span
                            aria-hidden
                            className="mt-2.5 size-1 shrink-0 rounded-full bg-brand"
                          />
                          <span className="text-[15px] leading-[1.8] text-text-body">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <div className="mt-12 rounded-xl border border-line bg-surface-0 p-6">
                <h2 className="mb-2.5 text-base font-bold text-text-primary">
                  Questions about this policy?
                </h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Contact MoBiz.mu at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-brand-mid underline-offset-4 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {POLICY_INDEX.filter((p) => p.href !== `/${doc.slug}`).map((policy) => (
                    <li key={policy.href}>
                      <Link
                        href={policy.href}
                        className="inline-flex min-h-11 items-center rounded-lg border border-line px-3.5 py-2 text-xs font-medium text-text-body transition-colors hover:border-line-strong hover:text-text-primary"
                      >
                        {policy.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}

export default PolicyPage;
