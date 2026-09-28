import { Link } from 'react-router-dom'
import { guides } from '../content/guides'

export function GuidesTeaserSection() {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6"
      aria-labelledby="guides-heading"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="guides-heading" className="text-2xl font-bold text-text">
          Guides &amp; tips
        </h2>
        <Link
          to="/guides"
          className="shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          View all guides →
        </Link>
      </div>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map(({ meta }) => (
          <li key={meta.slug} className="rounded-2xl border border-border bg-surface p-5">
            <Link to={`/guides/${meta.slug}`} className="block">
              <h3 className="font-semibold text-text transition-colors hover:text-accent">
                {meta.h1}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{meta.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
