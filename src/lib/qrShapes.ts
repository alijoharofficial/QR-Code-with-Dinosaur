import type { ShapeType } from 'qr-code-styling'
import type { TranslationKey } from '../i18n/translations'

export interface QrShape {
  id: string
  nameKey: TranslationKey
  shape: ShapeType
}

export const qrShapes: QrShape[] = [
  { id: 'square', nameKey: 'qrShapeSquare', shape: 'square' },
  { id: 'circle', nameKey: 'qrShapeCircle', shape: 'circle' },
]

export const defaultQrShapeId = qrShapes[0].id
