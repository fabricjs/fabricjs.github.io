# Class: Textbox\<Props, SProps, EventSpec\>

Textbox class, based on IText, allows the user to resize the text rectangle
and wraps lines automatically. Textboxes have their Y scaling locked, the
user can only change width. Height is adjusted automatically based on the
wrapping of lines.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`TextboxProps`](/apidocs/interfaces/TextboxProps.md)\> = `Partial`\<[`TextboxProps`](/apidocs/interfaces/TextboxProps.md)\> |
| `SProps` | extends [`SerializedTextboxProps`](/apidocs/interfaces/SerializedTextboxProps.md) = [`SerializedTextboxProps`](/apidocs/interfaces/SerializedTextboxProps.md) |
| `EventSpec` | extends `ITextEvents` = `ITextEvents` |

## Hierarchy

- [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

  ↳ **`Textbox`**

## Implements

- `UniqueTextboxProps`

## Constructors

### constructor

**new Textbox**\<`Props`, `SProps`, `EventSpec`\>(`text`, `options?`): [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`TextboxProps`](/apidocs/interfaces/TextboxProps.md)\> = `Partial`\<[`TextboxProps`](/apidocs/interfaces/TextboxProps.md)\> |
| `SProps` | extends [`SerializedTextboxProps`](/apidocs/interfaces/SerializedTextboxProps.md)\<`SProps`\> = [`SerializedTextboxProps`](/apidocs/interfaces/SerializedTextboxProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\<`EventSpec`\> & \{ `changed`: \{ `action`: `string` ; `index`: `number`  } ; `editing:entered`: \{ `e`: [`TPointerEvent`](/apidocs/modules.md#tpointerevent)  } ; `editing:exited`: `never` ; `selection:changed`: `never` ; `tripleclick`: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>  } = `ITextEvents` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text string |
| `options?` | `Props` | Options object |

#### Returns

[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[constructor](/apidocs/classes/IText.md#constructor)

#### Defined in

[src/shapes/IText/IText.ts:219](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L219)

## Properties

### CACHE\_FONT\_SIZE

 `Private` `Readonly` **CACHE\_FONT\_SIZE**: `number`

use this size when measuring text. To avoid IE11 rounding errors

**`Default`**

```ts
@readonly
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[CACHE_FONT_SIZE](/apidocs/classes/IText.md#cache_font_size)

#### Defined in

[src/shapes/Text/Text.ts:380](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L380)

___

### MIN\_TEXT\_WIDTH

 **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[MIN_TEXT_WIDTH](/apidocs/classes/IText.md#min_text_width)

#### Defined in

[src/shapes/Text/Text.ts:387](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L387)

___

### \_\_charBounds

 `Protected` **\_\_charBounds**: [`GraphemeBBox`](/apidocs/modules.md#graphemebbox)[][] = `[]`

contains characters bounding boxes
This variable is considered to be protected.
But for how mixins are implemented right now, we can't leave it private

#### Inherited from

[IText](/apidocs/classes/IText.md).[__charBounds](/apidocs/classes/IText.md#__charbounds)

#### Defined in

[src/shapes/Text/Text.ts:371](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L371)

___

### \_\_corner

 `Optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[IText](/apidocs/classes/IText.md).[__corner](/apidocs/classes/IText.md#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:115](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L115)

___

### \_\_lineHeights

 **\_\_lineHeights**: `number`[]

#### Inherited from

[IText](/apidocs/classes/IText.md).[__lineHeights](/apidocs/classes/IText.md#__lineheights)

#### Defined in

[src/shapes/Text/Text.ts:407](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L407)

___

### \_\_lineWidths

 **\_\_lineWidths**: `number`[]

#### Inherited from

[IText](/apidocs/classes/IText.md).[__lineWidths](/apidocs/classes/IText.md#__linewidths)

#### Defined in

[src/shapes/Text/Text.ts:408](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L408)

___

### \_\_owningGroup

 `Optional` **\_\_owningGroup**: [`Group`](/apidocs/classes/Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[IText](/apidocs/classes/IText.md).[__owningGroup](/apidocs/classes/IText.md#__owninggroup)

#### Defined in

[src/shapes/Object/StackedObject.ts:45](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L45)

___

### \_\_selectionStartOnMouseDown

 `Protected` **\_\_selectionStartOnMouseDown**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[__selectionStartOnMouseDown](/apidocs/classes/IText.md#__selectionstartonmousedown)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:71](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L71)

___

### \_cacheCanvas

 `Optional` `Private` **\_cacheCanvas**: `HTMLCanvasElement`

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

[IText](/apidocs/classes/IText.md).[_cacheCanvas](/apidocs/classes/IText.md#_cachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:184](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L184)

___

### \_cacheContext

 `Private` **\_cacheContext**: ``null`` \| `CanvasRenderingContext2D` = `null`

Quick access for the _cacheCanvas rendering context
This is part of the objectCaching feature
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[_cacheContext](/apidocs/classes/IText.md#_cachecontext)

#### Defined in

[src/shapes/Object/Object.ts:173](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L173)

___

### \_controlsVisibility

 **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[IText](/apidocs/classes/IText.md).[_controlsVisibility](/apidocs/classes/IText.md#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:122](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L122)

___

### \_currentCursorOpacity

 `Protected` **\_currentCursorOpacity**: `number` = `1`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_currentCursorOpacity](/apidocs/classes/IText.md#_currentcursoropacity)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:69](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L69)

___

### \_fontSizeFraction

 `Private` **\_fontSizeFraction**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_fontSizeFraction](/apidocs/classes/IText.md#_fontsizefraction)

#### Defined in

[src/shapes/Text/Text.ts:323](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L323)

___

### \_fontSizeMult

 **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[_fontSizeMult](/apidocs/classes/IText.md#_fontsizemult)

#### Defined in

[src/shapes/Text/Text.ts:335](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L335)

___

### \_forceClearCache

 `Protected` **\_forceClearCache**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_forceClearCache](/apidocs/classes/IText.md#_forceclearcache)

#### Defined in

[src/shapes/Text/StyledText.ts:28](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L28)

___

### \_reNewline

 `Private` **\_reNewline**: `RegExp`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_reNewline](/apidocs/classes/IText.md#_renewline)

#### Defined in

[src/shapes/Text/Text.ts:140](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L140)

___

### \_reSpace

 `Protected` **\_reSpace**: `RegExp`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_reSpace](/apidocs/classes/IText.md#_respace)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L66)

___

### \_reSpaceAndTab

 `Private` **\_reSpaceAndTab**: `RegExp`

Use this regular expression to filter for whitespace that is not a new line.
Mostly used when text is 'justify' aligned.

#### Inherited from

[IText](/apidocs/classes/IText.md).[_reSpaceAndTab](/apidocs/classes/IText.md#_respaceandtab)

#### Defined in

[src/shapes/Text/Text.ts:154](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L154)

___

### \_reSpacesAndTabs

 `Private` **\_reSpacesAndTabs**: `RegExp`

Use this regular expression to filter for whitespaces that is not a new line.
Mostly used when text is 'justify' aligned.

#### Inherited from

[IText](/apidocs/classes/IText.md).[_reSpacesAndTabs](/apidocs/classes/IText.md#_respacesandtabs)

#### Defined in

[src/shapes/Text/Text.ts:147](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L147)

___

### \_reWords

 `Private` **\_reWords**: `RegExp`

Use this regular expression to filter consecutive groups of non spaces.
Mostly used when text is 'justify' aligned.

#### Inherited from

[IText](/apidocs/classes/IText.md).[_reWords](/apidocs/classes/IText.md#_rewords)

#### Defined in

[src/shapes/Text/Text.ts:161](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L161)

___

### \_savedProps

 `Protected` `Optional` **\_savedProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `borderColor` | `string` |
| `defaultCursor?` | `string` |
| `hasControls` | `boolean` |
| `hoverCursor` | ``null`` \| `string` |
| `lockMovementX` | `boolean` |
| `lockMovementY` | `boolean` |
| `moveCursor?` | `string` |
| `selectable` | `boolean` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[_savedProps](/apidocs/classes/IText.md#_savedprops)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:75](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L75)

___

### \_scaling

 `Optional` **\_scaling**: `boolean`

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

**`TODO`**

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

[IText](/apidocs/classes/IText.md).[_scaling](/apidocs/classes/IText.md#_scaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:144](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L144)

___

### \_selectionDirection

 `Protected` **\_selectionDirection**: ``null`` \| ``"left"`` \| ``"right"``

#### Inherited from

[IText](/apidocs/classes/IText.md).[_selectionDirection](/apidocs/classes/IText.md#_selectiondirection)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:85](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L85)

___

### \_styleMap

 **\_styleMap**: `StyleMap`

#### Defined in

[src/shapes/Textbox.ts:87](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L87)

___

### \_text

 **\_text**: `string`[]

#### Inherited from

[IText](/apidocs/classes/IText.md).[_text](/apidocs/classes/IText.md#_text)

#### Defined in

[src/shapes/Text/Text.ts:405](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L405)

___

### \_textLines

 **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[_textLines](/apidocs/classes/IText.md#_textlines)

#### Defined in

[src/shapes/Text/Text.ts:402](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L402)

___

### \_transformDone

 `Optional` `Private` **\_transformDone**: `boolean`

Private. indicates if the object inside a group is on a transformed context or not
or is part of a larger cache for many object ( a group for example)

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[_transformDone](/apidocs/classes/IText.md#_transformdone)

#### Defined in

[src/shapes/Object/Object.ts:264](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L264)

___

### \_unwrappedTextLines

 **\_unwrappedTextLines**: `string`[][]

#### Inherited from

[IText](/apidocs/classes/IText.md).[_unwrappedTextLines](/apidocs/classes/IText.md#_unwrappedtextlines)

#### Defined in

[src/shapes/Text/Text.ts:404](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L404)

___

### \_wordJoiners

 **\_wordJoiners**: `RegExp`

#### Implementation of

UniqueTextboxProps.\_wordJoiners

#### Defined in

[src/shapes/Textbox.ts:85](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L85)

___

### aCoords

 **aCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

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

[IText](/apidocs/classes/IText.md).[aCoords](/apidocs/classes/IText.md#acoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:57](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L57)

___

### absolutePositioned

 **absolutePositioned**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[absolutePositioned](/apidocs/classes/IText.md#absolutepositioned)

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L137)

___

### activeOn

 **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

[IText](/apidocs/classes/IText.md).[activeOn](/apidocs/classes/IText.md#activeon)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:91](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L91)

___

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[IText](/apidocs/classes/IText.md).[angle](/apidocs/classes/IText.md#angle)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

 **backgroundColor**: `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[backgroundColor](/apidocs/classes/IText.md#backgroundcolor)

#### Defined in

[src/shapes/Object/Object.ts:124](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L124)

___

### borderColor

 **borderColor**: `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[borderColor](/apidocs/classes/IText.md#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L81)

___

### borderDashArray

 **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

[IText](/apidocs/classes/IText.md).[borderDashArray](/apidocs/classes/IText.md#borderdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L82)

___

### borderOpacityWhenMoving

 **borderOpacityWhenMoving**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[borderOpacityWhenMoving](/apidocs/classes/IText.md#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L83)

___

### borderScaleFactor

 **borderScaleFactor**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[borderScaleFactor](/apidocs/classes/IText.md#borderscalefactor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:84](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L84)

___

### cacheHeight

 `Optional` `Private` **cacheHeight**: `number`

Size of the cache canvas, height
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[cacheHeight](/apidocs/classes/IText.md#cacheheight)

#### Defined in

[src/shapes/Object/Object.ts:202](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L202)

___

### cacheTranslationX

 `Optional` `Private` **cacheTranslationX**: `number`

zoom level used on the cacheCanvas to draw the cache, Y axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[cacheTranslationX](/apidocs/classes/IText.md#cachetranslationx)

#### Defined in

[src/shapes/Object/Object.ts:229](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L229)

___

### cacheTranslationY

 `Optional` `Private` **cacheTranslationY**: `number`

translation of the cacheCanvas away from the center, for subpixel accuracy and crispness
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[cacheTranslationY](/apidocs/classes/IText.md#cachetranslationy)

#### Defined in

[src/shapes/Object/Object.ts:238](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L238)

___

### cacheWidth

 `Optional` `Private` **cacheWidth**: `number`

Size of the cache canvas, width
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[cacheWidth](/apidocs/classes/IText.md#cachewidth)

#### Defined in

[src/shapes/Object/Object.ts:193](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L193)

___

### caching

 **caching**: `boolean`

Indicates whether internal text char widths can be cached

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[caching](/apidocs/classes/IText.md#caching)

#### Defined in

[src/shapes/IText/IText.ts:197](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L197)

___

### canvas

 `Optional` **canvas**: [`Canvas`](/apidocs/classes/Canvas.md)

#### Inherited from

[IText](/apidocs/classes/IText.md).[canvas](/apidocs/classes/IText.md#canvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:146](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L146)

___

### centeredRotation

 **centeredRotation**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[centeredRotation](/apidocs/classes/IText.md#centeredrotation)

#### Defined in

[src/shapes/Object/Object.ts:138](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L138)

___

### centeredScaling

 **centeredScaling**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[centeredScaling](/apidocs/classes/IText.md#centeredscaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L58)

___

### charSpacing

 **charSpacing**: `number`

additional space between characters
expressed in thousands of em unit

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[charSpacing](/apidocs/classes/IText.md#charspacing)

#### Defined in

[src/shapes/Text/Text.ts:343](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L343)

___

### clipPath

 `Optional` **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[clipPath](/apidocs/classes/IText.md#clippath)

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L135)

___

### clipPathId

 `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[IText](/apidocs/classes/IText.md).[clipPathId](/apidocs/classes/IText.md#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### colorProperties

 **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[IText](/apidocs/classes/IText.md).[colorProperties](/apidocs/classes/IText.md#colorproperties)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/AnimatableObject.ts#L20)

___

### compositionColor

 **compositionColor**: `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[compositionColor](/apidocs/classes/IText.md#compositioncolor)

#### Defined in

[src/shapes/IText/IText.ts:190](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L190)

___

### compositionEnd

 **compositionEnd**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[compositionEnd](/apidocs/classes/IText.md#compositionend)

#### Defined in

[src/shapes/IText/IText.ts:129](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L129)

___

### compositionStart

 **compositionStart**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[compositionStart](/apidocs/classes/IText.md#compositionstart)

#### Defined in

[src/shapes/IText/IText.ts:127](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L127)

___

### controls

 **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[IText](/apidocs/classes/IText.md).[controls](/apidocs/classes/IText.md#controls)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:128](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L128)

___

### cornerColor

 **cornerColor**: `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[cornerColor](/apidocs/classes/IText.md#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L75)

___

### cornerDashArray

 **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

[IText](/apidocs/classes/IText.md).[cornerDashArray](/apidocs/classes/IText.md#cornerdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L78)

___

### cornerSize

 **cornerSize**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[cornerSize](/apidocs/classes/IText.md#cornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L72)

___

### cornerStrokeColor

 **cornerStrokeColor**: `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[cornerStrokeColor](/apidocs/classes/IText.md#cornerstrokecolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L76)

___

### cornerStyle

 **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

[IText](/apidocs/classes/IText.md).[cornerStyle](/apidocs/classes/IText.md#cornerstyle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L77)

___

### ctrlKeysMapDown

 **ctrlKeysMapDown**: `TKeyMapIText`

For functionalities on keyDown + ctrl || cmd

#### Inherited from

[IText](/apidocs/classes/IText.md).[ctrlKeysMapDown](/apidocs/classes/IText.md#ctrlkeysmapdown)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:42](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L42)

___

### ctrlKeysMapUp

 **ctrlKeysMapUp**: `TKeyMapIText`

For functionalities on keyUp + ctrl || cmd

#### Inherited from

[IText](/apidocs/classes/IText.md).[ctrlKeysMapUp](/apidocs/classes/IText.md#ctrlkeysmapup)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:37](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L37)

___

### cursorColor

 **cursorColor**: `string`

Color of text cursor color in editing mode.
if not set (default) will take color from the text.
if set to a color value that fabric can understand, it will
be used instead of the color of the text at the current position.

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[cursorColor](/apidocs/classes/IText.md#cursorcolor)

#### Defined in

[src/shapes/IText/IText.ts:174](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L174)

___

### cursorDelay

 **cursorDelay**: `number`

Delay between cursor blink (in ms)

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[cursorDelay](/apidocs/classes/IText.md#cursordelay)

#### Defined in

[src/shapes/IText/IText.ts:181](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L181)

___

### cursorDuration

 **cursorDuration**: `number`

Duration of cursor fade in (in ms)

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[cursorDuration](/apidocs/classes/IText.md#cursorduration)

#### Defined in

[src/shapes/IText/IText.ts:188](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L188)

___

### cursorOffsetCache

 `Protected` **cursorOffsetCache**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left?` | `number` |
| `top?` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[cursorOffsetCache](/apidocs/classes/IText.md#cursoroffsetcache)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:74](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L74)

___

### cursorWidth

 **cursorWidth**: `number`

Width of cursor (in px)

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[cursorWidth](/apidocs/classes/IText.md#cursorwidth)

#### Defined in

[src/shapes/IText/IText.ts:164](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L164)

___

### deltaY

 **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[deltaY](/apidocs/classes/IText.md#deltay)

#### Defined in

[src/shapes/Text/Text.ts:350](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L350)

___

### direction

 **direction**: `CanvasDirection`

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

#### Inherited from

[IText](/apidocs/classes/IText.md).[direction](/apidocs/classes/IText.md#direction)

#### Defined in

[src/shapes/Text/Text.ts:363](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L363)

___

### dirty

 **dirty**: `boolean`

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

**`Default`**

```ts
true
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[dirty](/apidocs/classes/IText.md#dirty)

#### Defined in

[src/shapes/Object/Object.ts:163](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L163)

___

### draggableTextDelegate

 `Protected` **draggableTextDelegate**: `DraggableTextDelegate`

#### Inherited from

[IText](/apidocs/classes/IText.md).[draggableTextDelegate](/apidocs/classes/IText.md#draggabletextdelegate)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:32](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L32)

___

### dynamicMinWidth

 **dynamicMinWidth**: `number`

Minimum calculated width of a textbox, in pixels.
fixed to 2 so that an empty textbox cannot go to 0
and is still selectable without text.

**`Default`**

```ts

```

#### Implementation of

UniqueTextboxProps.dynamicMinWidth

#### Defined in

[src/shapes/Textbox.ts:75](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L75)

___

### editable

 **editable**: `boolean`

Indicates whether a text can be edited

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[editable](/apidocs/classes/IText.md#editable)

#### Defined in

[src/shapes/IText/IText.ts:150](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L150)

___

### editingBorderColor

 **editingBorderColor**: `string`

Border color of text object while it's in editing mode

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[editingBorderColor](/apidocs/classes/IText.md#editingbordercolor)

#### Defined in

[src/shapes/IText/IText.ts:157](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L157)

___

### evented

 **evented**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[evented](/apidocs/classes/IText.md#evented)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L89)

___

### excludeFromExport

 **excludeFromExport**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[excludeFromExport](/apidocs/classes/IText.md#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:131](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L131)

___

### fill

 **fill**: ``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

#### Inherited from

[IText](/apidocs/classes/IText.md).[fill](/apidocs/classes/IText.md#fill)

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L114)

___

### fillRule

 **fillRule**: `CanvasFillRule`

#### Inherited from

[IText](/apidocs/classes/IText.md).[fillRule](/apidocs/classes/IText.md#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L115)

___

### flipX

 **flipX**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[flipX](/apidocs/classes/IText.md#flipx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

 **flipY**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[flipY](/apidocs/classes/IText.md#flipy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L22)

___

### fontFamily

 **fontFamily**: `string`

Font family

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[fontFamily](/apidocs/classes/IText.md#fontfamily)

#### Defined in

[src/shapes/Text/Text.ts:184](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L184)

___

### fontSize

 **fontSize**: `number`

Font size (in pixels)

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[fontSize](/apidocs/classes/IText.md#fontsize)

#### Defined in

[src/shapes/Text/Text.ts:170](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L170)

___

### fontStyle

 **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[fontStyle](/apidocs/classes/IText.md#fontstyle)

#### Defined in

[src/shapes/Text/Text.ts:220](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L220)

___

### fontWeight

 **fontWeight**: `string`

Font weight (e.g. bold, normal, 400, 600, 800)

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[fontWeight](/apidocs/classes/IText.md#fontweight)

#### Defined in

[src/shapes/Text/Text.ts:177](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L177)

___

### globalCompositeOperation

 **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

[IText](/apidocs/classes/IText.md).[globalCompositeOperation](/apidocs/classes/IText.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L123)

___

### group

 `Optional` `Private` **group**: [`Group`](/apidocs/classes/Group.md)

A reference to the parent of the object, usually a Group

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[group](/apidocs/classes/IText.md#group)

#### Defined in

[src/shapes/Object/Object.ts:246](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L246)

___

### hasBorders

 **hasBorders**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[hasBorders](/apidocs/classes/IText.md#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L85)

___

### hasControls

 **hasControls**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[hasControls](/apidocs/classes/IText.md#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L79)

___

### height

 **height**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[height](/apidocs/classes/IText.md#height)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hiddenTextarea

 **hiddenTextarea**: ``null`` \| `HTMLTextAreaElement`

#### Inherited from

[IText](/apidocs/classes/IText.md).[hiddenTextarea](/apidocs/classes/IText.md#hiddentextarea)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:44](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L44)

___

### hiddenTextareaContainer

 `Optional` **hiddenTextareaContainer**: ``null`` \| `HTMLElement`

DOM container to append the hiddenTextarea.
An alternative to attaching to the document.body.
Useful to reduce laggish redraw of the full document.body tree and
also with modals event capturing that won't let the textarea take focus.

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[hiddenTextareaContainer](/apidocs/classes/IText.md#hiddentextareacontainer)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:54](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L54)

___

### hoverCursor

 **hoverCursor**: ``null`` \| `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[hoverCursor](/apidocs/classes/IText.md#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:93](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L93)

___

### inCompositionMode

 `Protected` **inCompositionMode**: `boolean`

Helps determining when the text is in composition, so that the cursor
rendering is altered.

#### Inherited from

[IText](/apidocs/classes/IText.md).[inCompositionMode](/apidocs/classes/IText.md#incompositionmode)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:64](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L64)

___

### includeDefaultValues

 **includeDefaultValues**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[includeDefaultValues](/apidocs/classes/IText.md#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L130)

___

### initialized

 `Optional` **initialized**: ``true``

#### Inherited from

[IText](/apidocs/classes/IText.md).[initialized](/apidocs/classes/IText.md#initialized)

#### Defined in

[src/shapes/Text/Text.ts:409](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L409)

___

### inverted

 **inverted**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[inverted](/apidocs/classes/IText.md#inverted)

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L136)

___

### isEditing

 **isEditing**: `boolean`

Indicates whether text is in editing mode

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[isEditing](/apidocs/classes/IText.md#isediting)

#### Defined in

[src/shapes/IText/IText.ts:143](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L143)

___

### isMoving

 `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[IText](/apidocs/classes/IText.md).[isMoving](/apidocs/classes/IText.md#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L134)

___

### isWrapping

 **isWrapping**: `boolean`

#### Defined in

[src/shapes/Textbox.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L89)

___

### keysMap

 **keysMap**: `TKeyMapIText`

For functionalities on keyDown
Map a special key to a function of the instance/prototype
If you need different behavior for ESC or TAB or arrows, you have to change
this map setting the name of a function that you build on the IText or
your prototype.
the map change will affect all Instances unless you need for only some text Instances
in that case you have to clone this object and assign your Instance.
this.keysMap = Object.assign({}, this.keysMap);
The function must be in IText.prototype.myFunction And will receive event as args[0]

#### Inherited from

[IText](/apidocs/classes/IText.md).[keysMap](/apidocs/classes/IText.md#keysmap)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:30](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L30)

___

### keysMapRtl

 **keysMapRtl**: `TKeyMapIText`

#### Inherited from

[IText](/apidocs/classes/IText.md).[keysMapRtl](/apidocs/classes/IText.md#keysmaprtl)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:32](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L32)

___

### left

 **left**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[left](/apidocs/classes/IText.md#left)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:18](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L18)

___

### lineCoords

 **lineCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Describe object's corner position in canvas element coordinates.
includes padding. Used of object detection.
set and refreshed with setCoords.
Those could go away

**`Todo`**

investigate how to get rid of those

#### Inherited from

[IText](/apidocs/classes/IText.md).[lineCoords](/apidocs/classes/IText.md#linecoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L66)

___

### lineHeight

 **lineHeight**: `number`

Line height

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[lineHeight](/apidocs/classes/IText.md#lineheight)

#### Defined in

[src/shapes/Text/Text.ts:227](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L227)

___

### linethrough

 **linethrough**: `boolean`

Text decoration linethrough.

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[linethrough](/apidocs/classes/IText.md#linethrough)

#### Defined in

[src/shapes/Text/Text.ts:205](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L205)

___

### lockMovementX

 **lockMovementX**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[lockMovementX](/apidocs/classes/IText.md#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L63)

___

### lockMovementY

 **lockMovementY**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[lockMovementY](/apidocs/classes/IText.md#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L64)

___

### lockRotation

 **lockRotation**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[lockRotation](/apidocs/classes/IText.md#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L65)

___

### lockScalingFlip

 **lockScalingFlip**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[lockScalingFlip](/apidocs/classes/IText.md#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L70)

___

### lockScalingX

 **lockScalingX**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[lockScalingX](/apidocs/classes/IText.md#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L66)

___

### lockScalingY

 **lockScalingY**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[lockScalingY](/apidocs/classes/IText.md#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L67)

___

### lockSkewingX

 **lockSkewingX**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[lockSkewingX](/apidocs/classes/IText.md#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L68)

___

### lockSkewingY

 **lockSkewingY**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[lockSkewingY](/apidocs/classes/IText.md#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L69)

___

### matrixCache

 `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[IText](/apidocs/classes/IText.md).[matrixCache](/apidocs/classes/IText.md#matrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L76)

___

### minScaleLimit

 **minScaleLimit**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[minScaleLimit](/apidocs/classes/IText.md#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:109](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L109)

___

### minWidth

 **minWidth**: `number`

Minimum width of textbox, in pixels.

**`Default`**

```ts

```

#### Implementation of

UniqueTextboxProps.minWidth

#### Defined in

[src/shapes/Textbox.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L66)

___

### moveCursor

 **moveCursor**: ``null`` \| `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursor](/apidocs/classes/IText.md#movecursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L94)

___

### noScaleCache

 **noScaleCache**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[noScaleCache](/apidocs/classes/IText.md#noscalecache)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L57)

___

### oCoords

 **oCoords**: `Record`\<`string`, `TOCoord`\>

Describe object's corner position in canvas element coordinates.
properties are depending on control keys and padding the main controls.
each property is an object with x, y and corner.
The `corner` property contains in a similar manner the 4 points of the
interactive area of the corner.
The coordinates depends from the controls positionHandler and are used
to draw and locate controls

#### Inherited from

[IText](/apidocs/classes/IText.md).[oCoords](/apidocs/classes/IText.md#ocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L105)

___

### objectCaching

 **objectCaching**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[objectCaching](/apidocs/classes/IText.md#objectcaching)

#### Defined in

[src/shapes/Object/Object.ts:133](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L133)

___

### offsets

 `Private` **offsets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `linethrough` | `number` |
| `overline` | `number` |
| `underline` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[offsets](/apidocs/classes/IText.md#offsets)

#### Defined in

[src/shapes/Text/Text.ts:328](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L328)

___

### opacity

 **opacity**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[opacity](/apidocs/classes/IText.md#opacity)

#### Defined in

[src/shapes/Object/Object.ts:111](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L111)

___

### originX

 **originX**: [`TOriginX`](/apidocs/modules.md#toriginx)

#### Inherited from

[IText](/apidocs/classes/IText.md).[originX](/apidocs/classes/IText.md#originx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

 **originY**: [`TOriginY`](/apidocs/modules.md#toriginy)

#### Inherited from

[IText](/apidocs/classes/IText.md).[originY](/apidocs/classes/IText.md#originy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L28)

___

### overline

 **overline**: `boolean`

Text decoration overline.

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[overline](/apidocs/classes/IText.md#overline)

#### Defined in

[src/shapes/Text/Text.ts:198](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L198)

___

### ownCaching

 `Optional` `Private` **ownCaching**: `boolean`

Indicate if the object is sitting on a cache dedicated to it
or is part of a larger cache for many object ( a group for example)

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[ownCaching](/apidocs/classes/IText.md#owncaching)

#### Defined in

[src/shapes/Object/Object.ts:255](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L255)

___

### ownMatrixCache

 `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[IText](/apidocs/classes/IText.md).[ownMatrixCache](/apidocs/classes/IText.md#ownmatrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:71](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L71)

___

### padding

 **padding**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[padding](/apidocs/classes/IText.md#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:44](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L44)

___

### paintFirst

 **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

[IText](/apidocs/classes/IText.md).[paintFirst](/apidocs/classes/IText.md#paintfirst)

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L113)

___

### path

 `Optional` **path**: [`Path`](/apidocs/classes/Path.md)\<`Partial`\<[`PathProps`](/apidocs/interfaces/PathProps.md)\>, [`SerializedPathProps`](/apidocs/interfaces/SerializedPathProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

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

#### Inherited from

[IText](/apidocs/classes/IText.md).[path](/apidocs/classes/IText.md#path)

#### Defined in

[src/shapes/Text/Text.ts:292](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L292)

___

### pathAlign

 **pathAlign**: [`TPathAlign`](/apidocs/modules.md#tpathalign)

How text is aligned to the path. This property determines
the perpendicular position of each character relative to the path.
(one of "baseline", "center", "ascender", "descender")
This feature is in BETA, and its behavior may change

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[pathAlign](/apidocs/classes/IText.md#pathalign)

#### Defined in

[src/shapes/Text/Text.ts:318](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L318)

___

### pathSide

 **pathSide**: [`TPathSide`](/apidocs/modules.md#tpathside)

Which side of the path the text should be drawn on.
Only used when text has a path

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[pathSide](/apidocs/classes/IText.md#pathside)

#### Defined in

[src/shapes/Text/Text.ts:308](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L308)

___

### pathStartOffset

 **pathStartOffset**: `number`

Offset amount for text path starting position
Only used when text has a path

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[pathStartOffset](/apidocs/classes/IText.md#pathstartoffset)

#### Defined in

[src/shapes/Text/Text.ts:300](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L300)

___

### perPixelTargetFind

 **perPixelTargetFind**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[perPixelTargetFind](/apidocs/classes/IText.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:90](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L90)

___

### scaleX

 **scaleX**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[scaleX](/apidocs/classes/IText.md#scalex)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

 **scaleY**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[scaleY](/apidocs/classes/IText.md#scaley)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

 **selectable**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[selectable](/apidocs/classes/IText.md#selectable)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:88](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L88)

___

### selected

 `Protected` **selected**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[selected](/apidocs/classes/IText.md#selected)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:73](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L73)

___

### selectionBackgroundColor

 **selectionBackgroundColor**: `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[selectionBackgroundColor](/apidocs/classes/IText.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L86)

___

### selectionColor

 **selectionColor**: `string`

Color of text selection

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[selectionColor](/apidocs/classes/IText.md#selectioncolor)

#### Defined in

[src/shapes/IText/IText.ts:136](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L136)

___

### selectionEnd

 **selectionEnd**: `number`

Index where text selection ends

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[selectionEnd](/apidocs/classes/IText.md#selectionend)

#### Defined in

[src/shapes/IText/IText.ts:125](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L125)

___

### selectionStart

 **selectionStart**: `number`

Index where text selection starts (or where cursor is when there is no selection)

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[selectionStart](/apidocs/classes/IText.md#selectionstart)

#### Defined in

[src/shapes/IText/IText.ts:118](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L118)

___

### shadow

 **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md)

#### Inherited from

[IText](/apidocs/classes/IText.md).[shadow](/apidocs/classes/IText.md#shadow)

#### Defined in

[src/shapes/Object/Object.ts:126](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L126)

___

### skewX

 **skewX**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[skewX](/apidocs/classes/IText.md#skewx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

 **skewY**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[skewY](/apidocs/classes/IText.md#skewy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

 `Optional` **snapAngle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[IText](/apidocs/classes/IText.md).[snapAngle](/apidocs/classes/IText.md#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L60)

___

### snapThreshold

 `Optional` **snapThreshold**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[IText](/apidocs/classes/IText.md).[snapThreshold](/apidocs/classes/IText.md#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L61)

___

### splitByGrapheme

 **splitByGrapheme**: `boolean`

Use this boolean property in order to split strings that have no white space concept.
this is a cheap way to help with chinese/japanese

**`Since`**

2.6.0

#### Implementation of

UniqueTextboxProps.splitByGrapheme

#### Defined in

[src/shapes/Textbox.ts:83](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L83)

___

### stroke

 **stroke**: ``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

#### Inherited from

[IText](/apidocs/classes/IText.md).[stroke](/apidocs/classes/IText.md#stroke)

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L116)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

[IText](/apidocs/classes/IText.md).[strokeDashArray](/apidocs/classes/IText.md#strokedasharray)

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L117)

___

### strokeDashOffset

 **strokeDashOffset**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[strokeDashOffset](/apidocs/classes/IText.md#strokedashoffset)

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L118)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap`

#### Inherited from

[IText](/apidocs/classes/IText.md).[strokeLineCap](/apidocs/classes/IText.md#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L119)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

[IText](/apidocs/classes/IText.md).[strokeLineJoin](/apidocs/classes/IText.md#strokelinejoin)

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L120)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[strokeMiterLimit](/apidocs/classes/IText.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/Object.ts:121](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L121)

___

### strokeUniform

 **strokeUniform**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[strokeUniform](/apidocs/classes/IText.md#strokeuniform)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

 **strokeWidth**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[strokeWidth](/apidocs/classes/IText.md#strokewidth)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L30)

___

### styles

 **styles**: [`TextStyle`](/apidocs/modules.md#textstyle)

#### Inherited from

[IText](/apidocs/classes/IText.md).[styles](/apidocs/classes/IText.md#styles)

#### Defined in

[src/shapes/Text/Text.ts:268](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L268)

___

### subscript

 **subscript**: `Object`

Subscript schema object (minimum overlap)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseline` | `number` | baseline-shift factor (downwards) **`Default`** ```ts 0.11 ``` |
| `size` | `number` | fontSize factor **`Default`** ```ts 0.6 ``` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[subscript](/apidocs/classes/IText.md#subscript)

#### Defined in

[src/shapes/Text/Text.ts:248](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L248)

___

### superscript

 **superscript**: `Object`

Superscript schema object (minimum overlap)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseline` | `number` | baseline-shift factor (upwards) **`Default`** ```ts -0.35 ``` |
| `size` | `number` | fontSize factor **`Default`** ```ts 0.6 ``` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[superscript](/apidocs/classes/IText.md#superscript)

#### Defined in

[src/shapes/Text/Text.ts:232](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L232)

___

### text

 **text**: `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[text](/apidocs/classes/IText.md#text)

#### Defined in

[src/shapes/Text/Text.ts:163](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L163)

___

### textAlign

 **textAlign**: `string`

Text alignment. Possible values: "left", "center", "right", "justify",
"justify-left", "justify-center" or "justify-right".

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[textAlign](/apidocs/classes/IText.md#textalign)

#### Defined in

[src/shapes/Text/Text.ts:213](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L213)

___

### textBackgroundColor

 **textBackgroundColor**: `string`

Background color of text lines

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[textBackgroundColor](/apidocs/classes/IText.md#textbackgroundcolor)

#### Defined in

[src/shapes/Text/Text.ts:266](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L266)

___

### textLines

 **textLines**: `string`[]

contains the the text of the object, divided in lines as they are displayed
on screen. Wrapping will divide the text independently of line breaks

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[textLines](/apidocs/classes/IText.md#textlines)

#### Defined in

[src/shapes/Text/Text.ts:395](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L395)

___

### top

 **top**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[top](/apidocs/classes/IText.md#top)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

 **touchCornerSize**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[touchCornerSize](/apidocs/classes/IText.md#touchcornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L73)

___

### transparentCorners

 **transparentCorners**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[transparentCorners](/apidocs/classes/IText.md#transparentcorners)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L74)

___

### underline

 **underline**: `boolean`

Text decoration underline.

**`Default`**

```ts

```

#### Inherited from

[IText](/apidocs/classes/IText.md).[underline](/apidocs/classes/IText.md#underline)

#### Defined in

[src/shapes/Text/Text.ts:191](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L191)

___

### visible

 **visible**: `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[visible](/apidocs/classes/IText.md#visible)

#### Defined in

[src/shapes/Object/Object.ts:128](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L128)

___

### width

 **width**: `number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[width](/apidocs/classes/IText.md#width)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:19](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L19)

___

### zoomX

 `Optional` `Private` **zoomX**: `number`

zoom level used on the cacheCanvas to draw the cache, X axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[zoomX](/apidocs/classes/IText.md#zoomx)

#### Defined in

[src/shapes/Object/Object.ts:211](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L211)

___

### zoomY

 `Optional` `Private` **zoomY**: `number`

zoom level used on the cacheCanvas to draw the cache, Y axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[IText](/apidocs/classes/IText.md).[zoomY](/apidocs/classes/IText.md#zoomy)

#### Defined in

[src/shapes/Object/Object.ts:220](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L220)

___

### ATTRIBUTE\_NAMES

 `Static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [FabricText.fromElement](/apidocs/classes/FabricText.md#fromelement))

**`Static`**

**`Member Of`**

Text
@see: http://www.w3.org/TR/SVG/text.html#TextElement

#### Inherited from

[IText](/apidocs/classes/IText.md).[ATTRIBUTE_NAMES](/apidocs/classes/IText.md#attribute_names)

#### Defined in

[src/shapes/Text/Text.ts:1801](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1801)

___

### \_styleProperties

 `Static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_styleProperties](/apidocs/classes/IText.md#_styleproperties)

#### Defined in

[src/shapes/Text/StyledText.ts:29](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L29)

___

### cacheProperties

 `Static` **cacheProperties**: `string`[]

#### Inherited from

[IText](/apidocs/classes/IText.md).[cacheProperties](/apidocs/classes/IText.md#cacheproperties)

#### Defined in

[src/shapes/Text/Text.ts:411](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L411)

___

### genericFonts

 `Static` **genericFonts**: `string`[]

#### Inherited from

[IText](/apidocs/classes/IText.md).[genericFonts](/apidocs/classes/IText.md#genericfonts)

#### Defined in

[src/shapes/Text/Text.ts:1785](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1785)

___

### ownDefaults

 `Static` **ownDefaults**: `Record`\<`string`, `any`\> = `textboxDefaultValues`

#### Overrides

[IText](/apidocs/classes/IText.md).[ownDefaults](/apidocs/classes/IText.md#owndefaults)

#### Defined in

[src/shapes/Textbox.ts:95](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L95)

___

### stateProperties

 `Static` **stateProperties**: `string`[] = `stateProperties`

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[IText](/apidocs/classes/IText.md).[stateProperties](/apidocs/classes/IText.md#stateproperties)

#### Defined in

[src/shapes/Object/Object.ts:146](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L146)

___

### textLayoutProperties

 `Static` **textLayoutProperties**: `string`[]

Properties that requires a text layout recalculation when changed

#### Overrides

[IText](/apidocs/classes/IText.md).[textLayoutProperties](/apidocs/classes/IText.md#textlayoutproperties)

#### Defined in

[src/shapes/Textbox.ts:93](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L93)

___

### type

 `Static` **type**: `string` = `'Textbox'`

#### Overrides

[IText](/apidocs/classes/IText.md).[type](/apidocs/classes/IText.md#type)

#### Defined in

[src/shapes/Textbox.ts:91](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L91)

## Accessors

### type

`get` **type**(): `string`

#### Returns

`string`

#### Inherited from

IText.type

#### Defined in

[src/shapes/IText/IText.ts:207](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L207)

## Methods

### \_\_getCursorBoundariesOffsets

**__getCursorBoundariesOffsets**(`index`): `Object`

Calculates cursor left/top offset relative to instance's center point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index from start |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[__getCursorBoundariesOffsets](/apidocs/classes/IText.md#__getcursorboundariesoffsets)

#### Defined in

[src/shapes/IText/IText.ts:434](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L434)

___

### \_animate

**_animate**\<`T`\>(`key`, `endValue`, `options?`): [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](/apidocs/modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Property to animate |
| `endValue` | `T` | - |
| `options?` | `Partial`\<[`AnimationOptions`](/apidocs/modules/util.md#animationoptions)\<`T`\>\> | Options object |

#### Returns

[`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[_animate](/apidocs/classes/IText.md#_animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:50](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/AnimatableObject.ts#L50)

___

### \_animateCursor

**_animateCursor**(`«destructured»`): `ValueAnimation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `delay?` | `number` |
| › `duration` | `number` |
| › `onComplete?` | [`TOnAnimationChangeCallback`](/apidocs/modules/util.md#tonanimationchangecallback)\<`number`, `void`\> |
| › `toValue` | `number` |

#### Returns

`ValueAnimation`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_animateCursor](/apidocs/classes/IText.md#_animatecursor)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:120](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L120)

___

### \_applyPatternForTransformedGradient

**_applyPatternForTransformedGradient**(`ctx`, `filler`): `void`

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

[IText](/apidocs/classes/IText.md).[_applyPatternForTransformedGradient](/apidocs/classes/IText.md#_applypatternfortransformedgradient)

#### Defined in

[src/shapes/Object/Object.ts:1255](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1255)

___

### \_applyPatternGradientTransform

**_applyPatternGradientTransform**(`ctx`, `filler`): `Object`

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

[IText](/apidocs/classes/IText.md).[_applyPatternGradientTransform](/apidocs/classes/IText.md#_applypatterngradienttransform)

#### Defined in

[src/shapes/Object/Object.ts:1152](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1152)

___

### \_applyPatternGradientTransformText

**_applyPatternGradientTransformText**(`filler`): `CanvasPattern`

This function try to patch the missing gradientTransform on canvas gradients.
transforming a context to transform the gradient, is going to transform the stroke too.
we want to transform the gradient but not the stroke operation, so we create
a transformed gradient on a pattern and then we use the pattern instead of the gradient.
this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
is limited.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filler` | [`TFiller`](/apidocs/modules.md#tfiller) | a fabric gradient instance |

#### Returns

`CanvasPattern`

a pattern to use as fill/stroke style

#### Inherited from

[IText](/apidocs/classes/IText.md).[_applyPatternGradientTransformText](/apidocs/classes/IText.md#_applypatterngradienttransformtext)

#### Defined in

[src/shapes/Text/Text.ts:1245](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1245)

___

### \_calcTextareaPosition

**_calcTextareaPosition**(): \{ `charHeight?`: `undefined` = charHeight; `fontSize?`: `undefined` ; `left`: `string` = '1px'; `top`: `string` = '1px' } \| \{ `charHeight`: `number` = charHeight; `fontSize`: `string` ; `left`: `string` ; `top`: `string`  }

#### Returns

\{ `charHeight?`: `undefined` = charHeight; `fontSize?`: `undefined` ; `left`: `string` = '1px'; `top`: `string` = '1px' } \| \{ `charHeight`: `number` = charHeight; `fontSize`: `string` ; `left`: `string` ; `top`: `string`  }

style contains style for hiddenTextarea

#### Inherited from

[IText](/apidocs/classes/IText.md).[_calcTextareaPosition](/apidocs/classes/IText.md#_calctextareaposition)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:559](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L559)

___

### \_calculateCurrentDimensions

**_calculateCurrentDimensions**(`options?`): [`Point`](/apidocs/classes/Point.md)

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

[IText](/apidocs/classes/IText.md).[_calculateCurrentDimensions](/apidocs/classes/IText.md#_calculatecurrentdimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:633](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L633)

___

### \_clearCache

**_clearCache**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_clearCache](/apidocs/classes/IText.md#_clearcache)

#### Defined in

[src/shapes/Text/Text.ts:1491](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1491)

___

### \_constrainScale

**_constrainScale**(`value`): `number`

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

[IText](/apidocs/classes/IText.md).[_constrainScale](/apidocs/classes/IText.md#_constrainscale)

#### Defined in

[src/shapes/Object/Object.ts:675](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L675)

___

### \_createBaseClipPathSVGMarkup

**_createBaseClipPathSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_createBaseClipPathSVGMarkup](/apidocs/classes/IText.md#_createbaseclippathsvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:158](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L158)

___

### \_createBaseSVGMarkup

**_createBaseSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `noStyle?` | `boolean` |
| › `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |
| › `withShadow?` | `boolean` |

#### Returns

`string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_createBaseSVGMarkup](/apidocs/classes/IText.md#_createbasesvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

**_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_createCacheCanvas](/apidocs/classes/IText.md#_createcachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:319](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L319)

___

### \_deleteLineStyle

**_deleteLineStyle**(`lineIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_deleteLineStyle](/apidocs/classes/IText.md#_deletelinestyle)

#### Defined in

[src/shapes/Text/StyledText.ts:320](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L320)

___

### \_deleteStyleDeclaration

**_deleteStyleDeclaration**(`lineIndex`, `charIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`void`

#### Overrides

[IText](/apidocs/classes/IText.md).[_deleteStyleDeclaration](/apidocs/classes/IText.md#_deletestyledeclaration)

#### Defined in

[src/shapes/Textbox.ts:270](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L270)

___

### \_drawBorders

**_drawBorders**(`ctx`, `size`, `styleOverride?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `size` | [`Point`](/apidocs/classes/Point.md) |  |
| `styleOverride` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_drawBorders](/apidocs/classes/IText.md#_drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:376](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L376)

___

### \_drawClipPath

**_drawClipPath**(`ctx`, `clipPath?`): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `clipPath?` | `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_drawClipPath](/apidocs/classes/IText.md#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:944](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L944)

___

### \_exitEditing

**_exitEditing**(): `void`

runs the actual logic that exits from editing state, see [exitEditing](/apidocs/classes/IText.md#exitediting)

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_exitEditing](/apidocs/classes/IText.md#_exitediting)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:663](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L663)

___

### \_findCenterFromElement

**_findCenterFromElement**(): [`Point`](/apidocs/classes/Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates

#### Returns

[`Point`](/apidocs/classes/Point.md)

center point from element coordinates

#### Inherited from

[IText](/apidocs/classes/IText.md).[_findCenterFromElement](/apidocs/classes/IText.md#_findcenterfromelement)

#### Defined in

[src/shapes/Object/Object.ts:1303](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1303)

___

### \_findTargetCorner

**_findTargetCorner**(`pointer`, `forTouch?`): `string`

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

[IText](/apidocs/classes/IText.md).[_findTargetCorner](/apidocs/classes/IText.md#_findtargetcorner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:191](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L191)

___

### \_fireSelectionChanged

**_fireSelectionChanged**(): `void`

Fires the even of selection changed

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_fireSelectionChanged](/apidocs/classes/IText.md#_fireselectionchanged)

#### Defined in

[src/shapes/IText/IText.ts:282](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L282)

___

### \_generateStyleMap

**_generateStyleMap**(`textInfo`): `StyleMap`

Generate an object that translates the style object so that it is
broken up by visual lines (new lines and automatic wrapping).
The original text styles object is broken up by actual lines (new lines only),
which is only sufficient for Text / IText

#### Parameters

| Name | Type |
| :------ | :------ |
| `textInfo` | `TextLinesInfo` |

#### Returns

`StyleMap`

#### Defined in

[src/shapes/Textbox.ts:140](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L140)

___

### \_getCacheCanvasDimensions

**_getCacheCanvasDimensions**(): [`TCacheCanvasDimensions`](/apidocs/modules.md#tcachecanvasdimensions)

Return the dimension and the zoom level needed to create a cache canvas
big enough to host the object to be cached.

#### Returns

[`TCacheCanvasDimensions`](/apidocs/modules.md#tcachecanvasdimensions)

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getCacheCanvasDimensions](/apidocs/classes/IText.md#_getcachecanvasdimensions)

#### Defined in

[src/shapes/Text/Text.ts:588](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L588)

___

### \_getCurrentCharIndex

**_getCurrentCharIndex**(): `Object`

Returns the cursor position for the getCurrent.. functions

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `c` | `number` |
| `l` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getCurrentCharIndex](/apidocs/classes/IText.md#_getcurrentcharindex)

#### Defined in

[src/shapes/IText/IText.ts:682](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L682)

___

### \_getCursorBoundaries

**_getCursorBoundaries**(`index?`, `skipCaching?`): `CursorBoundaries`

Returns cursor boundaries (left, top, leftOffset, topOffset)
left/top are left/top of entire text box
leftOffset/topOffset are offset from that left/top point of a text box

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index?` | `number` | index from start |
| `skipCaching?` | `boolean` |  |

#### Returns

`CursorBoundaries`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getCursorBoundaries](/apidocs/classes/IText.md#_getcursorboundaries)

#### Defined in

[src/shapes/IText/IText.ts:395](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L395)

___

### \_getCursorBoundariesOffsets

**_getCursorBoundariesOffsets**(`index`, `skipCaching?`): `Object`

Caches and returns cursor left/top offset relative to instance's center point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index from start |
| `skipCaching?` | `boolean` |  |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getCursorBoundariesOffsets](/apidocs/classes/IText.md#_getcursorboundariesoffsets)

#### Defined in

[src/shapes/IText/IText.ts:416](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L416)

___

### \_getFontDeclaration

**_getFontDeclaration**(`«destructured»?`, `forMeasuring?`): `string`

return font declaration string for canvas context

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Partial`\<`Pick`\<`Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>, ``"fontFamily"`` \| ``"fontSize"`` \| ``"fontStyle"`` \| ``"fontWeight"``\>\> |
| `forMeasuring?` | `boolean` |

#### Returns

`string`

font declaration formatted for canvas context.

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getFontDeclaration](/apidocs/classes/IText.md#_getfontdeclaration)

#### Defined in

[src/shapes/Text/Text.ts:1648](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1648)

___

### \_getGraphemeBox

**_getGraphemeBox**(`grapheme`, `lineIndex`, `charIndex`, `prevGrapheme?`, `skipLeft?`): [`GraphemeBBox`](/apidocs/modules.md#graphemebbox)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `grapheme` | `string` | to be measured |
| `lineIndex` | `number` | index of the line where the char is |
| `charIndex` | `number` | position in the line |
| `prevGrapheme?` | `string` | character preceding the one to be measured |
| `skipLeft?` | `boolean` | - |

#### Returns

[`GraphemeBBox`](/apidocs/modules.md#graphemebbox)

grapheme bbox

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getGraphemeBox](/apidocs/classes/IText.md#_getgraphemebox)

#### Defined in

[src/shapes/Text/Text.ts:973](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L973)

___

### \_getIndexOnLine

**_getIndexOnLine**(`lineIndex`, `width`): `number`

for a given width it founds the matching character.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `width` | `number` |

#### Returns

`number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getIndexOnLine](/apidocs/classes/IText.md#_getindexonline)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:416](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L416)

___

### \_getLeftOffset

**_getLeftOffset**(): `number`

#### Returns

`number`

Left offset

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getLeftOffset](/apidocs/classes/IText.md#_getleftoffset)

#### Defined in

[src/shapes/Text/Text.ts:1048](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1048)

___

### \_getLeftTopCoords

**_getLeftTopCoords**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getLeftTopCoords](/apidocs/classes/IText.md#_getlefttopcoords)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:222](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L222)

___

### \_getLineLeftOffset

**_getLineLeftOffset**(`lineIndex`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | index text line |

#### Returns

`number`

Line left offset

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getLineLeftOffset](/apidocs/classes/IText.md#_getlineleftoffset)

#### Defined in

[src/shapes/Text/Text.ts:1445](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1445)

___

### \_getLineStyle

**_getLineStyle**(`lineIndex`): `boolean`

probably broken need a fix
Returns the real style line that correspond to the wrapped lineIndex line
Used just to verify if the line does exist or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`boolean`

if the line exists or not

#### Overrides

[IText](/apidocs/classes/IText.md).[_getLineStyle](/apidocs/classes/IText.md#_getlinestyle)

#### Defined in

[src/shapes/Textbox.ts:285](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L285)

___

### \_getNonTransformedDimensions

**_getNonTransformedDimensions**(): [`Point`](/apidocs/classes/Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getNonTransformedDimensions](/apidocs/classes/IText.md#_getnontransformeddimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:622](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L622)

___

### \_getSelectionForOffset

**_getSelectionForOffset**(`e`, `isRight`): `number`

private
Helps finding if the offset should be counted from Start or End

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |
| `isRight` | `boolean` |  |

#### Returns

`number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getSelectionForOffset](/apidocs/classes/IText.md#_getselectionforoffset)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:377](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L377)

___

### \_getStyleDeclaration

**_getStyleDeclaration**(`lineIndex`, `charIndex`): `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>

#### Overrides

[IText](/apidocs/classes/IText.md).[_getStyleDeclaration](/apidocs/classes/IText.md#_getstyledeclaration)

#### Defined in

[src/shapes/Textbox.ts:232](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L232)

___

### \_getTopOffset

**_getTopOffset**(): `number`

#### Returns

`number`

Top offset

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getTopOffset](/apidocs/classes/IText.md#_gettopoffset)

#### Defined in

[src/shapes/Text/Text.ts:1056](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1056)

___

### \_getTransformedDimensions

**_getTransformedDimensions**(`options?`): [`Point`](/apidocs/classes/Point.md)

Calculate object bounding box dimensions from its properties scale, skew.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getTransformedDimensions](/apidocs/classes/IText.md#_gettransformeddimensions)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:49](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L49)

___

### \_getWidthBeforeCursor

**_getWidthBeforeCursor**(`lineIndex`, `charIndex`): `number`

Finds the width in pixels before the cursor on the same line

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`number`

widthBeforeCursor width before cursor

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getWidthBeforeCursor](/apidocs/classes/IText.md#_getwidthbeforecursor)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:328](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L328)

___

### \_getWidthOfCharSpacing

**_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_getWidthOfCharSpacing](/apidocs/classes/IText.md#_getwidthofcharspacing)

#### Defined in

[src/shapes/Text/Text.ts:1515](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1515)

___

### \_limitCacheSize

**_limitCacheSize**(`dims`): `any`

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

[IText](/apidocs/classes/IText.md).[_limitCacheSize](/apidocs/classes/IText.md#_limitcachesize)

#### Defined in

[src/shapes/Object/Object.ts:342](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L342)

___

### \_measureChar

**_measureChar**(`_char`, `charStyle`, `previousChar?`, `prevCharStyle?`): `Object`

measure and return the width of a single character.
possibly overridden to accommodate different measure logic or
to hook some external lib for character measurement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_char` | `string` | - |
| `charStyle` | [`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration) | style of char to be measured |
| `previousChar?` | `string` | previous char |
| `prevCharStyle?` | [`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration) \| `Record`\<`string`, `never`\> | style of previous char |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `kernedWidth` | `number` |
| `width` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[_measureChar](/apidocs/classes/IText.md#_measurechar)

#### Defined in

[src/shapes/Text/Text.ts:792](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L792)

___

### \_measureLine

**_measureLine**(`lineIndex`): `Object`

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

#### Inherited from

[IText](/apidocs/classes/IText.md).[_measureLine](/apidocs/classes/IText.md#_measureline)

#### Defined in

[src/shapes/Text/Text.ts:881](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L881)

___

### \_measureWord

**_measureWord**(`word`, `lineIndex`, `charOffset?`): `number`

Helper function to measure a string of text, given its lineIndex and charIndex offset
It gets called when charBounds are not available yet.
Override if necessary
Use with [Textbox#wordSplit](/apidocs/classes/Textbox.md#wordsplit)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `word` | `string`[] | `undefined` |
| `lineIndex` | `number` | `undefined` |
| `charOffset` | `number` | `0` |

#### Returns

`number`

#### Defined in

[src/shapes/Textbox.ts:375](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L375)

___

### \_mouseDownHandler

**_mouseDownHandler**(`«destructured»`): `void`

Default event handler for the basic functionalities needed on _mouseDown
can be overridden to do something different.
Scope of this implementation is: find the click position, set selectionStart
find selectionEnd, initialize the drawing of either cursor or selection area
initializing a mousedDown on a text area will cancel fabricjs knowledge of
current compositionMode. It will be set to false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_mouseDownHandler](/apidocs/classes/IText.md#_mousedownhandler)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:131](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L131)

___

### \_mouseDownHandlerBefore

**_mouseDownHandlerBefore**(`«destructured»`): `void`

Default event handler for the basic functionalities needed on mousedown:before
can be overridden to do something different.
Scope of this implementation is: verify the object is already selected when mousing down

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_mouseDownHandlerBefore](/apidocs/classes/IText.md#_mousedownhandlerbefore)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:166](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L166)

___

### \_move

**_move**(`e`, `prop`, `direction`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |
| `prop` | ``"selectionStart"`` \| ``"selectionEnd"`` |
| `direction` | ``"Left"`` \| ``"Right"`` |

#### Returns

`boolean`

true if a change happened

**`Todo`**

refactor not to use method name composition

#### Inherited from

[IText](/apidocs/classes/IText.md).[_move](/apidocs/classes/IText.md#_move)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:548](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L548)

___

### \_moveCursorLeftOrRight

**_moveCursorLeftOrRight**(`direction`, `e`): `void`

Moves cursor right or Left, fires event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | ``"Left"`` \| ``"Right"`` | 'Left', 'Right' |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_moveCursorLeftOrRight](/apidocs/classes/IText.md#_movecursorleftorright)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:638](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L638)

___

### \_moveCursorUpOrDown

**_moveCursorUpOrDown**(`direction`, `e`): `void`

Moves cursor up or down, fires the events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | ``"Up"`` \| ``"Down"`` | 'Up' or 'Down' |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_moveCursorUpOrDown](/apidocs/classes/IText.md#_movecursorupordown)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:477](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L477)

___

### \_moveLeft

**_moveLeft**(`e`, `prop`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |
| `prop` | ``"selectionStart"`` \| ``"selectionEnd"`` |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_moveLeft](/apidocs/classes/IText.md#_moveleft)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:572](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L572)

___

### \_moveRight

**_moveRight**(`e`, `prop`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |
| `prop` | ``"selectionStart"`` \| ``"selectionEnd"`` |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_moveRight](/apidocs/classes/IText.md#_moveright)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:579](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L579)

___

### \_removeCacheCanvas

**_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_removeCacheCanvas](/apidocs/classes/IText.md#_removecachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:798](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L798)

___

### \_removeDefaultValues

**_removeDefaultValues**\<`T`\>(`object`): `Partial`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

`Partial`\<`T`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[_removeDefaultValues](/apidocs/classes/IText.md#_removedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:590](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L590)

___

### \_removeExtraneousStyles

**_removeExtraneousStyles**(): `void`

#### Returns

`void`

#### Overrides

[IText](/apidocs/classes/IText.md).[_removeExtraneousStyles](/apidocs/classes/IText.md#_removeextraneousstyles)

#### Defined in

[src/shapes/Textbox.ts:535](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L535)

___

### \_removeShadow

**_removeShadow**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_removeShadow](/apidocs/classes/IText.md#_removeshadow)

#### Defined in

[src/shapes/Object/Object.ts:1138](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1138)

___

### \_render

**_render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_render](/apidocs/classes/IText.md#_render)

#### Defined in

[src/shapes/Text/Text.ts:600](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L600)

___

### \_renderBackground

**_renderBackground**(`ctx`): `void`

Draws a background for the object big as its untransformed dimensions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderBackground](/apidocs/classes/IText.md#_renderbackground)

#### Defined in

[src/shapes/Object/Object.ts:1006](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1006)

___

### \_renderChar

**_renderChar**(`method`, `ctx`, `lineIndex`, `charIndex`, `_char`, `left`, `top`): `void`

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

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderChar](/apidocs/classes/IText.md#_renderchar)

#### Defined in

[src/shapes/Text/Text.ts:1343](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1343)

___

### \_renderChars

**_renderChars**(`method`, `ctx`, `line`, `left`, `top`, `lineIndex`): `void`

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

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderChars](/apidocs/classes/IText.md#_renderchars)

#### Defined in

[src/shapes/Text/Text.ts:1132](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1132)

___

### \_renderControls

**_renderControls**(`ctx`, `styleOverride?`): `void`

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

[IText](/apidocs/classes/IText.md).[_renderControls](/apidocs/classes/IText.md#_rendercontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:402](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L402)

___

### \_renderCursor

**_renderCursor**(`ctx`, `boundaries`, `selectionStart`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `boundaries` | `CursorBoundaries` |
| `selectionStart` | `number` |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderCursor](/apidocs/classes/IText.md#_rendercursor)

#### Defined in

[src/shapes/IText/IText.ts:493](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L493)

___

### \_renderFill

**_renderFill**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderFill](/apidocs/classes/IText.md#_renderfill)

#### Defined in

[src/shapes/Object/Object.ts:1205](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1205)

___

### \_renderPaintInOrder

**_renderPaintInOrder**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderPaintInOrder](/apidocs/classes/IText.md#_renderpaintinorder)

#### Defined in

[src/shapes/Object/Object.ts:1180](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1180)

___

### \_renderSelection

**_renderSelection**(`ctx`, `selection`, `boundaries`): `void`

Renders text selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | transformed context to draw on |
| `selection` | `Object` |  |
| `selection.selectionEnd` | `number` | - |
| `selection.selectionStart` | `number` | - |
| `boundaries` | `CursorBoundaries` | Object with left/top/leftOffset/topOffset |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderSelection](/apidocs/classes/IText.md#_renderselection)

#### Defined in

[src/shapes/IText/IText.ts:571](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L571)

___

### \_renderStroke

**_renderStroke**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderStroke](/apidocs/classes/IText.md#_renderstroke)

#### Defined in

[src/shapes/Object/Object.ts:1224](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1224)

___

### \_renderText

**_renderText**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderText](/apidocs/classes/IText.md#_rendertext)

#### Defined in

[src/shapes/Text/Text.ts:615](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L615)

___

### \_renderTextCommon

**_renderTextCommon**(`ctx`, `method`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `method` | ``"fillText"`` \| ``"strokeText"`` | Method name ("fillText" or "strokeText") |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderTextCommon](/apidocs/classes/IText.md#_rendertextcommon)

#### Defined in

[src/shapes/Text/Text.ts:1065](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1065)

___

### \_renderTextDecoration

**_renderTextDecoration**(`ctx`, `type`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `type` | ``"underline"`` \| ``"overline"`` \| ``"linethrough"`` | - |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderTextDecoration](/apidocs/classes/IText.md#_rendertextdecoration)

#### Defined in

[src/shapes/Text/Text.ts:1542](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1542)

___

### \_renderTextFill

**_renderTextFill**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderTextFill](/apidocs/classes/IText.md#_rendertextfill)

#### Defined in

[src/shapes/Text/Text.ts:1094](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1094)

___

### \_renderTextLine

**_renderTextLine**(`method`, `ctx`, `line`, `left`, `top`, `lineIndex`): `void`

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

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderTextLine](/apidocs/classes/IText.md#_rendertextline)

#### Defined in

[src/shapes/Text/Text.ts:684](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L684)

___

### \_renderTextLinesBackground

**_renderTextLinesBackground**(`ctx`): `void`

Renders the text background for lines, taking care of style

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderTextLinesBackground](/apidocs/classes/IText.md#_rendertextlinesbackground)

#### Defined in

[src/shapes/Text/Text.ts:700](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L700)

___

### \_renderTextStroke

**_renderTextStroke**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_renderTextStroke](/apidocs/classes/IText.md#_rendertextstroke)

#### Defined in

[src/shapes/Text/Text.ts:1106](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1106)

___

### \_restoreEditingProps

**_restoreEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_restoreEditingProps](/apidocs/classes/IText.md#_restoreeditingprops)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:638](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L638)

___

### \_saveEditingProps

**_saveEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_saveEditingProps](/apidocs/classes/IText.md#_saveeditingprops)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:622](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L622)

___

### \_set

**_set**(`key`, `value`): [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

While editing handle differently

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[_set](/apidocs/classes/IText.md#_set)

#### Defined in

[src/shapes/IText/IText.ts:230](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L230)

___

### \_setClippingProperties

**_setClippingProperties**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setClippingProperties](/apidocs/classes/IText.md#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1084](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1084)

___

### \_setEditingProps

**_setEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setEditingProps](/apidocs/classes/IText.md#_seteditingprops)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:449](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L449)

___

### \_setFillStyles

**_setFillStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `style` | `Pick`\<[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>, ``"fill"``\> | with ill defined |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setFillStyles](/apidocs/classes/IText.md#_setfillstyles)

#### Defined in

[src/shapes/Text/Text.ts:1328](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1328)

___

### \_setGraphemeOnPath

**_setGraphemeOnPath**(`positionInPath`, `graphemeInfo`): `void`

Calculate the angle  and the left,top position of the char that follow a path.
It appends it to graphemeInfo to be reused later at rendering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionInPath` | `number` | to be measured |
| `graphemeInfo` | [`GraphemeBBox`](/apidocs/modules.md#graphemebbox) | current grapheme box information |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setGraphemeOnPath](/apidocs/classes/IText.md#_setgraphemeonpath)

#### Defined in

[src/shapes/Text/Text.ts:954](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L954)

___

### \_setLineDash

**_setLineDash**(`ctx`, `dashArray?`): `void`

Sets line dash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to set the dash line on |
| `dashArray?` | ``null`` \| `number`[] | array representing dashes |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setLineDash](/apidocs/classes/IText.md#_setlinedash)

#### Defined in

[src/shapes/Object/Object.ts:1096](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1096)

___

### \_setLineStyle

**_setLineStyle**(`lineIndex`): `void`

Set the line style to an empty object so that is initialized

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`void`

#### Overrides

[IText](/apidocs/classes/IText.md).[_setLineStyle](/apidocs/classes/IText.md#_setlinestyle)

#### Defined in

[src/shapes/Textbox.ts:296](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L296)

___

### \_setObject

**_setObject**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`\<`string`, `any`\> |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setObject](/apidocs/classes/IText.md#_setobject)

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L18)

___

### \_setOpacity

**_setOpacity**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setOpacity](/apidocs/classes/IText.md#_setopacity)

#### Defined in

[src/shapes/Object/Object.ts:1023](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1023)

___

### \_setOptions

**_setOptions**(`options?`): `void`

Sets object's properties from options, for initialization only

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Options object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setOptions](/apidocs/classes/IText.md#_setoptions)

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L9)

___

### \_setScript

**_setScript**(`start`, `end`, `schema`): `void`

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

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setScript](/apidocs/classes/IText.md#_setscript)

#### Defined in

[src/shapes/Text/Text.ts:1418](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1418)

___

### \_setShadow

**_setShadow**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setShadow](/apidocs/classes/IText.md#_setshadow)

#### Defined in

[src/shapes/Object/Object.ts:1111](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1111)

___

### \_setStrokeStyles

**_setStrokeStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a stroke style, and stroke and strokeWidth
need to be sent in as defined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `style` | `Pick`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration), ``"strokeWidth"`` \| ``"stroke"``\> | with stroke and strokeWidth defined |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setStrokeStyles](/apidocs/classes/IText.md#_setstrokestyles)

#### Defined in

[src/shapes/Text/Text.ts:1306](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1306)

___

### \_setStyleDeclaration

**_setStyleDeclaration**(`lineIndex`, `charIndex`, `style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |
| `style` | `object` |

#### Returns

`void`

#### Overrides

[IText](/apidocs/classes/IText.md).[_setStyleDeclaration](/apidocs/classes/IText.md#_setstyledeclaration)

#### Defined in

[src/shapes/Textbox.ts:253](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L253)

___

### \_setTextStyles

**_setTextStyles**(`ctx`, `charStyle?`, `forMeasuring?`): `void`

Set the font parameter of the context with the object properties or with charStyle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `charStyle?` | `any` | object with font style properties |
| `forMeasuring?` | `boolean` | - |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setTextStyles](/apidocs/classes/IText.md#_settextstyles)

#### Defined in

[src/shapes/Text/Text.ts:635](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L635)

___

### \_setupCompositeOperation

**_setupCompositeOperation**(`ctx`): `void`

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Rendering canvas context |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_setupCompositeOperation](/apidocs/classes/IText.md#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1535](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1535)

___

### \_splitText

**_splitText**(): `TextLinesInfo`

Divides text into lines of text and lines of graphemes.

#### Returns

`TextLinesInfo`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_splitText](/apidocs/classes/IText.md#_splittext)

#### Defined in

[src/shapes/Text/Text.ts:446](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L446)

___

### \_splitTextIntoLines

**_splitTextIntoLines**(`text`): `TextLinesInfo`

Gets lines of text to render in the Textbox. This function calculates
text wrapping on the fly every time it is called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | text to split |

#### Returns

`TextLinesInfo`

Array of lines in the Textbox.

#### Overrides

[IText](/apidocs/classes/IText.md).[_splitTextIntoLines](/apidocs/classes/IText.md#_splittextintolines)

#### Defined in

[src/shapes/Textbox.ts:519](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L519)

___

### \_toSVG

**_toSVG**(`reviver?`): `string`[]

Returns svg representation of an instance
This function is implemented in each subclass
This is just because typescript otherwise cryies all the time

#### Parameters

| Name | Type |
| :------ | :------ |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

[IText](/apidocs/classes/IText.md).[_toSVG](/apidocs/classes/IText.md#_tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:120](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L120)

___

### \_updateAndFire

**_updateAndFire**(`property`, `index`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | ``"selectionStart"`` \| ``"selectionEnd"`` | 'selectionStart' or 'selectionEnd' |
| `index` | `number` | new position of property |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_updateAndFire](/apidocs/classes/IText.md#_updateandfire)

#### Defined in

[src/shapes/IText/IText.ts:267](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L267)

___

### \_updateCacheCanvas

**_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

[IText](/apidocs/classes/IText.md).[_updateCacheCanvas](/apidocs/classes/IText.md#_updatecachecanvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:164](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L164)

___

### \_updateTextarea

**_updateTextarea**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[_updateTextarea](/apidocs/classes/IText.md#_updatetextarea)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:502](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L502)

___

### \_wrapLine

**_wrapLine**(`lineIndex`, `desiredWidth`, `graphemeData`, `reservedSpace?`): `string`[][]

Wraps a line of text using the width of the Textbox as desiredWidth
and leveraging the known width o words from GraphemeData

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lineIndex` | `number` | `undefined` |  |
| `desiredWidth` | `number` | `undefined` | width you want to wrap the line to |
| `graphemeData` | [`GraphemeData`](/apidocs/modules.md#graphemedata) | `undefined` | an object containing all the lines' words width. |
| `reservedSpace` | `number` | `0` | space to remove from wrapping for custom functionalities |

#### Returns

`string`[][]

Array of line(s) into which the given text is wrapped
to.

#### Defined in

[src/shapes/Textbox.ts:414](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L414)

___

### \_wrapText

**_wrapText**(`lines`, `desiredWidth`): `string`[][]

Wraps text using the 'width' property of Textbox. First this function
splits text on newlines, so we preserve newlines entered by the user.
Then it wraps each line using the width of the Textbox by calling
_wrapLine().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lines` | `string`[] | The string array of text that is split into lines |
| `desiredWidth` | `number` | width you want to wrap to |

#### Returns

`string`[][]

Array of lines

#### Defined in

[src/shapes/Textbox.ts:310](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L310)

___

### abortCursorAnimation

**abortCursorAnimation**(): `void`

Aborts cursor animation, clears all timeouts and clear textarea context if necessary

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[abortCursorAnimation](/apidocs/classes/IText.md#abortcursoranimation)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:181](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L181)

___

### addPaintOrder

**addPaintOrder**(`this`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[addPaintOrder](/apidocs/classes/IText.md#addpaintorder)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

___

### animate

**animate**\<`T`\>(`animatable`, `options?`): `Record`\<`string`, [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>\>

Animates object's properties

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](/apidocs/modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animatable` | `Record`\<`string`, `T`\> | map of keys and end values |
| `options?` | `Partial`\<[`AnimationOptions`](/apidocs/modules/util.md#animationoptions)\<`T`\>\> |  |

#### Returns

`Record`\<`string`, [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Inherited from

[IText](/apidocs/classes/IText.md).[animate](/apidocs/classes/IText.md#animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/AnimatableObject.ts#L34)

___

### blur

**blur**(): `void`

Override this method to customize cursor behavior on textbox blur

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[blur](/apidocs/classes/IText.md#blur)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:106](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L106)

___

### calcACoords

**calcACoords**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

#### Inherited from

[IText](/apidocs/classes/IText.md).[calcACoords](/apidocs/classes/IText.md#calcacoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:491](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L491)

___

### calcOCoords

**calcOCoords**(): `Record`\<`string`, `TOCoord`\>

Calculates the coordinates of the center of each control plus the corners of the control itself
This basically just delegates to each control positionHandler
WARNING: changing what is passed to positionHandler is a breaking change, since position handler
is a public api and should be done just if extremely necessary

#### Returns

`Record`\<`string`, `TOCoord`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[calcOCoords](/apidocs/classes/IText.md#calcocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:223](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L223)

___

### calcOwnMatrix

**calcOwnMatrix**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

transform matrix for the object

#### Inherited from

[IText](/apidocs/classes/IText.md).[calcOwnMatrix](/apidocs/classes/IText.md#calcownmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:591](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L591)

___

### calcTextHeight

**calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[calcTextHeight](/apidocs/classes/IText.md#calctextheight)

#### Defined in

[src/shapes/Text/Text.ts:1034](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1034)

___

### calcTextWidth

**calcTextWidth**(): `number`

calculate and return the text Width measuring each line.

#### Returns

`number`

Maximum width of Text object

#### Inherited from

[IText](/apidocs/classes/IText.md).[calcTextWidth](/apidocs/classes/IText.md#calctextwidth)

#### Defined in

[src/shapes/Text/Text.ts:663](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L663)

___

### calcTransformMatrix

**calcTransformMatrix**(`skipGroup?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

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

[IText](/apidocs/classes/IText.md).[calcTransformMatrix](/apidocs/classes/IText.md#calctransformmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:563](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L563)

___

### canDrop

**canDrop**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drop target

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[canDrop](/apidocs/classes/IText.md#candrop)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:70](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L70)

___

### cleanStyle

**cleanStyle**(`property`): `undefined` \| ``false``

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

[IText](/apidocs/classes/IText.md).[cleanStyle](/apidocs/classes/IText.md#cleanstyle)

#### Defined in

[src/shapes/Text/StyledText.ts:102](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L102)

___

### clearContextTop

**clearContextTop**(`restoreManually?`): `undefined` \| `CanvasRenderingContext2D`

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

[IText](/apidocs/classes/IText.md).[clearContextTop](/apidocs/classes/IText.md#clearcontexttop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:582](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L582)

___

### clone

**clone**(`propertiesToInclude?`): `Promise`\<[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`\<[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[clone](/apidocs/classes/IText.md#clone)

#### Defined in

[src/shapes/Object/Object.ts:1312](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1312)

___

### cloneAsImage

**cloneAsImage**(`options?`): [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

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

[`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Object cloned as image.

**`Todo`**

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Inherited from

[IText](/apidocs/classes/IText.md).[cloneAsImage](/apidocs/classes/IText.md#cloneasimage)

#### Defined in

[src/shapes/Object/Object.ts:1338](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1338)

___

### complexity

**complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity

#### Inherited from

[IText](/apidocs/classes/IText.md).[complexity](/apidocs/classes/IText.md#complexity)

#### Defined in

[src/shapes/Text/Text.ts:1781](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1781)

___

### containsPoint

**containsPoint**(`point`, `calculate?`): `boolean`

Checks if point is inside the object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | `undefined` | Point to check against |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

[IText](/apidocs/classes/IText.md).[containsPoint](/apidocs/classes/IText.md#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:322](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L322)

___

### copy

**copy**(): `void`

Copies selected text

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[copy](/apidocs/classes/IText.md#copy)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:295](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L295)

___

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[dispose](/apidocs/classes/IText.md#dispose)

#### Defined in

[src/shapes/IText/IText.ts:689](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L689)

___

### doubleClickHandler

**doubleClickHandler**(`options`): `void`

Default handler for double click, select a word

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[doubleClickHandler](/apidocs/classes/IText.md#doubleclickhandler)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:106](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L106)

___

### drawBorders

**drawBorders**(`ctx`, `options`, `styleOverride?`): `void`

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `options` | `Required`\<`Omit`\<[`TComposeMatrixArgs`](/apidocs/modules/util.md#tcomposematrixargs), ``"flipX"`` \| ``"flipY"``\>\> | object representing current object parameters |
| `styleOverride?` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[drawBorders](/apidocs/classes/IText.md#drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:440](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L440)

___

### drawCacheOnCanvas

**drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | - |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[drawCacheOnCanvas](/apidocs/classes/IText.md#drawcacheoncanvas)

#### Defined in

[src/shapes/Object/Object.ts:962](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L962)

___

### drawClipPathOnCache

**drawClipPathOnCache**(`ctx`, `clipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> |  |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[drawClipPathOnCache](/apidocs/classes/IText.md#drawclippathoncache)

#### Defined in

[src/shapes/Object/Object.ts:891](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L891)

___

### drawControls

**drawControls**(`ctx`, `styleOverride?`): `void`

Draws corners of an object's bounding box.
Requires public properties: width, height
Requires public options: cornerSize, padding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `styleOverride` | `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | object to override the object style |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[drawControls](/apidocs/classes/IText.md#drawcontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:504](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L504)

___

### drawControlsConnectingLines

**drawControlsConnectingLines**(`ctx`, `size`): `void`

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

[IText](/apidocs/classes/IText.md).[drawControlsConnectingLines](/apidocs/classes/IText.md#drawcontrolsconnectinglines)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:474](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L474)

___

### drawObject

**drawObject**(`ctx`, `forClipping?`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `forClipping?` | `boolean` | apply clipping styles |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[drawObject](/apidocs/classes/IText.md#drawobject)

#### Defined in

[src/shapes/Object/Object.ts:923](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L923)

___

### drawSelectionBackground

**drawSelectionBackground**(`ctx`): `void`

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

[IText](/apidocs/classes/IText.md).[drawSelectionBackground](/apidocs/classes/IText.md#drawselectionbackground)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:342](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L342)

___

### enlargeSpaces

**enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[enlargeSpaces](/apidocs/classes/IText.md#enlargespaces)

#### Defined in

[src/shapes/Text/Text.ts:481](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L481)

___

### enterEditing

**enterEditing**(`e?`): `void`

Enters editing state

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[enterEditing](/apidocs/classes/IText.md#enterediting)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:378](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L378)

___

### exitEditing

**exitEditing**(): [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Exits from editing state and fires relevant events

#### Returns

[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[exitEditing](/apidocs/classes/IText.md#exitediting)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:681](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L681)

___

### findCommonAncestors

**findCommonAncestors**\<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`\<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |
| `S` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `S` | finds only ancestors that are objects (without canvas) |

#### Returns

`AncestryComparison`\<`S`\>

an object that represent the ancestry situation.

#### Inherited from

[IText](/apidocs/classes/IText.md).[findCommonAncestors](/apidocs/classes/IText.md#findcommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:99](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L99)

___

### findLineBoundaryLeft

**findLineBoundaryLeft**(`startFrom`): `number`

Find new selection index representing start of current line according to current selection index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startFrom` | `number` | Current selection index |

#### Returns

`number`

New selection index

#### Inherited from

[IText](/apidocs/classes/IText.md).[findLineBoundaryLeft](/apidocs/classes/IText.md#findlineboundaryleft)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:282](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L282)

___

### findLineBoundaryRight

**findLineBoundaryRight**(`startFrom`): `number`

Find new selection index representing end of current line according to current selection index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startFrom` | `number` | Current selection index |

#### Returns

`number`

New selection index

#### Inherited from

[IText](/apidocs/classes/IText.md).[findLineBoundaryRight](/apidocs/classes/IText.md#findlineboundaryright)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:299](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L299)

___

### findWordBoundaryLeft

**findWordBoundaryLeft**(`startFrom`): `number`

Find new selection index representing start of current word according to current selection index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startFrom` | `number` | Current selection index |

#### Returns

`number`

New selection index

#### Inherited from

[IText](/apidocs/classes/IText.md).[findWordBoundaryLeft](/apidocs/classes/IText.md#findwordboundaryleft)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:234](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L234)

___

### findWordBoundaryRight

**findWordBoundaryRight**(`startFrom`): `number`

Find new selection index representing end of current word according to current selection index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startFrom` | `number` | Current selection index |

#### Returns

`number`

New selection index

#### Inherited from

[IText](/apidocs/classes/IText.md).[findWordBoundaryRight](/apidocs/classes/IText.md#findwordboundaryright)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:258](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L258)

___

### fire

**fire**\<`K`\>(`eventName`, `options?`): `void`

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

[IText](/apidocs/classes/IText.md).[fire](/apidocs/classes/IText.md#fire)

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L159)

___

### forEachControl

**forEachControl**(`fn`): `void`

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`control`: [`Control`](/apidocs/classes/Control.md), `key`: `string`, `fabricObject`: `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>) => `any` | function to iterate over the controls over |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[forEachControl](/apidocs/classes/IText.md#foreachcontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:320](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L320)

___

### fromGraphemeToStringSelection

**fromGraphemeToStringSelection**(`start`, `end`, `graphemes`): `Object`

convert from fabric to textarea values

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `graphemes` | `string`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `selectionEnd` | `number` |
| `selectionStart` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[fromGraphemeToStringSelection](/apidocs/classes/IText.md#fromgraphemetostringselection)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:481](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L481)

___

### fromStringToGraphemeSelection

**fromStringToGraphemeSelection**(`start`, `end`, `text`): `Object`

convert from textarea to grapheme indexes

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `text` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `selectionEnd` | `number` |
| `selectionStart` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[fromStringToGraphemeSelection](/apidocs/classes/IText.md#fromstringtographemeselection)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:464](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L464)

___

### get

**get**(`property`): `any`

Basic getter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property name |

#### Returns

`any`

value of a property

#### Inherited from

[IText](/apidocs/classes/IText.md).[get](/apidocs/classes/IText.md#get)

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L59)

___

### get2DCursorLocation

**get2DCursorLocation**(`selectionStart?`, `skipWrapping?`): `Object`

Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart?` | `number` | Optional index. When not given, current selectionStart is used. |
| `skipWrapping?` | `boolean` | consider the location for unwrapped lines. useful to manage styles. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `charIndex` | `number` |
| `lineIndex` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[get2DCursorLocation](/apidocs/classes/IText.md#get2dcursorlocation)

#### Defined in

[src/shapes/IText/IText.ts:334](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L334)

___

### getActiveControl

**getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getActiveControl](/apidocs/classes/IText.md#getactivecontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:176](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L176)

___

### getAncestors

**getAncestors**\<`T`\>(`strict?`): `Ancestors`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strict?` | `T` | returns only ancestors that are objects (without canvas) |

#### Returns

`Ancestors`\<`T`\>

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[IText](/apidocs/classes/IText.md).[getAncestors](/apidocs/classes/IText.md#getancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:80](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L80)

___

### getBoundingRect

**getBoundingRect**(`calculate?`): [`TBBox`](/apidocs/modules.md#tbbox)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `calculate?` | `boolean` | use coordinates of current position instead of .lineCoords / .aCoords |

#### Returns

[`TBBox`](/apidocs/modules.md#tbbox)

Object with left, top, width, height properties

#### Inherited from

[IText](/apidocs/classes/IText.md).[getBoundingRect](/apidocs/classes/IText.md#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:405](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L405)

___

### getCanvasRetinaScaling

**getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getCanvasRetinaScaling](/apidocs/classes/IText.md#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:462](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L462)

___

### getCenterPoint

**getCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[IText](/apidocs/classes/IText.md).[getCenterPoint](/apidocs/classes/IText.md#getcenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:169](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L169)

___

### getCompleteStyleDeclaration

**getCompleteStyleDeclaration**(`lineIndex`, `charIndex`): [`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)

return a new object that contains all the style property for a character
the object returned is newly created

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | of the line where the character is |
| `charIndex` | `number` | position of the character on the line |

#### Returns

[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)

style object

#### Inherited from

[IText](/apidocs/classes/IText.md).[getCompleteStyleDeclaration](/apidocs/classes/IText.md#getcompletestyledeclaration)

#### Defined in

[src/shapes/Text/StyledText.ts:267](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L267)

___

### getCoords

**getCoords**(`calculate?`): [`Point`](/apidocs/classes/Point.md)[]

return correct set of coordinates for intersection
this will return either aCoords or lineCoords.
The coords are returned in an array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `calculate` | `boolean` | `false` | will return aCoords if true or lineCoords |

#### Returns

[`Point`](/apidocs/classes/Point.md)[]

[tl, tr, br, bl] of points

#### Inherited from

[IText](/apidocs/classes/IText.md).[getCoords](/apidocs/classes/IText.md#getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:222](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L222)

___

### getCurrentCharColor

**getCurrentCharColor**(): ``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

High level function to know the color of the cursor.
the currentChar is the one that precedes the cursor
Returns color (fill) of char at the current cursor
if the text object has a pattern or gradient for filler, it will return that.
Unused by the library, is for the end user

#### Returns

``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

Character color (fill)

#### Inherited from

[IText](/apidocs/classes/IText.md).[getCurrentCharColor](/apidocs/classes/IText.md#getcurrentcharcolor)

#### Defined in

[src/shapes/IText/IText.ts:673](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L673)

___

### getCurrentCharFontSize

**getCurrentCharFontSize**(): `number`

High level function to know the height of the cursor.
the currentChar is the one that precedes the cursor
Returns fontSize of char at the current cursor
Unused from the library, is for the end user

#### Returns

`number`

Character font size

#### Inherited from

[IText](/apidocs/classes/IText.md).[getCurrentCharFontSize](/apidocs/classes/IText.md#getcurrentcharfontsize)

#### Defined in

[src/shapes/IText/IText.ts:660](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L660)

___

### getDownCursorOffset

**getDownCursorOffset**(`e`, `isRight`): `number`

Gets start offset of a selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |
| `isRight` | `boolean` |  |

#### Returns

`number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getDownCursorOffset](/apidocs/classes/IText.md#getdowncursoroffset)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:345](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L345)

___

### getGraphemeDataForRender

**getGraphemeDataForRender**(`lines`): [`GraphemeData`](/apidocs/modules.md#graphemedata)

For each line of text terminated by an hard line stop,
measure each word width and extract the largest word from all.
The returned words here are the one that at the end will be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lines` | `string`[] | the lines we need to measure |

#### Returns

[`GraphemeData`](/apidocs/modules.md#graphemedata)

#### Defined in

[src/shapes/Textbox.ts:329](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L329)

___

### getHeightOfChar

**getHeightOfChar**(`line`, `_char`): `number`

Computes height of character at given position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | `number` | the line index number |
| `_char` | `number` | the character index number |

#### Returns

`number`

fontSize of the character

#### Inherited from

[IText](/apidocs/classes/IText.md).[getHeightOfChar](/apidocs/classes/IText.md#getheightofchar)

#### Defined in

[src/shapes/Text/Text.ts:856](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L856)

___

### getHeightOfLine

**getHeightOfLine**(`lineIndex`): `number`

Calculate height of line at 'lineIndex'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | index of line to calculate |

#### Returns

`number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getHeightOfLine](/apidocs/classes/IText.md#getheightofline)

#### Defined in

[src/shapes/Text/Text.ts:1015](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1015)

___

### getLineWidth

**getLineWidth**(`lineIndex`): `number`

Measure a single line given its index. Used to calculate the initial
text bounding box. The values are calculated and stored in __lineWidths cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | line number |

#### Returns

`number`

Line width

#### Inherited from

[IText](/apidocs/classes/IText.md).[getLineWidth](/apidocs/classes/IText.md#getlinewidth)

#### Defined in

[src/shapes/Text/Text.ts:1505](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1505)

___

### getMinWidth

**getMinWidth**(): `number`

#### Returns

`number`

#### Defined in

[src/shapes/Textbox.ts:531](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L531)

___

### getObjectOpacity

**getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getObjectOpacity](/apidocs/classes/IText.md#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:660](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L660)

___

### getObjectScaling

**getObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[IText](/apidocs/classes/IText.md).[getObjectScaling](/apidocs/classes/IText.md#getobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:629](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L629)

___

### getParent

**getParent**\<`T`\>(`strict?`): `undefined` \| `TAncestor`

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

[IText](/apidocs/classes/IText.md).[getParent](/apidocs/classes/IText.md#getparent)

#### Defined in

[src/shapes/Object/StackedObject.ts:51](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L51)

___

### getPointByOrigin

**getPointByOrigin**(`originX`, `originY`): [`Point`](/apidocs/classes/Point.md)

Returns the coordinates of the object as if it has a different origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[IText](/apidocs/classes/IText.md).[getPointByOrigin](/apidocs/classes/IText.md#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:194](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L194)

___

### getRelativeCenterPoint

**getRelativeCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[IText](/apidocs/classes/IText.md).[getRelativeCenterPoint](/apidocs/classes/IText.md#getrelativecenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:180](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L180)

___

### getRelativeX

**getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/apidocs/classes/FabricObject.md#getx)

#### Inherited from

[IText](/apidocs/classes/IText.md).[getRelativeX](/apidocs/classes/IText.md#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:118](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L118)

___

### getRelativeXY

**getRelativeXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x,y position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

[IText](/apidocs/classes/IText.md).[getRelativeXY](/apidocs/classes/IText.md#getrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:179](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L179)

___

### getRelativeY

**getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/apidocs/classes/FabricObject.md#gety)

#### Inherited from

[IText](/apidocs/classes/IText.md).[getRelativeY](/apidocs/classes/IText.md#getrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:134](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L134)

___

### getScaledHeight

**getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

**`Todo`**

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[IText](/apidocs/classes/IText.md).[getScaledHeight](/apidocs/classes/IText.md#getscaledheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:423](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L423)

___

### getScaledWidth

**getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

**`Todo`**

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[IText](/apidocs/classes/IText.md).[getScaledWidth](/apidocs/classes/IText.md#getscaledwidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:414](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L414)

___

### getSelectedText

**getSelectedText**(): `string`

Returns selected text

#### Returns

`string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getSelectedText](/apidocs/classes/IText.md#getselectedtext)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:225](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L225)

___

### getSelectionStartFromPointer

**getSelectionStartFromPointer**(`e`): `number`

Returns index of a character corresponding to where an object was clicked

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object |

#### Returns

`number`

Index of a character

#### Inherited from

[IText](/apidocs/classes/IText.md).[getSelectionStartFromPointer](/apidocs/classes/IText.md#getselectionstartfrompointer)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:241](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L241)

___

### getSelectionStyles

**getSelectionStyles**(`startIndex?`, `endIndex?`, `complete?`): `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>[]

Gets style of a current selection/cursor (at the start position)
if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | Start index to get styles at |
| `endIndex` | `number` | End index to get styles at, if not specified selectionEnd or startIndex + 1 |
| `complete?` | `boolean` | get full style or not |

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>[]

styles an array with one, zero or more Style objects

#### Inherited from

[IText](/apidocs/classes/IText.md).[getSelectionStyles](/apidocs/classes/IText.md#getselectionstyles)

#### Defined in

[src/shapes/IText/IText.ts:307](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L307)

___

### getStyleAtPosition

**getStyleAtPosition**(`position`, `complete?`): `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>

Gets style of a current selection/cursor position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | to get styles at |
| `complete?` | `boolean` | full style if true |

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>

style Style object at a specified index

#### Inherited from

[IText](/apidocs/classes/IText.md).[getStyleAtPosition](/apidocs/classes/IText.md#getstyleatposition)

#### Defined in

[src/shapes/Text/StyledText.ts:224](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L224)

___

### getSvgCommons

**getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> & \{ `id?`: `string`  } |

#### Returns

`string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getSvgCommons](/apidocs/classes/IText.md#getsvgcommons)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

___

### getSvgFilter

**getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getSvgFilter](/apidocs/classes/IText.md#getsvgfilter)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

___

### getSvgStyles

**getSvgStyles**(`this`, `skipShadow?`): `string`

Returns styles-string for svg-export

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `skipShadow?` | `boolean` | a boolean to skip shadow filter output |

#### Returns

`string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getSvgStyles](/apidocs/classes/IText.md#getsvgstyles)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:21](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L21)

___

### getSvgTransform

**getSvgTransform**(`this`, `full?`, `additionalTransform?`): `string`

Returns transform-string for svg-export

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` |
| `full?` | `boolean` | `undefined` |
| `additionalTransform` | `string` | `''` |

#### Returns

`string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getSvgTransform](/apidocs/classes/IText.md#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

**getTotalAngle**(): [`TDegree`](/apidocs/modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[IText](/apidocs/classes/IText.md).[getTotalAngle](/apidocs/classes/IText.md#gettotalangle)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:470](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L470)

___

### getTotalObjectScaling

**getTotalObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/apidocs/classes/Point.md)

object with scaleX and scaleY properties

#### Inherited from

[IText](/apidocs/classes/IText.md).[getTotalObjectScaling](/apidocs/classes/IText.md#gettotalobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:646](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L646)

___

### getUpCursorOffset

**getUpCursorOffset**(`e`, `isRight`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |
| `isRight` | `boolean` |  |

#### Returns

`number`

#### Inherited from

[IText](/apidocs/classes/IText.md).[getUpCursorOffset](/apidocs/classes/IText.md#getupcursoroffset)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:390](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L390)

___

### getValueOfPropertyAt

**getValueOfPropertyAt**\<`T`\>(`lineIndex`, `charIndex`, `property`): [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>[`T`]

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

[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>[`T`]

the value of 'property'

#### Inherited from

[IText](/apidocs/classes/IText.md).[getValueOfPropertyAt](/apidocs/classes/IText.md#getvalueofpropertyat)

#### Defined in

[src/shapes/Text/Text.ts:1529](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1529)

___

### getViewportTransform

**getViewportTransform**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

Retrieves viewportTransform from Object's canvas if possible

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

**`Method`**

getViewportTransform

**`Member Of`**

FabricObject.prototype

#### Inherited from

[IText](/apidocs/classes/IText.md).[getViewportTransform](/apidocs/classes/IText.md#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:482](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L482)

___

### getX

**getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

[IText](/apidocs/classes/IText.md).[getX](/apidocs/classes/IText.md#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L89)

___

### getXY

**getXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

[IText](/apidocs/classes/IText.md).[getXY](/apidocs/classes/IText.md#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:149](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L149)

___

### getY

**getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

[IText](/apidocs/classes/IText.md).[getY](/apidocs/classes/IText.md#gety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:103](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L103)

___

### graphemeSplit

**graphemeSplit**(`value`): `string`[]

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

#### Inherited from

[IText](/apidocs/classes/IText.md).[graphemeSplit](/apidocs/classes/IText.md#graphemesplit)

#### Defined in

[src/shapes/Text/Text.ts:1707](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1707)

___

### handleFiller

**handleFiller**\<`T`\>(`ctx`, `property`, `filler`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"fill"`` \| ``"stroke"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `property` | \`$\{T}Style\` |
| `filler` | `string` \| [`TFiller`](/apidocs/modules.md#tfiller) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

[IText](/apidocs/classes/IText.md).[handleFiller](/apidocs/classes/IText.md#handlefiller)

#### Defined in

[src/shapes/Text/Text.ts:1266](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1266)

___

### hasCommonAncestors

**hasCommonAncestors**\<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[hasCommonAncestors](/apidocs/classes/IText.md#hascommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:168](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L168)

___

### hasFill

**hasFill**(): ``null`` \| `boolean` \| ``""``

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

[IText](/apidocs/classes/IText.md).[hasFill](/apidocs/classes/IText.md#hasfill)

#### Defined in

[src/shapes/Object/Object.ts:831](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L831)

___

### hasStroke

**hasStroke**(): ``null`` \| `boolean` \| ``""``

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

[IText](/apidocs/classes/IText.md).[hasStroke](/apidocs/classes/IText.md#hasstroke)

#### Defined in

[src/shapes/Object/Object.ts:815](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L815)

___

### initBehavior

**initBehavior**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[initBehavior](/apidocs/classes/IText.md#initbehavior)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:34](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L34)

___

### initDelayedCursor

**initDelayedCursor**(`restart?`): `void`

Initializes delayed cursor

#### Parameters

| Name | Type |
| :------ | :------ |
| `restart?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[initDelayedCursor](/apidocs/classes/IText.md#initdelayedcursor)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:173](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L173)

___

### initDimensions

**initDimensions**(): `void`

Unlike superclass's version of this function, Textbox does not update
its width.

#### Returns

`void`

#### Overrides

[IText](/apidocs/classes/IText.md).[initDimensions](/apidocs/classes/IText.md#initdimensions)

#### Defined in

[src/shapes/Textbox.ts:111](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L111)

___

### initHiddenTextarea

**initHiddenTextarea**(): `void`

Initializes hidden textarea (needed to bring up keyboard in iOS)

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[initHiddenTextarea](/apidocs/classes/IText.md#inithiddentextarea)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:63](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L63)

___

### insertCharStyleObject

**insertCharStyleObject**(`lineIndex`, `charIndex`, `quantity`, `copiedStyle?`): `void`

Inserts style object for a given line/char index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | Index of a line |
| `charIndex` | `number` | Index of a char |
| `quantity` | `number` | number Style object to insert, if given |
| `copiedStyle?` | `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>[] | array of style objects |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[insertCharStyleObject](/apidocs/classes/IText.md#insertcharstyleobject)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:867](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L867)

___

### insertChars

**insertChars**(`text`, `style`, `start`, `end?`): `void`

insert characters at start position, before start position.
start  equal 1 it means the text get inserted between actual grapheme 0 and 1
if style array is provided, it must be as the same length of text in graphemes
if end is provided and is bigger than start, old text is replaced.
start/end ar per grapheme position in _text array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | text to insert |
| `style` | `undefined` \| `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>[] | `undefined` | array of style objects |
| `start` | `number` | `undefined` |  |
| `end` | `number` | `start` | default to start + 1 |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[insertChars](/apidocs/classes/IText.md#insertchars)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1017](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L1017)

___

### insertNewStyleBlock

**insertNewStyleBlock**(`insertedText`, `start`, `copiedStyle?`): `void`

Inserts style object(s)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `insertedText` | `string`[] | Characters at the location where style is inserted |
| `start` | `number` | cursor index for inserting style |
| `copiedStyle?` | `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>[] | array of style objects to insert. |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[insertNewStyleBlock](/apidocs/classes/IText.md#insertnewstyleblock)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:925](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L925)

___

### insertNewlineStyleObject

**insertNewlineStyleObject**(`lineIndex`, `charIndex`, `qty`, `copiedStyle?`): `void`

Handle insertion of more consecutive style lines for when one or more
newlines gets added to the text. Since current style needs to be shifted
first we shift the current style of the number lines needed, then we add
new lines from the last to the first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | Index of a line |
| `charIndex` | `number` | Index of a char |
| `qty` | `number` | number of lines to add |
| `copiedStyle?` | `Object` | Array of objects styles |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[insertNewlineStyleObject](/apidocs/classes/IText.md#insertnewlinestyleobject)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:801](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L801)

___

### intersectsWithObject

**intersectsWithObject**(`other`, `calculate?`): `boolean`

Checks if object intersects with another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of calculating them |

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[IText](/apidocs/classes/IText.md).[intersectsWithObject](/apidocs/classes/IText.md#intersectswithobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:260](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L260)

___

### intersectsWithRect

**intersectsWithRect**(`pointTL`, `pointBR`, `calculate?`): `boolean`

Checks if object intersects with an area formed by 2 points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](/apidocs/classes/Point.md) | top-left point of area |
| `pointBR` | [`Point`](/apidocs/classes/Point.md) | bottom-right point of area |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object intersects with an area formed by 2 points

#### Inherited from

[IText](/apidocs/classes/IText.md).[intersectsWithRect](/apidocs/classes/IText.md#intersectswithrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:239](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L239)

___

### isCacheDirty

**isCacheDirty**(`skipCanvas?`): `boolean`

Check if cache is dirty

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `skipCanvas` | `boolean` | `false` | skip canvas checks because this object is painted on parent canvas. |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[isCacheDirty](/apidocs/classes/IText.md#iscachedirty)

#### Defined in

[src/shapes/Object/Object.ts:976](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L976)

___

### isContainedWithinObject

**isContainedWithinObject**(`other`, `calculate?`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[IText](/apidocs/classes/IText.md).[isContainedWithinObject](/apidocs/classes/IText.md#iscontainedwithinobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:281](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L281)

___

### isContainedWithinRect

**isContainedWithinRect**(`pointTL`, `pointBR`, `calculate?`): `boolean`

Checks if object is fully contained within area formed by 2 points, aligned with scene axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](/apidocs/classes/Point.md) | top-left point of area |
| `pointBR` | [`Point`](/apidocs/classes/Point.md) | bottom-right point of area |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object is fully contained within area formed by 2 points

#### Inherited from

[IText](/apidocs/classes/IText.md).[isContainedWithinRect](/apidocs/classes/IText.md#iscontainedwithinrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:294](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L294)

___

### isControlVisible

**isControlVisible**(`controlKey`): `boolean`

Returns true if the specified control is visible, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlKey` | `string` | The key of the control. Possible values are usually 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr', but since the control api allow for any control name, can be any string. |

#### Returns

`boolean`

true if the specified control is visible, false otherwise

#### Inherited from

[IText](/apidocs/classes/IText.md).[isControlVisible](/apidocs/classes/IText.md#iscontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:539](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L539)

___

### isDescendantOf

**isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [Group.contains](/apidocs/classes/StaticCanvas.md#contains) or [StaticCanvas.contains](/apidocs/classes/StaticCanvas.md#contains) for performance reasons

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TAncestor` |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[isDescendantOf](/apidocs/classes/IText.md#isdescendantof)

#### Defined in

[src/shapes/Object/StackedObject.ts:64](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L64)

___

### isEmptyStyles

**isEmptyStyles**(`lineIndex`): `boolean`

Returns true if object has no styling or no styling in a line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | , lineIndex is on wrapped lines. |

#### Returns

`boolean`

#### Overrides

[IText](/apidocs/classes/IText.md).[isEmptyStyles](/apidocs/classes/IText.md#isemptystyles)

#### Defined in

[src/shapes/Textbox.ts:190](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L190)

___

### isEndOfWrapping

**isEndOfWrapping**(`lineIndex`): `boolean`

Detect if the text line is ended with an hard break
text and itext do not have wrapping, return false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | text to split |

#### Returns

`boolean`

#### Overrides

[IText](/apidocs/classes/IText.md).[isEndOfWrapping](/apidocs/classes/IText.md#isendofwrapping)

#### Defined in

[src/shapes/Textbox.ts:486](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L486)

___

### isInFrontOf

**isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[IText](/apidocs/classes/IText.md).[isInFrontOf](/apidocs/classes/IText.md#isinfrontof)

#### Defined in

[src/shapes/Object/StackedObject.ts:178](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L178)

___

### isNotVisible

**isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[isNotVisible](/apidocs/classes/IText.md#isnotvisible)

#### Defined in

[src/shapes/Object/Object.ts:738](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L738)

___

### isOnScreen

**isOnScreen**(`calculate?`): `boolean`

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

[IText](/apidocs/classes/IText.md).[isOnScreen](/apidocs/classes/IText.md#isonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:332](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L332)

___

### isOverlapping

**isOverlapping**\<`T`\>(`other`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[isOverlapping](/apidocs/classes/IText.md#isoverlapping)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:308](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L308)

___

### isPartiallyOnScreen

**isPartiallyOnScreen**(`calculate?`): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `calculate?` | `boolean` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[IText](/apidocs/classes/IText.md).[isPartiallyOnScreen](/apidocs/classes/IText.md#ispartiallyonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L381)

___

### isTripleClick

**isTripleClick**(`newPointer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newPointer` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[isTripleClick](/apidocs/classes/IText.md#istripleclick)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:94](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L94)

___

### isType

**isType**(`...types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `...types` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[isType](/apidocs/classes/IText.md#istype)

#### Defined in

[src/shapes/Object/Object.ts:1466](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1466)

___

### measureLine

**measureLine**(`lineIndex`): `Object`

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

#### Inherited from

[IText](/apidocs/classes/IText.md).[measureLine](/apidocs/classes/IText.md#measureline)

#### Defined in

[src/shapes/Text/Text.ts:864](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L864)

___

### missingNewlineOffset

**missingNewlineOffset**(`lineIndex`, `skipWrapping?`): ``0`` \| ``1``

Detect if a line has a linebreak and so we need to account for it when moving
and counting style.
This is important only for splitByGrapheme at the end of wrapping.
If we are not wrapping the offset is always 1

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `skipWrapping?` | `boolean` |

#### Returns

``0`` \| ``1``

Number

#### Overrides

[IText](/apidocs/classes/IText.md).[missingNewlineOffset](/apidocs/classes/IText.md#missingnewlineoffset)

#### Defined in

[src/shapes/Textbox.ts:505](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L505)

___

### mouseUpHandler

**mouseUpHandler**(`«destructured»`): `void`

standard handler for mouse up, overridable

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[mouseUpHandler](/apidocs/classes/IText.md#mouseuphandler)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:179](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L179)

___

### moveCursorDown

**moveCursorDown**(`e`): `void`

Moves cursor down

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorDown](/apidocs/classes/IText.md#movecursordown)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:451](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L451)

___

### moveCursorLeft

**moveCursorLeft**(`e`): `void`

Moves cursor left

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorLeft](/apidocs/classes/IText.md#movecursorleft)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:535](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L535)

___

### moveCursorLeftWithShift

**moveCursorLeftWithShift**(`e`): `undefined` \| `boolean`

Moves cursor left while keeping selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorLeftWithShift](/apidocs/classes/IText.md#movecursorleftwithshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:607](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L607)

___

### moveCursorLeftWithoutShift

**moveCursorLeftWithoutShift**(`e`): `boolean`

Moves cursor left without keeping selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorLeftWithoutShift](/apidocs/classes/IText.md#movecursorleftwithoutshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:587](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L587)

___

### moveCursorRight

**moveCursorRight**(`e`): `void`

Moves cursor right

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorRight](/apidocs/classes/IText.md#movecursorright)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:623](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L623)

___

### moveCursorRightWithShift

**moveCursorRightWithShift**(`e`): `undefined` \| `boolean`

Moves cursor right while keeping selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorRightWithShift](/apidocs/classes/IText.md#movecursorrightwithshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:655](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L655)

___

### moveCursorRightWithoutShift

**moveCursorRightWithoutShift**(`e`): `boolean`

Moves cursor right without keeping selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorRightWithoutShift](/apidocs/classes/IText.md#movecursorrightwithoutshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:671](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L671)

___

### moveCursorUp

**moveCursorUp**(`e`): `void`

Moves cursor up

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorUp](/apidocs/classes/IText.md#movecursorup)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:465](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L465)

___

### moveCursorWithShift

**moveCursorWithShift**(`offset`): `boolean`

Moves cursor with shift

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorWithShift](/apidocs/classes/IText.md#movecursorwithshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:503](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L503)

___

### moveCursorWithoutShift

**moveCursorWithoutShift**(`offset`): `boolean`

Moves cursor up without shift

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[moveCursorWithoutShift](/apidocs/classes/IText.md#movecursorwithoutshift)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:520](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L520)

___

### needsItsOwnCache

**needsItsOwnCache**(): `boolean`

When set to `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Inherited from

[IText](/apidocs/classes/IText.md).[needsItsOwnCache](/apidocs/classes/IText.md#needsitsowncache)

#### Defined in

[src/shapes/Object/Object.ts:843](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L843)

___

### off

**off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[off](/apidocs/classes/IText.md#off)

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L120)

**off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`\<`EventSpec`\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[off](/apidocs/classes/IText.md#off)

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L125)

**off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[off](/apidocs/classes/IText.md#off)

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L129)

___

### on

**on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

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
| `handler` | `TEventCallback`\<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

on

#### Inherited from

[IText](/apidocs/classes/IText.md).[on](/apidocs/classes/IText.md#on)

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L23)

**on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

[IText](/apidocs/classes/IText.md).[on](/apidocs/classes/IText.md#on)

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L27)

___

### onCompositionEnd

**onCompositionEnd**(): `void`

Composition end

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[onCompositionEnd](/apidocs/classes/IText.md#oncompositionend)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:281](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L281)

___

### onCompositionStart

**onCompositionStart**(): `void`

Composition start

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[onCompositionStart](/apidocs/classes/IText.md#oncompositionstart)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:274](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L274)

___

### onCompositionUpdate

**onCompositionUpdate**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `CompositionEvent` |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[onCompositionUpdate](/apidocs/classes/IText.md#oncompositionupdate)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:285](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L285)

___

### onDeselect

**onDeselect**(`options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.e?` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `options.object?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[onDeselect](/apidocs/classes/IText.md#ondeselect)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:111](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L111)

___

### onDragStart

**onDragStart**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drag source,

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`boolean`

should handle event

**`See`**

also DraggableTextDelegate#isActive

#### Inherited from

[IText](/apidocs/classes/IText.md).[onDragStart](/apidocs/classes/IText.md#ondragstart)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:63](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L63)

___

### onInput

**onInput**(`this`, `e`): `void`

Handles onInput event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\> & \{ `hiddenTextarea`: `HTMLTextAreaElement`  } | - |
| `e` | `Event` | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[onInput](/apidocs/classes/IText.md#oninput)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:167](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L167)

___

### onKeyDown

**onKeyDown**(`e`): `void`

Handles keydown event
only used for arrows and combination of modifier keys.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[onKeyDown](/apidocs/classes/IText.md#onkeydown)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:115](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L115)

___

### onKeyUp

**onKeyUp**(`e`): `void`

Handles keyup event
We handle KeyUp because ie11 and edge have difficulties copy/pasting
if a copy/cut event fired, keyup is dismissed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[onKeyUp](/apidocs/classes/IText.md#onkeyup)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:147](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L147)

___

### onMouseDown

**onMouseDown**(`options`): `void`

Default event handler to simulate triple click

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[onMouseDown](/apidocs/classes/IText.md#onmousedown)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:78](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L78)

___

### onSelect

**onSelect**(`options?`): `boolean`

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

[IText](/apidocs/classes/IText.md).[onSelect](/apidocs/classes/IText.md#onselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:627](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L627)

___

### once

**once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

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
| `handler` | `TEventCallback`\<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

once

#### Inherited from

[IText](/apidocs/classes/IText.md).[once](/apidocs/classes/IText.md#once)

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L62)

**once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

[IText](/apidocs/classes/IText.md).[once](/apidocs/classes/IText.md#once)

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L66)

___

### paste

**paste**(): `void`

Pastes text

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[paste](/apidocs/classes/IText.md#paste)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:317](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextKeyBehavior.ts#L317)

___

### removeChars

**removeChars**(`start`, `end?`): `void`

Removes characters from start/end
start/end ar per grapheme position in _text array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` |  |
| `end` | `number` | default to start + 1 |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[removeChars](/apidocs/classes/IText.md#removechars)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:995](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L995)

___

### removeStyle

**removeStyle**(`property`): `void`

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

[IText](/apidocs/classes/IText.md).[removeStyle](/apidocs/classes/IText.md#removestyle)

#### Defined in

[src/shapes/Text/StyledText.ts:164](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L164)

___

### removeStyleFromTo

**removeStyleFromTo**(`start`, `end`): `void`

remove and reflow a style block from start to end.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | linear start position for removal (included in removal) |
| `end` | `number` | linear end position for removal ( excluded from removal ) |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[removeStyleFromTo](/apidocs/classes/IText.md#removestylefromto)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:716](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L716)

___

### render

**render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[render](/apidocs/classes/IText.md#render)

#### Defined in

[src/shapes/IText/IText.ts:345](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L345)

___

### renderCache

**renderCache**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[renderCache](/apidocs/classes/IText.md#rendercache)

#### Defined in

[src/shapes/Object/Object.ts:784](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L784)

___

### renderCursor

**renderCursor**(`ctx`, `boundaries`): `void`

Renders cursor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | transformed context to draw on |
| `boundaries` | `CursorBoundaries` |  |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[renderCursor](/apidocs/classes/IText.md#rendercursor)

#### Defined in

[src/shapes/IText/IText.ts:489](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L489)

___

### renderCursorAt

**renderCursorAt**(`selectionStart`): `void`

Renders cursor on context Top, outside the animation cycle, on request
Used for the drag/drop effect.
If contextTop is not available, do nothing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectionStart` | `number` |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[renderCursorAt](/apidocs/classes/IText.md#rendercursorat)

#### Defined in

[src/shapes/IText/IText.ts:479](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L479)

___

### renderCursorOrSelection

**renderCursorOrSelection**(): `void`

Renders cursor or selection (depending on what exists)
it does on the contextTop. If contextTop is not available, do nothing.

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[renderCursorOrSelection](/apidocs/classes/IText.md#rendercursororselection)

#### Defined in

[src/shapes/IText/IText.ts:369](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L369)

___

### renderDragSourceEffect

**renderDragSourceEffect**(): `void`

Renders drag start text selection

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[renderDragSourceEffect](/apidocs/classes/IText.md#renderdragsourceeffect)

#### Defined in

[src/shapes/IText/IText.ts:549](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L549)

___

### renderDropTargetEffect

**renderDropTargetEffect**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[renderDropTargetEffect](/apidocs/classes/IText.md#renderdroptargeteffect)

#### Defined in

[src/shapes/IText/IText.ts:559](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L559)

___

### renderSelection

**renderSelection**(`ctx`, `boundaries`): `void`

Renders text selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | transformed context to draw on |
| `boundaries` | `CursorBoundaries` | Object with left/top/leftOffset/topOffset |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[renderSelection](/apidocs/classes/IText.md#renderselection)

#### Defined in

[src/shapes/IText/IText.ts:534](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L534)

___

### restartCursorIfNeeded

**restartCursorIfNeeded**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[restartCursorIfNeeded](/apidocs/classes/IText.md#restartcursorifneeded)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:200](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L200)

___

### rotate

**rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | [`TDegree`](/apidocs/modules.md#tdegree) | Angle value (in degrees) |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[rotate](/apidocs/classes/IText.md#rotate)

#### Defined in

[src/shapes/Object/Object.ts:1494](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1494)

___

### scale

**scale**(`value`): `void`

Scales an object (equally by x and y)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Scale factor |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[scale](/apidocs/classes/IText.md#scale)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:432](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L432)

___

### scaleToHeight

**scaleToHeight**(`value`): `void`

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | New height value |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[scaleToHeight](/apidocs/classes/IText.md#scaletoheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:455](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L455)

___

### scaleToWidth

**scaleToWidth**(`value`): `void`

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | New width value |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[scaleToWidth](/apidocs/classes/IText.md#scaletowidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:443](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L443)

___

### searchWordBoundary

**searchWordBoundary**(`selectionStart`, `direction`): `number`

Finds index corresponding to beginning or end of a word

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart` | `number` | Index of a character |
| `direction` | ``1`` \| ``-1`` | 1 or -1 |

#### Returns

`number`

Index of the beginning or end of a word

#### Inherited from

[IText](/apidocs/classes/IText.md).[searchWordBoundary](/apidocs/classes/IText.md#searchwordboundary)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:317](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L317)

___

### selectAll

**selectAll**(): [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Selects entire text

#### Returns

[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[selectAll](/apidocs/classes/IText.md#selectall)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:213](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L213)

___

### selectLine

**selectLine**(`selectionStart`): [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Selects a line based on the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart` | `number` | Index of a character |

#### Returns

[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[selectLine](/apidocs/classes/IText.md#selectline)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:363](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L363)

___

### selectWord

**selectWord**(`selectionStart`): `void`

Selects a word based on the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart` | `number` | Index of a character |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[selectWord](/apidocs/classes/IText.md#selectword)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:342](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L342)

___

### set

**set**(`key`, `value?`): [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

#### Returns

[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[set](/apidocs/classes/IText.md#set)

#### Defined in

[src/shapes/Text/Text.ts:1750](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1750)

___

### setControlVisible

**setControlVisible**(`controlKey`, `visible`): `void`

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

[IText](/apidocs/classes/IText.md).[setControlVisible](/apidocs/classes/IText.md#setcontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:554](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L554)

___

### setControlsVisibility

**setControlsVisibility**(`options?`): `void`

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`\<`string`, `boolean`\> | with an optional key per control example: {Boolean} [options.bl] true to enable the bottom-left control, false to disable it |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setControlsVisibility](/apidocs/classes/IText.md#setcontrolsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:566](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L566)

___

### setCoords

**setCoords**(): `void`

Sets corner and controls position coordinates based on current angle, width and height, left and top.
oCoords are used to find the corners
aCoords are used to quickly find an object on the canvas
lineCoords are used to quickly find object during pointer events.
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setCoords](/apidocs/classes/IText.md#setcoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:309](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L309)

___

### setCursorByClick

**setCursorByClick**(`e`): `void`

Changes cursor location in a text depending on passed pointer (x/y) object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | Event object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setCursorByClick](/apidocs/classes/IText.md#setcursorbyclick)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:220](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L220)

___

### setOnGroup

**setOnGroup**(): `void`

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setOnGroup](/apidocs/classes/IText.md#setongroup)

#### Defined in

[src/shapes/Object/Object.ts:1526](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1526)

___

### setOptions

**setOptions**(`options?`): `void`

Sets object's properties from options, for class constructor only.
Needs to be overridden for different defaults.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`\<`string`, `any`\> | Options object |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setOptions](/apidocs/classes/IText.md#setoptions)

#### Defined in

[src/shapes/Object/Object.ts:495](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L495)

___

### setPathInfo

**setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setPathInfo](/apidocs/classes/IText.md#setpathinfo)

#### Defined in

[src/shapes/Text/Text.ts:435](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L435)

___

### setPositionByOrigin

**setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

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

[IText](/apidocs/classes/IText.md).[setPositionByOrigin](/apidocs/classes/IText.md#setpositionbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:209](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L209)

___

### setRelativeX

**setRelativeX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\ if parent is canvas then this method is identical to [setX](/apidocs/classes/FabricObject.md#setx) |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setRelativeX](/apidocs/classes/IText.md#setrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:126](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L126)

___

### setRelativeXY

**setRelativeXY**(`point`, `originX?`, `originY?`): `void`

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

[IText](/apidocs/classes/IText.md).[setRelativeXY](/apidocs/classes/IText.md#setrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:189](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L189)

___

### setRelativeY

**setRelativeY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\ if parent is canvas then this property is identical to [setY](/apidocs/classes/FabricObject.md#sety) |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setRelativeY](/apidocs/classes/IText.md#setrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:142](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L142)

___

### setSelectionEnd

**setSelectionEnd**(`index`): `void`

Sets selection end (right boundary of a selection)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index to set selection end to |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setSelectionEnd](/apidocs/classes/IText.md#setselectionend)

#### Defined in

[src/shapes/IText/IText.ts:257](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L257)

___

### setSelectionStart

**setSelectionStart**(`index`): `void`

Sets selection start (left boundary of a selection)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index to set selection start to |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setSelectionStart](/apidocs/classes/IText.md#setselectionstart)

#### Defined in

[src/shapes/IText/IText.ts:248](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L248)

___

### setSelectionStartEndWithShift

**setSelectionStartEndWithShift**(`start`, `end`, `newSelection`): `void`

Set the selectionStart and selectionEnd according to the new position of cursor
mimic the key - mouse navigation when shift is pressed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `newSelection` | `number` |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setSelectionStartEndWithShift](/apidocs/classes/IText.md#setselectionstartendwithshift)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1044](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L1044)

___

### setSelectionStyles

**setSelectionStyles**(`styles?`, `startIndex?`, `endIndex?`): `void`

Sets style of a current selection, if no selection exist, do not set anything.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `styles?` | `object` | Styles object |
| `startIndex?` | `number` | Start index to get styles at |
| `endIndex?` | `number` | End index to get styles at, if not specified selectionEnd or startIndex + 1 |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setSelectionStyles](/apidocs/classes/IText.md#setselectionstyles)

#### Defined in

[src/shapes/IText/IText.ts:321](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L321)

___

### setSubscript

**setSubscript**(`start`, `end`): `void`

Turns the character into an 'inferior figure' (i.e. 'subscript')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | selection start |
| `end` | `number` | selection end |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setSubscript](/apidocs/classes/IText.md#setsubscript)

#### Defined in

[src/shapes/Text/Text.ts:1407](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1407)

___

### setSuperscript

**setSuperscript**(`start`, `end`): `void`

Turns the character into a 'superior figure' (i.e. 'superscript')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | selection start |
| `end` | `number` | selection end |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setSuperscript](/apidocs/classes/IText.md#setsuperscript)

#### Defined in

[src/shapes/Text/Text.ts:1398](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1398)

___

### setX

**setX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setX](/apidocs/classes/IText.md#setx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:96](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L96)

___

### setXY

**setXY**(`point`, `originX?`, `originY?`): `void`

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

[IText](/apidocs/classes/IText.md).[setXY](/apidocs/classes/IText.md#setxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:166](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L166)

___

### setY

**setY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[setY](/apidocs/classes/IText.md#sety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:110](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L110)

___

### shiftLineStyles

**shiftLineStyles**(`lineIndex`, `offset`): `void`

Shifts line styles up or down

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | Index of a line |
| `offset` | `number` | Can any number? |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[shiftLineStyles](/apidocs/classes/IText.md#shiftlinestyles)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:778](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L778)

___

### shouldCache

**shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[shouldCache](/apidocs/classes/IText.md#shouldcache)

#### Defined in

[src/shapes/Object/Object.ts:867](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L867)

___

### shouldStartDragging

**shouldStartDragging**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[IText](/apidocs/classes/IText.md).[shouldStartDragging](/apidocs/classes/IText.md#shouldstartdragging)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:55](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L55)

___

### strokeBorders

**strokeBorders**(`ctx`, `size`): `void`

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | ctx is rotated and translated so that (0,0) is at object's center |
| `size` | [`Point`](/apidocs/classes/Point.md) | the control box size used |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[strokeBorders](/apidocs/classes/IText.md#strokeborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:366](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L366)

___

### styleHas

**styleHas**(`property`, `lineIndex`): `boolean`

Returns true if object has a style property or has it on a specified line

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `StylePropertiesType` |
| `lineIndex` | `number` |

#### Returns

`boolean`

#### Overrides

[IText](/apidocs/classes/IText.md).[styleHas](/apidocs/classes/IText.md#stylehas)

#### Defined in

[src/shapes/Textbox.ts:175](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L175)

___

### toCanvasElement

**toCanvasElement**(`options?`): `HTMLCanvasElement`

block cursor/selection logic while rendering the exported canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`HTMLCanvasElement`

**`Todo`**

this workaround should be replaced with a more robust solution

#### Inherited from

[IText](/apidocs/classes/IText.md).[toCanvasElement](/apidocs/classes/IText.md#tocanvaselement)

#### Defined in

[src/shapes/IText/IText.ts:357](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/IText.ts#L357)

___

### toClipPathSVG

**toClipPathSVG**(`this`, `reviver?`): `string`

Returns svg clipPath representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[IText](/apidocs/classes/IText.md).[toClipPathSVG](/apidocs/classes/IText.md#toclippathsvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:143](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L143)

___

### toDataURL

**toDataURL**(`options?`): `string`

Converts an object into a data-url-like string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | Options object |

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

[IText](/apidocs/classes/IText.md).[toDataURL](/apidocs/classes/IText.md#todataurl)

#### Defined in

[src/shapes/Object/Object.ts:1453](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1453)

___

### toDatalessObject

**toDatalessObject**(`propertiesToInclude?`): `any`

Returns (dataless) object representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `any`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

Object representation of an instance

#### Inherited from

[IText](/apidocs/classes/IText.md).[toDatalessObject](/apidocs/classes/IText.md#todatalessobject)

#### Defined in

[src/shapes/Object/Object.ts:581](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L581)

___

### toJSON

**toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[IText](/apidocs/classes/IText.md).[toJSON](/apidocs/classes/IText.md#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1485](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1485)

___

### toObject

**toObject**\<`T`, `K`\>(`propertiesToInclude?`): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`\<`Props` & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

object representation of an instance

**`Method`**

toObject

#### Overrides

[IText](/apidocs/classes/IText.md).[toObject](/apidocs/classes/IText.md#toobject)

#### Defined in

[src/shapes/Textbox.ts:558](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L558)

___

### toSVG

**toSVG**(`this`, `reviver?`): `string`

Returns svg representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[IText](/apidocs/classes/IText.md).[toSVG](/apidocs/classes/IText.md#tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

**toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Inherited from

[IText](/apidocs/classes/IText.md).[toString](/apidocs/classes/IText.md#tostring)

#### Defined in

[src/shapes/Text/Text.ts:571](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L571)

___

### toggle

**toggle**(`property`): [`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`Textbox`](/apidocs/classes/Textbox.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[toggle](/apidocs/classes/IText.md#toggle)

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L46)

___

### transform

**transform**(`ctx`): `void`

Transforms context when rendering an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[transform](/apidocs/classes/IText.md#transform)

#### Defined in

[src/shapes/Object/Object.ts:503](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L503)

___

### transformMatrixKey

**transformMatrixKey**(`skipGroup?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skipGroup` | `boolean` | `false` |

#### Returns

`string`

#### Inherited from

[IText](/apidocs/classes/IText.md).[transformMatrixKey](/apidocs/classes/IText.md#transformmatrixkey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:520](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L520)

___

### translateToCenterPoint

**translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/apidocs/classes/Point.md)

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

[IText](/apidocs/classes/IText.md).[translateToCenterPoint](/apidocs/classes/IText.md#translatetocenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:122](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L122)

___

### translateToGivenOrigin

**translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/apidocs/classes/Point.md)

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

[IText](/apidocs/classes/IText.md).[translateToGivenOrigin](/apidocs/classes/IText.md#translatetogivenorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:94](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L94)

___

### translateToOriginPoint

**translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/apidocs/classes/Point.md)

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

[IText](/apidocs/classes/IText.md).[translateToOriginPoint](/apidocs/classes/IText.md#translatetooriginpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:147](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L147)

___

### tripleClickHandler

**tripleClickHandler**(`options`): `void`

Default handler for triple click, select a line

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[tripleClickHandler](/apidocs/classes/IText.md#tripleclickhandler)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:116](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextClickBehavior.ts#L116)

___

### updateFromTextArea

**updateFromTextArea**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[updateFromTextArea](/apidocs/classes/IText.md#updatefromtextarea)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:522](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L522)

___

### updateSelectionOnMouseMove

**updateSelectionOnMouseMove**(`e`): `void`

called by [Canvas#textEditingManager](/apidocs/classes/Canvas.md#texteditingmanager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[updateSelectionOnMouseMove](/apidocs/classes/IText.md#updateselectiononmousemove)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:410](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L410)

___

### updateTextareaPosition

**updateTextareaPosition**(): `void`

#### Returns

`void`

#### Inherited from

[IText](/apidocs/classes/IText.md).[updateTextareaPosition](/apidocs/classes/IText.md#updatetextareaposition)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:547](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/IText/ITextBehavior.ts#L547)

___

### willDrawShadow

**willDrawShadow**(): `boolean`

Check if this object or a child object will cast a shadow
used by Group.shouldCache to know if child has a shadow recursively

#### Returns

`boolean`

**`Deprecated`**

#### Inherited from

[IText](/apidocs/classes/IText.md).[willDrawShadow](/apidocs/classes/IText.md#willdrawshadow)

#### Defined in

[src/shapes/Object/Object.ts:880](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L880)

___

### wordSplit

**wordSplit**(`value`): `string`[]

Override this method to customize word splitting
Use with [Textbox#_measureWord](/apidocs/classes/Textbox.md#_measureword)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`[]

array of words

#### Defined in

[src/shapes/Textbox.ts:399](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L399)

___

### \_fromObject

**_fromObject**\<`S`\>(`object`, `«destructured»?`): `Promise`\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Record`\<`string`, `unknown`\> |
| `«destructured»` | [`Abortable`](/apidocs/modules.md#abortable) & \{ `extraParam?`: `string`  } |

#### Returns

`Promise`\<`S`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[_fromObject](/apidocs/classes/IText.md#_fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1564](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1564)

___

### fromElement

**fromElement**(`element`, `options?`, `cssRules?`): `Promise`\<[`FabricText`](/apidocs/classes/FabricText.md)\<\{ `fontSize`: `number` ; `left`: `number` ; `linethrough`: `boolean` ; `overline`: `boolean` ; `signal?`: `AbortSignal` ; `strokeWidth`: `number` = 0; `top`: `number` ; `underline`: `boolean`  }, [`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

Returns FabricText instance from an SVG element (<b>not yet implemented</b>)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | Element to parse |
| `options?` | [`Abortable`](/apidocs/modules.md#abortable) | Options object |
| `cssRules?` | `CSSRules` | - |

#### Returns

`Promise`\<[`FabricText`](/apidocs/classes/FabricText.md)\<\{ `fontSize`: `number` ; `left`: `number` ; `linethrough`: `boolean` ; `overline`: `boolean` ; `signal?`: `AbortSignal` ; `strokeWidth`: `number` = 0; `top`: `number` ; `underline`: `boolean`  }, [`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Text

#### Inherited from

[IText](/apidocs/classes/IText.md).[fromElement](/apidocs/classes/IText.md#fromelement)

#### Defined in

[src/shapes/Text/Text.ts:1822](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1822)

___

### fromObject

**fromObject**\<`T`, `S`\>(`object`): `Promise`\<`S`\>

Returns FabricText instance from an object representation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md)\> |
| `S` | extends [`FabricText`](/apidocs/classes/FabricText.md)\<`Partial`\<[`TextProps`](/apidocs/interfaces/TextProps.md)\>, [`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | plain js Object to create an instance from |

#### Returns

`Promise`\<`S`\>

#### Inherited from

[IText](/apidocs/classes/IText.md).[fromObject](/apidocs/classes/IText.md#fromobject)

#### Defined in

[src/shapes/Text/Text.ts:1899](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1899)

___

### getDefaults

**getDefaults**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `controls` | \{ `bl`: [`Control`](/apidocs/classes/Control.md) ; `br`: [`Control`](/apidocs/classes/Control.md) ; `mb`: [`Control`](/apidocs/classes/Control.md) ; `ml`: [`Control`](/apidocs/classes/Control.md) ; `mr`: [`Control`](/apidocs/classes/Control.md) ; `mt`: [`Control`](/apidocs/classes/Control.md) ; `mtr`: [`Control`](/apidocs/classes/Control.md) ; `tl`: [`Control`](/apidocs/classes/Control.md) ; `tr`: [`Control`](/apidocs/classes/Control.md)  } |
| `controls.bl` | [`Control`](/apidocs/classes/Control.md) |
| `controls.br` | [`Control`](/apidocs/classes/Control.md) |
| `controls.mb` | [`Control`](/apidocs/classes/Control.md) |
| `controls.ml` | [`Control`](/apidocs/classes/Control.md) |
| `controls.mr` | [`Control`](/apidocs/classes/Control.md) |
| `controls.mt` | [`Control`](/apidocs/classes/Control.md) |
| `controls.mtr` | [`Control`](/apidocs/classes/Control.md) |
| `controls.tl` | [`Control`](/apidocs/classes/Control.md) |
| `controls.tr` | [`Control`](/apidocs/classes/Control.md) |

#### Overrides

[IText](/apidocs/classes/IText.md).[getDefaults](/apidocs/classes/IText.md#getdefaults)

#### Defined in

[src/shapes/Textbox.ts:97](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Textbox.ts#L97)
