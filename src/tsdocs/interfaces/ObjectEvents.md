# Interface: ObjectEvents

## Hierarchy

- [`ObjectPointerEvents`](/apidocs/modules.md#objectpointerevents)

- `DnDEvents`

- [`MiscEvents`](/apidocs/interfaces/MiscEvents.md)

- `ObjectModificationEvents`

  ↳ **`ObjectEvents`**

  ↳↳ [`GroupEvents`](/apidocs/interfaces/GroupEvents.md)

## Properties

### added

 **added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Canvas`](/apidocs/classes/Canvas.md) \| [`Group`](/apidocs/classes/Group.md) \| [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<[`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:283](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L283)

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

### deselected

 **deselected**: `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Defined in

[src/EventTypeDefs.ts:278](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L278)

___

### drag

 **drag**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

DnDEvents.drag

#### Defined in

[src/EventTypeDefs.ts:196](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L196)

___

### dragend

 **dragend**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

DnDEvents.dragend

#### Defined in

[src/EventTypeDefs.ts:200](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L200)

___

### dragenter

 **dragenter**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent`

#### Inherited from

DnDEvents.dragenter

#### Defined in

[src/EventTypeDefs.ts:198](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L198)

___

### dragleave

 **dragleave**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent`

#### Inherited from

DnDEvents.dragleave

#### Defined in

[src/EventTypeDefs.ts:199](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L199)

___

### dragover

 **dragover**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

DnDEvents.dragover

#### Defined in

[src/EventTypeDefs.ts:197](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L197)

___

### dragstart

 **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

DnDEvents.dragstart

#### Defined in

[src/EventTypeDefs.ts:195](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L195)

___

### drop

 **drop**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

DnDEvents.drop

#### Defined in

[src/EventTypeDefs.ts:202](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L202)

___

### drop:after

 **drop:after**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

DnDEvents.drop:after

#### Defined in

[src/EventTypeDefs.ts:203](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L203)

___

### drop:before

 **drop:before**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

DnDEvents.drop:before

#### Defined in

[src/EventTypeDefs.ts:201](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L201)

___

### erasing:end

 **erasing:end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:287](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L287)

___

### modified

 **modified**: [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.modified

___

### modifyPoly

 **modifyPoly**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.modifyPoly

___

### mousedblclick

 **mousedblclick**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousedblclick

___

### mousedown

 **mousedown**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousedown

___

### mousedown:before

 **mousedown:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousedown:before

___

### mousemove

 **mousemove**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousemove

___

### mousemove:before

 **mousemove:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectPointerEvents.mousemove:before

___

### mouseout

 **mouseout**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent`

#### Inherited from

ObjectPointerEvents.mouseout

___

### mouseover

 **mouseover**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent`

#### Inherited from

ObjectPointerEvents.mouseover

___

### mouseup

 **mouseup**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  }

#### Inherited from

ObjectPointerEvents.mouseup

___

### mouseup:before

 **mouseup:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  }

#### Inherited from

ObjectPointerEvents.mouseup:before

___

### mousewheel

 **mousewheel**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<`WheelEvent`\>

#### Inherited from

ObjectPointerEvents.mousewheel

___

### moving

 **moving**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.moving

___

### removed

 **removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Canvas`](/apidocs/classes/Canvas.md) \| [`Group`](/apidocs/classes/Group.md) \| [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<[`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:284](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L284)

___

### resizing

 **resizing**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.resizing

___

### rotating

 **rotating**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.rotating

___

### scaling

 **scaling**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.scaling

___

### selected

 **selected**: `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Defined in

[src/EventTypeDefs.ts:275](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L275)

___

### skewing

 **skewing**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.skewing
