# Technical SEO & Performance — measured results

All figures below were produced by running the tools against the actual builds. Nothing here is estimated.

---

## 1. Lighthouse

Run with Lighthouse 13.4.1, headless Chrome, against both builds served locally.

### Mobile (the profile that matters for local search)

| Page | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| A — home | 99 | 100 | 100 | 100 | 2.2 s | 0 | 10 ms |
| A — shower | 100 | 100 | 100 | 100 | 1.9 s | 0 | 0 ms |
| A — trade | 100 | 100 | 100 | 100 | 1.9 s | 0 | 30 ms |
| B — home | 99 | 100 | 100 | 100 | 2.1 s | 0 | 0 ms |
| B — shower | 99 | 100 | 100 | 100 | 2.0 s | 0 | 0 ms |
| B — trade | 99 | 100 | 100 | 100 | 2.0 s | 0 | 40 ms |

### Desktop (first pass, before the final round of fixes)

| Page | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| A — home | 98 | 100 | 100 | 100 | 0.5 s | 0 |
| A — shower | 100 | 95 → **100** | 100 | 100 | 0.4 s | 0 |
| B — home | 96 | 100 | 100 | 100 | 0.5 s | 0 |
| B — shower | 100 | 100 | 100 | 100 | 0.4 s | 0 |

**CLS is 0 on every page measured.** That is a direct result of every image carrying explicit dimensions and every cropped image having its aspect ratio reserved on the `<picture>` wrapper.

### Why the remaining 1–4 points are not code defects

Three Lighthouse "insights" persist locally and are **artefacts of the test server**, not the sites:

1. **`cache-insight` (~220 KiB)** — Python's `http.server` sends no `Cache-Control` headers. Both builds ship a `_headers` file setting `max-age=31536000, immutable` on images, fonts and CSS. On Netlify/Cloudflare/Vercel this resolves immediately.
2. **`document-latency-insight` (~22 KiB)** — the test server does not gzip or brotli. Any real host compresses HTML.
3. **`render-blocking-insight`** — resolved by inlining the CSS (see below), but Lighthouse still reports the audit entry.

The honest position: **performance is 99–100 on mobile and the residual is hosting configuration**, which is why the `_headers` file exists in both builds.

---

## 2. What was actually done for performance

| Decision | Effect |
|---|---|
| Zero JavaScript frameworks. ~1.5 KB of inline vanilla JS total. | TBT 0–40 ms |
| CSS minified with Lightning CSS and inlined (~15 KB raw, ~4 KB gzipped) | Removes a render-blocking round trip |
| Self-hosted variable WOFF2 fonts — A: 44 KB, B: 69 KB | No third-party connection; each theme ships only its own faces |
| AVIF + WebP + JPEG/PNG, four responsive widths per image | Modern format negotiation, correct size per viewport |
| Brand marks generated at 64/128/256/400 px instead of full size | Killed the "oversized logo" image-delivery warning |
| Explicit `width`/`height` on every image; aspect ratio on the crop wrapper | CLS 0 |
| Exactly one preloaded LCP image per page, with matching `imagesrcset`/`imagesizes` | LCP 1.9–2.2 s mobile |
| Everything below the fold lazy-loaded; map iframe lazy | Small initial payload |
| Motion limited to transform/opacity, one orchestrated moment per page | No layout thrash |

**Image pipeline output:** 52 curated source images → 381 optimised files.

---

## 3. Crawl and structure QA

A custom Playwright crawler walks every internal link on both builds and validates structure. Final result:

| Check | Version A | Version B |
|---|---|---|
| Pages crawled | 26 | 26 |
| Broken links / non-200 | **0** | **0** |
| Missing or duplicate titles | **0** | **0** |
| Missing or duplicate meta descriptions | **0** | **0** |
| Titles over 62 characters | **0** | **0** |
| Descriptions outside 70–165 characters | **0** | **0** |
| Pages without exactly one `<h1>` | **0** | **0** |
| Heading-level jumps | **0** | **0** |
| Missing canonical | **0** | **0** |
| Images without `alt` | **0** | **0** |
| Images without dimensions | **0** | **0** |
| Empty or generic anchors ("click here") | **0** | **0** |
| Pages missing from sitemap | **0** | **0** |
| Sitemap URLs not reachable | **0** | **0** |
| Invalid JSON-LD | **0** | **0** |
| Horizontal overflow across 9 widths (320–1920) | **0** | **0** |
| axe-core violations (WCAG 2.0/2.1/2.2 A + AA + best-practice) | **0** | **0** |
| Console errors / failed requests | **0** | **0** |

### Defects that were found and fixed during QA

These are recorded because they were real, and because the audit is what caught them:

1. **Four 404s.** `/tile/porcelain/`, `/tile/ceramic/`, `/tile/natural-stone/`, `/tile/glass-and-mosaic/` were linked from the homepage and materials hub but had never been written. Four full material pages were authored.
2. **Content hidden without JavaScript.** Scroll-reveal animation set `opacity: 0` unconditionally, so a JS failure meant blank sections. Gated behind a `.js` class added by an inline script, so content is visible by default.
3. **Card grids rendering ragged.** The HTML `width`/`height` attributes act as presentational hints and were overriding the CSS crops, so cards inherited native photo ratios. Fixed with a global `img { height: auto }` and by moving the aspect ratio onto a `picture.ar` crop wrapper.
4. **Colour contrast failure.** `.tile-more` at `#b46f05` on near-white measured 3.99:1, below the 4.5:1 AA threshold. Changed to `#8f5703` — 5.89:1 on paper, 5.23:1 on the bone ground.
5. **Content outside landmarks.** The utility bar sat outside any landmark region. Moved inside `<header>`.
6. **Heading-order jumps.** Portfolio and blog index cards used `h3` directly beneath the `h1`. Promoted to `h2`.
7. **Horizontal overflow at 320–414 px.** `overflow-wrap: break-word` does not affect grid track sizing — only `anywhere` does. Changed, and `min-width: 0` added to hero grid children.
8. **Over-long titles and descriptions** on auto-generated project and blog pages. Explicit meta fields added per project.
9. **A stock photograph in the trade section.** Image `13990505` was staged stock of a generic showroom, not this business. Removed. Its replacements (`13990725`, `13990532`, `13990530`) are genuine photographs of contractors in the real Edgewater showroom.

---

## 4. Indexation and crawl control

- **`sitemap.xml`** — 26 canonical, indexable URLs. `/thanks/` and `/404` excluded. `lastmod` uses the real publication date for posts.
- **`robots.txt`** — allows all major search crawlers and explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended and Applebot-Extended. Only `/thanks/` is disallowed.
- **Canonicals** — self-referencing absolute URL on every page.
- **URLs** — lowercase, hyphenated, trailing slash, consistent throughout. Directory structure mirrors topical hierarchy.
- **404** — a real styled `404.html` with routes back into the site.
- **`_headers`** — long-lived immutable caching for static assets, plus `X-Content-Type-Options` and `Referrer-Policy`.
- **No orphan pages** — every page is reachable from navigation or in-body links.

---

## 5. Structured data

Single `@graph` per page with `@id`-linked nodes, so the entity resolves as one business:

`HomeAndConstructionBusiness` + `Store` · `Person` (Mike) · `WebSite` · `WebPage` · `BreadcrumbList` · `Service` (installation pages) · `FAQPage` · `BlogPosting` · `CreativeWork` (projects)

All JSON-LD parses cleanly on all 26 pages of both builds (validated in the crawler).

Corrections made against the live site's existing markup:
- `addressRegion` — `"Maryland"` → **`"MD"`**
- `addressCountry` — `"UNITED STATES"` → **`"US"`**
- `telephone` — **added** (the live site's JSON-LD omits it entirely)
- `openingHours` — non-standard `"Mo 10:00:00-16:00:00"` → proper `OpeningHoursSpecification`

**Deliberately omitted:** `AggregateRating`, `Review` (no verified review base — the only verified review is a single negative one), and `Product`/`Offer` (no published per-product pricing or availability). Adding either would be fabrication.

---

## 6. Known limitations — stated rather than hidden

1. **Field data is unavailable.** All Core Web Vitals figures here are lab measurements. CrUX field data requires the site to be live with sufficient traffic. INP in particular cannot be meaningfully measured in lab conditions — the 0–40 ms TBT figures are a good proxy but not the same metric.
2. **The contact form needs an endpoint.** It works as-is on Netlify (`data-netlify="true"`). On any other host, one integration step is required. Phone and email are prominent on the same page so the page still converts without it.
3. **The Google Maps embed is third-party.** It is lazy-loaded and below the fold, so it does not affect LCP, but it is the one external request on `/contact/`.
4. **Local-pack composition was not verifiable** with the available tooling. It should be checked from a browser geolocated to 21037.
