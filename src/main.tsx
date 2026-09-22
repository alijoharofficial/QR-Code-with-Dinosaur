import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'
import { initContentProtection } from './lib/contentProtection.ts'

// Deterrent-only content protection (disable right-click/devtools
// shortcuts/copy on non-form content, etc — see the module for details on
// why this is not real security). Production only; opt out for a
// production-build QA pass with VITE_DISABLE_CONTENT_PROTECTION=true.
if (import.meta.env.PROD && import.meta.env.VITE_DISABLE_CONTENT_PROTECTION !== 'true') {
  initContentProtection()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
