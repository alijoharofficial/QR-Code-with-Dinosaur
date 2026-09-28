import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppShell } from './AppShell'
import { buildHeadHtml, buildNotFoundHeadHtml } from './content/head'
import { allRoutes, findRouteMeta } from './content/routes'
import { findGuide, findToolPageConfig, getContent } from './content/registry'
import { languages, defaultLanguageId } from './i18n/languages'
import { localizedPath } from './i18n/routing'
import { SITE_URL } from './content/site'

export { allRoutes, SITE_URL }

/** Any path guaranteed not to match a real route, so it falls through to
 * the app's own `*` catch-all (NotFoundPage) when rendered. A static host
 * serves this one file for any unmatched path regardless of locale prefix,
 * so it's always rendered in English. */
const NOT_FOUND_MARKER_PATH = '/__404_prerender_marker__'

/** Renders the 404 page to static HTML, for Vercel's automatic 404.html convention. */
export function renderNotFound() {
  const html = renderToString(
    <StaticRouter location={NOT_FOUND_MARKER_PATH}>
      <AppShell />
    </StaticRouter>,
  )
  return { html, head: buildNotFoundHeadHtml(), lang: defaultLanguageId, rtl: false }
}

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  )

  const route = findRouteMeta(url)
  if (!route) {
    // Shouldn't happen: the prerender script only ever calls render() with
    // paths from allRoutes. But fail loudly instead of shipping a page
    // with no <title>/meta if the route list and prerender list ever drift.
    throw new Error(`No route metadata registered for prerendered path: ${url}`)
  }

  const { lang, canonicalPath } = route
  const content = getContent(lang)
  const isHome = canonicalPath === '/'
  const toolConfig = findToolPageConfig(canonicalPath)
  const guide = canonicalPath.startsWith('/guides/')
    ? findGuide(lang, canonicalPath.slice('/guides/'.length))
    : undefined

  const softwareApplication = isHome
    ? { description: content.routes.home.description }
    : toolConfig
      ? { name: content.toolPages[toolConfig.id].h1, description: content.toolPages[toolConfig.id].description }
      : undefined

  const faqItems = isHome ? content.home.faq : toolConfig ? content.toolPages[toolConfig.id].faq : undefined

  const breadcrumbs = guide
    ? [
        { name: content.chrome.navHome, path: localizedPath('/', lang) },
        { name: content.chrome.navGuides, path: localizedPath('/guides', lang) },
        { name: guide.copy.h1, path: url },
      ]
    : undefined

  const head = buildHeadHtml({ route, softwareApplication, faqItems, breadcrumbs })
  const rtl = languages.find((l) => l.id === lang)?.rtl ?? false

  return { html, head, lang, rtl }
}
