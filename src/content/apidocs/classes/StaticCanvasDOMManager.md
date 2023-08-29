# Class: StaticCanvasDOMManager

## Hierarchy

- **`StaticCanvasDOMManager`**

  ↳ [`CanvasDOMManager`](CanvasDOMManager.md)

## Table of contents

### Constructors

- [constructor](StaticCanvasDOMManager.md#constructor)

### Properties

- [\_originalCanvasStyle](StaticCanvasDOMManager.md#_originalcanvasstyle)
- [lower](StaticCanvasDOMManager.md#lower)

### Methods

- [calcOffset](StaticCanvasDOMManager.md#calcoffset)
- [cleanupDOM](StaticCanvasDOMManager.md#cleanupdom)
- [createLowerCanvas](StaticCanvasDOMManager.md#createlowercanvas)
- [dispose](StaticCanvasDOMManager.md#dispose)
- [setCSSDimensions](StaticCanvasDOMManager.md#setcssdimensions)
- [setDimensions](StaticCanvasDOMManager.md#setdimensions)

## Constructors

### constructor

• **new StaticCanvasDOMManager**(`arg0`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` \| `HTMLCanvasElement` |

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L23)

## Properties

### \_originalCanvasStyle

• `Private` `Optional` **\_originalCanvasStyle**: `string`

Keeps a copy of the canvas style before setting retina scaling and other potions
in order to return it to original state on dispose

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:19](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L19)

___

### lower

• **lower**: `CanvasItem`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L21)

## Methods

### calcOffset

▸ **calcOffset**(): `Object`

Calculates canvas element offset relative to the document

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:71](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L71)

___

### cleanupDOM

▸ **cleanupDOM**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TSize`](../modules.md#tsize) |

#### Returns

`void`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:47](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L47)

___

### createLowerCanvas

▸ `Protected` **createLowerCanvas**(`arg0`): `HTMLCanvasElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` \| `HTMLCanvasElement` |

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L28)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L75)

___

### setCSSDimensions

▸ **setCSSDimensions**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `Partial`<`CSSDimensions`\> |

#### Returns

`void`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L64)

___

### setDimensions

▸ **setDimensions**(`size`, `retinaScaling`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`TSize`](../modules.md#tsize) |
| `retinaScaling` | `number` |

#### Returns

`void`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:59](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L59)
