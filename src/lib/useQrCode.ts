import QRCodeStyling from 'qr-code-styling'
import { useEffect, useRef, useState } from 'react'
import type { ColorTheme } from './colorThemes'
import type { DotStyle } from './dotStyles'

interface UseQrCodeOptions {
  data: string
  image: string
  colorTheme: ColorTheme
  dotStyle: DotStyle
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
) {
  return {
    data,
    image,
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
        ...buildStyleOptions(data, image, colorTheme, dotStyle),
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
    qrCode.update(buildStyleOptions(data, image, colorTheme, dotStyle))
  }, [qrCode, data, image, colorTheme, dotStyle])

  return { containerRef, qrRef: qrCodeRef }
}
