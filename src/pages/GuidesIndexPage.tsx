import { Link, useLocation } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'
import { useRouteHead } from '../hooks/useRouteHead'
import { findRouteMeta } from '../content/routes'
import { getGuides } from '../content/registry'

export function GuidesIndexPage() {
  const { pathname } = useLocation()
  const { languageId, content } = useLanguage()
  useRouteHead(findRouteMeta(pathname)!)
  const guides = getGuides(languageId)
  const p = (path: string) => localizedPath(path, languageId)

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: content.chrome.navHome, path: p('/') }, { name: content.chrome.navGuides, path: p('/guides') }]} />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        {content.routes.guidesIndex.h1}
      </h1>
      <p className="mt-3 max-w-2xl text-balance text-muted">{content.guidesIndex.intro}</p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <li key={guide.slug} className="rounded-2xl border border-border bg-surface p-5">
            <Link to={p(`/guides/${guide.slug}`)} className="block">
              <h2 className="font-semibold text-text transition-colors hover:text-accent">{guide.copy.h1}</h2>
              <p className="mt-1.5 text-sm text-muted">{guide.copy.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted">
        {content.guidesIndex.lookingForTool}{' '}
        <Link to={p('/')} className="font-semibold text-accent hover:text-accent-hover">
          {content.guidesIndex.goToGenerator}
        </Link>
        .
      </p>
    </div>
  )
}
