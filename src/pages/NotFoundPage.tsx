import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NotFoundIllustration } from '../components/NotFoundIllustration'
import { useNotFoundHead } from '../hooks/useNotFoundHead'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'

export function NotFoundPage() {
  useNotFoundHead()
  const { languageId, content } = useLanguage()

  // The static 404.html served for any unmatched path is prerendered once,
  // at build time, using a placeholder location; it has no way to know
  // the real URL a visitor hit. Reading the actual path only after mount
  // (rather than via useLocation(), which would differ between that
  // build-time render and the real browser URL) keeps the server and the
  // first client render identical, avoiding a hydration mismatch, then
  // fills in the real path a moment later.
  const [pathname, setPathname] = useState<string | null>(null)
  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return (
    <div className="mx-auto w-full max-w-lg px-4 py-16 text-center sm:px-6 sm:py-24">
      <NotFoundIllustration />

      <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-accent">{content.notFound.eyebrow}</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{content.notFound.heading}</h1>
      <p className="mt-3 text-balance text-muted">
        {pathname ? (
          <>
            {content.notFound.bodyWithPathPrefix}{' '}
            <code className="rounded bg-surface-muted px-1.5 py-0.5 text-sm text-text">{pathname}</code>
            {content.notFound.bodyWithPathSuffix}
          </>
        ) : (
          content.notFound.bodyWithoutPath
        )}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to={localizedPath('/', languageId)}
          className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-all hover:bg-accent-hover active:scale-[0.97]"
        >
          {content.notFound.backToGenerator}
        </Link>
        <Link
          to={localizedPath('/guides', languageId)}
          className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition-all hover:border-accent hover:text-accent active:scale-[0.97]"
        >
          {content.notFound.browseGuides}
        </Link>
      </div>
    </div>
  )
}
