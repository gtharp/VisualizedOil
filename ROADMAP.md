# Oil, Visualized — Project Roadmap

Two things live under one roof at **visualizedoil.com**:

1. **The learning curriculum** — an educational site that explains Texas oil & gas
   concepts through simple, interactive visuals, starting with the most fundamental
   ideas and working toward the complex and jurisdiction-specific.
2. **The wellbore diagram gallery** — a showcase of original wellbore and well-path
   diagrams, with a path toward selling **commissioned diagrams** of specific wells
   that carry meaning for a family, a landman, or someone in the industry.

**Audience:** people entering the mineral space (new hires, trust/estate clients,
landowners, junior analysts) — and, for the gallery, mineral owners, oilfield
professionals, and families with a well that means something to them.
**Principle:** ship the foundations first. Each concept assumes only the ones above it.
Every concept defines its own vocabulary in plain English before using it — assume
zero property-law background going in.
**Format:** single responsive site (`index.html`), one tab per concept, simplest first.

---

## Project status (snapshot)

- **Domain:** `visualizedoil.com` live on Squarespace DNS → GitHub Pages, HTTPS enforced
- **Repo:** `github.com/gtharp/VisualizedOil` — proprietary license, README in place
- **Analytics:** Cloudflare Web Analytics beacon embedded and live
- **SEO:** `robots.txt` + `sitemap.xml` at repo root; Google Search Console domain
  property set up (DNS TXT verification); self-referencing `<link rel="canonical">`
  now in `index.html`. The lone Search Console "Page with redirect" notice is the
  expected `http://` / `www.` → canonical redirect, not a real indexing problem.
- **Claude Project:** a dedicated project (see `PROJECT_SETUP.md`) now houses this
  build separately from the fiduciary/legal reference project
- **8 concepts live** on site, tabs 01–08 (see Tier tables below for which)
- **Support / donations live** — a ♥ Support tab explains the free-education mission
  and offers an optional Venmo donation (embedded QR + payment link, `@George-Tharp`);
  support links also sit in the global footer and at the foot of Concept 01
- **Versioning** — the old `v0.1` beta tag is gone from the visible UI. Instead,
  `index.html` now carries a version **header comment** plus `<meta name="version">`
  and `<meta name="last-updated">`, and a discreet footer line (`v1.0 · updated July
  19, 2026`). Current build: **v1.0.0**. This is the canonical way to tell which
  `index.html` is newest — bump it on every commit (see build conventions)
- **Wellbore gallery** — in progress; three diagrams ready to feature, not yet built
  into the site
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

> Beyond the eight concept tabs, the nav also carries a **♥ Support** tab (the
> free-education mission + Venmo donation) and this **→ Roadmap** tab. The website's
> own Roadmap tab mirrors the tier tables below and is now in sync with what's live.

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
| Planned | Held by production & savings clauses (deep dive) | Shut-in royalty, temporary cessation, continuous operations | |
| Planned | Pugh clauses & retained acreage | Releasing undeveloped acreage; the no-Pugh holding trap | |

## TIER 3 — Combining tracts
*Many owners, one well.*

| Status | Concept | What it teaches | Notes |
|---|---|---|---|
| **Live** | Pooling & dilution | What a unit is, pooling vs. unitization defined plainly, a live slider showing a big owner diluted (100%→50%→25%) vs. a small owner included (0%→1.25%), the MIPA + §102.014 statutory backbone | Built as Concept 05 — combines the original "voluntary & compulsory pooling" and "dilute or be diluted" rows |
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
| Planned | Suspense, escheat & unclaimed property | Where unpaid royalties go and how to recover them | |
| Planned | Post-production costs (deep dive) | What can and can't be netted from royalty — Concept 07 covers the basics; this would go deeper into lease-clause variation | |

## TIER 5 — Title & risk
*Proving and protecting ownership.*

| Status | Concept | What it teaches |
|---|---|---|
| Planned | Chain of title & title examination standards | Sovereignty to present; BFP status; blanket-conveyance limits |
| Planned | HBP monitoring & lease termination risk | When old leases quietly terminate; the "market will tell us" failure mode |
| Planned | Operator transfers, P-4s & bankruptcy | Following the leasehold through operator changes |

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
- **Version tracking:** every `index.html` change bumps three things together — the
  version header comment at the top of the file, the `version` / `last-updated` meta
  tags, and the footer version line. Rough scheme: **patch** for fixes and copy edits,
  **minor** for a new concept/tab, **major** for a structural overhaul. This is what
  makes "which file is newest?" answerable at a glance — the lesson from the v0.1 /
  polish divergence.
- **Disclaimer stays in the footer:** teaching tool, not legal advice. Credit line:
  "Created by George Tharp, JD."
- **Tech stack stays simple:** one self-contained `index.html` (inline CSS/JS, no
  framework) until a second HTML page (gallery, commission) makes a `css/` + `js/`
  split worthwhile.

## Suggested near-term sequence

1. Finish **Tier 1** — Accommodation doctrine & surface use — to close out the
   foundational estate concepts.
2. Add the **Gallery** section/tab with the three existing diagrams — the most
   visible, sharable thing, and it seeds the commission service.
3. Port **proration units & allowables** and **unitization** into Tier 3 with the
   house visual language (early prototypes already exist for these).
4. Stand up the **"Commission a well"** page + intake form + a single payment link to
   test demand before building a real store.
5. Round out **Tier 2** (Pugh clauses, HBP/savings clauses deep dive) and **Tier 4**
   (NRI/burden stack, suspense & escheat) before moving into Tier 5 title topics.
