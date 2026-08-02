import { Link } from 'react-router-dom'
import { IconLock } from '../components/Icons'
import { Bar, Rule } from '../components/ui'
import { getLesson } from '../data/curriculum'
import { useWisdom } from '../features/progress/useWisdom'
import { availableCases, availableTrials } from '../features/progress/selectors'
import { lessonCompletion } from '../lib/scoring'

const KIND_LABEL: Record<string, string> = {
  counsel: 'Counsel',
  leadership: 'Leadership',
  formation: 'Formation',
  interpretation: 'Interpretation',
  conflict: 'Conflict',
  symbol: 'Symbol',
}

export function CaseLabPage() {
  const { state } = useWisdom()
  const cases = availableCases(state)
  const trials = availableTrials(state)

  return (
    <main className="page" id="main">
      <header className="stack stack--tight" style={{ marginBottom: 'var(--s-5)' }}>
        <p className="kicker">Case Lab</p>
        <h1 className="display">Application, not instruction</h1>
        <p className="lede reading">
          Shorter than a lesson and with nothing new taught. Each opens once you have done the work
          that makes it a fair test rather than a guess.
        </p>
      </header>

      <div className="stack stack--loose">
        <section className="stack">
          <h2 className="title">Case files</h2>
          <div className="list">
            {cases.map(({ file, unlocked }) => {
              const record = state.cases[file.id]
              const completion = lessonCompletion(record, file.steps.length)
              const gate = file.unlockAfterLessonId ? getLesson(file.unlockAfterLessonId) : null

              if (!unlocked) {
                return (
                  <div className="card card--quiet stack stack--tight" key={file.id}>
                    <div
                      className="row"
                      style={{ gap: 'var(--s-2)', color: 'var(--c-text-faint)' }}
                    >
                      <IconLock size={16} />
                      <span className="eyebrow">
                        Opens after {gate?.title ?? 'an earlier lesson'}
                      </span>
                    </div>
                    <h3 className="card__title" style={{ color: 'var(--c-text-muted)' }}>
                      {file.title}
                    </h3>
                    <p className="small faint">{file.premise}</p>
                  </div>
                )
              }

              return (
                <Link key={file.id} to={`/cases/${file.id}`} className="card stack stack--tight">
                  <div className="row row--between">
                    <span className="chip chip--gold">{KIND_LABEL[file.kind] ?? file.kind}</span>
                    <span className="eyebrow">
                      {record?.status === 'complete' ? 'Complete' : `${file.minutes} min`}
                    </span>
                  </div>
                  <h3 className="card__title">{file.title}</h3>
                  <p className="small muted">{file.premise}</p>
                  {completion > 0 && completion < 1 ? (
                    <Bar value={completion} label={`${file.title} progress`} />
                  ) : null}
                </Link>
              )
            })}
          </div>
        </section>

        <Rule />

        <section className="stack">
          <h2 className="title">Transfer trials</h2>
          <p className="small reading muted">
            A principle you have already met, dropped into a situation that looks nothing like where
            you learned it. Recognition is the only real test of whether an idea has been acquired
            or merely filed.
          </p>
          <div className="list">
            {trials.map(({ trial, unlocked }) => {
              const source = getLesson(trial.fromLessonId)
              const record = state.trials[trial.id]

              if (!unlocked) {
                return (
                  <div className="card card--quiet stack stack--tight" key={trial.id}>
                    <div
                      className="row"
                      style={{ gap: 'var(--s-2)', color: 'var(--c-text-faint)' }}
                    >
                      <IconLock size={16} />
                      <span className="eyebrow">Opens after {source?.title ?? 'its lesson'}</span>
                    </div>
                    <h3 className="card__title" style={{ color: 'var(--c-text-muted)' }}>
                      {trial.title}
                    </h3>
                  </div>
                )
              }

              return (
                <Link key={trial.id} to={`/trials/${trial.id}`} className="card stack stack--tight">
                  <div className="row row--between">
                    <span className="chip chip--lapis">Transfer</span>
                    <span className="eyebrow">
                      {record?.status === 'complete' ? 'Complete' : `${trial.minutes} min`}
                    </span>
                  </div>
                  <h3 className="card__title">{trial.title}</h3>
                  <p className="small muted">Carried from {source?.title ?? 'an earlier lesson'}</p>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
