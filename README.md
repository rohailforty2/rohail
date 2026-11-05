# Rohail Ahmad - Portfolio

Personal portfolio built with Next.js and Tailwind CSS, exported as a static site and hosted on GitHub Pages.

**Live site:** https://rohailforty2.github.io/rohail/

## Local development

```bash
npm ci
npm run dev
```

Then open http://localhost:3000.

## Editing content

- Projects: `data/projects.js`
- Images, PDFs and the CV: `public/`

Plain `<a>` and `<img>` tags that point at files in `public/` must use `assetPath()` from `lib/assetPath.js`. Without it, the links work locally but return 404 on GitHub Pages, where the site is served from `/rohail/`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages.

First-time setup: in the repository, go to **Settings > Pages** and set **Source** to **GitHub Actions**.

If the repository is renamed, update the `/rohail` base path in `next.config.mjs` to match.
