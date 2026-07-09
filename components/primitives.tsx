import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Pill({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-blue/40 bg-blue/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
}: {
  label: string
  title: ReactNode
  subtitle?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto flex max-w-2xl flex-col items-center text-center', className)}>
      <Pill>{label}</Pill>
      <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
