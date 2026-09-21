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
  <g fill="#78350f">
    <rect x="52" y="28" width="12" height="12" />
    <rect x="84" y="28" width="12" height="12" />
    <rect x="60" y="32" width="32" height="28" />
    <rect x="50" y="60" width="44" height="28" />
    <rect x="46" y="64" width="8" height="20" />
    <rect x="94" y="64" width="8" height="20" />
    <rect x="58" y="88" width="12" height="14" />
    <rect x="80" y="88" width="12" height="14" />
    <rect x="98" y="60" width="8" height="8" />
    <rect x="102" y="52" width="8" height="8" />
  </g>
  <g fill="#fde68a">
    <rect x="66" y="42" width="20" height="16" />
  </g>
  <g fill="#1f2937">
    <rect x="70" y="46" width="4" height="4" />
    <rect x="80" y="46" width="4" height="4" />
  </g>
</svg>`,
}

const tiger: IconOption = {
  id: 'tiger',
  name: 'Tiger',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  ${SAFE_ZONE}
  <g fill="#f97316">
    <rect x="56" y="28" width="8" height="8" />
    <rect x="84" y="28" width="8" height="8" />
    <rect x="58" y="34" width="32" height="24" />
    <rect x="50" y="58" width="48" height="28" />
    <rect x="52" y="86" width="8" height="10" />
    <rect x="66" y="86" width="8" height="10" />
    <rect x="80" y="86" width="8" height="10" />
    <rect x="92" y="86" width="8" height="10" />
    <rect x="98" y="64" width="8" height="8" />
    <rect x="102" y="56" width="8" height="8" />
  </g>
  <g fill="#fff7ed">
    <rect x="66" y="48" width="16" height="10" />
  </g>
  <g fill="#111827">
    <rect x="60" y="36" width="4" height="8" />
    <rect x="84" y="36" width="4" height="8" />
    <rect x="66" y="42" width="3" height="3" />
    <rect x="79" y="42" width="3" height="3" />
    <rect x="58" y="58" width="4" height="28" />
    <rect x="70" y="58" width="4" height="28" />
    <rect x="82" y="58" width="4" height="28" />
    <rect x="94" y="58" width="4" height="28" />
    <rect x="102" y="52" width="8" height="4" />
  </g>
</svg>`,
}

const whatsapp: IconOption = {
  id: 'whatsapp',
  name: 'WhatsApp',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="40" fill="#25d366" />
  <path d="M60 34c-14.4 0-26 11.6-26 26 0 4.7 1.3 9.2 3.6 13L34 86l13.4-3.5c3.6 2 7.8 3.1 12.6 3.1 14.4 0 26-11.6 26-26s-11.6-25.6-26-25.6z" fill="#25d366" stroke="#ffffff" stroke-width="3" />
  <path d="M49 46c-1 0-2.6.4-3.9 1.9-1.3 1.5-5 4.9-5 11.9s5.1 13.8 5.8 14.8c.7 1 9.9 15.1 24.4 20.5 12 4.5 12-.9 15.5-1.6 3.5-.7 6.9-3.6 7.9-5.4 1-1.8.4-3.1-.7-3.8-1.1-.7-6.9-3.6-7.9-4-1-.4-1.8-.7-2.6.7-.8 1.4-3 3.8-3.7 4.6-.7.8-1.4.9-2.6.3-1.2-.6-5.1-1.9-9.7-6-3.6-3.2-6-7.1-6.7-8.3-.7-1.2-.1-1.9.5-2.5.6-.6 1.2-1.4 1.8-2.1.6-.7.8-1.2 1.2-2 .4-.8.2-1.5-.1-2.1-.3-.6-2.6-6.4-3.6-8.7-.9-2.2-1.9-1.9-2.6-1.9z" fill="#ffffff" transform="translate(6 -6)" />
</svg>`,
}

const instagram: IconOption = {
  id: 'instagram',
  name: 'Instagram',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <rect x="24" y="24" width="72" height="72" rx="20" fill="#d6249f" />
  <rect x="34" y="34" width="52" height="52" rx="14" fill="none" stroke="#ffffff" stroke-width="5" />
  <circle cx="60" cy="60" r="15" fill="none" stroke="#ffffff" stroke-width="5" />
  <circle cx="80" cy="40" r="4" fill="#ffffff" />
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
