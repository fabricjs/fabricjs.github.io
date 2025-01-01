---
editUrl: false
next: false
prev: false
title: "StaticCanvasDOMManager"
---

Defined in: [src/canvas/DOMManagers/StaticCanvasDOMManager.ts:14](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L14)

## Extended by

- [`CanvasDOMManager`](/api/classes/canvasdommanager/)

## Constructors

### new StaticCanvasDOMManager()

> **new StaticCanvasDOMManager**(`arg0`?): [`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/)

Defined in: [src/canvas/DOMManagers/StaticCanvasDOMManager.ts:24](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L24)

#### Parameters

##### arg0?

`string` | `HTMLCanvasElement`

#### Returns

[`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/)

## Properties

### lower

> **lower**: `CanvasItem`

Defined in: [src/canvas/DOMManagers/StaticCanvasDOMManager.ts:22](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L22)

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

***

### cleanupDOM()

> **cleanupDOM**(`__namedParameters`): `void`

Defined in: [src/canvas/DOMManagers/StaticCanvasDOMManager.ts:47](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L47)

#### Parameters

##### \_\_namedParameters

[`TSize`](/api/type-aliases/tsize/)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/canvas/DOMManagers/StaticCanvasDOMManager.ts:75](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L75)

#### Returns

`void`

***

### setCSSDimensions()

> **setCSSDimensions**(`size`): `void`

Defined in: [src/canvas/DOMManagers/StaticCanvasDOMManager.ts:64](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L64)

#### Parameters

##### size

`Partial`\<`CSSDimensions`\>

#### Returns

`void`

***

### setDimensions()

> **setDimensions**(`size`, `retinaScaling`): `void`

Defined in: [src/canvas/DOMManagers/StaticCanvasDOMManager.ts:59](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/canvas/DOMManagers/StaticCanvasDOMManager.ts#L59)

#### Parameters

##### size

[`TSize`](/api/type-aliases/tsize/)

##### retinaScaling

`number`

#### Returns

`void`
