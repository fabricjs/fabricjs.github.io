---
editUrl: false
next: false
prev: false
title: "isPutImageFaster"
---

> **isPutImageFaster**(`width`, `height`): `boolean`

Pick a method to copy data from GL context to 2d canvas.  In some browsers using
drawImage should be faster, but is also bugged for a small combination of old hardware
and drivers.
putImageData is faster than drawImage for that specific operation.

## Parameters

• **width**: `number`

• **height**: `number`

## Returns

`boolean`

## Defined in

[src/filters/utils.ts:18](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/filters/utils.ts#L18)
