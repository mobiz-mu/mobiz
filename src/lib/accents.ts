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
  /** Solid hex for borders, text and SVG strokes. */
  hex: string;
  /** "r, g, b" — feeds `--glow-hue` for gradient borders and blooms. */
  rgb: string;
  /** Human label used in aria text where colour alone would carry meaning. */
  label: string;
};

export const ACCENTS: Record<AccentId, Accent> = {
  red: { id: "red", hex: "#c01822", rgb: "192, 24, 34", label: "Mobiz red" },
  blue: { id: "blue", hex: "#1a56db", rgb: "26, 86, 219", label: "Blue" },
  sky: { id: "sky", hex: "#0ea5e9", rgb: "14, 165, 233", label: "Sky" },
  yellow: { id: "yellow", hex: "#ca8a04", rgb: "202, 138, 4", label: "Amber" },
  green: { id: "green", hex: "#16a34a", rgb: "22, 163, 74", label: "Green" },
  emerald: { id: "emerald", hex: "#059669", rgb: "5, 150, 105", label: "Emerald" },
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
