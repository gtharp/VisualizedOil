# Changelog — Oil, Visualized

Every change to the site that a reader could notice, plus the structural ones
they can't. Newest first.

**Why this file exists.** `ROADMAP.md` is forward-looking — what's live, what's
next, and the six-tier plan. This file is backward-looking — what changed, when,
and in which file. Keeping them apart stops the roadmap from silting up with
patch notes, and stops "what did we do to the toolbar?" from being a question you
answer by reading a plan.

## How to read an entry

The site has **no single version number.** Each page versions independently,
because they ship independently:

| Stream | Versioned in | Footer stamp reads |
|---|---|---|
| `index.html` | header comment + `<meta name="version">` + footer line | `v1.6 · updated …` |
| `glossary.html` | same three places | `Dictionary v1.1.1 · updated …` |
| `regulators/*.html` | same three places, all eleven pages move together | `Where to look it up v1.0.0 · updated …` |

So entries are grouped by **date**, and each names the page versions it moved and
the files it touched. Stylesheets and scripts (`css/`, `js/`) carry no version of
their own — they're stamped by whichever page version shipped with them.

**Scheme:** *patch* for fixes and copy edits · *minor* for a new concept, tab, or
section · *major* for a structural overhaul.

**Categories** follow [Keep a Changelog v2.0.0](https://keepachangelog.com/en/2.0.0/):
Added, Changed, Deprecated, Removed, Fixed, Security. Only those six — use the ones
that apply and skip the rest. Anything that isn't a change type goes in a **Notes**
paragraph outside the lists. When torn between Fixed and Changed, ask whether the
old behavior was a bug: if yes, Fixed; if it worked as intended and now works
differently, Changed.

---

## Unreleased

Nothing staged.

---

## 2026-07-27 — The same flex fault, on all ten state pages

`regulators/*.html` 1.0.1 → **1.0.2** (patch), all eleven pages
Files: `css/regulators.css` · all eleven `regulators/*.html`

**Fixed**

- `css/regulators.css` — the numbered steps in "The document to pull" broke on a
  phone: clipped in portrait, oddly spaced in landscape. Same fault as the
  Concept 12 bullets fixed earlier today, in a different rule. `.pullbox ol li`
  was `display:flex` so the numbered circle could hang off the left edge; flex
  blockifies every child, so each inline `<b>` naming a database or a form
  became its own flex item. Oklahoma step 4 — "Use the **imaging system** for
  the well documents themselves, including **Form 1002A**, the completion
  report" — was six side-by-side boxes rather than one sentence. Each wrapped
  inside its own narrow column, and their combined minimum width overflowed
  `.pullbox`, which hides overflow. In landscape there was room for the columns
  to sit side by side, so it read as strange spacing instead of a cut. The
  counter is now absolutely positioned and the `<li>` is an ordinary block.
  Geometry unchanged — same 20px circle, same 32px indent, same `.15rem` drop.
  **No markup was edited.**

**Notes**

Reported on Oklahoma, but present on all ten state pages: **44 list items**
across Texas, Pennsylvania, New Mexico, Louisiana, Oklahoma, North Dakota,
West Virginia, Colorado, Ohio and Wyoming. Every step in every "document to
pull" list bolds at least one system or form name, so every one of them was
affected. One rule, forty-four bugs.

Full re-audit after the fix: every `display:flex` selector across `base.css`,
`concepts.css`, `glossary.css` and `regulators.css` was cross-referenced against
all thirteen pages for containers holding bare text alongside an inline element.
**Zero remain.** Two patterns still match the shape but cannot reorder, because
each holds only a single run of text: the curriculum tab buttons (`.tab`, a
`<span>` number chip plus the label) and the hub map legend (`.map-legend
span.lg`, a colour swatch plus the caption). Both would scramble the moment
someone put an `<em>` mid-caption — worth remembering rather than pre-emptively
rewriting layout that currently renders correctly.

---

## 2026-07-27 — Two portrait-orientation layout faults

`index.html` 1.6.0 → **1.6.1** (patch)
Files: `css/concepts.css` · `index.html`

**Fixed**

- `css/concepts.css` — Concept 12's "which way does the evidence point?" bullets
  scrambled on a phone held upright. One item reads "Volumes below operating
  cost for a sustained stretch *before* the zeros began," and on a narrow screen
  it rendered as three side-by-side columns of wrapped text, so reading across
  the top line gave "volumes below operating / before / the zeros began." The
  cause was `display:flex` on `.dcol li`, used to hang the round bullet off the
  left edge. Flex blockifies every child, so the `<em>` became its own flex item
  and the sentence was cut into three independent boxes with `gap:.6rem` between
  them. Wide enough and they line up and look like a sentence; narrow and each
  one wraps inside its own column. The marker is now absolutely positioned and
  the `<li>` is an ordinary block, so inline markup flows as text again.
  Geometry is unchanged — same 6px dot, same 15.6px indent, same vertical seat.
  **No markup was edited**; `<em>before</em>` was correct all along.
- `css/concepts.css` — Concept 10's valuation-point slider clipped its own
  readout in portrait. The widget header is one flex row holding a
  `white-space:nowrap` label, a range input at `min-width:120px`, and an
  `<output>` at `min-width:118px` (that override exists so the four stop names
  don't shove the slider around as you drag). Those minimums total roughly
  378px; an iPhone in portrait leaves about 324px inside the padded,
  `overflow:hidden` panel. The row couldn't shrink, so it overflowed and the
  panel cut the right edge off the widest readout — "Point of sale" lost its
  tail. Below 620px the row now stacks: label and readout share the top line,
  the slider spans the full width beneath. The two per-concept `min-width`
  overrides (`#ppc`, `#shutin`) are scoped to `min-width:620px` so they no
  longer fight the stacked layout. **Affects every `.dil` widget** — Concepts
  05, 08, 10, 11 and 13 share this header — but Concept 10 was the only one
  whose readout ran long enough to overflow.

**Notes**

Both faults are the same species: a flex container whose minimum content width
exceeds a phone, inside a box that hides overflow. Neither shows up on a desktop
or on a phone turned sideways, which is why both survived to 1.6.0. Worth a look
at any other `display:flex` row that mixes bare text with an inline element —
an audit of all thirteen pages found only the tab buttons, and those hold a
`<span>` plus one text run, which can't reorder.

`.willcover` / `.willcover li` in `css/concepts.css` carry the same flex-`li`
shape and would fail the same way, but no page references either class. Dead
rules, flagged rather than changed. Also unchanged: the footer stamp on
`index.html` read `v1.6` where every other page prints all three digits; it now
reads `v1.6.1`.

---

## 2026-07-27 — "Only one calls it that"

`regulators/*.html` 1.0.0 → **1.0.1** (patch), all eleven pages
Files: `regulators/index.html` · `regulators/colorado.html` ·
`regulators/louisiana.html` · `regulators/new-mexico.html` ·
`regulators/north-dakota.html` · `regulators/ohio.html` ·
`regulators/oklahoma.html` · `regulators/pennsylvania.html` ·
`regulators/texas.html` · `regulators/west-virginia.html` ·
`regulators/wyoming.html`

**Fixed**

- `regulators/index.html` — the hub headline read "Every state has a Railroad
  Commission. Almost none of them *call* it that." "Almost none" understates it
  by ten out of ten: no state other than Texas calls its conservation agency a
  Railroad Commission, and no other state has an agency of that name doing
  anything else either — the Florida, Georgia, Mississippi, California and
  Nebraska railroad commissions all became public service or utility commissions
  decades ago. Now reads "Only one of them *calls* it that," which is both
  accurate and a better setup for the page. Verified 2026-07-27 against the
  RRC's own jurisdiction page and secondary reporting on the recurring rename
  bills.

**Changed**

- `regulators/index.html` — the 1917–1919 history entry now closes on why the
  name outlived the job: rail regulation left the agency for good in 2005, no
  other state kept the label, and Texas is the last Railroad Commission
  standing. Two sentences, added to give the corrected headline somewhere to
  land.

**Notes**

The ten state pages carry no content change. They move to 1.0.1 because the
section versions as a unit — all eleven footers have to agree, or the stamp
stops meaning anything.

---

## 2026-07-26 — Mobile wordmark bug and the glossary toolbar

`glossary.html` 1.1.0 → **1.1.1** (patch)
Files: `css/base.css` · `css/glossary.css` · `glossary.html`

**Fixed**

- `css/base.css` — the stray red dot that appeared partway down the left edge on
  phones and rode the sticky header down the page. Cause was a class-name
  collision, not a rendering artifact: the period in the wordmark is
  `<span class="dot">`, and the bare `.dot` rule for the 9px round ledger legend
  swatch also matched it. That rule's `display:inline-block` turned the period
  into an atomic inline, which is a line-break opportunity, so on a narrow screen
  the wordmark wrapped to three lines — `Oil,` / `Visualized` / `.` — inside a bar
  with a hard `height:62px`. The overflow painted outside the header. Every box
  property is now reset inside `.brand .mark .dot`; the ledger swatch rule is
  untouched. **Affects all thirteen pages**; no page markup needed editing.
- `css/base.css` — the wordmark can no longer shrink or wrap
  (`flex:0 0 auto` + `white-space:nowrap`). The nav is the thing that scrolls.
- `css/base.css` — `.bar` moved from `height:62px` to `min-height:var(--headh)`,
  so any future overflow grows the header instead of spilling over the page.

**Changed**

- `css/glossary.css` — the sticky filter toolbar was running ~208px on a phone,
  three wrapped rows of category chips. Under 720px it's now a two-row grid:
  search + result count on one row, chips on a single swipeable strip — the same
  pattern `.headnav` already uses. ~94px. Desktop layout unchanged.
- `css/base.css` — added a `--headh` token for the header height.
  `glossary.css` offsets its sticky toolbar by it, so the two stay locked.
- `css/base.css` — the header tagline now appears at 900px rather than 820px. At
  820 the wordmark plus nav overran the bar by a few pixels.

**Notes**

`index.html` needed no edit — the wordmark fix is entirely in the shared sheet, so
all thirteen pages picked it up at once. `backdrop-filter:blur()` on the header and
toolbar was an earlier suspect for this bug and is innocent; left in place.

---

## 2026-07-25 — Concept 13, The money trail

`index.html` → **1.6.0** (minor)
Files: `index.html` · `js/app.js`

**Added**

- Concept 13, *The money trail — purchaser to mailbox*: the plumbing between the
  wellhead sale and the check. The purchaser's lump sum landing in the operator's
  general account (one tank, six taps — no escrow, no trust); the division-order
  deck exploded across a worked $30,000 month; the two-stub toggle comparing
  itemized against netback (identical $112.30 net, identical $34.18 given up,
  only one of them visible); statutory stub contents and the 60-day certified-mail
  request; suspense as a ledger line; the automatic security interest and the
  unsecured-creditor trap; escheat at three years; interpleader; and a 48-month
  limitations window with 36 months expiring while you wait. Seven inline SVGs
  and an `initMoneyTrail()` module.
- Cross-link from Concept 07 into Concept 13.

**Notes**

- First tab built almost entirely on statute rather than case law, and it names
  no cases deliberately. Statutory authority and the two deliberate omissions are
  logged in ROADMAP.md → *Statutory maintenance note*. Verified 2026-07-25.
- Absorbed the planned "Suspense, escheat & unclaimed property" concept, which is
  no longer a separate row in the Tier 4 table.

---

## 2026-07-24 — The regulator section, and the CSS/JS split

`regulators/` → **1.0.0** (new section) · `glossary.html` → **1.1.0** (minor) ·
`index.html` → **1.4.0** (minor)
Files: `regulators/index.html` + ten state pages · `css/base.css` ·
`css/concepts.css` · `css/glossary.css` · `css/regulators.css` · `js/app.js` ·
`js/glossary.js` · `js/regulators.js` · `index.html` · `glossary.html` ·
`sitemap.xml`

**Added**

- **Where to look it up** (`regulators/`) — the site's third section and first
  multi-page one. A hub plus ten state pages covering the top ten producing
  states by combined oil and gas (EIA 2023, 6:1 BOE): TX, PA, NM, LA, OK, ND, WV,
  CO, OH, WY. Each state page gives the agency, where it came from, the one
  document a mineral owner should pull and how to get there, what else it
  publishes, and how it differs from Texas.
- Hub carries a clickable tile map, the ten-state comparison table, the 1859→now
  history, and an interactive API-number decoder anchored on the horseshoe well.
- Shared three-way site nav in the header of every page: Concepts · Clause
  dictionary · Where to look it up.
- `sitemap.xml` grew to 13 URLs. Hub-and-spoke was chosen precisely for this —
  each state page is a separate rankable URL with its own title and description,
  which a tab inside the single-page curriculum could never be.

**Changed**

- **CSS and JS came out of the HTML.** The trigger condition in the build
  conventions (a third page) was met, so the inline blocks were extracted to
  `css/base.css` plus one sheet per section, and `js/app.js` plus one script per
  section. Verified by selector diff against the v1.3 inline stylesheet: no rules
  dropped. All paths stay relative, so the site still previews off disk.

---

## 2026-07-23 — Concept 10 case-law verification

Files: `ROADMAP.md`

**Changed**

- Concept 10's decided cases verified current as of this date and logged in
  ROADMAP.md → *Case-law maintenance note*: *Fasken v. Puig* reversing the San
  Antonio COA; *City of Crowley v. TotalEnergies* petition denied 2026-05-01,
  status changed from "pet. filed"; *Clifton v. Johnson* deliberately excluded as
  a fixed-vs-floating case, not a PPC case. Re-verify before any substantial edit
  to Concept 10 or 12.

---

## 2026-07-19 — Versioning introduced

`index.html` → **1.0.0**
Files: `index.html`

**Added**

- Version header comment, `<meta name="version">` and `<meta name="last-updated">`
  tags, and a discreet footer version line. This is what makes "which file is
  newest?" answerable at a glance.

**Removed**

- The visible `v0.1` beta tag from the UI.

---

## Before 2026-07-19 — pre-versioning

Concepts 01–12 and the first release of the Lease Clause Dictionary were built
before the version scheme existed, so there is no per-build record of them. What
they contain is documented in ROADMAP.md's tier tables rather than here.

---

## Backfill note

Entries dated before 2026-07-26 were reconstructed on 2026-07-26 from version
headers, footer stamps, `sitemap.xml` lastmod dates, and ROADMAP.md, not from a
contemporaneous log. Dates and scope are reliable; the exact version numbers
below are **not recorded anywhere** and were skipped rather than guessed:

- `index.html` 1.1.0, 1.2.0, 1.3.0, 1.5.0 — what shipped in each, and when.
  Concepts 10, 11 and 12 landed somewhere in here; Concept 10's case-law check is
  dated 2026-07-23, which brackets it.
- `glossary.html` 1.0.0 — the dictionary's first release date.

Fill these from `git log` if the commit messages carry enough, and delete this
note once they're in. Everything from 2026-07-26 forward is logged as it happens.
