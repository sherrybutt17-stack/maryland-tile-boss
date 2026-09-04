import fs from 'fs';
import path from 'path';
import { site, nav } from '../src/content/site.js';
import { pages } from '../src/content/pages.js';
import { materialPages } from '../src/content/materials.js';
import { projects } from '../src/content/images.js';
import { posts } from '../src/content/blog.js';
import { imageMeta, esc } from '../src/lib/html.mjs';
import * as S from '../src/lib/schema.mjs';
import { transform } from 'lightningcss';

const THEMES = [
  { key: 'a', out: 'version-a' },
  { key: 'b', out: 'version-b' },
];

const ORIGIN = site.domain;

// Preview mode builds a second copy into docs/ for GitHub Pages, which serves from a
// subpath. Production builds keep root-absolute URLs for the real domain.
const PREVIEW_BASE = process.env.PREVIEW_BASE || '';
const IS_PREVIEW = !!PREVIEW_BASE;

/**
 * Rewrites root-absolute URLs onto a base path. Applied to the finished HTML rather than
 * threaded through every template, because every internal URL is already root-absolute and
 * every external one is fully qualified — so the two are unambiguous here.
 * Schema/canonical URLs are absolute (https://marylandtileboss.com/...) and stay untouched,
 * which is correct: they describe where the real site lives, not the preview.
 */
function rebase(html, base) {
  let out = html
    .replace(/\b(href|src|action)="\/(?!\/)/g, `$1="${base}/`)
    .replace(/\b(srcset|imagesrcset)="([^"]*)"/g, (_m, attr, val) =>
      `${attr}="${val.replace(/(^|,\s*)\//g, `$1${base}/`)}"`
    )
    .replace(/url\((['"]?)\/assets\//g, `url($1${base}/assets/`);

  // A public preview must never be indexed alongside the real site.
  out = out.replace(
    /<meta name="robots" content="[^"]*">/,
    '<meta name="robots" content="noindex, nofollow">'
  );
  if (!/name="robots"/.test(out)) {
    out = out.replace('</title>', '</title>\n<meta name="robots" content="noindex, nofollow">');
  }
  return out;
}

/* ---------------------------------------------------------------- page set */

function buildPageList() {
  const list = [...pages, ...materialPages].map((p) => ({
    ...p,
    href: p.slug === '' ? '/' : `/${p.slug}/`,
    kind: 'page',
  }));

  // Project detail pages
  for (const pr of projects) {
    list.push({
      kind: 'project',
      project: pr,
      slug: `portfolio/${pr.slug}`,
      href: `/portfolio/${pr.slug}/`,
      title: pr.metaTitle,
      description: pr.metaDesc,
      h1: pr.title,
      heroA: pr.hero,
      heroB: pr.hero,
      lede: pr.summary,
      primaryCta: { label: 'Start a project like this', href: '/contact/' },
      secondaryCta: { label: 'See all work', href: '/portfolio/' },
      parent: { label: 'Portfolio', href: '/portfolio/' },
      sections: [
        { type: 'gallery', heading: 'Photographs', images: pr.gallery },
        { type: 'projectFacts' },
        { type: 'related', heading: 'Related' },
        { type: 'finalCta' },
      ],
      faq: [],
    });
  }

  // Blog index
  list.push({
    kind: 'blogIndex',
    slug: 'blog',
    href: '/blog/',
    title: 'Tile Knowledge & Installation Advice | Maryland Tile Boss',
    description:
      'Practical tile knowledge from a third-generation installer in Edgewater, MD — materials, installation systems, waterproofing and what actually works on site.',
    h1: 'Tile knowledge',
    heroA: 'showroomWall',
    heroB: 'greenGloss',
    lede:
      'Notes from 45 years in the trade — what works, what fails, and why. Written for homeowners and for the contractors who do this for a living.',
    primaryCta: { label: 'Visit the showroom', href: '/showroom/' },
    secondaryCta: { label: 'Ask a question', href: '/contact/' },
    sections: [{ type: 'postList' }, { type: 'finalCta' }],
    faq: [],
  });

  // Blog posts
  for (const post of posts) {
    list.push({
      kind: 'post',
      post,
      slug: `blog/${post.slug}`,
      href: `/blog/${post.slug}/`,
      title: `${post.title} | Tile Boss`,
      description: post.desc,
      h1: post.title,
      heroA: post.image,
      heroB: post.image,
      lede: post.desc,
      primaryCta: { label: post.link.label, href: post.link.href },
      secondaryCta: { label: 'Visit the showroom', href: '/showroom/' },
      parent: { label: 'Tile knowledge', href: '/blog/' },
      sections: [{ type: 'postBody' }, { type: 'related', heading: 'Related' }, { type: 'finalCta' }],
      faq: [],
    });
  }

  // Thank-you page (form target) — noindex
  list.push({
    kind: 'page',
    slug: 'thanks',
    href: '/thanks/',
    noindex: true,
    title: 'Thanks — we have your project details | Maryland Tile Boss',
    description: 'Your enquiry has been sent to the Maryland Tile Boss showroom in Edgewater, MD.',
    h1: 'Got it. Thanks.',
    heroA: 'showroomCounter',
    heroB: 'showroomCounter',
    lede:
      'Your details are through. You will hear back around showroom hours — Monday to Saturday, 10am to 4pm. If it is urgent, calling is faster.',
    primaryCta: { label: `Call ${site.phone.display}`, href: site.phone.href },
    secondaryCta: { label: 'Back to the showroom', href: '/showroom/' },
    sections: [{ type: 'related', heading: 'While you wait' }],
    faq: [],
  });

  return list;
}

/* ---------------------------------------------------------------- trails */

function trailFor(page, all) {
  const trail = [{ label: 'Home', href: '/' }];
  if (page.href === '/') return trail;
  if (page.parent) {
    const grand = all.find((p) => p.href === page.parent.href);
    if (grand && grand.parent) trail.push(grand.parent);
    trail.push(page.parent);
  }
  trail.push({ label: page.h1, href: page.href });
  return trail;
}

/* ---------------------------------------------------------------- schema */

function schemaFor(page, all) {
  const url = `${ORIGIN}${page.href}`;
  const nodes = [S.localBusiness(), S.person(), S.website(), S.webPage(page, url)];

  const trail = trailFor(page, all);
  if (trail.length > 1) nodes.push(S.breadcrumbs(trail));

  const faqItems =
    page.kind === 'page' && page.faqGroups
      ? page.faqGroups.flatMap((g) => g.items)
      : page.faq && page.faq.length
      ? page.faq
      : null;
  if (faqItems && faqItems.length) nodes.push(S.faqPage(faqItems, url));

  const svc = {
    '/tile-installation/': ['Tile installation', 'Tile installation across Annapolis, Edgewater and Anne Arundel County, Maryland.', 'Tile installation'],
    '/tile-installation/bathroom/': ['Bathroom tile installation', 'Bathroom floor, wall and tub-surround tile installation in Anne Arundel County, Maryland.', 'Bathroom tile installation'],
    '/tile-installation/shower/': ['Shower tile installation and waterproofing', 'Shower tile installation with sheet, liquid-applied or preformed waterproofing systems.', 'Shower waterproofing'],
    '/tile-installation/backsplash/': ['Kitchen backsplash installation', 'Glass, stone and mosaic kitchen backsplash installation in Anne Arundel County, Maryland.', 'Backsplash installation'],
    '/tile-installation/floors/': ['Tile floor installation', 'Large-format porcelain, stone and plank tile floor installation.', 'Floor tile installation'],
  }[page.href];
  if (svc) nodes.push(S.service(svc[0], svc[1], url, svc[2]));

  if (page.kind === 'post') {
    nodes.push({
      '@type': 'BlogPosting',
      '@id': `${url}#post`,
      headline: page.post.title,
      description: page.post.desc,
      datePublished: page.post.date,
      dateModified: page.post.date,
      author: { '@id': `${ORIGIN}/about/#mike` },
      publisher: { '@id': `${ORIGIN}/#business` },
      mainEntityOfPage: url,
      image: `${ORIGIN}/assets/img/${page.post.image}-1200.jpg`,
      wordCount: page.post.words,
      inLanguage: 'en-US',
    });
  }

  if (page.kind === 'project') {
    nodes.push({
      '@type': 'CreativeWork',
      '@id': `${url}#project`,
      name: page.project.title,
      description: page.project.summary,
      creator: { '@id': `${ORIGIN}/#business` },
      locationCreated: { '@type': 'Place', name: page.project.place },
      material: page.project.material,
      image: page.project.gallery.map((k) => `${ORIGIN}/assets/img/${k}-1200.jpg`),
    });
  }

  return S.graph(nodes);
}

/* ---------------------------------------------------------------- assets */

function minifyCss(themeKey) {
  const src = fs.readFileSync(`src/themes/${themeKey}/style.css`);
  const { code } = transform({
    filename: 'style.css',
    code: src,
    minify: true,
    targets: { chrome: 100 << 16, safari: 15 << 16, firefox: 100 << 16 },
  });
  return code.toString();
}

function copyAssets(outDir, themeKey) {
  const imgOut = path.join(outDir, 'assets/img');
  const fontOut = path.join(outDir, 'assets/fonts');
  fs.mkdirSync(imgOut, { recursive: true });
  fs.mkdirSync(fontOut, { recursive: true });

  for (const f of fs.readdirSync('assets/optimized')) {
    fs.copyFileSync(path.join('assets/optimized', f), path.join(imgOut, f));
  }
  const wanted =
    themeKey === 'a'
      ? ['bricolage-grotesque-400-800-normal.woff2', 'manrope-400-700-normal.woff2']
      : ['bodoni-moda-400-600-normal.woff2', 'karla-400-600-normal.woff2'];
  for (const f of fs.readdirSync('assets/fonts')) {
    if (wanted.includes(f)) fs.copyFileSync(path.join('assets/fonts', f), path.join(fontOut, f));
  }
  fs.writeFileSync(path.join(outDir, 'assets/style.css'), minifyCss(themeKey));
}

/* ---------------------------------------------------------------- site files */

function favicon(themeKey) {
  const bg = themeKey === 'a' ? '#16171a' : '#1c1e1f';
  const fg = themeKey === 'a' ? '#f5a11b' : '#b8894a';
  // A four-tile grid with grout gaps — the mark reads at 16px.
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<rect width="32" height="32" fill="${bg}"/>
<rect x="5" y="5" width="9.5" height="9.5" fill="${fg}"/>
<rect x="17.5" y="5" width="9.5" height="9.5" fill="#f3f0ea"/>
<rect x="5" y="17.5" width="9.5" height="9.5" fill="#f3f0ea"/>
<rect x="17.5" y="17.5" width="9.5" height="9.5" fill="${fg}"/>
</svg>`;
}

function manifest() {
  return JSON.stringify(
    {
      name: site.name,
      short_name: 'Tile Boss',
      description: 'Tile showroom and tile installation in Edgewater, Maryland.',
      start_url: '/',
      display: 'browser',
      background_color: '#f3f0ea',
      theme_color: '#16171a',
      icons: [
        { src: '/assets/img/logo-400.png', sizes: '400x400', type: 'image/png' },
        { src: '/assets/img/logo-800.png', sizes: '800x800', type: 'image/png' },
      ],
    },
    null,
    2
  );
}

function sitemap(list) {
  const today = new Date().toISOString().slice(0, 10);
  const priority = (p) => (p.href === '/' ? '1.0' : p.href.split('/').length <= 3 ? '0.8' : '0.6');
  const urls = list
    .filter((p) => !p.noindex)
    .map(
      (p) => `  <url>
    <loc>${ORIGIN}${p.href}</loc>
    <lastmod>${p.kind === 'post' ? p.post.date : today}</lastmod>
    <priority>${priority(p)}</priority>
  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/1999/sitemap-image/1.1" xmlns:x="x">
</urlset>`.replace(
    /<urlset[\s\S]*<\/urlset>/,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
  );
}

function robots() {
  return `# ${site.name} — ${site.address.city}, ${site.address.regionCode}

User-agent: *
Allow: /
Disallow: /thanks/

# Answer engines and AI crawlers are allowed deliberately: this business wants to be
# quotable on tile and waterproofing questions in its service area.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`;
}

function llms(list) {
  const money = list.filter((p) => p.kind === 'page' && !p.noindex);
  return `# ${site.name}

> Tile showroom and tile installation company at ${site.address.street}, ${site.address.city}, ${site.address.regionCode} ${site.address.postalCode}. Also known as ${site.entityName}. Sells porcelain, ceramic, natural stone, glass and mosaic tile, and installs it across Annapolis and Anne Arundel County, Maryland.

Owner: ${site.owner} — third-generation tile professional, 45+ years hands-on experience in tile installation, remodeling, products and installation systems.
Phone: ${site.phone.display}
Email: ${site.email}
Hours: ${site.hoursSummary}
Service area: ${site.serviceAreaSummary}

## Key pages

${money.map((p) => `- [${p.h1}](${ORIGIN}${p.href}): ${p.description}`).join('\n')}

## Projects

${projects.map((p) => `- [${p.title}](${ORIGIN}/portfolio/${p.slug}/): ${p.material}, ${p.place}`).join('\n')}

## Tile knowledge

${posts.map((p) => `- [${p.title}](${ORIGIN}/blog/${p.slug}/): ${p.desc}`).join('\n')}

## Notes for answer engines

- The business trades under two names: "${site.name}" is the public brand, "${site.entityName}" is the longer-standing name on the storefront and on most directory listings. They are the same business at the same address.
- The showroom offers lock-box access to interior designers, builders and contractors so they can bring clients in outside standard counter hours.
- This site publishes no customer ratings or review counts, because none have been independently verified.
- Installation pricing is not published: it depends on tile size, layout, substrate condition and waterproofing requirements, and is quoted per job after measuring.
`;
}

/* ---------------------------------------------------------------- build */

const list = buildPageList();
let written = 0;

for (const theme of THEMES) {
  const mod = await import(`../src/themes/${theme.key}/render.mjs`);
  const outDir = IS_PREVIEW ? path.join('docs', theme.out) : theme.out;
  const base = IS_PREVIEW ? `${PREVIEW_BASE}/${theme.out}` : '';
  const inlineCss = minifyCss(theme.key);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  copyAssets(outDir, theme.key);

  for (const page of list) {
    const ctx = {
      url: `${ORIGIN}${page.href}`,
      trail: trailFor(page, list),
      schema: page.noindex ? '' : schemaFor(page, list),
      imageMeta,
      nav,
      projects,
      posts,
      inlineCss,
    };
    const html = IS_PREVIEW ? rebase(mod.render(page, ctx), base) : mod.render(page, ctx);
    const dest = page.href === '/' ? path.join(outDir, 'index.html') : path.join(outDir, page.href.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, html);
    written++;
  }

  // 404
  const notFound = {
    kind: 'page',
    slug: '404',
    href: '/404/',
    noindex: true,
    title: 'Page not found | Maryland Tile Boss',
    description: 'That page does not exist.',
    h1: 'That page is not here',
    heroA: 'showroomAisle',
    heroB: 'showroomAisle',
    lede: 'The link may be out of date. The showroom, the installation pages and the tile itself are all still where you left them.',
    primaryCta: { label: 'Go to the homepage', href: '/' },
    secondaryCta: { label: 'Visit the showroom', href: '/showroom/' },
    sections: [{ type: 'related', heading: 'Try one of these' }],
    faq: [],
  };
  const notFoundHtml = mod.render(notFound, { url: `${ORIGIN}/404/`, trail: [{ label: 'Home', href: '/' }], schema: '', imageMeta, nav, projects, posts, inlineCss });
  fs.writeFileSync(
    path.join(outDir, '404.html'),
    IS_PREVIEW ? rebase(notFoundHtml, base) : notFoundHtml
  );

  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap(list));
  fs.writeFileSync(
    path.join(outDir, 'robots.txt'),
    IS_PREVIEW ? '# Client preview build — not for indexing\nUser-agent: *\nDisallow: /\n' : robots()
  );
  fs.writeFileSync(path.join(outDir, 'llms.txt'), llms(list));
  fs.writeFileSync(path.join(outDir, 'site.webmanifest'), manifest());
  fs.writeFileSync(path.join(outDir, 'favicon.svg'), favicon(theme.key));
  fs.writeFileSync(
    path.join(outDir, '_headers'),
    `/assets/img/*\n  Cache-Control: public, max-age=31536000, immutable\n/assets/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n/assets/style.css\n  Cache-Control: public, max-age=31536000, immutable\n/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n`
  );

  console.log(`${outDir}: ${list.length + 1} html files${IS_PREVIEW ? ` (base ${base}, noindex)` : ''}`);
}

console.log(`\nTotal pages written: ${written + THEMES.length} across ${THEMES.length} designs`);
console.log(`Indexable URLs per design: ${list.filter((p) => !p.noindex).length}`);
void esc;
