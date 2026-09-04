import { chromium } from 'playwright';
const B = 'http://127.0.0.1:8899/maryland-tile-boss';
const paths = ['/', '/version-a/', '/version-b/', '/version-a/showroom/', '/version-b/tile/porcelain/'];
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
let bad = [];
page.on('requestfailed', r => bad.push('FAILED ' + r.url()));
page.on('response', r => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); });
page.on('console', m => m.type() === 'error' && bad.push('CONSOLE ' + m.text()));
for (const p of paths) {
  bad = [];
  await page.goto(B + p, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1200);
  const info = await page.evaluate(() => ({
    imgs: [...document.querySelectorAll('img')].length,
    broken: [...document.querySelectorAll('img')].filter(i => !i.complete || i.naturalWidth === 0).length,
    css: !!getComputedStyle(document.body).fontFamily.match(/Archivo|Karla|Bodoni/),
    font: getComputedStyle(document.body).fontFamily.split(',')[0],
    robots: document.querySelector('meta[name=robots]')?.content,
  }));
  console.log(`${p.padEnd(28)} imgs:${info.imgs} broken:${info.broken} font:${info.font} robots:${info.robots} ${bad.length ? 'ERRORS: ' + bad.slice(0,3).join(' | ') : 'clean'}`);
}
await browser.close();
