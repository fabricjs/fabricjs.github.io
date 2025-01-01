---
editUrl: false
next: false
prev: false
title: "CanvasEvents"
---

Defined in: [src/EventTypeDefs.ts:323](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L323)

## Extends

- [`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`CanvasPointerEvents`](/api/type-aliases/canvaspointerevents/).`CanvasDnDEvents`.[`MiscEvents`](/api/interfaces/miscevents/).`CanvasModificationEvents`.`CanvasSelectionEvents`

## Properties

### after:render

> **after:render**: `object`

Defined in: [src/EventTypeDefs.ts:318](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L318)

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`after:render`](/api/interfaces/staticcanvasevents/#after:render)

***

### before:path:created

> **before:path:created**: `object`

Defined in: [src/EventTypeDefs.ts:331](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L331)

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)

***

### before:render

> **before:render**: `object`

Defined in: [src/EventTypeDefs.ts:317](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L317)

#### ctx

> **ctx**: `CanvasRenderingContext2D`

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`before:render`](/api/interfaces/staticcanvasevents/#before:render)

***

### before:selection:cleared

> **before:selection:cleared**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object`

Defined in: [src/EventTypeDefs.ts:241](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L241)

#### Type declaration

##### deselected

> **deselected**: [`FabricObject`](/api/classes/fabricobject/)[]

#### Inherited from

`CanvasSelectionEvents.before:selection:cleared`

***

### before:transform

> **before:transform**: [`TEvent`](/api/interfaces/tevent/) & `object`

Defined in: [src/EventTypeDefs.ts:142](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L142)

#### Type declaration

##### transform

> **transform**: [`Transform`](/api/type-aliases/transform/)

#### Inherited from

`CanvasModificationEvents.before:transform`

***

### canvas:cleared

> **canvas:cleared**: `never`

Defined in: [src/EventTypeDefs.ts:314](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L314)

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`canvas:cleared`](/api/interfaces/staticcanvasevents/#canvas:cleared)

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

### drag

> **drag**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:218](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L218)

#### Inherited from

`CanvasDnDEvents.drag`

***

### drag:enter

> **drag:enter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

Defined in: [src/EventTypeDefs.ts:229](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L229)

#### Inherited from

`CanvasDnDEvents.drag:enter`

***

### drag:leave

> **drag:leave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

Defined in: [src/EventTypeDefs.ts:230](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L230)

#### Inherited from

`CanvasDnDEvents.drag:leave`

***

### dragend

> **dragend**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:222](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L222)

#### Inherited from

`CanvasDnDEvents.dragend`

***

### dragenter

> **dragenter**: [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent`

Defined in: [src/EventTypeDefs.ts:220](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L220)

#### Inherited from

`CanvasDnDEvents.dragenter`

***

### dragleave

> **dragleave**: [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent`

Defined in: [src/EventTypeDefs.ts:221](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L221)

#### Inherited from

`CanvasDnDEvents.dragleave`

***

### dragover

> **dragover**: [`DragEventData`](/api/interfaces/drageventdata/)

Defined in: [src/EventTypeDefs.ts:219](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L219)

#### Inherited from

`CanvasDnDEvents.dragover`

***

### dragstart

> **dragstart**: `TEventWithTarget`\<`DragEvent`\>

Defined in: [src/EventTypeDefs.ts:217](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L217)

#### Inherited from

`CanvasDnDEvents.dragstart`

***

### drop

> **drop**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:224](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L224)

#### Inherited from

`CanvasDnDEvents.drop`

***

### drop:after

> **drop:after**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:225](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L225)

#### Inherited from

`CanvasDnDEvents.drop:after`

***

### drop:before

> **drop:before**: [`DropEventData`](/api/interfaces/dropeventdata/)

Defined in: [src/EventTypeDefs.ts:223](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L223)

#### Inherited from

`CanvasDnDEvents.drop:before`

***

### erasing:end

> **erasing:end**: `object`

Defined in: [src/EventTypeDefs.ts:336](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L336)

#### drawables

> **drawables**: `object`

##### drawables.backgroundImage?

> `optional` **backgroundImage**: [`FabricObject`](/api/classes/fabricobject/)

##### drawables.overlayImage?

> `optional` **overlayImage**: [`FabricObject`](/api/classes/fabricobject/)

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)

#### subTargets

> **subTargets**: [`FabricObject`](/api/classes/fabricobject/)[]

#### targets

> **targets**: [`FabricObject`](/api/classes/fabricobject/)[]

***

### erasing:start

> **erasing:start**: `never`

Defined in: [src/EventTypeDefs.ts:335](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L335)

***

### mouse:dblclick

> **mouse:dblclick**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`CanvasPointerEvents.mouse:dblclick`

***

### mouse:down

> **mouse:down**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`CanvasPointerEvents.mouse:down`

***

### mouse:down:before

> **mouse:down:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`CanvasPointerEvents.mouse:down:before`

***

### mouse:move

> **mouse:move**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`CanvasPointerEvents.mouse:move`

***

### mouse:move:before

> **mouse:move:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)

#### Inherited from

`CanvasPointerEvents.mouse:move:before`

***

### mouse:out

> **mouse:out**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `OutEvent`

#### Inherited from

`CanvasPointerEvents.mouse:out`

***

### mouse:over

> **mouse:over**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `InEvent`

#### Inherited from

`CanvasPointerEvents.mouse:over`

***

### mouse:up

> **mouse:up**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)

##### isClick

> **isClick**: `boolean`

#### Inherited from

`CanvasPointerEvents.mouse:up`

***

### mouse:up:before

> **mouse:up:before**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `object`

#### Type declaration

##### currentSubTargets

> **currentSubTargets**: [`FabricObject`](/api/classes/fabricobject/)[]

##### currentTarget?

> `optional` **currentTarget**: [`FabricObject`](/api/classes/fabricobject/)

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

Defined in: [src/EventTypeDefs.ts:250](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L250)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`object:added`](/api/interfaces/staticcanvasevents/#object:added)

***

### object:layout:after

> **object:layout:after**: [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object`

Defined in: [src/EventTypeDefs.ts:320](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L320)

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`object:layout:after`](/api/interfaces/staticcanvasevents/#object:layout:after)

***

### object:layout:before

> **object:layout:before**: [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object`

Defined in: [src/EventTypeDefs.ts:319](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L319)

#### Type declaration

##### target

> **target**: [`Group`](/api/classes/group/)

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`object:layout:before`](/api/interfaces/staticcanvasevents/#object:layout:before)

***

### object:modified

> **object:modified**: [`ModifiedEvent`](/api/interfaces/modifiedevent/)

Defined in: [src/EventTypeDefs.ts:152](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L152)

#### Inherited from

`CanvasModificationEvents.object:modified`

***

### object:modifyPath

> **object:modifyPath**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & `object` & [`ModifyPathEvent`](/api/interfaces/modifypathevent/)

Defined in: [src/EventTypeDefs.ts:149](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L149)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

`CanvasModificationEvents.object:modifyPath`

***

### object:modifyPoly

> **object:modifyPoly**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & `object`

Defined in: [src/EventTypeDefs.ts:148](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L148)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

`CanvasModificationEvents.object:modifyPoly`

***

### object:moving

> **object:moving**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & `object`

Defined in: [src/EventTypeDefs.ts:143](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L143)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

`CanvasModificationEvents.object:moving`

***

### object:removed

> **object:removed**: `object`

Defined in: [src/EventTypeDefs.ts:251](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L251)

#### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/).[`object:removed`](/api/interfaces/staticcanvasevents/#object:removed)

***

### object:resizing

> **object:resizing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & `object`

Defined in: [src/EventTypeDefs.ts:147](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L147)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

`CanvasModificationEvents.object:resizing`

***

### object:rotating

> **object:rotating**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & `object`

Defined in: [src/EventTypeDefs.ts:145](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L145)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

`CanvasModificationEvents.object:rotating`

***

### object:scaling

> **object:scaling**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & `object`

Defined in: [src/EventTypeDefs.ts:144](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L144)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

`CanvasModificationEvents.object:scaling`

***

### object:skewing

> **object:skewing**: [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & `object`

Defined in: [src/EventTypeDefs.ts:146](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L146)

#### Type declaration

##### target

> **target**: [`FabricObject`](/api/classes/fabricobject/)

#### Inherited from

`CanvasModificationEvents.object:skewing`

***

### path:created

> **path:created**: `object`

Defined in: [src/EventTypeDefs.ts:332](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L332)

#### path

> **path**: [`FabricObject`](/api/classes/fabricobject/)

***

### selection:cleared

> **selection:cleared**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object`

Defined in: [src/EventTypeDefs.ts:244](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L244)

#### Type declaration

##### deselected

> **deselected**: [`FabricObject`](/api/classes/fabricobject/)[]

#### Inherited from

`CanvasSelectionEvents.selection:cleared`

***

### selection:created

> **selection:created**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object`

Defined in: [src/EventTypeDefs.ts:234](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L234)

#### Type declaration

##### selected

> **selected**: [`FabricObject`](/api/classes/fabricobject/)[]

#### Inherited from

`CanvasSelectionEvents.selection:created`

***

### selection:updated

> **selection:updated**: `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object`

Defined in: [src/EventTypeDefs.ts:237](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L237)

#### Type declaration

##### deselected

> **deselected**: [`FabricObject`](/api/classes/fabricobject/)[]

##### selected

> **selected**: [`FabricObject`](/api/classes/fabricobject/)[]

#### Inherited from

`CanvasSelectionEvents.selection:updated`

***

### text:changed

> **text:changed**: `object`

Defined in: [src/EventTypeDefs.ts:350](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L350)

#### target

> **target**: [`IText`](/api/classes/itext/)

***

### text:editing:entered

> **text:editing:entered**: `object` & `Partial`\<[`TEvent`](/api/interfaces/tevent/)\>

Defined in: [src/EventTypeDefs.ts:351](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L351)

#### Type declaration

##### target

> **target**: [`IText`](/api/classes/itext/)

***

### text:editing:exited

> **text:editing:exited**: `object`

Defined in: [src/EventTypeDefs.ts:352](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L352)

#### target

> **target**: [`IText`](/api/classes/itext/)

***

### text:selection:changed

> **text:selection:changed**: `object`

Defined in: [src/EventTypeDefs.ts:349](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/EventTypeDefs.ts#L349)

#### target

> **target**: [`IText`](/api/classes/itext/)
