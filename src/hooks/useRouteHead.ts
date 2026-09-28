import { useEffect } from 'react'
import { absoluteUrl } from '../content/site'
import type { RouteMeta } from '../content/routes'

function setMetaContent(selector: string, content: string) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

/**
 * Keeps document.title, the meta description, canonical link, and OG/Twitter
 * tags in sync when navigating between routes client-side (no full reload).
 * The prerendered HTML for each route already has correct values baked in
 * for crawlers; this only matters for in-app navigation after hydration.
 */
export function useRouteHead(route: RouteMeta) {
  useEffect(() => {
    document.title = route.title
    setMetaContent('meta[name="description"]', route.description)
    setMetaContent('meta[property="og:title"]', route.title)
    setMetaContent('meta[property="og:description"]', route.description)
    setMetaContent('meta[name="twitter:title"]', route.title)
    setMetaContent('meta[name="twitter:description"]', route.description)

    const url = absoluteUrl(route.path)
    setMetaContent('meta[property="og:url"]', url)
    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', url)
  }, [route])
}
