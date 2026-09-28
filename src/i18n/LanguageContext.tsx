import { createContext, useContext, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { languages } from './languages'
import { translations, type TranslationKey } from './translations'
import { getLangFromPathname, localizedPath, stripLocalePrefix } from './routing'
import { getContent } from '../content/registry'
import type { PageContent } from '../content/pageContent'

const STORAGE_KEY = 'qr-dino-language'

interface LanguageContextValue {
  languageId: string
  setLanguageId: (id: string) => void
  t: (key: TranslationKey) => string
  content: PageContent
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * The URL is the source of truth for the active language (each language has
 * its own crawlable path, e.g. /es/about), not client state, so the server
 * render and the first client render always agree. Switching languages
 * navigates to the equivalent URL under the new locale prefix instead of
 * just flipping an internal flag.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const languageId = getLangFromPathname(location.pathname)

  useEffect(() => {
    const lang = languages.find((l) => l.id === languageId)
    document.documentElement.setAttribute('lang', languageId)
    document.documentElement.setAttribute('dir', lang?.rtl ? 'rtl' : 'ltr')
  }, [languageId])

  const setLanguageId = (id: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      // ignore write failures (private browsing, storage disabled, etc.)
    }
    const unprefixed = stripLocalePrefix(location.pathname)
    navigate(`${localizedPath(unprefixed, id)}${location.hash}`)
  }

  const value = useMemo<LanguageContextValue>(() => {
    const dict = translations[languageId] ?? translations.en
    return {
      languageId,
      setLanguageId,
      t: (key: TranslationKey) => dict[key] ?? translations.en[key],
      content: getContent(languageId),
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageId, location.pathname, location.hash])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

export { languages }
