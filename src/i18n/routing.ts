import { defaultLanguageId, languages } from './languages'

export const nonDefaultLocaleIds = languages
  .filter((l) => l.id !== defaultLanguageId)
  .map((l) => l.id)

/** The language implied by a pathname's first segment, defaulting to English. */
export function getLangFromPathname(pathname: string): string {
  const first = pathname.split('/')[1] ?? ''
  return nonDefaultLocaleIds.includes(first) ? first : defaultLanguageId
}

/** Removes a locale prefix from a pathname, if present, leaving the "canonical" (English) path. */
export function stripLocalePrefix(pathname: string): string {
  const lang = getLangFromPathname(pathname)
  if (lang === defaultLanguageId) return pathname
  const rest = pathname.slice(1 + lang.length)
  return rest === '' ? '/' : rest
}

/** Builds the URL for `path` (an unprefixed/English path) in the given language. */
export function localizedPath(path: string, lang: string): string {
  if (lang === defaultLanguageId) return path
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}
