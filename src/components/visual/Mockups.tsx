import type { ReactNode } from "react";
import { ACCENTS, type AccentId } from "@/lib/accents";
import { cn } from "@/lib/utils";

/*
 * Device and interface frames.
 *
 * These are the building blocks for every service page's 3D world: a browser
 * for website work, a phone for mobile/WhatsApp flows, a dashboard panel for
 * accounting, inventory and marketing data.
 *
 * All CSS — perspective, rotate3d and layered shadows. No WebGL, no canvas, no
 * JavaScript. Rotation is kept shallow (under ~12°) so interface text inside a
 * frame stays readable rather than becoming decoration.
 */

type FloatingPanelProps = {
  children: ReactNode;
  /** Shallow 3D tilt. `none` for panels containing real reading content. */
  tilt?: "none" | "left" | "right";
  /** Ambient drift. Omit inside dense compositions. */
  float?: "a" | "b" | "c" | "none";
  depth?: number;
  className?: string;
};

const TILT = {
  none: "",
  left: "rotate3d(1, 1, 0, 6deg) rotateZ(-1deg)",
  right: "rotate3d(1, -1, 0, 6deg) rotateZ(1deg)",
} as const;

export function FloatingPanel({
  children,
  tilt = "none",
  float = "none",
  depth = 0,
  className,
}: FloatingPanelProps) {
  return (
    <div
      className={cn(float !== "none" && `float-${float}`, className)}
      style={{
        transform: `${TILT[tilt]} translateZ(${depth}px)`,
        willChange: float !== "none" ? "transform" : undefined,
      }}
    >
      {children}
    </div>
  );
}

/* ── Browser ──────────────────────────────────────────────────────────────── */

type BrowserMockupProps = {
  children: ReactNode;
  /** Shown in the address bar. Use a real Mobiz URL, never a fake domain. */
  url?: string;
  accent?: AccentId;
  className?: string;
};

export function BrowserMockup({
  children,
  url = "mobiz.mu",
  accent = "blue",
  className,
}: BrowserMockupProps) {
  const { hex } = ACCENTS[accent];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-line-strong bg-surface-1 shadow-panel",
        className,
      )}
    >
      {/* Chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-ink-900 px-3 py-1.5">
          <span
            aria-hidden
            className="size-1.5 shrink-0 rounded-full"
            style={{ background: hex }}
          />
          <span className="truncate font-mono text-[10px] text-text-muted">{url}</span>
        </div>
      </div>
      <div className="bg-ink-900">{children}</div>
    </div>
  );
}

/* ── Phone ────────────────────────────────────────────────────────────────── */

type PhoneMockupProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border-[6px] border-ink-400 bg-ink-900 shadow-panel",
        className,
      )}
      style={{ aspectRatio: "9 / 19" }}
    >
      {/* Notch */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-ink-400"
      />
      <div className="size-full overflow-hidden">{children}</div>
    </div>
  );
}

/* ── Dashboard panel ──────────────────────────────────────────────────────── */

type DashboardPanelProps = {
  title: string;
  /** Small monospace status shown top-right, e.g. "LIVE", "VAT · Q3". */
  status?: string;
  accent?: AccentId;
  children: ReactNode;
  className?: string;
};

export function DashboardPanel({
  title,
  status,
  accent = "red",
  children,
  className,
}: DashboardPanelProps) {
  const { hex } = ACCENTS[accent];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-line bg-surface-0 shadow-panel",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-line-faint px-4 py-3">
        <span className="truncate text-xs font-semibold text-text-primary">{title}</span>
        {status ? (
          <span className="inline-flex shrink-0 items-center gap-1.5">
            <span
              aria-hidden
              className="status-pulse size-1.5 rounded-full"
              style={{ background: hex }}
            />
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
              {status}
            </span>
          </span>
        ) : null}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

/* ── Data bars ────────────────────────────────────────────────────────────── */

type MiniBarsProps = {
  /** Percentages 0–100. Purely illustrative of a UI, never presented as data. */
  values: number[];
  accent?: AccentId;
  className?: string;
};

/**
 * A small bar chart used inside dashboard mockups.
 *
 * `aria-hidden` because it illustrates what an interface looks like — it does
 * not report real figures, and must never be read as if it does.
 */
export function MiniBars({ values, accent = "red", className }: MiniBarsProps) {
  const { hex } = ACCENTS[accent];

  return (
    <div
      aria-hidden
      className={cn("flex h-16 items-end gap-1.5", className)}
    >
      {values.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${Math.max(6, Math.min(100, v))}%`,
            background: i === values.length - 1 ? hex : `${hex}45`,
          }}
        />
      ))}
    </div>
  );
}
