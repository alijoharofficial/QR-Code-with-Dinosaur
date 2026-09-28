import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { GuidesIndexPage } from './pages/GuidesIndexPage'
import { GuidePostPage } from './pages/GuidePostPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { ServicesPage } from './pages/ServicesPage'
import { TermsPage } from './pages/TermsPage'
import { ToolVariantPage } from './pages/ToolVariantPage'
import { toolPages } from './content/toolPages'

/**
 * The full app tree, shared between the client entry (wrapped in
 * BrowserRouter) and the server entry (wrapped in StaticRouter for
 * prerendering) — only the router differs per entry.
 */
export function AppShell() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          {toolPages.map((page) => (
            <Route key={page.path} path={page.path.slice(1)} element={<ToolVariantPage />} />
          ))}
          <Route path="guides" element={<GuidesIndexPage />} />
          <Route path="guides/:slug" element={<GuidePostPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}
