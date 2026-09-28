import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Tech24Link } from './Tech24Link'
import { TECH24_HOME } from '../content/tech24'

const columns = [
  {
    heading: 'Tools',
    links: [
      { to: '/qr-code-with-dinosaur', label: 'QR w/ Dinosaur' },
      { to: '/qr-code-with-logo', label: 'QR w/ Logo' },
      { to: '/custom-qr-code', label: 'Custom QR' },
      { to: '/qr-code-for-menu', label: 'QR for Menu' },
      { to: '/qr-code-for-wifi', label: 'QR for WiFi' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { to: '/guides', label: 'Guides' },
      { to: '/#faq', label: 'FAQ' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
      { to: '/privacy-policy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms' },
    ],
  },
]

interface FooterProps {
  /** The homepage never shows the TECH24 credit line, by explicit design —
   * it should read as a standalone free tool, not an agency product. Every
   * other page shows the one small, muted line. */
  showTech24Credit: boolean
}

export function Footer({ showTech24Credit }: FooterProps) {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-sm font-semibold text-text">{column.heading}</h3>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-sm text-muted sm:px-6">
        <p>{t('appTagline')}</p>
        {showTech24Credit && (
          <p className="mt-1">
            Built by{' '}
            <Tech24Link
              href={TECH24_HOME}
              campaign="footer"
              className="text-muted underline decoration-border underline-offset-2 hover:text-accent"
            >
              TECH24
            </Tech24Link>
          </p>
        )}
      </div>
    </footer>
  )
}
