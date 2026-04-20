import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { getAllDocs, getDoc, getSidebar } from '@/lib/docs'
import { DocsSidebar } from '@/components/docs/sidebar'
import { MDX } from '@/components/docs/mdx'
import { routing } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string; slug: string[] }>
}

export async function generateStaticParams() {
  const all: { locale: string; slug: string[] }[] = []
  for (const locale of routing.locales) {
    const docs = await getAllDocs(locale as 'en' | 'fr')
    for (const d of docs) all.push({ locale, slug: d.slug })
  }
  return all
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params
  const doc = await getDoc(locale as 'en' | 'fr', slug)
  if (!doc) return {}
  return { title: doc.title, description: doc.description }
}

export default async function DocPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const loc = locale as 'en' | 'fr'
  const doc = await getDoc(loc, slug)
  if (!doc) notFound()

  const groups = await getSidebar(loc)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-8 py-8">
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-20">
            <DocsSidebar groups={groups} />
          </div>
        </aside>

        <article className="min-w-0 flex-1 max-w-3xl">
          <header className="mb-8 border-b border-border/60 pb-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{doc.title}</h1>
            {doc.description && (
              <p className="mt-3 text-muted-foreground">{doc.description}</p>
            )}
          </header>
          <MDX source={doc.body} />
        </article>
      </div>
    </div>
  )
}
