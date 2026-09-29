import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Client-side route changes don't reset scroll position the way a full page
 * load does, so navigating to a new page (e.g. clicking a guide card) could
 * otherwise land the visitor wherever the previous page happened to be
 * scrolled to.
 *
 * A hash link (e.g. the footer's "/#faq") is handled explicitly rather than
 * left to the browser: native hash-anchor scrolling only fires for a real
 * navigation event, not for the history.pushState() a router <Link> performs,
 * so without this the URL's hash would update but the page would never
 * actually scroll to it.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
