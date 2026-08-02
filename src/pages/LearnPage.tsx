import { Link } from 'react-router-dom'
import { IconCheck } from '../components/Icons'
import { Bar, Ring, Rule } from '../components/ui'
import { ABILITIES } from '../data/abilities'
import { MODULES, lessonsForModule } from '../data/curriculum'
import { useWisdom } from '../features/progress/useWisdom'
import { lessonView, moduleCompletion } from '../features/progress/selectors'

export function LearnPage() {
  const { state } = useWisdom()

  return (
    <main className="page" id="main">
      <header className="stack stack--tight" style={{ marginBottom: 'var(--s-5)' }}>
        <p className="kicker">The curriculum</p>
        <h1 className="display">Twelve modules</h1>
        <p className="lede reading">
          They are ordered because they build. Module one is the argument the rest depends on, and
          the final trial assumes all eleven before it.
        </p>
      </header>

      <div className="stack stack--loose">
        {MODULES.map((module) => {
          const completion = moduleCompletion(state, module.id)
          const lessons = lessonsForModule(module.id)
          const complete = completion >= 1

          return (
            <section key={module.id} className="stack">
              <div className="row" style={{ alignItems: 'flex-start', gap: 'var(--s-3)' }}>
                <Ring value={completion} size={38} stroke={2.5}>
                  {complete ? (
                    <span style={{ color: 'var(--c-gold)', display: 'grid' }}>
                      <IconCheck size={15} />
                    </span>
                  ) : (
                    <span className="numeral small" style={{ color: 'var(--c-text-muted)' }}>
                      {module.order}
                    </span>
                  )}
                </Ring>
                <div className="stack stack--tight" style={{ flex: 1, minWidth: 0 }}>
                  <h2 className="card__title">{module.title}</h2>
                  <p className="small muted">{module.centralQuestion}</p>
                </div>
              </div>

              <p className="small reading" style={{ color: 'var(--c-text-soft)' }}>
                {module.summary}
              </p>

              <div className="row row--wrap" style={{ gap: 'var(--s-2)' }}>
                {module.abilities.map((id) => (
                  <span className="chip" key={id}>
                    {ABILITIES[id].name}
                  </span>
                ))}
              </div>

              <div className="list">
                {lessons.map((lesson) => {
                  const view = lessonView(state, lesson)
                  return (
                    <Link
                      key={lesson.id}
                      to={`/learn/${lesson.id}`}
                      className={`card ${view.status === 'in-progress' ? 'card--gold' : ''}`.trim()}
                    >
                      <div className="stack stack--tight">
                        <div className="row row--between">
                          <span className="eyebrow">
                            {view.status === 'complete'
                              ? 'Complete'
                              : view.status === 'in-progress'
                                ? 'In progress'
                                : `${lesson.minutes} min`}
                          </span>
                          <span className="eyebrow numeral">{lesson.steps.length} steps</span>
                        </div>
                        <h3 className="card__title">{lesson.title}</h3>
                        <p className="small muted">{lesson.subtitle}</p>
                        {view.completion > 0 && view.completion < 1 ? (
                          <Bar value={view.completion} label={`${lesson.title} progress`} />
                        ) : null}
                      </div>
                    </Link>
                  )
                })}
              </div>

              <Rule />
            </section>
          )
        })}
      </div>
    </main>
  )
}
