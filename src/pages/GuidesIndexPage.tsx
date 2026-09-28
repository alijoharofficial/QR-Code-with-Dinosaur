import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { guides } from '../content/guides'
import { guidesIndexRoute } from '../content/routes'
import { useRouteHead } from '../hooks/useRouteHead'

export function GuidesIndexPage() {
  useRouteHead(guidesIndexRoute)

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }]} />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        QR Code Guides &amp; Tips
      </h1>
      <p className="mt-3 max-w-2xl text-balance text-muted">
        Practical, original guides on getting the most out of QR codes, from adding a
        logo without breaking scannability to picking the right kind of code for your
        use case.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {guides.map(({ meta }) => (
          <li key={meta.slug} className="rounded-2xl border border-border bg-surface p-5">
            <Link to={`/guides/${meta.slug}`} className="block">
              <h2 className="font-semibold text-text transition-colors hover:text-accent">
                {meta.h1}
              </h2>
              <p className="mt-1.5 text-sm text-muted">{meta.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted">
        Looking for the tool itself?{' '}
        <Link to="/" className="font-semibold text-accent hover:text-accent-hover">
          Go to the QR code generator
        </Link>
        .
      </p>
    </div>
  )
}
