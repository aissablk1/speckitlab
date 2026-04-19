# Spec — MVP Launch

> **Status**: active
> **Author**: Aïssa Belkoussa
> **Created**: 2026-04-19
> **Last updated**: 2026-04-20
>
> *[Version française ›](./spec.fr.md)*

---

## 1. Problem

Teams using Claude Code or other AI agents in their workflow lack an **operational reference** to practice *Spec-Driven Development* (SDD) on the JavaScript side. Existing resources are:

- **Textual** (blog posts, tweets) — not reusable as-is
- **Python-centric** (original GitHub Spec-Kit)
- **Scattered** — no single hub with templates, examples, guides

**Consequence**: JS devs who want to adopt Spec-Kit copy-paste, reinvent, or abandon.

## 2. Audience

| Persona | Need | Usage |
|---|---|---|
| Solo JS/TS dev | Start a clean project with a clear method | Clone a template, read 2 guides, apply |
| Tech lead | Structure team work with AI | Adopt the conventions, train the team |
| Trainer / consultant | Reusable pedagogical material | Reuse the examples and specs |

## 3. User Stories

### US-1 — Start a feature with a spec
> *As a dev*, I want a ready-to-fill `spec.md` template, *so that* I can scope a feature in 15 minutes without blank-page paralysis.

### US-2 — Understand the spec → plan → tasks chain
> *As a dev discovering SDD*, I want a complete example wiring the 3 documents on a concrete case, *so that* I can visualise the workflow.

### US-3 — Integrate Claude Code
> *As a Claude Code user*, I want a guide showing how to feed specs to the agent and iterate, *so that* I maximise the quality of the generated code.

## 4. Acceptance criteria (AC)

| # | Criterion | Testable by |
|---|---|---|
| AC-1 | The site is reachable at a public HTTPS URL | `curl -I` returns 200 |
| AC-2 | The home explains the project in < 5 sentences | Manual review |
| AC-3 | At least 3 guides published (`getting-started`, `first-spec`, `claude-code-integration`) | `ls pages/*.mdx` |
| AC-4 | At least 3 templates available (`spec`, `plan`, `tasks`) | `ls content/templates/` |
| AC-5 | The repo is public on GitHub with MIT license | Check GitHub |
| AC-6 | Lighthouse ≥ 95 on perf / accessibility / SEO / best-practices | `npx lighthouse` |
| AC-7 | The site respects `prefers-reduced-motion` and WCAG AA | a11y audit |
| AC-8 | No secret exposed client-side | Audit `grep -r "NEXT_PUBLIC_"` |

## 5. Constraints

- **Stack**: Next.js 15 + Nextra 3 + React 19 — consistent with author's stack
- **Zero mocked data**: every example points to real repos or production cases
- **Accessibility**: WCAG AA minimum, no mode-restricted content (dark-only / light-only)
- **Performance**: LCP < 1.5s, CLS < 0.1, TTFB < 200ms on Vercel Edge
- **SEO**: canonical URL, OG meta, sitemap, robots.txt
- **Budget**: 0 € recurring (js.org free, Vercel Hobby hosting)

## 6. Non-goals (explicitly out of scope)

- No user account / auth
- No CMS / backoffice (Markdown/MDX is enough)
- No public API (the site is static)
- Multilingual support limited to EN + FR in V1
- No installable npm CLI in V1 (planned V2 if traction)

## 7. Success metrics

| Indicator | Target at 3 months | Target at 6 months |
|---|---|---|
| Page views / month | 1,000 | 5,000 |
| GitHub stars | 20 | 100 |
| js.org domain accepted | yes | — |
| External mentions (blog, twitter) | 3 | 15 |
| CCA-F leads generated | 1 | 5 |

## 8. Risks

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| js.org PR refused | Medium | High | Start on `is-a.dev` in parallel, reinforce content before submission |
| Nextra 3 deprecated fast | Low | Medium | Nextra 4 migration planned if needed, MDX content is portable |
| Confusion with the official Spec-Kit (GitHub) | Medium | Low | Clarify in the home: "JS companion", not a fork |
| Editorial load too heavy | Medium | Medium | Publish 1 guide / week max, no pressure |
