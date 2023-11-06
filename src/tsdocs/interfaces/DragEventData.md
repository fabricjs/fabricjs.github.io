# Interface: DragEventData

## Hierarchy

- [`TEvent`](/apidocs/interfaces/TEvent.md)\<`DragEvent`\>

  ↳ **`DragEventData`**

  ↳↳ [`DropEventData`](/apidocs/interfaces/DropEventData.md)

## Properties

### canDrop

• `Optional` **canDrop**: `boolean`

#### Defined in

[src/EventTypeDefs.ts:167](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L167)

___

### didDrop

• `Optional` **didDrop**: `boolean`

#### Defined in

[src/EventTypeDefs.ts:168](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L168)

___

### dragSource

• `Optional` **dragSource**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:166](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L166)

___

### dropTarget

• `Optional` **dropTarget**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:169](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L169)

___

### e

• **e**: `DragEvent`

#### Inherited from

[TEvent](/apidocs/interfaces/TEvent.md).[e](/apidocs/interfaces/TEvent.md#e)

#### Defined in

[src/EventTypeDefs.ts:84](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L84)

___

### subTargets

• `Optional` **subTargets**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Defined in

[src/EventTypeDefs.ts:165](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L165)

___

### target

• `Optional` **target**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:164](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L164)
