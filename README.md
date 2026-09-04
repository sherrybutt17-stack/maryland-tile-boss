# Maryland Tile Boss — deliverables

Two complete, independently art-directed website builds for the tile showroom and installation business
at 14 Mayo Rd, Edgewater, MD, plus the research that shaped them.

---

## 1. The two websites

Both are static, dependency-free builds generated from one shared content model. 26 indexable pages each.

```bash
cd version-a && python3 -m http.server 8801    # "Glaze"
cd version-b && python3 -m http.server 8802    # "Chesapeake Modern"
```

| | **Version A — Glaze** | **Version B — Chesapeake Modern** |
|---|---|---|
| Idea | Bright, spacious and contemporary — porcelain ground, oversized headlines, soft-rounded media, one cobalt accent | What the business could look like as a design-trade showroom brand |
| Palette | Glaze cobalt `#1E4FD8`, ink `#101114`, porcelain `#FCFBF9`, chalk `#F2F0EB` | Graphite `#1C1E1F`, oyster `#E8E3D9`, tidewater `#7C8E8A`, brass `#B8894A` |
| Type | Bricolage Grotesque + Manrope (99 KB) | Bodoni Moda + Karla (69 KB) |
| Structure | Floating pill nav, full-bleed rounded hero, bento and swatch grids, generous whitespace | Asymmetric 12-column editorial; images break the column edge; oversized display serif |
| Motion | Staggered section reveals | One orchestrated hero reveal, then restraint |

Neither uses the generic AI-page defaults — no cream-and-terracotta, no SaaS card kit, no all-caps eyebrow
labels, no arrows glued to buttons. Numbered markers appear only where content is genuinely a sequence.

### Page inventory (both builds)

```
/                                    /tile/                        /portfolio/
/showroom/                           /tile/porcelain/              /portfolio/two-rivers-backsplash/
/tile-installation/                  /tile/ceramic/                /portfolio/backsplash-in-bowie/
/tile-installation/bathroom/         /tile/natural-stone/          /portfolio/dunkirk-bathroom/
/tile-installation/shower/           /tile/glass-and-mosaic/       /portfolio/bath-surround/
/tile-installation/backsplash/       /trade/                       /portfolio/stone-fireplace/
/tile-installation/floors/           /annapolis/                   /blog/ + 2 migrated posts
/about/   /faq/   /contact/          + /404, /thanks (noindex)
```

---

## 2. Measured results

Lighthouse 13.4.1, mobile profile, final build:

| | Perf | A11y | Best Practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| A — home | 97 | 100 | 100 | 100 | 2.6 s | 0 |
| A — trade | 98 | 100 | 100 | 100 | 2.3 s | 0 |
| B — home | 99 | 100 | 100 | 100 | 2.2 s | 0 |
| B — trade | 99 | 100 | 100 | 100 | 2.1 s | 0 |

Version A's 2-point gap is its deliberately full-bleed 21:9 hero — a design choice, not a defect.

Automated crawl of all 26 pages on both builds — **zero** broken links, duplicate/over-length titles or
descriptions, heading-order jumps, missing alt text, missing dimensions, generic anchors, sitemap gaps,
invalid JSON-LD, horizontal overflow (320–1920 px), axe-core WCAG violations, or console errors.

The residual performance points are test-server cache/compression headers plus Version A's large hero,
not defects. Both builds ship a `_headers` file that resolves the header side on any real host.

---

## 3. Research and reports

| Document | Contents |
|---|---|
| `source-of-truth/business-data.md` | Every verified fact, extracted from the live site's own data payload |
| `research/competitors.md` | 20 live searches, 8 competitors profiled, gap matrix |
| `research/keywords.md` | Keyword universe from live autocomplete, intent classification, keyword-to-page map |
| `research/local-seo.md` | NAP/citation audit, GBP recommendations, entity-fragmentation analysis |
| `research/architecture-and-art-direction.md` | Information architecture and both design systems |
| `research/technical-seo-and-performance.md` | Measured audit results and every defect found and fixed |
| `research/cro-aeo-geo-report.md` | Conversion architecture, answer-engine formatting, AI-search readiness |
| `research/content-roadmap.md` | 24 topics scored on Commercial Value × Ranking Opportunity × Relevance |
| `research/backlink-plan.md` | 26 sequenced off-page actions for the first 90 days |
| `CLAUDE.md` | Working notes, hard rules, commands, open questions |

---

## 4. The five findings that matter most

1. **The business is fragmented across up to six names and seven domains.** Google's map entity is
   "Digitile International Showroom & Design Center" on (443) 871-3876. A live search for "Maryland Tile
   Boss Edgewater" returns nothing. The brand is new; the equity is all under the old name. Both builds
   resolve this — Maryland Tile Boss is the visible brand, Digitile International is the schema/NAP entity.

2. **`digitilestore.com` is a dead parking page that still ranks and still receives clicks.** It returns
   HTTP 200, not 404, so Google keeps it indexed — and it is the website link on the Yelp listing. Houzz and
   HomeAdvisor point at `digi-tile.com`, which 404s. Recovering and redirecting these is the single
   highest-ROI action available and costs almost nothing.

3. **Nobody owns Edgewater.** Zero competitors have an Edgewater tile page. The #1–2 results for
   "tile store Edgewater MD" are American Olean *dealer-locator* pages listing two competitors — the client
   is not on them. In this market, manufacturer locator listings beat editorial links.

4. **Two commercial gaps are wide open.** Backsplash queries are served entirely by doorway farms and
   national call centres, and no Anne Arundel contractor claims shower waterproofing — which happens to be
   Mike's documented specialism.

5. **There is effectively no review base, and the one verified review is negative.** That constrains
   everything: no rating schema, no social-proof-led design, and review acquisition is a higher priority
   than any content work.

---

## 5. Before this goes live

1. Confirm **(443) 871-3876** as the single public number; retire the other publicly.
2. Resolve the opening-hours conflict (site, Yelp and a cached version disagree three ways).
3. Confirm or drop the unverified claims — Wedi/Schluter certification, "since 2000", "25+ vendors", and
   the **MHIC licence number**, which Maryland law requires on home-improvement marketing.
4. Clarify the relationship to "Nash & Sons dba Digi-tile" and the Crofton listings before citation cleanup.
5. Wire a form endpoint if not deploying to Netlify (`data-netlify="true"` already present).
6. Claim the existing Google Business Profile — do not create a new one.

---

*No keyword volume, CPC, difficulty figure, review count, rating, price or credential in any of these
documents is estimated or invented. Where data could not be verified, it is labelled as unverified.*
