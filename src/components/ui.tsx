import { useEffect, useRef, type ReactNode } from 'react'
import { IconClose } from './Icons'

/** A gold hairline with a rotated square at its centre. */
export function Rule({ className = '' }: { className?: string }) {
  return (
    <div className={`rule ${className}`.trim()} role="presentation">
      <span className="rule__mark" />
    </div>
  )
}

export function Bar({ value, label }: { value: number; label?: string }) {
  const pct = Math.max(0, Math.min(1, value)) * 100
  return (
    <div
      className="bar"
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className="bar__fill" style={{ width: `${pct}%` }} />
    </div>
  )
}

export function Ring({
  value,
  size = 44,
  stroke = 3,
  children,
}: {
  value: number
  size?: number
  stroke?: number
  children?: ReactNode
}) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - Math.max(0, Math.min(1, value)))

  return (
    <span style={{ position: 'relative', display: 'inline-grid', placeItems: 'center' }}>
      <svg className="ring" width={size} height={size} aria-hidden="true">
        <circle
          className="ring__track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
        />
        <circle
          className="ring__fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {children ? <span style={{ position: 'absolute' }}>{children}</span> : null}
    </span>
  )
}

export function Empty({
  title,
  body,
  action,
}: {
  title: string
  body: string
  action?: ReactNode
}) {
  return (
    <div className="empty">
      <Rule />
      <p className="title" style={{ color: 'var(--c-text-soft)' }}>
        {title}
      </p>
      <p className="small reading">{body}</p>
      {action}
    </div>
  )
}

/**
 * Bottom sheet. Traps nothing elaborate — it moves focus in, restores it on
 * close, and closes on Escape, which is what a single-purpose panel needs.
 */
export function Sheet({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}) {
  const panel = useRef<HTMLDivElement>(null)
  const restoreTo = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    restoreTo.current = document.activeElement as HTMLElement | null
    panel.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      restoreTo.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="sheet"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="sheet__panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        ref={panel}
      >
        <div className="row row--between" style={{ marginBottom: 'var(--s-4)' }}>
          <h2 className="title">{title}</h2>
          <button type="button" className="iconbtn" onClick={onClose} aria-label="Close">
            <IconClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export function Chips({ items }: { items: { label: string; tone?: string }[] }) {
  return (
    <div className="row row--wrap" style={{ gap: 'var(--s-2)' }}>
      {items.map((item, index) => (
        <span key={index} className={`chip ${item.tone ? `chip--${item.tone}` : ''}`.trim()}>
          {item.label}
        </span>
      ))}
    </div>
  )
}
