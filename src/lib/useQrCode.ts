import QRCodeStyling from 'qr-code-styling'
import { useEffect, useRef, useState } from 'react'
import type { ColorTheme } from './colorThemes'
import type { DotStyle } from './dotStyles'
import type { QrShape } from './qrShapes'

interface UseQrCodeOptions {
  data: string
  image: string
  colorTheme: ColorTheme
  dotStyle: DotStyle
  qrShape: QrShape
  size?: number
}

const QR_SIZE = 320

function colorOrGradient(value: ColorTheme['dots']) {
  return typeof value === 'string'
    ? { color: value, gradient: undefined }
    : { color: undefined, gradient: value }
}

function buildStyleOptions(
  data: string,
  image: string,
  colorTheme: ColorTheme,
  dotStyle: DotStyle,
  qrShape: QrShape,
) {
  return {
    data,
    image,
    shape: qrShape.shape,
    dotsOptions: { type: dotStyle.dots, ...colorOrGradient(colorTheme.dots) },
    cornersSquareOptions: {
      type: dotStyle.cornerSquare,
      ...colorOrGradient(colorTheme.corners),
    },
    cornersDotOptions: {
      type: dotStyle.cornerDot,
      ...colorOrGradient(colorTheme.corners),
    },
    backgroundOptions: { color: colorTheme.background },
  }
}

export function useQrCode({
  data,
  image,
  colorTheme,
  dotStyle,
  qrShape,
  size = QR_SIZE,
}: UseQrCodeOptions) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [qrCode] = useState(
    () =>
      new QRCodeStyling({
        width: size,
        height: size,
        type: 'svg',
        margin: 8,
        qrOptions: { errorCorrectionLevel: 'H' },
        imageOptions: {
          hideBackgroundDots: true,
          imageSize: 0.42,
          margin: 6,
        },
        ...buildStyleOptions(data, image, colorTheme, dotStyle, qrShape),
      }),
  )
  const qrCodeRef = useRef(qrCode)

  useEffect(() => {
    if (containerRef.current) {
      qrCode.append(containerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    qrCode.update(buildStyleOptions(data, image, colorTheme, dotStyle, qrShape))
  }, [qrCode, data, image, colorTheme, dotStyle, qrShape])

  return { containerRef, qrRef: qrCodeRef }
}
