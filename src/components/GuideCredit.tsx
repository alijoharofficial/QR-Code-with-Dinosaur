import { useLanguage } from '../i18n/LanguageContext'
import { Tech24Link } from './Tech24Link'
import { TECH24_HOME } from '../content/tech24'

/** The one muted credit line at the end of every guide. Nothing else.
 * Reuses the footer's "Built by" translation rather than adding a
 * dedicated key for one extra sentence. */
export function GuideCredit() {
  const { content } = useLanguage()

  return (
    <p className="mt-10 text-sm text-muted">
      {content.chrome.footerBuiltBy}{' '}
      <Tech24Link
        href={TECH24_HOME}
        campaign="guides"
        className="text-muted underline decoration-border underline-offset-2 hover:text-accent"
      >
        TECH24
      </Tech24Link>
    </p>
  )
}
