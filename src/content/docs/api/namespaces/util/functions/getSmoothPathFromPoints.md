---
editUrl: false
next: false
prev: false
title: "getSmoothPathFromPoints"
---

> **getSmoothPathFromPoints**(`points`, `correction`?): [`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

## Parameters

• **points**: [`Point`](/api/classes/point/)[]

Array of points

• **correction?**: `number` = `0`

Apply a correction to the path (usually we use `width / 1000`). If value is undefined 0 is used as the correction value.

## Returns

[`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

An array of SVG path commands

## Defined in

[src/util/path/index.ts:910](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/util/path/index.ts#L910)
