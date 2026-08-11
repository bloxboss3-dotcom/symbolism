# Content sources

Every piece of user-facing content in Still Before Him is either original to this
project or drawn from a documented public-domain source. This file is the ledger.
The machine-readable version of the same information lives beside the content in
`src/data/` and is enforced by `npm run validate:content`.

## Scripture

**Translation:** World English Bible (WEB)
**Status:** Public domain. The WEB is dedicated to the public domain by its editors;
"World English Bible" is a trademark of eBible.org, used here for unmodified text.
**Translation home:** <https://ebible.org/web/>
**Note:** The WEB renders the divine name as "Yahweh" in the Old Testament.

Passage text was transcribed verbatim via the public [bible-api.com](https://bible-api.com)
service, which serves the WEB, and committed as typed data with per-passage
retrieval records (also stored in each file under `retrieval`):

| Passage              | Retrieved from                                                                                                   | Date       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------- |
| Colossians 1:15–20   | [bible-api.com/colossians+1:15-20?translation=web](https://bible-api.com/colossians+1:15-20?translation=web)     | 2026-08-11 |
| Exodus 34:5–8        | [bible-api.com/exodus+34:5-8?translation=web](https://bible-api.com/exodus+34:5-8?translation=web)               | 2026-08-11 |
| Hebrews 1:1–4        | [bible-api.com/hebrews+1:1-4?translation=web](https://bible-api.com/hebrews+1:1-4?translation=web)               | 2026-08-11 |
| Isaiah 40:25–31      | [bible-api.com/isaiah+40:25-31?translation=web](https://bible-api.com/isaiah+40:25-31?translation=web)           | 2026-08-11 |
| John 1:1–14          | [bible-api.com/john+1:1-14?translation=web](https://bible-api.com/john+1:1-14?translation=web)                   | 2026-08-11 |
| Lamentations 3:22–26 | [bible-api.com/lamentations+3:22-26?translation=web](https://bible-api.com/lamentations+3:22-26?translation=web) | 2026-08-11 |
| Psalm 4:1–8          | [bible-api.com/psalm+4:1-8?translation=web](https://bible-api.com/psalm+4:1-8?translation=web)                   | 2026-08-11 |
| Psalm 8:1–9          | [bible-api.com/psalm+8:1-9?translation=web](https://bible-api.com/psalm+8:1-9?translation=web)                   | 2026-08-11 |
| Psalm 16:8–9         | [bible-api.com/psalm+16:8-9?translation=web](https://bible-api.com/psalm+16:8-9?translation=web)                 | 2026-08-11 |
| Psalm 27:4           | [bible-api.com/psalm+27:4?translation=web](https://bible-api.com/psalm+27:4?translation=web)                     | 2026-08-11 |
| Psalm 63:1–8         | [bible-api.com/psalm+63:1-8?translation=web](https://bible-api.com/psalm+63:1-8?translation=web)                 | 2026-08-11 |
| Psalm 121:1–8        | [bible-api.com/psalm+121:1-8?translation=web](https://bible-api.com/psalm+121:1-8?translation=web)               | 2026-08-11 |
| Psalm 145:1–3        | [bible-api.com/psalm+145:1-3?translation=web](https://bible-api.com/psalm+145:1-3?translation=web)               | 2026-08-11 |
| Revelation 21:1–5    | [bible-api.com/revelation+21:1-5?translation=web](https://bible-api.com/revelation+21:1-5?translation=web)       | 2026-08-11 |
| Zephaniah 3:17       | [bible-api.com/zephaniah+3:17?translation=web](https://bible-api.com/zephaniah+3:17?translation=web)             | 2026-08-11 |

**Usage restrictions:** none (public domain). Attribution to the WEB is given in
the reader UI and on the Sources screen as a courtesy and for clarity.

Licensed translations (ESV, NIV, …) are **not** included and must only ever be
added through a properly licensed `ScriptureProvider` implementation.

## Prayers

All prayers, arrival texts, examen prompts, and sending lines are **original works
written for this project** (see `src/data/prayers-*.ts` and `src/data/routines.ts`).
Substantial biblical phrases inside them are recorded in each prayer's `allusions`
array with their Scripture references; one compline line adapts the third collect
of Evening Prayer from the **Book of Common Prayer (1662)**, which is public
domain, and is credited in the allusion notes.

## Commentary

Commentary entries (`src/data/commentary/*.ts`) are original prose written for
this project, drawing on the public-domain works cited inside each entry
(Matthew Henry, John Calvin, Charles Spurgeon's _Treasury of David_,
B. F. Westcott, J. B. Lightfoot, Keil & Delitzsch, Augustine's _Tractates_).
Each entry stores its citations (author, work, URL/bibliographic reference,
year where known), its tradition label, and a `reviewStatus`. All seed entries
ship as `demo` — clearly labeled in the UI — pending the editorial review
workflow described in `docs/CONTENT_EDITORIAL_GUIDE.md`. No commentary is ever
generated at runtime by a language model.

## Quotations

Quotations live in `src/data/quotes/` with full verification metadata. The rule,
enforced at build time: **a quotation appears in the app only if its exact
wording was verified against the named archive on the recorded date.** All
published quotes are public domain (Augustine tr. Pusey; Julian of Norwich
ed. Warrack 1901; Brother Lawrence, CCEL edition; Wesley's Journal, CCEL;
Athanasius tr. Robertson 1892; Teresa of Ávila tr. Longfellow; Calvin
tr. Beveridge; Spurgeon; Christina Rossetti 1894). One deliberately
non-publishable placeholder entry (C. S. Lewis, _Mere Christianity_)
demonstrates how in-copyright material is represented without quoting it.

Verification details for every quote — including places where an archive's
wording differs from the popularly quoted form (the archive wins) — are in each
entry's `verification.notes` and visible in-app on the Sources screen.

## Audio

There are no audio assets. Ambience (rain, night air, a low tone) and the chime
are synthesized in the browser with the Web Audio API by `src/lib/audio.ts` —
original code, no recordings, nothing to license.

## Icons and figures

App icons are generated by `scripts/generate-icons.mjs` (original code-drawn
artwork). Stretch figures and UI icons are original inline SVG. No stock imagery
is used anywhere.
