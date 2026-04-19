type MarqueeProps = {
  items: string[]
}

export function Marquee({ items }: MarqueeProps) {
  const track = [...items, ...items]
  return (
    <section className="skl-marquee" aria-hidden="true">
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
