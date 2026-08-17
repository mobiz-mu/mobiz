import Image from "next/image";
import type { CSSProperties } from "react";
import {
  Bot,
  Boxes,
  Calculator,
  Code2,
  Megaphone,
  Monitor,
  Package,
  ShoppingCart,
} from "lucide-react";

import { HeroGlobe } from "@/components/home/HeroGlobe";

import "./hero-stage.css";

/**
 * Homepage hero stage — one centred system.
 *
 * Every layer derives from the SAME centre point (`left: 50%; top: 50%`), so the
 * globe, the figure and the orbit share an axis instead of each being nudged
 * into place independently:
 *
 *   halo -> orbit guide -> globe -> figure -> orbiting service cards
 *
 * The eight cards are not hand-placed. Each one owns an index, and its angle is
 * derived as `index * 45deg` against a single `--orbit-r` radius, so the ring is
 * even by construction and stays even at every breakpoint — the radius is one
 * `cqmin` value resolved against the stage, not a per-breakpoint pixel guess.
 *
 * Deliberately separate from `OrbitScene`. That component is still rendered by
 * /services, so changing its card design would have altered that page too —
 * this keeps the change to the homepage only.
 *
 * Pure HTML/CSS/SVG: no client component, no canvas, no animation library, no
 * rAF loop, no JS positioning. Only `transform` and `opacity` animate, so the
 * whole scene composites and never triggers layout.
 */

type Card = {
  index: string;
  label: string;
  sub: string;
  Icon: typeof Bot;
};

/*
 * Service order is the spec's order. Position is derived from the array index,
 * so reordering or adding a service re-spaces the whole ring automatically.
 */
const CARDS: Card[] = [
  { index: "01", label: "AI Solutions", sub: "Automation", Icon: Bot },
  { index: "02", label: "Branding", sub: "Business Identity", Icon: Boxes },
  { index: "03", label: "Websites", sub: "Web Platforms", Icon: Monitor },
  { index: "04", label: "E-Commerce", sub: "Online Store", Icon: ShoppingCart },
  { index: "05", label: "Accounting", sub: "VAT Ready", Icon: Calculator },
  { index: "06", label: "Inventory", sub: "Stock Control", Icon: Package },
  { index: "07", label: "Marketing", sub: "Digital Growth", Icon: Megaphone },
  { index: "08", label: "Business Software", sub: "Custom Systems", Icon: Code2 },
];

const SLOT_STEP = 360 / CARDS.length;

/**
 * Seconds per revolution. Deliberately different from the globe's 58s so the
 * two never sync up and the scene reads as organic rather than mechanical.
 */
const RING_DURATION = "42s";

export function HeroStage() {
  return (
    <div
      className="hero-stage"
      style={{ "--ring-dur": RING_DURATION } as CSSProperties}
    >
      <span aria-hidden className="hero-stage__halo" />

      {/* The path the cards travel, drawn faintly so the ring reads as a system. */}
      <span aria-hidden className="hero-orbit-guide" />

      {/*
        Fixed waypoints on that path, offset half a slot so they sit BETWEEN the
        cards rather than underneath them. Static: they mark the orbit, they do
        not travel along it.
      */}
      <span aria-hidden className="hero-orbit-nodes">
        {CARDS.map((card, index) => (
          <span
            key={`node-${card.index}`}
            className="hero-orbit-node"
            style={{ "--a": `${index * SLOT_STEP + SLOT_STEP / 2}deg` } as CSSProperties}
          />
        ))}
      </span>

      {/* Decorative: the globe carries no information the copy doesn't already state. */}
      <HeroGlobe />

      {/* Warm wash between the sphere and the figure, so she reads off it. */}
      <span aria-hidden className="hero-stage__backlight" />

      <div className="hero-stage__figure">
        <Image
          src="/images/hero/orbit-lady.webp"
          alt=""
          width={760}
          height={900}
          sizes="(max-width: 639px) 190px, (max-width: 1023px) 260px, 300px"
          /*
           * Eager + high priority, but deliberately NOT next/image `priority`.
           * Measured previously: the LCP element on this page is the H1 text,
           * not this image, so it must not jump ahead of the text paint.
           */
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/*
        A list, so the eight services remain readable in document order for
        assistive tech regardless of where the rotation happens to be.
      */}
      <ul className="hero-ring" aria-label="Mobiz service areas">
        {CARDS.map((card, index) => (
          <li
            key={card.index}
            className="hero-ring__slot"
            style={
              /*
               * Angle and index only — no per-card radius, no top/left. The slot
               * is a zero-size point at the stage centre that rotates to its
               * angle and steps out by the shared `--orbit-r`; `--i` phases the
               * depth animation so each card dims at the back of its own travel.
               */
              {
                "--a": `${index * SLOT_STEP}deg`,
                "--i": index,
              } as CSSProperties
            }
          >
            <span className="hero-ring__upright">
              <span className="hero-card">
                <span className="hero-card__top">
                  <span className="hero-card__index">{card.index}</span>
                  <card.Icon aria-hidden size={16} className="hero-card__icon" />
                </span>
                <span className="hero-card__label">{card.label}</span>
                <span className="hero-card__sub">{card.sub}</span>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroStage;
