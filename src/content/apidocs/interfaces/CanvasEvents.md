# Interface: CanvasEvents

## Hierarchy

- [`StaticCanvasEvents`](StaticCanvasEvents.md)

- [`CanvasPointerEvents`](../modules.md#canvaspointerevents)

- `CanvasDnDEvents`

- [`MiscEvents`](MiscEvents.md)

- `CanvasModificationEvents`

- `CanvasSelectionEvents`

  ↳ **`CanvasEvents`**

## Table of contents

### Properties

- [after:render](CanvasEvents.md#after:render)
- [before:path:created](CanvasEvents.md#before:path:created)
- [before:render](CanvasEvents.md#before:render)
- [before:selection:cleared](CanvasEvents.md#before:selection:cleared)
- [before:transform](CanvasEvents.md#before:transform)
- [canvas:cleared](CanvasEvents.md#canvas:cleared)
- [contextmenu](CanvasEvents.md#contextmenu)
- [contextmenu:before](CanvasEvents.md#contextmenu:before)
- [drag](CanvasEvents.md#drag)
- [drag:enter](CanvasEvents.md#drag:enter)
- [drag:leave](CanvasEvents.md#drag:leave)
- [dragend](CanvasEvents.md#dragend)
- [dragenter](CanvasEvents.md#dragenter)
- [dragleave](CanvasEvents.md#dragleave)
- [dragover](CanvasEvents.md#dragover)
- [dragstart](CanvasEvents.md#dragstart)
- [drop](CanvasEvents.md#drop)
- [drop:after](CanvasEvents.md#drop:after)
- [drop:before](CanvasEvents.md#drop:before)
- [erasing:end](CanvasEvents.md#erasing:end)
- [erasing:start](CanvasEvents.md#erasing:start)
- [mouse:dblclick](CanvasEvents.md#mouse:dblclick)
- [mouse:down](CanvasEvents.md#mouse:down)
- [mouse:down:before](CanvasEvents.md#mouse:down:before)
- [mouse:move](CanvasEvents.md#mouse:move)
- [mouse:move:before](CanvasEvents.md#mouse:move:before)
- [mouse:out](CanvasEvents.md#mouse:out)
- [mouse:over](CanvasEvents.md#mouse:over)
- [mouse:up](CanvasEvents.md#mouse:up)
- [mouse:up:before](CanvasEvents.md#mouse:up:before)
- [mouse:wheel](CanvasEvents.md#mouse:wheel)
- [object:added](CanvasEvents.md#object:added)
- [object:modified](CanvasEvents.md#object:modified)
- [object:moving](CanvasEvents.md#object:moving)
- [object:removed](CanvasEvents.md#object:removed)
- [object:resizing](CanvasEvents.md#object:resizing)
- [object:rotating](CanvasEvents.md#object:rotating)
- [object:scaling](CanvasEvents.md#object:scaling)
- [object:skewing](CanvasEvents.md#object:skewing)
- [path:created](CanvasEvents.md#path:created)
- [selection:cleared](CanvasEvents.md#selection:cleared)
- [selection:created](CanvasEvents.md#selection:created)
- [selection:updated](CanvasEvents.md#selection:updated)
- [text:changed](CanvasEvents.md#text:changed)
- [text:editing:entered](CanvasEvents.md#text:editing:entered)
- [text:editing:exited](CanvasEvents.md#text:editing:exited)
- [text:selection:changed](CanvasEvents.md#text:selection:changed)

## Properties

### after:render

• **after:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Inherited from

[StaticCanvasEvents](StaticCanvasEvents.md).[after:render](StaticCanvasEvents.md#after:render)

#### Defined in

[src/EventTypeDefs.ts:263](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L263)

___

### before:path:created

• **before:path:created**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:274](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L274)

___

### before:render

• **before:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Inherited from

[StaticCanvasEvents](StaticCanvasEvents.md).[before:render](StaticCanvasEvents.md#before:render)

#### Defined in

[src/EventTypeDefs.ts:262](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L262)

___

### before:selection:cleared

• **before:selection:cleared**: `Partial`<[`TEvent`](TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.before:selection:cleared

#### Defined in

[src/EventTypeDefs.ts:193](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L193)

___

### before:transform

• **before:transform**: [`TEvent`](TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `transform`: [`Transform`](../modules.md#transform)  }

#### Inherited from

CanvasModificationEvents.before:transform

#### Defined in

[src/EventTypeDefs.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L125)

___

### canvas:cleared

• **canvas:cleared**: `never`

#### Inherited from

[StaticCanvasEvents](StaticCanvasEvents.md).[canvas:cleared](StaticCanvasEvents.md#canvas:cleared)

#### Defined in

[src/EventTypeDefs.ts:259](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L259)

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

### drag

• **drag**: [`DragEventData`](DragEventData.md)

#### Inherited from

CanvasDnDEvents.drag

#### Defined in

[src/EventTypeDefs.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L170)

___

### drag:enter

• **drag:enter**: [`DragEventData`](DragEventData.md) & `InEvent`

#### Inherited from

CanvasDnDEvents.drag:enter

#### Defined in

[src/EventTypeDefs.ts:181](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L181)

___

### drag:leave

• **drag:leave**: [`DragEventData`](DragEventData.md) & `OutEvent`

#### Inherited from

CanvasDnDEvents.drag:leave

#### Defined in

[src/EventTypeDefs.ts:182](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L182)

___

### dragend

• **dragend**: [`DragEventData`](DragEventData.md)

#### Inherited from

CanvasDnDEvents.dragend

#### Defined in

[src/EventTypeDefs.ts:174](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L174)

___

### dragenter

• **dragenter**: [`DragEventData`](DragEventData.md) & `InEvent`

#### Inherited from

CanvasDnDEvents.dragenter

#### Defined in

[src/EventTypeDefs.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L172)

___

### dragleave

• **dragleave**: [`DragEventData`](DragEventData.md) & `OutEvent`

#### Inherited from

CanvasDnDEvents.dragleave

#### Defined in

[src/EventTypeDefs.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L173)

___

### dragover

• **dragover**: [`DragEventData`](DragEventData.md)

#### Inherited from

CanvasDnDEvents.dragover

#### Defined in

[src/EventTypeDefs.ts:171](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L171)

___

### dragstart

• **dragstart**: `TEventWithTarget`<`DragEvent`\>

#### Inherited from

CanvasDnDEvents.dragstart

#### Defined in

[src/EventTypeDefs.ts:169](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L169)

___

### drop

• **drop**: [`DropEventData`](DropEventData.md)

#### Inherited from

CanvasDnDEvents.drop

#### Defined in

[src/EventTypeDefs.ts:176](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L176)

___

### drop:after

• **drop:after**: [`DropEventData`](DropEventData.md)

#### Inherited from

CanvasDnDEvents.drop:after

#### Defined in

[src/EventTypeDefs.ts:177](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L177)

___

### drop:before

• **drop:before**: [`DropEventData`](DropEventData.md)

#### Inherited from

CanvasDnDEvents.drop:before

#### Defined in

[src/EventTypeDefs.ts:175](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L175)

___

### erasing:end

• **erasing:end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `drawables` | { `backgroundImage?`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> ; `overlayImage?`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  } |
| `drawables.backgroundImage?` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |
| `drawables.overlayImage?` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |
| `path` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |
| `subTargets` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[] |
| `targets` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[] |

#### Defined in

[src/EventTypeDefs.ts:279](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L279)

___

### erasing:start

• **erasing:start**: `never`

#### Defined in

[src/EventTypeDefs.ts:278](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L278)

___

### mouse:dblclick

• **mouse:dblclick**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:dblclick

___

### mouse:down

• **mouse:down**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:down

___

### mouse:down:before

• **mouse:down:before**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:down:before

___

### mouse:move

• **mouse:move**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:move

___

### mouse:move:before

• **mouse:move:before**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:move:before

___

### mouse:out

• **mouse:out**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent`

#### Inherited from

CanvasPointerEvents.mouse:out

___

### mouse:over

• **mouse:over**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent`

#### Inherited from

CanvasPointerEvents.mouse:over

___

### mouse:up

• **mouse:up**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:up

___

### mouse:up:before

• **mouse:up:before**: [`TPointerEventInfo`](TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:up:before

___

### mouse:wheel

• **mouse:wheel**: [`TPointerEventInfo`](TPointerEventInfo.md)<`WheelEvent`\>

#### Inherited from

CanvasPointerEvents.mouse:wheel

___

### object:added

• **object:added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Inherited from

[StaticCanvasEvents](StaticCanvasEvents.md).[object:added](StaticCanvasEvents.md#object:added)

#### Defined in

[src/EventTypeDefs.ts:202](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L202)

___

### object:modified

• **object:modified**: [`ModifiedEvent`](ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:modified

___

### object:moving

• **object:moving**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:moving

___

### object:removed

• **object:removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Inherited from

[StaticCanvasEvents](StaticCanvasEvents.md).[object:removed](StaticCanvasEvents.md#object:removed)

#### Defined in

[src/EventTypeDefs.ts:203](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L203)

___

### object:resizing

• **object:resizing**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:resizing

___

### object:rotating

• **object:rotating**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:rotating

___

### object:scaling

• **object:scaling**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:scaling

___

### object:skewing

• **object:skewing**: [`BasicTransformEvent`](BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `target`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:skewing

___

### path:created

• **path:created**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:275](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L275)

___

### selection:cleared

• **selection:cleared**: `Partial`<[`TEvent`](TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.selection:cleared

#### Defined in

[src/EventTypeDefs.ts:196](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L196)

___

### selection:created

• **selection:created**: `Partial`<[`TEvent`](TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `selected`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.selection:created

#### Defined in

[src/EventTypeDefs.ts:186](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L186)

___

### selection:updated

• **selection:updated**: `Partial`<[`TEvent`](TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[] ; `selected`: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.selection:updated

#### Defined in

[src/EventTypeDefs.ts:189](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L189)

___

### text:changed

• **text:changed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](../classes/IText.md)<`Partial`<[`ITextProps`](ITextProps.md)\>, [`SerializedITextProps`](SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:293](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L293)

___

### text:editing:entered

• **text:editing:entered**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](../classes/IText.md)<`Partial`<[`ITextProps`](ITextProps.md)\>, [`SerializedITextProps`](SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:294](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L294)

___

### text:editing:exited

• **text:editing:exited**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](../classes/IText.md)<`Partial`<[`ITextProps`](ITextProps.md)\>, [`SerializedITextProps`](SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:295](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L295)

___

### text:selection:changed

• **text:selection:changed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](../classes/IText.md)<`Partial`<[`ITextProps`](ITextProps.md)\>, [`SerializedITextProps`](SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:292](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L292)
