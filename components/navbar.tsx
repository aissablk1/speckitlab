import { Github } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LocaleSwitcher } from '@/components/locale-switcher'

export function Navbar() {
  const t = useTranslations('nav')

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="relative inline-block size-6 rounded bg-foreground/95 overflow-hidden">
              <span className="absolute inset-x-1 top-1 h-1 rounded-sm bg-brand" style={{ background: 'oklch(74% 0.18 230)' }} />
              <span className="absolute inset-x-1 top-2.5 h-1 rounded-sm" style={{ background: 'oklch(74% 0.18 230 / 0.75)' }} />
              <span className="absolute inset-x-1 top-4 h-1 rounded-sm" style={{ background: 'oklch(74% 0.18 230 / 0.5)' }} />
            </span>
            <span className="text-[15px]">speckit<span className="opacity-60">lab</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
            <Link href="/docs/getting-started" className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-accent transition-colors">
              {t('gettingStarted')}
            </Link>
            <Link href="/docs/concepts/first-spec" className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-accent transition-colors">
              {t('concepts')}
            </Link>
            <Link href="/docs/templates/spec" className="px-3 py-1.5 rounded-md hover:text-foreground hover:bg-accent transition-colors">
              {t('templates')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild aria-label="GitHub repository">
            <a href="https://github.com/aissablk1/speckitlab" target="_blank" rel="noreferrer">
              <Github />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
