---
editUrl: false
next: false
prev: false
title: "GroupEvents"
---

## Extends

- [`ObjectEvents`](/api/interfaces/objectevents/).[`CollectionEvents`](/api/interfaces/collectionevents/)

## Properties

### added

> **added**: `object`

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`added`](/api/interfaces/objectevents/#added)

#### Defined in

[src/EventTypeDefs.ts:305](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L305)

***

### contextmenu

> **contextmenu**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`contextmenu`](/api/interfaces/objectevents/#contextmenu)

#### Defined in

[src/EventTypeDefs.ts:288](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L288)

***

### contextmenu:before

> **contextmenu:before**: `SimpleEventHandler`\<`Event`\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`contextmenu:before`](/api/interfaces/objectevents/#contextmenu:before)

#### Defined in

[src/EventTypeDefs.ts:287](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L287)

***

### deselected

> **deselected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`deselected`](/api/interfaces/objectevents/#deselected)

#### Defined in

[src/EventTypeDefs.ts:300](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L300)

***

### drag

> **drag**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drag`](/api/interfaces/objectevents/#drag)

#### Defined in

[src/EventTypeDefs.ts:218](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L218)

***

### dragend

> **dragend**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragend`](/api/interfaces/objectevents/#dragend)

#### Defined in

[src/EventTypeDefs.ts:222](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L222)

***

### dragenter

> **dragenter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragenter`](/api/interfaces/objectevents/#dragenter)

#### Defined in

[src/EventTypeDefs.ts:220](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L220)

***

### dragleave

> **dragleave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragleave`](/api/interfaces/objectevents/#dragleave)

#### Defined in

[src/EventTypeDefs.ts:221](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L221)

***

### dragover

> **dragover**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragover`](/api/interfaces/objectevents/#dragover)

#### Defined in

[src/EventTypeDefs.ts:219](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L219)

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`dragstart`](/api/interfaces/objectevents/#dragstart)

#### Defined in

[src/EventTypeDefs.ts:217](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L217)

***

### drop

> **drop**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drop`](/api/interfaces/objectevents/#drop)

#### Defined in

[src/EventTypeDefs.ts:224](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L224)

***

### drop:after

> **drop:after**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drop:after`](/api/interfaces/objectevents/#drop:after)

#### Defined in

[src/EventTypeDefs.ts:225](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L225)

***

### drop:before

> **drop:before**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`drop:before`](/api/interfaces/objectevents/#drop:before)

#### Defined in

[src/EventTypeDefs.ts:223](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L223)

***

### erasing:end

> **erasing:end**: `object`

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`erasing:end`](/api/interfaces/objectevents/#erasing:end)

#### Defined in

[src/EventTypeDefs.ts:309](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L309)

***

### layout:after

> **layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/)

#### Defined in

[src/shapes/Group.ts:51](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Group.ts#L51)

***

### layout:before

> **layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/)

#### Defined in

[src/shapes/Group.ts:50](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Group.ts#L50)

***

### modified

> **modified**: [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`modified`](/api/interfaces/objectevents/#modified)

#### Defined in

[src/EventTypeDefs.ts:138](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L138)

***

### modifyPath

> **modifyPath**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`ModifyPathEvent`](/api/interfaces/modifypathevent/)

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`modifyPath`](/api/interfaces/objectevents/#modifypath)

#### Defined in

[src/EventTypeDefs.ts:137](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L137)

***

### modifyPoly

> **modifyPoly**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`modifyPoly`](/api/interfaces/objectevents/#modifypoly)

#### Defined in

[src/EventTypeDefs.ts:136](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L136)

***

### mousedblclick

> **mousedblclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousedblclick`](/api/interfaces/objectevents/#mousedblclick)

***

### mousedown

> **mousedown**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousedown`](/api/interfaces/objectevents/#mousedown)

***

### mousedown:before

> **mousedown:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousedown:before`](/api/interfaces/objectevents/#mousedown:before)

***

### mousemove

> **mousemove**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousemove`](/api/interfaces/objectevents/#mousemove)

***

### mousemove:before

> **mousemove:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousemove:before`](/api/interfaces/objectevents/#mousemove:before)

***

### mouseout

> **mouseout**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseout`](/api/interfaces/objectevents/#mouseout)

***

### mouseover

> **mouseover**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent`

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseover`](/api/interfaces/objectevents/#mouseover)

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

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseup`](/api/interfaces/objectevents/#mouseup)

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

[`ObjectEvents`](/api/interfaces/objectevents/).[`mouseup:before`](/api/interfaces/objectevents/#mouseup:before)

***

### mousewheel

> **mousewheel**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`mousewheel`](/api/interfaces/objectevents/#mousewheel)

***

### moving

> **moving**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`moving`](/api/interfaces/objectevents/#moving)

#### Defined in

[src/EventTypeDefs.ts:131](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L131)

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

### object:removed

> **object:removed**: `object`

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`CollectionEvents`](/api/interfaces/collectionevents/).[`object:removed`](/api/interfaces/collectionevents/#object:removed)

#### Defined in

[src/EventTypeDefs.ts:251](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L251)

***

### removed

> **removed**: `object`

#### target

> **target**: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`removed`](/api/interfaces/objectevents/#removed)

#### Defined in

[src/EventTypeDefs.ts:306](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L306)

***

### resizing

> **resizing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`resizing`](/api/interfaces/objectevents/#resizing)

#### Defined in

[src/EventTypeDefs.ts:135](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L135)

***

### rotating

> **rotating**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`rotating`](/api/interfaces/objectevents/#rotating)

#### Defined in

[src/EventTypeDefs.ts:133](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L133)

***

### scaling

> **scaling**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`scaling`](/api/interfaces/objectevents/#scaling)

#### Defined in

[src/EventTypeDefs.ts:132](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L132)

***

### selected

> **selected**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`selected`](/api/interfaces/objectevents/#selected)

#### Defined in

[src/EventTypeDefs.ts:297](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L297)

***

### skewing

> **skewing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

[`ObjectEvents`](/api/interfaces/objectevents/).[`skewing`](/api/interfaces/objectevents/#skewing)

#### Defined in

[src/EventTypeDefs.ts:134](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L134)
