// Fetch and self-host WOFF2 subsets. Self-hosting removes a third-party connection
// from the critical path and lets us preload exactly the faces above the fold.
import fs from 'fs';
import path from 'path';

const UA_MODERN =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

// Theme A: Bricolage Grotesque display + Manrope body.
// Theme B: Bodoni Moda for high-contrast editorial display, Karla for quiet UI/body.
const FAMILIES = [
  // Variable ranges so each family ships as a single file instead of one per weight.
  // Theme A: Bricolage Grotesque is a contemporary display grotesque with real character;
  // Manrope carries body copy without competing with it.
  { css: 'Bricolage+Grotesque:opsz,wght@12..96,400..800', dir: 'a' },
  { css: 'Manrope:wght@400..700', dir: 'a' },
  { css: 'Bodoni+Moda:opsz,wght@6..96,400..600', dir: 'b' },
  { css: 'Karla:wght@400..600', dir: 'b' },
];

const OUT = 'assets/fonts';
fs.mkdirSync(OUT, { recursive: true });

const faces = { a: [], b: [] };

for (const fam of FAMILIES) {
  const url = `https://fonts.googleapis.com/css2?family=${fam.css}&display=swap`;
  const res = await fetch(url, { headers: { 'User-Agent': UA_MODERN } });
  const css = await res.text();

  // Keep latin only — this site is English and every extra subset is dead weight.
  const blocks = css.split('@font-face').slice(1);
  for (const block of blocks) {
    const isLatin = /\/\* latin \*\//.test(css.split(block)[0].split('@font-face').pop() || '') ||
      block.includes('U+0000-00FF');
    if (!block.includes('U+0000-00FF')) continue; // latin basic range
    const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
    const weight = /font-weight:\s*([\d\s]+)/.exec(block)?.[1].trim();
    const style = /font-style:\s*(\w+)/.exec(block)?.[1] || 'normal';
    const src = /url\((https:[^)]+\.woff2)\)/.exec(block)?.[1];
    if (!family || !src) continue;

    const fileName = `${family.replace(/\s+/g, '-')}-${weight.replace(/\s+/g, '-')}-${style}.woff2`.toLowerCase();
    const dest = path.join(OUT, fileName);
    if (!fs.existsSync(dest)) {
      const buf = Buffer.from(await (await fetch(src, { headers: { 'User-Agent': UA_MODERN } })).arrayBuffer());
      fs.writeFileSync(dest, buf);
    }
    faces[fam.dir].push({ family, weight, style, file: fileName, bytes: fs.statSync(dest).size });
    void isLatin;
  }
}

fs.writeFileSync('src/content/fonts.json', JSON.stringify(faces, null, 1));
for (const k of Object.keys(faces)) {
  const total = faces[k].reduce((n, f) => n + f.bytes, 0);
  console.log(`theme ${k}: ${faces[k].length} faces, ${(total / 1024).toFixed(1)}KB`);
  faces[k].forEach((f) => console.log(`   ${f.family} ${f.weight} ${f.style} — ${(f.bytes / 1024).toFixed(1)}KB`));
}
