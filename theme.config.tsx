import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, letterSpacing: '-0.01em' }}>
      speckit<span style={{ opacity: 0.6 }}>lab</span>
    </span>
  ),
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} © Aïssa Belkoussa
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
      <link rel="canonical" href="https://speckitlab.vercel.app" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: { backToTop: true },
  darkMode: true,
  nextThemes: { defaultTheme: 'system' },
  editLink: { component: null },
  feedback: { content: null },
  navbar: {
    extraContent: null,
  },
}

export default config
