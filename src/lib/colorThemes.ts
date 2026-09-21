import type { Gradient } from 'qr-code-styling'

export interface ColorTheme {
  id: string
  name: string
  dots: string | Gradient
  corners: string | Gradient
  background: string
  /** Solid swatch used to render the preset picker chip. */
  swatch: string
}

export const colorThemes: ColorTheme[] = [
  {
    id: 'classic',
    name: 'Classic Black',
    dots: '#18181b',
    corners: '#18181b',
    background: '#ffffff',
    swatch: '#18181b',
  },
  {
    id: 'dino-green',
    name: 'Dino Green',
    dots: '#15803d',
    corners: '#14532d',
    background: '#ffffff',
    swatch: '#15803d',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    dots: {
      type: 'linear',
      rotation: 0.7,
      colorStops: [
        { offset: 0, color: '#f97316' },
        { offset: 1, color: '#db2777' },
      ],
    },
    corners: '#c2410c',
    background: '#ffffff',
    swatch: 'linear-gradient(135deg, #f97316, #db2777)',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    dots: {
      type: 'linear',
      rotation: 0.7,
      colorStops: [
        { offset: 0, color: '#0284c7' },
        { offset: 1, color: '#0d9488' },
      ],
    },
    corners: '#0369a1',
    background: '#ffffff',
    swatch: 'linear-gradient(135deg, #0284c7, #0d9488)',
  },
  {
    id: 'midnight',
    name: 'Midnight',
    dots: '#e2e8f0',
    corners: '#e2e8f0',
    background: '#0f172a',
    swatch: '#0f172a',
  },
  {
    id: 'orange',
    name: 'Orange',
    dots: '#ea580c',
    corners: '#9a3412',
    background: '#ffffff',
    swatch: '#ea580c',
  },
]

export const defaultColorThemeId = colorThemes[1].id
