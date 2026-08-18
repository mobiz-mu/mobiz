/**
 * Precomputes the hero globe's geography from real Natural Earth 110m data.
 *
 *   node scripts/generate-globe-geometry.mjs
 *   node scripts/generate-globe-geometry.mjs --preview
 *
 * Why this exists as a build-time step:
 *
 * The reference implementation fetches Natural Earth GeoJSON from GitHub at
 * runtime and runs thousands of point-in-polygon tests in the browser on every
 * visit. Neither belongs in an above-the-fold hero — the first makes the globe
 * depend on GitHub being reachable, the second burns main-thread time on work
 * whose answer never changes. Both happen here instead, once.
 *
 * The source topology is vendored at scripts/data/land-110m.topo.json, so this
 * script and the build are fully offline.
 *
 * TopoJSON is decoded inline rather than with topojson-client: the format is
 * quantised delta-encoded arcs plus index references, which is about forty lines
 * to walk, and this keeps the dependency count at zero.
 *
 * Output is longitude/latitude pairs as integers (degrees x 10). The runtime
 * converts them to unit vectors once at module load, after which a frame is a
 * rotation and a projection per point — no trigonometry per dot per frame.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "scripts", "data", "land-110m.topo.json");
const OUT = join(ROOT, "src", "components", "home", "globe-geometry.ts");

/** Degrees of arc between neighbouring dots. Drives density and file size. */
const PITCH = 2.05;
/** Antarctica is dropped: it rings the south limb and reads as an artefact. */
const MIN_LAT = -58;
const MAX_LAT = 84;

// ── TopoJSON ───────────────────────────────────────────────────────────────

const topo = JSON.parse(readFileSync(SRC, "utf8"));
const { scale, translate } = topo.transform;

/** Delta-decode one arc and undo the quantisation into [lng, lat]. */
function decodeArc(arc) {
  let x = 0;
  let y = 0;
  return arc.map(([dx, dy]) => {
    x += dx;
    y += dy;
    return [x * scale[0] + translate[0], y * scale[1] + translate[1]];
  });
}

const arcs = topo.arcs.map(decodeArc);

/** Arc indices are 1's-complement when the arc is traversed backwards. */
function ringOf(indices) {
  const out = [];
  for (const idx of indices) {
    const arc = idx < 0 ? arcs[~idx].slice().reverse() : arcs[idx];
    // Adjacent arcs share an endpoint; drop the duplicate.
    out.push(...(out.length ? arc.slice(1) : arc));
  }
  return out;
}

/** Every land ring as a flat list of [lng, lat] rings. */
const rings = [];
for (const geom of topo.objects.land.geometries) {
  const polys = geom.type === "Polygon" ? [geom.arcs] : geom.arcs;
  for (const poly of polys) {
    // Outer ring only — 110m holes are smaller than the dot pitch.
    rings.push(ringOf(poly[0]));
  }
}

// ── sampling ───────────────────────────────────────────────────────────────

/** Even-odd ray cast in lng/lat space. */
function inRing(lng, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

/* Bounding boxes make the point-in-polygon sweep tractable at this density. */
const boxes = rings.map((r) => {
  let x0 = 180;
  let y0 = 90;
  let x1 = -180;
  let y1 = -90;
  for (const [x, y] of r) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }
  return [x0, y0, x1, y1];
});

function isLand(lng, lat) {
  for (let i = 0; i < rings.length; i += 1) {
    const b = boxes[i];
    if (lng < b[0] || lng > b[2] || lat < b[1] || lat > b[3]) continue;
    if (inRing(lng, lat, rings[i])) return true;
  }
  return false;
}

/**
 * Even spherical sampling: rings every PITCH degrees of latitude, and within a
 * ring a longitude step of PITCH / cos(lat), so the arc between neighbours is
 * constant everywhere instead of bunching toward the poles.
 */
function sampleDots() {
  const dots = [];
  for (let lat = MIN_LAT; lat <= MAX_LAT; lat += PITCH) {
    const count = Math.max(1, Math.round((360 * Math.cos((lat * Math.PI) / 180)) / PITCH));
    const step = 360 / count;
    for (let k = 0; k < count; k += 1) {
      const lng = -180 + k * step;
      if (isLand(lng, lat)) {
        dots.push(Math.round(lng * 10), Math.round(lat * 10));
      }
    }
  }
  return dots;
}

/** Coastlines, decimated to the resolution the globe actually paints. */
function sampleOutlines() {
  const out = [];
  for (const ring of rings) {
    if (ring.length < 8) continue;
    const stride = ring.length > 220 ? 3 : ring.length > 90 ? 2 : 1;
    const line = [];
    for (let i = 0; i < ring.length; i += stride) {
      const [lng, lat] = ring[i];
      if (lat < MIN_LAT - 4) continue;
      line.push(Math.round(lng * 10), Math.round(lat * 10));
    }
    if (line.length >= 8) out.push(line);
  }
  return out;
}

const dots = sampleDots();
const outlines = sampleOutlines();

if (process.argv.includes("--preview")) {
  const rowsOut = [];
  for (let lat = 78; lat >= -56; lat -= 4) {
    let row = "";
    for (let lng = -180; lng < 180; lng += 2) row += isLand(lng, lat) ? "#" : "·";
    rowsOut.push(`${String(Math.round(lat)).padStart(3)} ${row}`);
  }
  console.log(rowsOut.join("\n"));
  console.log(`\ndots: ${dots.length / 2}   outlines: ${outlines.length} paths`);
  process.exit(0);
}

const body = `/**
 * GENERATED by scripts/generate-globe-geometry.mjs — do not edit by hand.
 *
 * Real Natural Earth 110m geography, precomputed. Values are longitude and
 * latitude in tenths of a degree, flat-packed so the payload stays compact and
 * compresses well.
 *
 * LAND_DOTS: ${dots.length / 2} points on an even ${PITCH}deg spherical grid.
 * COASTLINES: ${outlines.length} decimated coastline paths.
 */
export const GLOBE_PITCH_DEG = ${PITCH};

export const LAND_DOTS: readonly number[] = [${dots.join(",")}];

export const COASTLINES: readonly (readonly number[])[] = [
${outlines.map((l) => `  [${l.join(",")}],`).join("\n")}
];
`;

writeFileSync(OUT, body, "utf8");

console.log(
  `wrote ${OUT}\n  dots: ${dots.length / 2} @ ${PITCH}deg` +
    `\n  coastline paths: ${outlines.length}` +
    `\n  file: ${(body.length / 1024).toFixed(1)} KB`,
);
