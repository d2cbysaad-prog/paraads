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
            className="group relative flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220] transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6]/50 hover:bg-[#101827] hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
          >
            {/* Top Glow */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/60 to-transparent" />

            <span className="text-center text-sm font-semibold tracking-wide text-slate-300 transition-colors duration-300 group-hover:text-white">
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