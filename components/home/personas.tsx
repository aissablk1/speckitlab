import { useTranslations } from 'next-intl'
import { User, Users, GraduationCap } from 'lucide-react'

export function Personas() {
  const t = useTranslations('personas')
  const items = [
    { icon: <User />, key: 'solo' },
    { icon: <Users />, key: 'team' },
    { icon: <GraduationCap />, key: 'trainer' },
  ] as const

  return (
    <section className="skl-personas mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label={t('kicker')}>
      <p className="skl-kicker">{t('kicker')}</p>
      <h2 className="skl-heading">{t('heading')}</h2>
      <div className="skl-personas__grid">
        {items.map((p) => (
          <article key={p.key} className="skl-persona">
            <div className="skl-persona__icon" aria-hidden>{p.icon}</div>
            <h3 className="skl-persona__title">{t(`${p.key}.title`)}</h3>
            <p className="skl-persona__lead">{t(`${p.key}.lead`)}</p>
            <ul className="skl-persona__points">
              <li>{t(`${p.key}.p1`)}</li>
              <li>{t(`${p.key}.p2`)}</li>
              <li>{t(`${p.key}.p3`)}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
