import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import fs from 'fs';

const PORTS = { a: 8801, b: 8802 };
const WIDTHS = [320, 360, 390, 414, 768, 1024, 1280, 1440, 1920];
const report = {};

const browser = await chromium.launch();

for (const [name, port] of Object.entries(PORTS)) {
  const base = `http://127.0.0.1:${port}`;
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();

  // ---- crawl
  const seen = new Set(['/']);
  const queue = ['/'];
  const pagesInfo = [];
  const issues = [];
  const externals = new Set();

  while (queue.length) {
    const p = queue.shift();
    const res = await page.goto(base + p, { waitUntil: 'domcontentloaded' });
    if (!res || res.status() !== 200) { issues.push(`STATUS ${res?.status()} on ${p}`); continue; }

    const info = await page.evaluate(() => {
      const q = (s) => document.querySelector(s);
      const all = (s) => [...document.querySelectorAll(s)];
      return {
        title: document.title,
        desc: q('meta[name="description"]')?.content || null,
        canonical: q('link[rel=canonical]')?.href || null,
        robots: q('meta[name=robots]')?.content || null,
        ogTitle: q('meta[property="og:title"]')?.content || null,
        ogImage: q('meta[property="og:image"]')?.content || null,
        h1: all('h1').map((h) => h.textContent.trim()),
        headings: all('h1,h2,h3,h4').map((h) => +h.tagName[1]),
        imgs: all('img').map((i) => ({ alt: i.getAttribute('alt'), src: i.currentSrc || i.src, w: i.getAttribute('width'), h: i.getAttribute('height'), loading: i.getAttribute('loading') })),
        links: all('a[href]').map((a) => a.getAttribute('href')),
        emptyLinks: all('a[href]').filter((a) => !a.textContent.trim() && !a.querySelector('img[alt]:not([alt=""])') && !a.getAttribute('aria-label')).map((a) => a.getAttribute('href')),
        jsonld: all('script[type="application/ld+json"]').map((s) => s.textContent),
        lang: document.documentElement.lang,
        skip: !!q('.skip'),
        main: all('main').length,
        genericAnchors: all('a').filter((a) => /^(click here|read more|learn more|here)$/i.test(a.textContent.trim())).length,
      };
    });
    pagesInfo.push({ path: p, ...info });

    for (const href of info.links) {
      if (!href) continue;
      if (/^(https?:)?\/\//.test(href)) { externals.add(href); continue; }
      if (/^(tel:|mailto:|#)/.test(href)) continue;
      const clean = href.split('#')[0];
      if (!clean.startsWith('/')) { issues.push(`RELATIVE LINK ${href} on ${p}`); continue; }
      if (!seen.has(clean)) { seen.add(clean); queue.push(clean); }
    }
  }

  // ---- per-page validations
  const titles = new Map(), descs = new Map();
  for (const pi of pagesInfo) {
    if (!pi.title) issues.push(`NO TITLE ${pi.path}`);
    if (pi.title && pi.title.length > 62) issues.push(`TITLE ${pi.title.length}ch ${pi.path}: ${pi.title}`);
    if (!pi.desc) issues.push(`NO META DESC ${pi.path}`);
    if (pi.desc && (pi.desc.length < 70 || pi.desc.length > 165)) issues.push(`DESC ${pi.desc.length}ch ${pi.path}`);
    if (pi.h1.length !== 1) issues.push(`H1 COUNT ${pi.h1.length} ${pi.path}`);
    if (!pi.canonical) issues.push(`NO CANONICAL ${pi.path}`);
    if (pi.main !== 1) issues.push(`MAIN COUNT ${pi.main} ${pi.path}`);
    if (!pi.skip) issues.push(`NO SKIP LINK ${pi.path}`);
    if (pi.lang !== 'en-US') issues.push(`LANG ${pi.lang} ${pi.path}`);
    if (pi.genericAnchors) issues.push(`GENERIC ANCHOR x${pi.genericAnchors} ${pi.path}`);
    for (const e of pi.emptyLinks) issues.push(`EMPTY LINK ${e} on ${pi.path}`);
    for (const im of pi.imgs) {
      if (im.alt === null) issues.push(`IMG NO ALT ${im.src} on ${pi.path}`);
      if (!im.w || !im.h) issues.push(`IMG NO DIMS ${im.src} on ${pi.path}`);
    }
    // heading order
    let prev = 0;
    for (const lvl of pi.headings) { if (prev && lvl > prev + 1) { issues.push(`HEADING JUMP h${prev}->h${lvl} ${pi.path}`); break; } prev = lvl; }
    if (!pi.robots?.includes('noindex')) {
      if (titles.has(pi.title)) issues.push(`DUP TITLE ${pi.path} == ${titles.get(pi.title)}`);
      titles.set(pi.title, pi.path);
      if (descs.has(pi.desc)) issues.push(`DUP DESC ${pi.path} == ${descs.get(pi.desc)}`);
      descs.set(pi.desc, pi.path);
    }
    for (const j of pi.jsonld) { try { JSON.parse(j); } catch { issues.push(`BAD JSON-LD ${pi.path}`); } }
  }

  // ---- sitemap coverage
  const sm = await (await fetch(`${base}/sitemap.xml`)).text();
  const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https:\/\/marylandtileboss\.com/, ''));
  for (const pi of pagesInfo) {
    const noindex = pi.robots?.includes('noindex');
    if (!noindex && !smUrls.includes(pi.path)) issues.push(`NOT IN SITEMAP ${pi.path}`);
  }
  for (const u of smUrls) if (!pagesInfo.find((p) => p.path === u)) issues.push(`SITEMAP URL NOT CRAWLED ${u}`);

  // ---- overflow + axe
  const overflow = [];
  for (const w of WIDTHS) {
    const c2 = await browser.newContext({ viewport: { width: w, height: 900 } });
    const p2 = await c2.newPage();
    for (const path of ['/', '/tile-installation/shower/', '/faq/', '/contact/', '/portfolio/']) {
      await p2.goto(base + path, { waitUntil: 'domcontentloaded' });
      await p2.waitForTimeout(600);
      const o = await p2.evaluate(() => {
        const de = document.documentElement;
        if (de.scrollWidth <= de.clientWidth + 1) return null;
        const bad = [...document.querySelectorAll('*')]
          .filter((el) => el.getBoundingClientRect().right > de.clientWidth + 1)
          .slice(0, 4)
          .map((el) => el.tagName + '.' + (el.className || '').toString().split(' ')[0]);
        return { scrollW: de.scrollWidth, clientW: de.clientWidth, bad };
      });
      if (o) overflow.push({ w, path, ...o });
    }
    await c2.close();
  }

  const axeResults = [];
  for (const path of ['/', '/tile-installation/shower/', '/faq/', '/contact/', '/portfolio/', '/trade/']) {
    await page.goto(base + path, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(600);
    const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze();
    if (r.violations.length) {
      axeResults.push({ path, violations: r.violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help, target: v.nodes[0]?.target })) });
    }
  }

  report[name] = { pages: pagesInfo.length, crawled: [...seen].sort(), issues, overflow, axe: axeResults, externals: [...externals] };
  await ctx.close();
}

await browser.close();
fs.writeFileSync('research/qa-report.json', JSON.stringify(report, null, 1));

for (const [k, v] of Object.entries(report)) {
  console.log(`\n===== VERSION ${k.toUpperCase()} — ${v.pages} pages crawled`);
  console.log(`SEO/structure issues: ${v.issues.length}`);
  [...new Set(v.issues)].slice(0, 25).forEach((i) => console.log('   -', i));
  console.log(`Horizontal overflow: ${v.overflow.length}`);
  v.overflow.slice(0, 6).forEach((o) => console.log(`   - ${o.w}px ${o.path} ${o.scrollW}>${o.clientW} ${JSON.stringify(o.bad)}`));
  console.log(`axe pages with violations: ${v.axe.length}`);
  v.axe.forEach((a) => a.violations.forEach((x) => console.log(`   - ${a.path} [${x.impact}] ${x.id} (${x.nodes}) ${x.help}`)));
}
