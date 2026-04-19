import Link from 'next/link'
import { useRouter } from 'next/router'

export function LocaleSwitcher() {
  const { asPath } = useRouter()
  const isFr = asPath.startsWith('/fr')

  const toEn = asPath.replace(/^\/fr(\/|$)/, '/').replace(/^\/$/, '/') || '/'
  const toFrRaw = isFr ? asPath : `/fr${asPath === '/' ? '' : asPath}`
  const toFr = toFrRaw.replace(/\/$/, '') || '/fr'

  return (
    <div className="skl-locale" role="group" aria-label="Language">
      <Link
        href={toEn}
        className={`skl-locale__btn ${!isFr ? 'skl-locale__btn--active' : ''}`}
        aria-current={!isFr ? 'true' : undefined}
      >
        EN
      </Link>
      <span className="skl-locale__sep" aria-hidden="true">/</span>
      <Link
        href={toFr}
        className={`skl-locale__btn ${isFr ? 'skl-locale__btn--active' : ''}`}
        aria-current={isFr ? 'true' : undefined}
      >
        FR
      </Link>
    </div>
  )
}
