# Class: ActiveSelection

**`Fires`**

object:added

**`Fires`**

object:removed

**`Fires`**

layout once layout completes

## Hierarchy

- [`Group`](Group.md)

  ↳ **`ActiveSelection`**

## Table of contents

### Constructors

- [constructor](ActiveSelection.md#constructor)

### Properties

- [\_\_corner](ActiveSelection.md#__corner)
- [\_\_owningGroup](ActiveSelection.md#__owninggroup)
- [\_activeObjects](ActiveSelection.md#_activeobjects)
- [\_cacheCanvas](ActiveSelection.md#_cachecanvas)
- [\_cacheContext](ActiveSelection.md#_cachecontext)
- [\_controlsVisibility](ActiveSelection.md#_controlsvisibility)
- [\_objects](ActiveSelection.md#_objects)
- [\_originalOriginX](ActiveSelection.md#_originaloriginx)
- [\_originalOriginY](ActiveSelection.md#_originaloriginy)
- [\_scaling](ActiveSelection.md#_scaling)
- [\_transformDone](ActiveSelection.md#_transformdone)
- [aCoords](ActiveSelection.md#acoords)
- [absolutePositioned](ActiveSelection.md#absolutepositioned)
- [activeOn](ActiveSelection.md#activeon)
- [angle](ActiveSelection.md#angle)
- [backgroundColor](ActiveSelection.md#backgroundcolor)
- [borderColor](ActiveSelection.md#bordercolor)
- [borderDashArray](ActiveSelection.md#borderdasharray)
- [borderOpacityWhenMoving](ActiveSelection.md#borderopacitywhenmoving)
- [borderScaleFactor](ActiveSelection.md#borderscalefactor)
- [cacheHeight](ActiveSelection.md#cacheheight)
- [cacheTranslationX](ActiveSelection.md#cachetranslationx)
- [cacheTranslationY](ActiveSelection.md#cachetranslationy)
- [cacheWidth](ActiveSelection.md#cachewidth)
- [canvas](ActiveSelection.md#canvas)
- [centeredRotation](ActiveSelection.md#centeredrotation)
- [centeredScaling](ActiveSelection.md#centeredscaling)
- [clipPath](ActiveSelection.md#clippath)
- [clipPathId](ActiveSelection.md#clippathid)
- [colorProperties](ActiveSelection.md#colorproperties)
- [controls](ActiveSelection.md#controls)
- [cornerColor](ActiveSelection.md#cornercolor)
- [cornerDashArray](ActiveSelection.md#cornerdasharray)
- [cornerSize](ActiveSelection.md#cornersize)
- [cornerStrokeColor](ActiveSelection.md#cornerstrokecolor)
- [cornerStyle](ActiveSelection.md#cornerstyle)
- [dirty](ActiveSelection.md#dirty)
- [evented](ActiveSelection.md#evented)
- [excludeFromExport](ActiveSelection.md#excludefromexport)
- [fill](ActiveSelection.md#fill)
- [fillRule](ActiveSelection.md#fillrule)
- [flipX](ActiveSelection.md#flipx)
- [flipY](ActiveSelection.md#flipy)
- [globalCompositeOperation](ActiveSelection.md#globalcompositeoperation)
- [group](ActiveSelection.md#group)
- [hasBorders](ActiveSelection.md#hasborders)
- [hasControls](ActiveSelection.md#hascontrols)
- [height](ActiveSelection.md#height)
- [hoverCursor](ActiveSelection.md#hovercursor)
- [includeDefaultValues](ActiveSelection.md#includedefaultvalues)
- [interactive](ActiveSelection.md#interactive)
- [inverted](ActiveSelection.md#inverted)
- [isMoving](ActiveSelection.md#ismoving)
- [layout](ActiveSelection.md#layout)
- [left](ActiveSelection.md#left)
- [lineCoords](ActiveSelection.md#linecoords)
- [lockMovementX](ActiveSelection.md#lockmovementx)
- [lockMovementY](ActiveSelection.md#lockmovementy)
- [lockRotation](ActiveSelection.md#lockrotation)
- [lockScalingFlip](ActiveSelection.md#lockscalingflip)
- [lockScalingX](ActiveSelection.md#lockscalingx)
- [lockScalingY](ActiveSelection.md#lockscalingy)
- [lockSkewingX](ActiveSelection.md#lockskewingx)
- [lockSkewingY](ActiveSelection.md#lockskewingy)
- [matrixCache](ActiveSelection.md#matrixcache)
- [minScaleLimit](ActiveSelection.md#minscalelimit)
- [moveCursor](ActiveSelection.md#movecursor)
- [multiSelectionStacking](ActiveSelection.md#multiselectionstacking)
- [noScaleCache](ActiveSelection.md#noscalecache)
- [oCoords](ActiveSelection.md#ocoords)
- [objectCaching](ActiveSelection.md#objectcaching)
- [opacity](ActiveSelection.md#opacity)
- [originX](ActiveSelection.md#originx)
- [originY](ActiveSelection.md#originy)
- [ownCaching](ActiveSelection.md#owncaching)
- [ownMatrixCache](ActiveSelection.md#ownmatrixcache)
- [padding](ActiveSelection.md#padding)
- [paintFirst](ActiveSelection.md#paintfirst)
- [perPixelTargetFind](ActiveSelection.md#perpixeltargetfind)
- [scaleX](ActiveSelection.md#scalex)
- [scaleY](ActiveSelection.md#scaley)
- [selectable](ActiveSelection.md#selectable)
- [selectionBackgroundColor](ActiveSelection.md#selectionbackgroundcolor)
- [shadow](ActiveSelection.md#shadow)
- [skewX](ActiveSelection.md#skewx)
- [skewY](ActiveSelection.md#skewy)
- [snapAngle](ActiveSelection.md#snapangle)
- [snapThreshold](ActiveSelection.md#snapthreshold)
- [stroke](ActiveSelection.md#stroke)
- [strokeDashArray](ActiveSelection.md#strokedasharray)
- [strokeDashOffset](ActiveSelection.md#strokedashoffset)
- [strokeLineCap](ActiveSelection.md#strokelinecap)
- [strokeLineJoin](ActiveSelection.md#strokelinejoin)
- [strokeMiterLimit](ActiveSelection.md#strokemiterlimit)
- [strokeUniform](ActiveSelection.md#strokeuniform)
- [strokeWidth](ActiveSelection.md#strokewidth)
- [subTargetCheck](ActiveSelection.md#subtargetcheck)
- [top](ActiveSelection.md#top)
- [touchCornerSize](ActiveSelection.md#touchcornersize)
- [transparentCorners](ActiveSelection.md#transparentcorners)
- [visible](ActiveSelection.md#visible)
- [width](ActiveSelection.md#width)
- [zoomX](ActiveSelection.md#zoomx)
- [zoomY](ActiveSelection.md#zoomy)
- [cacheProperties](ActiveSelection.md#cacheproperties)
- [ownDefaults](ActiveSelection.md#owndefaults)
- [stateProperties](ActiveSelection.md#stateproperties)
- [type](ActiveSelection.md#type)

### Accessors

- [type](ActiveSelection.md#type-1)

### Methods

- [\_\_objectMonitor](ActiveSelection.md#__objectmonitor)
- [\_\_objectSelectionMonitor](ActiveSelection.md#__objectselectionmonitor)
- [\_\_serializeObjects](ActiveSelection.md#__serializeobjects)
- [\_adjustObjectPosition](ActiveSelection.md#_adjustobjectposition)
- [\_animate](ActiveSelection.md#_animate)
- [\_applyLayoutStrategy](ActiveSelection.md#_applylayoutstrategy)
- [\_applyPatternForTransformedGradient](ActiveSelection.md#_applypatternfortransformedgradient)
- [\_applyPatternGradientTransform](ActiveSelection.md#_applypatterngradienttransform)
- [\_calculateCurrentDimensions](ActiveSelection.md#_calculatecurrentdimensions)
- [\_constrainScale](ActiveSelection.md#_constrainscale)
- [\_createBaseClipPathSVGMarkup](ActiveSelection.md#_createbaseclippathsvgmarkup)
- [\_createBaseSVGMarkup](ActiveSelection.md#_createbasesvgmarkup)
- [\_createCacheCanvas](ActiveSelection.md#_createcachecanvas)
- [\_createSVGBgRect](ActiveSelection.md#_createsvgbgrect)
- [\_drawBorders](ActiveSelection.md#_drawborders)
- [\_drawClipPath](ActiveSelection.md#_drawclippath)
- [\_enterGroup](ActiveSelection.md#_entergroup)
- [\_exitGroup](ActiveSelection.md#_exitgroup)
- [\_filterObjectsBeforeEnteringGroup](ActiveSelection.md#_filterobjectsbeforeenteringgroup)
- [\_findCenterFromElement](ActiveSelection.md#_findcenterfromelement)
- [\_findCrossPoints](ActiveSelection.md#_findcrosspoints)
- [\_findTargetCorner](ActiveSelection.md#_findtargetcorner)
- [\_getCacheCanvasDimensions](ActiveSelection.md#_getcachecanvasdimensions)
- [\_getCoords](ActiveSelection.md#_getcoords)
- [\_getImageLines](ActiveSelection.md#_getimagelines)
- [\_getLeftTopCoords](ActiveSelection.md#_getlefttopcoords)
- [\_getNonTransformedDimensions](ActiveSelection.md#_getnontransformeddimensions)
- [\_getTransformedDimensions](ActiveSelection.md#_gettransformeddimensions)
- [\_limitCacheSize](ActiveSelection.md#_limitcachesize)
- [\_onAfterObjectsChange](ActiveSelection.md#_onafterobjectschange)
- [\_onObjectAdded](ActiveSelection.md#_onobjectadded)
- [\_onObjectRemoved](ActiveSelection.md#_onobjectremoved)
- [\_onRelativeObjectAdded](ActiveSelection.md#_onrelativeobjectadded)
- [\_onStackOrderChanged](ActiveSelection.md#_onstackorderchanged)
- [\_removeCacheCanvas](ActiveSelection.md#_removecachecanvas)
- [\_removeDefaultValues](ActiveSelection.md#_removedefaultvalues)
- [\_removeShadow](ActiveSelection.md#_removeshadow)
- [\_render](ActiveSelection.md#_render)
- [\_renderBackground](ActiveSelection.md#_renderbackground)
- [\_renderControls](ActiveSelection.md#_rendercontrols)
- [\_renderFill](ActiveSelection.md#_renderfill)
- [\_renderPaintInOrder](ActiveSelection.md#_renderpaintinorder)
- [\_renderStroke](ActiveSelection.md#_renderstroke)
- [\_resetOrigin](ActiveSelection.md#_resetorigin)
- [\_set](ActiveSelection.md#_set)
- [\_setClippingProperties](ActiveSelection.md#_setclippingproperties)
- [\_setFillStyles](ActiveSelection.md#_setfillstyles)
- [\_setLineDash](ActiveSelection.md#_setlinedash)
- [\_setObject](ActiveSelection.md#_setobject)
- [\_setOpacity](ActiveSelection.md#_setopacity)
- [\_setOptions](ActiveSelection.md#_setoptions)
- [\_setOriginToCenter](ActiveSelection.md#_setorigintocenter)
- [\_setShadow](ActiveSelection.md#_setshadow)
- [\_setStrokeStyles](ActiveSelection.md#_setstrokestyles)
- [\_setupCompositeOperation](ActiveSelection.md#_setupcompositeoperation)
- [\_shouldSetNestedCoords](ActiveSelection.md#_shouldsetnestedcoords)
- [\_toSVG](ActiveSelection.md#_tosvg)
- [\_updateCacheCanvas](ActiveSelection.md#_updatecachecanvas)
- [\_watchObject](ActiveSelection.md#_watchobject)
- [add](ActiveSelection.md#add)
- [addPaintOrder](ActiveSelection.md#addpaintorder)
- [animate](ActiveSelection.md#animate)
- [bringObjectForward](ActiveSelection.md#bringobjectforward)
- [bringObjectToFront](ActiveSelection.md#bringobjecttofront)
- [calcACoords](ActiveSelection.md#calcacoords)
- [calcLineCoords](ActiveSelection.md#calclinecoords)
- [calcOCoords](ActiveSelection.md#calcocoords)
- [calcOwnMatrix](ActiveSelection.md#calcownmatrix)
- [calcTransformMatrix](ActiveSelection.md#calctransformmatrix)
- [canDrop](ActiveSelection.md#candrop)
- [canEnterGroup](ActiveSelection.md#canentergroup)
- [clearContextTop](ActiveSelection.md#clearcontexttop)
- [clone](ActiveSelection.md#clone)
- [cloneAsImage](ActiveSelection.md#cloneasimage)
- [collectObjects](ActiveSelection.md#collectobjects)
- [complexity](ActiveSelection.md#complexity)
- [contains](ActiveSelection.md#contains)
- [containsPoint](ActiveSelection.md#containspoint)
- [dispose](ActiveSelection.md#dispose)
- [drawBorders](ActiveSelection.md#drawborders)
- [drawCacheOnCanvas](ActiveSelection.md#drawcacheoncanvas)
- [drawClipPathOnCache](ActiveSelection.md#drawclippathoncache)
- [drawControls](ActiveSelection.md#drawcontrols)
- [drawControlsConnectingLines](ActiveSelection.md#drawcontrolsconnectinglines)
- [drawObject](ActiveSelection.md#drawobject)
- [drawSelectionBackground](ActiveSelection.md#drawselectionbackground)
- [enterGroup](ActiveSelection.md#entergroup)
- [exitGroup](ActiveSelection.md#exitgroup)
- [findCommonAncestors](ActiveSelection.md#findcommonancestors)
- [findNewLowerIndex](ActiveSelection.md#findnewlowerindex)
- [findNewUpperIndex](ActiveSelection.md#findnewupperindex)
- [fire](ActiveSelection.md#fire)
- [forEachControl](ActiveSelection.md#foreachcontrol)
- [forEachObject](ActiveSelection.md#foreachobject)
- [get](ActiveSelection.md#get)
- [getActiveControl](ActiveSelection.md#getactivecontrol)
- [getAncestors](ActiveSelection.md#getancestors)
- [getBoundingRect](ActiveSelection.md#getboundingrect)
- [getCanvasRetinaScaling](ActiveSelection.md#getcanvasretinascaling)
- [getCenterPoint](ActiveSelection.md#getcenterpoint)
- [getCoords](ActiveSelection.md#getcoords)
- [getLayoutStrategyResult](ActiveSelection.md#getlayoutstrategyresult)
- [getObjectOpacity](ActiveSelection.md#getobjectopacity)
- [getObjectScaling](ActiveSelection.md#getobjectscaling)
- [getObjects](ActiveSelection.md#getobjects)
- [getObjectsBoundingBox](ActiveSelection.md#getobjectsboundingbox)
- [getParent](ActiveSelection.md#getparent)
- [getPointByOrigin](ActiveSelection.md#getpointbyorigin)
- [getRelativeCenterPoint](ActiveSelection.md#getrelativecenterpoint)
- [getRelativeX](ActiveSelection.md#getrelativex)
- [getRelativeXY](ActiveSelection.md#getrelativexy)
- [getRelativeY](ActiveSelection.md#getrelativey)
- [getScaledHeight](ActiveSelection.md#getscaledheight)
- [getScaledWidth](ActiveSelection.md#getscaledwidth)
- [getSvgCommons](ActiveSelection.md#getsvgcommons)
- [getSvgFilter](ActiveSelection.md#getsvgfilter)
- [getSvgStyles](ActiveSelection.md#getsvgstyles)
- [getSvgTransform](ActiveSelection.md#getsvgtransform)
- [getTotalAngle](ActiveSelection.md#gettotalangle)
- [getTotalObjectScaling](ActiveSelection.md#gettotalobjectscaling)
- [getViewportTransform](ActiveSelection.md#getviewporttransform)
- [getX](ActiveSelection.md#getx)
- [getXY](ActiveSelection.md#getxy)
- [getY](ActiveSelection.md#gety)
- [hasCommonAncestors](ActiveSelection.md#hascommonancestors)
- [hasFill](ActiveSelection.md#hasfill)
- [hasStroke](ActiveSelection.md#hasstroke)
- [insertAt](ActiveSelection.md#insertat)
- [intersectsWithObject](ActiveSelection.md#intersectswithobject)
- [intersectsWithRect](ActiveSelection.md#intersectswithrect)
- [isCacheDirty](ActiveSelection.md#iscachedirty)
- [isContainedWithinObject](ActiveSelection.md#iscontainedwithinobject)
- [isContainedWithinRect](ActiveSelection.md#iscontainedwithinrect)
- [isControlVisible](ActiveSelection.md#iscontrolvisible)
- [isDescendantOf](ActiveSelection.md#isdescendantof)
- [isEmpty](ActiveSelection.md#isempty)
- [isInFrontOf](ActiveSelection.md#isinfrontof)
- [isNotVisible](ActiveSelection.md#isnotvisible)
- [isOnACache](ActiveSelection.md#isonacache)
- [isOnScreen](ActiveSelection.md#isonscreen)
- [isOverlapping](ActiveSelection.md#isoverlapping)
- [isPartiallyOnScreen](ActiveSelection.md#ispartiallyonscreen)
- [isType](ActiveSelection.md#istype)
- [item](ActiveSelection.md#item)
- [moveObjectTo](ActiveSelection.md#moveobjectto)
- [multiSelectAdd](ActiveSelection.md#multiselectadd)
- [needsItsOwnCache](ActiveSelection.md#needsitsowncache)
- [off](ActiveSelection.md#off)
- [on](ActiveSelection.md#on)
- [onDeselect](ActiveSelection.md#ondeselect)
- [onLayout](ActiveSelection.md#onlayout)
- [onSelect](ActiveSelection.md#onselect)
- [once](ActiveSelection.md#once)
- [prepareBoundingBox](ActiveSelection.md#prepareboundingbox)
- [prepareInitialBoundingBox](ActiveSelection.md#prepareinitialboundingbox)
- [remove](ActiveSelection.md#remove)
- [removeAll](ActiveSelection.md#removeall)
- [render](ActiveSelection.md#render)
- [renderCache](ActiveSelection.md#rendercache)
- [renderDragSourceEffect](ActiveSelection.md#renderdragsourceeffect)
- [renderDropTargetEffect](ActiveSelection.md#renderdroptargeteffect)
- [rotate](ActiveSelection.md#rotate)
- [scale](ActiveSelection.md#scale)
- [scaleToHeight](ActiveSelection.md#scaletoheight)
- [scaleToWidth](ActiveSelection.md#scaletowidth)
- [sendObjectBackwards](ActiveSelection.md#sendobjectbackwards)
- [sendObjectToBack](ActiveSelection.md#sendobjecttoback)
- [set](ActiveSelection.md#set)
- [setControlVisible](ActiveSelection.md#setcontrolvisible)
- [setControlsVisibility](ActiveSelection.md#setcontrolsvisibility)
- [setCoords](ActiveSelection.md#setcoords)
- [setOnGroup](ActiveSelection.md#setongroup)
- [setOptions](ActiveSelection.md#setoptions)
- [setPositionByOrigin](ActiveSelection.md#setpositionbyorigin)
- [setRelativeX](ActiveSelection.md#setrelativex)
- [setRelativeXY](ActiveSelection.md#setrelativexy)
- [setRelativeY](ActiveSelection.md#setrelativey)
- [setX](ActiveSelection.md#setx)
- [setXY](ActiveSelection.md#setxy)
- [setY](ActiveSelection.md#sety)
- [shouldCache](ActiveSelection.md#shouldcache)
- [size](ActiveSelection.md#size)
- [strokeBorders](ActiveSelection.md#strokeborders)
- [toCanvasElement](ActiveSelection.md#tocanvaselement)
- [toClipPathSVG](ActiveSelection.md#toclippathsvg)
- [toDataURL](ActiveSelection.md#todataurl)
- [toDatalessObject](ActiveSelection.md#todatalessobject)
- [toJSON](ActiveSelection.md#tojson)
- [toObject](ActiveSelection.md#toobject)
- [toSVG](ActiveSelection.md#tosvg)
- [toString](ActiveSelection.md#tostring)
- [toggle](ActiveSelection.md#toggle)
- [transform](ActiveSelection.md#transform)
- [transformMatrixKey](ActiveSelection.md#transformmatrixkey)
- [translateToCenterPoint](ActiveSelection.md#translatetocenterpoint)
- [translateToGivenOrigin](ActiveSelection.md#translatetogivenorigin)
- [translateToOriginPoint](ActiveSelection.md#translatetooriginpoint)
- [triggerLayout](ActiveSelection.md#triggerlayout)
- [willDrawShadow](ActiveSelection.md#willdrawshadow)
- [\_fromObject](ActiveSelection.md#_fromobject)
- [fromObject](ActiveSelection.md#fromobject)
- [getDefaults](ActiveSelection.md#getdefaults)

## Constructors

### constructor

• **new ActiveSelection**(`objects?`, `options?`, `objectsRelativeToGroup?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |
| `options?` | [`TOptions`](../modules.md#toptions)<[`ActiveSelectionOptions`](../interfaces/ActiveSelectionOptions.md)\> |
| `objectsRelativeToGroup?` | `boolean` |

#### Overrides

[Group](Group.md).[constructor](Group.md#constructor)

#### Defined in

[src/shapes/ActiveSelection.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L29)

## Properties

### \_\_corner

• `Optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[Group](Group.md).[__corner](Group.md#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L115)

___

### \_\_owningGroup

• `Optional` **\_\_owningGroup**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[Group](Group.md).[__owningGroup](Group.md#__owninggroup)

#### Defined in

[src/shapes/Object/StackedObject.ts:45](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L45)

___

### \_activeObjects

• `Private` **\_activeObjects**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] = `[]`

Used internally to optimize performance
Once an object is selected, instance is rendered without the selected object.
This way instance is cached only once for the entire interaction with the selected object.

#### Inherited from

[Group](Group.md).[_activeObjects](Group.md#_activeobjects)

#### Defined in

[src/shapes/Group.ts:142](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L142)

___

### \_cacheCanvas

• `Optional` `Private` **\_cacheCanvas**: `HTMLCanvasElement`

A reference to the HTMLCanvasElement that is used to contain the cache of the object
this canvas element is resized and cleared as needed
Is marked private, you can read it, don't use it since it is handled by fabric
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[_cacheCanvas](Group.md#_cachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:183](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L183)

___

### \_cacheContext

• `Private` **\_cacheContext**: ``null`` \| `CanvasRenderingContext2D` = `null`

Quick access for the _cacheCanvas rendering context
This is part of the objectCaching feature
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[_cacheContext](Group.md#_cachecontext)

#### Defined in

[src/shapes/Object/Object.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L172)

___

### \_controlsVisibility

• **\_controlsVisibility**: `Record`<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[Group](Group.md).[_controlsVisibility](Group.md#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:122](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L122)

___

### \_objects

• **\_objects**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

**`TODO`**

needs to end up in the constructor too

#### Overrides

[Group](Group.md).[_objects](Group.md#_objects)

#### Defined in

[src/shapes/ActiveSelection.ts:15](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L15)

___

### \_originalOriginX

• `Optional` **\_originalOriginX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

[Group](Group.md).[_originalOriginX](Group.md#_originaloriginx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L39)

___

### \_originalOriginY

• `Optional` **\_originalOriginY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

[Group](Group.md).[_originalOriginY](Group.md#_originaloriginy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L41)

___

### \_scaling

• `Optional` **\_scaling**: `boolean`

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

**`TODO`**

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

[Group](Group.md).[_scaling](Group.md#_scaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:144](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L144)

___

### \_transformDone

• `Optional` `Private` **\_transformDone**: `boolean`

Private. indicates if the object inside a group is on a transformed context or not
or is part of a larger cache for many object ( a group for example)

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[_transformDone](Group.md#_transformdone)

#### Defined in

[src/shapes/Object/Object.ts:263](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L263)

___

### aCoords

• **aCoords**: [`TCornerPoint`](../modules.md#tcornerpoint)

Describe object's corner position in canvas object absolute coordinates
properties are tl,tr,bl,br and describe the four main corner.
each property is an object with x, y, instance of Fabric.Point.
The coordinates depends from this properties: width, height, scaleX, scaleY
skewX, skewY, angle, strokeWidth, top, left.
Those coordinates are useful to understand where an object is. They get updated
with lineCoords or oCoords in interactive cases but they do not need to be updated when zoom or panning change.
The coordinates get updated with

**`Method`**

setCoords.
You can calculate them without updating with

**`Method`**

calcACoords();

#### Inherited from

[Group](Group.md).[aCoords](Group.md#acoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L67)

___

### absolutePositioned

• **absolutePositioned**: `boolean`

#### Inherited from

[Group](Group.md).[absolutePositioned](Group.md#absolutepositioned)

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L136)

___

### activeOn

• **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

[Group](Group.md).[activeOn](Group.md#activeon)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:91](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L91)

___

### angle

• **angle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

[Group](Group.md).[angle](Group.md#angle)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

• **backgroundColor**: `string`

#### Inherited from

[Group](Group.md).[backgroundColor](Group.md#backgroundcolor)

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L123)

___

### borderColor

• **borderColor**: `string`

#### Inherited from

[Group](Group.md).[borderColor](Group.md#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L81)

___

### borderDashArray

• **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

[Group](Group.md).[borderDashArray](Group.md#borderdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L82)

___

### borderOpacityWhenMoving

• **borderOpacityWhenMoving**: `number`

#### Inherited from

[Group](Group.md).[borderOpacityWhenMoving](Group.md#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L83)

___

### borderScaleFactor

• **borderScaleFactor**: `number`

#### Inherited from

[Group](Group.md).[borderScaleFactor](Group.md#borderscalefactor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L84)

___

### cacheHeight

• `Optional` `Private` **cacheHeight**: `number`

Size of the cache canvas, height
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[cacheHeight](Group.md#cacheheight)

#### Defined in

[src/shapes/Object/Object.ts:201](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L201)

___

### cacheTranslationX

• `Optional` `Private` **cacheTranslationX**: `number`

zoom level used on the cacheCanvas to draw the cache, Y axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[cacheTranslationX](Group.md#cachetranslationx)

#### Defined in

[src/shapes/Object/Object.ts:228](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L228)

___

### cacheTranslationY

• `Optional` `Private` **cacheTranslationY**: `number`

translation of the cacheCanvas away from the center, for subpixel accuracy and crispness
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[cacheTranslationY](Group.md#cachetranslationy)

#### Defined in

[src/shapes/Object/Object.ts:237](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L237)

___

### cacheWidth

• `Optional` `Private` **cacheWidth**: `number`

Size of the cache canvas, width
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[cacheWidth](Group.md#cachewidth)

#### Defined in

[src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L192)

___

### canvas

• `Optional` **canvas**: [`Canvas`](Canvas.md)

#### Inherited from

[Group](Group.md).[canvas](Group.md#canvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:146](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L146)

___

### centeredRotation

• **centeredRotation**: `boolean`

#### Inherited from

[Group](Group.md).[centeredRotation](Group.md#centeredrotation)

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L137)

___

### centeredScaling

• **centeredScaling**: ``false``

#### Inherited from

[Group](Group.md).[centeredScaling](Group.md#centeredscaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L58)

___

### clipPath

• `Optional` **clipPath**: `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

[Group](Group.md).[clipPath](Group.md#clippath)

#### Defined in

[src/shapes/Object/Object.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L134)

___

### clipPathId

• `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[Group](Group.md).[clipPathId](Group.md#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### colorProperties

• **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[Group](Group.md).[colorProperties](Group.md#colorproperties)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L20)

___

### controls

• **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[Group](Group.md).[controls](Group.md#controls)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L128)

___

### cornerColor

• **cornerColor**: `string`

#### Inherited from

[Group](Group.md).[cornerColor](Group.md#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L75)

___

### cornerDashArray

• **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

[Group](Group.md).[cornerDashArray](Group.md#cornerdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L78)

___

### cornerSize

• **cornerSize**: `number`

#### Inherited from

[Group](Group.md).[cornerSize](Group.md#cornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L72)

___

### cornerStrokeColor

• **cornerStrokeColor**: `string`

#### Inherited from

[Group](Group.md).[cornerStrokeColor](Group.md#cornerstrokecolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L76)

___

### cornerStyle

• **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

[Group](Group.md).[cornerStyle](Group.md#cornerstyle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L77)

___

### dirty

• **dirty**: `boolean`

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

**`Default`**

```ts
true
```

#### Inherited from

[Group](Group.md).[dirty](Group.md#dirty)

#### Defined in

[src/shapes/Object/Object.ts:162](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L162)

___

### evented

• **evented**: `boolean`

#### Inherited from

[Group](Group.md).[evented](Group.md#evented)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L89)

___

### excludeFromExport

• **excludeFromExport**: `boolean`

#### Inherited from

[Group](Group.md).[excludeFromExport](Group.md#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L130)

___

### fill

• **fill**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[Group](Group.md).[fill](Group.md#fill)

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L113)

___

### fillRule

• **fillRule**: `CanvasFillRule`

#### Inherited from

[Group](Group.md).[fillRule](Group.md#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L114)

___

### flipX

• **flipX**: `boolean`

#### Inherited from

[Group](Group.md).[flipX](Group.md#flipx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

• **flipY**: `boolean`

#### Inherited from

[Group](Group.md).[flipY](Group.md#flipy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L22)

___

### globalCompositeOperation

• **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

[Group](Group.md).[globalCompositeOperation](Group.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:122](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L122)

___

### group

• `Optional` `Private` **group**: [`Group`](Group.md)

A reference to the parent of the object, usually a Group

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[group](Group.md#group)

#### Defined in

[src/shapes/Object/Object.ts:245](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L245)

___

### hasBorders

• **hasBorders**: `boolean`

#### Inherited from

[Group](Group.md).[hasBorders](Group.md#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L85)

___

### hasControls

• **hasControls**: `boolean`

#### Inherited from

[Group](Group.md).[hasControls](Group.md#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L79)

___

### height

• **height**: `number`

#### Inherited from

[Group](Group.md).[height](Group.md#height)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hoverCursor

• **hoverCursor**: ``null`` \| `string`

#### Inherited from

[Group](Group.md).[hoverCursor](Group.md#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L93)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

#### Inherited from

[Group](Group.md).[includeDefaultValues](Group.md#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L129)

___

### interactive

• **interactive**: `boolean`

Used to allow targeting of object inside groups.
set to true if you want to select an object inside a group.\
**REQUIRES** `subTargetCheck` set to true

**`Default`**

```ts

```

#### Inherited from

[Group](Group.md).[interactive](Group.md#interactive)

#### Defined in

[src/shapes/Group.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L134)

___

### inverted

• **inverted**: `boolean`

#### Inherited from

[Group](Group.md).[inverted](Group.md#inverted)

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L135)

___

### isMoving

• `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[Group](Group.md).[isMoving](Group.md#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L134)

___

### layout

• **layout**: [`LayoutStrategy`](../modules.md#layoutstrategy)

Specifies the **layout strategy** for instance
Used by `getLayoutStrategyResult` to calculate layout
`fit-content`, `fit-content-lazy`, `fixed`, `clip-path` are supported out of the box

**`Default`**

```ts

```

#### Inherited from

[Group](Group.md).[layout](Group.md#layout)

#### Defined in

[src/shapes/Group.ts:117](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L117)

___

### left

• **left**: `number`

#### Inherited from

[Group](Group.md).[left](Group.md#left)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L18)

___

### lineCoords

• **lineCoords**: [`TCornerPoint`](../modules.md#tcornerpoint)

Describe object's corner position in canvas element coordinates.
includes padding. Used of object detection.
set and refreshed with setCoords.
Those could go away

**`Todo`**

investigate how to get rid of those

#### Inherited from

[Group](Group.md).[lineCoords](Group.md#linecoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L76)

___

### lockMovementX

• **lockMovementX**: `boolean`

#### Inherited from

[Group](Group.md).[lockMovementX](Group.md#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L63)

___

### lockMovementY

• **lockMovementY**: `boolean`

#### Inherited from

[Group](Group.md).[lockMovementY](Group.md#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L64)

___

### lockRotation

• **lockRotation**: `boolean`

#### Inherited from

[Group](Group.md).[lockRotation](Group.md#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L65)

___

### lockScalingFlip

• **lockScalingFlip**: `boolean`

#### Inherited from

[Group](Group.md).[lockScalingFlip](Group.md#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L70)

___

### lockScalingX

• **lockScalingX**: `boolean`

#### Inherited from

[Group](Group.md).[lockScalingX](Group.md#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L66)

___

### lockScalingY

• **lockScalingY**: `boolean`

#### Inherited from

[Group](Group.md).[lockScalingY](Group.md#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L67)

___

### lockSkewingX

• **lockSkewingX**: `boolean`

#### Inherited from

[Group](Group.md).[lockSkewingX](Group.md#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L68)

___

### lockSkewingY

• **lockSkewingY**: `boolean`

#### Inherited from

[Group](Group.md).[lockSkewingY](Group.md#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L69)

___

### matrixCache

• `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[Group](Group.md).[matrixCache](Group.md#matrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L86)

___

### minScaleLimit

• **minScaleLimit**: `number`

#### Inherited from

[Group](Group.md).[minScaleLimit](Group.md#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:108](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L108)

___

### moveCursor

• **moveCursor**: ``null`` \| `string`

#### Inherited from

[Group](Group.md).[moveCursor](Group.md#movecursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L94)

___

### multiSelectionStacking

• **multiSelectionStacking**: [`MultiSelectionStacking`](../modules.md#multiselectionstacking) = `'canvas-stacking'`

controls how selected objects are added during a multiselection event
- `canvas-stacking` adds the selected object to the active selection while respecting canvas object stacking order
- `selection-order` adds the selected object to the top of the stack,
meaning that the stack is ordered by the order in which objects were selected

**`Default`**

`canvas-stacking`

#### Defined in

[src/shapes/ActiveSelection.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L25)

___

### noScaleCache

• **noScaleCache**: `boolean`

#### Inherited from

[Group](Group.md).[noScaleCache](Group.md#noscalecache)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L57)

___

### oCoords

• **oCoords**: `Record`<`string`, `TOCoord`\>

Describe object's corner position in canvas element coordinates.
properties are depending on control keys and padding the main controls.
each property is an object with x, y and corner.
The `corner` property contains in a similar manner the 4 points of the
interactive area of the corner.
The coordinates depends from the controls positionHandler and are used
to draw and locate controls

#### Inherited from

[Group](Group.md).[oCoords](Group.md#ocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L105)

___

### objectCaching

• **objectCaching**: `boolean`

#### Inherited from

[Group](Group.md).[objectCaching](Group.md#objectcaching)

#### Defined in

[src/shapes/Object/Object.ts:132](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L132)

___

### opacity

• **opacity**: `number`

#### Inherited from

[Group](Group.md).[opacity](Group.md#opacity)

#### Defined in

[src/shapes/Object/Object.ts:110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L110)

___

### originX

• **originX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

[Group](Group.md).[originX](Group.md#originx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

• **originY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

[Group](Group.md).[originY](Group.md#originy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L28)

___

### ownCaching

• `Optional` `Private` **ownCaching**: `boolean`

Indicate if the object is sitting on a cache dedicated to it
or is part of a larger cache for many object ( a group for example)

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[ownCaching](Group.md#owncaching)

#### Defined in

[src/shapes/Object/Object.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L254)

___

### ownMatrixCache

• `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[Group](Group.md).[ownMatrixCache](Group.md#ownmatrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L81)

___

### padding

• **padding**: `number`

#### Inherited from

[Group](Group.md).[padding](Group.md#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L54)

___

### paintFirst

• **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

[Group](Group.md).[paintFirst](Group.md#paintfirst)

#### Defined in

[src/shapes/Object/Object.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L112)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

#### Inherited from

[Group](Group.md).[perPixelTargetFind](Group.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L90)

___

### scaleX

• **scaleX**: `number`

#### Inherited from

[Group](Group.md).[scaleX](Group.md#scalex)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

• **scaleY**: `number`

#### Inherited from

[Group](Group.md).[scaleY](Group.md#scaley)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

• **selectable**: `boolean`

#### Inherited from

[Group](Group.md).[selectable](Group.md#selectable)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L88)

___

### selectionBackgroundColor

• **selectionBackgroundColor**: `string`

#### Inherited from

[Group](Group.md).[selectionBackgroundColor](Group.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L86)

___

### shadow

• **shadow**: ``null`` \| [`Shadow`](Shadow.md)

#### Inherited from

[Group](Group.md).[shadow](Group.md#shadow)

#### Defined in

[src/shapes/Object/Object.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L125)

___

### skewX

• **skewX**: `number`

#### Inherited from

[Group](Group.md).[skewX](Group.md#skewx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

• **skewY**: `number`

#### Inherited from

[Group](Group.md).[skewY](Group.md#skewy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

• `Optional` **snapAngle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

[Group](Group.md).[snapAngle](Group.md#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L60)

___

### snapThreshold

• `Optional` **snapThreshold**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

[Group](Group.md).[snapThreshold](Group.md#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L61)

___

### stroke

• **stroke**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[Group](Group.md).[stroke](Group.md#stroke)

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L115)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

[Group](Group.md).[strokeDashArray](Group.md#strokedasharray)

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L116)

___

### strokeDashOffset

• **strokeDashOffset**: `number`

#### Inherited from

[Group](Group.md).[strokeDashOffset](Group.md#strokedashoffset)

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L117)

___

### strokeLineCap

• **strokeLineCap**: `CanvasLineCap`

#### Inherited from

[Group](Group.md).[strokeLineCap](Group.md#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L118)

___

### strokeLineJoin

• **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

[Group](Group.md).[strokeLineJoin](Group.md#strokelinejoin)

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L119)

___

### strokeMiterLimit

• **strokeMiterLimit**: `number`

#### Inherited from

[Group](Group.md).[strokeMiterLimit](Group.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L120)

___

### strokeUniform

• **strokeUniform**: `boolean`

#### Inherited from

[Group](Group.md).[strokeUniform](Group.md#strokeuniform)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[Group](Group.md).[strokeWidth](Group.md#strokewidth)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L30)

___

### subTargetCheck

• **subTargetCheck**: `boolean`

Used to optimize performance
set to `false` if you don't need contained objects to be targets of events

**`Default`**

```ts

```

#### Inherited from

[Group](Group.md).[subTargetCheck](Group.md#subtargetcheck)

#### Defined in

[src/shapes/Group.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L125)

___

### top

• **top**: `number`

#### Inherited from

[Group](Group.md).[top](Group.md#top)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

• **touchCornerSize**: `number`

#### Inherited from

[Group](Group.md).[touchCornerSize](Group.md#touchcornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L73)

___

### transparentCorners

• **transparentCorners**: `boolean`

#### Inherited from

[Group](Group.md).[transparentCorners](Group.md#transparentcorners)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L74)

___

### visible

• **visible**: `boolean`

#### Inherited from

[Group](Group.md).[visible](Group.md#visible)

#### Defined in

[src/shapes/Object/Object.ts:127](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L127)

___

### width

• **width**: `number`

#### Inherited from

[Group](Group.md).[width](Group.md#width)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:19](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L19)

___

### zoomX

• `Optional` `Private` **zoomX**: `number`

zoom level used on the cacheCanvas to draw the cache, X axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[zoomX](Group.md#zoomx)

#### Defined in

[src/shapes/Object/Object.ts:210](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L210)

___

### zoomY

• `Optional` `Private` **zoomY**: `number`

zoom level used on the cacheCanvas to draw the cache, Y axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](Group.md).[zoomY](Group.md#zoomy)

#### Defined in

[src/shapes/Object/Object.ts:219](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L219)

___

### cacheProperties

▪ `Static` **cacheProperties**: `string`[] = `cacheProperties`

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[Group](Group.md).[cacheProperties](Group.md#cacheproperties)

#### Defined in

[src/shapes/Object/Object.ts:154](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L154)

___

### ownDefaults

▪ `Static` **ownDefaults**: `Record`<`string`, `any`\> = `groupDefaultValues`

#### Inherited from

[Group](Group.md).[ownDefaults](Group.md#owndefaults)

#### Defined in

[src/shapes/Group.ts:151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L151)

___

### stateProperties

▪ `Static` **stateProperties**: `string`[]

#### Inherited from

[Group](Group.md).[stateProperties](Group.md#stateproperties)

#### Defined in

[src/shapes/Group.ts:144](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L144)

___

### type

▪ `Static` **type**: `string` = `'ActiveSelection'`

#### Overrides

[Group](Group.md).[type](Group.md#type)

#### Defined in

[src/shapes/ActiveSelection.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L27)

## Accessors

### type

• `get` **type**(): `string`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists because is very hard to catch all the ways in which a type value
could be set in the instance

#### Returns

`string`

**`TODO`**

add sustainable warning message

**`Deprecated`**

#### Inherited from

Group.type

#### Defined in

[src/shapes/Object/Object.ts:289](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L289)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

Group.type

#### Defined in

[src/shapes/Object/Object.ts:297](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L297)

## Methods

### \_\_objectMonitor

▸ `Private` **__objectMonitor**(`ev`): `void`

invalidates layout on object modified

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | [`ModifiedEvent`](../interfaces/ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[__objectMonitor](Group.md#__objectmonitor)

#### Defined in

[src/shapes/Group.ts:357](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L357)

___

### \_\_objectSelectionMonitor

▸ `Private` **__objectSelectionMonitor**(): `void`

we don't want the selection monitor to be active

#### Returns

`void`

#### Overrides

[Group](Group.md).[__objectSelectionMonitor](Group.md#__objectselectionmonitor)

#### Defined in

[src/shapes/ActiveSelection.ts:49](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L49)

___

### \_\_serializeObjects

▸ `Private` **__serializeObjects**(`method?`, `propertiesToInclude?`): `any`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method?` | ``"toObject"`` \| ``"toDatalessObject"`` |  |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`[]

serialized objects

#### Inherited from

[Group](Group.md).[__serializeObjects](Group.md#__serializeobjects)

#### Defined in

[src/shapes/Group.ts:965](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L965)

___

### \_adjustObjectPosition

▸ `Private` **_adjustObjectPosition**(`object`, `diff`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `diff` | [`Point`](Point.md) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_adjustObjectPosition](Group.md#_adjustobjectposition)

#### Defined in

[src/shapes/Group.ts:589](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L589)

___

### \_animate

▸ `Private` **_animate**<`T`\>(`key`, `endValue`, `options?`): [`TAnimation`](../modules/util.md#tanimation)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](../modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Property to animate |
| `endValue` | `T` | - |
| `options?` | `Partial`<[`AnimationOptions`](../modules/util.md#animationoptions)<`T`\>\> | Options object |

#### Returns

[`TAnimation`](../modules/util.md#tanimation)<`T`\>

#### Inherited from

[Group](Group.md).[_animate](Group.md#_animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:50](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L50)

___

### \_applyLayoutStrategy

▸ `Private` **_applyLayoutStrategy**(`context`): `void`

initial layout logic:
calculate bbox of objects (if necessary) and translate it according to options received from the constructor (left, top, width, height)
so it is placed in the center of the bbox received from the constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`LayoutContext`](../modules.md#layoutcontext) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_applyLayoutStrategy](Group.md#_applylayoutstrategy)

#### Defined in

[src/shapes/Group.ts:604](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L604)

___

### \_applyPatternForTransformedGradient

▸ `Private` **_applyPatternForTransformedGradient**(`ctx`, `filler`): `void`

This function try to patch the missing gradientTransform on canvas gradients.
transforming a context to transform the gradient, is going to transform the stroke too.
we want to transform the gradient but not the stroke operation, so we create
a transformed gradient on a pattern and then we use the pattern instead of the gradient.
this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
is limited.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `filler` | [`TFiller`](../modules.md#tfiller) |  |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_applyPatternForTransformedGradient](Group.md#_applypatternfortransformedgradient)

#### Defined in

[src/shapes/Object/Object.ts:1254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1254)

___

### \_applyPatternGradientTransform

▸ `Private` **_applyPatternGradientTransform**(`ctx`, `filler`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `filler` | [`TFiller`](../modules.md#tfiller) | [Pattern](Pattern.md) or [Gradient](Gradient.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

[Group](Group.md).[_applyPatternGradientTransform](Group.md#_applypatterngradienttransform)

#### Defined in

[src/shapes/Object/Object.ts:1151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1151)

___

### \_calculateCurrentDimensions

▸ `Private` **_calculateCurrentDimensions**(`options?`): [`Point`](Point.md)

Calculate object dimensions for controls box, including padding and canvas zoom.
and active selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | transform options |

#### Returns

[`Point`](Point.md)

dimensions

#### Inherited from

[Group](Group.md).[_calculateCurrentDimensions](Group.md#_calculatecurrentdimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:809](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L809)

___

### \_constrainScale

▸ `Private` **_constrainScale**(`value`): `number`

Makes sure the scale is valid and modifies it if necessary
@todo: this is a control action issue, not a geometry one

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

constrained value;

#### Inherited from

[Group](Group.md).[_constrainScale](Group.md#_constrainscale)

#### Defined in

[src/shapes/Object/Object.ts:674](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L674)

___

### \_createBaseClipPathSVGMarkup

▸ `Private` **_createBaseClipPathSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`string`

#### Inherited from

[Group](Group.md).[_createBaseClipPathSVGMarkup](Group.md#_createbaseclippathsvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:158](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L158)

___

### \_createBaseSVGMarkup

▸ `Private` **_createBaseSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `noStyle?` | `boolean` |
| › `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) |
| › `withShadow?` | `boolean` |

#### Returns

`string`

#### Inherited from

[Group](Group.md).[_createBaseSVGMarkup](Group.md#_createbasesvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

▸ `Private` **_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_createCacheCanvas](Group.md#_createcachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:318](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L318)

___

### \_createSVGBgRect

▸ `Private` **_createSVGBgRect**(`reviver?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`string`

#### Inherited from

[Group](Group.md).[_createSVGBgRect](Group.md#_createsvgbgrect)

#### Defined in

[src/shapes/Group.ts:1026](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L1026)

___

### \_drawBorders

▸ `Private` **_drawBorders**(`ctx`, `size`, `styleOverride?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `size` | [`Point`](Point.md) |  |
| `styleOverride` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_drawBorders](Group.md#_drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:386](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L386)

___

### \_drawClipPath

▸ **_drawClipPath**(`ctx`, `clipPath?`): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `clipPath?` | `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_drawClipPath](Group.md#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:943](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L943)

___

### \_enterGroup

▸ `Private` **_enterGroup**(`object`, `removeParentTransform?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object is in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_enterGroup](Group.md#_entergroup)

#### Defined in

[src/shapes/Group.ts:420](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L420)

___

### \_exitGroup

▸ `Private` **_exitGroup**(`object`, `removeParentTransform?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object should exit group without applying group's transform to it |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_exitGroup](Group.md#_exitgroup)

#### Defined in

[src/shapes/Group.ts:463](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L463)

___

### \_filterObjectsBeforeEnteringGroup

▸ `Private` **_filterObjectsBeforeEnteringGroup**(`objects`): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Override this method to enhance performance (for groups with a lot of objects).
If Overriding, be sure not pass illegal objects to group - it will break your app.

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Inherited from

[Group](Group.md).[_filterObjectsBeforeEnteringGroup](Group.md#_filterobjectsbeforeenteringgroup)

#### Defined in

[src/shapes/Group.ts:230](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L230)

___

### \_findCenterFromElement

▸ `Private` **_findCenterFromElement**(): [`Point`](Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates

#### Returns

[`Point`](Point.md)

center point from element coordinates

#### Inherited from

[Group](Group.md).[_findCenterFromElement](Group.md#_findcenterfromelement)

#### Defined in

[src/shapes/Object/Object.ts:1302](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1302)

___

### \_findCrossPoints

▸ `Private` **_findCrossPoints**(`point`, `lines`): `number`

Helper method to determine how many cross points are between the 4 object edges
and the horizontal line determined by a point on canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | Point to check |
| `lines` | `TBBoxLines` | Coordinates of the object being evaluated |

#### Returns

`number`

number of crossPoint

#### Inherited from

[Group](Group.md).[_findCrossPoints](Group.md#_findcrosspoints)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:494](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L494)

___

### \_findTargetCorner

▸ `Private` **_findTargetCorner**(`pointer`, `forTouch?`): `string`

Determines which corner is under the mouse cursor, represented by `pointer`.
This function is return a corner only if the object is the active one.
This is done to avoid selecting corner of non active object and activating transformations
rather than drag action. The default behavior of fabricJS is that if you want to transform
an object, first you select it to show the control set

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pointer` | [`Point`](Point.md) | `undefined` | The pointer indicating the mouse position |
| `forTouch` | `boolean` | `false` | indicates if we are looking for interaction area with a touch action |

#### Returns

`string`

corner code (tl, tr, bl, br, etc.), or 0 if nothing is found.

#### Inherited from

[Group](Group.md).[_findTargetCorner](Group.md#_findtargetcorner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:191](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L191)

___

### \_getCacheCanvasDimensions

▸ `Private` **_getCacheCanvasDimensions**(): [`TCacheCanvasDimensions`](../modules.md#tcachecanvasdimensions)

Return the dimension and the zoom level needed to create a cache canvas
big enough to host the object to be cached.

#### Returns

[`TCacheCanvasDimensions`](../modules.md#tcachecanvasdimensions)

.x width of object to be cached

.y height of object to be cached

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

[Group](Group.md).[_getCacheCanvasDimensions](Group.md#_getcachecanvasdimensions)

#### Defined in

[src/shapes/Object/Object.ts:389](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L389)

___

### \_getCoords

▸ **_getCoords**(`absolute?`, `calculate?`): [`TCornerPoint`](../modules.md#tcornerpoint)

return correct set of coordinates for intersection
this will return either aCoords or lineCoords.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `absolute` | `boolean` | `false` | will return aCoords if true or lineCoords |
| `calculate` | `boolean` | `false` | will calculate the coords or use the one that are attached to the object instance |

#### Returns

[`TCornerPoint`](../modules.md#tcornerpoint)

{tl, tr, br, bl} points

#### Inherited from

[Group](Group.md).[_getCoords](Group.md#_getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:215](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L215)

___

### \_getImageLines

▸ `Private` **_getImageLines**(`lineCoords`): `TBBoxLines`

Method that returns an object with the object edges in it, given the coordinates of the corners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineCoords` | [`TCornerPoint`](../modules.md#tcornerpoint) | or aCoords Coordinates of the object corners |

#### Returns

`TBBoxLines`

#### Inherited from

[Group](Group.md).[_getImageLines](Group.md#_getimagelines)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:448](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L448)

___

### \_getLeftTopCoords

▸ `Private` **_getLeftTopCoords**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

#### Inherited from

[Group](Group.md).[_getLeftTopCoords](Group.md#_getlefttopcoords)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:270](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L270)

___

### \_getNonTransformedDimensions

▸ `Private` **_getNonTransformedDimensions**(): [`Point`](Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](Point.md)

dimensions

#### Inherited from

[Group](Group.md).[_getNonTransformedDimensions](Group.md#_getnontransformeddimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:798](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L798)

___

### \_getTransformedDimensions

▸ `Private` **_getTransformedDimensions**(`options?`): [`Point`](Point.md)

Calculate object bounding box dimensions from its properties scale, skew.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`Point`](Point.md)

dimensions

#### Inherited from

[Group](Group.md).[_getTransformedDimensions](Group.md#_gettransformeddimensions)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L53)

___

### \_limitCacheSize

▸ **_limitCacheSize**(`dims`): `any`

Limit the cache dimensions so that X * Y do not cross config.perfLimitSizeTotal
and each side do not cross fabric.cacheSideLimit
those numbers are configurable so that you can get as much detail as you want
making bargain with performances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dims` | `any` |

#### Returns

`any`

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

[Group](Group.md).[_limitCacheSize](Group.md#_limitcachesize)

#### Defined in

[src/shapes/Object/Object.ts:341](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L341)

___

### \_onAfterObjectsChange

▸ `Private` **_onAfterObjectsChange**(`type`, `targets`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"added"`` \| ``"removed"`` |
| `targets` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

`void`

#### Overrides

[Group](Group.md).[_onAfterObjectsChange](Group.md#_onafterobjectschange)

#### Defined in

[src/shapes/ActiveSelection.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L113)

___

### \_onObjectAdded

▸ **_onObjectAdded**(`object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_onObjectAdded](Group.md#_onobjectadded)

#### Defined in

[src/shapes/Group.ts:271](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L271)

___

### \_onObjectRemoved

▸ `Private` **_onObjectRemoved**(`object`, `removeParentTransform?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object should exit group without applying group's transform to it |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_onObjectRemoved](Group.md#_onobjectremoved)

#### Defined in

[src/shapes/Group.ts:288](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L288)

___

### \_onRelativeObjectAdded

▸ **_onRelativeObjectAdded**(`object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_onRelativeObjectAdded](Group.md#_onrelativeobjectadded)

#### Defined in

[src/shapes/Group.ts:277](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L277)

___

### \_onStackOrderChanged

▸ **_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_onStackOrderChanged](Group.md#_onstackorderchanged)

#### Defined in

[src/shapes/Group.ts:307](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L307)

___

### \_removeCacheCanvas

▸ **_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_removeCacheCanvas](Group.md#_removecachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:797](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L797)

___

### \_removeDefaultValues

▸ `Private` **_removeDefaultValues**<`T`\>(`object`): `Partial`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

`Partial`<`T`\>

#### Inherited from

[Group](Group.md).[_removeDefaultValues](Group.md#_removedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:589](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L589)

___

### \_removeShadow

▸ `Private` **_removeShadow**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_removeShadow](Group.md#_removeshadow)

#### Defined in

[src/shapes/Object/Object.ts:1137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1137)

___

### \_render

▸ `Private` **_render**(`ctx`): `void`

function that actually render something on the context.
empty here to allow Obects to work on tests to benchmark fabric functionalites
not related to rendering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_render](Group.md#_render)

#### Defined in

[src/shapes/Object/Object.ts:1196](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1196)

___

### \_renderBackground

▸ `Private` **_renderBackground**(`ctx`): `void`

Draws a background for the object big as its untransformed dimensions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_renderBackground](Group.md#_renderbackground)

#### Defined in

[src/shapes/Object/Object.ts:1005](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1005)

___

### \_renderControls

▸ **_renderControls**(`ctx`, `styleOverride?`, `childrenOverride?`): `void`

Renders controls and borders for the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `styleOverride?` | `Partial`<`Pick`<`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | properties to override the object style |
| `childrenOverride?` | `Partial`<`Pick`<`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | properties to override the children overrides |

#### Returns

`void`

#### Overrides

[Group](Group.md).[_renderControls](Group.md#_rendercontrols)

#### Defined in

[src/shapes/ActiveSelection.ts:178](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L178)

___

### \_renderFill

▸ `Private` **_renderFill**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_renderFill](Group.md#_renderfill)

#### Defined in

[src/shapes/Object/Object.ts:1204](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1204)

___

### \_renderPaintInOrder

▸ `Private` **_renderPaintInOrder**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_renderPaintInOrder](Group.md#_renderpaintinorder)

#### Defined in

[src/shapes/Object/Object.ts:1179](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1179)

___

### \_renderStroke

▸ `Private` **_renderStroke**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_renderStroke](Group.md#_renderstroke)

#### Defined in

[src/shapes/Object/Object.ts:1223](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1223)

___

### \_resetOrigin

▸ `Private` **_resetOrigin**(): `void`

Resets the origin/position of the object to it's original origin

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_resetOrigin](Group.md#_resetorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:246](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L246)

___

### \_set

▸ `Private` **_set**(`key`, `value`): [`ActiveSelection`](ActiveSelection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`ActiveSelection`](ActiveSelection.md)

#### Inherited from

[Group](Group.md).[_set](Group.md#_set)

#### Defined in

[src/shapes/Group.ts:316](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L316)

___

### \_setClippingProperties

▸ **_setClippingProperties**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_setClippingProperties](Group.md#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1083](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1083)

___

### \_setFillStyles

▸ **_setFillStyles**(`ctx`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `«destructured»` | `Pick`<[`ActiveSelection`](ActiveSelection.md), ``"fill"``\> |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_setFillStyles](Group.md#_setfillstyles)

#### Defined in

[src/shapes/Object/Object.ts:1072](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1072)

___

### \_setLineDash

▸ `Private` **_setLineDash**(`ctx`, `dashArray?`): `void`

Sets line dash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to set the dash line on |
| `dashArray?` | ``null`` \| `number`[] | array representing dashes |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_setLineDash](Group.md#_setlinedash)

#### Defined in

[src/shapes/Object/Object.ts:1095](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1095)

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

[Group](Group.md).[_setObject](Group.md#_setobject)

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L18)

___

### \_setOpacity

▸ `Private` **_setOpacity**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_setOpacity](Group.md#_setopacity)

#### Defined in

[src/shapes/Object/Object.ts:1022](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1022)

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

[Group](Group.md).[_setOptions](Group.md#_setoptions)

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L9)

___

### \_setOriginToCenter

▸ `Private` **_setOriginToCenter**(): `void`

Sets the origin/position of the object to it's center point

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_setOriginToCenter](Group.md#_setorigintocenter)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:228](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L228)

___

### \_setShadow

▸ `Private` **_setShadow**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_setShadow](Group.md#_setshadow)

#### Defined in

[src/shapes/Object/Object.ts:1110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1110)

___

### \_setStrokeStyles

▸ **_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `decl` | `Pick`<[`ActiveSelection`](ActiveSelection.md), ``"strokeDashOffset"`` \| ``"strokeLineCap"`` \| ``"strokeLineJoin"`` \| ``"strokeMiterLimit"`` \| ``"strokeWidth"`` \| ``"stroke"``\> |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_setStrokeStyles](Group.md#_setstrokestyles)

#### Defined in

[src/shapes/Object/Object.ts:1030](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1030)

___

### \_setupCompositeOperation

▸ **_setupCompositeOperation**(`ctx`): `void`

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Rendering canvas context |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_setupCompositeOperation](Group.md#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1524](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1524)

___

### \_shouldSetNestedCoords

▸ `Private` **_shouldSetNestedCoords**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Group](Group.md).[_shouldSetNestedCoords](Group.md#_shouldsetnestedcoords)

#### Defined in

[src/shapes/ActiveSelection.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L41)

___

### \_toSVG

▸ **_toSVG**(`reviver?`): `string`[]

Returns svg representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`[]

svg representation of an instance

#### Inherited from

[Group](Group.md).[_toSVG](Group.md#_tosvg)

#### Defined in

[src/shapes/Group.ts:1042](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L1042)

___

### \_updateCacheCanvas

▸ `Private` **_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

[Group](Group.md).[_updateCacheCanvas](Group.md#_updatecachecanvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L164)

___

### \_watchObject

▸ `Private` **_watchObject**(`watch`, `object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `watch` | `boolean` |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[_watchObject](Group.md#_watchobject)

#### Defined in

[src/shapes/Group.ts:387](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L387)

___

### add

▸ **add**(`...objects`): `number`

Add objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Inherited from

[Group](Group.md).[add](Group.md#add)

#### Defined in

[src/shapes/Group.ts:241](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L241)

___

### addPaintOrder

▸ **addPaintOrder**(`this`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

[Group](Group.md).[addPaintOrder](Group.md#addpaintorder)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

___

### animate

▸ **animate**<`T`\>(`animatable`, `options?`): `Record`<`string`, [`TAnimation`](../modules/util.md#tanimation)<`T`\>\>

Animates object's properties

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](../modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animatable` | `Record`<`string`, `T`\> | map of keys and end values |
| `options?` | `Partial`<[`AnimationOptions`](../modules/util.md#animationoptions)<`T`\>\> |  |

#### Returns

`Record`<`string`, [`TAnimation`](../modules/util.md#tanimation)<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Inherited from

[Group](Group.md).[animate](Group.md#animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L34)

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

[Group](Group.md).[bringObjectForward](Group.md#bringobjectforward)

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

[Group](Group.md).[bringObjectToFront](Group.md#bringobjecttofront)

#### Defined in

[src/Collection.ts:186](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L186)

___

### calcACoords

▸ **calcACoords**(): [`TCornerPoint`](../modules.md#tcornerpoint)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](../modules.md#tcornerpoint)

#### Inherited from

[Group](Group.md).[calcACoords](Group.md#calcacoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:664](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L664)

___

### calcLineCoords

▸ **calcLineCoords**(): [`TCornerPoint`](../modules.md#tcornerpoint)

return the coordinate of the 4 corners of the bounding box in HTMLCanvasElement coordinates
used for bounding box interactivity with the mouse

#### Returns

[`TCornerPoint`](../modules.md#tcornerpoint)

#### Inherited from

[Group](Group.md).[calcLineCoords](Group.md#calclinecoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:618](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L618)

___

### calcOCoords

▸ **calcOCoords**(): `Record`<`string`, `TOCoord`\>

Calculates the coordinates of the center of each control plus the corners of the control itself
This basically just delegates to each control positionHandler
WARNING: changing what is passed to positionHandler is a breaking change, since position handler
is a public api and should be done just if extremely necessary

#### Returns

`Record`<`string`, `TOCoord`\>

#### Inherited from

[Group](Group.md).[calcOCoords](Group.md#calcocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:236](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L236)

___

### calcOwnMatrix

▸ **calcOwnMatrix**(): [`TMat2D`](../modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](../modules.md#tmat2d)

transform matrix for the object

#### Inherited from

[Group](Group.md).[calcOwnMatrix](Group.md#calcownmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:767](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L767)

___

### calcTransformMatrix

▸ **calcTransformMatrix**(`skipGroup?`): [`TMat2D`](../modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `skipGroup?` | `boolean` | `false` | return transform matrix for object not counting parent transformations There are some situation in which this is useful to avoid the fake rotation. |

#### Returns

[`TMat2D`](../modules.md#tmat2d)

transform matrix for the object

#### Inherited from

[Group](Group.md).[calcTransformMatrix](Group.md#calctransformmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:739](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L739)

___

### canDrop

▸ **canDrop**(`e`): `boolean`

Override to customize drag and drop behavior
return true if the object currently dragged can be dropped on the target

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[canDrop](Group.md#candrop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:649](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L649)

___

### canEnterGroup

▸ `Private` **canEnterGroup**(`object`): `boolean`

Checks if object can enter group and logs relevant warnings

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[canEnterGroup](Group.md#canentergroup)

#### Defined in

[src/shapes/Group.ts:204](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L204)

___

### clearContextTop

▸ **clearContextTop**(`restoreManually?`): `undefined` \| `CanvasRenderingContext2D`

Clears the canvas.contextTop in a specific area that corresponds to the object's bounding box
that is in the canvas.contextContainer.
This function is used to clear pieces of contextTop where we render ephemeral effects on top of the object.
Example: blinking cursor text selection, drag effects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `restoreManually?` | `boolean` | When true won't restore the context after clear, in order to draw something else. |

#### Returns

`undefined` \| `CanvasRenderingContext2D`

canvas.contextTop that is either still transformed
with the object transformMatrix, or restored to neutral transform

**`Todo`**

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Inherited from

[Group](Group.md).[clearContextTop](Group.md#clearcontexttop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:592](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L592)

___

### clone

▸ **clone**(`propertiesToInclude?`): `Promise`<[`ActiveSelection`](ActiveSelection.md)\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`<[`ActiveSelection`](ActiveSelection.md)\>

#### Inherited from

[Group](Group.md).[clone](Group.md#clone)

#### Defined in

[src/shapes/Object/Object.ts:1311](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1311)

___

### cloneAsImage

▸ **cloneAsImage**(`options?`): [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Creates an instance of Image out of an object
makes use of toCanvasElement.
Once this method was based on toDataUrl and loadImage, so it also had a quality
and format option. toCanvasElement is faster and produce no loss of quality.
If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
toCanvasElement and then toBlob from the obtained canvas is also a good option.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | for clone as image, passed to toDataURL |

#### Returns

[`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object cloned as image.

**`Todo`**

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Inherited from

[Group](Group.md).[cloneAsImage](Group.md#cloneasimage)

#### Defined in

[src/shapes/Object/Object.ts:1337](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1337)

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

[Group](Group.md).[collectObjects](Group.md#collectobjects)

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

[Group](Group.md).[complexity](Group.md#complexity)

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

[Group](Group.md).[contains](Group.md#contains)

#### Defined in

[src/Collection.ts:140](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L140)

___

### containsPoint

▸ **containsPoint**(`point`, `lines?`, `absolute?`, `calculate?`): `boolean`

Checks if point is inside the object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | `undefined` | Point to check against |
| `lines?` | `TBBoxLines` | `undefined` | object returned from |
| `absolute?` | `boolean` | `false` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if point is inside the object

**`Method`**

_getImageLines

#### Inherited from

[Group](Group.md).[containsPoint](Group.md#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:357](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L357)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[dispose](Group.md#dispose)

#### Defined in

[src/shapes/Group.ts:1014](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L1014)

___

### drawBorders

▸ **drawBorders**(`ctx`, `options`, `styleOverride?`): `void`

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `options` | `Required`<`Omit`<[`TComposeMatrixArgs`](../modules/util.md#tcomposematrixargs), ``"flipX"`` \| ``"flipY"``\>\> | object representing current object parameters |
| `styleOverride?` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[drawBorders](Group.md#drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:450](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L450)

___

### drawCacheOnCanvas

▸ **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `TCachedFabricObject`<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> | - |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[drawCacheOnCanvas](Group.md#drawcacheoncanvas)

#### Defined in

[src/shapes/Object/Object.ts:961](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L961)

___

### drawClipPathOnCache

▸ **drawClipPathOnCache**(`ctx`, `clipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> |  |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[drawClipPathOnCache](Group.md#drawclippathoncache)

#### Defined in

[src/shapes/Object/Object.ts:890](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L890)

___

### drawControls

▸ **drawControls**(`ctx`, `styleOverride?`): `void`

Draws corners of an object's bounding box.
Requires public properties: width, height
Requires public options: cornerSize, padding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `styleOverride` | `Partial`<`Pick`<`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | object to override the object style |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[drawControls](Group.md#drawcontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:514](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L514)

___

### drawControlsConnectingLines

▸ **drawControlsConnectingLines**(`ctx`, `size`): `void`

Draws lines from a borders of an object's bounding box to controls that have `withConnection` property set.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `size` | [`Point`](Point.md) | object size x = width, y = height |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[drawControlsConnectingLines](Group.md#drawcontrolsconnectinglines)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:484](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L484)

___

### drawObject

▸ **drawObject**(`ctx`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[drawObject](Group.md#drawobject)

#### Defined in

[src/shapes/Group.ts:531](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L531)

___

### drawSelectionBackground

▸ **drawSelectionBackground**(`ctx`): `void`

Draws a colored layer behind the object, inside its selection borders.
Requires public options: padding, selectionBackgroundColor
this function is called when the context is transformed
has checks to be skipped when the object is on a staticCanvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |

#### Returns

`void`

**`Todo`**

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Inherited from

[Group](Group.md).[drawSelectionBackground](Group.md#drawselectionbackground)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:352](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L352)

___

### enterGroup

▸ `Private` **enterGroup**(`object`, `removeParentTransform?`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object is in canvas coordinate plane |

#### Returns

`boolean`

true if object entered group

#### Overrides

[Group](Group.md).[enterGroup](Group.md#entergroup)

#### Defined in

[src/shapes/ActiveSelection.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L81)

___

### exitGroup

▸ `Private` **exitGroup**(`object`, `removeParentTransform?`): `void`

we want objects to retain their canvas ref when exiting instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object should exit group without applying group's transform to it |

#### Returns

`void`

#### Overrides

[Group](Group.md).[exitGroup](Group.md#exitgroup)

#### Defined in

[src/shapes/ActiveSelection.ts:98](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L98)

___

### findCommonAncestors

▸ **findCommonAncestors**<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActiveSelection`](ActiveSelection.md)<`T`\> |
| `S` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `S` | finds only ancestors that are objects (without canvas) |

#### Returns

`AncestryComparison`<`S`\>

an object that represent the ancestry situation.

#### Inherited from

[Group](Group.md).[findCommonAncestors](Group.md#findcommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L99)

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

[Group](Group.md).[findNewLowerIndex](Group.md#findnewlowerindex)

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

[Group](Group.md).[findNewUpperIndex](Group.md#findnewupperindex)

#### Defined in

[src/Collection.ts:287](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L287)

___

### fire

▸ **fire**<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`GroupEvents`](../interfaces/GroupEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | [`GroupEvents`](../interfaces/GroupEvents.md)[`K`] | Options object |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[fire](Group.md#fire)

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L159)

___

### forEachControl

▸ **forEachControl**(`fn`): `void`

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`control`: [`Control`](Control.md), `key`: `string`, `fabricObject`: `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>) => `any` | function to iterate over the controls over |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[forEachControl](Group.md#foreachcontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:330](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L330)

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

[Group](Group.md).[forEachObject](Group.md#foreachobject)

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

[Group](Group.md).[get](Group.md#get)

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L59)

___

### getActiveControl

▸ **getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Group](Group.md).[getActiveControl](Group.md#getactivecontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:176](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L176)

___

### getAncestors

▸ **getAncestors**<`T`\>(`strict?`): `Ancestors`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strict?` | `T` | returns only ancestors that are objects (without canvas) |

#### Returns

`Ancestors`<`T`\>

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[Group](Group.md).[getAncestors](Group.md#getancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:80](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L80)

___

### getBoundingRect

▸ **getBoundingRect**(`absolute?`, `calculate?`): [`TBBox`](../modules.md#tbbox)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absolute?` | `boolean` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | use coordinates of current position instead of .lineCoords / .aCoords |

#### Returns

[`TBBox`](../modules.md#tbbox)

Object with left, top, width, height properties

#### Inherited from

[Group](Group.md).[getBoundingRect](Group.md#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:540](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L540)

___

### getCanvasRetinaScaling

▸ **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[Group](Group.md).[getCanvasRetinaScaling](Group.md#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:599](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L599)

___

### getCenterPoint

▸ **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

[Group](Group.md).[getCenterPoint](Group.md#getcenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L173)

___

### getCoords

▸ **getCoords**(`absolute?`, `calculate?`): [`Point`](Point.md)[]

return correct set of coordinates for intersection
this will return either aCoords or lineCoords.
The coords are returned in an array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `absolute` | `boolean` | `false` | will return aCoords if true or lineCoords |
| `calculate` | `boolean` | `false` | will return aCoords if true or lineCoords |

#### Returns

[`Point`](Point.md)[]

[tl, tr, br, bl] of points

#### Inherited from

[Group](Group.md).[getCoords](Group.md#getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:237](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L237)

___

### getLayoutStrategyResult

▸ **getLayoutStrategyResult**<`T`\>(`layoutDirective`, `objects`, `context`): `any`

Override this method to customize layout.
If you need to run logic once layout completes use `onLayout`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LayoutStrategy`](../modules.md#layoutstrategy) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layoutDirective` | `T` |
| `objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |
| `context` | [`LayoutContext`](../modules.md#layoutcontext) |

#### Returns

`any`

#### Inherited from

[Group](Group.md).[getLayoutStrategyResult](Group.md#getlayoutstrategyresult)

#### Defined in

[src/shapes/Group.ts:693](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L693)

___

### getObjectOpacity

▸ **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[Group](Group.md).[getObjectOpacity](Group.md#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:659](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L659)

___

### getObjectScaling

▸ **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

[Group](Group.md).[getObjectScaling](Group.md#getobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:628](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L628)

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

[Group](Group.md).[getObjects](Group.md#getobjects)

#### Defined in

[src/Collection.ts:100](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L100)

___

### getObjectsBoundingBox

▸ **getObjectsBoundingBox**(`objects`, `ignoreOffset?`): ``null`` \| [`LayoutResult`](../modules.md#layoutresult)

Calculate the bbox of objects relative to instance's containing plane

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |
| `ignoreOffset?` | `boolean` |

#### Returns

``null`` \| [`LayoutResult`](../modules.md#layoutresult)

bounding box

#### Inherited from

[Group](Group.md).[getObjectsBoundingBox](Group.md#getobjectsboundingbox)

#### Defined in

[src/shapes/Group.ts:905](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L905)

___

### getParent

▸ **getParent**<`T`\>(`strict?`): `undefined` \| `TAncestor`

Returns instance's parent **EXCLUDING** `ActiveSelection`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strict?` | `T` | exclude canvas as well |

#### Returns

`undefined` \| `TAncestor`

#### Inherited from

[Group](Group.md).[getParent](Group.md#getparent)

#### Defined in

[src/shapes/Object/StackedObject.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L51)

___

### getPointByOrigin

▸ **getPointByOrigin**(`originX`, `originY`): [`Point`](Point.md)

Returns the coordinates of the object as if it has a different origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `originX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](Point.md)

#### Inherited from

[Group](Group.md).[getPointByOrigin](Group.md#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:198](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L198)

___

### getRelativeCenterPoint

▸ **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

[Group](Group.md).[getRelativeCenterPoint](Group.md#getrelativecenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:184](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L184)

___

### getRelativeX

▸ **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](Object.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](Object.md#getx)

#### Inherited from

[Group](Group.md).[getRelativeX](Group.md#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L128)

___

### getRelativeXY

▸ **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in parent's coordinate plane

#### Inherited from

[Group](Group.md).[getRelativeXY](Group.md#getrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:189](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L189)

___

### getRelativeY

▸ **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](Object.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](Object.md#gety)

#### Inherited from

[Group](Group.md).[getRelativeY](Group.md#getrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:144](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L144)

___

### getScaledHeight

▸ **getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

**`Todo`**

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[Group](Group.md).[getScaledHeight](Group.md#getscaledheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:558](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L558)

___

### getScaledWidth

▸ **getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

**`Todo`**

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[Group](Group.md).[getScaledWidth](Group.md#getscaledwidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:549](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L549)

___

### getSvgCommons

▸ **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> & { `id?`: `string`  } |

#### Returns

`string`

#### Inherited from

[Group](Group.md).[getSvgCommons](Group.md#getsvgcommons)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

___

### getSvgFilter

▸ **getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

[Group](Group.md).[getSvgFilter](Group.md#getsvgfilter)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

___

### getSvgStyles

▸ **getSvgStyles**(): `string`

Returns styles-string for svg-export, specific version for group

#### Returns

`string`

#### Inherited from

[Group](Group.md).[getSvgStyles](Group.md#getsvgstyles)

#### Defined in

[src/shapes/Group.ts:1057](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L1057)

___

### getSvgTransform

▸ **getSvgTransform**(`this`, `full?`, `additionalTransform?`): `string`

Returns transform-string for svg-export

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | `undefined` |
| `full?` | `boolean` | `undefined` |
| `additionalTransform` | `string` | `''` |

#### Returns

`string`

#### Inherited from

[Group](Group.md).[getSvgTransform](Group.md#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

▸ **getTotalAngle**(): [`TDegree`](../modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../modules.md#tdegree)

#### Inherited from

[Group](Group.md).[getTotalAngle](Group.md#gettotalangle)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:607](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L607)

___

### getTotalObjectScaling

▸ **getTotalObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](Point.md)

object with scaleX and scaleY properties

#### Inherited from

[Group](Group.md).[getTotalObjectScaling](Group.md#gettotalobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:645](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L645)

___

### getViewportTransform

▸ **getViewportTransform**(): [`TMat2D`](../modules.md#tmat2d)

Retrieves viewportTransform from Object's canvas if possible

#### Returns

[`TMat2D`](../modules.md#tmat2d)

**`Method`**

getViewportTransform

**`Member Of`**

FabricObject.prototype

#### Inherited from

[Group](Group.md).[getViewportTransform](Group.md#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:655](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L655)

___

### getX

▸ **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](Object.md#originx) property in canvas coordinate plane

#### Inherited from

[Group](Group.md).[getX](Group.md#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L99)

___

### getXY

▸ **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in canvas coordinate plane

#### Inherited from

[Group](Group.md).[getXY](Group.md#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L159)

___

### getY

▸ **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](Object.md#originy) property in canvas coordinate plane

#### Inherited from

[Group](Group.md).[getY](Group.md#gety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L113)

___

### hasCommonAncestors

▸ **hasCommonAncestors**<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActiveSelection`](ActiveSelection.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[hasCommonAncestors](Group.md#hascommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:168](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L168)

___

### hasFill

▸ **hasFill**(): ``null`` \| `boolean` \| ``""``

return true if the object will draw a fill
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when fill happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the fill is invisible.

#### Returns

``null`` \| `boolean` \| ``""``

Boolean

**`Since`**

3.0.0

#### Inherited from

[Group](Group.md).[hasFill](Group.md#hasfill)

#### Defined in

[src/shapes/Object/Object.ts:830](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L830)

___

### hasStroke

▸ **hasStroke**(): ``null`` \| `boolean` \| ``""``

return true if the object will draw a stroke
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when stroke happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the stroke is invisible.

#### Returns

``null`` \| `boolean` \| ``""``

Boolean

**`Since`**

3.0.0

#### Inherited from

[Group](Group.md).[hasStroke](Group.md#hasstroke)

#### Defined in

[src/shapes/Object/Object.ts:814](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L814)

___

### insertAt

▸ **insertAt**(`index`, `...objects`): `number`

Inserts an object into collection at specified index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index to insert object at |
| `...objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] | Object to insert |

#### Returns

`number`

#### Inherited from

[Group](Group.md).[insertAt](Group.md#insertat)

#### Defined in

[src/shapes/Group.ts:253](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L253)

___

### intersectsWithObject

▸ **intersectsWithObject**(`other`, `absolute?`, `calculate?`): `boolean`

Checks if object intersects with another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`<[`ObjectEvents`](../interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `absolute?` | `boolean` | `false` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of calculating them |

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[Group](Group.md).[intersectsWithObject](Group.md#intersectswithobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:277](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L277)

___

### intersectsWithRect

▸ **intersectsWithRect**(`pointTL`, `pointBR`, `absolute?`, `calculate?`): `boolean`

Checks if object intersects with an area formed by 2 points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](Point.md) | top-left point of area |
| `pointBR` | [`Point`](Point.md) | bottom-right point of area |
| `absolute?` | `boolean` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object intersects with an area formed by 2 points

#### Inherited from

[Group](Group.md).[intersectsWithRect](Group.md#intersectswithrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:255](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L255)

___

### isCacheDirty

▸ **isCacheDirty**(`skipCanvas?`): `boolean`

Check if cache is dirty

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `skipCanvas` | `boolean` | `false` | skip canvas checks because this object is painted on parent canvas. |

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[isCacheDirty](Group.md#iscachedirty)

#### Defined in

[src/shapes/Object/Object.ts:975](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L975)

___

### isContainedWithinObject

▸ **isContainedWithinObject**(`other`, `absolute?`, `calculate?`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`<[`ObjectEvents`](../interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `absolute?` | `boolean` | `false` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of store ones |

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[Group](Group.md).[isContainedWithinObject](Group.md#iscontainedwithinobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:302](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L302)

___

### isContainedWithinRect

▸ **isContainedWithinRect**(`pointTL`, `pointBR`, `absolute?`, `calculate?`): `boolean`

Checks if object is fully contained within area formed by 2 points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](Point.md) | top-left point of area |
| `pointBR` | [`Point`](Point.md) | bottom-right point of area |
| `absolute?` | `boolean` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object is fully contained within area formed by 2 points

#### Inherited from

[Group](Group.md).[isContainedWithinRect](Group.md#iscontainedwithinrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:326](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L326)

___

### isControlVisible

▸ **isControlVisible**(`controlKey`): `boolean`

Returns true if the specified control is visible, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlKey` | `string` | The key of the control. Possible values are usually 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr', but since the control api allow for any control name, can be any string. |

#### Returns

`boolean`

true if the specified control is visible, false otherwise

#### Inherited from

[Group](Group.md).[isControlVisible](Group.md#iscontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:549](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L549)

___

### isDescendantOf

▸ **isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [contains](StaticCanvas.md#contains) or [contains](StaticCanvas.md#contains) for performance reasons

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TAncestor` |

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[isDescendantOf](Group.md#isdescendantof)

#### Defined in

[src/shapes/Object/StackedObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L64)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

[Group](Group.md).[isEmpty](Group.md#isempty)

#### Defined in

[src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L120)

___

### isInFrontOf

▸ **isInFrontOf**<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActiveSelection`](ActiveSelection.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[Group](Group.md).[isInFrontOf](Group.md#isinfrontof)

#### Defined in

[src/shapes/Object/StackedObject.ts:178](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L178)

___

### isNotVisible

▸ **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[isNotVisible](Group.md#isnotvisible)

#### Defined in

[src/shapes/Object/Object.ts:737](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L737)

___

### isOnACache

▸ **isOnACache**(): `boolean`

Check if this group or its parent group are caching, recursively up

#### Returns

`boolean`

#### Overrides

[Group](Group.md).[isOnACache](Group.md#isonacache)

#### Defined in

[src/shapes/ActiveSelection.ts:168](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L168)

___

### isOnScreen

▸ **isOnScreen**(`calculate?`): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of .aCoords |

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

[Group](Group.md).[isOnScreen](Group.md#isonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:376](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L376)

___

### isOverlapping

▸ **isOverlapping**<`T`\>(`other`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ObjectGeometry`<[`ObjectEvents`](../interfaces/ObjectEvents.md), `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[isOverlapping](Group.md#isoverlapping)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:341](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L341)

___

### isPartiallyOnScreen

▸ **isPartiallyOnScreen**(`calculate?`): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `calculate?` | `boolean` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[Group](Group.md).[isPartiallyOnScreen](Group.md#ispartiallyonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:425](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L425)

___

### isType

▸ **isType**(`...types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `...types` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[isType](Group.md#istype)

#### Defined in

[src/shapes/Object/Object.ts:1465](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1465)

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

[Group](Group.md).[item](Group.md#item)

#### Defined in

[src/Collection.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L112)

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

[Group](Group.md).[moveObjectTo](Group.md#moveobjectto)

#### Defined in

[src/Collection.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L254)

___

### multiSelectAdd

▸ **multiSelectAdd**(`...targets`): `void`

Adds objects with respect to [multiSelectionStacking](ActiveSelection.md#multiselectionstacking)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...targets` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] | object to add to selection |

#### Returns

`void`

#### Defined in

[src/shapes/ActiveSelection.ts:57](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L57)

___

### needsItsOwnCache

▸ **needsItsOwnCache**(): `boolean`

When set to `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Inherited from

[Group](Group.md).[needsItsOwnCache](Group.md#needsitsowncache)

#### Defined in

[src/shapes/Object/Object.ts:842](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L842)

___

### off

▸ **off**<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`GroupEvents`](../interfaces/GroupEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[off](Group.md#off)

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L120)

▸ **off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`<[`GroupEvents`](../interfaces/GroupEvents.md)\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[off](Group.md#off)

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

[Group](Group.md).[off](Group.md#off)

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L129)

___

### on

▸ **on**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`GroupEvents`](../interfaces/GroupEvents.md) |
| `E` | extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| { `context`: [`LayoutContext`](../modules.md#layoutcontext) ; `diff`: [`Point`](Point.md) ; `result`: [`LayoutResult`](../modules.md#layoutresult)  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Canvas`](Canvas.md) \| [`Group`](Group.md) \| [`StaticCanvas`](StaticCanvas.md)<[`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md)\>  } \| { `target`: [`Canvas`](Canvas.md) \| [`Group`](Group.md) \| [`StaticCanvas`](StaticCanvas.md)<[`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md)\>  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } |

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

[Group](Group.md).[on](Group.md#on)

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L23)

▸ **on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`GroupEvents`](../interfaces/GroupEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

[Group](Group.md).[on](Group.md#on)

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L27)

___

### onDeselect

▸ **onDeselect**(): `boolean`

If returns true, deselection is cancelled.

#### Returns

`boolean`

[cancel]

**`Since`**

2.0.0

#### Overrides

[Group](Group.md).[onDeselect](Group.md#ondeselect)

#### Defined in

[src/shapes/ActiveSelection.ts:139](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L139)

___

### onLayout

▸ **onLayout**(`context`, `result`): `void`

Hook that is called once layout has completed.
Provided for layout customization, override if necessary.
Complements `getLayoutStrategyResult`, which is called at the beginning of layout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`LayoutContext`](../modules.md#layoutcontext) | layout context |
| `result` | [`LayoutResult`](../modules.md#layoutresult) | layout result |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[onLayout](Group.md#onlayout)

#### Defined in

[src/shapes/Group.ts:956](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L956)

___

### onSelect

▸ **onSelect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | [`TPointerEvent`](../modules.md#tpointerevent) | event if the process is generated by an event |

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[onSelect](Group.md#onselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:637](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L637)

___

### once

▸ **once**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`GroupEvents`](../interfaces/GroupEvents.md) |
| `E` | extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| { `context`: [`LayoutContext`](../modules.md#layoutcontext) ; `diff`: [`Point`](Point.md) ; `result`: [`LayoutResult`](../modules.md#layoutresult)  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Canvas`](Canvas.md) \| [`Group`](Group.md) \| [`StaticCanvas`](StaticCanvas.md)<[`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md)\>  } \| { `target`: [`Canvas`](Canvas.md) \| [`Group`](Group.md) \| [`StaticCanvas`](StaticCanvas.md)<[`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md)\>  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } |

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

[Group](Group.md).[once](Group.md#once)

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L62)

▸ **once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`GroupEvents`](../interfaces/GroupEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

[Group](Group.md).[once](Group.md#once)

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L66)

___

### prepareBoundingBox

▸ **prepareBoundingBox**<`T`\>(`layoutDirective`, `objects`, `context`): `any`

Override this method to customize layout.
A wrapper around [getObjectsBoundingBox](Group.md#getobjectsboundingbox)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LayoutStrategy`](../modules.md#layoutstrategy) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layoutDirective` | `T` |
| `objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |
| `context` | [`LayoutContext`](../modules.md#layoutcontext) |

#### Returns

`any`

#### Inherited from

[Group](Group.md).[prepareBoundingBox](Group.md#prepareboundingbox)

#### Defined in

[src/shapes/Group.ts:779](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L779)

___

### prepareInitialBoundingBox

▸ **prepareInitialBoundingBox**<`T`\>(`layoutDirective`, `objects`, `context`): `undefined` \| { `centerX`: `number` = center.x; `centerY`: `number` = center.y; `correctionX`: `number` = correction.x; `correctionY`: `number` = correction.y; `height`: `number` = size.y; `width`: `number` = size.x }

Calculates center taking into account originX, originY while not being sure that width/height are initialized

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LayoutStrategy`](../modules.md#layoutstrategy) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layoutDirective` | `T` |
| `objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |
| `context` | [`LayoutContext`](../modules.md#layoutcontext) |

#### Returns

`undefined` \| { `centerX`: `number` = center.x; `centerY`: `number` = center.y; `correctionX`: `number` = correction.x; `correctionY`: `number` = correction.y; `height`: `number` = size.y; `width`: `number` = size.x }

#### Inherited from

[Group](Group.md).[prepareInitialBoundingBox](Group.md#prepareinitialboundingbox)

#### Defined in

[src/shapes/Group.ts:804](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L804)

___

### remove

▸ **remove**(`...objects`): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Remove objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

removed objects

#### Inherited from

[Group](Group.md).[remove](Group.md#remove)

#### Defined in

[src/shapes/Group.ts:265](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L265)

___

### removeAll

▸ **removeAll**(): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Remove all objects

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

removed objects

#### Inherited from

[Group](Group.md).[removeAll](Group.md#removeall)

#### Defined in

[src/shapes/Group.ts:348](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L348)

___

### render

▸ **render**(`ctx`): `void`

Renders instance on a given context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | context to render instance on |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[render](Group.md#render)

#### Defined in

[src/shapes/Group.ts:564](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L564)

___

### renderCache

▸ **renderCache**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[renderCache](Group.md#rendercache)

#### Defined in

[src/shapes/Object/Object.ts:783](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L783)

___

### renderDragSourceEffect

▸ **renderDragSourceEffect**(`e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the source of a drag event
example: render the selection status for the part of text that is being dragged from a text object

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[renderDragSourceEffect](Group.md#renderdragsourceeffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:661](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L661)

___

### renderDropTargetEffect

▸ **renderDropTargetEffect**(`e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the target of a drag event
used to show that the underly object can receive a drop, or to show how the
object will change when dropping. example: show the cursor where the text is about to be dropped

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[renderDropTargetEffect](Group.md#renderdroptargeteffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:674](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L674)

___

### rotate

▸ **rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | [`TDegree`](../modules.md#tdegree) | Angle value (in degrees) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[rotate](Group.md#rotate)

#### Defined in

[src/shapes/Object/Object.ts:1493](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1493)

___

### scale

▸ **scale**(`value`): `void`

Scales an object (equally by x and y)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Scale factor |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[scale](Group.md#scale)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:567](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L567)

___

### scaleToHeight

▸ **scaleToHeight**(`value`, `absolute?`): `void`

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | New height value |
| `absolute` | `boolean` | `false` | ignore viewport |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[scaleToHeight](Group.md#scaletoheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:592](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L592)

___

### scaleToWidth

▸ **scaleToWidth**(`value`, `absolute?`): `void`

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | New width value |
| `absolute?` | `boolean` | ignore viewport |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[scaleToWidth](Group.md#scaletowidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:579](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L579)

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

[Group](Group.md).[sendObjectBackwards](Group.md#sendobjectbackwards)

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

[Group](Group.md).[sendObjectToBack](Group.md#sendobjecttoback)

#### Defined in

[src/Collection.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L170)

___

### set

▸ **set**(`key`, `value?`): [`ActiveSelection`](ActiveSelection.md)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`ActiveSelection`](ActiveSelection.md)

#### Inherited from

[Group](Group.md).[set](Group.md#set)

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L29)

___

### setControlVisible

▸ **setControlVisible**(`controlKey`, `visible`): `void`

Sets the visibility of the specified control.
please do not use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlKey` | `string` | The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'. but since the control api allow for any control name, can be any string. |
| `visible` | `boolean` | true to set the specified control visible, false otherwise |

#### Returns

`void`

**`Todo`**

discuss this overlap of priority here with the team. Andrea Bogazzi for details

#### Inherited from

[Group](Group.md).[setControlVisible](Group.md#setcontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:564](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L564)

___

### setControlsVisibility

▸ **setControlsVisibility**(`options?`): `void`

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `boolean`\> | with an optional key per control example: {Boolean} [options.bl] true to enable the bottom-left control, false to disable it |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setControlsVisibility](Group.md#setcontrolsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:576](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L576)

___

### setCoords

▸ **setCoords**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setCoords](Group.md#setcoords)

#### Defined in

[src/shapes/Group.ts:554](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L554)

___

### setOnGroup

▸ **setOnGroup**(): `void`

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setOnGroup](Group.md#setongroup)

#### Defined in

[src/shapes/Object/Object.ts:1515](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1515)

___

### setOptions

▸ `Protected` **setOptions**(`options?`): `void`

Sets object's properties from options, for class constructor only.
Needs to be overridden for different defaults.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `any`\> | Options object |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setOptions](Group.md#setoptions)

#### Defined in

[src/shapes/Object/Object.ts:494](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L494)

___

### setPositionByOrigin

▸ **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Sets the position of the object taking into consideration the object's origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Point`](Point.md) | The new position of the object |
| `originX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setPositionByOrigin](Group.md#setpositionbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:213](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L213)

___

### setRelativeX

▸ **setRelativeX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](Object.md#originx) property in parent's coordinate plane\ if parent is canvas then this method is identical to [setX](Object.md#setx) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setRelativeX](Group.md#setrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L136)

___

### setRelativeXY

▸ **setRelativeXY**(`point`, `originX?`, `originY?`): `void`

As [setXY](Object.md#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | position according to object's originX originY properties in parent's coordinate plane |
| `originX?` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setRelativeXY](Group.md#setrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:199](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L199)

___

### setRelativeY

▸ **setRelativeY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](Object.md#originy) property in parent's coordinate plane\ if parent is canvas then this property is identical to [setY](Object.md#sety) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setRelativeY](Group.md#setrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:152](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L152)

___

### setX

▸ **setX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](Object.md#originx) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setX](Group.md#setx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:106](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L106)

___

### setXY

▸ **setXY**(`point`, `originX?`, `originY?`): `void`

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
that otherwise are the object's current values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | position in canvas coordinate plane |
| `originX?` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

**`Example`**

Set object's bottom left corner to point (5,5) on canvas
```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

[Group](Group.md).[setXY](Group.md#setxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:176](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L176)

___

### setY

▸ **setY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](Object.md#originy) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setY](Group.md#sety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L120)

___

### shouldCache

▸ **shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.

#### Returns

`boolean`

#### Overrides

[Group](Group.md).[shouldCache](Group.md#shouldcache)

#### Defined in

[src/shapes/ActiveSelection.ts:160](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L160)

___

### size

▸ **size**(): `number`

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

[Group](Group.md).[size](Group.md#size)

#### Defined in

[src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L128)

___

### strokeBorders

▸ **strokeBorders**(`ctx`, `size`): `void`

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | ctx is rotated and translated so that (0,0) is at object's center |
| `size` | [`Point`](Point.md) | the control box size used |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[strokeBorders](Group.md#strokeborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:376](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L376)

___

### toCanvasElement

▸ **toCanvasElement**(`options?`): `HTMLCanvasElement`

Converts an object into a HTMLCanvas element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | Options object |

#### Returns

`HTMLCanvasElement`

Returns DOM element <canvas> with the FabricObject

#### Inherited from

[Group](Group.md).[toCanvasElement](Group.md#tocanvaselement)

#### Defined in

[src/shapes/Object/Object.ts:1358](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1358)

___

### toClipPathSVG

▸ **toClipPathSVG**(`reviver?`): `string`

Returns svg clipPath representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[Group](Group.md).[toClipPathSVG](Group.md#toclippathsvg)

#### Defined in

[src/shapes/Group.ts:1071](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L1071)

___

### toDataURL

▸ **toDataURL**(`options?`): `string`

Converts an object into a data-url-like string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | Options object |

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

[Group](Group.md).[toDataURL](Group.md#todataurl)

#### Defined in

[src/shapes/Object/Object.ts:1452](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1452)

___

### toDatalessObject

▸ **toDatalessObject**(`propertiesToInclude?`): `any`

Returns (dataless) object representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `any`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

Object representation of an instance

#### Inherited from

[Group](Group.md).[toDatalessObject](Group.md#todatalessobject)

#### Defined in

[src/shapes/Object/Object.ts:580](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L580)

___

### toJSON

▸ **toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[Group](Group.md).[toJSON](Group.md#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1484](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1484)

___

### toObject

▸ **toObject**<`T`, `K`\>(`propertiesToInclude?`): `Pick`<`T`, `K`\> & [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`<[`GroupProps`](../interfaces/GroupProps.md) & [`TClassProperties`](../modules.md#tclassproperties)<[`ActiveSelection`](ActiveSelection.md)\>, keyof [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`<`T`, `K`\> & [`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)

object representation of an instance

#### Inherited from

[Group](Group.md).[toObject](Group.md#toobject)

#### Defined in

[src/shapes/Group.ts:989](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L989)

___

### toSVG

▸ **toSVG**(`this`, `reviver?`): `string`

Returns svg representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[Group](Group.md).[toSVG](Group.md#tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

▸ **toString**(): `string`

Returns string representation of a group

#### Returns

`string`

#### Overrides

[Group](Group.md).[toString](Group.md#tostring)

#### Defined in

[src/shapes/ActiveSelection.ts:148](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/ActiveSelection.ts#L148)

___

### toggle

▸ **toggle**(`property`): [`ActiveSelection`](ActiveSelection.md)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`ActiveSelection`](ActiveSelection.md)

#### Inherited from

[Group](Group.md).[toggle](Group.md#toggle)

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L46)

___

### transform

▸ **transform**(`ctx`): `void`

Transforms context when rendering an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[transform](Group.md#transform)

#### Defined in

[src/shapes/Object/Object.ts:502](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L502)

___

### transformMatrixKey

▸ **transformMatrixKey**(`skipGroup?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skipGroup` | `boolean` | `false` |

#### Returns

`string`

#### Inherited from

[Group](Group.md).[transformMatrixKey](Group.md#transformmatrixkey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:696](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L696)

___

### translateToCenterPoint

▸ **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](Point.md)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | The point which corresponds to the originX and originY params |
| `originX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](Point.md)

#### Inherited from

[Group](Group.md).[translateToCenterPoint](Group.md#translatetocenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:126](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L126)

___

### translateToGivenOrigin

▸ **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](Point.md)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | The point which corresponds to the originX and originY params |
| `fromOriginX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `fromOriginY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |
| `toOriginX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `toOriginY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](Point.md)

#### Inherited from

[Group](Group.md).[translateToGivenOrigin](Group.md#translatetogivenorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:98](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L98)

___

### translateToOriginPoint

▸ **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](Point.md)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Point`](Point.md) | The point which corresponds to center of the object |
| `originX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](Point.md)

#### Inherited from

[Group](Group.md).[translateToOriginPoint](Group.md#translatetooriginpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L151)

___

### triggerLayout

▸ **triggerLayout**<`T`\>(`context?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LayoutStrategy`](../modules.md#layoutstrategy) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | `Partial`<[`LayoutResult`](../modules.md#layoutresult)\> & { `layout?`: `T`  } | pass values to use for layout calculations |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[triggerLayout](Group.md#triggerlayout)

#### Defined in

[src/shapes/Group.ts:574](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L574)

___

### willDrawShadow

▸ **willDrawShadow**(): `boolean`

Check if this object or a child object will cast a shadow

#### Returns

`boolean`

#### Inherited from

[Group](Group.md).[willDrawShadow](Group.md#willdrawshadow)

#### Defined in

[src/shapes/Group.ts:507](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L507)

___

### \_fromObject

▸ `Static` **_fromObject**<`S`\>(`object`, `«destructured»?`): `Promise`<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Record`<`string`, `unknown`\> |
| `«destructured»` | [`Abortable`](../modules.md#abortable) & { `extraParam?`: `string`  } |

#### Returns

`Promise`<`S`\>

#### Inherited from

[Group](Group.md).[_fromObject](Group.md#_fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1553](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1553)

___

### fromObject

▸ `Static` `Private` **fromObject**<`T`\>(`object`): `Promise`<[`Group`](Group.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TOptions`](../modules.md#toptions)<[`SerializedGroupProps`](../interfaces/SerializedGroupProps.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | Object to create a group from |

#### Returns

`Promise`<[`Group`](Group.md)\>

**`Todo`**

support loading from svg

**`Static`**

**`Member Of`**

Group

#### Inherited from

[Group](Group.md).[fromObject](Group.md#fromobject)

#### Defined in

[src/shapes/Group.ts:1091](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L1091)

___

### getDefaults

▸ `Static` **getDefaults**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[Group](Group.md).[getDefaults](Group.md#getdefaults)

#### Defined in

[src/shapes/Group.ts:156](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Group.ts#L156)
