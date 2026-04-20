import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import type { Locale } from '@/lib/i18n/dict'

const DOCS_ROOT = path.join(process.cwd(), 'content/docs')

export type DocMeta = {
  slug: string[]
  title: string
  description?: string
  order?: number
  locale: Locale
}

export type Doc = DocMeta & { body: string }

function baseDirFor(locale: Locale) {
  return locale === 'fr' ? path.join(DOCS_ROOT, 'fr') : DOCS_ROOT
}

async function walk(dir: string, rel: string[] = []): Promise<string[]> {
  const out: string[] = []
  let entries: { name: string; isDir: boolean }[] = []
  try {
    const list = await fs.readdir(dir, { withFileTypes: true })
    entries = list.map((e) => ({ name: e.name, isDir: e.isDirectory() }))
  } catch {
    return []
  }
  for (const e of entries) {
    if (e.name === 'fr' && rel.length === 0) continue
    const full = path.join(dir, e.name)
    const relNext = [...rel, e.name]
    if (e.isDir) {
      out.push(...(await walk(full, relNext)))
    } else if (e.name.endsWith('.mdx')) {
      out.push(relNext.join('/'))
    }
  }
  return out
}

export async function getAllDocs(locale: Locale): Promise<DocMeta[]> {
  const base = baseDirFor(locale)
  const files = await walk(base)
  const items: DocMeta[] = []
  for (const f of files) {
    const slug = f.replace(/\.mdx$/, '').split('/')
    const raw = await fs.readFile(path.join(base, f), 'utf8')
    const { data } = matter(raw)
    items.push({
      slug,
      title: (data.title as string) ?? slug[slug.length - 1],
      description: data.description as string | undefined,
      order: data.order as number | undefined,
      locale,
    })
  }
  return items
}

export async function getDoc(locale: Locale, slug: string[]): Promise<Doc | null> {
  const base = baseDirFor(locale)
  const filePath = path.join(base, `${slug.join('/')}.mdx`)
  try {
    const raw = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(raw)
    return {
      slug,
      title: (data.title as string) ?? slug[slug.length - 1],
      description: data.description as string | undefined,
      order: data.order as number | undefined,
      locale,
      body: content,
    }
  } catch {
    // Fallback to default locale if FR version missing
    if (locale !== 'en') return getDoc('en', slug)
    return null
  }
}

export type SidebarGroup = {
  label: string
  items: { slug: string[]; title: string }[]
}

export async function getSidebar(locale: Locale): Promise<SidebarGroup[]> {
  const docs = await getAllDocs(locale)
  const topLevel = docs.filter((d) => d.slug.length === 1)
  const concepts = docs.filter((d) => d.slug[0] === 'concepts')
  const templates = docs.filter((d) => d.slug[0] === 'templates')

  const labels = locale === 'fr'
    ? { intro: 'Introduction', concepts: 'Concepts', templates: 'Templates' }
    : { intro: 'Introduction', concepts: 'Concepts', templates: 'Templates' }

  return [
    { label: labels.intro, items: topLevel.map((d) => ({ slug: d.slug, title: d.title })) },
    { label: labels.concepts, items: concepts.map((d) => ({ slug: d.slug, title: d.title })) },
    { label: labels.templates, items: templates.map((d) => ({ slug: d.slug, title: d.title })) },
  ].filter((g) => g.items.length > 0)
}
