---
editUrl: false
next: false
prev: false
title: "multiplyTransformMatrixArray"
---

> **multiplyTransformMatrixArray**(`matrices`, `is2x2`?): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/util/misc/matrix.ts:96](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/misc/matrix.ts#L96)

Multiplies [matrices](../../../../../../api/namespaces/util/functions/multiplytransformmatrixarray/#matrices) such that a matrix defines the plane for the rest of the matrices **after** it

`multiplyTransformMatrixArray([A, B, C, D])` is equivalent to `A(B(C(D)))`

## Parameters

### matrices

(`undefined` \| `null` \| `false` \| [`TMat2D`](/api/type-aliases/tmat2d/))[]

an array of matrices

### is2x2?

`boolean`

flag to multiply matrices as 2x2 matrices

## Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

the multiplication product
