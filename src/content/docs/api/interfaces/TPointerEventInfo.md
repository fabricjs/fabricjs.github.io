---
editUrl: false
next: false
prev: false
title: "TPointerEventInfo"
---

Defined in: [src/EventTypeDefs.ts:155](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L155)

## Extends

- [`TEvent`](/api/interfaces/tevent/)\<`E`\>

## Type Parameters

• **E** *extends* [`TPointerEvent`](/api/type-aliases/tpointerevent/) = [`TPointerEvent`](/api/type-aliases/tpointerevent/)

## Properties

### ~~absolutePointer~~

> **absolutePointer**: [`Point`](/api/classes/point/)

Defined in: [src/EventTypeDefs.ts:171](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L171)

:::caution[Deprecated]
use scenePoint instead.
Kept for compatibility
:::

***

### e

> **e**: `E`

Defined in: [src/EventTypeDefs.ts:96](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L96)

#### Inherited from

[`TEvent`](/api/interfaces/tevent/).[`e`](/api/interfaces/tevent/#e)

***

### ~~pointer~~

> **pointer**: [`Point`](/api/classes/point/)

Defined in: [src/EventTypeDefs.ts:165](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L165)

:::caution[Deprecated]
use viewportPoint instead.
Kept for compatibility
:::

***

### scenePoint

> **scenePoint**: [`Point`](/api/classes/point/)

Defined in: [src/EventTypeDefs.ts:172](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L172)

***

### subTargets?

> `optional` **subTargets**: [`FabricObject`](/api/classes/fabricobject/)[]

Defined in: [src/EventTypeDefs.ts:158](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L158)

***

### target?

> `optional` **target**: [`FabricObject`](/api/classes/fabricobject/)

Defined in: [src/EventTypeDefs.ts:157](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L157)

***

### transform?

> `optional` **transform**: `null` \| [`Transform`](/api/type-aliases/transform/)

Defined in: [src/EventTypeDefs.ts:159](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L159)

***

### viewportPoint

> **viewportPoint**: [`Point`](/api/classes/point/)

Defined in: [src/EventTypeDefs.ts:173](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L173)
