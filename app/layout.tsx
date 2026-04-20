import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { FaviconSync } from '@/components/favicon-sync'
import { LocaleProvider } from '@/lib/i18n/client'
import { getLocale } from '@/lib/i18n/server'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
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
  icons: {
    icon: [
      { url: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
  referrer: 'strict-origin-when-cross-origin',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale()

  return (
    <html lang={locale} suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LocaleProvider initial={locale}>
            <FaviconSync />
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
