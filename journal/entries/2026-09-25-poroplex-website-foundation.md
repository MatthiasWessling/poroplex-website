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

### Brand alignment revision

After the first implementation, `Poroplex_Incubation_Pitch_Design_22092026.pptx` was established as
the design source of truth. The website was revised to use:

- the exact Poroplex wordmark and porous green ring;
- the deck palette (`#003366`, `#008268`, `#EAF6F0`, `#ECF4FC`);
- Arial typography, numbered section language, pale blue/green cards, and restrained geometry;
- the approved hollow-fiber and founder photography from the deck;
- exact core wording including “PFAS-free. Water-based. Industrially scalable.” and
  “Safer materials, Cleaner water. A more sustainable industry.”
- a clearly labeled material roadmap: the current platform is described as PFAS- and BPA-free,
  while bio-based polymers are identified as a next-generation development direction requiring validation.

The website adapts the slide system to responsive web layouts rather than reproducing slide canvases
literally. Confidential work-plan content remains excluded.

### GitHub Pages launch

The repository was intentionally changed from private to public after explicit approval because the
connected GitHub plan does not support Pages for private repositories. A GitHub Actions workflow in
`.github/workflows/deploy-pages.yml` now builds and deploys the site on every push to `main`.

Live site: https://matthiaswessling.github.io/poroplex-website/

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
- Desktop and mobile visual checks after deck alignment — exact logo, hero image, colors, wording,
  navigation, and responsive layout rendered successfully.
- GitHub Pages workflow run `36148096754` — build and deployment completed successfully.
- Public production URL — loaded over HTTPS with the expected title, navigation, imagery, and content.
- Route check — `/`, `/technology/`, `/impact/`, `/about/`, `/contact/`, and `/privacy/` all returned HTTP 200.
- IDE lint check for `src/` and `vite.config.js` — no diagnostics.
- Confidential-term scan of public source — no internal recipes, budgets, scale-up targets, or
  work-plan milestones found.

## References

- [Project README](../../README.md)
- Confidential local source directory: `Background Info/` (excluded from version control; do not cite publicly)
