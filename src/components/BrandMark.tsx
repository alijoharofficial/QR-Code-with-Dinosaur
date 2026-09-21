import { useId } from 'react'

interface BrandMarkProps {
  className?: string
  animated?: boolean
}

export function BrandMark({ className, animated = true }: BrandMarkProps) {
  const clipId = useId()
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <clipPath id={clipId}>
        <rect x="0" y="0" width="24" height="24" rx="4" />
      </clipPath>
      <g stroke="currentColor" strokeWidth="1.6">
        <rect x="1.2" y="1.2" width="6" height="6" rx="1" />
        <rect x="16.8" y="1.2" width="6" height="6" rx="1" />
        <rect x="1.2" y="16.8" width="6" height="6" rx="1" />
      </g>
      <g fill="currentColor">
        <rect x="3.2" y="3.2" width="2" height="2" />
        <rect x="18.8" y="3.2" width="2" height="2" />
        <rect x="3.2" y="18.8" width="2" height="2" />
        <rect x="10.5" y="2.5" width="2" height="2" />
        <rect x="15" y="7" width="2" height="2" />
        <rect x="10.5" y="11" width="2" height="2" />
        <rect x="7" y="14.5" width="2" height="2" />
        <rect x="19" y="11" width="2" height="2" />
        <rect x="14.5" y="19" width="2" height="2" />
        <rect x="19" y="19" width="2" height="2" />
      </g>
      {animated && (
        <rect
          className="brand-scan-line"
          x="0"
          y="-3"
          width="24"
          height="3"
          fill="currentColor"
          opacity="0.5"
          clipPath={`url(#${clipId})`}
        />
      )}
    </svg>
  )
}
