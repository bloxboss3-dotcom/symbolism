# Architecture decisions

_Still Before Him — a Christian morning & evening prayer companion._

This file records the load-bearing decisions made at the start of the rebuild and the
reasoning behind them. Update it when a decision changes; do not silently drift.

## 1. Keep the Vite + React static PWA stack (not Next.js)

The build brief defaults to Next.js **"unless the repository already dictates another
sound stack."** This repository does: a Vite 7 + React 19 + strict TypeScript PWA with a
hand-written, auditable service worker, code-generated icons, ESLint/Prettier/Vitest
tooling, and a working GitHub Pages deploy pipeline.

That stack is not merely acceptable for this product — it is the better fit:

- The MVP is deliberately **local-first**: prayers, notes, bookmarks, and history never
  leave the device. There is no server-rendered data, no API routes, and no secret to
  hold, so Next.js' server surface would be dead weight and a static export would
  re-create what Vite already does directly.
- The site deploys as a **GitHub Pages project site** under `/<repo>/`. The existing
  build derives the base path from the Pages configuration, guards it in CI, and scopes
  the service worker to it. This is exactly the part static-exported Next.js makes
  fiddly.
- The existing service worker is ~100 lines of readable code with a content-hashed
  precache manifest. For an app whose offline behavior and update flow must be
  _inspectable_ (acceptance criterion 11), that beats a generated Workbox bundle.

Consequence: routing uses `react-router-dom` (hash router, so deep links survive static
hosting without a rewrite layer), and cloud features are designed behind interfaces
rather than assumed.

## 2. Hand-rolled design-token CSS (not Tailwind)

The visual identity is original, two-theme (dawn / night), typography-led, and heavy on
`color-mix`, gradients, and slow keyframe motion. A token sheet (`src/styles/tokens.css`)
with semantic custom properties plus small hand-written component styles gives:

- one place where the morning and evening palettes live (brand swap = token swap);
- readable diffs when the design is tuned;
- no utility-class noise inside the session player, which is mostly custom anyway.

Tailwind would add a compiler and a second styling idiom without removing any of the
custom CSS this design needs. Accessible primitives (buttons, dialogs, sliders) are
small local components built on native elements.

## 3. Content is typed data, validated at build time

All user-facing content — routines, prayers, Scripture, commentary, quotations, reading
plans, stretches — lives as **TypeScript data modules** under `src/data/`, typed by
**Zod schemas** in `src/schemas/`. `npm run validate:content` (also part of `npm run
build` and CI) executes the schemas plus cross-cutting integrity rules:

- a quotation that is not `verified` (with source URL + verification record) **fails the
  build** if it is marked publishable, and non-publishable quotes are excluded from the
  user-facing registry by construction;
- a commentary entry without at least one citation fails the build;
- contested-interpretation sections must carry a perspective note;
- every routine segment must reference content that exists (no dangling ids).

The validator is a plain Vitest suite (`src/data/validate.test.ts`) so it needs no extra
runner, fails CI loudly, and doubles as living documentation of the integrity rules.

## 4. Scripture: World English Bible behind a `ScriptureProvider` interface

The WEB is public domain (no copyright, no royalty), which makes it the only responsible
choice for a demo that commits Scripture text to a public repository. Passage text was
retrieved from ebible.org / the WEB distribution and is recorded in
`CONTENT_SOURCES.md` with retrieval dates. All reads go through a typed, **async**
`ScriptureProvider` interface so a licensed API (ESV, NIV, etc.) can be added later
without touching UI code; the MVP ships a `LocalWebProvider` backed by the bundled data.

## 5. Session player is an explicit state machine

The guided routine is a pure reducer (`src/features/session/machine.ts`): a typed state
(`segmentIndex`, `status`, timestamp anchors) advanced by typed events (`START`,
`PAUSE`, `RESUME`, `SKIP`, `BACK`, `RESTART`, `END`, `TICK`). Rules that matter:

- **Timers are timestamp-anchored, not interval-counted.** The state stores
  `segmentStartedAt` and `pausedAccumulatedMs`; elapsed time is derived from
  `Date.now()` on each tick, so a backgrounded tab, a throttled interval, or a reload
  computes the same answer.
- The machine state is serialized to `localStorage` on every transition; reloading
  mid-session offers to continue where the user left off.
- The reducer is fully unit-tested with injected clocks; the UI is a thin shell over it.

## 6. Audio is synthesized, not sampled

Ambience (rain, night air, a quiet pad) and the chime are generated in the browser with
the Web Audio API — no bundled recordings, so there is nothing to license and nothing
heavy to precache. Each channel (ambience / chime / future narration) has its own gain
node and persisted volume; audio starts only after a user gesture (autoplay policy) and
cross-fades between segments. A `NarrationProvider` interface exists but has no MVP
implementation; narration would ship as properly licensed local assets later.

## 7. Reminders: honest about platform limits

Reminder times are stored locally and scheduled in-page (timestamp comparison on a
coarse interval + on `visibilitychange`). The Notification API is used **only after the
user explicitly enables reminders** — never on first load. A visible note explains the
platform truth: with no push server, a closed browser cannot ring; dependable background
alarms need push infrastructure or a native wrapper (see ROADMAP). Denied permission
degrades to in-app reminders with a calm, non-blocking explanation.

## 8. Fonts: curated system stacks, no bundled binaries

Scripture and prayer set in a system serif stack (Iowan Old Style / Palatino / Georgia);
controls in the platform sans stack. This keeps the repo free of font binaries, the
precache small, and typography excellent on every platform. A self-hosted OFL face
(e.g. Fraunces) is a later, deliberate addition — noted in ROADMAP.

## 9. Persistence and privacy

One versioned `localStorage` document (`stillbeforehim:state`) with forward-only
migrations and a pre-migration backup key, following the pattern already proven in this
repository. No analytics, no network calls with user data, no microphone access. The
previous Wisdom app's storage key is left untouched; this is a different product and
must not eat another app's data. "Delete my local data" lives in Settings with a
type-to-confirm step.

## 10. Testing

- Vitest + Testing Library for the reducer, storage, schemas/content, and key
  components.
- One critical Playwright journey at 375 px: first run → onboarding → configure →
  complete a morning routine → history shows the completion.
- CI (`.github/workflows/ci.yml`) runs format check, lint, typecheck, unit tests,
  content validation, production build, and the Playwright flow on every push and PR.
  The Pages deploy workflow stays separate and deploys `main` only.

## 11. Naming

The working title **Still Before Him** is centralized in `src/brand.ts` and CSS tokens;
renaming the product is a two-file change plus icon regeneration.
