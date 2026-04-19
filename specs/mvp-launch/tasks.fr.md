# Tasks — MVP Launch

> Dérivé de [`plan.md`](./plan.md). Chaque tâche est atomique, vérifiable, et référence un critère d'acceptation (AC) ou un choix de plan.
> **Créé le** : 2026-04-19
>
> **Légende** :
> - `[ ]` = À faire
> - `[~]` = En cours
> - `[x]` = Terminé
> - `[-]` = Annulé

---

## Phase 1 — Bootstrap (Jour 1)

- [x] **T-01** Créer l'arborescence du projet (plan §2) — `AC-3`
- [x] **T-02** Initialiser `package.json` avec Next.js 15 + Nextra 3 + React 19 — `plan §1`
- [x] **T-03** Configurer `next.config.mjs` avec Nextra wrapper + security headers — `plan §6`
- [x] **T-04** Créer `theme.config.tsx` (logo, footer, head meta) — `AC-6, AC-7`
- [x] **T-05** Configurer `tsconfig.json` strict avec alias `@/*`
- [x] **T-06** Ajouter `.gitignore` (Node + Next + Vercel + `_backup/`)
- [x] **T-07** Configurer `.vscode/` pour éliminer faux-positifs Tailwind (même sans Tailwind ici, convention projet)

## Phase 2 — Contenu minimum (Jour 1-2)

- [~] **T-10** Rédiger `pages/index.mdx` — home qui répond "c'est quoi speckitlab ?" en < 5 phrases — `AC-2`
- [~] **T-11** Rédiger `pages/getting-started.mdx` — onboarding nouveau dev — `AC-3`
- [~] **T-12** Rédiger `pages/concepts/first-spec.mdx` — US-1 + US-2 — `AC-3`
- [~] **T-13** Rédiger `pages/concepts/claude-code-integration.mdx` — US-3 — `AC-3`
- [ ] **T-14** Créer templates téléchargeables (`spec.md`, `plan.md`, `tasks.md`) — `AC-4`
- [ ] **T-15** Rédiger `_meta.json` pour ordre de nav

## Phase 3 — Projet meta (Jour 2)

- [~] **T-20** Rédiger `README.md` (positionnement fort pour js.org review)
- [~] **T-21** Ajouter `LICENSE` MIT
- [~] **T-22** Rédiger `CONTRIBUTING.md` (comment proposer un guide)
- [ ] **T-23** Créer `.github/workflows/ci.yml` (lint + typecheck)
- [ ] **T-24** Ajouter favicon + og-image dans `public/`

## Phase 4 — Déploiement (Jour 2-3)

- [ ] **T-30** Initialiser repo Git local + premier commit
- [ ] **T-31** Créer repo public `aissablk1/speckitlab` sur GitHub
- [ ] **T-32** Push initial sur `main`
- [ ] **T-33** Créer projet Vercel lié au repo
- [ ] **T-34** Vérifier déploiement `speckitlab.vercel.app` — `AC-1`
- [ ] **T-35** Lancer Lighthouse audit — `AC-6`

## Phase 5 — Domaines (Semaine 1-4)

- [ ] **T-40** PR sur `is-a.dev/register` pour `speckitlab.is-a.dev` — fallback rapide
- [ ] **T-41** Configurer DNS / CNAME vers Vercel
- [ ] **T-42** Vérifier HTTPS + canonical
- [ ] **T-43** Préparer PR `js-org/js.org` avec argumentaire solide
- [ ] **T-44** Soumettre PR js.org + répondre aux reviews
- [ ] **T-45** Si accepté : migration `speckitlab.js.org`, mise à jour canonical

## Phase 6 — Polish V1 (Semaine 2-3)

- [ ] **T-50** Ajouter 2 guides supplémentaires pour étoffer le contenu
- [ ] **T-51** Intégrer Vercel Web Analytics (privacy-friendly)
- [ ] **T-52** Audit accessibilité WCAG AA — `AC-7`
- [ ] **T-53** Audit sécurité `npm audit` + correction CVE
- [ ] **T-54** Publier un post d'annonce LinkedIn (lien vers CCA-F monétisation)

## Phase 7 — Maintenance & croissance (continu)

- [ ] **T-60** Publier 1 guide / semaine (pas de pression, qualité > quantité)
- [ ] **T-61** Répondre aux issues GitHub sous 72h
- [ ] **T-62** Revue mensuelle des métriques (spec §7)
- [ ] **T-63** Si ≥ 50 stars : démarrer V2 (CLI npm)

---

## Dépendances externes bloquantes

| Dépendance | Impact | Statut |
|---|---|---|
| Compte GitHub `aissablk1` | Requis pour repo + PRs | ✅ disponible |
| Compte Vercel (sous quota) | Requis pour hébergement | ⚠️ vérifier suite dépassement avril |
| Review js.org | Requis pour domaine cible | ⏳ asynchrone |
