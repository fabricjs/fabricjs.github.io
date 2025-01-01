---
editUrl: false
next: false
prev: false
title: "StaticCanvasEvents"
---

Defined in: [src/EventTypeDefs.ts:312](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L312)

## Extends

- [`CollectionEvents`](/api/interfaces/collectionevents/)

## Extended by

- [`CanvasEvents`](/api/interfaces/canvasevents/)

## Properties

### after:render

> **after:render**: `object`

Defined in: [src/EventTypeDefs.ts:318](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L318)

#### ctx

> **ctx**: `CanvasRenderingContext2D`

***

### before:render

> **before:render**: `object`

Defined in: [src/EventTypeDefs.ts:317](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L317)

#### ctx

> **ctx**: `CanvasRenderingContext2D`

***

### canvas:cleared

> **canvas:cleared**: `never`

Defined in: [src/EventTypeDefs.ts:314](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L314)

***

### object:added

> **object:added**: `object`

Defined in: [src/EventTypeDefs.ts:250](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L250)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:added`](/api/interfaces/collectionevents/#object:added)

***

### object:layout:after

> **object:layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object`

Defined in: [src/EventTypeDefs.ts:320](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L320)

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

***

### object:layout:before

> **object:layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object`

Defined in: [src/EventTypeDefs.ts:319](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L319)

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

***

### object:removed

> **object:removed**: `object`

Defined in: [src/EventTypeDefs.ts:251](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L251)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:removed`](/api/interfaces/collectionevents/#object:removed)
