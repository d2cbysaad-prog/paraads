import { SectionHeader } from '@/components/primitives'

const brands = ['Veltara Nutrition', 'Cellurix Labs', 'Braxon Performance', 'Norvia Wellness']

export function TrustSection() {
  return (
    <section id="trust" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-28">
      <SectionHeader
        label="Trusted By"
        title="Supplement brands that chose a different standard."
        subtitle="We work with D2C nutraceutical brands serious about scaling past $50K/month."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="flex h-24 items-center justify-center rounded-xl border border-border bg-muted"
          >
            <span className="text-sm font-medium tracking-wide text-muted-foreground">
              {brand}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Category exclusivity enforced. We do not onboard competing brands in the same niche.
      </p>
    </section>
  )
}
