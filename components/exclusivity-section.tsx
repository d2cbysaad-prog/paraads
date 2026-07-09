import { ArrowRight } from '@/components/icons'

export function ExclusivitySection() {
  return (
    <section id="capacity" className="bg-[#08101f]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Capacity
        </p>
        <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
          We take on a maximum of 3 nutraceutical brands per quarter.
        </h2>
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
          To maintain execution depth and full category exclusivity, we do not onboard competing
          brands in the same niche. Brand and niche verified before engagement begins.
        </p>
        <a
          href="#audit"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Request Your Allocation <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
