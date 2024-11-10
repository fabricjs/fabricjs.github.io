---
editUrl: false
next: false
prev: false
title: "skewCursorStyleHandler"
---

> **skewCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

## Parameters

• **eventData**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

the javascript event that is causing the scale

• **control**: [`Control`](/api/classes/control/)

the control that is interested in the action

• **fabricObject**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

the fabric object that is interested in the action

## Returns

`string`

a valid css string for the cursor

## Defined in

[src/controls/skew.ts:71](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/controls/skew.ts#L71)
