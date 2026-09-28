// Runs after both the client build (`vite build`) and the SSR build
// (`vite build --ssr src/entry-server.tsx --outDir dist/server`).
//
// For every route in the app's single route registry (src/content/routes.ts,
// re-exported by the SSR bundle), renders it to a static HTML string and
// writes it into dist/ at the right path, then generates dist/sitemap.xml
// from the same registry so it can never list a route that doesn't exist.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const serverDir = path.join(distDir, 'server')

const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

const { render, allRoutes, SITE_URL } = await import(
  path.join(serverDir, 'entry-server.js')
)

for (const route of allRoutes) {
  const { html, head } = render(route.path)
  const page = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)

  const outPath =
    route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path.replace(/^\//, ''), 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log(`prerendered ${route.path} -> ${path.relative(root, outPath)}`)
}

function urlEntry({ path: routePath, lastmod, priority }) {
  const loc = routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${routePath}`
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`
}

const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  allRoutes.map(urlEntry).join('\n') +
  '\n</urlset>\n'

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
console.log(`wrote dist/sitemap.xml (${allRoutes.length} routes)`)

// The SSR bundle is a build-time-only tool, never served.
fs.rmSync(serverDir, { recursive: true, force: true })
