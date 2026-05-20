import sharp from "sharp";
import { promises as fs } from "node:fs";

const SRC = "public/inspireu-logo.png";

// Desktop/browser favicon — transparent OK. App Router auto-detects src/app/icon.png.
await sharp(SRC)
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile("src/app/icon.png");

// Apple touch icon — iOS applies rounded mask; needs a solid background.
await sharp({
  create: {
    width: 180,
    height: 180,
    channels: 4,
    background: { r: 13, g: 6, b: 16, alpha: 1 }, // matches --bg-base
  },
})
  .composite([
    {
      input: await sharp(SRC)
        .resize(150, 150, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer(),
      gravity: "center",
    },
  ])
  .png()
  .toFile("src/app/apple-icon.png");

// Remove the legacy favicon.ico so it doesn't override icon.png.
try {
  await fs.unlink("src/app/favicon.ico");
  console.log("removed src/app/favicon.ico");
} catch {}

console.log("wrote src/app/icon.png (512x512) and src/app/apple-icon.png (180x180)");
