---
editUrl: false
next: false
prev: false
title: "isPutImageFaster"
---

> **isPutImageFaster**(`width`, `height`): `boolean`

Defined in: [src/filters/utils.ts:18](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/utils.ts#L18)

Pick a method to copy data from GL context to 2d canvas.  In some browsers using
drawImage should be faster, but is also bugged for a small combination of old hardware
and drivers.
putImageData is faster than drawImage for that specific operation.

## Parameters

### width

`number`

### height

`number`

## Returns

`boolean`
