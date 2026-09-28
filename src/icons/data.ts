import type { TranslationKey } from '../i18n/translations'

export interface IconOption {
  id: string
  /** Display name. Brand/proper names (Dyno, WhatsApp, PayPal, ...) stay untranslated. */
  name: string
  /** For generic (non-brand) icons: overrides `name` with a translated label. */
  nameKey?: TranslationKey
  /** Full inline SVG markup, viewBox 0 0 120 120, with a white safe-zone circle baked in. */
  svg: string
}

export interface IconCategory {
  id: string
  labelKey: TranslationKey
  icons: IconOption[]
}

const SAFE_ZONE = '<circle cx="60" cy="60" r="54" fill="#ffffff" />'

const dyno: IconOption = {
  id: 'dyno',
  name: 'Dyno',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  ${SAFE_ZONE}
  <g fill="#1f2937">
    <rect x="64" y="18" width="32" height="4" />
    <rect x="60" y="22" width="40" height="4" />
    <rect x="60" y="26" width="8" height="4" />
    <rect x="72" y="26" width="28" height="4" />
    <rect x="60" y="30" width="40" height="4" />
    <rect x="60" y="34" width="40" height="4" />
    <rect x="60" y="38" width="40" height="4" />
    <rect x="60" y="42" width="32" height="4" />
    <rect x="20" y="46" width="4" height="4" />
    <rect x="56" y="46" width="20" height="4" />
    <rect x="20" y="50" width="4" height="4" />
    <rect x="48" y="50" width="28" height="4" />
    <rect x="20" y="54" width="8" height="4" />
    <rect x="44" y="54" width="40" height="4" />
    <rect x="20" y="58" width="12" height="4" />
    <rect x="40" y="58" width="36" height="4" />
    <rect x="80" y="58" width="4" height="4" />
    <rect x="20" y="62" width="56" height="4" />
    <rect x="20" y="66" width="56" height="4" />
    <rect x="24" y="70" width="48" height="4" />
    <rect x="28" y="74" width="44" height="4" />
    <rect x="32" y="78" width="36" height="4" />
    <rect x="36" y="82" width="28" height="4" />
    <rect x="40" y="86" width="12" height="4" />
    <rect x="56" y="86" width="8" height="4" />
    <rect x="40" y="90" width="8" height="4" />
    <rect x="60" y="90" width="4" height="4" />
    <rect x="40" y="94" width="4" height="4" />
    <rect x="60" y="94" width="4" height="4" />
    <rect x="40" y="98" width="8" height="4" />
    <rect x="60" y="98" width="8" height="4" />
  </g>
</svg>`,
}

const monkey: IconOption = {
  id: 'monkey',
  name: 'Monkey',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="28" cy="32" r="14" fill="#8b5e3c" />
  <circle cx="92" cy="32" r="14" fill="#8b5e3c" />
  <circle cx="28" cy="32" r="7.5" fill="#d9a066" />
  <circle cx="92" cy="32" r="7.5" fill="#d9a066" />
  <circle cx="60" cy="60" r="42" fill="#8b5e3c" />
  <ellipse cx="60" cy="64" rx="31" ry="27" fill="#d9a066" />
  <circle cx="47" cy="56" r="5" fill="#2b2118" />
  <circle cx="73" cy="56" r="5" fill="#2b2118" />
  <ellipse cx="60" cy="73" rx="14" ry="11" fill="#f4d9b0" />
  <ellipse cx="60" cy="72" rx="4.5" ry="3.5" fill="#2b2118" />
  <path d="M49 82 Q60 89 71 82" stroke="#2b2118" stroke-width="3" fill="none" stroke-linecap="round" />
</svg>`,
}

const tiger: IconOption = {
  id: 'tiger',
  name: 'Tiger',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <path d="M28 26 L42 46 L20 44 Z" fill="#f0932b" />
  <path d="M92 26 L78 46 L100 44 Z" fill="#f0932b" />
  <circle cx="60" cy="60" r="42" fill="#f0932b" />
  <ellipse cx="60" cy="66" rx="31" ry="27" fill="#fbeadb" />
  <circle cx="46" cy="56" r="5" fill="#1f2937" />
  <circle cx="74" cy="56" r="5" fill="#1f2937" />
  <path d="M60 65 l-7 9 h14 z" fill="#1f2937" />
  <path d="M45 79 Q60 88 75 79" stroke="#1f2937" stroke-width="3" fill="none" stroke-linecap="round" />
  <g stroke="#1f2937" stroke-width="3.4" stroke-linecap="round">
    <path d="M20 48 L36 53" />
    <path d="M18 61 L36 61" />
    <path d="M20 74 L36 69" />
    <path d="M100 48 L84 53" />
    <path d="M102 61 L84 61" />
    <path d="M100 74 L84 69" />
  </g>
</svg>`,
}

const whatsapp: IconOption = {
  id: 'whatsapp',
  name: 'WhatsApp',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#25d366" />
  <circle cx="60" cy="57" r="26" fill="#ffffff" />
  <path d="M42 74 L37 88 L52 82 Z" fill="#ffffff" />
  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#25d366" transform="translate(47 45) scale(1.08)" />
</svg>`,
}

const instagram: IconOption = {
  id: 'instagram',
  name: 'Instagram',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <defs>
    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fdf497" />
      <stop offset="20%" stop-color="#fdb750" />
      <stop offset="45%" stop-color="#e83b56" />
      <stop offset="70%" stop-color="#c2317e" />
      <stop offset="100%" stop-color="#7b3fe4" />
    </linearGradient>
  </defs>
  <rect x="24" y="24" width="72" height="72" rx="20" fill="url(#ig-grad)" />
  <rect x="38" y="38" width="44" height="44" rx="13" fill="none" stroke="#ffffff" stroke-width="5" />
  <circle cx="60" cy="60" r="13" fill="none" stroke="#ffffff" stroke-width="5" />
  <circle cx="79" cy="41" r="3.5" fill="#ffffff" />
</svg>`,
}

const facebook: IconOption = {
  id: 'facebook',
  name: 'Facebook',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="40" fill="#1877f2" />
  <path d="M67 90V64h9l1.4-11H67v-7c0-3.2.9-5.4 5.5-5.4H78V31.6C77 31.5 73.5 31 69.4 31 60.8 31 55 36.2 55 45.8V53H45v11h10v26z" fill="#ffffff" />
</svg>`,
}

const xTwitter: IconOption = {
  id: 'x-twitter',
  name: 'X',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <rect x="24" y="24" width="72" height="72" rx="18" fill="#0f1419" />
  <path d="M40 38h11l10.5 14.5L73 38h9L65.5 60 84 84H73L61.5 68 49 84h-9l17-21.5z" fill="#ffffff" />
</svg>`,
}

const mail: IconOption = {
  id: 'mail',
  name: 'Email',
  nameKey: 'iconEmail',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#ca8a04" />
  <rect x="35" y="42" width="50" height="36" rx="6" fill="#ffffff" />
  <path d="M37 45 L60 62 L83 45" fill="none" stroke="#ca8a04" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,
}

const scanFrame: IconOption = {
  id: 'scan-frame',
  name: 'Scan',
  nameKey: 'iconScan',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#c026d3" />
  <g fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round">
    <path d="M40 34h-6a6 6 0 0 0-6 6v6" />
    <path d="M80 34h6a6 6 0 0 1 6 6v6" />
    <path d="M40 86h-6a6 6 0 0 1-6-6v-6" />
    <path d="M80 86h6a6 6 0 0 0 6-6v-6" />
  </g>
  <rect x="46" y="46" width="28" height="28" rx="3" fill="#ffffff" />
</svg>`,
}

const storefront: IconOption = {
  id: 'storefront',
  name: 'Storefront',
  nameKey: 'iconStorefront',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#22c55e" />
  <rect x="38" y="52" width="44" height="32" rx="3" fill="#ffffff" />
  <rect x="52" y="64" width="16" height="20" fill="#22c55e" />
  <path d="M34 40 L40 52 H80 L86 40 Z" fill="#ffffff" />
  <rect x="34" y="36" width="52" height="6" rx="2" fill="#ffffff" />
</svg>`,
}

const menu: IconOption = {
  id: 'menu',
  name: 'Menu',
  nameKey: 'iconMenu',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#7c3aed" />
  <g fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M42 36v16m0 0v32m-7-32v10a7 7 0 0 0 14 0V36" />
    <path d="M78 36v48" />
    <path d="M78 36c-6 0-9 5-9 11s3 9 9 9" />
  </g>
</svg>`,
}

const scanMeRed: IconOption = {
  id: 'scan-me-red',
  name: 'Scan Me',
  nameKey: 'iconScanMe',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#ef4444" />
  <g fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round">
    <path d="M38 40v-4a4 4 0 0 1 4-4h4" />
    <path d="M82 40v-4a4 4 0 0 0-4-4h-4" />
    <path d="M38 80v4a4 4 0 0 0 4 4h4" />
    <path d="M82 80v4a4 4 0 0 1-4 4h-4" />
  </g>
  <text x="60" y="57" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff">SCAN</text>
  <text x="60" y="72" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff">ME</text>
</svg>`,
}

const scanMeTeal: IconOption = {
  id: 'scan-me-teal',
  name: 'Scan Me',
  nameKey: 'iconScanMe',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#14b8a6" />
  <g fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round">
    <path d="M38 40v-4a4 4 0 0 1 4-4h4" />
    <path d="M82 40v-4a4 4 0 0 0-4-4h-4" />
    <path d="M38 80v4a4 4 0 0 0 4 4h4" />
    <path d="M82 80v4a4 4 0 0 1-4 4h-4" />
  </g>
  <text x="60" y="57" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff">SCAN</text>
  <text x="60" y="72" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff">ME</text>
</svg>`,
}

const paypal: IconOption = {
  id: 'paypal',
  name: 'PayPal',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#1e3a8a" />
  <path d="M47 36h17c9 0 15 6 13.5 15-1.7 10.6-9 16-19 16h-6.5l-2.5 15H39z" fill="#8fc1ff" />
  <path d="M41 44h17c9 0 15 6 13.5 15-1.7 10.6-9 16-19 16h-6.5l-2.5 15H33z" fill="#ffffff" />
</svg>`,
}

const bitcoin: IconOption = {
  id: 'bitcoin',
  name: 'Bitcoin',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#f7931a" />
  <text x="60" y="76" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="48" fill="#ffffff">&#8383;</text>
</svg>`,
}

export const iconCategories: IconCategory[] = [
  { id: 'animals', labelKey: 'catAnimals', icons: [dyno, monkey, tiger] },
  {
    id: 'social',
    labelKey: 'catSocial',
    icons: [whatsapp, instagram, facebook, xTwitter],
  },
  {
    id: 'actions',
    labelKey: 'catActions',
    icons: [
      mail,
      scanFrame,
      storefront,
      menu,
      scanMeRed,
      scanMeTeal,
      paypal,
      bitcoin,
    ],
  },
]

export const allIcons: IconOption[] = iconCategories.flatMap((c) => c.icons)
export const defaultIconId = dyno.id

export function findIcon(id: string): IconOption | undefined {
  return allIcons.find((icon) => icon.id === id)
}

export function toDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`
}
