import { useLocation } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Tech24Link } from '../components/Tech24Link'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'
import { TECH24_HOME, TECH24_PACKAGES } from '../content/tech24'
import { findRouteMeta } from '../content/routes'
import { useRouteHead } from '../hooks/useRouteHead'

const categoryIcons = [
  <path key="websites" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z M4 9h16 M8 4v5" />,
  <path key="branding" d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z M9 12l2 2 4-4" />,
  <path key="marketing" d="M3 11 21 3l-4 18-5-7-7-3Z" />,
  <path
    key="ecommerce"
    d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6 M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  />,
  <path key="seo" d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z M16 16l5 5" />,
  <path key="support" d="M12 8v4l3 3 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />,
]

export function ServicesPage() {
  const { pathname } = useLocation()
  const { languageId, t, content } = useLanguage()
  useRouteHead(findRouteMeta(pathname)!)
  const p = (path: string) => localizedPath(path, languageId)

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: content.chrome.navHome, path: p('/') },
          { name: content.chrome.navServices, path: p('/services') },
        ]}
      />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{content.chrome.navServices}</h1>

      <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          {content.services.introPrefix}{' '}
          <Tech24Link href={TECH24_HOME} campaign="services">
            TECH24
          </Tech24Link>
          {content.services.introSuffix}
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.services.categories.map((category, i) => (
          <div key={category.title} className="group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-accent transition-colors group-hover:bg-accent group-hover:text-accent-contrast">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                {categoryIcons[i]}
              </svg>
            </span>
            <h2 className="mt-3 font-semibold text-text">{category.title}</h2>
            <p className="mt-1.5 text-sm text-muted">{category.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-surface-muted p-6 sm:p-8">
        <h2 className="text-center text-xl font-bold text-text">{t('howItWorks')}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {content.services.process.map((item, i) => (
            <div key={item.title} className="text-center">
              <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-contrast">
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold text-text">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted">
        {content.services.closingPrefix}{' '}
        <Tech24Link href={TECH24_PACKAGES} campaign="services">
          tech24.cc/packages
        </Tech24Link>
        .
      </p>
    </div>
  )
}
