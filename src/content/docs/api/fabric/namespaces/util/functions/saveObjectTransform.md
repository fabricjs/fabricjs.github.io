---
editUrl: false
next: false
prev: false
title: "saveObjectTransform"
---

> **saveObjectTransform**(`target`): `object`

Defined in: [src/util/misc/objectTransforms.ts:86](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/util/misc/objectTransforms.ts#L86)

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
