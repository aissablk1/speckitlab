# speckitlab

> Spec-Driven Development (SDD) pour l'écosystème JavaScript, associé à Claude Code.

[![Licence : MIT](https://img.shields.io/badge/Licence-MIT-yellow.svg)](./LICENSE)
[![Construit avec Nextra](https://img.shields.io/badge/Construit%20avec-Nextra%203-black)](https://nextra.site)
[![Dogfoodé](https://img.shields.io/badge/dogfood%C3%A9-%E2%9C%93-brightgreen)](./specs/mvp-launch)

**En direct :** [speckitlab.vercel.app](https://speckitlab.vercel.app) — domaine custom en attente.

*[English version ›](./README.md)*

---

## C'est quoi ?

Un lab pratique de [Spec-Driven Development](https://github.com/github/spec-kit) écrit pour les équipes JavaScript/TypeScript. Il offre :

- Des **templates** copiables-collables aujourd'hui (`spec.md`, `plan.md`, `tasks.md`)
- Des **guides** qui déroulent des exemples de features réels de bout en bout
- Une section dédiée à l'**intégration Claude Code** — parce que c'est là que le SDD devient une superpuissance

## Pourquoi ce projet existe

Le [Spec-Kit officiel](https://github.com/github/spec-kit) est Python-centrique. Les équipes JS/TS réinventent les mêmes conventions, souvent les abandonnent. Ce repo donne à l'écosystème JS un point de départ partagé.

## Dogfooding

Ce site a été construit à partir des specs visibles dans [`specs/mvp-launch/`](./specs/mvp-launch). C'est-à-dire :

- [`specs/mvp-launch/spec.md`](./specs/mvp-launch/spec.md) — le problème, l'audience, les critères d'acceptation
- [`specs/mvp-launch/plan.md`](./specs/mvp-launch/plan.md) — décisions stack & architecture
- [`specs/mvp-launch/tasks.md`](./specs/mvp-launch/tasks.md) — la checklist qui a produit ce codebase

Lisez-les comme votre premier vrai exemple.

## Démarrage rapide

```bash
git clone https://github.com/aissablk1/speckitlab.git
cd speckitlab
npm install
npm run dev
# ➜ http://localhost:3000
```

## Structure du projet

```
speckitlab/
├── specs/                 Specs du site lui-même (dogfooding)
├── pages/                 Contenu MDX Nextra (EN + FR)
│   ├── index.{en,fr}.mdx
│   ├── getting-started.{en,fr}.mdx
│   └── concepts/
├── components/            Composants React (Hero, LoopFlow, Marquee, Stats, BigCTA)
├── content/templates/     Templates Markdown copiables
├── styles/globals.css     Design tokens + styles composants
├── public/                Assets statiques (favicon, og-image)
├── theme.config.tsx       Config Nextra locale-aware
├── next.config.mjs
└── package.json
```

## Stack technique

- **Next.js 15** + **React 19**
- **Nextra 3** (thème docs)
- **TypeScript 5.6** (strict)
- **Vercel** (offre Hobby)
- Licence **MIT**

## Contribuer

Issues et PRs bienvenues. Lisez [`CONTRIBUTING.fr.md`](./CONTRIBUTING.fr.md) d'abord. Contributions à forte valeur :

- Nouveaux guides couvrant une stack spécifique (Remix, Astro, Bun, Deno, Hono…)
- Exemples `specs/` issus de projets open-source réels
- Traductions supplémentaires (`/es`, `/de`, …)

## Relation avec Spec-Kit

speckitlab est un **compagnon** du [Spec-Kit officiel](https://github.com/github/spec-kit), pas un fork ni un concurrent. L'intention est de rendre le SDD accessible à la communauté JS/TS avec un tooling familier.

## Licence

[MIT](./LICENSE) © 2026 Aïssa Belkoussa
