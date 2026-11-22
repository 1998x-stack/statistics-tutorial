# GitHub Pages delivery

The static homepage lives in `index.html`. The deployment workflow `.github/workflows/pages.yml` packages only the pages and assets necessary to serve the course.

## Expected URL

https://1998x-stack.github.io/statistics-tutorial/

## Deployment model

A push to `master` packages `index.html`, `chapters/`, `assets/`, `data/`, and the 28 legacy redirect pages. Publishing uses GitHub Actions Pages with `pages: write` and `id-token: write`; `actions/configure-pages@v5` requests enablement if permitted.

If the action reports a Pages source/environment policy error, repository maintainers need to select **Settings → Pages → Build and deployment → Source → GitHub Actions**, then rerun the workflow. Merely merging the workflow is not proof that the public site is live.

## Post-deploy checks

- Open homepage and verify 28 links, search and filter.
- Open `chapters/01.html`, `02.html`, `03.html` with images and MathML.
- Check `01.html` legacy redirect.
- Confirm network/404 and mobile viewports with the separate browser workflow.
