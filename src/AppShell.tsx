import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { Layout } from './components/Layout'
import { BlogIndexPage } from './pages/BlogIndexPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

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
          <Route path="blog" element={<BlogIndexPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}
