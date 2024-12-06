---
editUrl: false
next: false
prev: false
title: "scaleOrSkewActionName"
---

> **scaleOrSkewActionName**(`eventData`, `control`, `fabricObject`): `""` \| [`TAxisKey`](/api/type-aliases/taxiskey/)\<`"scale"` \| `"skew"`\>

## Parameters

• **eventData**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

the javascript event that is causing the scale

• **control**: [`Control`](/api/classes/control/)

the control that is interested in the action

• **fabricObject**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

the fabric object that is interested in the action

## Returns

`""` \| [`TAxisKey`](/api/type-aliases/taxiskey/)\<`"scale"` \| `"skew"`\>

an action name

## Defined in

[src/controls/scaleSkew.ts:24](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/controls/scaleSkew.ts#L24)
