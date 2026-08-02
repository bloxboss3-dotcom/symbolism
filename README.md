# Wisdom

**See truly. Judge wisely. Speak meaningfully. Live faithfully.**

A Christian practical-wisdom formation app, built as an installable Progressive Web App. It is not
a Bible quiz, a quote collection, a symbolism dictionary, or a chatbot. It is a school of practical
wisdom: a twelve-module curriculum that trains you to notice what is actually there, interpret it
honestly, judge well when every option costs something, understand a person before advising them,
say the true thing so that it lands, and then go and do something about it.

Everything you write stays on your own device. There is no account, no server, no analytics, and
nothing to pay for.

---

## What it teaches

Six trainable abilities, and every step in the curriculum is tagged with one:

| Ability        | What it trains                                                                      |
| -------------- | ----------------------------------------------------------------------------------- |
| **See**        | Detail, repetition, contrast, omission, order, voice, change — before interpreting. |
| **Interpret**  | Genre, context, metaphor, symbol, and the difference between stated and inferred.   |
| **Discern**    | Scripture, virtue, motive, consequence, duty — and what a good choice will cost.    |
| **Understand** | What someone is saying, feeling, fearing, wanting, assuming, and failing to see.    |
| **Answer**     | Truthful, clear, memorable, kind, and fitted to this person in this moment.         |
| **Live**       | Prayer, habit, repentance, courage, and the conversation you have been avoiding.    |

### The curriculum

Twelve modules, each with one substantial lesson of 30–55 minutes:

1. What Wisdom Is and Why Intelligence Is Not Enough
2. Observation Before Interpretation
3. Context, Genre, Metaphor, and Symbolism
4. Evidence, Alternative Interpretations, and Intellectual Humility
5. Desire, Temptation, and Self-Deception
6. Virtue, Vice, Character, and Habit
7. Suffering, Uncertainty, Job, and the Limits of Formulas
8. Justice, Mercy, Truth, Loyalty, and Competing Duties
9. Listening Beneath a Person's Words
10. Giving Counsel Without Controlling or Oversimplifying
11. Explaining Truth Through Analogy, Story, and Symbol
12. The Final Wisdom Trial: A Complex Leadership and Relationship Case

Plus **six standalone case files** (a friend asking for relationship advice; a leader choosing
between truth and apparent peace; a student who has failed for the first time; a father using
Proverbs 22:6 as a contract; a conflict where both people are right; and a symbolic investigation of
the Sirens and the homecoming to Ithaca) and **four transfer trials** that drop a principle you have
already met into a situation that looks nothing like where you learned it.

### The lesson loop

Every lesson runs the same experiential sequence, and instruction is always withheld until after you
have committed to a judgement of your own:

> Encounter → First judgment → Investigation → Wisdom lenses → Socratic challenge →
> Perspective shift → Decision → Wise answer → Exemplar → Revision → Life practice

Twenty step types implement it: certainty-ladder sorting, evidence selection, ranking, branching
decisions with named costs, simulated counselling, perspective reconstruction, connection matching,
long-form composition with an optional dictation affordance, self-assessment against a rubric, and
a real-world assignment you commit to.

---

## Features

- **Onboarding** that asks what you want wisdom for and writes a specific starting summary from your
  answers rather than a flattering one.
- **Home** with Continue, today's practice, streak, the six-ability Wisdom Map, module progress, and
  your most recent journal insight.
- **Lesson player** that saves after every meaningful step — closing the tab or locking your phone
  mid-answer loses nothing.
- **Case Lab** — case files and transfer trials that unlock once you have done the work that makes
  them a fair test rather than a guess.
- **Wisdom Journal** — original and revised answers side by side, reflections, tags, full-text
  search, practice commitments, and discovered connections.
- **Library** — passages, concepts, interpretive tools, virtues, vices, stories, myths, psychological
  findings, and analogies, all searchable and all labelled with where their claim comes from.
- **Progress** — growth across the six abilities, curriculum completion, your own rubric scores over
  time, and concept mastery on an expanding review schedule.
- **Export / import / delete** your entire local dataset as JSON, with a typed confirmation before
  anything is destroyed.
- Dark and light themes, five text sizes, reduced-motion support, safe-area insets, bottom
  navigation, semantic HTML, and keyboard navigation on desktop.

### Gamification, deliberately restrained

Insight points for work that required thought (reading pays almost nothing, and no step pays twice).
A streak that measures presence and never scolds you for missing a day. Unlockable case files,
concept mastery, and a collection of connections discovered between Scripture, psychology,
philosophy, myth, and ordinary Tuesdays. No energy systems, no loot boxes, no fake urgency, no
meaningless XP.

---

## How claims are handled

Scripture and historic Christianity provide the governing account of truth, goodness, human nature,
sin, redemption, love, justice, and flourishing. Greek and Roman myth, classical philosophy, modern
psychology, history, literature, and leadership research are engaged seriously — and not treated as
equally authoritative.

Concretely, that means:

- Every lens card and library entry carries a **claim kind**: Scripture, historic Christian
  teaching, psychological research, philosophical argument, historical claim, literary reading, myth,
  leadership research, or _the curriculum writer's inference_.
- Where a research finding is contested or has replicated poorly, the card says so.
- Where interpreters have genuinely disagreed for centuries, you are told that rather than handed a
  verdict.
- Scripture is quoted from the **World English Bible**, which is in the public domain. Public-domain
  literature (Homer, Sophocles, Shakespeare, Hugo, Dostoevsky, Austen, Augustine) is described and
  summarised rather than quoted from modern copyrighted translations.
- No fabricated verses, quotations, studies, or citations.

---

## Technical stack

| Layer     | Choice                                                                                  |
| --------- | --------------------------------------------------------------------------------------- |
| Framework | React 19 + TypeScript (strict)                                                          |
| Build     | Vite 7                                                                                  |
| Routing   | React Router 7, `HashRouter` — safe on a GitHub Pages project sub-path                  |
| Styling   | Hand-organised CSS with design tokens; no UI framework                                  |
| State     | `useReducer` + context, persisted to `localStorage` with versioned migration            |
| PWA       | Hand-written service worker, precache manifest generated from the real bundle           |
| Icons     | Generated at build time by a dependency-free PNG encoder (`scripts/generate-icons.mjs`) |
| Tests     | Vitest + Testing Library, jsdom                                                         |
| CI        | GitHub Actions → GitHub Pages                                                           |

### Repository structure

```
src/
  components/          Shared interface pieces (rich text, icons, nav, map, sheet)
  pages/               One file per screen
  features/
    lessons/           The lesson player and its twenty step components
    progress/          Pure reducer, context, provider, derived selectors
    settings/          Appearance application
  data/
    curriculum/        Twelve modules, one file each
    cases/             Case files and transfer trials
    library/           Reference entries
    abilities.ts  rubric.ts  goals.ts
  lib/                 Storage, scoring, dates, text, speech, the mentor adapter
  types/               Content and progress types
  pwa/                 Service worker template and registration
scripts/               Icon generation
public/                Manifest, offline page, generated icons
```

Curriculum content is **data, not components**. A lesson is a list of typed steps; the player knows
how to render each kind. Adding a lesson never means touching the interface, and a suite of content
tests checks the invariants a broken lesson would violate — dangling step references, missing loop
stages, unknown concept ids, or placeholder text.

---

## Local development

Requires Node 20 or newer.

```bash
npm install        # install dependencies
npm run dev        # dev server, http://localhost:5173/symbolism/
```

Quality gates, individually or all at once:

```bash
npm run format:check   # Prettier
npm run lint           # ESLint
npm run typecheck      # tsc --build
npm test               # Vitest
npm run verify         # all four, in order
```

## Build

```bash
npm run build      # generates icons, typechecks, then builds to dist/
npm run preview    # serves the production build at the Pages-style sub-path
```

The Pages sub-path is set by `VITE_BASE` and defaults to `/symbolism/`. To build for a different
repository name, a user site, or a custom domain:

```bash
VITE_BASE=/my-repo/ npm run build
VITE_BASE=/ npm run build           # user site or custom domain
```

`vite.config.ts` derives the service worker's precache list from the real bundle and stamps the
manifest, scope, and cache version with the same base — so the router, the manifest, the service
worker scope, and every asset URL cannot drift apart.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`, and can be run by hand from the Actions
tab. It:

1. installs from the lockfile with `npm ci`,
2. runs formatting, lint, types, and tests,
3. reads the Pages base path from `actions/configure-pages` and builds with it,
4. asserts the built output is correctly scoped to that sub-path and that no service-worker
   placeholder was left unsubstituted,
5. uploads the Pages artifact and deploys it with the official Pages actions.

**One-time repository setting:** Settings → Pages → Build and deployment → Source → **GitHub
Actions**.

## Installing on a phone

**iPhone and iPad.** Open the site in Safari — other iOS browsers cannot install a web app. Tap the
Share button (the square with an arrow pointing up), scroll down, tap **Add to Home Screen**, then
tap **Add**. Wisdom appears on the Home Screen with its own icon and opens full screen.

**Android.** Open the browser menu and tap **Install app** or **Add to Home screen**.

The same instructions are built into the app under Settings → Add to your Home Screen.

## Privacy and local storage

- All progress, answers, journal entries, and settings live in `localStorage` on your device, under
  the key `wisdom:state`.
- Nothing is transmitted anywhere. There is no backend, no account, no analytics, and no third-party
  script.
- Clearing your browser data, or moving to a different device or browser, loses your work unless you
  export it first (Journal → Your data → Download my data).
- The saved state carries a version number, and `src/lib/storage.ts` walks older saves forward one
  version at a time. A pre-migration copy is kept under `wisdom:state:pre-migration`, so a failed
  upgrade is recoverable. Future releases will not silently destroy saved work.
- Optional dictation uses the browser's own speech recognition. On some devices, including Safari,
  audio may be sent to the browser vendor for recognition — the app says so before the microphone
  opens, and typing never leaves your phone. Dictation is off by default.

## Future secure AI-backend architecture

`src/lib/mentor.ts` defines a `MentorAdapter` interface and ships exactly one implementation:
`authoredMentor`, which returns nothing but material a human wrote in advance for that step. It is
not a language model, and the interface never calls it one — every response carries
`provenance: 'authored'`, and the panel that displays it says plainly that nothing you typed was
read or sent anywhere.

A hosted mentor would implement the same interface against a server that holds the API key:

```
Browser (this app)  ──HTTPS──▶  Thin backend  ──▶  Model provider
   lessonId, stepId,             holds the key,       never sees the
   the learner's answer,         rate-limits,         journal, the profile,
   the rubric ids                no logging of        or any other answer
                                 answer text
```

The seam is deliberately narrow. `MentorRequest` carries ids, one answer, and the rubric — not the
journal, not the profile, not the learner's other work. Three rules are not negotiable:

1. **No provider credential may ever exist in this client.** There is no key, no endpoint, and no
   `fetch` in `mentor.ts` for exactly that reason.
2. **Journal entries are never transmitted.** They are the most private thing in the app.
3. **Deterministic, authored feedback is never described as AI.** Provenance is displayed, always.

## Limitations

This is a first version, and it is honest about what it is not:

- One substantial lesson per module rather than several — twelve lessons in total.
- Nothing here measures your character, your wisdom, or your standing before God. Progress records
  practice completed and judgements you made about your own writing. That is a much smaller claim,
  and it is the only honest one an app can make.
- Long-form answers are scored by you, not by the app. Automating that judgement would teach the
  opposite of what the rubric measures.
- Storage is per-browser. There is no sync; export and import are the migration path.
- Dictation depends on browser support and is unavailable in some browsers entirely.
- Denominational questions are deliberately left open. Where the historic church has disagreed, the
  disagreement is named rather than resolved.

## Licence and sources

Application code is released under the MIT Licence (see `LICENSE`).

Scripture quotations are from the **World English Bible**, a public-domain translation. Public-domain
literary and philosophical works are described or summarised rather than quoted from modern
copyrighted translations. Named research findings are attributed to their authors and flagged where
the underlying literature is contested.
