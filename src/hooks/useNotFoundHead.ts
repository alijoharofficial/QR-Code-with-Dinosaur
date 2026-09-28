import { useEffect } from 'react'

/**
 * Sets document.title and a noindex meta tag when the 404 page mounts
 * client-side. The prerendered 404.html already has these baked in for
 * direct/crawler hits; this covers in-app client-side navigation to an
 * unmatched path, where no fresh page load happens.
 */
export function useNotFoundHead() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Page Not Found | QR Code Generator'

    let robotsMeta = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const created = !robotsMeta
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta')
      robotsMeta.setAttribute('name', 'robots')
      document.head.appendChild(robotsMeta)
    }
    const previousContent = robotsMeta.getAttribute('content')
    robotsMeta.setAttribute('content', 'noindex, follow')

    return () => {
      document.title = previousTitle
      if (created) {
        robotsMeta?.remove()
      } else if (previousContent !== null) {
        robotsMeta?.setAttribute('content', previousContent)
      }
    }
  }, [])
}
