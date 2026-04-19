import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://speckitlab.vercel.app',
  integrations: [
    react(),
    starlight({
      title: 'speckitlab',
      description:
        'Spec-Driven Development lab — templates, guides, and Claude Code integration patterns for the JavaScript ecosystem.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/globals.css'],
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/aissablk1/speckitlab' },
      ],
      sidebar: [
        {
          label: 'Getting started',
          translations: { fr: 'Démarrage' },
          link: '/getting-started/',
        },
        {
          label: 'Concepts',
          translations: { fr: 'Concepts' },
          autogenerate: { directory: 'concepts' },
        },
        {
          label: 'Templates',
          translations: { fr: 'Templates' },
          autogenerate: { directory: 'templates' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/aissablk1/speckitlab/edit/main/',
      },
    }),
  ],
})
