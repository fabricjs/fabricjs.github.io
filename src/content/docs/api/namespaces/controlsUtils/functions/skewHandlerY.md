---
editUrl: false
next: false
prev: false
title: "skewHandlerY"
---

> **skewHandlerY**(`eventData`, `transform`, `x`, `y`): `boolean`

Defined in: [src/controls/skew.ts:243](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/controls/skew.ts#L243)

Wrapped Action handler for skewing on the Y axis, takes care of the
skew direction and determines the correct transform origin for the anchor point

## Parameters

### eventData

[`TPointerEvent`](/api/type-aliases/tpointerevent/)

javascript event that is doing the transform

### transform

[`Transform`](/api/type-aliases/transform/)

javascript object containing a series of information around the current transform

### x

`number`

current mouse x position, canvas normalized

### y

`number`

current mouse y position, canvas normalized

## Returns

`boolean`

true if some change happened
