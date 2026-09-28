import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'
import { toolPageConfigs } from '../content/registry'
import type { Theme } from '../hooks/useTheme'
import { BrandMark } from './BrandMark'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

interface SiteHeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-semibold transition-colors ${isActive ? 'text-accent' : 'text-text hover:text-accent'}`

export function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  const { t, languageId, content } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const toolLinks = toolPageConfigs.map((config) => ({
    to: localizedPath(config.path, languageId),
    label: content.chrome.toolShort[config.id],
  }))
  const homeHref = localizedPath('/', languageId)
  const guidesHref = localizedPath('/guides', languageId)
  const servicesHref = localizedPath('/services', languageId)
  const aboutHref = localizedPath('/about', languageId)

  return (
    <header className="relative mx-auto w-full max-w-5xl px-3 py-5 sm:px-6">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <Link to={homeHref} className="flex min-w-0 shrink items-center gap-1.5 text-base font-bold tracking-tight text-text sm:gap-2 sm:text-lg">
          <BrandMark className="h-6 w-6 shrink-0 text-accent sm:h-7 sm:w-7" />
          <span className="truncate">{t('appTitle')}</span>
        </Link>

        {/* All links render unconditionally in the DOM (just visually hidden
            on md+) so every page stays reachable from server-rendered HTML
            regardless of viewport or JS state. */}
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          <NavLink to={homeHref} end className={navLinkClass}>
            {content.chrome.navHome}
          </NavLink>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-text transition-colors hover:text-accent"
              aria-haspopup="true"
            >
              {content.chrome.navQrTools}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col gap-1 rounded-2xl border border-border bg-surface p-2 shadow-soft">
                {toolLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                        isActive ? 'bg-surface-muted text-accent' : 'text-text hover:bg-surface-muted'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to={guidesHref} className={navLinkClass}>
            {content.chrome.navGuides}
          </NavLink>
          <NavLink to={servicesHref} className={navLinkClass}>
            {content.chrome.navServices}
          </NavLink>
          <NavLink to={aboutHref} className={navLinkClass}>
            {content.chrome.navAbout}
          </NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <LanguageSwitcher />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={content.chrome.menuAriaLabel}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-accent hover:text-accent active:scale-95 md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
              {mobileOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        className={`${mobileOpen ? 'flex' : 'hidden'} mt-4 flex-col gap-1 rounded-2xl border border-border bg-surface p-3 shadow-soft md:hidden`}
      >
        <NavLink to={homeHref} end className="rounded-xl px-3 py-2 text-sm font-semibold text-text hover:bg-surface-muted">
          {content.chrome.navHome}
        </NavLink>
        <p className="mt-1 px-3 text-xs font-semibold uppercase tracking-wide text-muted">{content.chrome.navQrTools}</p>
        {toolLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className="rounded-xl px-3 py-2 text-sm font-medium text-text hover:bg-surface-muted">
            {link.label}
          </NavLink>
        ))}
        <div className="my-1 border-t border-border" />
        <NavLink to={guidesHref} className="rounded-xl px-3 py-2 text-sm font-semibold text-text hover:bg-surface-muted">
          {content.chrome.navGuides}
        </NavLink>
        <NavLink to={servicesHref} className="rounded-xl px-3 py-2 text-sm font-semibold text-text hover:bg-surface-muted">
          {content.chrome.navServices}
        </NavLink>
        <NavLink to={aboutHref} className="rounded-xl px-3 py-2 text-sm font-semibold text-text hover:bg-surface-muted">
          {content.chrome.navAbout}
        </NavLink>
      </nav>
    </header>
  )
}
