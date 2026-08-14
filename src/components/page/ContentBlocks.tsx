import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ACCENTS, type AccentId } from "@/lib/accents";
import { cn } from "@/lib/utils";

/*
 * The reusable body sections every content page is assembled from.
 *
 * Each uses a different presentation pattern on purpose — prose, glowing cards,
 * a numbered timeline, a two-column check list, a chip cloud — so a page built
 * from all five never reads as five identical card grids stacked up.
 */

/* ── Prose ────────────────────────────────────────────────────────────────── */

export function ProseSection({
  title,
  paragraphs,
  eyebrow,
  surface = "base",
}: {
  title: string;
  paragraphs: string[];
  eyebrow?: string;
  surface?: "base" | "raised";
}) {
  if (paragraphs.length === 0) return null;

  return (
    <Section
      spacing="default"
      deferPaint
      className={surface === "raised" ? "bg-ink-900" : "bg-ink-950"}
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </Reveal>
        <div className="mt-7 max-w-3xl space-y-5">
          {paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={Math.min(i, 3) * 0.05}>
              <p className="text-base leading-relaxed text-text-secondary text-pretty">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── Feature cards ────────────────────────────────────────────────────────── */

export function FeatureGrid({
  title,
  features,
  eyebrow,
  accent = "red",
  surface = "base",
}: {
  title: string;
  features: { title: string; description: string }[];
  eyebrow?: string;
  accent?: AccentId;
  surface?: "base" | "raised";
}) {
  if (features.length === 0) return null;
  const { hex } = ACCENTS[accent];

  return (
    <Section
      spacing="default"
      deferPaint
      className={cn("overflow-hidden", surface === "raised" ? "bg-ink-900" : "bg-ink-950")}
    >
      <span aria-hidden className="absolute inset-0 tech-grid-fine" />
      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} accent={accent} />
        </Reveal>

        <StaggerGroup as="ul" className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <StaggerItem
              key={feature.title}
              as="li"
              direction={index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"}
            >
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-0 p-6 transition-colors hover:border-line-strong">
                <span
                  aria-hidden
                  className="mb-4 h-0.5 w-9 rounded-full"
                  style={{ background: hex }}
                />
                <h3 className="mb-2.5 text-base font-bold leading-snug text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}

/* ── Process timeline ─────────────────────────────────────────────────────── */

export function ProcessSteps({
  title,
  steps,
  eyebrow = "How it works",
  accent = "red",
}: {
  title: string;
  steps: { title: string; description: string }[];
  eyebrow?: string;
  accent?: AccentId;
}) {
  if (steps.length === 0) return null;
  const { hex, onDark } = ACCENTS[accent];

  return (
    <Section spacing="default" deferPaint className="bg-ink-950">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} accent={accent} />
        </Reveal>

        <ol className="relative mt-11 space-y-5">
          {/* Spine, hidden on mobile where the numbers carry the sequence. */}
          <span
            aria-hidden
            className="absolute bottom-6 left-[23px] top-6 hidden w-px sm:block"
            style={{ background: `linear-gradient(180deg, ${hex}, ${hex}15)` }}
          />
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal direction="left" delay={Math.min(index, 5) * 0.06}>
                <div className="relative flex gap-5">
                  <span
                    aria-hidden
                    className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-lg border font-mono text-sm font-bold"
                    style={{
                      borderColor: `${hex}45`,
                      color: onDark,
                      background: "var(--color-ink-950)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1 rounded-xl border border-line bg-surface-0 p-5">
                    <h3 className="mb-2 text-base font-bold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ── Benefits ─────────────────────────────────────────────────────────────── */

export function BenefitList({
  title,
  benefits,
  eyebrow = "What you get",
  accent = "red",
}: {
  title: string;
  benefits: string[];
  eyebrow?: string;
  accent?: AccentId;
}) {
  if (benefits.length === 0) return null;
  const { hex, onDark } = ACCENTS[accent];

  return (
    <Section spacing="default" deferPaint className="overflow-hidden bg-ink-900">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[520px] -translate-y-1/2"
        style={{ background: `radial-gradient(ellipse, ${hex}12, transparent 70%)` }}
      />
      <Container className="relative">
        <div className="grid gap-11 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal direction="left">
            <SectionHeading eyebrow={eyebrow} title={title} accent={accent} />
          </Reveal>
          <Reveal direction="right">
            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-lg border border-line bg-surface-0 px-4 py-3.5"
                >
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0" style={{ color: onDark }} />
                  <span className="text-sm leading-relaxed text-text-body">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ── Industry chips ───────────────────────────────────────────────────────── */

export function IndustryList({
  title,
  industries,
  eyebrow = "Who we work with",
  accent = "red",
}: {
  title: string;
  industries: string[];
  eyebrow?: string;
  accent?: AccentId;
}) {
  if (industries.length === 0) return null;
  const { hex } = ACCENTS[accent];

  return (
    <Section spacing="calm" deferPaint className="bg-ink-950">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} accent={accent} />
        </Reveal>
        <Reveal>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {industries.map((industry) => (
              <li
                key={industry}
                className="rounded-lg border border-line bg-surface-0 px-4 py-2.5 text-sm text-text-body"
              >
                <span
                  aria-hidden
                  className="mr-2.5 inline-block size-1.5 rounded-full align-middle"
                  style={{ background: hex }}
                />
                {industry}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
