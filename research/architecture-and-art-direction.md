# Information Architecture + Art Direction

Decisions locked with client 2026-09-04: **Brand = The Maryland Tile Boss** (Digitile International = legacy/alternate name, preserved in schema + footer for citation equity). **Positioning = commercial first** — showroom visits, installation quotes, trade program.

---

## 1. Strategic foundation

### What we can honestly claim (all verified from live site data)
| Claim | Source |
|---|---|
| Third-generation tile professional | About block "Meet The Boss" |
| 45+ years hands-on experience | About block, repeated 3× |
| "Over 40 years in the Trade" | Site amenity tag |
| "Largest Selection under one roof" | Site amenity tag |
| Family-owned | Site amenity tag |
| Free consultation | Site amenity tag |
| Lock-box access showroom for Designers, Builders, Contractors | About block "exclusive showroom", verbatim |
| Cash App / Venmo / Zelle / debit + credit accepted | Site amenity tags |
| Showroom at 14 Mayo Rd, Edgewater MD 21037, Mon–Sat 10–4 | LocalBusiness JSON-LD + payload |
| Porcelain, ceramic, glass, stone, mosaic | Service + product copy |
| Real projects: Bowie, Dunkirk, Two Rivers, bathroom, stone | Portfolio, 23 real photos |

### What we must NOT claim
- ❌ No `AggregateRating` schema — the only verified review is a single negative Yelp review.
- ❌ No fabricated project counts, awards, years-in-business beyond "45 years / third generation".
- ❌ Wedi Pro Certified / Schluter-trained / "since 2000" / "25+ vendors" appeared only in third-party search summaries — **flagged TODO-VERIFY**, not published until the client confirms.
- ❌ No countdown timers, fake scarcity, fake testimonials.

### The competitive wedge (from live SERP research)
1. **Nobody owns Edgewater.** Zero competitors have an Edgewater tile page.
2. **Nobody has a real showroom page.** Every competitor is either a contractor with no showroom or a retailer with a thin page.
3. **Nobody serves the trade.** The lock-box designer/builder/contractor access has zero competition in this market.
4. **Backsplash SERP is the weakest** in the market (Angi + national call centers).
5. **Shower waterproofing** is a genuine authority gap — and it is Mike's documented specialty (site FAQ already covers membranes, preformed systems, substrate).
6. **Product schema is used by literally nobody** in this market.

---

## 2. Information architecture

One primary destination per intent. No doorway pages — every location page carries genuinely unique content.

```
/                                   Home — showroom + installation + trade, Edgewater/Annapolis
├── /showroom/                      THE showroom page nobody else has (visit, what to expect, hours, directions)
├── /tile-installation/             Installation hub — process, what's included, who it's for
│   ├── /tile-installation/bathroom/
│   ├── /tile-installation/shower/          ← waterproofing authority page
│   ├── /tile-installation/backsplash/      ← weakest SERP = fastest win
│   └── /tile-installation/floors/
├── /tile/                          Materials hub — how to choose
│   ├── /tile/porcelain/
│   ├── /tile/ceramic/
│   ├── /tile/natural-stone/
│   └── /tile/glass-and-mosaic/
├── /trade/                         Designers, builders, contractors — lock-box access program
├── /annapolis/                     Annapolis service page (unique local content, not a template clone)
├── /portfolio/                     5 real projects, 23 real photos
├── /about/                         Mike, third generation, 45 years — E-E-A-T anchor
├── /faq/                           Real questions, answer-first formatting
├── /contact/                       NAP, map, directions, form
└── /blog/                          Knowledge hub (2 existing posts migrated + roadmap)
```

**Intent → page map (no cannibalization)**

| Intent | Destination |
|---|---|
| tile store / showroom Edgewater + Annapolis | `/` and `/showroom/` |
| tile installation / installer / contractor + city | `/tile-installation/` |
| bathroom tile installation | `/tile-installation/bathroom/` |
| shower tile / waterproofing | `/tile-installation/shower/` |
| backsplash installation | `/tile-installation/backsplash/` |
| porcelain / ceramic / stone / glass tile | `/tile/*` |
| designer / builder / contractor tile source | `/trade/` |
| tile Annapolis | `/annapolis/` |

**Internal linking:** hub-and-spoke. Home → hubs → spokes. Every spoke links up to its hub, laterally to one sibling, and across to the matching material page (e.g. shower install ↔ porcelain). Blog posts link up to money pages with descriptive anchors. No "click here".

---

## 3. Art direction

Both versions are built from the same content and the same performance budget, but they are separately art-directed — different type, palette, grid, motion, and page composition. Neither uses: cream + serif + terracotta, acid-green-on-black, SaaS card kits, ALL-CAPS eyebrows, `01/02/03` markers on non-sequences, middle-dot meta strings, or `→` glued to button text.

### VERSION A — "Trade Authority"
Built out from the brand's real equity: the amber (`#ffa826`) and near-black already in use, plus the vernacular of the trade — jobsite signage, tool brands, spec sheets, grout lines, tile setting grids.

- **Palette**
  - `--amber: #F5A11B` — the brand's own yellow, pulled slightly deeper so it holds on white and passes contrast as a solid
  - `--ink: #16171A` — near-black for type (chosen, not the #0B0B0B default tint)
  - `--slate: #4A5057` — secondary text, drawn from unglazed porcelain body
  - `--bone: #F3F0EA` — warm off-white ground, from unpolished travertine
  - `--grout: #D9D4CB` — rule/divider colour, literally named for what it is
  - `--clay: #8C4A2F` — deep terracotta used *only* in tiny quantities on the materials pages
- **Type** — Two families, clearly distinct: a condensed grotesque with real weight for display (jobsite/signage register), and a humanist sans for body. Display set tight and large; body generous.
- **Layout concept** — A structural tile grid that the page actually obeys: modules snap to a 4-column module with visible grout-line rules between them. Content blocks are sized in tile units (1×1, 2×1, 2×2) so the page reads as a laid-out surface, not stacked cards.
- **Boldness spent on:** the hero — a full-bleed real project photo with the display type set as a hard-edged block over it, and the showroom's actual hours/address treated as signage, not fine print.

```
┌─────────────────────────────────────────────┐
│ [MTB]  Showroom Installation Tile Trade  ☎ │  utility + nav, sticky
├─────────────────────────────────────────────┤
│ ███ REAL PROJECT PHOTO, FULL BLEED ███████ │
│  TILE, SET RIGHT.                           │  display type, hard block
│  Edgewater showroom. 45 years on the job.   │
│  [Visit the showroom] [Get an install quote]│
├──────────┬──────────┬──────────┬───────────┤
│ 45 yrs   │ 3rd gen  │ Mon–Sat  │ Free      │  grout-line rules between
│          │          │ 10–4     │ consult   │  (facts, not decoration)
├──────────┴──────────┴──────────┴───────────┤
│  PORCELAIN │ CERAMIC │  STONE  │  GLASS    │  2×2 material tiles, photo-led
└─────────────────────────────────────────────┘
```

### VERSION B — "Chesapeake Modern"
Dark, architectural, editorial — but grounded in Maryland/Chesapeake material language rather than generic luxury: wet slate, oyster shell, tidewater, weathered dock cedar.

- **Palette**
  - `--graphite: #1C1E1F` — page ground
  - `--slate-deep: #24282A` — raised surfaces
  - `--oyster: #E8E3D9` — primary text, warm not white
  - `--tidewater: #7C8E8A` — muted blue-green, the Chesapeake note, used for structure
  - `--brass: #B8894A` — restrained metallic accent, the only warm hit
  - `--fog: #9AA0A2` — secondary text
- **Type** — A single high-contrast display serif carried at very large sizes for editorial headlines, paired with a quiet neutral sans for UI and body. The serif does the work; nothing else shouts.
- **Layout concept** — Deliberate asymmetry on a 12-column grid: images break the column edge, text columns sit off-centre, and generous vertical rhythm separates chapters. Photography is oversized and full-bleed; the page reads like an interiors magazine feature on a working showroom.
- **Boldness spent on:** one orchestrated hero reveal — the headline resolves as a large image scales in behind it — then near-total restraint everywhere after.

```
┌─────────────────────────────────────────────┐
│  THE MARYLAND TILE BOSS          Menu   ☎  │
├─────────────────────────────────────────────┤
│              ┌────────────────────────────┐ │
│   Forty-five │                            │ │  headline offset left,
│   years of   │   OVERSIZED PROJECT IMAGE  │ │  image breaks the grid
│   getting it │                            │ │
│   right.     └────────────────────────────┘ │
│   [Visit the showroom]                      │
├─────────────────────────────────────────────┤
│                    Tile that survives a     │  asymmetric editorial
│   ┌──────────┐     Chesapeake bathroom.     │  block, text right
│   │  IMAGE   │     Body copy sits in a      │
│   └──────────┘     narrow measure...        │
└─────────────────────────────────────────────┘
```

### Shared quality floor (both versions)
- Mobile-first, tested 320 → 1920.
- `prefers-reduced-motion` fully honoured; every animation has a static end state.
- Motion limited to one orchestrated moment per page + interaction feedback. Transform/opacity only.
- Visible keyboard focus, skip link, semantic landmarks, WCAG 2.2 AA contrast.
- No web fonts beyond two families, WOFF2, subset, `font-display: swap`.
- AVIF + WebP + JPEG fallback, explicit width/height, lazy below the fold, one intentional LCP preload.
- Zero JS frameworks. Vanilla, progressive enhancement, no hydration.
