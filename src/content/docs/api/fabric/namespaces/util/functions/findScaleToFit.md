---
editUrl: false
next: false
prev: false
title: "findScaleToFit"
---

> **findScaleToFit**(`source`, `destination`): `number`

Defined in: [src/util/misc/findScaleTo.ts:11](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/util/misc/findScaleTo.ts#L11)

Finds the scale for the object source to fit inside the object destination,
keeping aspect ratio intact.
respect the total allowed area for the cache.

## Parameters

### source

[`TSize`](/api/type-aliases/tsize/)

natural unscaled size of the object

### destination

[`TSize`](/api/type-aliases/tsize/)

natural unscaled size of the object

## Returns

`number`

scale factor to apply to source to fit into destination
