---
editUrl: false
next: false
prev: false
title: "calcDimensionsMatrix"
---

> **calcDimensionsMatrix**(`options`): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/util/misc/matrix.ts:274](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/misc/matrix.ts#L274)

Returns a transform matrix starting from an object of the same kind of
the one returned from qrDecompose, useful also if you want to calculate some
transformations from an object that is not enlived yet.
is called DimensionsTransformMatrix because those properties are the one that influence
the size of the resulting box of the object.

## Parameters

### options

[`TScaleMatrixArgs`](/api/namespaces/util/type-aliases/tscalematrixargs/)

## Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix
