import Link from "next/link";
import { ArrowRight, Cpu, Globe2, Package, ReceiptText, Search, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/motion/Reveal";
import { ACCENTS, type AccentId } from "@/lib/accents";
import type { RevealDirection } from "@/components/motion/variants";

type Challenge = {
  service: string;
  headline: string;
  body: string;
  accent: AccentId;
  icon: LucideIcon;
  image: string;
  href: string;
};

/*
 * The problems Mobiz solves, stated from the visitor's point of view.
 *
 * Each card names a real business problem, then the division that answers it —
 * this is the section that converts "what do you do?" into "which of these is
 * me?".
 *
 * TODO: Replace card imagery with final Mobiz service photography. These reuse
 * the existing production service artwork so the set stays visually related.
 */
const CHALLENGES: Challenge[] = [
  {
    service: "Modern Website Design",
    headline: "No online presence",
    body: "Get found online, show your services properly, and turn visitors into customers around the clock.",
    accent: "blue",
    icon: Globe2,
    image: "/images/services/cards/website-design-development.webp",
    href: "/services/website-design-development",
  },
  {
    service: "Digital Marketing",
    headline: "Struggling to get new clients",
    body: "Reach customers in Mauritius on Facebook, Instagram and Google with campaigns built around real enquiries.",
    accent: "yellow",
    icon: TrendingUp,
    image: "/images/services/cards/digital-marketing-seo.webp",
    href: "/services/digital-marketing",
  },
  {
    service: "SEO & Google",
    headline: "Not showing up on Google",
    body: "Improve how your business appears in local search so the people already looking for you can find you.",
    accent: "red",
    icon: Search,
    image: "/images/portfolio/cards/digital-marketing-portfolio.webp",
    href: "/seo-services-mauritius",
  },
  {
    service: "Accounting & Tax",
    headline: "Accounting eats your time",
    body: "Invoicing, payroll and VAT handled properly, with clear reports so you always know where the business stands.",
    accent: "green",
    icon: ReceiptText,
    image: "/images/services/cards/accounting-tax-services.webp",
    href: "/services/accounting-tax-returns",
  },
  {
    service: "Inventory Management",
    headline: "Stock is hard to track",
    body: "Know what you hold and what is moving, with barcodes, low-stock alerts and organised warehouse processes.",
    accent: "emerald",
    icon: Package,
    image: "/images/services/cards/logistics-import-export.webp",
    href: "/services/warehousing-inventory",
  },
  {
    service: "Business Software & AI",
    headline: "Manual work slows you down",
    body: "Replace repetitive admin with software and automation built around how your business actually runs.",
    accent: "red",
    icon: Cpu,
    image: "/images/services/cards/business-software-automation.webp",
    href: "/services/business-solutions",
  },
];

/**
 * Extruded 3D icon tile.
 *
 * Depth comes from layered inset shadows and a single highlight — a static
 * paint, so a grid of six costs nothing per frame.
 */
function Icon3D({ icon: Icon, accent }: { icon: LucideIcon; accent: AccentId }) {
  const { hex } = ACCENTS[accent];
  return (
    <span
      aria-hidden
      className="relative flex size-13 shrink-0 items-center justify-center rounded-md"
      style={{
        background: `linear-gradient(145deg, ${hex}ee 0%, ${hex}88 100%)`,
        boxShadow: `0 10px 28px ${hex}55, inset 0 1px 0 rgba(255,255,255,0.30), inset 0 -2px 0 rgba(0,0,0,0.25), inset 2px 0 0 rgba(255,255,255,0.12)`,
        transform: "perspective(120px) rotateX(8deg) rotateY(-6deg)",
      }}
    >
      <span
        className="pointer-events-none absolute left-1 top-1 h-[45%] w-1/2 rounded-t-[10px] bg-white/20"
      />
      <Icon className="relative z-10 size-5.5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
    </span>
  );
}

/**
 * Column-aware entrance: the left column arrives from the left, the centre
 * drops in, the right arrives from the right. The grid assembles toward its
 * centre instead of every card sliding the same way.
 */
function directionForColumn(index: number): RevealDirection {
  const column = index % 3;
  if (column === 0) return "left";
  if (column === 1) return "up";
  return "right";
}

export function Challenges() {
  return (
    <Section spacing="flagship" className="overflow-hidden bg-ink-900" aria-labelledby="challenges-heading">
      <span aria-hidden className="absolute inset-0 tech-grid" />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[900px] -translate-x-1/2 blur-3xl"
        style={{
          background: "radial-gradient(ellipse, rgba(192,24,34,0.10), transparent 70%)",
        }}
      />

      <Container className="relative">
        <Reveal className="mb-14 lg:mb-16">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-brand/85">
            Business challenges
          </p>
          <h2
            id="challenges-heading"
            className="mb-6 font-bold leading-[0.95] tracking-tight text-text-primary"
            style={{ fontSize: "clamp(2.125rem,5vw,4.25rem)" }}
          >
            Running a business shouldn&apos;t mean
            <br className="hidden sm:block" /> managing{" "}
            <span className="text-brand">everything alone.</span>
          </h2>
          <p className="max-w-[540px] text-lg font-medium leading-relaxed text-text-secondary">
            We identify the exact challenges holding Mauritian businesses back — and
            deliver the right solution to move forward.
          </p>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((card, index) => {
            const { hex } = ACCENTS[card.accent];
            return (
              <li key={card.service} className="flex">
                <Reveal direction={directionForColumn(index)} className="flex w-full">
                  <Link
                    href={card.href}
                    className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-linear-[160deg,#141418_0%,#0f0f13_100%] shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1.5"
                  >
                    <div className="relative shrink-0">
                      <SmartImage
                        src={card.image}
                        alt=""
                        width={600}
                        height={340}
                        rounded="none"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink-800/15 to-ink-800/72"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[3px]"
                        style={{ background: `linear-gradient(90deg, ${hex}, ${hex}55)` }}
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-5 flex items-center gap-3">
                        <Icon3D icon={card.icon} accent={card.accent} />
                        <span
                          className="font-mono text-[10px] font-bold uppercase tracking-[0.1em]"
                          style={{ color: hex }}
                        >
                          {card.service}
                        </span>
                      </div>

                      <h3 className="mb-3 text-lg font-bold leading-snug text-text-primary">
                        {card.headline}
                      </h3>
                      <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                        {card.body}
                      </p>

                      <div className="mt-5 flex items-center justify-between gap-2 border-t border-line-faint pt-4">
                        <span className="flex items-center gap-2">
                          <span
                            aria-hidden
                            className="size-1.5 rounded-full"
                            style={{ background: hex }}
                          />
                          <span className="font-mono text-[11px] tracking-wide text-text-muted">
                            Learn more
                          </span>
                        </span>
                        <ArrowRight
                          aria-hidden
                          className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                          style={{ color: hex }}
                        />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

export default Challenges;
