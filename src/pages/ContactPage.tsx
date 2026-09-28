import { Breadcrumbs } from '../components/Breadcrumbs'
import { contactRoute } from '../content/routes'
import { SUPPORT_EMAIL } from '../content/site'
import { useRouteHead } from '../hooks/useRouteHead'

const CONTACT_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Question about the QR code generator')}`

export function ContactPage() {
  useRouteHead(contactRoute)

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        Contact
      </h1>

      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        Questions about how the generator works, feedback, or found something that's
        not scanning right? Send an email and we'll get back to you.
      </p>

      <a
        href={CONTACT_MAILTO}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-all hover:bg-accent-hover active:scale-[0.97]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
        Email us
      </a>

      <p className="mt-3 text-sm text-muted">{SUPPORT_EMAIL}</p>
    </div>
  )
}
