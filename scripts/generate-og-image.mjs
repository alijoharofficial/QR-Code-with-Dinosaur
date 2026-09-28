// One-off asset-generation tool: screenshots scripts/og-image-template.html
// (original inline SVG/CSS artwork) into public/og-image.png. Not part of
// the regular build — the image is a static, checked-in asset; re-run this
// manually if the template changes.
import { chromium } from 'playwright'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
})
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto('file://' + path.join(root, 'scripts/og-image-template.html'))
await page.waitForTimeout(200)
await page.screenshot({ path: path.join(root, 'public/og-image.png') })
await browser.close()
console.log('wrote public/og-image.png')
