import type { ReactNode } from 'react'

interface HeroProps {
  title: ReactNode
  subtitle: string
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-4 pt-2 text-center sm:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-balance text-lg text-muted">{subtitle}</p>
    </div>
  )
}
