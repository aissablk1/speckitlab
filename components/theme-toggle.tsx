'use client'

import * as React from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [, startTransition] = React.useTransition()

  React.useEffect(() => setMounted(true), [])

  const handleClick = React.useCallback(() => {
    const next = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'
    // Defer the setTheme call so the click response paints first
    startTransition(() => {
      setTheme(next)
    })
  }, [theme, setTheme])

  if (!mounted) {
    return <div className="size-8" aria-hidden />
  }

  const label = theme === 'dark' ? 'Light' : theme === 'light' ? 'System' : 'Dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${label} theme`}
      onClick={handleClick}
      className="size-8 rounded-full"
    >
      {theme === 'dark' ? <Moon /> : theme === 'light' ? <Sun /> : <Monitor />}
    </Button>
  )
}
