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
