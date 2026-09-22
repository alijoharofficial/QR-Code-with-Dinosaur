import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { defaultLanguageId, languages } from './languages'
import { translations, type TranslationKey } from './translations'

const STORAGE_KEY = 'qr-dino-language'

interface LanguageContextValue {
  languageId: string
  setLanguageId: (id: string) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLanguage(): string | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored && languages.some((l) => l.id === stored) ? stored : null
  } catch {
    return null
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [languageId, setLanguageIdState] = useState(
    () => readStoredLanguage() ?? defaultLanguageId,
  )

  useEffect(() => {
    const lang = languages.find((l) => l.id === languageId)
    document.documentElement.setAttribute('lang', languageId)
    document.documentElement.setAttribute('dir', lang?.rtl ? 'rtl' : 'ltr')
  }, [languageId])

  const setLanguageId = (id: string) => {
    setLanguageIdState(id)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      // ignore write failures (private browsing, storage disabled, etc.)
    }
  }

  const value = useMemo<LanguageContextValue>(() => {
    const dict = translations[languageId] ?? translations[defaultLanguageId]
    return {
      languageId,
      setLanguageId,
      t: (key: TranslationKey) => dict[key] ?? translations[defaultLanguageId][key],
    }
  }, [languageId])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
