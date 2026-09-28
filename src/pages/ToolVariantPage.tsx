import { Link, useLocation } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { Hero } from '../components/Hero'
import { QrToolWidget } from '../components/QrToolWidget'
import { WhatIsQrCode } from '../components/WhatIsQrCode'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath, stripLocalePrefix } from '../i18n/routing'
import { useRouteHead } from '../hooks/useRouteHead'
import { findRouteMeta } from '../content/routes'
import { findToolPageConfig, getGuides } from '../content/registry'

/**
 * Renders any of the 5 tool-variant/use-case pages (/qr-code-with-dinosaur,
 * /qr-code-with-logo, /custom-qr-code, /qr-code-for-menu, /qr-code-for-wifi),
 * in any language. Each has unique H1/copy/FAQ/preset from PageContent, but
 * shares this one template: data-driven, not duplicated per page or locale.
 */
export function ToolVariantPage() {
  const { pathname } = useLocation()
  const { languageId, content } = useLanguage()
  const canonicalPath = stripLocalePrefix(pathname)
  const config = findToolPageConfig(canonicalPath)
  const route = findRouteMeta(pathname)
  useRouteHead(route!)

  if (!config) return null // unreachable: only mounted for known tool-page routes

  const copy = content.toolPages[config.id]
  const relatedGuides = getGuides(languageId).filter((g) => config.relatedGuideSlugs.includes(g.slug))

  return (
    <>
      <Hero title={copy.h1} subtitle={copy.subtitle} />
      <WhatIsQrCode />

      <QrToolWidget {...config.preset} />

      <section className="mx-auto w-full max-w-2xl px-4 pb-4 sm:px-6">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {copy.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqSection items={copy.faq} heading={content.chrome.faqHeadingToolPage} />

      {relatedGuides.length > 0 && (
        <section className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6">
          <h2 className="text-center text-xl font-bold text-text">{content.chrome.relatedGuidesHeading}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedGuides.map((guide) => (
              <li key={guide.slug} className="rounded-2xl border border-border bg-surface p-5">
                <Link to={localizedPath(`/guides/${guide.slug}`, languageId)} className="block">
                  <h3 className="font-semibold text-text transition-colors hover:text-accent">{guide.copy.h1}</h3>
                  <p className="mt-1.5 text-sm text-muted">{guide.copy.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted">
            <Link to={localizedPath('/', languageId)} className="font-semibold text-accent hover:text-accent-hover">
              {content.chrome.backToGenerator}
            </Link>
          </p>
        </section>
      )}
    </>
  )
}
