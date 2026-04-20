import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="skl-hero-ed">
      <div className="skl-hero-ed__grid" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="skl-dot" aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {t('eyebrow')}
          </span>
        </div>

        <h1 className="skl-ed-h1">
          {t('titleStart')}
          <span className="skl-ed-h1__em">{t('titleEm')}</span>
          {t('titleEnd')}
        </h1>

        <div className="mt-10 max-w-xl">
          <p className="text-[17px] leading-[1.55] text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-10 flex items-center gap-6 text-[15px]">
          <Link
            href="/docs/getting-started"
            className="group inline-flex items-center gap-1.5 font-medium text-foreground underline underline-offset-[6px] decoration-foreground/20 hover:decoration-foreground transition-colors"
          >
            {t('primary')}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/docs/concepts/first-spec"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            See an example
          </Link>
        </div>
      </div>
    </section>
  )
}
