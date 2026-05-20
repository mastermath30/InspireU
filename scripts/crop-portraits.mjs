import sharp from "sharp";

async function cropPortrait(srcPath, dstPath, opts) {
  const img = sharp(srcPath);
  const meta = await img.metadata();
  const { width = 0, height = 0 } = meta;
  const baseSize = Math.min(width, height);
  const size = Math.round(baseSize * (opts.zoom ?? 1));
  const focusX = opts.focusX ?? 0.5;
  const focusY = opts.focusY ?? 0.5;
  let left = Math.round(focusX * width - size / 2);
  let top = Math.round(focusY * height - size / 2);
  left = Math.max(0, Math.min(left, width - size));
  top = Math.max(0, Math.min(top, height - size));

  const buf = await img
    .extract({ left, top, width: size, height: size })
    .resize(800, 800, { fit: "cover" })
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  const fs = await import("node:fs/promises");
  await fs.writeFile(dstPath, buf);
  console.log(
    `${srcPath}: ${width}x${height} → 800x800 (crop @ ${left},${top} size ${size})`
  );
}

const SOURCES = {
  malhar: "originals/malhar.jpeg",
  reva: "originals/reva.jpeg",
  saanvi: "originals/saanvi.jpeg",
};

const fs = await import("node:fs/promises");
await fs.mkdir("originals", { recursive: true });

// On first run, the source files already live at public/board/. Copy them aside if originals don't exist yet.
for (const [name, src] of Object.entries(SOURCES)) {
  try {
    await fs.access(src);
  } catch {
    await fs.copyFile(`public/board/${name}.jpeg`, src);
    console.log(`(seeded ${src})`);
  }
}

await cropPortrait(SOURCES.malhar, "public/board/malhar.jpeg", {
  focusX: 0.5,
  focusY: 0.4,
});
await cropPortrait(SOURCES.reva, "public/board/reva.jpeg", {
  focusX: 0.5,
  focusY: 0.45,
});
await cropPortrait(SOURCES.saanvi, "public/board/saanvi.jpeg", {
  focusX: 0.22,
  focusY: 0.7,
  zoom: 0.55,
});
