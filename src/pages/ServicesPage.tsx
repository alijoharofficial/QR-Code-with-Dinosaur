import { Breadcrumbs } from '../components/Breadcrumbs'
import { Tech24Link } from '../components/Tech24Link'
import { servicesRoute } from '../content/routes'
import { TECH24_HOME, TECH24_PACKAGES } from '../content/tech24'
import { useRouteHead } from '../hooks/useRouteHead'

const categories = [
  {
    title: 'Websites',
    body: 'Design and development for small-business and marketing sites — the same kind of thinking that went into keeping this tool fast and simple to use.',
  },
  {
    title: 'Branding',
    body: 'Logos, color systems, and visual identity for businesses that want to look as considered as they are.',
  },
  {
    title: 'Marketing',
    body: 'Ongoing marketing support, built around the same AI-assisted workflow used to run this free tool.',
  },
]

export function ServicesPage() {
  useRouteHead(servicesRoute)

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        Services
      </h1>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
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

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {categories.map((category) => (
          <div key={category.title} className="rounded-2xl border border-border bg-surface p-5">
            <h2 className="font-semibold text-text">{category.title}</h2>
            <p className="mt-1.5 text-sm text-muted">{category.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-base leading-relaxed text-muted">
        Full details, including current packages, are on{' '}
        <Tech24Link href={TECH24_PACKAGES} campaign="services">
          tech24.cc/packages
        </Tech24Link>
        .
      </p>
    </div>
  )
}
