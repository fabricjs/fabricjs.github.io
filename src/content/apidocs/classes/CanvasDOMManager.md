# Class: CanvasDOMManager

## Hierarchy

- [`StaticCanvasDOMManager`](StaticCanvasDOMManager.md)

  ↳ **`CanvasDOMManager`**

## Table of contents

### Constructors

- [constructor](CanvasDOMManager.md#constructor)

### Properties

- [container](CanvasDOMManager.md#container)
- [lower](CanvasDOMManager.md#lower)
- [upper](CanvasDOMManager.md#upper)

### Methods

- [applyCanvasStyle](CanvasDOMManager.md#applycanvasstyle)
- [calcOffset](CanvasDOMManager.md#calcoffset)
- [cleanupDOM](CanvasDOMManager.md#cleanupdom)
- [createContainerElement](CanvasDOMManager.md#createcontainerelement)
- [createLowerCanvas](CanvasDOMManager.md#createlowercanvas)
- [createUpperCanvas](CanvasDOMManager.md#createuppercanvas)
- [dispose](CanvasDOMManager.md#dispose)
- [setCSSDimensions](CanvasDOMManager.md#setcssdimensions)
- [setDimensions](CanvasDOMManager.md#setdimensions)

## Constructors

### constructor

• **new CanvasDOMManager**(`arg0`, `«destructured»?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg0` | `string` \| `HTMLCanvasElement` | - |
| `«destructured»` | `Object` | - |
| › `allowTouchScrolling?` | `boolean` | - |
| › `containerClass?` | `string` | **`Deprecated`** here only for backward compatibility |

#### Overrides

[StaticCanvasDOMManager](StaticCanvasDOMManager.md).[constructor](StaticCanvasDOMManager.md#constructor)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L18)

## Properties

### container

• **container**: `HTMLDivElement`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:16](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L16)

___

### lower

• **lower**: `CanvasItem`

#### Inherited from

[StaticCanvasDOMManager](StaticCanvasDOMManager.md).[lower](StaticCanvasDOMManager.md#lower)

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L21)

___

### upper

• **upper**: `CanvasItem`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:15](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L15)

## Methods

### applyCanvasStyle

▸ `Private` **applyCanvasStyle**(`element`, `«destructured»`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLCanvasElement` | canvas element to apply styles on |
| `«destructured»` | `Object` | - |
| › `allowTouchScrolling` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:79](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L79)

___

### calcOffset

▸ **calcOffset**(): `Object`

Calculates canvas element offset relative to the document

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Inherited from

[StaticCanvasDOMManager](StaticCanvasDOMManager.md).[calcOffset](StaticCanvasDOMManager.md#calcoffset)

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:71](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L71)

___

### cleanupDOM

▸ **cleanupDOM**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`TSize`](../modules.md#tsize) |

#### Returns

`void`

#### Overrides

[StaticCanvasDOMManager](StaticCanvasDOMManager.md).[cleanupDOM](StaticCanvasDOMManager.md#cleanupdom)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:104](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L104)

___

### createContainerElement

▸ `Protected` **createContainerElement**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L65)

___

### createLowerCanvas

▸ `Protected` **createLowerCanvas**(`arg0`): `HTMLCanvasElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` \| `HTMLCanvasElement` |

#### Returns

`HTMLCanvasElement`

#### Inherited from

[StaticCanvasDOMManager](StaticCanvasDOMManager.md).[createLowerCanvas](StaticCanvasDOMManager.md#createlowercanvas)

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L28)

___

### createUpperCanvas

▸ `Protected` **createUpperCanvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:50](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L50)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Overrides

[StaticCanvasDOMManager](StaticCanvasDOMManager.md).[dispose](StaticCanvasDOMManager.md#dispose)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:116](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L116)

___

### setCSSDimensions

▸ **setCSSDimensions**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `Partial`<`CSSDimensions`\> |

#### Returns

`void`

#### Overrides

[StaticCanvasDOMManager](StaticCanvasDOMManager.md).[setCSSDimensions](StaticCanvasDOMManager.md#setcssdimensions)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:98](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L98)

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

#### Overrides

[StaticCanvasDOMManager](StaticCanvasDOMManager.md).[setDimensions](StaticCanvasDOMManager.md#setdimensions)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:92](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/DOMManagers/CanvasDOMManager.ts#L92)
