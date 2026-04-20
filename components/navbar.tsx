import { Github } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LocaleSwitcher } from '@/components/locale-switcher'

export function Navbar() {
  const t = useTranslations('nav')

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-7">
          <Link href="/" className="flex items-center gap-2 font-medium tracking-tight">
            <span className="relative inline-block size-6 rounded-[6px] bg-foreground/95 overflow-hidden">
              <span className="absolute inset-x-[5px] top-[5px] h-[3px] rounded-sm" style={{ background: 'oklch(72% 0.16 230)' }} />
              <span className="absolute inset-x-[5px] top-[11px] h-[3px] rounded-sm" style={{ background: 'oklch(72% 0.16 230 / 0.72)' }} />
              <span className="absolute inset-x-[5px] top-[17px] h-[3px] rounded-sm" style={{ background: 'oklch(72% 0.16 230 / 0.45)' }} />
            </span>
            <span className="text-[15px] font-semibold">speckit<span className="opacity-55">lab</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5 text-[13.5px] text-muted-foreground">
            <Link href="/docs/getting-started" className="px-2.5 py-1.5 rounded-md hover:text-foreground hover:bg-accent/60 transition-colors">
              {t('gettingStarted')}
            </Link>
            <Link href="/docs/concepts/first-spec" className="px-2.5 py-1.5 rounded-md hover:text-foreground hover:bg-accent/60 transition-colors">
              {t('concepts')}
            </Link>
            <Link href="/docs/templates/spec" className="px-2.5 py-1.5 rounded-md hover:text-foreground hover:bg-accent/60 transition-colors">
              {t('templates')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-1.5">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <a href="https://github.com/aissablk1/speckitlab" target="_blank" rel="noreferrer">
              <Github />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
