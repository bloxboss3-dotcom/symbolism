# Roadmap

## MVP — shipped in this repository

- Morning and evening guided routines (two of each), built as an explicit
  state machine with pause/resume/back/skip, timestamp-based timers,
  mid-session reload recovery, and adjustable length (5–30 minutes).
- Original prayers with editorial allusion notes; examen-style evening review.
- Scripture reader with the public-domain World English Bible behind a typed
  `ScriptureProvider` interface; seven-day "Behold" reading plan; five cited
  commentary entries with perspective notes; verified public-domain
  quotations; bookmarks and private local notes.
- Breathing guide (adjustable, no breath-holding, static alternative),
  synthesized ambience and chime with per-channel volume, screen wake lock.
- In-app + Notification API reminders with explicit-intent permission flow,
  snooze/skip/pause, and honest platform-limitation messaging.
- Voice guidance via the device's speech engine (Web Speech API): prayers,
  Scripture, and prompts read slowly with configurable voice, pace, and
  volume; silence stays silent. Local, private, offline.
- Gentle history calendar (no streaks or guilt states), settings (length,
  overrides, audio, breathing, appearance, text size, translation/content-pack
  placeholders, privacy), delete-my-data.
- PWA: installable, offline app shell, hand-written service worker with a
  content-hashed precache and an update banner.
- Content integrity gate at build time; Vitest + Testing Library suites;
  Playwright critical journey at 375px; GitHub Actions CI + Pages deploy;
  Dependabot; content-correction and source-review issue templates.

## Next

- **Human editorial review workflow** — promote seed commentary from `demo`
  to `reviewed`; recruit reviewers; record reviews in PRs (the schema and
  labels already exist).
- **More content, same bar** — a second reading plan, more routines
  (liturgical seasons), more verified quotations; broaden voices further.
- **Licensed Bible providers** — implement `ScriptureProvider` against a
  licensed API (e.g. ESV or NIV) behind user configuration; respect caching
  and attribution terms.
- **Self-hosted OFL typefaces** — a deliberate serif (e.g. Fraunces or
  EB Garamond) with documented licensing, subset and precached.
- **Session polish** — optional per-segment time hints, richer ambient
  palette, gentle haptics on supported devices.
- **Export/import** — encrypted local backup file for notes and history.

## Later

- **Reliable reminders** — server-backed Web Push (with a privacy-preserving,
  minimal-data design) and/or native wrappers (Capacitor) for dependable
  background alarms on iOS/Android.
- **Accounts and encrypted sync** — opt-in, end-to-end encrypted sync of
  notes/history via the storage seam (`src/lib/storage.ts`) and a Supabase or
  comparable backend; local-first remains the default.
- **Premium narration packs** — professionally recorded (or studio-grade
  generated, rights-documented) audio replacing the device speech engine for
  users who want it; downloadable packs for offline use, layered onto the
  existing narration settings.
- **Tradition content packs** — reviewed content packs (Anglican, Reformed,
  Catholic, Orthodox, Wesleyan, …) selectable in Settings; the
  `contentPack` preference and schema fields already anticipate this.
- **Church partnerships** — congregation-curated plans and prayer content
  under the same editorial standards.
- **Localization** — the content schema would gain locale variants; prayers
  are written, not translated mechanically.
