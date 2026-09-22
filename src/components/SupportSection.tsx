import { useLanguage } from '../i18n/LanguageContext'
import { findIcon, toDataUri } from '../icons/data'
import { colorThemes } from '../lib/colorThemes'
import { dotStyles } from '../lib/dotStyles'
import { qrShapes } from '../lib/qrShapes'
import { useQrCode } from '../lib/useQrCode'

const SUPPORT_EMAIL = 'info@qrcodegenerator.us'
const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Support request')}`

export function SupportSection() {
  const { t } = useLanguage()

  const icon = findIcon('monkey')
  const colorTheme = colorThemes.find((c) => c.id === 'dino-green') ?? colorThemes[0]
  const dotStyle = dotStyles.find((s) => s.id === 'rounded') ?? dotStyles[0]
  const qrShape = qrShapes.find((s) => s.id === 'square') ?? qrShapes[0]

  const { containerRef } = useQrCode({
    data: SUPPORT_MAILTO,
    image: toDataUri(icon?.svg ?? ''),
    colorTheme,
    dotStyle,
    qrShape,
    size: 200,
  })

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-emerald-700 px-6 py-10 shadow-soft sm:px-12 sm:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/5"
        />
        <div className="relative flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left">
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {t('supportHeading')}
            </h2>
            <p className="mt-3 max-w-md text-balance text-emerald-50/90">
              {t('supportSubtitle')}
            </p>
            <a
              href={SUPPORT_MAILTO}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition-all hover:bg-emerald-50 active:scale-[0.97]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {t('supportEmailButton')}
            </a>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-2">
            <div className="rounded-2xl bg-white p-3 shadow-lg">
              <div ref={containerRef} className="[&_svg]:block" />
            </div>
            <span className="text-xs font-medium text-emerald-50/80">
              {t('supportScanHint')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
