import { useTranslations } from 'next-intl'

export function LoopFlow() {
  const t = useTranslations('loop')
  const artefacts = [
    { file: 'spec.md', key: 'spec' },
    { file: 'plan.md', key: 'plan' },
    { file: 'tasks.md', key: 'tasks' },
  ] as const

  return (
    <section className="skl-loop mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label={t('kicker')}>
      <p className="skl-kicker">{t('kicker')}</p>
      <h2 className="skl-heading">{t('heading')}</h2>
      <div className="skl-loop__grid">
        {artefacts.map((a, i) => (
          <article key={a.file} className="skl-loop__card" style={{ ['--idx' as string]: i }}>
            <header className="skl-loop__head">
              <span className="skl-loop__idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="skl-loop__file">{a.file}</span>
            </header>
            <h3 className="skl-loop__title">{t(`${a.key}.title`)}</h3>
            <p className="skl-loop__tagline">{t(`${a.key}.tagline`)}</p>
            <ul className="skl-loop__bullets">
              <li>{t(`${a.key}.b1`)}</li>
              <li>{t(`${a.key}.b2`)}</li>
              <li>{t(`${a.key}.b3`)}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
