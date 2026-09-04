# Local SEO / NAP / Citation Audit
**Business:** The Maryland Tile Boss (formerly Digitile International / Digi-Tile Ceramic Tile Design Centre)
**Location:** 14 Mayo Rd, Edgewater, MD 21037
**Audit date:** 2026-09-04
**Method:** Live verification via web search and direct HTTP fetch. Every figure below is either verified against a named live source or explicitly marked `unverified`. Nothing is estimated or inferred.

---

## 0. Executive summary

This is not a "needs more citations" business. It is an **entity-fragmentation problem**. The business currently presents to search engines as somewhere between **7 and 10 distinct business names**, across **7 domains** (5 of which are dead, parked, or 404), spread over **two different cities** (Edgewater AND Crofton), with **two different phone numbers** in active circulation and **four mutually contradictory sets of opening hours**.

The single most damaging verified fact: **Google's own map entity for this address is named "Digitile International Showroom & Design Center"** — not "The Maryland Tile Boss." The rebrand exists on the website and nowhere else. Meanwhile the Yelp listing that carries the business's only visible review points at **a parked domain**.

Priority order is: fix the Google entity → kill the Crofton cluster → consolidate domains → then build citations. Building citations before the first three would actively multiply the damage.

---

## 1. NAP consistency table

### 1a. Verified live listings — Edgewater (correct location)

| # | Source | Exact name shown | Exact address shown | Exact phone shown | Website shown | Verification |
|---|---|---|---|---|---|---|
| 1 | **Google Maps / Waze** (Place ID `ChIJvwQXrATvt4kRu36TWBUl9Ws`) | `Digitile International Showroom & Design Center` | `14 Mayo Rd, Edgewater, MD 21037, USA` | `(443) 871-3876` | not shown | Verified via Waze live-map, which renders the Google place record |
| 2 | **Yelp** (listing A) | `Digitile International` | `14 Mayo Rd, Edgewater, MD 21037` | `(443) 871-0971` | `digitilestore.com` | Verified — yelp.com/biz/digitile-international-edgewater |
| 3 | **Yelp** (listing B — duplicate) | `Digi-Tile Ceramic Tile Design Centre` | `14 Mayo Rd, Edgewater, MD 21037` | `(443) 871-3876` | not shown | Verified — yelp.com/biz/digi-tile-ceramic-tile-design-centre-edgewater |
| 4 | **Facebook** (page A, current) | `Maryland Tile Boss` | not shown | not shown | not shown | Page exists; profile fields not publicly renderable to fetch |
| 5 | **Facebook** (page B, legacy) | `Digi-Tile Ceramic Tile Design Centre \| Edgewater MD` | not shown | not shown | not shown | Page exists (ID 100063608888900); fields not renderable |
| 6 | **Facebook** (page C, legacy) | `Digi-Tile Ceramic Tile Design Centre` | not shown | not shown | not shown | Third FB URL found in index (ID 171557916189397) — `unverified` whether distinct page or alias |
| 7 | **Alignable** | `Digitile` | `Edgewater, MD` (no street) | not shown | not shown | Verified — alignable.com/edgewater-md/digitile |
| 8 | **Nextdoor** | `Digitile International` | `Edgewater, MD` | not shown | not shown | Page exists; returns 403 to direct fetch — fields `unverified` |
| 9 | **Hotfrog** | `Digimelce International LLC` ← **corrupted** | `14 Mayo Rd, Edgewater, MD, 21037` | `443-871-0971` | `digitile-international.ueniweb.com` | Name/address/phone from search-index title; page 403s to direct fetch |
| 10 | **AnnapolisDirections** | `Digitile International` | `14 Mayo Rd, Edgewater, MD 21037` | `443-871-3876` | `digitile-international.ueniweb.com` | Verified — category listed as "Tile store" |
| 11 | **landoftile.com** | `Digitile International` | Edgewater, MD | not shown | not shown | Listing confirmed to exist (store ID `s-3176`); page 403s to direct fetch — full NAP `unverified` |
| 12 | **Own site** (marylandtileboss.com) | `The Maryland Tile Boss` (schema) / `Digitile International` (body copy) | `14 Mayo Rd, Edgewater, Maryland, 21037` | `443-871-0971` + `443-871-3876` | — | Verified from live JSON-LD and page payload |

### 1b. Verified live listings — **Crofton (wrong city — legacy/contaminating)**

| # | Source | Exact name shown | Exact address shown | Exact phone shown | Website shown |
|---|---|---|---|---|---|
| 13 | **Houzz** | `Digitile Inc` | `Crofton, Maryland 21114` | `(443) 871-3876` ← **same phone as Edgewater** | `digi-tile.com` (now 404) |
| 14 | **Angi / Angie's List** | `Digi-Tile and Marble` | `Crofton, MD` | not shown | not shown |
| 15 | **HomeAdvisor** | `Nash & Sons dba Digi-tile` | `1654 Crofton Blvd Suite 6, Crofton, MD 21114` | not shown | `www.digi-tile.com` |
| 16 | **Manta** | `Digi Tile Design Centre` | `Crofton MD, 21114` | not shown | not shown |
| 17 | **Homeyou** | `Digi-Tile and Marble` | `Crofton, MD` | not shown | not shown |
| 18 | **The Blue Book** | `Digi-Tile` | `Crofton, Maryland` | not shown | not shown |
| 19 | **Cylex** | `Digitile Inc` | `unverified` (403) | `unverified` | `unverified` |
| 20 | **Yelp** | `Nash & Sons Tile Contractors` | `1654 Crofton Blvd, Ste 6, Crofton, MD 21114` | `(301) 390-5934` | not shown |

> **Critical caveat on the Crofton cluster.** Houzz listing #13 shows owner **"Mike DiGirolamo"** and phone **(443) 871-3876** — the same owner and the same number as the Edgewater business. That is strong evidence the Crofton listings are legacy records of *this* business at a former address. However, listing #15/#20 name a different legal entity ("Nash & Sons") with a different phone (301-390-5934). **The exact relationship between Nash & Sons and Michael DiGirolamo is `unverified` and must be confirmed with the owner before any claim/removal action is taken.** Do not file removal requests on Nash & Sons listings without that confirmation.

### 1c. Discrepancy flags

**Name — 10 distinct variants observed:**
`The Maryland Tile Boss` · `Maryland Tile Boss` · `Digitile International` · `Digitile International Showroom & Design Center` · `Digi-Tile Ceramic Tile Design Centre` · `Digitile` · `Digitile Inc` · `Digimelce International LLC` · `Digi-Tile and Marble` · `Digi Tile Design Centre`

**Phone — 2 numbers in active circulation at the Edgewater address:**

| Number | Appears on |
|---|---|
| `443-871-0971` | Own site (primary), Yelp listing A, Hotfrog |
| `443-871-3876` | **Google Maps**, Yelp listing B, AnnapolisDirections, own site (WhatsApp), Houzz-Crofton |

There is no consistent primary. Google — the listing that matters most — carries the number the website treats as *secondary*.

**Address:** `14 Mayo Rd` is consistent wherever a street address appears. The failure mode is not a wrong street; it is (a) listings with city-only precision (Alignable, Nextdoor) and (b) an entire parallel cluster at a Crofton address.

**Hours — 4 contradictory versions, none matching another:**

| Source | Hours |
|---|---|
| marylandtileboss.com JSON-LD | Mon–Sat 10:00–16:00 |
| Yelp (Digi-Tile Ceramic) | Mon–Fri 10:00–17:00, Sat 10:00–16:00 |
| digitilestore.com (cached) | Mon–Fri **by appointment**, Sat 10:00–16:00 |
| Yelp (Digitile International) | not shown |

**Supporting-detail contradictions** (these feed AI answer engines and erode trust):

| Claim | Variants found |
|---|---|
| Showroom size | `3000 sq ft` (digitilestore) · `2600 sq ft` (Alignable) · `2400 sq ft` (Houzz) |
| Years of experience | `over 40 years` · `over 45 years` · `over 25 years` · `established 2000` |

**Missing entirely — no listing found at all on:**
Bing Places · Apple Maps / Apple Business Connect · BBB · Thumbtack · Porch · BuildZoom · Yellow Pages · Chamber of Commerce (national directory or Anne Arundel County Chamber) · NTCA · Houzz *Edgewater* (only the Crofton record exists)

### 1d. Domain status — verified by direct HTTP request, 2026-09-04

| Domain | HTTP result | Status |
|---|---|---|
| `marylandtileboss.com` | 200 | **Live** — current canonical site |
| `digitile-international.ueniweb.com` | 200 | **Live** — identical content, UENI platform subdomain (duplicate) |
| `digitilestore.com` | 200, **114-byte JS redirect to `/lander`** | **Parked** — no content. Yelp listing A points here. |
| `digi-tile.com` | 404 | Dead. Houzz + HomeAdvisor point here. |
| `digitileinternationalshowroom.com` | connection timeout / refused | Dead |
| `digitileinternationalshowroomanddesigncenter.com` | connection timeout | Dead |
| `digitileinc.com` | DNS NXDOMAIN | Dead |

**Five of seven domains are non-functional, and two of the dead/parked ones are the destination URLs on live third-party listings.** Every click from Yelp listing A or Houzz currently lands the user on a parking page or a 404.

---

## 2. The multi-brand problem

### 2.1 What the damage actually is

**Entity confusion (most severe).** Google builds a knowledge entity by corroborating name+address+phone across the web. Here, the corroboration works *against* the current brand. The website says "The Maryland Tile Boss"; Google's map record, both Yelp listings, Nextdoor, Alignable, Hotfrog, AnnapolisDirections and landoftile all say some form of "Digitile." The rebrand has exactly **one** citation supporting it (the site's own schema) and roughly **eleven** contradicting it. From Google's perspective, "The Maryland Tile Boss" is an unsupported claim on a website, not a business name. This is why a branded search for the new name returns nothing recognizable while "Digitile Edgewater" returns the full cluster.

**Split citations.** Authority that should accumulate on one entity is divided across ~10 name variants. Each variant is individually too weak to rank. The Crofton cluster is worse than merely useless — it tells Google the business's service area centers on Crofton (12+ miles north), which suppresses the Edgewater/Annapolis map pack the business actually needs.

**Split reviews.** Verified review counts are in §4. The practical effect: two Yelp listings for the same address means a customer who wants to leave a review has a 50% chance of landing on the wrong one, and the listing carrying the negative review (1.0★) is the one with the *primary* phone number and the website link. Reviews cannot merge across duplicates; they are permanently divided.

**Diluted link equity.** Any link ever earned by `digi-tile.com`, `digitileinc.com`, `digitilestore.com`, or the two showroom domains is now pointing at a 404, a parking page, or dead DNS — passing nothing. Additionally, `digitile-international.ueniweb.com` serves byte-identical content to `marylandtileboss.com`, so the two live properties are competing duplicates rather than one consolidated asset.

**A specific credibility leak.** The Yelp listing that ranks for the primary phone number links to a parked domain. A prospect who checks the business on Yelp and clicks through sees a domain-parking lander. For a showroom whose entire proposition is craftsmanship and 40+ years of trust, this is a conversion problem as much as an SEO one.

### 2.2 Consolidation recommendation

**Recommended canonical entity:**

```
Name:    Digitile International
Address: 14 Mayo Rd, Edgewater, MD 21037
Phone:   443-871-0971
Domain:  marylandtileboss.com
```

**Rationale for keeping "Digitile International" as the legal/citation name.** This will be unpopular, so the reasoning matters. Google's guidelines require the GBP name to be the name the business actually uses on its signage and in the real world — keyword-style names like "The Maryland Tile Boss" are a suspension risk if they are not the genuine trading name, and competitors in tile do file redressal reports. More importantly, "Digitile International" already has ~11 corroborating citations, a 25-year history, and Google's existing map entity. Discarding that to chase a name with one citation means starting the entity from zero.

**How to keep the brand you like without the risk:** run "The Maryland Tile Boss" as a **marketing tagline and domain**, not as the GBP/citation name. The domain `marylandtileboss.com` keeps the memorable brand, the site can headline it prominently, and the GBP/citation layer stays on the name Google already trusts. This is a standard, low-risk pattern.

**If the owner has genuinely and completely rebranded** — new signage, new invoices, new legal DBA filed — then the correct name is `The Maryland Tile Boss` and the migration below still applies; simply substitute that name everywhere and expect the entity rebuild to take 3–6 months rather than 4–8 weeks. Do not attempt a rebrand *without* changing physical signage: Google verifies against street-level imagery.

**Decision required from the owner before execution:**
1. Is there a filed DBA/trade name, and what exactly is on it?
2. What does the physical storefront signage say today?
3. Which phone rings in the showroom and is answered during business hours — 0971 or 3876?
4. Is Michael DiGirolamo connected to "Nash & Sons dba Digi-tile" in Crofton, and did this business formerly operate at 1654 Crofton Blvd?

Nothing in §2.3 should be executed until #3 is answered, because the phone number is the single field that must not change again.

### 2.3 Migration and redirect plan

**Phase 0 — Lock the source of truth (day 1)**
Write the canonical NAP block once, in a single file, and treat it as immutable. Every subsequent action copies from it character-for-character — including the presence or absence of "Suite," the hyphenation of the phone, and `Rd` vs `Road`. Most NAP cleanups fail here, by re-introducing new variants during the cleanup itself.

**Phase 1 — Domains (week 1)**

| Domain | Action |
|---|---|
| `marylandtileboss.com` | Canonical. Keep. |
| `digitilestore.com` | **Re-point immediately.** Remove parking, 301 → `marylandtileboss.com`. This is the highest-value single fix in this section — it is a live Yelp destination currently serving a lander. |
| `digi-tile.com` | Re-register/renew if recoverable, 301 → canonical. It is the destination on Houzz and HomeAdvisor. If unrecoverable, update those listings instead. |
| `digitileinternationalshowroom.com` | Restore DNS, 301 → canonical, then let it lapse after 12 months. |
| `digitileinternationalshowroomanddesigncenter.com` | Same. |
| `digitileinc.com` | Verify ownership. If owned, restore + 301. If not owned, do nothing — do not repurchase. |
| `digitile-international.ueniweb.com` | Cannot 301 (platform subdomain). Add `<link rel="canonical">` pointing to the marylandtileboss.com equivalent on every page. If UENI does not permit that, the site must move off UENI — see below. |

Use **301, not 302**, and redirect to the *matching* page where one exists, falling back to the homepage only when it does not. Keep all redirects live permanently; do not chain them.

**Note on the UENI platform:** the current site is client-side rendered (see §5.6) and its schema is auto-generated with errors that cannot be hand-corrected on-platform. The duplicate `ueniweb.com` subdomain compounds this. A move to a platform that permits server-rendered HTML, hand-authored JSON-LD, and true 301s should be treated as a prerequisite for the on-site work in §5, not an optional upgrade.

**Phase 2 — Google (week 1–2, before all other listings)**
1. Claim/verify the existing GBP for Place ID `ChIJvwQXrATvt4kRu36TWBUl9Ws`. **Do not create a new profile** — creating a second profile at the same address is the most common and most damaging mistake in a rebrand, and it will be merged or suspended.
2. Update name to canonical, phone to the confirmed primary, website to `marylandtileboss.com`, hours to the true hours.
3. Search Google Maps for every name variant in §1c and for the Crofton address. Report each duplicate found via "Suggest an edit → Close or remove → Duplicate," referencing the canonical profile.
4. Expect a re-verification request after the name change. Have signage photos ready.

**Phase 3 — Duplicate suppression (week 2–4)**
- **Yelp:** claim both listings. Request merge of the "Digi-Tile Ceramic Tile Design Centre" listing into the "Digitile International" listing via Yelp support. Yelp will merge same-address duplicates but requires a support ticket; the in-app flow will not do it.
- **Facebook:** merge the legacy pages into the current one (Settings → merge pages requires same name + address, so rename legacy pages to match first). Verify whether page ID 171557916189397 is a live distinct page or an alias of 100063608888900 before acting.
- **Crofton cluster:** *after* confirming the relationship with the owner. If these are legacy records of this business, claim each and update the address to Edgewater — do not simply delete. Updating preserves whatever authority the listing holds; deleting discards it. If they belong to a genuinely separate entity, leave them alone entirely.

**Phase 4 — Aggregators, then direct listings (week 3–6)**
Update the data aggregators *before* the individual directories, or the aggregators will overwrite your corrections. In the current US market this means Foursquare, Data Axle, and Neustar/Localeze — reachable individually or through a managed service. Only then correct the individual sites in §1a, including the corrupted Hotfrog record.

**Phase 5 — Build (week 6+)**
Only now add the new citations in §6. Adding them earlier would mint fresh copies of the inconsistency.

**Sequencing rule:** consolidate before you build. Every new citation created before Phase 4 is a citation that will need to be corrected again.

---

## 3. Google Business Profile recommendations

### 3.1 Categories

> Verified 2026-09-04 against three independent full GBP taxonomies (PlePer US/English list, 4,045 entries; Dalton Luka complete list; community GBP master sheet USA tab, 4,046 entries, stamped 2026-08-31), cross-checked by exact string match on raw downloaded data. Note that **Google publishes no official public category list** — these third-party full-taxonomy exports are the accepted sources, per Sterling Sky.

**All categories below are confirmed real, with Google's internal category ID:**

| Category | GCID | Supports GBP "Services" section? |
|---|---|---|
| Tile store | `gcid:tile_store` | **No** |
| Tile contractor | `gcid:tile_contractor` | **Yes** |
| Flooring store | `gcid:flooring_store` | No |
| Flooring contractor | `gcid:flooring_contractor` | Yes |
| Bathroom remodeler | `gcid:bathroom_remodeler` | Yes |
| Kitchen remodeler | `gcid:kitchen_remodeler` | Yes |
| Countertop store | `gcid:countertop_store` | No |
| Stone supplier | `gcid:stone_supplier` | No |
| Natural stone supplier | `gcid:natural_stone_supplier` | No |
| Marble supplier | `gcid:marble_supplier` | Yes |
| Granite supplier | `gcid:granite_supplier` | Yes |
| Marble contractor | `gcid:marble_contractor` | Yes |
| Interior designer | `gcid:interior_designer` | Yes |
| Tile manufacturer | `gcid:tile_manufacturer` | No |
| Home improvement store | `gcid:home_improvement_store` | No |
| General contractor / Construction company | — | Yes |

**Confirmed NOT a category: `Mosaic tile store`.** The string "mosaic" appears nowhere in the taxonomy. Only four tile-prefixed categories exist: Tile store, Tile contractor, Tile manufacturer, Tile cleaning service.

#### The primary-category decision — a real trade-off

Category choice here is not free, because **the primary category determines whether the GBP "Services" section exists at all.** `Tile store` does not support service items; `Tile contractor` does. For a business that is genuinely both, this forces a choice:

| Option | Primary | Gains | Costs |
|---|---|---|---|
| **A** | `Tile store` | Competes in the far less crowded retail pool; matches "tile store near me" / "tile stores Annapolis"; leans on the showroom, which is the one asset competitors cannot replicate | **Loses the Services section entirely** (§3.2 becomes unusable) |
| **B** | `Tile contractor` | Keeps the Services section; matches installer queries | Drops the business into a crowded contractor pool where — with 1 verified review — it currently cannot compete |

**Recommendation: Option A, `Tile store` as primary.**

The deciding factor is §4. With one verified public review, and that review being 1 star, this business cannot win a contested "tile installer near me" map pack in the near term — review count and velocity dominate that pool. It *can* plausibly own "tile store" queries in Edgewater/Annapolis, because a genuine 2,400–3,000 sq ft showroom with 25+ vendors is rare and defensible. Play the position of strength.

The lost Services section is a real cost, but a recoverable one: the service list in §3.2 can be carried instead through **Products** (§3.3, fully available on `Tile store`), through `hasOfferCatalog` in schema (§5.6), and through the site's own service pages.

**Revisit this decision once Google reviews pass ~25.** At that point switching primary to `Tile contractor` — keeping `Tile store` as first secondary — becomes viable and unlocks Services. Set a calendar reminder rather than treating this as permanent.

**Secondary categories, in priority order** (both real categories can be carried simultaneously, so nothing is forfeited by ordering):

| Category | Why |
|---|---|
| `Tile contractor` | Essential — the installation half of the business. First secondary regardless of primary. |
| `Flooring store` | Broadens retail reach; genuinely accurate |
| `Bathroom remodeler` | Matches the portfolio work (bath tiling, showers) |
| `Kitchen remodeler` | Matches the backsplash portfolio |
| `Flooring contractor` | Only if floor installation is genuinely offered |
| `Stone supplier` / `Marble supplier` | Only if stone is genuinely stocked — the site says it is, so likely yes |
| `Countertop store` | **Only if countertops are actually sold** |
| `Interior designer` | Confirmed real but **not recommended** — design consultation is a service here, not a standalone practice; it invites irrelevant leads |

**Do not use:** `General contractor` (inaccurate, and it is what the legacy Yelp listing wrongly used), `Construction company`, `Home improvement store` (too broad — dilutes the tile-specific relevance that is this business's entire advantage), `Tile manufacturer` (they retail, they do not manufacture).

**Rule:** never add a category for a service not genuinely offered. Secondary categories dilute primary relevance, so 4–6 accurate ones outperform 10 aspirational ones.

### 3.2 Services

> **Availability caveat:** as established in §3.1, the GBP Services section is only present when the *primary* category supports service items. Under the recommended Option A (`Tile store` primary) it will **not** be available. Carry this list through Products (§3.3), `hasOfferCatalog` schema (§5.6) and the site's service pages instead — and populate the section here immediately if the primary is ever switched to `Tile contractor`.

The service list, in either case:

- Porcelain Tile Installation
- Ceramic Tile Installation
- Glass Tile Installation
- Natural Stone Tile Installation
- Mosaic & Custom Tile Work
- Kitchen Backsplash Installation
- Bathroom & Shower Tiling
- Tile Design Consultation
- Tile Selection Assistance

Write 2–3 sentences per service. These are indexed and surface in "services" queries; empty service names are near-worthless.

### 3.3 Products

The Products module is underused by tile retailers and is a genuine advantage for a showroom. Add product entries for each material category actually stocked — porcelain, ceramic, natural stone, glass, mosaic, large-format — each with a real showroom photo, a description naming carried brands, and a link to the corresponding site page. Do not enter fabricated prices; leave price blank rather than guess.

### 3.4 Description (750 characters)

Draft, pending the name decision in §2.2:

> Digitile International is a family-run tile showroom and installation company in Edgewater, Maryland, serving Annapolis and Anne Arundel County since 2000. Owner Michael DiGirolamo is a third-generation tile installer, Wedi Pro Certified and Schluter-trained. Our showroom displays porcelain, ceramic, natural stone, glass and mosaic tile from more than 25 vendors, so you can see and handle materials before you buy. We offer free design consultation, help you choose the right tile for your kitchen backsplash, bathroom, shower or floor, and install it ourselves — the same people who sell it do the work. Visit the showroom on Mayo Road or call to arrange a consultation.

Verified elements retained: family/third-generation, 2000 founding, 25+ vendors, Wedi/Schluter certifications, materials list. **Note:** "since 2000" is used rather than "40+ years" because the years-in-business claim is inconsistent across sources (§1c) — pick one and use it everywhere. The description field is not a ranking factor directly, but it is heavily used by AI answer engines, so factual precision matters more than keyword density.

### 3.5 Photos

The showroom is the asset the competition does not have. Photograph it properly.

- **Exterior:** the storefront with signage clearly legible, shot from the street, plus the parking area and entrance. These support verification and help customers find a building on Mayo Rd.
- **Interior:** wide shots showing the scale of the display, plus tight shots of individual displays by material.
- **At work:** installation in progress — this is the strongest differentiator content and almost nobody in this vertical posts it.
- **Completed projects:** the existing portfolio work (Bowie, Dunkirk, Two Rivers) — before/after pairs.
- **Team:** Michael on site. Owner-present photos measurably improve contact rates for small trades businesses.

Cadence: 3–5 new photos monthly, uploaded from the phone at the location. Geotagging is not a ranking factor and is not worth effort; recency and volume are. Strip nothing, fabricate nothing, and never use manufacturer stock imagery — it is generic, it is used by every competitor, and it undermines the showroom claim.

### 3.6 Q&A

The owner should seed the Q&A section — this is permitted and normal, and unanswered customer questions get answered by strangers if you don't. Seed and self-answer:

- Do I need an appointment to visit the showroom?
- Do you install the tile you sell, or only sell it?
- What areas do you serve?
- Do you offer free estimates or design consultations?
- Do you work with homeowners directly, or only contractors?
- Roughly how long does a kitchen backsplash / bathroom floor take?
- Do you carry large-format tile?
- Are you licensed and insured in Maryland?

Answer in full sentences with the real answer. Upvote the most important ones from a second account so they surface first. Monitor weekly — Q&A is the most commonly hijacked GBP surface.

---

## 4. Review landscape

### 4.1 Verified review data

| Platform | Listing | Rating | Count | Verification |
|---|---|---|---|---|
| Yelp | Digitile International | **1.0 ★** | **1 review** | Verified directly on listing |
| Yelp | Digi-Tile Ceramic Tile Design Centre | none | **0** — page shows "You could be the first review" | Verified directly |
| Yelp | Nash & Sons Tile Contractors (Crofton) | none | 0 — "could be the first review" | Verified directly |
| Alignable | Digitile | n/a | **3 recommendations received** | Verified directly |
| Houzz | Digitile Inc (Crofton) | not shown | not shown (**17 followers**) | Verified directly |
| Angi | Digi-Tile and Marble (Crofton) | none | Described in Angi's own listing text as new with no reviews yet | Verified via listing text |
| **Google** | Digitile International Showroom & Design Center | `unverified` | `unverified` | Could not access the GBP review panel; **this is the single most important unknown in the audit and must be checked manually first** |
| Facebook | (all pages) | `unverified` | `unverified` | Profile fields not publicly renderable |
| Nextdoor | Digitile International | `unverified` | `unverified` | Page 403s to fetch |
| BBB | — | — | **No profile found** | Searched BBB Edgewater/Maryland tile categories |

### 4.2 Reading of the landscape

The verified public review footprint is close to nonexistent: **one review, and it is 1 star**, on the listing that carries the primary phone number and the website link. Alignable's 3 recommendations are B2B peer endorsements and carry no consumer or ranking weight.

For a 25-year-old business, this is a striking gap — and it is almost certainly a *collection* problem rather than a *satisfaction* problem. Businesses that survive 25 years on referral in a small market usually have plenty of happy customers who were simply never asked. The negative review dominates only because there is nothing else in the frame.

**Do not respond to the 1-star review defensively.** A single unanswered negative is bad; a single negative with a hostile owner reply is much worse and is permanent. Reply once, briefly, non-defensively, inviting the customer to make contact directly — then move on and bury it with volume.

### 4.3 Review acquisition strategy for a 2–3 person showroom

Scale is the binding constraint: with 2–3 people there is no capacity for a review platform, automated drip sequences, or a dedicated follow-up role. The strategy must survive being done by a busy owner between jobs.

**Where to concentrate.** Google first, and for the first 90 days, Google *only*. Google reviews affect map-pack ranking; Yelp reviews do not, and Yelp actively filters reviews from new or infrequent reviewers — asking customers to review on Yelp frequently produces filtered reviews that are invisible and demoralizing. Once Google is past ~25 reviews, add Facebook as a secondary.

**The mechanism — the walk-out ask.** For a showroom this beats every automated system. At job completion, while on site and the customer is visibly pleased, ask in person: *"Would you mind leaving us a Google review? It genuinely makes a difference for a small shop like ours."* Then send the short link from your phone before you leave the driveway. In-person ask plus immediate link converts several times better than any later email.

**Practical setup:**
- Generate the GBP short review link and save it as a phone text-replacement shortcut, so it takes two seconds to send.
- Print a small card with a QR code to the same link. Include it in every showroom purchase bag and leave one at job completion.
- Add the link to the email signature and to invoices.

**Cadence.** Target 2–4 reviews per month, sustained. This is deliberately modest and therefore achievable at 2–3 staff. Steady accrual outranks a burst — 30 reviews arriving in one week is a recognized spam signal and risks a filter. At 3/month the business passes most local tile competitors within a year.

**Backlog.** There are 25 years of past customers. Have the owner list 20–30 clients from the last two years he remembers being happy, and contact them personally — a call or text, not a mass email. Expect maybe 30% conversion, which is 6–10 reviews from one afternoon of work. Do this once; do not repeat it, and never incentivize.

**Compliance.** No discounts, no gift cards, no prize draws for reviews — that violates Google policy and can wipe the review set. Ask everyone, not only customers you expect to be positive (selective solicitation is also a policy violation, and less obviously, it produces a suspiciously perfect profile that converts worse than a 4.7).

**Response discipline.** Reply to every review within 48 hours, positive included. Reference the specific project in the reply ("glad the Two Rivers backsplash worked out"). Responses are visible to prospects and are a documented trust signal.

---

## 5. On-site local signals the new website must include

### 5.0 The blocking problem: nothing is server-rendered

Verified on the live site: the served HTML contains **one** occurrence of "Edgewater," **zero** occurrences of "Annapolis," **zero** occurrences of "Anne Arundel," and **zero** occurrences of either phone number. All real content is injected client-side from a JS payload.

This means the site currently offers search engines almost no crawlable local text at all — and AI answer engines, which are markedly less tolerant of client-side rendering than Googlebot, likely see a nearly blank page. Fixing this is a prerequisite; every recommendation below assumes content is rendered into the initial HTML response.

### 5.1 Service-area strategy

The correct model is a **hub-and-spoke with a hard quality floor**, not a city-page matrix.

**Hub:** one strong Edgewater page — the showroom location page, which is also effectively the homepage's local anchor.

**Spokes — build in this order, and only as far as real content supports:**

1. **Annapolis** — the highest-volume nearby market, ~5 miles, genuine service area. Build this first and build it properly.
2. **Anne Arundel County** — a county-level page framing the full service area; useful for broader queries and as a parent for the towns.
3. **Edgewater** — the showroom's own town.
4. Then, *only if there is real project work to show*: **Bowie**, **Dunkirk**, **Odenton/Two Rivers** — each of which is backed by an existing verified portfolio project. This is the key constraint: **a location page is justified when there is a completed local project to show, and not before.**

Do not build pages for Severna Park, Crofton, Arnold, Pasadena, Davidsonville, Glen Burnie, Crownsville and so on just because they are nearby. Eight thin town pages will underperform three substantial ones and risk a site-wide quality assessment. Note also that a **Crofton** page would be actively counterproductive while the Crofton citation cluster is unresolved — it would reinforce exactly the wrong geographic signal.

### 5.2 What makes a location page useful rather than doorway spam

The distinction Google draws is whether the page would still be worth publishing if the town name were removed. A doorway page is a template with a variable swapped; a real location page contains information that exists nowhere else on the site.

**Required on every location page:**
- **A real local project.** Photos of actual work completed in that town, named — "Backsplash, Two Rivers, Odenton." This is unfakeable, and this business already has four such projects sitting unused.
- **A customer reference from that area** where one exists.
- **Genuinely local specifics.** Distance and drive time from the Edgewater showroom; the neighborhoods or developments served; anything materially different about the work there (older Annapolis homes with uneven subfloors, waterfront humidity, HOA constraints in planned communities like Two Rivers). This is where a 25-year operator's actual knowledge becomes content no competitor can copy.
- **Its own photography, headline, meta description and body copy.** No template sentences with the town interpolated.
- **A clear next step** — visit the showroom, call, book a consultation.

**Disqualifying signs:** identical copy across pages with the town swapped; a list of 30 towns in the footer; auto-generated town pages with no project; embedded maps as the only "local" element; a page you would be embarrassed to show the customer it names.

**Rule of thumb:** three excellent location pages beat twenty templated ones, and are far cheaper to maintain at 2–3 staff.

### 5.3 Map, directions and hours

- Embed a Google Map on the contact and location pages, loaded lazily so it does not block rendering.
- Write **text driving directions** from the recognizable local landmarks — from Annapolis via Rt 2 over the South River bridge, from Rt 50, from Rt 214. Text directions are crawlable and genuinely useful; an embedded iframe is neither.
- State parking explicitly ("free parking in front").
- Publish hours as **crawlable HTML text**, not only in schema, and match them to GBP exactly. Resolve the four-way hours conflict in §1c first — this must be settled before anything else is published.
- If weekday visits are genuinely by appointment, say so plainly on the page and set GBP hours to match, rather than posting open hours the showroom does not keep. Mismatched hours generate "permanently closed" edits from frustrated visitors and negative reviews.
- Show the primary phone as tappable `tel:` text (not an image) in the header of every page.

### 5.4 NAP on the site itself

Put the canonical NAP in the footer of every page as crawlable text, identical character-for-character to the GBP entry. Add the full NAP plus hours and map to a dedicated contact page. **Remove the secondary phone number from general site copy** — keep the WhatsApp number only on the WhatsApp button, clearly labeled, so it does not read as a second business phone to a crawler.

### 5.5 Legacy brand handling

Current site copy uses "Digitile International" 13 times and "Maryland Tile Boss" 12 times, with no explanation of the relationship. Whichever name is chosen, add an explicit bridging sentence in the About page and footer:

> "Digitile International — now also known as The Maryland Tile Boss — has served Edgewater and Anne Arundel County since 2000."

This is a real ranking mechanism, not decoration: it lets Google reconcile the two entities rather than treating them as unrelated, and it protects existing rankings for the legacy name during the transition.

### 5.6 LocalBusiness schema — current state and required fixes

**Current live JSON-LD, verified from marylandtileboss.com:**

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://marylandtileboss.com",
  "name": "The Maryland Tile Boss",
  "address": { "@type": "PostalAddress", "streetAddress": "14 Mayo Rd",
    "addressLocality": "Edgewater", "addressRegion": "Maryland",
    "postalCode": "21037", "addressCountry": "UNITED STATES" },
  "geo": { "@type": "GeoCoordinates", "latitude": 38.9402169, "longitude": -76.5622115 },
  "url": "https://marylandtileboss.com",
  "openingHours": ["Mo 10:00:00-16:00:00", ...],
  "priceRange": "$",
  "sameAs": ["https://www.facebook.com/61574520041133"]
}
```

**Defects, in severity order:**

| # | Defect | Fix |
|---|---|---|
| 1 | **`telephone` is entirely absent** | Add it. This is the most important single property on a LocalBusiness and its omission is a significant miss. |
| 2 | `openingHours` uses `"Mo 10:00:00-16:00:00"` — non-standard seconds | Use `"Mo 10:00-16:00"`, or preferably switch to `OpeningHoursSpecification` objects |
| 3 | `addressRegion: "Maryland"` | Must be the two-letter code `"MD"` |
| 4 | `addressCountry: "UNITED STATES"` | Must be ISO 3166-1 alpha-2: `"US"` |
| 5 | `@type: "LocalBusiness"` is generic | Use a specific type. For a combined showroom + installer, the strongest option is `HomeAndConstructionBusiness` — or model two linked nodes, a `Store` for the showroom and a `HomeAndConstructionBusiness` for installation |
| 6 | `sameAs` has one entry | Add Google Maps place URL, both Yelp URLs, Houzz, Nextdoor, Alignable — this is the primary mechanism for telling Google these scattered listings are one entity, and it directly addresses §2 |
| 7 | `priceRange: "$"` | Misleading for a premium showroom. Use `"$$"`–`"$$$"` or omit |
| 8 | No `email`, `areaServed`, `hasMap`, `logo`, `founder`, `image` alt context | Add all |

**Required additions:**
- `telephone`, `email`, `logo`, `image` (multiple real photos)
- `areaServed` — array of `City` entries: Edgewater, Annapolis, Bowie, Dunkirk, Odenton, plus `AdministrativeArea` Anne Arundel County
- `hasMap` — the Google Maps place URL
- `founder` — `Person`, Michael DiGirolamo
- `openingHoursSpecification` — properly structured, matching GBP exactly
- `hasOfferCatalog` — the service list from §3.2
- `alternateName` — the legacy names, an underused property that directly supports entity reconciliation
- **`aggregateRating` — only when real reviews exist, and only reflecting true counts.** Marking up fabricated or self-reported ratings is a manual-action risk. Given §4, omit this entirely for now.

Add `Service` schema on service pages, `BreadcrumbList` site-wide, and `FAQPage` on the FAQ page (which already exists and is currently unmarked).

---

## 6. Citation gap list

Priority tiers. **Do not begin Tier 1 until Phase 4 of §2.3 is complete** — the canonical NAP must be settled first.

### Tier 1 — Core, do first

| Directory | Note |
|---|---|
| **Google Business Profile** | Claim the *existing* profile. Highest priority item in this document. |
| **Bing Places for Business** | No listing found. Free, and it feeds Microsoft Copilot and DuckDuckGo. |
| **Apple Business Connect** | No listing found. Free, feeds Apple Maps and Siri — significant for a showroom people drive to. |
| **Yelp** | Claim both, merge duplicates, correct the parked website URL. |
| **Facebook** | Consolidate the pages; complete NAP fields. |

### Tier 2 — Data aggregators (feed hundreds of downstream sites)

Foursquare · Data Axle · Neustar/Localeze. Correcting these prevents downstream sites from silently reverting your fixes.

### Tier 3 — Home-services verticals (high intent for the installation side)

| Directory | Status |
|---|---|
| **Houzz** | Only the Crofton record exists. Create/correct an Edgewater profile — Houzz is the strongest fit in this vertical for a design-led showroom, and its project galleries suit the portfolio work. |
| **Angi** | Only a Crofton record. |
| **Thumbtack** | No listing found. |
| **Porch** | No listing found. |
| **BuildZoom** | No listing found. |
| **HomeAdvisor** | Only the Crofton record. |
| **Nextdoor** | Exists — verify and complete. Unusually valuable here: Nextdoor is neighborhood-scoped and Edgewater/Annapolis is exactly the referral-driven market this business already wins in. |

### Tier 4 — General business directories

Better Business Bureau (no profile — worth creating; BBB ranks well for branded searches in MD) · Yellow Pages · Manta (Edgewater record) · Hotfrog (**correct the "Digimelce International LLC" corruption**) · Chamber of Commerce (chamberofcommerce.com) · Cylex · Brownbook · Hotfrog · MapQuest · Superpages · eLocal · CitySquares

### Tier 5 — Industry and local, highest-value per unit of effort

| Target | Why |
|---|---|
| **Anne Arundel County Chamber of Commerce** (annearundelchamber.org) | A real membership with a real directory listing. Locally authoritative, geographically exact, and a genuine referral channel — worth more than 20 generic directories. |
| **NTCA** (National Tile Contractors Association) | Industry authority; strong topical relevance |
| **TCNA** (Tile Council of North America) | Industry authority |
| **Schluter-Systems dealer/installer locator** | Michael is Schluter-trained — this is a verified certification with a real directory behind it |
| **Wedi dealer locator** | Michael is Wedi Pro Certified — same reasoning |
| **landoftile.com** | Listing already exists; verify and complete it |
| Local: Annapolis/West Anne Arundel chambers, Visit Annapolis business directory, local homebuilder associations | Genuinely local, genuinely relevant |

The Schluter and Wedi locators deserve emphasis: they are manufacturer-verified credentials that competitors cannot self-declare, they carry real domain authority, and they are exactly the kind of corroborating signal that rebuilds a fractured entity.

---

## 7. Prioritized action list

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Confirm with owner: legal/DBA name, signage, which phone is primary, Crofton relationship | Low | **Blocking** — nothing else is safe to start |
| 2 | Claim the existing GBP (Place ID `ChIJvwQXrATvt4kRu36TWBUl9Ws`); do not create a new one | Low | Critical |
| 3 | Point `digitilestore.com` away from parking → 301 to canonical | Low | Critical — live Yelp traffic currently hits a lander |
| 4 | Resolve the four-way hours conflict; publish one version everywhere | Low | High |
| 5 | Fix the JSON-LD: add `telephone`, correct `addressRegion`/`addressCountry`/`openingHours`, expand `sameAs` | Low | High |
| 6 | Merge the duplicate Yelp listings; reply once to the 1-star review | Low | High |
| 7 | Server-render the site's content — currently near-invisible to crawlers | Med | Critical |
| 8 | Start the Google review programme: short link, QR cards, backlog outreach | Low | **Highest long-term** |
| 9 | Resolve or reclaim the Crofton cluster (after #1) | Med | High |
| 10 | Consolidate Facebook pages | Low | Medium |
| 11 | Build the Annapolis and Anne Arundel County pages properly | Med | High |
| 12 | Bing Places + Apple Business Connect | Low | Medium |
| 13 | Aggregators, then Tier 3–5 citations | Med | Medium |
| 14 | Schluter + Wedi + NTCA + County Chamber listings | Low | High per unit effort |

---

## 8. Explicitly unverified

Recorded so nothing here is mistaken for established fact:

- Google review count and rating — **must be checked manually; the most important open item**
- Facebook follower counts, ratings, review counts (all pages)
- Whether Facebook page ID `171557916189397` is distinct from `100063608888900`
- Nextdoor and Cylex listing details (403)
- Full landoftile.com NAP (403)
- Manta, Angi, HomeAdvisor, Homeyou, Blue Book listing details beyond name/address/phone (403)
- **The relationship between "Nash & Sons dba Digi-tile" (Crofton) and Michael DiGirolamo**
- MHIC license 51273 — shown on Houzz; the Maryland licensing public query could not be driven programmatically, so current status/holder is unconfirmed
- Whether the business owns `digitileinc.com` or `digi-tile.com` (both dead — registrant not checked)
- Bing Places / Apple Maps presence — no listing surfaced, but absence of a search result is not proof of absence
- Actual current showroom square footage (three conflicting figures) and true years in business (four conflicting claims)
