import { chromium } from 'playwright';

const WIDTHS = [320, 360, 390, 414, 430];
const PAGES = ['/', '/standards/', '/portfolio/', '/tile/porcelain/', '/trade/', '/showroom/', '/portfolio/dunkirk-bathroom/', '/blog/'];
const PORTS = { a: 8801, b: 8802 };

const browser = await chromium.launch();
const problems = [];

for (const [theme, port] of Object.entries(PORTS)) {
  for (const w of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    for (const path of PAGES) {
      await page.goto(`http://127.0.0.1:${port}${path}`, { waitUntil: 'domcontentloaded' });
      await page.addStyleTag({ content: 'html{scroll-behavior:auto!important} .js .reveal{opacity:1!important;transform:none!important}' });
      // force lazy images to load so we measure real boxes
      await page.evaluate(async () => {
        document.querySelectorAll('img[loading="lazy"]').forEach((i) => i.setAttribute('loading', 'eager'));
        await new Promise((r) => setTimeout(r, 500));
      });

      const res = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        // the content box every section aligns to
        const shell = document.querySelector('.shell, .wrap');
        const cs = shell ? getComputedStyle(shell) : null;
        const sRect = shell ? shell.getBoundingClientRect() : null;
        const contentLeft = sRect ? sRect.left + parseFloat(cs.paddingLeft) : 0;
        const contentRight = sRect ? sRect.right - parseFloat(cs.paddingRight) : vw;

        const out = [];
        for (const img of document.querySelectorAll('img')) {
          const r = img.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) { out.push({ kind: 'zero-size', sel: img.src.split('/').pop() }); continue; }
          const parent = img.closest('picture') || img;
          const pr = parent.getBoundingClientRect();
          // does the image spill out of its own wrapper?
          if (r.width > pr.width + 1.5 || r.height > pr.height + 1.5) {
            out.push({ kind: 'spills-wrapper', sel: img.src.split('/').pop(), img: [Math.round(r.width), Math.round(r.height)], wrap: [Math.round(pr.width), Math.round(pr.height)] });
          }
          if (r.right > vw + 1) out.push({ kind: 'past-viewport', sel: img.src.split('/').pop(), right: Math.round(r.right), vw });
          if (r.left < -1) out.push({ kind: 'negative-left', sel: img.src.split('/').pop(), left: Math.round(r.left) });
        }

        // Grid alignment, column-count aware. A grid is correct when every item in a row
        // shares a width, the row is flush to both content edges, and gaps are even.
        const groups = {};
        for (const sel of ['.bento .card picture', '.swatches .swatch picture', '.work-grid .work picture',
                           '.gallery picture', '.notes .note picture', '.entries .entry picture',
                           '.works .work-media picture', '.plates .plate picture', '.frames > * picture',
                           '.diagrams .diagram']) {
          const els = [...document.querySelectorAll(sel)];
          if (els.length < 2) continue;
          const rects = els.map((e) => e.getBoundingClientRect());

          // bucket into rows by top edge
          const rows = [];
          for (const r of rects) {
            const row = rows.find((x) => Math.abs(x.top - r.top) < 6);
            if (row) row.items.push(r);
            else rows.push({ top: r.top, items: [r] });
          }
          const issues = [];
          for (const row of rows) {
            const items = row.items.sort((a, b) => a.left - b.left);
            const widths = [...new Set(items.map((r) => Math.round(r.width)))];
            if (widths.length > 1) issues.push(`uneven widths in a row: ${widths.join('/')}`);
            if (Math.abs(items[0].left - contentLeft) > 2) issues.push(`row starts at ${Math.round(items[0].left)}, content edge is ${Math.round(contentLeft)}`);
            const last = items[items.length - 1];
            // a full row should reach the right content edge; a partial last row should not be judged
            if (items.length === rows[0].items.length && Math.abs(last.right - contentRight) > 2) {
              issues.push(`row ends at ${Math.round(last.right)}, content edge is ${Math.round(contentRight)}`);
            }
            if (items.length > 2) {
              const gaps = items.slice(1).map((r, i) => Math.round(r.left - items[i].right));
              if ([...new Set(gaps)].length > 1) issues.push(`uneven gaps: ${gaps.join('/')}`);
            }
          }
          // every row should start at the same left edge
          const rowLefts = [...new Set(rows.map((r) => Math.round(Math.min(...r.items.map((i) => i.left)))))];
          if (rowLefts.length > 1) issues.push(`rows start at different x: ${rowLefts.join('/')}`);

          if (issues.length) groups[sel] = { count: els.length, cols: rows[0].items.length, issues };
        }
        return { vw, contentLeft: Math.round(contentLeft), contentRight: Math.round(contentRight), out, groups };
      });

      for (const p of res.out) problems.push({ theme, w, path, ...p });

      for (const [sel, g] of Object.entries(res.groups)) {
        problems.push({ theme, w, path, kind: 'grid', sel, cols: g.cols, issues: g.issues });
      }
    }
    await ctx.close();
  }
}
await browser.close();

if (!problems.length) console.log('CLEAN — no image alignment problems at 320/360/390/414/430 across both builds');
else {
  console.log(`${problems.length} findings:\n`);
  const seen = new Set();
  for (const p of problems) {
    const k = `${p.theme}|${p.kind}|${p.sel || ''}|${p.path}`;
    if (seen.has(k)) continue;
    seen.add(k);
    console.log(` [${p.theme}] ${String(p.w).padEnd(4)} ${p.path.padEnd(30)} ${p.kind.padEnd(22)} ${JSON.stringify(Object.fromEntries(Object.entries(p).filter(([x]) => !['theme','w','path','kind'].includes(x))))}`);
  }
}
