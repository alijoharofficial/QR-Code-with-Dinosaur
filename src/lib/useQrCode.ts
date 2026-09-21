import QRCodeStyling from 'qr-code-styling'
import { useEffect, useRef, useState } from 'react'
import type { ColorTheme } from './colorThemes'

interface UseQrCodeOptions {
  data: string
  image: string
  colorTheme: ColorTheme
  size?: number
}

const QR_SIZE = 320

function colorOrGradient(value: ColorTheme['dots']) {
  return typeof value === 'string'
    ? { color: value, gradient: undefined }
    : { color: undefined, gradient: value }
}

function buildStyleOptions(data: string, image: string, colorTheme: ColorTheme) {
  return {
    data,
    image,
    dotsOptions: { type: 'rounded' as const, ...colorOrGradient(colorTheme.dots) },
    cornersSquareOptions: {
      type: 'extra-rounded' as const,
      ...colorOrGradient(colorTheme.corners),
    },
    cornersDotOptions: {
      type: 'dot' as const,
      ...colorOrGradient(colorTheme.corners),
    },
    backgroundOptions: { color: colorTheme.background },
  }
}

export function useQrCode({
  data,
  image,
  colorTheme,
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
        ...buildStyleOptions(data, image, colorTheme),
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
    qrCode.update(buildStyleOptions(data, image, colorTheme))
  }, [qrCode, data, image, colorTheme])

  return { containerRef, qrRef: qrCodeRef }
}
