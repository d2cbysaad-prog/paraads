'use client'

const clients = [
  {
    initial: 'V',
    name: 'Veltara Nutrition',
    market: 'United States',
    category: "Men's Performance",
    result: '3.8x ROAS',
  },
  {
    initial: 'C',
    name: 'Cellurix Labs',
    market: 'United Kingdom',
    category: 'Multivitamins',
    result: '$29K/mo revenue',
  },
  {
    initial: 'B',
    name: 'Braxon Performance',
    market: 'Australia',
    category: 'Sports Nutrition',
    result: '−31% CPA',
  },
  {
    initial: 'N',
    name: 'Norvia Wellness',
    market: 'Europe',
    category: "Women's Wellness",
    result: '2.5x AOV',
  },
]

export function TrustedBySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-28">
      {/* Header — centred like the rest of the site */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Trusted By
        </p>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Supplement brands that chose a different standard.
        </h2>
        <p className="mx-auto max-w-xl text-sm text-muted-foreground">
          We work exclusively with D2C nutraceutical brands serious about scaling past $50K/month.
        </p>
      </div>

      {/* Brand Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {clients.map((c, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-xl border border-border bg-muted/30 px-5 py-7 text-center transition hover:border-primary/40 hover:bg-muted/50"
          >
            {/* Brand Initial Avatar */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-lg font-bold text-primary">
              {c.initial}
            </div>

            {/* Brand Name */}
            <p className="text-sm font-semibold text-foreground">{c.name}</p>

            {/* Market + Category */}
            <p className="mt-1 text-xs text-muted-foreground">{c.market}</p>
            <p className="text-xs text-muted-foreground">{c.category}</p>

            {/* Divider */}
            <div className="my-4 h-px w-10 bg-border" />

            {/* Result pill */}
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {c.result}
            </span>
          </div>
        ))}
      </div>

      {/* Category exclusivity note */}
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Category exclusivity enforced — we do not onboard competing brands in the same niche.
      </p>
    </section>
  )
}