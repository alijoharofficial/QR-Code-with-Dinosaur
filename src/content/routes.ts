import { languages, defaultLanguageId } from '../i18n/languages'
import { localizedPath } from '../i18n/routing'
import { getContent, getGuides, toolPageConfigs } from './registry'

export interface RouteMeta {
  /** Full path, including a locale prefix for non-English routes. */
  path: string
  title: string
  description: string
  /** Sitemap priority, 0-1. */
  priority: number
  /** ISO date (YYYY-MM-DD) for sitemap <lastmod>. */
  lastmod: string
  /** Locale this route renders in. */
  lang: string
  /** The unprefixed (English) equivalent path, used to group hreflang alternates. */
  canonicalPath: string
}

const SITE_LAST_UPDATED = '2026-09-28'

function buildRoutesForLocale(lang: string): RouteMeta[] {
  const content = getContent(lang)
  const guides = getGuides(lang)
  const routes: RouteMeta[] = []

  routes.push({
    path: localizedPath('/', lang),
    canonicalPath: '/',
    title: content.routes.home.title,
    description: content.routes.home.description,
    priority: 1.0,
    lastmod: SITE_LAST_UPDATED,
    lang,
  })

  for (const config of toolPageConfigs) {
    const copy = content.toolPages[config.id]
    routes.push({
      path: localizedPath(config.path, lang),
      canonicalPath: config.path,
      title: copy.title,
      description: copy.description,
      priority: 0.8,
      lastmod: SITE_LAST_UPDATED,
      lang,
    })
  }

  routes.push({
    path: localizedPath('/guides', lang),
    canonicalPath: '/guides',
    title: content.routes.guidesIndex.title,
    description: content.routes.guidesIndex.description,
    priority: 0.7,
    lastmod: SITE_LAST_UPDATED,
    lang,
  })

  for (const guide of guides) {
    const canonicalPath = `/guides/${guide.slug}`
    routes.push({
      path: localizedPath(canonicalPath, lang),
      canonicalPath,
      title: guide.copy.title,
      description: guide.copy.description,
      priority: 0.7,
      lastmod: guide.publishedDate,
      lang,
    })
  }

  const trustPages: { canonicalPath: string; title: string; description: string }[] = [
    { canonicalPath: '/services', title: content.routes.services.title, description: content.routes.services.description },
    { canonicalPath: '/about', title: content.routes.about.title, description: content.routes.about.description },
    { canonicalPath: '/contact', title: content.routes.contact.title, description: content.routes.contact.description },
    { canonicalPath: '/privacy-policy', title: content.routes.privacy.title, description: content.routes.privacy.description },
    { canonicalPath: '/terms', title: content.routes.terms.title, description: content.routes.terms.description },
  ]
  for (const page of trustPages) {
    routes.push({
      path: localizedPath(page.canonicalPath, lang),
      canonicalPath: page.canonicalPath,
      title: page.title,
      description: page.description,
      priority: 0.5,
      lastmod: SITE_LAST_UPDATED,
      lang,
    })
  }

  return routes
}

/** Every route that gets prerendered to static HTML and listed in the sitemap: 16 pages × 7 languages. */
export const allRoutes: RouteMeta[] = languages.flatMap((l) => buildRoutesForLocale(l.id))

export const homeRoute: RouteMeta = allRoutes.find((r) => r.canonicalPath === '/' && r.lang === defaultLanguageId)!

export function findRouteMeta(path: string): RouteMeta | undefined {
  return allRoutes.find((route) => route.path === path)
}

/** All localized variants of the same page, grouped by its canonical (English) path, for hreflang. */
export function alternatesFor(canonicalPath: string): RouteMeta[] {
  return allRoutes.filter((r) => r.canonicalPath === canonicalPath)
}
