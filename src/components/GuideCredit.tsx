import { Tech24Link } from './Tech24Link'
import { TECH24_HOME } from '../content/tech24'

/** The one muted credit line at the end of every guide. Nothing else. */
export function GuideCredit() {
  return (
    <p className="mt-10 text-sm text-muted">
      Written by the{' '}
      <Tech24Link
        href={TECH24_HOME}
        campaign="guides"
        className="text-muted underline decoration-border underline-offset-2 hover:text-accent"
      >
        TECH24
      </Tech24Link>{' '}
      team.
    </p>
  )
}
