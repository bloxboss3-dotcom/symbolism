# Content editorial guide

How words get into Still Before Him, and the standard they must meet before a
user ever sees them. The build enforces the mechanical parts
(`npm run validate:content`); this guide covers the judgment.

## Principles

1. **The app never speaks for God.** It may guide, invite, and quote Scripture.
   It must never present words as God's personal message to the user, claim
   revelation, or promise outcomes (health, prosperity, certainty, answers).
2. **Accuracy is a product feature.** A beautiful screen with a misquoted saint
   is a broken build.
3. **Fairness across traditions.** The MVP voice is broadly orthodox and
   ecumenical. Where faithful Christian traditions genuinely differ, entries say
   so plainly (`contested: true` + `perspectives`) instead of presenting one
   view as undisputed fact.
4. **Kinds of claims stay labeled.** Literary context and historical context
   carry facts and textual observations; `themes` carry theological
   interpretation; `application` is devotional. Do not smuggle interpretation
   into the fact sections.
5. **No runtime generation.** Commentary, prayers, and quotations are curated
   seed data, reviewed before publication. An LLM must never be asked at
   runtime to produce authoritative biblical commentary.

## Publication status

Every commentary entry carries `reviewStatus`:

- `demo` — seed content: written to the standards below, sources verified as
  covering the passage, but not yet through independent human editorial review.
  The UI labels it "Demo content".
- `draft` — under active editorial review.
- `reviewed` — approved by a named reviewer; only then does the "Demo" label
  disappear.

Seed content shipped in this repository is `demo` by design. Promoting an entry
to `reviewed` requires a human reviewer to check every claim, every citation,
and the fairness of every perspective note, and to record the review in the PR.

## Sourcing commentary

- Prefer primary sources, scholarly commentaries, respected
  seminaries/universities, and established public-domain works. Age or fame
  does not make a source reliable for a specific claim.
- Write **original prose**. Never copy a commentator's sentences; cite whose
  argument you are summarizing.
- Every entry needs at least one citation with author, work, and a URL or
  bibliographic reference (schema-enforced). Cite what you actually consulted,
  at the URL you actually used. Record known quirks (e.g. CCEL's Matthew Henry
  psalm files are offset by one) in the citation's `note`.
- Handle hard texts honestly (e.g. "visiting the iniquity of the fathers…" in
  Exodus 34): explain, don't sand off.

## Verifying quotations

The hard rule: **verify the exact wording against a reliable primary edition or
reputable archive, or do not publish.** Concretely:

1. Fetch the archive text (Project Gutenberg, CCEL, archive.org, the Spurgeon
   Archive, New Advent, …) and confirm the wording character by character.
2. Where the archive differs from the popular form of a quote, **the archive
   wins** (e.g. Pusey's Augustine reads "Thou madest us for Thyself", not the
   commonly quoted "Thou hast made us"). Note the difference in
   `verification.notes`.
3. Record: speaker, work, edition/translator, locator, URL, year,
   license status, `verifiedAgainst`, `verifiedOn`, and any editorial notes
   (elisions, normalized whitespace, sentence boundaries).
4. Never paraphrase inside quotation marks. Never use unattributed internet
   quote collections as a source.
5. In-copyright material (Lewis, Bonhoeffer, contemporary scholars) may exist
   in the data **only** as a bracketed placeholder with
   `verification.status: 'placeholder'` and `publishable: false` until wording
   is verified against a licensed edition and the use is legally cleared. The
   build fails if a placeholder is marked publishable; the registry excludes
   everything unverified from the UI by construction.
6. Represent women and multiple periods and traditions among quoted voices.
   Quotation does not imply the speaker would endorse this app.

## Writing prayers

- Ground claims about God in Scripture; record substantial allusions in the
  prayer's `allusions` array (schema requires them for guided/compline
  prayers).
- Aim for theological clarity, varied cadence, concrete imagery, and room for
  response. Avoid filler ("amazing", "just really"), therapeutic vagueness,
  and cliché.
- Trinitarian language is welcome where natural; denominationally disputed
  wording belongs in future tradition-specific content packs, not the
  ecumenical default.
- Never promise what God has not promised. Confession language must never
  shame; examen prompts must never imply the app can judge anyone's
  faithfulness.

## Tone throughout the app

Reverent, warm, unhurried, and plain. The app should feel like a quiet room,
not a coach. Consistency is invited ("rhythm"), never scored (no streaks, no
guilt states, "ended early — still prayer").
