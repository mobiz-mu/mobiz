import sharp from "sharp";
import path from "node:path";

const directory = path.join(
  process.cwd(),
  "public",
  "images",
  "galleries",
);

for (let i = 1; i <= 23; i += 1) {
  const filename = `mobiz-template${i}.webp`;
  const filepath = path.join(directory, filename);

  const metadata = await sharp(filepath).metadata();

  console.log(
    `${filename}: ${metadata.width} x ${metadata.height}`,
  );
}