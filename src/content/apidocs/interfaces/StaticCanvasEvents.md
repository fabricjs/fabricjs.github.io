# Interface: StaticCanvasEvents

## Hierarchy

- [`CollectionEvents`](CollectionEvents.md)

  ↳ **`StaticCanvasEvents`**

  ↳↳ [`CanvasEvents`](CanvasEvents.md)

## Table of contents

### Properties

- [after:render](StaticCanvasEvents.md#after:render)
- [before:render](StaticCanvasEvents.md#before:render)
- [canvas:cleared](StaticCanvasEvents.md#canvas:cleared)
- [object:added](StaticCanvasEvents.md#object:added)
- [object:removed](StaticCanvasEvents.md#object:removed)

## Properties

### after:render

• **after:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Defined in

[src/EventTypeDefs.ts:263](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L263)

___

### before:render

• **before:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Defined in

[src/EventTypeDefs.ts:262](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L262)

___

### canvas:cleared

• **canvas:cleared**: `never`

#### Defined in

[src/EventTypeDefs.ts:259](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L259)

___

### object:added

• **object:added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Inherited from

[CollectionEvents](CollectionEvents.md).[object:added](CollectionEvents.md#object:added)

#### Defined in

[src/EventTypeDefs.ts:202](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L202)

___

### object:removed

• **object:removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\> |

#### Inherited from

[CollectionEvents](CollectionEvents.md).[object:removed](CollectionEvents.md#object:removed)

#### Defined in

[src/EventTypeDefs.ts:203](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L203)
