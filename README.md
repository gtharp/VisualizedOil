# Visualized Oil

**The mineral estate, drawn.**

An educational web project that explains oil & gas concepts through simple,
interactive visuals — built for people entering the mineral space who learn best
by *seeing* how ownership, leasing, and production actually work.

🌐 [visualizedoil.com](https://visualizedoil.com)

---

## What this is

Oil and gas ownership is one of the most counterintuitive areas of property law.
The land you stand on and the minerals beneath it can be owned by completely
different people; a single surface tract can sit over two or more separate mineral
tracts; a fraction written as "2/3" doesn't mean a fenced-off piece of ground.
These ideas are hard to grasp from text alone — but they become obvious the moment
you can *see* them.

Visualized Oil turns each concept into an interactive picture. You can pull the
surface estate up off the minerals to see they're separate, toggle between a
cross-section and a top-down plat, tap a tract to inspect who owns what, and read
the net-acre math right alongside the drawing.

The project starts with the most fundamental concept and adds one layer at a time,
so a newcomer can follow the whole chain from "what do I even own?" through leasing,
pooling, and getting paid — and eventually into advanced and out-of-state topics.

## Who it's for

- New hires and junior analysts in land, title, and mineral management
- Trust, estate, and individual mineral owners trying to understand their interests
- Anyone who learns visually and wants the intuition before the jargon

## The three sections

| Section | Lives at | What it is |
|---|---|---|
| **The concepts** | `index.html` | The Texas curriculum — thirteen concepts across Tiers 1–5, one tab each, simplest first |
| **The clause dictionary** | `glossary.html` | 138 common lease clauses in plain English, searchable and filterable |
| **Where to look it up** | `regulators/` | The Railroad Commission and its equivalents in the ten biggest producing states — hub plus one page per state |

## How it's built

A responsive static site — no build step, no framework, no dependencies beyond
web fonts. It works on phones and computers and can be hosted anywhere static
files are served.

```
index.html                 the concept curriculum (tabs 01–13 + Support + Roadmap)
glossary.html              the Lease Clause Dictionary
regulators/
  index.html               hub — tile map, ten state cards, history, API decoder
  texas.html               ┐
  pennsylvania.html        │
  new-mexico.html          │
  louisiana.html           │
  oklahoma.html            ├ ten state pages, ranked by production
  north-dakota.html        │
  west-virginia.html       │
  colorado.html            │
  ohio.html                │
  wyoming.html             ┘
css/
  base.css                 tokens + shared chrome — EVERY page loads this first
  concepts.css             index.html only: tab strip, panels, concepts 01–13
  glossary.css             glossary.html only: toolbar, chips, clause cards
  regulators.css           regulators/ only: tile map, API decoder, state cards
js/
  app.js                   index.html: tab router + concept interactions
  glossary.js              glossary.html: clause data + search/filter
  regulators.js            regulators/: map tiles + API number decoder
sitemap.xml  robots.txt  CNAME  LICENSE
ROADMAP.md   what's live, what's next, the six-tier plan, build conventions
CHANGELOG.md what changed, when, and in which file — newest first
```

### The stylesheet rule

`base.css` holds the design tokens and everything that appears on more than one
page: header, footer, `.wrap`, `.hero` (plus the `.hero.compact` modifier that
reference pages use), `.section`, `.callout`, `.kicker`, `.glossary`/`.term`
cards, `table.ledger`, and the utilities. Everything else belongs to exactly one
page's stylesheet.

**When adding a component, ask: does a second page use it?** If yes it goes in
`base.css`; if no it goes in that page's own sheet. Resist the temptation to put
it in `base.css` "just in case" — that's how the shared sheet turns back into a
dumping ground.

### Paths

All references are **relative**, so the site previews correctly by opening
`index.html` straight off disk — no local server needed. Pages inside
`regulators/` reach shared assets with `../css/…` and `../js/…`.

## Status

**v1.6 — thirteen concepts, the clause dictionary, and the ten-state regulator section.**

| Tab | Concept | Status |
|---|---|---|
| 01 | Surface vs. mineral estate · severance | ✅ Live |
| 02 | Separate tracts & common ownership | ✅ Live |
| 03 | Fractional & undivided interests | ✅ Live |
| 04 | The lease — signing to termination | ✅ Live |
| 05 | Pooling & dilution | ✅ Live |
| 06 | Your decimal — division orders (DOI) | ✅ Live |
| 07 | The royalty check | ✅ Live |
| 08 | Severance tax vs. ad valorem tax | ✅ Live |
| 09 | Allocation & PSA wells | ✅ Live |
| 10 | Post-production costs | ✅ Live |
| 11 | Holding the lease — HBP & savings clauses | ✅ Live |
| 12 | HBP monitoring & lease termination risk | ✅ Live |
| 13 | The money trail — purchaser to mailbox | ✅ Live |
| — | **Lease Clause Dictionary** (`glossary.html`, 138 clauses) | ✅ Live |
| — | **Where to look it up** (`regulators/`, hub + 10 states) | ✅ Live |
| — | Accommodation doctrine · proration units · unitization · NRI | ◻ Planned |
| — | Chain of title · operator transfers & bankruptcy | ◻ Planned |
| — | Wellbore diagram gallery · commissioned diagrams | ◻ Planned |
| — | Offshore/OCS · Ohio ODMA · NM unitization | ◻ Future |

See [`ROADMAP.md`](./ROADMAP.md) for the complete six-tier plan and build
conventions, and [`CHANGELOG.md`](./CHANGELOG.md) for the build history — each
page versions independently, so entries are dated and name the files they touched.

## A note on scope

Every visualization here is a simplified teaching tool. It is **not** legal advice,
a title opinion, or a substitute for examining the actual instruments of record.
Ownership in any real tract turns on the documents on file.

The regulator pages describe public government records and how to find them.
Agency names, form numbers, websites and fee schedules change; the agency's own
site always wins. The ad valorem tax column in particular is structural, not a
rate, and is flagged on the page as the thing most worth confirming locally.

---

## License

© 2026 HydroThorpe LLC. All rights reserved.

This is **proprietary software**. No permission is granted to use, copy, modify, or
distribute any part of this project without prior written consent. See
[`LICENSE`](./LICENSE) for full terms. Viewing this repository or the deployed
site's source does not grant any license.
