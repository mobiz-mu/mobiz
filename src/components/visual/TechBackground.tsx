import { DataHighway } from "./DataHighway";
import { cn } from "@/lib/utils";

type Variant = "full" | "service" | "calm" | "none";

type TechBackgroundProps = {
  /**
   * `full`    — hero compositions: grid, glow field, highway, particles
   * `service` — commercial sections: grid + one glow + calm highway
   * `calm`    — reading pages (blog, legal, FAQ): fine grid only
   * `none`    — renders nothing
   *
   * The highway is desktop-only in every variant. On phones it would sit under
   * body text at a width where it hurts readability and costs paint for no
   * compositional gain.
   */
  variant?: Variant;
  className?: string;
};

/**
 * The ambient layer behind a section. Server component — ships no JavaScript.
 *
 * Everything here is a static gradient, a repeating CSS grid, or SVG. The only
 * moving parts are the highway packets and a handful of drifting particles,
 * both of which animate transform/opacity only.
 */
export function TechBackground({ variant = "service", className }: TechBackgroundProps) {
  if (variant === "none") return null;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* Technical grid */}
      <div
        className={cn(
          "absolute inset-0",
          variant === "calm" ? "tech-grid-fine" : "tech-grid",
        )}
      />

      {/* Atmospheric glow field */}
      {variant !== "calm" ? (
        <>
          <div
            className="absolute right-0 top-0 h-[700px] w-[900px] translate-x-[15%] -translate-y-[10%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 70% 30%, rgba(192,24,34,0.18), transparent 70%)",
            }}
          />
          {variant === "full" ? (
            <div
              /* Anchored from the TOP: a bottom-anchored layer moves whenever the
                 page grows, and a 500px element shifting scores real CLS. */
            className="absolute left-0 top-[420px] size-[500px] -translate-x-[15%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(26,86,219,0.06), transparent 70%)",
              }}
            />
          ) : null}
        </>
      ) : null}

      {/* Data Highway — desktop only */}
      {variant !== "calm" ? (
        <div className="absolute inset-y-0 right-0 hidden lg:block">
          <DataHighway
            density={variant === "full" ? "full" : "calm"}
            opacity={variant === "full" ? 0.6 : 0.3}
          />
        </div>
      ) : null}

      {/* Drifting particles — a handful, desktop only, transform-only animation */}
      {variant === "full" ? (
        <div className="hidden lg:block">
          {[
            { top: "18%", left: "5%", size: 2, cls: "float-a", color: "rgba(192,24,34,0.7)" },
            { top: "72%", left: "7%", size: 3, cls: "float-b", color: "rgba(26,86,219,0.5)" },
            { top: "55%", left: "22%", size: 2, cls: "float-c", color: "rgba(192,24,34,0.5)" },
            { top: "30%", left: "18%", size: 1.5, cls: "float-b", color: "rgba(255,255,255,0.3)" },
          ].map((p) => (
            <span
              key={`${p.top}-${p.left}`}
              className={cn("absolute rounded-full", p.cls)}
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: p.color,
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default TechBackground;
