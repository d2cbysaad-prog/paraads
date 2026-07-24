'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'The Problem', href: '#problem' },
  { label: 'The Engine', href: '#engine' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled
          ? 'border-blue-line bg-background/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-3 sm:px-6">
    <a href="#top" className="flex items-center">
  <Image
    src="/icon.png"
    alt="PARAADS"
    width={220}
    height={40}
    priority
    className="h-9 w-auto sm:h-10 md:h-14 lg:h-16"
  />
</a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Book Button */}
        <a
          href="#audit"
          className="hidden md:inline-flex items-center rounded-full bg-blue px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Book Free Audit
        </a>

        {/* Mobile Burger Icon */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b p-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-base text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            className="block w-full text-center rounded-full bg-blue px-5 py-3 text-sm font-medium text-accent-foreground"
            onClick={() => setIsOpen(false)}
          >
            Book Free Audit
          </a>
        </div>
      )}
    </header>
  )
}