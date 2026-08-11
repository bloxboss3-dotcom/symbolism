import { NavLink, useLocation } from 'react-router-dom'
import { BookIcon, CalendarIcon, FeatherIcon, GearIcon, SunriseIcon } from './Icons'

const TABS = [
  { to: '/', label: 'Today', icon: SunriseIcon, end: true },
  { to: '/study', label: 'Scripture', icon: BookIcon, end: false },
  { to: '/notes', label: 'Notes', icon: FeatherIcon, end: false },
  { to: '/history', label: 'History', icon: CalendarIcon, end: false },
  { to: '/settings', label: 'Settings', icon: GearIcon, end: false },
] as const

export function BottomNav() {
  const { pathname } = useLocation()
  // The player and onboarding are rooms of their own — no chrome.
  if (pathname.startsWith('/session') || pathname.startsWith('/welcome')) return null

  return (
    <nav className="bottom-nav" aria-label="Main">
      {TABS.map(({ to, label, icon: Icon, end }) => (
        <NavLink key={to} to={to} end={end}>
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
