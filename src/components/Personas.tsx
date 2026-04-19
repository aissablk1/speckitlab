import type { ReactNode } from 'react'

type Persona = {
  icon: ReactNode
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

export const PersonaIcons = {
  Solo: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  ),
  Team: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M14 20c0-2.5 1.5-4 4-4s3.5 1.2 3.5 4" />
    </svg>
  ),
  Trainer: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16v10H4z" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M8 10l2 2 5-5" />
    </svg>
  ),
}
