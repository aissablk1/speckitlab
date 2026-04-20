import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export function BigCTA() {
  const t = useTranslations('bigcta')

  return (
    <section className="skl-bigcta mx-4 sm:mx-6 lg:mx-auto lg:max-w-7xl" aria-label={t('kicker')}>
      <div className="skl-bigcta__glow" aria-hidden />
      <p className="skl-bigcta__kicker">{t('kicker')}</p>
      <h2 className="skl-bigcta__heading">{t('heading')}</h2>
      <p className="skl-bigcta__subtitle">{t('subtitle')}</p>
      <div className="skl-bigcta__ctas">
        <Button asChild size="lg" variant="secondary">
          <Link href="/docs/getting-started">
            {t('primary')}
            <ChevronRight />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
          <Link href="/docs/concepts/first-spec">
            {t('secondary')}
            <ChevronRight />
          </Link>
        </Button>
      </div>
    </section>
  )
}
