import { Outlet } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../hooks/useTheme'
import { BrandMark } from './BrandMark'
import { SiteHeader } from './SiteHeader'

export function Layout() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Outlet />
      </main>

      <footer className="flex items-center justify-center gap-2 border-t border-border py-8 text-center text-sm text-muted">
        <BrandMark className="h-4 w-4" animated={false} />
        {t('appTagline')}
      </footer>
    </div>
  )
}
