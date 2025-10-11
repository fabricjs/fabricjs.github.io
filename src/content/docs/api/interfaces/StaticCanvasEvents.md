---
editUrl: false
next: false
prev: false
title: "StaticCanvasEvents"
---

Defined in: [src/EventTypeDefs.ts:307](https://github.com/fabricjs/fabric.js/blob/9a792f4b7b8031f02ec7ea4ce8c99f810e45cfec/src/EventTypeDefs.ts#L307)

## Extends

- [`CollectionEvents`](/api/interfaces/collectionevents/)

## Extended by

- [`CanvasEvents`](/api/interfaces/canvasevents/)

## Properties

### after:render

> **after:render**: `object`

Defined in: [src/EventTypeDefs.ts:313](https://github.com/fabricjs/fabric.js/blob/9a792f4b7b8031f02ec7ea4ce8c99f810e45cfec/src/EventTypeDefs.ts#L313)

#### ctx

> **ctx**: `CanvasRenderingContext2D`

***

### before:render

> **before:render**: `object`

Defined in: [src/EventTypeDefs.ts:312](https://github.com/fabricjs/fabric.js/blob/9a792f4b7b8031f02ec7ea4ce8c99f810e45cfec/src/EventTypeDefs.ts#L312)

#### ctx

> **ctx**: `CanvasRenderingContext2D`

***

### canvas:cleared

> **canvas:cleared**: `never`

Defined in: [src/EventTypeDefs.ts:309](https://github.com/fabricjs/fabric.js/blob/9a792f4b7b8031f02ec7ea4ce8c99f810e45cfec/src/EventTypeDefs.ts#L309)

***

### object:added

> **object:added**: `object`

Defined in: [src/EventTypeDefs.ts:235](https://github.com/fabricjs/fabric.js/blob/9a792f4b7b8031f02ec7ea4ce8c99f810e45cfec/src/EventTypeDefs.ts#L235)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:added`](/api/interfaces/collectionevents/#objectadded)

***

### object:layout:after

> **object:layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object`

Defined in: [src/EventTypeDefs.ts:315](https://github.com/fabricjs/fabric.js/blob/9a792f4b7b8031f02ec7ea4ce8c99f810e45cfec/src/EventTypeDefs.ts#L315)

#### Type Declaration

##### target

> **target**: [`Group`](/api/classes/group/)

***

### object:layout:before

> **object:layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object`

Defined in: [src/EventTypeDefs.ts:314](https://github.com/fabricjs/fabric.js/blob/9a792f4b7b8031f02ec7ea4ce8c99f810e45cfec/src/EventTypeDefs.ts#L314)

#### Type Declaration

##### target

> **target**: [`Group`](/api/classes/group/)

***

### object:removed

> **object:removed**: `object`

Defined in: [src/EventTypeDefs.ts:236](https://github.com/fabricjs/fabric.js/blob/9a792f4b7b8031f02ec7ea4ce8c99f810e45cfec/src/EventTypeDefs.ts#L236)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:removed`](/api/interfaces/collectionevents/#objectremoved)
