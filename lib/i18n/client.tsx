'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALES,
  resolveDict,
  type Locale,
  type T,
} from './dict'

type Ctx = {
  locale: Locale
  t: T
  setLocale: (next: Locale) => void
  isPending: boolean
}

const LocaleContext = React.createContext<Ctx | null>(null)

function readCookie(): Locale {
  if (typeof document === 'undefined') return DEFAULT_LOCALE
  const raw = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${LOCALE_COOKIE}=`))
    ?.split('=')[1]
  return LOCALES.includes(raw as Locale) ? (raw as Locale) : DEFAULT_LOCALE
}

export function LocaleProvider({
  initial,
  children,
}: {
  initial: Locale
  children: React.ReactNode
}) {
  const [locale, setLocaleState] = React.useState<Locale>(initial)
  const [isPending, startTransition] = React.useTransition()
  const router = useRouter()

  // Re-sync from cookie on mount (safety net)
  React.useEffect(() => {
    const fromCookie = readCookie()
    if (fromCookie !== locale) setLocaleState(fromCookie)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const t = React.useMemo(() => resolveDict(locale), [locale])

  const setLocale = React.useCallback(
    (next: Locale) => {
      if (next === locale) return
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`
      setLocaleState(next)
      startTransition(() => {
        router.refresh()
      })
    },
    [locale, router]
  )

  const value = React.useMemo<Ctx>(
    () => ({ locale, t, setLocale, isPending }),
    [locale, t, setLocale, isPending]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useT(): T {
  const ctx = React.useContext(LocaleContext)
  if (!ctx) throw new Error('useT must be used within <LocaleProvider>')
  return ctx.t
}

export function useLocale(): Locale {
  const ctx = React.useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within <LocaleProvider>')
  return ctx.locale
}

export function useSetLocale() {
  const ctx = React.useContext(LocaleContext)
  if (!ctx) throw new Error('useSetLocale must be used within <LocaleProvider>')
  return { setLocale: ctx.setLocale, isPending: ctx.isPending }
}
