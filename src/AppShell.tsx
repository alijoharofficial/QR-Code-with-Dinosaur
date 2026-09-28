import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { nonDefaultLocaleIds } from './i18n/routing'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
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
import { toolPageConfigs } from './content/registry'

/**
 * The 16-page route tree, reused once unprefixed (English, at `/`) and
 * once per non-English locale under a literal path prefix (e.g. `/es`),
 * so every language gets its own crawlable, prerendered URL rather than a
 * client-only toggle. `prefix` is `''` for English or `'<lang>/'` otherwise.
 */
function appRouteChildren(prefix: string) {
  return [
    prefix ? (
      <Route key={`${prefix}home`} path={prefix.slice(0, -1)} element={<HomePage />} />
    ) : (
      <Route key="home" index element={<HomePage />} />
    ),
    ...toolPageConfigs.map((config) => (
      <Route key={`${prefix}${config.path}`} path={`${prefix}${config.path.slice(1)}`} element={<ToolVariantPage />} />
    )),
    <Route key={`${prefix}guides`} path={`${prefix}guides`} element={<GuidesIndexPage />} />,
    <Route key={`${prefix}guide`} path={`${prefix}guides/:slug`} element={<GuidePostPage />} />,
    <Route key={`${prefix}services`} path={`${prefix}services`} element={<ServicesPage />} />,
    <Route key={`${prefix}about`} path={`${prefix}about`} element={<AboutPage />} />,
    <Route key={`${prefix}contact`} path={`${prefix}contact`} element={<ContactPage />} />,
    <Route key={`${prefix}privacy`} path={`${prefix}privacy-policy`} element={<PrivacyPolicyPage />} />,
    <Route key={`${prefix}terms`} path={`${prefix}terms`} element={<TermsPage />} />,
  ]
}

/**
 * The full app tree, shared between the client entry (wrapped in
 * BrowserRouter) and the server entry (wrapped in StaticRouter for
 * prerendering); only the router differs per entry.
 */
export function AppShell() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {appRouteChildren('')}
          {nonDefaultLocaleIds.flatMap((lang) => appRouteChildren(`${lang}/`))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}
