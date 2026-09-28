import { guides } from './guides'
import { toolPages } from './toolPages'

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

/** The 5 tool-variant / use-case pages that embed the QR generator itself. */
export const toolRoutes: RouteMeta[] = toolPages.map((page) => ({
  path: page.path,
  title: page.title,
  description: page.description,
  priority: 0.8,
  lastmod: SITE_LAST_UPDATED,
}))

export const guidesIndexRoute: RouteMeta = {
  path: '/guides',
  title: 'QR Code Guides & Tips | QR Code Generator',
  description:
    'Practical, original guides on QR codes: adding a logo, static vs dynamic codes, whether they expire, and QR codes for small business — all free to read.',
  priority: 0.7,
  lastmod: SITE_LAST_UPDATED,
}

export const guideRoutes: RouteMeta[] = guides.map((guide) => ({
  path: `/guides/${guide.meta.slug}`,
  title: guide.meta.title,
  description: guide.meta.description,
  priority: 0.7,
  lastmod: guide.meta.publishedDate,
}))

/** Trust / company pages. */
export const servicesRoute: RouteMeta = {
  path: '/services',
  title: 'Services | QR Code Generator',
  description:
    'Need more than a QR code? See the web, branding, and marketing services offered by TECH24, the team behind this free QR code generator.',
  priority: 0.5,
  lastmod: SITE_LAST_UPDATED,
}

export const aboutRoute: RouteMeta = {
  path: '/about',
  title: 'About | QR Code Generator',
  description:
    'About this free QR code generator: what it does, how it protects your data, and who built and maintains it.',
  priority: 0.5,
  lastmod: SITE_LAST_UPDATED,
}

export const contactRoute: RouteMeta = {
  path: '/contact',
  title: 'Contact | QR Code Generator',
  description:
    'Get in touch about this free QR code generator — questions, feedback, or bug reports welcome.',
  priority: 0.5,
  lastmod: SITE_LAST_UPDATED,
}

export const privacyRoute: RouteMeta = {
  path: '/privacy-policy',
  title: 'Privacy Policy | QR Code Generator',
  description:
    'How this QR code generator handles your data: what stays in your browser, what analytics are used, and what is never collected.',
  priority: 0.5,
  lastmod: SITE_LAST_UPDATED,
}

export const termsRoute: RouteMeta = {
  path: '/terms',
  title: 'Terms of Use | QR Code Generator',
  description:
    'The terms for using this free QR code generator, including what it does, what it does not guarantee, and how it may be used.',
  priority: 0.5,
  lastmod: SITE_LAST_UPDATED,
}

export const trustRoutes: RouteMeta[] = [
  servicesRoute,
  aboutRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
]

/** Every route that gets prerendered to static HTML and listed in the sitemap. */
export const allRoutes: RouteMeta[] = [
  homeRoute,
  ...toolRoutes,
  guidesIndexRoute,
  ...guideRoutes,
  ...trustRoutes,
]

export function findRouteMeta(path: string): RouteMeta | undefined {
  return allRoutes.find((route) => route.path === path)
}
