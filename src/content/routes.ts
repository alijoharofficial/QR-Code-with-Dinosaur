import { articles } from './articles'

export interface RouteMeta {
  path: string
  title: string
  description: string
  /** Sitemap priority, 0-1. */
  priority: number
  /** ISO date (YYYY-MM-DD) for sitemap <lastmod>. */
  lastmod: string
}

const SITE_LAST_UPDATED = '2026-09-28'

export const homeRoute: RouteMeta = {
  path: '/',
  title: 'QR Code Generator with a Dinosaur Logo | Custom & Free',
  description:
    'Make a free custom QR code with a dinosaur logo, animal icon, or your own image. Cute, scannable QR codes in seconds — no signup, works offline.',
  priority: 1.0,
  lastmod: SITE_LAST_UPDATED,
}

export const blogIndexRoute: RouteMeta = {
  path: '/blog',
  title: 'QR Code Guides & Tips | QR Code Generator Blog',
  description:
    'Practical, original guides on QR codes: adding a logo, restaurant menus, wedding invitations, static vs dynamic codes, and more — all free to read.',
  priority: 0.6,
  lastmod: SITE_LAST_UPDATED,
}

export const articleRoutes: RouteMeta[] = articles.map((article) => ({
  path: `/blog/${article.meta.slug}`,
  title: article.meta.title,
  description: article.meta.description,
  priority: 0.7,
  lastmod: article.meta.publishedDate,
}))

/** Every route that gets prerendered to static HTML and listed in the sitemap. */
export const allRoutes: RouteMeta[] = [homeRoute, blogIndexRoute, ...articleRoutes]

export function findRouteMeta(path: string): RouteMeta | undefined {
  return allRoutes.find((route) => route.path === path)
}
