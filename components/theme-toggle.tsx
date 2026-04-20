'use client'

import * as React from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="size-9" aria-hidden />
  }

  const next = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'
  const label = theme === 'dark' ? 'Light' : theme === 'light' ? 'System' : 'Dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${label} theme`}
      onClick={() => setTheme(next)}
    >
      {theme === 'dark' ? <Moon /> : theme === 'light' ? <Sun /> : <Monitor />}
    </Button>
  )
}
