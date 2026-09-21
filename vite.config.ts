import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built assets resolve correctly whether the app is
  // served from a domain root (Vercel/Netlify) or a subpath (GitHub Pages
  // project sites, e.g. https://<user>.github.io/<repo>/).
  base: './',
  plugins: [react(), tailwindcss()],
})
