'use client'

import { useState, type FormEvent } from 'react'
import { SectionHeader } from '@/components/primitives'
import { ArrowRight } from '@/components/icons'

const inputClass =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-blue'

const labelClass = 'mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground'

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch("https://script.google.com/macros/s/AKfycbygwNfCG8k6oCiYWknBbra8xFrW4OFXsSg8M135GVlY1KbA1_Dtq21pCVfEgqb9u-xD/exec", {
        method: "POST",
        body: formData,
      })
      setSubmitted(true)
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="audit" className="bg-[#080808]">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHeader
          label="Performance Audit"
          title="Book your free performance audit."
          subtitle="A focused working session on exactly what is capping your revenue and what we would fix first. No pitch. No pressure."
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-[680px] rounded-xl border border-[#1a2a3a] bg-[#0f0f0f] p-6 sm:p-10"
        >
          {submitted ? (
            <div className="py-8 text-center">
              <h3 className="font-display text-2xl font-bold tracking-tight">Audit request received.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We review every submission. You&apos;ll hear back within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@yourbrand.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="website" className={labelClass}>
                    Brand Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="yourbrand.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="spend" className={labelClass}>
                    Monthly Ad Spend
                  </label>
                  <select id="spend" name="spend" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select range
                    </option>
                    <option value="under-3k">Under $3K</option>
                    <option value="3k-10k">$3K–$10K</option>
                    <option value="10k-30k">$10K–$30K</option>
                    <option value="30k-plus">$30K+</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="challenge" className={labelClass}>
                  What is your biggest challenge right now?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  placeholder="Current ROAS, revenue goal, biggest bottleneck..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
  type="submit"
  disabled={isSubmitting}
  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
>
  {isSubmitting ? "Submitting..." : "Get My Free Audit"} <ArrowRight className="h-4 w-4" />
</button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                We review every submission. Response within 24 hours. No spam ever.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
