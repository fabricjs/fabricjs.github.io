# Interface: TPointerEventInfo<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`TPointerEvent`](../modules.md#tpointerevent) = [`TPointerEvent`](../modules.md#tpointerevent) |

## Hierarchy

- [`TEvent`](TEvent.md)<`E`\>

  ↳ **`TPointerEventInfo`**

## Table of contents

### Properties

- [absolutePointer](TPointerEventInfo.md#absolutepointer)
- [button](TPointerEventInfo.md#button)
- [currentSubTargets](TPointerEventInfo.md#currentsubtargets)
- [currentTarget](TPointerEventInfo.md#currenttarget)
- [e](TPointerEventInfo.md#e)
- [isClick](TPointerEventInfo.md#isclick)
- [pointer](TPointerEventInfo.md#pointer)
- [subTargets](TPointerEventInfo.md#subtargets)
- [target](TPointerEventInfo.md#target)
- [transform](TPointerEventInfo.md#transform)

## Properties

### absolutePointer

• **absolutePointer**: [`Point`](../classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L136)

___

### button

• `Optional` **button**: `number`

#### Defined in

[src/EventTypeDefs.ts:132](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L132)

___

### currentSubTargets

• `Optional` **currentSubTargets**: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### Defined in

[src/EventTypeDefs.ts:137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L137)

___

### currentTarget

• `Optional` **currentTarget**: ``null`` \| [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:138](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L138)

___

### e

• **e**: `E`

#### Inherited from

[TEvent](TEvent.md).[e](TEvent.md#e)

#### Defined in

[src/EventTypeDefs.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L84)

___

### isClick

• **isClick**: `boolean`

#### Defined in

[src/EventTypeDefs.ts:133](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L133)

___

### pointer

• **pointer**: [`Point`](../classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L134)

___

### subTargets

• `Optional` **subTargets**: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>[]

#### Defined in

[src/EventTypeDefs.ts:131](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L131)

___

### target

• `Optional` **target**: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:130](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L130)

___

### transform

• `Optional` **transform**: ``null`` \| [`Transform`](../modules.md#transform)

#### Defined in

[src/EventTypeDefs.ts:135](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L135)
