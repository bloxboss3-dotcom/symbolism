import { Link } from 'react-router-dom'
import { ABILITY_LIST } from '../data/abilities'
import { abilityLevel, abilityProgress } from '../lib/scoring'
import type { AbilityId } from '../types/content'
import type { AbilityScore } from '../types/progress'
import { Ring } from './ui'

/**
 * Six nodes, each lit by the work actually done against that ability. It is a
 * record of practice, not a measurement of the person — the labels are chosen
 * to keep that distinction visible.
 */
export function WisdomMap({
  abilities,
  linkTo = '/progress',
}: {
  abilities: Record<AbilityId, AbilityScore>
  linkTo?: string
}) {
  return (
    <div className="map">
      {ABILITY_LIST.map((ability) => {
        const score = abilities[ability.id]
        const { name } = abilityLevel(score.points)
        const fraction = abilityProgress(score.points)

        return (
          <Link
            key={ability.id}
            to={linkTo}
            className="map__node"
            aria-label={`${ability.name}: ${name}, ${score.points} insight`}
          >
            <span className="map__glyph">
              <Ring value={fraction} size={40} stroke={2.5}>
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.95rem',
                    color: score.touches > 0 ? 'var(--c-gold)' : 'var(--c-text-faint)',
                  }}
                >
                  {ability.name[0]}
                </span>
              </Ring>
            </span>
            <span className="map__name">{ability.name}</span>
            <span className="map__level">{score.touches > 0 ? name : 'Not begun'}</span>
          </Link>
        )
      })}
    </div>
  )
}
