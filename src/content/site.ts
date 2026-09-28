/** Canonical site origin: always the WWW form, no trailing slash. */
export const SITE_URL = 'https://www.qrcodegenerator.us'

export const SITE_NAME = 'QR Code Generator'

export const SUPPORT_EMAIL = 'info@qrcodegenerator.us'

/** ISO form so it reads correctly with a translated "Last updated" label in any language. */
export const SITE_LAST_UPDATED_DISPLAY = '2026-09-28'

/** Absolute URL to the shared Open Graph / Twitter Card preview image. */
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

export function absoluteUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path}`
}
