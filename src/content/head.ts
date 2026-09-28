import { absoluteUrl, OG_IMAGE_HEIGHT, OG_IMAGE_URL, OG_IMAGE_WIDTH, SITE_NAME } from './site'
import { buildBreadcrumbLd, buildFaqPageLd, buildSoftwareApplicationLd } from './structuredData'
import type { BreadcrumbEntry } from './structuredData'
import type { FaqItem } from './faq'
import type { RouteMeta } from './routes'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function jsonLdScript(data: unknown): string {
  // JSON.stringify never emits raw '<', so escaping '/' after '<' is enough
  // to make a `</script>` inside string content harmless.
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">${json}</script>`
}

export interface HeadOptions {
  route: RouteMeta
  /** Include SoftwareApplication JSON-LD (the homepage and every tool page). */
  softwareApplication?: { name?: string; description?: string }
  /** On-page FAQ items to also emit as matching FAQPage JSON-LD. */
  faqItems?: FaqItem[]
  /** Breadcrumb trail for BreadcrumbList JSON-LD (guide pages). */
  breadcrumbs?: BreadcrumbEntry[]
}

export function buildHeadHtml({ route, softwareApplication, faqItems, breadcrumbs }: HeadOptions): string {
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)
  const url = absoluteUrl(route.path)

  const parts: string[] = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE_URL}" />`,
    `<meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />`,
    `<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE_URL}" />`,
  ]

  if (softwareApplication) {
    parts.push(
      jsonLdScript(
        buildSoftwareApplicationLd({
          path: route.path,
          name: softwareApplication.name,
          description: softwareApplication.description,
        }),
      ),
    )
  }

  if (faqItems && faqItems.length > 0) {
    parts.push(jsonLdScript(buildFaqPageLd(faqItems)))
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    parts.push(jsonLdScript(buildBreadcrumbLd(breadcrumbs)))
  }

  return parts.join('\n    ')
}
