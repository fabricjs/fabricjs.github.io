---
editUrl: false
next: false
prev: false
title: "isBetweenVectors"
---

> **isBetweenVectors**(`t`, `a`, `b`): `boolean`

Defined in: [src/util/misc/vectors.ts:94](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/util/misc/vectors.ts#L94)

Checks if the vector is between two others. It is considered
to be inside when the vector to be tested is between the
initial vector and the final vector (included) in a counterclockwise direction.

## Parameters

### t

[`Point`](/api/classes/point/)

vector to be tested

### a

[`Point`](/api/classes/point/)

initial vector

### b

[`Point`](/api/classes/point/)

final vector

## Returns

`boolean`

true if the vector is among the others
