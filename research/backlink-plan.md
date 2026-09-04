# Backlink & Off-Page Plan — The Maryland Tile Boss

**Business:** Tile showroom + tile installation, 14 Mayo Rd, Edgewater, MD 21037
**Prepared:** 2026-09-04
**Inputs:** `research/competitors.md` · `research/local-seo.md` · `research/keywords.md` · `source-of-truth/business-data.md`
**Verification:** organisations, dealer locators and directory URLs named below were checked live on 2026-09-04. Items that could not be confirmed are marked **`confirm`** rather than asserted.

---

## 0. Read this first

### What we will not do

No private blog networks. No paid link packages. No guest-post farms, no link exchanges, no Fiverr "500 backlinks", no blog-comment or forum-signature spam, no mass directory blasting. Beyond the ethics, in **this specific situation** those tactics are actively destructive: `local-seo.md` establishes that the business already presents to search engines as 7–10 different companies across two cities with two phone numbers. **Every low-quality listing created before the name and phone are settled mints a fresh copy of that inconsistency.** Volume is the enemy here, not the goal.

### What "backlinks" actually means for this business

For a single-location tile showroom, the winning off-page profile is not the profile of a national brand. `competitors.md` documents something unusual about this market that should reshape the whole plan:

> **Third-party profiles routinely outrank competitors' own websites.** In Home Stone's homepage ranks *below* its Nextdoor and X profiles for stone queries. KT Tiles ranks *below* its Houzz and Yelp profiles for its best query. The #1 result for `tile store Annapolis MD` is a **manufacturer brand-locator page** (`stoneimpressions.com/store/in-home-stone-annapolis/`). The #1 and #2 results for `tile store Edgewater MD` are **American Olean dealer-locator pages**.

That is the actual competitive picture. The links that win in this market are **manufacturer dealer locators, industry directories, chamber and association listings, and Houzz** — not editorial links from big websites. Those are all obtainable by a 2–3 person business, mostly by making phone calls, and several of them are free.

### The one rule that governs sequencing

From `local-seo.md` §2.3: **consolidate before you build.** Nothing in §3 onward (new listings) should start until the canonical name, phone and hours are locked and the Google Business Profile is claimed. The exceptions are §1 and §2, which are safe — and urgent — to start immediately.

---

## 1. 🚨 PRIORITY ZERO — Recover the dead domains

**This is almost certainly the highest-ROI link action available to this business, and it does not require earning a single new link.**

### The situation

`local-seo.md` §1d verified the domain estate by direct HTTP request:

| Domain | Status (verified 2026-09-04) | Who currently points at it |
|---|---|---|
| `digitilestore.com` | **200 OK, 114-byte JS redirect to `/lander`** — a domain-parking stub | **Yelp listing A** (the one carrying the primary phone and the only review). Still indexed and *still ranking* — `competitors.md` §2.3 shows two `digitilestore.com` URLs in the top 10 for `tile store Edgewater MD` |
| `digi-tile.com` | **404** — DNS resolves, a server answers, nothing is there | **Houzz** and **HomeAdvisor** listings |
| `digitileinternationalshowroom.com` | Connection refused / timeout | Indexed; surfaces on brand searches |
| `digitileinternationalshowroomanddesigncenter.com` | Timeout | — |
| `digitileinc.com` | DNS **NXDOMAIN** | Indexed; surfaces for `tile design center Maryland showroom` (`keywords.md` §1.8) |
| `digitile-international.ueniweb.com` | 200 — **live duplicate** of the new site | Hotfrog, AnnapolisDirections |

### Why this outranks every other link tactic

A 25-year-old business accumulates links passively — supplier pages, old chamber listings, a local news mention, a designer's project credit, a forum post, a customer's blog. **Every one of those that points at `digitilestore.com`, `digi-tile.com` or `digitileinc.com` is currently passing its value into a parking page, a 404 or dead DNS.** Recovering and redirecting those domains converts links that already exist and are already earned into links that count — at the cost of a domain renewal.

You do not even need a backlink tool to know that *some* of these exist: **Yelp, Houzz and HomeAdvisor are confirmed, live, high-authority pages pointing at dead client domains right now** (`local-seo.md` §1a, §1b). That alone justifies the work.

There is a second, non-SEO argument that matters just as much: a prospect who finds the business on Yelp and clicks the website link **lands on a domain-parking page.** For a showroom whose entire proposition is 45 years of craftsmanship, that is a conversion problem before it is a ranking problem.

### How to check what those domains are actually worth — step by step

**Step 1 — Establish ownership and recoverability.** In Terminal, or via any WHOIS lookup site (`whois.domaintools.com`, `lookup.icann.org`):

```
whois digitilestore.com
whois digi-tile.com
whois digitileinc.com
whois digitileinternationalshowroom.com
whois digitileinternationalshowroomanddesigncenter.com
```

Read three fields: **registrar**, **expiry date**, **registrant email**. The registrant email is very likely `digi-tile@comcast.net` (the address in `business-data.md`) — if so, Mike can almost certainly still log in and recover control. `digitilestore.com` returning 200 with a parking lander means it is **registered and renewed by someone**; if that someone is Mike, this is a 20-minute fix. If a registrar shows it expired and re-registered by a third party (common with drop-catchers), it may need to be bought back — get a price before deciding, and **do not pay a large sum**; the value here is real but bounded.

**Step 2 — See what links each domain holds.** Free options, in order of usefulness:

- **Ahrefs free Backlink Checker** (`ahrefs.com/backlink-checker`) — enter the domain, no account needed; shows domain rating and the top referring domains. Best free snapshot available.
- **Moz Link Explorer** (`moz.com/link-explorer`) — a free account allows a small number of queries per month and works on any domain, not just ones you own. Export the linking domains.
- **Semrush free tier** — similar, one domain, limited rows.
- **Bing Webmaster Tools** — free and complete, but requires verifying ownership, so this only becomes available *after* recovery. Do it then; it is the best free ongoing link data there is.
- **Manual, free, and surprisingly effective:** search Google for `"digitilestore.com" -site:digitilestore.com`, and repeat for `"digi-tile.com"`, `"digitileinc.com"`, `"Digitile International"` and `"Digi-Tile"`. This surfaces pages that *mention* the old domains and names, which is both a link list and a citation-cleanup list.

**Step 3 — Measure the indexed footprint.** Search `site:digitilestore.com` and `site:digi-tile.com`. Every URL returned is a page Google still has and still ranks — and every one of them is a redirect target you can reclaim.

**Step 4 — Rebuild the old URL list for the redirect map.** Use the Wayback Machine (`web.archive.org/web/*/digitilestore.com/*`) to enumerate what pages used to exist. Map each to its closest equivalent on `marylandtileboss.com`:

| Old URL | New target |
|---|---|
| `digitilestore.com/` | `/` |
| `digitilestore.com/about-us/` | `/about/` |
| `digitilestore.com/products/tiles-for-floor/` | `/tile/` |
| anything else | closest match, homepage only as a last resort |

**Step 5 — Execute.** Remove the parking, point DNS at a redirect service (Cloudflare's free tier does this well, as do most registrars), and serve **301** — never 302, never a chain, never a meta-refresh. Keep the redirects live permanently and keep renewing the domains; a redirect that lapses in two years throws the recovered equity away again.

**Step 6 — Fix the listings that point at the dead domains.** Independently of recovery, update the website field on **Yelp listing A** (currently `digitilestore.com`), **Houzz** and **HomeAdvisor** (currently `digi-tile.com`) to `marylandtileboss.com`. Do this even if every domain is recovered — a direct link beats a redirected one.

**Difficulty:** Easy to Medium (depends entirely on whether the registrar login still works)
**Effort:** 1–3 hours plus roughly $15–40 per domain per year
**First action:** Run the five `whois` commands and send Mike the registrant email addresses to identify. **Do this today.**

### One more consolidation item

`digitile-international.ueniweb.com` serves byte-identical content to the new site and **ranks against it** (`competitors.md` §2.3, §2.4). Two live properties competing for the same queries splits everything. It cannot be 301'd (it is a platform subdomain), so either add `<link rel="canonical">` to `marylandtileboss.com` on every page of it, or take it down. Leaving it up is the worst of the three options.

---

## 2. Tile & stone manufacturers and distributors — dealer locators

**The single highest-value category on this list**, for four reasons: these pages carry real authority, they are exactly topically relevant, they are geographically precise, and — as `competitors.md` proves — **they demonstrably rank in this market.**

### The proof, from the client's own home-turf SERP

`competitors.md` §2.3: positions **1 and 2** for `tile store Edgewater MD` are `locations.americanolean.com/md/edgewater/...`. A live fetch of that page on 2026-09-04 confirms it lists **two Edgewater dealers — 1185 East Central Ave (South River Flooring) and 3059 Solomons Island Rd, Suite B.** The client, at 14 Mayo Rd, **is not on it.**

So: the top two organic results for the client's most important local query are a manufacturer's dealer directory listing the client's competitors. Getting listed there is not a theoretical link — it is a direct capture of the two highest positions on the home-turf SERP.

Same pattern at the Annapolis level: `competitors.md` §2.1 shows the **#1 result for `tile store Annapolis MD` is `stoneimpressions.com/store/in-home-stone-annapolis/`** — a brand-locator page for a competitor.

### The repeatable process: the shelf audit

This is a one-afternoon job that generates the whole target list. **Walk the showroom floor with a phone and photograph every manufacturer display, sample board, header card and brochure rack.** Every brand name on that list is a candidate. For each: search `"[brand] where to buy"` or `"[brand] dealer locator"`. If a locator exists, the business belongs on it — it stocks the product.

The showroom photographs on file already show at least: **Schluter, Wedi, Warmup, Merola, Chesapeake Flooring, Akua, Tile By Design, Wickham.**

### Named targets

| Target | What it is | Why relevant | Difficulty | Effort | First action |
|---|---|---|---|---|---|
| **Schluter-Systems** — `schluter.com/.../store-finder` (dealer) and `/distributor-finder` | Dealer locator for the dominant tile-setting-systems brand in North America | Highest-authority, most relevant locator in the trade. `competitors.md` §4.5 notes KT Tiles built a whole `/schluter-kerdi` page around this brand and still can't rank it | **Medium** | 1 h + a rep conversation | Call the regional Schluter rep. Ask two separate questions: (a) what is required to appear on the **dealer** locator, and (b) what is required to be listed as a **certified installer**. ⚠️ These are different bars — dealer status is about stocking product; installer certification requires attending Schluter's workshop. **Do not claim either until confirmed** (`content-roadmap.md` §7) |
| **wedi** — `wedicorp.com/en/where-to-buy/` (US) / `wedi.net/en/service/dealer-search` | "Where to buy" dealer and distributor locator | Same logic. `competitors.md` §7.4 identifies Schluter + wedi together as a dual credential **no competitor in this market claims** | **Medium** | 1 h + rep conversation | Same two-part question. wedi also runs an authorised-distributor signup — ask which tier applies |
| **Warmup** — `warmup.com/resellers`, `warmup.com/installers` | Reseller network plus "Warmup Pro" approved-installer community | Electric floor heating. **⚠️ Double duty:** if Warmup is genuinely on the floor, this simultaneously unblocks the heated-floor content and GBP categories currently gated as unverified (`keywords.md` §2.6). `competitors.md` notes CST Studio's `/floor-heating` page is one of the few genuinely differentiated competitor pages | **Medium** | 1 h | Confirm with Mike that Warmup is stocked and that he installs it, then apply to both the reseller list and Warmup Pro |
| **Chesapeake Flooring** — `chesapeakeflooring.com/pages/store-locator` | **Maryland-based distributor**, Glen Burnie (6950 Aviation Blvd) | The best co-marketing prospect on this list. A regional distributor 20 minutes away has a direct commercial interest in its local dealers being findable, and a local rep who can be met in person | **Easy** | 1 h | Call the Glen Burnie office, ask the rep to add the showroom to the store locator, and ask in the same call about dealer-spotlight content (see §8) |
| **Merola Tile** — `merolatile.com/where-to-buy/` | "Where to buy" page | Merola sells heavily through big-box and online; **`confirm` whether independent showrooms appear on the locator or only major retailers**. Ask before investing time | **Medium** | 30 min | Email via the where-to-buy page asking how independent dealers are listed |
| **Akua Mosaics** — `akuamosaics.com` | Florida-based mosaic manufacturer | Retailer listings for Akua are visible across independent tile-store sites nationally. **Notably, Akua also appears on `landoftile.com/brands/akua-mosaics-b-896/`** — see §4, where the client already has a listing | **Medium** | 30 min | Contact Akua and ask to be added to their retailer/where-to-buy list |
| **"Tile By Design"** | ⚠️ **Ambiguous** — at least three unrelated US companies use this name (a Plymouth MN wholesaler trading as Tile X Design, a Danvers MA showroom, and a NY/NJ group) | Cannot be actioned until identified | — | 5 min | Photograph the display header in the showroom and identify which company it is before doing anything |
| **Wickham** | Canadian hardwood flooring manufacturer with a dealer network | **`confirm`** whether hardwood is genuinely carried. If it is a small sideline, take the locator listing but **do not build content around it** — it dilutes the tile-specialist positioning (`local-seo.md` §3.1) | **Easy** | 30 min | Confirm with Mike, then apply if genuine |
| **American Olean / Daltile / Marazzi** — `americanolean.com/dealerlocations`, the **AOne Dealer program**, `daltile.com/store-locator` | Dealer locator plus a formal authorised-dealer programme requiring a branded display on the sales floor | **The highest-priority single listing in this section** — it occupies positions 1 and 2 on `tile store Edgewater MD` and currently lists only competitors | **Medium–Hard** (AOne requires carrying a display system) | 2 h + rep meeting | Contact the American Olean rep about the AOne Dealer program and what display commitment it requires. Even if AOne is too big a commitment, ask what gets a stocking dealer onto `locations.americanolean.com` |
| **StoneImpressions** — dealer locator | Ranks **#1** for `tile store Annapolis MD` (pointing at In Home Stone) | Direct, verified competitor-link gap. Only relevant if the line is or could be carried | **Medium** | 30 min | Ask whether the line is available to an Edgewater showroom |
| **Setting-material and adjacent brands** — Laticrete, Mapei, Custom Building Products, Ardex, Bostik | Most run "where to buy" locators | Lower authority individually, but each is free, relevant and quick | **Easy** | 15 min each | Batch these — one afternoon, one form each |
| **Everything else on the shelf audit** | Emser, MSI, Florida Tile, Bedrosians, Encore Ceramics, Arizona Tile, Anatolia and whatever else the photos show | Encore Ceramics is worth a specific look — `competitors.md` §4.3 notes Chesapeake Tile & Marble advertises being an Encore dealer | **Easy–Medium** | 15–30 min each | Work the list in order of how prominent the display is |

**Realistic outcome for this section: 6–12 genuinely relevant, geographically exact links from authoritative industry domains.** That is a stronger profile than most local competitors hold, and it is obtained almost entirely by telephone.

---

## 3. Maryland / Anne Arundel business directories and chambers

Sequencing note: `local-seo.md` §6 gates all citation-building behind the NAP consolidation. **Do not start this section until the canonical name, phone and hours are locked and the GBP is claimed.**

| Target | What it is | Why relevant | Difficulty | Effort | First action |
|---|---|---|---|---|---|
| **Anne Arundel County Chamber of Commerce** — `annearundelchamber.org`, directory at `members.annearundelchamber.org/directory` | The primary business chamber for Annapolis and the county. Offices at 1910 Towne Centre Blvd, Annapolis | `local-seo.md` §6 Tier 5 rates this as worth more than 20 generic directories: locally authoritative, geographically exact, and a real referral channel into the builder/designer network the trade programme targets | **Easy** (paid membership) | 1 h + annual dues | Call membership and ask for the fee tier for a business with 2–3 employees, and confirm the directory listing includes a followed link |
| **Northern Anne Arundel County Chamber** — `business.naaccc.com/directory` | Second county chamber, north-county focused | Secondary — the geography is wrong for Edgewater. Only worth it if dues are trivial | **Easy** | 30 min | Check dues; deprioritise unless cheap |
| **Anne Arundel Economic Development Corporation** — `aaedc.org` | County economic development body; publishes business resources and a list of chambers and business organisations | Free or low-cost, county-authoritative, and its published org list is itself a prospecting source for this plan | **Easy** | 30 min | Contact AAEDC to ask what listing or resource pages a local retailer qualifies for |
| **South County / Edgewater-area business associations** | Edgewater sits in South County, which has its own local business community distinct from Annapolis proper | Hyper-local relevance for the exact town nobody else contests (`competitors.md` §7.1) | **Easy** | 1 h research | `confirm` — search for the current South County / Edgewater business association and civic association; local groups change names and URLs often |
| **Better Business Bureau (Maryland)** | `local-seo.md` §4.1 confirms **no BBB profile exists** | BBB profiles rank well for branded searches in Maryland, and `competitors.md` §4.2 notes CST Studio actively advertises its A+ rating. A missing profile is a visible gap against competitors | **Easy** (accreditation is paid; a basic profile is not) | 1 h | Create the free profile first with the canonical NAP. Decide on paid accreditation later |
| **Visit Annapolis & Anne Arundel County** | Tourism-focused destination marketing organisation | **Honest assessment: poor fit.** Its directory is oriented to visitor-facing businesses. Low priority | **Medium** | — | Skip unless a partner tier obviously fits a retail showroom |
| **Patch — Edgewater/Davidsonville**, `naptownscoop.com` | Community news platforms with local business sections | Free, local, and useful for entity corroboration more than authority | **Easy** | 30 min | Check whether either accepts a free business listing |
| **General national directories** — Yellow Pages, Manta, Hotfrog, Cylex, MapQuest, Superpages, chamberofcommerce.com | Baseline citations | **Low value individually.** Their real job here is *correction*, not creation — `local-seo.md` §1a flags that Hotfrog currently lists the business as **"Digimelce International LLC"**, a corrupted name actively damaging the entity | **Easy** | 3–4 h for the batch | Correct the existing broken records **before** creating new ones. Handle via the data aggregators (Foursquare, Data Axle, Neustar/Localeze) so the fixes propagate rather than being overwritten |

---

## 4. Industry-specific directories — the highest value per unit of effort

| Target | What it is | Why relevant | Difficulty | Effort | First action |
|---|---|---|---|---|---|
| **NTCA — National Tile Contractors Association** — `tile-assn.com`, member search at `tile-assn.com/search/` | The trade association for tile contractors; 1,500+ members; membership includes a searchable member directory, the NTCA Reference Manual, NTCA University access and partner product vouchers | Maximum topical relevance — a tile association listing a tile contractor. Also a genuine business benefit beyond the link: the Reference Manual is the industry standard document | **Easy** (paid membership) | 1 h + dues | Request the contractor membership rate at `tile-assn.com/page/ntca-membership-categories`, or call 601-939-2071 |
| **CTEF — Certified Tile Installer directory** — `ceramictilefoundation.org/find-certified-tile-installers` | The Ceramic Tile Education Foundation's CTI programme — the **only third-party hands-on assessment of installer skill recognised by the tile industry**. Certified installers appear in a public searchable directory | **This is the standout item in the whole plan.** The constraint on this project is that credentials must not be fabricated — CTEF is the answer to that constraint: a credential that can be genuinely *earned*. For a third-generation installer with 45 years of hands-on experience, the CTI hands-on test is a very winnable proposition. It produces a directory link, a verifiable differentiator no local competitor claims, and legitimate content for `/about/` | **Medium** (a real test must be passed) | Test fee + a day | Download the Certified Tile Installer Information Kit from `ceramictilefoundation.org/download-certified-tile-installer-information-kit` and find the nearest test date |
| **landoftile.com** | Brand-to-store directory. `local-seo.md` §1a confirms **the client already has a listing** (store ID `s-3176`) | **Free and already half-done.** `competitors.md` §2.2 shows landoftile pages taking **two positions** in the top 10 for `tile showroom Annapolis MD`. The site indexes by brand — e.g. `landoftile.com/brands/akua-mosaics-b-896/` — so listing every brand carried multiplies the pages that point at the store | **Easy** | 1–2 h | Claim the existing `s-3176` listing, correct the NAP to canonical, and add every brand from the shelf audit |
| **TCNA — Tile Council of North America** | Industry body | **Honest assessment:** TCNA membership is oriented to manufacturers and suppliers, not retailers or installers. `local-seo.md` lists it Tier 5 but it is likely a poor fit | **Hard** | 15 min to check | Check membership categories before investing anything |
| **Coverings** — the North American tile & stone exhibition | ⚠️ Legacy copy claims 15+ consecutive years of attendance — **unverified** | If attendance is genuine, attendee/exhibitor listings, show coverage and any speaking or panel participation are legitimate link and credibility sources. Also where the manufacturer reps in §2 all are, in one building | **Medium** | — | Confirm attendance with Mike first. If he goes, treat the show as the year's single best relationship-building trip for every item in §2 and §8 |

---

## 5. Builder and designer associations

These serve the `/trade/` lock-box programme directly — `competitors.md` §7.10 finds **no competitor in this market markets a trade programme at all.** These links come with qualified B2B referrals attached, which makes them worth more than their SEO value alone.

| Target | What it is | Why relevant | Difficulty | Effort | First action |
|---|---|---|---|---|---|
| **MBIA — Maryland Building Industry Association** — `marylandbuilders.org`, directory at `web.marylandbuilders.org/directory` | Trade association representing 1,300+ member firms across Maryland, **including an Anne Arundel County chapter**; home builders, remodelers, developers and affiliate suppliers | **The best association fit for the trade programme.** Affiliate/supplier membership puts the showroom in front of exactly the builders and remodelers the lock-box exists to serve, plus a directory listing on an authoritative Maryland domain | **Easy** (paid) | 1 h + dues | Call MBIA, ask for the **affiliate/supplier** membership rate and confirm the Anne Arundel chapter is included |
| **Greater Annapolis Design District** — `greaterannapolisdesigndistrict.com/member-directory/` | Membership organisation of Annapolis-region home build and design professionals | **A verified competitor-link gap.** `competitors.md` §4.3 documents Chesapeake Tile & Marble as a member and its listing at `greaterannapolisdesigndistrict.com/members/chesapeake-tile-and-marble/`. In Home Stone's campus is described as being *in* the district | **Medium** ⚠️ | 1 h | Ask directly whether membership requires a physical address inside the Annapolis Design District. Edgewater is ~5 miles out, so this may not be open — **find out before planning around it** |
| **ASID Maryland Chapter** — American Society of Interior Designers | Industry-partner membership is a standard, legitimate category for showrooms | Directly targets the designer half of the lock-box audience. Designers specify tile repeatedly, which makes them the highest-LTV relationship available | **Medium** (paid, and worth attending events to justify) | 2 h + dues | Contact the Maryland chapter about industry-partner membership and what the directory listing includes |
| **NKBA Chesapeake Chapter** — National Kitchen & Bath Association | Showroom/supplier membership | Kitchen and bath is exactly where backsplash and shower work originates | **Medium** | 2 h + dues | `confirm` the current Chesapeake-region chapter contact and supplier membership terms |
| **NARI Chesapeake** — National Association of the Remodeling Industry | Remodeler association | Remodelers subcontract tile constantly — this is a direct route to the subcontract work in `keywords.md` §2.10 | **Medium** | 2 h + dues | `confirm` the current chapter and supplier membership terms |

**Budget reality:** these memberships cost money — typically a few hundred dollars each per year. **Do not join all five.** Start with **MBIA** (best builder fit) and **NTCA** (best industry fit) and add a designer body only if the trade programme is producing. Judge each on referrals received, not links gained; if a membership produces no referrals in year one, do not renew it.

---

## 6. Local publications and PR

Set expectations honestly: **a realistic outcome is one to three placements a year**, and each requires a genuine story. This is not a programme, it is a handful of well-aimed pitches. It is included because a single local-news link is worth more than fifty directory listings, and because the business genuinely has two stories worth telling.

| Target | What it is | Angle that would actually get picked up | Difficulty | Effort | First action |
|---|---|---|---|---|---|
| **Eye On Annapolis** — `eyeonannapolis.net` | Independent Anne Arundel County news site with strong local reach; covers local business | The most approachable outlet in the county. A small-business feature or a rebrand/new-showroom notice is squarely in its wheelhouse | **Easy–Medium** | 2 h | Email the editor with a short, specific pitch — not a press release |
| **What's Up? Media** — `whatsupmag.com` (*What's Up? Annapolis*, *West County*, and the *Chesapeake Home + Living* title) | Regional lifestyle and home publisher | **Best fit for the strongest story.** Pitch the `/blog/tile-waterfront-homes-chesapeake/` piece from `content-roadmap.md` as expert commentary: *what tile actually survives in a Bay-area home.* That is a real article a home magazine wants, and its natural expert is a third-generation installer who has worked the Bay shoreline for decades | **Medium** | 3 h | Identify the home/design editor and pitch the waterfront-tile angle as a contributed expert piece, offering the photography |
| **Bay Weekly** | Southern Anne Arundel County weekly — Edgewater is squarely in its coverage area | Hyper-local. A South County business feature | **Easy–Medium** | 2 h | Email the editor |
| **The Capital / Capital Gazette** | The county daily (Baltimore Sun Media) | Business-section new-business and rebrand notices; occasional home/renovation features seeking a local expert source | **Medium–Hard** | 2 h | Submit the rebrand notice; separately, offer Mike as a standing expert source for home-renovation stories |
| **Annapolis Home Magazine**, *Severna Park Voice*, *Pasadena Voice* | Regional home and community titles | Project features. Requires strong photography, which the portfolio supplies | **Medium** | 2 h each | Pitch a completed project with the best photographs |

**Two stories that are genuinely newsworthy, and one that is not:**
- ✅ **The lock-box trade showroom.** `competitors.md` §7.10 finds no competitor offering anything like it. "Local tile showroom gives designers and builders after-hours access" is an actual novelty and a legitimate business story.
- ✅ **Third generation, 45 years.** A family trade passed down three generations, in a county where the trades are a live topic — that is a human-interest story, not a marketing pitch.
- ❌ **"Local business launches new website."** Nobody will run it. Do not send it.

---

## 7. Houzz and trade platforms

Two honest notes before the table. First, most of these links are `nofollow` — but in a market where **Houzz ranks #1 for `bathroom tile installation Annapolis MD` and Yelp holds four positions on a single near-me SERP** (`competitors.md` §2.8, §2.4), the visibility is the point and the entity corroboration is a real secondary benefit. Second, `local-seo.md` §4.3 is explicit that review acquisition should focus on **Google only for the first 90 days** — so treat these as profile and portfolio surfaces, not review surfaces.

| Target | Status today | Why it matters | Difficulty | Effort | First action |
|---|---|---|---|---|---|
| **Houzz** | `local-seo.md` §1b: **only the Crofton record exists** (`Digitile Inc`, wrong city, pointing at the dead `digi-tile.com`) | The highest-priority platform here. Houzz is the #1 organic result for `bathroom tile installation Annapolis MD`, pointing at KT Tiles — a direct, verified competitor gap. Houzz project galleries are built for exactly the portfolio this business has | **Medium** | 4–6 h | Create/correct an **Edgewater** professional profile, fix the website URL, and upload all five portfolio projects with full photo sets and written descriptions. This is a real afternoon of work and it is worth it |
| **Yelp** | Two duplicate listings at 14 Mayo Rd | Claim both and request a merge via Yelp support (the in-app flow will not do it). Correct the parked website URL. **Do not solicit Yelp reviews** — Yelp filters reviews from infrequent reviewers, so the effort is usually wasted (`local-seo.md` §4.3) | **Medium** | 2 h | Open the Yelp support merge ticket |
| **Nextdoor** | Listing exists | Unusually valuable here — neighbourhood-scoped, and Edgewater/Annapolis is exactly the referral-driven market this business already wins in | **Easy** | 1 h | Claim and complete the profile |
| **Angi, HomeAdvisor, Thumbtack, Porch, BuildZoom** | Angi and HomeAdvisor hold **Crofton-only** records; the rest have no listing | Correct the Crofton records **only after** the owner confirms the relationship (`local-seo.md` §1b — the "Nash & Sons" connection is unverified and removal requests must not be filed blind). Treat the paid lead products as a separate commercial decision, not a link tactic | **Medium** | 3 h | Confirm the Crofton relationship with Mike first |
| **Pinterest** | — | Genuinely drives referral traffic for tile, and the portfolio photography is already the right format. Low effort, real return | **Easy** | 1 h setup | Create a business account; pin each portfolio project linked to its page |
| **Instagram / Facebook** | Multiple legacy Facebook pages need merging (`local-seo.md` §2.3) | Not links, but entity corroboration and a natural home for jobsite photography, which is the content this business produces most easily | **Easy** | Ongoing | Consolidate the Facebook pages first |

---

## 8. Supplier co-marketing

The most underused opportunity on this list, and the cheapest. **Manufacturer reps have content and dealer-support quotas, and almost no independent dealer ever asks them for anything.** A showroom that offers a rep good photographs and a real installation story is doing the rep a favour.

| Play | What it is | Difficulty | Effort | First action |
|---|---|---|---|---|
| **Dealer spotlight** | Most manufacturers run a blog, a dealer newsletter or a social channel and are chronically short of real dealer content. Ask each rep: *"Would you feature the showroom? I'll supply photographs."* | **Easy** | 30 min per brand | Ask during the same call as the dealer-locator request in §2 — one call, two asks |
| **Manufacturer project feature** | Submit a completed job installed with that manufacturer's system. Waterproofing manufacturers in particular publish real-world installation features | **Medium** | 2 h per submission | Submit the best completed shower to the relevant waterproofing manufacturer, with the full photo set |
| **Failure documentation** | Genuinely scarce and genuinely valuable to manufacturers: photographs of *what went wrong* on somebody else's install. This is the natural companion asset to `/blog/why-tile-showers-fail/` (`content-roadmap.md` §6) | **Medium** | Already produced by the content plan | Offer the teardown photo set to the technical rep as a conversation opener |
| **New display announcement** | When a new line goes on the showroom floor, the manufacturer often has a "new dealer" or "new display" channel — and it is a legitimate local-news and social item at the same time | **Easy** | 15 min each | Ask each rep what their new-dealer announcement process is |
| **Chesapeake Flooring specifically** | A Maryland distributor 20 minutes away in Glen Burnie. Regional, reachable in person, and directly invested in local dealers being findable | **Easy** | 2 h | Visit the Glen Burnie office in person. Local distributors say yes to things national brands don't |
| **Co-hosted trade event** | A designer or builder evening at the showroom, co-sponsored by a manufacturer rep who brings samples and technical content | **Medium** | 6–8 h | Only after the trade programme is running; pairs naturally with MBIA or ASID membership (§5) |

---

## 9. Community and sponsorship

Low cost, genuinely local, and — unlike most link tactics — these produce links that are obviously legitimate because the underlying activity is real.

| Target | What it is | Why it fits | Difficulty | Effort | First action |
|---|---|---|---|---|---|
| **Habitat for Humanity of the Chesapeake ReStore** — `habitatchesapeake.org/restore/donate/` | Habitat's retail arm; serves Baltimore City and Baltimore, **Anne Arundel** and Howard counties. Explicitly accepts **tile**, flooring, cabinets and vanities in new or like-new condition | **The best-fitting item in this section.** A tile showroom accumulates discontinued lines, overruns and returned lots that are hard to sell and expensive to store. Donating them is genuinely useful, potentially tax-deductible, solves a real inventory problem, and business donors are commonly acknowledged | **Easy** | 2 h per donation | Call the Anne Arundel ReStore, arrange the first donation of dead stock, and ask how business donors are recognised |
| **Center of Applied Technology South (Edgewater)** and Anne Arundel County Public Schools trades programmes | The county vo-tech centre with construction-trades programmes, located in Edgewater | **The strongest story-plus-link combination available.** A third-generation installer teaching a tile-setting session or donating material to a local trades programme is a real contribution, an obvious local-news story, and perfectly on-brand for a business whose entire positioning is passing down craft knowledge | **Medium** | 4–6 h | Contact the school's construction-trades instructor and offer material and a guest demonstration |
| **Historic London Town and Gardens** (Edgewater) and other South County non-profits | Local historic site and museum, physically in Edgewater | Sponsor listings on a genuinely local, genuinely authoritative Edgewater domain — the exact geography nobody else contests | **Easy** | 2 h + sponsorship | Ask about business sponsor tiers and whether sponsors are listed with a link |
| **Youth sports and school sponsorship** — South River High School, Edgewater/South County leagues | Team and programme sponsorship | Standard, cheap, and sponsor pages routinely carry links. Also genuinely visible to exactly the local homeowner audience the business sells to | **Easy** | 2 h + sponsorship | Ask a local league about sponsor packages before the next season |
| **Local civic and community associations** — Edgewater-area civic groups, Annapolis Rotary | Community organisations with member/sponsor pages | Modest link value; real referral value in a referral-driven market | **Easy** | 2 h | Attend one meeting before committing money |

**Rule for this section:** sponsor things Mike would sponsor anyway. Sponsorship bought purely for a link is expensive per link and obvious to everyone. Sponsorship of something real is cheap, defensible and produces referrals on top.

---

## 10. Competitor link-gap summary

Drawn from `competitors.md`. These are the specific third-party placements competitors hold and this business does not.

| Placement | Competitor holding it | Status for the client | Priority |
|---|---|---|---|
| `locations.americanolean.com/md/edgewater/` — **positions 1 and 2** for `tile store Edgewater MD` | South River Flooring (1185 E Central Ave) and one other Edgewater dealer | **Not listed.** Verified 2026-09-04 | 🔴 **Highest** |
| `stoneimpressions.com` dealer locator — **#1** for `tile store Annapolis MD` | In Home Stone | Not listed | 🔴 High |
| `greaterannapolisdesigndistrict.com/members/...` | Chesapeake Tile & Marble | Not a member — ⚠️ may be geographically restricted, confirm | 🟠 Medium |
| Houzz professional profile — **#1** for `bathroom tile installation Annapolis MD` | KT Tiles | Only a wrong-city Crofton record exists | 🔴 High |
| `landoftile.com` — holds **two** top-10 positions for `tile showroom Annapolis MD` | Multiple | **Listing already exists (`s-3176`) but is unclaimed and incomplete** | 🔴 High — free |
| Encore Ceramics dealer status | Chesapeake Tile & Marble | Not carried — check availability | 🟡 Low |
| BBB profile with A+ rating | CST Studio | **No BBB profile at all** | 🟠 Medium |
| Birdeye review profile (29 reviews) | CST Studio | Not applicable — do not chase a second review platform while Google sits at ~1 (`local-seo.md` §4.3) | ⚪ Skip |
| Nextdoor and X profiles outranking the owned homepage | In Home Stone | Nextdoor listing exists, unclaimed | 🟠 Medium |

**The strategic read.** `competitors.md` §4.1 identifies USA Pro Floors as the benchmark competitor — and its advantage is **not links.** It is ~95 programmatic pages, the richest schema stack in the market, exact-match URLs and real neighbourhood specificity. Meanwhile seven of eight competitors lack `FAQPage` schema, seven lack `AggregateRating`, and **nobody at all uses `Product` schema** — including a 41-product WooCommerce store.

**So the honest conclusion for this plan: this business does not need to out-link its competitors. It needs to out-*structure* them, and then claim the dozen manufacturer, industry and local listings that actually rank in this market.** A large editorial link-building campaign would be the wrong investment. The listings above, plus the on-page and schema work already scoped, is the right one.

---

## 11. Sequenced first-90-day action list

Effort is realistic and assumes the owner is running a business at the same time. Total across 90 days: roughly **35–45 hours**, most of it in weeks 1–6.

### Weeks 1–2 — Recover what already exists (do this before anything else)

| # | Action | Owner? | Effort | Why now |
|---|---|:--:|---|---|
| 1 | Run `whois` on all five legacy domains; identify the registrant email and expiry on each | Yes | 1 h | Determines whether the highest-ROI action is available at all |
| 2 | Recover registrar access to `digitilestore.com` (parked, and a live Yelp destination) | Yes | 1–2 h | Highest-value single fix in this document |
| 3 | Run the free backlink checks (Ahrefs free checker, Moz free, `site:` and `"domain"` searches) on each legacy domain | No | 2 h | Quantifies what is being recovered; produces the correction list too |
| 4 | Build the Wayback URL map and deploy **301s** from every recovered domain to the matching new page | No | 2 h | Converts existing, already-earned links into working links |
| 5 | Update the website field on **Yelp listing A** (→ off `digitilestore.com`), **Houzz** and **HomeAdvisor** (→ off `digi-tile.com`) | Yes | 1 h | Stops sending live prospects to a parking page and a 404 |
| 6 | Canonical or retire `digitile-international.ueniweb.com` | No | 1 h | Stops the duplicate competing with the real site |

### Weeks 2–4 — Free, already-half-done, and blocking

| # | Action | Owner? | Effort | Why now |
|---|---|:--:|---|---|
| 7 | **Shelf audit** — photograph every brand display, header card and brochure in the showroom; build the target list | Yes | 2 h | Generates the whole of §2. Nothing else in this plan needs the owner less |
| 8 | Claim and complete the existing `landoftile.com` listing (`s-3176`); add every brand from the audit | No | 2 h | Free, already exists, and landoftile holds two top-10 positions on a target SERP |
| 9 | Create/correct the **Houzz Edgewater** professional profile; upload all five portfolio projects | No | 4–6 h | Houzz is the #1 organic result for a core commercial query in this market |
| 10 | Create the free **BBB** profile with canonical NAP | No | 1 h | Fills a visible gap against CST Studio; ranks for branded searches |
| 11 | Claim the **Nextdoor** listing | Yes | 1 h | Neighbourhood-scoped, and this is a referral-driven market |
| 12 | Set up **Pinterest** and pin the portfolio | No | 1 h | Real referral traffic for tile; the photography already exists |

> ⚠️ **Gate check before week 4:** items 8–12 create or edit citations. Confirm with the owner that the canonical name, the primary phone (0971 vs 3876) and the true hours are settled (`local-seo.md` §2.2) before entering NAP anywhere. If that decision has not been made, **do items 7 and 9's photo prep and hold the rest.**

### Weeks 4–8 — Manufacturer locators (the phone-call sprint)

| # | Action | Owner? | Effort | Why now |
|---|---|:--:|---|---|
| 13 | **American Olean / Daltile** — call the rep about the AOne Dealer program and the dealer locator | Yes | 2 h | Positions 1 and 2 on the home-turf SERP, currently held by competitors |
| 14 | **Schluter** — call the rep; separate the dealer-locator question from the certification question | Yes | 1 h | Highest-authority locator in the trade; also settles a ⚠️ CONFIRM FIRST item blocking content |
| 15 | **wedi** — same two-part call | Yes | 1 h | Same; the Schluter + wedi pair is a credential no competitor claims |
| 16 | **Chesapeake Flooring** — visit the Glen Burnie office in person; ask for the store locator **and** dealer-spotlight content | Yes | 2 h | Local distributor, most likely yes, two wins per visit |
| 17 | **Warmup** — confirm stocking, then apply to the reseller list and Warmup Pro | Yes | 1 h | Also unblocks the heated-floor content and GBP category |
| 18 | Batch the remaining brands from the shelf audit — Merola, Akua, StoneImpressions, setting-material brands, everything else | Yes/No | 3 h | Volume of relevant, geographically exact links from one afternoon |

### Weeks 8–12 — Memberships, credential, community

| # | Action | Owner? | Effort | Why now |
|---|---|:--:|---|---|
| 19 | Join **NTCA** (`tile-assn.com`) | Yes | 1 h + dues | Maximum topical relevance; the Reference Manual is worth the fee on its own |
| 20 | Join **MBIA** as an affiliate/supplier; confirm the Anne Arundel chapter | Yes | 1 h + dues | Best builder-audience fit for the trade programme |
| 21 | Join the **Anne Arundel County Chamber** | Yes | 1 h + dues | Worth more than 20 generic directories, per `local-seo.md` |
| 22 | Download the **CTEF Certified Tile Installer** kit; book a test date | Yes | 1 h + fee | A credential that can be genuinely earned — directory link plus a real differentiator |
| 23 | Call the **Habitat Chesapeake ReStore**; arrange the first dead-stock tile donation | Yes | 2 h | Solves an inventory problem and earns donor recognition |
| 24 | Contact the **Greater Annapolis Design District** — ask directly whether Edgewater qualifies | Yes | 1 h | Verified competitor gap; find out if it is even open before planning around it |
| 25 | Correct the aggregators — Foursquare, Data Axle, Neustar/Localeze — then the broken records (Hotfrog's "Digimelce International LLC") | No | 3 h | Fixes propagate downstream; doing this last prevents earlier work being overwritten |
| 26 | Pitch **Eye On Annapolis** and **What's Up? Media** (the waterfront-tile angle) | No | 3 h | The one realistic editorial route; needs the content piece written first |

### Deliberately **not** in the first 90 days

- ASID / NKBA / NARI memberships — wait until the trade programme is producing and one association has proven itself
- Angi, HomeAdvisor and Thumbtack paid lead products — a commercial decision, not a link decision, and blocked on the Crofton relationship question
- Any second review platform — Google only for the first 90 days (`local-seo.md` §4.3)
- Sponsorships beyond the ReStore donation — do them when there is a real reason, not to hit a link target

---

## 12. Tracking

One spreadsheet. Six columns, nothing more:

| Target | Category | Status | Date actioned | Live URL | Notes |
|---|---|---|---|---|---|

Statuses: `Not started` → `Contacted` → `Awaiting response` → `Live` → `Declined`. Review it monthly. When something goes live, paste the URL — it belongs in the site's `sameAs` schema array, which `local-seo.md` §5.6 identifies as the primary mechanism for telling Google that all these scattered listings are one business. **Every link earned here does double duty as an entity-consolidation signal, which is the actual underlying problem this business has.**

### What success looks like at 90 days

- All recoverable legacy domains 301'd to the new site, and no live third-party listing pointing at a dead URL
- 6–12 manufacturer, industry and local listings live, each with character-for-character identical NAP
- Houzz and landoftile profiles complete, with the full portfolio on Houzz
- Two or three memberships in place, chosen for referrals as much as links
- One CTEF test booked

That is a defensible off-page profile for a single-location tile showroom. It is not fifty links, and it should not be.
