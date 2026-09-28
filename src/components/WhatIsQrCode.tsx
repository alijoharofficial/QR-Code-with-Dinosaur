import { qrTypes } from '../lib/qrTypes'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * A short explainer, not a full section: just enough for a visitor who
 * lands on the tool without knowing what a QR code actually is.
 */
export function WhatIsQrCode() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto mb-8 w-full max-w-3xl px-4 sm:px-6">
      <div className="flex gap-4 rounded-2xl border-l-4 border-accent bg-surface-muted/60 p-5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="mt-0.5 h-6 w-6 shrink-0 text-accent"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 0 1 4.9.8c0 1.7-2.4 2-2.4 3.7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
        </svg>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-text">What is a QR code?</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            A QR (Quick Response) code is a small square pattern that stores data a
            camera can read in an instant, no app or typing needed. Point a phone
            camera at one and it decodes straight to the link, WiFi network, or
            contact card packed inside it.
          </p>
          <p className="mt-2.5 text-xs font-semibold uppercase tracking-wide text-muted/80">
            This generator supports
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {qrTypes.map((type) => (
              <span
                key={type.id}
                className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-text"
              >
                {t(type.labelKey)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
