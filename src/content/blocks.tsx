import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { localizedPath } from '../i18n/routing'

/**
 * A small structured-content model for guide article bodies, used instead
 * of hand-written JSX per language. Translating data is much safer than
 * asking a translation pass to also produce valid JSX/TSX, and it lets one
 * shared renderer localize every internal `<Link>` href consistently.
 */
export type InlineNode =
  | { t: 'text'; v: string }
  | { t: 'b'; v: string }
  | { t: 'i'; v: string }
  | { t: 'code'; v: string }
  | { t: 'link'; v: string; to: string }

export type Block =
  | { type: 'p'; content: InlineNode[] }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: InlineNode[][] }
  | { type: 'ol'; items: InlineNode[][] }
  | { type: 'table'; headers: string[]; rows: string[][] }

export function renderInline(nodes: InlineNode[], lang: string): ReactNode {
  return nodes.map((node, i) => {
    switch (node.t) {
      case 'text':
        return <Fragment key={i}>{node.v}</Fragment>
      case 'b':
        return <strong key={i}>{node.v}</strong>
      case 'i':
        return <em key={i}>{node.v}</em>
      case 'code':
        return <code key={i}>{node.v}</code>
      case 'link':
        return (
          <Link key={i} to={localizedPath(node.to, lang)}>
            {node.v}
          </Link>
        )
    }
  })
}

export function renderBlocks(blocks: Block[], lang: string): ReactNode {
  return blocks.map((block, i) => {
    switch (block.type) {
      case 'p':
        return <p key={i}>{renderInline(block.content, lang)}</p>
      case 'h2':
        return <h2 key={i}>{block.text}</h2>
      case 'ul':
        return (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>{renderInline(item, lang)}</li>
            ))}
          </ul>
        )
      case 'ol':
        return (
          <ol key={i}>
            {block.items.map((item, j) => (
              <li key={j}>{renderInline(item, lang)}</li>
            ))}
          </ol>
        )
      case 'table':
        return (
          <table key={i}>
            <thead>
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )
    }
  })
}
