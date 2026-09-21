import { qrShapes } from '../lib/qrShapes'

interface QrShapePickerProps {
  selectedId: string
  onSelect: (id: string) => void
}

export function QrShapePicker({ selectedId, onSelect }: QrShapePickerProps) {
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-text">
        QR shape
      </legend>
      <div
        className="flex flex-wrap gap-2"
        role="radiogroup"
        aria-label="QR shape"
      >
        {qrShapes.map((shape) => {
          const isSelected = shape.id === selectedId
          return (
            <button
              key={shape.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(shape.id)}
              className={`rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                isSelected
                  ? 'border-accent bg-surface-muted text-text'
                  : 'border-transparent bg-surface text-muted hover:border-border'
              }`}
            >
              {shape.name}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
