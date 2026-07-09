'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const fields = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Jane Doe' },
  {
    name: 'email',
    label: 'Work email',
    type: 'email',
    placeholder: 'jane@yourcompany.com',
  },
  {
    name: 'company',
    label: 'Company',
    type: 'text',
    placeholder: 'Acme Security',
  },
  {
    name: 'role',
    label: 'Role',
    type: 'text',
    placeholder: 'VP Revenue / CRO',
  },
]

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      role: formData.get('role'),
      context: formData.get('context'),
      date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })
    }

    try {
      await fetch('https://script.google.com/macros/s/AKfycbynNGx2AJd9Gm2Un6JMTST57xSuQ2SMOI2oT6U8IZ57nOpafXiyMXS6y6_-sc-IqduL/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error('Submission infrastructure error:', error)
    }

    setSubmitted(true)
  }

  return (
    <section id="audit" className="relative overflow-hidden py-24 sm:py-32 bg-[#060606]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-8 sm:p-10"
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-900/30 bg-blue-950/20 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-blue-400">
              Strategic Pipeline Audit
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              Book your executive pipeline audit.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-zinc-400">
              A focused working session on where your pipeline is leaking and the exact infrastructure to fix it. No pitch deck.
            </p>
          </div>

          {submitted ? (
            <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] p-8 text-center">
              <CheckCircle2 className="size-10 text-blue-500" />
              <h3 className="text-lg font-semibold text-zinc-100">
                Request received
              </h3>
              <p className="max-w-sm text-sm text-zinc-400">
                Our team will review your firm and respond within one business
                day to confirm your audit window.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.name} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={f.name}
                      className="text-xs font-medium text-zinc-400"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      className="rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="context"
                  className="text-xs font-medium text-zinc-400"
                >
                  What does growth look like this year? (optional)
                </label>
                <textarea
                  id="context"
                  name="context"
                  rows={3}
                  placeholder="Targets, current motion, biggest bottleneck…"
                  className="resize-none rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
              >
                Book Executive Pipeline Audit
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-center text-xs text-zinc-500">
                SOC 2 · ISO 27001 · GDPR · CCPA compliant. Your data is never
                shared.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}