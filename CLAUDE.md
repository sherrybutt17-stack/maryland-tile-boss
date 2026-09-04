# Maryland Tile Boss — project plan & working notes

Rebuild of the web presence for a tile showroom + tile installation business in Edgewater, Maryland.
Two complete, independently art-directed static builds from one shared content model.

---

## The business (verified — do not contradict)

| | |
|---|---|
| Public brand | **The Maryland Tile Boss** ("the Tile Authority in MD") |
| Citation / map entity | **Digitile International Showroom & Design Center** — the name on the storefront and on ~11 citations |
| Owner | Michael DiGirolamo — third-generation tile professional, 45+ years |
| Address | 14 Mayo Rd, Edgewater, MD 21037 (38.9402169, -76.5622115) |
| Phone (public primary) | (443) 871-3876 |
| Alternate phone (in CMS) | (443) 871-0971 |
| Email | digi-tile@comcast.net |
| Hours | Mon–Sat 10:00–16:00, closed Sunday |
| Team size | 2–3 people |
| Differentiator | Lock-box showroom access for designers, builders and contractors |

Source of truth: `source-of-truth/business-data.md`, extracted from the live site's own
`window.__PRELOAD_DATA__` payload on 2026-09-04. `src/content/site.js` is the machine-readable version.

### Decisions made with the client
1. **Brand = Maryland Tile Boss** for all visible branding and voice.
2. **Entity = Digitile International** in schema, NAP and footer — rebranding the citation layer to a name
   with one citation would restart the local entity from zero.
3. **Commercial-first positioning** — showroom visits, installation quotes and the trade programme lead.
   Education content supports those money pages rather than being the main event.

---

## Hard rules for this project

- **Never publish an unverifiable claim.** Everything on the site traces to `source-of-truth/business-data.md`.
  Unconfirmed items live in `TODO_VERIFY` in `src/content/site.js` and are never rendered.
- **No `AggregateRating` or `Review` schema.** The only verified public review is a single negative Yelp
  review. Rating markup here would be fabrication.
- **No `Product`/`Offer` schema** until real per-product pricing and availability exist.
- **No invented pricing.** Installation is quoted per job; the site explains *why* rather than inventing a rate.
- **No fake urgency, testimonials, awards, project counts or certifications.**
- **Do not write "our team of designers".** It is a 2–3 person business. Working directly with Mike is the
  honest and stronger hook.
- **Every image must be visually reviewed before use.** The source library contained stock photography and
  AI mockups mixed in with genuine client work. See the exclusion list at the top of `src/content/images.js`.

---

## Architecture

```
src/content/    site.js · pages.js · materials.js · images.js · blog.js   ← all content, design-agnostic
src/lib/        html.mjs (picture/preload helpers) · schema.mjs (JSON-LD)
src/themes/a/   "Trade Authority"    — Maryland flag palette, Archivo Black, tile-grid layout
src/themes/b/   "Chesapeake Modern"  — graphite/oyster/brass, Bodoni Moda, editorial asymmetry
scripts/        build.mjs · images.mjs · fonts.mjs · qa.mjs · shots.mjs · crawl.py
version-a/      built site (26 indexable URLs + 404)
version-b/      built site (same content, different art direction)
```

Both themes consume the same content objects and render completely different markup. Adding a page means
adding one object to `pages.js` — both builds pick it up.

### Commands
```bash
npm run images   # regenerate AVIF/WebP/JPEG variants  (slow — AVIF encoding)
npm run site     # build both versions
npm run build    # images + build
node scripts/fonts.mjs   # re-fetch self-hosted variable fonts
node scripts/qa.mjs      # crawl + SEO + overflow + axe across both builds
node scripts/shots.mjs "/,/trade/" "1440,390"   # screenshots
```
Serve locally: `python3 -m http.server 8801` in `version-a/`, `8802` in `version-b/`.

---

## Quality bar (measured, not asserted)

Both builds, verified by `scripts/qa.mjs` and Lighthouse 13.4.1:

- Mobile Lighthouse **99–100** performance / **100** accessibility / **100** best practices / **100** SEO
- **CLS 0** on every page; LCP 1.9–2.2 s mobile
- **0** broken links, duplicate or over-length titles/descriptions, heading jumps, missing alt text
- **0** axe-core violations (WCAG 2.0/2.1/2.2 A + AA)
- **0** horizontal overflow across 320–1920 px
- **0** console errors or failed requests

Regressions to watch for — each of these was a real bug caught in QA:
- `overflow-wrap: break-word` does **not** shrink grid tracks; use `anywhere` plus `min-width: 0`.
- HTML `width`/`height` attributes are presentational hints that override CSS crops — keep the global
  `img { height: auto }` and the `picture.ar` wrapper.
- Scroll-reveal must stay gated behind the `.js` class or content disappears without JavaScript.

---

## Open items for the client

Listed in `TODO_VERIFY` in `src/content/site.js`:
1. Confirm **(443) 871-3876** as the single public number and retire the other publicly.
2. Confirm correct opening hours — the site, Yelp and a cached version disagree three ways.
3. Confirm or drop: Wedi Pro / Schluter certification, "since 2000", "25+ vendors", MHIC licence number
   (Maryland law requires the MHIC number on home-improvement marketing).
4. Clarify the relationship to **"Nash & Sons dba Digi-tile"** and the Crofton MD 21114 listings before
   any citation cleanup.
5. Recover or redirect the dead domains — `digitilestore.com` returns a 200 parking stub that still ranks.
6. Wire a form endpoint if not deploying to Netlify.

---

## Research on disk

| File | What it is |
|---|---|
| `source-of-truth/business-data.md` | Every verified fact, extracted from the live site |
| `research/competitors.md` | Live SERP research, 8 competitors, gap matrix |
| `research/keywords.md` | Keyword universe, intent classification, keyword-to-page map |
| `research/local-seo.md` | NAP/citation audit, GBP recommendations, entity fragmentation |
| `research/architecture-and-art-direction.md` | IA and the two design systems |
| `research/technical-seo-and-performance.md` | Measured audit results and every defect fixed |
| `research/cro-aeo-geo-report.md` | Conversion design, answer-engine and AI-search work |
| `research/content-roadmap.md` | Prioritised content plan |
| `research/backlink-plan.md` | Off-page opportunities |

**No keyword volume, CPC or difficulty figures anywhere are estimated.** Where third-party tooling was
unavailable, rows are labelled "SERP-validated opportunity — exact third-party volume unavailable".
