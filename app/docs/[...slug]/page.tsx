import { notFound } from 'next/navigation'
import { getAllDocs, getDoc, getSidebar } from '@/lib/docs'
import { DocsSidebar } from '@/components/docs/sidebar'
import { MDX } from '@/components/docs/mdx'
import { getLocale } from '@/lib/i18n/server'

type Props = { params: Promise<{ slug: string[] }> }

export async function generateStaticParams() {
  const docs = await getAllDocs('en')
  return docs.map((d) => ({ slug: d.slug }))
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const locale = await getLocale()
  const doc = await getDoc(locale, slug)
  if (!doc) return {}
  return { title: doc.title, description: doc.description }
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params
  const locale = await getLocale()

  const doc = await getDoc(locale, slug)
  if (!doc) notFound()

  const groups = await getSidebar(locale)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-12 pt-20 pb-16 sm:pt-24">
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28">
            <DocsSidebar groups={groups} />
          </div>
        </aside>

        <article className="min-w-0 flex-1 max-w-3xl">
          <header className="mb-10 border-b border-border/60 pb-8">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{doc.title}</h1>
            {doc.description && (
              <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">{doc.description}</p>
            )}
          </header>
          <MDX source={doc.body} />
        </article>
      </div>
    </div>
  )
}
