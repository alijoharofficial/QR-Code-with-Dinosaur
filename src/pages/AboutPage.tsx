import { Link } from 'react-router-dom'
import { AboutIllustration } from '../components/AboutIllustration'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Tech24Link } from '../components/Tech24Link'
import { aboutRoute } from '../content/routes'
import { TECH24_HOME, TECH24_PACKAGES } from '../content/tech24'
import { useRouteHead } from '../hooks/useRouteHead'

const highlights = [
  {
    title: 'No signup, ever',
    body: 'Open the page, build a code, download it. No account, no email, no password.',
  },
  {
    title: 'Unlimited, no watermark',
    body: 'Make as many QR codes as you want. Every one downloads clean.',
  },
  {
    title: 'Static and permanent',
    body: "Your data is baked into the code itself, so it keeps working for as long as the image exists.",
  },
]

const privacyPoints = [
  'Encoding your data happens in your browser',
  'Styling the code happens in your browser',
  'Reading an uploaded logo happens in your browser',
  'Nothing you type or upload is ever sent to a server',
]

export function AboutPage() {
  useRouteHead(aboutRoute)

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />

      <div className="mt-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
        <AboutIllustration />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            About This QR Code Generator
          </h1>
          <p className="mt-3 text-balance text-base leading-relaxed text-muted">
            A free tool for making custom QR codes with a dinosaur, monkey, or tiger
            icon, or your own logo, entirely in your browser.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-2xl bg-surface-muted p-5 text-center">
            <h2 className="font-semibold text-text">{item.title}</h2>
            <p className="mt-1.5 text-sm text-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-emerald-700 p-6 shadow-soft sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10"
        />
        <h2 className="text-xl font-bold text-white">Everything stays on your device</h2>
        <ul className="relative mt-4 grid gap-2.5 sm:grid-cols-2">
          {privacyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-emerald-50/90">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
                <path d="m5 12 5 5 9-9" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
        <p className="relative mt-4 text-sm text-emerald-50/80">
          See the{' '}
          <Link to="/privacy-policy" className="font-semibold text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
            privacy policy
          </Link>{' '}
          for the full detail, including the analytics used to understand how the site
          is used.
        </p>
      </div>

      <div className="mt-10 space-y-4 text-base leading-relaxed text-muted">
        <p>
          This free tool was built and maintained by{' '}
          <Tech24Link href={TECH24_HOME} campaign="about">
            TECH24
          </Tech24Link>
          , a small AI-driven marketing and web team. If you ever need more than a QR
          code, a website, branding, or marketing, you can see{' '}
          <Tech24Link
            href={TECH24_PACKAGES}
            campaign="about"
            className="text-muted underline decoration-border underline-offset-2 hover:text-accent"
          >
            what they offer
          </Tech24Link>
          .
        </p>
        <p>
          Questions, feedback, or found a bug?{' '}
          <Link to="/contact" className="font-medium text-text underline decoration-border underline-offset-2 hover:text-accent">
            Get in touch
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
