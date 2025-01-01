---
editUrl: false
next: false
prev: false
title: "rotationStyleHandler"
---

> **rotationStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

Defined in: [src/controls/rotate.ts:19](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/controls/rotate.ts#L19)

Find the correct style for the control that is used for rotation.
this function is very simple and it just take care of not-allowed or standard cursor

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

`string`

a valid css string for the cursor
