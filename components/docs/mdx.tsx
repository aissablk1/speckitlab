import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

export function MDX({ source }: { source: string }) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: { dark: 'github-dark-dimmed', light: 'github-light' },
                  keepBackground: true,
                },
              ],
            ],
          },
        }}
      />
    </div>
  )
}

const mdxComponents = {
  h1: (p: React.ComponentProps<'h1'>) => (
    <h1 {...p} className={cn('mt-0 mb-4 scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight', p.className)} />
  ),
  h2: (p: React.ComponentProps<'h2'>) => (
    <h2 {...p} className={cn('mt-10 mb-4 scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight border-b border-border/60 pb-2', p.className)} />
  ),
  h3: (p: React.ComponentProps<'h3'>) => (
    <h3 {...p} className={cn('mt-8 mb-3 scroll-m-20 text-lg md:text-xl font-semibold tracking-tight', p.className)} />
  ),
  p: (p: React.ComponentProps<'p'>) => (
    <p {...p} className={cn('leading-7 [&:not(:first-child)]:mt-4', p.className)} />
  ),
  a: (p: React.ComponentProps<'a'>) => (
    <a {...p} className={cn('text-primary font-medium underline-offset-4 hover:underline', p.className)} />
  ),
  ul: (p: React.ComponentProps<'ul'>) => (
    <ul {...p} className={cn('my-4 ml-6 list-disc space-y-1.5', p.className)} />
  ),
  ol: (p: React.ComponentProps<'ol'>) => (
    <ol {...p} className={cn('my-4 ml-6 list-decimal space-y-1.5', p.className)} />
  ),
  li: (p: React.ComponentProps<'li'>) => <li {...p} className={cn('leading-7', p.className)} />,
  blockquote: (p: React.ComponentProps<'blockquote'>) => (
    <blockquote {...p} className={cn('mt-4 border-l-4 border-border pl-4 italic text-muted-foreground', p.className)} />
  ),
  code: (p: React.ComponentProps<'code'>) => (
    <code {...p} className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.88em] font-medium', p.className)} />
  ),
  pre: (p: React.ComponentProps<'pre'>) => (
    <pre {...p} className={cn('my-4 overflow-x-auto rounded-lg border border-border p-4 text-sm', p.className)} />
  ),
  table: (p: React.ComponentProps<'table'>) => (
    <div className="my-6 w-full overflow-x-auto">
      <table {...p} className={cn('w-full border-collapse text-sm', p.className)} />
    </div>
  ),
  th: (p: React.ComponentProps<'th'>) => (
    <th {...p} className={cn('border border-border bg-muted/50 px-3 py-2 text-left font-semibold', p.className)} />
  ),
  td: (p: React.ComponentProps<'td'>) => (
    <td {...p} className={cn('border border-border px-3 py-2', p.className)} />
  ),
  hr: (p: React.ComponentProps<'hr'>) => <hr {...p} className={cn('my-8 border-border', p.className)} />,
}
