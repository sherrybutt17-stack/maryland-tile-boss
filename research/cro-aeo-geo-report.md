# CRO, AEO and GEO — what was implemented and why

Companion to `architecture-and-art-direction.md`. Covers conversion design, answer-engine formatting, and AI-search readiness across both builds.

---

## 1. CRO

### The conversion problem, stated honestly

This business has three things working for it — a physical showroom, 45 years of genuine expertise, and a trade-access programme nobody local competes with — and two things working against it: **no review base** (one verified review, and it is negative) and **a 2–3 person team** that cannot answer a high volume of low-quality leads.

That shapes everything. The site is built to produce *fewer, better-qualified* contacts rather than to maximise raw form fills, and it leans on demonstrated expertise because it cannot lean on social proof.

### CTA hierarchy

One primary action per page type, never more than three CTA phrasings sitewide:

| Rank | Action | Where it leads | Why |
|---|---|---|---|
| 1 | **Call (443) 871-3876** | Phone | Fastest path, and Mike converts far better in conversation than a form does. Present in the utility bar, nav (B), every closing block, and the sticky mobile bar. |
| 2 | **Visit the showroom** | `/showroom/` | The showroom is the actual differentiator. A visit converts far harder than a lead. |
| 3 | **Get a quote** | `/contact/` | For people not ready to call, and the natural end of installation pages. |

Trade visitors get a fourth, deliberately separate path: **Call Mike about trade access**, pointing at his direct line, because that audience converts on a person rather than a form.

### Why there is no fake urgency

No countdown timers, no "3 slots left", no invented scarcity. The one genuine scarcity signal — a small team with real scheduling limits — is stated plainly instead ("you may wait a little for a slot"). For a high-consideration purchase from a business with no reviews, trust is the scarce resource; cheap urgency tactics would spend the thing we are trying to build.

### Conversion paths built

**Homeowner, researching**
Home → `what we install` cards → service page → process + failure modes → FAQ → call or quote

**High-intent installation search**
`/tile-installation/bathroom|shower|backsplash|floors/` → what goes wrong → what we check before starting → real project photos → FAQ → quote

**Showroom visitor (local pack / "near me")**
`/showroom/` or `/annapolis/` → what to bring → hours, parking, "look for the Digitile sign" → directions → visit

**Designer / builder / contractor**
`/trade/` → lock-box explanation in the client's own words → what it is useful for → Mike's direct line

### Form design

Six fields, only two required (name, phone). Email is explicitly optional — "optional if you would rather be called" — because this audience frequently prefers a call, and every required field costs completions. Project type and timing are selects rather than free text so Mike can triage at a glance. A honeypot field handles spam without a CAPTCHA.

The form posts to `/thanks/` and carries `data-netlify="true"`, so it works immediately on Netlify. **Any other host needs a form endpoint wired up** — this is the one integration the client must complete. Phone and email are shown alongside the form so the page still converts if the form is never wired.

### Mobile conversion

A sticky three-action bar — Call / Directions / Get a quote — appears below 760px only, sized to avoid obscuring content, with `body` padding compensating so nothing is ever hidden behind it.

### Trust, without reviews

Because there is no review base to display, credibility is carried by: 45 years and third-generation stated as fact; Mike named and photographed; real project photography with real locations; genuinely specific technical content that only an experienced installer could write; and open acknowledgement of trade-offs (the team is small, stone needs maintenance, glass shows bad workmanship). Admitting a limitation is a stronger trust signal than a five-star badge nobody can verify.

---

## 2. AEO — answer engine optimisation

### Answer-first structure

Every FAQ answer leads with the direct answer in the first sentence, then supports it. No answer opens with throat-clearing. Example, from `/tile-installation/shower/`:

> **Why is shower waterproofing so important?**
> Because tile and grout are not waterproof. Grout joints let water through by design. A properly installed waterproofing system behind the tile is what protects the substrate and the framing from that water.

That first clause is extractable on its own — which is exactly what a featured snippet or an AI answer needs.

### Formats chosen for extractability

- **Comparison tables** where the question is genuinely comparative: three waterproofing systems, four materials, stone types, porcelain by surface. Tables are the single most liftable format for "X vs Y" queries.
- **Checklists** for process questions ("what gets checked first", "what to bring to the showroom").
- **Numbered sequences** only where the content is a real sequence — the four-step job process. Not used decoratively.
- **Definition-style openers** for terms like rectified tile, etching, crackle glaze, deflection versus flatness.

### FAQ coverage

53 questions across the site, all mapped to questions the business actually gets or that the SERP research showed unanswered locally. `FAQPage` schema is emitted wherever FAQs appear. The `/faq/` page groups them into Visiting and buying / Choosing tile / Installation / Trade.

Notably these answer questions **no local competitor answers at all**: waterproofing system differences, why glass tile shows installation quality, what etching is, deflection versus flatness, and why a square-foot price cannot be quoted honestly.

### The pricing question

Every competitor ignores "how much does tile installation cost". We answer it — by explaining honestly why a single rate would mislead, and what actually drives the number. That is a real answer to the query without inventing a price the business has not set.

---

## 3. GEO — AI search readiness

### Entity clarity

The single biggest GEO risk here was entity confusion: the business appears under up to six names across seven domains in two cities. The site resolves this explicitly rather than hoping crawlers work it out.

- `LocalBusiness` `name` = **Digitile International** (matching Google's existing map entity and ~11 citations), with `alternateName` carrying **The Maryland Tile Boss** and **Digitile International Showroom & Design Center**.
- A dedicated section on `/about/` states in plain language that the two names are one business at one address — written for humans, and readable by a model.
- `llms.txt` states it again explicitly under "Notes for answer engines".
- The footer NAP on every page carries the location entity name alongside the brand.

### The AI citability test

Every key page was checked against the question set: who, what, where, who-for, products, services, why-them, how-to-contact, what-evidence. Any page that could not answer all nine from its own content alone was revised. Practically this meant every page carries: the full NAP in the footer, the hours, the service area, and at least one route to a human.

### Structured data shipped

`HomeAndConstructionBusiness` + `Store` (multi-type), `Person` (Mike, with `knowsAbout`), `WebSite`, `WebPage`, `BreadcrumbList`, `Service` (on each installation page, with `areaServed` and `availableChannel`), `FAQPage`, `BlogPosting`, `CreativeWork` (projects). All nodes are `@id`-linked into a single `@graph` so the entity graph resolves as one business rather than disconnected fragments.

**Deliberately absent:** `AggregateRating` and `Review` — there is no verified review base, and inventing one is both a policy violation and a trust risk. `Product` — the business does not publish per-product pricing or availability, so `Product`/`Offer` markup would be fabrication. Competitor research showed nobody in this market uses `Product` schema; that gap stays open until there is real product data to mark up.

### Crawler policy

`robots.txt` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended and Applebot-Extended. This is a deliberate decision, not a default: the business wants to be the quotable local authority on tile and waterproofing, and its competitive advantage is expertise rather than proprietary content. Only `/thanks/` is disallowed.

**No claim is made that allowing crawlers guarantees citations.** It removes a blocker; it does not buy placement.

### llms.txt

`/llms.txt` ships on both builds with verified NAP, hours, owner credentials, service area, a linked page index, project list, and the entity-disambiguation note. It also states plainly that the site publishes no ratings (so a model does not infer their absence as a bad signal) and why pricing is not published.

This is a low-cost, factual artefact. It is **not** a ranking mechanism and is not presented as one.

### First-party information — the actual moat

Generic SEO filler has close to zero citation value. What this site has that no competitor does:

- A named, credentialed practitioner with 45 years and a documented specialism
- Real project photography with real Maryland locations
- Waterproofing content written from installation experience, not paraphrased from a manufacturer's brochure
- A trade-access programme that exists nowhere else in the market
- Honest treatment of trade-offs and failure modes

That is the material an answer engine can cite and a competitor cannot easily copy.
