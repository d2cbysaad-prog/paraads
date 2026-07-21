import { ShieldIcon } from '@/components/icons'

const links = [
  { label: 'The Problem', href: '#problem' },
  { label: 'The Engine', href: '#engine' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <a href="#top" className="flex items-center gap-2">
            <ShieldIcon className="h-6 w-6 text-blue" />
            <span className="font-display text-lg font-bold tracking-tight">Paraads</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-center text-xs text-muted-foreground">
            © 2026 Paraads. Performance Marketing for Nutraceuticals.
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/70">
          Built for supplement brands serious about scale.
        </p>
      </div>
    </footer>
  )
}
