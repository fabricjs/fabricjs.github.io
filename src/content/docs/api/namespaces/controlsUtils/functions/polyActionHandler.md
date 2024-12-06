---
editUrl: false
next: false
prev: false
title: "polyActionHandler"
---

> **polyActionHandler**(`eventData`, `transform`, `x`, `y`): `boolean`

This function defines what the control does.
It'll be called on every mouse move after a control has been clicked and is being dragged.
The function receives as argument the mouse event, the current transform object
and the current position in canvas coordinate `transform.target` is a reference to the
current object being transformed.

## Parameters

• **eventData**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

• **transform**: `TTransformAnchor`

• **x**: `number`

• **y**: `number`

## Returns

`boolean`

## Defined in

[src/controls/polyControl.ts:45](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/controls/polyControl.ts#L45)
