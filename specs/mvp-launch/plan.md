# Plan — MVP Launch

> Derived from [`spec.md`](./spec.md). This document makes the technical choices and implementation architecture explicit.
> **Created**: 2026-04-19
> **Last updated**: 2026-04-20
>
> *[Version française ›](./plan.fr.md)*

---

## 1. Tech stack

| Layer | Choice | Justification |
|---|---|---|
| Framework | **Next.js 15** (Pages Router via Nextra 3) | Mastered stack, SSG + ISR, trivial Vercel deployment |
| Docs engine | **Nextra 3** | MDX native, built-in search, dark mode, community trust |
| Language | **TypeScript 5.6** (strict) | Type safety, `@/*` alias |
| Style | Custom CSS tokens + Nextra theme overrides | Focus on content, minimal CSS surface |
| Hosting | **Vercel Hobby** | 0 € up to 100 GB-month, edge CDN included |
| Domain | `speckitlab.vercel.app` (interim) / `speckitlab.js.org` (target) | Free, prestigious |
| Analytics | **Vercel Web Analytics** (privacy-friendly) | To integrate V1.1 |
| CI/CD | **GitHub Actions** (lint + typecheck) + Vercel auto-deploy | Quality gate on PR |
| i18n | Nextra 3 locale suffix `{en,fr}` | EN default, FR mirrored |

## 2. File architecture

```
speckitlab/
├── specs/                      # Dogfooding — specs of the project itself
│   └── mvp-launch/
│       ├── spec.md · spec.fr.md
│       ├── plan.md · plan.fr.md
│       └── tasks.md · tasks.fr.md
├── pages/                      # Nextra 3 — file-based routing, locale suffix
│   ├── _meta.{en,fr}.json
│   ├── index.{en,fr}.mdx
│   ├── getting-started.{en,fr}.mdx
│   ├── 404.{en,fr}.mdx
│   ├── concepts/
│   │   ├── _meta.{en,fr}.json
│   │   ├── first-spec.{en,fr}.mdx
│   │   └── claude-code-integration.{en,fr}.mdx
│   └── templates/
│       ├── _meta.{en,fr}.json
│       ├── spec.{en,fr}.mdx
│       ├── plan.{en,fr}.mdx
│       └── tasks.{en,fr}.mdx
├── components/                 # Custom React components
│   ├── HeroV2.tsx              # Split-screen chaos → spec
│   ├── LoopFlow.tsx            # 3-artefact cards
│   ├── Marquee.tsx             # Keyword ticker
│   ├── Personas.tsx            # Audience cards
│   ├── Stats.tsx               # Metric counters
│   └── BigCTA.tsx              # Full-width call to action
├── styles/globals.css          # Design tokens + component styles
├── content/templates/          # Raw markdown templates (downloadable)
│   ├── spec.md · spec.fr.md
│   ├── plan.md · plan.fr.md
│   └── tasks.md · tasks.fr.md
├── public/                     # Static assets (favicon.svg, og-image)
├── .github/workflows/          # CI
├── theme.config.tsx            # Nextra config (locale-aware)
├── next.config.mjs
├── tsconfig.json
├── package.json
├── README.md · README.fr.md
├── CONTRIBUTING.md · CONTRIBUTING.fr.md
├── SECURITY.md · SECURITY.fr.md
└── LICENSE                     # MIT
```

## 3. Content contracts

### 3.1 Guide page format (MDX)

```mdx
---
title: "Explicit title (≤ 60 chars)"
description: "SEO description 120-160 chars"
---

# H1 title

Intro (1-2 paragraphs, problem solved).

## Prerequisites

## Steps

## Common pitfalls

## Resources
```

### 3.2 Template format (spec / plan / tasks)

Templates are both:
- **Readable on the site** (MDX with syntax highlighting)
- **Downloadable as raw .md** via direct GitHub raw link

## 4. Explicit implementation choices

### 4.1 Nextra 3 vs Nextra 4 (App Router)

**Choice: Nextra 3 (Pages Router).**
- More stable in 2026-04
- Larger community, more plugins
- Nextra 4 migration via dedicated PR if needed (MDX is portable)

### 4.2 Docs-first vs Code-first

**Choice: Docs-first in V1.**
- Immediate goal is to **communicate a method**, not to **ship a tool**
- An npm CLI will come in V2 if traction is real (criterion: ≥ 50 GitHub stars)

### 4.3 Content language

**Choice: English primary, French mirrored.**
- js.org audience is international
- Spec-Kit / Claude Code docs are in English
- FR version for the author's market (CCA-F, training)

### 4.4 Custom design language

**Choice: `oklch()` color tokens, system fonts with cv11/ss01 features.**
- No font loading penalty (system fonts)
- Perceptually uniform palette in light & dark
- Custom CSS (~500 lines) over dependency on design framework

## 5. Deployment sequence

```
┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐
│ Local dev  │→ │ GitHub     │→ │ Vercel     │→ │ Domain      │
│ npm dev    │   │ push main  │   │ auto-build │   │ cname alias │
└────────────┘   └────────────┘   └────────────┘   └────────────┘
                                                         │
                                     ┌───────────────────┼───────────────────┐
                                     ▼                                       ▼
                              speckitlab.is-a.dev                   speckitlab.js.org
                              (pending, re-submit)                  (2-4 weeks)
```

## 6. Security

- No sensitive `NEXT_PUBLIC_*` variable
- Strict CSP (V1.1 via `next.config.mjs` headers)
- Headers `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` — **already configured**
- Dependencies scanned via `npm audit` + Dependabot
- Git authorship uses GitHub noreply email (`87309911+aissablk1@users.noreply.github.com`)

## 7. Performance

- Target Lighthouse: 100 / 100 / 100 / 100
- Images optimised via `next/image`
- No custom client-side JS in V1 (Nextra handles everything)
- System font stack — zero FOIT, zero request

## 8. Backwards compatibility

Not applicable (greenfield).
