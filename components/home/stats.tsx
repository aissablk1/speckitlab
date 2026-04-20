import { useTranslations } from 'next-intl'

export function Stats() {
  const t = useTranslations('stats')
  const items = [
    { value: '3', label: t('s1Label'), hint: t('s1Hint') },
    { value: '8', label: t('s2Label'), hint: t('s2Hint') },
    { value: '≤30m', label: t('s3Label'), hint: t('s3Hint') },
    { value: '100%', label: t('s4Label'), hint: t('s4Hint') },
  ]

  return (
    <section className="skl-stats mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label={t('kicker')}>
      <p className="skl-kicker">{t('kicker')}</p>
      <h2 className="skl-heading">{t('heading')}</h2>
      <div className="skl-stats__grid">
        {items.map((s, i) => (
          <div key={i} className="skl-stat">
            <div className="skl-stat__value">{s.value}</div>
            <div className="skl-stat__label">{s.label}</div>
            <div className="skl-stat__hint">{s.hint}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
