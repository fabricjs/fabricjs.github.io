---
editUrl: false
next: false
prev: false
title: "getSmoothPathFromPoints"
---

> **getSmoothPathFromPoints**(`points`, `correction?`): [`TSimplePathData`](/api/type-aliases/tsimplepathdata/)

Defined in: [src/util/path/index.ts:910](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/util/path/index.ts#L910)

Converts points to a smooth SVG path

## Parameters

### points

[`Point`](/api/classes/point/)[]

Array of points

### correction?

`number` = `0`

Apply a correction to the path (usually we use `width / 1000`). If value is undefined 0 is used as the correction value.

## Returns

[`TSimplePathData`](/api/type-aliases/tsimplepathdata/)

An array of SVG path commands
