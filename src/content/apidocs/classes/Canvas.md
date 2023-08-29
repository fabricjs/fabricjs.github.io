# Class: Canvas

## Hierarchy

- `SelectableCanvas`

  ↳ **`Canvas`**

## Implements

- [`CanvasOptions`](../interfaces/CanvasOptions.md)

## Table of contents

### Constructors

- [constructor](Canvas.md#constructor)

### Properties

- [\_\_cleanupTask](Canvas.md#__cleanuptask)
- [\_absolutePointer](Canvas.md#_absolutepointer)
- [\_activeObject](Canvas.md#_activeobject)
- [\_activeSelection](Canvas.md#_activeselection)
- [\_currentTransform](Canvas.md#_currenttransform)
- [\_dragSource](Canvas.md#_dragsource)
- [\_draggedoverTarget](Canvas.md#_draggedovertarget)
- [\_dropTarget](Canvas.md#_droptarget)
- [\_groupSelector](Canvas.md#_groupselector)
- [\_hoveredTarget](Canvas.md#_hoveredtarget)
- [\_hoveredTargets](Canvas.md#_hoveredtargets)
- [\_isClick](Canvas.md#_isclick)
- [\_isCurrentlyDrawing](Canvas.md#_iscurrentlydrawing)
- [\_objects](Canvas.md#_objects)
- [\_objectsToRender](Canvas.md#_objectstorender)
- [\_offset](Canvas.md#_offset)
- [\_pointer](Canvas.md#_pointer)
- [\_target](Canvas.md#_target)
- [\_willAddMouseDown](Canvas.md#_willaddmousedown)
- [allowTouchScrolling](Canvas.md#allowtouchscrolling)
- [altActionKey](Canvas.md#altactionkey)
- [altSelectionKey](Canvas.md#altselectionkey)
- [backgroundColor](Canvas.md#backgroundcolor)
- [backgroundImage](Canvas.md#backgroundimage)
- [backgroundVpt](Canvas.md#backgroundvpt)
- [centeredKey](Canvas.md#centeredkey)
- [centeredRotation](Canvas.md#centeredrotation)
- [centeredScaling](Canvas.md#centeredscaling)
- [clipPath](Canvas.md#clippath)
- [containerClass](Canvas.md#containerclass)
- [contextTopDirty](Canvas.md#contexttopdirty)
- [controlsAboveOverlay](Canvas.md#controlsaboveoverlay)
- [currentSubTargets](Canvas.md#currentsubtargets)
- [currentTarget](Canvas.md#currenttarget)
- [defaultCursor](Canvas.md#defaultcursor)
- [destroyed](Canvas.md#destroyed)
- [disposed](Canvas.md#disposed)
- [elements](Canvas.md#elements)
- [enablePointerEvents](Canvas.md#enablepointerevents)
- [enableRetinaScaling](Canvas.md#enableretinascaling)
- [fireMiddleClick](Canvas.md#firemiddleclick)
- [fireRightClick](Canvas.md#firerightclick)
- [freeDrawingBrush](Canvas.md#freedrawingbrush)
- [freeDrawingCursor](Canvas.md#freedrawingcursor)
- [hasLostContext](Canvas.md#haslostcontext)
- [height](Canvas.md#height)
- [hoverCursor](Canvas.md#hovercursor)
- [imageSmoothingEnabled](Canvas.md#imagesmoothingenabled)
- [includeDefaultValues](Canvas.md#includedefaultvalues)
- [isDrawingMode](Canvas.md#isdrawingmode)
- [mainTouchId](Canvas.md#maintouchid)
- [moveCursor](Canvas.md#movecursor)
- [nextRenderHandle](Canvas.md#nextrenderhandle)
- [notAllowedCursor](Canvas.md#notallowedcursor)
- [overlayColor](Canvas.md#overlaycolor)
- [overlayImage](Canvas.md#overlayimage)
- [overlayVpt](Canvas.md#overlayvpt)
- [perPixelTargetFind](Canvas.md#perpixeltargetfind)
- [preserveObjectStacking](Canvas.md#preserveobjectstacking)
- [renderOnAddRemove](Canvas.md#renderonaddremove)
- [selection](Canvas.md#selection)
- [selectionBorderColor](Canvas.md#selectionbordercolor)
- [selectionColor](Canvas.md#selectioncolor)
- [selectionDashArray](Canvas.md#selectiondasharray)
- [selectionFullyContained](Canvas.md#selectionfullycontained)
- [selectionKey](Canvas.md#selectionkey)
- [selectionLineWidth](Canvas.md#selectionlinewidth)
- [skipOffscreen](Canvas.md#skipoffscreen)
- [skipTargetFind](Canvas.md#skiptargetfind)
- [stopContextMenu](Canvas.md#stopcontextmenu)
- [svgViewportTransformation](Canvas.md#svgviewporttransformation)
- [targetFindTolerance](Canvas.md#targetfindtolerance)
- [targets](Canvas.md#targets)
- [textEditingManager](Canvas.md#texteditingmanager)
- [uniScaleKey](Canvas.md#uniscalekey)
- [uniformScaling](Canvas.md#uniformscaling)
- [viewportTransform](Canvas.md#viewporttransform)
- [vptCoords](Canvas.md#vptcoords)
- [width](Canvas.md#width)
- [ownDefaults](Canvas.md#owndefaults)

### Accessors

- [contextContainer](Canvas.md#contextcontainer)
- [contextTop](Canvas.md#contexttop)
- [lowerCanvasEl](Canvas.md#lowercanvasel)
- [upperCanvasEl](Canvas.md#uppercanvasel)
- [wrapperEl](Canvas.md#wrapperel)

### Methods

- [\_\_onMouseDown](Canvas.md#__onmousedown)
- [\_\_onMouseMove](Canvas.md#__onmousemove)
- [\_\_onMouseUp](Canvas.md#__onmouseup)
- [\_\_onMouseWheel](Canvas.md#__onmousewheel)
- [\_\_serializeBgOverlay](Canvas.md#__serializebgoverlay)
- [\_basicEventHandler](Canvas.md#_basiceventhandler)
- [\_beforeTransform](Canvas.md#_beforetransform)
- [\_cacheTransformEventData](Canvas.md#_cachetransformeventdata)
- [\_centerObject](Canvas.md#_centerobject)
- [\_checkTarget](Canvas.md#_checktarget)
- [\_chooseObjectsToRender](Canvas.md#_chooseobjectstorender)
- [\_createCacheCanvas](Canvas.md#_createcachecanvas)
- [\_discardActiveObject](Canvas.md#_discardactiveobject)
- [\_drawSelection](Canvas.md#_drawselection)
- [\_finalizeCurrentTransform](Canvas.md#_finalizecurrenttransform)
- [\_fireEnterLeaveEvents](Canvas.md#_fireenterleaveevents)
- [\_fireOverOutEvents](Canvas.md#_fireoveroutevents)
- [\_fireSelectionEvents](Canvas.md#_fireselectionevents)
- [\_getEventPrefix](Canvas.md#_geteventprefix)
- [\_getOriginFromCorner](Canvas.md#_getoriginfromcorner)
- [\_handleEvent](Canvas.md#_handleevent)
- [\_isMainEvent](Canvas.md#_ismainevent)
- [\_isRetinaScaling](Canvas.md#_isretinascaling)
- [\_isSelectionKeyPressed](Canvas.md#_isselectionkeypressed)
- [\_normalizePointer](Canvas.md#_normalizepointer)
- [\_onContextMenu](Canvas.md#_oncontextmenu)
- [\_onDoubleClick](Canvas.md#_ondoubleclick)
- [\_onDragEnd](Canvas.md#_ondragend)
- [\_onDragEnter](Canvas.md#_ondragenter)
- [\_onDragLeave](Canvas.md#_ondragleave)
- [\_onDragOver](Canvas.md#_ondragover)
- [\_onDragProgress](Canvas.md#_ondragprogress)
- [\_onDragStart](Canvas.md#_ondragstart)
- [\_onDrop](Canvas.md#_ondrop)
- [\_onMouseDown](Canvas.md#_onmousedown)
- [\_onMouseDownInDrawingMode](Canvas.md#_onmousedownindrawingmode)
- [\_onMouseEnter](Canvas.md#_onmouseenter)
- [\_onMouseMove](Canvas.md#_onmousemove)
- [\_onMouseMoveInDrawingMode](Canvas.md#_onmousemoveindrawingmode)
- [\_onMouseOut](Canvas.md#_onmouseout)
- [\_onMouseUp](Canvas.md#_onmouseup)
- [\_onMouseUpInDrawingMode](Canvas.md#_onmouseupindrawingmode)
- [\_onMouseWheel](Canvas.md#_onmousewheel)
- [\_onObjectAdded](Canvas.md#_onobjectadded)
- [\_onObjectRemoved](Canvas.md#_onobjectremoved)
- [\_onResize](Canvas.md#_onresize)
- [\_onStackOrderChanged](Canvas.md#_onstackorderchanged)
- [\_onTouchEnd](Canvas.md#_ontouchend)
- [\_onTouchStart](Canvas.md#_ontouchstart)
- [\_performTransformAction](Canvas.md#_performtransformaction)
- [\_realizeGroupTransformOnObject](Canvas.md#_realizegrouptransformonobject)
- [\_renderBackground](Canvas.md#_renderbackground)
- [\_renderBackgroundOrOverlay](Canvas.md#_renderbackgroundoroverlay)
- [\_renderDragEffects](Canvas.md#_renderdrageffects)
- [\_renderObjects](Canvas.md#_renderobjects)
- [\_renderOverlay](Canvas.md#_renderoverlay)
- [\_resetTransformEventData](Canvas.md#_resettransformeventdata)
- [\_searchPossibleTargets](Canvas.md#_searchpossibletargets)
- [\_set](Canvas.md#_set)
- [\_setActiveObject](Canvas.md#_setactiveobject)
- [\_setCursorFromEvent](Canvas.md#_setcursorfromevent)
- [\_setDimensionsImpl](Canvas.md#_setdimensionsimpl)
- [\_setObject](Canvas.md#_setobject)
- [\_setOptions](Canvas.md#_setoptions)
- [\_setSVGBgOverlayColor](Canvas.md#_setsvgbgoverlaycolor)
- [\_setSVGBgOverlayImage](Canvas.md#_setsvgbgoverlayimage)
- [\_setSVGHeader](Canvas.md#_setsvgheader)
- [\_setSVGObject](Canvas.md#_setsvgobject)
- [\_setSVGObjects](Canvas.md#_setsvgobjects)
- [\_setSVGPreamble](Canvas.md#_setsvgpreamble)
- [\_setupCurrentTransform](Canvas.md#_setupcurrenttransform)
- [\_shouldClearSelection](Canvas.md#_shouldclearselection)
- [\_shouldRender](Canvas.md#_shouldrender)
- [\_toObject](Canvas.md#_toobject)
- [\_toObjectMethod](Canvas.md#_toobjectmethod)
- [\_transformObject](Canvas.md#_transformobject)
- [absolutePan](Canvas.md#absolutepan)
- [add](Canvas.md#add)
- [addOrRemove](Canvas.md#addorremove)
- [bringObjectForward](Canvas.md#bringobjectforward)
- [bringObjectToFront](Canvas.md#bringobjecttofront)
- [calcOffset](Canvas.md#calcoffset)
- [calcViewportBoundaries](Canvas.md#calcviewportboundaries)
- [cancelRequestedRender](Canvas.md#cancelrequestedrender)
- [centerObject](Canvas.md#centerobject)
- [centerObjectH](Canvas.md#centerobjecth)
- [centerObjectV](Canvas.md#centerobjectv)
- [clear](Canvas.md#clear)
- [clearContext](Canvas.md#clearcontext)
- [clone](Canvas.md#clone)
- [cloneWithoutData](Canvas.md#clonewithoutdata)
- [collectObjects](Canvas.md#collectobjects)
- [complexity](Canvas.md#complexity)
- [contains](Canvas.md#contains)
- [createSVGClipPathMarkup](Canvas.md#createsvgclippathmarkup)
- [createSVGFontFacesMarkup](Canvas.md#createsvgfontfacesmarkup)
- [createSVGRefElementsMarkup](Canvas.md#createsvgrefelementsmarkup)
- [destroy](Canvas.md#destroy)
- [discardActiveObject](Canvas.md#discardactiveobject)
- [dispose](Canvas.md#dispose)
- [drawClipPathOnCanvas](Canvas.md#drawclippathoncanvas)
- [drawControls](Canvas.md#drawcontrols)
- [endCurrentTransform](Canvas.md#endcurrenttransform)
- [findDragTargets](Canvas.md#finddragtargets)
- [findNewLowerIndex](Canvas.md#findnewlowerindex)
- [findNewUpperIndex](Canvas.md#findnewupperindex)
- [findTarget](Canvas.md#findtarget)
- [fire](Canvas.md#fire)
- [fireSyntheticInOutEvents](Canvas.md#firesyntheticinoutevents)
- [forEachObject](Canvas.md#foreachobject)
- [get](Canvas.md#get)
- [getActiveObject](Canvas.md#getactiveobject)
- [getActiveObjects](Canvas.md#getactiveobjects)
- [getActiveSelection](Canvas.md#getactiveselection)
- [getCenter](Canvas.md#getcenter)
- [getCenterPoint](Canvas.md#getcenterpoint)
- [getContext](Canvas.md#getcontext)
- [getElement](Canvas.md#getelement)
- [getHeight](Canvas.md#getheight)
- [getObjects](Canvas.md#getobjects)
- [getPointer](Canvas.md#getpointer)
- [getPointerId](Canvas.md#getpointerid)
- [getRetinaScaling](Canvas.md#getretinascaling)
- [getSelectionContext](Canvas.md#getselectioncontext)
- [getSelectionElement](Canvas.md#getselectionelement)
- [getTopContext](Canvas.md#gettopcontext)
- [getVpCenter](Canvas.md#getvpcenter)
- [getWidth](Canvas.md#getwidth)
- [getZoom](Canvas.md#getzoom)
- [handleMultiSelection](Canvas.md#handlemultiselection)
- [handleSelection](Canvas.md#handleselection)
- [initElements](Canvas.md#initelements)
- [insertAt](Canvas.md#insertat)
- [isEmpty](Canvas.md#isempty)
- [isTargetTransparent](Canvas.md#istargettransparent)
- [item](Canvas.md#item)
- [loadFromJSON](Canvas.md#loadfromjson)
- [moveObjectTo](Canvas.md#moveobjectto)
- [off](Canvas.md#off)
- [on](Canvas.md#on)
- [once](Canvas.md#once)
- [relativePan](Canvas.md#relativepan)
- [remove](Canvas.md#remove)
- [removeListeners](Canvas.md#removelisteners)
- [renderAll](Canvas.md#renderall)
- [renderAndReset](Canvas.md#renderandreset)
- [renderCanvas](Canvas.md#rendercanvas)
- [renderTop](Canvas.md#rendertop)
- [renderTopLayer](Canvas.md#rendertoplayer)
- [requestRenderAll](Canvas.md#requestrenderall)
- [restorePointerVpt](Canvas.md#restorepointervpt)
- [searchPossibleTargets](Canvas.md#searchpossibletargets)
- [sendObjectBackwards](Canvas.md#sendobjectbackwards)
- [sendObjectToBack](Canvas.md#sendobjecttoback)
- [set](Canvas.md#set)
- [setActiveObject](Canvas.md#setactiveobject)
- [setCursor](Canvas.md#setcursor)
- [setDimensions](Canvas.md#setdimensions)
- [setHeight](Canvas.md#setheight)
- [setTargetFindTolerance](Canvas.md#settargetfindtolerance)
- [setViewportTransform](Canvas.md#setviewporttransform)
- [setWidth](Canvas.md#setwidth)
- [setZoom](Canvas.md#setzoom)
- [size](Canvas.md#size)
- [toCanvasElement](Canvas.md#tocanvaselement)
- [toDataURL](Canvas.md#todataurl)
- [toDatalessJSON](Canvas.md#todatalessjson)
- [toDatalessObject](Canvas.md#todatalessobject)
- [toJSON](Canvas.md#tojson)
- [toObject](Canvas.md#toobject)
- [toSVG](Canvas.md#tosvg)
- [toString](Canvas.md#tostring)
- [toggle](Canvas.md#toggle)
- [viewportCenterObject](Canvas.md#viewportcenterobject)
- [viewportCenterObjectH](Canvas.md#viewportcenterobjecth)
- [viewportCenterObjectV](Canvas.md#viewportcenterobjectv)
- [zoomToPoint](Canvas.md#zoomtopoint)
- [getDefaults](Canvas.md#getdefaults)

## Constructors

### constructor

• **new Canvas**(`el`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `string` \| `HTMLCanvasElement` |
| `options` | `TCanvasOptions` |

#### Overrides

SelectableCanvas.constructor

#### Defined in

[src/canvas/Canvas.ts:116](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L116)

## Properties

### \_\_cleanupTask

• `Protected` `Optional` **\_\_cleanupTask**: `Object`

#### Call signature

▸ (): `void`

##### Returns

`void`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kill` | (`reason?`: `any`) => `void` |

#### Inherited from

SelectableCanvas.\_\_cleanupTask

#### Defined in

[src/canvas/StaticCanvas.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L164)

___

### \_absolutePointer

• `Protected` `Optional` **\_absolutePointer**: [`Point`](Point.md)

During a mouse event we may need the pointer multiple times in multiple functions.
_absolutePointer holds a reference to the pointer in fabricCanvas/design coordinates that is valid for the event
lifespan. Every fabricJS mouse event create and delete the cache every time
We do this because there are some HTML DOM inspection functions to get the actual pointer coordinates

#### Inherited from

SelectableCanvas.\_absolutePointer

#### Defined in

[src/canvas/SelectableCanvas.ts:255](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L255)

___

### \_activeObject

• `Optional` **\_activeObject**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

SelectableCanvas.\_activeObject

#### Defined in

[src/canvas/SelectableCanvas.ts:295](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L295)

___

### \_activeSelection

• `Protected` `Readonly` **\_activeSelection**: [`ActiveSelection`](ActiveSelection.md)

#### Inherited from

SelectableCanvas.\_activeSelection

#### Defined in

[src/canvas/SelectableCanvas.ts:296](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L296)

___

### \_currentTransform

• `Private` **\_currentTransform**: ``null`` \| [`Transform`](../modules.md#transform) = `null`

hold a referenfce to a data structure that contains information
on the current on going transform

#### Inherited from

SelectableCanvas.\_currentTransform

#### Defined in

[src/canvas/SelectableCanvas.ts:224](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L224)

___

### \_dragSource

• `Private` `Optional` **\_dragSource**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Holds a reference to an object on the canvas from where the drag operation started

#### Defined in

[src/canvas/Canvas.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L97)

___

### \_draggedoverTarget

• `Private` `Optional` **\_draggedoverTarget**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Holds a reference to an object on the canvas that is receiving the drag over event.

#### Defined in

[src/canvas/Canvas.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L90)

___

### \_dropTarget

• `Private` **\_dropTarget**: `undefined` \| [`Object`](Object.md)<[`ObjectEvents`](../interfaces/ObjectEvents.md), [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Holds a reference to an object on the canvas that is the current drop target
May differ from [_draggedoverTarget](Canvas.md#_draggedovertarget)

**`Todo`**

inspect whether [_draggedoverTarget](Canvas.md#_draggedovertarget) and [_dropTarget](Canvas.md#_droptarget) should be merged somehow

#### Defined in

[src/canvas/Canvas.ts:106](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L106)

___

### \_groupSelector

• `Private` **\_groupSelector**: ``null`` \| { `deltaX`: `number` ; `deltaY`: `number` ; `x`: `number` ; `y`: `number`  } = `null`

hold a reference to a data structure used to track the selection
box on canvas drag
on the current on going transform

#### Inherited from

SelectableCanvas.\_groupSelector

#### Defined in

[src/canvas/SelectableCanvas.ts:233](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L233)

___

### \_hoveredTarget

• `Optional` `Private` **\_hoveredTarget**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Keep track of the hovered target

#### Inherited from

SelectableCanvas.\_hoveredTarget

#### Defined in

[src/canvas/SelectableCanvas.ts:202](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L202)

___

### \_hoveredTargets

• `Private` **\_hoveredTargets**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] = `[]`

hold the list of nested targets hovered

#### Inherited from

SelectableCanvas.\_hoveredTargets

#### Defined in

[src/canvas/SelectableCanvas.ts:209](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L209)

___

### \_isClick

• `Private` **\_isClick**: `boolean`

#### Defined in

[src/canvas/Canvas.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L112)

___

### \_isCurrentlyDrawing

• `Protected` **\_isCurrentlyDrawing**: `boolean`

#### Inherited from

SelectableCanvas.\_isCurrentlyDrawing

#### Defined in

[src/canvas/SelectableCanvas.ts:293](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L293)

___

### \_objects

• **\_objects**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Inherited from

SelectableCanvas.\_objects

#### Defined in

[src/canvas/SelectableCanvas.ts:140](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L140)

___

### \_objectsToRender

• `Optional` `Private` **\_objectsToRender**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] = `[]`

hold the list of objects to render

#### Inherited from

SelectableCanvas.\_objectsToRender

#### Defined in

[src/canvas/SelectableCanvas.ts:216](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L216)

___

### \_offset

• **\_offset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Inherited from

SelectableCanvas.\_offset

#### Defined in

[src/canvas/StaticCanvas.ts:155](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L155)

___

### \_pointer

• `Protected` `Optional` **\_pointer**: [`Point`](Point.md)

During a mouse event we may need the pointer multiple times in multiple functions.
_pointer holds a reference to the pointer in html coordinates that is valid for the event
lifespan. Every fabricJS mouse event create and delete the cache every time
We do this because there are some HTML DOM inspection functions to get the actual pointer coordinates

#### Inherited from

SelectableCanvas.\_pointer

#### Defined in

[src/canvas/SelectableCanvas.ts:264](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L264)

___

### \_target

• `Protected` `Optional` **\_target**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

During a mouse event we may need the target multiple times in multiple functions.
_target holds a reference to the target that is valid for the event
lifespan. Every fabricJS mouse event create and delete the cache every time

#### Inherited from

SelectableCanvas.\_target

#### Defined in

[src/canvas/SelectableCanvas.ts:272](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L272)

___

### \_willAddMouseDown

• `Private` **\_willAddMouseDown**: `number`

Holds a reference to a setTimeout timer for event synchronization

#### Defined in

[src/canvas/Canvas.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L83)

___

### allowTouchScrolling

• **allowTouchScrolling**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[allowTouchScrolling](../interfaces/CanvasOptions.md#allowtouchscrolling)

#### Inherited from

SelectableCanvas.allowTouchScrolling

#### Defined in

[src/canvas/StaticCanvas.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L115)

___

### altActionKey

• **altActionKey**: [`TOptionalModifierKey`](../modules.md#toptionalmodifierkey)

Indicates which key enable alternate action on corner
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[altActionKey](../interfaces/CanvasOptions.md#altactionkey)

#### Inherited from

SelectableCanvas.altActionKey

#### Defined in

[src/canvas/SelectableCanvas.ts:148](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L148)

___

### altSelectionKey

• **altSelectionKey**: [`TOptionalModifierKey`](../modules.md#toptionalmodifierkey)

Indicates which key enable alternative selection
in case of target overlapping with active object
values: 'altKey', 'shiftKey', 'ctrlKey'.
For a series of reason that come from the general expectations on how
things should work, this feature works only for preserveObjectStacking true.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.

**`Since`**

1.6.5

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[altSelectionKey](../interfaces/CanvasOptions.md#altselectionkey)

#### Inherited from

SelectableCanvas.altSelectionKey

#### Defined in

[src/canvas/SelectableCanvas.ts:153](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L153)

___

### backgroundColor

• **backgroundColor**: `string` \| [`TFiller`](../modules.md#tfiller)

Background color of canvas instance.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[backgroundColor](../interfaces/CanvasOptions.md#backgroundcolor)

#### Inherited from

SelectableCanvas.backgroundColor

#### Defined in

[src/canvas/StaticCanvas.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L90)

___

### backgroundImage

• `Optional` **backgroundImage**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[backgroundImage](../interfaces/CanvasOptions.md#backgroundimage)

#### Inherited from

SelectableCanvas.backgroundImage

#### Defined in

[src/canvas/StaticCanvas.ts:91](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L91)

___

### backgroundVpt

• **backgroundVpt**: `boolean`

if set to false background image is not affected by viewport transform

**`Since`**

1.6.3

**`Todo`**

we should really find a different way to do this

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[backgroundVpt](../interfaces/CanvasOptions.md#backgroundvpt)

#### Inherited from

SelectableCanvas.backgroundVpt

#### Defined in

[src/canvas/StaticCanvas.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L89)

___

### centeredKey

• **centeredKey**: [`TOptionalModifierKey`](../modules.md#toptionalmodifierkey)

Indicates which key enable centered Transform
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[centeredKey](../interfaces/CanvasOptions.md#centeredkey)

#### Inherited from

SelectableCanvas.centeredKey

#### Defined in

[src/canvas/SelectableCanvas.ts:147](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L147)

___

### centeredRotation

• **centeredRotation**: `boolean`

When true, objects use center point as the origin of rotate transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[centeredRotation](../interfaces/CanvasOptions.md#centeredrotation)

#### Inherited from

SelectableCanvas.centeredRotation

#### Defined in

[src/canvas/SelectableCanvas.ts:146](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L146)

___

### centeredScaling

• **centeredScaling**: `boolean`

When true, objects use center point as the origin of scale transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[centeredScaling](../interfaces/CanvasOptions.md#centeredscaling)

#### Inherited from

SelectableCanvas.centeredScaling

#### Defined in

[src/canvas/SelectableCanvas.ts:145](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L145)

___

### clipPath

• `Optional` **clipPath**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[clipPath](../interfaces/CanvasOptions.md#clippath)

#### Inherited from

SelectableCanvas.clipPath

#### Defined in

[src/canvas/StaticCanvas.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L97)

___

### containerClass

• **containerClass**: `string`

Default element class that's given to wrapper (div) element of canvas

**`Default`**

```ts

```

**`Deprecated`**

customize [CanvasDOMManager](CanvasDOMManager.md) instead or access [elements](Canvas.md#elements) directly

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[containerClass](../interfaces/CanvasOptions.md#containerclass)

#### Inherited from

SelectableCanvas.containerClass

#### Defined in

[src/canvas/SelectableCanvas.ts:167](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L167)

___

### contextTopDirty

• `Private` **contextTopDirty**: `boolean` = `false`

internal flag used to understand if the context top requires a cleanup
in case this is true, the contextTop will be cleared at the next render

#### Inherited from

SelectableCanvas.contextTopDirty

#### Defined in

[src/canvas/SelectableCanvas.ts:246](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L246)

___

### controlsAboveOverlay

• **controlsAboveOverlay**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[controlsAboveOverlay](../interfaces/CanvasOptions.md#controlsaboveoverlay)

#### Inherited from

SelectableCanvas.controlsAboveOverlay

#### Defined in

[src/canvas/StaticCanvas.ts:110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L110)

___

### currentSubTargets

• `Optional` **currentSubTargets**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Defined in

[src/canvas/Canvas.ts:110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L110)

___

### currentTarget

• `Optional` **currentTarget**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Defined in

[src/canvas/Canvas.ts:108](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L108)

___

### defaultCursor

• **defaultCursor**: `string`

Default cursor value used for the entire canvas

**`Default`**

```ts
default
```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[defaultCursor](../interfaces/CanvasOptions.md#defaultcursor)

#### Inherited from

SelectableCanvas.defaultCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:163](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L163)

___

### destroyed

• `Optional` **destroyed**: `boolean`

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

#### Inherited from

SelectableCanvas.destroyed

#### Defined in

[src/canvas/StaticCanvas.ts:146](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L146)

___

### disposed

• `Optional` **disposed**: `boolean`

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

#### Inherited from

SelectableCanvas.disposed

#### Defined in

[src/canvas/StaticCanvas.ts:153](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L153)

___

### elements

• **elements**: [`CanvasDOMManager`](CanvasDOMManager.md)

#### Inherited from

SelectableCanvas.elements

#### Defined in

[src/canvas/SelectableCanvas.ts:280](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L280)

___

### enablePointerEvents

• **enablePointerEvents**: `boolean`

When the option is enabled, PointerEvent is used instead of TPointerEvent.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[enablePointerEvents](../interfaces/CanvasOptions.md#enablepointerevents)

#### Defined in

[src/canvas/Canvas.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L76)

___

### enableRetinaScaling

• **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[enableRetinaScaling](../interfaces/CanvasOptions.md#enableretinascaling)

#### Inherited from

SelectableCanvas.enableRetinaScaling

#### Defined in

[src/canvas/StaticCanvas.ts:104](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L104)

___

### fireMiddleClick

• **fireMiddleClick**: `boolean`

Indicates if the canvas can fire middle click events

**`Since`**

1.7.8

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[fireMiddleClick](../interfaces/CanvasOptions.md#firemiddleclick)

#### Inherited from

SelectableCanvas.fireMiddleClick

#### Defined in

[src/canvas/SelectableCanvas.ts:189](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L189)

___

### fireRightClick

• **fireRightClick**: `boolean`

Indicates if the canvas can fire right click events

**`Since`**

1.6.5

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[fireRightClick](../interfaces/CanvasOptions.md#firerightclick)

#### Inherited from

SelectableCanvas.fireRightClick

#### Defined in

[src/canvas/SelectableCanvas.ts:188](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L188)

___

### freeDrawingBrush

• `Optional` **freeDrawingBrush**: [`BaseBrush`](BaseBrush.md)

#### Inherited from

SelectableCanvas.freeDrawingBrush

#### Defined in

[src/canvas/SelectableCanvas.ts:294](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L294)

___

### freeDrawingCursor

• **freeDrawingCursor**: `string`

Cursor value used during free drawing

**`Default`**

```ts
crosshair
```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[freeDrawingCursor](../interfaces/CanvasOptions.md#freedrawingcursor)

#### Inherited from

SelectableCanvas.freeDrawingCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L164)

___

### hasLostContext

• `Protected` **hasLostContext**: `boolean`

#### Inherited from

SelectableCanvas.hasLostContext

#### Defined in

[src/canvas/StaticCanvas.ts:156](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L156)

___

### height

• **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[height](../interfaces/CanvasOptions.md#height)

#### Inherited from

SelectableCanvas.height

#### Defined in

[src/canvas/StaticCanvas.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L86)

___

### hoverCursor

• **hoverCursor**: `string`

Default cursor value used when hovering over an object on canvas

**`Default`**

```ts
move
```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[hoverCursor](../interfaces/CanvasOptions.md#hovercursor)

#### Inherited from

SelectableCanvas.hoverCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:161](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L161)

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[imageSmoothingEnabled](../interfaces/CanvasOptions.md#imagesmoothingenabled)

#### Inherited from

SelectableCanvas.imageSmoothingEnabled

#### Defined in

[src/canvas/StaticCanvas.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L105)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[includeDefaultValues](../interfaces/CanvasOptions.md#includedefaultvalues)

#### Inherited from

SelectableCanvas.includeDefaultValues

#### Defined in

[src/canvas/StaticCanvas.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L99)

___

### isDrawingMode

• **isDrawingMode**: `boolean`

When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
After mousedown, mousemove creates a shape,
and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-4#free_drawing](http://fabricjs.com/fabric-intro-part-4#free_drawing)

**`Default`**

```ts

```

#### Inherited from

SelectableCanvas.isDrawingMode

#### Defined in

[src/canvas/SelectableCanvas.ts:182](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L182)

___

### mainTouchId

• `Private` **mainTouchId**: ``null`` \| `number`

Contains the id of the touch event that owns the fabric transform

#### Defined in

[src/canvas/Canvas.ts:74](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L74)

___

### moveCursor

• **moveCursor**: `string`

Default cursor value used when moving an object on canvas

**`Default`**

```ts
move
```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[moveCursor](../interfaces/CanvasOptions.md#movecursor)

#### Inherited from

SelectableCanvas.moveCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:162](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L162)

___

### nextRenderHandle

• `Protected` **nextRenderHandle**: `number`

#### Inherited from

SelectableCanvas.nextRenderHandle

#### Defined in

[src/canvas/StaticCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L157)

___

### notAllowedCursor

• **notAllowedCursor**: `string`

Cursor value used for disabled elements ( corners with disabled action )

**`Since`**

2.0.0

**`Default`**

```ts
not-allowed
```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[notAllowedCursor](../interfaces/CanvasOptions.md#notallowedcursor)

#### Inherited from

SelectableCanvas.notAllowedCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:165](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L165)

___

### overlayColor

• **overlayColor**: `string` \| [`TFiller`](../modules.md#tfiller)

Overlay color of canvas instance.

**`Since`**

1.3.9

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[overlayColor](../interfaces/CanvasOptions.md#overlaycolor)

#### Inherited from

SelectableCanvas.overlayColor

#### Defined in

[src/canvas/StaticCanvas.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L94)

___

### overlayImage

• `Optional` **overlayImage**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[overlayImage](../interfaces/CanvasOptions.md#overlayimage)

#### Inherited from

SelectableCanvas.overlayImage

#### Defined in

[src/canvas/StaticCanvas.ts:95](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L95)

___

### overlayVpt

• **overlayVpt**: `boolean`

if set to false overlay image is not affected by viewport transform

**`Since`**

1.6.3

**`Todo`**

we should really find a different way to do this

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[overlayVpt](../interfaces/CanvasOptions.md#overlayvpt)

#### Inherited from

SelectableCanvas.overlayVpt

#### Defined in

[src/canvas/StaticCanvas.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L93)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

When true, object detection happens on per-pixel basis rather than on per-bounding-box

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[perPixelTargetFind](../interfaces/CanvasOptions.md#perpixeltargetfind)

#### Inherited from

SelectableCanvas.perPixelTargetFind

#### Defined in

[src/canvas/SelectableCanvas.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L170)

___

### preserveObjectStacking

• **preserveObjectStacking**: `boolean`

Indicates whether objects should remain in current stack position when selected.
When false objects are brought to top and rendered as part of the selection group

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[preserveObjectStacking](../interfaces/CanvasOptions.md#preserveobjectstacking)

#### Inherited from

SelectableCanvas.preserveObjectStacking

#### Defined in

[src/canvas/SelectableCanvas.ts:184](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L184)

___

### renderOnAddRemove

• **renderOnAddRemove**: `boolean`

Indicates whether [add](StaticCanvas.md#add), [insertAt](StaticCanvas.md#insertat) and [remove](StaticCanvas.md#remove),
StaticCanvas#moveTo, [clear](StaticCanvas.md#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[renderOnAddRemove](../interfaces/CanvasOptions.md#renderonaddremove)

#### Inherited from

SelectableCanvas.renderOnAddRemove

#### Defined in

[src/canvas/StaticCanvas.ts:102](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L102)

___

### selection

• **selection**: `boolean`

Indicates whether group selection should be enabled

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[selection](../interfaces/CanvasOptions.md#selection)

#### Inherited from

SelectableCanvas.selection

#### Defined in

[src/canvas/SelectableCanvas.ts:151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L151)

___

### selectionBorderColor

• **selectionBorderColor**: `string`

Color of the border of selection (usually slightly darker than color of selection itself)

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[selectionBorderColor](../interfaces/CanvasOptions.md#selectionbordercolor)

#### Inherited from

SelectableCanvas.selectionBorderColor

#### Defined in

[src/canvas/SelectableCanvas.ts:156](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L156)

___

### selectionColor

• **selectionColor**: `string`

Color of selection

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[selectionColor](../interfaces/CanvasOptions.md#selectioncolor)

#### Inherited from

SelectableCanvas.selectionColor

#### Defined in

[src/canvas/SelectableCanvas.ts:154](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L154)

___

### selectionDashArray

• **selectionDashArray**: `number`[]

Default dash array pattern
If not empty the selection border is dashed

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[selectionDashArray](../interfaces/CanvasOptions.md#selectiondasharray)

#### Inherited from

SelectableCanvas.selectionDashArray

#### Defined in

[src/canvas/SelectableCanvas.ts:155](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L155)

___

### selectionFullyContained

• **selectionFullyContained**: `boolean`

Select only shapes that are fully contained in the dragged selection rectangle.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[selectionFullyContained](../interfaces/CanvasOptions.md#selectionfullycontained)

#### Inherited from

SelectableCanvas.selectionFullyContained

#### Defined in

[src/canvas/SelectableCanvas.ts:158](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L158)

___

### selectionKey

• **selectionKey**: [`TOptionalModifierKey`](../modules.md#toptionalmodifierkey) \| (``"altKey"`` \| ``"shiftKey"`` \| ``"ctrlKey"`` \| ``"metaKey"``)[]

Indicates which key or keys enable multiple click selection
Pass value as a string or array of strings
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or empty or containing any other string that is not a modifier key
feature is disabled.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[selectionKey](../interfaces/CanvasOptions.md#selectionkey)

#### Inherited from

SelectableCanvas.selectionKey

#### Defined in

[src/canvas/SelectableCanvas.ts:152](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L152)

___

### selectionLineWidth

• **selectionLineWidth**: `number`

Width of a line used in object/group selection

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[selectionLineWidth](../interfaces/CanvasOptions.md#selectionlinewidth)

#### Inherited from

SelectableCanvas.selectionLineWidth

#### Defined in

[src/canvas/SelectableCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L157)

___

### skipOffscreen

• **skipOffscreen**: `boolean`

Based on vptCoords and object.aCoords, skip rendering of objects that
are not included in current viewport.
May greatly help in applications with crowded canvas and use of zoom/pan
If One of the corner of the bounding box of the object is on the canvas
the objects get rendered.

**`Default`**

```ts
true
```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[skipOffscreen](../interfaces/CanvasOptions.md#skipoffscreen)

#### Inherited from

SelectableCanvas.skipOffscreen

#### Defined in

[src/canvas/StaticCanvas.ts:103](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L103)

___

### skipTargetFind

• **skipTargetFind**: `boolean`

When true, target detection is skipped. Target detection will return always undefined.
click selection won't work anymore, events will fire with no targets.
if something is selected before setting it to true, it will be deselected at the first click.
area selection will still work. check the `selection` property too.
if you deactivate both, you should look into staticCanvas.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[skipTargetFind](../interfaces/CanvasOptions.md#skiptargetfind)

#### Inherited from

SelectableCanvas.skipTargetFind

#### Defined in

[src/canvas/SelectableCanvas.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L172)

___

### stopContextMenu

• **stopContextMenu**: `boolean`

Indicates if the right click on canvas can output the context menu or not

**`Since`**

1.6.5

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[stopContextMenu](../interfaces/CanvasOptions.md#stopcontextmenu)

#### Inherited from

SelectableCanvas.stopContextMenu

#### Defined in

[src/canvas/SelectableCanvas.ts:187](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L187)

___

### svgViewportTransformation

• **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[svgViewportTransformation](../interfaces/CanvasOptions.md#svgviewporttransformation)

#### Inherited from

SelectableCanvas.svgViewportTransformation

#### Defined in

[src/canvas/StaticCanvas.ts:941](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L941)

___

### targetFindTolerance

• **targetFindTolerance**: `number`

Number of pixels around target pixel to tolerate (consider active) during object detection

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[targetFindTolerance](../interfaces/CanvasOptions.md#targetfindtolerance)

#### Inherited from

SelectableCanvas.targetFindTolerance

#### Defined in

[src/canvas/SelectableCanvas.ts:171](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L171)

___

### targets

• **targets**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] = `[]`

Keep track of the subTargets for Mouse Events

#### Inherited from

SelectableCanvas.targets

#### Defined in

[src/canvas/SelectableCanvas.ts:195](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L195)

___

### textEditingManager

• **textEditingManager**: `TextEditingManager`

#### Defined in

[src/canvas/Canvas.ts:114](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L114)

___

### uniScaleKey

• **uniScaleKey**: [`TOptionalModifierKey`](../modules.md#toptionalmodifierkey)

Indicates which key switches uniform scaling.
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.
totally wrong named. this sounds like `uniform scaling`
if Canvas.uniformScaling is true, pressing this will set it to false
and viceversa.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[uniScaleKey](../interfaces/CanvasOptions.md#uniscalekey)

#### Inherited from

SelectableCanvas.uniScaleKey

#### Defined in

[src/canvas/SelectableCanvas.ts:144](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L144)

___

### uniformScaling

• **uniformScaling**: `boolean`

When true, objects can be transformed by one side (unproportionally)
when dragged on the corners that normally would not do that.

**`Default`**

```ts

```

**`Since`**

fabric 4.0 // changed name and default value

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[uniformScaling](../interfaces/CanvasOptions.md#uniformscaling)

#### Inherited from

SelectableCanvas.uniformScaling

#### Defined in

[src/canvas/SelectableCanvas.ts:143](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L143)

___

### viewportTransform

• **viewportTransform**: [`TMat2D`](../modules.md#tmat2d)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

**`Example`**

Default transform
```ts
canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
```

**`Example`**

Scale by 70% and translate toward bottom-right by 50, without skewing
```ts
canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
```

**`Default`**

```ts

```

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[viewportTransform](../interfaces/CanvasOptions.md#viewporttransform)

#### Inherited from

SelectableCanvas.viewportTransform

#### Defined in

[src/canvas/StaticCanvas.ts:117](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L117)

___

### vptCoords

• **vptCoords**: [`TCornerPoint`](../modules.md#tcornerpoint)

Describe canvas element extension over design
properties are tl,tr,bl,br.
if canvas is not zoomed/panned those points are the four corner of canvas
if canvas is viewportTransformed you those points indicate the extension
of canvas element in plain untrasformed coordinates
The coordinates get updated with

**`Method`**

calcViewportBoundaries.

#### Inherited from

SelectableCanvas.vptCoords

#### Defined in

[src/canvas/StaticCanvas.ts:126](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L126)

___

### width

• **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[CanvasOptions](../interfaces/CanvasOptions.md).[width](../interfaces/CanvasOptions.md#width)

#### Inherited from

SelectableCanvas.width

#### Defined in

[src/canvas/StaticCanvas.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L85)

___

### ownDefaults

▪ `Static` **ownDefaults**: `Record`<`string`, `any`\> = `canvasDefaults`

#### Inherited from

SelectableCanvas.ownDefaults

#### Defined in

[src/canvas/SelectableCanvas.ts:274](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L274)

## Accessors

### contextContainer

• `get` **contextContainer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

SelectableCanvas.contextContainer

#### Defined in

[src/canvas/StaticCanvas.ts:137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L137)

___

### contextTop

• `get` **contextTop**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

SelectableCanvas.contextTop

#### Defined in

[src/canvas/SelectableCanvas.ts:284](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L284)

___

### lowerCanvasEl

• `get` **lowerCanvasEl**(): `HTMLCanvasElement`

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.lowerCanvasEl

#### Defined in

[src/canvas/StaticCanvas.ts:133](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L133)

___

### upperCanvasEl

• `get` **upperCanvasEl**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.upperCanvasEl

#### Defined in

[src/canvas/SelectableCanvas.ts:281](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L281)

___

### wrapperEl

• `get` **wrapperEl**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Inherited from

SelectableCanvas.wrapperEl

#### Defined in

[src/canvas/SelectableCanvas.ts:287](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L287)

## Methods

### \_\_onMouseDown

▸ `Private` **__onMouseDown**(`e`): `void`

Method that defines the actions when mouse is clicked on canvas.
The method inits the currentTransform parameters and renders all the
canvas so the current image can be placed on the top canvas and the rest
in on the container one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1049](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1049)

___

### \_\_onMouseMove

▸ `Private` **__onMouseMove**(`e`): `void`

Method that defines the actions when mouse is hovering the canvas.
The currentTransform parameter will define whether the user is rotating/scaling/translating
an image or neither of them (only hovering). A group selection is also possible and would cancel
all any other type of action.
In case of an image transformation only the top canvas will be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousemove |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1188](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1188)

___

### \_\_onMouseUp

▸ `Private` **__onMouseUp**(`e`): `void`

Method that defines the actions when mouse is released on canvas.
The method resets the currentTransform parameters, store the image corner
position in the image object and render the canvas on top.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mouseup |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:787](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L787)

___

### \_\_onMouseWheel

▸ **__onMouseWheel**(`e`): `void`

Method that defines actions when an Event Mouse Wheel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mouseup |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1343](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1343)

___

### \_\_serializeBgOverlay

▸ `Private` **__serializeBgOverlay**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](../modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Inherited from

SelectableCanvas.\_\_serializeBgOverlay

#### Defined in

[src/canvas/StaticCanvas.ts:895](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L895)

___

### \_basicEventHandler

▸ **_basicEventHandler**<`T`\>(`eventType`, `options`): [`CanvasEvents`](../interfaces/CanvasEvents.md) & [`ObjectEvents`](../interfaces/ObjectEvents.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"erasing:end"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"dragover"`` \| ``"dragenter"`` \| ``"dragleave"`` \| ``"dragend"`` \| ``"drop:before"`` \| ``"drop"`` \| ``"drop:after"`` \| ``"contextmenu:before"`` \| ``"contextmenu"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `T` |
| `options` | [`CanvasEvents`](../interfaces/CanvasEvents.md) & [`ObjectEvents`](../interfaces/ObjectEvents.md)[`T`] |

#### Returns

[`CanvasEvents`](../interfaces/CanvasEvents.md) & [`ObjectEvents`](../interfaces/ObjectEvents.md)[`T`]

#### Defined in

[src/canvas/Canvas.ts:894](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L894)

___

### \_beforeTransform

▸ `Private` **_beforeTransform**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1171](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1171)

___

### \_cacheTransformEventData

▸ `Private` **_cacheTransformEventData**(`e`): `void`

Cache common information needed during event processing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1158](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1158)

___

### \_centerObject

▸ `Private` **_centerObject**(`object`, `center`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center |
| `center` | [`Point`](Point.md) | Center point |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_centerObject

#### Defined in

[src/canvas/StaticCanvas.ts:793](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L793)

___

### \_checkTarget

▸ `Private` **_checkTarget**(`pointer?`, `obj`, `globalPointer?`): `boolean`

Checks point is inside the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer?` | [`Point`](Point.md) | x,y object of point coordinates we want to check. |
| `obj` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to test against |
| `globalPointer?` | [`Point`](Point.md) | x,y object of point coordinates relative to canvas used to search per pixel target. |

#### Returns

`boolean`

true if point is contained within an area of given object

#### Inherited from

SelectableCanvas.\_checkTarget

#### Defined in

[src/canvas/SelectableCanvas.ts:770](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L770)

___

### \_chooseObjectsToRender

▸ **_chooseObjectsToRender**(): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Divides objects in two groups, one to render immediately
and one to render as activeGroup.

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

objects to render immediately and pushes the other in the activeGroup.

#### Inherited from

SelectableCanvas.\_chooseObjectsToRender

#### Defined in

[src/canvas/SelectableCanvas.ts:351](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L351)

___

### \_createCacheCanvas

▸ `Protected` **_createCacheCanvas**(): `void`

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_createCacheCanvas

#### Defined in

[src/canvas/SelectableCanvas.ts:949](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L949)

___

### \_discardActiveObject

▸ **_discardActiveObject**(`e?`, `object?`): this is Object

This is supposed to be equivalent to discardActiveObject but without firing
any selection events ( can still fire object transformation events ). There is commitment to have this stay this way.
This is the functional part of discardActiveObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | [`TPointerEvent`](../modules.md#tpointerevent) | Event (passed along when firing "object:deselected") |
| `object?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the next object to set as active, reason why we are discarding this |

#### Returns

this is Object

true if the active object has been discarded

#### Inherited from

SelectableCanvas.\_discardActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1118)

___

### \_drawSelection

▸ `Private` **_drawSelection**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | to draw the selection on |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_drawSelection

#### Defined in

[src/canvas/SelectableCanvas.ts:668](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L668)

___

### \_finalizeCurrentTransform

▸ `Private` **_finalizeCurrentTransform**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | send the mouse event that generate the finalize down, so it can be used in the event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:969](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L969)

___

### \_fireEnterLeaveEvents

▸ `Private` **_fireEnterLeaveEvents**(`target`, `data`): `void`

Manage the dragEnter, dragLeave events for the fabric objects on the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the target where the target from the onDrag event |
| `data` | [`DragEventData`](../interfaces/DragEventData.md) | Event object fired on dragover |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1259](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1259)

___

### \_fireOverOutEvents

▸ `Private` **_fireOverOutEvents**(`e`, `target?`): `void`

Manage the mouseout, mouseover events for the fabric object on the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousemove |
| `target?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the target where the target from the mousemove event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1230](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1230)

___

### \_fireSelectionEvents

▸ `Private` **_fireSelectionEvents**(`oldObjects`, `e?`): `void`

Compares the old activeObject with the current one and fires correct events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldObjects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] | old activeObject |
| `e?` | [`TPointerEvent`](../modules.md#tpointerevent) | mouse event triggering the selection events |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_fireSelectionEvents

#### Defined in

[src/canvas/SelectableCanvas.ts:1019](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1019)

___

### \_getEventPrefix

▸ `Private` **_getEventPrefix**(): ``"mouse"`` \| ``"pointer"``

return an event prefix pointer or mouse.

#### Returns

``"mouse"`` \| ``"pointer"``

#### Defined in

[src/canvas/Canvas.ts:156](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L156)

___

### \_getOriginFromCorner

▸ `Private` **_getOriginFromCorner**(`target`, `controlName`): `Object`

Given the control clicked, determine the origin of the transform.
This is bad because controls can totally have custom names
should disappear before release 4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `controlName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | [`TOriginX`](../modules.md#toriginx) |
| `y` | [`TOriginY`](../modules.md#toriginy) |

**`Deprecated`**

#### Inherited from

SelectableCanvas.\_getOriginFromCorner

#### Defined in

[src/canvas/SelectableCanvas.ts:557](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L557)

___

### \_handleEvent

▸ `Private` **_handleEvent**(`e`, `eventType`, `button?`, `isClick?`): `void`

Handle event firing for target and subtargets

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | `undefined` | event from mouse |
| `eventType` | [`TPointerEventNames`](../modules.md#tpointereventnames) | `undefined` | event to fire (up, down or move) |
| `button?` | `number` | `LEFT_CLICK` | button used in the event 1 = left, 2 = middle, 3 = right |
| `isClick` | `boolean` | `false` | for left button only, indicates that the mouse up happened without move. |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:919](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L919)

___

### \_isMainEvent

▸ `Private` **_isMainEvent**(`evt`): `boolean`

Determines if an event has the id of the event that is considered main

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | [`TPointerEvent`](../modules.md#tpointerevent) |

#### Returns

`boolean`

#### Defined in

[src/canvas/Canvas.ts:582](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L582)

___

### \_isRetinaScaling

▸ `Private` **_isRetinaScaling**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SelectableCanvas.\_isRetinaScaling

#### Defined in

[src/canvas/StaticCanvas.ts:243](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L243)

___

### \_isSelectionKeyPressed

▸ `Private` **_isSelectionKeyPressed**(`e`): `boolean`

takes an event and determines if selection key has been pressed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object |

#### Returns

`boolean`

#### Inherited from

SelectableCanvas.\_isSelectionKeyPressed

#### Defined in

[src/canvas/SelectableCanvas.ts:475](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L475)

___

### \_normalizePointer

▸ `Private` **_normalizePointer**(`object`, `pointer`): [`Point`](Point.md)

Given a pointer on the canvas with a viewport applied,
find out the pointer in object coordinates

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `pointer` | [`Point`](Point.md) |

#### Returns

[`Point`](Point.md)

#### Inherited from

SelectableCanvas.\_normalizePointer

#### Defined in

[src/canvas/SelectableCanvas.ts:416](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L416)

___

### \_onContextMenu

▸ `Private` **_onContextMenu**(`e`): ``false``

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

``false``

#### Defined in

[src/canvas/Canvas.ts:533](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L533)

___

### \_onDoubleClick

▸ `Private` **_onDoubleClick**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:551](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L551)

___

### \_onDragEnd

▸ `Private` **_onDragEnd**(`e`): `void`

supports native like text dragging
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_a_drag

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:358](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L358)

___

### \_onDragEnter

▸ `Private` **_onDragEnter**(`e?`): `void`

fire `dragleave` on `dragover` targets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `DragEvent` | Event object fired on Event.js shake |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:464](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L464)

___

### \_onDragLeave

▸ `Private` **_onDragLeave**(`e?`): `void`

fire `dragleave` on `dragover` targets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `DragEvent` | Event object fired on Event.js shake |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:482](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L482)

___

### \_onDragOver

▸ `Private` **_onDragOver**(`e?`): `void`

prevent default to allow drop event to be fired
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `DragEvent` | Event object fired on Event.js shake |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:419](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L419)

___

### \_onDragProgress

▸ `Private` **_onDragProgress**(`e`): `void`

fire `drag` event on canvas and drag source

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:386](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L386)

___

### \_onDragStart

▸ `Private` **_onDragStart**(`e`): `void`

supports native like text dragging

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:289](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L289)

___

### \_onDrop

▸ `Private` **_onDrop**(`e`): `void`

`drop:before` is a an event that allows you to schedule logic
before the `drop` event. Prefer `drop` event always, but if you need
to run some drop-disabling logic on an event, since there is no way
to handle event handlers ordering, use `drop:before`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:508](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L508)

___

### \_onMouseDown

▸ `Private` **_onMouseDown**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:638](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L638)

___

### \_onMouseDownInDrawingMode

▸ `Private` **_onMouseDownInDrawingMode**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:995](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L995)

___

### \_onMouseEnter

▸ `Private` **_onMouseEnter**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mouseenter |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:265](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L265)

___

### \_onMouseMove

▸ `Private` **_onMouseMove**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousemove |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:735](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L735)

___

### \_onMouseMoveInDrawingMode

▸ `Private` **_onMouseMoveInDrawingMode**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousemove |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1011](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1011)

___

### \_onMouseOut

▸ `Private` **_onMouseOut**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:243](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L243)

___

### \_onMouseUp

▸ `Private` **_onMouseUp**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mouseup |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:704](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L704)

___

### \_onMouseUpInDrawingMode

▸ `Private` **_onMouseUpInDrawingMode**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object fired on mouseup |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1028](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1028)

___

### \_onMouseWheel

▸ `Private` **_onMouseWheel**(`e?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `MouseEvent` | Event object fired on wheel event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:235](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L235)

___

### \_onObjectAdded

▸ `Private` **_onObjectAdded**(`obj`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object that was added |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_onObjectAdded

#### Defined in

[src/canvas/SelectableCanvas.ts:319](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L319)

___

### \_onObjectRemoved

▸ `Private` **_onObjectRemoved**(`obj`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object that was removed |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_onObjectRemoved

#### Defined in

[src/canvas/SelectableCanvas.ts:328](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L328)

___

### \_onResize

▸ `Private` **_onResize**(): `void`

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:751](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L751)

___

### \_onStackOrderChanged

▸ **_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_onStackOrderChanged

#### Defined in

[src/canvas/StaticCanvas.ts:236](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L236)

___

### \_onTouchEnd

▸ `Private` **_onTouchEnd**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `TouchEvent` | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:663](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L663)

___

### \_onTouchStart

▸ `Private` **_onTouchStart**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `TouchEvent` | Event object fired on mousedown |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:604](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L604)

___

### \_performTransformAction

▸ `Private` **_performTransformAction**(`e`, `transform`, `pointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) |
| `transform` | [`Transform`](../modules.md#transform) |
| `pointer` | [`Point`](Point.md) |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1379](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1379)

___

### \_realizeGroupTransformOnObject

▸ `Private` **_realizeGroupTransformOnObject**(`instance?`): `Partial`<[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Realizes an object's group transformation on it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instance?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the object to transform (gets mutated) |

#### Returns

`Partial`<[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

the original values of instance which were changed

#### Inherited from

SelectableCanvas.\_realizeGroupTransformOnObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1248](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1248)

___

### \_renderBackground

▸ `Private` **_renderBackground**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_renderBackground

#### Defined in

[src/canvas/StaticCanvas.ts:685](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L685)

___

### \_renderBackgroundOrOverlay

▸ `Private` **_renderBackgroundOrOverlay**(`ctx`, `property`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `property` | ``"overlay"`` \| ``"background"`` | 'background' or 'overlay' |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_renderBackgroundOrOverlay

#### Defined in

[src/canvas/StaticCanvas.ts:633](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L633)

___

### \_renderDragEffects

▸ `Private` **_renderDragEffects**(`e`, `source?`, `target?`): `void`

First we clear top context where the effects are being rendered.
Then we render the effects.
Doing so will render the correct effect for all cases including an overlap between `source` and `target`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |
| `source?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `target?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:316](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L316)

___

### \_renderObjects

▸ `Private` **_renderObjects**(`ctx`, `objects`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_renderObjects

#### Defined in

[src/canvas/StaticCanvas.ts:622](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L622)

___

### \_renderOverlay

▸ `Private` **_renderOverlay**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_renderOverlay

#### Defined in

[src/canvas/StaticCanvas.ts:693](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L693)

___

### \_resetTransformEventData

▸ `Private` **_resetTransformEventData**(): `void`

reset cache form common information needed during event processing

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1147](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1147)

___

### \_searchPossibleTargets

▸ `Private` **_searchPossibleTargets**(`objects?`, `pointer?`): `undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Internal Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objects?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] | objects array to look into |
| `pointer?` | [`Point`](Point.md) | x,y object of point coordinates we want to check. |

#### Returns

`undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

**top most object from given `objects`** that contains pointer

#### Inherited from

SelectableCanvas.\_searchPossibleTargets

#### Defined in

[src/canvas/SelectableCanvas.ts:804](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L804)

___

### \_set

▸ **_set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_set

#### Defined in

[src/CommonMethods.ts:38](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L38)

___

### \_setActiveObject

▸ **_setActiveObject**(`object`, `e?`): `boolean`

This is supposed to be equivalent to setActiveObject but without firing
any event. There is commitment to have this stay this way.
This is the functional part of setActiveObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | to set as active |
| `e?` | [`TPointerEvent`](../modules.md#tpointerevent) | Event (passed along when firing "object:selected") |

#### Returns

`boolean`

true if the object has been selected

#### Inherited from

SelectableCanvas.\_setActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1094](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1094)

___

### \_setCursorFromEvent

▸ **_setCursorFromEvent**(`e`, `target?`): `void`

Sets the cursor depending on where the canvas is being hovered.
Note: very buggy in Opera

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object |
| `target?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object that the mouse is hovering, if so. |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1407](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1407)

___

### \_setDimensionsImpl

▸ `Protected` **_setDimensionsImpl**(`dimensions`, `options?`): `void`

Internal use only

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | [`TSize`](../modules.md#tsize) |
| `options?` | [`TCanvasSizeOptions`](../modules.md#tcanvassizeoptions) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setDimensionsImpl

#### Defined in

[src/canvas/SelectableCanvas.ts:936](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L936)

___

### \_setObject

▸ `Private` **_setObject**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setObject

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L18)

___

### \_setOptions

▸ `Protected` **_setOptions**(`options?`): `void`

Sets object's properties from options, for initialization only

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Options object |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setOptions

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L9)

___

### \_setSVGBgOverlayColor

▸ `Private` **_setSVGBgOverlayColor**(`markup`, `property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `property` | ``"overlay"`` \| ``"background"`` |

#### Returns

`void`

**`TODO`**

this seems to handle patterns but fail at gradients.

#### Inherited from

SelectableCanvas.\_setSVGBgOverlayColor

#### Defined in

[src/canvas/StaticCanvas.ts:1198](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1198)

___

### \_setSVGBgOverlayImage

▸ `Private` **_setSVGBgOverlayImage**(`markup`, `property`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `property` | ``"backgroundImage"`` \| ``"overlayImage"`` |
| `reviver` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGBgOverlayImage

#### Defined in

[src/canvas/StaticCanvas.ts:1183](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1183)

___

### \_setSVGHeader

▸ `Private` **_setSVGHeader**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](../modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGHeader

#### Defined in

[src/canvas/StaticCanvas.ts:1022](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1022)

___

### \_setSVGObject

▸ `Private` **_setSVGObject**(`markup`, `instance`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `instance` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `reviver` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1278](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1278)

___

### \_setSVGObjects

▸ `Private` **_setSVGObjects**(`markup`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `reviver` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGObjects

#### Defined in

[src/canvas/StaticCanvas.ts:1159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1159)

___

### \_setSVGPreamble

▸ `Private` **_setSVGPreamble**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](../modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setSVGPreamble

#### Defined in

[src/canvas/StaticCanvas.ts:1006](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1006)

___

### \_setupCurrentTransform

▸ `Private` **_setupCurrentTransform**(`e`, `target`, `alreadySelected`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object |
| `target` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |  |
| `alreadySelected` | `boolean` | - |

#### Returns

`void`

#### Inherited from

SelectableCanvas.\_setupCurrentTransform

#### Defined in

[src/canvas/SelectableCanvas.ts:587](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L587)

___

### \_shouldClearSelection

▸ `Private` **_shouldClearSelection**(`e`, `target?`): target is undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object |
| `target?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |  |

#### Returns

target is undefined

#### Inherited from

SelectableCanvas.\_shouldClearSelection

#### Defined in

[src/canvas/SelectableCanvas.ts:492](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L492)

___

### \_shouldRender

▸ `Private` **_shouldRender**(`target`): `boolean`

Decides whether the canvas should be redrawn in mouseup and mousedown events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`boolean`

#### Defined in

[src/canvas/Canvas.ts:761](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L761)

___

### \_toObject

▸ `Private` **_toObject**(`instance`, `methodName`, `propertiesToInclude`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `methodName` | ``"toObject"`` \| ``"toDatalessObject"`` |
| `propertiesToInclude` | `string`[] |

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

SelectableCanvas.\_toObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1226](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1226)

___

### \_toObjectMethod

▸ `Private` **_toObjectMethod**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](../modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Inherited from

SelectableCanvas.\_toObjectMethod

#### Defined in

[src/canvas/StaticCanvas.ts:848](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L848)

___

### \_transformObject

▸ `Private` **_transformObject**(`e`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event fired on mousemove |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1353](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1353)

___

### absolutePan

▸ **absolutePan**(`point`): `void`

Pan viewport so as to place point at top left corner of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | to move to |

#### Returns

`void`

#### Inherited from

SelectableCanvas.absolutePan

#### Defined in

[src/canvas/StaticCanvas.ts:416](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L416)

___

### add

▸ **add**(`...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Inherited from

SelectableCanvas.add

#### Defined in

[src/canvas/StaticCanvas.ts:196](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L196)

___

### addOrRemove

▸ **addOrRemove**(`functor`, `eventjsFunctor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functor` | `any` |
| `eventjsFunctor` | ``"add"`` \| ``"remove"`` |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:160](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L160)

___

### bringObjectForward

▸ **bringObjectForward**(`object`, `intersecting?`): `boolean`

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object in front of next upper intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.bringObjectForward

#### Defined in

[src/Collection.ts:232](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L232)

___

### bringObjectToFront

▸ **bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.bringObjectToFront

#### Defined in

[src/Collection.ts:186](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L186)

___

### calcOffset

▸ **calcOffset**(): `Object`

Calculates canvas element offset relative to the document
This method is also attached as "resize" event handler of window

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Inherited from

SelectableCanvas.calcOffset

#### Defined in

[src/canvas/StaticCanvas.ts:259](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L259)

___

### calcViewportBoundaries

▸ **calcViewportBoundaries**(): [`TCornerPoint`](../modules.md#tcornerpoint)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport using
object absolute coordinates ( aCoords )

#### Returns

[`TCornerPoint`](../modules.md#tcornerpoint)

points.tl

**`Chainable`**

#### Inherited from

SelectableCanvas.calcViewportBoundaries

#### Defined in

[src/canvas/StaticCanvas.ts:516](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L516)

___

### cancelRequestedRender

▸ **cancelRequestedRender**(): `void`

#### Returns

`void`

#### Inherited from

SelectableCanvas.cancelRequestedRender

#### Defined in

[src/canvas/StaticCanvas.ts:534](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L534)

___

### centerObject

▸ **centerObject**(`object`): `void`

Centers object vertically and horizontally in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Inherited from

SelectableCanvas.centerObject

#### Defined in

[src/canvas/StaticCanvas.ts:743](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L743)

___

### centerObjectH

▸ **centerObjectH**(`object`): `void`

Centers object horizontally in the canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

SelectableCanvas.centerObjectH

#### Defined in

[src/canvas/StaticCanvas.ts:721](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L721)

___

### centerObjectV

▸ **centerObjectV**(`object`): `void`

Centers object vertically in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically |

#### Returns

`void`

#### Inherited from

SelectableCanvas.centerObjectV

#### Defined in

[src/canvas/StaticCanvas.ts:732](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L732)

___

### clear

▸ **clear**(): `void`

clear [textEditingManager](Canvas.md#texteditingmanager)

#### Returns

`void`

#### Overrides

SelectableCanvas.clear

#### Defined in

[src/canvas/Canvas.ts:1583](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1583)

___

### clearContext

▸ **clearContext**(`ctx`): `void`

Clears specified context of canvas element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to clear |

#### Returns

`void`

#### Inherited from

SelectableCanvas.clearContext

#### Defined in

[src/canvas/StaticCanvas.ts:448](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L448)

___

### clone

▸ **clone**(`properties?`): `Promise`<[`Canvas`](Canvas.md)\>

Clones canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | `string`[] | Array of properties to include in the cloned canvas and children |

#### Returns

`Promise`<[`Canvas`](Canvas.md)\>

#### Inherited from

SelectableCanvas.clone

#### Defined in

[src/canvas/StaticCanvas.ts:1314](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1314)

___

### cloneWithoutData

▸ **cloneWithoutData**(): [`Canvas`](Canvas.md)

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

[`Canvas`](Canvas.md)

#### Inherited from

SelectableCanvas.cloneWithoutData

#### Defined in

[src/canvas/StaticCanvas.ts:1324](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1324)

___

### collectObjects

▸ **collectObjects**(`«destructured»`, `«destructured»?`): `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TBBox`](../modules.md#tbbox) |
| `«destructured»` | `Object` |
| › `includeIntersecting?` | `boolean` |

#### Returns

`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

SelectableCanvas.collectObjects

#### Defined in

[src/Collection.ts:316](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L316)

___

### complexity

▸ **complexity**(): `number`

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

SelectableCanvas.complexity

#### Defined in

[src/Collection.ts:157](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L157)

___

### contains

▸ **contains**(`object`, `deep?`): `boolean`

Returns true if collection contains an object.\
**Prefer using FabricObject#isDescendantOf for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to check against |
| `deep?` | `boolean` | `true` to check all descendants, `false` to check only `_objects` |

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

SelectableCanvas.contains

#### Defined in

[src/Collection.ts:140](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L140)

___

### createSVGClipPathMarkup

▸ **createSVGClipPathMarkup**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TSVGExportOptions`](../modules.md#tsvgexportoptions) |

#### Returns

`string`

#### Inherited from

SelectableCanvas.createSVGClipPathMarkup

#### Defined in

[src/canvas/StaticCanvas.ts:1067](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1067)

___

### createSVGFontFacesMarkup

▸ **createSVGFontFacesMarkup**(): `string`

Creates markup containing SVG font faces,
font URLs for font faces must be collected by developers
and are not extracted from the DOM by fabricjs

#### Returns

`string`

#### Inherited from

SelectableCanvas.createSVGFontFacesMarkup

#### Defined in

[src/canvas/StaticCanvas.ts:1110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1110)

___

### createSVGRefElementsMarkup

▸ **createSVGRefElementsMarkup**(): `string`

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

#### Inherited from

SelectableCanvas.createSVGRefElementsMarkup

#### Defined in

[src/canvas/StaticCanvas.ts:1082](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1082)

___

### destroy

▸ **destroy**(): `void`

clear [textEditingManager](Canvas.md#texteditingmanager)

#### Returns

`void`

#### Overrides

SelectableCanvas.destroy

#### Defined in

[src/canvas/Canvas.ts:1591](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1591)

___

### discardActiveObject

▸ **discardActiveObject**(`e?`): this is Object

Discards currently active object and fire events. If the function is called by fabric
as a consequence of a mouse event, the event is passed as a parameter and
sent to the fire function for the custom events. When used as a method the
e param does not have any application.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | [`TPointerEvent`](../modules.md#tpointerevent) |

#### Returns

this is Object

true if the active object has been discarded

#### Inherited from

SelectableCanvas.discardActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1151)

___

### dispose

▸ **dispose**(): `Promise`<`boolean`\>

Waits until rendering has settled to destroy the canvas

#### Returns

`Promise`<`boolean`\>

a promise resolving to `true` once the canvas has been destroyed or to `false` if the canvas has was already destroyed

**`Throws`**

if aborted by a consequent call

#### Inherited from

SelectableCanvas.dispose

#### Defined in

[src/canvas/StaticCanvas.ts:1440](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1440)

___

### drawClipPathOnCanvas

▸ **drawClipPathOnCanvas**(`ctx`, `clipPath`): `void`

Paint the cached clipPath on the lowerCanvasEl

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> | - |

#### Returns

`void`

#### Inherited from

SelectableCanvas.drawClipPathOnCanvas

#### Defined in

[src/canvas/StaticCanvas.ts:597](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L597)

___

### drawControls

▸ **drawControls**(`ctx`): `void`

Draws objects' controls (borders/controls)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render controls on |

#### Returns

`void`

#### Inherited from

SelectableCanvas.drawControls

#### Defined in

[src/canvas/SelectableCanvas.ts:1215](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1215)

___

### endCurrentTransform

▸ **endCurrentTransform**(`e?`): `void`

End the current transform.
You don't usually need to call this method unless you are interrupting a user initiated transform
because of some other event ( a press of key combination, or something that block the user UX )

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | [`TPointerEvent`](../modules.md#tpointerevent) | send the mouse event that generate the finalize down, so it can be used in the event |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:955](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L955)

___

### findDragTargets

▸ `Protected` **findDragTargets**(`e`): `Object`

As opposed to [findTarget](Canvas.md#findtarget) we want the top most object to be returned w/o the active object cutting in line.
Override at will

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `target` | `undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `targets` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Defined in

[src/canvas/Canvas.ts:401](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L401)

___

### findNewLowerIndex

▸ **findNewLowerIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

SelectableCanvas.findNewLowerIndex

#### Defined in

[src/Collection.ts:264](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L264)

___

### findNewUpperIndex

▸ **findNewUpperIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

SelectableCanvas.findNewUpperIndex

#### Defined in

[src/Collection.ts:287](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L287)

___

### findTarget

▸ **findTarget**(`e`): `undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Method that determines what object we are clicking on
11/09/2018 TODO: would be cool if findTarget could discern between being a full target
or the outside part of the corner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | mouse event |

#### Returns

`undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

the target found

#### Inherited from

SelectableCanvas.findTarget

#### Defined in

[src/canvas/SelectableCanvas.ts:712](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L712)

___

### fire

▸ **fire**<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | [`CanvasEvents`](../interfaces/CanvasEvents.md)[`K`] | Options object |

#### Returns

`void`

#### Inherited from

SelectableCanvas.fire

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L159)

___

### fireSyntheticInOutEvents

▸ `Private` **fireSyntheticInOutEvents**<`T`\>(`type`, `«destructured»`): `void`

Manage the synthetic in/out events for the fabric objects on the canvas

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `TSyntheticEventContext` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `«destructured»` | `TSyntheticEventContext`[`T`] & { `fireCanvas?`: `boolean` ; `oldTarget?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> ; `target?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } |

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1293](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1293)

___

### forEachObject

▸ **forEachObject**(`callback`): `void`

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`object`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, `index`: `number`, `array`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]) => `any` | Callback invoked with current object as first argument, index - as second and an array of all objects - as third. |

#### Returns

`void`

#### Inherited from

SelectableCanvas.forEachObject

#### Defined in

[src/Collection.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L83)

___

### get

▸ **get**(`property`): `any`

Basic getter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property name |

#### Returns

`any`

value of a property

#### Inherited from

SelectableCanvas.get

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L59)

___

### getActiveObject

▸ **getActiveObject**(): `undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Returns currently active object

#### Returns

`undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

active object

#### Inherited from

SelectableCanvas.getActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:986](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L986)

___

### getActiveObjects

▸ **getActiveObjects**(): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Returns an array with the current selected objects

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

active objects array

#### Inherited from

SelectableCanvas.getActiveObjects

#### Defined in

[src/canvas/SelectableCanvas.ts:1001](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1001)

___

### getActiveSelection

▸ **getActiveSelection**(): [`ActiveSelection`](ActiveSelection.md)

Returns instance's active selection

#### Returns

[`ActiveSelection`](ActiveSelection.md)

#### Inherited from

SelectableCanvas.getActiveSelection

#### Defined in

[src/canvas/SelectableCanvas.ts:993](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L993)

___

### getCenter

▸ **getCenter**(): `Object`

Returns coordinates of a center of canvas.
Returned value is an object with top and left properties

#### Returns

`Object`

object with "top" and "left" number values

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

**`Deprecated`**

migrate to `getCenterPoint`

#### Inherited from

SelectableCanvas.getCenter

#### Defined in

[src/canvas/StaticCanvas.ts:703](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L703)

___

### getCenterPoint

▸ **getCenterPoint**(): [`Point`](Point.md)

Returns coordinates of a center of canvas.

#### Returns

[`Point`](Point.md)

#### Inherited from

SelectableCanvas.getCenterPoint

#### Defined in

[src/canvas/StaticCanvas.ts:714](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L714)

___

### getContext

▸ **getContext**(): `CanvasRenderingContext2D`

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

SelectableCanvas.getContext

#### Defined in

[src/canvas/StaticCanvas.ts:456](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L456)

___

### getElement

▸ **getElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.getElement

#### Defined in

[src/canvas/StaticCanvas.ts:440](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L440)

___

### getHeight

▸ **getHeight**(): `number`

Returns canvas height (in px)

#### Returns

`number`

#### Inherited from

SelectableCanvas.getHeight

#### Defined in

[src/canvas/StaticCanvas.ts:275](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L275)

___

### getObjects

▸ **getObjects**(`...types?`): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Returns an array of children objects of this instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...types?` | `string`[] | When specified, only objects of these types are returned |

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Inherited from

SelectableCanvas.getObjects

#### Defined in

[src/Collection.ts:100](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L100)

___

### getPointer

▸ **getPointer**(`e`, `ignoreVpt?`): [`Point`](Point.md)

Returns pointer coordinates relative to canvas.
Can return coordinates with or without viewportTransform.
ignoreVpt false gives back coordinates that represent
the point clicked on canvas element.
ignoreVpt true gives back coordinates after being processed
by the viewportTransform ( sort of coordinates of what is displayed
on the canvas where you are clicking.
ignoreVpt true = HTMLElement coordinates relative to top,left
ignoreVpt false, default = fabric space coordinates, the same used for shape position
To interact with your shapes top and left you want to use ignoreVpt true
most of the time, while ignoreVpt false will give you coordinates
compatible with the object.oCoords system.
of the time.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | `undefined` |
| `ignoreVpt` | `boolean` | `false` |

#### Returns

[`Point`](Point.md)

#### Inherited from

SelectableCanvas.getPointer

#### Defined in

[src/canvas/SelectableCanvas.ts:883](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L883)

___

### getPointerId

▸ `Private` **getPointerId**(`evt`): `number`

Return a the id of an event.
returns either the pointerId or the identifier or 0 for the mouse event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `evt` | `TouchEvent` \| `PointerEvent` | Event object |

#### Returns

`number`

#### Defined in

[src/canvas/Canvas.ts:563](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L563)

___

### getRetinaScaling

▸ `Private` **getRetinaScaling**(): `number`

#### Returns

`number`

retinaScaling if applied, otherwise 1;

#### Inherited from

SelectableCanvas.getRetinaScaling

#### Defined in

[src/canvas/StaticCanvas.ts:251](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L251)

___

### getSelectionContext

▸ **getSelectionContext**(): `CanvasRenderingContext2D`

Returns context of canvas where object selection is drawn

#### Returns

`CanvasRenderingContext2D`

**`Alias`**

#### Inherited from

SelectableCanvas.getSelectionContext

#### Defined in

[src/canvas/SelectableCanvas.ts:970](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L970)

___

### getSelectionElement

▸ **getSelectionElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element on which object selection is drawn

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.getSelectionElement

#### Defined in

[src/canvas/SelectableCanvas.ts:978](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L978)

___

### getTopContext

▸ **getTopContext**(): `CanvasRenderingContext2D`

Returns context of top canvas where interactions are drawn

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

SelectableCanvas.getTopContext

#### Defined in

[src/canvas/SelectableCanvas.ts:961](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L961)

___

### getVpCenter

▸ **getVpCenter**(): [`Point`](Point.md)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](Point.md)

vpCenter, viewport center

#### Inherited from

SelectableCanvas.getVpCenter

#### Defined in

[src/canvas/StaticCanvas.ts:781](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L781)

___

### getWidth

▸ **getWidth**(): `number`

Returns canvas width (in px)

#### Returns

`number`

#### Inherited from

SelectableCanvas.getWidth

#### Defined in

[src/canvas/StaticCanvas.ts:267](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L267)

___

### getZoom

▸ **getZoom**(): `number`

Returns canvas zoom level

#### Returns

`number`

#### Inherited from

SelectableCanvas.getZoom

#### Defined in

[src/canvas/StaticCanvas.ts:355](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L355)

___

### handleMultiSelection

▸ `Private` **handleMultiSelection**(`e`, `target?`): `boolean`

## Handles multiple selection
- toggles `target` selection (selects/deselects `target` if it isn't/is selected respectively)
- sets the active object in case it is not set or in case there is a single active object left under active selection.
---
- If the active object is the active selection we add/remove `target` from it
- If not, add the active object and `target` to the active selection and make it the active object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object |
| `target?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | target of event to select/deselect |

#### Returns

`boolean`

true if grouping occurred

#### Defined in

[src/canvas/Canvas.ts:1455](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1455)

___

### handleSelection

▸ `Protected` **handleSelection**(`e`): `boolean`

## Handles selection
- selects objects that are contained in (and possibly intersecting) the selection bounding box
- sets the active object
---
runs on mouse up

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) |

#### Returns

`boolean`

#### Defined in

[src/canvas/Canvas.ts:1535](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L1535)

___

### initElements

▸ `Protected` **initElements**(`el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `string` \| `HTMLCanvasElement` |

#### Returns

`void`

#### Inherited from

SelectableCanvas.initElements

#### Defined in

[src/canvas/SelectableCanvas.ts:307](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L307)

___

### insertAt

▸ **insertAt**(`index`, `...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `...objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Inherited from

SelectableCanvas.insertAt

#### Defined in

[src/canvas/StaticCanvas.ts:202](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L202)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

SelectableCanvas.isEmpty

#### Defined in

[src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L120)

___

### isTargetTransparent

▸ **isTargetTransparent**(`target`, `x`, `y`): `boolean`

Returns true if object is transparent at a certain location
Clarification: this is `is target transparent at location X or are controls there`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to check |
| `x` | `number` | Left coordinate |
| `y` | `number` | Top coordinate |

#### Returns

`boolean`

**`TODO`**

this seems dumb that we treat controls with transparency. we can find controls
programmatically without painting them, the cache canvas optimization is always valid

#### Inherited from

SelectableCanvas.isTargetTransparent

#### Defined in

[src/canvas/SelectableCanvas.ts:447](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L447)

___

### item

▸ **item**(`index`): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Returns object at specified index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

object at index

#### Inherited from

SelectableCanvas.item

#### Defined in

[src/Collection.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L112)

___

### loadFromJSON

▸ **loadFromJSON**(`json`, `reviver?`, `options?`): `Promise`<[`Canvas`](Canvas.md)\>

Populates canvas with data from the specified JSON.
JSON format must conform to the one of fabric.Canvas#toJSON

**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `string` \| `Record`<`string`, `any`\> | JSON string or object |
| `reviver?` | <T\>(`serializedObj`: `Record`<`string`, `any`\>, `instance`: `T`) => `void` | Method for further parsing of object elements, called after each fabric object created. |
| `options?` | [`Abortable`](../modules.md#abortable) | options |

#### Returns

`Promise`<[`Canvas`](Canvas.md)\>

instance

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#deserialization](http://fabricjs.com/fabric-intro-part-3#deserialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle)

**`Example`**

loadFromJSON
```ts
canvas.loadFromJSON(json).then((canvas) => canvas.requestRenderAll());
```

**`Example`**

loadFromJSON with reviver
```ts
canvas.loadFromJSON(json, function(o, object) {
  // `o` = json object
  // `object` = fabric.Object instance
  // ... do some stuff ...
}).then((canvas) => {
  ... canvas is restored, add your code.
});
```

#### Inherited from

SelectableCanvas.loadFromJSON

#### Defined in

[src/canvas/StaticCanvas.ts:1263](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1263)

___

### moveObjectTo

▸ **moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send |
| `index` | `number` | Position to move to |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.moveObjectTo

#### Defined in

[src/Collection.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L254)

___

### off

▸ **off**<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

SelectableCanvas.off

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L120)

▸ **off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`<[`CanvasEvents`](../interfaces/CanvasEvents.md)\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

SelectableCanvas.off

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

SelectableCanvas.off

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L129)

___

### on

▸ **on**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent` \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `drawables`: { `backgroundImage?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } ; `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> ; `subTargets`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] ; `targets`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `ctx`: `CanvasRenderingContext2D`  } \| { `ctx`: `CanvasRenderingContext2D`  } \| [`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `transform`: [`Transform`](../modules.md#transform)  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `selected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] ; `selected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

on

#### Inherited from

SelectableCanvas.on

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L23)

▸ **on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`CanvasEvents`](../interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

SelectableCanvas.on

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L27)

___

### once

▸ **once**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent` \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `drawables`: { `backgroundImage?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } ; `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> ; `subTargets`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] ; `targets`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `ctx`: `CanvasRenderingContext2D`  } \| { `ctx`: `CanvasRenderingContext2D`  } \| [`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `transform`: [`Transform`](../modules.md#transform)  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `selected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] ; `selected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

once

#### Inherited from

SelectableCanvas.once

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L62)

▸ **once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`CanvasEvents`](../interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

SelectableCanvas.once

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L66)

___

### relativePan

▸ **relativePan**(`point`): `void`

Pans viewpoint relatively

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | (position vector) to move by |

#### Returns

`void`

#### Inherited from

SelectableCanvas.relativePan

#### Defined in

[src/canvas/StaticCanvas.ts:427](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L427)

___

### remove

▸ **remove**(`...objects`): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Inherited from

SelectableCanvas.remove

#### Defined in

[src/canvas/StaticCanvas.ts:208](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L208)

___

### removeListeners

▸ **removeListeners**(): `void`

Removes all event listeners

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:201](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/Canvas.ts#L201)

___

### renderAll

▸ **renderAll**(): `void`

Renders both the top canvas and the secondary container canvas.

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderAll

#### Defined in

[src/canvas/SelectableCanvas.ts:363](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L363)

___

### renderAndReset

▸ `Private` **renderAndReset**(): `void`

Function created to be instance bound at initialization
used in requestAnimationFrame rendering
Let the fabricJS call it. If you call it manually you could have more
animationFrame stacking on to of each other
for an imperative rendering, use canvas.renderAll

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderAndReset

#### Defined in

[src/canvas/StaticCanvas.ts:493](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L493)

___

### renderCanvas

▸ **renderCanvas**(`ctx`, `objects`): `void`

Renders background, objects, overlay and controls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderCanvas

#### Defined in

[src/canvas/StaticCanvas.ts:550](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L550)

___

### renderTop

▸ **renderTop**(): `void`

Method to render only the top canvas.
Also used to render the group selection box.
Does not render text selection.

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderTop

#### Defined in

[src/canvas/SelectableCanvas.ts:403](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L403)

___

### renderTopLayer

▸ **renderTopLayer**(`ctx`): `void`

text selection is rendered by the active text instance during the rendering cycle

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Inherited from

SelectableCanvas.renderTopLayer

#### Defined in

[src/canvas/SelectableCanvas.ts:384](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L384)

___

### requestRenderAll

▸ **requestRenderAll**(): `void`

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

#### Inherited from

SelectableCanvas.requestRenderAll

#### Defined in

[src/canvas/StaticCanvas.ts:503](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L503)

___

### restorePointerVpt

▸ **restorePointerVpt**(`pointer`): [`Point`](Point.md)

Returns pointer coordinates without the effect of the viewport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer` | [`Point`](Point.md) | with "x" and "y" number values in canvas HTML coordinates |

#### Returns

[`Point`](Point.md)

object with "x" and "y" number values in fabricCanvas coordinates

#### Inherited from

SelectableCanvas.restorePointerVpt

#### Defined in

[src/canvas/SelectableCanvas.ts:861](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L861)

___

### searchPossibleTargets

▸ **searchPossibleTargets**(`objects?`, `pointer?`): `undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objects?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] | objects array to look into |
| `pointer?` | [`Point`](Point.md) | x,y object of point coordinates we want to check. |

#### Returns

`undefined` \| [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

**top most object on screen** that contains pointer

**`See`**

[_searchPossibleTargets](Canvas.md#_searchpossibletargets)

#### Inherited from

SelectableCanvas.searchPossibleTargets

#### Defined in

[src/canvas/SelectableCanvas.ts:840](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L840)

___

### sendObjectBackwards

▸ **sendObjectBackwards**(`object`, `intersecting?`): `boolean`

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object behind next lower intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.sendObjectBackwards

#### Defined in

[src/Collection.ts:206](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L206)

___

### sendObjectToBack

▸ **sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send to back |

#### Returns

`boolean`

true if change occurred

#### Inherited from

SelectableCanvas.sendObjectToBack

#### Defined in

[src/Collection.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L170)

___

### set

▸ **set**(`key`, `value?`): [`Canvas`](Canvas.md)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`Canvas`](Canvas.md)

#### Inherited from

SelectableCanvas.set

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L29)

___

### setActiveObject

▸ **setActiveObject**(`object`, `e?`): `boolean`

Sets given object as the only active object on canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to set as an active one |
| `e?` | [`TPointerEvent`](../modules.md#tpointerevent) | Event (passed along when firing "object:selected") |

#### Returns

`boolean`

true if the object has been selected

#### Inherited from

SelectableCanvas.setActiveObject

#### Defined in

[src/canvas/SelectableCanvas.ts:1078](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1078)

___

### setCursor

▸ **setCursor**(`value`): `void`

Set the cursor type of the canvas element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Cursor type of the canvas element. |

#### Returns

`void`

**`See`**

http://www.w3.org/TR/css3-ui/#cursor

#### Inherited from

SelectableCanvas.setCursor

#### Defined in

[src/canvas/SelectableCanvas.ts:660](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L660)

___

### setDimensions

▸ **setDimensions**(`dimensions`, `options?`): `void`

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dimensions` | `Partial`<[`TSize`](../modules.md#tsize)\> | Object with width/height properties |
| `options?` | [`TCanvasSizeOptions`](../modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

#### Inherited from

SelectableCanvas.setDimensions

#### Defined in

[src/canvas/StaticCanvas.ts:338](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L338)

___

### setHeight

▸ **setHeight**(`value`, `options?`): `void`

Sets height of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value to set height to |
| `options?` | [`TCanvasSizeOptions`](../modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

**`Deprecated`**

will be removed in 7.0

#### Inherited from

SelectableCanvas.setHeight

#### Defined in

[src/canvas/StaticCanvas.ts:299](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L299)

___

### setTargetFindTolerance

▸ `Private` **setTargetFindTolerance**(`value`): `void`

Set the canvas tolerance value for pixel taret find.
Use only integer numbers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SelectableCanvas.setTargetFindTolerance

#### Defined in

[src/canvas/SelectableCanvas.ts:428](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L428)

___

### setViewportTransform

▸ **setViewportTransform**(`vpt`): `void`

Sets viewport transformation of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vpt` | [`TMat2D`](../modules.md#tmat2d) | a Canvas 2D API transform matrix |

#### Returns

`void`

#### Inherited from

SelectableCanvas.setViewportTransform

#### Defined in

[src/canvas/SelectableCanvas.ts:1169](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L1169)

___

### setWidth

▸ **setWidth**(`value`, `options?`): `void`

Sets width of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value to set width to |
| `options?` | [`TCanvasSizeOptions`](../modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

**`Deprecated`**

will be removed in 7.0

#### Inherited from

SelectableCanvas.setWidth

#### Defined in

[src/canvas/StaticCanvas.ts:287](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L287)

___

### setZoom

▸ **setZoom**(`value`): `void`

Sets zoom level of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | to set zoom to, less than 1 zooms out |

#### Returns

`void`

#### Inherited from

SelectableCanvas.setZoom

#### Defined in

[src/canvas/StaticCanvas.ts:408](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L408)

___

### size

▸ **size**(): `number`

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

SelectableCanvas.size

#### Defined in

[src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L128)

___

### toCanvasElement

▸ **toCanvasElement**(`multiplier?`, `options?`): `HTMLCanvasElement`

Create a new HTMLCanvas element painted with the current canvas content.
No need to resize the actual one or repaint it.
Will transfer object ownership to a new canvas, paint it, and set everything back.
This is an intermediary step used to get to a dataUrl but also it is useful to
create quick image copies of a canvas without passing for the dataUrl string

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `multiplier?` | `number` | `1` | a zoom factor. |
| `options?` | [`TToCanvasElementOptions`](../modules.md#ttocanvaselementoptions)<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> | `undefined` | Cropping informations |

#### Returns

`HTMLCanvasElement`

#### Inherited from

SelectableCanvas.toCanvasElement

#### Defined in

[src/canvas/StaticCanvas.ts:1400](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1400)

___

### toDataURL

▸ **toDataURL**(`options?`): `string`

Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TDataUrlOptions`](../modules.md#tdataurloptions)<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> | Options object |

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

**`See`**

[demo](https://jsfiddle.net/xsjua1rd/)

**`Example`**

Generate jpeg dataURL with lower quality
```ts
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
```

**`Example`**

Generate cropped png dataURL (clipping of canvas)
```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  left: 100,
  top: 100,
  width: 200,
  height: 200
});
```

**`Example`**

Generate double scaled png dataURL
```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});
```

**`Example`**

Generate dataURL with objects that overlap a specified object
```ts
var myObject;
var dataURL = canvas.toDataURL({
  filter: (object) => object.isContainedWithinObject(myObject) || object.intersectsWithObject(myObject)
});
```

#### Inherited from

SelectableCanvas.toDataURL

#### Defined in

[src/canvas/StaticCanvas.ts:1369](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1369)

___

### toDatalessJSON

▸ **toDatalessJSON**(`propertiesToInclude?`): `any`

Returns dataless JSON representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

json string

#### Inherited from

SelectableCanvas.toDatalessJSON

#### Defined in

[src/canvas/StaticCanvas.ts:804](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L804)

___

### toDatalessObject

▸ **toDatalessObject**(`propertiesToInclude?`): `any`

Returns dataless object representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

object representation of an instance

#### Inherited from

SelectableCanvas.toDatalessObject

#### Defined in

[src/canvas/StaticCanvas.ts:841](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L841)

___

### toJSON

▸ **toJSON**(): `any`

Returns Object representation of canvas
this alias is provided because if you call JSON.stringify on an instance,
the toJSON object will be invoked if it exists.
Having a toJSON method means you can do JSON.stringify(myCanvas)

#### Returns

`any`

JSON compatible object

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/pec86/|jsFiddle)

**`Example`**

JSON without additional properties
```ts
var json = canvas.toJSON();
```

**`Example`**

JSON with additional properties included
```ts
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY']);
```

**`Example`**

JSON without default values
```ts
var json = canvas.toJSON();
```

#### Inherited from

SelectableCanvas.toJSON

#### Defined in

[src/canvas/StaticCanvas.ts:832](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L832)

___

### toObject

▸ **toObject**(`propertiesToInclude?`): `any`

Returns object representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

object representation of an instance

#### Inherited from

SelectableCanvas.toObject

#### Defined in

[src/canvas/StaticCanvas.ts:813](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L813)

___

### toSVG

▸ **toSVG**(`options?`, `reviver?`): `string`

Returns SVG representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TSVGExportOptions`](../modules.md#tsvgexportoptions) | Options object for SVG output |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) | Method for further parsing of svg elements, called after each fabric object converted into svg representation. |

#### Returns

`string`

SVG string

**`Function`**

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle)

**`Example`**

Normal SVG output
```ts
var svg = canvas.toSVG();
```

**`Example`**

SVG output without preamble (without &lt;?xml ../>)
```ts
var svg = canvas.toSVG({suppressPreamble: true});
```

**`Example`**

SVG output with viewBox attribute
```ts
var svg = canvas.toSVG({
  viewBox: {
    x: 100,
    y: 100,
    width: 200,
    height: 300
  }
});
```

**`Example`**

SVG output with different encoding (default: UTF-8)
```ts
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
```

**`Example`**

Modify SVG output with reviver function
```ts
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});
```

#### Inherited from

SelectableCanvas.toSVG

#### Defined in

[src/canvas/StaticCanvas.ts:980](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L980)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

string representation of an instance

#### Inherited from

SelectableCanvas.toString

#### Defined in

[src/canvas/StaticCanvas.ts:1498](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1498)

___

### toggle

▸ **toggle**(`property`): [`Canvas`](Canvas.md)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`Canvas`](Canvas.md)

#### Inherited from

SelectableCanvas.toggle

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L46)

___

### viewportCenterObject

▸ **viewportCenterObject**(`object`): `void`

Centers object vertically and horizontally in the viewport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Inherited from

SelectableCanvas.viewportCenterObject

#### Defined in

[src/canvas/StaticCanvas.ts:751](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L751)

___

### viewportCenterObjectH

▸ **viewportCenterObjectH**(`object`): `void`

Centers object horizontally in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Inherited from

SelectableCanvas.viewportCenterObjectH

#### Defined in

[src/canvas/StaticCanvas.ts:759](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L759)

___

### viewportCenterObjectV

▸ **viewportCenterObjectV**(`object`): `void`

Centers object Vertically in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Inherited from

SelectableCanvas.viewportCenterObjectV

#### Defined in

[src/canvas/StaticCanvas.ts:770](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L770)

___

### zoomToPoint

▸ **zoomToPoint**(`point`, `value`): `void`

Sets zoom level of this canvas instance, the zoom centered around point
meaning that following zoom to point with the same point will have the visual
effect of the zoom originating from that point. The point won't move.
It has nothing to do with canvas center or visual center of the viewport.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | to zoom with respect to |
| `value` | `number` | to set zoom to, less than 1 zooms out |

#### Returns

`void`

#### Inherited from

SelectableCanvas.zoomToPoint

#### Defined in

[src/canvas/StaticCanvas.ts:391](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L391)

___

### getDefaults

▸ `Static` **getDefaults**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

SelectableCanvas.getDefaults

#### Defined in

[src/canvas/SelectableCanvas.ts:276](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/SelectableCanvas.ts#L276)
