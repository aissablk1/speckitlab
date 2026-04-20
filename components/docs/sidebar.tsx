'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { SidebarGroup } from '@/lib/docs'

export function DocsSidebar({ groups }: { groups: SidebarGroup[] }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Docs" className="space-y-6">
      {groups.map((group) => (
        <div key={group.label}>
          <h4 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {group.label}
          </h4>
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const href = `/docs/${item.slug.join('/')}`
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'block rounded-md px-3 py-1.5 text-sm transition-colors',
                      active
                        ? 'bg-accent text-foreground font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
