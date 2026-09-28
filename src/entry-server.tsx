import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppShell } from './AppShell'
import { buildHeadHtml } from './content/head'
import { allRoutes, findRouteMeta } from './content/routes'
import { findGuide } from './content/guides'
import { findToolPage } from './content/toolPages'
import { homeFaq } from './content/faq'
import { SITE_URL } from './content/site'

export { allRoutes, SITE_URL }

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  )

  const route = findRouteMeta(url)
  if (!route) {
    // Shouldn't happen — the prerender script only ever calls render() with
    // paths from allRoutes — but fail loudly instead of shipping a page
    // with no <title>/meta if the route list and prerender list ever drift.
    throw new Error(`No route metadata registered for prerendered path: ${url}`)
  }

  const isHome = url === '/'
  const toolPage = findToolPage(url)
  const guide = url.startsWith('/guides/') ? findGuide(url.slice('/guides/'.length)) : undefined

  const softwareApplication = isHome
    ? {}
    : toolPage
      ? { name: toolPage.h1, description: toolPage.description }
      : undefined

  const faqItems = isHome ? homeFaq : toolPage ? toolPage.faq : undefined

  const breadcrumbs = guide
    ? [
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: guide.meta.h1, path: url },
      ]
    : undefined

  const head = buildHeadHtml({ route, softwareApplication, faqItems, breadcrumbs })

  return { html, head }
}
