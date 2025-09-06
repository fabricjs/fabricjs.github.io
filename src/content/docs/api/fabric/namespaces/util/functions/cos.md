---
editUrl: false
next: false
prev: false
title: "cos"
---

> **cos**(`angle`): `number`

Defined in: [src/util/misc/cos.ts:11](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/util/misc/cos.ts#L11)

Calculate the cos of an angle, avoiding returning floats for known results
This function is here just to avoid getting 0.999999999999999 when dealing
with numbers that are really 1 or 0.

## Parameters

### angle

[`TRadian`](/api/type-aliases/tradian/)

the angle

## Returns

`number`

the cosin value for angle.
