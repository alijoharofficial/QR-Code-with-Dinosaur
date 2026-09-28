import { Breadcrumbs } from '../components/Breadcrumbs'
import { Tech24Link } from '../components/Tech24Link'
import { servicesRoute } from '../content/routes'
import { TECH24_HOME, TECH24_PACKAGES } from '../content/tech24'
import { useRouteHead } from '../hooks/useRouteHead'

const categories = [
  {
    title: 'Websites',
    body: 'Design and development for small-business and marketing sites, the same kind of thinking that went into keeping this tool fast and simple to use.',
    icon: (
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z M4 9h16 M8 4v5" />
    ),
  },
  {
    title: 'Branding',
    body: 'Logos, color systems, and visual identity for businesses that want to look as considered as they are.',
    icon: <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z M9 12l2 2 4-4" />,
  },
  {
    title: 'Marketing',
    body: 'Ongoing marketing support, built around the same AI-assisted workflow used to run this free tool.',
    icon: <path d="M3 11 21 3l-4 18-5-7-7-3Z" />,
  },
  {
    title: 'E-commerce',
    body: 'Online storefronts that are quick to browse and easy to check out from, on any device.',
    icon: (
      <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6 M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    ),
  },
  {
    title: 'SEO',
    body: 'The same technical and content approach used to get this free tool found in search, applied to your site.',
    icon: <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z M16 16l5 5" />,
  },
  {
    title: 'Ongoing support',
    body: 'A team that keeps things running after launch, not just at handoff.',
    icon: <path d="M12 8v4l3 3 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />,
  },
]

const process = [
  { step: '1', title: 'Talk it through', body: 'A short, plain-language conversation about what you actually need.' },
  { step: '2', title: 'See a plan', body: 'A clear scope and price before anything starts, no surprises later.' },
  { step: '3', title: 'Ship and support', body: 'Launch, then ongoing help, the same reliability this free tool aims for.' },
]

export function ServicesPage() {
  useRouteHead(servicesRoute)

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        Services
      </h1>

      <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          This QR code generator is free and always will be. It's made and maintained
          by{' '}
          <Tech24Link href={TECH24_HOME} campaign="services">
            TECH24
          </Tech24Link>
          , a small AI-driven marketing and web team. If you're a small business and
          ever need more than a QR code, here's a plain-language overview of what
          they work on.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-accent transition-colors group-hover:bg-accent group-hover:text-accent-contrast">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                {category.icon}
              </svg>
            </span>
            <h2 className="mt-3 font-semibold text-text">{category.title}</h2>
            <p className="mt-1.5 text-sm text-muted">{category.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-surface-muted p-6 sm:p-8">
        <h2 className="text-center text-xl font-bold text-text">How it works</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {process.map((item) => (
            <div key={item.step} className="text-center">
              <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-contrast">
                {item.step}
              </span>
              <h3 className="mt-3 font-semibold text-text">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted">
        Full details, including current packages, are on{' '}
        <Tech24Link href={TECH24_PACKAGES} campaign="services">
          tech24.cc/packages
        </Tech24Link>
        .
      </p>
    </div>
  )
}
