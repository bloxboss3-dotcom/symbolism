import type { ScripturePassage } from '../schemas'
import { webTranslation } from '../data/registry'

/**
 * Scripture, set in the serif voice with superscript verse numbers and the
 * translation's attribution. Used by the player and the reader alike.
 */
export function PassageText({
  passage,
  showAttribution = true,
}: {
  passage: ScripturePassage
  showAttribution?: boolean
}) {
  return (
    <figure style={{ margin: 0 }}>
      <blockquote className="scripture" style={{ margin: 0 }}>
        <p>
          {passage.verses.map((verse) => (
            <span key={verse.v}>
              <sup className="verse-num" aria-hidden="true">
                {verse.v}
              </sup>
              {verse.text}{' '}
            </span>
          ))}
        </p>
      </blockquote>
      <figcaption
        className="footnote"
        style={{
          marginTop: 'var(--s-3)',
          display: 'flex',
          gap: 'var(--s-2)',
          alignItems: 'center',
        }}
      >
        <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>
          {passage.reference}
        </strong>
        {showAttribution ? <span className="chip">{webTranslation.abbreviation}</span> : null}
      </figcaption>
    </figure>
  )
}
