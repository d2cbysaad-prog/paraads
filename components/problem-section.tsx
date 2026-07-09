import type { ComponentType, SVGProps } from 'react'
import { SectionHeader } from '@/components/primitives'
import { TrendDown, ClockIcon, ImageIcon, BrokenLink } from '@/components/icons'

type Problem = {
  code: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
}

const problems: Problem[] = [
  {
    code: 'CRIT-01',
    icon: TrendDown,
    title: 'Collapsing ROAS',
    body: "You increase budget and ROAS drops. You're not scaling — you're bleeding. The algorithm has no margin to work with because your offer was never built for ads.",
  },
  {
    code: 'LEAK-02',
    icon: ClockIcon,
    title: 'Revenue Plateau',
    body: "Same monthly number for 6-8 months. Every test fails. Nobody told you the ceiling isn't your ads — it's your AOV and funnel structure.",
  },
  {
    code: 'DEGRAD-03',
    icon: ImageIcon,
    title: 'Dead Creative',
    body: 'Product shots. Generic wellness copy. The same visuals your competitors ran in 2019. CPM rising. CTR falling. The market has seen it all.',
  },
  {
    code: 'FAIL-04',
    icon: BrokenLink,
    title: 'Leaking Pipeline',
    body: "You're paying to bring cold traffic in and leaving 70% of warm visitors unconverted. No retargeting. No recovery. Just spend going out and not enough revenue coming back.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader
        label="The Gap"
        title="Most supplement brands are running ads on a broken foundation."
        subtitle="The problem is never the budget. It's always the system underneath."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {problems.map(({ code, icon: Icon, title, body }) => (
          <div
            key={code}
            className="relative rounded-xl border border-border bg-muted p-6 sm:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-danger/40 bg-danger-bg text-danger">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-danger">
                {code}
              </span>
            </div>
            <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
