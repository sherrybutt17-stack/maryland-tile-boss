import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [320, 360, 390]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 800 } });
  const p = await ctx.newPage();
  await p.goto('http://127.0.0.1:8801/tile-installation/shower/', { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => {
    const de = document.documentElement;
    const out = [];
    for (const el of document.querySelectorAll('*')) {
      const rect = el.getBoundingClientRect();
      if (rect.right > de.clientWidth + 1 || rect.width > de.clientWidth + 1) {
        const cs = getComputedStyle(el);
        out.push({
          el: el.tagName + '.' + (el.className || '').toString().split(' ').slice(0,2).join('.'),
          right: Math.round(rect.right), width: Math.round(rect.width),
          fs: cs.fontSize, pad: cs.paddingLeft + '/' + cs.paddingRight, ow: cs.overflowWrap,
        });
      }
    }
    return { clientW: de.clientWidth, scrollW: de.scrollWidth, out: out.slice(0, 6) };
  });
  console.log(`--- ${w}px  client=${r.clientW} scroll=${r.scrollW}`);
  r.out.forEach((o) => console.log('   ', JSON.stringify(o)));
  await ctx.close();
}
await b.close();
