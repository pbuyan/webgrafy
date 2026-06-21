// Generates the multi-device favicon set from a square source image.
// Run with: pnpm favicons
//
// Source resolution order (first match wins):
//   public/favicon/source.svg -> public/favicon/source.png -> public/favicon/favi.png
// Provide a square, high-res source (>=512x512 or an SVG) for crisp output.
// The transparent source is flattened onto a solid white background.

import { existsSync } from "node:fs";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const faviconDir = path.join(root, "public", "favicon");
const publicDir = path.join(root, "public");

const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

const sourceCandidates = [
  path.join(faviconDir, "source.svg"),
  path.join(faviconDir, "source.png"),
  path.join(faviconDir, "source.jpg"),
  path.join(faviconDir, "source.jpeg"),
  path.join(faviconDir, "favi.jpg"),
  path.join(faviconDir, "favi.png"),
];

const source = sourceCandidates.find((file) => existsSync(file));
if (!source) {
  console.error(
    "No source image found. Add one of:\n  " + sourceCandidates.join("\n  "),
  );
  process.exit(1);
}

const isSvg = source.toLowerCase().endsWith(".svg");

/**
 * Resize the source into a square PNG buffer, fitting the whole image
 * (no cropping) onto a solid white background.
 * @param {number} size
 * @returns {Promise<Buffer>}
 */
async function renderPng(size) {
  const input = isSvg ? await readFile(source) : source;
  return sharp(input, isSvg ? { density: 384 } : undefined)
    .resize(size, size, { fit: "contain", background: WHITE })
    .flatten({ background: WHITE })
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(faviconDir, { recursive: true });

  // Standalone PNG icons.
  const pngTargets = [
    { size: 16, file: path.join(faviconDir, "icon-16.png") },
    { size: 32, file: path.join(faviconDir, "icon-32.png") },
    { size: 180, file: path.join(faviconDir, "apple-touch-icon.png") },
    { size: 192, file: path.join(faviconDir, "icon-192.png") },
    { size: 512, file: path.join(faviconDir, "icon-512.png") },
  ];

  for (const { size, file } of pngTargets) {
    const buf = await renderPng(size);
    await writeFile(file, buf);
    console.log(`wrote ${path.relative(root, file)} (${size}x${size})`);
  }

  // Multi-resolution favicon.ico (16/32/48).
  const icoBuffers = await Promise.all([16, 32, 48].map((s) => renderPng(s)));
  const ico = await pngToIco(icoBuffers);
  const icoPath = path.join(publicDir, "favicon.ico");
  await writeFile(icoPath, ico);
  console.log(`wrote ${path.relative(root, icoPath)} (16/32/48)`);

  // Pass through a scalable SVG icon when the source is SVG.
  if (isSvg) {
    const svgPath = path.join(faviconDir, "icon.svg");
    await copyFile(source, svgPath);
    console.log(`wrote ${path.relative(root, svgPath)}`);
  }

  console.log(`\nGenerated from: ${path.relative(root, source)}`);
  if (!isSvg) {
    const { width = 0, height = 0 } = await sharp(source).metadata();
    if (width !== height || width < 512) {
      console.warn(
        `Note: source is ${width}x${height}. Use a square source >=512x512 (or an SVG) for crisp icons.`,
      );
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
