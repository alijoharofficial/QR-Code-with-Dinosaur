import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { languages } from '../i18n/languages'

export function LanguageSwitcher() {
  const { languageId, setLanguageId, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('language')}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-accent hover:text-accent active:scale-95"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
        </svg>
      </button>
      {open ? (
        <div
          role="listbox"
          aria-label={t('language')}
          className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-soft"
        >
          {languages.map((lang) => {
            const isSelected = lang.id === languageId
            return (
              <button
                key={lang.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLanguageId(lang.id)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between px-3.5 py-2 text-left text-sm transition-colors ${
                  isSelected
                    ? 'bg-surface-muted font-semibold text-accent'
                    : 'text-text hover:bg-surface-muted'
                }`}
              >
                <span>{lang.nativeName}</span>
                <span className="text-xs text-muted">{lang.englishName}</span>
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
