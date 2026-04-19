import Link from 'next/link'

type BigCTAProps = {
  kicker: string
  heading: string
  subtitle: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}

export function BigCTA({ kicker, heading, subtitle, primary, secondary }: BigCTAProps) {
  return (
    <section className="skl-bigcta" aria-label={kicker}>
      <div className="skl-bigcta__glow" aria-hidden="true" />
      <p className="skl-bigcta__kicker">{kicker}</p>
      <h2 className="skl-bigcta__heading">{heading}</h2>
      <p className="skl-bigcta__subtitle">{subtitle}</p>
      <div className="skl-bigcta__ctas">
        <Link href={primary.href} className="skl-btn skl-btn--primary skl-btn--lg">
          {primary.label}
        </Link>
        {secondary ? (
          <Link href={secondary.href} className="skl-btn skl-btn--ghost skl-btn--lg">
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </section>
  )
}
