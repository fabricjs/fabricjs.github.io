# Handoff — cropping, gradients and text docs

Working notes so this can be picked up on another machine. **Delete this file
before merging** — it is scratch, not site content.

## Where things stand

Two branches, both pushed to origin.

### `cropping-demos` — pushed, ready for a PR

Open at https://github.com/fabricjs/fabricjs.github.io/pull/new/cropping-demos

| Commit | |
| --- | --- |
| `ae50fb4` | feat(demos): add cropping controls demo |
| `c2df674` | docs(cropping): trim the cropping images guide |
| `86b7068` | progress *(yours)* |
| `f73866b` | docs(cropping): explain how enterCropMode is built |
| `b44affd` | chore: bump fabric.js submodule to v7.4.0 |
| `ac74579` | chore(api): regenerate reference for v7.4.0 |
| `4fc3ecd` | feat(gradients): add gradient controls demo and using gradients guide |

Contains: the cropping controls demo, the gradient controls demo, the rewritten
`cropping-images` guide, the new `using-gradients` guide, the fabric bump to
7.4.0 (package + submodule), and the 454-file API reference regeneration.

### `using-text` — pushed, in progress

| Commit | |
| --- | --- |
| `b3f33be` | docs(text): add the Text guide group |
| `0047eba` / `82f6b63` | *(yours — added then removed `.claude/launch.json`)* |

Nine pages under `src/content/docs/docs/Text/`, orders 310–390, rendering as a
collapsible sidebar group between `Getting started` and `Upgrading`.

## Resuming on another machine

```bash
git fetch origin
git checkout using-text
git submodule update --init --recursive   # must land on tag v740
npm install
npm run dev
```

Two environment facts that will otherwise waste your time:

- **`westures` is a devDependency now, and it is required.** `fabric/extensions`
  re-exports its westures gesture integration unconditionally, but fabric
  declares `westures` nowhere. Without it, importing `fabric/extensions` dies
  with `ERR_MODULE_NOT_FOUND` and takes the whole dev server down.
- **The submodule must be at `v740`.** Tags are named `v740`, not `v7.4.0`. The
  API reference is generated from it, so a mismatch produces a large spurious
  diff under `src/content/docs/api/`.

## Text docs — the nine pages

`src/content/docs/docs/Text/`

| Order | File | Notes |
| --- | --- | --- |
| 310 | `choosing-a-class.mdx` | The three classes as a chain; only `set()` re-lays-out; the three index spaces |
| 320 | `layout-and-appearance.mdx` | interactive canvas |
| 330 | `fonts.mdx` | The measurement cache and the late-webfont failure. The most load-bearing page |
| 340 | `character-styles.mdx` | interactive canvas |
| 350 | `editing.mdx` | interactive canvas |
| 360 | `textbox-wrapping.mdx` | interactive canvas |
| 370 | `editing-ui.mdx` | The integration cookbook — toolbar focus, undo/redo, mobile, a11y |
| 380 | `text-on-a-path.mdx` | Beta limits |
| 390 | `serializing-text.mdx` | Style compression lossiness, SVG asymmetry |

Interactive examples live in a sibling directory per page, e.g.
`Text/editing/code.js`, imported as `./editing/code.js?raw`. From a page inside
the group, `CodeEditor` is four levels up: `../../../../components/CodeEditor`.

## Library findings worth taking upstream

These came out of verifying doc claims against a running build. All reproduced.

1. **`fabric/extensions` has an undeclared dependency on `westures`.** Not in
   `dependencies`, `peerDependencies` or `optionalDependencies`. A downstream
   user importing only the cropping helpers still hits it.

2. **`toObject()` throws on a style declaration holding only unknown keys.**

   ```js
   new fabric.FabricText('abcd', { styles: { 0: { 0: { mine: 'x' } } } }).toObject();
   // TypeError: Cannot read properties of undefined (reading 'end')
   ```

   `stylesToArray` tries to extend a range that was never opened, because
   `hasStyleChanged` only compares the 14 known properties. Relevant to anyone
   adding a custom per-character style property.

3. **CRLF shifts styles by one character per line on a JSON round trip.**
   `stylesToArray` splits on `'\n'`, `stylesFromArray` on `/\r?\n/`.

   ```js
   const t = new fabric.FabricText('ab\r\ncd', { styles: { 1: { 0: { fill: 'red' } } } });
   (await fabric.FabricText.fromObject(t.toObject())).styles;
   // { 1: { 1: { fill: 'red' } } }   ← moved to character 1
   ```

4. **`ctrlKeysMapUp[88]` points at a `cut` method that does not exist.** Works in
   practice only because `_copyDone` short-circuits `onKeyUp` first.

5. **`renderGhostImage` and `cropPanMoveHandler` are not exported** from
   `fabric/extensions`, so the crop ghost cannot be used with a control set you
   assigned yourself — only via `enterCropMode`. Exporting them would make the
   "recompose the pieces yourself" story in the docs actually true.

6. **A gradient colour stop at offset 0 or 1 sits exactly under an axis endpoint
   handle** and shadows it in hit-testing, so that endpoint becomes hard to grab.

7. **`Textbox`'s class JSDoc claims Y scaling is locked.** It is not — `mt`, `mb`
   and the corner handles all scale. The doc comment is stale.

## Corrections already applied to the docs

Three claims that source-reading got wrong and testing caught. Mentioning them
because the same reasoning traps are easy to fall back into:

- An assigned `Textbox` **height is not rejected** — it survives until the next
  layout pass, then is overwritten.
- `setSelectionStyles({ prop: undefined })` **deletes the override** and reverts
  to the object value. It is not a no-op, and it differs from passing `false`.
- Custom style properties are dropped when merged into a run, but **crash** when
  they are the only key (see finding 2).

## Open follow-ups

- **Open the `cropping-demos` PR.** Nothing blocking it.
- **Supersede the Old docs text pages** now that the Text group exists:
  `Old docs/fabric-text.md`, the `### Text` section of `fabric-intro-part-2.md`,
  and the Node fonts section of `fabric-intro-part-4.md`. The precedent is the
  `'/docs/old-docs/fabric-object-caching'` redirect already in
  `astro.config.mjs`.
- **Fold the `loading-custom-fonts` demo prose into `Text/fonts.mdx`** and leave
  the demo as the showcase, per the docs-vs-demos split in `AGENTS.md`.
- **A rich-text toolbar demo** would be the natural showcase for `editing-ui.mdx`.
- **Standardise demo tags** — currently `text`, `text styles`, `fonts`,
  `typography` are used inconsistently.
- **Collapsible / expandable `CodeEditor`** — your idea from the cropping work:
  some canvases want the code minimised by default, with the interaction
  foregrounded.
- Dependabot reports 64 vulnerabilities on the default branch (28 high). Pre-existing.

## Verifying interactive pages

The canvases register themselves on `window.canvasesId[canvasId]`, which makes
them scriptable from the browser console — much more reliable than eyeballing:

```js
const c = window.canvasesId['text-editing'];
c.getObjects()[0].enterEditing();
```

One trap when simulating drags: dispatch `mouseup` on **`document`**, not
`window`. Fabric does not see a window-level mouseup, so `_currentTransform`
stays active and every later drag silently continues the first handle.
