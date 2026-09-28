import { Link, useLocation } from 'react-router-dom'
import { AboutIllustration } from '../components/AboutIllustration'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Tech24Link } from '../components/Tech24Link'
import { TECH24_HOME, TECH24_PACKAGES } from '../content/tech24'
import { findRouteMeta } from '../content/routes'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'
import { useRouteHead } from '../hooks/useRouteHead'

export function AboutPage() {
  const { pathname } = useLocation()
  const { languageId, content } = useLanguage()
  useRouteHead(findRouteMeta(pathname)!)
  const p = (path: string) => localizedPath(path, languageId)

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: content.chrome.navHome, path: p('/') },
          { name: content.chrome.navAbout, path: p('/about') },
        ]}
      />

      <div className="mt-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
        <AboutIllustration />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{content.about.h1}</h1>
          <p className="mt-3 text-balance text-base leading-relaxed text-muted">{content.about.subtitle}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {content.about.highlights.map((item) => (
          <div key={item.title} className="rounded-2xl bg-surface-muted p-5 text-center">
            <h2 className="font-semibold text-text">{item.title}</h2>
            <p className="mt-1.5 text-sm text-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-emerald-700 p-6 shadow-soft sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10"
        />
        <h2 className="text-xl font-bold text-white">{content.about.privacyHeading}</h2>
        <ul className="relative mt-4 grid gap-2.5 sm:grid-cols-2">
          {content.about.privacyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-emerald-50/90">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
                <path d="m5 12 5 5 9-9" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
        <p className="relative mt-4 text-sm text-emerald-50/80">
          {content.about.privacyClosingPrefix}{' '}
          <Link to={p('/privacy-policy')} className="font-semibold text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
            {content.chrome.footerPrivacyPolicy}
          </Link>{' '}
          {content.about.privacyClosingSuffix}
        </p>
      </div>

      <div className="mt-10 space-y-4 text-base leading-relaxed text-muted">
        <p>
          {content.about.tech24Prefix}{' '}
          <Tech24Link href={TECH24_HOME} campaign="about">
            TECH24
          </Tech24Link>
          {content.about.tech24Mid}{' '}
          <Tech24Link
            href={TECH24_PACKAGES}
            campaign="about"
            className="text-muted underline decoration-border underline-offset-2 hover:text-accent"
          >
            {content.about.tech24OfferLabel}
          </Tech24Link>
          .
        </p>
        <p>
          {content.chrome.questionsFeedback}{' '}
          <Link to={p('/contact')} className="font-medium text-text underline decoration-border underline-offset-2 hover:text-accent">
            {content.chrome.getInTouchLabel}
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
