'use client'

const caseStudies = [
  {
    tag: 'US Market',
    duration: '90-Day Engagement',
    category: "Men's Performance Supplements",
    period: 'Jan 1 – Mar 31, 2026',
    quote:
      'We were spending on ads and losing money every single month. We had a great product — but the math never worked.',
    role: 'Founder, D2C Supplement Brand — United States',
    metrics: [
      { label: 'ROAS', before: '1.4x', after: '3.8x', delta: '+171%', positive: true },
      { label: 'Monthly Revenue', before: '$15K', after: '$58K', delta: '+287%', positive: true },
      { label: 'Avg Order Value', before: '$30', after: '$75', delta: '+2.5x', positive: true },
      { label: 'Blended CPA', before: '$22', after: '$16', delta: '−27%', positive: true },
    ],
    // bar chart: weekly revenue progression wk1–wk8 as % of max
    weeklyProgress: [19, 27, 35, 47, 60, 74, 87, 100],
    weeklyLabels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6', 'Wk 7', 'Wk 8'],
    weeklyValues: ['$3.7K', '$5.2K', '$6.8K', '$9.1K', '$11.5K', '$14.2K', '$16.8K', '$19.3K'],
  },
  {
    tag: 'UK Market',
    duration: '60-Day Sprint',
    category: "Men's Multivitamin — Subscription",
    period: 'Feb 1 – Mar 31, 2026',
    quote:
      "We'd tried two agencies before. Both promised results and disappeared after the first invoice.",
    role: 'CEO, D2C Supplement Brand — United Kingdom',
    metrics: [
      { label: 'ROAS', before: '1.2x', after: '3.1x', delta: '+158%', positive: true },
      { label: 'Monthly Revenue', before: '$8K', after: '$29K', delta: '+262%', positive: true },
      { label: 'AOV', before: 'Single SKU', after: 'Bundle', delta: 'Restructured', positive: true },
      { label: 'Timeline', before: '—', after: '60 Days', delta: 'Sprint', positive: true },
    ],
    weeklyProgress: [20, 38, 55, 70, 83, 95, 100, null],
    weeklyLabels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6', 'Wk 7', 'Wk 8'],
    weeklyValues: ['', '', '', '', '', '', '$29K', ''],
  },
  {
    tag: 'AU Market',
    duration: '90-Day Engagement',
    category: "Women's Wellness — D2C",
    period: 'Jan 15 – Apr 15, 2026',
    quote:
      'CPA dropped 31% in the first month without increasing spend. They found the leak immediately — our pixel was tracking the wrong events for two years.',
    role: 'Founder, D2C Supplement Brand — Australia',
    metrics: [
      { label: 'Monthly Revenue', before: '$12K', after: '$38K', delta: '+217%', positive: true },
      { label: 'Blended CPA', before: 'Baseline', after: '−31%', delta: 'Month 1', positive: true },
      { label: 'Pixel', before: 'Broken', after: 'Fixed', delta: 'Week 1', positive: true },
      { label: 'Ad Spend', before: 'Same', after: 'Same', delta: 'No increase', positive: true },
    ],
    weeklyProgress: [15, 28, 42, 56, 68, 80, 90, 100],
    weeklyLabels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6', 'Wk 7', 'Wk 8'],
    weeklyValues: ['', '', '', '', '', '', '', '$38K'],
  },
]

function MiniBarChart({
  progress,
  labels,
  values,
}: {
  progress: (number | null)[]
  labels: string[]
  values: string[]
}) {
  return (
    <div className="mt-2">
      <div className="flex items-end gap-1 h-16">
        {progress.map((p, i) =>
          p !== null ? (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-sm bg-primary/70 transition-all"
                style={{ height: `${p}%` }}
                title={values[i] || ''}
              />
            </div>
          ) : (
            <div key={i} className="flex-1" />
          )
        )}
      </div>
      <div className="mt-1 flex gap-1">
        {labels.map((l, i) => (
          <p key={i} className="flex-1 text-center text-[9px] text-muted-foreground/50">
            {l}
          </p>
        ))}
      </div>
    </div>
  )
}

export function EvidenceSection() {
  return (
    <section id="evidence" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      {/* Header — centred */}
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Evidence
        </p>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Validated results. Real numbers. No projections.
        </h2>
        <p className="mx-auto max-w-xl text-sm text-muted-foreground">
          Brand names withheld at client request. Full campaign data, ad account access, and
          references available on your audit call.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="space-y-8">
        {caseStudies.map((cs, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border bg-background"
          >
            {/* Card Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/30 px-6 py-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {cs.tag}
                </span>
                <span className="text-xs text-muted-foreground">{cs.duration}</span>
                <span className="hidden text-muted-foreground/30 md:block">·</span>
                <span className="text-xs text-muted-foreground">{cs.category}</span>
              </div>
              <span className="text-xs italic text-muted-foreground/50">{cs.period}</span>
            </div>

            <div className="grid gap-0 md:grid-cols-3">
              {/* Left — Metrics Grid */}
              <div className="col-span-2 grid grid-cols-2 gap-px border-r border-border bg-border">
                {cs.metrics.map((m, j) => (
                  <div key={j} className="bg-background px-6 py-5">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {m.label}
                    </p>
                    {/* Before → After visual */}
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground line-through">
                        {m.before}
                      </span>
                      <span className="text-muted-foreground/40">→</span>
                      <span className="text-sm font-bold text-foreground">{m.after}</span>
                    </div>
                    {/* Delta badge */}
                    <span className="mt-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {m.delta}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right — Chart + Quote */}
              <div className="flex flex-col justify-between px-6 py-5">
                {/* Mini Bar Chart */}
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Weekly Revenue Trend
                  </p>
                  <MiniBarChart
                    progress={cs.weeklyProgress}
                    labels={cs.weeklyLabels}
                    values={cs.weeklyValues}
                  />
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-border" />

                {/* Quote */}
                <blockquote>
                  <p className="text-xs italic leading-relaxed text-muted-foreground">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                  <footer className="mt-2 text-[10px] text-muted-foreground/50">
                    — {cs.role}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="mt-10 text-center text-xs text-muted-foreground/60">
        All results from live campaign data. Ad account access shown on audit call — not on a PDF.
      </p>
    </section>
  )
}