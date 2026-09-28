import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Absolute base: the site is served from a domain root (Vercel), and
  // prerendered routes live at varying depths (e.g. /blog/<slug>/index.html),
  // so a relative base would resolve asset URLs incorrectly on those pages.
  base: '/',
  plugins: [react(), tailwindcss()],
})
