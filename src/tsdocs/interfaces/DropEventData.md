# Interface: DropEventData

## Hierarchy

- [`DragEventData`](/apidocs/interfaces/DragEventData.md)

  ↳ **`DropEventData`**

## Properties

### absolutePointer

• **absolutePointer**: [`Point`](/apidocs/classes/Point.md)

**`Deprecated`**

use scenePoint instead.
Kept for compatibility

#### Defined in

[src/EventTypeDefs.ts:184](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L184)

___

### canDrop

• `Optional` **canDrop**: `boolean`

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[canDrop](/apidocs/interfaces/DragEventData.md#candrop)

#### Defined in

[src/EventTypeDefs.ts:167](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L167)

___

### didDrop

• `Optional` **didDrop**: `boolean`

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[didDrop](/apidocs/interfaces/DragEventData.md#diddrop)

#### Defined in

[src/EventTypeDefs.ts:168](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L168)

___

### dragSource

• `Optional` **dragSource**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[dragSource](/apidocs/interfaces/DragEventData.md#dragsource)

#### Defined in

[src/EventTypeDefs.ts:166](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L166)

___

### dropTarget

• `Optional` **dropTarget**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[dropTarget](/apidocs/interfaces/DragEventData.md#droptarget)

#### Defined in

[src/EventTypeDefs.ts:169](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L169)

___

### e

• **e**: `DragEvent`

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[e](/apidocs/interfaces/DragEventData.md#e)

#### Defined in

[src/EventTypeDefs.ts:84](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L84)

___

### pointer

• **pointer**: [`Point`](/apidocs/classes/Point.md)

**`Deprecated`**

use viewportPoint instead.
Kept for compatibility

#### Defined in

[src/EventTypeDefs.ts:178](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L178)

___

### scenePoint

• **scenePoint**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:185](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L185)

___

### subTargets

• `Optional` **subTargets**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[subTargets](/apidocs/interfaces/DragEventData.md#subtargets)

#### Defined in

[src/EventTypeDefs.ts:165](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L165)

___

### target

• `Optional` **target**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[DragEventData](/apidocs/interfaces/DragEventData.md).[target](/apidocs/interfaces/DragEventData.md#target)

#### Defined in

[src/EventTypeDefs.ts:164](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L164)

___

### viewportPoint

• **viewportPoint**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:186](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L186)
