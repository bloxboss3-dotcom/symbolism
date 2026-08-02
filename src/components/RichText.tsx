import { Fragment, type ReactNode } from 'react'
import type { RichBlock } from '../types/content'
import { parseInline } from '../lib/text'

/** Renders the `**strong**` / `*emphasis*` subset as elements, never as markup. */
export function Inline({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((token, index) => {
        if (token.type === 'strong') return <strong key={index}>{token.value}</strong>
        if (token.type === 'em') return <em key={index}>{token.value}</em>
        return <Fragment key={index}>{token.value}</Fragment>
      })}
    </>
  )
}

function Block({ block }: { block: RichBlock }): ReactNode {
  switch (block.kind) {
    case 'p':
      return (
        <p>
          <Inline text={block.text} />
        </p>
      )

    case 'h':
      return <h3>{block.text}</h3>

    case 'quote':
      return (
        <blockquote className="quote">
          <Inline text={block.text} />
          {block.attribution ? <cite className="quote__attr">{block.attribution}</cite> : null}
        </blockquote>
      )

    case 'scripture':
      return (
        <figure className="scripture">
          <p className="scripture__text">
            <Inline text={block.text} />
          </p>
          <figcaption className="scripture__ref">
            {block.ref}
            {block.translation ? ` · ${block.translation}` : ''}
          </figcaption>
        </figure>
      )

    case 'list':
      return block.ordered ? (
        <ol>
          {block.items.map((item, index) => (
            <li key={index}>
              <Inline text={item} />
            </li>
          ))}
        </ol>
      ) : (
        <ul>
          {block.items.map((item, index) => (
            <li key={index}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      )

    case 'dialogue':
      return (
        <div className="dialogue">
          {block.lines.map((line, index) => (
            <div key={index}>
              <span className="dialogue__speaker">{line.speaker}</span>
              {line.beat ? <span className="dialogue__beat">{line.beat}</span> : null}
              <p>
                <Inline text={line.text} />
              </p>
            </div>
          ))}
        </div>
      )

    case 'callout':
      return (
        <aside className={`callout callout--${block.tone}`}>
          <p className="callout__title">{block.title}</p>
          <p>
            <Inline text={block.text} />
          </p>
        </aside>
      )

    case 'aside':
      return (
        <aside className="aside">
          <span className="aside__label">{block.label}</span>
          <p>
            <Inline text={block.text} />
          </p>
        </aside>
      )

    default:
      return null
  }
}

export function RichText({
  blocks,
  illuminated = false,
  className = '',
}: {
  blocks: RichBlock[]
  /** Drop-cap the first paragraph. Reserved for the opening of an encounter. */
  illuminated?: boolean
  className?: string
}) {
  return (
    <div className={`rich ${illuminated ? 'rich--illuminated' : ''} ${className}`.trim()}>
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  )
}
