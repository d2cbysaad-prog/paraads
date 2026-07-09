import { SectionHeader } from '@/components/primitives'

const steps = [
  {
    number: '01',
    title: 'Deep Audit',
    body: 'We audit your ads, offer, AOV, funnel, and tracking setup. We tell you exactly what is killing your ROAS. No 40-page PDF. Just the problems and the exact fixes.',
  },
  {
    number: '02',
    title: 'Fix the Foundation',
    body: 'We fix the offer, rebuild the funnel, and configure pixel and Conversions API correctly. No scaling happens until the foundation is solid.',
  },
  {
    number: '03',
    title: 'Launch & Scale',
    body: 'Hook-driven UGC creative. Full-funnel Meta + Google targeting. Retargeting systems live from day one. Then we scale what works using data only.',
  },
]

export function ProtocolSection() {
  return (
    <section id="protocol" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader
        label="The Protocol"
        title="Three steps. No fluff."
        subtitle="We don't start with ads. We start with what's broken."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="font-display text-4xl font-bold tracking-tight text-blue">
              {step.number}
            </div>
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
