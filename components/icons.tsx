import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </svg>
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

export function TrendDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7l6 6 4-4 8 8" />
      <path d="M21 17v-4h-4" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function ImageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="M4 17l4.5-4.5 3 3L15 11l5 5" />
    </svg>
  )
}

export function BrokenLink(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 12H7a3 3 0 0 1 0-6h2" />
      <path d="M15 6h2a3 3 0 0 1 3 3" />
      <path d="M15 18h2" />
      <path d="M12 3v3M12 18v3" />
      <path d="M9 12h2" />
    </svg>
  )
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  )
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  )
}

export function SocialIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 12a9 9 0 1 1-4.2-7.6" />
      <path d="M21 5v4h-4" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  )
}

export function PersonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  )
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M9.5 5C6.5 6.5 5 9 5 12v7h6v-8H8c0-2 .8-3.5 2.5-4.3L9.5 5zm9 0C15.5 6.5 14 9 14 12v7h6v-8h-3c0-2 .8-3.5 2.5-4.3L18.5 5z" />
    </svg>
  )
}
