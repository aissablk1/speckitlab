'use client'

import { cn } from '@/lib/utils'
import { useLocale, useSetLocale } from '@/lib/i18n/client'

export function LocaleSwitcher() {
  const locale = useLocale()
  const { setLocale, isPending } = useSetLocale()

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-border/70 bg-background px-1 py-0.5 font-mono text-[12px] font-semibold',
        isPending && 'opacity-70'
      )}
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-current={locale === 'en' ? 'true' : undefined}
        className={cn(
          'rounded-full px-1.5 py-0.5 transition-colors',
          locale === 'en' ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </button>
      <span className="text-muted-foreground/40" aria-hidden>/</span>
      <button
        type="button"
        onClick={() => setLocale('fr')}
        aria-current={locale === 'fr' ? 'true' : undefined}
        className={cn(
          'rounded-full px-1.5 py-0.5 transition-colors',
          locale === 'fr' ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        FR
      </button>
    </div>
  )
}
