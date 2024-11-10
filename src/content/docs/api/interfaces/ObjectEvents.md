---
editUrl: false
next: false
prev: false
title: "ObjectEvents"
---

## Extends

- [`ObjectPointerEvents`](/api/type-aliases/objectpointerevents/).`DnDEvents`.[`MiscEvents`](/api/interfaces/miscevents/).[`ObjectModificationEvents`](/api/type-aliases/objectmodificationevents/)

## Extended by

- [`GroupEvents`](/api/interfaces/groupevents/)

## Properties

### added

> **added**: `object`

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Defined in

[src/EventTypeDefs.ts:305](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L305)

***

### contextmenu

> **contextmenu**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`MiscEvents`](/api/interfaces/miscevents/).[`contextmenu`](/api/interfaces/miscevents/#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:288](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L288)

***

### contextmenu:before

> **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`MiscEvents`](/api/interfaces/miscevents/).[`contextmenu:before`](/api/interfaces/miscevents/#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:287](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L287)

***

### deselected

> **deselected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:300](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L300)

***

### drag

> **drag**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

`DnDEvents.drag`

#### Defined in

[src/EventTypeDefs.ts:218](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L218)

***

### dragend

> **dragend**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

`DnDEvents.dragend`

#### Defined in

[src/EventTypeDefs.ts:222](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L222)

***

### dragenter

> **dragenter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

#### Inherited from

`DnDEvents.dragenter`

#### Defined in

[src/EventTypeDefs.ts:220](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L220)

***

### dragleave

> **dragleave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

#### Inherited from

`DnDEvents.dragleave`

#### Defined in

[src/EventTypeDefs.ts:221](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L221)

***

### dragover

> **dragover**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

`DnDEvents.dragover`

#### Defined in

[src/EventTypeDefs.ts:219](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L219)

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

`DnDEvents.dragstart`

#### Defined in

[src/EventTypeDefs.ts:217](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L217)

***

### drop

> **drop**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

`DnDEvents.drop`

#### Defined in

[src/EventTypeDefs.ts:224](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L224)

***

### drop:after

> **drop:after**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

`DnDEvents.drop:after`

#### Defined in

[src/EventTypeDefs.ts:225](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L225)

***

### drop:before

> **drop:before**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

`DnDEvents.drop:before`

#### Defined in

[src/EventTypeDefs.ts:223](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L223)

***

### erasing:end

> **erasing:end**: `object`

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:309](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L309)

***

### modified

> **modified**: [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.modified`

#### Defined in

[src/EventTypeDefs.ts:138](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L138)

***

### modifyPath

> **modifyPath**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`ModifyPathEvent`](/api/interfaces/modifypathevent/)

#### Inherited from

`ObjectModificationEvents.modifyPath`

#### Defined in

[src/EventTypeDefs.ts:137](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L137)

***

### modifyPoly

> **modifyPoly**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.modifyPoly`

#### Defined in

[src/EventTypeDefs.ts:136](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L136)

***

### mousedblclick

> **mousedblclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectPointerEvents.mousedblclick`

***

### mousedown

> **mousedown**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

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

### mouseup

> **mouseup**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### isClick

> **isClick**: `boolean`

#### Inherited from

`ObjectPointerEvents.mouseup`

***

### mouseup:before

> **mouseup:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

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

> **moving**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.moving`

#### Defined in

[src/EventTypeDefs.ts:131](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L131)

***

### removed

> **removed**: `object`

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Defined in

[src/EventTypeDefs.ts:306](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L306)

***

### resizing

> **resizing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.resizing`

#### Defined in

[src/EventTypeDefs.ts:135](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L135)

***

### rotating

> **rotating**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.rotating`

#### Defined in

[src/EventTypeDefs.ts:133](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L133)

***

### scaling

> **scaling**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.scaling`

#### Defined in

[src/EventTypeDefs.ts:132](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L132)

***

### selected

> **selected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:297](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L297)

***

### skewing

> **skewing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`ObjectModificationEvents.skewing`

#### Defined in

[src/EventTypeDefs.ts:134](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L134)
