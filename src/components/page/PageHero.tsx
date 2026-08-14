import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { TechBackground } from "@/components/visual/TechBackground";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";
import { ACCENTS, type AccentId } from "@/lib/accents";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  accent?: AccentId;
  /** Right-hand composition. Omit for calm pages (legal, FAQ, blog). */
  visual?: ReactNode;
  /** Short factual chips under the copy — never invented claims. */
  bullets?: string[];
  primaryCta?: { label: string; href: string };
  whatsappMessage?: string;
  /** `full` for commercial pages, `calm` for reading pages. */
  background?: "full" | "service" | "calm";
  /** Small note under the CTAs, e.g. an indicative price label. */
  note?: string;
};

/**
 * The hero every inner page uses.
 *
 * One component means the eyebrow, H1 scale, breadcrumb placement, CTA pairing
 * and background treatment are identical across all 96 non-home routes — which
 * is what stops the deep SEO pages from drifting into a different-looking site.
 *
 * The H1 is plain server-rendered text with a CSS-only entrance, so it never
 * waits for hydration on any route.
 *
 * Vertical padding is deliberately smaller than the homepage hero: inner pages
 * need to get to their content, not fill the screen.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  accent = "red",
  visual,
  bullets,
  primaryCta,
  whatsappMessage,
  background = "service",
  note,
}: PageHeroProps) {
  const hex = ACCENTS[accent].hex;

  return (
    <section className="relative overflow-hidden border-b border-line-faint bg-ink-950">
      <TechBackground variant={background} />

      <Container className="relative pb-14 pt-[calc(68px+2.5rem)] sm:pb-16 sm:pt-[calc(68px+3.5rem)]">
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} className="mb-8" /> : null}

        <div
          className={cn(
            "grid items-center gap-12",
            visual ? "lg:grid-cols-[1.05fr_1fr] lg:gap-16" : "max-w-3xl",
          )}
        >
          <div>
            <p className="enter-up mb-5 inline-flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              <span
                aria-hidden
                className="size-1.5 shrink-0 rounded-full"
                style={{ background: hex }}
              />
              {eyebrow}
            </p>

            <h1
              className="enter-lcp mb-5 text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.03] tracking-tight text-text-primary text-balance"
              style={{ animationDelay: "0.05s" }}
            >
              {title}
            </h1>

            {subtitle ? (
              <p
                className="enter-up max-w-2xl text-base leading-relaxed text-text-secondary text-pretty sm:text-lg"
                style={{ animationDelay: "0.15s" }}
              >
                {subtitle}
              </p>
            ) : null}

            {bullets?.length ? (
              <ul className="enter-up mt-7 flex flex-wrap gap-2" style={{ animationDelay: "0.2s" }}>
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-md border px-3 py-1.5 text-xs font-medium text-text-body"
                    style={{ borderColor: `${hex}45`, background: `${hex}10` }}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}

            {primaryCta || whatsappMessage ? (
              <div
                className="enter-up mt-9 flex flex-wrap gap-3"
                style={{ animationDelay: "0.25s" }}
              >
                {primaryCta ? (
                  <ButtonLink href={primaryCta.href} size="lg" withArrow>
                    {primaryCta.label}
                  </ButtonLink>
                ) : null}
                {whatsappMessage ? (
                  <ButtonLink
                    href={whatsappUrl(whatsappMessage)}
                    variant="whatsapp"
                    size="lg"
                    external
                  >
                    <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
                    Chat on WhatsApp
                  </ButtonLink>
                ) : null}
              </div>
            ) : null}

            {note ? (
              <p className="enter-up mt-5 text-xs text-text-muted" style={{ animationDelay: "0.3s" }}>
                {note}
              </p>
            ) : null}
          </div>

          {visual ? (
            <div className="enter-scale" style={{ animationDelay: "0.3s" }}>
              {visual}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
