import sharp from "sharp";
import { promises as fs } from "node:fs";

const SRC = "public/inspireu-logo.png";
const OUT = "public/inspireu-logo.png";

const img = sharp(SRC);
const meta = await img.metadata();
const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.from(data);

const THRESHOLD = 28;
let kept = 0;
let cleared = 0;
for (let i = 0; i < out.length; i += channels) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  if (luminance < THRESHOLD) {
    out[i + 3] = 0;
    cleared++;
  } else {
    const t = Math.min(1, (luminance - THRESHOLD) / 48);
    out[i + 3] = Math.round(255 * t + (1 - t) * out[i + 3]);
    kept++;
  }
}

await sharp(out, { raw: { width, height, channels } })
  .png()
  .toFile(OUT + ".tmp");

await fs.rename(OUT + ".tmp", OUT);

console.log(
  `Converted ${SRC} (${meta.width}x${meta.height}) → transparent bg. cleared=${cleared} kept=${kept}`
);
