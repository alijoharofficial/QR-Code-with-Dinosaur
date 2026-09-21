import type { ShapeType } from 'qr-code-styling'

export interface QrShape {
  id: string
  name: string
  shape: ShapeType
}

export const qrShapes: QrShape[] = [
  { id: 'square', name: 'Square', shape: 'square' },
  { id: 'circle', name: 'Circle', shape: 'circle' },
]

export const defaultQrShapeId = qrShapes[0].id
