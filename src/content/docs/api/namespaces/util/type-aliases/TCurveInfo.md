---
editUrl: false
next: false
prev: false
title: "TCurveInfo"
---

> **TCurveInfo**\<`C`\>: [`TPathSegmentInfoCommon`](/api/namespaces/util/type-aliases/tpathsegmentinfocommon/)\<`C`\> & `object`

## Type declaration

### angleFinder()

> **angleFinder**: (`pct`) => `number`

Get the angle to a percent

#### Parameters

• **pct**: `number`

#### Returns

`number`

### iterator()

> **iterator**: (`pct`) => [`Point`](/api/classes/point/)

Get the Point a certain percent distance along the curve

#### Parameters

• **pct**: `number`

#### Returns

[`Point`](/api/classes/point/)

### length

> **length**: `number`

Total length of the curve

## Type Parameters

• **C** *extends* `string`

## Defined in

[src/util/path/typedefs.ts:11](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/util/path/typedefs.ts#L11)
