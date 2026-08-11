/**
 * A small, single-weight line icon set drawn for this app. All icons are
 * decorative (`aria-hidden`) — accompanying text carries the meaning.
 */
type IconProps = { size?: number }

function Svg({ children, size = 22 }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export function SunriseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 18h16" />
      <path d="M7 15a5 5 0 0 1 10 0" />
      <path d="M12 5v3M5.6 8.6l1.8 1.8M18.4 8.6l-1.8 1.8" />
    </Svg>
  )
}

export function MoonIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </Svg>
  )
}

export function BookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 6.5C10.4 5 8.2 4.5 5.5 4.5c-.8 0-1.5.1-2 .2V18c.5-.1 1.2-.2 2-.2 2.7 0 4.9.6 6.5 2 1.6-1.4 3.8-2 6.5-2 .8 0 1.5.1 2 .2V4.7c-.5-.1-1.2-.2-2-.2-2.7 0-4.9.5-6.5 2Z" />
      <path d="M12 6.5V20" />
    </Svg>
  )
}

export function FeatherIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 4c-6 0-11 4-12.5 10L5 21" />
      <path d="M20 4c1 5-2 11-9 11H7.5" />
      <path d="M20 4c-3 1.5-7 5-9 8" />
    </Svg>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="5.5" width="16" height="14" rx="2.5" />
      <path d="M4 10h16M8.5 3.5v3M15.5 3.5v3" />
    </Svg>
  )
}

export function GearIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" />
    </Svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 5.5v13l10-6.5Z" />
    </Svg>
  )
}

export function PauseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8.5 5.5v13M15.5 5.5v13" />
    </Svg>
  )
}

export function BackIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m14.5 6-6 6 6 6" />
    </Svg>
  )
}

export function ForwardIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9.5 6 6 6-6 6" />
    </Svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Svg>
  )
}

export function BellIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 16v-5.5a6 6 0 0 1 12 0V16l1.5 2.5h-15Z" />
      <path d="M10 21a2.2 2.2 0 0 0 4 0" />
    </Svg>
  )
}

export function BookmarkIcon({ filled, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width={props.size ?? 22}
      height={props.size ?? 22}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 4.5h10a1 1 0 0 1 1 1V20l-6-3.5L6 20V5.5a1 1 0 0 1 1-1Z" />
    </svg>
  )
}

export function ScrollIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 4.5h11a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1" />
      <path d="M17 6.5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h10" />
      <path d="M8 9.5h5M8 13h5" />
    </Svg>
  )
}
