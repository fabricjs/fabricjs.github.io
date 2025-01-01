---
editUrl: false
next: false
prev: false
title: "composeMatrix"
---

> **composeMatrix**(`options`): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/util/misc/matrix.ts:312](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/misc/matrix.ts#L312)

Returns a transform matrix starting from an object of the same kind of
the one returned from qrDecompose, useful also if you want to calculate some
transformations from an object that is not enlived yet
Before changing this function look at: src/benchmarks/calcTransformMatrix.mjs

## Parameters

### options

[`TComposeMatrixArgs`](/api/namespaces/util/type-aliases/tcomposematrixargs/)

## Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix
