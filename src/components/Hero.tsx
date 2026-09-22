import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  return (
    <div className="mx-auto max-w-2xl px-4 pb-8 pt-2 text-center sm:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
        {t('heroTitlePrefix')}{' '}
        <span className="text-accent">{t('heroTitleAccent')}</span>
      </h1>
      <p className="mt-4 text-balance text-lg text-muted">{t('heroSubtitle')}</p>
    </div>
  )
}
