import { SectionHeader } from '@/components/primitives'

const brands = [
  'Sports Nutrition',
  'Herbal Wellness',
  'Vitamins & Supplements',
  'Men & Women Health',
]

export function TrustSection() {
  return (
    <section id="trust" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-28">
      <SectionHeader
        label="Built For"
        title="Built Exclusively for D2C Nutraceutical Brands."
        subtitle="We partner with supplement brands serious about scaling beyond $50K/month."
      />

      <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="group flex h-28 items-center justify-center rounded-2xl border border-blue-500/40 bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]"
          >
            <span className="text-center text-sm font-semibold tracking-wide text-white">
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