# Contribuer à speckitlab

Merci d'envisager une contribution. Ce projet grandit par des exemples concrets, donc votre voix est la bienvenue.

*[English version ›](./CONTRIBUTING.md)*

## Façons de contribuer

1. **Proposer un nouveau guide** — un pattern SDD que vous utilisez, une intégration de stack (Remix, Astro, Bun…), un walkthrough d'une feature réelle
2. **Partager une vraie spec** — `specs/` anonymisée d'une feature livrée, en référence
3. **Améliorer une page existante** — prose plus claire, typos corrigées, liens cassés
4. **Signaler un problème** — tout ce qui est confus, faux ou manquant

## Workflow

1. Forkez le repo et créez une branche : `git checkout -b votre-sujet`
2. Lancez le site en local : `npm install && npm run dev`
3. Ajoutez ou modifiez du MDX dans `pages/` (ou des templates dans `content/templates/`)
4. Vérifiez le rendu à http://localhost:3000
5. Ouvrez une PR avec un titre et une description clairs

## Conventions d'écriture

- **Langue** — anglais (V1) + français. D'autres traductions sous `/es`, `/de`, etc.
- **Ton** — direct, pratique, sans fluff. Montrer, pas vendre.
- **Frontmatter MDX** — chaque page a `title` et `description`. Ajouter `date` et `updated` si pertinent.
- **Fichiers** — nommer `.en.mdx` pour anglais, `.fr.mdx` pour français.
- **Liens** — marquer les liens externes avec un chevron `›` (U+203A) trailing précédé d'un `&nbsp;`.
- **Code blocks** — préférer le code réel et exécutable. Si pseudo-code, l'indiquer.
- **Accessibilité** — titres dans l'ordre (ne pas sauter de niveaux), alt texts descriptifs, contraste WCAG AA.

## Structure d'un guide (template)

```mdx
---
title: "..."
description: "..."
---

# Titre

Intro d'un paragraphe avec le problème que le guide résout.

## Prérequis

## Étapes

## Pièges courants

## Ressources
```

## Contributions de specs

Quand vous partagez une spec réelle, anonymisez les parties sensibles (noms d'entreprise, détails clients). L'objectif est pédagogique.

## Code de conduite

Soyez bienveillant, soyez précis. La critique vise le travail, jamais les personnes.

## Licence

En contribuant, vous acceptez que vos contributions soient licenciées sous la Licence MIT.
