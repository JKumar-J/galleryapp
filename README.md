# Gallery App

A responsive React gallery that loads images from the [Picsum Photos API](https://picsum.photos/) and lets you move through paginated results.

## Features

- Displays 18 images per page
- Previous and next page navigation
- Responsive layout styled with Tailwind CSS
- Deploys automatically to GitHub Pages when changes are pushed to `main`

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the app and publishes it to GitHub Pages after every push to `main`.

1. Push this project to a GitHub repository.
2. Open the repository's **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`, or run the **Deploy to GitHub Pages** workflow manually from the **Actions** tab.

The published site will be available at:

```text
https://<github-user>.github.io/<repository-name>/
```

The Vite configuration automatically uses the repository name as the production base path during the GitHub Actions build.

## Data source

Images are loaded in the browser from `https://picsum.photos/v2/list`. Internet access is required when using the gallery.
