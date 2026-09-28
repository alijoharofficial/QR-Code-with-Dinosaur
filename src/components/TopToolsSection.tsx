import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'
import { toolPageConfigs } from '../content/registry'

export function TopToolsSection() {
  const { languageId, content } = useLanguage()

  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6"
      aria-labelledby="tools-heading"
    >
      <h2 id="tools-heading" className="text-center text-2xl font-bold text-text">
        {content.home.moreWaysToUseIt}
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolPageConfigs.map((config) => {
          const copy = content.toolPages[config.id]
          return (
            <li key={config.path} className="rounded-2xl border border-border bg-surface p-5">
              <Link to={localizedPath(config.path, languageId)} className="block">
                <h3 className="font-semibold text-text transition-colors hover:text-accent">{copy.h1}</h3>
                <p className="mt-1.5 text-sm text-muted">{copy.subtitle}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
