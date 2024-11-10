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

[src/EventTypeDefs.ts:211](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L211)

***

### canDrop?

> `optional` **canDrop**: `boolean`

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`canDrop`](/api/interfaces/drageventdata/#candrop)

#### Defined in

[src/EventTypeDefs.ts:194](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L194)

***

### didDrop?

> `optional` **didDrop**: `boolean`

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`didDrop`](/api/interfaces/drageventdata/#diddrop)

#### Defined in

[src/EventTypeDefs.ts:195](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L195)

***

### dragSource?

> `optional` **dragSource**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`dragSource`](/api/interfaces/drageventdata/#dragsource)

#### Defined in

[src/EventTypeDefs.ts:193](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L193)

***

### dropTarget?

> `optional` **dropTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`dropTarget`](/api/interfaces/drageventdata/#droptarget)

#### Defined in

[src/EventTypeDefs.ts:196](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L196)

***

### e

> **e**: `DragEvent`

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`e`](/api/interfaces/drageventdata/#e)

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

[src/EventTypeDefs.ts:205](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L205)

***

### scenePoint

> **scenePoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:212](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L212)

***

### subTargets?

> `optional` **subTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`subTargets`](/api/interfaces/drageventdata/#subtargets)

#### Defined in

[src/EventTypeDefs.ts:192](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L192)

***

### target?

> `optional` **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`DragEventData`](/api/interfaces/drageventdata/).[`target`](/api/interfaces/drageventdata/#target)

#### Defined in

[src/EventTypeDefs.ts:191](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L191)

***

### viewportPoint

> **viewportPoint**: [`Point`](/api/classes/point/)

#### Defined in

[src/EventTypeDefs.ts:213](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L213)
