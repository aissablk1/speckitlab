import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { LocaleSwitcher } from './components/LocaleSwitcher'

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        fontWeight: 700,
        letterSpacing: '-0.02em',
        fontSize: '1.05rem',
      }}
    >
      speckit<span style={{ opacity: 0.55 }}>lab</span>
    </span>
  ),
  project: {
    link: 'https://github.com/aissablk1/speckitlab',
  },
  docsRepositoryBase: 'https://github.com/aissablk1/speckitlab/tree/main',
  footer: {
    content: function Footer() {
      const { asPath } = useRouter()
      const isFr = asPath.startsWith('/fr')
      return (
        <span style={{ fontSize: '0.875rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <span>MIT {new Date().getFullYear()} © Aïssa Belkoussa</span>
          <span style={{ opacity: 0.4 }}>{'\u00B7'}</span>
          <span>{isFr ? 'Construit avec Spec-Kit' : 'Built with Spec-Kit'}</span>
          <span style={{ opacity: 0.4 }}>{'\u00B7'}</span>
          <a href={isFr ? '/' : '/fr'} style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'oklch(70% 0.15 230 / 0.4)' }}>
            {isFr ? 'English\u00A0\u203A' : 'Français\u00A0\u203A'}
          </a>
        </span>
      )
    },
  },
  head: function Head() {
    const { asPath } = useRouter()
    const isFr = asPath.startsWith('/fr')
    const desc = isFr
      ? 'Lab Spec-Driven Development — templates, guides et patterns d\u2019intégration Claude Code pour l\u2019écosystème JavaScript.'
      : 'Spec-Driven Development lab — templates, guides, and Claude Code integration patterns for the JavaScript ecosystem.'
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
        <meta property="og:title" content="speckitlab" />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speckitlab.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="speckitlab" />
        <meta name="twitter:description" content={desc} />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="canonical" href="https://speckitlab.vercel.app" />
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navbar: {
    extraContent: <LocaleSwitcher />,
  },
  toc: { backToTop: true },
  darkMode: true,
  nextThemes: { defaultTheme: 'system' },
  editLink: {
    content: function EditLink() {
      const { asPath } = useRouter()
      return asPath.startsWith('/fr') ? (
        <>Modifier cette page sur GitHub{'\u00A0\u203A'}</>
      ) : (
        <>Edit this page on GitHub{'\u00A0\u203A'}</>
      )
    },
  },
  feedback: { content: null },
  search: {
    placeholder: function Placeholder() {
      const { asPath } = useRouter()
      return asPath.startsWith('/fr') ? 'Rechercher dans la doc\u2026' : 'Search documentation\u2026'
    },
  },
  gitTimestamp: null,
}

export default config
