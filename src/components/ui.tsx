/**
 * Small accessible primitives shared across screens, built on native
 * elements: a labelled switch row, a segmented choice, and a confirm dialog.
 */
import { useEffect, useRef } from 'react'

export function SwitchRow({
  title,
  sub,
  checked,
  onChange,
}: {
  title: string
  sub?: string
  checked: boolean
  onChange: (next: boolean) => void
}) {
  return (
    <button
      type="button"
      className="switch-row"
      role="switch"
      aria-checked={checked}
      aria-pressed={checked}
      onClick={() => onChange(!checked)}
    >
      <span>
        <span className="switch-title">{title}</span>
        {sub ? <span className="switch-sub">{sub}</span> : null}
      </span>
      <span className="switch" aria-hidden="true" />
    </button>
  )
}

export function Segmented<T extends string | number>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: ReadonlyArray<{ value: T; label: string }>
  value: T
  onChange: (next: T) => void
}) {
  return (
    <div className="segmented" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={String(option.value)}
          type="button"
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export function ConfirmDialog({
  open,
  title,
  body,
  confirmLabel,
  danger,
  onConfirm,
  onCancel,
}: {
  open: boolean
  title: string
  body: string
  confirmLabel: string
  danger?: boolean
  onConfirm: () => void
  onCancel: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="confirm-title"
      onClose={onCancel}
      onCancel={onCancel}
    >
      <div className="stack">
        <h2 id="confirm-title">{title}</h2>
        <p style={{ color: 'var(--c-ink-soft)' }}>{body}</p>
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn--quiet" onClick={onCancel}>
            Cancel
          </button>
          <button
            type="button"
            className={danger ? 'btn btn--danger' : 'btn btn--primary'}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </dialog>
  )
}
