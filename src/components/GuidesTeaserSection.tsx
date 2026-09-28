import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'
import { getGuides } from '../content/registry'

export function GuidesTeaserSection() {
  const { languageId, content } = useLanguage()
  const guides = getGuides(languageId)

  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6"
      aria-labelledby="guides-heading"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="guides-heading" className="text-2xl font-bold text-text">
          {content.home.guidesAndTipsHeading}
        </h2>
        <Link
          to={localizedPath('/guides', languageId)}
          className="shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          {content.home.viewAllGuides}
        </Link>
      </div>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((guide) => (
          <li key={guide.slug} className="rounded-2xl border border-border bg-surface p-5">
            <Link to={localizedPath(`/guides/${guide.slug}`, languageId)} className="block">
              <h3 className="font-semibold text-text transition-colors hover:text-accent">{guide.copy.h1}</h3>
              <p className="mt-1.5 text-sm text-muted">{guide.copy.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
