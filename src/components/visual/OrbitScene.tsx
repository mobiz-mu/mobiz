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
  /** Hides alternate cards below `lg` so the ring thins on small screens. */
  compact?: boolean;
  className?: string;
  priority?: boolean;
};

/*
 * ── Design space ──────────────────────────────────────────────────────────
 * The scene is authored against a fixed 820×820 canvas in plain pixels, then
 * scaled to its container by ONE transform (see `.orbit-canvas`).
 *
 * This replaced a version expressing every dimension in `cqw`. That read
 * elegantly but meant ~15 container-query length resolutions per card × 8
 * cards — roughly 120 per scene — and container-query lengths are far more
 * expensive to resolve than static pixels. Style+layout on the mobile homepage
 * measured 2,400ms, more than double script evaluation.
 *
 * Now there is exactly one `cqw` read (`--orbit-scale`) and everything inside is
 * static px resolved once. Still zero JavaScript, still fully responsive,
 * visually identical.
 */
const DS = 820;
const RADIUS = 310;
const CARD_W = 158;

function OrbitCard({ item }: { item: OrbitItem }) {
  const { hex, onLight } = ACCENTS[item.accent];

  return (
    <div
      className="overflow-hidden rounded-[15px] bg-white"
      style={{
        width: CARD_W,
        boxShadow: `0 16px 56px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.18), 0 6px 22px ${hex}55`,
      }}
    >
      <div className="relative h-[114px] overflow-hidden bg-ink-500">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="160px"
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
        className="bg-white px-3 pb-[11px] pt-[9px]"
        style={{ borderTop: `3px solid ${hex}` }}
      >
        <div className="font-sans text-[13px] font-extrabold leading-tight text-[#111]">
          {item.label}
        </div>
        <div
          className="mt-[3px] font-mono text-[9.5px] font-semibold tracking-wide"
          style={{ color: onLight }}
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
 * hand-positioned, so adding or removing a service re-balances the ring.
 *
 * Motion: a zero-size pivot rotates and the card counter-rotates at the same
 * rate, so it travels the ring while staying upright. Base angle and spin are
 * separate transforms, so disabling the spin under reduced motion leaves a
 * correctly distributed, upright ring.
 *
 * Server component — ships no JavaScript.
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
  const count = items.length;
  // The card spins opposite the pivot at the same rate, keeping its text upright.
  const pivotAnim = direction === "cw" ? "orbit-spin-cw" : "orbit-spin-ccw";
  const cardAnim = direction === "cw" ? "orbit-spin-ccw" : "orbit-spin-cw";

  return (
    <div className={cn("orbit-viewport relative aspect-square w-full", className)}>
      {/* Fixed-px canvas, scaled once to fit the viewport box. */}
      <div className="orbit-canvas" style={{ width: DS, height: DS }}>
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

        {/*
         * Ambient bloom. A static radial-gradient rather than a blurred layer —
         * `filter: blur()` over this area was pure paint cost for a shape a
         * gradient renders identically.
         */}
        {centreImage ? (
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-[20px] left-1/2 z-10 h-[110px] w-[300px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(192,24,34,0.38) 0%, rgba(192,24,34,0.14) 45%, transparent 72%)",
            }}
          />
        ) : null}

        {/*
         * Centre figure. `mix-blend-mode: screen` knocks the asset's black matte
         * out against the near-black page — the approved treatment.
         */}
        {centreImage ? (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center">
            <div
              className="float-c relative"
              style={{
                height: RADIUS * 2,
                // 3:4 matches the asset's intrinsic ratio, so next/image never
                // letterboxes and the aspect-ratio audit stays clean.
                width: RADIUS * 2 * 0.75,
                marginBottom: -RADIUS * 0.08,
              }}
            >
              <Image
                src={centreImage}
                alt={centreAlt}
                fill
                sizes="620px"
                priority={priority}
                className="object-contain object-bottom mix-blend-screen"
                style={{ filter: "brightness(1.12) contrast(1.06) saturate(1.05)" }}
              />
            </div>
          </div>
        ) : null}

        {/* Orbiting cards */}
        {items.map((item, index) => {
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
                style={{ animation: `${pivotAnim} ${duration}s linear infinite` }}
              >
                {/* Arm out to the orbit radius. */}
                <div
                  className="absolute top-0"
                  style={{ left: RADIUS, transform: "translate(-50%, -50%)" }}
                >
                  {/* Counter-rotations keep the card upright at every angle. */}
                  <div style={{ rotate: `${-angle}deg` }}>
                    <div
                      data-orbit-motion
                      style={{ animation: `${cardAnim} ${duration}s linear infinite` }}
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
    </div>
  );
}

export default OrbitScene;
