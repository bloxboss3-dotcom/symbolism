import { useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { BellIcon } from './components/Icons'
import { BottomNav } from './components/Shell'
import { useReminderEngine } from './features/reminders/useReminderEngine'
import { useAppearance } from './features/settings/useAppearance'
import { AppStateProvider } from './features/state/AppStateProvider'
import { useAppState } from './features/state/useAppState'
import { registerServiceWorker } from './pwa/register'
import { suggestRoutine } from './features/session/suggest'
import { HistoryPage } from './pages/HistoryPage'
import { HomePage } from './pages/HomePage'
import { NotesPage } from './pages/NotesPage'
import { OnboardingPage } from './pages/OnboardingPage'
import { ReaderPage } from './pages/ReaderPage'
import { SessionPage } from './pages/SessionPage'
import { SettingsPage } from './pages/SettingsPage'
import { SourcesPage } from './pages/SourcesPage'
import { StudyPage } from './pages/StudyPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

/** Everything except onboarding waits until the user has arrived once. */
function RequireOnboarded({ children }: { children: React.ReactNode }) {
  const { state } = useAppState()
  if (!state.preferences.onboarded) return <Navigate to="/welcome" replace />
  return <>{children}</>
}

function UpdateBanner() {
  const [apply, setApply] = useState<(() => void) | null>(null)

  useEffect(() => {
    registerServiceWorker((applyUpdate) => setApply(() => applyUpdate))
  }, [])

  if (!apply) return null

  return (
    <div
      className="banner"
      role="status"
      style={{
        position: 'fixed',
        left: 'max(var(--s-3), env(safe-area-inset-left))',
        right: 'max(var(--s-3), env(safe-area-inset-right))',
        bottom: 'calc(var(--nav-total) + var(--s-3))',
        zIndex: 40,
        background: 'var(--c-surface-raise)',
        boxShadow: 'var(--shadow-lift)',
        alignItems: 'center',
      }}
    >
      <span style={{ flex: 1 }}>A newer version is ready. Everything you saved is safe.</span>
      <button type="button" className="btn btn--sm btn--primary" onClick={() => apply()}>
        Update
      </button>
      <button
        type="button"
        className="btn btn--sm btn--quiet"
        onClick={() => setApply(null)}
        aria-label="Dismiss update notice"
      >
        Later
      </button>
    </div>
  )
}

/** The in-app reminder surface: begin, snooze, or skip — without guilt. */
function ReminderCard() {
  const { dueSlot, snooze, skipToday, markDone, snoozeMinutes } = useReminderEngine()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  if (!dueSlot || pathname.startsWith('/session') || pathname.startsWith('/welcome')) return null
  const routine = suggestRoutine(dueSlot)

  return (
    <div
      className="banner banner--attention"
      role="status"
      style={{
        position: 'fixed',
        left: 'max(var(--s-3), env(safe-area-inset-left))',
        right: 'max(var(--s-3), env(safe-area-inset-right))',
        bottom: 'calc(var(--nav-total) + var(--s-3))',
        zIndex: 39,
        background: 'var(--c-surface-raise)',
        boxShadow: 'var(--shadow-lift)',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <span aria-hidden="true" style={{ color: 'var(--c-gold)' }}>
        <BellIcon size={18} />
      </span>
      <span style={{ flex: 1, minWidth: '10rem' }}>
        {dueSlot === 'morning'
          ? 'A quiet morning space is ready.'
          : 'Time to be still before the night.'}
      </span>
      <span className="row" style={{ gap: 'var(--s-1)' }}>
        <button
          type="button"
          className="btn btn--sm btn--primary"
          onClick={() => {
            markDone()
            navigate(`/session/${routine.id}`)
          }}
        >
          Begin
        </button>
        <button type="button" className="btn btn--sm btn--quiet" onClick={snooze}>
          Snooze {snoozeMinutes}m
        </button>
        <button type="button" className="btn btn--sm btn--quiet" onClick={skipToday}>
          Not today
        </button>
      </span>
    </div>
  )
}

function Chrome() {
  const { state, persistenceBlocked } = useAppState()
  useAppearance(state.preferences)

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      {persistenceBlocked ? (
        <div className="banner" role="alert" style={{ margin: 'var(--s-3)' }}>
          This device is not letting the app save to local storage, so notes and history will be
          lost when you close the tab. Private browsing is the usual cause.
        </div>
      ) : null}
      <Routes>
        <Route path="/welcome" element={<OnboardingPage />} />
        <Route
          path="/"
          element={
            <RequireOnboarded>
              <HomePage />
            </RequireOnboarded>
          }
        />
        <Route
          path="/session/:routineId"
          element={
            <RequireOnboarded>
              <SessionPage />
            </RequireOnboarded>
          }
        />
        <Route
          path="/study"
          element={
            <RequireOnboarded>
              <StudyPage />
            </RequireOnboarded>
          }
        />
        <Route
          path="/read/:passageId"
          element={
            <RequireOnboarded>
              <ReaderPage />
            </RequireOnboarded>
          }
        />
        <Route
          path="/notes"
          element={
            <RequireOnboarded>
              <NotesPage />
            </RequireOnboarded>
          }
        />
        <Route
          path="/history"
          element={
            <RequireOnboarded>
              <HistoryPage />
            </RequireOnboarded>
          }
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
      <ReminderCard />
      <UpdateBanner />
    </div>
  )
}

export default function App() {
  return (
    <AppStateProvider>
      <HashRouter>
        <Chrome />
      </HashRouter>
    </AppStateProvider>
  )
}
