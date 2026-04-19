type Stat = { value: string; label: string; hint?: string }

type StatsProps = {
  kicker: string
  heading: string
  items: Stat[]
}

export function Stats({ kicker, heading, items }: StatsProps) {
  return (
    <section className="skl-stats" aria-label={kicker}>
      <p className="skl-section-kicker">{kicker}</p>
      <h2 className="skl-section-heading">{heading}</h2>
      <div className="skl-stats__grid">
        {items.map((s, i) => (
          <div key={i} className="skl-stats__item" style={{ '--idx': i } as React.CSSProperties}>
            <div className="skl-stats__value">{s.value}</div>
            <div className="skl-stats__label">{s.label}</div>
            {s.hint ? <div className="skl-stats__hint">{s.hint}</div> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
