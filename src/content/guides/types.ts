export interface GuideMeta {
  slug: string
  /** ~55-60 chars, used as the <title>. */
  title: string
  /** ~150-160 chars, used as <meta name="description">. */
  description: string
  h1: string
  /** Short teaser shown on the guides index card. */
  excerpt: string
  /** ISO date (YYYY-MM-DD), used for display and sitemap <lastmod>. */
  publishedDate: string
}
