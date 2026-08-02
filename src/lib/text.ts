/**
 * A deliberately tiny inline markup subset for curriculum prose: `**strong**`
 * and `*emphasis*`. Parsed into tokens and rendered as React elements, so no
 * lesson can inject markup into the page.
 */
export type InlineToken =
  | { type: 'text'; value: string }
  | { type: 'em'; value: string }
  | { type: 'strong'; value: string }

const PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*)/g

export function parseInline(input: string): InlineToken[] {
  const tokens: InlineToken[] = []
  let cursor = 0

  for (const match of input.matchAll(PATTERN)) {
    const index = match.index ?? 0
    if (index > cursor) tokens.push({ type: 'text', value: input.slice(cursor, index) })

    const raw = match[0]
    if (raw.startsWith('**')) tokens.push({ type: 'strong', value: raw.slice(2, -2) })
    else tokens.push({ type: 'em', value: raw.slice(1, -1) })

    cursor = index + raw.length
  }

  if (cursor < input.length) tokens.push({ type: 'text', value: input.slice(cursor) })
  return tokens
}

export function plainText(input: string): string {
  return input.replace(/\*\*/g, '').replace(/\*/g, '')
}

export function truncate(input: string, limit: number): string {
  const text = plainText(input).trim()
  if (text.length <= limit) return text
  return `${text.slice(0, limit).replace(/\s+\S*$/, '')}…`
}

/** Case- and diacritic-insensitive substring search for the Library and Journal. */
export function matchesQuery(haystack: string, query: string): boolean {
  if (!query.trim()) return true
  const normalise = (value: string) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  const target = normalise(haystack)
  return normalise(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => target.includes(term))
}
