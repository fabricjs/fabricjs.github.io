---
editUrl: false
next: false
prev: false
title: "ObjectEvents"
---

Defined in: [src/EventTypeDefs.ts:291](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L291)

## Extends

- [`ObjectPointerEvents`](/api/type-aliases/objectpointerevents/).`DnDEvents`.[`MiscEvents`](/api/interfaces/miscevents/).[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/)

## Extended by

- [`GroupEvents`](/api/interfaces/groupevents/)

## Properties

### added

> **added**: `object`

Defined in: [src/EventTypeDefs.ts:305](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L305)

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)

***

### contextmenu

> **contextmenu**: `SimpleEventHandler`\<`Event`\>

Defined in: [src/EventTypeDefs.ts:288](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L288)

#### Inherited from

[`MiscEvents`](/api/interfaces/miscevents/).[`contextmenu`](/api/interfaces/miscevents/#contextmenu)

***

### contextmenu:before

> **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

Defined in: [src/EventTypeDefs.ts:287](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L287)

#### Inherited from

[`MiscEvents`](/api/interfaces/miscevents/).[`contextmenu:before`](/api/interfaces/miscevents/#contextmenu:before)

***

### deselected

> **deselected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object`

Defined in: [src/EventTypeDefs.ts:300](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L300)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

***

### drag

> **drag**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:218](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L218)

#### Inherited from

`DnDEvents.drag`

***

### dragend

> **dragend**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:222](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L222)

#### Inherited from

`DnDEvents.dragend`

***

### dragenter

> **dragenter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

Defined in: [src/EventTypeDefs.ts:220](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L220)

#### Inherited from

`DnDEvents.dragenter`

***

### dragleave

> **dragleave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

Defined in: [src/EventTypeDefs.ts:221](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L221)

#### Inherited from

`DnDEvents.dragleave`

***

### dragover

> **dragover**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:219](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L219)

#### Inherited from

`DnDEvents.dragover`

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

Defined in: [src/EventTypeDefs.ts:217](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L217)

#### Inherited from

`DnDEvents.dragstart`

***

### drop

> **drop**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:224](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L224)

#### Inherited from

`DnDEvents.drop`

***

### drop:after

> **drop:after**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:225](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L225)

#### Inherited from

`DnDEvents.drop:after`

***

### drop:before

> **drop:before**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:223](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L223)

#### Inherited from

`DnDEvents.drop:before`

***

### erasing:end

> **erasing:end**: `object`

Defined in: [src/EventTypeDefs.ts:309](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L309)

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)

***

### modified

> **modified**: [`ModifiedEvent`](/api/interfaces/modifiedevent/)

Defined in: [src/EventTypeDefs.ts:138](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L138)

#### Inherited from

`ObjectModificationEvents.modified`

***

### modifyPath

> **modifyPath**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & [`ModifyPathEvent`](/api/interfaces/modifypathevent/)

Defined in: [src/EventTypeDefs.ts:137](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L137)

#### Inherited from

`ObjectModificationEvents.modifyPath`

***

### modifyPoly

> **modifyPoly**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:136](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L136)

#### Inherited from

`ObjectModificationEvents.modifyPoly`

***

### mousedblclick

> **mousedblclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`ObjectPointerEvents.mousedblclick`

***

### mousedown

> **mousedown**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`ObjectPointerEvents.mousedown`

***

### mousedown:before

> **mousedown:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`ObjectPointerEvents.mousedown:before`

***

### mousemove

> **mousemove**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`ObjectPointerEvents.mousemove`

***

### mousemove:before

> **mousemove:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`ObjectPointerEvents.mousemove:before`

***

### mouseout

> **mouseout**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `OutEvent`

#### Inherited from

`ObjectPointerEvents.mouseout`

***

### mouseover

> **mouseover**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `InEvent`

#### Inherited from

`ObjectPointerEvents.mouseover`

***

### mouseup

> **mouseup**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)

##### isClick

> **isClick**: `boolean`

#### Inherited from

`ObjectPointerEvents.mouseup`

***

### mouseup:before

> **mouseup:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)

##### isClick

> **isClick**: `boolean`

#### Inherited from

`ObjectPointerEvents.mouseup:before`

***

### mousewheel

> **mousewheel**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\>

#### Inherited from

`ObjectPointerEvents.mousewheel`

***

### moving

> **moving**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:131](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L131)

#### Inherited from

`ObjectModificationEvents.moving`

***

### removed

> **removed**: `object`

Defined in: [src/EventTypeDefs.ts:306](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L306)

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)

***

### resizing

> **resizing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:135](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L135)

#### Inherited from

`ObjectModificationEvents.resizing`

***

### rotating

> **rotating**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:133](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L133)

#### Inherited from

`ObjectModificationEvents.rotating`

***

### scaling

> **scaling**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:132](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L132)

#### Inherited from

`ObjectModificationEvents.scaling`

***

### selected

> **selected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object`

Defined in: [src/EventTypeDefs.ts:297](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L297)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

***

### skewing

> **skewing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:134](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L134)

#### Inherited from

`ObjectModificationEvents.skewing`
