# Class: Text<Props, SProps, EventSpec\>

Text class

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-2#text](http://fabricjs.com/fabric-intro-part-2#text)

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](../modules.md#toptions)<[`TextProps`](../interfaces/TextProps.md)\> = `Partial`<[`TextProps`](../interfaces/TextProps.md)\> |
| `SProps` | extends [`SerializedTextProps`](../interfaces/SerializedTextProps.md) = [`SerializedTextProps`](../interfaces/SerializedTextProps.md) |
| `EventSpec` | extends [`ObjectEvents`](../interfaces/ObjectEvents.md) = [`ObjectEvents`](../interfaces/ObjectEvents.md) |

## Hierarchy

- `StyledText`<`Props`, `SProps`, `EventSpec`\>

  ↳ **`Text`**

## Implements

- `UniqueTextProps`

## Table of contents

### Constructors

- [constructor](Text.md#constructor)

### Properties

- [CACHE\_FONT\_SIZE](Text.md#cache_font_size)
- [MIN\_TEXT\_WIDTH](Text.md#min_text_width)
- [\_\_charBounds](Text.md#__charbounds)
- [\_\_corner](Text.md#__corner)
- [\_\_lineHeights](Text.md#__lineheights)
- [\_\_lineWidths](Text.md#__linewidths)
- [\_\_owningGroup](Text.md#__owninggroup)
- [\_cacheCanvas](Text.md#_cachecanvas)
- [\_cacheContext](Text.md#_cachecontext)
- [\_controlsVisibility](Text.md#_controlsvisibility)
- [\_fontSizeFraction](Text.md#_fontsizefraction)
- [\_fontSizeMult](Text.md#_fontsizemult)
- [\_forceClearCache](Text.md#_forceclearcache)
- [\_originalOriginX](Text.md#_originaloriginx)
- [\_originalOriginY](Text.md#_originaloriginy)
- [\_reNewline](Text.md#_renewline)
- [\_reSpaceAndTab](Text.md#_respaceandtab)
- [\_reSpacesAndTabs](Text.md#_respacesandtabs)
- [\_reWords](Text.md#_rewords)
- [\_scaling](Text.md#_scaling)
- [\_text](Text.md#_text)
- [\_textLines](Text.md#_textlines)
- [\_transformDone](Text.md#_transformdone)
- [\_unwrappedTextLines](Text.md#_unwrappedtextlines)
- [aCoords](Text.md#acoords)
- [absolutePositioned](Text.md#absolutepositioned)
- [activeOn](Text.md#activeon)
- [angle](Text.md#angle)
- [backgroundColor](Text.md#backgroundcolor)
- [borderColor](Text.md#bordercolor)
- [borderDashArray](Text.md#borderdasharray)
- [borderOpacityWhenMoving](Text.md#borderopacitywhenmoving)
- [borderScaleFactor](Text.md#borderscalefactor)
- [cacheHeight](Text.md#cacheheight)
- [cacheTranslationX](Text.md#cachetranslationx)
- [cacheTranslationY](Text.md#cachetranslationy)
- [cacheWidth](Text.md#cachewidth)
- [canvas](Text.md#canvas)
- [centeredRotation](Text.md#centeredrotation)
- [centeredScaling](Text.md#centeredscaling)
- [charSpacing](Text.md#charspacing)
- [clipPath](Text.md#clippath)
- [clipPathId](Text.md#clippathid)
- [colorProperties](Text.md#colorproperties)
- [controls](Text.md#controls)
- [cornerColor](Text.md#cornercolor)
- [cornerDashArray](Text.md#cornerdasharray)
- [cornerSize](Text.md#cornersize)
- [cornerStrokeColor](Text.md#cornerstrokecolor)
- [cornerStyle](Text.md#cornerstyle)
- [cursorWidth](Text.md#cursorwidth)
- [deltaY](Text.md#deltay)
- [direction](Text.md#direction)
- [dirty](Text.md#dirty)
- [evented](Text.md#evented)
- [excludeFromExport](Text.md#excludefromexport)
- [fill](Text.md#fill)
- [fillRule](Text.md#fillrule)
- [flipX](Text.md#flipx)
- [flipY](Text.md#flipy)
- [fontFamily](Text.md#fontfamily)
- [fontSize](Text.md#fontsize)
- [fontStyle](Text.md#fontstyle)
- [fontWeight](Text.md#fontweight)
- [globalCompositeOperation](Text.md#globalcompositeoperation)
- [group](Text.md#group)
- [hasBorders](Text.md#hasborders)
- [hasControls](Text.md#hascontrols)
- [height](Text.md#height)
- [hoverCursor](Text.md#hovercursor)
- [includeDefaultValues](Text.md#includedefaultvalues)
- [initialized](Text.md#initialized)
- [inverted](Text.md#inverted)
- [isMoving](Text.md#ismoving)
- [left](Text.md#left)
- [lineCoords](Text.md#linecoords)
- [lineHeight](Text.md#lineheight)
- [linethrough](Text.md#linethrough)
- [lockMovementX](Text.md#lockmovementx)
- [lockMovementY](Text.md#lockmovementy)
- [lockRotation](Text.md#lockrotation)
- [lockScalingFlip](Text.md#lockscalingflip)
- [lockScalingX](Text.md#lockscalingx)
- [lockScalingY](Text.md#lockscalingy)
- [lockSkewingX](Text.md#lockskewingx)
- [lockSkewingY](Text.md#lockskewingy)
- [matrixCache](Text.md#matrixcache)
- [minScaleLimit](Text.md#minscalelimit)
- [moveCursor](Text.md#movecursor)
- [noScaleCache](Text.md#noscalecache)
- [oCoords](Text.md#ocoords)
- [objectCaching](Text.md#objectcaching)
- [offsets](Text.md#offsets)
- [opacity](Text.md#opacity)
- [originX](Text.md#originx)
- [originY](Text.md#originy)
- [overline](Text.md#overline)
- [ownCaching](Text.md#owncaching)
- [ownMatrixCache](Text.md#ownmatrixcache)
- [padding](Text.md#padding)
- [paintFirst](Text.md#paintfirst)
- [path](Text.md#path)
- [pathAlign](Text.md#pathalign)
- [pathSide](Text.md#pathside)
- [pathStartOffset](Text.md#pathstartoffset)
- [perPixelTargetFind](Text.md#perpixeltargetfind)
- [scaleX](Text.md#scalex)
- [scaleY](Text.md#scaley)
- [selectable](Text.md#selectable)
- [selectionBackgroundColor](Text.md#selectionbackgroundcolor)
- [shadow](Text.md#shadow)
- [skewX](Text.md#skewx)
- [skewY](Text.md#skewy)
- [snapAngle](Text.md#snapangle)
- [snapThreshold](Text.md#snapthreshold)
- [stroke](Text.md#stroke)
- [strokeDashArray](Text.md#strokedasharray)
- [strokeDashOffset](Text.md#strokedashoffset)
- [strokeLineCap](Text.md#strokelinecap)
- [strokeLineJoin](Text.md#strokelinejoin)
- [strokeMiterLimit](Text.md#strokemiterlimit)
- [strokeUniform](Text.md#strokeuniform)
- [strokeWidth](Text.md#strokewidth)
- [styles](Text.md#styles)
- [subscript](Text.md#subscript)
- [superscript](Text.md#superscript)
- [text](Text.md#text)
- [textAlign](Text.md#textalign)
- [textBackgroundColor](Text.md#textbackgroundcolor)
- [textLines](Text.md#textlines)
- [top](Text.md#top)
- [touchCornerSize](Text.md#touchcornersize)
- [transparentCorners](Text.md#transparentcorners)
- [underline](Text.md#underline)
- [visible](Text.md#visible)
- [width](Text.md#width)
- [zoomX](Text.md#zoomx)
- [zoomY](Text.md#zoomy)
- [ATTRIBUTE\_NAMES](Text.md#attribute_names)
- [\_styleProperties](Text.md#_styleproperties)
- [cacheProperties](Text.md#cacheproperties)
- [genericFonts](Text.md#genericfonts)
- [ownDefaults](Text.md#owndefaults)
- [stateProperties](Text.md#stateproperties)
- [textLayoutProperties](Text.md#textlayoutproperties)
- [type](Text.md#type)

### Accessors

- [type](Text.md#type-1)

### Methods

- [\_animate](Text.md#_animate)
- [\_applyPatternForTransformedGradient](Text.md#_applypatternfortransformedgradient)
- [\_applyPatternGradientTransform](Text.md#_applypatterngradienttransform)
- [\_applyPatternGradientTransformText](Text.md#_applypatterngradienttransformtext)
- [\_calculateCurrentDimensions](Text.md#_calculatecurrentdimensions)
- [\_clearCache](Text.md#_clearcache)
- [\_constrainScale](Text.md#_constrainscale)
- [\_createBaseClipPathSVGMarkup](Text.md#_createbaseclippathsvgmarkup)
- [\_createBaseSVGMarkup](Text.md#_createbasesvgmarkup)
- [\_createCacheCanvas](Text.md#_createcachecanvas)
- [\_deleteLineStyle](Text.md#_deletelinestyle)
- [\_deleteStyleDeclaration](Text.md#_deletestyledeclaration)
- [\_drawBorders](Text.md#_drawborders)
- [\_drawClipPath](Text.md#_drawclippath)
- [\_findCenterFromElement](Text.md#_findcenterfromelement)
- [\_findCrossPoints](Text.md#_findcrosspoints)
- [\_findTargetCorner](Text.md#_findtargetcorner)
- [\_getCacheCanvasDimensions](Text.md#_getcachecanvasdimensions)
- [\_getCoords](Text.md#_getcoords)
- [\_getFontDeclaration](Text.md#_getfontdeclaration)
- [\_getGraphemeBox](Text.md#_getgraphemebox)
- [\_getImageLines](Text.md#_getimagelines)
- [\_getLeftOffset](Text.md#_getleftoffset)
- [\_getLeftTopCoords](Text.md#_getlefttopcoords)
- [\_getLineLeftOffset](Text.md#_getlineleftoffset)
- [\_getLineStyle](Text.md#_getlinestyle)
- [\_getNonTransformedDimensions](Text.md#_getnontransformeddimensions)
- [\_getStyleDeclaration](Text.md#_getstyledeclaration)
- [\_getTopOffset](Text.md#_gettopoffset)
- [\_getTransformedDimensions](Text.md#_gettransformeddimensions)
- [\_getWidthOfCharSpacing](Text.md#_getwidthofcharspacing)
- [\_limitCacheSize](Text.md#_limitcachesize)
- [\_measureChar](Text.md#_measurechar)
- [\_measureLine](Text.md#_measureline)
- [\_removeCacheCanvas](Text.md#_removecachecanvas)
- [\_removeDefaultValues](Text.md#_removedefaultvalues)
- [\_removeShadow](Text.md#_removeshadow)
- [\_render](Text.md#_render)
- [\_renderBackground](Text.md#_renderbackground)
- [\_renderChar](Text.md#_renderchar)
- [\_renderChars](Text.md#_renderchars)
- [\_renderControls](Text.md#_rendercontrols)
- [\_renderFill](Text.md#_renderfill)
- [\_renderPaintInOrder](Text.md#_renderpaintinorder)
- [\_renderStroke](Text.md#_renderstroke)
- [\_renderText](Text.md#_rendertext)
- [\_renderTextCommon](Text.md#_rendertextcommon)
- [\_renderTextDecoration](Text.md#_rendertextdecoration)
- [\_renderTextFill](Text.md#_rendertextfill)
- [\_renderTextLine](Text.md#_rendertextline)
- [\_renderTextLinesBackground](Text.md#_rendertextlinesbackground)
- [\_renderTextStroke](Text.md#_rendertextstroke)
- [\_resetOrigin](Text.md#_resetorigin)
- [\_set](Text.md#_set)
- [\_setClippingProperties](Text.md#_setclippingproperties)
- [\_setFillStyles](Text.md#_setfillstyles)
- [\_setGraphemeOnPath](Text.md#_setgraphemeonpath)
- [\_setLineDash](Text.md#_setlinedash)
- [\_setLineStyle](Text.md#_setlinestyle)
- [\_setObject](Text.md#_setobject)
- [\_setOpacity](Text.md#_setopacity)
- [\_setOptions](Text.md#_setoptions)
- [\_setOriginToCenter](Text.md#_setorigintocenter)
- [\_setScript](Text.md#_setscript)
- [\_setShadow](Text.md#_setshadow)
- [\_setStrokeStyles](Text.md#_setstrokestyles)
- [\_setStyleDeclaration](Text.md#_setstyledeclaration)
- [\_setTextStyles](Text.md#_settextstyles)
- [\_setupCompositeOperation](Text.md#_setupcompositeoperation)
- [\_splitText](Text.md#_splittext)
- [\_splitTextIntoLines](Text.md#_splittextintolines)
- [\_toSVG](Text.md#_tosvg)
- [\_updateCacheCanvas](Text.md#_updatecachecanvas)
- [addPaintOrder](Text.md#addpaintorder)
- [animate](Text.md#animate)
- [calcACoords](Text.md#calcacoords)
- [calcLineCoords](Text.md#calclinecoords)
- [calcOCoords](Text.md#calcocoords)
- [calcOwnMatrix](Text.md#calcownmatrix)
- [calcTextHeight](Text.md#calctextheight)
- [calcTextWidth](Text.md#calctextwidth)
- [calcTransformMatrix](Text.md#calctransformmatrix)
- [canDrop](Text.md#candrop)
- [cleanStyle](Text.md#cleanstyle)
- [clearContextTop](Text.md#clearcontexttop)
- [clone](Text.md#clone)
- [cloneAsImage](Text.md#cloneasimage)
- [complexity](Text.md#complexity)
- [containsPoint](Text.md#containspoint)
- [dispose](Text.md#dispose)
- [drawBorders](Text.md#drawborders)
- [drawCacheOnCanvas](Text.md#drawcacheoncanvas)
- [drawClipPathOnCache](Text.md#drawclippathoncache)
- [drawControls](Text.md#drawcontrols)
- [drawControlsConnectingLines](Text.md#drawcontrolsconnectinglines)
- [drawObject](Text.md#drawobject)
- [drawSelectionBackground](Text.md#drawselectionbackground)
- [enlargeSpaces](Text.md#enlargespaces)
- [findCommonAncestors](Text.md#findcommonancestors)
- [fire](Text.md#fire)
- [forEachControl](Text.md#foreachcontrol)
- [get](Text.md#get)
- [get2DCursorLocation](Text.md#get2dcursorlocation)
- [getActiveControl](Text.md#getactivecontrol)
- [getAncestors](Text.md#getancestors)
- [getBoundingRect](Text.md#getboundingrect)
- [getCanvasRetinaScaling](Text.md#getcanvasretinascaling)
- [getCenterPoint](Text.md#getcenterpoint)
- [getCompleteStyleDeclaration](Text.md#getcompletestyledeclaration)
- [getCoords](Text.md#getcoords)
- [getHeightOfChar](Text.md#getheightofchar)
- [getHeightOfLine](Text.md#getheightofline)
- [getLineWidth](Text.md#getlinewidth)
- [getObjectOpacity](Text.md#getobjectopacity)
- [getObjectScaling](Text.md#getobjectscaling)
- [getParent](Text.md#getparent)
- [getPointByOrigin](Text.md#getpointbyorigin)
- [getRelativeCenterPoint](Text.md#getrelativecenterpoint)
- [getRelativeX](Text.md#getrelativex)
- [getRelativeXY](Text.md#getrelativexy)
- [getRelativeY](Text.md#getrelativey)
- [getScaledHeight](Text.md#getscaledheight)
- [getScaledWidth](Text.md#getscaledwidth)
- [getSelectionStyles](Text.md#getselectionstyles)
- [getStyleAtPosition](Text.md#getstyleatposition)
- [getSvgCommons](Text.md#getsvgcommons)
- [getSvgFilter](Text.md#getsvgfilter)
- [getSvgStyles](Text.md#getsvgstyles)
- [getSvgTransform](Text.md#getsvgtransform)
- [getTotalAngle](Text.md#gettotalangle)
- [getTotalObjectScaling](Text.md#gettotalobjectscaling)
- [getValueOfPropertyAt](Text.md#getvalueofpropertyat)
- [getViewportTransform](Text.md#getviewporttransform)
- [getX](Text.md#getx)
- [getXY](Text.md#getxy)
- [getY](Text.md#gety)
- [graphemeSplit](Text.md#graphemesplit)
- [handleFiller](Text.md#handlefiller)
- [hasCommonAncestors](Text.md#hascommonancestors)
- [hasFill](Text.md#hasfill)
- [hasStroke](Text.md#hasstroke)
- [initDimensions](Text.md#initdimensions)
- [intersectsWithObject](Text.md#intersectswithobject)
- [intersectsWithRect](Text.md#intersectswithrect)
- [isCacheDirty](Text.md#iscachedirty)
- [isContainedWithinObject](Text.md#iscontainedwithinobject)
- [isContainedWithinRect](Text.md#iscontainedwithinrect)
- [isControlVisible](Text.md#iscontrolvisible)
- [isDescendantOf](Text.md#isdescendantof)
- [isEmptyStyles](Text.md#isemptystyles)
- [isEndOfWrapping](Text.md#isendofwrapping)
- [isInFrontOf](Text.md#isinfrontof)
- [isNotVisible](Text.md#isnotvisible)
- [isOnScreen](Text.md#isonscreen)
- [isOverlapping](Text.md#isoverlapping)
- [isPartiallyOnScreen](Text.md#ispartiallyonscreen)
- [isType](Text.md#istype)
- [measureLine](Text.md#measureline)
- [missingNewlineOffset](Text.md#missingnewlineoffset)
- [needsItsOwnCache](Text.md#needsitsowncache)
- [off](Text.md#off)
- [on](Text.md#on)
- [onDeselect](Text.md#ondeselect)
- [onSelect](Text.md#onselect)
- [once](Text.md#once)
- [removeStyle](Text.md#removestyle)
- [render](Text.md#render)
- [renderCache](Text.md#rendercache)
- [renderDragSourceEffect](Text.md#renderdragsourceeffect)
- [renderDropTargetEffect](Text.md#renderdroptargeteffect)
- [rotate](Text.md#rotate)
- [scale](Text.md#scale)
- [scaleToHeight](Text.md#scaletoheight)
- [scaleToWidth](Text.md#scaletowidth)
- [set](Text.md#set)
- [setControlVisible](Text.md#setcontrolvisible)
- [setControlsVisibility](Text.md#setcontrolsvisibility)
- [setCoords](Text.md#setcoords)
- [setOnGroup](Text.md#setongroup)
- [setOptions](Text.md#setoptions)
- [setPathInfo](Text.md#setpathinfo)
- [setPositionByOrigin](Text.md#setpositionbyorigin)
- [setRelativeX](Text.md#setrelativex)
- [setRelativeXY](Text.md#setrelativexy)
- [setRelativeY](Text.md#setrelativey)
- [setSelectionStyles](Text.md#setselectionstyles)
- [setSubscript](Text.md#setsubscript)
- [setSuperscript](Text.md#setsuperscript)
- [setX](Text.md#setx)
- [setXY](Text.md#setxy)
- [setY](Text.md#sety)
- [shouldCache](Text.md#shouldcache)
- [strokeBorders](Text.md#strokeborders)
- [styleHas](Text.md#stylehas)
- [toCanvasElement](Text.md#tocanvaselement)
- [toClipPathSVG](Text.md#toclippathsvg)
- [toDataURL](Text.md#todataurl)
- [toDatalessObject](Text.md#todatalessobject)
- [toJSON](Text.md#tojson)
- [toObject](Text.md#toobject)
- [toSVG](Text.md#tosvg)
- [toString](Text.md#tostring)
- [toggle](Text.md#toggle)
- [transform](Text.md#transform)
- [transformMatrixKey](Text.md#transformmatrixkey)
- [translateToCenterPoint](Text.md#translatetocenterpoint)
- [translateToGivenOrigin](Text.md#translatetogivenorigin)
- [translateToOriginPoint](Text.md#translatetooriginpoint)
- [willDrawShadow](Text.md#willdrawshadow)
- [\_fromObject](Text.md#_fromobject)
- [fromElement](Text.md#fromelement)
- [fromObject](Text.md#fromobject)
- [getDefaults](Text.md#getdefaults)

## Constructors

### constructor

• **new Text**<`Props`, `SProps`, `EventSpec`\>(`text`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](../modules.md#toptions)<[`TextProps`](../interfaces/TextProps.md)\> = `Partial`<[`TextProps`](../interfaces/TextProps.md)\> |
| `SProps` | extends [`SerializedTextProps`](../interfaces/SerializedTextProps.md) = [`SerializedTextProps`](../interfaces/SerializedTextProps.md) |
| `EventSpec` | extends [`ObjectEvents`](../interfaces/ObjectEvents.md)<`EventSpec`\> = [`ObjectEvents`](../interfaces/ObjectEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `options` | `Props` |

#### Overrides

StyledText&lt;Props, SProps, EventSpec\&gt;.constructor

#### Defined in

[src/shapes/Text/Text.ts:421](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L421)

## Properties

### CACHE\_FONT\_SIZE

• `Private` `Readonly` **CACHE\_FONT\_SIZE**: `number`

use this size when measuring text. To avoid IE11 rounding errors

**`Default`**

```ts
@readonly
@private
```

#### Defined in

[src/shapes/Text/Text.ts:380](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L380)

___

### MIN\_TEXT\_WIDTH

• **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

**`Default`**

```ts

```

#### Defined in

[src/shapes/Text/Text.ts:387](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L387)

___

### \_\_charBounds

• `Protected` **\_\_charBounds**: [`GraphemeBBox`](../modules.md#graphemebbox)[][] = `[]`

contains characters bounding boxes
This variable is considered to be protected.
But for how mixins are implemented right now, we can't leave it private

#### Defined in

[src/shapes/Text/Text.ts:371](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L371)

___

### \_\_corner

• `Optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

StyledText.\_\_corner

#### Defined in

[src/shapes/Object/InteractiveObject.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L115)

___

### \_\_lineHeights

• **\_\_lineHeights**: `number`[]

#### Defined in

[src/shapes/Text/Text.ts:407](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L407)

___

### \_\_lineWidths

• **\_\_lineWidths**: `number`[]

#### Defined in

[src/shapes/Text/Text.ts:408](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L408)

___

### \_\_owningGroup

• `Optional` **\_\_owningGroup**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

StyledText.\_\_owningGroup

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

StyledText.\_cacheCanvas

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

StyledText.\_cacheContext

#### Defined in

[src/shapes/Object/Object.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L172)

___

### \_controlsVisibility

• **\_controlsVisibility**: `Record`<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

StyledText.\_controlsVisibility

#### Defined in

[src/shapes/Object/InteractiveObject.ts:122](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L122)

___

### \_fontSizeFraction

• `Private` **\_fontSizeFraction**: `number`

#### Defined in

[src/shapes/Text/Text.ts:323](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L323)

___

### \_fontSizeMult

• **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

**`Default`**

```ts

```

#### Defined in

[src/shapes/Text/Text.ts:335](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L335)

___

### \_forceClearCache

• `Protected` **\_forceClearCache**: `boolean`

#### Inherited from

StyledText.\_forceClearCache

#### Defined in

[src/shapes/Text/StyledText.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L25)

___

### \_originalOriginX

• `Optional` **\_originalOriginX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

StyledText.\_originalOriginX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L39)

___

### \_originalOriginY

• `Optional` **\_originalOriginY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

StyledText.\_originalOriginY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L41)

___

### \_reNewline

• `Private` **\_reNewline**: `RegExp`

#### Defined in

[src/shapes/Text/Text.ts:140](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L140)

___

### \_reSpaceAndTab

• `Private` **\_reSpaceAndTab**: `RegExp`

Use this regular expression to filter for whitespace that is not a new line.
Mostly used when text is 'justify' aligned.

#### Defined in

[src/shapes/Text/Text.ts:154](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L154)

___

### \_reSpacesAndTabs

• `Private` **\_reSpacesAndTabs**: `RegExp`

Use this regular expression to filter for whitespaces that is not a new line.
Mostly used when text is 'justify' aligned.

#### Defined in

[src/shapes/Text/Text.ts:147](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L147)

___

### \_reWords

• `Private` **\_reWords**: `RegExp`

Use this regular expression to filter consecutive groups of non spaces.
Mostly used when text is 'justify' aligned.

#### Defined in

[src/shapes/Text/Text.ts:161](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L161)

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

StyledText.\_scaling

#### Defined in

[src/shapes/Object/InteractiveObject.ts:144](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L144)

___

### \_text

• **\_text**: `string`[]

#### Defined in

[src/shapes/Text/Text.ts:405](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L405)

___

### \_textLines

• **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

**`Default`**

```ts

```

#### Overrides

StyledText.\_textLines

#### Defined in

[src/shapes/Text/Text.ts:402](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L402)

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

StyledText.\_transformDone

#### Defined in

[src/shapes/Object/Object.ts:263](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L263)

___

### \_unwrappedTextLines

• **\_unwrappedTextLines**: `string`[][]

#### Defined in

[src/shapes/Text/Text.ts:404](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L404)

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

StyledText.aCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L67)

___

### absolutePositioned

• **absolutePositioned**: `boolean`

#### Inherited from

StyledText.absolutePositioned

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L136)

___

### activeOn

• **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

StyledText.activeOn

#### Defined in

[src/shapes/Object/InteractiveObject.ts:91](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L91)

___

### angle

• **angle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

StyledText.angle

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

• **backgroundColor**: `string`

#### Inherited from

StyledText.backgroundColor

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L123)

___

### borderColor

• **borderColor**: `string`

#### Inherited from

StyledText.borderColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L81)

___

### borderDashArray

• **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

StyledText.borderDashArray

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L82)

___

### borderOpacityWhenMoving

• **borderOpacityWhenMoving**: `number`

#### Inherited from

StyledText.borderOpacityWhenMoving

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L83)

___

### borderScaleFactor

• **borderScaleFactor**: `number`

#### Inherited from

StyledText.borderScaleFactor

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

StyledText.cacheHeight

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

StyledText.cacheTranslationX

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

StyledText.cacheTranslationY

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

StyledText.cacheWidth

#### Defined in

[src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L192)

___

### canvas

• `Optional` **canvas**: [`Canvas`](Canvas.md)

#### Inherited from

StyledText.canvas

#### Defined in

[src/shapes/Object/InteractiveObject.ts:146](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L146)

___

### centeredRotation

• **centeredRotation**: `boolean`

#### Inherited from

StyledText.centeredRotation

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L137)

___

### centeredScaling

• **centeredScaling**: ``false``

#### Inherited from

StyledText.centeredScaling

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L58)

___

### charSpacing

• **charSpacing**: `number`

additional space between characters
expressed in thousands of em unit

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.charSpacing

#### Defined in

[src/shapes/Text/Text.ts:343](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L343)

___

### clipPath

• `Optional` **clipPath**: `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

StyledText.clipPath

#### Defined in

[src/shapes/Object/Object.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L134)

___

### clipPathId

• `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

StyledText.clipPathId

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### colorProperties

• **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

StyledText.colorProperties

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L20)

___

### controls

• **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

StyledText.controls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L128)

___

### cornerColor

• **cornerColor**: `string`

#### Inherited from

StyledText.cornerColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L75)

___

### cornerDashArray

• **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

StyledText.cornerDashArray

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L78)

___

### cornerSize

• **cornerSize**: `number`

#### Inherited from

StyledText.cornerSize

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L72)

___

### cornerStrokeColor

• **cornerStrokeColor**: `string`

#### Inherited from

StyledText.cornerStrokeColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L76)

___

### cornerStyle

• **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

StyledText.cornerStyle

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L77)

___

### cursorWidth

• **cursorWidth**: `number`

#### Defined in

[src/shapes/Text/Text.ts:406](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L406)

___

### deltaY

• **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

**`Default`**

```ts

```

#### Defined in

[src/shapes/Text/Text.ts:350](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L350)

___

### direction

• **direction**: `CanvasDirection`

WARNING: EXPERIMENTAL. NOT SUPPORTED YET
determine the direction of the text.
This has to be set manually together with textAlign and originX for proper
experience.
some interesting link for the future
https://www.w3.org/International/questions/qa-bidi-unicode-controls

**`Since`**

4.5.0

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.direction

#### Defined in

[src/shapes/Text/Text.ts:363](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L363)

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

StyledText.dirty

#### Defined in

[src/shapes/Object/Object.ts:162](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L162)

___

### evented

• **evented**: `boolean`

#### Inherited from

StyledText.evented

#### Defined in

[src/shapes/Object/InteractiveObject.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L89)

___

### excludeFromExport

• **excludeFromExport**: `boolean`

#### Inherited from

StyledText.excludeFromExport

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L130)

___

### fill

• **fill**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

StyledText.fill

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L113)

___

### fillRule

• **fillRule**: `CanvasFillRule`

#### Inherited from

StyledText.fillRule

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L114)

___

### flipX

• **flipX**: `boolean`

#### Inherited from

StyledText.flipX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

• **flipY**: `boolean`

#### Inherited from

StyledText.flipY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L22)

___

### fontFamily

• **fontFamily**: `string`

Font family

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.fontFamily

#### Defined in

[src/shapes/Text/Text.ts:184](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L184)

___

### fontSize

• **fontSize**: `number`

Font size (in pixels)

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.fontSize

#### Defined in

[src/shapes/Text/Text.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L170)

___

### fontStyle

• **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.fontStyle

#### Defined in

[src/shapes/Text/Text.ts:220](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L220)

___

### fontWeight

• **fontWeight**: `string`

Font weight (e.g. bold, normal, 400, 600, 800)

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.fontWeight

#### Defined in

[src/shapes/Text/Text.ts:177](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L177)

___

### globalCompositeOperation

• **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

StyledText.globalCompositeOperation

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

StyledText.group

#### Defined in

[src/shapes/Object/Object.ts:245](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L245)

___

### hasBorders

• **hasBorders**: `boolean`

#### Inherited from

StyledText.hasBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L85)

___

### hasControls

• **hasControls**: `boolean`

#### Inherited from

StyledText.hasControls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L79)

___

### height

• **height**: `number`

#### Inherited from

StyledText.height

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hoverCursor

• **hoverCursor**: ``null`` \| `string`

#### Inherited from

StyledText.hoverCursor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L93)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

#### Inherited from

StyledText.includeDefaultValues

#### Defined in

[src/shapes/Object/Object.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L129)

___

### initialized

• `Optional` **initialized**: ``true``

#### Defined in

[src/shapes/Text/Text.ts:409](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L409)

___

### inverted

• **inverted**: `boolean`

#### Inherited from

StyledText.inverted

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L135)

___

### isMoving

• `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

StyledText.isMoving

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L134)

___

### left

• **left**: `number`

#### Inherited from

StyledText.left

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

StyledText.lineCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L76)

___

### lineHeight

• **lineHeight**: `number`

Line height

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.lineHeight

#### Defined in

[src/shapes/Text/Text.ts:227](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L227)

___

### linethrough

• **linethrough**: `boolean`

Text decoration linethrough.

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.linethrough

#### Defined in

[src/shapes/Text/Text.ts:205](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L205)

___

### lockMovementX

• **lockMovementX**: `boolean`

#### Inherited from

StyledText.lockMovementX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L63)

___

### lockMovementY

• **lockMovementY**: `boolean`

#### Inherited from

StyledText.lockMovementY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L64)

___

### lockRotation

• **lockRotation**: `boolean`

#### Inherited from

StyledText.lockRotation

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L65)

___

### lockScalingFlip

• **lockScalingFlip**: `boolean`

#### Inherited from

StyledText.lockScalingFlip

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L70)

___

### lockScalingX

• **lockScalingX**: `boolean`

#### Inherited from

StyledText.lockScalingX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L66)

___

### lockScalingY

• **lockScalingY**: `boolean`

#### Inherited from

StyledText.lockScalingY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L67)

___

### lockSkewingX

• **lockSkewingX**: `boolean`

#### Inherited from

StyledText.lockSkewingX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L68)

___

### lockSkewingY

• **lockSkewingY**: `boolean`

#### Inherited from

StyledText.lockSkewingY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L69)

___

### matrixCache

• `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

StyledText.matrixCache

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L86)

___

### minScaleLimit

• **minScaleLimit**: `number`

#### Inherited from

StyledText.minScaleLimit

#### Defined in

[src/shapes/Object/Object.ts:108](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L108)

___

### moveCursor

• **moveCursor**: ``null`` \| `string`

#### Inherited from

StyledText.moveCursor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L94)

___

### noScaleCache

• **noScaleCache**: `boolean`

#### Inherited from

StyledText.noScaleCache

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

StyledText.oCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L105)

___

### objectCaching

• **objectCaching**: `boolean`

#### Inherited from

StyledText.objectCaching

#### Defined in

[src/shapes/Object/Object.ts:132](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L132)

___

### offsets

• `Private` **offsets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `linethrough` | `number` |
| `overline` | `number` |
| `underline` | `number` |

#### Defined in

[src/shapes/Text/Text.ts:328](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L328)

___

### opacity

• **opacity**: `number`

#### Inherited from

StyledText.opacity

#### Defined in

[src/shapes/Object/Object.ts:110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L110)

___

### originX

• **originX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

StyledText.originX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

• **originY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

StyledText.originY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L28)

___

### overline

• **overline**: `boolean`

Text decoration overline.

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.overline

#### Defined in

[src/shapes/Text/Text.ts:198](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L198)

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

StyledText.ownCaching

#### Defined in

[src/shapes/Object/Object.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L254)

___

### ownMatrixCache

• `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

StyledText.ownMatrixCache

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L81)

___

### padding

• **padding**: `number`

#### Inherited from

StyledText.padding

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L54)

___

### paintFirst

• **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

StyledText.paintFirst

#### Defined in

[src/shapes/Object/Object.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L112)

___

### path

• `Optional` **path**: [`Path`](Path.md)<`Partial`<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Path that the text should follow.
since 4.6.0 the path will be drawn automatically.
if you want to make the path visible, give it a stroke and strokeWidth or fill value
if you want it to be hidden, assign visible = false to the path.
This feature is in BETA, and SVG import/export is not yet supported.

**`Example`**

```ts
const textPath = new Text('Text on a path', {
    top: 150,
    left: 150,
    textAlign: 'center',
    charSpacing: -50,
    path: new Path('M 0 0 C 50 -100 150 -100 200 0', {
        strokeWidth: 1,
        visible: false
    }),
    pathSide: 'left',
    pathStartOffset: 0
});
```

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.path

#### Defined in

[src/shapes/Text/Text.ts:292](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L292)

___

### pathAlign

• **pathAlign**: [`TPathAlign`](../modules.md#tpathalign)

How text is aligned to the path. This property determines
the perpendicular position of each character relative to the path.
(one of "baseline", "center", "ascender", "descender")
This feature is in BETA, and its behavior may change

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.pathAlign

#### Defined in

[src/shapes/Text/Text.ts:318](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L318)

___

### pathSide

• **pathSide**: [`TPathSide`](../modules.md#tpathside)

Which side of the path the text should be drawn on.
Only used when text has a path

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.pathSide

#### Defined in

[src/shapes/Text/Text.ts:308](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L308)

___

### pathStartOffset

• **pathStartOffset**: `number`

Offset amount for text path starting position
Only used when text has a path

**`Default`**

```ts

```

#### Defined in

[src/shapes/Text/Text.ts:300](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L300)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

#### Inherited from

StyledText.perPixelTargetFind

#### Defined in

[src/shapes/Object/InteractiveObject.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L90)

___

### scaleX

• **scaleX**: `number`

#### Inherited from

StyledText.scaleX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

• **scaleY**: `number`

#### Inherited from

StyledText.scaleY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

• **selectable**: `boolean`

#### Inherited from

StyledText.selectable

#### Defined in

[src/shapes/Object/InteractiveObject.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L88)

___

### selectionBackgroundColor

• **selectionBackgroundColor**: `string`

#### Inherited from

StyledText.selectionBackgroundColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L86)

___

### shadow

• **shadow**: ``null`` \| [`Shadow`](Shadow.md)

#### Inherited from

StyledText.shadow

#### Defined in

[src/shapes/Object/Object.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L125)

___

### skewX

• **skewX**: `number`

#### Inherited from

StyledText.skewX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

• **skewY**: `number`

#### Inherited from

StyledText.skewY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

• `Optional` **snapAngle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

StyledText.snapAngle

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L60)

___

### snapThreshold

• `Optional` **snapThreshold**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

StyledText.snapThreshold

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L61)

___

### stroke

• **stroke**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

StyledText.stroke

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L115)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

StyledText.strokeDashArray

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L116)

___

### strokeDashOffset

• **strokeDashOffset**: `number`

#### Inherited from

StyledText.strokeDashOffset

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L117)

___

### strokeLineCap

• **strokeLineCap**: `CanvasLineCap`

#### Inherited from

StyledText.strokeLineCap

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L118)

___

### strokeLineJoin

• **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

StyledText.strokeLineJoin

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L119)

___

### strokeMiterLimit

• **strokeMiterLimit**: `number`

#### Inherited from

StyledText.strokeMiterLimit

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L120)

___

### strokeUniform

• **strokeUniform**: `boolean`

#### Inherited from

StyledText.strokeUniform

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

StyledText.strokeWidth

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L30)

___

### styles

• **styles**: [`TextStyle`](../modules.md#textstyle)

#### Overrides

StyledText.styles

#### Defined in

[src/shapes/Text/Text.ts:268](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L268)

___

### subscript

• **subscript**: `Object`

Subscript schema object (minimum overlap)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseline` | `number` | baseline-shift factor (downwards) **`Default`** ```ts 0.11 ``` |
| `size` | `number` | fontSize factor **`Default`** ```ts 0.6 ``` |

#### Defined in

[src/shapes/Text/Text.ts:248](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L248)

___

### superscript

• **superscript**: `Object`

Superscript schema object (minimum overlap)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseline` | `number` | baseline-shift factor (upwards) **`Default`** ```ts -0.35 ``` |
| `size` | `number` | fontSize factor **`Default`** ```ts 0.6 ``` |

#### Defined in

[src/shapes/Text/Text.ts:232](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L232)

___

### text

• **text**: `string`

#### Defined in

[src/shapes/Text/Text.ts:163](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L163)

___

### textAlign

• **textAlign**: `string`

Text alignment. Possible values: "left", "center", "right", "justify",
"justify-left", "justify-center" or "justify-right".

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.textAlign

#### Defined in

[src/shapes/Text/Text.ts:213](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L213)

___

### textBackgroundColor

• **textBackgroundColor**: `string`

Background color of text lines

**`Default`**

```ts

```

#### Defined in

[src/shapes/Text/Text.ts:266](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L266)

___

### textLines

• **textLines**: `string`[]

contains the the text of the object, divided in lines as they are displayed
on screen. Wrapping will divide the text independently of line breaks

**`Default`**

```ts

```

#### Defined in

[src/shapes/Text/Text.ts:395](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L395)

___

### top

• **top**: `number`

#### Inherited from

StyledText.top

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

• **touchCornerSize**: `number`

#### Inherited from

StyledText.touchCornerSize

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L73)

___

### transparentCorners

• **transparentCorners**: `boolean`

#### Inherited from

StyledText.transparentCorners

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L74)

___

### underline

• **underline**: `boolean`

Text decoration underline.

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.underline

#### Defined in

[src/shapes/Text/Text.ts:191](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L191)

___

### visible

• **visible**: `boolean`

#### Inherited from

StyledText.visible

#### Defined in

[src/shapes/Object/Object.ts:127](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L127)

___

### width

• **width**: `number`

#### Inherited from

StyledText.width

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

StyledText.zoomX

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

StyledText.zoomY

#### Defined in

[src/shapes/Object/Object.ts:219](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L219)

___

### ATTRIBUTE\_NAMES

▪ `Static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [fromElement](Text.md#fromelement))

**`Static`**

**`Member Of`**

Text
@see: http://www.w3.org/TR/SVG/text.html#TextElement

#### Defined in

[src/shapes/Text/Text.ts:1800](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1800)

___

### \_styleProperties

▪ `Static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

StyledText.\_styleProperties

#### Defined in

[src/shapes/Text/StyledText.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L26)

___

### cacheProperties

▪ `Static` **cacheProperties**: `string`[]

#### Overrides

StyledText.cacheProperties

#### Defined in

[src/shapes/Text/Text.ts:411](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L411)

___

### genericFonts

▪ `Static` **genericFonts**: `string`[]

#### Defined in

[src/shapes/Text/Text.ts:1784](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1784)

___

### ownDefaults

▪ `Static` **ownDefaults**: `Record`<`string`, `any`\> = `textDefaultValues`

#### Overrides

StyledText.ownDefaults

#### Defined in

[src/shapes/Text/Text.ts:413](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L413)

___

### stateProperties

▪ `Static` **stateProperties**: `string`[] = `stateProperties`

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

StyledText.stateProperties

#### Defined in

[src/shapes/Object/Object.ts:145](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L145)

___

### textLayoutProperties

▪ `Static` `Protected` **textLayoutProperties**: `string`[] = `textLayoutProperties`

Properties that requires a text layout recalculation when changed

#### Defined in

[src/shapes/Text/Text.ts:135](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L135)

___

### type

▪ `Static` **type**: `string` = `'Text'`

#### Overrides

StyledText.type

#### Defined in

[src/shapes/Text/Text.ts:415](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L415)

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

StyledText.type

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

StyledText.type

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

StyledText.\_animate

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

StyledText.\_applyPatternForTransformedGradient

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

StyledText.\_applyPatternGradientTransform

#### Defined in

[src/shapes/Object/Object.ts:1151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1151)

___

### \_applyPatternGradientTransformText

▸ `Private` **_applyPatternGradientTransformText**(`filler`): `CanvasPattern`

This function try to patch the missing gradientTransform on canvas gradients.
transforming a context to transform the gradient, is going to transform the stroke too.
we want to transform the gradient but not the stroke operation, so we create
a transformed gradient on a pattern and then we use the pattern instead of the gradient.
this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
is limited.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filler` | [`TFiller`](../modules.md#tfiller) | a fabric gradient instance |

#### Returns

`CanvasPattern`

a pattern to use as fill/stroke style

#### Defined in

[src/shapes/Text/Text.ts:1244](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1244)

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

StyledText.\_calculateCurrentDimensions

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:809](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L809)

___

### \_clearCache

▸ `Private` **_clearCache**(): `void`

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1490](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1490)

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

StyledText.\_constrainScale

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

StyledText.\_createBaseClipPathSVGMarkup

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

StyledText.\_createBaseSVGMarkup

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

▸ `Private` **_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

StyledText.\_createCacheCanvas

#### Defined in

[src/shapes/Object/Object.ts:318](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L318)

___

### \_deleteLineStyle

▸ `Protected` **_deleteLineStyle**(`lineIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`void`

#### Inherited from

StyledText.\_deleteLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:317](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L317)

___

### \_deleteStyleDeclaration

▸ `Private` **_deleteStyleDeclaration**(`lineIndex`, `charIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`void`

#### Inherited from

StyledText.\_deleteStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:295](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L295)

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

StyledText.\_drawBorders

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

StyledText.\_drawClipPath

#### Defined in

[src/shapes/Object/Object.ts:943](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L943)

___

### \_findCenterFromElement

▸ `Private` **_findCenterFromElement**(): [`Point`](Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates

#### Returns

[`Point`](Point.md)

center point from element coordinates

#### Inherited from

StyledText.\_findCenterFromElement

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

StyledText.\_findCrossPoints

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

StyledText.\_findTargetCorner

#### Defined in

[src/shapes/Object/InteractiveObject.ts:191](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L191)

___

### \_getCacheCanvasDimensions

▸ `Private` **_getCacheCanvasDimensions**(): [`TCacheCanvasDimensions`](../modules.md#tcachecanvasdimensions)

Return the dimension and the zoom level needed to create a cache canvas
big enough to host the object to be cached.

#### Returns

[`TCacheCanvasDimensions`](../modules.md#tcachecanvasdimensions)

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Overrides

StyledText.\_getCacheCanvasDimensions

#### Defined in

[src/shapes/Text/Text.ts:587](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L587)

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

StyledText.\_getCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:215](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L215)

___

### \_getFontDeclaration

▸ **_getFontDeclaration**(`«destructured»?`, `forMeasuring?`): `string`

return font declaration string for canvas context

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Partial`<`Pick`<`Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>, ``"fontFamily"`` \| ``"fontSize"`` \| ``"fontStyle"`` \| ``"fontWeight"``\>\> |
| `forMeasuring?` | `boolean` |

#### Returns

`string`

font declaration formatted for canvas context.

#### Defined in

[src/shapes/Text/Text.ts:1647](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1647)

___

### \_getGraphemeBox

▸ **_getGraphemeBox**(`grapheme`, `lineIndex`, `charIndex`, `prevGrapheme?`, `skipLeft?`): [`GraphemeBBox`](../modules.md#graphemebbox)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `grapheme` | `string` | to be measured |
| `lineIndex` | `number` | index of the line where the char is |
| `charIndex` | `number` | position in the line |
| `prevGrapheme?` | `string` | character preceding the one to be measured |
| `skipLeft?` | `boolean` | - |

#### Returns

[`GraphemeBBox`](../modules.md#graphemebbox)

grapheme bbox

#### Defined in

[src/shapes/Text/Text.ts:972](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L972)

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

StyledText.\_getImageLines

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:448](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L448)

___

### \_getLeftOffset

▸ `Private` **_getLeftOffset**(): `number`

#### Returns

`number`

Left offset

#### Defined in

[src/shapes/Text/Text.ts:1047](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1047)

___

### \_getLeftTopCoords

▸ `Private` **_getLeftTopCoords**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

#### Inherited from

StyledText.\_getLeftTopCoords

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:270](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L270)

___

### \_getLineLeftOffset

▸ `Private` **_getLineLeftOffset**(`lineIndex`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | index text line |

#### Returns

`number`

Line left offset

#### Defined in

[src/shapes/Text/Text.ts:1444](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1444)

___

### \_getLineStyle

▸ `Private` **_getLineStyle**(`lineIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`boolean`

if the line exists or not

#### Inherited from

StyledText.\_getLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:304](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L304)

___

### \_getNonTransformedDimensions

▸ `Private` **_getNonTransformedDimensions**(): [`Point`](Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](Point.md)

dimensions

#### Inherited from

StyledText.\_getNonTransformedDimensions

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:798](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L798)

___

### \_getStyleDeclaration

▸ **_getStyleDeclaration**(`lineIndex`, `charIndex`): `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

get the reference, not a clone, of the style object for a given character,
if not style is set for a pre det

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

style object a REFERENCE to the existing one or a new empty object

#### Inherited from

StyledText.\_getStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:249](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L249)

___

### \_getTopOffset

▸ `Private` **_getTopOffset**(): `number`

#### Returns

`number`

Top offset

#### Defined in

[src/shapes/Text/Text.ts:1055](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1055)

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

StyledText.\_getTransformedDimensions

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L53)

___

### \_getWidthOfCharSpacing

▸ **_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Defined in

[src/shapes/Text/Text.ts:1514](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1514)

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

StyledText.\_limitCacheSize

#### Defined in

[src/shapes/Object/Object.ts:341](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L341)

___

### \_measureChar

▸ `Private` **_measureChar**(`_char`, `charStyle`, `previousChar?`, `prevCharStyle?`): `Object`

measure and return the width of a single character.
possibly overridden to accommodate different measure logic or
to hook some external lib for character measurement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_char` | `string` | - |
| `charStyle` | [`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration) | style of char to be measured |
| `previousChar?` | `string` | previous char |
| `prevCharStyle?` | [`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration) \| `Record`<`string`, `never`\> | style of previous char |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `kernedWidth` | `number` |
| `width` | `number` |

#### Defined in

[src/shapes/Text/Text.ts:791](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L791)

___

### \_measureLine

▸ **_measureLine**(`lineIndex`): `Object`

measure every grapheme of a line, populating __charBounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`Object`

object.width total width of characters

object.numOfSpaces length of chars that match this._reSpacesAndTabs

| Name | Type |
| :------ | :------ |
| `numOfSpaces` | `number` |
| `width` | `number` |

#### Defined in

[src/shapes/Text/Text.ts:880](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L880)

___

### \_removeCacheCanvas

▸ **_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

StyledText.\_removeCacheCanvas

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

StyledText.\_removeDefaultValues

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

StyledText.\_removeShadow

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

#### Overrides

StyledText.\_render

#### Defined in

[src/shapes/Text/Text.ts:599](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L599)

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

StyledText.\_renderBackground

#### Defined in

[src/shapes/Object/Object.ts:1005](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1005)

___

### \_renderChar

▸ `Private` **_renderChar**(`method`, `ctx`, `lineIndex`, `charIndex`, `_char`, `left`, `top`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | ``"fillText"`` \| ``"strokeText"`` |  |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `lineIndex` | `number` |  |
| `charIndex` | `number` |  |
| `_char` | `string` |  |
| `left` | `number` | Left coordinate |
| `top` | `number` | Top coordinate |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1342](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1342)

___

### \_renderChars

▸ `Private` **_renderChars**(`method`, `ctx`, `line`, `left`, `top`, `lineIndex`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | ``"fillText"`` \| ``"strokeText"`` | fillText or strokeText. |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `line` | `any`[] | Content of the line, splitted in an array by grapheme |
| `left` | `number` |  |
| `top` | `number` |  |
| `lineIndex` | `number` |  |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1131](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1131)

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

StyledText.\_renderControls

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

StyledText.\_renderFill

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

StyledText.\_renderPaintInOrder

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

StyledText.\_renderStroke

#### Defined in

[src/shapes/Object/Object.ts:1223](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1223)

___

### \_renderText

▸ `Private` **_renderText**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:614](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L614)

___

### \_renderTextCommon

▸ `Private` **_renderTextCommon**(`ctx`, `method`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `method` | ``"fillText"`` \| ``"strokeText"`` | Method name ("fillText" or "strokeText") |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1064](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1064)

___

### \_renderTextDecoration

▸ `Private` **_renderTextDecoration**(`ctx`, `type`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `type` | ``"overline"`` \| ``"underline"`` \| ``"linethrough"`` | - |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1541](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1541)

___

### \_renderTextFill

▸ `Private` **_renderTextFill**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1093](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1093)

___

### \_renderTextLine

▸ `Private` **_renderTextLine**(`method`, `ctx`, `line`, `left`, `top`, `lineIndex`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | ``"fillText"`` \| ``"strokeText"`` | Method name ("fillText" or "strokeText") |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `line` | `string`[] | Text to render |
| `left` | `number` | Left position of text |
| `top` | `number` | Top position of text |
| `lineIndex` | `number` | Index of a line in a text |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:683](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L683)

___

### \_renderTextLinesBackground

▸ `Private` **_renderTextLinesBackground**(`ctx`): `void`

Renders the text background for lines, taking care of style

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:699](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L699)

___

### \_renderTextStroke

▸ `Private` **_renderTextStroke**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1105)

___

### \_resetOrigin

▸ `Private` **_resetOrigin**(): `void`

Resets the origin/position of the object to it's original origin

#### Returns

`void`

#### Inherited from

StyledText.\_resetOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:246](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L246)

___

### \_set

▸ `Protected` **_set**(`key`, `value`): [`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>

Handles setting values on the instance and handling internal side effects

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

StyledText.\_set

#### Defined in

[src/shapes/Object/Object.ts:693](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L693)

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

StyledText.\_setClippingProperties

#### Defined in

[src/shapes/Object/Object.ts:1083](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1083)

___

### \_setFillStyles

▸ **_setFillStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `style` | `Pick`<[`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>, ``"fill"``\> | with ill defined |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Overrides

StyledText.\_setFillStyles

#### Defined in

[src/shapes/Text/Text.ts:1327](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1327)

___

### \_setGraphemeOnPath

▸ `Private` **_setGraphemeOnPath**(`positionInPath`, `graphemeInfo`): `void`

Calculate the angle  and the left,top position of the char that follow a path.
It appends it to graphemeInfo to be reused later at rendering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionInPath` | `number` | to be measured |
| `graphemeInfo` | [`GraphemeBBox`](../modules.md#graphemebbox) | current grapheme box information |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:953](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L953)

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

StyledText.\_setLineDash

#### Defined in

[src/shapes/Object/Object.ts:1095](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1095)

___

### \_setLineStyle

▸ `Private` **_setLineStyle**(`lineIndex`): `void`

Set the line style to an empty object so that is initialized

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`void`

#### Inherited from

StyledText.\_setLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:313](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L313)

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

StyledText.\_setObject

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

StyledText.\_setOpacity

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

StyledText.\_setOptions

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L9)

___

### \_setOriginToCenter

▸ `Private` **_setOriginToCenter**(): `void`

Sets the origin/position of the object to it's center point

#### Returns

`void`

#### Inherited from

StyledText.\_setOriginToCenter

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:228](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L228)

___

### \_setScript

▸ `Private` **_setScript**(`start`, `end`, `schema`): `void`

Applies 'schema' at given position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | selection start |
| `end` | `number` | selection end |
| `schema` | `Object` |  |
| `schema.baseline` | `number` | - |
| `schema.size` | `number` | - |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1417](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1417)

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

StyledText.\_setShadow

#### Defined in

[src/shapes/Object/Object.ts:1110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1110)

___

### \_setStrokeStyles

▸ **_setStrokeStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a stroke style, and stroke and strokeWidth
need to be sent in as defined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `style` | `Pick`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration), ``"strokeWidth"`` \| ``"stroke"``\> | with stroke and strokeWidth defined |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Overrides

StyledText.\_setStrokeStyles

#### Defined in

[src/shapes/Text/Text.ts:1305](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1305)

___

### \_setStyleDeclaration

▸ `Private` **_setStyleDeclaration**(`lineIndex`, `charIndex`, `style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |
| `style` | `object` |

#### Returns

`void`

#### Inherited from

StyledText.\_setStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:281](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L281)

___

### \_setTextStyles

▸ `Private` **_setTextStyles**(`ctx`, `charStyle?`, `forMeasuring?`): `void`

Set the font parameter of the context with the object properties or with charStyle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `charStyle?` | `any` | object with font style properties |
| `forMeasuring?` | `boolean` | - |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:634](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L634)

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

StyledText.\_setupCompositeOperation

#### Defined in

[src/shapes/Object/Object.ts:1524](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1524)

___

### \_splitText

▸ `Private` **_splitText**(): `TextLinesInfo`

Divides text into lines of text and lines of graphemes.

#### Returns

`TextLinesInfo`

#### Defined in

[src/shapes/Text/Text.ts:446](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L446)

___

### \_splitTextIntoLines

▸ **_splitTextIntoLines**(`text`): `TextLinesInfo`

Returns the text as an array of lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | text to split |

#### Returns

`TextLinesInfo`

Lines in the text

#### Defined in

[src/shapes/Text/Text.ts:1715](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1715)

___

### \_toSVG

▸ **_toSVG**(`reviver?`): `string`[]

Returns svg representation of an instance
This function is implemented in each subclass
This is just because typescript otherwise cryies all the time

#### Parameters

| Name | Type |
| :------ | :------ |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

StyledText.\_toSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L120)

___

### \_updateCacheCanvas

▸ `Private` **_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

StyledText.\_updateCacheCanvas

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

StyledText.addPaintOrder

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

StyledText.animate

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

StyledText.calcACoords

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

StyledText.calcLineCoords

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

StyledText.calcOCoords

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

StyledText.calcOwnMatrix

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:767](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L767)

___

### calcTextHeight

▸ **calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Defined in

[src/shapes/Text/Text.ts:1033](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1033)

___

### calcTextWidth

▸ `Private` **calcTextWidth**(): `number`

calculate and return the text Width measuring each line.

#### Returns

`number`

Maximum width of Text object

#### Defined in

[src/shapes/Text/Text.ts:662](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L662)

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

StyledText.calcTransformMatrix

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

StyledText.canDrop

#### Defined in

[src/shapes/Object/InteractiveObject.ts:649](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L649)

___

### cleanStyle

▸ **cleanStyle**(`property`): `undefined` \| ``false``

Check if characters in a text have a value for a property
whose value matches the textbox's value for that property.  If so,
the character-level property is deleted.  If the character
has no other properties, then it is also deleted.  Finally,
if the line containing that character has no other characters
then it also is deleted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `StylePropertiesType` | The property to compare between characters and text. |

#### Returns

`undefined` \| ``false``

#### Inherited from

StyledText.cleanStyle

#### Defined in

[src/shapes/Text/StyledText.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L99)

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

StyledText.clearContextTop

#### Defined in

[src/shapes/Object/InteractiveObject.ts:592](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L592)

___

### clone

▸ **clone**(`propertiesToInclude?`): `Promise`<[`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`<[`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

StyledText.clone

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

StyledText.cloneAsImage

#### Defined in

[src/shapes/Object/Object.ts:1337](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1337)

___

### complexity

▸ **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity

#### Overrides

StyledText.complexity

#### Defined in

[src/shapes/Text/Text.ts:1780](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1780)

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

StyledText.containsPoint

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

StyledText.dispose

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

StyledText.drawBorders

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

StyledText.drawCacheOnCanvas

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

StyledText.drawClipPathOnCache

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

StyledText.drawControls

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

StyledText.drawControlsConnectingLines

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

StyledText.drawObject

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

StyledText.drawSelectionBackground

#### Defined in

[src/shapes/Object/InteractiveObject.ts:352](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L352)

___

### enlargeSpaces

▸ **enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:481](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L481)

___

### findCommonAncestors

▸ **findCommonAncestors**<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Text`](Text.md)<`Props`, `SProps`, `EventSpec`, `T`\> |
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

StyledText.findCommonAncestors

#### Defined in

[src/shapes/Object/StackedObject.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L99)

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

StyledText.fire

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

StyledText.forEachControl

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

StyledText.get

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L59)

___

### get2DCursorLocation

▸ **get2DCursorLocation**(`selectionStart`, `skipWrapping?`): `Object`

Returns 2d representation (lineIndex and charIndex) of cursor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart` | `number` |  |
| `skipWrapping?` | `boolean` | consider the location for unwrapped lines. useful to manage styles. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `charIndex` | `number` |
| `lineIndex` | `number` |

#### Overrides

StyledText.get2DCursorLocation

#### Defined in

[src/shapes/Text/Text.ts:545](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L545)

___

### getActiveControl

▸ **getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

StyledText.getActiveControl

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

StyledText.getAncestors

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

StyledText.getBoundingRect

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:540](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L540)

___

### getCanvasRetinaScaling

▸ **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

StyledText.getCanvasRetinaScaling

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:599](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L599)

___

### getCenterPoint

▸ **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

StyledText.getCenterPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L173)

___

### getCompleteStyleDeclaration

▸ **getCompleteStyleDeclaration**(`lineIndex`, `charIndex`): [`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)

return a new object that contains all the style property for a character
the object returned is newly created

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | of the line where the character is |
| `charIndex` | `number` | position of the character on the line |

#### Returns

[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)

style object

#### Inherited from

StyledText.getCompleteStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:264](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L264)

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

StyledText.getCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:237](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L237)

___

### getHeightOfChar

▸ **getHeightOfChar**(`line`, `_char`): `number`

Computes height of character at given position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | `number` | the line index number |
| `_char` | `number` | the character index number |

#### Returns

`number`

fontSize of the character

#### Defined in

[src/shapes/Text/Text.ts:855](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L855)

___

### getHeightOfLine

▸ **getHeightOfLine**(`lineIndex`): `number`

Calculate height of line at 'lineIndex'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | index of line to calculate |

#### Returns

`number`

#### Defined in

[src/shapes/Text/Text.ts:1014](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1014)

___

### getLineWidth

▸ `Private` **getLineWidth**(`lineIndex`): `number`

Measure a single line given its index. Used to calculate the initial
text bounding box. The values are calculated and stored in __lineWidths cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | line number |

#### Returns

`number`

Line width

#### Defined in

[src/shapes/Text/Text.ts:1504](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1504)

___

### getObjectOpacity

▸ **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

StyledText.getObjectOpacity

#### Defined in

[src/shapes/Object/Object.ts:659](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L659)

___

### getObjectScaling

▸ **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

StyledText.getObjectScaling

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

StyledText.getParent

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

StyledText.getPointByOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:198](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L198)

___

### getRelativeCenterPoint

▸ **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

StyledText.getRelativeCenterPoint

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

StyledText.getRelativeX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L128)

___

### getRelativeXY

▸ **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in parent's coordinate plane

#### Inherited from

StyledText.getRelativeXY

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

StyledText.getRelativeY

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

StyledText.getScaledHeight

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

StyledText.getScaledWidth

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:549](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L549)

___

### getSelectionStyles

▸ **getSelectionStyles**(`startIndex`, `endIndex?`, `complete?`): `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>[]

Gets style of a current selection/cursor (at the start position)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | Start index to get styles at |
| `endIndex?` | `number` | End index to get styles at, if not specified startIndex + 1 |
| `complete?` | `boolean` | get full style or not |

#### Returns

`Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>[]

styles an array with one, zero or more Style objects

#### Inherited from

StyledText.getSelectionStyles

#### Defined in

[src/shapes/Text/StyledText.ts:202](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L202)

___

### getStyleAtPosition

▸ `Private` **getStyleAtPosition**(`position`, `complete?`): `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

Gets style of a current selection/cursor position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | to get styles at |
| `complete?` | `boolean` | full style if true |

#### Returns

`Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

style Style object at a specified index

#### Inherited from

StyledText.getStyleAtPosition

#### Defined in

[src/shapes/Text/StyledText.ts:221](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L221)

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

StyledText.getSvgCommons

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

StyledText.getSvgFilter

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

StyledText.getSvgStyles

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

StyledText.getSvgTransform

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

▸ **getTotalAngle**(): [`TDegree`](../modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../modules.md#tdegree)

#### Inherited from

StyledText.getTotalAngle

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

StyledText.getTotalObjectScaling

#### Defined in

[src/shapes/Object/Object.ts:645](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L645)

___

### getValueOfPropertyAt

▸ **getValueOfPropertyAt**<`T`\>(`lineIndex`, `charIndex`, `property`): [`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>[`T`]

Retrieves the value of property at given character position

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `StylePropertiesType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | the line number |
| `charIndex` | `number` | the character number |
| `property` | `T` | the property name |

#### Returns

[`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>[`T`]

the value of 'property'

#### Defined in

[src/shapes/Text/Text.ts:1528](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1528)

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

StyledText.getViewportTransform

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:655](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L655)

___

### getX

▸ **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](Object.md#originx) property in canvas coordinate plane

#### Inherited from

StyledText.getX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L99)

___

### getXY

▸ **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in canvas coordinate plane

#### Inherited from

StyledText.getXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L159)

___

### getY

▸ **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](Object.md#originy) property in canvas coordinate plane

#### Inherited from

StyledText.getY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L113)

___

### graphemeSplit

▸ **graphemeSplit**(`value`): `string`[]

Override this method to customize grapheme splitting

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`[]

array of graphemes

**`Todo`**

the util `graphemeSplit` needs to be injectable in some way.
is more comfortable to inject the correct util rather than having to override text
in the middle of the prototype chain

#### Defined in

[src/shapes/Text/Text.ts:1706](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1706)

___

### handleFiller

▸ **handleFiller**<`T`\>(`ctx`, `property`, `filler`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"fill"`` \| ``"stroke"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `property` | \`${T}Style\` |
| `filler` | `string` \| [`TFiller`](../modules.md#tfiller) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Defined in

[src/shapes/Text/Text.ts:1265](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1265)

___

### hasCommonAncestors

▸ **hasCommonAncestors**<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Text`](Text.md)<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

StyledText.hasCommonAncestors

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

StyledText.hasFill

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

StyledText.hasStroke

#### Defined in

[src/shapes/Object/Object.ts:814](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L814)

___

### initDimensions

▸ **initDimensions**(): `void`

Initialize or update text dimensions.
Updates this.width and this.height with the proper values.
Does not return dimensions.

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:460](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L460)

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

StyledText.intersectsWithObject

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

StyledText.intersectsWithRect

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

StyledText.isCacheDirty

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

StyledText.isContainedWithinObject

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

StyledText.isContainedWithinRect

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

StyledText.isControlVisible

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

StyledText.isDescendantOf

#### Defined in

[src/shapes/Object/StackedObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L64)

___

### isEmptyStyles

▸ **isEmptyStyles**(`lineIndex?`): `boolean`

Returns true if object has no styling or no styling in a line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex?` | `number` | , lineIndex is on wrapped lines. |

#### Returns

`boolean`

#### Inherited from

StyledText.isEmptyStyles

#### Defined in

[src/shapes/Text/StyledText.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L37)

___

### isEndOfWrapping

▸ **isEndOfWrapping**(`lineIndex`): `boolean`

Detect if the text line is ended with an hard break
text and itext do not have wrapping, return false

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[src/shapes/Text/Text.ts:525](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L525)

___

### isInFrontOf

▸ **isInFrontOf**<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Text`](Text.md)<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

StyledText.isInFrontOf

#### Defined in

[src/shapes/Object/StackedObject.ts:178](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L178)

___

### isNotVisible

▸ **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StyledText.isNotVisible

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

StyledText.isOnScreen

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

StyledText.isOverlapping

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

StyledText.isPartiallyOnScreen

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

StyledText.isType

#### Defined in

[src/shapes/Object/Object.ts:1465](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1465)

___

### measureLine

▸ **measureLine**(`lineIndex`): `Object`

measure a text line measuring all characters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | line number |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `numOfSpaces` | `number` |
| `width` | `number` |

#### Defined in

[src/shapes/Text/Text.ts:863](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L863)

___

### missingNewlineOffset

▸ **missingNewlineOffset**(`lineIndex`): `number`

Detect if a line has a linebreak and so we need to account for it when moving
and counting style.
It return always for text and Itext.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`number`

Number

#### Defined in

[src/shapes/Text/Text.ts:536](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L536)

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

StyledText.needsItsOwnCache

#### Defined in

[src/shapes/Object/Object.ts:842](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L842)

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

StyledText.off

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L120)

▸ **off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

StyledText.off

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

StyledText.off

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L129)

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

StyledText.on

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L23)

▸ **on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

StyledText.on

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

StyledText.onDeselect

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

StyledText.onSelect

#### Defined in

[src/shapes/Object/InteractiveObject.ts:637](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L637)

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

StyledText.once

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L62)

▸ **once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

StyledText.once

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L66)

___

### removeStyle

▸ **removeStyle**(`property`): `void`

Remove a style property or properties from all individual character styles
in a text object.  Deletes the character style object if it contains no other style
props.  Deletes a line style object if it contains no other character styles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `StylePropertiesType` |

#### Returns

`void`

#### Inherited from

StyledText.removeStyle

#### Defined in

[src/shapes/Text/StyledText.ts:161](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L161)

___

### render

▸ **render**(`ctx`): `void`

Renders text instance on a specified context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Overrides

StyledText.render

#### Defined in

[src/shapes/Text/Text.ts:1680](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1680)

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

StyledText.renderCache

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

StyledText.renderDragSourceEffect

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

StyledText.renderDropTargetEffect

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

StyledText.rotate

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

StyledText.scale

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

StyledText.scaleToHeight

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

StyledText.scaleToWidth

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:579](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L579)

___

### set

▸ **set**(`key`, `value?`): [`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

#### Returns

[`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>

#### Overrides

StyledText.set

#### Defined in

[src/shapes/Text/Text.ts:1749](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1749)

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

StyledText.setControlVisible

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

StyledText.setControlsVisibility

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

StyledText.setCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:319](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L319)

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

StyledText.setOnGroup

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

StyledText.setOptions

#### Defined in

[src/shapes/Object/Object.ts:494](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L494)

___

### setPathInfo

▸ **setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:435](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L435)

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

StyledText.setPositionByOrigin

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

StyledText.setRelativeX

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

StyledText.setRelativeXY

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

StyledText.setRelativeY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:152](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L152)

___

### setSelectionStyles

▸ **setSelectionStyles**(`styles`, `startIndex`, `endIndex?`): `void`

Sets style of a current selection, if no selection exist, do not set anything.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `styles` | `object` | Styles object |
| `startIndex` | `number` | Start index to get styles at |
| `endIndex?` | `number` | End index to get styles at, if not specified startIndex + 1 |

#### Returns

`void`

#### Inherited from

StyledText.setSelectionStyles

#### Defined in

[src/shapes/Text/StyledText.ts:234](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L234)

___

### setSubscript

▸ **setSubscript**(`start`, `end`): `void`

Turns the character into an 'inferior figure' (i.e. 'subscript')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | selection start |
| `end` | `number` | selection end |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1406](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1406)

___

### setSuperscript

▸ **setSuperscript**(`start`, `end`): `void`

Turns the character into a 'superior figure' (i.e. 'superscript')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | selection start |
| `end` | `number` | selection end |

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:1397](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1397)

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

StyledText.setX

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

StyledText.setXY

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

StyledText.setY

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

StyledText.shouldCache

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

StyledText.strokeBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:376](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L376)

___

### styleHas

▸ **styleHas**(`property`, `lineIndex?`): `boolean`

Returns true if object has a style property or has it ina specified line
This function is used to detect if a text will use a particular property or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `StylePropertiesType` | to check for |
| `lineIndex?` | `number` | to check the style on |

#### Returns

`boolean`

#### Inherited from

StyledText.styleHas

#### Defined in

[src/shapes/Text/StyledText.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L66)

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

StyledText.toCanvasElement

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

StyledText.toClipPathSVG

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

StyledText.toDataURL

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

StyledText.toDatalessObject

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

StyledText.toJSON

#### Defined in

[src/shapes/Object/Object.ts:1484](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1484)

___

### toObject

▸ **toObject**<`T`, `K`\>(`propertiesToInclude?`): `Pick`<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`<`Props` & [`TClassProperties`](../modules.md#tclassproperties)<[`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`<`T`, `K`\> & `SProps`

Object representation of an instance

#### Overrides

StyledText.toObject

#### Defined in

[src/shapes/Text/Text.ts:1738](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1738)

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

StyledText.toSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

▸ **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Overrides

StyledText.toString

#### Defined in

[src/shapes/Text/Text.ts:570](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L570)

___

### toggle

▸ **toggle**(`property`): [`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`Text`](Text.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

StyledText.toggle

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

StyledText.transform

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

StyledText.transformMatrixKey

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

StyledText.translateToCenterPoint

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

StyledText.translateToGivenOrigin

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

StyledText.translateToOriginPoint

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

StyledText.willDrawShadow

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

StyledText.\_fromObject

#### Defined in

[src/shapes/Object/Object.ts:1553](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1553)

___

### fromElement

▸ `Static` **fromElement**(`element`, `options?`, `cssRules?`): `Promise`<[`Text`](Text.md)<{ `fontSize`: `number` ; `left`: `number` ; `linethrough`: `boolean` ; `overline`: `boolean` ; `signal?`: `AbortSignal` ; `strokeWidth`: `number` = 0; `top`: `number` ; `underline`: `boolean`  }, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Returns Text instance from an SVG element (<b>not yet implemented</b>)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | Element to parse |
| `options?` | [`Abortable`](../modules.md#abortable) | Options object |
| `cssRules?` | `CSSRules` | - |

#### Returns

`Promise`<[`Text`](Text.md)<{ `fontSize`: `number` ; `left`: `number` ; `linethrough`: `boolean` ; `overline`: `boolean` ; `signal?`: `AbortSignal` ; `strokeWidth`: `number` = 0; `top`: `number` ; `underline`: `boolean`  }, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Text

#### Defined in

[src/shapes/Text/Text.ts:1821](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1821)

___

### fromObject

▸ `Static` **fromObject**<`T`, `S`\>(`object`): `Promise`<`S`\>

Returns Text instance from an object representation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TOptions`](../modules.md#toptions)<[`SerializedTextProps`](../interfaces/SerializedTextProps.md)\> |
| `S` | extends [`Text`](Text.md)<`Partial`<[`TextProps`](../interfaces/TextProps.md)\>, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | plain js Object to create an instance from |

#### Returns

`Promise`<`S`\>

#### Overrides

StyledText.fromObject

#### Defined in

[src/shapes/Text/Text.ts:1898](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1898)

___

### getDefaults

▸ `Static` **getDefaults**(): `Object`

#### Returns

`Object`

#### Overrides

StyledText.getDefaults

#### Defined in

[src/shapes/Text/Text.ts:417](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L417)
