import { useEffect } from 'react'
import type { Settings } from '../../types/progress'

/**
 * Pushes appearance settings onto the document element, where the CSS can see
 * them. Theme and motion are attributes rather than classes so the stylesheet
 * can express "system unless overridden" without JavaScript re-running.
 */
export function useAppearance(settings: Settings): void {
  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = settings.theme
    root.dataset.motion = settings.motion === 'reduced' ? 'reduced' : 'system'
    root.style.setProperty('--scale', String(settings.textScale))
  }, [settings.theme, settings.motion, settings.textScale])

  useEffect(() => {
    // Keep the iOS status bar in step with the resolved theme.
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]:not([media])')
    const dark = '#14100c'
    const light = '#f6efe1'
    const resolved =
      settings.theme === 'dark'
        ? dark
        : settings.theme === 'light'
          ? light
          : window.matchMedia?.('(prefers-color-scheme: light)').matches
            ? light
            : dark

    if (meta) {
      meta.content = resolved
    } else {
      const created = document.createElement('meta')
      created.name = 'theme-color'
      created.content = resolved
      document.head.appendChild(created)
    }
  }, [settings.theme])
}
