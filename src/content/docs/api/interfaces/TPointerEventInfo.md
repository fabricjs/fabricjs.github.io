---
editUrl: false
next: false
prev: false
title: "TPointerEventInfo"
---

## Extends

- [`TEvent`](/api/interfaces/tevent/)\<`E`\>

## Type Parameters

• **E** *extends* [`TPointerEvent`](/api/type-aliases/tpointerevent/) = [`TPointerEvent`](/api/type-aliases/tpointerevent/)

## Properties

### ~~absolutePointer~~

> **absolutePointer**: [`Point`](/api/classes/point/)

:::caution[Deprecated]
use scenePoint instead.
Kept for compatibility
:::

#### Defined in

[src/EventTypeDefs.ts:171](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L171)

***

### e

> **e**: `E`

#### Inherited from

[`TEvent`](/api/interfaces/tevent/).[`e`](/api/interfaces/tevent/#e)

#### Defined in

[src/EventTypeDefs.ts:96](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L96)

***

### ~~pointer~~

> **pointer**: [`Point`](/api/classes/point/)

:::caution[Deprecated]
use viewportPoint instead.
Kept for compatibility
:::

#### Defined in

[src/EventTypeDefs.ts:165](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L165)

***

### scenePoint

> **scenePoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:172](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L172)

***

### subTargets?

> `optional` **subTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Defined in

[src/EventTypeDefs.ts:158](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L158)

***

### target?

> `optional` **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:157](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L157)

***

### transform?

> `optional` **transform**: `null` \| [`Transform`](/api/type-aliases/transform/)

#### Defined in

[src/EventTypeDefs.ts:159](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L159)

***

### viewportPoint

> **viewportPoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:173](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L173)
