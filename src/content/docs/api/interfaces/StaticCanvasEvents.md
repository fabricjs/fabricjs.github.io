---
editUrl: false
next: false
prev: false
title: "StaticCanvasEvents"
---

## Extends

- [`CollectionEvents`](/api/interfaces/collectionevents/)

## Extended by

- [`CanvasEvents`](/api/interfaces/canvasevents/)

## Properties

### after:render

> **after:render**: `object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Defined in

[src/EventTypeDefs.ts:318](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L318)

***

### before:render

> **before:render**: `object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Defined in

[src/EventTypeDefs.ts:317](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L317)

***

### canvas:cleared

> **canvas:cleared**: `never`

#### Defined in

[src/EventTypeDefs.ts:314](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L314)

***

### object:added

> **object:added**: `object`

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:added`](/api/interfaces/collectionevents/#object:added)

#### Defined in

[src/EventTypeDefs.ts:250](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L250)

***

### object:layout:after

> **object:layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object`

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

#### Defined in

[src/EventTypeDefs.ts:320](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L320)

***

### object:layout:before

> **object:layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object`

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

#### Defined in

[src/EventTypeDefs.ts:319](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L319)

***

### object:removed

> **object:removed**: `object`

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:removed`](/api/interfaces/collectionevents/#object:removed)

#### Defined in

[src/EventTypeDefs.ts:251](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L251)
