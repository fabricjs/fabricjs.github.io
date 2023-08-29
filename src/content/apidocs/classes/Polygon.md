# Class: Polygon

## Hierarchy

- [`Polyline`](Polyline.md)

  ↳ **`Polygon`**

## Table of contents

### Constructors

- [constructor](Polygon.md#constructor)

### Properties

- [\_\_corner](Polygon.md#__corner)
- [\_\_owningGroup](Polygon.md#__owninggroup)
- [\_cacheCanvas](Polygon.md#_cachecanvas)
- [\_cacheContext](Polygon.md#_cachecontext)
- [\_controlsVisibility](Polygon.md#_controlsvisibility)
- [\_originalOriginX](Polygon.md#_originaloriginx)
- [\_originalOriginY](Polygon.md#_originaloriginy)
- [\_scaling](Polygon.md#_scaling)
- [\_transformDone](Polygon.md#_transformdone)
- [aCoords](Polygon.md#acoords)
- [absolutePositioned](Polygon.md#absolutepositioned)
- [activeOn](Polygon.md#activeon)
- [angle](Polygon.md#angle)
- [backgroundColor](Polygon.md#backgroundcolor)
- [borderColor](Polygon.md#bordercolor)
- [borderDashArray](Polygon.md#borderdasharray)
- [borderOpacityWhenMoving](Polygon.md#borderopacitywhenmoving)
- [borderScaleFactor](Polygon.md#borderscalefactor)
- [cacheHeight](Polygon.md#cacheheight)
- [cacheTranslationX](Polygon.md#cachetranslationx)
- [cacheTranslationY](Polygon.md#cachetranslationy)
- [cacheWidth](Polygon.md#cachewidth)
- [canvas](Polygon.md#canvas)
- [centeredRotation](Polygon.md#centeredrotation)
- [centeredScaling](Polygon.md#centeredscaling)
- [clipPath](Polygon.md#clippath)
- [clipPathId](Polygon.md#clippathid)
- [colorProperties](Polygon.md#colorproperties)
- [controls](Polygon.md#controls)
- [cornerColor](Polygon.md#cornercolor)
- [cornerDashArray](Polygon.md#cornerdasharray)
- [cornerSize](Polygon.md#cornersize)
- [cornerStrokeColor](Polygon.md#cornerstrokecolor)
- [cornerStyle](Polygon.md#cornerstyle)
- [dirty](Polygon.md#dirty)
- [evented](Polygon.md#evented)
- [exactBoundingBox](Polygon.md#exactboundingbox)
- [excludeFromExport](Polygon.md#excludefromexport)
- [fill](Polygon.md#fill)
- [fillRule](Polygon.md#fillrule)
- [flipX](Polygon.md#flipx)
- [flipY](Polygon.md#flipy)
- [globalCompositeOperation](Polygon.md#globalcompositeoperation)
- [group](Polygon.md#group)
- [hasBorders](Polygon.md#hasborders)
- [hasControls](Polygon.md#hascontrols)
- [height](Polygon.md#height)
- [hoverCursor](Polygon.md#hovercursor)
- [includeDefaultValues](Polygon.md#includedefaultvalues)
- [inverted](Polygon.md#inverted)
- [isMoving](Polygon.md#ismoving)
- [left](Polygon.md#left)
- [lineCoords](Polygon.md#linecoords)
- [lockMovementX](Polygon.md#lockmovementx)
- [lockMovementY](Polygon.md#lockmovementy)
- [lockRotation](Polygon.md#lockrotation)
- [lockScalingFlip](Polygon.md#lockscalingflip)
- [lockScalingX](Polygon.md#lockscalingx)
- [lockScalingY](Polygon.md#lockscalingy)
- [lockSkewingX](Polygon.md#lockskewingx)
- [lockSkewingY](Polygon.md#lockskewingy)
- [matrixCache](Polygon.md#matrixcache)
- [minScaleLimit](Polygon.md#minscalelimit)
- [moveCursor](Polygon.md#movecursor)
- [noScaleCache](Polygon.md#noscalecache)
- [oCoords](Polygon.md#ocoords)
- [objectCaching](Polygon.md#objectcaching)
- [opacity](Polygon.md#opacity)
- [originX](Polygon.md#originx)
- [originY](Polygon.md#originy)
- [ownCaching](Polygon.md#owncaching)
- [ownMatrixCache](Polygon.md#ownmatrixcache)
- [padding](Polygon.md#padding)
- [paintFirst](Polygon.md#paintfirst)
- [pathOffset](Polygon.md#pathoffset)
- [perPixelTargetFind](Polygon.md#perpixeltargetfind)
- [points](Polygon.md#points)
- [scaleX](Polygon.md#scalex)
- [scaleY](Polygon.md#scaley)
- [selectable](Polygon.md#selectable)
- [selectionBackgroundColor](Polygon.md#selectionbackgroundcolor)
- [shadow](Polygon.md#shadow)
- [skewX](Polygon.md#skewx)
- [skewY](Polygon.md#skewy)
- [snapAngle](Polygon.md#snapangle)
- [snapThreshold](Polygon.md#snapthreshold)
- [stroke](Polygon.md#stroke)
- [strokeDashArray](Polygon.md#strokedasharray)
- [strokeDashOffset](Polygon.md#strokedashoffset)
- [strokeDiff](Polygon.md#strokediff)
- [strokeLineCap](Polygon.md#strokelinecap)
- [strokeLineJoin](Polygon.md#strokelinejoin)
- [strokeMiterLimit](Polygon.md#strokemiterlimit)
- [strokeOffset](Polygon.md#strokeoffset)
- [strokeUniform](Polygon.md#strokeuniform)
- [strokeWidth](Polygon.md#strokewidth)
- [top](Polygon.md#top)
- [touchCornerSize](Polygon.md#touchcornersize)
- [transparentCorners](Polygon.md#transparentcorners)
- [visible](Polygon.md#visible)
- [width](Polygon.md#width)
- [zoomX](Polygon.md#zoomx)
- [zoomY](Polygon.md#zoomy)
- [ATTRIBUTE\_NAMES](Polygon.md#attribute_names)
- [cacheProperties](Polygon.md#cacheproperties)
- [layoutProperties](Polygon.md#layoutproperties)
- [ownDefaults](Polygon.md#owndefaults)
- [stateProperties](Polygon.md#stateproperties)
- [type](Polygon.md#type)

### Accessors

- [type](Polygon.md#type-1)

### Methods

- [\_animate](Polygon.md#_animate)
- [\_applyPatternForTransformedGradient](Polygon.md#_applypatternfortransformedgradient)
- [\_applyPatternGradientTransform](Polygon.md#_applypatterngradienttransform)
- [\_calcDimensions](Polygon.md#_calcdimensions)
- [\_calculateCurrentDimensions](Polygon.md#_calculatecurrentdimensions)
- [\_constrainScale](Polygon.md#_constrainscale)
- [\_createBaseClipPathSVGMarkup](Polygon.md#_createbaseclippathsvgmarkup)
- [\_createBaseSVGMarkup](Polygon.md#_createbasesvgmarkup)
- [\_createCacheCanvas](Polygon.md#_createcachecanvas)
- [\_drawBorders](Polygon.md#_drawborders)
- [\_drawClipPath](Polygon.md#_drawclippath)
- [\_findCenterFromElement](Polygon.md#_findcenterfromelement)
- [\_findCrossPoints](Polygon.md#_findcrosspoints)
- [\_findTargetCorner](Polygon.md#_findtargetcorner)
- [\_getCacheCanvasDimensions](Polygon.md#_getcachecanvasdimensions)
- [\_getCoords](Polygon.md#_getcoords)
- [\_getImageLines](Polygon.md#_getimagelines)
- [\_getLeftTopCoords](Polygon.md#_getlefttopcoords)
- [\_getNonTransformedDimensions](Polygon.md#_getnontransformeddimensions)
- [\_getTransformedDimensions](Polygon.md#_gettransformeddimensions)
- [\_limitCacheSize](Polygon.md#_limitcachesize)
- [\_removeCacheCanvas](Polygon.md#_removecachecanvas)
- [\_removeDefaultValues](Polygon.md#_removedefaultvalues)
- [\_removeShadow](Polygon.md#_removeshadow)
- [\_render](Polygon.md#_render)
- [\_renderBackground](Polygon.md#_renderbackground)
- [\_renderControls](Polygon.md#_rendercontrols)
- [\_renderFill](Polygon.md#_renderfill)
- [\_renderPaintInOrder](Polygon.md#_renderpaintinorder)
- [\_renderStroke](Polygon.md#_renderstroke)
- [\_resetOrigin](Polygon.md#_resetorigin)
- [\_set](Polygon.md#_set)
- [\_setClippingProperties](Polygon.md#_setclippingproperties)
- [\_setFillStyles](Polygon.md#_setfillstyles)
- [\_setLineDash](Polygon.md#_setlinedash)
- [\_setObject](Polygon.md#_setobject)
- [\_setOpacity](Polygon.md#_setopacity)
- [\_setOptions](Polygon.md#_setoptions)
- [\_setOriginToCenter](Polygon.md#_setorigintocenter)
- [\_setShadow](Polygon.md#_setshadow)
- [\_setStrokeStyles](Polygon.md#_setstrokestyles)
- [\_setupCompositeOperation](Polygon.md#_setupcompositeoperation)
- [\_toSVG](Polygon.md#_tosvg)
- [\_updateCacheCanvas](Polygon.md#_updatecachecanvas)
- [addPaintOrder](Polygon.md#addpaintorder)
- [animate](Polygon.md#animate)
- [calcACoords](Polygon.md#calcacoords)
- [calcLineCoords](Polygon.md#calclinecoords)
- [calcOCoords](Polygon.md#calcocoords)
- [calcOwnMatrix](Polygon.md#calcownmatrix)
- [calcTransformMatrix](Polygon.md#calctransformmatrix)
- [canDrop](Polygon.md#candrop)
- [clearContextTop](Polygon.md#clearcontexttop)
- [clone](Polygon.md#clone)
- [cloneAsImage](Polygon.md#cloneasimage)
- [complexity](Polygon.md#complexity)
- [containsPoint](Polygon.md#containspoint)
- [dispose](Polygon.md#dispose)
- [drawBorders](Polygon.md#drawborders)
- [drawCacheOnCanvas](Polygon.md#drawcacheoncanvas)
- [drawClipPathOnCache](Polygon.md#drawclippathoncache)
- [drawControls](Polygon.md#drawcontrols)
- [drawControlsConnectingLines](Polygon.md#drawcontrolsconnectinglines)
- [drawObject](Polygon.md#drawobject)
- [drawSelectionBackground](Polygon.md#drawselectionbackground)
- [findCommonAncestors](Polygon.md#findcommonancestors)
- [fire](Polygon.md#fire)
- [forEachControl](Polygon.md#foreachcontrol)
- [get](Polygon.md#get)
- [getActiveControl](Polygon.md#getactivecontrol)
- [getAncestors](Polygon.md#getancestors)
- [getBoundingRect](Polygon.md#getboundingrect)
- [getCanvasRetinaScaling](Polygon.md#getcanvasretinascaling)
- [getCenterPoint](Polygon.md#getcenterpoint)
- [getCoords](Polygon.md#getcoords)
- [getObjectOpacity](Polygon.md#getobjectopacity)
- [getObjectScaling](Polygon.md#getobjectscaling)
- [getParent](Polygon.md#getparent)
- [getPointByOrigin](Polygon.md#getpointbyorigin)
- [getRelativeCenterPoint](Polygon.md#getrelativecenterpoint)
- [getRelativeX](Polygon.md#getrelativex)
- [getRelativeXY](Polygon.md#getrelativexy)
- [getRelativeY](Polygon.md#getrelativey)
- [getScaledHeight](Polygon.md#getscaledheight)
- [getScaledWidth](Polygon.md#getscaledwidth)
- [getSvgCommons](Polygon.md#getsvgcommons)
- [getSvgFilter](Polygon.md#getsvgfilter)
- [getSvgStyles](Polygon.md#getsvgstyles)
- [getSvgTransform](Polygon.md#getsvgtransform)
- [getTotalAngle](Polygon.md#gettotalangle)
- [getTotalObjectScaling](Polygon.md#gettotalobjectscaling)
- [getViewportTransform](Polygon.md#getviewporttransform)
- [getX](Polygon.md#getx)
- [getXY](Polygon.md#getxy)
- [getY](Polygon.md#gety)
- [hasCommonAncestors](Polygon.md#hascommonancestors)
- [hasFill](Polygon.md#hasfill)
- [hasStroke](Polygon.md#hasstroke)
- [intersectsWithObject](Polygon.md#intersectswithobject)
- [intersectsWithRect](Polygon.md#intersectswithrect)
- [isCacheDirty](Polygon.md#iscachedirty)
- [isContainedWithinObject](Polygon.md#iscontainedwithinobject)
- [isContainedWithinRect](Polygon.md#iscontainedwithinrect)
- [isControlVisible](Polygon.md#iscontrolvisible)
- [isDescendantOf](Polygon.md#isdescendantof)
- [isInFrontOf](Polygon.md#isinfrontof)
- [isNotVisible](Polygon.md#isnotvisible)
- [isOnScreen](Polygon.md#isonscreen)
- [isOpen](Polygon.md#isopen)
- [isOverlapping](Polygon.md#isoverlapping)
- [isPartiallyOnScreen](Polygon.md#ispartiallyonscreen)
- [isType](Polygon.md#istype)
- [needsItsOwnCache](Polygon.md#needsitsowncache)
- [off](Polygon.md#off)
- [on](Polygon.md#on)
- [onDeselect](Polygon.md#ondeselect)
- [onSelect](Polygon.md#onselect)
- [once](Polygon.md#once)
- [render](Polygon.md#render)
- [renderCache](Polygon.md#rendercache)
- [renderDragSourceEffect](Polygon.md#renderdragsourceeffect)
- [renderDropTargetEffect](Polygon.md#renderdroptargeteffect)
- [rotate](Polygon.md#rotate)
- [scale](Polygon.md#scale)
- [scaleToHeight](Polygon.md#scaletoheight)
- [scaleToWidth](Polygon.md#scaletowidth)
- [set](Polygon.md#set)
- [setBoundingBox](Polygon.md#setboundingbox)
- [setControlVisible](Polygon.md#setcontrolvisible)
- [setControlsVisibility](Polygon.md#setcontrolsvisibility)
- [setCoords](Polygon.md#setcoords)
- [setDimensions](Polygon.md#setdimensions)
- [setOnGroup](Polygon.md#setongroup)
- [setOptions](Polygon.md#setoptions)
- [setPositionByOrigin](Polygon.md#setpositionbyorigin)
- [setRelativeX](Polygon.md#setrelativex)
- [setRelativeXY](Polygon.md#setrelativexy)
- [setRelativeY](Polygon.md#setrelativey)
- [setX](Polygon.md#setx)
- [setXY](Polygon.md#setxy)
- [setY](Polygon.md#sety)
- [shouldCache](Polygon.md#shouldcache)
- [strokeBorders](Polygon.md#strokeborders)
- [toCanvasElement](Polygon.md#tocanvaselement)
- [toClipPathSVG](Polygon.md#toclippathsvg)
- [toDataURL](Polygon.md#todataurl)
- [toDatalessObject](Polygon.md#todatalessobject)
- [toJSON](Polygon.md#tojson)
- [toObject](Polygon.md#toobject)
- [toSVG](Polygon.md#tosvg)
- [toString](Polygon.md#tostring)
- [toggle](Polygon.md#toggle)
- [transform](Polygon.md#transform)
- [transformMatrixKey](Polygon.md#transformmatrixkey)
- [translateToCenterPoint](Polygon.md#translatetocenterpoint)
- [translateToGivenOrigin](Polygon.md#translatetogivenorigin)
- [translateToOriginPoint](Polygon.md#translatetooriginpoint)
- [willDrawShadow](Polygon.md#willdrawshadow)
- [\_fromObject](Polygon.md#_fromobject)
- [fromElement](Polygon.md#fromelement)
- [fromObject](Polygon.md#fromobject)
- [getDefaults](Polygon.md#getdefaults)

## Constructors

### constructor

• **new Polygon**(`points?`, `options?`)

Constructor

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `points` | [`XY`](../interfaces/XY.md)[] | `[]` | Array of points (where each point is an object with x and y) |
| `options?` | `Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\> | `undefined` | Options object |

**`Example`**

```ts
var poly = new Polyline([
    { x: 10, y: 10 },
    { x: 50, y: 30 },
    { x: 40, y: 70 },
    { x: 60, y: 50 },
    { x: 100, y: 150 },
    { x: 40, y: 100 }
  ], {
  stroke: 'red',
  left: 100,
  top: 100
});
```

#### Inherited from

[Polyline](Polyline.md).[constructor](Polyline.md#constructor)

#### Defined in

[src/shapes/Polyline.ts:107](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L107)

## Properties

### \_\_corner

• `Optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[Polyline](Polyline.md).[__corner](Polyline.md#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L115)

___

### \_\_owningGroup

• `Optional` **\_\_owningGroup**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[Polyline](Polyline.md).[__owningGroup](Polyline.md#__owninggroup)

#### Defined in

[src/shapes/Object/StackedObject.ts:45](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L45)

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

[Polyline](Polyline.md).[_cacheCanvas](Polyline.md#_cachecanvas)

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

[Polyline](Polyline.md).[_cacheContext](Polyline.md#_cachecontext)

#### Defined in

[src/shapes/Object/Object.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L172)

___

### \_controlsVisibility

• **\_controlsVisibility**: `Record`<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[Polyline](Polyline.md).[_controlsVisibility](Polyline.md#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:122](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L122)

___

### \_originalOriginX

• `Optional` **\_originalOriginX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

[Polyline](Polyline.md).[_originalOriginX](Polyline.md#_originaloriginx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L39)

___

### \_originalOriginY

• `Optional` **\_originalOriginY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

[Polyline](Polyline.md).[_originalOriginY](Polyline.md#_originaloriginy)

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

[Polyline](Polyline.md).[_scaling](Polyline.md#_scaling)

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

[Polyline](Polyline.md).[_transformDone](Polyline.md#_transformdone)

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

[Polyline](Polyline.md).[aCoords](Polyline.md#acoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L67)

___

### absolutePositioned

• **absolutePositioned**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[absolutePositioned](Polyline.md#absolutepositioned)

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L136)

___

### activeOn

• **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

[Polyline](Polyline.md).[activeOn](Polyline.md#activeon)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:91](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L91)

___

### angle

• **angle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

[Polyline](Polyline.md).[angle](Polyline.md#angle)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

• **backgroundColor**: `string`

#### Inherited from

[Polyline](Polyline.md).[backgroundColor](Polyline.md#backgroundcolor)

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L123)

___

### borderColor

• **borderColor**: `string`

#### Inherited from

[Polyline](Polyline.md).[borderColor](Polyline.md#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L81)

___

### borderDashArray

• **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

[Polyline](Polyline.md).[borderDashArray](Polyline.md#borderdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L82)

___

### borderOpacityWhenMoving

• **borderOpacityWhenMoving**: `number`

#### Inherited from

[Polyline](Polyline.md).[borderOpacityWhenMoving](Polyline.md#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L83)

___

### borderScaleFactor

• **borderScaleFactor**: `number`

#### Inherited from

[Polyline](Polyline.md).[borderScaleFactor](Polyline.md#borderscalefactor)

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

[Polyline](Polyline.md).[cacheHeight](Polyline.md#cacheheight)

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

[Polyline](Polyline.md).[cacheTranslationX](Polyline.md#cachetranslationx)

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

[Polyline](Polyline.md).[cacheTranslationY](Polyline.md#cachetranslationy)

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

[Polyline](Polyline.md).[cacheWidth](Polyline.md#cachewidth)

#### Defined in

[src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L192)

___

### canvas

• `Optional` **canvas**: [`Canvas`](Canvas.md)

#### Inherited from

[Polyline](Polyline.md).[canvas](Polyline.md#canvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:146](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L146)

___

### centeredRotation

• **centeredRotation**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[centeredRotation](Polyline.md#centeredrotation)

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L137)

___

### centeredScaling

• **centeredScaling**: ``false``

#### Inherited from

[Polyline](Polyline.md).[centeredScaling](Polyline.md#centeredscaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L58)

___

### clipPath

• `Optional` **clipPath**: `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

[Polyline](Polyline.md).[clipPath](Polyline.md#clippath)

#### Defined in

[src/shapes/Object/Object.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L134)

___

### clipPathId

• `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[Polyline](Polyline.md).[clipPathId](Polyline.md#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### colorProperties

• **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[Polyline](Polyline.md).[colorProperties](Polyline.md#colorproperties)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L20)

___

### controls

• **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[Polyline](Polyline.md).[controls](Polyline.md#controls)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L128)

___

### cornerColor

• **cornerColor**: `string`

#### Inherited from

[Polyline](Polyline.md).[cornerColor](Polyline.md#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L75)

___

### cornerDashArray

• **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

[Polyline](Polyline.md).[cornerDashArray](Polyline.md#cornerdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L78)

___

### cornerSize

• **cornerSize**: `number`

#### Inherited from

[Polyline](Polyline.md).[cornerSize](Polyline.md#cornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L72)

___

### cornerStrokeColor

• **cornerStrokeColor**: `string`

#### Inherited from

[Polyline](Polyline.md).[cornerStrokeColor](Polyline.md#cornerstrokecolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L76)

___

### cornerStyle

• **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

[Polyline](Polyline.md).[cornerStyle](Polyline.md#cornerstyle)

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

[Polyline](Polyline.md).[dirty](Polyline.md#dirty)

#### Defined in

[src/shapes/Object/Object.ts:162](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L162)

___

### evented

• **evented**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[evented](Polyline.md#evented)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L89)

___

### exactBoundingBox

• **exactBoundingBox**: `boolean`

WARNING: Feature in progress
Calculate the exact bounding box taking in account strokeWidth on acute angles
this will be turned to true by default on fabric 6.0
maybe will be left in as an optimization since calculations may be slow

**`Deprecated`**

**`Default`**

```ts
false
```

#### Inherited from

[Polyline](Polyline.md).[exactBoundingBox](Polyline.md#exactboundingbox)

#### Defined in

[src/shapes/Polyline.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L51)

___

### excludeFromExport

• **excludeFromExport**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[excludeFromExport](Polyline.md#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L130)

___

### fill

• **fill**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[Polyline](Polyline.md).[fill](Polyline.md#fill)

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L113)

___

### fillRule

• **fillRule**: `CanvasFillRule`

#### Inherited from

[Polyline](Polyline.md).[fillRule](Polyline.md#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L114)

___

### flipX

• **flipX**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[flipX](Polyline.md#flipx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

• **flipY**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[flipY](Polyline.md#flipy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L22)

___

### globalCompositeOperation

• **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

[Polyline](Polyline.md).[globalCompositeOperation](Polyline.md#globalcompositeoperation)

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

[Polyline](Polyline.md).[group](Polyline.md#group)

#### Defined in

[src/shapes/Object/Object.ts:245](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L245)

___

### hasBorders

• **hasBorders**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[hasBorders](Polyline.md#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L85)

___

### hasControls

• **hasControls**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[hasControls](Polyline.md#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L79)

___

### height

• **height**: `number`

#### Inherited from

[Polyline](Polyline.md).[height](Polyline.md#height)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hoverCursor

• **hoverCursor**: ``null`` \| `string`

#### Inherited from

[Polyline](Polyline.md).[hoverCursor](Polyline.md#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L93)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[includeDefaultValues](Polyline.md#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L129)

___

### inverted

• **inverted**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[inverted](Polyline.md#inverted)

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L135)

___

### isMoving

• `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[Polyline](Polyline.md).[isMoving](Polyline.md#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L134)

___

### left

• **left**: `number`

#### Inherited from

[Polyline](Polyline.md).[left](Polyline.md#left)

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

[Polyline](Polyline.md).[lineCoords](Polyline.md#linecoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L76)

___

### lockMovementX

• **lockMovementX**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[lockMovementX](Polyline.md#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L63)

___

### lockMovementY

• **lockMovementY**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[lockMovementY](Polyline.md#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L64)

___

### lockRotation

• **lockRotation**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[lockRotation](Polyline.md#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L65)

___

### lockScalingFlip

• **lockScalingFlip**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[lockScalingFlip](Polyline.md#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L70)

___

### lockScalingX

• **lockScalingX**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[lockScalingX](Polyline.md#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L66)

___

### lockScalingY

• **lockScalingY**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[lockScalingY](Polyline.md#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L67)

___

### lockSkewingX

• **lockSkewingX**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[lockSkewingX](Polyline.md#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L68)

___

### lockSkewingY

• **lockSkewingY**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[lockSkewingY](Polyline.md#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L69)

___

### matrixCache

• `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[Polyline](Polyline.md).[matrixCache](Polyline.md#matrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L86)

___

### minScaleLimit

• **minScaleLimit**: `number`

#### Inherited from

[Polyline](Polyline.md).[minScaleLimit](Polyline.md#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:108](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L108)

___

### moveCursor

• **moveCursor**: ``null`` \| `string`

#### Inherited from

[Polyline](Polyline.md).[moveCursor](Polyline.md#movecursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L94)

___

### noScaleCache

• **noScaleCache**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[noScaleCache](Polyline.md#noscalecache)

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

[Polyline](Polyline.md).[oCoords](Polyline.md#ocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L105)

___

### objectCaching

• **objectCaching**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[objectCaching](Polyline.md#objectcaching)

#### Defined in

[src/shapes/Object/Object.ts:132](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L132)

___

### opacity

• **opacity**: `number`

#### Inherited from

[Polyline](Polyline.md).[opacity](Polyline.md#opacity)

#### Defined in

[src/shapes/Object/Object.ts:110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L110)

___

### originX

• **originX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

[Polyline](Polyline.md).[originX](Polyline.md#originx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

• **originY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

[Polyline](Polyline.md).[originY](Polyline.md#originy)

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

[Polyline](Polyline.md).[ownCaching](Polyline.md#owncaching)

#### Defined in

[src/shapes/Object/Object.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L254)

___

### ownMatrixCache

• `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[Polyline](Polyline.md).[ownMatrixCache](Polyline.md#ownmatrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L81)

___

### padding

• **padding**: `number`

#### Inherited from

[Polyline](Polyline.md).[padding](Polyline.md#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L54)

___

### paintFirst

• **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

[Polyline](Polyline.md).[paintFirst](Polyline.md#paintfirst)

#### Defined in

[src/shapes/Object/Object.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L112)

___

### pathOffset

• **pathOffset**: [`Point`](Point.md)

#### Inherited from

[Polyline](Polyline.md).[pathOffset](Polyline.md#pathoffset)

#### Defined in

[src/shapes/Polyline.ts:80](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L80)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[perPixelTargetFind](Polyline.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L90)

___

### points

• **points**: [`XY`](../interfaces/XY.md)[]

Points array

**`Default`**

```ts

```

#### Inherited from

[Polyline](Polyline.md).[points](Polyline.md#points)

#### Defined in

[src/shapes/Polyline.ts:40](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L40)

___

### scaleX

• **scaleX**: `number`

#### Inherited from

[Polyline](Polyline.md).[scaleX](Polyline.md#scalex)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

• **scaleY**: `number`

#### Inherited from

[Polyline](Polyline.md).[scaleY](Polyline.md#scaley)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

• **selectable**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[selectable](Polyline.md#selectable)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L88)

___

### selectionBackgroundColor

• **selectionBackgroundColor**: `string`

#### Inherited from

[Polyline](Polyline.md).[selectionBackgroundColor](Polyline.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L86)

___

### shadow

• **shadow**: ``null`` \| [`Shadow`](Shadow.md)

#### Inherited from

[Polyline](Polyline.md).[shadow](Polyline.md#shadow)

#### Defined in

[src/shapes/Object/Object.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L125)

___

### skewX

• **skewX**: `number`

#### Inherited from

[Polyline](Polyline.md).[skewX](Polyline.md#skewx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

• **skewY**: `number`

#### Inherited from

[Polyline](Polyline.md).[skewY](Polyline.md#skewy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

• `Optional` **snapAngle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

[Polyline](Polyline.md).[snapAngle](Polyline.md#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L60)

___

### snapThreshold

• `Optional` **snapThreshold**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

[Polyline](Polyline.md).[snapThreshold](Polyline.md#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L61)

___

### stroke

• **stroke**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[Polyline](Polyline.md).[stroke](Polyline.md#stroke)

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L115)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

[Polyline](Polyline.md).[strokeDashArray](Polyline.md#strokedasharray)

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L116)

___

### strokeDashOffset

• **strokeDashOffset**: `number`

#### Inherited from

[Polyline](Polyline.md).[strokeDashOffset](Polyline.md#strokedashoffset)

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L117)

___

### strokeDiff

• **strokeDiff**: [`Point`](Point.md)

#### Inherited from

[Polyline](Polyline.md).[strokeDiff](Polyline.md#strokediff)

#### Defined in

[src/shapes/Polyline.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L86)

___

### strokeLineCap

• **strokeLineCap**: `CanvasLineCap`

#### Inherited from

[Polyline](Polyline.md).[strokeLineCap](Polyline.md#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L118)

___

### strokeLineJoin

• **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

[Polyline](Polyline.md).[strokeLineJoin](Polyline.md#strokelinejoin)

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L119)

___

### strokeMiterLimit

• **strokeMiterLimit**: `number`

#### Inherited from

[Polyline](Polyline.md).[strokeMiterLimit](Polyline.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L120)

___

### strokeOffset

• **strokeOffset**: [`Point`](Point.md)

#### Inherited from

[Polyline](Polyline.md).[strokeOffset](Polyline.md#strokeoffset)

#### Defined in

[src/shapes/Polyline.ts:82](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L82)

___

### strokeUniform

• **strokeUniform**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[strokeUniform](Polyline.md#strokeuniform)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[Polyline](Polyline.md).[strokeWidth](Polyline.md#strokewidth)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L30)

___

### top

• **top**: `number`

#### Inherited from

[Polyline](Polyline.md).[top](Polyline.md#top)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

• **touchCornerSize**: `number`

#### Inherited from

[Polyline](Polyline.md).[touchCornerSize](Polyline.md#touchcornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L73)

___

### transparentCorners

• **transparentCorners**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[transparentCorners](Polyline.md#transparentcorners)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L74)

___

### visible

• **visible**: `boolean`

#### Inherited from

[Polyline](Polyline.md).[visible](Polyline.md#visible)

#### Defined in

[src/shapes/Object/Object.ts:127](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L127)

___

### width

• **width**: `number`

#### Inherited from

[Polyline](Polyline.md).[width](Polyline.md#width)

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

[Polyline](Polyline.md).[zoomX](Polyline.md#zoomx)

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

[Polyline](Polyline.md).[zoomY](Polyline.md#zoomy)

#### Defined in

[src/shapes/Object/Object.ts:219](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L219)

___

### ATTRIBUTE\_NAMES

▪ `Static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [fromElement](Polyline.md#fromelement))

**`Static`**

**`Member Of`**

Polyline
@see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement

#### Inherited from

[Polyline](Polyline.md).[ATTRIBUTE_NAMES](Polyline.md#attribute_names)

#### Defined in

[src/shapes/Polyline.ts:366](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L366)

___

### cacheProperties

▪ `Static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[Polyline](Polyline.md).[cacheProperties](Polyline.md#cacheproperties)

#### Defined in

[src/shapes/Polyline.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L84)

___

### layoutProperties

▪ `Static` **layoutProperties**: keyof [`Polyline`](Polyline.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

A list of properties that if changed trigger a recalculation of dimensions

**`Todo`**

check if you really need to recalculate for all cases

#### Inherited from

[Polyline](Polyline.md).[layoutProperties](Polyline.md#layoutproperties)

#### Defined in

[src/shapes/Polyline.ts:69](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L69)

___

### ownDefaults

▪ `Static` **ownDefaults**: `Record`<`string`, `any`\> = `polylineDefaultValues`

#### Overrides

[Polyline](Polyline.md).[ownDefaults](Polyline.md#owndefaults)

#### Defined in

[src/shapes/Polygon.ts:5](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polygon.ts#L5)

___

### stateProperties

▪ `Static` **stateProperties**: `string`[] = `stateProperties`

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[Polyline](Polyline.md).[stateProperties](Polyline.md#stateproperties)

#### Defined in

[src/shapes/Object/Object.ts:145](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L145)

___

### type

▪ `Static` **type**: `string` = `'Polygon'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[Polyline](Polyline.md).[type](Polyline.md#type)

#### Defined in

[src/shapes/Polygon.ts:7](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polygon.ts#L7)

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

Polyline.type

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

Polyline.type

#### Defined in

[src/shapes/Object/Object.ts:297](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L297)

## Methods

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

[Polyline](Polyline.md).[_animate](Polyline.md#_animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:50](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L50)

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

[Polyline](Polyline.md).[_applyPatternForTransformedGradient](Polyline.md#_applypatternfortransformedgradient)

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

[Polyline](Polyline.md).[_applyPatternGradientTransform](Polyline.md#_applypatterngradienttransform)

#### Defined in

[src/shapes/Object/Object.ts:1151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1151)

___

### \_calcDimensions

▸ `Private` **_calcDimensions**(`options?`): `Object`

Calculate the polygon bounding box

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`TProjectStrokeOnPointsOptions`](../modules/util.md#tprojectstrokeonpointsoptions)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `left` | `number` |
| `pathOffset` | [`Point`](Point.md) |
| `strokeDiff` | [`Point`](Point.md) |
| `strokeOffset` | [`Point`](Point.md) |
| `top` | `number` |
| `width` | `number` |

#### Inherited from

[Polyline](Polyline.md).[_calcDimensions](Polyline.md#_calcdimensions)

#### Defined in

[src/shapes/Polyline.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L128)

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

[Polyline](Polyline.md).[_calculateCurrentDimensions](Polyline.md#_calculatecurrentdimensions)

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

[Polyline](Polyline.md).[_constrainScale](Polyline.md#_constrainscale)

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

[Polyline](Polyline.md).[_createBaseClipPathSVGMarkup](Polyline.md#_createbaseclippathsvgmarkup)

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

[Polyline](Polyline.md).[_createBaseSVGMarkup](Polyline.md#_createbasesvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

▸ `Private` **_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[_createCacheCanvas](Polyline.md#_createcachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:318](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L318)

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

[Polyline](Polyline.md).[_drawBorders](Polyline.md#_drawborders)

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

[Polyline](Polyline.md).[_drawClipPath](Polyline.md#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:943](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L943)

___

### \_findCenterFromElement

▸ `Private` **_findCenterFromElement**(): [`Point`](Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates, by look at the polyline/polygon points.

#### Returns

[`Point`](Point.md)

center point from element coordinates

#### Inherited from

[Polyline](Polyline.md).[_findCenterFromElement](Polyline.md#_findcenterfromelement)

#### Defined in

[src/shapes/Polyline.ts:187](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L187)

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

[Polyline](Polyline.md).[_findCrossPoints](Polyline.md#_findcrosspoints)

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

[Polyline](Polyline.md).[_findTargetCorner](Polyline.md#_findtargetcorner)

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

[Polyline](Polyline.md).[_getCacheCanvasDimensions](Polyline.md#_getcachecanvasdimensions)

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

[Polyline](Polyline.md).[_getCoords](Polyline.md#_getcoords)

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

[Polyline](Polyline.md).[_getImageLines](Polyline.md#_getimagelines)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:448](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L448)

___

### \_getLeftTopCoords

▸ `Private` **_getLeftTopCoords**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

#### Inherited from

[Polyline](Polyline.md).[_getLeftTopCoords](Polyline.md#_getlefttopcoords)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:270](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L270)

___

### \_getNonTransformedDimensions

▸ **_getNonTransformedDimensions**(): [`Point`](Point.md)

stroke is taken in account in size

#### Returns

[`Point`](Point.md)

#### Inherited from

[Polyline](Polyline.md).[_getNonTransformedDimensions](Polyline.md#_getnontransformeddimensions)

#### Defined in

[src/shapes/Polyline.ts:211](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L211)

___

### \_getTransformedDimensions

▸ `Private` **_getTransformedDimensions**(`options?`): [`Point`](Point.md)

stroke and skewing are taken into account when projecting stroke on points,
therefore we don't want the default calculation to account for skewing as well.
Though it is possible to pass `width` and `height` in `options`, doing so is very strange, use with discretion.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

[`Point`](Point.md)

#### Inherited from

[Polyline](Polyline.md).[_getTransformedDimensions](Polyline.md#_gettransformeddimensions)

#### Defined in

[src/shapes/Polyline.ts:225](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L225)

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

[Polyline](Polyline.md).[_limitCacheSize](Polyline.md#_limitcachesize)

#### Defined in

[src/shapes/Object/Object.ts:341](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L341)

___

### \_removeCacheCanvas

▸ **_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[_removeCacheCanvas](Polyline.md#_removecachecanvas)

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

[Polyline](Polyline.md).[_removeDefaultValues](Polyline.md#_removedefaultvalues)

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

[Polyline](Polyline.md).[_removeShadow](Polyline.md#_removeshadow)

#### Defined in

[src/shapes/Object/Object.ts:1137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1137)

___

### \_render

▸ `Private` **_render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[_render](Polyline.md#_render)

#### Defined in

[src/shapes/Polyline.ts:330](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L330)

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

[Polyline](Polyline.md).[_renderBackground](Polyline.md#_renderbackground)

#### Defined in

[src/shapes/Object/Object.ts:1005](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1005)

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

[Polyline](Polyline.md).[_renderControls](Polyline.md#_rendercontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:412](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L412)

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

[Polyline](Polyline.md).[_renderFill](Polyline.md#_renderfill)

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

[Polyline](Polyline.md).[_renderPaintInOrder](Polyline.md#_renderpaintinorder)

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

[Polyline](Polyline.md).[_renderStroke](Polyline.md#_renderstroke)

#### Defined in

[src/shapes/Object/Object.ts:1223](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1223)

___

### \_resetOrigin

▸ `Private` **_resetOrigin**(): `void`

Resets the origin/position of the object to it's original origin

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[_resetOrigin](Polyline.md#_resetorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:246](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L246)

___

### \_set

▸ `Private` **_set**(`key`, `value`): [`Polygon`](Polygon.md)

Recalculates dimensions when changing skew and scale

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Polygon`](Polygon.md)

#### Inherited from

[Polyline](Polyline.md).[_set](Polyline.md#_set)

#### Defined in

[src/shapes/Polyline.ts:261](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L261)

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

[Polyline](Polyline.md).[_setClippingProperties](Polyline.md#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1083](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1083)

___

### \_setFillStyles

▸ **_setFillStyles**(`ctx`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `«destructured»` | `Pick`<[`Polygon`](Polygon.md), ``"fill"``\> |

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[_setFillStyles](Polyline.md#_setfillstyles)

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

[Polyline](Polyline.md).[_setLineDash](Polyline.md#_setlinedash)

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

[Polyline](Polyline.md).[_setObject](Polyline.md#_setobject)

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

[Polyline](Polyline.md).[_setOpacity](Polyline.md#_setopacity)

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

[Polyline](Polyline.md).[_setOptions](Polyline.md#_setoptions)

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L9)

___

### \_setOriginToCenter

▸ `Private` **_setOriginToCenter**(): `void`

Sets the origin/position of the object to it's center point

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[_setOriginToCenter](Polyline.md#_setorigintocenter)

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

[Polyline](Polyline.md).[_setShadow](Polyline.md#_setshadow)

#### Defined in

[src/shapes/Object/Object.ts:1110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1110)

___

### \_setStrokeStyles

▸ **_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `decl` | `Pick`<[`Polygon`](Polygon.md), ``"strokeDashOffset"`` \| ``"strokeLineCap"`` \| ``"strokeLineJoin"`` \| ``"strokeMiterLimit"`` \| ``"strokeWidth"`` \| ``"stroke"``\> |

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[_setStrokeStyles](Polyline.md#_setstrokestyles)

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

[Polyline](Polyline.md).[_setupCompositeOperation](Polyline.md#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1524](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1524)

___

### \_toSVG

▸ **_toSVG**(): `string`[]

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

[Polyline](Polyline.md).[_toSVG](Polyline.md#_tosvg)

#### Defined in

[src/shapes/Polyline.ts:301](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L301)

___

### \_updateCacheCanvas

▸ `Private` **_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

[Polyline](Polyline.md).[_updateCacheCanvas](Polyline.md#_updatecachecanvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L164)

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

[Polyline](Polyline.md).[addPaintOrder](Polyline.md#addpaintorder)

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

[Polyline](Polyline.md).[animate](Polyline.md#animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L34)

___

### calcACoords

▸ **calcACoords**(): [`TCornerPoint`](../modules.md#tcornerpoint)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](../modules.md#tcornerpoint)

#### Inherited from

[Polyline](Polyline.md).[calcACoords](Polyline.md#calcacoords)

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

[Polyline](Polyline.md).[calcLineCoords](Polyline.md#calclinecoords)

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

[Polyline](Polyline.md).[calcOCoords](Polyline.md#calcocoords)

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

[Polyline](Polyline.md).[calcOwnMatrix](Polyline.md#calcownmatrix)

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

[Polyline](Polyline.md).[calcTransformMatrix](Polyline.md#calctransformmatrix)

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

[Polyline](Polyline.md).[canDrop](Polyline.md#candrop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:649](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L649)

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

[Polyline](Polyline.md).[clearContextTop](Polyline.md#clearcontexttop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:592](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L592)

___

### clone

▸ **clone**(`propertiesToInclude?`): `Promise`<[`Polygon`](Polygon.md)\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`<[`Polygon`](Polygon.md)\>

#### Inherited from

[Polyline](Polyline.md).[clone](Polyline.md#clone)

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

[Polyline](Polyline.md).[cloneAsImage](Polyline.md#cloneasimage)

#### Defined in

[src/shapes/Object/Object.ts:1337](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1337)

___

### complexity

▸ **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance

#### Inherited from

[Polyline](Polyline.md).[complexity](Polyline.md#complexity)

#### Defined in

[src/shapes/Polyline.ts:354](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L354)

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

[Polyline](Polyline.md).[containsPoint](Polyline.md#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:357](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L357)

___

### dispose

▸ **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[dispose](Polyline.md#dispose)

#### Defined in

[src/shapes/Object/Object.ts:1534](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1534)

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

[Polyline](Polyline.md).[drawBorders](Polyline.md#drawborders)

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

[Polyline](Polyline.md).[drawCacheOnCanvas](Polyline.md#drawcacheoncanvas)

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

[Polyline](Polyline.md).[drawClipPathOnCache](Polyline.md#drawclippathoncache)

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

[Polyline](Polyline.md).[drawControls](Polyline.md#drawcontrols)

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

[Polyline](Polyline.md).[drawControlsConnectingLines](Polyline.md#drawcontrolsconnectinglines)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:484](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L484)

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

[Polyline](Polyline.md).[drawObject](Polyline.md#drawobject)

#### Defined in

[src/shapes/Object/Object.ts:922](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L922)

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

[Polyline](Polyline.md).[drawSelectionBackground](Polyline.md#drawselectionbackground)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:352](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L352)

___

### findCommonAncestors

▸ **findCommonAncestors**<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Polygon`](Polygon.md)<`T`\> |
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

[Polyline](Polyline.md).[findCommonAncestors](Polyline.md#findcommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L99)

___

### fire

▸ **fire**<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ObjectEvents`](../interfaces/ObjectEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | [`ObjectEvents`](../interfaces/ObjectEvents.md)[`K`] | Options object |

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[fire](Polyline.md#fire)

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

[Polyline](Polyline.md).[forEachControl](Polyline.md#foreachcontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:330](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L330)

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

[Polyline](Polyline.md).[get](Polyline.md#get)

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L59)

___

### getActiveControl

▸ **getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Polyline](Polyline.md).[getActiveControl](Polyline.md#getactivecontrol)

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

[Polyline](Polyline.md).[getAncestors](Polyline.md#getancestors)

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

[Polyline](Polyline.md).[getBoundingRect](Polyline.md#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:540](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L540)

___

### getCanvasRetinaScaling

▸ **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[Polyline](Polyline.md).[getCanvasRetinaScaling](Polyline.md#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:599](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L599)

___

### getCenterPoint

▸ **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

[Polyline](Polyline.md).[getCenterPoint](Polyline.md#getcenterpoint)

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

[Polyline](Polyline.md).[getCoords](Polyline.md#getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:237](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L237)

___

### getObjectOpacity

▸ **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[Polyline](Polyline.md).[getObjectOpacity](Polyline.md#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:659](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L659)

___

### getObjectScaling

▸ **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

[Polyline](Polyline.md).[getObjectScaling](Polyline.md#getobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:628](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L628)

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

[Polyline](Polyline.md).[getParent](Polyline.md#getparent)

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

[Polyline](Polyline.md).[getPointByOrigin](Polyline.md#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:198](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L198)

___

### getRelativeCenterPoint

▸ **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

[Polyline](Polyline.md).[getRelativeCenterPoint](Polyline.md#getrelativecenterpoint)

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

[Polyline](Polyline.md).[getRelativeX](Polyline.md#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L128)

___

### getRelativeXY

▸ **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in parent's coordinate plane

#### Inherited from

[Polyline](Polyline.md).[getRelativeXY](Polyline.md#getrelativexy)

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

[Polyline](Polyline.md).[getRelativeY](Polyline.md#getrelativey)

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

[Polyline](Polyline.md).[getScaledHeight](Polyline.md#getscaledheight)

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

[Polyline](Polyline.md).[getScaledWidth](Polyline.md#getscaledwidth)

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

[Polyline](Polyline.md).[getSvgCommons](Polyline.md#getsvgcommons)

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

[Polyline](Polyline.md).[getSvgFilter](Polyline.md#getsvgfilter)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

___

### getSvgStyles

▸ **getSvgStyles**(`this`, `skipShadow?`): `string`

Returns styles-string for svg-export

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |
| `skipShadow?` | `boolean` | a boolean to skip shadow filter output |

#### Returns

`string`

#### Inherited from

[Polyline](Polyline.md).[getSvgStyles](Polyline.md#getsvgstyles)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L21)

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

[Polyline](Polyline.md).[getSvgTransform](Polyline.md#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

▸ **getTotalAngle**(): [`TDegree`](../modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../modules.md#tdegree)

#### Inherited from

[Polyline](Polyline.md).[getTotalAngle](Polyline.md#gettotalangle)

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

[Polyline](Polyline.md).[getTotalObjectScaling](Polyline.md#gettotalobjectscaling)

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

[Polyline](Polyline.md).[getViewportTransform](Polyline.md#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:655](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L655)

___

### getX

▸ **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](Object.md#originx) property in canvas coordinate plane

#### Inherited from

[Polyline](Polyline.md).[getX](Polyline.md#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L99)

___

### getXY

▸ **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in canvas coordinate plane

#### Inherited from

[Polyline](Polyline.md).[getXY](Polyline.md#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L159)

___

### getY

▸ **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](Object.md#originy) property in canvas coordinate plane

#### Inherited from

[Polyline](Polyline.md).[getY](Polyline.md#gety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L113)

___

### hasCommonAncestors

▸ **hasCommonAncestors**<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Polygon`](Polygon.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

[Polyline](Polyline.md).[hasCommonAncestors](Polyline.md#hascommonancestors)

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

[Polyline](Polyline.md).[hasFill](Polyline.md#hasfill)

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

[Polyline](Polyline.md).[hasStroke](Polyline.md#hasstroke)

#### Defined in

[src/shapes/Object/Object.ts:814](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L814)

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

[Polyline](Polyline.md).[intersectsWithObject](Polyline.md#intersectswithobject)

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

[Polyline](Polyline.md).[intersectsWithRect](Polyline.md#intersectswithrect)

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

[Polyline](Polyline.md).[isCacheDirty](Polyline.md#iscachedirty)

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

[Polyline](Polyline.md).[isContainedWithinObject](Polyline.md#iscontainedwithinobject)

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

[Polyline](Polyline.md).[isContainedWithinRect](Polyline.md#iscontainedwithinrect)

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

[Polyline](Polyline.md).[isControlVisible](Polyline.md#iscontrolvisible)

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

[Polyline](Polyline.md).[isDescendantOf](Polyline.md#isdescendantof)

#### Defined in

[src/shapes/Object/StackedObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L64)

___

### isInFrontOf

▸ **isInFrontOf**<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Polygon`](Polygon.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[Polyline](Polyline.md).[isInFrontOf](Polyline.md#isinfrontof)

#### Defined in

[src/shapes/Object/StackedObject.ts:178](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L178)

___

### isNotVisible

▸ **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Polyline](Polyline.md).[isNotVisible](Polyline.md#isnotvisible)

#### Defined in

[src/shapes/Object/Object.ts:737](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L737)

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

[Polyline](Polyline.md).[isOnScreen](Polyline.md#isonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:376](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L376)

___

### isOpen

▸ `Protected` **isOpen**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Polyline](Polyline.md).[isOpen](Polyline.md#isopen)

#### Defined in

[src/shapes/Polygon.ts:16](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polygon.ts#L16)

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

[Polyline](Polyline.md).[isOverlapping](Polyline.md#isoverlapping)

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

[Polyline](Polyline.md).[isPartiallyOnScreen](Polyline.md#ispartiallyonscreen)

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

[Polyline](Polyline.md).[isType](Polyline.md#istype)

#### Defined in

[src/shapes/Object/Object.ts:1465](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1465)

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

[Polyline](Polyline.md).[needsItsOwnCache](Polyline.md#needsitsowncache)

#### Defined in

[src/shapes/Object/Object.ts:842](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L842)

___

### off

▸ **off**<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ObjectEvents`](../interfaces/ObjectEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[off](Polyline.md#off)

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L120)

▸ **off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`<[`ObjectEvents`](../interfaces/ObjectEvents.md)\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[off](Polyline.md#off)

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[off](Polyline.md#off)

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L129)

___

### on

▸ **on**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ObjectEvents`](../interfaces/ObjectEvents.md) |
| `E` | extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Canvas`](Canvas.md) \| [`Group`](Group.md) \| [`StaticCanvas`](StaticCanvas.md)<[`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md)\>  } \| { `target`: [`Canvas`](Canvas.md) \| [`Group`](Group.md) \| [`StaticCanvas`](StaticCanvas.md)<[`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md)\>  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> |

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

[Polyline](Polyline.md).[on](Polyline.md#on)

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L23)

▸ **on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

[Polyline](Polyline.md).[on](Polyline.md#on)

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L27)

___

### onDeselect

▸ **onDeselect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | [`TPointerEvent`](../modules.md#tpointerevent) | event if the process is generated by an event |
| `options.object?` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | next object we are setting as active, and reason why this is being deselected |

#### Returns

`boolean`

#### Inherited from

[Polyline](Polyline.md).[onDeselect](Polyline.md#ondeselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:623](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L623)

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

[Polyline](Polyline.md).[onSelect](Polyline.md#onselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:637](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L637)

___

### once

▸ **once**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ObjectEvents`](../interfaces/ObjectEvents.md) |
| `E` | extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Canvas`](Canvas.md) \| [`Group`](Group.md) \| [`StaticCanvas`](StaticCanvas.md)<[`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md)\>  } \| { `target`: [`Canvas`](Canvas.md) \| [`Group`](Group.md) \| [`StaticCanvas`](StaticCanvas.md)<[`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md)\>  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> |

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

[Polyline](Polyline.md).[once](Polyline.md#once)

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L62)

▸ **once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

[Polyline](Polyline.md).[once](Polyline.md#once)

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L66)

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

[Polyline](Polyline.md).[render](Polyline.md#render)

#### Defined in

[src/shapes/Object/Object.ts:749](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L749)

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

[Polyline](Polyline.md).[renderCache](Polyline.md#rendercache)

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

[Polyline](Polyline.md).[renderDragSourceEffect](Polyline.md#renderdragsourceeffect)

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

[Polyline](Polyline.md).[renderDropTargetEffect](Polyline.md#renderdroptargeteffect)

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

[Polyline](Polyline.md).[rotate](Polyline.md#rotate)

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

[Polyline](Polyline.md).[scale](Polyline.md#scale)

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

[Polyline](Polyline.md).[scaleToHeight](Polyline.md#scaletoheight)

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

[Polyline](Polyline.md).[scaleToWidth](Polyline.md#scaletowidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:579](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L579)

___

### set

▸ **set**(`key`, `value?`): [`Polygon`](Polygon.md)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`Polygon`](Polygon.md)

#### Inherited from

[Polyline](Polyline.md).[set](Polyline.md#set)

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L29)

___

### setBoundingBox

▸ **setBoundingBox**(`adjustPosition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adjustPosition?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[setBoundingBox](Polyline.md#setboundingbox)

#### Defined in

[src/shapes/Polyline.ts:196](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L196)

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

[Polyline](Polyline.md).[setControlVisible](Polyline.md#setcontrolvisible)

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

[Polyline](Polyline.md).[setControlsVisibility](Polyline.md#setcontrolsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:576](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L576)

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

[Polyline](Polyline.md).[setCoords](Polyline.md#setcoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:319](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L319)

___

### setDimensions

▸ **setDimensions**(): `void`

#### Returns

`void`

#### Inherited from

[Polyline](Polyline.md).[setDimensions](Polyline.md#setdimensions)

#### Defined in

[src/shapes/Polyline.ts:192](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L192)

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

[Polyline](Polyline.md).[setOnGroup](Polyline.md#setongroup)

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

[Polyline](Polyline.md).[setOptions](Polyline.md#setoptions)

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

[Polyline](Polyline.md).[setPositionByOrigin](Polyline.md#setpositionbyorigin)

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

[Polyline](Polyline.md).[setRelativeX](Polyline.md#setrelativex)

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

[Polyline](Polyline.md).[setRelativeXY](Polyline.md#setrelativexy)

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

[Polyline](Polyline.md).[setRelativeY](Polyline.md#setrelativey)

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

[Polyline](Polyline.md).[setX](Polyline.md#setx)

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

[Polyline](Polyline.md).[setXY](Polyline.md#setxy)

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

[Polyline](Polyline.md).[setY](Polyline.md#sety)

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
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Inherited from

[Polyline](Polyline.md).[shouldCache](Polyline.md#shouldcache)

#### Defined in

[src/shapes/Object/Object.ts:866](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L866)

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

[Polyline](Polyline.md).[strokeBorders](Polyline.md#strokeborders)

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

[Polyline](Polyline.md).[toCanvasElement](Polyline.md#tocanvaselement)

#### Defined in

[src/shapes/Object/Object.ts:1358](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1358)

___

### toClipPathSVG

▸ **toClipPathSVG**(`this`, `reviver?`): `string`

Returns svg clipPath representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[Polyline](Polyline.md).[toClipPathSVG](Polyline.md#toclippathsvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:143](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L143)

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

[Polyline](Polyline.md).[toDataURL](Polyline.md#todataurl)

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

[Polyline](Polyline.md).[toDatalessObject](Polyline.md#todatalessobject)

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

[Polyline](Polyline.md).[toJSON](Polyline.md#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1484](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1484)

___

### toObject

▸ **toObject**<`T`, `K`\>(`propertiesToInclude?`): `Pick`<`T`, `K`\> & [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md)

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\> & [`TClassProperties`](../modules.md#tclassproperties)<[`Polygon`](Polygon.md)\>, keyof [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md)\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`<`T`, `K`\> & [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md)

Object representation of an instance

#### Inherited from

[Polyline](Polyline.md).[toObject](Polyline.md#toobject)

#### Defined in

[src/shapes/Polyline.ts:286](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L286)

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

[Polyline](Polyline.md).[toSVG](Polyline.md#tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

#### Inherited from

[Polyline](Polyline.md).[toString](Polyline.md#tostring)

#### Defined in

[src/shapes/Object/Object.ts:620](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L620)

___

### toggle

▸ **toggle**(`property`): [`Polygon`](Polygon.md)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`Polygon`](Polygon.md)

#### Inherited from

[Polyline](Polyline.md).[toggle](Polyline.md#toggle)

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

[Polyline](Polyline.md).[transform](Polyline.md#transform)

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

[Polyline](Polyline.md).[transformMatrixKey](Polyline.md#transformmatrixkey)

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

[Polyline](Polyline.md).[translateToCenterPoint](Polyline.md#translatetocenterpoint)

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

[Polyline](Polyline.md).[translateToGivenOrigin](Polyline.md#translatetogivenorigin)

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

[Polyline](Polyline.md).[translateToOriginPoint](Polyline.md#translatetooriginpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L151)

___

### willDrawShadow

▸ **willDrawShadow**(): `boolean`

Check if this object or a child object will cast a shadow
used by Group.shouldCache to know if child has a shadow recursively

#### Returns

`boolean`

**`Deprecated`**

#### Inherited from

[Polyline](Polyline.md).[willDrawShadow](Polyline.md#willdrawshadow)

#### Defined in

[src/shapes/Object/Object.ts:879](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L879)

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

[Polyline](Polyline.md).[_fromObject](Polyline.md#_fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1553](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1553)

___

### fromElement

▸ `Static` **fromElement**(`element`, `options?`, `cssRules?`): `Promise`<[`Polyline`](Polyline.md)<{ `signal?`: `AbortSignal`  }, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Returns Polyline instance from an SVG element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | Element to parser |
| `options?` | [`Abortable`](../modules.md#abortable) | Options object |
| `cssRules?` | `CSSRules` | - |

#### Returns

`Promise`<[`Polyline`](Polyline.md)<{ `signal?`: `AbortSignal`  }, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Polyline

#### Inherited from

[Polyline](Polyline.md).[fromElement](Polyline.md#fromelement)

#### Defined in

[src/shapes/Polyline.ts:375](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L375)

___

### fromObject

▸ `Static` **fromObject**<`T`\>(`object`): `Promise`<[`Polyline`](Polyline.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Returns Polyline instance from an object representation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TOptions`](../modules.md#toptions)<[`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | Object to create an instance from |

#### Returns

`Promise`<[`Polyline`](Polyline.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Polyline

#### Inherited from

[Polyline](Polyline.md).[fromObject](Polyline.md#fromobject)

#### Defined in

[src/shapes/Polyline.ts:403](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polyline.ts#L403)

___

### getDefaults

▸ `Static` **getDefaults**(): `Object`

#### Returns

`Object`

#### Overrides

[Polyline](Polyline.md).[getDefaults](Polyline.md#getdefaults)

#### Defined in

[src/shapes/Polygon.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Polygon.ts#L9)
