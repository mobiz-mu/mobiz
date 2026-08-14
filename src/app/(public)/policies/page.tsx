import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, FileText, Lock, Scale, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/services/schema";
import { POLICY_INDEX, getPolicy } from "@/lib/policies";
import { ACCENTS, type AccentId } from "@/lib/accents";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Policies | MoBiz.mu",
  description:
    "Explore MoBiz.mu policies including Terms of Use, Terms of Service, Privacy Policy, and Security Policy.",
  path: "/policies",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Policies" }];

const ICONS = [Scale, FileText, Lock, ShieldCheck] as const;
const ACCENT_ORDER: AccentId[] = ["blue", "red", "green", "yellow"];

/**
 * Policy index.
 *
 * A calm hub rather than a legal document: four entries, each linking to the
 * full text. Section counts come from the real documents, so the page never
 * claims more than exists.
 */
export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Policies"
        subtitle="The terms, privacy and security standards that apply when you use the MoBiz.mu website or engage us for work."
        breadcrumbs={breadcrumbs}
        background="calm"
      />

      <Section spacing="default" className="bg-ink-950">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2">
            {POLICY_INDEX.map((policy, index) => {
              const Icon = ICONS[index] ?? Scale;
              const accent = ACCENTS[ACCENT_ORDER[index] ?? "red"];
              const doc = getPolicy(policy.href.replace("/", ""));

              return (
                <li key={policy.href} className="flex">
                  <Reveal
                    direction={index % 2 === 0 ? "left" : "right"}
                    delay={Math.min(index, 3) * 0.05}
                    className="flex w-full"
                  >
                    <Link
                      href={policy.href}
                      className="group flex w-full flex-col rounded-2xl border border-line bg-surface-0 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-line-strong sm:p-7"
                    >
                      <span
                        aria-hidden
                        className="mb-5 flex size-11 items-center justify-center rounded-lg border"
                        style={{
                          borderColor: `${accent.hex}45`,
                          background: `${accent.hex}12`,
                        }}
                      >
                        <Icon className="size-5" style={{ color: accent.onDark }} />
                      </span>

                      <h2 className="mb-2.5 text-lg font-bold text-text-primary">
                        {policy.title}
                      </h2>
                      <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                        {policy.description}
                      </p>

                      <span className="mt-6 flex items-center justify-between gap-3 border-t border-line-faint pt-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                          {doc ? `${doc.sections.length} sections` : "Read"}
                        </span>
                        <ArrowRight
                          aria-hidden
                          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                          style={{ color: accent.onDark }}
                        />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "MoBiz.mu Policies",
          url: `${SITE_URL}/policies`,
          description:
            "Explore MoBiz.mu policies including Terms of Use, Terms of Service, Privacy Policy, and Security Policy.",
        }}
      />
    </>
  );
}
