import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { localizedPath } from '../i18n/routing'
import { toolPageConfigs } from '../content/registry'
import { findIcon, toDataUri } from '../icons/data'
import { colorThemes } from '../lib/colorThemes'
import { dotStyles } from '../lib/dotStyles'
import { qrShapes } from '../lib/qrShapes'
import { useQrCode } from '../lib/useQrCode'
import { SUPPORT_EMAIL } from '../content/site'
import { Tech24Link } from './Tech24Link'
import { TECH24_HOME } from '../content/tech24'

const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Support request')}`

function FooterColumn({ heading, links }: { heading: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-text">{heading}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-sm text-muted transition-colors hover:text-accent">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterNeedAHand() {
  const { t } = useLanguage()

  const icon = findIcon('monkey')
  const colorTheme = colorThemes.find((c) => c.id === 'dino-green') ?? colorThemes[0]
  const dotStyle = dotStyles.find((s) => s.id === 'rounded') ?? dotStyles[0]
  const qrShape = qrShapes.find((s) => s.id === 'square') ?? qrShapes[0]

  const { containerRef } = useQrCode({
    data: SUPPORT_MAILTO,
    image: toDataUri(icon?.svg ?? ''),
    colorTheme,
    dotStyle,
    qrShape,
    size: 96,
  })

  return (
    <div className="flex items-center gap-4">
      <div className="shrink-0 rounded-xl bg-white p-2 shadow-sm">
        <div ref={containerRef} className="h-16 w-16 [&_svg]:block" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-text">{t('supportHeading')}</h3>
        <a
          href={SUPPORT_MAILTO}
          className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-contrast transition-all hover:bg-accent-hover active:scale-[0.97]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          {t('supportEmailButton')}
        </a>
      </div>
    </div>
  )
}

interface FooterProps {
  /** The homepage never shows the TECH24 credit line, by explicit design.
   * It should read as a standalone free tool, not an agency product. Every
   * other page shows the one small, muted line. */
  showTech24Credit: boolean
}

export function Footer({ showTech24Credit }: FooterProps) {
  const { t, languageId, content } = useLanguage()
  const p = (path: string) => localizedPath(path, languageId)

  const columns = [
    {
      heading: content.chrome.footerToolsHeading,
      links: toolPageConfigs.map((config) => ({ to: p(config.path), label: content.chrome.toolShort[config.id] })),
    },
    {
      heading: content.chrome.footerResourcesHeading,
      links: [
        { to: p('/guides'), label: content.chrome.navGuides },
        { to: `${p('/')}#faq`, label: content.chrome.footerFaqLabel },
      ],
    },
    {
      heading: content.chrome.footerServicesHeading,
      links: [
        { to: p('/services'), label: content.chrome.footerWhatWeOffer },
        { to: p('/contact'), label: content.chrome.footerContact },
      ],
    },
    {
      heading: content.chrome.footerCompanyHeading,
      links: [
        { to: p('/about'), label: content.chrome.navAbout },
        { to: p('/privacy-policy'), label: content.chrome.footerPrivacyPolicy },
        { to: p('/terms'), label: content.chrome.footerTerms },
      ],
    },
  ]

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 sm:flex-row sm:justify-between sm:gap-6">
        <FooterNeedAHand />
        <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-12">
          {columns.map((column) => (
            <FooterColumn key={column.heading} heading={column.heading} links={column.links} />
          ))}
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-sm text-muted sm:px-6">
        <p>{t('appTagline')}</p>
        {showTech24Credit && (
          <p className="mt-1">
            {content.chrome.footerBuiltBy}{' '}
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
