interface DinoIconProps {
  svg: string
  className?: string
}

export function DinoIcon({ svg, className }: DinoIconProps) {
  return (
    <span
      className={className}
      // Safe: svg markup is bundled, static, first-party content.
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
