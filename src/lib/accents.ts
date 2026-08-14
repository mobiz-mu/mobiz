/**
 * Accent system.
 *
 * Mobiz red carries the brand. Blue / yellow / green exist to make service
 * categories, orbit nodes, status indicators and card edges legible at a glance —
 * they are light sources, not page themes.
 *
 * The mapping is fixed and meaningful, so the same category is always the same
 * colour across the homepage, service pages, SEO pages and the AI assistant:
 *
 *   BLUE    Website / SEO / Google surface
 *   YELLOW  Marketing / growth / attention
 *   GREEN   Accounting / inventory / WhatsApp success
 *   RED     Mobiz / AI / business solutions / priority actions
 *
 * `rgb` is the space-separated triple used by `--glow-hue`, so a component can
 * tint `.glow-card` / `.glow-blob` without inventing new CSS.
 */

export type AccentId = "red" | "blue" | "sky" | "yellow" | "green" | "emerald";

export type Accent = {
  id: AccentId;
  /** Solid hex for borders, text and SVG strokes on DARK surfaces. */
  hex: string;
  /**
   * Darker variant for text on WHITE/light surfaces (orbit cards, mockups).
   * The `hex` values are tuned for the near-black page and drop to ~3:1 on
   * white, so anything sitting on a light card must use this instead.
   */
  onLight: string;
  /**
   * Lightened variant for small TEXT on the dark page (labels, eyebrows,
   * mockup captions). `hex` is tuned as a graphic colour and lands around
   * 3:1 against #050505, which fails for text — these all clear 4.5:1.
   * Keep using `hex` for borders, dots and SVG, which are exempt.
   */
  onDark: string;
  /** "r, g, b" — feeds `--glow-hue` for gradient borders and blooms. */
  rgb: string;
  /** Human label used in aria text where colour alone would carry meaning. */
  label: string;
};

export const ACCENTS: Record<AccentId, Accent> = {
  red: { id: "red", hex: "#c01822", onLight: "#a3141d", onDark: "#ff3344", rgb: "192, 24, 34", label: "Mobiz red" },
  blue: { id: "blue", hex: "#1a56db", onLight: "#1a4fc4", onDark: "#6b9bff", rgb: "26, 86, 219", label: "Blue" },
  sky: { id: "sky", hex: "#0ea5e9", onLight: "#0369a1", onDark: "#38bdf8", rgb: "14, 165, 233", label: "Sky" },
  yellow: { id: "yellow", hex: "#ca8a04", onLight: "#8a5f03", onDark: "#eab308", rgb: "202, 138, 4", label: "Amber" },
  green: { id: "green", hex: "#16a34a", onLight: "#12803b", onDark: "#4ade80", rgb: "22, 163, 74", label: "Green" },
  emerald: { id: "emerald", hex: "#059669", onLight: "#04704f", onDark: "#34d399", rgb: "5, 150, 105", label: "Emerald" },
};

export function accent(id: AccentId): Accent {
  return ACCENTS[id];
}

/**
 * Inline style bundle for a glow-tinted surface.
 * Use on `.glow-card` / `.glow-blob` so the tint flows through CSS custom
 * properties rather than a per-component gradient string.
 */
export function accentStyle(id: AccentId): React.CSSProperties {
  return { ["--glow-hue" as string]: ACCENTS[id].rgb };
}
