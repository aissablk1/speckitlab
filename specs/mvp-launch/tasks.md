# Tasks — MVP Launch

> Derived from [`plan.md`](./plan.md). Each task is atomic, verifiable, and references an acceptance criterion (AC) or a plan choice.
> **Created**: 2026-04-19 — **Last updated**: 2026-04-20
>
> *[Version française ›](./tasks.fr.md)*
>
> **Legend**:
> - `[ ]` To do
> - `[~]` In progress
> - `[x]` Done
> - `[-]` Cancelled

---

## Phase 1 — Bootstrap (Day 1)

- [x] **T-01** Create project folder structure (plan §2) — `AC-3`
- [x] **T-02** Initialise `package.json` with Next.js 15 + Nextra 3 + React 19 — `plan §1`
- [x] **T-03** Configure `next.config.mjs` with Nextra wrapper + security headers — `plan §6`
- [x] **T-04** Create `theme.config.tsx` (logo, footer, head meta, locale-aware) — `AC-6, AC-7`
- [x] **T-05** Configure strict `tsconfig.json` with `@/*` alias
- [x] **T-06** Add `.gitignore` (Node + Next + Vercel + `_backup/` + defensive patterns)
- [x] **T-07** Configure `.vscode/` to eliminate Tailwind false-positives (project convention)

## Phase 2 — Minimum content (Day 1-2)

- [x] **T-10** Write `pages/index.en.mdx` — home answering "what is speckitlab?" in < 5 sentences — `AC-2`
- [x] **T-11** Write `pages/getting-started.en.mdx` — new-dev onboarding — `AC-3`
- [x] **T-12** Write `pages/concepts/first-spec.en.mdx` — US-1 + US-2 — `AC-3`
- [x] **T-13** Write `pages/concepts/claude-code-integration.en.mdx` — US-3 — `AC-3`
- [x] **T-14** Create downloadable templates (`spec.md`, `plan.md`, `tasks.md`) — `AC-4`
- [x] **T-15** Write `_meta.{en,fr}.json` for navigation order

## Phase 3 — Project meta (Day 2)

- [x] **T-20** Write `README.md` (strong positioning for js.org review)
- [x] **T-21** Add MIT `LICENSE`
- [x] **T-22** Write `CONTRIBUTING.md` (how to propose a guide)
- [x] **T-23** Create `.github/workflows/ci.yml` (lint + typecheck)
- [ ] **T-24** Add favicon + og-image to `public/` (favicon.svg ✓, og-image pending)

## Phase 4 — Deployment (Day 2-3)

- [x] **T-30** Initialise local Git repo + first commit
- [x] **T-31** Create public repo `aissablk1/speckitlab` on GitHub
- [x] **T-32** Initial push on `main`
- [x] **T-33** Create Vercel project linked to repo
- [x] **T-34** Verify deployment `speckitlab.vercel.app` — `AC-1`
- [ ] **T-35** Run Lighthouse audit — `AC-6`

## Phase 5 — Domains (Week 1-4)

- [-] **T-40** PR `is-a.dev/register` for `speckitlab.is-a.dev` — first attempt rejected (no preview)
- [ ] **T-40-bis** Re-submit `is-a.dev` PR with Vercel preview URL + full template
- [ ] **T-41** Configure DNS / CNAME to Vercel
- [ ] **T-42** Verify HTTPS + canonical
- [ ] **T-43** Prepare `js-org/js.org` PR with solid argument
- [ ] **T-44** Submit js.org PR + respond to reviews
- [ ] **T-45** If accepted: migrate `speckitlab.js.org`, update canonical

## Phase 6 — V1 polish (Week 2-3)

- [x] **T-50-a** i18n scaffold (EN + FR) — Nextra 3 locale suffix
- [x] **T-50-b** Custom UX pass (HeroV2, LoopFlow, Marquee, Stats, Personas, BigCTA)
- [x] **T-50-c** Full French translation (README, CONTRIBUTING, SECURITY, specs, templates, 404)
- [ ] **T-51** Integrate Vercel Web Analytics (privacy-friendly)
- [ ] **T-52** WCAG AA accessibility audit — `AC-7`
- [ ] **T-53** Security audit `npm audit` + CVE fixes (0 vuln as of 2026-04-20)
- [ ] **T-54** Publish LinkedIn announcement post (CCA-F monetisation link)

## Phase 7 — Maintenance & growth (ongoing)

- [ ] **T-60** Publish 1 guide / week (no pressure, quality > quantity)
- [ ] **T-61** Reply to GitHub issues within 72h
- [ ] **T-62** Monthly review of metrics (spec §7)
- [ ] **T-63** If ≥ 50 stars: start V2 (npm CLI)

---

## Blocking external dependencies

| Dependency | Impact | Status |
|---|---|---|
| GitHub account `aissablk1` | Required for repo + PRs | ✅ available |
| Vercel account (within quota) | Required for hosting | ✅ project live |
| js.org review | Required for target domain | ⏳ async |
