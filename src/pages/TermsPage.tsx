import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { termsRoute } from '../content/routes'
import { SUPPORT_EMAIL } from '../content/site'
import { useRouteHead } from '../hooks/useRouteHead'

export function TermsPage() {
  useRouteHead(termsRoute)

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Terms of Use', path: '/terms' }]} />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        Terms of Use
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated September 28, 2026</p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-semibold text-text">The tool</h2>
          <p className="mt-2">
            This site provides a free QR code generator that runs entirely in your
            browser. You may use it to generate an unlimited number of QR codes for
            personal or commercial purposes, at no cost.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Your responsibility</h2>
          <p className="mt-2">
            You are responsible for the content you encode into a QR code and for
            testing that a generated code scans correctly before relying on it —
            for example, before printing it at scale. We recommend scanning a code
            with more than one device before distributing it widely.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">No warranty</h2>
          <p className="mt-2">
            This tool is provided "as is," without any warranty of any kind. We do
            our best to keep it accurate and reliable, but we do not guarantee
            uninterrupted availability or that every generated code will scan under
            every condition (for example, on damaged, poorly printed, or extremely
            low-contrast output).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Acceptable use</h2>
          <p className="mt-2">
            Don't use this tool to generate QR codes for illegal content, malware
            distribution, phishing, or anything intended to deceive or harm people
            who scan the resulting code.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Changes</h2>
          <p className="mt-2">
            These terms may be updated from time to time; the current version always
            applies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Questions</h2>
          <p className="mt-2">
            See the{' '}
            <Link to="/contact" className="font-medium text-text underline decoration-border underline-offset-2 hover:text-accent">
              contact page
            </Link>{' '}
            or email {SUPPORT_EMAIL}.
          </p>
        </section>
      </div>
    </div>
  )
}
