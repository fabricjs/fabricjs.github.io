# Interface: ObjectEvents

## Hierarchy

- [`ObjectPointerEvents`](../modules.md#objectpointerevents)

- `DnDEvents`

- [`MiscEvents`](MiscEvents.md)

- `ObjectModificationEvents`

  ↳ **`ObjectEvents`**

  ↳↳ [`GroupEvents`](GroupEvents.md)

## Table of contents

### Properties

- [added](ObjectEvents.md#added)
- [contextmenu](ObjectEvents.md#contextmenu)
- [contextmenu:before](ObjectEvents.md#contextmenu:before)
- [deselected](ObjectEvents.md#deselected)
- [drag](ObjectEvents.md#drag)
- [dragend](ObjectEvents.md#dragend)
- [dragenter](ObjectEvents.md#dragenter)
- [dragleave](ObjectEvents.md#dragleave)
- [dragover](ObjectEvents.md#dragover)
- [dragstart](ObjectEvents.md#dragstart)
- [drop](ObjectEvents.md#drop)
- [drop:after](ObjectEvents.md#drop:after)
- [drop:before](ObjectEvents.md#drop:before)
- [erasing:end](ObjectEvents.md#erasing:end)
- [modified](ObjectEvents.md#modified)
- [mousedblclick](ObjectEvents.md#mousedblclick)
- [mousedown](ObjectEvents.md#mousedown)
- [mousedown:before](ObjectEvents.md#mousedown:before)
- [mousemove](ObjectEvents.md#mousemove)
- [mousemove:before](ObjectEvents.md#mousemove:before)
- [mouseout](ObjectEvents.md#mouseout)
- [mouseover](ObjectEvents.md#mouseover)
- [mouseup](ObjectEvents.md#mouseup)
- [mouseup:before](ObjectEvents.md#mouseup:before)
- [mousewheel](ObjectEvents.md#mousewheel)
- [moving](ObjectEvents.md#moving)
- [removed](ObjectEvents.md#removed)
- [resizing](ObjectEvents.md#resizing)
- [rotating](ObjectEvents.md#rotating)
- [scaling](ObjectEvents.md#scaling)
- [selected](ObjectEvents.md#selected)
- [skewing](ObjectEvents.md#skewing)

## Properties

### added

• **added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Canvas`](../classes/Canvas.md) \| [`Group`](../classes/Group.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)<[`StaticCanvasEvents`](StaticCanvasEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:250](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L250)

___

### contextmenu

• **contextmenu**: `SimpleEventHandler`<`Event`\>

#### Inherited from

[MiscEvents](MiscEvents.md).[contextmenu](MiscEvents.md#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:233](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L233)

___

### contextmenu:before

• **contextmenu:before**: `SimpleEventHandler`<`Event`\>

#### Inherited from

[MiscEvents](MiscEvents.md).[contextmenu:before](MiscEvents.md#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:232](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L232)

___

### deselected

• **deselected**: `Partial`<[`TEvent`](TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Defined in

[src/EventTypeDefs.ts:245](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L245)

___

### drag

• **drag**: [`DragEventData`](DragEventData.md)

#### Inherited from

DnDEvents.drag

#### Defined in

[src/EventTypeDefs.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L170)

___

### dragend

• **dragend**: [`DragEventData`](DragEventData.md)

#### Inherited from

DnDEvents.dragend

#### Defined in

[src/EventTypeDefs.ts:174](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L174)

___

### dragenter

• **dragenter**: [`DragEventData`](DragEventData.md) & `InEvent`

#### Inherited from

DnDEvents.dragenter

#### Defined in

[src/EventTypeDefs.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L172)

___

### dragleave

• **dragleave**: [`DragEventData`](DragEventData.md) & `OutEvent`

#### Inherited from

DnDEvents.dragleave

#### Defined in

[src/EventTypeDefs.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L173)

___

### dragover

• **dragover**: [`DragEventData`](DragEventData.md)

#### Inherited from

DnDEvents.dragover

#### Defined in

[src/EventTypeDefs.ts:171](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L171)

___

### dragstart

• **dragstart**: `TEventWithTarget`<`DragEvent`\>

#### Inherited from

DnDEvents.dragstart

#### Defined in

[src/EventTypeDefs.ts:169](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L169)

___

### drop

• **drop**: [`DropEventData`](DropEventData.md)

#### Inherited from

DnDEvents.drop

#### Defined in

[src/EventTypeDefs.ts:176](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L176)

___

### drop:after

• **drop:after**: [`DropEventData`](DropEventData.md)

#### Inherited from

DnDEvents.drop:after

#### Defined in

[src/EventTypeDefs.ts:177](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L177)

___

### drop:before

• **drop:before**: [`DropEventData`](DropEventData.md)

#### Inherited from

DnDEvents.drop:before

#### Defined in

[src/EventTypeDefs.ts:175](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L175)

___

### erasing:end

• **erasing:end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L254)

___

### modified

• **modified**: [`ModifiedEvent`](ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.modified

___

### mousedblclick

• **mousedblclick**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousedblclick

___

### mousedown

• **mousedown**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousedown

___

### mousedown:before

• **mousedown:before**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousedown:before

___

### mousemove

• **mousemove**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousemove

___

### mousemove:before

• **mousemove:before**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousemove:before

___

### mouseout

• **mouseout**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent`

#### Inherited from

ObjectPointerEvents.mouseout

___

### mouseover

• **mouseover**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent`

#### Inherited from

ObjectPointerEvents.mouseover

___

### mouseup

• **mouseup**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mouseup

___

### mouseup:before

• **mouseup:before**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mouseup:before

___

### mousewheel

• **mousewheel**: [`TPointerEventInfo`](TPointerEventInfo.md)<`WheelEvent`\>

#### Inherited from

ObjectPointerEvents.mousewheel

___

### moving

• **moving**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.moving

___

### removed

• **removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Canvas`](../classes/Canvas.md) \| [`Group`](../classes/Group.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)<[`StaticCanvasEvents`](StaticCanvasEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:251](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L251)

___

### resizing

• **resizing**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.resizing

___

### rotating

• **rotating**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.rotating

___

### scaling

• **scaling**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.scaling

___

### selected

• **selected**: `Partial`<[`TEvent`](TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Defined in

[src/EventTypeDefs.ts:242](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L242)

___

### skewing

• **skewing**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.skewing
