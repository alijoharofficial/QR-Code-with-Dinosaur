import { useLocation } from 'react-router-dom'
import { FaqSection } from '../components/FaqSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { GuidesTeaserSection } from '../components/GuidesTeaserSection'
import { Hero } from '../components/Hero'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { IntroSection } from '../components/IntroSection'
import { QrToolWidget } from '../components/QrToolWidget'
import { SupportSection } from '../components/SupportSection'
import { TopToolsSection } from '../components/TopToolsSection'
import { useLanguage } from '../i18n/LanguageContext'
import { useRouteHead } from '../hooks/useRouteHead'
import { findRouteMeta } from '../content/routes'

export function HomePage() {
  const { content } = useLanguage()
  const { pathname } = useLocation()
  useRouteHead(findRouteMeta(pathname)!)

  return (
    <>
      <Hero
        title={
          <>
            {content.home.heroTitlePrefix} <span className="text-accent">{content.home.heroTitleAccent}</span>
          </>
        }
        subtitle={content.home.heroSubtitle}
      />
      <IntroSection>
        {content.home.introPrefix} <strong className="text-text">{content.home.introBold}</strong> {content.home.introSuffix}
      </IntroSection>

      <QrToolWidget />

      <HowItWorksSection />
      <FeaturesSection />
      <TopToolsSection />
      <FaqSection items={content.home.faq} heading={content.chrome.faqHeadingDefault} />
      <SupportSection />
      <GuidesTeaserSection />
    </>
  )
}
