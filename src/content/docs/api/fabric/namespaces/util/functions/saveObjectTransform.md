---
editUrl: false
next: false
prev: false
title: "saveObjectTransform"
---

> **saveObjectTransform**(`target`): `object`

Defined in: [src/util/misc/objectTransforms.ts:86](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/util/misc/objectTransforms.ts#L86)

Extract Object transform values

## Parameters

### target

[`BaseFabricObject`](/api/classes/basefabricobject/)

object to read from

## Returns

`object`

Components of transform

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/) = `target.angle`

### flipX

> **flipX**: `boolean` = `target.flipX`

### flipY

> **flipY**: `boolean` = `target.flipY`

### left

> **left**: `number` = `target.left`

### scaleX

> **scaleX**: `number` = `target.scaleX`

### scaleY

> **scaleY**: `number` = `target.scaleY`

### skewX

> **skewX**: `number` = `target.skewX`

### skewY

> **skewY**: `number` = `target.skewY`

### top

> **top**: `number` = `target.top`
