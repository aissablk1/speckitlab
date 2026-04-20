import { useTranslations } from 'next-intl'

export function Marquee() {
  const t = useTranslations('marquee')
  const items = t.raw('items') as string[]
  const track = [...items, ...items]

  return (
    <section className="skl-marquee" aria-hidden>
      <div className="skl-marquee__track">
        {track.map((item, i) => (
          <span key={i} className="skl-marquee__item">
            {item}
            <span className="skl-marquee__sep">{'\u00A0\u2022\u00A0'}</span>
          </span>
        ))}
      </div>
    </section>
  )
}
