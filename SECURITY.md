# Security policy

## Supported versions

Only the `main` branch is supported. Older tags / historical builds may contain unpatched issues.

## Reporting a vulnerability

If you find a security issue, **please do not open a public GitHub issue**. Instead, use GitHub's **private vulnerability reporting** on this repository's `Security` tab.

You will receive an acknowledgement within 72 hours.

## What counts as a vulnerability

- Secret / credential exposure in source or history
- Dependency with a known CVE affecting this codebase
- Injection vector (XSS, prototype pollution) in the rendered site
- Insecure configuration (missing security headers, permissive CSP)
- Authentication / authorisation bypass (not applicable yet — site is fully static)

## Scope — out of scope

- Denial-of-service against the static hosting
- Social engineering of maintainers
- Physical / network attacks
- Issues in third-party services (Vercel, GitHub) — report directly to them

## Handling of sensitive data

This repository intentionally contains **no secrets, no credentials, no runtime env vars**. The site is fully static and built from MDX source. If a future change introduces secrets, they must live in `.env.local` (git-ignored) — never in the source tree.

## History integrity

Commit authorship uses GitHub's `noreply` email format (`{id}+{handle}@users.noreply.github.com`) to avoid leaking personal addresses. If this ever changes, the git history will be rewritten before publication.
