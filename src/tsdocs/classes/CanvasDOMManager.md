# Class: CanvasDOMManager

## Hierarchy

- [`StaticCanvasDOMManager`](/apidocs/classes/StaticCanvasDOMManager.md)

  ↳ **`CanvasDOMManager`**

## Constructors

### constructor

• **new CanvasDOMManager**(`arg0?`, `«destructured»?`): [`CanvasDOMManager`](/apidocs/classes/CanvasDOMManager.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg0?` | `string` \| `HTMLCanvasElement` | - |
| `«destructured»` | `Object` | - |
| › `allowTouchScrolling?` | `boolean` | - |
| › `containerClass?` | `string` | **`Deprecated`** here only for backward compatibility |

#### Returns

[`CanvasDOMManager`](/apidocs/classes/CanvasDOMManager.md)

#### Overrides

[StaticCanvasDOMManager](/apidocs/classes/StaticCanvasDOMManager.md).[constructor](/apidocs/classes/StaticCanvasDOMManager.md#constructor)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:18](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L18)

## Properties

### container

• **container**: `HTMLDivElement`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:16](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L16)

___

### lower

• **lower**: `CanvasItem`

#### Inherited from

[StaticCanvasDOMManager](/apidocs/classes/StaticCanvasDOMManager.md).[lower](/apidocs/classes/StaticCanvasDOMManager.md#lower)

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:22](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L22)

___

### upper

• **upper**: `CanvasItem`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:15](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L15)

## Methods

### applyCanvasStyle

▸ **applyCanvasStyle**(`element`, `«destructured»`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLCanvasElement` | canvas element to apply styles on |
| `«destructured»` | `Object` | - |
| › `allowTouchScrolling` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:79](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L79)

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

[StaticCanvasDOMManager](/apidocs/classes/StaticCanvasDOMManager.md).[calcOffset](/apidocs/classes/StaticCanvasDOMManager.md#calcoffset)

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:71](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L71)

___

### cleanupDOM

▸ **cleanupDOM**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`TSize`](/apidocs/modules.md#tsize) |

#### Returns

`void`

#### Overrides

[StaticCanvasDOMManager](/apidocs/classes/StaticCanvasDOMManager.md).[cleanupDOM](/apidocs/classes/StaticCanvasDOMManager.md#cleanupdom)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:104](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L104)

___

### createContainerElement

▸ **createContainerElement**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:65](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L65)

___

### createLowerCanvas

▸ **createLowerCanvas**(`arg0?`): `HTMLCanvasElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0?` | `string` \| `HTMLCanvasElement` |

#### Returns

`HTMLCanvasElement`

#### Inherited from

[StaticCanvasDOMManager](/apidocs/classes/StaticCanvasDOMManager.md).[createLowerCanvas](/apidocs/classes/StaticCanvasDOMManager.md#createlowercanvas)

#### Defined in

[src/canvas/DOMManagers/StaticCanvasDOMManager.ts:29](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L29)

___

### createUpperCanvas

▸ **createUpperCanvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:50](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L50)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Overrides

[StaticCanvasDOMManager](/apidocs/classes/StaticCanvasDOMManager.md).[dispose](/apidocs/classes/StaticCanvasDOMManager.md#dispose)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:116](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L116)

___

### setCSSDimensions

▸ **setCSSDimensions**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `Partial`\<`CSSDimensions`\> |

#### Returns

`void`

#### Overrides

[StaticCanvasDOMManager](/apidocs/classes/StaticCanvasDOMManager.md).[setCSSDimensions](/apidocs/classes/StaticCanvasDOMManager.md#setcssdimensions)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:98](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L98)

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

#### Overrides

[StaticCanvasDOMManager](/apidocs/classes/StaticCanvasDOMManager.md).[setDimensions](/apidocs/classes/StaticCanvasDOMManager.md#setdimensions)

#### Defined in

[src/canvas/DOMManagers/CanvasDOMManager.ts:92](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/canvas/DOMManagers/CanvasDOMManager.ts#L92)
