import type { ChangeEvent, FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

interface UrlFormProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  error: string | null
}

export function UrlForm({ value, onChange, onSubmit, error }: UrlFormProps) {
  const { t } = useLanguage()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit()
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <label
        htmlFor="url-input"
        className="mb-2 block text-sm font-semibold text-text"
      >
        {t('urlLabel')}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="url-input"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder={t('urlPlaceholder')}
          value={value}
          onChange={handleChange}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'url-error' : 'url-hint'}
          className="w-full flex-1 rounded-xl border border-border bg-surface px-4 py-3.5 text-base text-text placeholder:text-muted/70 transition-colors focus:border-accent"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-contrast transition-all hover:bg-accent-hover active:scale-[0.98]"
        >
          {t('generate')}
        </button>
      </div>
      {error ? (
        <p id="url-error" role="alert" className="mt-2 text-sm text-rose-500">
          {error}
        </p>
      ) : (
        <p id="url-hint" className="mt-2 text-sm text-muted">
          {t('urlHint')}
        </p>
      )}
    </form>
  )
}
