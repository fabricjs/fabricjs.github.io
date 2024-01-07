# Interface: CanvasEvents

## Hierarchy

- [`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)

- [`CanvasPointerEvents`](/apidocs/modules.md#canvaspointerevents)

- `CanvasDnDEvents`

- [`MiscEvents`](/apidocs/interfaces/MiscEvents.md)

- `CanvasModificationEvents`

- `CanvasSelectionEvents`

  ↳ **`CanvasEvents`**

## Properties

### after:render

 **after:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[after:render](/apidocs/interfaces/StaticCanvasEvents.md#after:render)

#### Defined in

[src/EventTypeDefs.ts:296](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L296)

___

### before:path:created

 **before:path:created**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:309](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L309)

___

### before:render

 **before:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[before:render](/apidocs/interfaces/StaticCanvasEvents.md#before:render)

#### Defined in

[src/EventTypeDefs.ts:295](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L295)

___

### before:selection:cleared

 **before:selection:cleared**: `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.before:selection:cleared

#### Defined in

[src/EventTypeDefs.ts:219](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L219)

___

### before:transform

 **before:transform**: [`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `transform`: [`Transform`](/apidocs/modules.md#transform)  }

#### Inherited from

CanvasModificationEvents.before:transform

#### Defined in

[src/EventTypeDefs.ts:130](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L130)

___

### canvas:cleared

 **canvas:cleared**: `never`

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[canvas:cleared](/apidocs/interfaces/StaticCanvasEvents.md#canvas:cleared)

#### Defined in

[src/EventTypeDefs.ts:292](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L292)

___

### contextmenu

 **contextmenu**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[MiscEvents](/apidocs/interfaces/MiscEvents.md).[contextmenu](/apidocs/interfaces/MiscEvents.md#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:266](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L266)

___

### contextmenu:before

 **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[MiscEvents](/apidocs/interfaces/MiscEvents.md).[contextmenu:before](/apidocs/interfaces/MiscEvents.md#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:265](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L265)

___

### drag

 **drag**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

CanvasDnDEvents.drag

#### Defined in

[src/EventTypeDefs.ts:196](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L196)

___

### drag:enter

 **drag:enter**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent`

#### Inherited from

CanvasDnDEvents.drag:enter

#### Defined in

[src/EventTypeDefs.ts:207](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L207)

___

### drag:leave

 **drag:leave**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent`

#### Inherited from

CanvasDnDEvents.drag:leave

#### Defined in

[src/EventTypeDefs.ts:208](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L208)

___

### dragend

 **dragend**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

CanvasDnDEvents.dragend

#### Defined in

[src/EventTypeDefs.ts:200](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L200)

___

### dragenter

 **dragenter**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent`

#### Inherited from

CanvasDnDEvents.dragenter

#### Defined in

[src/EventTypeDefs.ts:198](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L198)

___

### dragleave

 **dragleave**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent`

#### Inherited from

CanvasDnDEvents.dragleave

#### Defined in

[src/EventTypeDefs.ts:199](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L199)

___

### dragover

 **dragover**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

CanvasDnDEvents.dragover

#### Defined in

[src/EventTypeDefs.ts:197](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L197)

___

### dragstart

 **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

CanvasDnDEvents.dragstart

#### Defined in

[src/EventTypeDefs.ts:195](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L195)

___

### drop

 **drop**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

CanvasDnDEvents.drop

#### Defined in

[src/EventTypeDefs.ts:202](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L202)

___

### drop:after

 **drop:after**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

CanvasDnDEvents.drop:after

#### Defined in

[src/EventTypeDefs.ts:203](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L203)

___

### drop:before

 **drop:before**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

CanvasDnDEvents.drop:before

#### Defined in

[src/EventTypeDefs.ts:201](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L201)

___

### erasing:end

 **erasing:end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `drawables` | \{ `backgroundImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } |
| `drawables.backgroundImage?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `drawables.overlayImage?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `path` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `subTargets` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |
| `targets` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Defined in

[src/EventTypeDefs.ts:314](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L314)

___

### erasing:start

 **erasing:start**: `never`

#### Defined in

[src/EventTypeDefs.ts:313](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L313)

___

### mouse:dblclick

 **mouse:dblclick**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:dblclick

___

### mouse:down

 **mouse:down**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:down

___

### mouse:down:before

 **mouse:down:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:down:before

___

### mouse:move

 **mouse:move**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:move

___

### mouse:move:before

 **mouse:move:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

CanvasPointerEvents.mouse:move:before

___

### mouse:out

 **mouse:out**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent`

#### Inherited from

CanvasPointerEvents.mouse:out

___

### mouse:over

 **mouse:over**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent`

#### Inherited from

CanvasPointerEvents.mouse:over

___

### mouse:up

 **mouse:up**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  }

#### Inherited from

CanvasPointerEvents.mouse:up

___

### mouse:up:before

 **mouse:up:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  }

#### Inherited from

CanvasPointerEvents.mouse:up:before

___

### mouse:wheel

 **mouse:wheel**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<`WheelEvent`\>

#### Inherited from

CanvasPointerEvents.mouse:wheel

___

### object:added

 **object:added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[object:added](/apidocs/interfaces/StaticCanvasEvents.md#object:added)

#### Defined in

[src/EventTypeDefs.ts:228](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L228)

___

### object:layout:after

 **object:layout:after**: [`LayoutAfterEvent`](/apidocs/modules.md#layoutafterevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  }

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[object:layout:after](/apidocs/interfaces/StaticCanvasEvents.md#object:layout:after)

#### Defined in

[src/EventTypeDefs.ts:298](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L298)

___

### object:layout:before

 **object:layout:before**: [`LayoutBeforeEvent`](/apidocs/modules.md#layoutbeforeevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  }

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[object:layout:before](/apidocs/interfaces/StaticCanvasEvents.md#object:layout:before)

#### Defined in

[src/EventTypeDefs.ts:297](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L297)

___

### object:modified

 **object:modified**: [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:modified

___

### object:modifyPoly

 **object:modifyPoly**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:modifyPoly

___

### object:moving

 **object:moving**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:moving

___

### object:removed

 **object:removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Inherited from

[StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md).[object:removed](/apidocs/interfaces/StaticCanvasEvents.md#object:removed)

#### Defined in

[src/EventTypeDefs.ts:229](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L229)

___

### object:resizing

 **object:resizing**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:resizing

___

### object:rotating

 **object:rotating**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:rotating

___

### object:scaling

 **object:scaling**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:scaling

___

### object:skewing

 **object:skewing**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

CanvasModificationEvents.object:skewing

___

### path:created

 **path:created**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:310](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L310)

___

### selection:cleared

 **selection:cleared**: `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.selection:cleared

#### Defined in

[src/EventTypeDefs.ts:222](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L222)

___

### selection:created

 **selection:created**: `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.selection:created

#### Defined in

[src/EventTypeDefs.ts:212](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L212)

___

### selection:updated

 **selection:updated**: `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  }

#### Inherited from

CanvasSelectionEvents.selection:updated

#### Defined in

[src/EventTypeDefs.ts:215](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L215)

___

### text:changed

 **text:changed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:328](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L328)

___

### text:editing:entered

 **text:editing:entered**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:329](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L329)

___

### text:editing:exited

 **text:editing:exited**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:330](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L330)

___

### text:selection:changed

 **text:selection:changed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\> |

#### Defined in

[src/EventTypeDefs.ts:327](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L327)
