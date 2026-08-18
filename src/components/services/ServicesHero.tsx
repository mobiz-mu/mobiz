import type { CSSProperties } from "react";
import { Barcode, FileText, Globe2, TrendingUp, Workflow } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";
import { whatsappUrl } from "@/lib/site";

import "./services-hero.css";

/**
 * The /services hero.
 *
 * Route-scoped on purpose. Every other inner page keeps the shared `PageHero`,
 * and the homepage keeps its own — this file is loaded by the services hub and
 * nothing else, so the hub can be shorter and more service-specific without
 * moving the design system underneath 17 other routes.
 *
 * Why it replaces the previous hero:
 *   - the old one reused the homepage orbit, which at hub width cropped two
 *     cards against the right edge and cut a third off the bottom
 *   - that orbit advertises AI Solutions and Branding, which are not among the
 *     five divisions this page exists to explain
 *   - it was tall enough that the divisions below never appeared on first paint
 *
 * Server component. The only JavaScript this hero contributes is none: the
 * entrances, the travelling signals and the ambient drift are all CSS, and
 * every keyframe animates `transform` or `opacity` exclusively.
 */

type Node = {
  /** The division name, written the way the page below writes it. */
  name: string;
  meta: string;
  icon: typeof Globe2;
  hex: string;
  /** Position inside the stage, as a share of its box. */
  x: string;
  y: string;
  /** Spoke geometry from the hub out to this node. */
  angle: string;
  len: string;
  delay: string;
};

/*
 * Five points of a pentagon around the hub, measured once in the stage's own
 * 100x86 space so a node cannot land outside the frame at any width:
 *
 *   hub (50, 43), radius 32 x 34, starting at -90deg and stepping 72deg
 *
 * The radius is set by clearance, not by taste: at a 520px stage the pills are
 * 187px wide, so anything tighter puts a pill corner over the hub — which is
 * exactly what the first attempt did.
 *
 * `len` is the hub-to-node distance in the same units, which is what lets the
 * signal dot travel the spoke with a plain translateX of that length.
 */
const NODES: Node[] = [
  {
    name: "Website Design & Development",
    meta: "Design & build",
    icon: Globe2,
    hex: "#1a56db",
    x: "50.0%",
    y: "10.47%",
    angle: "-90deg",
    len: "34cqw",
    delay: "0.30s",
  },
  {
    name: "Digital Marketing & SEO",
    meta: "Search & social",
    icon: TrendingUp,
    hex: "#d97706",
    x: "80.4%",
    y: "37.78%",
    angle: "-19deg",
    len: "32.2cqw",
    delay: "0.38s",
  },
  {
    name: "Accounting & Tax",
    meta: "VAT & payroll",
    icon: FileText,
    hex: "#16a34a",
    x: "68.8%",
    y: "81.98%",
    angle: "55.6deg",
    len: "33.3cqw",
    delay: "0.46s",
  },
  {
    name: "Inventory & Stock Management",
    meta: "Stock control",
    icon: Barcode,
    hex: "#0d9488",
    x: "31.2%",
    y: "81.98%",
    angle: "124.4deg",
    len: "33.3cqw",
    delay: "0.54s",
  },
  {
    name: "Business Solutions",
    meta: "Systems & tools",
    icon: Workflow,
    hex: "#c01822",
    x: "19.6%",
    y: "37.78%",
    angle: "-161deg",
    len: "32.2cqw",
    delay: "0.62s",
  },
];

export function ServicesHero({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
  return (
    <section className="svc-hero">
      <span aria-hidden className="svc-hero__grid" />
      <span aria-hidden className="svc-hero__glow" />

      <Container className="relative pb-12 pt-[calc(68px+1.9rem)] sm:pb-14 sm:pt-[calc(68px+2.4rem)]">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <div className="svc-hero__inner grid items-center gap-10 lg:grid-cols-[48fr_52fr] lg:gap-12">
          <div>
            <p className="svc-hero__eyebrow" style={{ "--d": "0s" } as CSSProperties}>
              Services
            </p>

            <h1 className="svc-hero__title">
              <span className="svc-hero__line" style={{ "--d": "0.06s" } as CSSProperties}>
                Everything your business needs.
              </span>{" "}
              <span className="svc-hero__line" style={{ "--d": "0.16s" } as CSSProperties}>
                One <span className="svc-hero__accent">trusted partner.</span>
              </span>
            </h1>

            <p className="svc-hero__body" style={{ "--d": "0.26s" } as CSSProperties}>
              From websites and digital marketing to accounting, inventory and business
              solutions — Mobiz brings the essential services Mauritian businesses need to
              grow under one roof.
            </p>

            <div className="svc-hero__ctas" style={{ "--d": "0.34s" } as CSSProperties}>
              <ButtonLink href="#service-divisions" size="lg" withArrow>
                Explore Our Services
              </ButtonLink>

              <ButtonLink
                href={whatsappUrl(
                  "Hello Mobiz, I would like to know which service is right for my business.",
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

          {/*
            The five divisions as one connected system. Real text, server
            rendered, so it reads and indexes as content rather than artwork —
            but not links, because the section immediately below this hero
            already links every division and duplicating them here would just
            add tap targets that go to the same place.
          */}
          <div className="svc-eco">
            <span aria-hidden className="svc-eco__ring" />
            <span aria-hidden className="svc-eco__ring svc-eco__ring--outer" />

            {NODES.map((n) => (
              <span
                key={`spoke-${n.name}`}
                aria-hidden
                className="svc-eco__spoke"
                style={{ "--a": n.angle, "--len": n.len } as CSSProperties}
              >
                <i
                  className="svc-eco__signal"
                  style={{ "--len": n.len, "--d": n.delay } as CSSProperties}
                />
              </span>
            ))}

            <div className="svc-eco__stack">
              <div className="svc-eco__hub">
                <span aria-hidden className="svc-eco__pulse" />
                <b>Mobiz</b>
                <i>Business Hub</i>
              </div>

              {NODES.map((n) => {
                const Icon = n.icon;

                return (
                  <div
                    key={n.name}
                    className="svc-eco__node"
                    style={
                      {
                        "--x": n.x,
                        "--y": n.y,
                        "--d": n.delay,
                        "--nc": n.hex,
                      } as CSSProperties
                    }
                  >
                    <span className="svc-eco__icon">
                      <Icon aria-hidden strokeWidth={1.8} />
                    </span>

                    <span className="svc-eco__text">
                      <span className="svc-eco__name">{n.name}</span>
                      <span className="svc-eco__meta">{n.meta}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServicesHero;
