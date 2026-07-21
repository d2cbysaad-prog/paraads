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

      className="group relative flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-[#3b82f6]/40 bg-[#2563EB] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D4ED8] hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Category exclusivity enforced. We do not onboard competing brands in the same niche.
      </p>
    </section>
  )
}