'use client'

import { useT } from '@/lib/i18n/client'

export function Footer() {
  const f = useT().footer
  return (
    <footer className="mt-24 border-t border-border/80 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>{f.rights}</span>
        <span>{f.built}</span>
      </div>
    </footer>
  )
}
