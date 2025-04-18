---
editUrl: false
next: false
prev: false
title: "sin"
---

> **sin**(`angle`): `number`

Defined in: [src/util/misc/sin.ts:11](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/util/misc/sin.ts#L11)

Calculate the cos of an angle, avoiding returning floats for known results
This function is here just to avoid getting 0.999999999999999 when dealing
with numbers that are really 1 or 0.

## Parameters

### angle

[`TRadian`](/api/type-aliases/tradian/)

the angle

## Returns

`number`

the sin value for angle.
