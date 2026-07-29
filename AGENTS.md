# AGENTS.md

## What this repo is

Source for **fabricjs.com** — the marketing site, docs, demo gallery, and
API reference for [Fabric.js](https://github.com/fabricjs/fabric.js) (an
HTML5 canvas library). Built with [Astro](https://astro.build) using the
[Starlight](https://starlight.astro.build) docs theme, plus React islands
for interactive bits. Deployed to GitHub Pages.

This is a documentation/marketing site, **not** the Fabric.js library
itself — the library source lives in the `fabric.js` git submodule and is
only used here to generate the API reference via TypeDoc.

## Repo structure

```
/
├── fabric.js/              git submodule → fabricjs/fabric.js (library source)
│                            used only as TypeDoc input for the API reference;
│                            not built/bundled into the site otherwise
├── src/
│   ├── pages/               Astro routes: index, demos, resources, team, 404
│   │   └── demos/[...slug].astro   renders each entry from the `demo` collection
│   ├── content/
│   │   ├── config.ts         defines the `demo` and `docs` content collections
│   │   ├── demo/              one folder per interactive demo:
│   │   │                        index.mdx (frontmatter + <CodeEditor>), code.js, thumbnail
│   │   └── docs/               Starlight-schema docs (guides + API reference)
│   │       ├── docs/            hand-written guides (getting started, cropping-images, etc.)
│   │       └── api/             TypeDoc-generated API reference (auto-generated, do not hand-edit)
│   ├── components/          Astro/React components (CodeEditor, Header, Card, TeamMember, ...)
│   ├── layouts/              Layout.astro + global CSS
│   ├── css/                  additional stylesheets
│   └── utils/
├── public/                  static assets (favicon, images, etc.)
├── astro.config.mjs         Starlight sidebar, TypeDoc integration, redirects
└── .github/workflows/       build.yml (PR check), deploy.yml (push to main → GitHub Pages)
```

## Key mechanics

- **Content collections** (`src/content/config.ts`): `demo` (interactive
  code demos, schema: title/tags/thumbnail/description) and `docs`
  (Starlight's schema, covers both guides and API reference pages).
- **API reference generation**: `astro.config.mjs` runs
  `starlight-typedoc` against `./fabric.js/fabric.ts`, but only if the
  `fabric.js` submodule is checked out locally (`fs.existsSync` guard) —
  this lets `npm run dev` work without the submodule, skipping API docs.
- **Demos**: each demo is a folder under `src/content/demo/<name>/` with
  an `index.mdx` that imports `code.js` as raw text and renders it inside
  `<CodeEditor>` (a React island using CodeMirror) next to a live
  `<canvas>`. Demo routing is handled by `src/pages/demos/[...slug].astro`.
  A `thumbnail` image must exist in the demo folder — the gallery resolves
  it via `import.meta.glob`, so a missing file fails the build.
- **Demo code scope**: `code.js` is `eval`'d, so it cannot use `import`.
  `CodeEditor` injects a preamble exposing `fabric`, `extensions`
  (helpers from `fabric/extensions`), and `canvasEl`. The snippet must end
  up with a `canvas` variable — the editor stores it on `window.canvasesId`
  for disposal between runs.
  Note `CodeEditor` deliberately imports `fabric/extensions` with **named
  imports** rather than `import * as`: a namespace object assigned to
  `window` keeps every export alive and drags the westures gesture
  integration into the client bundle. Add new helpers to both the import
  list and the `window.fabricExtensions` object.
- **Sidebar**: configured manually in `astro.config.mjs` with
  `autogenerate` pointing at `src/content/docs/docs` and
  `src/content/docs/api`.

## Working with the submodule

The `fabric.js` submodule must be checked out for the API reference to
build. If it's missing/out of date:

```bash
git submodule update --init --recursive
```

Without it, `npm run dev`/`build` still work but the `Api` sidebar
section won't be generated.

## Commands

| Command           | Action                                                  |
| ------------------ | -------------------------------------------------------- |
| `npm install`       | install dependencies                                     |
| `npm run dev`       | start local dev server at `localhost:4321`                |
| `npm run build`     | `astro check` (typecheck) then `astro build` → `./dist/` |
| `npm run preview`   | preview the production build locally                     |
| `npm run astro ...` | run Astro CLI commands (e.g. `astro add`)                 |

CI (`.github/workflows/build.yml`, `deploy.yml`) checks out the
submodule, runs the same Astro build on PRs, and deploys `main` to
GitHub Pages.

## Conventions

- Formatting via Prettier (`.prettierrc.json`: semicolons, single
  quotes, 2-space tabs). `.prettierignore` excludes `fabric.js` and a
  few content dirs.
- `src/content/docs/api/**` is generated output from TypeDoc — treat it
  as build output, not hand-authored content (regenerated whenever the
  submodule/docs build runs).
- Guides live under `src/content/docs/docs/**` as `.md`/`.mdx` with
  Starlight frontmatter (title, description, etc.).
