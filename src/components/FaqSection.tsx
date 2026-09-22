import { useLanguage } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

const faqKeys: { q: TranslationKey; a: TranslationKey }[] = [
  { q: 'faq1q', a: 'faq1a' },
  { q: 'faq2q', a: 'faq2a' },
  { q: 'faq3q', a: 'faq3a' },
  { q: 'faq4q', a: 'faq4a' },
]

export function FaqSection() {
  const { t } = useLanguage()
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-center text-2xl font-bold text-text">
        {t('howItWorks')}
      </h2>
      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        {faqKeys.map(({ q, a }) => (
          <div key={q} className="rounded-2xl border border-border bg-surface p-5">
            <dt className="font-semibold text-text">{t(q)}</dt>
            <dd className="mt-1.5 text-sm text-muted">{t(a)}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
