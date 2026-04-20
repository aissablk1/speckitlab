import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://speckitlab.vercel.app'),
  title: { default: 'speckitlab', template: '%s — speckitlab' },
  description:
    'Spec-Driven Development lab — templates, guides, and Claude Code integration patterns for the JavaScript ecosystem.',
  openGraph: {
    title: 'speckitlab',
    description: 'Spec-Driven Development lab for JavaScript + Claude Code.',
    url: 'https://speckitlab.vercel.app',
    siteName: 'speckitlab',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'speckitlab' },
  icons: { icon: '/favicon.svg' },
  referrer: 'strict-origin-when-cross-origin',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
