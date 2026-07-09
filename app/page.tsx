import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { ProblemSection } from '@/components/problem-section'
import { EngineSection } from '@/components/engine-section'
import { TrustSection } from '@/components/trust-section'
import { EvidenceSection } from '@/components/evidence-section'
import { VisionSection } from '@/components/vision-section'
import { ProtocolSection } from '@/components/protocol-section'
import { ExclusivitySection } from '@/components/exclusivity-section'
import { FaqSection } from '@/components/faq-section'
import { AuditForm } from '@/components/audit-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <ProblemSection />
        <EngineSection />
        <TrustSection />
        <EvidenceSection />
        <VisionSection />
        <ProtocolSection />
        <ExclusivitySection />
        <FaqSection />
        <AuditForm />
      </main>
      <SiteFooter />
    </>
  )
}
