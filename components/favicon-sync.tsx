'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

function resolveFavicon(resolvedTheme: string | undefined) {
  return resolvedTheme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg'
}

export function FaviconSync() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const href = resolveFavicon(resolvedTheme)

    const selectors = ['link[rel="icon"]', 'link[rel="shortcut icon"]']
    const nodes = selectors.flatMap((sel) =>
      Array.from(document.querySelectorAll<HTMLLinkElement>(sel))
    )

    if (nodes.length === 0) {
      const link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/svg+xml'
      link.href = href
      document.head.appendChild(link)
      return
    }

    nodes.forEach((node) => {
      if (!node.href.endsWith(href)) {
        node.href = href
      }
    })
  }, [resolvedTheme])

  return null
}
