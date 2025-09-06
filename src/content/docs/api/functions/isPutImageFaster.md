---
editUrl: false
next: false
prev: false
title: "isPutImageFaster"
---

> **isPutImageFaster**(`width`, `height`): `boolean`

Defined in: [src/filters/utils.ts:18](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/filters/utils.ts#L18)

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
