# Interface: DropEventData

## Hierarchy

- [`DragEventData`](/apidocs/interfaces/DragEventData.md)

  ↳ **`DropEventData`**

## Properties

### absolutePointer

 **absolutePointer**: [`Point`](/apidocs/classes/Point.md)

**`Deprecated`**

use scenePoint instead.
Kept for compatibility

#### Defined in

[src/EventTypeDefs.ts:189](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L189)

___

### canDrop

 `Optional` **canDrop**: `boolean`

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[canDrop](/apidocs/interfaces/DragEventData.md#candrop)

#### Defined in

[src/EventTypeDefs.ts:172](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L172)

___

### didDrop

 `Optional` **didDrop**: `boolean`

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[didDrop](/apidocs/interfaces/DragEventData.md#diddrop)

#### Defined in

[src/EventTypeDefs.ts:173](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L173)

___

### dragSource

 `Optional` **dragSource**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[dragSource](/apidocs/interfaces/DragEventData.md#dragsource)

#### Defined in

[src/EventTypeDefs.ts:171](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L171)

___

### dropTarget

 `Optional` **dropTarget**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[dropTarget](/apidocs/interfaces/DragEventData.md#droptarget)

#### Defined in

[src/EventTypeDefs.ts:174](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L174)

___

### e

 **e**: `DragEvent`

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[e](/apidocs/interfaces/DragEventData.md#e)

#### Defined in

[src/EventTypeDefs.ts:88](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L88)

___

### pointer

 **pointer**: [`Point`](/apidocs/classes/Point.md)

**`Deprecated`**

use viewportPoint instead.
Kept for compatibility

#### Defined in

[src/EventTypeDefs.ts:183](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L183)

___

### scenePoint

 **scenePoint**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:190](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L190)

___

### subTargets

 `Optional` **subTargets**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[subTargets](/apidocs/interfaces/DragEventData.md#subtargets)

#### Defined in

[src/EventTypeDefs.ts:170](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L170)

___

### target

 `Optional` **target**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[target](/apidocs/interfaces/DragEventData.md#target)

#### Defined in

[src/EventTypeDefs.ts:169](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L169)

___

### viewportPoint

 **viewportPoint**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:191](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L191)
