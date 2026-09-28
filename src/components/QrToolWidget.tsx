import { useMemo, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { defaultIconId, findIcon, toDataUri } from '../icons/data'
import { colorThemes, defaultColorThemeId } from '../lib/colorThemes'
import { defaultDotStyleId, dotStyles } from '../lib/dotStyles'
import { defaultQrShapeId, qrShapes } from '../lib/qrShapes'
import { defaultQrTypeId, findQrType } from '../lib/qrTypes'
import { normalizeUrl } from '../lib/url'
import { useQrCode } from '../lib/useQrCode'
import { useDebouncedValue } from '../hooks/useDebouncedValue'
import { ColorThemePicker } from './ColorThemePicker'
import { IconPicker } from './IconPicker'
import { QrPreview } from './QrPreview'
import { QrShapePicker } from './QrShapePicker'
import { QrTypeForm } from './QrTypeForm'
import { QrTypePicker } from './QrTypePicker'
import { StylePicker } from './StylePicker'
import { UrlForm } from './UrlForm'

export interface QrToolWidgetProps {
  /** Defaults the tool to a QR type other than "url" (e.g. "wifi"). */
  initialQrTypeId?: string
  /** Defaults the selected center icon (e.g. a themed page opens with a
   * specific icon already picked, rather than the site-wide default). */
  initialIconId?: string
  /** Which icon category tab is open initially, so the preselected icon is
   * visible without the visitor needing to switch tabs. */
  initialIconCategoryId?: string
}

/**
 * The interactive QR generator itself: type picker, fields, icon/style/
 * shape/color pickers, and the live preview. Used on the homepage and every
 * themed tool-variant/use-case page with different initial presets; the
 * generator is otherwise identical and fully client-side after hydration.
 */
export function QrToolWidget({
  initialQrTypeId = defaultQrTypeId,
  initialIconId = defaultIconId,
  initialIconCategoryId,
}: QrToolWidgetProps) {
  const { t } = useLanguage()

  const [qrTypeId, setQrTypeId] = useState(initialQrTypeId)
  const [rawInput, setRawInput] = useState('')
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({})
  const [iconId, setIconId] = useState(initialIconId)
  const [customLogo, setCustomLogo] = useState<string | null>(null)
  const [themeId, setThemeId] = useState(defaultColorThemeId)
  const [styleId, setStyleId] = useState(defaultDotStyleId)
  const [qrShapeId, setQrShapeId] = useState(defaultQrShapeId)

  const isUrlType = qrTypeId === 'url'
  const debouncedInput = useDebouncedValue(rawInput, 400)
  const debouncedFieldValues = useDebouncedValue(fieldValues, 400)

  const errorMessage = useMemo(() => {
    if (!isUrlType) return null
    const trimmed = debouncedInput.trim()
    if (!trimmed) return null
    const result = normalizeUrl(debouncedInput)
    return !result.ok && result.reason === 'invalid' ? t('urlError') : null
  }, [isUrlType, debouncedInput, t])

  // The QR value only advances when the (debounced) input resolves to a
  // valid URL, so an in-progress invalid edit never blanks the preview.
  // This mirrors React's "adjust state during render" pattern instead of
  // an effect, since we need to conditionally skip the update.
  const [committedInput, setCommittedInput] = useState(debouncedInput)
  const [qrValue, setQrValue] = useState(findQrType(initialQrTypeId).samplePlaceholder)
  if (isUrlType && debouncedInput !== committedInput) {
    setCommittedInput(debouncedInput)
    const trimmed = debouncedInput.trim()
    if (!trimmed) {
      setQrValue(findQrType(qrTypeId).samplePlaceholder)
    } else {
      const result = normalizeUrl(debouncedInput)
      if (result.ok) setQrValue(result.url)
    }
  }

  const builtValue = useMemo(() => {
    if (isUrlType) return null
    return findQrType(qrTypeId).build(debouncedFieldValues)
  }, [isUrlType, qrTypeId, debouncedFieldValues])

  const [committedFieldValues, setCommittedFieldValues] = useState(debouncedFieldValues)
  if (!isUrlType && debouncedFieldValues !== committedFieldValues) {
    setCommittedFieldValues(debouncedFieldValues)
    setQrValue(builtValue || findQrType(qrTypeId).samplePlaceholder)
  }

  const handleGenerate = () => {
    const result = normalizeUrl(rawInput)
    if (result.ok) {
      setCommittedInput(debouncedInput)
      setQrValue(result.url)
    }
  }

  const handleSelectQrType = (id: string) => {
    setQrTypeId(id)
    setRawInput('')
    setFieldValues({})
    setCommittedInput('')
    setCommittedFieldValues({})
    setQrValue(findQrType(id).samplePlaceholder)
  }

  const handleFieldChange = (id: string, value: string) => {
    setFieldValues((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectIcon = (id: string) => {
    setIconId(id)
    setCustomLogo(null)
  }

  const icon = findIcon(iconId)
  const colorTheme = colorThemes.find((c) => c.id === themeId) ?? colorThemes[0]
  const dotStyle = dotStyles.find((s) => s.id === styleId) ?? dotStyles[0]
  const qrShape = qrShapes.find((s) => s.id === qrShapeId) ?? qrShapes[0]
  const image = customLogo ?? toDataUri(icon?.svg ?? '')

  const { containerRef, qrRef } = useQrCode({
    data: qrValue,
    image,
    colorTheme,
    dotStyle,
    qrShape,
  })

  const isPlaceholder = isUrlType ? !rawInput.trim() : !builtValue

  return (
    <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
      <div className="flex flex-col gap-8 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
        <QrTypePicker selectedId={qrTypeId} onSelect={handleSelectQrType} />
        {isUrlType ? (
          <UrlForm
            value={rawInput}
            onChange={setRawInput}
            onSubmit={handleGenerate}
            error={errorMessage}
          />
        ) : (
          <QrTypeForm
            fields={findQrType(qrTypeId).fields}
            values={fieldValues}
            onChange={handleFieldChange}
          />
        )}
        <IconPicker
          selectedId={iconId}
          isCustom={customLogo !== null}
          customPreview={customLogo}
          onSelect={handleSelectIcon}
          onUpload={setCustomLogo}
          initialCategoryId={initialIconCategoryId}
        />
        <StylePicker selectedId={styleId} onSelect={setStyleId} />
        <QrShapePicker selectedId={qrShapeId} onSelect={setQrShapeId} />
        <ColorThemePicker selectedId={themeId} onSelect={setThemeId} />
      </div>

      <QrPreview
        containerRef={containerRef}
        qrRef={qrRef}
        displayUrl={qrValue}
        isPlaceholder={isPlaceholder}
      />
    </section>
  )
}
