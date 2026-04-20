import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ChevronRight } from 'lucide-react'

export function BigCTA() {
  const t = useTranslations('bigcta')

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="skl-bigcta" aria-label={t('kicker')}>
        <div className="skl-bigcta__glow" aria-hidden />
        <p className="skl-bigcta__kicker">{t('kicker')}</p>
        <h2 className="skl-bigcta__heading">{t('heading')}</h2>
        <p className="skl-bigcta__subtitle">{t('subtitle')}</p>
        <div className="skl-bigcta__ctas">
          <Link
            href="/docs/concepts/first-spec"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-[oklch(96%_0.004_250)] text-[oklch(14%_0.012_250)] font-medium text-[15px] transition-[transform,background,box-shadow] hover:-translate-y-px hover:bg-[oklch(100%_0_0)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(14%_0.012_250)]"
          >
            {t('secondary')}
            <ChevronRight className="size-4" />
          </Link>
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-white/20 bg-white/[0.03] text-white/85 font-medium text-[15px] transition-[transform,background,border-color,color] hover:-translate-y-px hover:bg-white/10 hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[oklch(14%_0.012_250)]"
          >
            {t('primary')}
            <ChevronRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
