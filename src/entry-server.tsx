import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppShell } from './AppShell'
import { buildHeadHtml } from './content/head'
import { allRoutes, findRouteMeta } from './content/routes'
import { findArticle } from './content/articles'
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
  const article = url.startsWith('/blog/') ? findArticle(url.slice('/blog/'.length)) : undefined
  const breadcrumbs = article
    ? [
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/blog' },
        { name: article.meta.h1, path: url },
      ]
    : undefined

  const head = buildHeadHtml({ route, isHome, breadcrumbs })

  return { html, head }
}
