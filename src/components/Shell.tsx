import { NavLink, useLocation } from 'react-router-dom'
import { IconCase, IconHome, IconJournal, IconLearn, IconLibrary } from './Icons'

const TABS = [
  { to: '/', label: 'Home', Icon: IconHome, end: true },
  { to: '/learn', label: 'Learn', Icon: IconLearn, end: false },
  { to: '/cases', label: 'Cases', Icon: IconCase, end: false },
  { to: '/library', label: 'Library', Icon: IconLibrary, end: false },
  { to: '/journal', label: 'Journal', Icon: IconJournal, end: false },
]

/** Hidden while a lesson is being played, so the player owns the whole screen. */
const IMMERSIVE = [/^\/learn\/[^/]+/, /^\/cases\/[^/]+/, /^\/trials\/[^/]+/, /^\/welcome/]

export function BottomNav() {
  const { pathname } = useLocation()
  if (IMMERSIVE.some((pattern) => pattern.test(pathname))) return null

  return (
    <nav className="nav" aria-label="Primary">
      {TABS.map(({ to, label, Icon, end }) => (
        <NavLink key={to} to={to} end={end} className="nav__item">
          <Icon className="nav__icon" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
