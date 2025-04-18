---
editUrl: false
next: false
prev: false
title: "ObjectEvents"
---

Defined in: [src/EventTypeDefs.ts:311](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L311)

## Extends

- [`ObjectPointerEvents`](/api/type-aliases/objectpointerevents/).`DnDEvents`.[`MiscEvents`](/api/interfaces/miscevents/).[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/)

## Extended by

- [`GroupEvents`](/api/interfaces/groupevents/)

## Properties

### added

> **added**: `object`

Defined in: [src/EventTypeDefs.ts:325](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L325)

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

***

### contextmenu

> **contextmenu**: `SimpleEventHandler`\<`Event`\>

Defined in: [src/EventTypeDefs.ts:308](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L308)

#### Inherited from

[`MiscEvents`](/api/interfaces/miscevents/).[`contextmenu`](/api/interfaces/miscevents/#contextmenu)

***

### contextmenu:before

> **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

Defined in: [src/EventTypeDefs.ts:307](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L307)

#### Inherited from

[`MiscEvents`](/api/interfaces/miscevents/).[`contextmenu:before`](/api/interfaces/miscevents/#contextmenubefore)

***

### deselected

> **deselected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

Defined in: [src/EventTypeDefs.ts:320](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L320)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

***

### drag

> **drag**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:218](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L218)

#### Inherited from

`DnDEvents.drag`

***

### dragend

> **dragend**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:222](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L222)

#### Inherited from

`DnDEvents.dragend`

***

### dragenter

> **dragenter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

Defined in: [src/EventTypeDefs.ts:220](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L220)

#### Inherited from

`DnDEvents.dragenter`

***

### dragleave

> **dragleave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

Defined in: [src/EventTypeDefs.ts:221](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L221)

#### Inherited from

`DnDEvents.dragleave`

***

### dragover

> **dragover**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:219](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L219)

#### Inherited from

`DnDEvents.dragover`

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

Defined in: [src/EventTypeDefs.ts:217](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L217)

#### Inherited from

`DnDEvents.dragstart`

***

### drop

> **drop**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:224](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L224)

#### Inherited from

`DnDEvents.drop`

***

### drop:after

> **drop:after**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:225](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L225)

#### Inherited from

`DnDEvents.drop:after`

***

### drop:before

> **drop:before**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:223](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L223)

#### Inherited from

`DnDEvents.drop:before`

***

### erasing:end

> **erasing:end**: `object`

Defined in: [src/EventTypeDefs.ts:329](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L329)

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)

***

### modified

> **modified**: [`ModifiedEvent`](/api/interfaces/modifiedevent/)

Defined in: [src/EventTypeDefs.ts:138](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L138)

#### Inherited from

[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/).[`modified`](/api/type-aliases/objectmodificationevents/#modified)

***

### modifyPath

> **modifyPath**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`ModifyPathEvent`](/api/interfaces/modifypathevent/)

Defined in: [src/EventTypeDefs.ts:137](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L137)

#### Inherited from

[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/).[`modifyPath`](/api/type-aliases/objectmodificationevents/#modifypath)

***

### modifyPoly

> **modifyPoly**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:136](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L136)

#### Inherited from

[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/).[`modifyPoly`](/api/type-aliases/objectmodificationevents/#modifypoly)

***

### mousedblclick

> **mousedblclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousedblclick`

***

### mousedown

> **mousedown**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### alreadySelected

> **alreadySelected**: `boolean`

Indicates if the target or current target where already selected
before the cycle of mouse down -> mouse up started

#### Inherited from

`ObjectPointerEvents.mousedown`

***

### mousedown:before

> **mousedown:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousedown:before`

***

### mousemove

> **mousemove**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousemove`

***

### mousemove:before

> **mousemove:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousemove:before`

***

### mouseout

> **mouseout**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent`

#### Inherited from

`ObjectPointerEvents.mouseout`

***

### mouseover

> **mouseover**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent`

#### Inherited from

`ObjectPointerEvents.mouseover`

***

### mousetripleclick

> **mousetripleclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousetripleclick`

***

### mouseup

> **mouseup**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), `ObjectEvents`\>[]

The subtargets at the moment of mouseup that could be different from the
target at the moment of mouse down in case of a drag action for example

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), `ObjectEvents`\>

The targets at the moment of mouseup that could be different from the
target at the moment of mouse down in case of a drag action for example

##### isClick

> **isClick**: `boolean`

#### Inherited from

`ObjectPointerEvents.mouseup`

***

### mouseup:before

> **mouseup:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), `ObjectEvents`\>[]

The subtargets at the moment of mouseup that could be different from the
target at the moment of mouse down in case of a drag action for example

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), `ObjectEvents`\>

The targets at the moment of mouseup that could be different from the
target at the moment of mouse down in case of a drag action for example

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

Defined in: [src/EventTypeDefs.ts:131](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L131)

#### Inherited from

[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/).[`moving`](/api/type-aliases/objectmodificationevents/#moving)

***

### removed

> **removed**: `object`

Defined in: [src/EventTypeDefs.ts:326](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L326)

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

***

### resizing

> **resizing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:135](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L135)

#### Inherited from

[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/).[`resizing`](/api/type-aliases/objectmodificationevents/#resizing)

***

### rotating

> **rotating**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:133](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L133)

#### Inherited from

[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/).[`rotating`](/api/type-aliases/objectmodificationevents/#rotating)

***

### scaling

> **scaling**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:132](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L132)

#### Inherited from

[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/).[`scaling`](/api/type-aliases/objectmodificationevents/#scaling)

***

### selected

> **selected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

Defined in: [src/EventTypeDefs.ts:317](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L317)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

***

### skewing

> **skewing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)

Defined in: [src/EventTypeDefs.ts:134](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/EventTypeDefs.ts#L134)

#### Inherited from

[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/).[`skewing`](/api/type-aliases/objectmodificationevents/#skewing)
