'use client'

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from 'react'
import { SectionHeader } from '@/components/primitives'
import { TargetIcon, SearchIcon, BoxIcon, SocialIcon, PersonIcon } from '@/components/icons'

type Counter = {
  target: number
  suffix: string
  prefix?: string
  label: string
  decimals?: number
}

const counters: Counter[] = [
  { target: 3.8, suffix: 'x', label: 'ROAS', decimals: 1 },
  { target: 58, prefix: '$', suffix: 'K', label: 'Peak Revenue' },
  { target: 27, suffix: '%', label: 'CPA Drop' },
  { target: 2.5, suffix: 'x', label: 'AOV Increase', decimals: 1 },
]

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
}

const services: Service[] = [
  {
    icon: TargetIcon,
    title: 'Meta Ads',
    body: 'Hook-based UGC creative strategy and full-funnel campaign management built specifically for supplement purchase cycles.',
  },
  {
    icon: SearchIcon,
    title: 'Google Ads',
    body: "Performance Max and dynamic retargeting that closes the warm traffic your Meta campaigns generate. We don't let intent go to waste.",
  },
  {
    icon: BoxIcon,
    title: 'Offer Engineering',
    body: 'We restructure your bundles and pricing to increase AOV. Better offers make every ad dollar work harder — this is always the first fix.',
  },
  {
    icon: SocialIcon,
    title: 'Content & Social',
    body: "Consistent on-brand content that warms your audience before they ever see a paid ad. The cheapest conversion tool you're not using.",
  },
  {
    icon: PersonIcon,
    title: 'Founder Brand',
    body: 'In nutraceuticals the founder is the brand. We build your LinkedIn and Instagram presence so trust compounds over time.',
  },
]

function useCountUp(target: number, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf = 0
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])

  return value.toFixed(decimals)
}

function CounterItem({ counter, active }: { counter: Counter; active: boolean }) {
  const display = useCountUp(counter.target, active, counter.decimals ?? 0)
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {counter.prefix}
        {display}
        {counter.suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
        {counter.label}
      </div>
    </div>
  )
}

export function EngineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="engine" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader
        label="The Engine"
        title="Most agencies launch ads on a broken foundation."
        subtitle=" We audit the first — because no creative fixes a $30 AOV with $22 CPA."
      />

      <div
        ref={ref}
        className="mt-14 grid grid-cols-2 gap-8 rounded-xl border border-border bg-muted/40 px-6 py-10 md:grid-cols-4"
      >
        {counters.map((counter) => (
          <CounterItem key={counter.label} counter={counter} active={active} />
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, body }, i) => (
          <div
            key={title}
            className="flex flex-col rounded-xl border border-border bg-card p-6"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-blue/40 bg-blue/5 text-blue">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-display text-lg font-bold tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            <span className="mt-auto pt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
