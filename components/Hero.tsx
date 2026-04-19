import type { ReactNode } from 'react'
import Link from 'next/link'

type CTA = { label: string; href: string }

type HeroProps = {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  primary?: CTA
  secondary?: CTA
}

export function Hero({ eyebrow, title, subtitle, primary, secondary }: HeroProps) {
  return (
    <section className="skl-hero" aria-label="Hero">
      {eyebrow ? <p className="skl-hero__eyebrow">{eyebrow}</p> : null}
      <h1 className="skl-hero__title">{title}</h1>
      {subtitle ? <p className="skl-hero__subtitle">{subtitle}</p> : null}
      {(primary || secondary) && (
        <div className="skl-hero__ctas">
          {primary ? (
            <Link href={primary.href} className="skl-btn skl-btn--primary">
              {primary.label}
            </Link>
          ) : null}
          {secondary ? (
            <Link href={secondary.href} className="skl-btn skl-btn--ghost">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      )}
      <div className="skl-hero__grid" aria-hidden="true">
        {['spec.md', 'plan.md', 'tasks.md'].map((name, i) => (
          <div
            key={name}
            className="skl-hero__card"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="skl-hero__card-head">
              <span className="skl-hero__dot" />
              <span className="skl-hero__dot" />
              <span className="skl-hero__dot" />
              <span className="skl-hero__filename">{name}</span>
            </div>
            <div className="skl-hero__card-body">
              {i === 0 && (
                <>
                  <span className="skl-hero__h"># Problem</span>
                  <span className="skl-hero__p">Users hit a blinding flash on load…</span>
                  <span className="skl-hero__h"># Audience</span>
                  <span className="skl-hero__p">Evening coders, shared-device users</span>
                </>
              )}
              {i === 1 && (
                <>
                  <span className="skl-hero__h"># Stack</span>
                  <span className="skl-hero__p">Next.js · React 19 · CSS variables</span>
                  <span className="skl-hero__h"># Decisions</span>
                  <span className="skl-hero__p">SSR-safe theme via `next-themes`</span>
                </>
              )}
              {i === 2 && (
                <>
                  <span className="skl-hero__h"># Phase 1</span>
                  <span className="skl-hero__p">[x] T-01 install next-themes · AC-1</span>
                  <span className="skl-hero__p">[x] T-02 useTheme hook · AC-2</span>
                  <span className="skl-hero__p">[ ] T-03 Playwright test · AC-1</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
