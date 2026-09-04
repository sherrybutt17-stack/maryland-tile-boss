# Keyword Research — The Maryland Tile Boss (Digitile International)

**Business:** Tile showroom + tile installation, 14 Mayo Rd, Edgewater, MD 21037
**Research date:** 2026-09-04
**Researcher note:** All expansion below is derived from **live data pulled on the research date**, not from memory.

---

## 0. Method, provenance, and data honesty

### What was actually run

| Source | Method | What it gave us |
|---|---|---|
| Google Autocomplete (`suggestqueries.google.com`, `client=firefox`, `gl=us`) | 60+ seed prefixes queried live | Real, current query completions. Every row tagged **[AC]** below came back verbatim from this API. |
| Google/Bing web search (live SERP retrieval) | 16 head-term queries run live | Ranking page types, competitor set, directory dominance, competitor gaps |
| Client source-of-truth | `source-of-truth/business-data.md` (crawled from live site payload) | Services actually offered, verified NAP, real portfolio projects |

### What was NOT available and is therefore NOT stated

No third-party volume tool (Ahrefs / Semrush / Keyword Planner / DataForSEO) was authenticated in this environment. **Therefore this document contains zero search-volume numbers, zero CPC numbers, and zero keyword-difficulty scores.** Any row where a number would normally go is labeled exactly:

> **SERP-validated opportunity — exact third-party volume unavailable**

That label is applied at the cluster level (in §2 headers) rather than repeated on all ~300 rows, purely for readability. It applies to **every keyword in this document without exception.** If someone later pastes numbers into this file, they must come from a tool, not from an estimate.

### Provenance tags used in the tables

- **[AC]** — returned verbatim by Google Autocomplete on 2026-09-04
- **[SERP]** — the term or a direct variant was run as a live search; SERP composition recorded in §1
- **[DERIVED]** — a systematic geo/modifier permutation of an [AC] or [SERP] term. Real-language pattern, but the exact string was not independently observed. Treat as lower confidence.
- **[SEED]** — supplied by the client brief

### Intent taxonomy

| Code | Meaning | What the searcher wants | Business value |
|---|---|---|---|
| **BOFU** | Transactional / ready to act | To hire, to buy, to visit, to get a price | **Highest — this is the priority** |
| **COMM** | Commercial investigation | To compare options, shortlist vendors, sanity-check price | High — feeds BOFU |
| **INFO** | Informational | To learn, before they are in-market | Low direct, useful for authority + AI citation |
| **NAV** | Navigational | This specific business by name | Critical to defend, not to grow |

---

## 1. Live SERP observations (run 2026-09-04)

> **Methodological caveat, stated plainly:** the search interface available here returns organic result sets. It does **not** render the map pack, the ads block, or the People-Also-Ask module as separate visual elements. So "local pack present" below is an **inference from query class and result composition** (directory aggregators + GBP-fed listings + "near me" completions), **not a visually confirmed observation.** Before spending money on any of these, confirm pack presence manually in an incognito browser geolocated to 21037. Everything else in this section — the actual URLs and page types ranking — was directly observed.

### 1.1 `tile store Edgewater MD` — **Opportunity: HIGH**

**Observed page types ranking:** manufacturer dealer-locator pages (`locations.americanolean.com`), franchise flooring chains (`carpetone.com`), Yelp category page, **the client's own legacy site (`digitilestore.com`) ranking twice**, the client's UENI microsite (`digitile-international.ueniweb.com`), a tile-brand aggregator (`landoftile.com`), and a scraped business directory (`cmac.ws`).

**Why HIGH:**
- The SERP is **weak**. There is no dominant, well-optimized local competitor page. The strongest results are national dealer-locators and directories — pages with no local content depth.
- The client **already ranks** on this term with a legacy UENI microsite and an old domain. That is proof of entity relevance that a proper page can inherit and multiply.
- Edgewater is a small enough market that a single genuinely good local page can own it.

**Caveat:** the client currently ranks with the *wrong* properties (legacy brand, legacy domains). This is a consolidation job, not a from-scratch job. See §6.3.

### 1.2 `tile showroom Annapolis MD` — **Opportunity: MEDIUM**

**Observed page types:** Yelp category page, then a genuinely strong set of **real local competitor showroom sites** — `columbiatileandmarble.com`, `cst-studio.com` (Compass Studio Tile, "oldest flooring company in Annapolis," 40+ years), `inhomestone.com` (two showrooms + warehouse in the Annapolis Design District), `annapoliscarpetandfloors.com`, `moderncarpetoneannapolis.com`, plus `landoftile.com` aggregator.

**Why MEDIUM not High:** this is the one query class where established, well-resourced local competitors hold real estate with dedicated showroom pages. Compass Stone & Tile Studio advertises "Best Stone and Tile Showroom in Annapolis 2013–2019." Winning here needs a genuinely differentiated showroom page, not a template.

**Why not Low:** the ranking set is mostly *flooring* stores that happen to sell tile. A tile-*specialist* showroom page — 25+ vendors, tile only — is a real differentiator that none of the incumbents lead with.

### 1.3 `tile installation Annapolis MD` — **Opportunity: MEDIUM**

**Observed page types:** a mix of real contractor service pages (`usaprofloors.com/tile-installation-annapolis-md` — explicitly geo-targeted and claiming "180+ 5-star reviews"; `kboutfitters.net`; `brothersflooringservices.com`; `inhomestone.com`) **plus lead-gen directories** (`pro.porch.com`) **plus templated multi-city handyman networks** (`hambletonhandyman.com/capital-region-maryland/anne-arundel-county/annapolis/...`).

**Read:** the top competitor (USA Pro Floors) has done exactly the right thing — one geo-specific service page per city, with review proof. They are beatable on **specialist depth** (they are a flooring contractor; the client is a third-generation tile-only installer with a showroom) but not on volume of thin pages.

**Why MEDIUM:** genuine competition exists, but nobody in the top set combines *showroom + installer*. That combination is the wedge.

### 1.4 `tile contractor Anne Arundel County MD` — **Opportunity: LOW-MEDIUM**

**Observed page types:** **directory-dominated.** Two separate Yelp category pages, plus a run of templated county-page networks — `tilerepairservicepros.com/tile-repair-service-anne-arundel-county-md`, `gettileservice.com/tile-service-anne-arundel-county-md`, `annapolis.premier-homepros.com/vinyl-tile-floor-installation-anne-arundel-county-md`. Only `usaprofloors.com` shows as a real local business.

**Why LOW-MEDIUM:** county-level queries are where the doorway-page spam networks live. Competing means out-spamming spam. **Recommendation: do not build a county page as a ranking target.** Serve the county-level need through the service-area section of the Annapolis and Edgewater pages instead. See §6.2.

### 1.5 `backsplash installation Annapolis MD` — **Opportunity: HIGH**

**Observed page types:** this SERP is **almost entirely doorway-page networks** — `strivebacksplashinstallation.com/backsplash-installation/md/annapolis/backsplash-installation`, `keybacksplashinstallation.com/.../md/annapolis/...`, `annapolis-md.midlandhomeremodel.com`, `annapolis-junction-md.zandjremodeling.com`, `annapolis-md.hqkitchenremodel.com`, plus Angi and a Mr. Handyman blog post.

**Why HIGH:** there is **not one genuine, photographed, locally-credible backsplash page in the ranking set.** Every organic result is either an aggregator or a subdomain from a national template farm. The client has a real, photographed backsplash portfolio (Two Rivers Backsplash — 6 images; Backsplash in Bowie — 3 images). A single real page with real local project photos, real pricing ranges, and a real installer bio should outperform templated content here.

**This is the single best content-quality arbitrage on the list.**

### 1.6 `shower tile installation Annapolis MD cost` — **Opportunity: HIGH**

**Observed page types:** cost-calculator aggregators (`handoff.ai`, `manta.com`), lead-gen (`homeguide.com`), and — notably — **local remodelers who publish real numbers** (`prg.contractors/blog/bathroom-remodel-cost-maryland-2026`, which ranks with an explicit Maryland cost guide).

**Observed live figures in the ranking set (third-party claims, not the client's):** custom tile shower with waterproofing $6,500–$12,000 installed in Maryland; Annapolis tile install $22.50–$44.25/SF; shower surround replacement $1,200–$3,500.

**Why HIGH:** cost intent is the highest-converting non-branded intent in home services, and the ranking set proves Google will rank a *local contractor's own cost guide* here (PRG). The client can publish an honest, ranged, Maryland-specific cost page and capture qualified quote requests.

**Hard constraint:** the client must publish **their own** ranges, not repeat the numbers above. See §6.1.

### 1.7 `bathroom tile installer Edgewater MD 21037` — **Opportunity: HIGH**

**Observed page types:** Nextdoor page, Yellow Pages category, **the client's own Yelp listing (`yelp.com/biz/digitile-international-edgewater`)**, a doorway subdomain (`edgewater-md.finelineshowroom.com`), and local remodelers (`hewardhomeimprovement.com`, plus two more template subdomains: `edgewater-md.bathroomremodeleriepa.com`, `edgewater-md.whiterockremodeling.com`).

**Why HIGH:** hyper-local, hyper-commercial, and **no real competitor has a dedicated Edgewater bathroom tile page.** The client is physically in Edgewater. This should be a near-lock.

### 1.8 `tile design center Maryland showroom appointment` — **Opportunity: MEDIUM (and a red flag surfaced)**

**Observed page types:** real showroom sites — `architessa.com` (Rockville + Baltimore), `tilecenters.com` (Gaithersburg), `atlastile.com` (Arnold — closest geographic competitor), `tileandstonecenter.com` (Easton), `mosaictileco.com` (Baltimore).

**Red flag surfaced by this search:** a result for **`digitileinc.com` — "Showroom & Design Center | Crofton, MD | Digi-Tile"** listing phone **(443) 871-0971**, which is the *same phone number* as the Edgewater business. The domain no longer resolves (DNS failure on fetch) but is still indexed. See §6.3 — this is a serious entity-fragmentation problem that will suppress local rankings until resolved.

### 1.9 Competitor gap discovered

`The Annapolis Tile Center`, formerly at **178 Mayo Rd, Edgewater** — the same street as the client — shows as **CLOSED** on Yellow Pages while still appearing on Yelp, MerchantCircle, LocalPages, and Yabsta. Searchers looking for it are landing on stale listings.

**Actionable:** this is a real, capturable demand stream. A short, honest page or GBP post addressing "looking for the Annapolis Tile Center on Mayo Rd?" is legitimate. **Do not** imply acquisition, succession, or any relationship that does not exist. See §6.1.

---

## 2. Keyword universe

> **All rows in §2: SERP-validated opportunity — exact third-party volume unavailable.**

Priority column: **P1** = build first, directly revenue-producing. **P2** = build in phase 2. **P3** = opportunistic / supporting only.

### 2.1 Cluster A — Store & showroom, Edgewater (core local entity)

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| tile store Edgewater MD | BOFU | P1 | [SEED][SERP] |
| tile showroom Edgewater MD | BOFU | P1 | [SEED] |
| tile store Edgewater Maryland | BOFU | P1 | [DERIVED] |
| tile shop Edgewater MD | BOFU | P2 | [DERIVED] |
| tile store 21037 | BOFU | P2 | [DERIVED] |
| tile store Mayo Rd Edgewater | BOFU | P3 | [SERP] |
| tile supplier Edgewater MD | BOFU | P2 | [DERIVED] |
| tile store near me | BOFU | P1 | [SEED][AC] |
| tile stores near me | BOFU | P1 | [AC] |
| tile stores near me now | BOFU | P2 | [AC] |
| tile stores near me open now | BOFU | P1 | [AC] |
| tile stores near me open today | BOFU | P2 | [AC] |
| tile stores near me open on sunday | BOFU | P3 | [AC] |
| tile stores near me open saturday | BOFU | P1 | [AC] |
| tile store open saturday | BOFU | P2 | [AC] |
| tile store open today near me | BOFU | P2 | [AC] |
| tile stores near me within 20 mi | BOFU | P3 | [AC] |
| tile stores near my location | BOFU | P2 | [AC] |
| tile stores near me backsplash | BOFU | P2 | [AC] |
| tile showroom near me | BOFU | P1 | [SEED][AC] |
| tile store near me now | BOFU | P2 | [AC] |
| tile stores near by | BOFU | P3 | [AC] |

**Note on "open Saturday":** the client is open Mon–Sat 10–4. Most tile trade suppliers are weekday-only or Saturday-morning-only. **Saturday-open is a genuine, substantiable differentiator** and there is live autocomplete demand for it (five separate Saturday/open-now completions). This should be surfaced in title tags, GBP, and schema `openingHoursSpecification` — not buried.

### 2.2 Cluster B — Store & showroom, Annapolis / regional

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| tile store Annapolis MD | BOFU | P1 | [SEED][AC] |
| tile store annapolis | BOFU | P1 | [AC] |
| tile stores near annapolis md | BOFU | P1 | [AC] |
| tile stores annapolis | BOFU | P1 | [AC] |
| annapolis tile stores | BOFU | P1 | [AC] |
| tile shop annapolis | BOFU | P2 | [AC] |
| tile annapolis md | BOFU | P1 | [AC] |
| tile showroom Annapolis MD | BOFU | P1 | [SEED][SERP] |
| tile supplier Annapolis MD | BOFU | P2 | [SEED] |
| tile design center Annapolis MD | COMM | P2 | [SEED][SERP] |
| annapolis tile and stone | COMM | P3 | [AC] |
| luxury tile Annapolis MD | COMM | P2 | [SEED] |
| high end tile showroom Annapolis | COMM | P2 | [DERIVED] |
| tile stores in maryland | COMM | P3 | [AC] |
| tile shop in maryland | COMM | P3 | [AC] |
| tile stores near bowie md | BOFU | P3 | [AC] |
| tile store severna park md | BOFU | P3 | [AC] |
| tile showroom appointment Annapolis | BOFU | P2 | [SERP] |

**Cannibalization warning:** rows in 2.1 and 2.2 are the *same intent* separated only by geo. They must **not** get two competing store pages. See §3 and §6.2.

### 2.3 Cluster C — Installation, general (service head terms)

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| tile installation Annapolis MD | BOFU | P1 | [SEED][SERP] |
| tile installer Annapolis MD | BOFU | P1 | [SEED] |
| tile contractor Annapolis MD | BOFU | P1 | [SEED][SERP] |
| tile installation Edgewater MD | BOFU | P1 | [SEED] |
| tile installer Edgewater MD | BOFU | P1 | [SEED][SERP] |
| tile contractor Edgewater MD | BOFU | P1 | [SEED] |
| tile installation company Annapolis MD | BOFU | P2 | [DERIVED] |
| tile installers near me | BOFU | P1 | [SEED][AC] |
| tile installer near me | BOFU | P1 | [SEED][AC] |
| tile installer near me prices | BOFU | P1 | [AC] |
| tile installers near me cost | BOFU | P1 | [AC] |
| tile installers near me within 5 mi | BOFU | P2 | [AC] |
| tile installers near me within 20 mi | BOFU | P2 | [AC] |
| tile installers near me open now | BOFU | P2 | [AC] |
| tile installers in my area | BOFU | P2 | [AC] |
| tile installation near me | BOFU | P1 | [AC] |
| tile contractor near me | BOFU | P1 | [AC] |
| tile contractors near me | BOFU | P1 | [AC] |
| tile contractor near me within 5 mi | BOFU | P3 | [AC] |
| tile setters near me | BOFU | P2 | [AC] |
| tile laying near me | BOFU | P3 | [AC] |
| ceramic tile installers near me | BOFU | P2 | [AC] |
| who installs tile near me | BOFU | P2 | [AC] |
| who installs tile flooring near me | BOFU | P2 | [AC] |
| tile contractor Anne Arundel County MD | BOFU | P3 ⚠️ | [SERP] |
| tile installer Davidsonville MD | BOFU | P3 ⚠️ | [DERIVED] |
| tile installer Crofton MD | BOFU | P3 ⚠️ | [DERIVED] |
| tile installer Arnold MD | BOFU | P3 ⚠️ | [DERIVED] |
| tile installer Severna Park MD | BOFU | P3 ⚠️ | [DERIVED] |
| tile installer Bowie MD | BOFU | P3 ⚠️ | [DERIVED] |
| tile installer Odenton MD | BOFU | P3 ⚠️ | [DERIVED] |
| tile installer Dunkirk MD | BOFU | P3 ⚠️ | [DERIVED] |

**⚠️ = doorway-page risk. Do not build a separate city page for these. See §6.2.**

### 2.4 Cluster D — Bathroom & shower installation (highest-margin service)

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| bathroom tile installation Annapolis MD | BOFU | P1 | [SEED] |
| bathroom tile installer near me | BOFU | P1 | [SEED][AC] |
| tile installers near me bathroom | BOFU | P1 | [AC] |
| bathroom tile contractors near me | BOFU | P1 | [AC] |
| bathroom tile installation | COMM | P2 | [AC] |
| bathroom tile installation near me | BOFU | P1 | [AC] |
| bathroom tile installation cost | COMM | P1 | [AC] |
| bathroom tile installation labor cost | COMM | P2 | [AC] |
| bathroom tile installation cost per square foot | COMM | P2 | [AC] |
| bathroom tile installation cost calculator | COMM | P3 | [AC] |
| bathroom tile installation process | INFO | P3 | [AC] |
| bathroom tile installation steps | INFO | P3 | [AC] |
| bathroom tile installer Edgewater MD | BOFU | P1 | [SERP] |
| bathroom tile flooring cost | COMM | P3 | [AC] |
| shower tile installation | COMM | P1 | [AC] |
| shower tile installation Annapolis MD | BOFU | P1 | [SEED] |
| shower tile installation near me | BOFU | P1 | [AC] |
| shower tile installers near me | BOFU | P1 | [AC] |
| shower tile installation companies near me | BOFU | P2 | [AC] |
| shower tile installation cost | COMM | P1 | [AC][SERP] |
| shower tile installation cost per square foot | COMM | P1 | [AC] |
| shower tile installation labor cost | COMM | P2 | [AC] |
| shower tile installation cost calculator | COMM | P3 | [AC] |
| shower wall tile installation cost | COMM | P2 | [AC] |
| cost to tile a shower | COMM | P1 | [AC] |
| cost to tile a shower per square foot | COMM | P1 | [AC] |
| cost to tile a shower wall | COMM | P2 | [AC] |
| cost to tile a shower floor | COMM | P2 | [AC] |
| cost to tile a shower surround | COMM | P2 | [AC] |
| cost to tile a shower stall | COMM | P3 | [AC] |
| shower tile installation steps | INFO | P3 | [AC] |
| how long does it take to tile a shower | INFO | P2 | [AC] |
| how long does it take to tile a shower and floor | INFO | P3 | [AC] |
| how long should it take to tile a shower | INFO | P3 | [AC] |
| custom tile shower Annapolis | BOFU | P2 | [DERIVED] |
| walk in shower tile installation Annapolis | BOFU | P2 | [DERIVED] |
| curbless shower | INFO | P2 | [AC] |
| curbless shower pros and cons | INFO | P2 | [AC] |
| curbless shower pan | INFO | P3 | [AC] |
| shower niche tile ideas | INFO | P2 | [AC] |
| shower niche tile trim | INFO | P3 | [AC] |
| shower niche tile shelf | INFO | P3 | [AC] |
| niche shower tile designs | INFO | P3 | [AC] |
| large format tile shower | COMM | P2 | [AC] |
| large format tile for shower walls | COMM | P2 | [AC] |
| large format tile shower floor | INFO | P3 | [AC] |
| wood look tile shower | COMM | P3 | [AC] |
| wood look tile for shower walls | INFO | P3 | [AC] |
| natural stone tile shower | COMM | P2 | [AC] |
| natural stone tile for shower floor | INFO | P3 | [AC] |
| mosaic tile for shower floor | COMM | P2 | [AC] |
| shower tile trends 2026 | INFO | P2 | [AC] |

### 2.5 Cluster E — Kitchen & backsplash

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| backsplash installation Annapolis MD | BOFU | P1 | [SEED][SERP] |
| backsplash installer near me | BOFU | P1 | [SEED][AC] |
| backsplash installer | BOFU | P2 | [AC] |
| tile installers near me backsplash | BOFU | P1 | [AC] |
| kitchen backsplash installation Annapolis | BOFU | P1 | [DERIVED] |
| backsplash installation cost | COMM | P1 | [AC] |
| backsplash installation cost per sq ft | COMM | P1 | [AC] |
| backsplash installation labor cost | COMM | P1 | [AC] |
| how much to install backsplash | COMM | P1 | [AC] |
| how much to install backsplash tile | COMM | P1 | [AC] |
| how much to install backsplash in kitchen | COMM | P1 | [AC] |
| how much to install backsplash per square foot | COMM | P2 | [AC] |
| how much to install backsplash labor | COMM | P2 | [AC] |
| how much to install backsplash in small kitchen | COMM | P2 | [AC] |
| how much to replace backsplash in kitchen | COMM | P2 | [AC] |
| how much to install tile backsplash in kitchen | COMM | P2 | [AC] |
| backsplash installation steps | INFO | P3 | [AC] |
| backsplash installation diy | INFO | P3 ⚠️ | [AC] |
| kitchen tile installation Annapolis MD | BOFU | P1 | [SEED] |
| kitchen floor tile installation Annapolis | BOFU | P2 | [SERP] |
| kitchen backsplash tile ideas | INFO | P2 | [AC] |
| kitchen backsplash ideas 2026 | INFO | P2 | [AC] |
| glass tile backsplash kitchen | COMM | P1 | [AC] |
| glass tile backsplash ideas | INFO | P1 | [AC] |
| glass tile backsplash installation cost | COMM | P1 | [AC] |
| glass tile backsplash pros and cons | INFO | P1 | [AC] |
| glass tile backsplash vs ceramic | INFO | P1 | [AC] |
| are glass tiles good for kitchen backsplash | INFO | P2 | [AC] |
| glass tile backsplash adhesive | INFO | P3 | [AC] |
| mosaic tile backsplash | COMM | P2 | [AC] |
| natural stone tile backsplash | COMM | P2 | [AC] |
| large format tile backsplash | COMM | P3 | [AC] |
| wood look tile backsplash | COMM | P3 | [AC] |
| backsplash tile trends 2026 | INFO | P2 | [AC] |

**⚠️ `backsplash installation diy`** — deliberately deprioritized. It attracts people who explicitly do not want to hire an installer. Only worth writing if framed as "DIY vs. pro: when it's worth it" with an honest conversion angle.

**Note:** the client already has a published post *"Why Choose Glass Tile Backsplashes: Pros and Cons for Your Kitchen Design."* Live autocomplete confirms `glass tile backsplash pros and cons` is a real query. **That existing asset is aimed at a real query and should be upgraded and internally linked, not replaced.**

### 2.6 Cluster F — Floors & walls

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| floor tile Annapolis MD | COMM | P2 | [SEED] |
| wall tile Annapolis MD | COMM | P2 | [SEED] |
| tile floor installation Annapolis MD | BOFU | P1 | [DERIVED] |
| floor tile installers near me | BOFU | P1 | [AC] |
| tile flooring installation near me | BOFU | P1 | [DERIVED] |
| tile installation cost | COMM | P1 | [AC] |
| tile installation cost per square foot | COMM | P1 | [AC] |
| tile installation cost per square foot labor | COMM | P1 | [AC] |
| tile installation cost labor only | COMM | P1 | [AC] |
| tile installation cost per square foot labor only | COMM | P2 | [AC] |
| tile floor installation cost Maryland | COMM | P1 | [DERIVED][SERP] |
| porcelain tile flooring | COMM | P2 | [AC] |
| large format tile flooring | COMM | P2 | [AC] |
| natural stone tile flooring | COMM | P2 | [AC] |
| wood look tile flooring | COMM | P2 | [AC] |
| wood look tile vs lvp | INFO | P2 | [AC] |
| floor tile trends 2026 | INFO | P3 | [AC] |
| heated tile floor | COMM | P2 | [AC] |
| heated tile floor cost | COMM | P2 | [AC] |
| heated tile floor installation | BOFU | P2 | [AC] |
| heated tile floor bathroom | COMM | P2 | [AC] |
| heated tile floors pros and cons | INFO | P2 | [AC] |
| heated tile floor systems | INFO | P3 | [AC] |
| heated floor installation Annapolis MD | BOFU | P2 | [DERIVED] |

**⚠️ Substantiation check:** heated floor terms are only worth targeting if the client actually installs radiant heat systems. The source-of-truth service list does **not** mention it. **Confirm with owner before building.** See §6.1.

### 2.7 Cluster G — Material / product pages (showroom inventory intent)

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| porcelain tile Annapolis MD | COMM | P1 | [SEED] |
| ceramic tile Annapolis MD | COMM | P1 | [SEED] |
| glass tile Annapolis MD | COMM | P1 | [SEED] |
| stone tile Annapolis MD | COMM | P1 | [SEED] |
| natural stone tile Annapolis MD | COMM | P2 | [DERIVED] |
| mosaic tile Annapolis MD | COMM | P2 | [DERIVED] |
| large format tile Annapolis MD | COMM | P2 | [DERIVED] |
| porcelain tile Edgewater MD | COMM | P2 | [DERIVED] |
| where to buy porcelain tile Annapolis | BOFU | P2 | [SERP] |
| porcelain tile vs ceramic tile | INFO | P1 | [AC] |
| porcelain tile and ceramic tile difference | INFO | P1 | [AC] |
| porcelain vs ceramic tile for shower | INFO | P1 | [SERP] |
| ceramic or porcelain tile for bathroom floors | INFO | P2 | [SERP] |
| natural stone tile sealer | INFO | P3 | [AC] |
| natural stone tile cleaner | INFO | P3 | [AC] |
| natural stone tile bathroom | COMM | P2 | [AC] |
| natural stone tile near me | BOFU | P1 | [AC] |
| large format tile mortar | INFO | P3 | [AC] |
| large format tile bathroom | COMM | P2 | [AC] |
| mosaic tile patterns | INFO | P3 | [AC] |
| mosaic tile sheets | COMM | P3 | [AC] |
| wood look tiles | COMM | P2 | [AC] |
| tile trends 2026 | INFO | P2 | [AC] |
| tile trends 2026 bathroom | INFO | P2 | [AC] |
| tile trends 2026 kitchen | INFO | P2 | [AC] |
| bathroom tile ideas 2026 | INFO | P2 | [AC] |
| bathroom tile ideas shower | INFO | P2 | [AC] |
| bathroom tile ideas small bathroom | INFO | P2 | [AC] |
| bathroom tile ideas for shower and floor | INFO | P2 | [AC] |
| bathroom tile ideas modern | INFO | P3 | [AC] |

**⚠️ Geo-modified material terms** (`porcelain tile Annapolis MD` etc.) are a **cannibalization landmine.** Four near-identical product pages, each with a city name bolted on, is exactly the doorway pattern. See §3.5 for the resolution.

### 2.8 Cluster H — Waterproofing (the genuine expertise moat)

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| shower waterproofing | INFO | P1 | [AC] |
| shower waterproofing membrane | INFO | P1 | [AC] |
| shower waterproofing systems | INFO | P1 | [AC] |
| shower waterproofing material | INFO | P2 | [AC] |
| shower waterproofing board | INFO | P2 | [AC] |
| shower waterproofing detail | INFO | P2 | [AC] |
| shower waterproofing tape | INFO | P3 | [AC] |
| shower waterproofing redgard | INFO | P2 | [AC] |
| shower waterproofing paint | INFO | P3 | [AC] |
| shower waterproofing kit | COMM | P3 | [AC] |
| shower waterproofing contractor Maryland | BOFU | P1 | [SERP] |
| waterproof shower installation Annapolis | BOFU | P1 | [DERIVED] |
| Schluter Kerdi shower installer Maryland | BOFU | P2 | [SERP] ⚠️ |
| sheet membrane vs liquid membrane shower | INFO | P1 | [DERIVED] |
| why is shower waterproofing important | INFO | P2 | [DERIVED] |
| leaking tile shower repair Annapolis | BOFU | P2 | [DERIVED] |

**This is the strongest defensible content position the business has.** The live SERP for `shower waterproofing contractor Maryland Schluter Kerdi` returned **manufacturer pages and one Hagerstown flooring store** — essentially *no* Anne Arundel County contractor owns this topic. The client's existing site FAQ already discusses sheet membranes, liquid-applied membranes, and preformed systems competently. That is genuine, ownable expertise and it is the single best route to both organic authority and AI-answer citation.

**⚠️ Schluter/Kerdi:** only use brand-specific terms if the installer is genuinely trained/certified on that system. See §6.1.

### 2.9 Cluster I — Design consultation & tile selection

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| tile design consultant | COMM | P2 | [AC] |
| tile design services | COMM | P2 | [AC] |
| tile design near me | BOFU | P2 | [AC] |
| tile selection near me | BOFU | P2 | [AC] |
| tile selection for bathroom | INFO | P2 | [AC] |
| tile selection guide | INFO | P2 | [AC] |
| tile selection for home | INFO | P3 | [AC] |
| help choosing tile for bathroom | INFO | P2 | [DERIVED] |
| tile design consultation Annapolis | BOFU | P2 | [DERIVED] |
| tile store vs home depot | COMM | P2 | [AC] |
| tile store home depot | COMM | P2 | [AC] |
| is home depot tile any good | COMM | P2 | [AC] |
| are home depot tiles good quality | COMM | P2 | [AC] |

**Strategic note:** the `home depot` comparison cluster is real, live autocomplete demand and it is *perfect* for a specialty showroom. A page honestly explaining what a 25-vendor specialist showroom gives you that a big-box aisle does not — lot consistency, actual samples to take home, someone who knows the setting materials — is high-converting COMM content that no big-box can write.

### 2.10 Cluster J — Trade / B2B (designers, builders, contractors)

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| tile supplier for contractors Maryland | BOFU | P2 | [DERIVED] |
| tile showroom for designers Annapolis | BOFU | P2 | [SERP] |
| trade program tile showroom Maryland | BOFU | P2 | [SERP] |
| tile supplier for builders Anne Arundel | BOFU | P3 | [DERIVED] |
| wholesale tile Annapolis MD | COMM | P3 | [DERIVED] ⚠️ |
| tile subcontractor Annapolis MD | BOFU | P2 | [DERIVED] |
| tile installation subcontractor for builders MD | BOFU | P3 | [DERIVED] |

**⚠️ `wholesale`** — do not use unless the business genuinely offers wholesale/trade pricing tiers. See §6.1.

### 2.11 Cluster K — Quote / estimate / price (pure BOFU modifiers)

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| free tile quote | BOFU | P1 | [AC] |
| quote for tile installation | BOFU | P1 | [AC] |
| tile installation estimate Annapolis | BOFU | P1 | [DERIVED] |
| tile installation quote Edgewater MD | BOFU | P1 | [DERIVED] |
| tile installer near me prices | BOFU | P1 | [AC] |
| tile installers near me cost | BOFU | P1 | [AC] |
| tile estimate calculator | INFO | P3 ⚠️ | [AC] |
| tile estimate cost | COMM | P2 | [AC] |
| tile installation cost Maryland | COMM | P1 | [SERP] |

**⚠️ `tile estimate calculator`** — mostly DIY/material-quantity intent, not hire-intent. Low value unless built as a lead-capture tool.

### 2.12 Cluster L — Repair & remediation (adjacent revenue)

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| tile repair Annapolis MD | BOFU | P2 | [SERP] |
| shower tile repair Annapolis | BOFU | P2 | [SERP] |
| regrout shower Annapolis MD | BOFU | P3 ⚠️ | [SERP] |
| cracked tile repair Anne Arundel | BOFU | P3 | [DERIVED] |
| failed shower replacement Annapolis | BOFU | P2 | [DERIVED] |

**⚠️ Regrouting** — the live SERP is dominated by **franchise specialists** (Sir Grout Annapolis, Grout Medic, Rose Restoration) who do only this. Competing is expensive and the job is low-ticket. **Recommendation: mention as a capability, don't build a page.** Confirm the client even offers it — it is not in the source-of-truth service list.

### 2.13 Cluster M — Navigational / brand defense

| Keyword | Intent | Priority | Provenance |
|---|---|---|---|
| Maryland Tile Boss | NAV | P1 | [SEED][SERP] |
| The Maryland Tile Boss Edgewater | NAV | P1 | [SERP] |
| Digitile International | NAV | P1 | [SERP] |
| Digitile International Edgewater MD | NAV | P1 | [SERP] |
| Digi-Tile Ceramic Tile Design Centre | NAV | P2 | [SERP] |
| Digitile tile store Mayo Rd | NAV | P2 | [SERP] |
| Michael DiGirolamo tile | NAV | P3 | [SEED] |
| Annapolis Tile Center | NAV | P2 ⚠️ | [SERP] |

**🚨 `Maryland Tile Boss` currently returns NOTHING for the business.** A live search for "Maryland Tile Boss Edgewater" returned only competitors and directories, and the search engine explicitly responded that it *"did not find a specific business called 'Maryland Tile Boss' in Edgewater."* The rebrand has **zero** entity recognition. Meanwhile `Digitile International` returns the Yelp listing, the UENI microsite, and the legacy store domain — all of which still carry the equity. **This is the most urgent finding in the document.** See §6.3.

---

## 3. Keyword-to-page map

**Domain assumed:** `marylandtileboss.com`
**Rule enforced throughout: one intent cluster → one destination page. No two pages share a primary keyword.**

### 3.1 Money pages (build first — these produce calls, visits, quotes)

#### M1 — Home
- **URL:** `/`
- **Title tag:** `Tile Store & Tile Installation in Edgewater, MD | The Maryland Tile Boss`
- **Primary:** tile store Edgewater MD
- **Secondary:** tile showroom Edgewater MD · tile store near me · tile store Annapolis MD · tile installation Edgewater MD · Maryland Tile Boss · Digitile International
- **Why it holds the head term:** the home page has the strongest internal link equity and the SERP for `tile store Edgewater MD` is weak (§1.1). Do not create a competing `/tile-store-edgewater-md/` page.
- **Must contain:** NAP block, Mon–Sat 10–4 hours, both audiences (homeowner + trade) signposted, "showroom + installer under one roof" positioning, `LocalBusiness` schema.

#### M2 — Showroom / visit
- **URL:** `/showroom/`
- **Title tag:** `Visit Our Tile Showroom — Edgewater, MD | Open Mon–Sat`
- **Primary:** tile showroom near me
- **Secondary:** tile stores near me open saturday · tile stores near me open now · tile showroom appointment Annapolis · tile store open today near me · tile design center Annapolis MD
- **Cannibalization guardrail:** this page must **not** use "tile store Edgewater MD" in its title, H1, or first paragraph — that string belongs to M1. This page's job is *visit logistics and what-to-expect*: hours, parking, directions from Annapolis/Rt-2, what a walk-in gets, how many vendors are on display, whether an appointment is needed.

#### M3 — Tile installation (service hub)
- **URL:** `/tile-installation/`
- **Title tag:** `Tile Installation in Edgewater & Annapolis, MD | Third-Generation Installers`
- **Primary:** tile installation Annapolis MD
- **Secondary:** tile installer near me · tile contractor near me · tile installer Annapolis MD · tile contractor Annapolis MD · tile installation near me · tile setters near me
- **Role:** the hub. Links down to every service spoke. Carries the installer credibility (third generation, owner-installed).

#### M4 — Bathroom tile installation
- **URL:** `/tile-installation/bathroom/`
- **Title tag:** `Bathroom Tile Installation — Annapolis & Edgewater, MD | Free Quote`
- **Primary:** bathroom tile installation Annapolis MD
- **Secondary:** bathroom tile installer near me · tile installers near me bathroom · bathroom tile contractors near me · bathroom tile installer Edgewater MD · bathroom tile installation near me
- **Assets available:** "Dunkirt Bath Tiling" (6 photos), "Bathroom Tiling" (2 photos)

#### M5 — Shower tile installation
- **URL:** `/tile-installation/shower/`
- **Title tag:** `Custom Tile Shower Installation | Annapolis & Edgewater, MD`
- **Primary:** shower tile installation Annapolis MD
- **Secondary:** shower tile installers near me · shower tile installation near me · custom tile shower Annapolis · walk in shower tile installation Annapolis · waterproof shower installation Annapolis
- **Note:** this is the highest-ticket service and the one where the waterproofing expertise converts. Link prominently to S1 (waterproofing).

#### M6 — Kitchen backsplash installation
- **URL:** `/tile-installation/backsplash/`
- **Title tag:** `Kitchen Backsplash Installation — Annapolis, MD | Real Local Projects`
- **Primary:** backsplash installation Annapolis MD
- **Secondary:** backsplash installer near me · tile installers near me backsplash · kitchen backsplash installation Annapolis · glass tile backsplash kitchen
- **Why this is the priority build:** §1.5 — the entire ranking set is doorway-page farms. Real photos of the Two Rivers and Bowie backsplashes plus a named installer beats every one of them on quality signals.

#### M7 — Tile floor installation
- **URL:** `/tile-installation/floors/`
- **Title tag:** `Tile Floor Installation in Annapolis & Anne Arundel County, MD`
- **Primary:** tile floor installation Annapolis MD
- **Secondary:** floor tile installers near me · tile flooring installation near me · large format tile flooring · wood look tile flooring · floor tile Annapolis MD · wall tile Annapolis MD

#### M8 — Shower waterproofing
- **URL:** `/tile-installation/shower-waterproofing/`
- **Title tag:** `Shower Waterproofing Done Right | Tile Installers, Edgewater MD`
- **Primary:** shower waterproofing contractor Maryland
- **Secondary:** waterproof shower installation Annapolis · leaking tile shower repair Annapolis · failed shower replacement Annapolis
- **Note:** this is a *service* page and is deliberately separate from the *educational* waterproofing content (S1). The service page sells; S1 teaches and links here.

#### M9 — Tile products / what we carry
- **URL:** `/tile/`
- **Title tag:** `Porcelain, Ceramic, Stone & Glass Tile — 25+ Brands | Edgewater, MD`
- **Primary:** tile supplier Annapolis MD
- **Secondary:** luxury tile Annapolis MD · natural stone tile near me · tile store Annapolis MD (supporting only)
- **Role:** product hub, links to M9a–M9d.

#### M9a–M9d — Material pages
| URL | Title tag | Primary | Secondary |
|---|---|---|---|
| `/tile/porcelain/` | `Porcelain Tile — Annapolis & Edgewater, MD Showroom` | porcelain tile Annapolis MD | porcelain tile flooring · large format tile Annapolis MD · porcelain tile Edgewater MD |
| `/tile/ceramic/` | `Ceramic Tile Selection | Edgewater, MD Tile Showroom` | ceramic tile Annapolis MD | ceramic tile installers near me |
| `/tile/natural-stone/` | `Natural Stone Tile — Marble, Travertine & More | Annapolis, MD` | stone tile Annapolis MD | natural stone tile near me · natural stone tile bathroom · natural stone tile flooring |
| `/tile/glass-and-mosaic/` | `Glass & Mosaic Tile | Annapolis, MD Showroom` | glass tile Annapolis MD | mosaic tile Annapolis MD · mosaic tile backsplash · glass tile backsplash kitchen |

**Cannibalization control for M9a–M9d:** each page targets exactly one material. The geo string appears in the title once. These pages describe **inventory and selection** (brands carried, formats, price bands, what to ask for) — they must not duplicate the installation copy on M3–M7. Any "how it's installed" content links to the relevant M-page rather than restating it.

#### M10 — Cost guide (commercial-investigation money page)
- **URL:** `/tile-installation-cost-maryland/`
- **Title tag:** `Tile Installation Cost in Maryland (2026) — Real Ranges from a Local Installer`
- **Primary:** tile installation cost Maryland
- **Secondary:** tile installation cost per square foot · cost to tile a shower · shower tile installation cost per square foot · backsplash installation cost per sq ft · bathroom tile installation cost · tile installer near me prices
- **Why a money page, not a blog post:** §1.6 showed Google ranks a local contractor's own cost guide (PRG) for this intent. Cost searchers who trust the number call. This page must end in a quote CTA.
- **🚨 Constraint:** must publish **the client's own** ranges. See §6.1.

#### M11 — Design consultation & tile selection
- **URL:** `/design-consultation/`
- **Title tag:** `Tile Design Consultation & Selection Help | Edgewater, MD`
- **Primary:** tile design consultant
- **Secondary:** tile selection near me · tile design near me · help choosing tile for bathroom · tile design consultation Annapolis
- Maps directly to two services already on the site (Design Consultation, Tile Selection).

#### M12 — Trade / pro program
- **URL:** `/trade/`
- **Title tag:** `For Designers, Builders & Contractors | Tile Trade Partner, Edgewater MD`
- **Primary:** tile showroom for designers Annapolis
- **Secondary:** tile supplier for contractors Maryland · tile subcontractor Annapolis MD · trade program tile showroom Maryland
- **Note:** only claim a formal "trade program" if one exists. §6.1.

#### M13 — Annapolis service area page (the ONE legitimate geo page)
- **URL:** `/tile-installation/annapolis/`
- **Title tag:** `Tile Installation in Annapolis, MD | 10 Minutes from Our Showroom`
- **Primary:** tile installer Annapolis MD
- **Secondary:** tile contractor Annapolis MD · tile installation company Annapolis MD
- **Why exactly one geo page is justified:** Annapolis is a distinct, higher-volume market adjacent to the physical location, and the page can carry genuinely unique content — real Annapolis-area projects, drive time and directions from Annapolis, local substrate/waterproofing considerations for waterfront and older Annapolis housing stock. **That uniqueness is the whole justification.** If it cannot be written with substance specific to Annapolis, do not build it — fold the terms into M3. See §6.2.

#### M14 — Contact / request a quote
- **URL:** `/request-a-quote/`
- **Title tag:** `Request a Tile Quote | The Maryland Tile Boss, Edgewater MD`
- **Primary:** free tile quote
- **Secondary:** quote for tile installation · tile installation estimate Annapolis · tile installation quote Edgewater MD

#### M15 — About / the installer
- **URL:** `/about/`
- **Title tag:** `Third-Generation Tile Installers in Edgewater, MD | Our Story`
- **Primary:** Maryland Tile Boss (brand defense)
- **Secondary:** Digitile International · Michael DiGirolamo tile
- **Critical role:** this is the **entity-consolidation page.** It must explicitly state the Maryland Tile Boss ↔ Digitile International relationship in plain language so search engines and AI assistants can reconcile the two names. See §6.3.

#### M16 — Portfolio
- **URL:** `/projects/`
- **Title tag:** `Our Tile Work — Real Projects in Anne Arundel County, MD`
- **Primary:** (no head term — trust asset)
- **Child pages:** `/projects/dunkirk-bathroom-tile/`, `/projects/two-rivers-backsplash/`, `/projects/bowie-backsplash/`, `/projects/stone-tile-installation/`
- **⚠️ Fix on migration:** the source-of-truth records the project name as **"Dunkirt Bath Tiling."** The town is **Dunkirk, MD.** Correct the typo; do not propagate it into a URL.
- **Note:** project pages are the *honest* way to earn relevance for Bowie / Dunkirk / Two Rivers-Odenton without building doorway city pages. See §6.2.

### 3.2 Supporting / blog content (authority + AI citation, not primary conversion)

| ID | URL | Title tag | Primary | Intent |
|---|---|---|---|---|
| S1 | `/guides/shower-waterproofing-systems/` | `Shower Waterproofing Systems Compared: Sheet, Liquid & Preformed` | shower waterproofing systems | INFO |
| S2 | `/guides/shower-waterproofing-membrane/` | `What a Shower Waterproofing Membrane Actually Does` | shower waterproofing membrane | INFO |
| S3 | `/guides/porcelain-vs-ceramic-tile/` | `Porcelain vs. Ceramic Tile: Which Belongs Where` | porcelain tile vs ceramic tile | INFO |
| S4 | `/guides/glass-tile-backsplash-pros-and-cons/` | `Glass Tile Backsplash: Pros, Cons & What to Know` | glass tile backsplash pros and cons | INFO |
| S5 | `/guides/how-long-to-tile-a-shower/` | `How Long Does It Take to Tile a Shower? A Real Timeline` | how long does it take to tile a shower | INFO |
| S6 | `/guides/tile-showroom-vs-big-box/` | `Tile Showroom vs. Home Depot: What You Actually Get` | tile store vs home depot | COMM |
| S7 | `/guides/bathroom-tile-ideas/` | `Bathroom Tile Ideas for Small Baths & Showers` | bathroom tile ideas small bathroom | INFO |
| S8 | `/guides/tile-trends-2026/` | `Tile Trends 2026: What We're Actually Selling` | tile trends 2026 | INFO |
| S9 | `/guides/curbless-showers/` | `Curbless Showers: Pros, Cons & Waterproofing Reality` | curbless shower pros and cons | INFO |
| S10 | `/guides/shower-niche-ideas/` | `Shower Niche Ideas & How They're Built to Last` | shower niche tile ideas | INFO |
| S11 | `/guides/large-format-tile/` | `Large Format Tile: What It Takes to Install Flat` | large format tile shower | INFO |
| S12 | `/guides/how-to-choose-bathroom-tile/` | `How to Choose Bathroom Tile: A Selection Guide` | tile selection for bathroom | INFO |
| S13 | `/guides/heated-tile-floors/` ⚠️ | `Heated Tile Floors: Cost, Systems & Whether It's Worth It` | heated tile floors pros and cons | INFO |
| S14 | `/guides/wood-look-tile-vs-lvp/` | `Wood-Look Tile vs. LVP: An Installer's Honest Take` | wood look tile vs lvp | INFO |

**⚠️ S13 gated on §6.1 confirmation that the client installs radiant heat.**

**Migration note:** existing posts *"Why Choose Glass Tile Backsplashes"* → becomes **S4**. *"How to Choose the Perfect Glass Tiles for Your Shower Enclosure"* → merge into **S12** or keep as a `/guides/glass-tile-shower/` spoke. Do not orphan them; 301 the old URLs.

### 3.3 Explicitly NOT built

| Would-be page | Why not |
|---|---|
| `/tile-contractor-anne-arundel-county/` | §1.4 — SERP owned by spam networks; county intent is served by M3 + M13 |
| `/tile-installer-crofton/`, `/-davidsonville/`, `/-arnold/`, `/-severna-park/`, `/-bowie/`, `/-odenton/`, `/-dunkirk/` | Textbook doorway pages. §6.2 |
| `/tile-store-annapolis-md/` | Cannibalizes M1. Annapolis store intent is a secondary on M1 + M2 |
| `/regrouting/` | §2.12 — franchise-dominated, low ticket, possibly not offered |
| `/wholesale-tile/` | Unsubstantiated claim. §6.1 |

### 3.4 Cannibalization control summary

| Contested term | Sole owner | Everyone else does |
|---|---|---|
| tile store Edgewater MD | **M1 (Home)** | M2, M9 reference it in body copy only |
| tile showroom near me | **M2** | M1 links to it |
| tile installation Annapolis MD | **M3** | M13 targets *installer/contractor* variants only |
| tile installer Annapolis MD | **M13** | M3 targets the *installation* head term |
| shower tile installation | **M5** | M8 owns waterproofing; S1/S2 own the education |
| shower waterproofing (commercial) | **M8** | S1/S2 own the informational variants and link to M8 |
| backsplash installation | **M6** | S4 owns glass-backsplash education |
| all cost/price queries | **M10** | M4–M7 each link up to M10; none publish their own competing cost tables |
| porcelain tile | **M9a** | M9 hub summarizes only |

**The M3 / M13 split is the sharpest cannibalization risk in this architecture.** If Google shows the same URL flipping between them, consolidate M13 into M3 and 301.

---

## 4. Hub-and-spoke internal linking architecture

### 4.1 Structure

```
                          ┌─────────────┐
                          │  M1  HOME   │  tile store Edgewater MD
                          └──────┬──────┘
          ┌──────────────┬───────┼────────┬──────────────┐
          │              │       │        │              │
    ┌─────▼─────┐  ┌─────▼────┐ │  ┌─────▼─────┐  ┌─────▼─────┐
    │ M3 HUB    │  │ M9 HUB   │ │  │ GUIDES    │  │ M2        │
    │ INSTALL   │  │ TILE     │ │  │ HUB       │  │ SHOWROOM  │
    └─────┬─────┘  └────┬─────┘ │  └─────┬─────┘  └───────────┘
          │             │       │        │
  ┌───┬───┼───┬───┬───┐ │  ┌────┴────┐   ├── S1  waterproofing systems
  │   │   │   │   │   │ │  │         │   ├── S2  membranes
 M4  M5  M6  M7  M8  M13│ M9a ... M9d    ├── S3  porcelain vs ceramic
 bath sh bksp fl wtrp   │                ├── S4  glass backsplash
                        │                ├── S5  timeline
        ┌───────────────┴──────────┐     ├── S6  showroom vs big box
        │  M10 COST · M11 DESIGN   │     └── S7…S14
        │  M12 TRADE · M16 PROJECTS│
        └──────────────────────────┘
                    │
             ┌──────▼──────┐
             │ M14 QUOTE   │  ← every page links here
             └─────────────┘
```

### 4.2 Linking rules

1. **Every spoke links up to its hub** with exact-ish anchor text (M5 → M3 as "tile installation"). One link, in-body, high on the page.
2. **Every hub links down to every one of its spokes.** Hubs are the distribution layer; no spoke may be orphaned.
3. **Spokes do not link laterally at random.** Only where there is a genuine user next-step:
   - M5 (shower) ↔ M8 (waterproofing) — *mandatory both directions*
   - M6 (backsplash) → M9d (glass & mosaic) — material selection follows the service decision
   - M4 (bathroom) → M9a (porcelain) — porcelain is the bathroom default
   - M11 (design consult) → M2 (showroom) — consultation happens in the showroom
4. **All informational spokes (S1–S14) must link to exactly one money page.** An INFO page with no commercial exit is wasted. Mapping: S1,S2,S9 → M8. S3 → M9a. S4 → M6. S5,S10,S11 → M5. S6,S12 → M11. S7,S8 → M2. S13 → M7. S14 → M7.
5. **M16 (projects) is the trust layer and links across everything.** Each project page links to the service it demonstrates *and* to M14. The Two Rivers and Bowie backsplash projects link to M6 — that's the proof asset that beats the doorway farms in §1.5.
6. **M10 (cost) is linked from every service page (M4–M8) and links back down to each.** Cost is the universal second question.
7. **M14 (quote) is reachable from every page** — persistent header CTA plus an in-body link. Never more than one click from anywhere.
8. **M15 (about) linked from the footer sitewide** and from M3, because installer credibility is the differentiator on service pages.
9. **Do not link M13 (Annapolis) from more than 3 places** (M3, M1 footer, M16). Over-linking a geo page is the signal that turns it from a service-area page into a doorway page.

### 4.3 Build order

| Phase | Pages | Rationale |
|---|---|---|
| **1** | M1, M2, M3, M14, M15, M16 | Entity consolidation + conversion path. **M15 is urgent** (§6.3) |
| **2** | M6, M5, M4, M8 | Highest-opportunity services first: backsplash (§1.5) and shower (§1.6) |
| **3** | M10, M9 + M9a–M9d, M7 | Cost intent + product depth |
| **4** | M11, M12, M13, S1–S6 | Consultation, trade, the one geo page, top guides |
| **5** | S7–S14 | Long-tail authority |

---

## 5. Local SEO dependencies (these gate everything above)

On-page work will underperform until these are fixed. Listed because several were discovered during this research and directly affect which keywords are winnable.

1. **Google Business Profile** — must match the site's NAP exactly, with Mon–Sat 10–4 and the correct primary phone. Primary category: *Tile Store*; secondary: *Tile Contractor*. This dual-category setup is what lets one business compete in both §2.1 and §2.3 packs.
2. **Phone conflict, unresolved.** Source-of-truth flags two numbers: `+1 443-871-0971` (site/impressum) and `+1 443-871-3876` (WhatsApp, and the number Yelp shows as primary). **One must be designated canonical** and used identically everywhere. Inconsistent NAP is a direct local-ranking suppressor.
3. **Duplicate/stale listings to claim or remove:** two separate Yelp listings exist — `yelp.com/biz/digitile-international-edgewater` and `yelp.com/biz/digi-tile-ceramic-tile-design-centre-edgewater` — both at 14 Mayo Rd. Also live: Nextdoor, `digitilestore.com`, `digitile-international.ueniweb.com`, `landoftile.com` brand pages, `cmac.ws`. Consolidate.
4. **Reviews.** One visible Yelp review found, and it is negative. Directly competing pages advertise "180+ 5-star reviews." A review-generation process is a prerequisite for competing on any `near me` term, regardless of on-page quality.
5. **Schema:** `LocalBusiness`/`HomeAndConstructionBusiness` on M1, `Service` on M3–M8, `FAQPage` on the guides (the site's existing 7-question FAQ is already good raw material), `ImageObject` on project pages.

---

## 6. Risk flags

### 6.1 Claims that require substantiation before publishing

| Claim | Where it came from | Status | Action |
|---|---|---|---|
| **"Over 25 vendors and manufacturers on display"** | Client's own legacy site copy | Plausible, client-originated | Confirm current count. Safe to use if verified; it is the core differentiator |
| **"40 years of experience"** | UENI microsite | **Unverified.** Source-of-truth says owner is third-generation but gives no founding year | Get founding year. Do not publish a duration that cannot be evidenced |
| **"3,000 sq ft showroom"** | UENI microsite | **Unverified** by source-of-truth | Measure or drop |
| **"Largest selection of tile under one roof"** | UENI microsite | **Superlative — not substantiable.** Compass Stone & Tile, In Home Stone (two showrooms + warehouse), and Conestoga all make comparable claims | **Do not use.** Replace with the specific, verifiable number of vendors |
| **"Best tile store in Annapolis / Maryland"** | Would be new | Not substantiable; a competitor holds an actual award | Do not use |
| **Schluter / Kerdi certified installer** | Keyword opportunity §2.8 | Unknown | Only use brand terms if genuinely certified. Manufacturer certification is verifiable and competitors will report a false claim |
| **Heated / radiant floor installation** | Keyword opportunity §2.6 | **Not in the source-of-truth service list** | Confirm before building M7 heated-floor sections or S13 |
| **Regrouting / restoration services** | Keyword opportunity §2.12 | **Not in the service list** | Confirm before claiming |
| **"Trade program" / "wholesale pricing"** | Keyword opportunity §2.10 | Unknown | Only if a real pricing tier exists. M12 can still be built as "we work with designers and builders" without claiming a formal program |
| **Specific cost figures on M10** | §1.6 third-party numbers | **Those are other companies' numbers** | The client must supply their own ranges. Publishing scraped competitor pricing is both inaccurate and a liability |
| **Licensed / insured / bonded** | Standard trust copy | Unverified | Verify MHIC licensing status before displaying. Maryland home-improvement contractor licensing is publicly checkable and misstating it is a regulatory issue, not just an SEO one |
| **Any relationship to "The Annapolis Tile Center"** | §1.9 | **No relationship established** | A "were you looking for…?" note is fine. Implying acquisition or succession is not |
| **Employee/team size implications** | Business has 2–3 employees | — | Avoid "our team of experts," "our designers" (plural), "large crew." The existing site copy uses several of these. With 2–3 staff they overstate capacity and will be contradicted by the actual experience |

### 6.2 Doorway-page risk

**The pattern to avoid:** the live SERPs in §1.4, §1.5 and §1.7 are saturated with exactly this — `strivebacksplashinstallation.com/backsplash-installation/md/annapolis/backsplash-installation`, `edgewater-md.finelineshowroom.com`, `annapolis-md.midlandhomeremodel.com`, `tilerepairservicepros.com/...anne-arundel-county-md`. These are template farms with one page per city and nothing unique on any of them. Google's guidance treats this as spam, and copying it would put the client's domain in the same bucket as the sites they are trying to beat.

**Specifically flagged as doorway risk if built as separate city pages:**

- `tile installer Crofton MD`, `tile installer Davidsonville MD`, `tile installer Arnold MD`, `tile installer Severna Park MD`, `tile installer Bowie MD`, `tile installer Odenton MD`, `tile installer Dunkirk MD`, `tile installer Edgewater/Annapolis Junction`
- `tile contractor Anne Arundel County MD` and every county-level variant
- Any `{material} tile {city} MD` matrix (porcelain × 8 cities = 8 near-duplicate pages)

**The legitimate alternatives, in order of preference:**

1. **Project pages** (M16 children). The business has *real photographed work* in Bowie, Dunkirk, and Two Rivers/Odenton. A page about an actual Bowie backsplash with actual photos is unique content that earns Bowie relevance honestly. This is strictly better than a `/bowie/` doorway page and cannot be penalized.
2. **A service-area section** on M3 and M13 listing towns served, as plain text, with links only to the relevant project pages.
3. **Exactly one adjacent-market page (M13, Annapolis)** — and only if it can carry genuinely Annapolis-specific substance. **Test: if the page reads correctly after find-and-replacing "Annapolis" with another town's name, it is a doorway page and must not ship.** That single sentence is the guardrail for this whole section.

### 6.3 🚨 Brand and entity fragmentation — the most urgent finding

Live research surfaced **at least six** distinct online identities for what appears to be one business:

| Identity | Evidence | Status |
|---|---|---|
| The Maryland Tile Boss | Current site branding | **Zero search recognition.** A live search returned only competitors, and the engine stated it could not find the business |
| Digitile International | Yelp, `digitilestore.com`, UENI microsite, `landoftile.com` | **This is where the equity currently sits** |
| Digi-Tile Ceramic Tile Design Centre | A *second*, separate Yelp listing at the same 14 Mayo Rd address | Duplicate listing |
| Digi-Tile / Digi-Tile and Marble, **Crofton MD**, 1654 Crofton Blvd | `digitileinc.com` (indexed, **DNS no longer resolves**), Angi, D&B, YellowPages, Manta, Networx, `yelp.com/biz/digitile-crofton` | **Lists the same phone: (443) 871-0971** |
| DigiTile International — `digitileshowroom.com` | Indexed in live results, **DNS no longer resolves** | Dead domain, still indexed |
| Digitile International — `digitile-international.ueniweb.com` | Live, ranking | Competing with the primary site |

**Why this matters more than any keyword decision in this document:** the site's own copy still says "Digitile International" 9 times while the branding says "Maryland Tile Boss" 22 times. Externally, one phone number is attached to two different street addresses in two different towns. Search engines resolving a local entity treat conflicting NAP as a strong negative signal, and AI assistants asked "who is the Maryland Tile Boss" currently have nothing to retrieve.

**Recommended sequence, before chasing rankings:**

1. Decide the canonical public name. If "The Maryland Tile Boss" is the go-forward brand, it needs a documented bridge — every listing and the About page must state the "formerly / d.b.a. Digitile International" relationship explicitly, in text.
2. Resolve the Crofton listings. If that location is closed, mark it closed on Google/Yelp/Angi/D&B rather than leaving it to compete with Edgewater on a shared phone number.
3. Pick one phone number as canonical (`0971` vs `3876`) and propagate.
4. 301 `digitilestore.com` and any controlled legacy domains to the new site, page-for-page. Retire the UENI microsite rather than leaving it to compete.
5. Merge the duplicate Yelp listings.
6. Only then build out §3.

**Ranking effort spent before step 6 is largely wasted**, because the local pack — which is where the BOFU money is for every keyword in §2.1, §2.2 and §2.3 — is gated on entity consistency, not on-page copy.

### 6.4 Content-quality risk on existing copy

The current site copy (per source-of-truth) is generic AI-template marketing language — "our seasoned professionals," "unwavering attention to detail," "transform your space into something extraordinary," repeated near-verbatim across the porcelain, ceramic, and glass service descriptions. Three service pages that differ only in the material noun is a near-duplicate-content pattern and reads as low-effort to both users and search engines.

Since the actual differentiator is a **named, third-generation installer who does the work himself and knows waterproofing systems cold**, the rewrite should trade the superlatives for specifics. That is also what makes the pages citable by AI assistants, which do not reward adjectives.

---

## 7. Summary of opportunity ratings

| Query class | Rating | One-line justification |
|---|---|---|
| `tile store / showroom Edgewater MD` | **HIGH** | Weak SERP (dealer-locators + directories); client already has entity relevance to consolidate |
| `bathroom tile installer Edgewater MD` | **HIGH** | Hyper-local, zero real competitor pages, client is physically there |
| `backsplash installation Annapolis MD` | **HIGH** | Entire ranking set is doorway farms; client has real photographed backsplash projects |
| Cost queries (`shower / backsplash / tile installation cost`) | **HIGH** | Google demonstrably ranks local contractors' own cost guides here; highest-converting non-branded intent |
| Shower waterproofing | **HIGH** | Essentially unclaimed by any Anne Arundel contractor; client has genuine documented expertise |
| `tile showroom Annapolis MD` | **MEDIUM** | Real, established local showrooms rank — but all are flooring generalists, not tile specialists |
| `tile installation Annapolis MD` | **MEDIUM** | One strong competitor (USA Pro Floors) with review proof; beatable on specialist depth |
| `tile design center` / trade | **MEDIUM** | Regional showrooms rank; narrow but qualified audience |
| Material + geo (`porcelain tile Annapolis MD`) | **MEDIUM** | Winnable but must be built as inventory pages, not a geo matrix |
| `tile contractor Anne Arundel County MD` | **LOW-MEDIUM** | Spam-network dominated; not worth a dedicated page |
| Regrouting / restoration | **LOW** | Franchise specialists own it; low ticket; possibly not even offered |
| National head terms (`tile store`, `shower tile ideas`) | **LOW** | No local intent, no realistic path, no commercial value to a single-location business |

---

*Every keyword in this document: **SERP-validated opportunity — exact third-party volume unavailable.** No volume, CPC, or difficulty figure has been estimated or invented anywhere above. To add real metrics, run this list through an authenticated keyword tool and append the columns — do not backfill them by inference.*
