import { useLanguage } from '../i18n/LanguageContext'
import type { QrField } from '../lib/qrTypes'

interface QrTypeFormProps {
  fields: QrField[]
  values: Record<string, string>
  onChange: (id: string, value: string) => void
}

export function QrTypeForm({ fields, values, onChange }: QrTypeFormProps) {
  const { t } = useLanguage()

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fields.map((field) => {
        const inputId = `qf-${field.id}`
        const span = field.half ? '' : 'sm:col-span-2'
        const value = values[field.id] ?? ''
        const label = t(field.labelKey)
        const placeholder = field.placeholderKey ? t(field.placeholderKey) : undefined

        if (field.type === 'checkbox') {
          return (
            <label
              key={field.id}
              htmlFor={inputId}
              className={`flex items-center gap-2 self-end pb-1 text-sm text-text ${span}`}
            >
              <input
                id={inputId}
                type="checkbox"
                checked={value === 'true'}
                onChange={(e) => onChange(field.id, e.target.checked ? 'true' : 'false')}
                className="h-4 w-4 rounded border-border"
              />
              {label}
            </label>
          )
        }

        return (
          <div key={field.id} className={span}>
            <label htmlFor={inputId} className="mb-1.5 block text-sm font-semibold text-text">
              {label}
              {field.required ? ' *' : ''}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={inputId}
                rows={3}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(field.id, e.target.value)}
                className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/70 transition-colors focus:border-accent"
              />
            ) : field.type === 'select' ? (
              <select
                id={inputId}
                value={value || field.options?.[0]?.value || ''}
                onChange={(e) => onChange(field.id, e.target.value)}
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text transition-colors focus:border-accent"
              >
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {t(opt.labelKey)}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={inputId}
                type={field.type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(field.id, e.target.value)}
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/70 transition-colors focus:border-accent"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
