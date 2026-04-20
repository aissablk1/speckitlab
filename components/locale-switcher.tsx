'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import { useTransition } from 'react'

export function LocaleSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const set = (next: 'en' | 'fr') => {
    if (next === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-md border border-border bg-background px-1.5 py-1 font-mono text-[13px] font-semibold',
        isPending && 'opacity-70'
      )}
    >
      <button
        type="button"
        onClick={() => set('en')}
        aria-current={locale === 'en' ? 'true' : undefined}
        className={cn(
          'rounded px-1.5 py-0.5 transition-colors',
          locale === 'en' ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </button>
      <span className="text-muted-foreground/40 px-0.5" aria-hidden>/</span>
      <button
        type="button"
        onClick={() => set('fr')}
        aria-current={locale === 'fr' ? 'true' : undefined}
        className={cn(
          'rounded px-1.5 py-0.5 transition-colors',
          locale === 'fr' ? 'bg-accent text-foreground' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        FR
      </button>
    </div>
  )
}
