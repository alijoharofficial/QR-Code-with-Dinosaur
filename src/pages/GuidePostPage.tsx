import { Link, useLocation, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { GuideCredit } from '../components/GuideCredit'
import { renderBlocks } from '../content/blocks'
import { findGuide } from '../content/registry'
import { findRouteMeta } from '../content/routes'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'
import { useRouteHead } from '../hooks/useRouteHead'

const dateLocaleByLang: Record<string, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  es: 'es-ES',
  ar: 'ar',
  fr: 'fr-FR',
  pt: 'pt-PT',
  de: 'de-DE',
}

export function GuidePostPage() {
  const { slug = '' } = useParams()
  const { pathname } = useLocation()
  const { languageId, content } = useLanguage()
  const guide = findGuide(languageId, slug)
  const p = (path: string) => localizedPath(path, languageId)
  const route = findRouteMeta(pathname) ?? findRouteMeta(p('/'))!
  useRouteHead(route)

  if (!guide) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-text">Guide not found</h1>
        <p className="mt-3 text-muted">That guide doesn't exist, or the link is out of date.</p>
        <Link to={p('/guides')} className="mt-6 inline-block font-semibold text-accent hover:text-accent-hover">
          {content.chrome.navGuides}
        </Link>
      </div>
    )
  }

  const { copy, publishedDate } = guide

  return (
    <article className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: content.chrome.navHome, path: p('/') },
          { name: content.chrome.navGuides, path: p('/guides') },
          { name: copy.h1, path: p(`/guides/${guide.slug}`) },
        ]}
      />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{copy.h1}</h1>
      <p className="mt-2 text-sm text-muted">
        <time dateTime={publishedDate}>
          {new Date(`${publishedDate}T00:00:00Z`).toLocaleDateString(dateLocaleByLang[languageId] ?? 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
          })}
        </time>
      </p>

      <div className="article-content mt-8">{renderBlocks(copy.body, languageId)}</div>

      <GuideCredit />

      <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
        <p className="text-sm text-muted">
          <Link to={p('/')} className="font-semibold text-accent hover:text-accent-hover">
            {content.chrome.navHome}
          </Link>{' '}
          &middot;{' '}
          <Link to={p('/guides')} className="font-semibold text-accent hover:text-accent-hover">
            {content.chrome.navGuides}
          </Link>
        </p>
      </div>
    </article>
  )
}
