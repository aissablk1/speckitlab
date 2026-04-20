'use client'

import * as React from 'react'
import { Monitor, RotateCw, Maximize2 } from 'lucide-react'
import { useT } from '@/lib/i18n/client'

const MIN_WIDTH = 640
const MIN_HEIGHT = 560

type Kind = 'narrow' | 'short' | 'both' | null

export function ScreenGuard() {
  const [kind, setKind] = React.useState<Kind>(null)
  const t = useT()

  React.useEffect(() => {
    const mqNarrow = window.matchMedia(`(max-width: ${MIN_WIDTH - 1}px)`)
    const mqShort = window.matchMedia(`(max-height: ${MIN_HEIGHT - 1}px)`)

    const check = () => {
      const narrow = mqNarrow.matches
      const short = mqShort.matches
      setKind(narrow && short ? 'both' : narrow ? 'narrow' : short ? 'short' : null)
    }

    check()
    mqNarrow.addEventListener('change', check)
    mqShort.addEventListener('change', check)
    return () => {
      mqNarrow.removeEventListener('change', check)
      mqShort.removeEventListener('change', check)
    }
  }, [])

  if (!kind) return null

  const g = t.guard
  const message = kind === 'both' ? g.both : kind === 'narrow' ? g.narrow : g.short
  const Icon = kind === 'narrow' ? RotateCw : kind === 'short' ? Maximize2 : Monitor

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="screen-guard-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-6"
    >
      <div className="max-w-sm text-center">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full border border-border bg-card">
          <Icon className="size-6 text-muted-foreground" aria-hidden />
        </div>
        <h2
          id="screen-guard-title"
          className="mb-3 text-xl font-semibold tracking-tight text-foreground"
        >
          {g.heading}
        </h2>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{message}</p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70">
          {g.hint}
        </p>
      </div>
    </div>
  )
}
