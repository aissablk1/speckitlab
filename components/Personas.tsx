type Persona = {
  icon: string
  title: string
  lead: string
  points: string[]
}

type PersonasProps = {
  kicker: string
  heading: string
  items: Persona[]
}

export function Personas({ kicker, heading, items }: PersonasProps) {
  return (
    <section className="skl-personas" aria-label={kicker}>
      <p className="skl-section-kicker">{kicker}</p>
      <h2 className="skl-section-heading">{heading}</h2>
      <div className="skl-personas__grid">
        {items.map((p, i) => (
          <article key={i} className="skl-personas__card" style={{ '--idx': i } as React.CSSProperties}>
            <div className="skl-personas__icon" aria-hidden="true">
              {p.icon}
            </div>
            <h3 className="skl-personas__title">{p.title}</h3>
            <p className="skl-personas__lead">{p.lead}</p>
            <ul className="skl-personas__points">
              {p.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
