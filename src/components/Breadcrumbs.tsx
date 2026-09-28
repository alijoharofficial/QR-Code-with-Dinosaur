import { Link } from 'react-router-dom'

export interface BreadcrumbLink {
  name: string
  path: string
}

interface BreadcrumbsProps {
  items: BreadcrumbLink[]
}

/** Visual breadcrumb trail; pair with `buildBreadcrumbLd` for the matching JSON-LD. */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span className="font-medium text-text">{item.name}</span>
              ) : (
                <Link to={item.path} className="transition-colors hover:text-accent">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
