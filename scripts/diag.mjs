import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [name, port, sel] of [['a', 8801, '.tiles .tile'], ['b', 8802, '.entries .entry']]) {
  const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 } });
  const p = await ctx.newPage();
  await p.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
  const data = await p.$$eval(sel, (els) =>
    els.map((el) => {
      const img = el.querySelector('img');
      const cs = img ? getComputedStyle(img) : null;
      return {
        h3: el.querySelector('h3')?.textContent?.slice(0, 24),
        cardH: Math.round(el.getBoundingClientRect().height),
        imgW: img ? Math.round(img.getBoundingClientRect().width) : 0,
        imgH: img ? Math.round(img.getBoundingClientRect().height) : 0,
        ar: cs?.aspectRatio,
        objFit: cs?.objectFit,
        cssH: cs?.height,
      };
    })
  );
  console.log(`--- ${name} (${sel})`);
  data.forEach((d) => console.log('   ', JSON.stringify(d)));
  await ctx.close();
}
await b.close();
