import { useLanguage } from '../i18n/LanguageContext'
import { dotStyles } from '../lib/dotStyles'

interface StylePickerProps {
  selectedId: string
  onSelect: (id: string) => void
}

export function StylePicker({ selectedId, onSelect }: StylePickerProps) {
  const { t } = useLanguage()
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-text">
        {t('dotStyle')}
      </legend>
      <div
        className="flex flex-wrap gap-2"
        role="radiogroup"
        aria-label="Dot style"
      >
        {dotStyles.map((style) => {
          const isSelected = style.id === selectedId
          return (
            <button
              key={style.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(style.id)}
              className={`rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                isSelected
                  ? 'border-accent bg-surface-muted text-text'
                  : 'border-transparent bg-surface text-muted hover:border-border'
              }`}
            >
              {style.name}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
