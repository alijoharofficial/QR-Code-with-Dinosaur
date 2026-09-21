export type UrlCheckResult =
  | { ok: true; url: string }
  | { ok: false; reason: 'empty' | 'invalid' }

/**
 * Normalizes user input into a scannable URL: trims whitespace, and
 * prepends "https://" when no scheme is present (but leaves other
 * schemes like mailto:/tel: untouched).
 */
export function normalizeUrl(input: string): UrlCheckResult {
  const trimmed = input.trim()
  if (!trimmed) return { ok: false, reason: 'empty' }

  const hasScheme = /^[a-z][a-z0-9+.-]*:/i.test(trimmed)
  const candidate = hasScheme ? trimmed : `https://${trimmed}`

  try {
    const parsed = new URL(candidate)
    if (!hasScheme && !parsed.hostname.includes('.')) {
      return { ok: false, reason: 'invalid' }
    }
    return { ok: true, url: parsed.toString() }
  } catch {
    return { ok: false, reason: 'invalid' }
  }
}
