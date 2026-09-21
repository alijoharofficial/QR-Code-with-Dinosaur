import { colorThemes } from '../lib/colorThemes'

interface ColorThemePickerProps {
  selectedId: string
  onSelect: (id: string) => void
}

export function ColorThemePicker({
  selectedId,
  onSelect,
}: ColorThemePickerProps) {
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-text">
        Color theme
      </legend>
      <div
        className="flex flex-wrap gap-3"
        role="radiogroup"
        aria-label="Color theme"
      >
        {colorThemes.map((themeOption) => {
          const isSelected = themeOption.id === selectedId
          return (
            <button
              key={themeOption.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(themeOption.id)}
              title={themeOption.name}
              aria-label={themeOption.name}
              className={`h-9 w-9 rounded-full border-2 transition-all active:scale-90 ${
                isSelected
                  ? 'border-accent ring-2 ring-accent/30'
                  : 'border-surface hover:border-border'
              }`}
              style={{
                background: themeOption.swatch,
                boxShadow: '0 0 0 1px var(--app-border)',
              }}
            />
          )
        })}
      </div>
    </fieldset>
  )
}
