# Interface: ModifiedEvent<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Event` = [`TPointerEvent`](../modules.md#tpointerevent) |

## Hierarchy

- [`TEvent`](TEvent.md)<`E`\>

  ↳ **`ModifiedEvent`**

## Table of contents

### Properties

- [action](ModifiedEvent.md#action)
- [e](ModifiedEvent.md#e)
- [target](ModifiedEvent.md#target)
- [transform](ModifiedEvent.md#transform)

## Properties

### action

• **action**: `string`

#### Defined in

[src/EventTypeDefs.ts:108](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L108)

___

### e

• **e**: `E`

#### Inherited from

[TEvent](TEvent.md).[e](TEvent.md#e)

#### Defined in

[src/EventTypeDefs.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L84)

___

### target

• **target**: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:107](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L107)

___

### transform

• **transform**: [`Transform`](../modules.md#transform)

#### Defined in

[src/EventTypeDefs.ts:106](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L106)
