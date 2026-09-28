import { absoluteUrl, SITE_NAME } from './site'
import type { FaqItem } from './faq'

export function buildSoftwareApplicationLd(options?: {
  path?: string
  name?: string
  description?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: options?.name ?? SITE_NAME,
    url: absoluteUrl(options?.path ?? '/'),
    description:
      options?.description ??
      'Free QR code generator with cute animal icons, including a dinosaur, monkey, and tiger, or your own logo. Customize colors, dot style, and shape, then download as PNG or SVG. Runs entirely in your browser, no signup required.',
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

export function buildFaqPageLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export interface BreadcrumbEntry {
  name: string
  path: string
}

export function buildBreadcrumbLd(entries: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: absoluteUrl(entry.path),
    })),
  }
}
