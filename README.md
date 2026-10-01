# MediaHub

The entry point to a collection of media-production tools, and the source of the shared design
system used across the suite.

## What this is

MediaHub is the landing page that ties five production tools together. It is intentionally the
lightest project in the collection — its job is to present the suite and to host the **design
system** (color tokens, typography, and reusable components) that every other project builds on.

## The suite

| Project          | Type         | Status       |
| ---------------- | ------------ | ------------ |
| MediaHub         | Website      | Live         |
| Rundown Studio   | Workflow App | In progress  |
| VideoFlow AI     | Workflow App | In progress  |
| Script Studio    | Website      | In progress  |
| Subtitle Studio  | Website      | In progress  |

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Vite 8**
- **Tailwind CSS v4** (CSS-first configuration)

## Design system

Design tokens live in [`src/index.css`](src/index.css) under the `@theme` block:

- `brand-*` — studio violet (primary)
- `accent-*` — signal cyan (secondary)
- `ink-*` — dark studio surface scale
- `font-display` / `font-sans` / `font-mono` — typography tokens

Reusable components live in [`src/components`](src/components): `Header`, `Hero`, `ProjectCard`,
`TechBadge`, `Footer`.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```

## Project structure

```
src/
├── components/     # presentational components
├── data/           # project catalog + site identity
├── index.css       # Tailwind import + design tokens
├── App.tsx
└── main.tsx
```
