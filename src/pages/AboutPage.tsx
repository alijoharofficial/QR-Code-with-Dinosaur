import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Tech24Link } from '../components/Tech24Link'
import { aboutRoute } from '../content/routes'
import { TECH24_HOME, TECH24_PACKAGES } from '../content/tech24'
import { useRouteHead } from '../hooks/useRouteHead'

export function AboutPage() {
  useRouteHead(aboutRoute)

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        About This QR Code Generator
      </h1>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
        <p>
          This is a free tool for making custom QR codes — with a dinosaur, monkey, or
          tiger icon, or your own logo — in your browser. There's no signup, no
          watermark, and no limit on how many codes you create. Every code is a
          static QR code, meaning the data you encode is built directly into the
          pattern rather than routed through a third-party redirect, so it keeps
          working for as long as the image exists.
        </p>
        <p>
          Everything happens locally: encoding your data, styling the code, and
          reading any logo you upload all run in your browser. Nothing you type or
          upload is sent to a server. See the{' '}
          <Link to="/privacy-policy" className="font-medium text-text underline decoration-border underline-offset-2 hover:text-accent">
            privacy policy
          </Link>{' '}
          for the full detail, including the analytics used to understand how the
          site is used.
        </p>
        <p>
          This free tool was built and maintained by{' '}
          <Tech24Link href={TECH24_HOME} campaign="about">
            TECH24
          </Tech24Link>
          , a small AI-driven marketing and web team. If you ever need more than a QR
          code — a website, branding, or marketing — you can see{' '}
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
