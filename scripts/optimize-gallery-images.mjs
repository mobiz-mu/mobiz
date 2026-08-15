import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dir = path.join(
  process.cwd(),
  "public",
  "images",
  "galleries",
);

const files = fs
  .readdirSync(dir)
  .filter((file) =>
    /^mobiz-template(?:[1-9]|1\d|2[0-3])\.jpg$/i.test(file),
  )
  .sort((a, b) => {
    const na = Number(a.match(/\d+/)?.[0] ?? 0);
    const nb = Number(b.match(/\d+/)?.[0] ?? 0);
    return na - nb;
  });

if (files.length !== 23) {
  throw new Error(
    `Expected exactly 23 JPG templates, found ${files.length}. Nothing deleted.`,
  );
}

const originalBytes = files.reduce(
  (sum, file) =>
    sum + fs.statSync(path.join(dir, file)).size,
  0,
);

async function run() {
  console.log(`Found ${files.length} JPG files.`);
  console.log(
    `Original total: ${(originalBytes / 1024 / 1024).toFixed(2)} MB`,
  );

  for (const file of files) {
    const input = path.join(dir, file);

    const output = path.join(
      dir,
      file.replace(/\.jpg$/i, ".webp"),
    );

    await sharp(input)
      .rotate()
      .resize({
        width: 1000,
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(output);

    const outputSize =
      fs.statSync(output).size;

    if (outputSize < 1024) {
      throw new Error(
        `Invalid WebP produced for ${file}. Originals have NOT been deleted.`,
      );
    }

    console.log(
      `✓ ${file} -> ${path.basename(output)} (${(
        outputSize / 1024
      ).toFixed(0)} KB)`,
    );
  }

  const outputs = files.map((file) =>
    path.join(
      dir,
      file.replace(/\.jpg$/i, ".webp"),
    ),
  );

  const missing = outputs.filter(
    (file) =>
      !fs.existsSync(file) ||
      fs.statSync(file).size < 1024,
  );

  if (missing.length > 0) {
    throw new Error(
      `WebP verification failed. JPG originals were kept.\n${missing.join("\n")}`,
    );
  }

  for (const file of files) {
    fs.unlinkSync(
      path.join(dir, file),
    );
  }

  const webpBytes = outputs.reduce(
    (sum, file) =>
      sum + fs.statSync(file).size,
    0,
  );

  console.log("");
  console.log("====================================");
  console.log("ALL 23 IMAGES CONVERTED SUCCESSFULLY");
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
  console.log(
    "Original JPG files deleted safely.",
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});