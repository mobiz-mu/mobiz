import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { TechBackground } from "@/components/visual/TechBackground";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";
import { whatsappUrl } from "@/lib/site";

import "./about-hero.css";

/**
 * About hero.
 *
 * Deliberately its own component rather than `PageHero` + `OrbitScene`.
 *
 * PageHero is shared by 16 routes and OrbitScene is part of the frozen
 * homepage, so neither could be adjusted for this page without changing
 * output elsewhere. The orbit also composed badly here: scaled into a
 * half-width column it cropped its own cards and left a large empty centre,
 * which read as a reused homepage graphic rather than an About visual.
 *
 * What replaces it is an architecture diagram — one company at the centre,
 * four capabilities around it, wired together. It is plain HTML/CSS/SVG, so
 * this stays a server component and ships no client JavaScript.
 *
 * Everything else is the approved system: same Container, Breadcrumbs,
 * ButtonLink, TechBackground, whatsappUrl helper and entrance classes as every
 * other inner page.
 */

type Division = {
  index: string;
  name: string;
  description: string;
};

const DIVISIONS: Division[] = [
  { index: "01", name: "Websites", description: "Websites & E-Commerce" },
  { index: "02", name: "Marketing", description: "SEO & Digital Growth" },
  { index: "03", name: "Accounting", description: "Accounts & Tax" },
  { index: "04", name: "Systems", description: "Business Software" },
];

/*
 * Wire geometry, in the 100x100 user space the SVG scales from. The four
 * endpoints match the corner each panel presents to the centre, so the lines
 * land on the red dots rather than floating near them.
 */
const WIRES = ["M 27 30 L 50 50", "M 73 30 L 50 50", "M 27 70 L 50 50", "M 73 70 L 50 50"];

function EcosystemDiagram() {
  return (
    <div className="about-eco">
      {/*
        Decorative: the same information is already carried by the panel text
        below, so this is hidden rather than announced as a graphic.
      */}
      <svg
        aria-hidden
        className="about-eco__wires"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {WIRES.map((d) => (
          <path key={d} className="about-eco__wire" d={d} />
        ))}
        {WIRES.map((d, i) => (
          <path
            key={`pulse-${d}`}
            className={`about-eco__pulse${i > 0 ? ` about-eco__pulse--${i + 1}` : ""}`}
            d={d}
          />
        ))}
      </svg>

      <div className="about-eco__core">
        <span className="about-eco__core-mark">MoBiz.mu</span>
        <span className="about-eco__core-sub">Business Infrastructure</span>
      </div>

      <ul className="about-eco__grid">
        {DIVISIONS.map((division) => (
          <li key={division.index} className="about-eco__node">
            <span aria-hidden className="about-eco__dot" />
            <span className="about-eco__index">{division.index}</span>
            <span className="about-eco__name">{division.name}</span>
            <span className="about-eco__desc">{division.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AboutHero({ breadcrumbs }: { breadcrumbs?: BreadcrumbItem[] }) {
  return (
    <section className="relative overflow-hidden border-b border-line-faint bg-ink-950">
      <TechBackground variant="full" />

      <Container className="relative pb-16 pt-[calc(68px+2.5rem)] sm:pb-20 sm:pt-[calc(68px+3.5rem)]">
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} className="mb-8" /> : null}

        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
          <div>
            <p className="enter-up mb-5 inline-flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#c01822]" />
              About Mobiz
            </p>

            {/*
              Sized well below the homepage H1 on purpose. This page has to sit
              beside a diagram, not fill the viewport on its own.
            */}
            <h1
              className="enter-lcp mb-6 text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-text-primary"
              style={{ animationDelay: "0.05s" }}
            >
              Built for businesses
              <br />
              that want to
              <br />
              <span className="text-[#c01822]">move forward.</span>
            </h1>

            <p
              className="enter-up max-w-xl text-base leading-relaxed text-text-secondary text-pretty sm:text-lg"
              style={{ animationDelay: "0.15s" }}
            >
              Mobiz brings websites, digital marketing, accounting and business
              systems together under one team — helping businesses in Mauritius
              build stronger foundations and grow with confidence.
            </p>

            <div className="enter-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.25s" }}>
              <ButtonLink href="/contact" size="lg" withArrow>
                Talk to Mobiz
              </ButtonLink>

              <ButtonLink
                href={whatsappUrl(
                  "Hello Mobiz, I would like to know more about how you work.",
                )}
                variant="whatsapp"
                size="lg"
                external
              >
                <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="enter-scale" style={{ animationDelay: "0.3s" }}>
            <EcosystemDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutHero;
