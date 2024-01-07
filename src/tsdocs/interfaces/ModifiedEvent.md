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

 **action**: `string`

#### Defined in

[src/EventTypeDefs.ts:113](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L113)

___

### e

 **e**: `E`

#### Inherited from

[TEvent](/apidocs/interfaces/TEvent.md).[e](/apidocs/interfaces/TEvent.md#e)

#### Defined in

[src/EventTypeDefs.ts:88](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L88)

___

### target

 **target**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:112](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L112)

___

### transform

 **transform**: [`Transform`](/apidocs/modules.md#transform)

#### Defined in

[src/EventTypeDefs.ts:111](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L111)
