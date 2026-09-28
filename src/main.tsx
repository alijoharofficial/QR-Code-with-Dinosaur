import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppShell } from './AppShell.tsx'
import { initContentProtection } from './lib/contentProtection.ts'

// Deterrent-only content protection (disable right-click/devtools
// shortcuts/copy on non-form content, etc. See the module for details on
// why this is not real security). Production only; opt out for a
// production-build QA pass with VITE_DISABLE_CONTENT_PROTECTION=true.
if (import.meta.env.PROD && import.meta.env.VITE_DISABLE_CONTENT_PROTECTION !== 'true') {
  initContentProtection()
}

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  </StrictMode>
)

// Prerendered production builds ship real markup inside #root, which needs
// hydrateRoot; `vite dev` (no prerender step) starts from an empty #root, so
// fall back to a plain client render there instead of a hydration mismatch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
