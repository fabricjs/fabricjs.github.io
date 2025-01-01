---
editUrl: false
next: false
prev: false
title: "GroupEvents"
---

Defined in: [src/shapes/Group.ts:49](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L49)

## Extends

- [`ObjectEvents`](/api/interfaces/objectevents/).[`CollectionEvents`](/api/interfaces/collectionevents/)

## Properties

### added

> **added**: `object`

Defined in: [src/EventTypeDefs.ts:305](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L305)

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`added`](/api/interfaces/objectevents/#added)

***

### contextmenu

> **contextmenu**: `SimpleEventHandler`\<`Event`\>

Defined in: [src/EventTypeDefs.ts:288](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L288)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`contextmenu`](/api/interfaces/objectevents/#contextmenu)

***

### contextmenu:before

> **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

Defined in: [src/EventTypeDefs.ts:287](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L287)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`contextmenu:before`](/api/interfaces/objectevents/#contextmenu:before)

***

### deselected

> **deselected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object`

Defined in: [src/EventTypeDefs.ts:300](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L300)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`deselected`](/api/interfaces/objectevents/#deselected)

***

### drag

> **drag**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:218](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L218)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drag`](/api/interfaces/objectevents/#drag)

***

### dragend

> **dragend**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:222](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L222)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragend`](/api/interfaces/objectevents/#dragend)

***

### dragenter

> **dragenter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

Defined in: [src/EventTypeDefs.ts:220](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L220)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragenter`](/api/interfaces/objectevents/#dragenter)

***

### dragleave

> **dragleave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

Defined in: [src/EventTypeDefs.ts:221](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L221)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragleave`](/api/interfaces/objectevents/#dragleave)

***

### dragover

> **dragover**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:219](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L219)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragover`](/api/interfaces/objectevents/#dragover)

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

Defined in: [src/EventTypeDefs.ts:217](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L217)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragstart`](/api/interfaces/objectevents/#dragstart)

***

### drop

> **drop**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:224](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L224)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drop`](/api/interfaces/objectevents/#drop)

***

### drop:after

> **drop:after**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:225](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L225)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drop:after`](/api/interfaces/objectevents/#drop:after)

***

### drop:before

> **drop:before**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:223](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L223)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drop:before`](/api/interfaces/objectevents/#drop:before)

***

### erasing:end

> **erasing:end**: `object`

Defined in: [src/EventTypeDefs.ts:309](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L309)

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`erasing:end`](/api/interfaces/objectevents/#erasing:end)

***

### layout:after

> **layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/)

Defined in: [src/shapes/Group.ts:51](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L51)

***

### layout:before

> **layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/)

Defined in: [src/shapes/Group.ts:50](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L50)

***

### modified

> **modified**: [`ModifiedEvent`](/api/interfaces/modifiedevent/)

Defined in: [src/EventTypeDefs.ts:138](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L138)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`modified`](/api/interfaces/objectevents/#modified)

***

### modifyPath

> **modifyPath**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & [`ModifyPathEvent`](/api/interfaces/modifypathevent/)

Defined in: [src/EventTypeDefs.ts:137](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L137)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`modifyPath`](/api/interfaces/objectevents/#modifypath)

***

### modifyPoly

> **modifyPoly**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:136](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L136)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`modifyPoly`](/api/interfaces/objectevents/#modifypoly)

***

### mousedblclick

> **mousedblclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousedblclick`](/api/interfaces/objectevents/#mousedblclick)

***

### mousedown

> **mousedown**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousedown`](/api/interfaces/objectevents/#mousedown)

***

### mousedown:before

> **mousedown:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousedown:before`](/api/interfaces/objectevents/#mousedown:before)

***

### mousemove

> **mousemove**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousemove`](/api/interfaces/objectevents/#mousemove)

***

### mousemove:before

> **mousemove:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousemove:before`](/api/interfaces/objectevents/#mousemove:before)

***

### mouseout

> **mouseout**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `OutEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseout`](/api/interfaces/objectevents/#mouseout)

***

### mouseover

> **mouseover**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `InEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseover`](/api/interfaces/objectevents/#mouseover)

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

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseup`](/api/interfaces/objectevents/#mouseup)

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

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseup:before`](/api/interfaces/objectevents/#mouseup:before)

***

### mousewheel

> **mousewheel**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousewheel`](/api/interfaces/objectevents/#mousewheel)

***

### moving

> **moving**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:131](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L131)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`moving`](/api/interfaces/objectevents/#moving)

***

### object:added

> **object:added**: `object`

Defined in: [src/EventTypeDefs.ts:250](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L250)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:added`](/api/interfaces/collectionevents/#object:added)

***

### object:removed

> **object:removed**: `object`

Defined in: [src/EventTypeDefs.ts:251](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L251)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:removed`](/api/interfaces/collectionevents/#object:removed)

***

### removed

> **removed**: `object`

Defined in: [src/EventTypeDefs.ts:306](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L306)

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`removed`](/api/interfaces/objectevents/#removed)

***

### resizing

> **resizing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:135](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L135)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`resizing`](/api/interfaces/objectevents/#resizing)

***

### rotating

> **rotating**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:133](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L133)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`rotating`](/api/interfaces/objectevents/#rotating)

***

### scaling

> **scaling**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:132](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L132)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`scaling`](/api/interfaces/objectevents/#scaling)

***

### selected

> **selected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object`

Defined in: [src/EventTypeDefs.ts:297](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L297)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`selected`](/api/interfaces/objectevents/#selected)

***

### skewing

> **skewing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:134](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L134)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`skewing`](/api/interfaces/objectevents/#skewing)
