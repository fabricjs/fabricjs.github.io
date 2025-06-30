---
editUrl: false
next: false
prev: false
title: "sizeAfterTransform"
---

> **sizeAfterTransform**(`width`, `height`, `t`): [`Point`](/api/classes/point/)

Defined in: [src/util/misc/objectTransforms.ts:107](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/util/misc/objectTransforms.ts#L107)

given a width and height, return the size of the bounding box
that can contains the box with width/height with applied transform.
Use to calculate the boxes around objects for controls.

## Parameters

### width

`number`

### height

`number`

### t

[`TMat2D`](/api/type-aliases/tmat2d/)

## Returns

[`Point`](/api/classes/point/)

size
