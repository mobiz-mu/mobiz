import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Star } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { FAQSection } from "@/components/ui/FAQSection";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/services/schema";
import { CLIENT_VALUES, GOOGLE_REVIEWS_HREF, TESTIMONIAL_FAQS } from "@/lib/company";
import { portfolioItems } from "@/lib/portfolio";
import { ACCENTS, type AccentId } from "@/lib/accents";

export const metadata: Metadata = buildMetadata({
  title: "What Clients Value | MoBiz.mu",
  description:
    "What working with MoBiz.mu is actually like — premium presentation, clear communication, mobile-first delivery and ongoing support for Mauritius businesses.",
  path: "/testimonials",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "What Clients Value" }];

const ACCENT_CYCLE: AccentId[] = ["red", "green", "blue", "emerald", "yellow", "sky"];

/**
 * "What clients value" — deliberately NOT a wall of testimonials.
 *
 * This page carries over an explicit editorial decision from the live site:
 * rather than display quotes a visitor cannot verify, it states what clients can
 * expect and points at the real Google review profile, where feedback is
 * independently checkable.
 *
 * Consequently there is no Review or AggregateRating schema here, and there are
 * no star counts, client totals or outcome figures anywhere on the page. Do not
 * add any of those without genuine, attributable source material.
 */
export default function TestimonialsPage() {
  const projects = portfolioItems.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="What clients value"
        title="What working with Mobiz is actually like"
        subtitle="Rather than show quotes you can't verify, here is what clients consistently get from us — and where to read genuine, independent feedback."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: "Read Google reviews", href: GOOGLE_REVIEWS_HREF }}
        whatsappMessage="Hello Mobiz, I would like to ask about working with you."
      />

      <Section spacing="default" className="bg-ink-900">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What you get"
              title="Six things clients consistently value"
            />
          </Reveal>

          <StaggerGroup as="ul" className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENT_VALUES.map((value, index) => {
              const accent = ACCENTS[ACCENT_CYCLE[index % ACCENT_CYCLE.length] ?? "red"];
              return (
                <StaggerItem
                  key={value.title}
                  as="li"
                  direction={index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"}
                >
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-0 p-6 transition-colors hover:border-line-strong">
                    <span
                      aria-hidden
                      className="mb-4 h-0.5 w-9 rounded-full"
                      style={{ background: accent.hex }}
                    />
                    <h3 className="mb-2.5 text-base font-bold text-text-primary">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {value.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Verified feedback — a link out, not a claim made here. */}
      <Section spacing="default" className="overflow-hidden bg-ink-950">
        <Container>
          <Reveal direction="scale">
            <div className="glow-card p-7 text-center sm:p-12">
              <span aria-hidden className="glow-blob absolute -top-20 left-1/2 -translate-x-1/2" />
              <div className="relative mx-auto max-w-xl">
                <span
                  aria-hidden
                  className="mx-auto mb-5 flex size-12 items-center justify-center rounded-lg border border-line-strong bg-surface-1"
                >
                  <Star className="size-5 text-brand-mid" />
                </span>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                  Read genuine reviews
                </h2>
                <p className="mb-8 text-base leading-relaxed text-text-secondary">
                  We invite every client to leave a review on our Google profile. That is
                  the most reliable place to read real, independent feedback about working
                  with Mobiz.
                </p>
                <ButtonLink href={GOOGLE_REVIEWS_HREF} size="lg" external>
                  Open our Google profile
                  <ArrowUpRight aria-hidden className="size-4" />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Real work, presented as work — never as a customer quote. */}
      <Section spacing="default" className="bg-ink-900">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Real projects"
              title="Work you can look at yourself"
              description="Every project below is live. Judge the work directly rather than taking our word for it."
            />
          </Reveal>

          <StaggerGroup as="ul" className="mt-11 grid gap-5 sm:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.slug} as="li" direction="up">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface-0 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-line-brand"
                >
                  <SmartImage
                    src={project.image}
                    alt=""
                    width={800}
                    height={520}
                    rounded="none"
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                      {project.category}
                    </span>
                    <h3 className="text-base font-bold leading-snug text-text-primary">
                      {project.title}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-semibold text-text-muted transition-colors group-hover:text-text-primary">
                      View project
                      <ArrowUpRight aria-hidden className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <FAQSection faqs={TESTIMONIAL_FAQS} title="About references and reviews" />

      <CTASection
        title="Want to talk to us directly?"
        description="Ask us anything about how we work, what we would recommend, or whether we can arrange a relevant reference."
        whatsappMessage="Hello Mobiz, I would like to ask about working with you."
      />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}
