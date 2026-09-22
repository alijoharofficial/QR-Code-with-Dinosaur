import { useLanguage } from '../i18n/LanguageContext'
import { qrTypes } from '../lib/qrTypes'

interface QrTypePickerProps {
  selectedId: string
  onSelect: (id: string) => void
}

export function QrTypePicker({ selectedId, onSelect }: QrTypePickerProps) {
  const { t } = useLanguage()
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-text">
        {t('qrTypeLabel')}
      </legend>
      <div
        className="flex flex-wrap gap-2"
        role="radiogroup"
        aria-label={t('qrTypeLabel')}
      >
        {qrTypes.map((type) => {
          const isSelected = type.id === selectedId
          return (
            <button
              key={type.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(type.id)}
              className={`rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                isSelected
                  ? 'border-accent bg-surface-muted text-text'
                  : 'border-transparent bg-surface text-muted hover:border-border'
              }`}
            >
              {type.label}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
