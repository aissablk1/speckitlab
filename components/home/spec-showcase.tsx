import { useTranslations } from 'next-intl'

export function SpecShowcase() {
  const t = useTranslations('showcase')

  return (
    <section className="skl-showcase">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* Left : narrative */}
          <div className="lg:sticky lg:top-28">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-4">
              01 &mdash; {t('kicker')}
            </div>
            <h2 className="skl-ed-h2">{t('heading')}</h2>
            <p className="mt-6 text-[15.5px] leading-[1.65] text-muted-foreground">
              {t('para1')}
            </p>
            <p className="mt-5 text-[15.5px] leading-[1.65] text-muted-foreground">
              {t('para2')}
            </p>
            <dl className="mt-8 space-y-3 text-[14px]">
              <div className="flex gap-6">
                <dt className="w-24 font-mono text-[12px] text-muted-foreground">{t('metric1Label')}</dt>
                <dd className="text-foreground">{t('metric1Value')}</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-24 font-mono text-[12px] text-muted-foreground">{t('metric2Label')}</dt>
                <dd className="text-foreground">{t('metric2Value')}</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-24 font-mono text-[12px] text-muted-foreground">{t('metric3Label')}</dt>
                <dd className="text-foreground">{t('metric3Value')}</dd>
              </div>
            </dl>
          </div>

          {/* Right : spec.md rendered */}
          <div className="skl-code">
            <div className="skl-code__head">
              <span className="skl-code__dots" aria-hidden>
                <i /><i /><i />
              </span>
              <span className="skl-code__file">specs/dark-mode-toggle/spec.md</span>
              <span className="skl-code__lang">markdown</span>
            </div>
            <pre className="skl-code__body"><code>
<span className="l">{`# Spec — Dark mode toggle`}</span>
{`\n`}
<span className="meta">{`> Status: active`}</span>{`\n`}
<span className="meta">{`> Owner: @aissablk1`}</span>{`\n`}
<span className="meta">{`> Updated: 2026-04-20`}</span>{`\n\n`}
<span className="hr">{`---`}</span>{`\n\n`}
<span className="h">{`## 1. Problem`}</span>{`\n\n`}
<span className="p">{`Users who prefer dark interfaces see a blinding flash`}</span>{`\n`}
<span className="p">{`of light on every page load. Beyond aesthetics, this`}</span>{`\n`}
<span className="p">{`causes eye strain during evening work sessions.`}</span>{`\n\n`}
<span className="h">{`## 2. Acceptance criteria`}</span>{`\n\n`}
<span className="p">{`| # | Criterion | Testable by |`}</span>{`\n`}
<span className="p">{`|---|-----------|-------------|`}</span>{`\n`}
<span className="p">{`| `}</span><span className="k">{`AC-1`}</span><span className="p">{` | First paint matches system pref | Playwright |`}</span>{`\n`}
<span className="p">{`| `}</span><span className="k">{`AC-2`}</span><span className="p">{` | Toggle persists across sessions | localStorage |`}</span>{`\n`}
<span className="p">{`| `}</span><span className="k">{`AC-3`}</span><span className="p">{` | CLS < 0.02 on /              | Lighthouse  |`}</span>{`\n\n`}
<span className="h">{`## 3. Non-goals`}</span>{`\n\n`}
<span className="p">{`- A full design tokens rework`}</span>{`\n`}
<span className="p">{`- A brand-new colour palette`}</span>{`\n`}
<span className="p">{`- Per-component theme overrides`}</span>{`\n\n`}
<span className="h">{`## 4. Metric`}</span>{`\n\n`}
<span className="p">{`CLS < 0.02, LCP unchanged, bundle +`}</span><span className="k">{`< 1.5 KB`}</span><span className="p">{`.`}</span>
            </code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}
