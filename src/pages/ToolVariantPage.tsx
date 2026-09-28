import { Link, useLocation } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { Hero } from '../components/Hero'
import { QrToolWidget } from '../components/QrToolWidget'
import { WhatIsQrCode } from '../components/WhatIsQrCode'
import { useRouteHead } from '../hooks/useRouteHead'
import { findGuide } from '../content/guides'
import { homeRoute, findRouteMeta } from '../content/routes'
import { findToolPage } from '../content/toolPages'

/**
 * Renders any of the 5 tool-variant/use-case pages (/qr-code-with-dinosaur,
 * /qr-code-with-logo, /custom-qr-code, /qr-code-for-menu, /qr-code-for-wifi).
 * Each has unique H1/copy/FAQ/preset from content/toolPages.ts, but shares
 * this one template: data-driven, not duplicated per page.
 */
export function ToolVariantPage() {
  const { pathname } = useLocation()
  const page = findToolPage(pathname)
  const route = findRouteMeta(pathname) ?? homeRoute
  useRouteHead(route)

  if (!page) return null // unreachable: only mounted for known tool-page routes

  const relatedGuides = page.relatedGuideSlugs
    .map((slug) => findGuide(slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))

  return (
    <>
      <Hero title={page.h1} subtitle={page.subtitle} />
      <WhatIsQrCode />

      <QrToolWidget {...page.preset} />

      <section className="mx-auto w-full max-w-2xl px-4 pb-4 sm:px-6">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqSection items={page.faq} heading="Questions about this page" />

      {relatedGuides.length > 0 && (
        <section className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6">
          <h2 className="text-center text-xl font-bold text-text">Related guides</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedGuides.map((guide) => (
              <li key={guide.meta.slug} className="rounded-2xl border border-border bg-surface p-5">
                <Link to={`/guides/${guide.meta.slug}`} className="block">
                  <h3 className="font-semibold text-text transition-colors hover:text-accent">
                    {guide.meta.h1}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{guide.meta.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted">
            <Link to="/" className="font-semibold text-accent hover:text-accent-hover">
              ← Back to the main QR code generator
            </Link>
          </p>
        </section>
      )}
    </>
  )
}
