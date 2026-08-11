# Still Before Him

_A Christian morning & evening prayer companion. Be still, and know that I am God. — Psalm 46:10_

Still Before Him is a responsive web app and installable PWA for a daily rhythm of
prayer: **arrive → behold → guided prayer → your own prayer → silence → Scripture →
a simple stretch → sending**, in the morning; and a compline-shaped evening that
reviews the day with gratitude and honesty and entrusts the night to God. Around
the routines sit a Scripture reader with sourced commentary, a seven-day reading
plan, private notes and bookmarks, a gentle history, and careful settings.

The design conviction: **technology should create space for attention to God, then
quietly get out of the way.** No streaks, no scores, no analytics, no accounts —
everything you do stays on your device.

## Quick start

```bash
npm ci            # install (Node 22+)
npm run dev       # dev server at http://localhost:5173/symbolism/
```

Production build and preview:

```bash
npm run build     # icons → content validation → typecheck → vite build (dist/)
npm run preview   # serve the production build
```

## Scripts

| Script                            | What it does                                              |
| --------------------------------- | --------------------------------------------------------- |
| `npm run dev`                     | Vite dev server                                           |
| `npm run build`                   | Full production build (fails on invalid content)          |
| `npm run preview`                 | Serve `dist/`                                             |
| `npm test`                        | Vitest unit/component suites                              |
| `npm run validate:content`        | Content integrity gate only                               |
| `npm run e2e`                     | Playwright critical journey (needs `npm run build` first) |
| `npm run lint` / `lint:fix`       | ESLint                                                    |
| `npm run format` / `format:check` | Prettier                                                  |
| `npm run typecheck`               | Strict TypeScript                                         |
| `npm run icons`                   | Regenerate PNG icons from code                            |
| `npm run verify`                  | format:check + lint + typecheck + test + build            |

In an offline/sandboxed environment, point Playwright at a pre-installed
Chromium: `PLAYWRIGHT_CHROMIUM_PATH=/path/to/chrome npm run e2e`.

## Architecture

- **Vite 7 + React 19 + strict TypeScript**, hash-routed static PWA. Why not
  Next.js, Tailwind, etc. is recorded in [docs/DECISIONS.md](docs/DECISIONS.md).
- **Content is typed data** (`src/data/`), validated by Zod schemas
  (`src/schemas/`) plus cross-cutting integrity rules
  (`src/data/validate.test.ts`) that run inside `npm run build` and CI. An
  unverified quotation or uncited commentary entry fails the build.
- **Scripture** ships as public-domain World English Bible text behind an async
  `ScriptureProvider` interface (`src/features/scripture/provider.ts`) so a
  licensed API can be added without touching UI. Sources and retrieval dates:
  [CONTENT_SOURCES.md](CONTENT_SOURCES.md).
- **The session player is a pure state machine**
  (`src/features/session/machine.ts`): typed events, timestamp-anchored timers
  (correct under tab throttling and reloads), serialized to localStorage after
  every transition. The React layer is a shell.
- **Audio is synthesized** (`src/lib/audio.ts`): rain/night/tone ambience and a
  bell chime generated with the Web Audio API — no recordings, no licenses,
  gesture-gated per autoplay policy, per-channel volume, cross-fades.
- **Persistence** is one versioned localStorage document with forward-only
  migrations and per-field corruption recovery (`src/lib/storage.ts`).
- **Service worker** (`src/pwa/sw-template.js`) is ~100 readable lines: precache
  manifest derived from the real bundle, content-hashed cache name, network-first
  navigations, update banner instead of silent reloads. Private notes are never
  cached by the SW — they live in localStorage, which the SW cannot touch.

```
src/
  schemas/        Zod schemas + inferred types (content, scripture, user)
  data/           seed content: passages, prayers, routines, commentary,
                  quotes, plans, stretches + registry + validation suite
  features/       session player (machine/plan/controller/views), state,
                  scripture provider, reminders, appearance
  pages/          Home, Session, Study, Reader, Notes, History, Settings,
                  Sources, Onboarding
  lib/            storage, audio, notifications, wake lock, time, ids
  styles/         design tokens (dawn/night palettes), base, components, player
  pwa/            service worker template + registration
e2e/              Playwright critical journey (375px)
scripts/          code-drawn icon generator
docs/             DECISIONS, CONTENT_EDITORIAL_GUIDE
```

## Content integrity

Treating accuracy as a product requirement means the repo enforces it:

- Scripture text carries per-passage retrieval records (source, URL, date).
- Commentary entries require citations, separate fact from interpretation from
  application, and must carry perspective notes wherever `contested` is true.
  All seed entries are labeled **Demo** in the UI pending human editorial
  review ([docs/CONTENT_EDITORIAL_GUIDE.md](docs/CONTENT_EDITORIAL_GUIDE.md)).
- A quotation renders only if its exact wording was verified against a named
  archive on a recorded date; everything else is excluded by construction and
  the build fails if a publishable quote lacks verification metadata.
- The in-app **Sources** screen exposes all of this to users.

## Privacy

Prayer is not data. The app records no audio, analyzes nothing, and sends
nothing anywhere. Notes, bookmarks, history, and settings live in
`localStorage` under `stillbeforehim:*`; Settings → Privacy offers
"Delete my local data" with confirmation. There are no analytics of any kind.

## Deployment

Pushes to `main` deploy to GitHub Pages via
`.github/workflows/deploy.yml` (quality checks → build with the Pages-derived
base path → deploy). The base path is derived from the repository name, so
renaming the repo cannot break the build. `.github/workflows/ci.yml` runs
format/lint/types/tests/content/build plus the Playwright journey on every
branch push and PR.

## Browser support and limitations

- Evergreen browsers; the PWA installs on Android/Chrome and iOS/Safari.
- **Reminders:** the Notification API fires while the app is open (or installed
  and running). A fully closed browser cannot ring without push infrastructure
  or a native wrapper — both on the [roadmap](ROADMAP.md). Permission is
  requested only after the user explicitly enables reminders; denial degrades
  to in-app reminders with guidance.
- **Wake lock:** used where supported; elsewhere the screen may dim during
  silence (timers stay correct — they are timestamp-based).
- **iOS specifics:** background tabs throttle timers (recovered on return by
  timestamp math), and localStorage can be evicted for sites unused for long
  periods — an installed PWA is more durable.
- Works fully with audio off and with reduced motion (OS-level or in-app).

## Screenshot checklist

For a release/readme refresh, capture at 375×812 (light + dark):

1. Onboarding step 1 (brand + Psalm 46:10)
2. Home with both doorways
3. Session start screen (length choice)
4. Guided prayer segment (morning palette)
5. Silence with breathing circle (evening palette)
6. Scripture reader with commentary + perspective note
7. History calendar
8. Settings → Reminders (permission explanation)
9. Sources screen (quote verification metadata)

## Documents

- [docs/DECISIONS.md](docs/DECISIONS.md) — architecture decisions
- [docs/CONTENT_EDITORIAL_GUIDE.md](docs/CONTENT_EDITORIAL_GUIDE.md) — review, sourcing, verification
- [CONTENT_SOURCES.md](CONTENT_SOURCES.md) — the content ledger
- [ROADMAP.md](ROADMAP.md) — MVP / next / later

## A word about what this app is not

Still Before Him is a devotional aid. It is not a substitute for Scripture, the
local church, pastoral counsel, professional care, or the work of the Holy
Spirit — and it is written to keep reminding you of that.
