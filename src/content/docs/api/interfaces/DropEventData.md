---
editUrl: false
next: false
prev: false
title: "DropEventData"
---

## Extends

- [`DragEventData`](/api/interfaces/drageventdata/)

## Properties

### ~~absolutePointer~~

> **absolutePointer**: [`Point`](/api/classes/point/)

:::caution[Deprecated]
use scenePoint instead.
Kept for compatibility
:::

#### Defined in

[src/EventTypeDefs.ts:199](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L199)

***

### canDrop?

> `optional` **canDrop**: `boolean`

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`canDrop`](/api/interfaces/drageventdata/#candrop)

#### Defined in

[src/EventTypeDefs.ts:182](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L182)

***

### didDrop?

> `optional` **didDrop**: `boolean`

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`didDrop`](/api/interfaces/drageventdata/#diddrop)

#### Defined in

[src/EventTypeDefs.ts:183](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L183)

***

### dragSource?

> `optional` **dragSource**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`dragSource`](/api/interfaces/drageventdata/#dragsource)

#### Defined in

[src/EventTypeDefs.ts:181](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L181)

***

### dropTarget?

> `optional` **dropTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`dropTarget`](/api/interfaces/drageventdata/#droptarget)

#### Defined in

[src/EventTypeDefs.ts:184](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L184)

***

### e

> **e**: `DragEvent`

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`e`](/api/interfaces/drageventdata/#e)

#### Defined in

[src/EventTypeDefs.ts:94](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L94)

***

### ~~pointer~~

> **pointer**: [`Point`](/api/classes/point/)

:::caution[Deprecated]
use viewportPoint instead.
Kept for compatibility
:::

#### Defined in

[src/EventTypeDefs.ts:193](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L193)

***

### scenePoint

> **scenePoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:200](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L200)

***

### subTargets?

> `optional` **subTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`subTargets`](/api/interfaces/drageventdata/#subtargets)

#### Defined in

[src/EventTypeDefs.ts:180](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L180)

***

### target?

> `optional` **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`target`](/api/interfaces/drageventdata/#target)

#### Defined in

[src/EventTypeDefs.ts:179](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L179)

***

### viewportPoint

> **viewportPoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:201](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/EventTypeDefs.ts#L201)
