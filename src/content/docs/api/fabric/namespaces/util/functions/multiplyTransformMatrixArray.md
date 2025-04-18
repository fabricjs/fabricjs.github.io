---
editUrl: false
next: false
prev: false
title: "multiplyTransformMatrixArray"
---

> **multiplyTransformMatrixArray**(`matrices`, `is2x2?`): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/util/misc/matrix.ts:96](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/util/misc/matrix.ts#L96)

Multiplies [TMat2D](/api/type-aliases/tmat2d/) such that a matrix defines the plane for the rest of the matrices **after** it

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
