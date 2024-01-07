# Interface: GroupEvents

## Hierarchy

- [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)

- [`CollectionEvents`](/apidocs/interfaces/CollectionEvents.md)

  ↳ **`GroupEvents`**

## Properties

### added

 **added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Canvas`](/apidocs/classes/Canvas.md) \| [`Group`](/apidocs/classes/Group.md) \| [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<[`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)\> |

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[added](/apidocs/interfaces/ObjectEvents.md#added)

#### Defined in

[src/EventTypeDefs.ts:283](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L283)

___

### contextmenu

 **contextmenu**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[contextmenu](/apidocs/interfaces/ObjectEvents.md#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:266](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L266)

___

### contextmenu:before

 **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[contextmenu:before](/apidocs/interfaces/ObjectEvents.md#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:265](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L265)

___

### deselected

 **deselected**: `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[deselected](/apidocs/interfaces/ObjectEvents.md#deselected)

#### Defined in

[src/EventTypeDefs.ts:278](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L278)

___

### drag

 **drag**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[drag](/apidocs/interfaces/ObjectEvents.md#drag)

#### Defined in

[src/EventTypeDefs.ts:196](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L196)

___

### dragend

 **dragend**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[dragend](/apidocs/interfaces/ObjectEvents.md#dragend)

#### Defined in

[src/EventTypeDefs.ts:200](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L200)

___

### dragenter

 **dragenter**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent`

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[dragenter](/apidocs/interfaces/ObjectEvents.md#dragenter)

#### Defined in

[src/EventTypeDefs.ts:198](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L198)

___

### dragleave

 **dragleave**: [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent`

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[dragleave](/apidocs/interfaces/ObjectEvents.md#dragleave)

#### Defined in

[src/EventTypeDefs.ts:199](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L199)

___

### dragover

 **dragover**: [`DragEventData`](/apidocs/interfaces/DragEventData.md)

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[dragover](/apidocs/interfaces/ObjectEvents.md#dragover)

#### Defined in

[src/EventTypeDefs.ts:197](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L197)

___

### dragstart

 **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[dragstart](/apidocs/interfaces/ObjectEvents.md#dragstart)

#### Defined in

[src/EventTypeDefs.ts:195](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L195)

___

### drop

 **drop**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[drop](/apidocs/interfaces/ObjectEvents.md#drop)

#### Defined in

[src/EventTypeDefs.ts:202](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L202)

___

### drop:after

 **drop:after**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[drop:after](/apidocs/interfaces/ObjectEvents.md#drop:after)

#### Defined in

[src/EventTypeDefs.ts:203](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L203)

___

### drop:before

 **drop:before**: [`DropEventData`](/apidocs/interfaces/DropEventData.md)

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[drop:before](/apidocs/interfaces/ObjectEvents.md#drop:before)

#### Defined in

[src/EventTypeDefs.ts:201](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L201)

___

### erasing:end

 **erasing:end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[erasing:end](/apidocs/interfaces/ObjectEvents.md#erasing:end)

#### Defined in

[src/EventTypeDefs.ts:287](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L287)

___

### layout:after

 **layout:after**: [`LayoutAfterEvent`](/apidocs/modules.md#layoutafterevent)

#### Defined in

[src/shapes/Group.ts:45](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Group.ts#L45)

___

### layout:before

 **layout:before**: [`LayoutBeforeEvent`](/apidocs/modules.md#layoutbeforeevent)

#### Defined in

[src/shapes/Group.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Group.ts#L44)

___

### modified

 **modified**: [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[modified](/apidocs/interfaces/ObjectEvents.md#modified)

___

### modifyPoly

 **modifyPoly**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[modifyPoly](/apidocs/interfaces/ObjectEvents.md#modifypoly)

___

### mousedblclick

 **mousedblclick**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mousedblclick](/apidocs/interfaces/ObjectEvents.md#mousedblclick)

___

### mousedown

 **mousedown**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mousedown](/apidocs/interfaces/ObjectEvents.md#mousedown)

___

### mousedown:before

 **mousedown:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mousedown:before](/apidocs/interfaces/ObjectEvents.md#mousedown:before)

___

### mousemove

 **mousemove**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mousemove](/apidocs/interfaces/ObjectEvents.md#mousemove)

___

### mousemove:before

 **mousemove:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mousemove:before](/apidocs/interfaces/ObjectEvents.md#mousemove:before)

___

### mouseout

 **mouseout**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent`

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mouseout](/apidocs/interfaces/ObjectEvents.md#mouseout)

___

### mouseover

 **mouseover**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent`

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mouseover](/apidocs/interfaces/ObjectEvents.md#mouseover)

___

### mouseup

 **mouseup**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  }

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mouseup](/apidocs/interfaces/ObjectEvents.md#mouseup)

___

### mouseup:before

 **mouseup:before**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  }

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mouseup:before](/apidocs/interfaces/ObjectEvents.md#mouseup:before)

___

### mousewheel

 **mousewheel**: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<`WheelEvent`\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[mousewheel](/apidocs/interfaces/ObjectEvents.md#mousewheel)

___

### moving

 **moving**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[moving](/apidocs/interfaces/ObjectEvents.md#moving)

___

### object:added

 **object:added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Inherited from

[CollectionEvents](/apidocs/interfaces/CollectionEvents.md).[object:added](/apidocs/interfaces/CollectionEvents.md#object:added)

#### Defined in

[src/EventTypeDefs.ts:228](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L228)

___

### object:removed

 **object:removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Inherited from

[CollectionEvents](/apidocs/interfaces/CollectionEvents.md).[object:removed](/apidocs/interfaces/CollectionEvents.md#object:removed)

#### Defined in

[src/EventTypeDefs.ts:229](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L229)

___

### removed

 **removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Canvas`](/apidocs/classes/Canvas.md) \| [`Group`](/apidocs/classes/Group.md) \| [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<[`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)\> |

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[removed](/apidocs/interfaces/ObjectEvents.md#removed)

#### Defined in

[src/EventTypeDefs.ts:284](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L284)

___

### resizing

 **resizing**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[resizing](/apidocs/interfaces/ObjectEvents.md#resizing)

___

### rotating

 **rotating**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[rotating](/apidocs/interfaces/ObjectEvents.md#rotating)

___

### scaling

 **scaling**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[scaling](/apidocs/interfaces/ObjectEvents.md#scaling)

___

### selected

 **selected**: `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  }

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[selected](/apidocs/interfaces/ObjectEvents.md#selected)

#### Defined in

[src/EventTypeDefs.ts:275](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L275)

___

### skewing

 **skewing**: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>

#### Inherited from

[ObjectEvents](/apidocs/interfaces/ObjectEvents.md).[skewing](/apidocs/interfaces/ObjectEvents.md#skewing)
