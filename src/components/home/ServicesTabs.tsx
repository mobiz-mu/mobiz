"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ACCENTS } from "@/lib/accents";
import { serviceDivisions } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * What each division actually delivers.
 *
 * Keyed to `serviceDivisions` so the tab strip, labels, hrefs and accent colours
 * all come from the single navigation source rather than a second copy.
 */
const DETAIL: Record<string, { highlights: string[]; tags: string[] }> = {
  "website-design-development": {
    highlights: [
      "Custom mobile-first design",
      "Built for speed and Core Web Vitals",
      "WhatsApp enquiry integration",
      "SEO structure from day one",
    ],
    tags: ["Next.js", "E-commerce", "Web apps", "SEO-ready"],
  },
  "digital-marketing": {
    highlights: [
      "Local and national SEO",
      "Google Ads management",
      "Social media campaigns",
      "Monthly performance reporting",
    ],
    tags: ["Google SEO", "Google Ads", "Social media", "Analytics"],
  },
  "accounting-tax-returns": {
    highlights: [
      "VAT registration and filing",
      "Payroll processing",
      "MRA compliance support",
      "Monthly financial reporting",
    ],
    tags: ["VAT filing", "Payroll", "MRA", "Invoicing"],
  },
  "warehousing-inventory": {
    highlights: [
      "Barcode and SKU systems",
      "Real-time low-stock alerts",
      "Supplier and purchase tracking",
      "Stock counts and reporting",
    ],
    tags: ["Stock tracking", "Barcodes", "Warehouse", "Reports"],
  },
  "business-solutions": {
    highlights: [
      "Company registration support",
      "Business plans and forecasts",
      "Pitch decks and brand documents",
      "AI workflow automation",
    ],
    tags: ["Business plans", "Company reg", "AI automation", "Branding"],
  },
};

/**
 * The five divisions as an interactive panel.
 *
 * A proper tablist: roving arrow-key navigation, `aria-selected`, and panels
 * wired with `aria-controls`/`aria-labelledby`, so it is operable without a
 * mouse and announces correctly.
 *
 * Only the panel body swaps — the surrounding layout is fixed height-wise on
 * desktop so switching tabs never shifts the page.
 */
export function ServicesTabs() {
  const [activeId, setActiveId] = useState(serviceDivisions[0]!.id);
  const reduced = useReducedMotion();

  const active = serviceDivisions.find((d) => d.id === activeId)!;
  const detail = DETAIL[active.id]!;
  const accent = ACCENTS[active.accent];

  function onTabKeyDown(e: React.KeyboardEvent) {
    const index = serviceDivisions.findIndex((d) => d.id === activeId);
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % serviceDivisions.length;
    else if (e.key === "ArrowLeft")
      next = (index - 1 + serviceDivisions.length) % serviceDivisions.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = serviceDivisions.length - 1;
    else return;

    e.preventDefault();
    const target = serviceDivisions[next]!;
    setActiveId(target.id);
    document.getElementById(`svc-tab-${target.id}`)?.focus();
  }

  return (
    <Section id="services" spacing="flagship" className="bg-ink-950" aria-labelledby="services-heading">
      <span aria-hidden className="absolute inset-0 tech-grid" />

      <Container className="relative">
        <div className="mb-14">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-brand/85">
            Five business divisions
          </p>
          <h2
            id="services-heading"
            className="font-bold leading-[0.95] tracking-tight text-text-primary"
            style={{ fontSize: "clamp(2.25rem,5.5vw,4.5rem)" }}
          >
            Everything your business needs,
            <br className="hidden sm:block" />{" "}
            <span className="text-brand">connected through Mobiz.</span>
          </h2>
        </div>

        {/* Tab strip */}
        <div
          role="tablist"
          aria-label="Mobiz service divisions"
          onKeyDown={onTabKeyDown}
          className="mb-10 flex gap-2 overflow-x-auto pb-1"
        >
          {serviceDivisions.map((division) => {
            const selected = division.id === activeId;
            return (
              <button
                key={division.id}
                id={`svc-tab-${division.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`svc-panel-${division.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(division.id)}
                className={cn(
                  "flex min-h-11 shrink-0 items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors",
                  selected
                    ? "text-text-primary"
                    : "border-line text-text-muted hover:border-line-strong hover:text-text-body",
                )}
                style={
                  selected
                    ? {
                        borderColor: `${ACCENTS[division.accent].hex}70`,
                        background: `${ACCENTS[division.accent].hex}18`,
                      }
                    : undefined
                }
              >
                <span
                  aria-hidden
                  className="font-mono text-[10px]"
                  style={{ color: ACCENTS[division.accent].hex }}
                >
                  {division.num}
                </span>
                {division.shortLabel}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id={`svc-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`svc-tab-${active.id}`}
          className="glow-card min-h-[420px] p-6 sm:p-10"
          style={{ ["--glow-hue" as string]: accent.rgb }}
        >
          <span aria-hidden className="glow-blob absolute -right-16 -top-24" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]"
            >
              <div>
                <span
                  aria-hidden
                  className="mb-5 flex size-13 items-center justify-center rounded-md"
                  style={{
                    background: `linear-gradient(145deg, ${accent.hex}ee, ${accent.hex}88)`,
                    boxShadow: `0 10px 28px ${accent.hex}55, inset 0 1px 0 rgba(255,255,255,0.3)`,
                  }}
                >
                  <active.icon className="size-6 text-white" />
                </span>

                <h3 className="mb-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                  {active.label}
                </h3>
                <p className="mb-7 max-w-lg text-base leading-relaxed text-text-secondary">
                  {active.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {detail.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={active.href}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-primary underline-offset-4 hover:underline"
                  style={{ color: accent.hex }}
                >
                  Explore {active.shortLabel}
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </div>

              <ul className="space-y-3 self-center">
                {detail.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-lg border border-line bg-surface-0 px-4 py-3.5"
                  >
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0"
                      style={{ color: accent.hex }}
                    />
                    <span className="text-sm text-text-body">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}

export default ServicesTabs;
