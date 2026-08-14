import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceVisual } from "@/components/visual/ServiceVisual";
import { ACCENTS } from "@/lib/accents";
import { getServiceDivision, type ServiceDivisionId } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type ServiceSpotlightProps = {
  division: ServiceDivisionId;
  /** Which side the visual sits on. Alternate down the page. */
  side?: "left" | "right";
  points: string[];
  /** Alternating surface keeps consecutive sections from merging. */
  surface?: "base" | "raised";
};

/**
 * A single division told as a split composition.
 *
 * Copy and visual enter from opposite edges toward the centre, and the side
 * alternates down the page so the eye is handed across rather than pushed
 * straight up five times.
 *
 * Vertical rhythm comes from `Section`, so these sections sit close enough to
 * read as one continuous story instead of five isolated blocks.
 */
export function ServiceSpotlight({
  division: divisionId,
  side = "right",
  points,
  surface = "base",
}: ServiceSpotlightProps) {
  const division = getServiceDivision(divisionId);
  const accent = ACCENTS[division.accent];
  const visualFirst = side === "left";
  const headingId = `spotlight-${division.id}`;

  return (
    <Section
      spacing="default"
      deferPaint
      aria-labelledby={headingId}
      className={cn("overflow-hidden", surface === "raised" ? "bg-ink-900" : "bg-ink-950")}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 h-[420px] w-[520px] -translate-y-1/2 blur-3xl"
        style={{
          [visualFirst ? "left" : "right"]: "-8%",
          background: `radial-gradient(ellipse, ${accent.hex}14, transparent 70%)`,
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal
            direction={visualFirst ? "right" : "left"}
            className={cn(visualFirst && "lg:order-2")}
          >
            <p className="mb-4 flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
              <span
                aria-hidden
                className="size-1.5 shrink-0 rounded-full"
                style={{ background: accent.hex }}
              />
              <span style={{ color: accent.onDark }}>{division.num}</span>
              <span className="text-text-muted">{division.shortLabel}</span>
            </p>

            <h2
              id={headingId}
              className="mb-5 text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-[1.05] tracking-tight text-text-primary text-balance"
            >
              {division.label}
            </h2>

            <p className="mb-7 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
              {division.description}
            </p>

            <ul className="mb-8 space-y-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0"
                    style={{ color: accent.onDark }}
                  />
                  <span className="text-sm leading-relaxed text-text-body">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href={division.href}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors"
              style={{
                borderColor: `${accent.hex}55`,
                color: accent.onDark,
                background: `${accent.hex}12`,
              }}
            >
              Explore {division.shortLabel}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </Reveal>

          <Reveal
            direction={visualFirst ? "left" : "right"}
            className={cn(visualFirst && "lg:order-1")}
          >
            <ServiceVisual division={division.id} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default ServiceSpotlight;
