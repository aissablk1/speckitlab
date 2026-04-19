# Spec — MVP Launch

> **Statut** : active
> **Auteur** : Aïssa Belkoussa
> **Créée le** : 2026-04-19
> **Dernière mise à jour** : 2026-04-19

---

## 1. Problème

Les équipes qui utilisent Claude Code ou d'autres agents IA dans leur workflow manquent d'un **référentiel opérationnel** pour pratiquer le *Spec-Driven Development* (SDD) côté JavaScript/TypeScript. Les ressources existantes sont :

- **Textuelles** (articles de blog, tweets) — pas réutilisables tels quels
- **Python-centriques** (Spec-Kit originel de GitHub)
- **Dispersées** — pas de hub unique avec templates, exemples, guides

**Conséquence** : les devs JS qui veulent adopter Spec-Kit copient-collent, réinventent, abandonnent.

## 2. Audience

| Persona | Besoin | Usage |
|---|---|---|
| Dev solo JS/TS | Démarrer un projet propre avec une méthodologie claire | Cloner un template, lire 2 guides, appliquer |
| Tech lead | Structurer le travail d'équipe avec IA | Adopter les conventions, former son équipe |
| Formateur / consultant | Matériel pédagogique réutilisable | Réutiliser les exemples et specs |

## 3. User Stories

### US-1 — Démarrer une feature avec une spec
> *En tant que dev*, je veux un template `spec.md` prêt à remplir, *afin de* cadrer une feature en 15 minutes sans page blanche.

### US-2 — Comprendre la chaîne spec → plan → tasks
> *En tant que dev qui découvre SDD*, je veux un exemple complet qui relie les 3 documents sur un cas concret, *afin de* visualiser le workflow.

### US-3 — Intégrer Claude Code
> *En tant qu'utilisateur Claude Code*, je veux un guide qui montre comment faire lire les specs à l'agent et itérer, *afin de* maximiser la qualité du code généré.

## 4. Critères d'acceptation (AC)

| # | Critère | Testable par |
|---|---|---|
| AC-1 | Le site est accessible à une URL publique HTTPS | `curl -I` retourne 200 |
| AC-2 | La page d'accueil explique le projet en < 5 phrases | Review manuelle |
| AC-3 | Au minimum 3 guides publiés (`getting-started`, `first-spec`, `claude-code-integration`) | `ls pages/*.mdx` |
| AC-4 | Au minimum 3 templates disponibles (`spec`, `plan`, `tasks`) | `ls content/templates/` |
| AC-5 | Le repo est public sur GitHub avec License MIT | Vérifier GitHub |
| AC-6 | Score Lighthouse ≥ 95 sur perf / accessibility / SEO / best-practices | `npx lighthouse` |
| AC-7 | Le site respecte `prefers-reduced-motion` et WCAG AA | Audit a11y |
| AC-8 | Pas de secret exposé côté client | Audit `grep -r "NEXT_PUBLIC_"` |

## 5. Contraintes

- **Stack** : Next.js 15 + Nextra 3 + React 19 — cohérent avec la stack de l'auteur
- **Zéro donnée mockée** : tous les exemples pointent vers des repos réels ou des cas production
- **Accessibilité** : WCAG AA minimum, pas de contenu réservé à un mode (dark-only / light-only)
- **Performance** : LCP < 1.5s, CLS < 0.1, TTFB < 200ms sur Vercel Edge
- **SEO** : canonical URL, OG meta, sitemap, robots.txt
- **Budget** : 0 € récurrent (domaine js.org gratuit, hébergement Vercel Hobby)

## 6. Non-objectifs (explicitement hors scope)

- Pas de compte utilisateur / auth
- Pas de CMS / backoffice (Markdown/MDX suffit)
- Pas d'API publique (le site est statique)
- Pas de traductions multilingues dans la V1 (FR ou EN only, à trancher)
- Pas de CLI npm installable dans la V1 (prévu V2 si traction)

## 7. Métriques de succès

| Indicateur | Cible à 3 mois | Cible à 6 mois |
|---|---|---|
| Pages vues / mois | 1 000 | 5 000 |
| Stars GitHub | 20 | 100 |
| Domaine js.org accepté | oui | — |
| Mentions externes (blog, twitter) | 3 | 15 |
| Leads CCA-F générés | 1 | 5 |

## 8. Risques

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| PR js.org refusée | Moyenne | Élevé | Démarrer sur `is-a.dev` en parallèle, renforcer le contenu avant soumission |
| Nextra 3 deprecated rapidement | Faible | Moyen | Migration Nextra 4 prévue si besoin, contenu MDX portable |
| Confusion avec Spec-Kit officiel (GitHub) | Moyenne | Faible | Clarifier dans la home : "JS companion", pas de fork |
| Charge éditoriale trop lourde | Moyenne | Moyen | Publier 1 guide / semaine max, pas de pression |
