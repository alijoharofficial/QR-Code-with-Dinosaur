import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { privacyRoute } from '../content/routes'
import { SUPPORT_EMAIL } from '../content/site'
import { useRouteHead } from '../hooks/useRouteHead'

export function PrivacyPolicyPage() {
  useRouteHead(privacyRoute)

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]} />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated September 28, 2026</p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-semibold text-text">What this tool does with your data</h2>
          <p className="mt-2">
            Generating a QR code — including any link, WiFi password, contact
            details, or other content you type in, and any logo image you upload —
            happens entirely in your browser. None of it is sent to, or stored on,
            any server. Closing or refreshing the page clears it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">What we do store locally</h2>
          <p className="mt-2">
            Your theme (light or dark) and language preference are saved in your
            browser's local storage so they persist between visits. This stays on
            your device and is never transmitted anywhere.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Analytics</h2>
          <p className="mt-2">
            This site uses Google Tag Manager and Microsoft Clarity to understand,
            in aggregate, how the site is used — for example which pages are visited
            and roughly how people interact with them. These tools may set cookies
            and collect standard technical information (such as browser type and
            approximate location derived from IP address). They do not receive
            anything you type into the QR code generator itself.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Fonts</h2>
          <p className="mt-2">
            This site loads the Inter typeface from Google Fonts, which involves a
            request to Google's servers when the page loads.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">No accounts, no sale of data</h2>
          <p className="mt-2">
            There is no signup or account system, so there is no account data to
            protect or lose. We do not sell any data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Questions</h2>
          <p className="mt-2">
            For any privacy question, see the{' '}
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
