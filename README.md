# Visualized Oil

**The mineral estate, drawn.**

An educational web project that explains Texas oil & gas concepts through simple,
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

## How it's built

A single, self-contained, responsive website — no build step, no framework, no
dependencies beyond web fonts. It works on phones and computers and can be hosted
anywhere static files are served.

- `index.html` — the concept curriculum (markup, styles, interactive visuals)
- `glossary.html` — the Lease Clause Dictionary, a searchable reference page
- `ROADMAP.md` — the full concept build plan, tier by tier
- `LICENSE` — proprietary; all rights reserved

Both pages are self-contained and share the same design tokens by duplication,
not by a shared stylesheet. When a third page arrives, extract `css/styles.css`.

To preview locally, open `index.html` in any modern browser. Cross-links between
the two pages use URL hashes (`index.html#t-ppc`), so preview from a folder rather
than opening files from different directories.

## Status

**v1.3 — ten concepts live across Tiers 1–4, plus a Support tab and the
Lease Clause Dictionary.**

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
| — | **Lease Clause Dictionary** (`glossary.html`, 138 clauses) | ✅ Live |
| — | Accommodation doctrine · proration units · unitization · NRI | ◻ Planned |
| — | Wellbore diagram gallery · commissioned diagrams | ◻ Planned |
| — | Offshore/OCS · Ohio ODMA · NM unitization | ◻ Future |

See [`ROADMAP.md`](./ROADMAP.md) for the complete six-tier plan and build
conventions.

## A note on scope

Every visualization here is a simplified teaching tool. It is **not** legal advice,
a title opinion, or a substitute for examining the actual instruments of record.
Ownership in any real tract turns on the documents on file.

---

## License

© 2026 HydroThorpe LLC. All rights reserved.

This is **proprietary software**. No permission is granted to use, copy, modify, or
distribute any part of this project without prior written consent. See
[`LICENSE`](./LICENSE) for full terms. Viewing this repository or the deployed
site's source does not grant any license.
