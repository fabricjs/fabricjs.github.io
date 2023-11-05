# Class: StaticCanvasDOMManager

## Hierarchy

- **`StaticCanvasDOMManager`**

  ↳ [`CanvasDOMManager`](/apidocs/classes/CanvasDOMManager.md)

## Table of contents

### Constructors

- [constructor](/apidocs/classes/StaticCanvasDOMManager.md#constructor)

### Properties

- [\_originalCanvasStyle](/apidocs/classes/StaticCanvasDOMManager.md#_originalcanvasstyle)
- [lower](/apidocs/classes/StaticCanvasDOMManager.md#lower)

### Methods

- [calcOffset](/apidocs/classes/StaticCanvasDOMManager.md#calcoffset)
- [cleanupDOM](/apidocs/classes/StaticCanvasDOMManager.md#cleanupdom)
- [createLowerCanvas](/apidocs/classes/StaticCanvasDOMManager.md#createlowercanvas)
- [dispose](/apidocs/classes/StaticCanvasDOMManager.md#dispose)
- [setCSSDimensions](/apidocs/classes/StaticCanvasDOMManager.md#setcssdimensions)
- [setDimensions](/apidocs/classes/StaticCanvasDOMManager.md#setdimensions)

## Constructors

### constructor

• **new StaticCanvasDOMManager**(`arg0?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0?` | `string` \| `HTMLCanvasElement` |

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:24](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L24)

## Properties

### \_originalCanvasStyle

• `Private` `Optional` **\_originalCanvasStyle**: `string`

Keeps a copy of the canvas style before setting retina scaling and other potions
in order to return it to original state on dispose

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:20](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L20)

___

### lower

• **lower**: `CanvasItem`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:22](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L22)

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

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:71](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L71)

___

### cleanupDOM

▸ **cleanupDOM**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TSize`](/apidocs/modules.md#tsize) |

#### Returns

`void`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:47](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L47)

___

### createLowerCanvas

▸ `Protected` **createLowerCanvas**(`arg0?`): `HTMLCanvasElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0?` | `string` \| `HTMLCanvasElement` |

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:29](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L29)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:75](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L75)

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

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:64](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L64)

___

### setDimensions

▸ **setDimensions**(`size`, `retinaScaling`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`TSize`](/apidocs/modules.md#tsize) |
| `retinaScaling` | `number` |

#### Returns

`void`

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:59](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L59)
