export const TECH24_HOME = 'https://tech24.cc'
export const TECH24_PACKAGES = 'https://tech24.cc/packages'

export type Tech24Campaign = 'about' | 'services' | 'footer' | 'guides'

/**
 * Every outbound TECH24 link is tagged with a UTM campaign specific to
 * where it's placed, so the referral is measurable per placement.
 */
export function tech24Url(base: string, campaign: Tech24Campaign): string {
  const url = new URL(base)
  url.searchParams.set('utm_source', 'qrcodegenerator')
  url.searchParams.set('utm_medium', 'referral')
  url.searchParams.set('utm_campaign', campaign)
  return url.toString()
}
