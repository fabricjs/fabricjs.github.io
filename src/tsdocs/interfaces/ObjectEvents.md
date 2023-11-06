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

[src/EventTypeDefs.ts:278](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L278)

___

### contextmenu

 **contextmenu**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[MiscEvents](/apidocs/interfaces/MiscEvents.md).[contextmenu](/apidocs/interfaces/MiscEvents.md#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:261](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L261)

___

### contextmenu:before

 **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[MiscEvents](/apidocs/interfaces/MiscEvents.md).[contextmenu:before](/apidocs/interfaces/MiscEvents.md#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:260](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L260)

___

### deselected

 **deselected**: `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Defined in

[src/EventTypeDefs.ts:273](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L273)

___

### drag

 **drag**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

DnDEvents.drag

#### Defined in

[src/EventTypeDefs.ts:191](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L191)

___

### dragend

 **dragend**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

DnDEvents.dragend

#### Defined in

[src/EventTypeDefs.ts:195](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L195)

___

### dragenter

 **dragenter**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent`

#### Inherited from

DnDEvents.dragenter

#### Defined in

[src/EventTypeDefs.ts:193](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L193)

___

### dragleave

 **dragleave**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent`

#### Inherited from

DnDEvents.dragleave

#### Defined in

[src/EventTypeDefs.ts:194](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L194)

___

### dragover

 **dragover**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

DnDEvents.dragover

#### Defined in

[src/EventTypeDefs.ts:192](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L192)

___

### dragstart

 **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

DnDEvents.dragstart

#### Defined in

[src/EventTypeDefs.ts:190](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L190)

___

### drop

 **drop**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

DnDEvents.drop

#### Defined in

[src/EventTypeDefs.ts:197](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L197)

___

### drop:after

 **drop:after**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

DnDEvents.drop:after

#### Defined in

[src/EventTypeDefs.ts:198](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L198)

___

### drop:before

 **drop:before**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

DnDEvents.drop:before

#### Defined in

[src/EventTypeDefs.ts:196](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L196)

___

### erasing:end

 **erasing:end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Defined in

[src/EventTypeDefs.ts:282](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L282)

___

### modified

 **modified**: [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.modified

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

[src/EventTypeDefs.ts:279](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L279)

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

[src/EventTypeDefs.ts:270](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L270)

___

### skewing

 **skewing**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

ObjectModificationEvents.skewing
