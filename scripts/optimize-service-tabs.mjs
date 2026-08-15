import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dir = path.join(
  process.cwd(),
  "public",
  "images",
  "services",
  "tabs",
);

const files = [
  "web-mobiz.png",
  "marketing-mobiz.png",
  "seo-mobiz.png",
  "accounting-mobiz.png",
  "inventory-mobiz.png",
  "software-mobiz.png",
];

async function run() {
  console.log("");
  console.log("Optimising Mobiz service-tab images...");
  console.log("");

  for (const file of files) {
    const input = path.join(dir, file);

    if (!fs.existsSync(input)) {
      throw new Error(`Missing source image: ${input}`);
    }
  }

  const originalBytes = files.reduce(
    (sum, file) =>
      sum + fs.statSync(path.join(dir, file)).size,
    0,
  );

  const outputs = [];

  /*
   * Convert everything FIRST.
   * No PNG is deleted until all six WebPs pass verification.
   */
  for (const file of files) {
    const input = path.join(dir, file);

    const output = path.join(
      dir,
      file.replace(/\.png$/i, ".webp"),
    );

    await sharp(input)
      .rotate()
      .resize({
        width: 938,
        height: 938,
        fit: "contain",
        withoutEnlargement: true,
      })
      .webp({
        quality: 82,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(output);

    const metadata =
      await sharp(output).metadata();

    if (
      !metadata.width ||
      !metadata.height ||
      metadata.width !== metadata.height
    ) {
      throw new Error(
        `Verification failed for ${output}. PNG originals were NOT deleted.`,
      );
    }

    outputs.push(output);

    console.log(
      `✓ ${file} -> ${path.basename(output)} | ${metadata.width}x${metadata.height} | ${Math.round(
        fs.statSync(output).size / 1024,
      )} KB`,
    );
  }

  const broken = outputs.filter(
    (file) =>
      !fs.existsSync(file) ||
      fs.statSync(file).size < 1024,
  );

  if (broken.length > 0) {
    throw new Error(
      `WebP validation failed.\n${broken.join("\n")}`,
    );
  }

  /*
   * Delete originals only after every WebP is confirmed.
   */
  for (const file of files) {
    fs.unlinkSync(path.join(dir, file));
  }

  const webpBytes = outputs.reduce(
    (sum, file) =>
      sum + fs.statSync(file).size,
    0,
  );

  console.log("");
  console.log("====================================");
  console.log("MOBIZ SERVICE IMAGES COMPLETE");
  console.log("====================================");
  console.log(
    `Before: ${(originalBytes / 1024 / 1024).toFixed(2)} MB`,
  );
  console.log(
    `After : ${(webpBytes / 1024 / 1024).toFixed(2)} MB`,
  );
  console.log(
    `Saved : ${(
      ((originalBytes - webpBytes) /
        originalBytes) *
      100
    ).toFixed(1)}%`,
  );
  console.log("All original PNG files deleted safely.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
