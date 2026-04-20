import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'

export function Closing() {
  const t = useTranslations('closing')

  return (
    <section className="skl-closing">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-28 sm:py-40 border-t border-border/60">
        <div className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-4">
            03 &mdash; {t('kicker')}
          </div>
          <h2 className="skl-ed-h2">{t('heading')}</h2>
          <p className="mt-6 text-[15.5px] leading-[1.65] text-muted-foreground max-w-xl">
            {t('body')}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href="/docs/getting-started"
              className="group inline-flex items-center gap-2 text-[16px] font-medium text-foreground underline underline-offset-[6px] decoration-foreground/20 hover:decoration-foreground transition-colors"
            >
              {t('primary')}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/docs/templates/spec"
              className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('secondary')}
            </Link>
            <a
              href="https://github.com/aissablk1/speckitlab"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('github')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
