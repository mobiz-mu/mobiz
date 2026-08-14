import Image from "next/image";
import { ACCENTS, type AccentId } from "@/lib/accents";
import { cn } from "@/lib/utils";

export type OrbitItem = {
  id: string;
  label: string;
  sub: string;
  accent: AccentId;
  /** Local, optimized image. Never a remote hotlink. */
  image: string;
};

type OrbitSceneProps = {
  items: OrbitItem[];
  /** Optional centre figure (the approved hero composition uses one). */
  centreImage?: string;
  centreAlt?: string;
  /** Seconds per revolution. Slower reads as premium; faster reads as busy. */
  duration?: number;
  direction?: "cw" | "ccw";
  /** Drops to 4 items and hides the ring labels. Used below `lg`. */
  compact?: boolean;
  className?: string;
  priority?: boolean;
};

/*
 * ── Design space ──────────────────────────────────────────────────────────
 * The scene is authored against an 820×820 canvas, then expressed entirely in
 * `cqw` units (1cqw = 1% of the container's inline size). That makes the whole
 * composition scale with its container using pure CSS — no ResizeObserver, no
 * resize listener, no re-render, and nothing to hydrate. This component ships
 * zero JavaScript.
 */
const DS = 820;
const RADIUS = 310;
const CARD_W = 158;

/** Convert a design-space pixel value to container-relative units. */
const u = (px: number) => `${((px / DS) * 100).toFixed(4)}cqw`;

function OrbitCard({ item }: { item: OrbitItem }) {
  const { hex, onLight } = ACCENTS[item.accent];

  return (
    <div
      className="overflow-hidden bg-white"
      style={{
        width: u(CARD_W),
        borderRadius: u(15),
        boxShadow: `0 ${u(16)} ${u(56)} rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.18), 0 ${u(6)} ${u(22)} ${hex}55`,
      }}
    >
      <div className="relative overflow-hidden bg-ink-500" style={{ height: u(114) }}>
        <Image
          src={item.image}
          alt=""
          fill
          sizes="200px"
          className="object-cover"
          loading="lazy"
        />
        <span
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 45%, ${hex}30 100%)`,
          }}
        />
      </div>
      <div
        className="bg-white"
        style={{
          padding: `${u(9)} ${u(12)} ${u(11)}`,
          borderTop: `${u(3)} solid ${hex}`,
        }}
      >
        <div
          className="font-sans font-extrabold leading-tight text-[#111]"
          style={{ fontSize: u(13) }}
        >
          {item.label}
        </div>
        <div
          className="font-mono font-semibold tracking-wide"
          style={{ fontSize: u(9.5), color: onLight, marginTop: u(3) }}
        >
          {item.sub}
        </div>
      </div>
    </div>
  );
}

/**
 * The Tech Orbit — Mobiz's signature composition.
 *
 * Cards are placed radially from their index (`angle = i / n * 360`) rather than
 * hand-positioned, so adding or removing a service re-balances the ring
 * automatically.
 *
 * Motion: a zero-size pivot at the centre rotates, and the card counter-rotates
 * at the same rate so it travels the ring while staying upright. Both are CSS
 * keyframes on the compositor. A negative `animation-delay` places each card at
 * its starting angle without needing a separate keyframe per card.
 */
export function OrbitScene({
  items,
  centreImage,
  centreAlt = "",
  duration = 36,
  direction = "cw",
  compact = false,
  className,
  priority = false,
}: OrbitSceneProps) {
  /*
   * `compact` used to drop items server-side, which forced the hero to render a
   * second <OrbitScene> for mobile — duplicating the DOM and preloading the
   * centre figure twice. Now every card is rendered once and the alternates are
   * hidden below `lg` with CSS, so the ring thins out on small screens without
   * a second scene.
   */
  const visible = items;
  const count = visible.length;
  // The card spins opposite the pivot at the same rate, which is what keeps its
  // text upright as it travels the ring.
  const pivotAnim = direction === "cw" ? "orbit-spin-cw" : "orbit-spin-ccw";
  const cardAnim = direction === "cw" ? "orbit-spin-ccw" : "orbit-spin-cw";

  return (
    <div
      className={cn("relative aspect-square w-full @container", className)}
      style={{ containerType: "inline-size" }}
    >
      {/* Ring guide */}
      <svg
        className="pointer-events-none absolute inset-0 size-full"
        viewBox={`0 0 ${DS} ${DS}`}
        aria-hidden
        role="presentation"
      >
        <defs>
          <linearGradient id="orbit-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c01822" stopOpacity="0.3" />
            <stop offset="48%" stopColor="#1a56db" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#c01822" stopOpacity="0.22" />
          </linearGradient>
          <filter id="orbit-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx={DS / 2}
          cy={DS / 2}
          r={RADIUS + 10}
          fill="none"
          stroke="rgba(255,255,255,0.028)"
          strokeWidth="20"
        />
        <circle
          cx={DS / 2}
          cy={DS / 2}
          r={RADIUS}
          fill="none"
          stroke="url(#orbit-ring)"
          strokeWidth="1.2"
          strokeDasharray="7 9"
          filter="url(#orbit-glow)"
        />
        <circle
          cx={DS / 2}
          cy={DS / 2}
          r={RADIUS - 10}
          fill="none"
          stroke="rgba(255,255,255,0.018)"
          strokeWidth="6"
        />
      </svg>

      {/* Ambient bloom under the centre figure */}
      {centreImage ? (
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 blur-2xl"
          style={{
            bottom: u(20),
            width: u(300),
            height: u(110),
            background: "radial-gradient(ellipse, rgba(192,24,34,0.45), transparent 70%)",
          }}
        />
      ) : null}

      {/*
       * Centre figure. `mix-blend-mode: screen` knocks the asset's black matte
       * out against the near-black page — this is the approved treatment.
       */}
      {centreImage ? (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center">
          <div
            className="float-c relative"
            style={{
              height: u(RADIUS * 2),
              // 3:4 to match the asset's intrinsic 900x1200 — a mismatched box
              // makes next/image letterbox and trips the aspect-ratio audit.
              width: u(RADIUS * 2 * 0.75),
              marginBottom: u(-RADIUS * 0.08),
              willChange: "transform",
            }}
          >
            <Image
              src={centreImage}
              alt={centreAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority={priority}
              fetchPriority={priority ? "high" : "auto"}
              className="object-contain object-bottom mix-blend-screen"
              style={{ filter: "brightness(1.12) contrast(1.06) saturate(1.05)" }}
            />
          </div>
        </div>
      ) : null}

      {/* Orbiting cards */}
      {visible.map((item, index) => {
        const angle = (index / count) * 360;
        return (
          // Base angle — where this card sits on the ring. Static.
          <div
            key={item.id}
            className={cn(
              "absolute left-1/2 top-1/2 z-30 size-0",
              compact && index % 2 === 1 && "hidden lg:block",
            )}
            style={{ rotate: `${angle}deg` }}
          >
            {/* Spin. Disabled under reduced motion, leaving the base angle. */}
            <div
              data-orbit-motion
              className="size-0"
              style={{
                animation: `${pivotAnim} ${duration}s linear infinite`,
                willChange: "rotate",
              }}
            >
              {/* Arm out to the orbit radius. */}
              <div
                className="absolute top-0"
                style={{ left: u(RADIUS), transform: "translate(-50%, -50%)" }}
              >
                {/* Counter-rotations keep the card upright at every angle. */}
                <div style={{ rotate: `${-angle}deg` }}>
                  <div
                    data-orbit-motion
                    style={{
                      animation: `${cardAnim} ${duration}s linear infinite`,
                      willChange: "rotate",
                      filter: `drop-shadow(0 ${u(14)} ${u(32)} ${ACCENTS[item.accent].hex}65)`,
                    }}
                  >
                    <OrbitCard item={item} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrbitScene;
