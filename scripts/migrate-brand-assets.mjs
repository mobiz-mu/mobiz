/*
 * Regenerates every Mobiz brand derivative from the three approved sources in
 * public/images/brand/.
 *
 * The approved artwork is white-on-solid-black with no alpha channel, so it is
 * keyed to transparency the same way scripts/build-brand-assets.mjs handled the
 * previous master — alpha derived from luminance, colour channels untouched, so
 * antialiased edges fade out instead of leaving a dark fringe on the site's
 * near-black surfaces.
 *
 * Icons are written with a quantised palette. The logo is a two-tone mark, so
 * palette output is visually identical and it is what fixes the 64KB icon.png
 * that was the largest single transfer on the homepage.
 *
 * Sources are never modified. Run: node scripts/migrate-brand-assets.mjs
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BRAND = path.join(ROOT, "public/images/brand");
const SQUARE = path.join(BRAND, "mobiz-logo-512.png");
const HORIZONTAL = path.join(BRAND, "mobiznew-logo.png");
const FAVICON_SRC = path.join(BRAND, "favicon.ico");

/** Tight bounding box of non-black pixels, so the lockup has no dead margin. */
async function inkBounds(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let minX = width, minY = height, maxX = -1, maxY = -1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const lum = data[i] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722;
      if (lum > 24) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

/** Keys the black backdrop to transparency without touching colour channels. */
async function keyBlackToAlpha(buffer) {
  const { data, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const lum = data[i] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722;
    data[i + 3] = lum >= 60 ? 255 : Math.round((lum / 60) * 255);
  }
  return sharp(data, { raw: { width, height, channels } }).png().toBuffer();
}

const written = [];
async function write(rel, buf) {
  const file = path.join(ROOT, rel);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, buf);
  const m = await sharp(buf).metadata();
  written.push({ rel, dims: `${m.width}x${m.height}`, kb: (buf.length / 1024).toFixed(1) });
}

/* ── horizontal lockup: header + footer ──────────────────────────────────── */

const hBounds = await inkBounds(HORIZONTAL);
console.log("horizontal ink bounds:", JSON.stringify(hBounds));
const hTrimmed = await sharp(HORIZONTAL).extract(hBounds).png().toBuffer();
const lockup = await keyBlackToAlpha(hTrimmed);

/*
 * Rendered at 40px tall in the header and 48px in the footer, so even at DPR 3
 * the largest raster actually needed is ~144px. 200 keeps a comfortable margin
 * for next/image to downscale from without shipping the full 1200px master.
 */
await write(
  "public/images/logos/mobiz-lockup.png",
  await sharp(lockup)
    .resize({ height: 200, fit: "contain", withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer(),
);

/* ── square mark: icon derivatives ───────────────────────────────────────── */

/*
 * mobiz-logo-512.png is NOT a bare mark — it is already a finished app-icon
 * plate: the white wordmark centred on a black rounded square. Its ink bounds
 * are 496x204, i.e. the artwork is the wordmark band, not the full square.
 *
 * So it must be used as supplied. Trimming to ink bounds and keying the black
 * out would throw away the plate and letterbox a wide wordmark inside a
 * transparent square, which is exactly what an app icon should not look like.
 * Only the horizontal lockup above needs the transparency treatment, because
 * that one sits directly on the page background.
 */
const squareIcon = async (size) =>
  sharp(SQUARE)
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

await write("public/icon.png", await squareIcon(512));
await write("public/apple-icon.png", await squareIcon(180));
await write("public/icons/icon-192.png", await squareIcon(192));
await write("public/icons/icon-512.png", await squareIcon(512));

/*
 * Maskable icons get cropped to a circle by Android, so the wordmark is scaled
 * into the 80% safe zone over the same brand-black plate instead of running to
 * the edge where the corners would be cut off.
 */
await write(
  "public/icons/icon-maskable-512.png",
  await sharp({
    create: { width: 512, height: 512, channels: 4, background: { r: 5, g: 5, b: 5, alpha: 1 } },
  })
    .composite([
      {
        input: await sharp(SQUARE)
          .resize(410, 410, { fit: "contain", background: { r: 5, g: 5, b: 5, alpha: 1 } })
          .toBuffer(),
        gravity: "center",
      },
    ])
    .png({ compressionLevel: 9, palette: true })
    .toBuffer(),
);

/* ── favicon: the approved .ico is used verbatim ─────────────────────────── */

await fs.copyFile(FAVICON_SRC, path.join(ROOT, "public/favicon.ico"));
const favStat = await fs.stat(path.join(ROOT, "public/favicon.ico"));
written.push({ rel: "public/favicon.ico", dims: "40x40 (copied)", kb: (favStat.size / 1024).toFixed(1) });

console.log("");
console.log("=== GENERATED ===");
for (const w of written) {
  console.log("  " + w.kb.padStart(7) + "KB  " + w.dims.padEnd(16) + w.rel);
}
