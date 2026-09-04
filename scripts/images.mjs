import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { img } from '../src/content/images.js';

const SRC = 'assets/images-original';
const OUT = 'assets/optimized';
const WIDTHS = [400, 800, 1200, 1600];
// Brand marks render between 44px and 120px, so full-size variants are pure waste.
const SMALL_WIDTHS = [64, 128, 256, 400];
const SMALL_KEYS = new Set(['logo', 'logoWide', 'crab', 'digitileMark']);

fs.mkdirSync(OUT, { recursive: true });

const meta = {};

for (const [key, def] of Object.entries(img)) {
  const src = path.join(SRC, `${def.id}.${def.ext}`);
  if (!fs.existsSync(src)) {
    console.warn('MISSING SOURCE:', key, src);
    continue;
  }
  const input = sharp(src);
  const { width: ow, height: oh, hasAlpha } = await input.metadata();
  const widthSet = SMALL_KEYS.has(key) ? SMALL_WIDTHS : WIDTHS;
  const sizes = widthSet.filter((w) => w <= ow);
  if (sizes.length === 0) sizes.push(ow);

  const variants = [];
  for (const w of sizes) {
    const h = Math.round((oh / ow) * w);
    const base = `${key}-${w}`;
    const pipeline = () => sharp(src).resize(w, null, { withoutEnlargement: true });

    await pipeline().avif({ quality: 55, effort: 6 }).toFile(path.join(OUT, `${base}.avif`));
    await pipeline().webp({ quality: 76, effort: 5 }).toFile(path.join(OUT, `${base}.webp`));
    if (hasAlpha) {
      await pipeline().png({ compressionLevel: 9, palette: true }).toFile(path.join(OUT, `${base}.png`));
    } else {
      await pipeline().jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(OUT, `${base}.jpg`));
    }
    variants.push({ w, h });
  }

  meta[key] = {
    alt: def.alt,
    width: ow,
    height: oh,
    ratio: +(ow / oh).toFixed(4),
    fallbackExt: hasAlpha ? 'png' : 'jpg',
    variants,
  };
  process.stdout.write('.');
}

// Prune variants for images that are no longer in the curated set, so removed assets
// (e.g. stock photography dropped on review) never ship to production.
const validPrefixes = new Set(Object.keys(meta));
let pruned = 0;
for (const f of fs.readdirSync(OUT)) {
  const key = f.replace(/-\d+\.(avif|webp|jpg|png)$/, '');
  if (!validPrefixes.has(key)) {
    fs.unlinkSync(path.join(OUT, f));
    pruned++;
  }
}
if (pruned) console.log(`\npruned ${pruned} orphaned variant files`);

fs.writeFileSync('src/content/image-meta.json', JSON.stringify(meta, null, 1));

let total = 0;
for (const f of fs.readdirSync(OUT)) total += fs.statSync(path.join(OUT, f)).size;
console.log(`\nProcessed ${Object.keys(meta).length} images -> ${fs.readdirSync(OUT).length} files, ${(total / 1024 / 1024).toFixed(1)}MB total`);
