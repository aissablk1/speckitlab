# Politique de sécurité

*[English version ›](./SECURITY.md)*

## Versions supportées

Seule la branche `main` est supportée. Les tags anciens / builds historiques peuvent contenir des problèmes non patchés.

## Signaler une vulnérabilité

Si vous trouvez un problème de sécurité, **n'ouvrez pas d'issue GitHub publique**. Utilisez à la place le **private vulnerability reporting** de GitHub, dans l'onglet `Security` de ce dépôt.

Vous recevrez un accusé de réception sous 72 heures.

## Ce qui compte comme vulnérabilité

- Exposition de secret / credential dans le code ou l'historique
- Dépendance avec une CVE connue affectant ce codebase
- Vecteur d'injection (XSS, prototype pollution) dans le site rendu
- Configuration non sécurisée (headers manquants, CSP permissif)
- Bypass d'authentification / autorisation (sans objet aujourd'hui — site 100% statique)

## Portée — hors portée

- Attaque par déni de service contre l'hébergement statique
- Ingénierie sociale des mainteneurs
- Attaques physiques / réseau
- Problèmes dans les services tiers (Vercel, GitHub) — à signaler directement à eux

## Gestion des données sensibles

Ce dépôt ne contient volontairement **aucun secret, aucun credential, aucune variable d'env runtime**. Le site est entièrement statique et construit depuis des sources MDX. Si un changement futur introduit des secrets, ils doivent vivre dans `.env.local` (git-ignoré) — jamais dans l'arbre source.

## Intégrité de l'historique

Les auteurs de commits utilisent le format `noreply` de GitHub (`{id}+{handle}@users.noreply.github.com`) pour éviter de fuiter les adresses personnelles. Si cela devait changer, l'historique git serait réécrit avant publication.
