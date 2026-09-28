import type { ReactNode } from 'react'

export function IntroSection({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-8 text-center sm:px-6">
      <p className="text-balance text-base leading-relaxed text-muted">{children}</p>
    </div>
  )
}
