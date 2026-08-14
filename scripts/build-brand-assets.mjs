/**
 * Generates the production icon/logo family from the official master artwork.
 *
 * Source of truth (supplied, never modified):
 *   public/documents/mobiz-logo.png   2000x2000, opaque black background
 *   public/documents/og-image.png     1200x630
 *
 * Two derivative families are produced, and the difference matters:
 *
 *  - HEADER/FOOTER LOCKUP — the master trimmed to its ink bounds and keyed to
 *    transparency. The master carries ~14% black padding on every side; left in
 *    place it forces the artwork to render ~28% smaller than its box, which is
 *    what would have made the wordmark illegible in a small header slot.
 *    Trimming removes empty padding only — no crop into artwork, no rescaling of
 *    parts relative to each other, so the brand geometry is untouched.
 *
 *  - ICONS — the full square master, kept opaque. A favicon *wants* its own
 *    background, and keeping the square avoids cropping into the mark. The
 *    wordmark is integrated between the M's legs, so any "mark-only" crop would
 *    cut the legs mid-stroke and alter the artwork.
 *
 * Nothing here recolours, redraws, stretches or reproportions the logo. Every
 * resize preserves aspect ratio (`fit: "contain"`).
 *
 * Run: node scripts/build-brand-assets.mjs
 */

import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const MASTER = "public/documents/mobiz-logo.png";
const OG_SRC = "public/documents/og-image.png";

/** Luminance threshold separating artwork from the black backdrop. */
const INK = 28;

async function ensureDir(p) {
  await fs.mkdir(path.dirname(p), { recursive: true });
}

/** Ink bounding box, so we trim only empty backdrop. */
async function inkBounds(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;
  let minX = W, maxX = 0, minY = H, maxY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const o = (y * W + x) * C;
      const lum = data[o] * 0.2126 + data[o + 1] * 0.7152 + data[o + 2] * 0.0722;
      if (lum > INK) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

/**
 * Keys the black backdrop to transparency.
 *
 * Alpha is derived from luminance rather than an exact-black match, so
 * antialiased edges fade out smoothly instead of leaving a hard dark fringe.
 * Colour channels are left completely untouched.
 */
async function keyBlackToAlpha(buffer) {
  const { data, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const lum = data[i] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722;
    // Fully transparent at black, fully opaque by ~luminance 60, linear between.
    data[i + 3] = lum >= 60 ? 255 : Math.round((lum / 60) * 255);
  }
  return sharp(data, { raw: { width, height, channels } }).png().toBuffer();
}

const written = [];
async function write(file, buf) {
  await ensureDir(file);
  await fs.writeFile(file, buf);
  const meta = await sharp(buf).metadata();
  written.push(`${file}  ${meta.width}x${meta.height}  ${(buf.length / 1024).toFixed(1)}KB`);
}

/** Minimal ICO container embedding PNG payloads (Vista+ format). */
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);

  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + dir.length;
  entries.forEach((e, i) => {
    const b = i * 16;
    dir[b] = e.size >= 256 ? 0 : e.size;
    dir[b + 1] = e.size >= 256 ? 0 : e.size;
    dir[b + 2] = 0; // palette
    dir[b + 3] = 0; // reserved
    dir.writeUInt16LE(1, b + 4); // colour planes
    dir.writeUInt16LE(32, b + 6); // bits per pixel
    dir.writeUInt32LE(e.buf.length, b + 8);
    dir.writeUInt32LE(offset, b + 12);
    offset += e.buf.length;
  });

  return Buffer.concat([header, dir, ...entries.map((e) => e.buf)]);
}

const bounds = await inkBounds(MASTER);
console.log("master ink bounds:", JSON.stringify(bounds));

/* ── Header / footer lockup: trimmed + transparent ────────────────────────── */
const trimmed = await sharp(MASTER).extract(bounds).png().toBuffer();
const lockup = await keyBlackToAlpha(trimmed);

// 3x the largest rendered size (footer ~56px tall) keeps it crisp on any DPR.
await write(
  "public/images/logos/mobiz-logo.png",
  await sharp(lockup).resize({ height: 240, fit: "contain" }).png({ compressionLevel: 9 }).toBuffer(),
);

/* ── Icons: full square master, opaque ────────────────────────────────────── */
const square = (size) =>
  sharp(MASTER).resize(size, size, { fit: "contain" }).png({ compressionLevel: 9 }).toBuffer();

await write("public/icon.png", await square(512));
await write("public/apple-icon.png", await square(180));
await write("public/icons/icon-192.png", await square(192));
await write("public/icons/icon-512.png", await square(512));

/*
 * Maskable icon: Android crops to a circle/squircle and only guarantees the
 * middle 80%. The artwork is inset to that safe zone on its own black ground so
 * nothing important is clipped.
 */
const MASK = 512;
const inner = Math.round(MASK * 0.8);
await write(
  "public/icons/icon-maskable-512.png",
  await sharp({
    create: { width: MASK, height: MASK, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 1 } },
  })
    .composite([
      {
        input: await sharp(MASTER).resize(inner, inner, { fit: "contain" }).toBuffer(),
        gravity: "center",
      },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer(),
);

/* ── favicon.ico: multi-resolution 16 / 32 / 48 ───────────────────────────── */
const icoSizes = [16, 32, 48];
const icoEntries = [];
for (const size of icoSizes) {
  icoEntries.push({ size, buf: await square(size) });
}
const ico = buildIco(icoEntries);
await ensureDir("public/favicon.ico");
await fs.writeFile("public/favicon.ico", ico);
written.push(`public/favicon.ico  ${icoSizes.join("/")}  ${(ico.length / 1024).toFixed(1)}KB`);

/* ── Social share image ───────────────────────────────────────────────────── */
const ogMeta = await sharp(OG_SRC).metadata();
let og = sharp(OG_SRC);
if (ogMeta.width !== 1200 || ogMeta.height !== 630) {
  og = og.resize(1200, 630, { fit: "contain", background: { r: 5, g: 5, b: 5, alpha: 1 } });
}
await write(
  "public/images/social/og-image.png",
  await og.png({ compressionLevel: 9, quality: 92 }).toBuffer(),
);

console.log("\nGenerated:");
written.forEach((w) => console.log("  " + w));
