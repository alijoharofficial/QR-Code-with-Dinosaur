// Runs after both the client build (`vite build`) and the SSR build
// (`vite build --ssr src/entry-server.tsx --outDir dist/server`).
//
// For every route in the app's single route registry (src/content/routes.ts,
// re-exported by the SSR bundle) across all 7 languages, renders it to a
// static HTML string and writes it into dist/ at the right path, then
// generates dist/sitemap.xml (with hreflang alternates) from the same
// registry so it can never list a route that doesn't exist.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const serverDir = path.join(distDir, 'server')

const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

const { render, renderNotFound, allRoutes, SITE_URL } = await import(
  path.join(serverDir, 'entry-server.js')
)

function withHtmlLang(page, lang, rtl) {
  return page.replace(
    /<html lang="en">/,
    `<html lang="${lang}"${rtl ? ' dir="rtl"' : ''}>`,
  )
}

for (const route of allRoutes) {
  const { html, head, lang, rtl } = render(route.path)
  const page = withHtmlLang(
    template.replace('<!--app-head-->', head).replace('<!--app-html-->', html),
    lang,
    rtl,
  )

  const outPath =
    route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path.replace(/^\//, ''), 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log(`prerendered ${route.path} -> ${path.relative(root, outPath)}`)
}

// Group every route by its canonical (English) path so each <url> entry
// can list its sibling-language alternates for hreflang.
const byCanonical = new Map()
for (const route of allRoutes) {
  const group = byCanonical.get(route.canonicalPath) ?? []
  group.push(route)
  byCanonical.set(route.canonicalPath, group)
}

function urlEntry(route) {
  const loc = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`
  const alternates = byCanonical.get(route.canonicalPath) ?? []
  const defaultAlt = alternates.find((a) => a.lang === 'en')
  const hreflangLinks = alternates
    .map((a) => {
      const href = a.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${a.path}`
      return `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${href}" />`
    })
    .concat(
      defaultAlt
        ? [
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${
              defaultAlt.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${defaultAlt.path}`
            }" />`,
          ]
        : [],
    )
    .join('\n')
  return `  <url>\n    <loc>${loc}</loc>\n${hreflangLinks}\n    <lastmod>${route.lastmod}</lastmod>\n    <priority>${route.priority.toFixed(1)}</priority>\n  </url>`
}

const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  allRoutes.map(urlEntry).join('\n') +
  '\n</urlset>\n'

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
console.log(`wrote dist/sitemap.xml (${allRoutes.length} routes)`)

// dist/404.html is Vercel's (and most static hosts') convention for the
// page served on any unmatched path, so a real dead/broken link gets the
// site's own animated 404 instead of a blank host-default error page.
// Always English: a static host serves this one file for any unmatched
// path regardless of the locale prefix a visitor typed.
{
  const { html, head, lang, rtl } = renderNotFound()
  const page = withHtmlLang(
    template.replace('<!--app-head-->', head).replace('<!--app-html-->', html),
    lang,
    rtl,
  )
  fs.writeFileSync(path.join(distDir, '404.html'), page)
  console.log('wrote dist/404.html')
}

// The SSR bundle is a build-time-only tool, never served.
fs.rmSync(serverDir, { recursive: true, force: true })
