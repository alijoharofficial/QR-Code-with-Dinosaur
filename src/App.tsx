import { useMemo, useState } from 'react'
import { ColorThemePicker } from './components/ColorThemePicker'
import { FaqSection } from './components/FaqSection'
import { Hero } from './components/Hero'
import { IconPicker } from './components/IconPicker'
import { QrPreview } from './components/QrPreview'
import { SiteHeader } from './components/SiteHeader'
import { StylePicker } from './components/StylePicker'
import { UrlForm } from './components/UrlForm'
import { useDebouncedValue } from './hooks/useDebouncedValue'
import { useTheme } from './hooks/useTheme'
import { defaultIconId, findIcon, toDataUri } from './icons/data'
import { colorThemes, defaultColorThemeId } from './lib/colorThemes'
import { defaultDotStyleId, dotStyles } from './lib/dotStyles'
import { normalizeUrl } from './lib/url'
import { useQrCode } from './lib/useQrCode'

const PLACEHOLDER_URL = 'https://qr-code-generator.app'

function App() {
  const { theme, toggleTheme } = useTheme()

  const [rawInput, setRawInput] = useState('')
  const [iconId, setIconId] = useState(defaultIconId)
  const [customLogo, setCustomLogo] = useState<string | null>(null)
  const [themeId, setThemeId] = useState(defaultColorThemeId)
  const [styleId, setStyleId] = useState(defaultDotStyleId)

  const debouncedInput = useDebouncedValue(rawInput, 400)

  const errorMessage = useMemo(() => {
    const trimmed = debouncedInput.trim()
    if (!trimmed) return null
    const result = normalizeUrl(debouncedInput)
    return !result.ok && result.reason === 'invalid'
      ? 'Enter a valid URL, like example.com'
      : null
  }, [debouncedInput])

  // The QR value only advances when the (debounced) input resolves to a
  // valid URL, so an in-progress invalid edit never blanks the preview.
  // This mirrors React's "adjust state during render" pattern instead of
  // an effect, since we need to conditionally skip the update.
  const [committedInput, setCommittedInput] = useState(debouncedInput)
  const [qrValue, setQrValue] = useState(PLACEHOLDER_URL)
  if (debouncedInput !== committedInput) {
    setCommittedInput(debouncedInput)
    const trimmed = debouncedInput.trim()
    if (!trimmed) {
      setQrValue(PLACEHOLDER_URL)
    } else {
      const result = normalizeUrl(debouncedInput)
      if (result.ok) setQrValue(result.url)
    }
  }

  const handleGenerate = () => {
    const result = normalizeUrl(rawInput)
    if (result.ok) {
      setCommittedInput(debouncedInput)
      setQrValue(result.url)
    }
  }

  const handleSelectIcon = (id: string) => {
    setIconId(id)
    setCustomLogo(null)
  }

  const icon = findIcon(iconId)
  const colorTheme =
    colorThemes.find((t) => t.id === themeId) ?? colorThemes[0]
  const dotStyle = dotStyles.find((s) => s.id === styleId) ?? dotStyles[0]
  const image = customLogo ?? toDataUri(icon?.svg ?? '')

  const { containerRef, qrRef } = useQrCode({
    data: qrValue,
    image,
    colorTheme,
    dotStyle,
  })

  const isPlaceholder = !rawInput.trim()

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />

        <section className="mx-auto grid w-full max-w-5xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-12">
          <div className="flex flex-col gap-8 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <UrlForm
              value={rawInput}
              onChange={setRawInput}
              onSubmit={handleGenerate}
              error={errorMessage}
            />
            <IconPicker
              selectedId={iconId}
              isCustom={customLogo !== null}
              customPreview={customLogo}
              onSelect={handleSelectIcon}
              onUpload={setCustomLogo}
            />
            <StylePicker selectedId={styleId} onSelect={setStyleId} />
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

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        Made with 🦖 &middot; QR Code Generator runs entirely in your browser
      </footer>
    </div>
  )
}

export default App
