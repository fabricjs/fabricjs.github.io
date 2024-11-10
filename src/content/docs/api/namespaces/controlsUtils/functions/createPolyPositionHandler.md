---
editUrl: false
next: false
prev: false
title: "createPolyPositionHandler"
---

> **createPolyPositionHandler**(`pointIndex`): (`dim`, `finalMatrix`, `polyObject`) => [`Point`](/api/classes/point/)

This function locates the controls.
It'll be used both for drawing and for interaction.

## Parameters

• **pointIndex**: `number`

## Returns

`Function`

### Parameters

• **dim**: [`Point`](/api/classes/point/)

• **finalMatrix**: [`TMat2D`](/api/type-aliases/tmat2d/)

• **polyObject**: [`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

### Returns

[`Point`](/api/classes/point/)

## Defined in

[src/controls/polyControl.ts:24](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/controls/polyControl.ts#L24)
