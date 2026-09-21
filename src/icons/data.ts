export interface IconOption {
  id: string
  name: string
  /** Full inline SVG markup, viewBox 0 0 120 120, with a white safe-zone circle baked in. */
  svg: string
}

export interface IconCategory {
  id: string
  label: string
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
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  ${SAFE_ZONE}
  <g fill="#1f2937">
    <rect x="44" y="18" width="32" height="10" />
    <rect x="34" y="28" width="52" height="6" />
    <rect x="24" y="52" width="14" height="16" />
    <rect x="36" y="36" width="48" height="50" />
    <rect x="40" y="54" width="40" height="10" />
  </g>
  <g fill="#ffffff">
    <rect x="34" y="34" width="52" height="2" />
    <rect x="28" y="56" width="6" height="8" />
    <rect x="44" y="57" width="10" height="5" />
    <rect x="66" y="57" width="10" height="5" />
    <rect x="36" y="82" width="6" height="4" />
    <rect x="78" y="82" width="6" height="4" />
    <rect x="48" y="72" width="24" height="8" />
  </g>
</svg>`,
}

const tiger: IconOption = {
  id: 'tiger',
  name: 'Tiger',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <g fill="none" stroke="#1f2937" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18,46 34,16 46,42" />
    <polyline points="102,46 86,16 74,42" />
    <polyline points="18,46 10,68 22,86 33,100 48,106 60,112 72,106 87,100 98,86 110,68 102,46" />
    <line x1="60" y1="36" x2="60" y2="58" />
    <line x1="48" y1="40" x2="72" y2="40" />
    <line x1="50" y1="47" x2="70" y2="47" />
    <line x1="52" y1="54" x2="68" y2="54" />
    <polygon points="34,60 44,56 56,56 60,60 56,64 44,64" />
    <polygon points="86,60 76,56 64,56 60,60 64,64 76,64" />
    <polygon points="55,68 60,64 65,68 60,76" />
    <polyline points="44,90 60,80 76,90" />
    <polyline points="44,90 60,102 76,90" />
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

export const iconCategories: IconCategory[] = [
  { id: 'animals', label: 'Animals', icons: [dyno, monkey, tiger] },
  {
    id: 'social',
    label: 'Social',
    icons: [whatsapp, instagram, facebook, xTwitter],
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
