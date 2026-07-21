import { SectionHeader, Pill } from '@/components/primitives'
import { AdsDashboard } from '@/components/ads-dashboard'
import { ArrowRight } from '@/components/icons'
import { Clock, Lock, Shield } from 'lucide-react'

const beforeList = [
  'Single $30 bottle — no bundles, no AOV strategy',
  'ROAS stuck at 1.4x for 8 months',
  'Generic product shot creatives only',
  'Pixel misconfigured — bad purchase data',
  'Zero retargeting system in place',
  'CPA $22 with no margin remaining',
]

const didList = [
  'Rebuilt offer: Buy 2 Get 1 / Buy 3 Get 2 — AOV $30 → $75',
  'Replaced product shots with UGC Before/After testimonial videos',
  'Launched Meta broad + Google Performance Max retargeting',
  'Fixed Pixel and Conversions API from scratch',
]

const resultBoxes = [
  { label: 'Monthly Revenue', before: '$15,000', after: '$58,000+', change: '↑287%' },
  { label: 'ROAS', before: '1.4x', after: '3.8x', change: '↑171%' },
  { label: 'Avg Order Value', before: '$30', after: '$75', change: '↑2.5x' },
  { label: 'Blended CPA', before: '$22', after: '$16', change: '↓27%' },
]

function GhostButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-blue/50 hover:text-foreground"
    >
      Request Case Study Log <ArrowRight className="h-3.5 w-3.5" />
    </button>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function MediumCard({
  market,
  duration,
  bigNumber,
  title,
  description,
}: {
  market: string
  duration: string
  bigNumber: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Pill className="text-[0.65rem]">{market}</Pill>
        <span className="text-xs text-muted-foreground">{duration}</span>
      </div>
      <div className="mt-6 font-display text-4xl font-bold tracking-tight text-blue">
        {bigNumber}
      </div>
      <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-6 flex justify-end pt-2">
        <GhostButton />
      </div>
    </div>
  )
}

export function EvidenceSection() {
  return (
    <section id="evidence" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader
        label="Evidence"
        title="Case Studies and Outcomes"
        subtitle=""
      />

       
       
      <div className="mb-12 flex flex-wrap items-center gap-6 rounded-lg border border-border bg-muted/40 px-5 py-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-4 w-4 shrink-0 text-primary" />
          <span>All results independently verifiable on audit call</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-4 w-4 shrink-0 text-primary" />
          <span>Brand names withheld — NDA with all active clients</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0 text-primary" />
          <span>All engagements documented Jan–Apr 2026</span>
        </div>
      </div>

      {/* Featured case study */}
      <div className="mt-14 rounded-xl border border-border bg-card p-6 sm:p-8 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-6">
          <Pill className="text-[0.65rem]">Supplement D2C — US Market</Pill>
          <span className="text-xs text-muted-foreground">
            90-Day Engagement · Meta + Google + Offer Rebuild
          </span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <blockquote className="border-l-[3px] border-blue pl-5 text-lg font-medium italic leading-relaxed text-foreground sm:text-xl">
              &ldquo;We were spending on ads and losing money every single month. We had a great
              product — but the math never worked.&rdquo;
            </blockquote>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Before Paraads
            </p>
            <Bullets items={beforeList} />

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              What We Did
            </p>
            <Bullets items={didList} />
          </div>

          {/* Right column — dashboard */}
          <div>
            <AdsDashboard />
          </div>
        </div>

        {/* Result boxes */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {resultBoxes.map((box) => (
            <div key={box.label} className="rounded-xl border border-border bg-muted p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {box.label}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Before <span className="font-mono text-foreground">{box.before}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  After <span className="font-mono text-foreground">{box.after}</span>
                </div>
                <span className="font-mono text-sm font-semibold text-success">{box.change}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          The single biggest lever was not the ads. It was the offer restructure. Once AOV went from
          $30 to $75, the math flipped — and we scaled from there.
        </p>

        <div className="mt-6 flex justify-end">
          <GhostButton />
        </div>
      </div>

      {/* Medium cards */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <MediumCard
          market="Supplement D2C — UK Market"
          duration="60-Day Sprint"
          bigNumber="+$21K"
          title="Men's multivitamin brand — from $8K to $29K/month"
          description="Offer restructure from single SKU to subscription bundle. UGC creative overhaul. ROAS improved from 1.2x to 3.1x in 60 days."
        />
        <MediumCard
          market="Supplement D2C — AU Market"
          duration="90-Day Engagement"
          bigNumber="3.4x"
          title="Women's wellness brand — CPA dropped 31% in first month"
          description="Full pixel rebuild, retargeting sequence, and bundle offer engineering. Revenue scaled from $12K to $38K/month without increasing ad spend."
        />
      </div>
    </section>
  )
}
