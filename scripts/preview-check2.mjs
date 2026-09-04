import { chromium } from 'playwright';
const B = 'http://127.0.0.1:8899/maryland-tile-boss';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
const bad = [];
page.on('response', r => { if (r.status() >= 400 && !r.url().includes('google.com')) bad.push(r.status() + ' ' + r.url()); });
for (const p of ['/version-a/', '/version-b/', '/version-a/portfolio/']) {
  await page.goto(B + p, { waitUntil: 'domcontentloaded' });
  await page.evaluate(async () => {
    await new Promise(res => { let y = 0; const s = () => { y += innerHeight * 0.8; scrollTo(0, y);
      if (y < document.body.scrollHeight) requestAnimationFrame(s); else { scrollTo(0,0); setTimeout(res, 900); } }; s(); });
  });
  await page.waitForTimeout(900);
  const r = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('img')];
    return { total: imgs.length, broken: imgs.filter(i => i.naturalWidth === 0).map(i => i.currentSrc || i.src).slice(0,4) };
  });
  console.log(`${p.padEnd(24)} imgs:${r.total} stillBroken:${r.broken.length} ${r.broken.join(' ')}`);
}
console.log(bad.length ? 'HTTP ERRORS: ' + bad.slice(0,5).join(' | ') : 'no 4xx/5xx on internal assets');
await browser.close();
