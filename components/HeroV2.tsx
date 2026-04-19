import type { ReactNode } from 'react'
import Link from 'next/link'

type CTA = { label: string; href: string }

type HeroV2Props = {
  eyebrow: string
  title: ReactNode
  subtitle: string
  primary: CTA
  secondary: CTA
  beforeLabel: string
  afterLabel: string
  chaosLines: string[]
  specLines: { k: string; v: string }[]
}

export function HeroV2({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  beforeLabel,
  afterLabel,
  chaosLines,
  specLines,
}: HeroV2Props) {
  return (
    <section className="skl-hero2" aria-label={eyebrow}>
      <div className="skl-hero2__mesh" aria-hidden="true" />
      <div className="skl-hero2__grain" aria-hidden="true" />

      <div className="skl-hero2__intro">
        <p className="skl-hero2__eyebrow">
          <span className="skl-hero2__dot-live" /> {eyebrow}
        </p>
        <h1 className="skl-hero2__title">{title}</h1>
        <p className="skl-hero2__subtitle">{subtitle}</p>
        <div className="skl-hero2__ctas">
          <Link href={primary.href} className="skl-btn skl-btn--primary">
            {primary.label}
          </Link>
          <Link href={secondary.href} className="skl-btn skl-btn--ghost">
            {secondary.label}
          </Link>
        </div>
      </div>

      <div className="skl-hero2__split" aria-hidden="true">
        <div className="skl-hero2__side skl-hero2__side--before">
          <div className="skl-hero2__side-label">{beforeLabel}</div>
          <div className="skl-hero2__chaos">
            {chaosLines.map((line, i) => (
              <p
                key={i}
                className={`skl-hero2__chaos-line ${i === 2 ? 'skl-hero2__chaos-line--strike' : ''}`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="skl-hero2__arrow" aria-hidden="true">
          <span>{'\u203A'}</span>
        </div>

        <div className="skl-hero2__side skl-hero2__side--after">
          <div className="skl-hero2__side-label">{afterLabel}</div>
          <div className="skl-hero2__spec">
            {specLines.map((line, i) => (
              <div
                key={i}
                className="skl-hero2__spec-line"
                style={{ animationDelay: `${400 + i * 110}ms` }}
              >
                <span className="skl-hero2__spec-k">{line.k}</span>
                <span className="skl-hero2__spec-v">{line.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
