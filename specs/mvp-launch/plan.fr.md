# Plan — MVP Launch

> Dérivé de [`spec.md`](./spec.md). Ce document explicite les choix techniques et l'architecture d'implémentation.
> **Créé le** : 2026-04-19

---

## 1. Stack technique

| Couche | Choix | Justification |
|---|---|---|
| Framework | **Next.js 15** (Pages Router via Nextra 3) | Stack maîtrisée, SSG + ISR, déploiement Vercel trivial |
| Docs engine | **Nextra 3** | MDX natif, search built-in, dark mode, community trust |
| Langage | **TypeScript 5.6** (strict) | Type safety, alias `@/*` |
| Style | Theme Nextra par défaut + overrides MDX | Focus sur le contenu, pas sur le CSS custom |
| Hébergement | **Vercel Hobby** | 0 € jusqu'à 100 GB-month, Edge CDN inclus |
| Domaine | `speckitlab.js.org` (cible) / `speckitlab.is-a.dev` (fallback immédiat) | Gratuits, prestigieux |
| Analytics | **Plausible** (à intégrer post-V1) ou **Vercel Web Analytics** | Respect vie privée, pas de cookies |
| CI/CD | **GitHub Actions** (lint + typecheck) + Vercel auto-deploy | Gate qualité sur PR |

## 2. Architecture fichiers

```
speckitlab/
├── specs/                      # Dogfooding — specs du projet lui-même
│   └── mvp-launch/
│       ├── spec.md
│       ├── plan.md
│       └── tasks.md
├── pages/                      # Nextra 3 — routing par fichier
│   ├── _meta.json              # Ordre de la nav
│   ├── index.mdx               # Home
│   ├── getting-started.mdx
│   ├── concepts/
│   │   ├── _meta.json
│   │   ├── first-spec.mdx
│   │   └── claude-code-integration.mdx
│   └── templates/
│       ├── _meta.json
│       ├── spec.mdx
│       ├── plan.mdx
│       └── tasks.mdx
├── content/                    # Assets markdown bruts (templates téléchargeables)
│   └── templates/
├── public/                     # Assets statiques (favicon, og-image)
├── scripts/                    # Scripts utilitaires
├── .github/workflows/          # CI
├── theme.config.tsx            # Config Nextra (logo, footer, head)
├── next.config.mjs
├── tsconfig.json
├── package.json
├── README.md
├── LICENSE                     # MIT
└── CONTRIBUTING.md
```

## 3. Contrats de contenu

### 3.1 Format d'une page guide (MDX)

```mdx
---
title: "Titre explicite (≤ 60 chars)"
description: "Description SEO 120-160 chars"
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
tags: ["spec-kit", "claude-code"]
---

# Titre H1

Introduction (1-2 paragraphes, problème résolu).

## Prérequis

## Étapes

## Pièges courants

## Ressources
```

### 3.2 Format d'un template (spec / plan / tasks)

Les templates sont à la fois :
- **Lisibles sur le site** (MDX avec syntax highlighting)
- **Téléchargeables en .md brut** via lien direct GitHub raw

## 4. Choix d'implémentation explicites

### 4.1 Nextra 3 vs Nextra 4 (App Router)

**Choix : Nextra 3 (Pages Router).**
- Plus stable en 2026-04
- Communauté plus large, plus de plugins
- Migration Nextra 4 si besoin via PR dédiée (MDX portable)

### 4.2 Docs-first vs Code-first

**Choix : Docs-first en V1.**
- L'objectif immédiat est de **communiquer une méthode**, pas de **livrer un outil**
- Un CLI npm viendra en V2 si la traction est là (critère : ≥ 50 stars GitHub)

### 4.3 Langue du contenu

**Choix : Anglais.**
- Audience js.org est internationale
- Spec-Kit / Claude Code docs sont en anglais
- Les versions FR suivront dans un sous-dossier `/fr` si demande

## 5. Séquence de déploiement

```
┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐
│ Local dev  │→ │ GitHub     │→ │ Vercel     │→ │ Domain      │
│ npm dev    │   │ push main  │   │ auto-build │   │ cname alias │
└────────────┘   └────────────┘   └────────────┘   └────────────┘
                                                         │
                                     ┌───────────────────┼───────────────────┐
                                     ▼                                       ▼
                              speckitlab.is-a.dev                   speckitlab.js.org
                              (immédiat, 3 jours)                   (2-4 semaines)
```

## 6. Sécurité

- Aucune variable `NEXT_PUBLIC_*` sensible
- CSP strict (à ajouter en V1.1 via `next.config.mjs` headers)
- Headers `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` — **déjà configurés**
- Dépendances scannées via `npm audit` + Dependabot

## 7. Performance

- Target Lighthouse : 100 / 100 / 100 / 100
- Images optimisées via `next/image`
- Pas de JS client-side custom en V1 (Nextra gère tout)
- Fonts : `Inter` via Next/font (self-hosted, pas de FOIT)

## 8. Rétrocompatibilité

Non applicable (greenfield).
