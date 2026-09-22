import QRCodeStyling from 'qr-code-styling'
import { useEffect, useRef } from 'react'
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

function buildOptions(
  size: number,
  data: string,
  image: string,
  colorTheme: ColorTheme,
  dotStyle: DotStyle,
  qrShape: QrShape,
) {
  return {
    width: size,
    height: size,
    type: 'svg' as const,
    margin: 8,
    qrOptions: { errorCorrectionLevel: 'H' as const },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.42,
      margin: 6,
    },
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
  const qrCodeRef = useRef<QRCodeStyling | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Recreated (rather than mutated via `.update()`) on every change: the
    // underlying library only sets up its PNG/canvas export pipeline once
    // per instance, so calling `.update()` on a long-lived instance leaves
    // `.download()`/`.getRawData()` returning the *first* ever render even
    // after the visible SVG has moved on. A fresh instance always exports
    // whatever it was just built with.
    const qrCode = new QRCodeStyling(
      buildOptions(size, data, image, colorTheme, dotStyle, qrShape),
    )
    qrCodeRef.current = qrCode
    containerRef.current.replaceChildren()
    qrCode.append(containerRef.current)
  }, [size, data, image, colorTheme, dotStyle, qrShape])

  return { containerRef, qrRef: qrCodeRef }
}
