type Artefact = {
  file: string
  title: string
  tagline: string
  bullets: string[]
}

type LoopFlowProps = {
  kicker: string
  heading: string
  artefacts: Artefact[]
}

export function LoopFlow({ kicker, heading, artefacts }: LoopFlowProps) {
  return (
    <section className="skl-loop" aria-label={kicker}>
      <p className="skl-section-kicker">{kicker}</p>
      <h2 className="skl-section-heading">{heading}</h2>

      <div className="skl-loop__grid" role="list">
        {artefacts.map((a, i) => (
          <article
            key={a.file}
            role="listitem"
            className="skl-loop__card"
            style={{ '--idx': i } as React.CSSProperties}
          >
            <header className="skl-loop__card-head">
              <span className="skl-loop__idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="skl-loop__file">{a.file}</span>
            </header>
            <h3 className="skl-loop__title">{a.title}</h3>
            <p className="skl-loop__tagline">{a.tagline}</p>
            <ul className="skl-loop__bullets">
              {a.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
