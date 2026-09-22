import { useMemo, useState } from 'react'
import { BrandMark } from './components/BrandMark'
import { ColorThemePicker } from './components/ColorThemePicker'
import { FaqSection } from './components/FaqSection'
import { Hero } from './components/Hero'
import { IconPicker } from './components/IconPicker'
import { QrPreview } from './components/QrPreview'
import { QrShapePicker } from './components/QrShapePicker'
import { QrTypeForm } from './components/QrTypeForm'
import { QrTypePicker } from './components/QrTypePicker'
import { SiteHeader } from './components/SiteHeader'
import { StylePicker } from './components/StylePicker'
import { UrlForm } from './components/UrlForm'
import { useDebouncedValue } from './hooks/useDebouncedValue'
import { useTheme } from './hooks/useTheme'
import { useLanguage } from './i18n/LanguageContext'
import { defaultIconId, findIcon, toDataUri } from './icons/data'
import { colorThemes, defaultColorThemeId } from './lib/colorThemes'
import { defaultDotStyleId, dotStyles } from './lib/dotStyles'
import { defaultQrShapeId, qrShapes } from './lib/qrShapes'
import { defaultQrTypeId, findQrType } from './lib/qrTypes'
import { normalizeUrl } from './lib/url'
import { useQrCode } from './lib/useQrCode'

const PLACEHOLDER_URL = 'https://qr-code-generator.app'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  const [qrTypeId, setQrTypeId] = useState(defaultQrTypeId)
  const [rawInput, setRawInput] = useState('')
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({})
  const [iconId, setIconId] = useState(defaultIconId)
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
  const [qrValue, setQrValue] = useState(PLACEHOLDER_URL)
  if (isUrlType && debouncedInput !== committedInput) {
    setCommittedInput(debouncedInput)
    const trimmed = debouncedInput.trim()
    if (!trimmed) {
      setQrValue(PLACEHOLDER_URL)
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
    setQrValue(builtValue || PLACEHOLDER_URL)
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
    setQrValue(PLACEHOLDER_URL)
  }

  const handleFieldChange = (id: string, value: string) => {
    setFieldValues((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectIcon = (id: string) => {
    setIconId(id)
    setCustomLogo(null)
  }

  const icon = findIcon(iconId)
  const colorTheme =
    colorThemes.find((t) => t.id === themeId) ?? colorThemes[0]
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
    <div id="top" className="min-h-screen">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />

        <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-12">
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

        <FaqSection />
      </main>

      <footer className="flex items-center justify-center gap-2 border-t border-border py-8 text-center text-sm text-muted">
        <BrandMark className="h-4 w-4" animated={false} />
        {t('appTagline')}
      </footer>
    </div>
  )
}

export default App
