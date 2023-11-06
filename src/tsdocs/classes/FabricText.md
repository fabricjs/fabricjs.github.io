# Class: FabricText\<Props, SProps, EventSpec\>

Text class

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-2#text](http://fabricjs.com/fabric-intro-part-2#text)

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`TextProps`](/apidocs/interfaces/TextProps.md)\> = `Partial`\<[`TextProps`](/apidocs/interfaces/TextProps.md)\> |
| `SProps` | extends [`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md) = [`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

## Hierarchy

- `StyledText`\<`Props`, `SProps`, `EventSpec`\>

  ↳ **`FabricText`**

## Implements

- `UniqueTextProps`

## Constructors

### constructor

**new FabricText**\<`Props`, `SProps`, `EventSpec`\>(`text`, `options?`): [`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`TextProps`](/apidocs/interfaces/TextProps.md)\> = `Partial`\<[`TextProps`](/apidocs/interfaces/TextProps.md)\> |
| `SProps` | extends [`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md) = [`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\<`EventSpec`\> = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `options` | `Props` |

#### Returns

[`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

StyledText\&lt;Props, SProps, EventSpec\&gt;.constructor

#### Defined in

[src/shapes/Text/Text.ts:421](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L421)

## Properties

### CACHE\_FONT\_SIZE

 `Private` `Readonly` **CACHE\_FONT\_SIZE**: `number`

use this size when measuring text. To avoid IE11 rounding errors

**`Default`**

```ts
@readonly
@private
```

#### Defined in

[src/shapes/Text/Text.ts:380](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L380)

___

### MIN\_TEXT\_WIDTH

 **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

**`Default`**

```ts

```

#### Defined in

[src/shapes/Text/Text.ts:387](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L387)

___

### \_\_charBounds

 `Protected` **\_\_charBounds**: [`GraphemeBBox`](/apidocs/modules.md#graphemebbox)[][] = `[]`

contains characters bounding boxes
This variable is considered to be protected.
But for how mixins are implemented right now, we can't leave it private

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

StyledText.\_\_corner

#### Defined in

[src/shapes/Object/InteractiveObject.ts:115](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L115)

___

### \_\_lineHeights

 **\_\_lineHeights**: `number`[]

#### Defined in

[src/shapes/Text/Text.ts:407](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L407)

___

### \_\_lineWidths

 **\_\_lineWidths**: `number`[]

#### Defined in

[src/shapes/Text/Text.ts:408](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L408)

___

### \_\_owningGroup

 `Optional` **\_\_owningGroup**: [`Group`](/apidocs/classes/Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

StyledText.\_\_owningGroup

#### Defined in

[src/shapes/Object/StackedObject.ts:45](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L45)

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

StyledText.\_cacheCanvas

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

StyledText.\_cacheContext

#### Defined in

[src/shapes/Object/Object.ts:173](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L173)

___

### \_controlsVisibility

 **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

StyledText.\_controlsVisibility

#### Defined in

[src/shapes/Object/InteractiveObject.ts:122](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L122)

___

### \_fontSizeFraction

 `Private` **\_fontSizeFraction**: `number`

#### Defined in

[src/shapes/Text/Text.ts:323](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L323)

___

### \_fontSizeMult

 **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

**`Default`**

```ts

```

#### Defined in

[src/shapes/Text/Text.ts:335](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L335)

___

### \_forceClearCache

 `Protected` **\_forceClearCache**: `boolean`

#### Inherited from

StyledText.\_forceClearCache

#### Defined in

[src/shapes/Text/StyledText.ts:28](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L28)

___

### \_reNewline

 `Private` **\_reNewline**: `RegExp`

#### Defined in

[src/shapes/Text/Text.ts:140](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L140)

___

### \_reSpaceAndTab

 `Private` **\_reSpaceAndTab**: `RegExp`

Use this regular expression to filter for whitespace that is not a new line.
Mostly used when text is 'justify' aligned.

#### Defined in

[src/shapes/Text/Text.ts:154](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L154)

___

### \_reSpacesAndTabs

 `Private` **\_reSpacesAndTabs**: `RegExp`

Use this regular expression to filter for whitespaces that is not a new line.
Mostly used when text is 'justify' aligned.

#### Defined in

[src/shapes/Text/Text.ts:147](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L147)

___

### \_reWords

 `Private` **\_reWords**: `RegExp`

Use this regular expression to filter consecutive groups of non spaces.
Mostly used when text is 'justify' aligned.

#### Defined in

[src/shapes/Text/Text.ts:161](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L161)

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

StyledText.\_scaling

#### Defined in

[src/shapes/Object/InteractiveObject.ts:144](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L144)

___

### \_text

 **\_text**: `string`[]

#### Defined in

[src/shapes/Text/Text.ts:405](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L405)

___

### \_textLines

 **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

**`Default`**

```ts

```

#### Overrides

StyledText.\_textLines

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

StyledText.\_transformDone

#### Defined in

[src/shapes/Object/Object.ts:264](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L264)

___

### \_unwrappedTextLines

 **\_unwrappedTextLines**: `string`[][]

#### Defined in

[src/shapes/Text/Text.ts:404](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L404)

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

StyledText.aCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:57](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L57)

___

### absolutePositioned

 **absolutePositioned**: `boolean`

#### Inherited from

StyledText.absolutePositioned

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L137)

___

### activeOn

 **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

StyledText.activeOn

#### Defined in

[src/shapes/Object/InteractiveObject.ts:91](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L91)

___

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

StyledText.angle

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

 **backgroundColor**: `string`

#### Inherited from

StyledText.backgroundColor

#### Defined in

[src/shapes/Object/Object.ts:124](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L124)

___

### borderColor

 **borderColor**: `string`

#### Inherited from

StyledText.borderColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L81)

___

### borderDashArray

 **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

StyledText.borderDashArray

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L82)

___

### borderOpacityWhenMoving

 **borderOpacityWhenMoving**: `number`

#### Inherited from

StyledText.borderOpacityWhenMoving

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L83)

___

### borderScaleFactor

 **borderScaleFactor**: `number`

#### Inherited from

StyledText.borderScaleFactor

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

StyledText.cacheHeight

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

StyledText.cacheTranslationX

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

StyledText.cacheTranslationY

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

StyledText.cacheWidth

#### Defined in

[src/shapes/Object/Object.ts:193](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L193)

___

### canvas

 `Optional` **canvas**: [`Canvas`](/apidocs/classes/Canvas.md)

#### Inherited from

StyledText.canvas

#### Defined in

[src/shapes/Object/InteractiveObject.ts:146](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L146)

___

### centeredRotation

 **centeredRotation**: `boolean`

#### Inherited from

StyledText.centeredRotation

#### Defined in

[src/shapes/Object/Object.ts:138](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L138)

___

### centeredScaling

 **centeredScaling**: `boolean`

#### Inherited from

StyledText.centeredScaling

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

#### Implementation of

UniqueTextProps.charSpacing

#### Defined in

[src/shapes/Text/Text.ts:343](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L343)

___

### clipPath

 `Optional` **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

StyledText.clipPath

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L135)

___

### clipPathId

 `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

StyledText.clipPathId

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### colorProperties

 **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

StyledText.colorProperties

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/AnimatableObject.ts#L20)

___

### controls

 **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

StyledText.controls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:128](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L128)

___

### cornerColor

 **cornerColor**: `string`

#### Inherited from

StyledText.cornerColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L75)

___

### cornerDashArray

 **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

StyledText.cornerDashArray

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L78)

___

### cornerSize

 **cornerSize**: `number`

#### Inherited from

StyledText.cornerSize

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L72)

___

### cornerStrokeColor

 **cornerStrokeColor**: `string`

#### Inherited from

StyledText.cornerStrokeColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L76)

___

### cornerStyle

 **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

StyledText.cornerStyle

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L77)

___

### cursorWidth

 **cursorWidth**: `number`

#### Defined in

[src/shapes/Text/Text.ts:406](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L406)

___

### deltaY

 **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

**`Default`**

```ts

```

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

#### Implementation of

UniqueTextProps.direction

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

StyledText.dirty

#### Defined in

[src/shapes/Object/Object.ts:163](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L163)

___

### evented

 **evented**: `boolean`

#### Inherited from

StyledText.evented

#### Defined in

[src/shapes/Object/InteractiveObject.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L89)

___

### excludeFromExport

 **excludeFromExport**: `boolean`

#### Inherited from

StyledText.excludeFromExport

#### Defined in

[src/shapes/Object/Object.ts:131](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L131)

___

### fill

 **fill**: ``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

#### Inherited from

StyledText.fill

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L114)

___

### fillRule

 **fillRule**: `CanvasFillRule`

#### Inherited from

StyledText.fillRule

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L115)

___

### flipX

 **flipX**: `boolean`

#### Inherited from

StyledText.flipX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

 **flipY**: `boolean`

#### Inherited from

StyledText.flipY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L22)

___

### fontFamily

 **fontFamily**: `string`

Font family

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.fontFamily

#### Defined in

[src/shapes/Text/Text.ts:184](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L184)

___

### fontSize

 **fontSize**: `number`

Font size (in pixels)

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.fontSize

#### Defined in

[src/shapes/Text/Text.ts:170](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L170)

___

### fontStyle

 **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.fontStyle

#### Defined in

[src/shapes/Text/Text.ts:220](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L220)

___

### fontWeight

 **fontWeight**: `string`

Font weight (e.g. bold, normal, 400, 600, 800)

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.fontWeight

#### Defined in

[src/shapes/Text/Text.ts:177](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L177)

___

### globalCompositeOperation

 **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

StyledText.globalCompositeOperation

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

StyledText.group

#### Defined in

[src/shapes/Object/Object.ts:246](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L246)

___

### hasBorders

 **hasBorders**: `boolean`

#### Inherited from

StyledText.hasBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L85)

___

### hasControls

 **hasControls**: `boolean`

#### Inherited from

StyledText.hasControls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L79)

___

### height

 **height**: `number`

#### Inherited from

StyledText.height

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hoverCursor

 **hoverCursor**: ``null`` \| `string`

#### Inherited from

StyledText.hoverCursor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:93](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L93)

___

### includeDefaultValues

 **includeDefaultValues**: `boolean`

#### Inherited from

StyledText.includeDefaultValues

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L130)

___

### initialized

 `Optional` **initialized**: ``true``

#### Defined in

[src/shapes/Text/Text.ts:409](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L409)

___

### inverted

 **inverted**: `boolean`

#### Inherited from

StyledText.inverted

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L136)

___

### isMoving

 `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

StyledText.isMoving

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L134)

___

### left

 **left**: `number`

#### Inherited from

StyledText.left

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

StyledText.lineCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L66)

___

### lineHeight

 **lineHeight**: `number`

Line height

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.lineHeight

#### Defined in

[src/shapes/Text/Text.ts:227](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L227)

___

### linethrough

 **linethrough**: `boolean`

Text decoration linethrough.

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.linethrough

#### Defined in

[src/shapes/Text/Text.ts:205](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L205)

___

### lockMovementX

 **lockMovementX**: `boolean`

#### Inherited from

StyledText.lockMovementX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L63)

___

### lockMovementY

 **lockMovementY**: `boolean`

#### Inherited from

StyledText.lockMovementY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L64)

___

### lockRotation

 **lockRotation**: `boolean`

#### Inherited from

StyledText.lockRotation

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L65)

___

### lockScalingFlip

 **lockScalingFlip**: `boolean`

#### Inherited from

StyledText.lockScalingFlip

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L70)

___

### lockScalingX

 **lockScalingX**: `boolean`

#### Inherited from

StyledText.lockScalingX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L66)

___

### lockScalingY

 **lockScalingY**: `boolean`

#### Inherited from

StyledText.lockScalingY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L67)

___

### lockSkewingX

 **lockSkewingX**: `boolean`

#### Inherited from

StyledText.lockSkewingX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L68)

___

### lockSkewingY

 **lockSkewingY**: `boolean`

#### Inherited from

StyledText.lockSkewingY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L69)

___

### matrixCache

 `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

StyledText.matrixCache

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L76)

___

### minScaleLimit

 **minScaleLimit**: `number`

#### Inherited from

StyledText.minScaleLimit

#### Defined in

[src/shapes/Object/Object.ts:109](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L109)

___

### moveCursor

 **moveCursor**: ``null`` \| `string`

#### Inherited from

StyledText.moveCursor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L94)

___

### noScaleCache

 **noScaleCache**: `boolean`

#### Inherited from

StyledText.noScaleCache

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

StyledText.oCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L105)

___

### objectCaching

 **objectCaching**: `boolean`

#### Inherited from

StyledText.objectCaching

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

#### Defined in

[src/shapes/Text/Text.ts:328](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L328)

___

### opacity

 **opacity**: `number`

#### Inherited from

StyledText.opacity

#### Defined in

[src/shapes/Object/Object.ts:111](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L111)

___

### originX

 **originX**: [`TOriginX`](/apidocs/modules.md#toriginx)

#### Inherited from

StyledText.originX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

 **originY**: [`TOriginY`](/apidocs/modules.md#toriginy)

#### Inherited from

StyledText.originY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L28)

___

### overline

 **overline**: `boolean`

Text decoration overline.

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.overline

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

StyledText.ownCaching

#### Defined in

[src/shapes/Object/Object.ts:255](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L255)

___

### ownMatrixCache

 `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

StyledText.ownMatrixCache

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:71](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L71)

___

### padding

 **padding**: `number`

#### Inherited from

StyledText.padding

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:44](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L44)

___

### paintFirst

 **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

StyledText.paintFirst

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

#### Implementation of

UniqueTextProps.path

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

#### Implementation of

UniqueTextProps.pathAlign

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

#### Implementation of

UniqueTextProps.pathSide

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

#### Defined in

[src/shapes/Text/Text.ts:300](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L300)

___

### perPixelTargetFind

 **perPixelTargetFind**: `boolean`

#### Inherited from

StyledText.perPixelTargetFind

#### Defined in

[src/shapes/Object/InteractiveObject.ts:90](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L90)

___

### scaleX

 **scaleX**: `number`

#### Inherited from

StyledText.scaleX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

 **scaleY**: `number`

#### Inherited from

StyledText.scaleY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

 **selectable**: `boolean`

#### Inherited from

StyledText.selectable

#### Defined in

[src/shapes/Object/InteractiveObject.ts:88](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L88)

___

### selectionBackgroundColor

 **selectionBackgroundColor**: `string`

#### Inherited from

StyledText.selectionBackgroundColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L86)

___

### shadow

 **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md)

#### Inherited from

StyledText.shadow

#### Defined in

[src/shapes/Object/Object.ts:126](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L126)

___

### skewX

 **skewX**: `number`

#### Inherited from

StyledText.skewX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

 **skewY**: `number`

#### Inherited from

StyledText.skewY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

 `Optional` **snapAngle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

StyledText.snapAngle

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L60)

___

### snapThreshold

 `Optional` **snapThreshold**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

StyledText.snapThreshold

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L61)

___

### stroke

 **stroke**: ``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

#### Inherited from

StyledText.stroke

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L116)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

StyledText.strokeDashArray

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L117)

___

### strokeDashOffset

 **strokeDashOffset**: `number`

#### Inherited from

StyledText.strokeDashOffset

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L118)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap`

#### Inherited from

StyledText.strokeLineCap

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L119)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

StyledText.strokeLineJoin

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L120)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number`

#### Inherited from

StyledText.strokeMiterLimit

#### Defined in

[src/shapes/Object/Object.ts:121](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L121)

___

### strokeUniform

 **strokeUniform**: `boolean`

#### Inherited from

StyledText.strokeUniform

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

 **strokeWidth**: `number`

#### Inherited from

StyledText.strokeWidth

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L30)

___

### styles

 **styles**: [`TextStyle`](/apidocs/modules.md#textstyle)

#### Overrides

StyledText.styles

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

#### Defined in

[src/shapes/Text/Text.ts:232](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L232)

___

### text

 **text**: `string`

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

#### Implementation of

UniqueTextProps.textAlign

#### Defined in

[src/shapes/Text/Text.ts:213](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L213)

___

### textBackgroundColor

 **textBackgroundColor**: `string`

Background color of text lines

**`Default`**

```ts

```

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

#### Defined in

[src/shapes/Text/Text.ts:395](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L395)

___

### top

 **top**: `number`

#### Inherited from

StyledText.top

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

 **touchCornerSize**: `number`

#### Inherited from

StyledText.touchCornerSize

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L73)

___

### transparentCorners

 **transparentCorners**: `boolean`

#### Inherited from

StyledText.transparentCorners

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L74)

___

### underline

 **underline**: `boolean`

Text decoration underline.

**`Default`**

```ts

```

#### Implementation of

UniqueTextProps.underline

#### Defined in

[src/shapes/Text/Text.ts:191](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L191)

___

### visible

 **visible**: `boolean`

#### Inherited from

StyledText.visible

#### Defined in

[src/shapes/Object/Object.ts:128](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L128)

___

### width

 **width**: `number`

#### Inherited from

StyledText.width

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

StyledText.zoomX

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

StyledText.zoomY

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

#### Defined in

[src/shapes/Text/Text.ts:1801](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1801)

___

### \_styleProperties

 `Static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

StyledText.\_styleProperties

#### Defined in

[src/shapes/Text/StyledText.ts:29](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L29)

___

### cacheProperties

 `Static` **cacheProperties**: `string`[]

#### Overrides

StyledText.cacheProperties

#### Defined in

[src/shapes/Text/Text.ts:411](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L411)

___

### genericFonts

 `Static` **genericFonts**: `string`[]

#### Defined in

[src/shapes/Text/Text.ts:1785](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1785)

___

### ownDefaults

 `Static` **ownDefaults**: `Record`\<`string`, `any`\> = `textDefaultValues`

#### Overrides

StyledText.ownDefaults

#### Defined in

[src/shapes/Text/Text.ts:413](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L413)

___

### stateProperties

 `Static` **stateProperties**: `string`[] = `stateProperties`

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

StyledText.stateProperties

#### Defined in

[src/shapes/Object/Object.ts:146](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L146)

___

### textLayoutProperties

 `Static` `Protected` **textLayoutProperties**: `string`[] = `textLayoutProperties`

Properties that requires a text layout recalculation when changed

#### Defined in

[src/shapes/Text/Text.ts:135](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L135)

___

### type

 `Static` **type**: `string` = `'Text'`

#### Overrides

StyledText.type

#### Defined in

[src/shapes/Text/Text.ts:415](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L415)

## Accessors

### type

`get` **type**(): `string`

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

[src/shapes/Object/Object.ts:290](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L290)

`set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

StyledText.type

#### Defined in

[src/shapes/Object/Object.ts:298](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L298)

## Methods

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

StyledText.\_animate

#### Defined in

[src/shapes/Object/AnimatableObject.ts:50](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/AnimatableObject.ts#L50)

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

StyledText.\_applyPatternForTransformedGradient

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

StyledText.\_applyPatternGradientTransform

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

#### Defined in

[src/shapes/Text/Text.ts:1245](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1245)

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

StyledText.\_calculateCurrentDimensions

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:633](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L633)

___

### \_clearCache

**_clearCache**(): `void`

#### Returns

`void`

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

StyledText.\_constrainScale

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

StyledText.\_createBaseClipPathSVGMarkup

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

StyledText.\_createBaseSVGMarkup

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

**_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

StyledText.\_createCacheCanvas

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

StyledText.\_deleteLineStyle

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

#### Inherited from

StyledText.\_deleteStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:298](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L298)

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

StyledText.\_drawBorders

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

StyledText.\_drawClipPath

#### Defined in

[src/shapes/Object/Object.ts:944](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L944)

___

### \_findCenterFromElement

**_findCenterFromElement**(): [`Point`](/apidocs/classes/Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates

#### Returns

[`Point`](/apidocs/classes/Point.md)

center point from element coordinates

#### Inherited from

StyledText.\_findCenterFromElement

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

StyledText.\_findTargetCorner

#### Defined in

[src/shapes/Object/InteractiveObject.ts:191](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L191)

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

#### Overrides

StyledText.\_getCacheCanvasDimensions

#### Defined in

[src/shapes/Text/Text.ts:588](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L588)

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

#### Defined in

[src/shapes/Text/Text.ts:973](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L973)

___

### \_getLeftOffset

**_getLeftOffset**(): `number`

#### Returns

`number`

Left offset

#### Defined in

[src/shapes/Text/Text.ts:1048](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1048)

___

### \_getLeftTopCoords

**_getLeftTopCoords**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

StyledText.\_getLeftTopCoords

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

#### Defined in

[src/shapes/Text/Text.ts:1445](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1445)

___

### \_getLineStyle

**_getLineStyle**(`lineIndex`): `boolean`

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

[src/shapes/Text/StyledText.ts:307](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L307)

___

### \_getNonTransformedDimensions

**_getNonTransformedDimensions**(): [`Point`](/apidocs/classes/Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

StyledText.\_getNonTransformedDimensions

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:622](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L622)

___

### \_getStyleDeclaration

**_getStyleDeclaration**(`lineIndex`, `charIndex`): `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>

get the reference, not a clone, of the style object for a given character,
if not style is set for a pre det

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>

style object a REFERENCE to the existing one or a new empty object

#### Inherited from

StyledText.\_getStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:252](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L252)

___

### \_getTopOffset

**_getTopOffset**(): `number`

#### Returns

`number`

Top offset

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

StyledText.\_getTransformedDimensions

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:49](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L49)

___

### \_getWidthOfCharSpacing

**_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

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

StyledText.\_limitCacheSize

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

#### Defined in

[src/shapes/Text/Text.ts:881](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L881)

___

### \_removeCacheCanvas

**_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

StyledText.\_removeCacheCanvas

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

StyledText.\_removeDefaultValues

#### Defined in

[src/shapes/Object/Object.ts:590](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L590)

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

StyledText.\_removeShadow

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

#### Overrides

StyledText.\_render

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

StyledText.\_renderBackground

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

StyledText.\_renderControls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:402](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L402)

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

StyledText.\_renderFill

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

StyledText.\_renderPaintInOrder

#### Defined in

[src/shapes/Object/Object.ts:1180](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1180)

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

StyledText.\_renderStroke

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

#### Defined in

[src/shapes/Text/Text.ts:1106](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1106)

___

### \_set

**_set**(`key`, `value`): [`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

Handles setting values on the instance and handling internal side effects

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

StyledText.\_set

#### Defined in

[src/shapes/Object/Object.ts:694](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L694)

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

StyledText.\_setClippingProperties

#### Defined in

[src/shapes/Object/Object.ts:1084](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1084)

___

### \_setFillStyles

**_setFillStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `style` | `Pick`\<[`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>, ``"fill"``\> | with ill defined |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Overrides

StyledText.\_setFillStyles

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

StyledText.\_setLineDash

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

#### Inherited from

StyledText.\_setLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:316](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L316)

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

StyledText.\_setObject

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

StyledText.\_setOpacity

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

StyledText.\_setOptions

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

StyledText.\_setShadow

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

#### Overrides

StyledText.\_setStrokeStyles

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

#### Inherited from

StyledText.\_setStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:284](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L284)

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

StyledText.\_setupCompositeOperation

#### Defined in

[src/shapes/Object/Object.ts:1535](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1535)

___

### \_splitText

**_splitText**(): `TextLinesInfo`

Divides text into lines of text and lines of graphemes.

#### Returns

`TextLinesInfo`

#### Defined in

[src/shapes/Text/Text.ts:446](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L446)

___

### \_splitTextIntoLines

**_splitTextIntoLines**(`text`): `TextLinesInfo`

Returns the text as an array of lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | text to split |

#### Returns

`TextLinesInfo`

Lines in the text

#### Defined in

[src/shapes/Text/Text.ts:1716](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1716)

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

StyledText.\_toSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:120](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L120)

___

### \_updateCacheCanvas

**_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

StyledText.\_updateCacheCanvas

#### Defined in

[src/shapes/Object/InteractiveObject.ts:164](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L164)

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

StyledText.addPaintOrder

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

StyledText.animate

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/AnimatableObject.ts#L34)

___

### calcACoords

**calcACoords**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

#### Inherited from

StyledText.calcACoords

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

StyledText.calcOCoords

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

StyledText.calcOwnMatrix

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:591](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L591)

___

### calcTextHeight

**calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Defined in

[src/shapes/Text/Text.ts:1034](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1034)

___

### calcTextWidth

**calcTextWidth**(): `number`

calculate and return the text Width measuring each line.

#### Returns

`number`

Maximum width of Text object

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

StyledText.calcTransformMatrix

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:563](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L563)

___

### canDrop

**canDrop**(`e`): `boolean`

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

[src/shapes/Object/InteractiveObject.ts:639](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L639)

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

StyledText.cleanStyle

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

StyledText.clearContextTop

#### Defined in

[src/shapes/Object/InteractiveObject.ts:582](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L582)

___

### clone

**clone**(`propertiesToInclude?`): `Promise`\<[`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`\<[`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

StyledText.clone

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

StyledText.cloneAsImage

#### Defined in

[src/shapes/Object/Object.ts:1338](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1338)

___

### complexity

**complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity

#### Overrides

StyledText.complexity

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

StyledText.containsPoint

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:322](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L322)

___

### dispose

**dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

StyledText.dispose

#### Defined in

[src/shapes/Object/Object.ts:1545](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1545)

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

StyledText.drawBorders

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

StyledText.drawCacheOnCanvas

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

StyledText.drawClipPathOnCache

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

StyledText.drawControls

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

StyledText.drawControlsConnectingLines

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

StyledText.drawObject

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

StyledText.drawSelectionBackground

#### Defined in

[src/shapes/Object/InteractiveObject.ts:342](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L342)

___

### enlargeSpaces

**enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:481](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L481)

___

### findCommonAncestors

**findCommonAncestors**\<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`\<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |
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

StyledText.findCommonAncestors

#### Defined in

[src/shapes/Object/StackedObject.ts:99](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L99)

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

StyledText.fire

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

StyledText.forEachControl

#### Defined in

[src/shapes/Object/InteractiveObject.ts:320](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L320)

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

StyledText.get

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L59)

___

### get2DCursorLocation

**get2DCursorLocation**(`selectionStart`, `skipWrapping?`): `Object`

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

[src/shapes/Text/Text.ts:545](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L545)

___

### getActiveControl

**getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

StyledText.getActiveControl

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

StyledText.getAncestors

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

StyledText.getBoundingRect

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:405](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L405)

___

### getCanvasRetinaScaling

**getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

StyledText.getCanvasRetinaScaling

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:462](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L462)

___

### getCenterPoint

**getCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

StyledText.getCenterPoint

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

StyledText.getCompleteStyleDeclaration

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

StyledText.getCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:222](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L222)

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

#### Defined in

[src/shapes/Text/Text.ts:1505](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1505)

___

### getObjectOpacity

**getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

StyledText.getObjectOpacity

#### Defined in

[src/shapes/Object/Object.ts:660](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L660)

___

### getObjectScaling

**getObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

StyledText.getObjectScaling

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

StyledText.getParent

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

StyledText.getPointByOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:194](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L194)

___

### getRelativeCenterPoint

**getRelativeCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

StyledText.getRelativeCenterPoint

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

StyledText.getRelativeX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:118](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L118)

___

### getRelativeXY

**getRelativeXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x,y position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

StyledText.getRelativeXY

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

StyledText.getRelativeY

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

StyledText.getScaledHeight

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

StyledText.getScaledWidth

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:414](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L414)

___

### getSelectionStyles

**getSelectionStyles**(`startIndex`, `endIndex?`, `complete?`): `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>[]

Gets style of a current selection/cursor (at the start position)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | Start index to get styles at |
| `endIndex?` | `number` | End index to get styles at, if not specified startIndex + 1 |
| `complete?` | `boolean` | get full style or not |

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>[]

styles an array with one, zero or more Style objects

#### Inherited from

StyledText.getSelectionStyles

#### Defined in

[src/shapes/Text/StyledText.ts:205](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L205)

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

StyledText.getStyleAtPosition

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

StyledText.getSvgCommons

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

StyledText.getSvgFilter

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

StyledText.getSvgStyles

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

StyledText.getSvgTransform

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

**getTotalAngle**(): [`TDegree`](/apidocs/modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

StyledText.getTotalAngle

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

StyledText.getTotalObjectScaling

#### Defined in

[src/shapes/Object/Object.ts:646](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L646)

___

### getValueOfPropertyAt

**getValueOfPropertyAt**\<`T`\>(`lineIndex`, `charIndex`, `property`): [`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>[`T`]

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

[`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>[`T`]

the value of 'property'

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

StyledText.getViewportTransform

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:482](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L482)

___

### getX

**getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

StyledText.getX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L89)

___

### getXY

**getXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

StyledText.getXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:149](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L149)

___

### getY

**getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

StyledText.getY

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

#### Defined in

[src/shapes/Text/Text.ts:1266](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1266)

___

### hasCommonAncestors

**hasCommonAncestors**\<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |

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

StyledText.hasFill

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

StyledText.hasStroke

#### Defined in

[src/shapes/Object/Object.ts:815](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L815)

___

### initDimensions

**initDimensions**(): `void`

Initialize or update text dimensions.
Updates this.width and this.height with the proper values.
Does not return dimensions.

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:460](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L460)

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

StyledText.intersectsWithObject

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

StyledText.intersectsWithRect

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

StyledText.isCacheDirty

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

StyledText.isContainedWithinObject

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

StyledText.isContainedWithinRect

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

StyledText.isControlVisible

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

StyledText.isDescendantOf

#### Defined in

[src/shapes/Object/StackedObject.ts:64](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L64)

___

### isEmptyStyles

**isEmptyStyles**(`lineIndex?`): `boolean`

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

[src/shapes/Text/StyledText.ts:40](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L40)

___

### isEndOfWrapping

**isEndOfWrapping**(`lineIndex`): `boolean`

Detect if the text line is ended with an hard break
text and itext do not have wrapping, return false

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[src/shapes/Text/Text.ts:525](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L525)

___

### isInFrontOf

**isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |

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

[src/shapes/Object/StackedObject.ts:178](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L178)

___

### isNotVisible

**isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StyledText.isNotVisible

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

StyledText.isOnScreen

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

StyledText.isOverlapping

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

StyledText.isPartiallyOnScreen

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L381)

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

StyledText.isType

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

#### Defined in

[src/shapes/Text/Text.ts:864](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L864)

___

### missingNewlineOffset

**missingNewlineOffset**(`lineIndex`, `skipWrapping?`): ``0`` \| ``1``

Detect if a line has a linebreak and so we need to account for it when moving
and counting style.
It return always 1 for text and Itext. Textbox has its own implementation

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `skipWrapping?` | `boolean` |

#### Returns

``0`` \| ``1``

Number

#### Defined in

[src/shapes/Text/Text.ts:535](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L535)

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

StyledText.needsItsOwnCache

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

StyledText.off

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

StyledText.off

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L125)

**off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

StyledText.off

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

StyledText.on

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

StyledText.on

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L27)

___

### onDeselect

**onDeselect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | event if the process is generated by an event |
| `options.object?` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | next object we are setting as active, and reason why this is being deselected |

#### Returns

`boolean`

#### Inherited from

StyledText.onDeselect

#### Defined in

[src/shapes/Object/InteractiveObject.ts:613](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L613)

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

StyledText.onSelect

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

StyledText.once

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

StyledText.once

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L66)

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

StyledText.removeStyle

#### Defined in

[src/shapes/Text/StyledText.ts:164](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L164)

___

### render

**render**(`ctx`): `void`

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

[src/shapes/Text/Text.ts:1681](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1681)

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

StyledText.renderCache

#### Defined in

[src/shapes/Object/Object.ts:784](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L784)

___

### renderDragSourceEffect

**renderDragSourceEffect**(`e`): `void`

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

[src/shapes/Object/InteractiveObject.ts:651](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L651)

___

### renderDropTargetEffect

**renderDropTargetEffect**(`e`): `void`

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

[src/shapes/Object/InteractiveObject.ts:664](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L664)

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

StyledText.rotate

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

StyledText.scale

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

StyledText.scaleToHeight

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

StyledText.scaleToWidth

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:443](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L443)

___

### set

**set**(`key`, `value?`): [`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

#### Returns

[`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

StyledText.set

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

StyledText.setControlVisible

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

StyledText.setControlsVisibility

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

StyledText.setCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:309](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L309)

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

StyledText.setOnGroup

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

StyledText.setOptions

#### Defined in

[src/shapes/Object/Object.ts:495](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L495)

___

### setPathInfo

**setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

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

StyledText.setPositionByOrigin

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

StyledText.setRelativeX

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

StyledText.setRelativeXY

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

StyledText.setRelativeY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:142](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L142)

___

### setSelectionStyles

**setSelectionStyles**(`styles`, `startIndex`, `endIndex?`): `void`

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

[src/shapes/Text/StyledText.ts:237](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L237)

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

StyledText.setX

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

StyledText.setXY

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

StyledText.setY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:110](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L110)

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

StyledText.shouldCache

#### Defined in

[src/shapes/Object/Object.ts:867](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L867)

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

StyledText.strokeBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:366](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L366)

___

### styleHas

**styleHas**(`property`, `lineIndex?`): `boolean`

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

[src/shapes/Text/StyledText.ts:69](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/StyledText.ts#L69)

___

### toCanvasElement

**toCanvasElement**(`options?`): `HTMLCanvasElement`

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

[src/shapes/Object/Object.ts:1359](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1359)

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

StyledText.toClipPathSVG

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

StyledText.toDataURL

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

StyledText.toDatalessObject

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

StyledText.toJSON

#### Defined in

[src/shapes/Object/Object.ts:1485](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1485)

___

### toObject

**toObject**\<`T`, `K`\>(`propertiesToInclude?`): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`\<`Props` & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Overrides

StyledText.toObject

#### Defined in

[src/shapes/Text/Text.ts:1739](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1739)

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

StyledText.toSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

**toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Overrides

StyledText.toString

#### Defined in

[src/shapes/Text/Text.ts:571](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L571)

___

### toggle

**toggle**(`property`): [`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`FabricText`](/apidocs/classes/FabricText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

StyledText.toggle

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

StyledText.transform

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

StyledText.transformMatrixKey

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

StyledText.translateToCenterPoint

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

StyledText.translateToGivenOrigin

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

StyledText.translateToOriginPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:147](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L147)

___

### willDrawShadow

**willDrawShadow**(): `boolean`

Check if this object or a child object will cast a shadow
used by Group.shouldCache to know if child has a shadow recursively

#### Returns

`boolean`

**`Deprecated`**

#### Inherited from

StyledText.willDrawShadow

#### Defined in

[src/shapes/Object/Object.ts:880](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L880)

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

StyledText.\_fromObject

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

#### Overrides

StyledText.fromObject

#### Defined in

[src/shapes/Text/Text.ts:1899](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L1899)

___

### getDefaults

**getDefaults**(): `Object`

#### Returns

`Object`

#### Overrides

StyledText.getDefaults

#### Defined in

[src/shapes/Text/Text.ts:417](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Text/Text.ts#L417)
