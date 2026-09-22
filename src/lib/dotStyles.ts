import type { CornerDotType, CornerSquareType, DotType } from 'qr-code-styling'
import type { TranslationKey } from '../i18n/translations'

export interface DotStyle {
  id: string
  nameKey: TranslationKey
  dots: DotType
  cornerSquare: CornerSquareType
  cornerDot: CornerDotType
}

export const dotStyles: DotStyle[] = [
  { id: 'square', nameKey: 'dotStyleSquare', dots: 'square', cornerSquare: 'square', cornerDot: 'square' },
  {
    id: 'rounded',
    nameKey: 'dotStyleRounded',
    dots: 'rounded',
    cornerSquare: 'extra-rounded',
    cornerDot: 'dot',
  },
  { id: 'dots', nameKey: 'dotStyleBlur', dots: 'dots', cornerSquare: 'dot', cornerDot: 'dot' },
  {
    id: 'classy',
    nameKey: 'dotStyleClassy',
    dots: 'classy-rounded',
    cornerSquare: 'extra-rounded',
    cornerDot: 'dot',
  },
]

export const defaultDotStyleId = dotStyles[1].id
