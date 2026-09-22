import { useState } from 'react'
import type QRCodeStyling from 'qr-code-styling'
import { useLanguage } from '../i18n/LanguageContext'

interface QrPreviewProps {
  containerRef: React.RefObject<HTMLDivElement | null>
  qrRef: React.RefObject<QRCodeStyling | null>
  displayUrl: string
  isPlaceholder: boolean
}

type CopyState = 'idle' | 'copied' | 'error'

export function QrPreview({
  containerRef,
  qrRef,
  displayUrl,
  isPlaceholder,
}: QrPreviewProps) {
  const { t } = useLanguage()
  const [copyState, setCopyState] = useState<CopyState>('idle')

  const handleDownload = (extension: 'png' | 'svg') => {
    qrRef.current?.download({ name: 'qr-code', extension })
  }

  const handleCopy = async () => {
    try {
      const blob = await qrRef.current?.getRawData('png')
      if (!blob || !(blob instanceof Blob)) throw new Error('No image data')
      if (!navigator.clipboard || !window.ClipboardItem) {
        throw new Error('Clipboard API unavailable')
      }
      await navigator.clipboard.write([
        new window.ClipboardItem({ 'image/png': blob }),
      ])
      setCopyState('copied')
    } catch {
      setCopyState('error')
    } finally {
      setTimeout(() => setCopyState('idle'), 2000)
    }
  }

  return (
    <div className="qr-fade-in flex w-full flex-col items-center rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
      <div className="relative flex items-center justify-center rounded-2xl bg-white p-4 shadow-inner">
        <div ref={containerRef} className="[&_svg]:block" />
      </div>

      <p className="mt-4 max-w-full truncate text-sm text-muted" title={displayUrl}>
        {isPlaceholder ? (
          <span className="italic">
            {t('samplePreview')} {displayUrl}
          </span>
        ) : (
          displayUrl
        )}
      </p>

      <div className="mt-5 flex w-full flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => handleDownload('png')}
          className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-all hover:bg-accent-hover active:scale-[0.97]"
        >
          {t('downloadPng')}
        </button>
        <button
          type="button"
          onClick={() => handleDownload('svg')}
          className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition-all hover:border-accent hover:text-accent active:scale-[0.97]"
        >
          {t('downloadSvg')}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition-all hover:border-accent hover:text-accent active:scale-[0.97]"
        >
          {copyState === 'copied'
            ? t('copied')
            : copyState === 'error'
              ? t('copyFailed')
              : t('copyImage')}
        </button>
      </div>
    </div>
  )
}
