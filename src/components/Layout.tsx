import { Outlet, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { stripLocalePrefix } from '../i18n/routing'
import { Footer } from './Footer'
import { SiteHeader } from './SiteHeader'

export function Layout() {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const isHome = stripLocalePrefix(pathname) === '/'

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Outlet />
      </main>

      <Footer showTech24Credit={!isHome} />
    </div>
  )
}
