# Class: Line<Props, SProps, EventSpec\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> = `Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> |
| `SProps` | extends [`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md) = [`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

## Hierarchy

- [`FabricObject`](/apidocs/classes/FabricObject.md)<`Props`, `SProps`, `EventSpec`\>

  ↳ **`Line`**

## Implements

- `UniqueLineProps`

## Table of contents

### Constructors

- [constructor](/apidocs/classes/Line.md#constructor)

### Properties

- [\_\_corner](/apidocs/classes/Line.md#__corner)
- [\_\_owningGroup](/apidocs/classes/Line.md#__owninggroup)
- [\_cacheCanvas](/apidocs/classes/Line.md#_cachecanvas)
- [\_cacheContext](/apidocs/classes/Line.md#_cachecontext)
- [\_controlsVisibility](/apidocs/classes/Line.md#_controlsvisibility)
- [\_scaling](/apidocs/classes/Line.md#_scaling)
- [\_transformDone](/apidocs/classes/Line.md#_transformdone)
- [aCoords](/apidocs/classes/Line.md#acoords)
- [absolutePositioned](/apidocs/classes/Line.md#absolutepositioned)
- [activeOn](/apidocs/classes/Line.md#activeon)
- [angle](/apidocs/classes/Line.md#angle)
- [backgroundColor](/apidocs/classes/Line.md#backgroundcolor)
- [borderColor](/apidocs/classes/Line.md#bordercolor)
- [borderDashArray](/apidocs/classes/Line.md#borderdasharray)
- [borderOpacityWhenMoving](/apidocs/classes/Line.md#borderopacitywhenmoving)
- [borderScaleFactor](/apidocs/classes/Line.md#borderscalefactor)
- [cacheHeight](/apidocs/classes/Line.md#cacheheight)
- [cacheTranslationX](/apidocs/classes/Line.md#cachetranslationx)
- [cacheTranslationY](/apidocs/classes/Line.md#cachetranslationy)
- [cacheWidth](/apidocs/classes/Line.md#cachewidth)
- [canvas](/apidocs/classes/Line.md#canvas)
- [centeredRotation](/apidocs/classes/Line.md#centeredrotation)
- [centeredScaling](/apidocs/classes/Line.md#centeredscaling)
- [clipPath](/apidocs/classes/Line.md#clippath)
- [clipPathId](/apidocs/classes/Line.md#clippathid)
- [colorProperties](/apidocs/classes/Line.md#colorproperties)
- [controls](/apidocs/classes/Line.md#controls)
- [cornerColor](/apidocs/classes/Line.md#cornercolor)
- [cornerDashArray](/apidocs/classes/Line.md#cornerdasharray)
- [cornerSize](/apidocs/classes/Line.md#cornersize)
- [cornerStrokeColor](/apidocs/classes/Line.md#cornerstrokecolor)
- [cornerStyle](/apidocs/classes/Line.md#cornerstyle)
- [dirty](/apidocs/classes/Line.md#dirty)
- [evented](/apidocs/classes/Line.md#evented)
- [excludeFromExport](/apidocs/classes/Line.md#excludefromexport)
- [fill](/apidocs/classes/Line.md#fill)
- [fillRule](/apidocs/classes/Line.md#fillrule)
- [flipX](/apidocs/classes/Line.md#flipx)
- [flipY](/apidocs/classes/Line.md#flipy)
- [globalCompositeOperation](/apidocs/classes/Line.md#globalcompositeoperation)
- [group](/apidocs/classes/Line.md#group)
- [hasBorders](/apidocs/classes/Line.md#hasborders)
- [hasControls](/apidocs/classes/Line.md#hascontrols)
- [height](/apidocs/classes/Line.md#height)
- [hoverCursor](/apidocs/classes/Line.md#hovercursor)
- [includeDefaultValues](/apidocs/classes/Line.md#includedefaultvalues)
- [inverted](/apidocs/classes/Line.md#inverted)
- [isMoving](/apidocs/classes/Line.md#ismoving)
- [left](/apidocs/classes/Line.md#left)
- [lineCoords](/apidocs/classes/Line.md#linecoords)
- [lockMovementX](/apidocs/classes/Line.md#lockmovementx)
- [lockMovementY](/apidocs/classes/Line.md#lockmovementy)
- [lockRotation](/apidocs/classes/Line.md#lockrotation)
- [lockScalingFlip](/apidocs/classes/Line.md#lockscalingflip)
- [lockScalingX](/apidocs/classes/Line.md#lockscalingx)
- [lockScalingY](/apidocs/classes/Line.md#lockscalingy)
- [lockSkewingX](/apidocs/classes/Line.md#lockskewingx)
- [lockSkewingY](/apidocs/classes/Line.md#lockskewingy)
- [matrixCache](/apidocs/classes/Line.md#matrixcache)
- [minScaleLimit](/apidocs/classes/Line.md#minscalelimit)
- [moveCursor](/apidocs/classes/Line.md#movecursor)
- [noScaleCache](/apidocs/classes/Line.md#noscalecache)
- [oCoords](/apidocs/classes/Line.md#ocoords)
- [objectCaching](/apidocs/classes/Line.md#objectcaching)
- [opacity](/apidocs/classes/Line.md#opacity)
- [originX](/apidocs/classes/Line.md#originx)
- [originY](/apidocs/classes/Line.md#originy)
- [ownCaching](/apidocs/classes/Line.md#owncaching)
- [ownMatrixCache](/apidocs/classes/Line.md#ownmatrixcache)
- [padding](/apidocs/classes/Line.md#padding)
- [paintFirst](/apidocs/classes/Line.md#paintfirst)
- [perPixelTargetFind](/apidocs/classes/Line.md#perpixeltargetfind)
- [scaleX](/apidocs/classes/Line.md#scalex)
- [scaleY](/apidocs/classes/Line.md#scaley)
- [selectable](/apidocs/classes/Line.md#selectable)
- [selectionBackgroundColor](/apidocs/classes/Line.md#selectionbackgroundcolor)
- [shadow](/apidocs/classes/Line.md#shadow)
- [skewX](/apidocs/classes/Line.md#skewx)
- [skewY](/apidocs/classes/Line.md#skewy)
- [snapAngle](/apidocs/classes/Line.md#snapangle)
- [snapThreshold](/apidocs/classes/Line.md#snapthreshold)
- [stroke](/apidocs/classes/Line.md#stroke)
- [strokeDashArray](/apidocs/classes/Line.md#strokedasharray)
- [strokeDashOffset](/apidocs/classes/Line.md#strokedashoffset)
- [strokeLineCap](/apidocs/classes/Line.md#strokelinecap)
- [strokeLineJoin](/apidocs/classes/Line.md#strokelinejoin)
- [strokeMiterLimit](/apidocs/classes/Line.md#strokemiterlimit)
- [strokeUniform](/apidocs/classes/Line.md#strokeuniform)
- [strokeWidth](/apidocs/classes/Line.md#strokewidth)
- [top](/apidocs/classes/Line.md#top)
- [touchCornerSize](/apidocs/classes/Line.md#touchcornersize)
- [transparentCorners](/apidocs/classes/Line.md#transparentcorners)
- [visible](/apidocs/classes/Line.md#visible)
- [width](/apidocs/classes/Line.md#width)
- [x1](/apidocs/classes/Line.md#x1)
- [x2](/apidocs/classes/Line.md#x2)
- [y1](/apidocs/classes/Line.md#y1)
- [y2](/apidocs/classes/Line.md#y2)
- [zoomX](/apidocs/classes/Line.md#zoomx)
- [zoomY](/apidocs/classes/Line.md#zoomy)
- [ATTRIBUTE\_NAMES](/apidocs/classes/Line.md#attribute_names)
- [cacheProperties](/apidocs/classes/Line.md#cacheproperties)
- [ownDefaults](/apidocs/classes/Line.md#owndefaults)
- [stateProperties](/apidocs/classes/Line.md#stateproperties)
- [type](/apidocs/classes/Line.md#type)

### Accessors

- [type](/apidocs/classes/Line.md#type-1)

### Methods

- [\_animate](/apidocs/classes/Line.md#_animate)
- [\_applyPatternForTransformedGradient](/apidocs/classes/Line.md#_applypatternfortransformedgradient)
- [\_applyPatternGradientTransform](/apidocs/classes/Line.md#_applypatterngradienttransform)
- [\_calculateCurrentDimensions](/apidocs/classes/Line.md#_calculatecurrentdimensions)
- [\_constrainScale](/apidocs/classes/Line.md#_constrainscale)
- [\_createBaseClipPathSVGMarkup](/apidocs/classes/Line.md#_createbaseclippathsvgmarkup)
- [\_createBaseSVGMarkup](/apidocs/classes/Line.md#_createbasesvgmarkup)
- [\_createCacheCanvas](/apidocs/classes/Line.md#_createcachecanvas)
- [\_drawBorders](/apidocs/classes/Line.md#_drawborders)
- [\_drawClipPath](/apidocs/classes/Line.md#_drawclippath)
- [\_findCenterFromElement](/apidocs/classes/Line.md#_findcenterfromelement)
- [\_findTargetCorner](/apidocs/classes/Line.md#_findtargetcorner)
- [\_getCacheCanvasDimensions](/apidocs/classes/Line.md#_getcachecanvasdimensions)
- [\_getLeftTopCoords](/apidocs/classes/Line.md#_getlefttopcoords)
- [\_getNonTransformedDimensions](/apidocs/classes/Line.md#_getnontransformeddimensions)
- [\_getTransformedDimensions](/apidocs/classes/Line.md#_gettransformeddimensions)
- [\_limitCacheSize](/apidocs/classes/Line.md#_limitcachesize)
- [\_removeCacheCanvas](/apidocs/classes/Line.md#_removecachecanvas)
- [\_removeDefaultValues](/apidocs/classes/Line.md#_removedefaultvalues)
- [\_removeShadow](/apidocs/classes/Line.md#_removeshadow)
- [\_render](/apidocs/classes/Line.md#_render)
- [\_renderBackground](/apidocs/classes/Line.md#_renderbackground)
- [\_renderControls](/apidocs/classes/Line.md#_rendercontrols)
- [\_renderFill](/apidocs/classes/Line.md#_renderfill)
- [\_renderPaintInOrder](/apidocs/classes/Line.md#_renderpaintinorder)
- [\_renderStroke](/apidocs/classes/Line.md#_renderstroke)
- [\_set](/apidocs/classes/Line.md#_set)
- [\_setClippingProperties](/apidocs/classes/Line.md#_setclippingproperties)
- [\_setFillStyles](/apidocs/classes/Line.md#_setfillstyles)
- [\_setLineDash](/apidocs/classes/Line.md#_setlinedash)
- [\_setObject](/apidocs/classes/Line.md#_setobject)
- [\_setOpacity](/apidocs/classes/Line.md#_setopacity)
- [\_setOptions](/apidocs/classes/Line.md#_setoptions)
- [\_setShadow](/apidocs/classes/Line.md#_setshadow)
- [\_setStrokeStyles](/apidocs/classes/Line.md#_setstrokestyles)
- [\_setWidthHeight](/apidocs/classes/Line.md#_setwidthheight)
- [\_setupCompositeOperation](/apidocs/classes/Line.md#_setupcompositeoperation)
- [\_toSVG](/apidocs/classes/Line.md#_tosvg)
- [\_updateCacheCanvas](/apidocs/classes/Line.md#_updatecachecanvas)
- [addPaintOrder](/apidocs/classes/Line.md#addpaintorder)
- [animate](/apidocs/classes/Line.md#animate)
- [calcACoords](/apidocs/classes/Line.md#calcacoords)
- [calcLineCoords](/apidocs/classes/Line.md#calclinecoords)
- [calcLinePoints](/apidocs/classes/Line.md#calclinepoints)
- [calcOCoords](/apidocs/classes/Line.md#calcocoords)
- [calcOwnMatrix](/apidocs/classes/Line.md#calcownmatrix)
- [calcTransformMatrix](/apidocs/classes/Line.md#calctransformmatrix)
- [canDrop](/apidocs/classes/Line.md#candrop)
- [clearContextTop](/apidocs/classes/Line.md#clearcontexttop)
- [clone](/apidocs/classes/Line.md#clone)
- [cloneAsImage](/apidocs/classes/Line.md#cloneasimage)
- [complexity](/apidocs/classes/Line.md#complexity)
- [containsPoint](/apidocs/classes/Line.md#containspoint)
- [dispose](/apidocs/classes/Line.md#dispose)
- [drawBorders](/apidocs/classes/Line.md#drawborders)
- [drawCacheOnCanvas](/apidocs/classes/Line.md#drawcacheoncanvas)
- [drawClipPathOnCache](/apidocs/classes/Line.md#drawclippathoncache)
- [drawControls](/apidocs/classes/Line.md#drawcontrols)
- [drawControlsConnectingLines](/apidocs/classes/Line.md#drawcontrolsconnectinglines)
- [drawObject](/apidocs/classes/Line.md#drawobject)
- [drawSelectionBackground](/apidocs/classes/Line.md#drawselectionbackground)
- [findCommonAncestors](/apidocs/classes/Line.md#findcommonancestors)
- [fire](/apidocs/classes/Line.md#fire)
- [forEachControl](/apidocs/classes/Line.md#foreachcontrol)
- [get](/apidocs/classes/Line.md#get)
- [getActiveControl](/apidocs/classes/Line.md#getactivecontrol)
- [getAncestors](/apidocs/classes/Line.md#getancestors)
- [getBoundingRect](/apidocs/classes/Line.md#getboundingrect)
- [getCanvasRetinaScaling](/apidocs/classes/Line.md#getcanvasretinascaling)
- [getCenterPoint](/apidocs/classes/Line.md#getcenterpoint)
- [getCoords](/apidocs/classes/Line.md#getcoords)
- [getObjectOpacity](/apidocs/classes/Line.md#getobjectopacity)
- [getObjectScaling](/apidocs/classes/Line.md#getobjectscaling)
- [getParent](/apidocs/classes/Line.md#getparent)
- [getPointByOrigin](/apidocs/classes/Line.md#getpointbyorigin)
- [getRelativeCenterPoint](/apidocs/classes/Line.md#getrelativecenterpoint)
- [getRelativeX](/apidocs/classes/Line.md#getrelativex)
- [getRelativeXY](/apidocs/classes/Line.md#getrelativexy)
- [getRelativeY](/apidocs/classes/Line.md#getrelativey)
- [getScaledHeight](/apidocs/classes/Line.md#getscaledheight)
- [getScaledWidth](/apidocs/classes/Line.md#getscaledwidth)
- [getSvgCommons](/apidocs/classes/Line.md#getsvgcommons)
- [getSvgFilter](/apidocs/classes/Line.md#getsvgfilter)
- [getSvgStyles](/apidocs/classes/Line.md#getsvgstyles)
- [getSvgTransform](/apidocs/classes/Line.md#getsvgtransform)
- [getTotalAngle](/apidocs/classes/Line.md#gettotalangle)
- [getTotalObjectScaling](/apidocs/classes/Line.md#gettotalobjectscaling)
- [getViewportTransform](/apidocs/classes/Line.md#getviewporttransform)
- [getX](/apidocs/classes/Line.md#getx)
- [getXY](/apidocs/classes/Line.md#getxy)
- [getY](/apidocs/classes/Line.md#gety)
- [hasCommonAncestors](/apidocs/classes/Line.md#hascommonancestors)
- [hasFill](/apidocs/classes/Line.md#hasfill)
- [hasStroke](/apidocs/classes/Line.md#hasstroke)
- [intersectsWithObject](/apidocs/classes/Line.md#intersectswithobject)
- [intersectsWithRect](/apidocs/classes/Line.md#intersectswithrect)
- [isCacheDirty](/apidocs/classes/Line.md#iscachedirty)
- [isContainedWithinObject](/apidocs/classes/Line.md#iscontainedwithinobject)
- [isContainedWithinRect](/apidocs/classes/Line.md#iscontainedwithinrect)
- [isControlVisible](/apidocs/classes/Line.md#iscontrolvisible)
- [isDescendantOf](/apidocs/classes/Line.md#isdescendantof)
- [isInFrontOf](/apidocs/classes/Line.md#isinfrontof)
- [isNotVisible](/apidocs/classes/Line.md#isnotvisible)
- [isOnScreen](/apidocs/classes/Line.md#isonscreen)
- [isOverlapping](/apidocs/classes/Line.md#isoverlapping)
- [isPartiallyOnScreen](/apidocs/classes/Line.md#ispartiallyonscreen)
- [isType](/apidocs/classes/Line.md#istype)
- [needsItsOwnCache](/apidocs/classes/Line.md#needsitsowncache)
- [off](/apidocs/classes/Line.md#off)
- [on](/apidocs/classes/Line.md#on)
- [onDeselect](/apidocs/classes/Line.md#ondeselect)
- [onSelect](/apidocs/classes/Line.md#onselect)
- [once](/apidocs/classes/Line.md#once)
- [render](/apidocs/classes/Line.md#render)
- [renderCache](/apidocs/classes/Line.md#rendercache)
- [renderDragSourceEffect](/apidocs/classes/Line.md#renderdragsourceeffect)
- [renderDropTargetEffect](/apidocs/classes/Line.md#renderdroptargeteffect)
- [rotate](/apidocs/classes/Line.md#rotate)
- [scale](/apidocs/classes/Line.md#scale)
- [scaleToHeight](/apidocs/classes/Line.md#scaletoheight)
- [scaleToWidth](/apidocs/classes/Line.md#scaletowidth)
- [set](/apidocs/classes/Line.md#set)
- [setControlVisible](/apidocs/classes/Line.md#setcontrolvisible)
- [setControlsVisibility](/apidocs/classes/Line.md#setcontrolsvisibility)
- [setCoords](/apidocs/classes/Line.md#setcoords)
- [setOnGroup](/apidocs/classes/Line.md#setongroup)
- [setOptions](/apidocs/classes/Line.md#setoptions)
- [setPositionByOrigin](/apidocs/classes/Line.md#setpositionbyorigin)
- [setRelativeX](/apidocs/classes/Line.md#setrelativex)
- [setRelativeXY](/apidocs/classes/Line.md#setrelativexy)
- [setRelativeY](/apidocs/classes/Line.md#setrelativey)
- [setX](/apidocs/classes/Line.md#setx)
- [setXY](/apidocs/classes/Line.md#setxy)
- [setY](/apidocs/classes/Line.md#sety)
- [shouldCache](/apidocs/classes/Line.md#shouldcache)
- [strokeBorders](/apidocs/classes/Line.md#strokeborders)
- [toCanvasElement](/apidocs/classes/Line.md#tocanvaselement)
- [toClipPathSVG](/apidocs/classes/Line.md#toclippathsvg)
- [toDataURL](/apidocs/classes/Line.md#todataurl)
- [toDatalessObject](/apidocs/classes/Line.md#todatalessobject)
- [toJSON](/apidocs/classes/Line.md#tojson)
- [toObject](/apidocs/classes/Line.md#toobject)
- [toSVG](/apidocs/classes/Line.md#tosvg)
- [toString](/apidocs/classes/Line.md#tostring)
- [toggle](/apidocs/classes/Line.md#toggle)
- [transform](/apidocs/classes/Line.md#transform)
- [transformMatrixKey](/apidocs/classes/Line.md#transformmatrixkey)
- [translateToCenterPoint](/apidocs/classes/Line.md#translatetocenterpoint)
- [translateToGivenOrigin](/apidocs/classes/Line.md#translatetogivenorigin)
- [translateToOriginPoint](/apidocs/classes/Line.md#translatetooriginpoint)
- [willDrawShadow](/apidocs/classes/Line.md#willdrawshadow)
- [\_fromObject](/apidocs/classes/Line.md#_fromobject)
- [fromElement](/apidocs/classes/Line.md#fromelement)
- [fromObject](/apidocs/classes/Line.md#fromobject)
- [getDefaults](/apidocs/classes/Line.md#getdefaults)

## Constructors

### constructor

• **new Line**<`Props`, `SProps`, `EventSpec`\>(`points?`, `options?`)

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> = `Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> |
| `SProps` | extends [`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md) = [`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)<`EventSpec`\> = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points?` | [`number`, `number`, `number`, `number`] | Array of points |
| `options?` | `Props` | Options object |

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[constructor](/apidocs/classes/FabricObject.md#constructor)

#### Defined in

[src/shapes/Line.ts:74](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L74)

## Properties

### \_\_corner

• `Optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[__corner](/apidocs/classes/FabricObject.md#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:115](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L115)

___

### \_\_owningGroup

• `Optional` **\_\_owningGroup**: [`Group`](/apidocs/classes/Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[__owningGroup](/apidocs/classes/FabricObject.md#__owninggroup)

#### Defined in

[src/shapes/Object/StackedObject.ts:45](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/StackedObject.ts#L45)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_cacheCanvas](/apidocs/classes/FabricObject.md#_cachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:184](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L184)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_cacheContext](/apidocs/classes/FabricObject.md#_cachecontext)

#### Defined in

[src/shapes/Object/Object.ts:173](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L173)

___

### \_controlsVisibility

• **\_controlsVisibility**: `Record`<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_controlsVisibility](/apidocs/classes/FabricObject.md#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:122](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L122)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_scaling](/apidocs/classes/FabricObject.md#_scaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:144](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L144)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_transformDone](/apidocs/classes/FabricObject.md#_transformdone)

#### Defined in

[src/shapes/Object/Object.ts:264](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L264)

___

### aCoords

• **aCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

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

[FabricObject](/apidocs/classes/FabricObject.md).[aCoords](/apidocs/classes/FabricObject.md#acoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:58](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L58)

___

### absolutePositioned

• **absolutePositioned**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[absolutePositioned](/apidocs/classes/FabricObject.md#absolutepositioned)

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L137)

___

### activeOn

• **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[activeOn](/apidocs/classes/FabricObject.md#activeon)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:91](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L91)

___

### angle

• **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[angle](/apidocs/classes/FabricObject.md#angle)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

• **backgroundColor**: `string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[backgroundColor](/apidocs/classes/FabricObject.md#backgroundcolor)

#### Defined in

[src/shapes/Object/Object.ts:124](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L124)

___

### borderColor

• **borderColor**: `string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[borderColor](/apidocs/classes/FabricObject.md#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L81)

___

### borderDashArray

• **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[borderDashArray](/apidocs/classes/FabricObject.md#borderdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L82)

___

### borderOpacityWhenMoving

• **borderOpacityWhenMoving**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[borderOpacityWhenMoving](/apidocs/classes/FabricObject.md#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L83)

___

### borderScaleFactor

• **borderScaleFactor**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[borderScaleFactor](/apidocs/classes/FabricObject.md#borderscalefactor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:84](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L84)

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

[FabricObject](/apidocs/classes/FabricObject.md).[cacheHeight](/apidocs/classes/FabricObject.md#cacheheight)

#### Defined in

[src/shapes/Object/Object.ts:202](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L202)

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

[FabricObject](/apidocs/classes/FabricObject.md).[cacheTranslationX](/apidocs/classes/FabricObject.md#cachetranslationx)

#### Defined in

[src/shapes/Object/Object.ts:229](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L229)

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

[FabricObject](/apidocs/classes/FabricObject.md).[cacheTranslationY](/apidocs/classes/FabricObject.md#cachetranslationy)

#### Defined in

[src/shapes/Object/Object.ts:238](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L238)

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

[FabricObject](/apidocs/classes/FabricObject.md).[cacheWidth](/apidocs/classes/FabricObject.md#cachewidth)

#### Defined in

[src/shapes/Object/Object.ts:193](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L193)

___

### canvas

• `Optional` **canvas**: [`Canvas`](/apidocs/classes/Canvas.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[canvas](/apidocs/classes/FabricObject.md#canvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:146](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L146)

___

### centeredRotation

• **centeredRotation**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[centeredRotation](/apidocs/classes/FabricObject.md#centeredrotation)

#### Defined in

[src/shapes/Object/Object.ts:138](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L138)

___

### centeredScaling

• **centeredScaling**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[centeredScaling](/apidocs/classes/FabricObject.md#centeredscaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L58)

___

### clipPath

• `Optional` **clipPath**: `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[clipPath](/apidocs/classes/FabricObject.md#clippath)

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L135)

___

### clipPathId

• `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[clipPathId](/apidocs/classes/FabricObject.md#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### colorProperties

• **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[colorProperties](/apidocs/classes/FabricObject.md#colorproperties)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/AnimatableObject.ts#L20)

___

### controls

• **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[controls](/apidocs/classes/FabricObject.md#controls)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:128](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L128)

___

### cornerColor

• **cornerColor**: `string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerColor](/apidocs/classes/FabricObject.md#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L75)

___

### cornerDashArray

• **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerDashArray](/apidocs/classes/FabricObject.md#cornerdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L78)

___

### cornerSize

• **cornerSize**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerSize](/apidocs/classes/FabricObject.md#cornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L72)

___

### cornerStrokeColor

• **cornerStrokeColor**: `string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerStrokeColor](/apidocs/classes/FabricObject.md#cornerstrokecolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L76)

___

### cornerStyle

• **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerStyle](/apidocs/classes/FabricObject.md#cornerstyle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L77)

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

[FabricObject](/apidocs/classes/FabricObject.md).[dirty](/apidocs/classes/FabricObject.md#dirty)

#### Defined in

[src/shapes/Object/Object.ts:163](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L163)

___

### evented

• **evented**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[evented](/apidocs/classes/FabricObject.md#evented)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:89](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L89)

___

### excludeFromExport

• **excludeFromExport**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[excludeFromExport](/apidocs/classes/FabricObject.md#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:131](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L131)

___

### fill

• **fill**: ``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[fill](/apidocs/classes/FabricObject.md#fill)

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L114)

___

### fillRule

• **fillRule**: `CanvasFillRule`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[fillRule](/apidocs/classes/FabricObject.md#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L115)

___

### flipX

• **flipX**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[flipX](/apidocs/classes/FabricObject.md#flipx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

• **flipY**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[flipY](/apidocs/classes/FabricObject.md#flipy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L22)

___

### globalCompositeOperation

• **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[globalCompositeOperation](/apidocs/classes/FabricObject.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L123)

___

### group

• `Optional` `Private` **group**: [`Group`](/apidocs/classes/Group.md)

A reference to the parent of the object, usually a Group

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[group](/apidocs/classes/FabricObject.md#group)

#### Defined in

[src/shapes/Object/Object.ts:246](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L246)

___

### hasBorders

• **hasBorders**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[hasBorders](/apidocs/classes/FabricObject.md#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L85)

___

### hasControls

• **hasControls**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[hasControls](/apidocs/classes/FabricObject.md#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L79)

___

### height

• **height**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[height](/apidocs/classes/FabricObject.md#height)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hoverCursor

• **hoverCursor**: ``null`` \| `string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[hoverCursor](/apidocs/classes/FabricObject.md#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:93](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L93)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[includeDefaultValues](/apidocs/classes/FabricObject.md#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L130)

___

### inverted

• **inverted**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[inverted](/apidocs/classes/FabricObject.md#inverted)

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L136)

___

### isMoving

• `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isMoving](/apidocs/classes/FabricObject.md#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L134)

___

### left

• **left**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[left](/apidocs/classes/FabricObject.md#left)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:18](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L18)

___

### lineCoords

• **lineCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Describe object's corner position in canvas element coordinates.
includes padding. Used of object detection.
set and refreshed with setCoords.
Those could go away

**`Todo`**

investigate how to get rid of those

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lineCoords](/apidocs/classes/FabricObject.md#linecoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:67](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L67)

___

### lockMovementX

• **lockMovementX**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockMovementX](/apidocs/classes/FabricObject.md#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L63)

___

### lockMovementY

• **lockMovementY**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockMovementY](/apidocs/classes/FabricObject.md#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L64)

___

### lockRotation

• **lockRotation**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockRotation](/apidocs/classes/FabricObject.md#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L65)

___

### lockScalingFlip

• **lockScalingFlip**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockScalingFlip](/apidocs/classes/FabricObject.md#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L70)

___

### lockScalingX

• **lockScalingX**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockScalingX](/apidocs/classes/FabricObject.md#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L66)

___

### lockScalingY

• **lockScalingY**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockScalingY](/apidocs/classes/FabricObject.md#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L67)

___

### lockSkewingX

• **lockSkewingX**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockSkewingX](/apidocs/classes/FabricObject.md#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L68)

___

### lockSkewingY

• **lockSkewingY**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockSkewingY](/apidocs/classes/FabricObject.md#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L69)

___

### matrixCache

• `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[matrixCache](/apidocs/classes/FabricObject.md#matrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:77](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L77)

___

### minScaleLimit

• **minScaleLimit**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[minScaleLimit](/apidocs/classes/FabricObject.md#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:109](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L109)

___

### moveCursor

• **moveCursor**: ``null`` \| `string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[moveCursor](/apidocs/classes/FabricObject.md#movecursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L94)

___

### noScaleCache

• **noScaleCache**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[noScaleCache](/apidocs/classes/FabricObject.md#noscalecache)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L57)

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

[FabricObject](/apidocs/classes/FabricObject.md).[oCoords](/apidocs/classes/FabricObject.md#ocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L105)

___

### objectCaching

• **objectCaching**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[objectCaching](/apidocs/classes/FabricObject.md#objectcaching)

#### Defined in

[src/shapes/Object/Object.ts:133](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L133)

___

### opacity

• **opacity**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[opacity](/apidocs/classes/FabricObject.md#opacity)

#### Defined in

[src/shapes/Object/Object.ts:111](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L111)

___

### originX

• **originX**: [`TOriginX`](/apidocs/modules.md#toriginx)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[originX](/apidocs/classes/FabricObject.md#originx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

• **originY**: [`TOriginY`](/apidocs/modules.md#toriginy)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[originY](/apidocs/classes/FabricObject.md#originy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L28)

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

[FabricObject](/apidocs/classes/FabricObject.md).[ownCaching](/apidocs/classes/FabricObject.md#owncaching)

#### Defined in

[src/shapes/Object/Object.ts:255](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L255)

___

### ownMatrixCache

• `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[ownMatrixCache](/apidocs/classes/FabricObject.md#ownmatrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:72](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L72)

___

### padding

• **padding**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[padding](/apidocs/classes/FabricObject.md#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:45](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L45)

___

### paintFirst

• **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[paintFirst](/apidocs/classes/FabricObject.md#paintfirst)

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L113)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[perPixelTargetFind](/apidocs/classes/FabricObject.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:90](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L90)

___

### scaleX

• **scaleX**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[scaleX](/apidocs/classes/FabricObject.md#scalex)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

• **scaleY**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[scaleY](/apidocs/classes/FabricObject.md#scaley)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

• **selectable**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[selectable](/apidocs/classes/FabricObject.md#selectable)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:88](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L88)

___

### selectionBackgroundColor

• **selectionBackgroundColor**: `string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[selectionBackgroundColor](/apidocs/classes/FabricObject.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L86)

___

### shadow

• **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[shadow](/apidocs/classes/FabricObject.md#shadow)

#### Defined in

[src/shapes/Object/Object.ts:126](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L126)

___

### skewX

• **skewX**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[skewX](/apidocs/classes/FabricObject.md#skewx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

• **skewY**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[skewY](/apidocs/classes/FabricObject.md#skewy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

• `Optional` **snapAngle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[snapAngle](/apidocs/classes/FabricObject.md#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L60)

___

### snapThreshold

• `Optional` **snapThreshold**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[snapThreshold](/apidocs/classes/FabricObject.md#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L61)

___

### stroke

• **stroke**: ``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[stroke](/apidocs/classes/FabricObject.md#stroke)

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L116)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeDashArray](/apidocs/classes/FabricObject.md#strokedasharray)

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L117)

___

### strokeDashOffset

• **strokeDashOffset**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeDashOffset](/apidocs/classes/FabricObject.md#strokedashoffset)

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L118)

___

### strokeLineCap

• **strokeLineCap**: `CanvasLineCap`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeLineCap](/apidocs/classes/FabricObject.md#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L119)

___

### strokeLineJoin

• **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeLineJoin](/apidocs/classes/FabricObject.md#strokelinejoin)

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L120)

___

### strokeMiterLimit

• **strokeMiterLimit**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeMiterLimit](/apidocs/classes/FabricObject.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/Object.ts:121](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L121)

___

### strokeUniform

• **strokeUniform**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeUniform](/apidocs/classes/FabricObject.md#strokeuniform)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeWidth](/apidocs/classes/FabricObject.md#strokewidth)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L30)

___

### top

• **top**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[top](/apidocs/classes/FabricObject.md#top)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

• **touchCornerSize**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[touchCornerSize](/apidocs/classes/FabricObject.md#touchcornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L73)

___

### transparentCorners

• **transparentCorners**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[transparentCorners](/apidocs/classes/FabricObject.md#transparentcorners)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L74)

___

### visible

• **visible**: `boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[visible](/apidocs/classes/FabricObject.md#visible)

#### Defined in

[src/shapes/Object/Object.ts:128](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L128)

___

### width

• **width**: `number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[width](/apidocs/classes/FabricObject.md#width)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:19](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L19)

___

### x1

• **x1**: `number`

x value or first line edge

**`Default`**

```ts

```

#### Implementation of

UniqueLineProps.x1

#### Defined in

[src/shapes/Line.ts:42](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L42)

___

### x2

• **x2**: `number`

x value or second line edge

**`Default`**

```ts

```

#### Implementation of

UniqueLineProps.x2

#### Defined in

[src/shapes/Line.ts:56](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L56)

___

### y1

• **y1**: `number`

y value or first line edge

**`Default`**

```ts

```

#### Implementation of

UniqueLineProps.y1

#### Defined in

[src/shapes/Line.ts:49](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L49)

___

### y2

• **y2**: `number`

y value or second line edge

**`Default`**

```ts

```

#### Implementation of

UniqueLineProps.y2

#### Defined in

[src/shapes/Line.ts:63](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L63)

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

[FabricObject](/apidocs/classes/FabricObject.md).[zoomX](/apidocs/classes/FabricObject.md#zoomx)

#### Defined in

[src/shapes/Object/Object.ts:211](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L211)

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

[FabricObject](/apidocs/classes/FabricObject.md).[zoomY](/apidocs/classes/FabricObject.md#zoomy)

#### Defined in

[src/shapes/Object/Object.ts:220](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L220)

___

### ATTRIBUTE\_NAMES

▪ `Static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [Line.fromElement](/apidocs/classes/Line.md#fromelement))

**`Static`**

**`Member Of`**

Line

**`See`**

http://www.w3.org/TR/SVG/shapes.html#LineElement

#### Defined in

[src/shapes/Line.ts:232](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L232)

___

### cacheProperties

▪ `Static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[cacheProperties](/apidocs/classes/FabricObject.md#cacheproperties)

#### Defined in

[src/shapes/Line.ts:67](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L67)

___

### ownDefaults

▪ `Static` **ownDefaults**: `Record`<`string`, `any`\> = `interactiveDefaults`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[ownDefaults](/apidocs/classes/FabricObject.md#owndefaults)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:148](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L148)

___

### stateProperties

▪ `Static` **stateProperties**: `string`[] = `stateProperties`

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[stateProperties](/apidocs/classes/FabricObject.md#stateproperties)

#### Defined in

[src/shapes/Object/Object.ts:146](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L146)

___

### type

▪ `Static` **type**: `string` = `'Line'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[type](/apidocs/classes/FabricObject.md#type)

#### Defined in

[src/shapes/Line.ts:65](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L65)

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

FabricObject.type

#### Defined in

[src/shapes/Object/Object.ts:290](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L290)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

FabricObject.type

#### Defined in

[src/shapes/Object/Object.ts:298](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L298)

## Methods

### \_animate

▸ `Private` **_animate**<`T`\>(`key`, `endValue`, `options?`): [`TAnimation`](/apidocs/modules/util.md#tanimation)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](/apidocs/modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Property to animate |
| `endValue` | `T` | - |
| `options?` | `Partial`<[`AnimationOptions`](/apidocs/modules/util.md#animationoptions)<`T`\>\> | Options object |

#### Returns

[`TAnimation`](/apidocs/modules/util.md#tanimation)<`T`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_animate](/apidocs/classes/FabricObject.md#_animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:50](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/AnimatableObject.ts#L50)

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
| `filler` | [`TFiller`](/apidocs/modules.md#tfiller) |  |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_applyPatternForTransformedGradient](/apidocs/classes/FabricObject.md#_applypatternfortransformedgradient)

#### Defined in

[src/shapes/Object/Object.ts:1255](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1255)

___

### \_applyPatternGradientTransform

▸ `Private` **_applyPatternGradientTransform**(`ctx`, `filler`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `filler` | [`TFiller`](/apidocs/modules.md#tfiller) | [Pattern](/apidocs/classes/Pattern.md) or [Gradient](/apidocs/classes/Gradient.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_applyPatternGradientTransform](/apidocs/classes/FabricObject.md#_applypatterngradienttransform)

#### Defined in

[src/shapes/Object/Object.ts:1152](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1152)

___

### \_calculateCurrentDimensions

▸ `Private` **_calculateCurrentDimensions**(`options?`): [`Point`](/apidocs/classes/Point.md)

Calculate object dimensions for controls box, including padding and canvas zoom.
and active selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | transform options |

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_calculateCurrentDimensions](/apidocs/classes/FabricObject.md#_calculatecurrentdimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:697](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L697)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_constrainScale](/apidocs/classes/FabricObject.md#_constrainscale)

#### Defined in

[src/shapes/Object/Object.ts:675](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L675)

___

### \_createBaseClipPathSVGMarkup

▸ `Private` **_createBaseClipPathSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_createBaseClipPathSVGMarkup](/apidocs/classes/FabricObject.md#_createbaseclippathsvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:158](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L158)

___

### \_createBaseSVGMarkup

▸ `Private` **_createBaseSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `noStyle?` | `boolean` |
| › `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |
| › `withShadow?` | `boolean` |

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_createBaseSVGMarkup](/apidocs/classes/FabricObject.md#_createbasesvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

▸ `Private` **_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_createCacheCanvas](/apidocs/classes/FabricObject.md#_createcachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:319](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L319)

___

### \_drawBorders

▸ `Private` **_drawBorders**(`ctx`, `size`, `styleOverride?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `size` | [`Point`](/apidocs/classes/Point.md) |  |
| `styleOverride` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_drawBorders](/apidocs/classes/FabricObject.md#_drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:376](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L376)

___

### \_drawClipPath

▸ **_drawClipPath**(`ctx`, `clipPath?`): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `clipPath?` | `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_drawClipPath](/apidocs/classes/FabricObject.md#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:944](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L944)

___

### \_findCenterFromElement

▸ `Private` **_findCenterFromElement**(): [`Point`](/apidocs/classes/Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates

#### Returns

[`Point`](/apidocs/classes/Point.md)

center point from element coordinates

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_findCenterFromElement](/apidocs/classes/FabricObject.md#_findcenterfromelement)

#### Defined in

[src/shapes/Line.ts:149](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L149)

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
| `pointer` | [`Point`](/apidocs/classes/Point.md) | `undefined` | The pointer indicating the mouse position |
| `forTouch` | `boolean` | `false` | indicates if we are looking for interaction area with a touch action |

#### Returns

`string`

corner code (tl, tr, bl, br, etc.), or 0 if nothing is found.

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_findTargetCorner](/apidocs/classes/FabricObject.md#_findtargetcorner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:191](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L191)

___

### \_getCacheCanvasDimensions

▸ `Private` **_getCacheCanvasDimensions**(): [`TCacheCanvasDimensions`](/apidocs/modules.md#tcachecanvasdimensions)

Return the dimension and the zoom level needed to create a cache canvas
big enough to host the object to be cached.

#### Returns

[`TCacheCanvasDimensions`](/apidocs/modules.md#tcachecanvasdimensions)

.x width of object to be cached

.y height of object to be cached

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_getCacheCanvasDimensions](/apidocs/classes/FabricObject.md#_getcachecanvasdimensions)

#### Defined in

[src/shapes/Object/Object.ts:390](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L390)

___

### \_getLeftTopCoords

▸ `Private` **_getLeftTopCoords**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_getLeftTopCoords](/apidocs/classes/FabricObject.md#_getlefttopcoords)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:222](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L222)

___

### \_getNonTransformedDimensions

▸ **_getNonTransformedDimensions**(): [`Point`](/apidocs/classes/Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_getNonTransformedDimensions](/apidocs/classes/FabricObject.md#_getnontransformeddimensions)

#### Defined in

[src/shapes/Line.ts:173](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L173)

___

### \_getTransformedDimensions

▸ `Private` **_getTransformedDimensions**(`options?`): [`Point`](/apidocs/classes/Point.md)

Calculate object bounding box dimensions from its properties scale, skew.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_getTransformedDimensions](/apidocs/classes/FabricObject.md#_gettransformeddimensions)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:49](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L49)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_limitCacheSize](/apidocs/classes/FabricObject.md#_limitcachesize)

#### Defined in

[src/shapes/Object/Object.ts:342](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L342)

___

### \_removeCacheCanvas

▸ **_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_removeCacheCanvas](/apidocs/classes/FabricObject.md#_removecachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:798](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L798)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_removeDefaultValues](/apidocs/classes/FabricObject.md#_removedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:590](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L590)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_removeShadow](/apidocs/classes/FabricObject.md#_removeshadow)

#### Defined in

[src/shapes/Object/Object.ts:1138](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1138)

___

### \_render

▸ `Private` **_render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_render](/apidocs/classes/FabricObject.md#_render)

#### Defined in

[src/shapes/Line.ts:121](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L121)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_renderBackground](/apidocs/classes/FabricObject.md#_renderbackground)

#### Defined in

[src/shapes/Object/Object.ts:1006](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1006)

___

### \_renderControls

▸ **_renderControls**(`ctx`, `styleOverride?`): `void`

Renders controls and borders for the object
the context here is not transformed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `styleOverride?` | `TStyleOverride` | properties to override the object style |

#### Returns

`void`

**`Todo`**

move to interactivity

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_renderControls](/apidocs/classes/FabricObject.md#_rendercontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:402](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L402)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_renderFill](/apidocs/classes/FabricObject.md#_renderfill)

#### Defined in

[src/shapes/Object/Object.ts:1205](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1205)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_renderPaintInOrder](/apidocs/classes/FabricObject.md#_renderpaintinorder)

#### Defined in

[src/shapes/Object/Object.ts:1180](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1180)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_renderStroke](/apidocs/classes/FabricObject.md#_renderstroke)

#### Defined in

[src/shapes/Object/Object.ts:1224](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1224)

___

### \_set

▸ `Private` **_set**(`key`, `value`): [`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_set](/apidocs/classes/FabricObject.md#_set)

#### Defined in

[src/shapes/Line.ts:103](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L103)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setClippingProperties](/apidocs/classes/FabricObject.md#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1084](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1084)

___

### \_setFillStyles

▸ **_setFillStyles**(`ctx`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `«destructured»` | `Pick`<[`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>, ``"fill"``\> |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_setFillStyles](/apidocs/classes/FabricObject.md#_setfillstyles)

#### Defined in

[src/shapes/Object/Object.ts:1073](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1073)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setLineDash](/apidocs/classes/FabricObject.md#_setlinedash)

#### Defined in

[src/shapes/Object/Object.ts:1096](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1096)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setObject](/apidocs/classes/FabricObject.md#_setobject)

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L18)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setOpacity](/apidocs/classes/FabricObject.md#_setopacity)

#### Defined in

[src/shapes/Object/Object.ts:1023](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1023)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setOptions](/apidocs/classes/FabricObject.md#_setoptions)

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L9)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setShadow](/apidocs/classes/FabricObject.md#_setshadow)

#### Defined in

[src/shapes/Object/Object.ts:1111](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1111)

___

### \_setStrokeStyles

▸ **_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `decl` | `Pick`<[`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>, ``"strokeDashOffset"`` \| ``"strokeLineCap"`` \| ``"strokeLineJoin"`` \| ``"strokeMiterLimit"`` \| ``"strokeWidth"`` \| ``"stroke"``\> |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_setStrokeStyles](/apidocs/classes/FabricObject.md#_setstrokestyles)

#### Defined in

[src/shapes/Object/Object.ts:1031](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1031)

___

### \_setWidthHeight

▸ `Private` **_setWidthHeight**(): `void`

#### Returns

`void`

#### Defined in

[src/shapes/Line.ts:86](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L86)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setupCompositeOperation](/apidocs/classes/FabricObject.md#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1535](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1535)

___

### \_toSVG

▸ **_toSVG**(): `string`[]

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_toSVG](/apidocs/classes/FabricObject.md#_tosvg)

#### Defined in

[src/shapes/Line.ts:217](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L217)

___

### \_updateCacheCanvas

▸ `Private` **_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_updateCacheCanvas](/apidocs/classes/FabricObject.md#_updatecachecanvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:164](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L164)

___

### addPaintOrder

▸ **addPaintOrder**(`this`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[addPaintOrder](/apidocs/classes/FabricObject.md#addpaintorder)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

___

### animate

▸ **animate**<`T`\>(`animatable`, `options?`): `Record`<`string`, [`TAnimation`](/apidocs/modules/util.md#tanimation)<`T`\>\>

Animates object's properties

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](/apidocs/modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animatable` | `Record`<`string`, `T`\> | map of keys and end values |
| `options?` | `Partial`<[`AnimationOptions`](/apidocs/modules/util.md#animationoptions)<`T`\>\> |  |

#### Returns

`Record`<`string`, [`TAnimation`](/apidocs/modules/util.md#tanimation)<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[animate](/apidocs/classes/FabricObject.md#animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/AnimatableObject.ts#L34)

___

### calcACoords

▸ **calcACoords**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[calcACoords](/apidocs/classes/FabricObject.md#calcacoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:552](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L552)

___

### calcLineCoords

▸ **calcLineCoords**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

return the coordinate of the 4 corners of the bounding box in HTMLCanvasElement coordinates
used for bounding box interactivity with the mouse

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[calcLineCoords](/apidocs/classes/FabricObject.md#calclinecoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:506](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L506)

___

### calcLinePoints

▸ `Private` **calcLinePoints**(): `UniqueLineProps`

Recalculates line points given width and height
Those points are simply placed around the center,
This is not useful outside internal render functions and svg output
Is not meant to be for the developer.

#### Returns

`UniqueLineProps`

#### Defined in

[src/shapes/Line.ts:193](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L193)

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

[FabricObject](/apidocs/classes/FabricObject.md).[calcOCoords](/apidocs/classes/FabricObject.md#calcocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:223](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L223)

___

### calcOwnMatrix

▸ **calcOwnMatrix**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

transform matrix for the object

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[calcOwnMatrix](/apidocs/classes/FabricObject.md#calcownmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:655](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L655)

___

### calcTransformMatrix

▸ **calcTransformMatrix**(`skipGroup?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `skipGroup?` | `boolean` | `false` | return transform matrix for object not counting parent transformations There are some situation in which this is useful to avoid the fake rotation. |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

transform matrix for the object

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[calcTransformMatrix](/apidocs/classes/FabricObject.md#calctransformmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:627](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L627)

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

[FabricObject](/apidocs/classes/FabricObject.md).[canDrop](/apidocs/classes/FabricObject.md#candrop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:639](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L639)

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

[FabricObject](/apidocs/classes/FabricObject.md).[clearContextTop](/apidocs/classes/FabricObject.md#clearcontexttop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:582](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L582)

___

### clone

▸ **clone**(`propertiesToInclude?`): `Promise`<[`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`<[`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[clone](/apidocs/classes/FabricObject.md#clone)

#### Defined in

[src/shapes/Object/Object.ts:1312](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1312)

___

### cloneAsImage

▸ **cloneAsImage**(`options?`): [`FabricImage`](/apidocs/classes/FabricImage.md)<`Partial`<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

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

[`FabricImage`](/apidocs/classes/FabricImage.md)<`Partial`<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Object cloned as image.

**`Todo`**

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cloneAsImage](/apidocs/classes/FabricObject.md#cloneasimage)

#### Defined in

[src/shapes/Object/Object.ts:1338](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1338)

___

### complexity

▸ **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance (is 1 unless subclassed)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[complexity](/apidocs/classes/FabricObject.md#complexity)

#### Defined in

[src/shapes/Object/Object.ts:1477](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1477)

___

### containsPoint

▸ **containsPoint**(`point`, `absolute?`, `calculate?`): `boolean`

Checks if point is inside the object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | `undefined` | Point to check against |
| `absolute?` | `boolean` | `false` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[containsPoint](/apidocs/classes/FabricObject.md#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:341](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L341)

___

### dispose

▸ **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[dispose](/apidocs/classes/FabricObject.md#dispose)

#### Defined in

[src/shapes/Object/Object.ts:1545](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1545)

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
| `options` | `Required`<`Omit`<[`TComposeMatrixArgs`](/apidocs/modules/util.md#tcomposematrixargs), ``"flipX"`` \| ``"flipY"``\>\> | object representing current object parameters |
| `styleOverride?` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[drawBorders](/apidocs/classes/FabricObject.md#drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:440](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L440)

___

### drawCacheOnCanvas

▸ **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `TCachedFabricObject`<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | - |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[drawCacheOnCanvas](/apidocs/classes/FabricObject.md#drawcacheoncanvas)

#### Defined in

[src/shapes/Object/Object.ts:962](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L962)

___

### drawClipPathOnCache

▸ **drawClipPathOnCache**(`ctx`, `clipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> |  |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[drawClipPathOnCache](/apidocs/classes/FabricObject.md#drawclippathoncache)

#### Defined in

[src/shapes/Object/Object.ts:891](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L891)

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
| `styleOverride` | `Partial`<`Pick`<`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | object to override the object style |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[drawControls](/apidocs/classes/FabricObject.md#drawcontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:504](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L504)

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
| `size` | [`Point`](/apidocs/classes/Point.md) | object size x = width, y = height |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[drawControlsConnectingLines](/apidocs/classes/FabricObject.md#drawcontrolsconnectinglines)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:474](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L474)

___

### drawObject

▸ **drawObject**(`ctx`, `forClipping?`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `forClipping?` | `boolean` | apply clipping styles |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[drawObject](/apidocs/classes/FabricObject.md#drawobject)

#### Defined in

[src/shapes/Object/Object.ts:923](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L923)

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

[FabricObject](/apidocs/classes/FabricObject.md).[drawSelectionBackground](/apidocs/classes/FabricObject.md#drawselectionbackground)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:342](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L342)

___

### findCommonAncestors

▸ **findCommonAncestors**<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`, `T`\> |
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

[FabricObject](/apidocs/classes/FabricObject.md).[findCommonAncestors](/apidocs/classes/FabricObject.md#findcommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:99](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/StackedObject.ts#L99)

___

### fire

▸ **fire**<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | `EventSpec`[`K`] | Options object |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[fire](/apidocs/classes/FabricObject.md#fire)

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L159)

___

### forEachControl

▸ **forEachControl**(`fn`): `void`

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`control`: [`Control`](/apidocs/classes/Control.md), `key`: `string`, `fabricObject`: `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>) => `any` | function to iterate over the controls over |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[forEachControl](/apidocs/classes/FabricObject.md#foreachcontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:320](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L320)

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

[FabricObject](/apidocs/classes/FabricObject.md).[get](/apidocs/classes/FabricObject.md#get)

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L59)

___

### getActiveControl

▸ **getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getActiveControl](/apidocs/classes/FabricObject.md#getactivecontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:176](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L176)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getAncestors](/apidocs/classes/FabricObject.md#getancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:80](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/StackedObject.ts#L80)

___

### getBoundingRect

▸ **getBoundingRect**(`absolute?`, `calculate?`): [`TBBox`](/apidocs/modules.md#tbbox)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absolute?` | `boolean` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | use coordinates of current position instead of .lineCoords / .aCoords |

#### Returns

[`TBBox`](/apidocs/modules.md#tbbox)

Object with left, top, width, height properties

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getBoundingRect](/apidocs/classes/FabricObject.md#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:428](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L428)

___

### getCanvasRetinaScaling

▸ **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getCanvasRetinaScaling](/apidocs/classes/FabricObject.md#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:487](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L487)

___

### getCenterPoint

▸ **getCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getCenterPoint](/apidocs/classes/FabricObject.md#getcenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:169](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L169)

___

### getCoords

▸ **getCoords**(`absolute?`, `calculate?`): [`Point`](/apidocs/classes/Point.md)[]

return correct set of coordinates for intersection
this will return either aCoords or lineCoords.
The coords are returned in an array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `absolute` | `boolean` | `false` | will return aCoords if true or lineCoords |
| `calculate` | `boolean` | `false` | will return aCoords if true or lineCoords |

#### Returns

[`Point`](/apidocs/classes/Point.md)[]

[tl, tr, br, bl] of points

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getCoords](/apidocs/classes/FabricObject.md#getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:228](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L228)

___

### getObjectOpacity

▸ **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getObjectOpacity](/apidocs/classes/FabricObject.md#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:660](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L660)

___

### getObjectScaling

▸ **getObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getObjectScaling](/apidocs/classes/FabricObject.md#getobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:629](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L629)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getParent](/apidocs/classes/FabricObject.md#getparent)

#### Defined in

[src/shapes/Object/StackedObject.ts:51](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/StackedObject.ts#L51)

___

### getPointByOrigin

▸ **getPointByOrigin**(`originX`, `originY`): [`Point`](/apidocs/classes/Point.md)

Returns the coordinates of the object as if it has a different origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getPointByOrigin](/apidocs/classes/FabricObject.md#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:194](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L194)

___

### getRelativeCenterPoint

▸ **getRelativeCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getRelativeCenterPoint](/apidocs/classes/FabricObject.md#getrelativecenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:180](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L180)

___

### getRelativeX

▸ **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/apidocs/classes/FabricObject.md#getx)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getRelativeX](/apidocs/classes/FabricObject.md#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:119](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L119)

___

### getRelativeXY

▸ **getRelativeXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x,y position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getRelativeXY](/apidocs/classes/FabricObject.md#getrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:180](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L180)

___

### getRelativeY

▸ **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/apidocs/classes/FabricObject.md#gety)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getRelativeY](/apidocs/classes/FabricObject.md#getrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:135](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L135)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getScaledHeight](/apidocs/classes/FabricObject.md#getscaledheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:446](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L446)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getScaledWidth](/apidocs/classes/FabricObject.md#getscaledwidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:437](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L437)

___

### getSvgCommons

▸ **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> & { `id?`: `string`  } |

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getSvgCommons](/apidocs/classes/FabricObject.md#getsvgcommons)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

___

### getSvgFilter

▸ **getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getSvgFilter](/apidocs/classes/FabricObject.md#getsvgfilter)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

___

### getSvgStyles

▸ **getSvgStyles**(`this`, `skipShadow?`): `string`

Returns styles-string for svg-export

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `skipShadow?` | `boolean` | a boolean to skip shadow filter output |

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getSvgStyles](/apidocs/classes/FabricObject.md#getsvgstyles)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:21](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L21)

___

### getSvgTransform

▸ **getSvgTransform**(`this`, `full?`, `additionalTransform?`): `string`

Returns transform-string for svg-export

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` |
| `full?` | `boolean` | `undefined` |
| `additionalTransform` | `string` | `''` |

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getSvgTransform](/apidocs/classes/FabricObject.md#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

▸ **getTotalAngle**(): [`TDegree`](/apidocs/modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getTotalAngle](/apidocs/classes/FabricObject.md#gettotalangle)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:495](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L495)

___

### getTotalObjectScaling

▸ **getTotalObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/apidocs/classes/Point.md)

object with scaleX and scaleY properties

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getTotalObjectScaling](/apidocs/classes/FabricObject.md#gettotalobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:646](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L646)

___

### getViewportTransform

▸ **getViewportTransform**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

Retrieves viewportTransform from Object's canvas if possible

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

**`Method`**

getViewportTransform

**`Member Of`**

FabricObject.prototype

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getViewportTransform](/apidocs/classes/FabricObject.md#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:543](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L543)

___

### getX

▸ **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getX](/apidocs/classes/FabricObject.md#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:90](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L90)

___

### getXY

▸ **getXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getXY](/apidocs/classes/FabricObject.md#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:150](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L150)

___

### getY

▸ **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getY](/apidocs/classes/FabricObject.md#gety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:104](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L104)

___

### hasCommonAncestors

▸ **hasCommonAncestors**<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[hasCommonAncestors](/apidocs/classes/FabricObject.md#hascommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:168](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/StackedObject.ts#L168)

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

[FabricObject](/apidocs/classes/FabricObject.md).[hasFill](/apidocs/classes/FabricObject.md#hasfill)

#### Defined in

[src/shapes/Object/Object.ts:831](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L831)

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

[FabricObject](/apidocs/classes/FabricObject.md).[hasStroke](/apidocs/classes/FabricObject.md#hasstroke)

#### Defined in

[src/shapes/Object/Object.ts:815](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L815)

___

### intersectsWithObject

▸ **intersectsWithObject**(`other`, `absolute?`, `calculate?`): `boolean`

Checks if object intersects with another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `absolute?` | `boolean` | `false` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of calculating them |

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[intersectsWithObject](/apidocs/classes/FabricObject.md#intersectswithobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:268](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L268)

___

### intersectsWithRect

▸ **intersectsWithRect**(`pointTL`, `pointBR`, `absolute?`, `calculate?`): `boolean`

Checks if object intersects with an area formed by 2 points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](/apidocs/classes/Point.md) | top-left point of area |
| `pointBR` | [`Point`](/apidocs/classes/Point.md) | bottom-right point of area |
| `absolute?` | `boolean` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object intersects with an area formed by 2 points

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[intersectsWithRect](/apidocs/classes/FabricObject.md#intersectswithrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:246](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L246)

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

[FabricObject](/apidocs/classes/FabricObject.md).[isCacheDirty](/apidocs/classes/FabricObject.md#iscachedirty)

#### Defined in

[src/shapes/Object/Object.ts:976](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L976)

___

### isContainedWithinObject

▸ **isContainedWithinObject**(`other`, `absolute?`, `calculate?`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `absolute?` | `boolean` | `false` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isContainedWithinObject](/apidocs/classes/FabricObject.md#iscontainedwithinobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:293](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L293)

___

### isContainedWithinRect

▸ **isContainedWithinRect**(`pointTL`, `pointBR`, `absolute?`, `calculate?`): `boolean`

Checks if object is fully contained within area formed by 2 points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](/apidocs/classes/Point.md) | top-left point of area |
| `pointBR` | [`Point`](/apidocs/classes/Point.md) | bottom-right point of area |
| `absolute?` | `boolean` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object is fully contained within area formed by 2 points

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isContainedWithinRect](/apidocs/classes/FabricObject.md#iscontainedwithinrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:311](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L311)

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

[FabricObject](/apidocs/classes/FabricObject.md).[isControlVisible](/apidocs/classes/FabricObject.md#iscontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:539](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L539)

___

### isDescendantOf

▸ **isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [Group.contains](/apidocs/classes/StaticCanvas.md#contains) or [StaticCanvas.contains](/apidocs/classes/StaticCanvas.md#contains) for performance reasons

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TAncestor` |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isDescendantOf](/apidocs/classes/FabricObject.md#isdescendantof)

#### Defined in

[src/shapes/Object/StackedObject.ts:64](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/StackedObject.ts#L64)

___

### isInFrontOf

▸ **isInFrontOf**<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isInFrontOf](/apidocs/classes/FabricObject.md#isinfrontof)

#### Defined in

[src/shapes/Object/StackedObject.ts:178](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/StackedObject.ts#L178)

___

### isNotVisible

▸ **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isNotVisible](/apidocs/classes/FabricObject.md#isnotvisible)

#### Defined in

[src/shapes/Object/Object.ts:738](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L738)

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

[FabricObject](/apidocs/classes/FabricObject.md).[isOnScreen](/apidocs/classes/FabricObject.md#isonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:354](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L354)

___

### isOverlapping

▸ **isOverlapping**<`T`\>(`other`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ObjectGeometry`<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isOverlapping](/apidocs/classes/FabricObject.md#isoverlapping)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:326](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L326)

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

[FabricObject](/apidocs/classes/FabricObject.md).[isPartiallyOnScreen](/apidocs/classes/FabricObject.md#ispartiallyonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:403](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L403)

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

[FabricObject](/apidocs/classes/FabricObject.md).[isType](/apidocs/classes/FabricObject.md#istype)

#### Defined in

[src/shapes/Object/Object.ts:1466](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1466)

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

[FabricObject](/apidocs/classes/FabricObject.md).[needsItsOwnCache](/apidocs/classes/FabricObject.md#needsitsowncache)

#### Defined in

[src/shapes/Object/Object.ts:843](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L843)

___

### off

▸ **off**<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[off](/apidocs/classes/FabricObject.md#off)

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L120)

▸ **off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[off](/apidocs/classes/FabricObject.md#off)

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[off](/apidocs/classes/FabricObject.md#off)

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L129)

___

### on

▸ **on**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `E` | `E` |

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

[FabricObject](/apidocs/classes/FabricObject.md).[on](/apidocs/classes/FabricObject.md#on)

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L23)

▸ **on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[on](/apidocs/classes/FabricObject.md#on)

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L27)

___

### onDeselect

▸ **onDeselect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | event if the process is generated by an event |
| `options.object?` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | next object we are setting as active, and reason why this is being deselected |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[onDeselect](/apidocs/classes/FabricObject.md#ondeselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:613](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L613)

___

### onSelect

▸ **onSelect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | event if the process is generated by an event |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[onSelect](/apidocs/classes/FabricObject.md#onselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:627](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L627)

___

### once

▸ **once**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `E` | `E` |

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

[FabricObject](/apidocs/classes/FabricObject.md).[once](/apidocs/classes/FabricObject.md#once)

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L62)

▸ **once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[once](/apidocs/classes/FabricObject.md#once)

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L66)

___

### render

▸ **render**(`ctx`): `void`

Renders an object on a specified context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[render](/apidocs/classes/FabricObject.md#render)

#### Defined in

[src/shapes/Object/Object.ts:750](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L750)

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

[FabricObject](/apidocs/classes/FabricObject.md).[renderCache](/apidocs/classes/FabricObject.md#rendercache)

#### Defined in

[src/shapes/Object/Object.ts:784](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L784)

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

[FabricObject](/apidocs/classes/FabricObject.md).[renderDragSourceEffect](/apidocs/classes/FabricObject.md#renderdragsourceeffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:651](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L651)

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

[FabricObject](/apidocs/classes/FabricObject.md).[renderDropTargetEffect](/apidocs/classes/FabricObject.md#renderdroptargeteffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:664](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L664)

___

### rotate

▸ **rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | [`TDegree`](/apidocs/modules.md#tdegree) | Angle value (in degrees) |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[rotate](/apidocs/classes/FabricObject.md#rotate)

#### Defined in

[src/shapes/Object/Object.ts:1494](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1494)

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

[FabricObject](/apidocs/classes/FabricObject.md).[scale](/apidocs/classes/FabricObject.md#scale)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:455](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L455)

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

[FabricObject](/apidocs/classes/FabricObject.md).[scaleToHeight](/apidocs/classes/FabricObject.md#scaletoheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:480](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L480)

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

[FabricObject](/apidocs/classes/FabricObject.md).[scaleToWidth](/apidocs/classes/FabricObject.md#scaletowidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:467](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L467)

___

### set

▸ **set**(`key`, `value?`): [`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[set](/apidocs/classes/FabricObject.md#set)

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L29)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setControlVisible](/apidocs/classes/FabricObject.md#setcontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:554](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L554)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setControlsVisibility](/apidocs/classes/FabricObject.md#setcontrolsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:566](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L566)

___

### setCoords

▸ **setCoords**(): `void`

Sets corner and controls position coordinates based on current angle, width and height, left and top.
oCoords are used to find the corners
aCoords are used to quickly find an object on the canvas
lineCoords are used to quickly find object during pointer events.
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setCoords](/apidocs/classes/FabricObject.md#setcoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:309](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L309)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setOnGroup](/apidocs/classes/FabricObject.md#setongroup)

#### Defined in

[src/shapes/Object/Object.ts:1526](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1526)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setOptions](/apidocs/classes/FabricObject.md#setoptions)

#### Defined in

[src/shapes/Object/Object.ts:495](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L495)

___

### setPositionByOrigin

▸ **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Sets the position of the object taking into consideration the object's origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Point`](/apidocs/classes/Point.md) | The new position of the object |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setPositionByOrigin](/apidocs/classes/FabricObject.md#setpositionbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:209](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L209)

___

### setRelativeX

▸ **setRelativeX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\ if parent is canvas then this method is identical to [setX](/apidocs/classes/FabricObject.md#setx) |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setRelativeX](/apidocs/classes/FabricObject.md#setrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:127](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L127)

___

### setRelativeXY

▸ **setRelativeXY**(`point`, `originX?`, `originY?`): `void`

As [setXY](/apidocs/classes/FabricObject.md#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | position according to object's originX originY properties in parent's coordinate plane |
| `originX?` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setRelativeXY](/apidocs/classes/FabricObject.md#setrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:190](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L190)

___

### setRelativeY

▸ **setRelativeY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\ if parent is canvas then this property is identical to [setY](/apidocs/classes/FabricObject.md#sety) |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setRelativeY](/apidocs/classes/FabricObject.md#setrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:143](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L143)

___

### setX

▸ **setX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setX](/apidocs/classes/FabricObject.md#setx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:97](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L97)

___

### setXY

▸ **setXY**(`point`, `originX?`, `originY?`): `void`

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
that otherwise are the object's current values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | position in canvas coordinate plane |
| `originX?` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

**`Example`**

Set object's bottom left corner to point (5,5) on canvas
```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setXY](/apidocs/classes/FabricObject.md#setxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:167](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L167)

___

### setY

▸ **setY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setY](/apidocs/classes/FabricObject.md#sety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:111](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L111)

___

### shouldCache

▸ **shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[shouldCache](/apidocs/classes/FabricObject.md#shouldcache)

#### Defined in

[src/shapes/Object/Object.ts:867](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L867)

___

### strokeBorders

▸ **strokeBorders**(`ctx`, `size`): `void`

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | ctx is rotated and translated so that (0,0) is at object's center |
| `size` | [`Point`](/apidocs/classes/Point.md) | the control box size used |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeBorders](/apidocs/classes/FabricObject.md#strokeborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:366](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L366)

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

[FabricObject](/apidocs/classes/FabricObject.md).[toCanvasElement](/apidocs/classes/FabricObject.md#tocanvaselement)

#### Defined in

[src/shapes/Object/Object.ts:1359](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1359)

___

### toClipPathSVG

▸ **toClipPathSVG**(`this`, `reviver?`): `string`

Returns svg clipPath representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toClipPathSVG](/apidocs/classes/FabricObject.md#toclippathsvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:143](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L143)

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

[FabricObject](/apidocs/classes/FabricObject.md).[toDataURL](/apidocs/classes/FabricObject.md#todataurl)

#### Defined in

[src/shapes/Object/Object.ts:1453](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1453)

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

[FabricObject](/apidocs/classes/FabricObject.md).[toDatalessObject](/apidocs/classes/FabricObject.md#todatalessobject)

#### Defined in

[src/shapes/Object/Object.ts:581](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L581)

___

### toJSON

▸ **toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toJSON](/apidocs/classes/FabricObject.md#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1485](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1485)

___

### toObject

▸ **toObject**<`T`, `K`\>(`propertiesToInclude?`): `Pick`<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`<`Props` & [`TClassProperties`](/apidocs/modules.md#tclassproperties)<[`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`<`T`, `K`\> & `SProps`

object representation of an instance

**`Method`**

toObject

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[toObject](/apidocs/classes/FabricObject.md#toobject)

#### Defined in

[src/shapes/Line.ts:159](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L159)

___

### toSVG

▸ **toSVG**(`this`, `reviver?`): `string`

Returns svg representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toSVG](/apidocs/classes/FabricObject.md#tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toString](/apidocs/classes/FabricObject.md#tostring)

#### Defined in

[src/shapes/Object/Object.ts:621](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L621)

___

### toggle

▸ **toggle**(`property`): [`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`Line`](/apidocs/classes/Line.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toggle](/apidocs/classes/FabricObject.md#toggle)

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L46)

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

[FabricObject](/apidocs/classes/FabricObject.md).[transform](/apidocs/classes/FabricObject.md#transform)

#### Defined in

[src/shapes/Object/Object.ts:503](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L503)

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

[FabricObject](/apidocs/classes/FabricObject.md).[transformMatrixKey](/apidocs/classes/FabricObject.md#transformmatrixkey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:584](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectGeometry.ts#L584)

___

### translateToCenterPoint

▸ **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/apidocs/classes/Point.md)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | The point which corresponds to the originX and originY params |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[translateToCenterPoint](/apidocs/classes/FabricObject.md#translatetocenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:122](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L122)

___

### translateToGivenOrigin

▸ **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/apidocs/classes/Point.md)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | The point which corresponds to the originX and originY params |
| `fromOriginX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `fromOriginY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |
| `toOriginX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `toOriginY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[translateToGivenOrigin](/apidocs/classes/FabricObject.md#translatetogivenorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:94](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L94)

___

### translateToOriginPoint

▸ **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/apidocs/classes/Point.md)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Point`](/apidocs/classes/Point.md) | The point which corresponds to center of the object |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[translateToOriginPoint](/apidocs/classes/FabricObject.md#translatetooriginpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:147](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/ObjectOrigin.ts#L147)

___

### willDrawShadow

▸ **willDrawShadow**(): `boolean`

Check if this object or a child object will cast a shadow
used by Group.shouldCache to know if child has a shadow recursively

#### Returns

`boolean`

**`Deprecated`**

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[willDrawShadow](/apidocs/classes/FabricObject.md#willdrawshadow)

#### Defined in

[src/shapes/Object/Object.ts:880](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L880)

___

### \_fromObject

▸ `Static` **_fromObject**<`S`\>(`object`, `«destructured»?`): `Promise`<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Record`<`string`, `unknown`\> |
| `«destructured»` | [`Abortable`](/apidocs/modules.md#abortable) & { `extraParam?`: `string`  } |

#### Returns

`Promise`<`S`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_fromObject](/apidocs/classes/FabricObject.md#_fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1564](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/Object.ts#L1564)

___

### fromElement

▸ `Static` **fromElement**(`element`, `options?`, `cssRules?`): `Promise`<[`Line`](/apidocs/classes/Line.md)<{}, [`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

Returns Line instance from an SVG element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | Element to parse |
| `options?` | [`Abortable`](/apidocs/modules.md#abortable) | Options object |
| `cssRules?` | `CSSRules` | - |

#### Returns

`Promise`<[`Line`](/apidocs/classes/Line.md)<{}, [`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Line

#### Defined in

[src/shapes/Line.ts:242](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L242)

___

### fromObject

▸ `Static` **fromObject**<`T`\>(`object`): `Promise`<[`Line`](/apidocs/classes/Line.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

Returns Line instance from an object representation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TOptions`](/apidocs/modules.md#toptions)<[`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | Object to create an instance from |

#### Returns

`Promise`<[`Line`](/apidocs/classes/Line.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Line

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[fromObject](/apidocs/classes/FabricObject.md#fromobject)

#### Defined in

[src/shapes/Line.ts:266](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Line.ts#L266)

___

### getDefaults

▸ `Static` **getDefaults**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getDefaults](/apidocs/classes/FabricObject.md#getdefaults)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:150](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/shapes/Object/InteractiveObject.ts#L150)
