import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ChevronRight, Github } from 'lucide-react'

export function Hero() {
  const t = useTranslations('hero')
  const title = (
    <>
      {t('titleStart')}
      <em>{t('titleEm')}</em>
      {t('titleEnd').split('\n').map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  )

  const chaosLines = [
    { text: 'idea: something like a dark-mode toggle?', delay: 0 },
    { text: 'TODO: ask the team — is this urgent?', delay: 90 },
    { text: 'maybe useState somewhere, css var? or data-attr?', delay: 180, strike: true },
    { text: 'figma says blue but actually gray? flash issue', delay: 270 },
    { text: 'ship it on Friday — or Monday? no backend deps.', delay: 360 },
  ]

  const specLines = [
    { k: '# Problem', v: 'First paint flashes wrong theme → eye strain.', delay: 400 },
    { k: '# AC-1', v: 'Paint matches system pref on load.', delay: 510 },
    { k: '# Non-goal', v: 'Not a full design tokens rework.', delay: 620 },
    { k: '# Metric', v: 'CLS < 0.02 on all routes.', delay: 730 },
  ]

  return (
    <section className="skl-hero" aria-label={t('eyebrow')}>
      <div className="skl-hero__mesh" aria-hidden />
      <div className="skl-hero__grain" aria-hidden />

      <div className="skl-hero__intro">
        <p className="skl-eyebrow">
          <span className="skl-pulse" aria-hidden />
          {t('eyebrow')}
        </p>
        <h1 className="skl-hero__title">{title}</h1>
        <p className="skl-hero__subtitle">{t('subtitle')}</p>
        <div className="skl-hero__ctas">
          <Button asChild size="lg">
            <Link href="/docs/getting-started">
              {t('primary')}
              <ChevronRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/aissablk1/speckitlab" target="_blank" rel="noreferrer">
              <Github />
              {t('secondary')}
            </a>
          </Button>
        </div>
      </div>

      <div className="skl-hero__split" aria-hidden>
        <div className="skl-editor">
          <span className="skl-editor__label">{t('beforeLabel')}</span>
          <div className="skl-editor__body">
            {chaosLines.map((line, i) => (
              <p
                key={i}
                className={`skl-editor__line${line.strike ? ' skl-editor__line--strike' : ''}`}
                style={{ animationDelay: `${line.delay}ms` }}
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>

        <div className="skl-hero__arrow" aria-hidden>›</div>

        <div className="skl-editor">
          <span className="skl-editor__label">{t('afterLabel')}</span>
          <div className="skl-editor__body skl-spec">
            {specLines.map((line, i) => (
              <div
                key={i}
                className="skl-editor__spec-line"
                style={{ animationDelay: `${line.delay}ms` }}
              >
                <span className="skl-editor__spec-k">{line.k}</span>
                <span className="skl-editor__spec-v">{line.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
