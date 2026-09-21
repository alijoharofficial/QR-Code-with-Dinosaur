import type { Theme } from '../hooks/useTheme'
import { BrandMark } from './BrandMark'
import { ThemeToggle } from './ThemeToggle'

interface SiteHeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

export function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
      <a
        href="#top"
        className="flex items-center gap-2 text-lg font-bold tracking-tight text-text"
      >
        <BrandMark className="h-7 w-7 text-accent" />
        QR Code Generator
      </a>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  )
}
