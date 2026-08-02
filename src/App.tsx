import { useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { BottomNav } from './components/Shell'
import { WisdomProvider } from './features/progress/WisdomProvider'
import { useWisdom } from './features/progress/useWisdom'
import { useAppearance } from './features/settings/useAppearance'
import { registerServiceWorker } from './pwa/register'
import { CaseLabPage } from './pages/CaseLabPage'
import { HomePage } from './pages/HomePage'
import { JournalPage } from './pages/JournalPage'
import { LearnPage } from './pages/LearnPage'
import { LibraryPage } from './pages/LibraryPage'
import { OnboardingPage } from './pages/OnboardingPage'
import { PlayerPage } from './pages/PlayerPage'
import { ProgressPage } from './pages/ProgressPage'
import { SettingsPage } from './pages/SettingsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

/** Everything except onboarding requires a profile; this sends new arrivals there. */
function RequireProfile({ children }: { children: React.ReactNode }) {
  const { state } = useWisdom()
  if (!state.profile) return <Navigate to="/welcome" replace />
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
        background: 'var(--c-surface)',
        boxShadow: 'var(--shadow-lift)',
        alignItems: 'center',
      }}
    >
      <span style={{ flex: 1 }}>A newer version of Wisdom is ready. Your work is saved.</span>
      <button type="button" className="btn btn--sm btn--primary" onClick={() => apply()}>
        Update
      </button>
      <button
        type="button"
        className="btn btn--sm btn--plain"
        onClick={() => setApply(null)}
        aria-label="Dismiss update notice"
      >
        Later
      </button>
    </div>
  )
}

function Chrome() {
  const { state, persistenceBlocked } = useWisdom()
  useAppearance(state.settings)

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      {persistenceBlocked ? (
        <div className="banner" role="alert" style={{ margin: 'var(--s-3)' }}>
          This device is not letting Wisdom save to local storage, so progress will be lost when you
          close the tab. Private browsing is the usual cause.
        </div>
      ) : null}
      <Routes>
        <Route path="/welcome" element={<OnboardingPage />} />
        <Route
          path="/"
          element={
            <RequireProfile>
              <HomePage />
            </RequireProfile>
          }
        />
        <Route
          path="/learn"
          element={
            <RequireProfile>
              <LearnPage />
            </RequireProfile>
          }
        />
        <Route
          path="/learn/:unitId"
          element={
            <RequireProfile>
              <PlayerPage track="lessons" />
            </RequireProfile>
          }
        />
        <Route
          path="/cases"
          element={
            <RequireProfile>
              <CaseLabPage />
            </RequireProfile>
          }
        />
        <Route
          path="/cases/:unitId"
          element={
            <RequireProfile>
              <PlayerPage track="cases" />
            </RequireProfile>
          }
        />
        <Route
          path="/trials/:unitId"
          element={
            <RequireProfile>
              <PlayerPage track="trials" />
            </RequireProfile>
          }
        />
        <Route
          path="/journal"
          element={
            <RequireProfile>
              <JournalPage />
            </RequireProfile>
          }
        />
        <Route path="/library" element={<LibraryPage />} />
        <Route
          path="/progress"
          element={
            <RequireProfile>
              <ProgressPage />
            </RequireProfile>
          }
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
      <UpdateBanner />
    </div>
  )
}

export default function App() {
  return (
    <WisdomProvider>
      <HashRouter>
        <Chrome />
      </HashRouter>
    </WisdomProvider>
  )
}
