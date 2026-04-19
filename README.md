# speckitlab

> Spec-Driven Development (SDD) for the JavaScript ecosystem, paired with Claude Code.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Built with Nextra](https://img.shields.io/badge/Built%20with-Nextra%203-black)](https://nextra.site)
[![Dogfooded](https://img.shields.io/badge/dogfooded-%E2%9C%93-brightgreen)](./specs/mvp-launch)

**Live:** [speckitlab.vercel.app](https://speckitlab.vercel.app)

---

## What is this?

A practical lab for [Spec-Driven Development](https://github.com/github/spec-kit) written for JavaScript / TypeScript teams. It offers:

- **Templates** you can copy-paste today (`spec.md`, `plan.md`, `tasks.md`)
- **Guides** walking through real feature examples end-to-end
- A focused **Claude Code integration** section — because that's where SDD becomes a superpower

## Why it exists

The [official Spec-Kit](https://github.com/github/spec-kit) is Python-centric. JS/TS teams reinvent the same conventions, often abandon them. This repo gives the JS ecosystem a shared starting point.

## Dogfooding

This site was built using the specs you'll find in [`specs/mvp-launch/`](./specs/mvp-launch). That means:

- [`specs/mvp-launch/spec.md`](./specs/mvp-launch/spec.md) — the problem, audience, acceptance criteria
- [`specs/mvp-launch/plan.md`](./specs/mvp-launch/plan.md) — stack & architecture decisions
- [`specs/mvp-launch/tasks.md`](./specs/mvp-launch/tasks.md) — the checklist that produced this codebase

Read them as your first real example.

## Quick start

```bash
git clone https://github.com/aissablk1/speckitlab.git
cd speckitlab
npm install
npm run dev
# ➜ http://localhost:3000
```

## Project structure

```
speckitlab/
├── specs/                 Specs of the site itself (dogfooding)
├── pages/                 Nextra MDX content
│   ├── index.mdx
│   ├── getting-started.mdx
│   └── concepts/
├── content/templates/     Copy-pasteable spec/plan/tasks templates
├── public/                Static assets
├── theme.config.tsx       Nextra theme
├── next.config.mjs
└── package.json
```

## Tech stack

- **Next.js 15** + **React 19**
- **Nextra 3** (docs theme)
- **TypeScript 5.6** (strict)
- **Vercel** (Hobby tier)
- **MIT license**

## Contributing

Issues and PRs welcome. Read [`CONTRIBUTING.md`](./CONTRIBUTING.md) first. High-value contributions:

- New guides covering a specific stack (Remix, Astro, Bun, Deno, Hono…)
- Real-world `specs/` examples from open-source projects
- Translations (`/fr`, `/es`, …)

## Relation to Spec-Kit

speckitlab is a **companion** to the [official Spec-Kit](https://github.com/github/spec-kit), not a fork or a competitor. The intent is to make SDD accessible to the JS/TS community with familiar tooling.

## License

[MIT](./LICENSE) © 2026 Aïssa Belkoussa
