# Interface: GroupEvents

## Hierarchy

- [`ObjectEvents`](ObjectEvents.md)

- [`CollectionEvents`](CollectionEvents.md)

  ↳ **`GroupEvents`**

## Table of contents

### Properties

- [added](GroupEvents.md#added)
- [contextmenu](GroupEvents.md#contextmenu)
- [contextmenu:before](GroupEvents.md#contextmenu:before)
- [deselected](GroupEvents.md#deselected)
- [drag](GroupEvents.md#drag)
- [dragend](GroupEvents.md#dragend)
- [dragenter](GroupEvents.md#dragenter)
- [dragleave](GroupEvents.md#dragleave)
- [dragover](GroupEvents.md#dragover)
- [dragstart](GroupEvents.md#dragstart)
- [drop](GroupEvents.md#drop)
- [drop:after](GroupEvents.md#drop:after)
- [drop:before](GroupEvents.md#drop:before)
- [erasing:end](GroupEvents.md#erasing:end)
- [layout](GroupEvents.md#layout)
- [modified](GroupEvents.md#modified)
- [mousedblclick](GroupEvents.md#mousedblclick)
- [mousedown](GroupEvents.md#mousedown)
- [mousedown:before](GroupEvents.md#mousedown:before)
- [mousemove](GroupEvents.md#mousemove)
- [mousemove:before](GroupEvents.md#mousemove:before)
- [mouseout](GroupEvents.md#mouseout)
- [mouseover](GroupEvents.md#mouseover)
- [mouseup](GroupEvents.md#mouseup)
- [mouseup:before](GroupEvents.md#mouseup:before)
- [mousewheel](GroupEvents.md#mousewheel)
- [moving](GroupEvents.md#moving)
- [object:added](GroupEvents.md#object:added)
- [object:removed](GroupEvents.md#object:removed)
- [removed](GroupEvents.md#removed)
- [resizing](GroupEvents.md#resizing)
- [rotating](GroupEvents.md#rotating)
- [scaling](GroupEvents.md#scaling)
- [selected](GroupEvents.md#selected)
- [skewing](GroupEvents.md#skewing)

## Properties

### added

• **added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Canvas`](../classes/Canvas.md) \| [`Group`](../classes/Group.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)<[`StaticCanvasEvents`](StaticCanvasEvents.md)\> |

#### Inherited from

[ObjectEvents](ObjectEvents.md).[added](ObjectEvents.md#added)

#### Defined in

[src/EventTypeDefs.ts:250](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L250)

___

### contextmenu

• **contextmenu**: `SimpleEventHandler`<`Event`\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[contextmenu](ObjectEvents.md#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:233](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L233)

___

### contextmenu:before

• **contextmenu:before**: `SimpleEventHandler`<`Event`\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[contextmenu:before](ObjectEvents.md#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:232](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L232)

___

### deselected

• **deselected**: `Partial`<[`TEvent`](TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Inherited from

[ObjectEvents](ObjectEvents.md).[deselected](ObjectEvents.md#deselected)

#### Defined in

[src/EventTypeDefs.ts:245](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L245)

___

### drag

• **drag**: [`DragEventData`](DragEventData.md)

#### Inherited from

[ObjectEvents](ObjectEvents.md).[drag](ObjectEvents.md#drag)

#### Defined in

[src/EventTypeDefs.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L170)

___

### dragend

• **dragend**: [`DragEventData`](DragEventData.md)

#### Inherited from

[ObjectEvents](ObjectEvents.md).[dragend](ObjectEvents.md#dragend)

#### Defined in

[src/EventTypeDefs.ts:174](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L174)

___

### dragenter

• **dragenter**: [`DragEventData`](DragEventData.md) & `InEvent`

#### Inherited from

[ObjectEvents](ObjectEvents.md).[dragenter](ObjectEvents.md#dragenter)

#### Defined in

[src/EventTypeDefs.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L172)

___

### dragleave

• **dragleave**: [`DragEventData`](DragEventData.md) & `OutEvent`

#### Inherited from

[ObjectEvents](ObjectEvents.md).[dragleave](ObjectEvents.md#dragleave)

#### Defined in

[src/EventTypeDefs.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L173)

___

### dragover

• **dragover**: [`DragEventData`](DragEventData.md)

#### Inherited from

[ObjectEvents](ObjectEvents.md).[dragover](ObjectEvents.md#dragover)

#### Defined in

[src/EventTypeDefs.ts:171](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L171)

___

### dragstart

• **dragstart**: `TEventWithTarget`<`DragEvent`\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[dragstart](ObjectEvents.md#dragstart)

#### Defined in

[src/EventTypeDefs.ts:169](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L169)

___

### drop

• **drop**: [`DropEventData`](DropEventData.md)

#### Inherited from

[ObjectEvents](ObjectEvents.md).[drop](ObjectEvents.md#drop)

#### Defined in

[src/EventTypeDefs.ts:176](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L176)

___

### drop:after

• **drop:after**: [`DropEventData`](DropEventData.md)

#### Inherited from

[ObjectEvents](ObjectEvents.md).[drop:after](ObjectEvents.md#drop:after)

#### Defined in

[src/EventTypeDefs.ts:177](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L177)

___

### drop:before

• **drop:before**: [`DropEventData`](DropEventData.md)

#### Inherited from

[ObjectEvents](ObjectEvents.md).[drop:before](ObjectEvents.md#drop:before)

#### Defined in

[src/EventTypeDefs.ts:175](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L175)

___

### erasing:end

• **erasing:end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Inherited from

[ObjectEvents](ObjectEvents.md).[erasing:end](ObjectEvents.md#erasing:end)

#### Defined in

[src/EventTypeDefs.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L254)

___

### layout

• **layout**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `context` | [`LayoutContext`](../modules.md#layoutcontext) |
| `diff` | [`Point`](../classes/Point.md) |
| `result` | [`LayoutResult`](../modules.md#layoutresult) |

#### Defined in

[src/shapes/Group.ts:44](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L44)

___

### modified

• **modified**: [`ModifiedEvent`](ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[modified](ObjectEvents.md#modified)

___

### mousedblclick

• **mousedblclick**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mousedblclick](ObjectEvents.md#mousedblclick)

___

### mousedown

• **mousedown**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mousedown](ObjectEvents.md#mousedown)

___

### mousedown:before

• **mousedown:before**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mousedown:before](ObjectEvents.md#mousedown:before)

___

### mousemove

• **mousemove**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mousemove](ObjectEvents.md#mousemove)

___

### mousemove:before

• **mousemove:before**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mousemove:before](ObjectEvents.md#mousemove:before)

___

### mouseout

• **mouseout**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent`

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mouseout](ObjectEvents.md#mouseout)

___

### mouseover

• **mouseover**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent`

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mouseover](ObjectEvents.md#mouseover)

___

### mouseup

• **mouseup**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mouseup](ObjectEvents.md#mouseup)

___

### mouseup:before

• **mouseup:before**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mouseup:before](ObjectEvents.md#mouseup:before)

___

### mousewheel

• **mousewheel**: [`TPointerEventInfo`](TPointerEventInfo.md)<`WheelEvent`\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[mousewheel](ObjectEvents.md#mousewheel)

___

### moving

• **moving**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[moving](ObjectEvents.md#moving)

___

### object:added

• **object:added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Inherited from

[CollectionEvents](CollectionEvents.md).[object:added](CollectionEvents.md#object:added)

#### Defined in

[src/EventTypeDefs.ts:202](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L202)

___

### object:removed

• **object:removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Inherited from

[CollectionEvents](CollectionEvents.md).[object:removed](CollectionEvents.md#object:removed)

#### Defined in

[src/EventTypeDefs.ts:203](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L203)

___

### removed

• **removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Canvas`](../classes/Canvas.md) \| [`Group`](../classes/Group.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)<[`StaticCanvasEvents`](StaticCanvasEvents.md)\> |

#### Inherited from

[ObjectEvents](ObjectEvents.md).[removed](ObjectEvents.md#removed)

#### Defined in

[src/EventTypeDefs.ts:251](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L251)

___

### resizing

• **resizing**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[resizing](ObjectEvents.md#resizing)

___

### rotating

• **rotating**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[rotating](ObjectEvents.md#rotating)

___

### scaling

• **scaling**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[scaling](ObjectEvents.md#scaling)

___

### selected

• **selected**: `Partial`<[`TEvent`](TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Inherited from

[ObjectEvents](ObjectEvents.md).[selected](ObjectEvents.md#selected)

#### Defined in

[src/EventTypeDefs.ts:242](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L242)

___

### skewing

• **skewing**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](ObjectEvents.md).[skewing](ObjectEvents.md#skewing)
