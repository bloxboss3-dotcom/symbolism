/**
 * Drawn rather than imported: a small stroke-based set keeps the bundle free of
 * an icon dependency and lets every glyph share the same weight as the rules
 * and ornaments elsewhere in the interface.
 */
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Icon({ size = 22, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const IconHome = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 3.5 9.5V20a1 1 0 0 0 1 1h5v-6h5v6h5a1 1 0 0 0 1-1V9.5Z" />
  </Icon>
)

export const IconLearn = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H5.5A1.5 1.5 0 0 1 4 15.5Z" />
    <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h4.5a1.5 1.5 0 0 0 1.5-1.5Z" />
  </Icon>
)

export const IconCase = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    <path d="M3 12h18" />
  </Icon>
)

export const IconJournal = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M9 3v18" />
    <path d="M12.5 8h3.5M12.5 12h3.5" />
  </Icon>
)

export const IconLibrary = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 20V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v15Z" />
    <path d="M9 20V6a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v14Z" />
    <path d="m13.8 20 3-13.4a1 1 0 0 1 1.2-.8l1.4.3a1 1 0 0 1 .8 1.2L17.6 20Z" />
  </Icon>
)

export const IconChart = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 20h16" />
    <path d="M7 20v-6M12 20V6M17 20v-9" />
  </Icon>
)

export const IconGear = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 14.5a1.7 1.7 0 0 0 .35 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.35 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.11a1.7 1.7 0 0 0-1.1-1.56 1.7 1.7 0 0 0-1.87.35l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .35-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.11a1.7 1.7 0 0 0 1.56-1.1 1.7 1.7 0 0 0-.35-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.35H9a1.7 1.7 0 0 0 1-1.56V3a2 2 0 1 1 4 0v.11a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.35l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.35 1.87V9a1.7 1.7 0 0 0 1.56 1H21a2 2 0 1 1 0 4h-.11a1.7 1.7 0 0 0-1.49 1.5Z" />
  </Icon>
)

export const IconBack = (p: IconProps) => (
  <Icon {...p}>
    <path d="M15 5 8 12l7 7" />
  </Icon>
)

export const IconArrow = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h13M13 6l6 6-6 6" />
  </Icon>
)

export const IconCheck = (p: IconProps) => (
  <Icon {...p} strokeWidth={2.4}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Icon>
)

export const IconClose = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
)

export const IconSearch = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </Icon>
)

export const IconUp = (p: IconProps) => (
  <Icon {...p} size={p.size ?? 16}>
    <path d="m6 14 6-6 6 6" />
  </Icon>
)

export const IconDown = (p: IconProps) => (
  <Icon {...p} size={p.size ?? 16}>
    <path d="m6 10 6 6 6-6" />
  </Icon>
)

export const IconMic = (p: IconProps) => (
  <Icon {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
  </Icon>
)

export const IconLock = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4.5" y="10" width="15" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </Icon>
)

export const IconFlame = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3s5 4.2 5 8.5a5 5 0 0 1-10 0C7 9 9 7.5 9 7.5s.4 2 1.6 2C11.8 9.5 12 6 12 3Z" />
  </Icon>
)

/** The compass-rose mark used as the app's own emblem. */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <g transform="translate(32 32)">
        <circle r="27" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M0-25 5.5-5.5 25 0 5.5 5.5 0 25-5.5 5.5-25 0-5.5-5.5Z" fill="currentColor" />
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      </g>
    </svg>
  )
}
