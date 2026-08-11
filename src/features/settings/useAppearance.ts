import { useEffect } from 'react'
import type { UserPreferences } from '../../schemas'

const DARK_BG = '#10141f'
const LIGHT_BG = '#f6efdf'

/**
 * Pushes appearance preferences onto the document element where the CSS can
 * see them. Theme and motion are attributes so the stylesheet expresses
 * "system unless overridden" without JavaScript re-running.
 */
export function useAppearance(prefs: UserPreferences): void {
  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = prefs.theme
    root.dataset.motion = prefs.motion === 'reduced' ? 'reduced' : 'system'
    root.style.setProperty('--scale', String(prefs.textScale))
  }, [prefs.theme, prefs.motion, prefs.textScale])

  useEffect(() => {
    // Keep the mobile status bar in step with the resolved theme.
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]:not([media])')
    const resolved =
      prefs.theme === 'dark'
        ? DARK_BG
        : prefs.theme === 'light'
          ? LIGHT_BG
          : window.matchMedia?.('(prefers-color-scheme: light)').matches
            ? LIGHT_BG
            : DARK_BG

    if (meta) {
      meta.content = resolved
    } else {
      const created = document.createElement('meta')
      created.name = 'theme-color'
      created.content = resolved
      document.head.appendChild(created)
    }
  }, [prefs.theme])
}
