---
editUrl: false
next: false
prev: false
title: "scaleSkewCursorStyleHandler"
---

> **scaleSkewCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

Defined in: [src/controls/scaleSkew.ts:46](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/controls/scaleSkew.ts#L46)

Combine skew and scale style handlers to cover fabric standard use case

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
