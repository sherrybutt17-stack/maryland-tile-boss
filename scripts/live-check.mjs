import { chromium } from 'playwright';
const B = 'https://sherrybutt17-stack.github.io/maryland-tile-boss';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } });
const p = await ctx.newPage();
const bad = [];
p.on('response', r => { if (r.status() >= 400 && !r.url().includes('google.com')) bad.push(r.status()+' '+r.url()); });
for (const path of ['/', '/version-a/', '/version-b/', '/version-a/tile-installation/shower/', '/version-b/trade/']) {
  await p.goto(B + path, { waitUntil: 'domcontentloaded' });
  await p.evaluate(async () => { await new Promise(res => { let y=0; const s=()=>{y+=innerHeight*0.8; scrollTo(0,y);
    if (y<document.body.scrollHeight) requestAnimationFrame(s); else {scrollTo(0,0); setTimeout(res,800);} }; s(); }); });
  await p.waitForTimeout(700);
  const r = await p.evaluate(() => ({
    title: document.title.slice(0, 42),
    robots: document.querySelector('meta[name=robots]')?.content,
    font: getComputedStyle(document.body).fontFamily.split(',')[0].replace(/"/g,''),
    imgs: document.querySelectorAll('img').length,
    broken: [...document.querySelectorAll('img')].filter(i => i.naturalWidth === 0).length,
  }));
  console.log(`${path.padEnd(38)} ${r.font.padEnd(9)} imgs:${String(r.imgs).padEnd(3)} broken:${r.broken}  robots:${r.robots}`);
}
console.log(bad.length ? 'HTTP ERRORS: ' + [...new Set(bad)].slice(0,4).join(' | ') : 'no internal 4xx/5xx');
await b.close();
