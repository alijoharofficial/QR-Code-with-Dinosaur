export interface Dinosaur {
  id: string
  name: string
  /** Full inline SVG markup, viewBox 0 0 120 120, with a white safe-zone circle baked in. */
  svg: string
  /** Swatch color used for the picker chip background. */
  swatch: string
}

const SAFE_ZONE = '<circle cx="60" cy="60" r="54" fill="#ffffff" />'

export const dinosaurs: Dinosaur[] = [
  {
    id: 'cute-rex',
    name: 'Cute T-Rex',
    swatch: '#22c55e',
    svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <g>
    <path d="M78 74 C 94 70, 104 78, 100 90 C 97 82, 88 80, 78 84 Z" fill="#22c55e" />
    <ellipse cx="60" cy="76" rx="25" ry="21" fill="#22c55e" />
    <ellipse cx="60" cy="86" rx="16" ry="10" fill="#bbf7d0" />
    <polygon points="46,54 52,44 58,54" fill="#16a34a" />
    <polygon points="58,52 64,41 70,52" fill="#16a34a" />
    <polygon points="70,55 76,46 81,56" fill="#16a34a" />
    <circle cx="46" cy="46" r="21" fill="#22c55e" />
    <ellipse cx="33" cy="52" rx="9" ry="7" fill="#22c55e" />
    <circle cx="30" cy="50" r="1.6" fill="#14532d" />
    <circle cx="40" cy="40" r="3.4" fill="#14532d" />
    <circle cx="41.2" cy="38.8" r="1.1" fill="#ffffff" />
    <path d="M30 56 Q36 60 42 56" fill="none" stroke="#14532d" stroke-width="1.6" stroke-linecap="round" />
    <ellipse cx="41" cy="66" rx="6" ry="4.5" fill="#22c55e" transform="rotate(-20 41 66)" />
    <ellipse cx="79" cy="66" rx="6" ry="4.5" fill="#22c55e" transform="rotate(20 79 66)" />
    <rect x="43" y="92" width="12" height="10" rx="5" fill="#16a34a" />
    <rect x="65" y="92" width="12" height="10" rx="5" fill="#16a34a" />
  </g>
</svg>`,
  },
  {
    id: 't-rex',
    name: 'T-Rex',
    swatch: '#15803d',
    svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <g>
    <path d="M70 96 C 86 98, 98 90, 96 74 C 94 84, 84 90, 70 88 Z" fill="#15803d" />
    <path d="M50 100 C 44 104, 34 104, 30 98 C 36 100, 44 98, 48 92 Z" fill="#166534" />
    <path d="M74 100 C 68 104, 58 104, 54 98 C 60 100, 68 98, 72 92 Z" fill="#166534" />
    <path d="M32 50 C 24 46, 20 52, 24 58 C 27 54, 32 54, 36 56 Z" fill="#15803d" />
    <ellipse cx="58" cy="72" rx="28" ry="24" fill="#15803d" />
    <path d="M34 40 C 30 26, 44 16, 58 22 C 70 26, 76 38, 70 50 C 62 42, 50 40, 40 46 Z" fill="#15803d" />
    <path d="M40 46 C 34 48, 28 52, 26 58 L 40 56 Z" fill="#166534" />
    <path d="M28 54 L 38 53 L 30 57 Z" fill="#ffffff" />
    <circle cx="52" cy="32" r="3.2" fill="#052e16" />
    <polygon points="46,20 51,12 55,21" fill="#166534" />
    <polygon points="55,17 60,8 64,18" fill="#166534" />
    <polygon points="64,20 69,12 73,22" fill="#166534" />
    <ellipse cx="40" cy="94" rx="10" ry="8" fill="#166534" />
    <ellipse cx="76" cy="94" rx="10" ry="8" fill="#166534" />
  </g>
</svg>`,
  },
  {
    id: 'stegosaurus',
    name: 'Stegosaurus',
    swatch: '#65a30d',
    svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <g>
    <path d="M86 60 C 98 58, 106 68, 100 78 C 96 70, 90 68, 84 70 Z" fill="#65a30d" />
    <polygon points="88,64 96,64 92,50" fill="#65a30d" />
    <polygon points="82,60 90,60 86,46" fill="#65a30d" />
    <ellipse cx="58" cy="70" rx="30" ry="18" fill="#65a30d" />
    <ellipse cx="32" cy="66" rx="12" ry="10" fill="#65a30d" />
    <ellipse cx="22" cy="68" rx="6" ry="4.5" fill="#65a30d" />
    <circle cx="20" cy="65" r="1.6" fill="#1a2e05" />
    <polygon points="34,44 44,36 40,54" fill="#a3e635" />
    <polygon points="48,40 58,30 54,52" fill="#a3e635" />
    <polygon points="64,42 74,34 68,54" fill="#a3e635" />
    <ellipse cx="40" cy="86" rx="7" ry="6" fill="#4d7c0f" />
    <ellipse cx="56" cy="88" rx="7" ry="6" fill="#4d7c0f" />
    <ellipse cx="70" cy="86" rx="7" ry="6" fill="#4d7c0f" />
  </g>
</svg>`,
  },
  {
    id: 'brontosaurus',
    name: 'Brontosaurus',
    swatch: '#0d9488',
    svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <g>
    <path d="M76 74 C 92 78, 98 68, 94 58 C 91 66, 84 70, 76 68 Z" fill="#0d9488" />
    <ellipse cx="58" cy="78" rx="26" ry="19" fill="#0d9488" />
    <path d="M42 66 C 34 50, 34 34, 44 24 C 40 36, 42 50, 50 62 Z" fill="#0d9488" />
    <circle cx="42" cy="22" r="9" fill="#0d9488" />
    <circle cx="38" cy="20" r="1.4" fill="#022c22" />
    <ellipse cx="38" cy="98" rx="7" ry="6" fill="#0f766e" />
    <ellipse cx="52" cy="100" rx="7" ry="6" fill="#0f766e" />
    <ellipse cx="66" cy="99" rx="7" ry="6" fill="#0f766e" />
    <ellipse cx="58" cy="86" rx="18" ry="8" fill="#5eead4" />
  </g>
</svg>`,
  },
  {
    id: 'pixel-rex',
    name: 'Pixel Rex',
    swatch: '#1f2937',
    svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  ${SAFE_ZONE}
  <g fill="#1f2937">
    <rect x="62" y="18" width="26" height="18" />
    <rect x="80" y="32" width="16" height="8" />
    <rect x="38" y="36" width="48" height="32" />
    <rect x="76" y="52" width="8" height="9" />
    <rect x="83" y="58" width="6" height="5" />
    <rect x="26" y="46" width="14" height="12" />
    <rect x="20" y="54" width="8" height="8" />
    <rect x="16" y="58" width="6" height="6" />
    <rect x="46" y="68" width="12" height="20" />
    <rect x="40" y="84" width="10" height="8" />
    <rect x="68" y="68" width="12" height="20" />
    <rect x="80" y="84" width="8" height="8" />
    <rect x="74" y="24" width="6" height="6" fill="#ffffff" />
  </g>
</svg>`,
  },
]

export const defaultDinosaurId = dinosaurs[0].id

export function toDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`
}
