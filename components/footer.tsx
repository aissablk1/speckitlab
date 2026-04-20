'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import { LocaleSwitcher } from '@/components/locale-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { useT } from '@/lib/i18n/client'

export function Footer() {
  const f = useT().footer
  const year = new Date().getFullYear()

  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-10">
        {/* Colophon */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-start">
          <div className="shrink-0">
            <Logo size={56} />
          </div>
          <p className="max-w-2xl text-[15px] leading-[1.65] text-muted-foreground">
            {f.colophon}
          </p>
        </div>

        {/* Inline nav */}
        <nav
          aria-label="Footer"
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-muted-foreground"
        >
          <Link href="/docs/getting-started" className="hover:text-foreground transition-colors">
            {f.gettingStarted}
          </Link>
          <span className="text-border" aria-hidden>·</span>
          <Link href="/docs/concepts/first-spec" className="hover:text-foreground transition-colors">
            {f.concepts}
          </Link>
          <span className="text-border" aria-hidden>·</span>
          <Link href="/docs/templates/spec" className="hover:text-foreground transition-colors">
            {f.templates}
          </Link>
          <span className="text-border" aria-hidden>·</span>
          <a
            href="https://github.com/aissablk1/speckitlab"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
          >
            {f.github}
            <ArrowUpRight className="size-3.5 opacity-60" />
          </a>
          <span className="text-border" aria-hidden>·</span>
          <a
            href="https://github.com/github/spec-kit"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
          >
            {f.specKit}
            <ArrowUpRight className="size-3.5 opacity-60" />
          </a>
        </nav>

        {/* Admin line */}
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[12.5px] font-mono text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>
              © <span className="tabular-nums">{year}</span> {f.rightsHolder}
            </span>
            <span className="text-border" aria-hidden>·</span>
            <span className="tabular-nums">{f.version}</span>
            <span className="text-border" aria-hidden>·</span>
            <span>MIT</span>
          </div>
          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <ThemeToggle />
            <span className="text-border" aria-hidden>·</span>
            <span className="opacity-70">{f.signature}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
