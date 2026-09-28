import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * Sets document.title and a noindex meta tag when the 404 page mounts
 * client-side. The prerendered 404.html already has these baked in for
 * direct/crawler hits (always in English, since a static host serves one
 * 404.html for the whole domain regardless of the locale prefix the
 * visitor typed); this covers in-app client-side navigation to an
 * unmatched path within an already-loaded locale, where no fresh page
 * load happens.
 */
export function useNotFoundHead() {
  const { content } = useLanguage()

  useEffect(() => {
    const previousTitle = document.title
    document.title = content.notFound.pageTitle

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
  }, [content])
}
