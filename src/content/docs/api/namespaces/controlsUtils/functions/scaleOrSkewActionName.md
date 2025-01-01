---
editUrl: false
next: false
prev: false
title: "scaleOrSkewActionName"
---

> **scaleOrSkewActionName**(`eventData`, `control`, `fabricObject`): `""` \| [`TAxisKey`](/api/type-aliases/taxiskey/)\<`"scale"` \| `"skew"`\>

Defined in: [src/controls/scaleSkew.ts:24](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/controls/scaleSkew.ts#L24)

Inspect event, control and fabricObject to return the correct action name

## Parameters

### eventData

[`TPointerEvent`](/api/type-aliases/tpointerevent/)

the javascript event that is causing the scale

### control

[`Control`](/api/classes/control/)

the control that is interested in the action

### fabricObject

[`FabricObject`](/api/classes/fabricobject/)

the fabric object that is interested in the action

## Returns

`""` \| [`TAxisKey`](/api/type-aliases/taxiskey/)\<`"scale"` \| `"skew"`\>

an action name
