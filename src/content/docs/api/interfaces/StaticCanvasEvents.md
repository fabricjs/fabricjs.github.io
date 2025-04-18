---
editUrl: false
next: false
prev: false
title: "StaticCanvasEvents"
---

Defined in: [src/EventTypeDefs.ts:332](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L332)

## Extends

- [`CollectionEvents`](/api/interfaces/collectionevents/)

## Extended by

- [`CanvasEvents`](/api/interfaces/canvasevents/)

## Properties

### after:render

> **after:render**: `object`

Defined in: [src/EventTypeDefs.ts:338](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L338)

#### ctx

> **ctx**: `CanvasRenderingContext2D`

***

### before:render

> **before:render**: `object`

Defined in: [src/EventTypeDefs.ts:337](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L337)

#### ctx

> **ctx**: `CanvasRenderingContext2D`

***

### canvas:cleared

> **canvas:cleared**: `never`

Defined in: [src/EventTypeDefs.ts:334](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L334)

***

### object:added

> **object:added**: `object`

Defined in: [src/EventTypeDefs.ts:250](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L250)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:added`](/api/interfaces/collectionevents/#objectadded)

***

### object:layout:after

> **object:layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object`

Defined in: [src/EventTypeDefs.ts:340](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L340)

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

***

### object:layout:before

> **object:layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object`

Defined in: [src/EventTypeDefs.ts:339](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L339)

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

***

### object:removed

> **object:removed**: `object`

Defined in: [src/EventTypeDefs.ts:251](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L251)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:removed`](/api/interfaces/collectionevents/#objectremoved)
