# Rampa Makerspace

A responsive React, TypeScript, Vite, and Tailwind website for Rampa, with a Quartz-powered wiki generated from an Obsidian knowledge base.

## Install

```bash
npm install
```

## Quick start

For normal local work, use the combined dev command:

```bash
npm run dev:all
```

- Main site: `http://127.0.0.1:5173/`
- Wiki entry point: `http://127.0.0.1:5173/knowledge/index.html`

This runs:

- the main Vite site
- the Quartz wiki build in watch mode

so changes to the app and wiki content stay in sync while you work.

## Other useful commands

Run only the main site:

```bash
npm run dev
```

Run only the Quartz wiki preview:

```bash
npm run dev:knowledge
```

Build the wiki output:

```bash
npm run build:knowledge
```

Build the wiki as a standalone site:

```bash
npm run build:wiki
```

Build the whole project:

```bash
npm run build
```

## Build the knowledge base

Quartz now lives in `wiki/` and publishes the Obsidian vault from `knowledge/`.

- `knowledge/` contains the Obsidian vault and is the source of truth for content.
- `wiki/` contains the Quartz app, theme customizations, layout changes, and translations.
- `public/knowledge/` is generated output and should not be edited by hand.
- `dist-wiki/` is generated output for the standalone wiki site and should not be edited by hand.

## Wiki workflow

Use this as the default workflow:

1. Edit or add notes in `knowledge/` when updating workshops, concepts, materials, artists, projects, or maps.
2. Use `npm run dev:all` while working locally.
3. Edit `wiki/` only when changing Quartz behavior, layout, translations, or styling.
4. Commit `knowledge/` changes for content updates.
5. Commit `wiki/`, `scripts/`, or config changes only when changing how the wiki is built or displayed.

Important notes:

- Do not edit `public/knowledge/` by hand. It will be replaced on the next build.
- Avoid replacing the whole `wiki/` folder with a fresh Quartz copy. This project contains local Quartz customizations such as Slovenian translations, light-only behavior, return links to the main site, and routing/build fixes.
- If Quartz itself needs an upgrade later, update it carefully instead of overwriting the folder.

## Project structure

```text
.
├── public/
│   └── knowledge/        # generated Quartz output
├── knowledge/            # Obsidian vault source
├── scripts/
│   ├── build-knowledge.mjs
│   ├── finalize-knowledge-output.mjs
│   ├── prepare-knowledge-wiki.mjs
│   └── dev-all.mjs
├── src/
│   ├── components/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── wiki/                 # Quartz app
├── design brief.md
├── tech brief.md
├── tailwind.config.ts
└── vite.config.ts
```

## Where to edit things

- Main site styles: `src/index.css`
- Main site buttons: `src/components/Button.tsx`
- Main site pages and copy: `src/pages/`
- Obsidian wiki content: `knowledge/`
- Quartz config: `wiki/quartz.config.ts`
- Quartz layout: `wiki/quartz.layout.ts`
- Quartz translations: `wiki/quartz/i18n/locales/`
- Knowledge build pipeline: `scripts/`

## Current wiki setup

The wiki is currently configured with:

- direct navigation from the main site into Quartz
- light-only Quartz styling
- Slovenian UI translations for standard Quartz interface text
- working internal wiki links in both dev and build output
- a visible return link back to the main Rampa site

## Standalone wiki hosting on a VPS

The wiki can be deployed separately from the main Vite site.

For a static build:

```bash
QUARTZ_BASE_URL=wiki.example.com npm run build:wiki
```

Upload the generated `dist-wiki/` directory to the VPS and serve it as the web root with Nginx, Caddy, or another static server.

For Docker:

```bash
docker build -f Dockerfile.wiki --build-arg QUARTZ_BASE_URL=wiki.example.com -t rampa-wiki .
docker run -d --name rampa-wiki --restart unless-stopped -p 8080:80 rampa-wiki
```

Then point your reverse proxy or domain to port `8080`. `QUARTZ_BASE_URL` should be the public host without `https://`, for example `wiki.rampa.si`. If the wiki is hosted in a subfolder, include the path, for example `example.com/wiki`.
