import { useRef, useState } from 'react'
import { iconCategories } from '../icons/data'
import { IconGlyph } from '../icons/IconGlyph'

interface IconPickerProps {
  selectedId: string
  isCustom: boolean
  customPreview: string | null
  onSelect: (id: string) => void
  onUpload: (dataUrl: string) => void
}

export function IconPicker({
  selectedId,
  isCustom,
  customPreview,
  onSelect,
  onUpload,
}: IconPickerProps) {
  const [activeCategory, setActiveCategory] = useState(iconCategories[0].id)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') onUpload(reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-text">
        Center icon
      </legend>
      <div className="mb-3 flex gap-2">
        {iconCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              activeCategory === cat.id
                ? 'bg-accent text-accent-contrast'
                : 'bg-surface-muted text-muted hover:text-text'
            }`}
          >
            {cat.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setActiveCategory('upload')}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            activeCategory === 'upload'
              ? 'bg-accent text-accent-contrast'
              : 'bg-surface-muted text-muted hover:text-text'
          }`}
        >
          Upload logo
        </button>
      </div>

      {activeCategory === 'upload' ? (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border-2 text-xs text-muted ${
              isCustom ? 'border-accent' : 'border-dashed border-border'
            }`}
          >
            {customPreview ? (
              <img
                src={customPreview}
                alt="Uploaded logo preview"
                className="h-full w-full object-contain"
              />
            ) : (
              '+'
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleFile(file)
            }}
          />
          <span className="text-sm text-muted">
            PNG, JPG, or SVG. Used in place of a preset icon.
          </span>
        </div>
      ) : (
        <div
          className="flex flex-wrap gap-3"
          role="radiogroup"
          aria-label="Center icon"
        >
          {iconCategories
            .find((c) => c.id === activeCategory)!
            .icons.map((icon) => {
              const isSelected = !isCustom && icon.id === selectedId
              return (
                <button
                  key={icon.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => onSelect(icon.id)}
                  title={icon.name}
                  className={`group flex flex-col items-center gap-1.5 rounded-2xl border-2 p-2 transition-all active:scale-95 ${
                    isSelected
                      ? 'border-accent bg-surface-muted shadow-soft'
                      : 'border-transparent bg-surface hover:border-border'
                  }`}
                >
                  <IconGlyph
                    svg={icon.svg}
                    className="block h-12 w-12 overflow-hidden rounded-full [&_svg]:h-full [&_svg]:w-full"
                  />
                  <span className="text-xs font-medium text-muted group-hover:text-text">
                    {icon.name}
                  </span>
                </button>
              )
            })}
        </div>
      )}
    </fieldset>
  )
}
