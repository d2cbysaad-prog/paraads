import Image from 'next/image'
import { Pill } from '@/components/primitives'
import { QuoteIcon } from '@/components/icons'
import Link from 'next/dist/client/link'

export function VisionSection() {
  return (
    <section id="vision" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left column — founder card */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/founder-saad.png"
              alt="Saad, Founder and CEO of Paraads"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <div className="font-display text-xl font-bold tracking-tight text-foreground">
                Saad — Founder &amp; CEO, Paraads
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Founder &amp; CEO</div>
            </div>
          </div>
        </div>

        {/* Right column — copy */}
        <div>
          <Pill>The Paraads Vision</Pill>
          <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
            Ads Don't Scale Broken Businesses.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <div className="flex gap-3">
              <QuoteIcon className="mt-1 h-6 w-6 shrink-0 text-blue" />
              <p>
                Most supplement brands are not failing because their product is bad. They are
                failing because their ads, offer, and funnel were never engineered to work together.
                We fix the system — not just the campaigns.
              </p>
            </div>
            <p>
              Paraads was built on one belief — that paid media for nutraceuticals is not a creative
              guessing game. It is a repeatable engineering problem with a repeatable solution. Fix
              the offer. Fix the funnel. Fix the data. Then scale.
            </p>
            <p className="font-semibold text-foreground">
              For supplement founders ready to stop guessing and start scaling — the protocol is
              open.
            </p>
          </div>

         <div className="mt-8">
  <div className="text-sm font-semibold uppercase tracking-widest text-blue">
    Saad — Founder & CEO
  </div>

  <Link
    href="https://www.linkedin.com/in/saad-zahid1/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 rounded-lg border border-blue/30 bg-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-blue hover:bg-blue hover:text-white"
  >
    Connect on LinkedIn
    <span>→</span>
  </Link>
</div>
        </div>
      </div>
    </section>
  )
}
