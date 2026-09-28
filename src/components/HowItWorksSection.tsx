import { useLanguage } from '../i18n/LanguageContext'

export function HowItWorksSection() {
  const { t, content } = useLanguage()

  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6"
      aria-labelledby="how-it-works-heading"
    >
      <div className="rounded-3xl bg-surface-muted p-6 sm:p-10">
        <h2 id="how-it-works-heading" className="text-center text-2xl font-bold text-text">
          {t('howItWorks')}
        </h2>
        <ol className="relative mt-10 grid gap-8 sm:grid-cols-4 sm:gap-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-4 hidden h-px bg-border sm:block"
          />
          {content.home.howItWorksSteps.map((step, index) => (
            <li key={step.title} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-contrast ring-4 ring-surface-muted">
                {index + 1}
              </span>
              <h3 className="mt-3 font-semibold text-text">{step.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
