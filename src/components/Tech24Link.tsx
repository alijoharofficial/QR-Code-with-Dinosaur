import type { ReactNode } from 'react'
import { tech24Url, type Tech24Campaign } from '../content/tech24'

interface Tech24LinkProps {
  href: string
  campaign: Tech24Campaign
  children: ReactNode
  className?: string
}

/** A plain-text outbound link to TECH24, UTM-tagged per placement. Never a button/card. */
export function Tech24Link({ href, campaign, children, className }: Tech24LinkProps) {
  return (
    <a
      href={tech24Url(href, campaign)}
      target="_blank"
      rel="noopener"
      className={className ?? 'font-medium text-text underline decoration-border underline-offset-2 hover:text-accent'}
    >
      {children}
    </a>
  )
}
