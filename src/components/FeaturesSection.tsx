import { useLanguage } from '../i18n/LanguageContext'

export function FeaturesSection() {
  const { content } = useLanguage()

  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="text-center text-2xl font-bold text-text">
        {content.home.featuresHeading}
      </h2>
      <ul className="mx-auto mt-8 grid max-w-3xl gap-x-8 gap-y-5 sm:grid-cols-2">
        {content.home.features.map((feature) => (
          <li key={feature.title} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="m5 12 5 5 9-9" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-text">{feature.title}</h3>
              <p className="mt-0.5 text-sm text-muted">{feature.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
