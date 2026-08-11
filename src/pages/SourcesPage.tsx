/**
 * Sources & editorial standards: the app shows its work. Every commentary
 * source, every quotation's verification record, and the translation's
 * licensing are inspectable here.
 */
import { allQuotes, commentaries, passageById, webTranslation } from '../data/registry'

export function SourcesPage() {
  return (
    <main className="page" id="main">
      <header className="page-head">
        <p className="kicker">Sources</p>
        <h1>Editorial standards</h1>
        <p className="lede">
          Content accuracy is a first-class requirement here. This page shows exactly where the
          words come from.
        </p>
      </header>

      <div className="stack stack--loose">
        <section className="card stack" aria-labelledby="standards-head">
          <h2 id="standards-head" style={{ fontSize: '1.05rem' }}>
            The standards
          </h2>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.92rem', color: 'var(--c-ink-soft)' }}>
            <li>Scripture text is public domain, transcribed from its source and dated.</li>
            <li>
              Commentary is curated and cited — never generated on the fly — and separates
              literary/historical fact from theological interpretation and devotional application.
            </li>
            <li>
              Where faithful Christian traditions genuinely differ, the difference is stated fairly
              rather than presenting one view as undisputed.
            </li>
            <li>
              A quotation appears only if its exact wording was verified against a reliable archive
              or edition. Unverified material stays unpublished — the build fails otherwise.
            </li>
            <li>
              Prayers are original to this app; substantial biblical phrases in them carry internal
              reference notes.
            </li>
            <li>The app never speaks for God or claims private revelation.</li>
          </ul>
          <p className="footnote">
            The full editorial guide lives in the repository as docs/CONTENT_EDITORIAL_GUIDE.md,
            alongside CONTENT_SOURCES.md.
          </p>
        </section>

        <section className="card stack" aria-labelledby="translation-head">
          <h2 id="translation-head" style={{ fontSize: '1.05rem' }}>
            Bible translation
          </h2>
          <p style={{ fontSize: '0.95rem' }}>
            <strong>
              {webTranslation.name} ({webTranslation.abbreviation})
            </strong>
          </p>
          <p className="footnote">{webTranslation.license}</p>
          <p className="footnote">
            {webTranslation.attribution}{' '}
            <a href={webTranslation.sourceUrl} target="_blank" rel="noreferrer">
              {webTranslation.sourceUrl}
            </a>
          </p>
        </section>

        <section className="card stack" aria-labelledby="commentary-src-head">
          <h2 id="commentary-src-head" style={{ fontSize: '1.05rem' }}>
            Commentary sources
          </h2>
          {commentaries.map((entry) => (
            <div key={entry.id}>
              <h3 style={{ fontSize: '0.95rem' }}>
                {passageById.get(entry.passageId)?.reference ?? entry.passageId}{' '}
                <span className="chip" style={{ marginLeft: 'var(--s-1)' }}>
                  {entry.reviewStatus}
                </span>
              </h3>
              <ul style={{ paddingLeft: '1.2rem', marginTop: 'var(--s-1)' }}>
                {entry.citations.map((cite) => (
                  <li key={cite.work} className="footnote">
                    {cite.author}, <em>{cite.work}</em>
                    {cite.year ? ` (${cite.year})` : ''}.{' '}
                    {cite.url ? (
                      <a href={cite.url} target="_blank" rel="noreferrer">
                        Link
                      </a>
                    ) : (
                      cite.bibliographic
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="footnote">
            Perspective for all entries: broadly orthodox / ecumenical. “Demo” marks seed content
            awaiting the full editorial review workflow described in the repository.
          </p>
        </section>

        <section className="card stack" aria-labelledby="quotes-head">
          <h2 id="quotes-head" style={{ fontSize: '1.05rem' }}>
            Quotations &amp; verification
          </h2>
          <ul className="list-plain">
            {allQuotes.map((quote) => (
              <li
                key={quote.id}
                style={{ borderTop: '1px solid var(--c-border-soft)', paddingTop: 'var(--s-3)' }}
              >
                <p style={{ fontSize: '0.92rem' }}>
                  <strong>{quote.speaker}</strong>, <em>{quote.work}</em>
                  {quote.translator ? `, tr. ${quote.translator}` : ''}
                  {quote.year ? ` (${quote.year})` : ''}
                </p>
                {quote.verification.status === 'verified' ? (
                  <p
                    className="prayer-text"
                    style={{ fontSize: '0.98rem', marginTop: 'var(--s-1)' }}
                  >
                    “{quote.text}”
                  </p>
                ) : (
                  <p className="footnote" style={{ marginTop: 'var(--s-1)' }}>
                    Not published: {quote.verification.notes ?? 'verification incomplete.'}
                  </p>
                )}
                <p className="footnote" style={{ marginTop: 'var(--s-1)' }}>
                  Status: {quote.verification.status}
                  {quote.verification.verifiedAgainst
                    ? ` · checked against ${quote.verification.verifiedAgainst}`
                    : ''}
                  {quote.verification.verifiedOn ? ` on ${quote.verification.verifiedOn}` : ''}
                  {' · '}
                  {quote.license === 'public-domain' ? 'public domain' : quote.license}
                  {quote.url ? (
                    <>
                      {' · '}
                      <a href={quote.url} target="_blank" rel="noreferrer">
                        source
                      </a>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
