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
  <image href="data:image/png;base64,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" x="12" y="13.67" width="96" height="92.67" />
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
