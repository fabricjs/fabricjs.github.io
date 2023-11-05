# Interface: CanvasEvents

## Hierarchy

- [`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)

- [`CanvasPointerEvents`](/apidocs/modules.md#canvaspointerevents)

- `CanvasDnDEvents`

- [`MiscEvents`](/apidocs/interfaces/MiscEvents.md)

- `CanvasModificationEvents`

- `CanvasSelectionEvents`

  ↳ **`CanvasEvents`**

## Table of contents

### Properties

- [after:render](/apidocs/interfaces/CanvasEvents.md#after:render)
- [before:path:created](/apidocs/interfaces/CanvasEvents.md#before:path:created)
- [before:render](/apidocs/interfaces/CanvasEvents.md#before:render)
- [before:selection:cleared](/apidocs/interfaces/CanvasEvents.md#before:selection:cleared)
- [before:transform](/apidocs/interfaces/CanvasEvents.md#before:transform)
- [canvas:cleared](/apidocs/interfaces/CanvasEvents.md#canvas:cleared)
- [contextmenu](/apidocs/interfaces/CanvasEvents.md#contextmenu)
- [contextmenu:before](/apidocs/interfaces/CanvasEvents.md#contextmenu:before)
- [drag](/apidocs/interfaces/CanvasEvents.md#drag)
- [drag:enter](/apidocs/interfaces/CanvasEvents.md#drag:enter)
- [drag:leave](/apidocs/interfaces/CanvasEvents.md#drag:leave)
- [dragend](/apidocs/interfaces/CanvasEvents.md#dragend)
- [dragenter](/apidocs/interfaces/CanvasEvents.md#dragenter)
- [dragleave](/apidocs/interfaces/CanvasEvents.md#dragleave)
- [dragover](/apidocs/interfaces/CanvasEvents.md#dragover)
- [dragstart](/apidocs/interfaces/CanvasEvents.md#dragstart)
- [drop](/apidocs/interfaces/CanvasEvents.md#drop)
- [drop:after](/apidocs/interfaces/CanvasEvents.md#drop:after)
- [drop:before](/apidocs/interfaces/CanvasEvents.md#drop:before)
- [erasing:end](/apidocs/interfaces/CanvasEvents.md#erasing:end)
- [erasing:start](/apidocs/interfaces/CanvasEvents.md#erasing:start)
- [mouse:dblclick](/apidocs/interfaces/CanvasEvents.md#mouse:dblclick)
- [mouse:down](/apidocs/interfaces/CanvasEvents.md#mouse:down)
- [mouse:down:before](/apidocs/interfaces/CanvasEvents.md#mouse:down:before)
- [mouse:move](/apidocs/interfaces/CanvasEvents.md#mouse:move)
- [mouse:move:before](/apidocs/interfaces/CanvasEvents.md#mouse:move:before)
- [mouse:out](/apidocs/interfaces/CanvasEvents.md#mouse:out)
- [mouse:over](/apidocs/interfaces/CanvasEvents.md#mouse:over)
- [mouse:up](/apidocs/interfaces/CanvasEvents.md#mouse:up)
- [mouse:up:before](/apidocs/interfaces/CanvasEvents.md#mouse:up:before)
- [mouse:wheel](/apidocs/interfaces/CanvasEvents.md#mouse:wheel)
- [object:added](/apidocs/interfaces/CanvasEvents.md#object:added)
- [object:modified](/apidocs/interfaces/CanvasEvents.md#object:modified)
- [object:moving](/apidocs/interfaces/CanvasEvents.md#object:moving)
- [object:removed](/apidocs/interfaces/CanvasEvents.md#object:removed)
- [object:resizing](/apidocs/interfaces/CanvasEvents.md#object:resizing)
- [object:rotating](/apidocs/interfaces/CanvasEvents.md#object:rotating)
- [object:scaling](/apidocs/interfaces/CanvasEvents.md#object:scaling)
- [object:skewing](/apidocs/interfaces/CanvasEvents.md#object:skewing)
- [path:created](/apidocs/interfaces/CanvasEvents.md#path:created)
- [selection:cleared](/apidocs/interfaces/CanvasEvents.md#selection:cleared)
- [selection:created](/apidocs/interfaces/CanvasEvents.md#selection:created)
- [selection:updated](/apidocs/interfaces/CanvasEvents.md#selection:updated)
- [text:changed](/apidocs/interfaces/CanvasEvents.md#text:changed)
- [text:editing:entered](/apidocs/interfaces/CanvasEvents.md#text:editing:entered)
- [text:editing:exited](/apidocs/interfaces/CanvasEvents.md#text:editing:exited)
- [text:selection:changed](/apidocs/interfaces/CanvasEvents.md#text:selection:changed)

## Properties

### after:render

• **after:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[after:render](/apidocs/interfaces/StaticCanvasEvents.md#after:render)

#### Defined in

[src/EventTypeDefs.ts:291](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L291)

___

### before:path:created

• **before:path:created**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:302](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L302)

___

### before:render

• **before:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[before:render](/apidocs/interfaces/StaticCanvasEvents.md#before:render)

#### Defined in

[src/EventTypeDefs.ts:290](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L290)

___

### before:selection:cleared

• **before:selection:cleared**: `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.before:selection:cleared

#### Defined in

[src/EventTypeDefs.ts:214](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L214)

___

### before:transform

• **before:transform**: [`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `transform`: [`Transform`](/apidocs/modules.md#transform)  }

#### Inherited from

CanvasModificationEvents.before:transform

#### Defined in

[src/EventTypeDefs.ts:125](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L125)

___

### canvas:cleared

• **canvas:cleared**: `never`

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[canvas:cleared](/apidocs/interfaces/StaticCanvasEvents.md#canvas:cleared)

#### Defined in

[src/EventTypeDefs.ts:287](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L287)

___

### contextmenu

• **contextmenu**: `SimpleEventHandler`<`Event`\>

#### Inherited from

[MiscEvents](/apidocs/interfaces/MiscEvents.md).[contextmenu](/apidocs/interfaces/MiscEvents.md#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:261](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L261)

___

### contextmenu:before

• **contextmenu:before**: `SimpleEventHandler`<`Event`\>

#### Inherited from

[MiscEvents](/apidocs/interfaces/MiscEvents.md).[contextmenu:before](/apidocs/interfaces/MiscEvents.md#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:260](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L260)

___

### drag

• **drag**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

CanvasDnDEvents.drag

#### Defined in

[src/EventTypeDefs.ts:191](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L191)

___

### drag:enter

• **drag:enter**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent`

#### Inherited from

CanvasDnDEvents.drag:enter

#### Defined in

[src/EventTypeDefs.ts:202](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L202)

___

### drag:leave

• **drag:leave**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent`

#### Inherited from

CanvasDnDEvents.drag:leave

#### Defined in

[src/EventTypeDefs.ts:203](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L203)

___

### dragend

• **dragend**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

CanvasDnDEvents.dragend

#### Defined in

[src/EventTypeDefs.ts:195](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L195)

___

### dragenter

• **dragenter**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent`

#### Inherited from

CanvasDnDEvents.dragenter

#### Defined in

[src/EventTypeDefs.ts:193](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L193)

___

### dragleave

• **dragleave**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent`

#### Inherited from

CanvasDnDEvents.dragleave

#### Defined in

[src/EventTypeDefs.ts:194](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L194)

___

### dragover

• **dragover**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

CanvasDnDEvents.dragover

#### Defined in

[src/EventTypeDefs.ts:192](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L192)

___

### dragstart

• **dragstart**: `TEventWithTarget`<`DragEvent`\>

#### Inherited from

CanvasDnDEvents.dragstart

#### Defined in

[src/EventTypeDefs.ts:190](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L190)

___

### drop

• **drop**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

CanvasDnDEvents.drop

#### Defined in

[src/EventTypeDefs.ts:197](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L197)

___

### drop:after

• **drop:after**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

CanvasDnDEvents.drop:after

#### Defined in

[src/EventTypeDefs.ts:198](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L198)

___

### drop:before

• **drop:before**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

CanvasDnDEvents.drop:before

#### Defined in

[src/EventTypeDefs.ts:196](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L196)

___

### erasing:end

• **erasing:end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `drawables` | { `backgroundImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } |
| `drawables.backgroundImage?` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `drawables.overlayImage?` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `path` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `subTargets` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |
| `targets` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Defined in

[src/EventTypeDefs.ts:307](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L307)

___

### erasing:start

• **erasing:start**: `never`

#### Defined in

[src/EventTypeDefs.ts:306](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L306)

___

### mouse:dblclick

• **mouse:dblclick**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:dblclick

___

### mouse:down

• **mouse:down**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:down

___

### mouse:down:before

• **mouse:down:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:down:before

___

### mouse:move

• **mouse:move**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:move

___

### mouse:move:before

• **mouse:move:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:move:before

___

### mouse:out

• **mouse:out**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent`

#### Inherited from

CanvasPointerEvents.mouse:out

___

### mouse:over

• **mouse:over**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent`

#### Inherited from

CanvasPointerEvents.mouse:over

___

### mouse:up

• **mouse:up**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  }

#### Inherited from

CanvasPointerEvents.mouse:up

___

### mouse:up:before

• **mouse:up:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  }

#### Inherited from

CanvasPointerEvents.mouse:up:before

___

### mouse:wheel

• **mouse:wheel**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<`WheelEvent`\>

#### Inherited from

CanvasPointerEvents.mouse:wheel

___

### object:added

• **object:added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[object:added](/apidocs/interfaces/StaticCanvasEvents.md#object:added)

#### Defined in

[src/EventTypeDefs.ts:223](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L223)

___

### object:modified

• **object:modified**: [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:modified

___

### object:moving

• **object:moving**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:moving

___

### object:removed

• **object:removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[object:removed](/apidocs/interfaces/StaticCanvasEvents.md#object:removed)

#### Defined in

[src/EventTypeDefs.ts:224](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L224)

___

### object:resizing

• **object:resizing**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:resizing

___

### object:rotating

• **object:rotating**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:rotating

___

### object:scaling

• **object:scaling**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:scaling

___

### object:skewing

• **object:skewing**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:skewing

___

### path:created

• **path:created**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:303](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L303)

___

### selection:cleared

• **selection:cleared**: `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.selection:cleared

#### Defined in

[src/EventTypeDefs.ts:217](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L217)

___

### selection:created

• **selection:created**: `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.selection:created

#### Defined in

[src/EventTypeDefs.ts:207](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L207)

___

### selection:updated

• **selection:updated**: `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.selection:updated

#### Defined in

[src/EventTypeDefs.ts:210](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L210)

___

### text:changed

• **text:changed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:321](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L321)

___

### text:editing:entered

• **text:editing:entered**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:322](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L322)

___

### text:editing:exited

• **text:editing:exited**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:323](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L323)

___

### text:selection:changed

• **text:selection:changed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:320](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/EventTypeDefs.ts#L320)
