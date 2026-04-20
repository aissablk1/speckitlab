import { Github } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LocaleSwitcher } from '@/components/locale-switcher'
import { Logo } from '@/components/logo'

export function Navbar() {
  const t = useTranslations('nav')

  return (
    <div className="sticky top-4 z-40 w-full px-3 sm:px-4 pt-1 pointer-events-none">
      <header className="skl-navbar pointer-events-auto mx-auto flex h-12 max-w-5xl items-center justify-between gap-3 rounded-full border border-border/70 bg-background/70 px-2.5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50 shadow-[0_1px_2px_oklch(0%_0_0/0.04),0_8px_24px_-12px_oklch(0%_0_0/0.12)] dark:shadow-[0_1px_2px_oklch(0%_0_0/0.4),0_12px_32px_-8px_oklch(0%_0_0/0.5)]">
        <div className="flex items-center gap-5 pl-1.5">
          <Link href="/" className="skl-logo flex items-center gap-2 tracking-tight" aria-label="speckitlab">
            <Logo size={22} />
            <span className="text-[14px] leading-none">
              <span className="font-medium">speckit</span><span className="font-extrabold">lab</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5 text-[13px] text-muted-foreground">
            <Link href="/docs/getting-started" className="px-2.5 py-1 rounded-full hover:text-foreground hover:bg-accent/60 transition-colors">
              {t('gettingStarted')}
            </Link>
            <Link href="/docs/concepts/first-spec" className="px-2.5 py-1 rounded-full hover:text-foreground hover:bg-accent/60 transition-colors">
              {t('concepts')}
            </Link>
            <Link href="/docs/templates/spec" className="px-2.5 py-1 rounded-full hover:text-foreground hover:bg-accent/60 transition-colors">
              {t('templates')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <LocaleSwitcher />
          <div className="h-5 w-px bg-border/60" aria-hidden />
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild aria-label="GitHub" className="size-8 rounded-full">
            <a href="https://github.com/aissablk1/speckitlab" target="_blank" rel="noreferrer">
              <Github className="size-4" />
            </a>
          </Button>
        </div>
      </header>
    </div>
  )
}
