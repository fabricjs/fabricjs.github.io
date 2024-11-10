---
editUrl: false
next: false
prev: false
title: "CanvasEvents"
---

## Extends

- [`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`CanvasPointerEvents`](/api/type-aliases/canvaspointerevents/).`CanvasDnDEvents`.[`MiscEvents`](/api/interfaces/miscevents/).`CanvasModificationEvents`.`CanvasSelectionEvents`

## Properties

### after:render

> **after:render**: `object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`after:render`](/api/interfaces/staticcanvasevents/#after:render)

#### Defined in

[src/EventTypeDefs.ts:318](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L318)

***

### before:path:created

> **before:path:created**: `object`

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:331](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L331)

***

### before:render

> **before:render**: `object`

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`before:render`](/api/interfaces/staticcanvasevents/#before:render)

#### Defined in

[src/EventTypeDefs.ts:317](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L317)

***

### before:selection:cleared

> **before:selection:cleared**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### deselected

> **deselected**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

`CanvasSelectionEvents.before:selection:cleared`

#### Defined in

[src/EventTypeDefs.ts:241](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L241)

***

### before:transform

> **before:transform**: [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### transform

> **transform**: [`Transform`](/api/type-aliases/transform/)

#### Inherited from

`CanvasModificationEvents.before:transform`

#### Defined in

[src/EventTypeDefs.ts:142](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L142)

***

### canvas:cleared

> **canvas:cleared**: `never`

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`canvas:cleared`](/api/interfaces/staticcanvasevents/#canvas:cleared)

#### Defined in

[src/EventTypeDefs.ts:314](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L314)

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

### drag

> **drag**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

`CanvasDnDEvents.drag`

#### Defined in

[src/EventTypeDefs.ts:218](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L218)

***

### drag:enter

> **drag:enter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

#### Inherited from

`CanvasDnDEvents.drag:enter`

#### Defined in

[src/EventTypeDefs.ts:229](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L229)

***

### drag:leave

> **drag:leave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

#### Inherited from

`CanvasDnDEvents.drag:leave`

#### Defined in

[src/EventTypeDefs.ts:230](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L230)

***

### dragend

> **dragend**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

`CanvasDnDEvents.dragend`

#### Defined in

[src/EventTypeDefs.ts:222](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L222)

***

### dragenter

> **dragenter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

#### Inherited from

`CanvasDnDEvents.dragenter`

#### Defined in

[src/EventTypeDefs.ts:220](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L220)

***

### dragleave

> **dragleave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

#### Inherited from

`CanvasDnDEvents.dragleave`

#### Defined in

[src/EventTypeDefs.ts:221](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L221)

***

### dragover

> **dragover**: [`DragEventData`](/api/interfaces/drageventdata/)

#### Inherited from

`CanvasDnDEvents.dragover`

#### Defined in

[src/EventTypeDefs.ts:219](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L219)

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

#### Inherited from

`CanvasDnDEvents.dragstart`

#### Defined in

[src/EventTypeDefs.ts:217](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L217)

***

### drop

> **drop**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

`CanvasDnDEvents.drop`

#### Defined in

[src/EventTypeDefs.ts:224](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L224)

***

### drop:after

> **drop:after**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

`CanvasDnDEvents.drop:after`

#### Defined in

[src/EventTypeDefs.ts:225](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L225)

***

### drop:before

> **drop:before**: [`DropEventData`](/api/interfaces/dropeventdata/)

#### Inherited from

`CanvasDnDEvents.drop:before`

#### Defined in

[src/EventTypeDefs.ts:223](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L223)

***

### erasing:end

> **erasing:end**: `object`

#### drawables

> **drawables**: `object`

#### drawables.backgroundImage?

> `optional` **backgroundImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### drawables.overlayImage?

> `optional` **overlayImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### subTargets

> **subTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### targets

> **targets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Defined in

[src/EventTypeDefs.ts:336](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L336)

***

### erasing:start

> **erasing:start**: `never`

#### Defined in

[src/EventTypeDefs.ts:335](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L335)

***

### mouse:dblclick

> **mouse:dblclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`CanvasPointerEvents.mouse:dblclick`

***

### mouse:down

> **mouse:down**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`CanvasPointerEvents.mouse:down`

***

### mouse:down:before

> **mouse:down:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`CanvasPointerEvents.mouse:down:before`

***

### mouse:move

> **mouse:move**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`CanvasPointerEvents.mouse:move`

***

### mouse:move:before

> **mouse:move:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`CanvasPointerEvents.mouse:move:before`

***

### mouse:out

> **mouse:out**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent`

#### Inherited from

`CanvasPointerEvents.mouse:out`

***

### mouse:over

> **mouse:over**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent`

#### Inherited from

`CanvasPointerEvents.mouse:over`

***

### mouse:up

> **mouse:up**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### isClick

> **isClick**: `boolean`

#### Inherited from

`CanvasPointerEvents.mouse:up`

***

### mouse:up:before

> **mouse:up:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### isClick

> **isClick**: `boolean`

#### Inherited from

`CanvasPointerEvents.mouse:up:before`

***

### mouse:wheel

> **mouse:wheel**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\>

#### Inherited from

`CanvasPointerEvents.mouse:wheel`

***

### object:added

> **object:added**: `object`

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`object:added`](/api/interfaces/staticcanvasevents/#object:added)

#### Defined in

[src/EventTypeDefs.ts:250](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L250)

***

### object:layout:after

> **object:layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object`

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`object:layout:after`](/api/interfaces/staticcanvasevents/#object:layout:after)

#### Defined in

[src/EventTypeDefs.ts:320](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L320)

***

### object:layout:before

> **object:layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object`

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`object:layout:before`](/api/interfaces/staticcanvasevents/#object:layout:before)

#### Defined in

[src/EventTypeDefs.ts:319](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L319)

***

### object:modified

> **object:modified**: [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Inherited from

`CanvasModificationEvents.object:modified`

#### Defined in

[src/EventTypeDefs.ts:152](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L152)

***

### object:modifyPath

> **object:modifyPath**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` & [`ModifyPathEvent`](/api/interfaces/modifypathevent/)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`CanvasModificationEvents.object:modifyPath`

#### Defined in

[src/EventTypeDefs.ts:149](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L149)

***

### object:modifyPoly

> **object:modifyPoly**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`CanvasModificationEvents.object:modifyPoly`

#### Defined in

[src/EventTypeDefs.ts:148](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L148)

***

### object:moving

> **object:moving**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`CanvasModificationEvents.object:moving`

#### Defined in

[src/EventTypeDefs.ts:143](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L143)

***

### object:removed

> **object:removed**: `object`

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`object:removed`](/api/interfaces/staticcanvasevents/#object:removed)

#### Defined in

[src/EventTypeDefs.ts:251](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L251)

***

### object:resizing

> **object:resizing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`CanvasModificationEvents.object:resizing`

#### Defined in

[src/EventTypeDefs.ts:147](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L147)

***

### object:rotating

> **object:rotating**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`CanvasModificationEvents.object:rotating`

#### Defined in

[src/EventTypeDefs.ts:145](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L145)

***

### object:scaling

> **object:scaling**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`CanvasModificationEvents.object:scaling`

#### Defined in

[src/EventTypeDefs.ts:144](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L144)

***

### object:skewing

> **object:skewing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object`

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`CanvasModificationEvents.object:skewing`

#### Defined in

[src/EventTypeDefs.ts:146](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L146)

***

### path:created

> **path:created**: `object`

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Defined in

[src/EventTypeDefs.ts:332](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L332)

***

### selection:cleared

> **selection:cleared**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### deselected

> **deselected**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

`CanvasSelectionEvents.selection:cleared`

#### Defined in

[src/EventTypeDefs.ts:244](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L244)

***

### selection:created

> **selection:created**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### selected

> **selected**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

`CanvasSelectionEvents.selection:created`

#### Defined in

[src/EventTypeDefs.ts:234](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L234)

***

### selection:updated

> **selection:updated**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

#### Type declaration

##### deselected

> **deselected**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

##### selected

> **selected**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

`CanvasSelectionEvents.selection:updated`

#### Defined in

[src/EventTypeDefs.ts:237](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L237)

***

### text:changed

> **text:changed**: `object`

#### target

> **target**: [`IText`](/api/classes/itext/)\<`Partial`\<[`ITextProps`](/api/interfaces/itextprops/)\>, [`SerializedITextProps`](/api/interfaces/serializeditextprops/), [`ITextEvents`](/api/type-aliases/itextevents/)\>

#### Defined in

[src/EventTypeDefs.ts:350](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L350)

***

### text:editing:entered

> **text:editing:entered**: `object` & `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\>

#### Type declaration

##### target

> **target**: [`IText`](/api/classes/itext/)\<`Partial`\<[`ITextProps`](/api/interfaces/itextprops/)\>, [`SerializedITextProps`](/api/interfaces/serializeditextprops/), [`ITextEvents`](/api/type-aliases/itextevents/)\>

#### Defined in

[src/EventTypeDefs.ts:351](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L351)

***

### text:editing:exited

> **text:editing:exited**: `object`

#### target

> **target**: [`IText`](/api/classes/itext/)\<`Partial`\<[`ITextProps`](/api/interfaces/itextprops/)\>, [`SerializedITextProps`](/api/interfaces/serializeditextprops/), [`ITextEvents`](/api/type-aliases/itextevents/)\>

#### Defined in

[src/EventTypeDefs.ts:352](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L352)

***

### text:selection:changed

> **text:selection:changed**: `object`

#### target

> **target**: [`IText`](/api/classes/itext/)\<`Partial`\<[`ITextProps`](/api/interfaces/itextprops/)\>, [`SerializedITextProps`](/api/interfaces/serializeditextprops/), [`ITextEvents`](/api/type-aliases/itextevents/)\>

#### Defined in

[src/EventTypeDefs.ts:349](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/EventTypeDefs.ts#L349)
