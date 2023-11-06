# Interface: ModifiedEvent\<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Event` = [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

## Hierarchy

- [`TEvent`](/apidocs/interfaces/TEvent.md)\<`E`\>

  ↳ **`ModifiedEvent`**

## Properties

### action

• **action**: `string`

#### Defined in

[src/EventTypeDefs.ts:108](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L108)

___

### e

• **e**: `E`

#### Inherited from

[TEvent](/apidocs/interfaces/TEvent.md).[e](/apidocs/interfaces/TEvent.md#e)

#### Defined in

[src/EventTypeDefs.ts:84](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L84)

___

### target

• **target**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:107](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L107)

___

### transform

• **transform**: [`Transform`](/apidocs/modules.md#transform)

#### Defined in

[src/EventTypeDefs.ts:106](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L106)
