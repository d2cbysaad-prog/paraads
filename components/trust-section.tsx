import { Shield, Clock, Lock } from 'lucide-react'

const stats = [
  { value: '3.8x', label: 'Average ROAS', sub: 'Across active nutra clients' },
  { value: '$43K', label: 'Avg Revenue Added', sub: 'Within first 90 days' },
  { value: '27%', label: 'CPA Reduction', sub: 'Blended across campaigns' },
  { value: '2.5x', label: 'AOV Growth', sub: 'Post offer restructure' },
]

const caseStudies = [
  {
    market: 'US Market',
    duration: '90-Day Engagement',
    category: "Men's Performance Supplements",
    status: 'Brand name withheld at client request',
    quote:
      'We were spending on ads and losing money every single month. We had a great product — but the math never worked. Within 90 days of working with Paraads, revenue went from $15K to $58K.',
    role: 'Founder, D2C Supplement Brand — United States',
    metrics: [
      { label: 'Revenue', before: '$15K/mo', after: '$58K/mo', delta: '+287%' },
      { label: 'ROAS', before: '1.4x', after: '3.8x', delta: '+171%' },
      { label: 'AOV', before: '$30', after: '$75', delta: '+2.5x' },
      { label: 'CPA', before: '$22', after: '$16', delta: '-27%' },
    ],
    period: 'Jan 1 – Mar 31, 2026',
  },
  {
    market: 'UK Market',
    duration: '60-Day Sprint',
    category: "Men's Multivitamin — Subscription Model",
    status: 'Brand name withheld at client request',
    quote:
      "We'd tried two agencies before. Both promised results and disappeared after the first invoice. Paraads fixed our offer in week one and we saw ROAS move before month two ended.",
    role: 'CEO, D2C Supplement Brand — United Kingdom',
    metrics: [
      { label: 'Revenue', before: '$8K/mo', after: '$29K/mo', delta: '+262%' },
      { label: 'ROAS', before: '1.2x', after: '3.1x', delta: '+158%' },
    ],
    period: 'Feb 1 – Mar 31, 2026',
  },
  {
    market: 'AU Market',
    duration: '90-Day Engagement',
    category: "Women's Wellness — D2C",
    status: 'Brand name withheld at client request',
    quote:
      'CPA dropped 31% in the first month without increasing spend. They found the leak immediately — our pixel was tracking the wrong events for two years.',
    role: 'Founder, D2C Supplement Brand — Australia',
    metrics: [
      { label: 'Revenue', before: '$12K/mo', after: '$38K/mo', delta: '+217%' },
      { label: 'CPA', before: 'Baseline', after: '-31%', delta: 'Month 1' },
    ],
    period: 'Jan 15 – Apr 15, 2026',
  },
]

export function TrustSection() {
  return (
    <section id="trust" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">

      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Evidence
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Validated results. Real numbers. No projections.
        </h2>
        <p className="text-base text-muted-foreground">
          Every case study below is a real engagement. Brand names are withheld at client request —
          full campaign data, ad accounts, and references are available on your audit call.
        </p>
      </div>

      {/* Aggregate Stats Bar */}
      <div className="mb-16 grid grid-cols-2 gap-px rounded-xl border border-border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-background px-6 py-6 first:rounded-l-xl last:rounded-r-xl">
            <p className="text-2xl font-bold text-foreground sm:text-3xl">{s.value}</p>
            <p className="mt-0.5 text-sm font-medium text-foreground">{s.label}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Disclaimer strip */}
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

      {/* Case Studies */}
      <div className="space-y-6">
        {caseStudies.map((cs, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border bg-background">

            {/* Card Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-6 py-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {cs.market}
                </span>
                <span className="text-xs text-muted-foreground">{cs.duration}</span>
                <span className="hidden text-muted-foreground/40 md:block">·</span>
                <span className="text-xs text-muted-foreground">{cs.category}</span>
              </div>
              <span className="text-xs text-muted-foreground/60 italic">{cs.period}</span>
            </div>

            <div className="p-6">
              {/* Metrics */}
              <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {cs.metrics.map((m, j) => (
                  <div key={j} className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {m.label}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs line-through text-muted-foreground/50">
                        {m.before}
                      </span>
                      <span className="text-sm font-bold text-foreground">{m.after}</span>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-primary">{m.delta}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-primary pl-4">
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  &ldquo;{cs.quote}&rdquo;
                </p>
                <footer className="mt-2 text-xs text-muted-foreground/60">— {cs.role}</footer>
              </blockquote>

              {/* Confidentiality note */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-muted-foreground/50 italic">{cs.status}</p>
                <button className="text-xs font-medium text-primary underline-offset-4 hover:underline">
                  Request full campaign data →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Trust Bar */}
      <div className="mt-12 rounded-xl border border-border bg-muted/30 px-6 py-6 text-center">
        <p className="text-sm font-medium text-foreground">
          Full ad account access, Meta Business Manager screenshots, and client references
          available on your free audit call.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          We do not share client data publicly. Everything is verified live — not on a PDF.
        </p>
        <button className="mt-4 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
          Book Free Revenue Audit →
        </button>
      </div>

    </section>
  )
}