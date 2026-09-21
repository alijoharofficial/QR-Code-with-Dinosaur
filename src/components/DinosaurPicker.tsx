import { dinosaurs } from '../dinosaurs/data'
import { DinoIcon } from '../dinosaurs/DinoIcon'

interface DinosaurPickerProps {
  selectedId: string
  onSelect: (id: string) => void
}

export function DinosaurPicker({ selectedId, onSelect }: DinosaurPickerProps) {
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-text">
        Center dinosaur
      </legend>
      <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Center dinosaur">
        {dinosaurs.map((dino) => {
          const isSelected = dino.id === selectedId
          return (
            <button
              key={dino.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(dino.id)}
              title={dino.name}
              className={`group flex flex-col items-center gap-1.5 rounded-2xl border-2 p-2 transition-all active:scale-95 ${
                isSelected
                  ? 'border-accent bg-surface-muted shadow-soft'
                  : 'border-transparent bg-surface hover:border-border'
              }`}
            >
              <DinoIcon
                svg={dino.svg}
                className="block h-12 w-12 overflow-hidden rounded-full [&_svg]:h-full [&_svg]:w-full"
              />
              <span className="text-xs font-medium text-muted group-hover:text-text">
                {dino.name}
              </span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
