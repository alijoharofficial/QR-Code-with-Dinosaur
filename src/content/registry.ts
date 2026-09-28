import { defaultLanguageId } from '../i18n/languages'
import type { GuideCopy, PageContent, ToolPageCopy } from './pageContent'
import { content as en } from './locales/en'
import { content as zh } from './locales/zh'
import { content as es } from './locales/es'
import { content as ar } from './locales/ar'
import { content as fr } from './locales/fr'
import { content as pt } from './locales/pt'
import { content as de } from './locales/de'

const registry: Record<string, PageContent> = { en, zh, es, ar, fr, pt, de }

export function getContent(lang: string): PageContent {
  return registry[lang] ?? registry[defaultLanguageId]
}

/** Locale-independent identity of each tool-variant page: its URL path,
 * the QrToolWidget preset it opens with, and which guides it links to.
 * The translatable copy lives in PageContent.toolPages, keyed the same way. */
export interface ToolPageConfig {
  id: keyof PageContent['toolPages']
  path: string
  preset: {
    initialQrTypeId?: string
    initialIconId?: string
    initialIconCategoryId?: string
  }
  relatedGuideSlugs: string[]
}

export const toolPageConfigs: ToolPageConfig[] = [
  {
    id: 'dinosaur',
    path: '/qr-code-with-dinosaur',
    preset: { initialIconId: 'dyno', initialIconCategoryId: 'animals' },
    relatedGuideSlugs: ['how-to-make-qr-with-logo', 'do-qr-codes-expire'],
  },
  {
    id: 'logo',
    path: '/qr-code-with-logo',
    preset: { initialIconCategoryId: 'upload' },
    relatedGuideSlugs: ['how-to-make-qr-with-logo', 'qr-codes-for-small-business'],
  },
  {
    id: 'custom',
    path: '/custom-qr-code',
    preset: {},
    relatedGuideSlugs: ['static-vs-dynamic-qr-codes', 'do-qr-codes-expire'],
  },
  {
    id: 'menu',
    path: '/qr-code-for-menu',
    preset: { initialIconId: 'menu', initialIconCategoryId: 'actions' },
    relatedGuideSlugs: ['qr-codes-for-small-business', 'static-vs-dynamic-qr-codes'],
  },
  {
    id: 'wifi',
    path: '/qr-code-for-wifi',
    preset: { initialQrTypeId: 'wifi' },
    relatedGuideSlugs: ['qr-codes-for-small-business', 'do-qr-codes-expire'],
  },
]

export function findToolPageConfig(path: string): ToolPageConfig | undefined {
  return toolPageConfigs.find((c) => c.path === path)
}

export function getToolPageCopy(lang: string, id: keyof PageContent['toolPages']): ToolPageCopy {
  return getContent(lang).toolPages[id]
}

/** Guide slugs are shared across every locale (URLs aren't translated),
 * mapped to the PageContent.guides key holding that guide's copy. */
export const guideSlugs: { slug: string; key: keyof PageContent['guides']; publishedDate: string }[] = [
  { slug: 'how-to-make-qr-with-logo', key: 'logo', publishedDate: '2026-09-28' },
  { slug: 'static-vs-dynamic-qr-codes', key: 'staticVsDynamic', publishedDate: '2026-09-28' },
  { slug: 'do-qr-codes-expire', key: 'doQrCodesExpire', publishedDate: '2026-09-28' },
  { slug: 'qr-codes-for-small-business', key: 'smallBusiness', publishedDate: '2026-09-28' },
]

export interface LocalizedGuide {
  slug: string
  publishedDate: string
  copy: GuideCopy
}

export function getGuides(lang: string): LocalizedGuide[] {
  const localeContent = getContent(lang)
  return guideSlugs.map(({ slug, key, publishedDate }) => ({
    slug,
    publishedDate,
    copy: localeContent.guides[key],
  }))
}

export function findGuide(lang: string, slug: string): LocalizedGuide | undefined {
  return getGuides(lang).find((g) => g.slug === slug)
}
