# Interface: DragEventData

## Hierarchy

- [`TEvent`](/apidocs/interfaces/TEvent.md)\<`DragEvent`\>

  ↳ **`DragEventData`**

  ↳↳ [`DropEventData`](/apidocs/interfaces/DropEventData.md)

## Properties

### canDrop

 `Optional` **canDrop**: `boolean`

#### Defined in

[src/EventTypeDefs.ts:172](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L172)

___

### didDrop

 `Optional` **didDrop**: `boolean`

#### Defined in

[src/EventTypeDefs.ts:173](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L173)

___

### dragSource

 `Optional` **dragSource**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:171](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L171)

___

### dropTarget

 `Optional` **dropTarget**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:174](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L174)

___

### e

 **e**: `DragEvent`

#### Inherited from

[TEvent](/apidocs/interfaces/TEvent.md).[e](/apidocs/interfaces/TEvent.md#e)

#### Defined in

[src/EventTypeDefs.ts:88](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L88)

___

### subTargets

 `Optional` **subTargets**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Defined in

[src/EventTypeDefs.ts:170](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L170)

___

### target

 `Optional` **target**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:169](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L169)
