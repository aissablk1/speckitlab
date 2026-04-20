import { useTranslations } from 'next-intl'

type Artefact = {
  file: string
  sub: string
  excerpt: string[]
}

export function Flow() {
  const t = useTranslations('flow')

  const artefacts: Artefact[] = [
    {
      file: 'spec.md',
      sub: t('specSub'),
      excerpt: [
        '# Problem',
        'First paint flashes',
        'wrong theme.',
        '',
        '# AC-1',
        'Paint matches pref.',
      ],
    },
    {
      file: 'plan.md',
      sub: t('planSub'),
      excerpt: [
        '# Stack',
        'Next.js · CSS vars',
        'next-themes 0.4',
        '',
        '# Decisions',
        'SSR-safe cookie.',
      ],
    },
    {
      file: 'tasks.md',
      sub: t('tasksSub'),
      excerpt: [
        '[x] T-01 install',
        '[x] T-02 useTheme',
        '[ ] T-03 Playwright',
        '    verify AC-1',
        '[ ] T-04 Lighthouse',
        '    verify AC-3',
      ],
    },
  ]

  return (
    <section className="skl-flow">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 sm:py-32 border-t border-border/60">
        <div className="max-w-2xl mb-14">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-4">
            02 &mdash; {t('kicker')}
          </div>
          <h2 className="skl-ed-h2">{t('heading')}</h2>
          <p className="mt-6 text-[15.5px] leading-[1.65] text-muted-foreground">
            {t('intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
          {artefacts.map((a, i) => (
            <div key={a.file} className="skl-flow__col bg-background p-7">
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[13px] text-[oklch(48%_0.2_240)] dark:text-[oklch(82%_0.17_230)]">
                  {a.file}
                </span>
              </div>
              <p className="text-[14px] text-muted-foreground leading-[1.55] mb-6">
                {a.sub}
              </p>
              <pre className="font-mono text-[12.5px] leading-[1.7] text-foreground/80 whitespace-pre">
{a.excerpt.join('\n')}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
