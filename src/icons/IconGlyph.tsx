interface IconGlyphProps {
  svg: string
  className?: string
}

export function IconGlyph({ svg, className }: IconGlyphProps) {
  return (
    <span
      className={className}
      // Safe: svg markup is bundled, static, first-party content.
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
