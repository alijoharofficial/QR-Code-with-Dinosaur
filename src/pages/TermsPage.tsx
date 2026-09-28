import { Link, useLocation } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { findRouteMeta } from '../content/routes'
import { SUPPORT_EMAIL, SITE_LAST_UPDATED_DISPLAY } from '../content/site'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'
import { useRouteHead } from '../hooks/useRouteHead'

export function TermsPage() {
  const { pathname } = useLocation()
  const { languageId, content } = useLanguage()
  useRouteHead(findRouteMeta(pathname)!)
  const p = (path: string) => localizedPath(path, languageId)
  const [s0, s1, s2, s3, s4, s5] = content.terms.sections

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: content.chrome.navHome, path: p('/') },
          { name: content.terms.h1, path: p('/terms') },
        ]}
      />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{content.terms.h1}</h1>
      <p className="mt-2 text-sm text-muted">
        {content.chrome.lastUpdatedLabel} {SITE_LAST_UPDATED_DISPLAY}
      </p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
        {[s0, s1, s2, s3, s4].map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-text">{section.heading}</h2>
            <p className="mt-2">{section.body}</p>
          </section>
        ))}

        <section>
          <h2 className="text-lg font-semibold text-text">{s5.heading}</h2>
          <p className="mt-2">
            {s5.bodyPrefix}{' '}
            <Link to={p('/contact')} className="font-medium text-text underline decoration-border underline-offset-2 hover:text-accent">
              {content.contact.h1}
            </Link>{' '}
            {s5.bodySuffixOr} {SUPPORT_EMAIL}.
          </p>
        </section>
      </div>
    </div>
  )
}
