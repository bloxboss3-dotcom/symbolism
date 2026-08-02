/** Local-day helpers. Streaks follow the learner's own calendar, not UTC. */

export function isoDay(date: Date = new Date()): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function parseIsoDay(day: string): Date {
  const [y, m, d] = day.split('-').map(Number)
  return new Date(y, (m ?? 1) - 1, d ?? 1)
}

export function addDays(day: string, count: number): string {
  const date = parseIsoDay(day)
  date.setDate(date.getDate() + count)
  return isoDay(date)
}

/** Whole days from `from` to `to`; negative when `to` is earlier. */
export function daysBetween(from: string, to: string): number {
  const ms = parseIsoDay(to).getTime() - parseIsoDay(from).getTime()
  return Math.round(ms / 86_400_000)
}

export function formatDay(day: string): string {
  return parseIsoDay(day).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatDateTime(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function relativeDay(day: string, today = isoDay()): string {
  const delta = daysBetween(day, today)
  if (delta === 0) return 'Today'
  if (delta === 1) return 'Yesterday'
  if (delta > 1 && delta < 7) return `${delta} days ago`
  if (delta === -1) return 'Tomorrow'
  if (delta < -1) return `In ${Math.abs(delta)} days`
  return formatDay(day)
}
