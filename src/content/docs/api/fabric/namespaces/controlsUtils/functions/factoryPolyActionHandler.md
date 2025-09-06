---
editUrl: false
next: false
prev: false
title: "factoryPolyActionHandler"
---

> **factoryPolyActionHandler**(`pointIndex`, `fn`): (`eventData`, `transform`, `x`, `y`) => `boolean`

Defined in: [src/controls/polyControl.ts:68](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/controls/polyControl.ts#L68)

Keep the polygon in the same position when we change its `width`/`height`/`top`/`left`.

## Parameters

### pointIndex

`number`

### fn

[`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`TTransformAnchor`\>

## Returns

> (`eventData`, `transform`, `x`, `y`): `boolean`

### Parameters

#### eventData

[`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### transform

[`Transform`](/api/type-aliases/transform/)

#### x

`number`

#### y

`number`

### Returns

`boolean`
