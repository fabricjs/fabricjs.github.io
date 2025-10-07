---
editUrl: false
next: false
prev: false
title: "transformPoint"
---

> **transformPoint**(`p`, `t`, `ignoreOffset?`): [`Point`](/api/classes/point/)

Defined in: [src/util/misc/matrix.ts:46](https://github.com/fabricjs/fabric.js/blob/9a792f4b7b8031f02ec7ea4ce8c99f810e45cfec/src/util/misc/matrix.ts#L46)

Apply transform t to point p

:::caution[Deprecated]
use [Point#transform](/api/classes/point/#transform)
:::

## Parameters

### p

[`XY`](/api/interfaces/xy/)

The point to transform

### t

[`TMat2D`](/api/type-aliases/tmat2d/)

The transform

### ignoreOffset?

`boolean`

Indicates that the offset should not be applied

## Returns

[`Point`](/api/classes/point/)

The transformed point
