import { chromium } from 'playwright';
import fs from 'fs';
const pages = process.argv[2] ? process.argv[2].split(',') : ['/'];
const widths = process.argv[3] ? process.argv[3].split(',').map(Number) : [1440];
fs.mkdirSync('research/shots', { recursive: true });
const browser = await chromium.launch();
for (const [name, port] of [['a', 8801], ['b', 8802]]) {
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 1000 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const errs = [];
    page.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
    page.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
    page.on('requestfailed', (r) => errs.push('FAILED ' + r.url()));
    for (const p of pages) {
      await page.goto(`http://127.0.0.1:${port}${p}`, { waitUntil: 'networkidle' });
      await page.addStyleTag({ content: 'html{scroll-behavior:auto !important}' });
      await page.evaluate(async () => {
        await new Promise((res) => {
          let y = 0;
          const step = () => {
            y += window.innerHeight * 0.8;
            window.scrollTo(0, y);
            if (y < document.body.scrollHeight) requestAnimationFrame(step);
            else { window.scrollTo(0, 0); setTimeout(res, 250); }
          };
          step();
        });
      });
      await page.waitForTimeout(500);
      const slug = p === '/' ? 'home' : p.replace(/\//g, '-').replace(/^-|-$/g, '');
      await page.screenshot({ path: `research/shots/${name}-${slug}-${w}.png`, fullPage: p === '/' });
    }
    if (errs.length) console.log(`ERRORS ${name} @${w}:`, [...new Set(errs)].slice(0, 8));
    else console.log(`clean: ${name} @${w}`);
    await ctx.close();
  }
}
await browser.close();
