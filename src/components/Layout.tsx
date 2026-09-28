import { Outlet, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { Footer } from './Footer'
import { SiteHeader } from './SiteHeader'

export function Layout() {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Outlet />
      </main>

      <Footer showTech24Credit={pathname !== '/'} />
    </div>
  )
}
