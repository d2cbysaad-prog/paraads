import { ArrowRight, ShieldIcon } from '@/components/icons'

const stats = [
  { value: '3.8x', label: 'Average ROAS Delivered' },
  { value: '$43K', label: 'Revenue Added in 90 Days' },
  { value: '27%', label: 'CPA Reduction' },
  { value: '2.5x', label: 'AOV Growth' },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-grid hero-grid-mask" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 pb-20 pt-28 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-xs font-medium text-blue">
          <span aria-hidden="true">⚡</span>
          Performance Marketing for Nutraceutical Brands
        </span>

        <h1 className="mt-8 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Running ads without results isn't marketing.
          <br />
          <span className="text-blue">Your sales look exactly like they did 3 months ago.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Most supplement brands have no ads problem.They have an offer problem. A funnel problem. A creative problem.
          We fix all three — then scale what the data proves.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#audit"
            className="inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Book Free Audit <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#evidence"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-blue/50"
          >
            <ShieldIcon className="h-4 w-4 text-blue" />
            See the Evidence
          </a>
        </div>

        <p className="mt-16 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Average verified outcomes across active nutra brands
        </p>

        <div className="mt-6 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card/70 px-5 py-6 text-left"
            >
              <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
