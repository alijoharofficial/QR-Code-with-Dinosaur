import type { CornerDotType, CornerSquareType, DotType } from 'qr-code-styling'

export interface DotStyle {
  id: string
  name: string
  dots: DotType
  cornerSquare: CornerSquareType
  cornerDot: CornerDotType
}

export const dotStyles: DotStyle[] = [
  { id: 'square', name: 'Square', dots: 'square', cornerSquare: 'square', cornerDot: 'square' },
  {
    id: 'rounded',
    name: 'Rounded',
    dots: 'rounded',
    cornerSquare: 'extra-rounded',
    cornerDot: 'dot',
  },
  { id: 'dots', name: 'Blur', dots: 'dots', cornerSquare: 'dot', cornerDot: 'dot' },
  {
    id: 'classy',
    name: 'Classy',
    dots: 'classy-rounded',
    cornerSquare: 'extra-rounded',
    cornerDot: 'dot',
  },
]

export const defaultDotStyleId = dotStyles[1].id
