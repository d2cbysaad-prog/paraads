'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/primitives'
import { ChevronDown } from '@/components/icons'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How is this different from other agencies?',
    a: "We don't start with ads. We start by auditing your offer and fixing your funnel. Most agencies skip this entirely. We don't — because no ad strategy can save a broken product page or a low-AOV offer.",
  },
  {
    q: 'When will I see results?',
    a: 'Most brands see measurable ROAS improvement within 30 days of launch. Full scaling results typically appear within 60–90 days depending on spend level and offer strength.',
  },
  {
    q: 'Do you guarantee results?',
    a: 'No honest agency guarantees specific numbers. What we guarantee is full transparency, weekly reporting, and a data-driven process that has produced consistent results across every engagement.',
  },
  {
    q: 'Do you work with brands outside the US?',
    a: 'Yes. We work with supplement D2C brands in US, UK, Europe, and Australia. Ad accounts and payment methods vary — we handle the setup.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free audit below. We review every submission within 24 hours and schedule a focused working session — not a sales call.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader label="FAQ" title="Questions supplement founders ask." />

      <div className="mt-14 flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div key={faq.q} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-blue transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
