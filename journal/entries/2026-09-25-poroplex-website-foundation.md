# Poroplex website foundation

**Date:** 2026-09-25  
**Evidence tier:** Smoke-validated  

## Motivation

Poroplex needed a credible public web presence that translates the motivation behind its membrane
technology without exposing confidential grant-planning, process, financial, IP, or partner
information. The immediate goal was a polished multi-page foundation that can be reviewed privately
before any public launch.

## What was done

- Built a static multi-page website with Vite:
  - `index.html`
  - `technology/index.html`
  - `impact/index.html`
  - `about/index.html`
  - `contact/index.html`
  - `privacy/index.html`
- Created a shared responsive design system in `src/styles.css` and interaction logic in `src/main.js`.
- Applied the established Poroplex navy, green, mint, and light-blue visual language.
- Added development-stage language that separates intended benefits from demonstrated evidence.
- Added `.gitignore` protection for `Background Info/`, temporary presentation extracts, build
  artifacts, and environment files.
- Added implementation, confidentiality, and launch-gate guidance in `README.md`.

The local `Background Info/` directory was consulted as source context only. It is not part of the
website or repository contents.

## What improved

- Poroplex now has a coherent public narrative spanning technology, impact, team, and collaboration.
- Confidential details are separated from public content at both the copy and repository level.
- Quantitative future targets and unvalidated commercial or performance claims are not presented as facts.
- The site has no analytics, third-party fonts, contact form, or cookie requirement in its current form.
- The static architecture is simple to host and maintain.

## Suggestions to proceed

### Immediate

- [ ] Founders review every technology, PFAS/BPA, and team statement.
- [ ] Confirm the final public contact email.
- [ ] Add a legally complete German *Impressum*.
- [ ] Replace the provisional privacy notice after selecting the host.

### Medium-term

- [ ] Add approved team photography and partner logos only after confirming publication rights.
- [ ] Add validated performance evidence when it is safe and scientifically supportable.
- [ ] Connect a custom domain and configure production deployment.

### Long-term

- [ ] Add project or pilot case studies with explicit evidence status.
- [ ] Introduce German-language pages if customer discovery supports them.
- [ ] Add privacy-respecting analytics only if decision-making needs justify it.

## Verification

- `npm install` — completed; 0 reported vulnerabilities.
- `npm run build` — passed with Vite; six HTML routes produced.
- Browser smoke test at `http://127.0.0.1:5173/` — responsive home page rendered successfully.
- Route check — `/`, `/technology/`, `/impact/`, `/about/`, `/contact/`, and `/privacy/` all returned HTTP 200.
- IDE lint check for `src/` and `vite.config.js` — no diagnostics.
- Confidential-term scan of public source — no internal recipes, budgets, scale-up targets, or
  work-plan milestones found.

## References

- [Project README](../../README.md)
- Confidential local source directory: `Background Info/` (excluded from version control; do not cite publicly)
