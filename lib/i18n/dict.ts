/**
 * Dictionnaire unique FR/EN.
 * Chaque feuille est { en, fr }. Résolu côté serveur via cookies(),
 * côté client via useT() (LocaleProvider).
 */

export type Locale = 'en' | 'fr'
export const LOCALES: readonly Locale[] = ['en', 'fr'] as const
export const DEFAULT_LOCALE: Locale = 'en'
export const LOCALE_COOKIE = 'skl-locale'

type Leaf = { en: string; fr: string }

export const dict = {
  nav: {
    gettingStarted: { en: 'Getting started', fr: 'Démarrage' },
    concepts: { en: 'Concepts', fr: 'Concepts' },
    templates: { en: 'Templates', fr: 'Templates' },
    github: { en: 'GitHub', fr: 'GitHub' },
    toggleTheme: { en: 'Toggle theme', fr: 'Changer de thème' },
    search: { en: 'Search documentation…', fr: 'Rechercher dans la doc…' },
  },
  hero: {
    eyebrow: {
      en: 'AN OPINIONATED JS COMPANION TO SPEC-KIT',
      fr: 'UN COMPAGNON JS OPINIONATED DE SPEC-KIT',
    },
    titleStart: { en: 'Ship features with ', fr: 'Livrer des features avec ' },
    titleEm: { en: 'intent', fr: 'intention' },
    titleEnd: { en: ',\nnot improvisation.', fr: ',\npas à l\u2019improvisation.' },
    subtitle: {
      en: 'Templates, guides, and Claude Code integration patterns for the JavaScript ecosystem — so you go from blank page to shipped feature without the usual blank-page paralysis.',
      fr: 'Templates, guides et patterns d\u2019intégration Claude Code pour l\u2019écosystème JavaScript — pour passer de la page blanche à la feature livrée sans la paralysie habituelle.',
    },
    primary: { en: 'Write your first spec', fr: 'Écrire votre première spec' },
    secondary: { en: 'See an example', fr: 'Voir un exemple' },
  },
  showcase: {
    kicker: { en: 'The spec', fr: 'La spec' },
    heading: {
      en: 'One file. Every assumption on the table.',
      fr: 'Un fichier. Toutes les hypothèses sur la table.',
    },
    para1: {
      en: 'A spec isn\u2019t documentation after the fact. It\u2019s the contract you hand to Claude Code before any line gets written — the problem, the acceptance criteria, what\u2019s explicitly out of scope.',
      fr: 'Une spec n\u2019est pas de la documentation a posteriori. C\u2019est le contrat que vous passez à Claude Code avant qu\u2019une ligne soit écrite — le problème, les critères d\u2019acceptation, ce qui est explicitement hors scope.',
    },
    para2: {
      en: 'It survives the refactor. It argues the trade-offs. It keeps the agent honest across sessions.',
      fr: 'Elle survit au refactor. Elle argumente les trade-offs. Elle garde l\u2019agent honnête entre les sessions.',
    },
    metric1Label: { en: 'Sections', fr: 'Sections' },
    metric1Value: { en: '8 canonical', fr: '8 canoniques' },
    metric2Label: { en: 'Review', fr: 'Review' },
    metric2Value: { en: 'Under 20 minutes', fr: 'Moins de 20 minutes' },
    metric3Label: { en: 'Output', fr: 'Sortie' },
    metric3Value: {
      en: 'Handed as-is to Claude Code',
      fr: 'Passée telle quelle à Claude Code',
    },
  },
  flow: {
    kicker: { en: 'The flow', fr: 'Le flux' },
    heading: {
      en: 'From intent to shipped — three files.',
      fr: 'De l\u2019intention à la livraison — trois fichiers.',
    },
    intro: {
      en: 'The spec states what and why. The plan argues how. The tasks list atomic steps each traceable to an acceptance criterion. No other artefact. No hidden slack. Claude Code reads the three and executes.',
      fr: 'La spec dit le quoi et le pourquoi. Le plan argumente le comment. Les tasks listent les étapes atomiques, chacune traçable à un critère d\u2019acceptation. Aucun autre artefact. Aucun angle mort. Claude Code lit les trois et exécute.',
    },
    specSub: {
      en: 'Problem, audience, acceptance criteria, non-goals — written first, never skipped.',
      fr: 'Problème, audience, critères d\u2019acceptation, non-objectifs — écrits en premier, jamais sautés.',
    },
    planSub: {
      en: 'Stack choices, data contracts, security posture. Every non-trivial decision justified in one sentence.',
      fr: 'Choix de stack, contrats de données, sécurité. Chaque décision non-triviale justifiée en une phrase.',
    },
    tasksSub: {
      en: 'Atomic, verifiable, each mapped to an AC. Completable in \u2264 30 minutes or split.',
      fr: 'Atomiques, vérifiables, chacune mappée à un AC. Réalisables en \u2264 30 minutes ou découpées.',
    },
  },
  closing: {
    kicker: { en: 'Ready when you are', fr: 'Prêt quand vous l\u2019êtes' },
    heading: {
      en: 'Stop arguing with a blank page.',
      fr: 'Arrêtez de vous disputer avec la page blanche.',
    },
    body: {
      en: 'Copy the templates, write your first spec in twenty minutes, hand it to Claude Code. The site you\u2019re reading was built the same way — its specs live in /specs/mvp-launch/.',
      fr: 'Copiez les templates, écrivez votre première spec en vingt minutes, passez-la à Claude Code. Le site que vous lisez a été construit de la même manière — ses specs vivent dans /specs/mvp-launch/.',
    },
    primary: { en: 'Write your first spec', fr: 'Écrire votre première spec' },
    secondary: { en: 'Browse templates', fr: 'Voir les templates' },
    github: { en: 'View on GitHub', fr: 'Voir sur GitHub' },
  },
  footer: {
    built: { en: 'Built with \u2665', fr: 'Construit avec \u2665' },
    rights: {
      en: '© 2026 A\u00EFssa Belkoussa — MIT.',
      fr: '© 2026 A\u00EFssa Belkoussa — MIT.',
    },
  },
  docs: {
    onThisPage: { en: 'On this page', fr: 'Sur cette page' },
    editOnGitHub: {
      en: 'Edit this page on GitHub',
      fr: 'Modifier cette page sur GitHub',
    },
    groupIntro: { en: 'Introduction', fr: 'Introduction' },
    groupConcepts: { en: 'Concepts', fr: 'Concepts' },
    groupTemplates: { en: 'Templates', fr: 'Templates' },
  },
} as const satisfies DeepDict

type DeepDict = { [key: string]: Leaf | DeepDict }

// ---------------------------------------------------------------------------
// Résolution typée
// ---------------------------------------------------------------------------

type Resolved<T> = T extends Leaf
  ? string
  : { [K in keyof T]: Resolved<T[K]> }

export type T = Resolved<typeof dict>

function isLeaf(v: unknown): v is Leaf {
  return (
    typeof v === 'object' &&
    v !== null &&
    'en' in v &&
    'fr' in v &&
    typeof (v as Leaf).en === 'string'
  )
}

export function resolve<V>(node: V, locale: Locale): Resolved<V> {
  if (isLeaf(node)) return node[locale] as Resolved<V>
  if (typeof node !== 'object' || node === null) return node as Resolved<V>
  const out: Record<string, unknown> = {}
  for (const k in node as Record<string, unknown>) {
    out[k] = resolve((node as Record<string, unknown>)[k], locale)
  }
  return out as Resolved<V>
}

export function resolveDict(locale: Locale): T {
  return resolve(dict, locale)
}
