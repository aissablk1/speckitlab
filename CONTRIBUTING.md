# Contributing to speckitlab

Thanks for considering a contribution. This project grows through real-world examples, so your voice is welcome.

## Ways to contribute

1. **Propose a new guide** — an SDD pattern you use, a stack integration (Remix, Astro, Bun…), a real feature walkthrough
2. **Share a real spec** — anonymised `specs/` from a shipped feature, as a reference
3. **Improve an existing page** — clearer prose, fixed typos, broken links
4. **Report an issue** — anything confusing, wrong, or missing

## Workflow

1. Fork the repo and create a branch: `git checkout -b your-topic`
2. Run the site locally: `npm install && npm run dev`
3. Add or edit MDX under `pages/` (or templates under `content/templates/`)
4. Check it renders correctly at http://localhost:3000
5. Open a PR with a clear title and description

## Writing conventions

- **Language** — English (V1). French translations go under `/fr`.
- **Tone** — direct, practical, no fluff. Show, don't sell.
- **MDX frontmatter** — every page has `title`, `description`. Add `date` and `updated` if relevant.
- **Links** — always mark external links with a trailing `›` (U+203A) and `&nbsp;` separator.
- **Code blocks** — prefer real, runnable code. If pseudo-code, mark it as such.
- **Accessibility** — headings in order (no skipping levels), descriptive alt text, WCAG AA contrast.

## Guide structure (template)

```mdx
---
title: "..."
description: "..."
---

# Title

One-paragraph intro with the problem this guide solves.

## Prerequisites

## Steps

## Common pitfalls

## Resources
```

## Spec contributions

When sharing a real-world spec, anonymise sensitive parts (company names, client details). The goal is pedagogical.

## Code of conduct

Be kind, be specific. Criticism targets work, never people.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
