---
editUrl: false
next: false
prev: false
title: "renderCircleControl"
---

> **renderCircleControl**(`this`, `ctx`, `left`, `top`, `styleOverride`, `fabricObject`): `void`

Defined in: [src/controls/controlRendering.ts:39](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/controls/controlRendering.ts#L39)

Render a round control, as per fabric features.
This function is written to respect object properties like transparentCorners, cornerSize
cornerColor, cornerStrokeColor
plus the addition of offsetY and offsetX.

## Parameters

### this

[`Control`](/api/classes/control/)

### ctx

`CanvasRenderingContext2D`

context to render on

### left

`number`

x coordinate where the control center should be

### top

`number`

y coordinate where the control center should be

### styleOverride

`Partial`\<`Pick`\<[`InteractiveFabricObject`](/api/classes/interactivefabricobject/), `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\>

override for FabricObject controls style

### fabricObject

[`InteractiveFabricObject`](/api/classes/interactivefabricobject/)

the fabric object for which we are rendering controls

## Returns

`void`
