---
editUrl: false
next: false
prev: false
title: "CanvasDOMManager"
---

Defined in: [src/canvas/DOMManagers/CanvasDOMManager.ts:11](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/CanvasDOMManager.ts#L11)

## Extends

- [`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/)

## Constructors

### new CanvasDOMManager()

> **new CanvasDOMManager**(`arg0`?, `__namedParameters`?): [`CanvasDOMManager`](/api/classes/canvasdommanager/)

Defined in: [src/canvas/DOMManagers/CanvasDOMManager.ts:15](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/CanvasDOMManager.ts#L15)

#### Parameters

##### arg0?

`string` | `HTMLCanvasElement`

##### \_\_namedParameters?

###### allowTouchScrolling

`boolean` = `false`

###### containerClass

`string` = `''`

:::caution[Deprecated]
here only for backward compatibility
:::

#### Returns

[`CanvasDOMManager`](/api/classes/canvasdommanager/)

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`constructor`](/api/classes/staticcanvasdommanager/#constructors)

## Properties

### container

> **container**: `HTMLDivElement`

Defined in: [src/canvas/DOMManagers/CanvasDOMManager.ts:13](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/CanvasDOMManager.ts#L13)

***

### lower

> **lower**: `CanvasItem`

Defined in: [src/canvas/DOMManagers/StaticCanvasDOMManager.ts:22](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L22)

#### Inherited from

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`lower`](/api/classes/staticcanvasdommanager/#lower)

***

### upper

> **upper**: `CanvasItem`

Defined in: [src/canvas/DOMManagers/CanvasDOMManager.ts:12](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/CanvasDOMManager.ts#L12)

## Methods

### calcOffset()

> **calcOffset**(): `object`

Defined in: [src/canvas/DOMManagers/StaticCanvasDOMManager.ts:71](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L71)

Calculates canvas element offset relative to the document

#### Returns

`object`

##### left

> **left**: `number` = `0`

##### top

> **top**: `number` = `0`

#### Inherited from

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`calcOffset`](/api/classes/staticcanvasdommanager/#calcoffset)

***

### cleanupDOM()

> **cleanupDOM**(`size`): `void`

Defined in: [src/canvas/DOMManagers/CanvasDOMManager.ts:108](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/CanvasDOMManager.ts#L108)

#### Parameters

##### size

[`TSize`](/api/type-aliases/tsize/)

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`cleanupDOM`](/api/classes/staticcanvasdommanager/#cleanupdom)

***

### dispose()

> **dispose**(): `void`

Defined in: [src/canvas/DOMManagers/CanvasDOMManager.ts:120](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/CanvasDOMManager.ts#L120)

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`dispose`](/api/classes/staticcanvasdommanager/#dispose)

***

### setCSSDimensions()

> **setCSSDimensions**(`size`): `void`

Defined in: [src/canvas/DOMManagers/CanvasDOMManager.ts:102](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/CanvasDOMManager.ts#L102)

#### Parameters

##### size

`Partial`\<`CSSDimensions`\>

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`setCSSDimensions`](/api/classes/staticcanvasdommanager/#setcssdimensions)

***

### setDimensions()

> **setDimensions**(`size`, `retinaScaling`): `void`

Defined in: [src/canvas/DOMManagers/CanvasDOMManager.ts:96](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/CanvasDOMManager.ts#L96)

#### Parameters

##### size

[`TSize`](/api/type-aliases/tsize/)

##### retinaScaling

`number`

#### Returns

`void`

#### Overrides

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/).[`setDimensions`](/api/classes/staticcanvasdommanager/#setdimensions)
