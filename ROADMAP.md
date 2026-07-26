# Oil, Visualized — Project Roadmap

Three things live under one roof at **visualizedoil.com**:

1. **The learning curriculum** — an educational site that explains Texas oil & gas
   concepts through simple, interactive visuals, starting with the most fundamental
   ideas and working toward the complex and jurisdiction-specific.
2. **The reference shelf** — pages you search rather than read: the **Lease Clause
   Dictionary** (`glossary.html`) and **Where to look it up** (`regulators/`), the
   Railroad Commission and its equivalents in the ten biggest producing states.
3. **The wellbore diagram gallery** — a showcase of original wellbore and well-path
   diagrams, with a path toward selling **commissioned diagrams** of specific wells
   that carry meaning for a family, a landman, or someone in the industry.

**Audience:** people entering the mineral space (new hires, trust/estate clients,
landowners, junior analysts) — and, for the gallery, mineral owners, oilfield
professionals, and families with a well that means something to them.
**Principle:** ship the foundations first. Each concept assumes only the ones above it.
Every concept defines its own vocabulary in plain English before using it — assume
zero property-law background going in.
**Format:** a tabbed concept curriculum (`index.html`), one tab per concept, simplest
first — plus reference pages you search rather than read: `glossary.html` (the Lease
Clause Dictionary) and `regulators/` (a hub and ten state pages).
**Scope note:** the curriculum stays Texas. The reference shelf is where multi-state
material lives, so the ladder never has to stop and explain another jurisdiction.

> **This file is forward-looking.** What's live, what's next, the tier plan, and the
> standing verification records. What *changed*, when, and in which file lives in
> [`CHANGELOG.md`](./CHANGELOG.md) — bug fixes and patch notes go there, not here.

---

## Project status (snapshot)

- **Domain:** `visualizedoil.com` live on Squarespace DNS → GitHub Pages, HTTPS enforced
- **Repo:** `github.com/gtharp/VisualizedOil` — proprietary license, README in place
- **Analytics:** Cloudflare Web Analytics beacon embedded and live
- **SEO:** `robots.txt` + `sitemap.xml` at repo root — the sitemap now lists **13 URLs**
  (concepts, dictionary, regulator hub, ten state pages). The hub-and-spoke shape was
  chosen precisely for this: each state page is a separate rankable URL with its own
  title and description, which a tab inside the SPA could never be. Google Search Console domain
  property set up (DNS TXT verification); self-referencing `<link rel="canonical">`
  now in `index.html`. The lone Search Console "Page with redirect" notice is the
  expected `http://` / `www.` → canonical redirect, not a real indexing problem.
- **Claude Project:** a dedicated project (see `Website_Guide.md`) houses this build
  separately from the fiduciary/legal reference project
- **13 concepts live** on site, tabs 01–13 (see Tier tables below for which)
- **Lease Clause Dictionary live** — `glossary.html`, the site's **second page**:
  138 generic lease clauses, searchable and filterable by section, each with a
  plain-English definition, why it matters to the owner, why the operator wants it,
  and whether it's already in the standard printed form. Cross-links into the
  concept tabs via URL hash; linked from the header bar and footer of `index.html`
- **Support / donations live** — a ♥ Support tab explains the free-education mission
  and offers an optional Venmo donation (embedded QR + payment link, `@George-Tharp`);
  support links also sit in the global footer and at the foot of Concept 01
- **Versioning** — every page carries its own version, in three places each (header
  comment, meta tags, footer line). Current: `index.html` **v1.6**, `glossary.html`
  **v1.1.1**, `regulators/` **v1.0.0**. The scheme is in build conventions below; the
  history is in [`CHANGELOG.md`](./CHANGELOG.md)
- **Wellbore gallery** — in progress; three diagrams ready to feature, not yet built
  into the site
- **Where to look it up live** — `regulators/`, the site's **third section** and first
  multi-page one: a hub plus ten state pages covering the top ten producing states by
  combined oil and gas (EIA 2023, 6:1 BOE): TX, PA, NM, LA, OK, ND, WV, CO, OH, WY.
  Each state page gives the agency, where it came from, the one document a mineral owner
  should pull and how to get there, what else it publishes, and how it differs from Texas.
  Hub carries a clickable tile map, the comparison table, the 1859→now history, and an
  interactive API-number decoder anchored on the horseshoe well from the gallery
- **CSS/JS split done** — `css/base.css` + one sheet per section, `js/app.js` + one
  script per section. The rule that governs what may go in `base.css` is in build
  conventions below
- **Commissioned diagrams** — idea stage; intake + payment flow to be built

## Status legend

- **Live** — built and on the site
- **Next** — the immediate next build
- **Planned** — scoped, queued
- **Future** — long-horizon / advanced

## Live tabs, in site order

| Tab | Concept | Tier |
|---|---|---|
| 01 | Surface vs. mineral estate · severance | 1 |
| 02 | Separate tracts & common ownership | 1 |
| 03 | Fractional & undivided interests | 1 |
| 04 | The lease — signing to termination | 2 |
| 05 | Pooling & dilution | 3 |
| 06 | Your decimal — division orders (DOI) | 4 |
| 07 | The royalty check | 4 |
| 08 | Severance tax vs. ad valorem tax | 4 |
| 09 | Allocation & PSA wells | 3 |
| 10 | Post-production costs | 4 |
| 11 | Holding the lease — HBP & savings clauses | 2 |
| 12 | HBP monitoring & lease termination risk | 5 |
| 13 | The money trail — purchaser to mailbox | 4 |

> Beyond the thirteen concept tabs, the nav also carries a **♥ Support** tab (the
> free-education mission + Venmo donation) and this **→ Roadmap** tab. The website's
> own Roadmap tab mirrors the tier tables below; keep the two in sync.

---

# PART ONE — The learning curriculum

## TIER 1 — The estate
*What ownership even means underground.*

| Status | Concept | What it teaches |
|---|---|---|
| **Live** | Surface vs. mineral estate · severance | Two stacked estates; mineral is the dominant estate; the Bob / Carl / Susan 160-acre example |
| **Live** | Separate tracts & common ownership | A tract is defined by ownership, not fences; a 4-step timeline showing one tract splitting into two across generations |
| **Live** | Fractional & undivided interests | Undivided interest = a fraction of every acre at once; net mineral acres; fractionalization across 3 generations |
| Planned | Accommodation doctrine & surface use | How the dominant estate must reasonably accommodate the surface owner |

## TIER 2 — The lease
*Turning ownership into production.*

| Status | Concept | What it teaches | Notes |
|---|---|---|---|
| **Live** | The lease — signing to termination | Lessor/lessee, bonus, royalty, primary vs. secondary term, held by production, via a 5-stop life-of-a-lease timeline | Built as Concept 04 |
| Planned | Royalty vs. working interest (deep dive) | Who bears cost, who doesn't — expand beyond the Concept 04 intro | |
| **Live** | Held by production & savings clauses | The habendum gap; the four bridges (dry hole, shut-in, cessation, continuous ops); force majeure as the fifth; a capped-vs-uncapped shut-in slider on 160 net acres; the five-edit negotiation table | Built as Concept 11. Deliberately high level — the deep termination analysis lives in Concept 12 |
| Planned | Pugh clauses & retained acreage | Releasing undeveloped acreage; the no-Pugh holding trap | |

## TIER 3 — Combining tracts
*Many owners, one well.*

| Status | Concept | What it teaches | Notes |
|---|---|---|---|
| **Live** | Pooling & dilution | What a unit is, pooling vs. unitization defined plainly, a live slider showing a big owner diluted (100%→50%→25%) vs. a small owner included (0%→1.25%), the MIPA + §102.014 statutory backbone | Built as Concept 05 — combines the original "voluntary & compulsory pooling" and "dilute or be diluted" rows |
| **Live** | Allocation & PSA wells | Why multi-tract laterals often can't pool (Rule 37, undersized pooling clauses); the three permit paths (pooled unit / PSA / allocation) as a three-way toggle on one 10,000-ft lateral; footage-based tract participation factors with a worked ledger; TPF × unit DOI example tying back to Concept 06; honest legal status (Opiela settled Jan 2025 with no ruling — law still unsettled; Springer Ranch supports footage allocation) | Built as Concept 09 |
| Planned | Proration units & allowables | RRC field rules; 160-ac oil / 640-ac gas + 10% tolerance | Prototype from the early explainer set exists; not yet ported to house style |
| Planned | Unitization & secondary recovery | Whole-reservoir operations; participation formulas; no compulsory unitization in TX | |

## TIER 4 — Getting paid
*From the wellhead to the check.*

| Status | Concept | What it teaches | Notes |
|---|---|---|---|
| **Live** | Your decimal — division orders (DOI) | Builds one decimal from scratch across 3 scroll-down stages: your own tract (0.0625) → pooled into a 320-ac unit (0.0078125) → an allocation well splitting by lateral footage (0.00488281) | Built as Concept 06 |
| **Live** | The royalty check | A worked $1,000 gross check stub: − severance tax − post-production costs = $900 net; why checks swing (price × barrels, not your decimal) | Built as Concept 07 |
| **Live** | Severance tax vs. ad valorem tax | The candy-store analogy: severance = tax on each candy bar at the register (withheld before you're paid); ad valorem = tax on the store itself (an annual county bill) | Built as Concept 08 — added beyond original scope by request; teaches both taxes side by side |
| Planned | Net revenue interest & the burden stack | ORRI, NPRI, production payments stacked on the WI | |
| **Live** | The money trail — purchaser to mailbox | The plumbing between the wellhead sale and the check: why gas pays in 90 days and oil in 60; the purchaser's single lump-sum payment landing in the operator's *general* account (one tank, six taps — no escrow, no trust); the deck exploded across a worked $30,000 month; **the two-stub toggle** (itemized vs netback — identical $112.30 net, identical $34.18 given up, only one of them visible); the volume-vs-price leak; statutory stub contents and the 60-day certified-mail request; an honest day-scale payment clock; suspense as a ledger line, the automatic security interest and the unsecured-creditor trap; escheat at three years; interpleader; a 48-month limitations window with 36 months expiring while you wait; the eight-item routine | Built as Concept 13. Absorbs the former "Suspense, escheat & unclaimed property" row. Cross-linked from Concept 07 |
| **Live** | Post-production costs | Why PPC exist at all (the point of sale moved downstream over a century); the valuation point as the one idea that decides everything; PPC vs. severance tax; a 1996–2026 case timeline from *Heritage Resources* to *Fasken v. Puig*; lease language ranked weakest→strongest | Built as Concept 10 — draggable valuation-point slider ($3.00/Mcf split into wellhead value + gathering/processing/transport); cross-linked from Concepts 07 & 08 |

## TIER 5 — Title & risk
*Proving and protecting ownership.*

| Status | Concept | What it teaches | Notes |
|---|---|---|---|
| Planned | Chain of title & title examination standards | Sovereignty to present; BFP status; blanket-conveyance limits | |
| **Live** | HBP monitoring & lease termination risk | Fee simple determinable / special limitation; PIPQ; temporary cessation doctrine; ratification. Ten years of monthly production on a log decline curve with a five-step "read the record" stepper; the four questions; termination-vs-survival columns; the RRC monitoring ledger; the reversion math | Built as Concept 12. Cross-links to `glossary.html#cat-term` and `regulators/texas.html` |
| Planned | Operator transfers, P-4s & bankruptcy | Following the leasehold through operator changes | |

## TIER 6 — The deep end
*Advanced topics & other jurisdictions.*

| Status | Concept | What it teaches |
|---|---|---|
| Future | Offshore & federal leasing — OCS / BLM | State waters vs. federal waters; the OCSLA regime |
| Future | Ohio Dormant Mineral Act (ODMA) | Abandonment and reunification of minerals with the surface |
| Future | New Mexico statutory unitization | Compulsory unitization for recovery operations |
| Future | Texas Relinquishment Act lands | State-as-mineral-owner / surface-owner-as-agent split |
| Future | Produced water, CO₂, helium & "other minerals" | Ownership of substances the lease never named |

---

# PART ONE-B — The Lease Clause Dictionary (`glossary.html`)

The site's second page, and its first non-tab format. Where the curriculum teaches
one concept at a time in narrative order, the dictionary is a **lookup tool**: an
owner arrives holding their own lease, searches a phrase they don't recognize, and
reads one card.

**Status: Live — 138 clauses.**

| Section | Entries | What it covers |
|---|---|---|
| The anatomy of a lease | 22 | Granting clause, habendum, primary/secondary term, bonus, NMA, executive right, NPRI/ORRI/NRI, addendum, memorandum, NCR notice |
| Royalty & payment | 20 | Cost-free royalty, gross proceeds, valuation point, affiliate sales, MFN, take-in-kind, audit, division-order limits |
| Term, continuation & Pugh | 16 | Both Pugh clauses, continuous development, retained acreage, shut-in caps, force majeure, release of record |
| Pooling, units & allocation | 10 | Consent to pool, unit size caps, anti-dilution, cross-conveyance, allocation wells, community lease |
| Assignment & transfer | 6 | Notice, continuing liability, consent to assign, change of ownership |
| Surface & operations | 16 | NSO, setbacks, damage schedules (per-acre, per-tree, livestock), reclamation, water, offset wells, plugging, site conduct |
| Title, capacity & risk | 13 | Warranty tiers, representative capacity, indemnity, insurance, certified funds, addendum-controls |
| Enforcement & disputes | 11 | Notice and cure, judicial ascertainment, royalty-as-condition, lessor's lien, fees, venue, limitations waiver |
| Novel, rare & emerging | 12 | Pore space/CCS, produced water, renewables reservation, gas storage, helium, endangered-species deferral |
| Red flags | 12 | ROFRs, uncapped shut-in, other-minerals catch-all, Mother Hubbard, sight drafts, capped implied covenants |

**Design decisions worth keeping:**

- **Four postures, not two.** Each clause is badged *Know this* (vocabulary),
  *Ask for this*, *Confirm* (read the wording), or *Red flag*. A binary
  for/against framing broke down immediately — most clauses are legitimate and
  the question is how they're drafted.
- **Both sides, always.** Nearly every entry carries a "why the operator wants it"
  line. It's better teaching, it's more honest, and it matches the evenhanded
  tone of the Pooling concept's for/against columns.
- **Generic only.** Every entry describes a clause *type*, never an instrument.
  No party names, no county records, no grades. Placeholder parties only.

**Dictionary to-dos:**

- [ ] Per-clause anchor links (`glossary.html#clause-43`) surfaced in the UI —
      the IDs already exist in the markup, they just aren't linkable yet
- [ ] Add remaining clause names as they come up; target is a genuinely
      exhaustive Texas reference
- [ ] Consider an A–Z index view as an alternative to section grouping
- [ ] Add cross-links *from* concept tabs *into* specific dictionary entries
      (currently the linking is one-directional, dictionary → concepts)

---

# PART ONE-C — The reference shelf

Pages you *search*, not pages you *read through*. They sit outside the tier ladder on
purpose: a reference page has no prerequisites, so it can cover any jurisdiction without
breaking the rule that each concept assumes only the ones above it.

| Status | Page | What it is |
|---|---|---|
| **Live** | Lease Clause Dictionary (`glossary.html`) | 138 generic lease clauses, searchable and filterable by section |
| **Live** | Where to look it up (`regulators/`) | Hub + ten state pages: the RRC and its equivalents, and the one document to pull in each |
| Planned | County recorder directory | Where deeds and leases actually live, state by state — the other half of every regulator page's closing callout |
| Future | Commissioned-diagram intake | See Part Three |

## Where to look it up — what's built

| Page | Agency | The one document |
|---|---|---|
| Texas | Railroad Commission of Texas | W-1 drilling permit + plat, then P-16 acreage designation |
| Pennsylvania | DEP Office of Oil and Gas Management | *No state unit plat exists* — DEP well record, then the recorded declaration of pooling at the county |
| New Mexico | Oil Conservation Division (EMNRD) | Form C-102, Well Location and Acreage Dedication Plat |
| Louisiana | Office of Conservation (DENR) | The unit order and its Exhibit A plat, via SONRIS |
| Oklahoma | Oklahoma Corporation Commission | The spacing/pooling order — it names every owner in the unit |
| North Dakota | NDIC Oil and Gas Division | The Industrial Commission spacing and pooling order |
| West Virginia | WVDEP Office of Oil and Gas | The horizontal well unitization application (§22C-9-7a) |
| Colorado | Energy & Carbon Management Commission | COGIS well record + the drilling and spacing unit order |
| Ohio | ODNR Division of Oil & Gas Resources Management | Final plat / horizontal drilling unit boundary; 1509.28 order |
| Wyoming | Wyoming Oil and Gas Conservation Commission | Form 1 APD + the drilling and spacing unit order |

### Follow-ups on this section

- [ ] **Verify the ad valorem column against primary law** before treating it as settled.
      Published secondary sources contradict each other on several states; the page
      already carries a standing caution, but the structural yes/no for LA, WV, OH and WY
      is the weakest part of the section
- [ ] Decide whether to add **Alaska and California** as an appendix. Both are top-12 by
      oil, both were left out deliberately — Alaska has almost no private mineral estate,
      California's is urbanised and declining — but a one-line explanation of *why* they
      were excluded would pre-empt the question
- [ ] Consider a **Kansas / Utah / Montana** short list for the same reason
- [ ] Watch for **agency renames**. Colorado renamed twice in five years and Louisiana's
      department changed name in 2024; a rename silently breaks both the copy and the links
- [ ] Once traffic data exists, see which state pages earn attention and **deepen those**
      (a worked example per state would be the natural next layer)

---

# PART TWO — The wellbore diagram gallery

A showcase tab/section featuring original wellbore and well-path diagrams in the
Oil, Visualized house style. Doubles as a portfolio for the commissioned-diagram
service below.

| Status | Diagram | What it shows |
|---|---|---|
| Ready to feature | **Horseshoe well** | The U-shaped lateral that curves ~180° to keep the wellbore inside the unit/lease — geometry and why operators drill it |
| Ready to feature | **Deepwater Horizon / Macondo** | Offshore well architecture — rig, riser, seabed, and the well's depth; the 2010 blowout in context |
| Ready to feature | **Well depths comparison** | A to-scale comparison of well and formation depths (e.g., shallow conventional vs. Permian Wolfcamp vs. deepwater) |
| Planned | More over time | New diagrams added as they're built — notable wells, formations, completion types |

## Gallery to-dos

- [ ] Add a **Gallery** tab/section to the site
- [ ] Place the three diagrams with short captions + each well's significance
- [ ] Decide format: rebuild as scalable SVG (prints crisp at any size) vs. host as images
- [ ] Add a "more coming" placeholder so the set reads as a growing collection

---

# PART THREE — Monetization (donations & commissioned diagrams)

Two ways the project can sustain itself, both walled off from the day-job fiduciary
role (personal accounts, personal data, no client anything): **donations** — live now,
lightweight — and **commissioned diagrams**, the larger offering still to be built.

## Donations (live)

The **Support** tab accepts optional **Venmo** donations, framed entirely around
keeping a free educational resource online — not selling anything. Deliberately simple:
an embedded QR code plus a payment link (`@George-Tharp`), no checkout, no server, no
data collected. Support links also sit in the global footer and at the foot of Concept
01. Apple Cash was considered and set aside (no shareable public link; would require
exposing a personal phone/email), so any *second* method later would more likely be a
PayPal.me link, Cash App `$cashtag`, or Ko-fi.

## Commissioned diagrams — the idea

Made-to-order wellbore diagrams of a *specific real well*, chosen
because it carries a family name, a person's name, or has meaning to a landman,
mineral owner, or oilfield veteran. Keepsake, gift, office art, retirement piece.

## Who buys

- Landmen and mineral owners — a well on their family's minerals
- Oilfield professionals — a well they drilled, completed, or operated
- Families with a namesake or historically significant well
- Gifts — retirements, milestones, corporate

## What gets delivered

- Digital file (high-res PDF / PNG / SVG)
- Print-ready file at common poster sizes
- Optional framed print (print-on-demand fulfillment)
- The house style applied to that well's real, public data

## Where the data comes from

Public records only — RRC well/lease records, completion reports, directional
surveys, and formation tops (and API number lookups). Keeps every diagram accurate
and clean of anyone else's proprietary drawings.

## Intake → delivery flow

1. Request form: well name / API number / county / operator / what makes it
   significant / format & size / framing
2. Pull the public data and draft the diagram
3. Send a proof for one round of revisions
4. Deliver the final file(s); ship the print if ordered

## Monetization to-dos

- [ ] Add a **"Commission a well"** page explaining the service, with gallery examples
- [ ] Build the request/intake form (Tally, Squarespace Form, or similar)
- [ ] Set pricing tiers (digital · print-ready · framed · rush)
- [ ] Wire up payment — see note below
- [ ] Define delivery formats + a proof/revision process
- [ ] Draft a short per-commission license for buyers (personal use of their print)
- [ ] Decide print fulfillment (self vs. print-on-demand)

## Payments note (the site is static)

GitHub Pages serves static files only — there's no server for a checkout. Practical
options, lightest first:

- **Stripe Payment Links** — a hosted "Buy / Request" button you can drop on the page
- **Gumroad / Lemon Squeezy / Payhip** — handle digital products + order forms for you
- **Squarespace Commerce** — you already have Squarespace; run the store there and link
  to it from the gallery on visualizedoil.com
- Start simple: a request form + a Stripe invoice or Payment Link to test demand before
  building a full store.

## Watch-outs

- **Disclaimers:** market these as artistic/educational renderings from public data —
  not engineering, survey, or as-built documents.
- **No copying:** build every diagram from public records and the house style; don't
  reproduce an operator's copyrighted wellbore schematic.
- **Brand:** if this starts earning, protect the "Visualized Oil" name with a trademark.
- **Keep it separate:** wall this personal venture off from any fiduciary day-job role
  and client matters to avoid conflicts of interest — separate accounts, separate data,
  no use of work-acquired client information.

---

## Build conventions (so the site stays consistent)

- **Visual language:** geological strata palette — ochre surface over petroleum-slate
  minerals; survey-red used only for markers and the active state.
- **Content pattern per concept:** hero hook → "Start here" plain-English definitions
  as glossary cards → one clear visual (toggle, stepper, slider, or comparison — never
  compound) → a 2-column "why it matters" → a "point that trips everyone up" callout.
- **Two synchronized views per spatial concept:** a *cross-section* (side) and a
  *plan view* (top-down plat), toggled by the same control, where relevant. Landmen
  think in both.
- **Undivided interest** is always shown as a labeled *share meter*, never as a
  physically partitioned region — and captioned as undivided.
- **Every concept ends with a ledger, table, or worked number** (mono font) so the
  numbers are explicit, not just implied by the picture.
- **Gallery diagrams** follow the same house style and are built as scalable SVG where
  possible, so they stay crisp at any print size; each carries a short caption and the
  well's significance.
- **Accessibility floor:** responsive to mobile, keyboard-operable toggles, visible
  focus, reduced-motion respected.
- **Version tracking:** every change to a page bumps three things together — the
  version header comment at the top of the file, the `version` / `last-updated` meta
  tags, and the footer version line. Pages version independently. Scheme: **patch**
  for fixes and copy edits, **minor** for a new concept/tab/section, **major** for a
  structural overhaul. Then log it in [`CHANGELOG.md`](./CHANGELOG.md) — the entry
  names the date, the versions moved, and every file touched.
- **Disclaimer stays in the footer:** teaching tool, not legal advice. Credit line:
  "Created by George Tharp, JD."
- **Tech stack stays simple:** static files, no framework, no build step. The rule:
  `css/base.css` holds tokens and anything used by more than one page; everything else
  lives in that page's own sheet (`concepts.css`, `glossary.css`, `regulators.css`).
  Same shape for `js/`. **All paths are relative**, so the site still previews by
  opening `index.html` off disk.
- **New section = new directory, not a new tab.** The tab strip is the Texas curriculum
  and nothing else. Anything with its own audience and its own search intent gets its
  own URL, because tabs share one `<title>` and one sitemap entry and therefore cannot
  rank. Reference pages use the `.hero.compact` modifier and the shared three-way site
  nav in the header.

## Suggested near-term sequence

> The regulator section jumped the queue for a reason worth remembering: "who
> regulates oil and gas in Ohio" is a far higher-intent search than any concept name,
> and hub-and-spoke turns one page into eleven rankable URLs. Weigh that against tier
> order when picking what's next.

0. **Verify the regulator ad valorem column** against primary law and correct
   `data`-driven copy on the four weakest states — this is the only thing currently on
   the site flagged as needing confirmation.
1. Finish **Tier 1** — Accommodation doctrine & surface use — to close out the
   foundational estate concepts.
2. Add the **Gallery** section/tab with the three existing diagrams — the most
   visible, sharable thing, and it seeds the commission service.
3. Port **proration units & allowables** and **unitization** into Tier 3 with the
   house visual language (early prototypes already exist for these).
4. Stand up the **"Commission a well"** page + intake form + a single payment link to
   test demand before building a real store.
5. Round out **Tier 2** (Pugh clauses, HBP/savings clauses deep dive) and **Tier 4**
   (NRI/burden stack — suspense & escheat shipped with Concept 13) before moving
   into Tier 5 title topics.

## Case-law maintenance note

Concept 10 is the first tab whose accuracy decays with time — it names decided
cases. Verified current as of **23 July 2026**:

- *Fasken Oil and Ranch, Ltd. v. Puig*, No. 24-1033 (Tex. 2026) — reversed the San
  Antonio COA (726 S.W.3d 499); "free of cost forever" did **not** bar PPC because
  "produced from the above described acreage" implied a wellhead valuation point.
  Sources disagree on the opinion date (3 March vs. 10 April 2026) — likely a
  substitute opinion; confirm before citing the date anywhere public.
- *City of Crowley v. TotalEnergies* — petition **denied** 1 May 2026 (No. 25-0713).
  Status changed from "pet. filed." Referenced on the page in an aside only.
- *Clifton v. Johnson* (Tex. Mar. 13, 2026) — **not** a PPC case; it is a
  fixed-vs-floating double-fraction case applying *Van Dyke*. Deliberately
  excluded from Concept 10.
- *Devon Energy v. Oliver* (Tex. App.—Corpus Christi 2026) (mem. op.) — aside only.

Re-verify before any substantial edit to Concept 10, and watch the Fifteenth Court
of Appeals docket, which is now routing new oil-and-gas appeals.

## Statutory maintenance note

Concept 13 is the first tab built almost entirely on statute rather than case law,
so it decays differently: figures and deadlines, not holdings. It deliberately
**names no cases** — the four-year limitations rule and the security-interest point
are stated as rules, so the tab carries no case-citation maintenance burden.
Verified against current statutory text on **25 July 2026**:

- Tex. Nat. Res. Code §91.402(a) — 120 days first payment; 60 days oil; 90 days gas
- Tex. Nat. Res. Code §91.402(b) — withholding without interest on title dispute,
  reasonable doubt as to clear title, or an unsatisfied title requirement
- Tex. Nat. Res. Code §91.402(d), (f) — accrual of balances under $100 until $100 or
  12 months' proceeds, whichever first; balances under $10 held until production
  ceases; written election for monthly payment between $25 and $100, annual under $10.
  **No bare dollar threshold is printed on the page without its companion rule** — the
  numbers only make sense as a set
- Tex. Nat. Res. Code §91.403 — interest at 2 points above the NY Fed rate on loans to
  depository institutions, unless the lease sets another rate. The page notes only that
  "a higher rate applies in a few specific situations" rather than reciting the 4-point
  cases; if that ever needs detail, start at the RRC Royalties FAQ
- Tex. Nat. Res. Code §91.404 — 30-day written notice precondition; venue in the county
  of the well; §91.406 attorney's fees
- Tex. Nat. Res. Code §91.502 — required check-stub contents (the page's table)
- Tex. Nat. Res. Code §91.504 — owner's certified-mail request; **60-day** certified-mail
  response; §91.504(e) annual notice of the right; §91.507 mediation and fee-shifting
  where the 60 days are blown
- Tex. Prop. Code ch. 75 (§75.101) — mineral proceeds presumed abandoned after **three
  years**; this is the mineral-specific rule, not the general personal-property one
- Tex. Bus. & Com. Code §9.343 — security interest in production and proceeds, attaching
  automatically without filing
- Tex. Tax Code chs. 201–202 — 7.5% gas / 4.6% oil

Two deliberate omissions, both revisitable:

1. **Regulatory and cleanup fees** layered on top of the severance rates are not
   mentioned. For a lay audience the headline rates are the teaching point; the fees
   add noise and change periodically.
2. **Criminal misapplication of fiduciary property** was drafted and then cut. It is
   accurate but a lay reader over-reads it as "my operator can be arrested for a late
   check," and it pulls the page's tone adversarial. The rest of Concept 13 treats
   nonpayment as usually a paperwork problem, which is both more accurate and more
   credible to this audience. Restore it only with heavy hedging.
