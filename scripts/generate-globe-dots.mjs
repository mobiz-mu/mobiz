/**
 * Generates the hero globe's dot field.
 *
 *   node scripts/generate-globe-dots.mjs          # write the data file
 *   node scripts/generate-globe-dots.mjs --preview # print an ASCII world map
 *
 * Why a generator instead of hand-written coordinates: the dots have to sit on
 * an EVEN spherical grid (rings spaced by arc length, with each ring's dot count
 * scaled by cos(latitude)) or the field bunches up at the poles and the globe
 * stops reading as a sphere. That spacing rule is arithmetic, not art, so it
 * belongs in a script.
 *
 * The coastlines are deliberately coarse silhouettes. At the size this paints
 * (~380px sphere, ~4.8 degree dot pitch) the dot grid is the limiting resolution
 * — a detailed coastline would be quantised away to the same dots while costing
 * markup. What matters is that each landmass is recognisable by shape and
 * position: North/South America, Greenland, Europe, Africa, Asia with India,
 * South-East Asia, Australia, New Zealand.
 */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src", "components", "home", "globe-dots.ts");

/** Dot pitch in degrees of great-circle arc. */
const PITCH = 4.8;

/*
 * Land silhouettes as [longitude, latitude] rings. East and north positive.
 * Antarctica is omitted on purpose: it would ring the bottom limb with dots and
 * read as a rendering artefact rather than as a continent.
 */
const LAND = [
  // North America: Alaska round to the Canadian arctic, down the east coast,
  // through Mexico and back up the Pacific side.
  {
    name: "North America",
    ring: [
      [-166, 66], [-161, 71], [-140, 70], [-125, 70], [-110, 68], [-95, 72],
      [-82, 70], [-78, 62], [-64, 60], [-56, 51], [-66, 45], [-70, 41],
      [-76, 35], [-81, 25], [-84, 30], [-90, 29], [-97, 26], [-98, 16],
      [-92, 15], [-105, 19], [-114, 28], [-124, 34], [-124, 48], [-133, 55],
      [-146, 60], [-158, 57],
    ],
  },
  { name: "Greenland", ring: [[-45, 83], [-20, 76], [-22, 70], [-42, 60], [-52, 64], [-58, 70], [-55, 78]] },
  {
    name: "South America",
    ring: [
      [-81, 8], [-75, 11], [-60, 11], [-51, 4], [-35, -6], [-38, -15],
      [-48, -25], [-58, -35], [-62, -40], [-66, -46], [-68, -53], [-74, -52],
      [-72, -44], [-71, -30], [-70, -18], [-76, -14], [-81, -5],
    ],
  },
  {
    name: "Europe",
    ring: [
      [-9, 37], [-8, 44], [0, 49], [5, 54], [10, 58], [6, 62], [16, 69],
      [30, 70], [32, 58], [30, 48], [26, 44], [18, 41], [12, 38], [0, 40],
    ],
  },
  { name: "British Isles", ring: [[-6, 50], [-1, 51], [0, 53], [-2, 58], [-6, 58], [-5, 54]] },
  {
    name: "Africa",
    ring: [
      [-17, 15], [-16, 22], [-10, 30], [-2, 35], [10, 37], [22, 32], [32, 31],
      [35, 25], [38, 18], [43, 12], [51, 12], [43, 2], [40, -8], [40, -16],
      [35, -23], [32, -28], [26, -34], [18, -34], [15, -26], [12, -16],
      [9, -2], [0, 5], [-8, 5], [-13, 9],
    ],
  },
  { name: "Madagascar", ring: [[43, -12], [50, -15], [48, -25], [44, -22]] },
  {
    name: "Asia",
    ring: [
      [30, 70], [60, 72], [75, 74], [100, 76], [130, 72], [160, 70], [170, 66],
      [162, 60], [155, 52], [140, 52], [130, 42], [126, 38], [122, 30],
      [110, 20], [105, 10], [100, 13], [97, 16], [92, 21], [88, 22], [80, 15],
      [77, 8], [73, 20], [68, 24], [60, 25], [57, 25], [50, 29], [44, 38],
      [40, 42], [36, 42], [30, 45], [28, 50], [30, 60],
    ],
  },
  { name: "Arabia", ring: [[35, 29], [43, 25], [52, 25], [57, 26], [48, 17], [43, 12], [38, 18], [35, 25]] },
  { name: "Japan", ring: [[130, 32], [140, 36], [145, 44], [141, 45], [135, 34]] },
  { name: "Indonesia", ring: [[95, 5], [120, 2], [135, -2], [140, -6], [120, -9], [105, -7]] },
  { name: "Philippines", ring: [[120, 6], [126, 10], [124, 18], [120, 14]] },
  { name: "Borneo", ring: [[109, 2], [118, 5], [119, -3], [110, -3]] },
  {
    name: "Australia",
    ring: [
      [114, -22], [122, -18], [130, -12], [137, -12], [142, -11], [146, -19],
      [151, -24], [153, -28], [150, -37], [141, -38], [135, -35], [129, -32],
      [118, -35], [114, -26],
    ],
  },
  { name: "New Zealand", ring: [[173, -35], [177, -38], [174, -42], [168, -46], [166, -45], [170, -40]] },
];

/** Even-odd ray cast in lon/lat space. Adequate: no ring crosses the antimeridian. */
function inRing(lon, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

const isLand = (lon, lat) => LAND.some((l) => inRing(lon, lat, l.ring));

/**
 * Even spherical sampling: rings every PITCH degrees of latitude, and within a
 * ring the longitude step is PITCH / cos(lat) so the arc between neighbours is
 * constant everywhere on the sphere.
 */
function sample() {
  const dots = [];
  for (let lat = -88; lat <= 88; lat += PITCH) {
    const count = Math.max(1, Math.round((360 * Math.cos((lat * Math.PI) / 180)) / PITCH));
    const step = 360 / count;
    for (let k = 0; k < count; k += 1) {
      const lon = -180 + k * step;
      if (isLand(lon, lat)) dots.push([Math.round(lon * 10) / 10, Math.round(lat * 10) / 10]);
    }
  }
  return dots;
}

const dots = sample();

if (process.argv.includes("--preview")) {
  // 2 degrees per column, 4 per row, so the aspect is roughly square in a terminal.
  const rows = [];
  for (let lat = 84; lat >= -60; lat -= 4) {
    let row = "";
    for (let lon = -180; lon < 180; lon += 2) row += isLand(lon, lat) ? "#" : "·";
    rows.push(`${String(Math.round(lat)).padStart(3)} ${row}`);
  }
  console.log(rows.join("\n"));
  console.log(`\n    ${"-180".padEnd(45)}${"0".padEnd(45)}180`);
  console.log(`\ndots: ${dots.length} at ${PITCH}deg pitch`);
  process.exit(0);
}

/*
 * Emitted as one prebuilt HTML string rather than a coordinate array the
 * component maps over.
 *
 * Measured reason: React Server Components serialise the rendered tree into the
 * document's flight payload, so 476 mapped <span>s appear TWICE — once as HTML
 * and again as 476 element tuples in `self.__next_f`, about 55KB of extra
 * payload. Lighthouse puts evaluation of that inline payload at ~7s of mobile
 * main-thread work, the single largest cost on the page, so this is the one part
 * of the globe that sits on a real bottleneck. As a single string the payload
 * carries the markup once.
 *
 * Safe to inject: every byte below is produced here from numbers this script
 * computed. Nothing user-supplied or runtime-derived reaches it.
 */
const html = dots
  .map(([lon, lat]) => `<span class="hero-globe__dot" style="--o:${lon}deg;--a:${lat}deg"></span>`)
  .join("");

writeFileSync(
  OUT,
  `/**
 * GENERATED by scripts/generate-globe-dots.mjs — do not edit by hand.
 *
 * The hero globe's land dots: ${dots.length} of them, sampled on an even
 * spherical grid at a ${PITCH}deg arc pitch. Each carries its longitude (--o)
 * and latitude (--a); hero-stage.css turns those into a position on the sphere.
 */
export const GLOBE_DOT_COUNT = ${dots.length};

export const GLOBE_DOTS_HTML =
  ${JSON.stringify(html)};
`,
  "utf8",
);

console.log(`wrote ${OUT} — ${dots.length} dots at ${PITCH}deg pitch, ${(html.length / 1024).toFixed(1)}KB markup`);
