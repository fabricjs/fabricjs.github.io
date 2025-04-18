---
editUrl: false
next: false
prev: false
title: "TCurveInfo"
---

> **TCurveInfo**\<`C`\> = [`TPathSegmentInfoCommon`](/api/type-aliases/tpathsegmentinfocommon/)\<`C`\> & `object`

Defined in: [src/util/path/typedefs.ts:11](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/util/path/typedefs.ts#L11)

## Type declaration

### angleFinder()

> **angleFinder**: (`pct`) => `number`

Get the angle to a percent

#### Parameters

##### pct

`number`

#### Returns

`number`

### iterator()

> **iterator**: (`pct`) => [`Point`](/api/classes/point/)

Get the Point a certain percent distance along the curve

#### Parameters

##### pct

`number`

#### Returns

[`Point`](/api/classes/point/)

### length

> **length**: `number`

Total length of the curve

## Type Parameters

### C

`C` *extends* `string`
