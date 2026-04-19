import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, letterSpacing: '-0.01em' }}>
      speckit<span style={{ opacity: 0.6 }}>lab</span>
    </span>
  ),
  project: {
    link: 'https://github.com/aissablk1/speckitlab',
  },
  docsRepositoryBase: 'https://github.com/aissablk1/speckitlab/tree/main',
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/aissablk1" target="_blank" rel="noreferrer">
          Aïssa Belkoussa
        </a>
        {'\u00A0\u2014\u00A0'}Built with Spec-Kit.
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Spec-Driven Development lab — templates, guides, and Claude Code integration patterns for the JavaScript ecosystem."
      />
      <meta property="og:title" content="speckitlab" />
      <meta
        property="og:description"
        content="Spec-Driven Development lab for JavaScript + Claude Code."
      />
      <meta name="theme-color" content="#0a0a0a" />
      <link rel="canonical" href="https://speckitlab.js.org" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: { backToTop: true },
  darkMode: true,
  nextThemes: { defaultTheme: 'system' },
  editLink: {
    content: <>Modifier cette page sur GitHub{'\u00A0\u203A'}</>,
  },
  feedback: { content: null },
}

export default config
