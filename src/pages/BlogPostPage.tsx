import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { findArticle } from '../content/articles'
import { findRouteMeta } from '../content/routes'
import { useRouteHead } from '../hooks/useRouteHead'

export function BlogPostPage() {
  const { slug = '' } = useParams()
  const article = findArticle(slug)
  const route = findRouteMeta(`/blog/${slug}`)

  if (article && route) {
    return <ArticleView slug={slug} article={article} />
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-16 text-center sm:px-6">
      <h1 className="text-2xl font-bold text-text">Guide not found</h1>
      <p className="mt-3 text-muted">
        That guide doesn't exist, or the link is out of date.
      </p>
      <Link to="/blog" className="mt-6 inline-block font-semibold text-accent hover:text-accent-hover">
        Browse all guides
      </Link>
    </div>
  )
}

function ArticleView({
  slug,
  article,
}: {
  slug: string
  article: NonNullable<ReturnType<typeof findArticle>>
}) {
  const route = findRouteMeta(`/blog/${slug}`)!
  useRouteHead(route)
  const { meta, Content } = article

  return (
    <article className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/blog' },
          { name: meta.h1, path: `/blog/${meta.slug}` },
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

      <div className="mt-12 rounded-2xl border border-border bg-surface p-5">
        <p className="text-sm text-muted">
          Ready to make your own?{' '}
          <Link to="/" className="font-semibold text-accent hover:text-accent-hover">
            Open the QR code generator
          </Link>{' '}
          or{' '}
          <Link to="/blog" className="font-semibold text-accent hover:text-accent-hover">
            browse more guides
          </Link>
          .
        </p>
      </div>
    </article>
  )
}
