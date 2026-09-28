import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { GuideCredit } from '../components/GuideCredit'
import { findGuide } from '../content/guides'
import { findRouteMeta, homeRoute } from '../content/routes'
import { useRouteHead } from '../hooks/useRouteHead'

export function GuidePostPage() {
  const { slug = '' } = useParams()
  const guide = findGuide(slug)
  const route = findRouteMeta(`/guides/${slug}`) ?? homeRoute
  useRouteHead(route)

  if (!guide) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-text">Guide not found</h1>
        <p className="mt-3 text-muted">
          That guide doesn't exist, or the link is out of date.
        </p>
        <Link to="/guides" className="mt-6 inline-block font-semibold text-accent hover:text-accent-hover">
          Browse all guides
        </Link>
      </div>
    )
  }

  const { meta, Content } = guide

  return (
    <article className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: meta.h1, path: `/guides/${meta.slug}` },
        ]}
      />

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        {meta.h1}
      </h1>
      <p className="mt-2 text-sm text-muted">
        Published{' '}
        <time dateTime={meta.publishedDate}>
          {new Date(`${meta.publishedDate}T00:00:00Z`).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
          })}
        </time>
      </p>

      <div className="article-content mt-8">
        <Content />
      </div>

      <GuideCredit />

      <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
        <p className="text-sm text-muted">
          Ready to make your own?{' '}
          <Link to="/" className="font-semibold text-accent hover:text-accent-hover">
            Open the QR code generator
          </Link>{' '}
          or{' '}
          <Link to="/guides" className="font-semibold text-accent hover:text-accent-hover">
            browse more guides
          </Link>
          .
        </p>
      </div>
    </article>
  )
}
