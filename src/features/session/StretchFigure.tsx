/**
 * Minimal line figures for the stretches, drawn in code — no image assets.
 * Each drawing is decorative; `figureDescription` on the stretch carries the
 * accessible description.
 */
import type { Stretch } from '../../schemas'

export function StretchFigure({ figure }: { figure: Stretch['figure'] }) {
  return (
    <div className="stretch-figure">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {figure === 'neck' && (
          <>
            <circle cx="57" cy="26" r="10" />
            <path d="M50 36c-6 8-8 18-8 30M30 70h44" />
            <path d="M70 22c4 3 6 8 6 12" opacity="0.45" />
          </>
        )}
        {figure === 'shoulders' && (
          <>
            <circle cx="50" cy="22" r="10" />
            <path d="M50 32v34M32 44c0-8 8-12 18-12s18 4 18 12" />
            <path d="M24 40c-3-8 2-16 9-18M76 40c3-8-2-16-9-18" opacity="0.45" />
          </>
        )}
        {figure === 'wrists' && (
          <>
            <circle cx="26" cy="30" r="10" />
            <path d="M26 40v26M26 50h38" />
            <path d="M64 50c6 0 10-4 10-9M64 50c6 0 10 4 10 9" opacity="0.45" />
          </>
        )}
        {figure === 'side-body' && (
          <>
            <circle cx="44" cy="30" r="10" />
            <path d="M44 40c0 12-2 20-2 30M28 70h36" />
            <path d="M46 44c10-8 22-8 28 2" opacity="0.9" />
          </>
        )}
        {figure === 'reach' && (
          <>
            <circle cx="50" cy="28" r="10" />
            <path d="M50 38v30M40 82l10-14 10 14" />
            <path d="M50 44 34 22M50 44l16-22" opacity="0.9" />
          </>
        )}
        {figure === 'fold' && (
          <>
            <circle cx="66" cy="46" r="9" />
            <path d="M36 26v26M36 52c0 10 12 12 22 6" />
            <path d="M62 54c4 6 4 12 2 18" opacity="0.45" />
          </>
        )}
      </svg>
    </div>
  )
}
