import { Link } from 'react-router-dom'
import { toolPages } from '../content/toolPages'

export function TopToolsSection() {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6"
      aria-labelledby="tools-heading"
    >
      <h2 id="tools-heading" className="text-center text-2xl font-bold text-text">
        More ways to use it
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolPages.map((page) => (
          <li key={page.path} className="rounded-2xl border border-border bg-surface p-5">
            <Link to={page.path} className="block">
              <h3 className="font-semibold text-text transition-colors hover:text-accent">
                {page.h1}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{page.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
