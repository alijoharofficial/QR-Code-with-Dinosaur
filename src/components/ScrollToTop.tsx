import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Client-side route changes don't reset scroll position the way a full page
 * load does, so navigating to a new page (e.g. clicking a guide card) could
 * otherwise land the visitor wherever the previous page happened to be
 * scrolled to. Skips a same-page hash link (e.g. footer's "/#faq") so it can
 * still jump to that anchor instead of being forced to the top.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
