# Binary Blitz

Static portfolio built with Astro, JavaScript, and Tailwind CSS.

## Development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Astro generates the site in `dist/`. Project content lives in `src/content/projects/*.md`; each filename determines its URL under `/projects/`.

## Deployment

Cloudflare Pages builds and deploys pushes to `main` automatically:

- Build command: `npm run build`
- Build output: `dist`
- Runtime setting: `NODE_VERSION=24`

The production domain is https://binaryblitz.ru. Cloudflare redirects `www` to this canonical domain.
