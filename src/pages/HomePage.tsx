import { FaqSection } from '../components/FaqSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { GuidesTeaserSection } from '../components/GuidesTeaserSection'
import { Hero } from '../components/Hero'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { IntroSection } from '../components/IntroSection'
import { QrToolWidget } from '../components/QrToolWidget'
import { SupportSection } from '../components/SupportSection'
import { TopToolsSection } from '../components/TopToolsSection'
import { useRouteHead } from '../hooks/useRouteHead'
import { homeFaq } from '../content/faq'
import { homeRoute } from '../content/routes'

export function HomePage() {
  useRouteHead(homeRoute)

  return (
    <>
      <Hero
        title={
          <>
            QR Code Generator with a <span className="text-accent">Dinosaur Logo</span>
          </>
        }
        subtitle="Free, custom QR codes with a dinosaur, monkey, tiger, or your own logo — cute, scannable, and ready in seconds."
      />
      <IntroSection>
        This is a free <strong className="text-text">custom QR code generator</strong>{' '}
        that turns any link, WiFi network, or contact card into a scannable code —
        styled with a cute animal icon like a dinosaur, monkey, or tiger, or your own
        logo. Every QR code is created entirely in your browser, downloads as PNG or
        SVG, and works forever with no signup and no watermark.
      </IntroSection>

      <QrToolWidget />

      <HowItWorksSection />
      <FeaturesSection />
      <TopToolsSection />
      <FaqSection items={homeFaq} />
      <SupportSection />
      <GuidesTeaserSection />
    </>
  )
}
