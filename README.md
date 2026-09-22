# J S Vishnu Teja: personal site

Astro static site. All content lives in `src/data/resume.ts`; components only handle layout.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

- `/`: homepage (hero with an animated Bollinger-band chart, experience, projects, record, toolkit, leadership, contact)
- `/projects/coinflow`: CoinFlow case study (copied from CK_Website, re-wrapped in this site's layout)

Design tokens (colors, fonts) are CSS custom properties at the top of `src/styles/site.css`.
Dark graphite is the default; a light "paper" theme follows the OS setting or the nav toggle.

Type is Computer Modern (CMU Serif + CMU Typewriter, loaded from jsDelivr), the LaTeX face.

## Publishing on GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
To turn it on:

1. Make the repo public (free-plan Pages needs a public repo): Settings → General → Danger Zone.
2. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Actions tab → "Deploy to GitHub Pages" → Run workflow (or push any commit).

If the repo lives at `Vishnutejas-2005/Vishnutejas-2005.github.io`, it serves at
https://vishnutejas-2005.github.io and nothing else needs changing. Under any other
owner/name, update `site` in `astro.config.mjs` (and add `base: '/<repo-name>'` for a
project page).
