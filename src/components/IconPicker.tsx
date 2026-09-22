import { useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { iconCategories } from '../icons/data'
import { IconGlyph } from '../icons/IconGlyph'

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024 // 5 MB

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
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(iconCategories[0].id)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFile = (file: File) => {
    // Defense in depth: the `accept="image/*"` on the file input is only a
    // picker hint and is trivially bypassed (drag-and-drop, renamed files),
    // so re-validate the actual file here before it's read into memory and
    // handed to the QR renderer. Everything stays local to the browser —
    // nothing is uploaded to a server — this just guards against an
    // oversized or non-image file wedging the tab.
    if (!file.type.startsWith('image/')) {
      setUploadError(t('uploadErrorType'))
      return
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      setUploadError(t('uploadErrorSize'))
      return
    }
    setUploadError(null)
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') onUpload(reader.result)
    }
    reader.onerror = () => setUploadError(t('uploadErrorType'))
    reader.readAsDataURL(file)
  }

  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-text">
        {t('centerIcon')}
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
            {t(cat.labelKey)}
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
          {t('uploadLogo')}
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
              e.target.value = ''
            }}
          />
          <span className="text-sm text-muted">
            {uploadError ?? t('uploadHint')}
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
              const label = icon.nameKey ? t(icon.nameKey) : icon.name
              return (
                <button
                  key={icon.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => onSelect(icon.id)}
                  title={label}
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
                    {label}
                  </span>
                </button>
              )
            })}
        </div>
      )}
    </fieldset>
  )
}
