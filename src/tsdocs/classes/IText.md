# Class: IText\<Props, SProps, EventSpec\>

**`Fires`**

changed

**`Fires`**

selection:changed

**`Fires`**

editing:entered

**`Fires`**

editing:exited

**`Fires`**

dragstart

**`Fires`**

drag drag event firing on the drag source

**`Fires`**

dragend

**`Fires`**

copy

**`Fires`**

cut

**`Fires`**

paste

#### Supported key combinations
```
  Move cursor:                    left, right, up, down
  Select character:               shift + left, shift + right
  Select text vertically:         shift + up, shift + down
  Move cursor by word:            alt + left, alt + right
  Select words:                   shift + alt + left, shift + alt + right
  Move cursor to line start/end:  cmd + left, cmd + right or home, end
  Select till start/end of line:  cmd + shift + left, cmd + shift + right or shift + home, shift + end
  Jump to start/end of text:      cmd + up, cmd + down
  Select till start/end of text:  cmd + shift + up, cmd + shift + down or shift + pgUp, shift + pgDown
  Delete character:               backspace
  Delete word:                    alt + backspace
  Delete line:                    cmd + backspace
  Forward delete:                 delete
  Copy text:                      ctrl/cmd + c
  Paste text:                     ctrl/cmd + v
  Cut text:                       ctrl/cmd + x
  Select entire text:             ctrl/cmd + a
  Quit editing                    tab or esc
```

#### Supported mouse/touch combination
```
  Position cursor:                click/touch
  Create selection:               click/touch & drag
  Create selection:               click & shift + click
  Select word:                    double click
  Select line:                    triple click
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\> = `Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\> |
| `SProps` | extends [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md) = [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md) |
| `EventSpec` | extends `ITextEvents` = `ITextEvents` |

## Hierarchy

- `ITextClickBehavior`\<`Props`, `SProps`, `EventSpec`\>

  ↳ **`IText`**

  ↳↳ [`Textbox`](/apidocs/classes/Textbox.md)

## Implements

- `UniqueITextProps`

## Constructors

### constructor

**new IText**\<`Props`, `SProps`, `EventSpec`\>(`text`, `options?`): [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\> = `Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\> |
| `SProps` | extends [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md) = [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\<`EventSpec`\> & \{ `changed`: \{ `action`: `string` ; `index`: `number`  } ; `editing:entered`: \{ `e`: [`TPointerEvent`](/apidocs/modules.md#tpointerevent)  } ; `editing:exited`: `never` ; `selection:changed`: `never` ; `tripleclick`: [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>  } = `ITextEvents` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text string |
| `options?` | `Props` | Options object |

#### Returns

[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

ITextClickBehavior\&lt;Props, SProps, EventSpec\&gt;.constructor

#### Defined in

[src/shapes/IText/IText.ts:219](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L219)

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

ITextClickBehavior.CACHE\_FONT\_SIZE

#### Defined in

[src/shapes/Text/Text.ts:380](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L380)

___

### MIN\_TEXT\_WIDTH

 **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.MIN\_TEXT\_WIDTH

#### Defined in

[src/shapes/Text/Text.ts:387](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L387)

___

### \_\_charBounds

 `Protected` **\_\_charBounds**: [`GraphemeBBox`](/apidocs/modules.md#graphemebbox)[][] = `[]`

contains characters bounding boxes
This variable is considered to be protected.
But for how mixins are implemented right now, we can't leave it private

#### Inherited from

ITextClickBehavior.\_\_charBounds

#### Defined in

[src/shapes/Text/Text.ts:371](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L371)

___

### \_\_corner

 `Optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

ITextClickBehavior.\_\_corner

#### Defined in

[src/shapes/Object/InteractiveObject.ts:104](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L104)

___

### \_\_lineHeights

 **\_\_lineHeights**: `number`[]

#### Inherited from

ITextClickBehavior.\_\_lineHeights

#### Defined in

[src/shapes/Text/Text.ts:407](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L407)

___

### \_\_lineWidths

 **\_\_lineWidths**: `number`[]

#### Inherited from

ITextClickBehavior.\_\_lineWidths

#### Defined in

[src/shapes/Text/Text.ts:408](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L408)

___

### \_\_selectionStartOnMouseDown

 `Protected` **\_\_selectionStartOnMouseDown**: `number`

#### Inherited from

ITextClickBehavior.\_\_selectionStartOnMouseDown

#### Defined in

[src/shapes/IText/ITextBehavior.ts:71](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L71)

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

ITextClickBehavior.\_cacheCanvas

#### Defined in

[src/shapes/Object/Object.ts:185](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L185)

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

ITextClickBehavior.\_cacheContext

#### Defined in

[src/shapes/Object/Object.ts:174](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L174)

___

### \_controlsVisibility

 **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

ITextClickBehavior.\_controlsVisibility

#### Defined in

[src/shapes/Object/InteractiveObject.ts:111](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L111)

___

### \_currentCursorOpacity

 `Protected` **\_currentCursorOpacity**: `number` = `1`

#### Inherited from

ITextClickBehavior.\_currentCursorOpacity

#### Defined in

[src/shapes/IText/ITextBehavior.ts:69](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L69)

___

### \_fontSizeFraction

 `Private` **\_fontSizeFraction**: `number`

#### Inherited from

ITextClickBehavior.\_fontSizeFraction

#### Defined in

[src/shapes/Text/Text.ts:323](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L323)

___

### \_fontSizeMult

 **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.\_fontSizeMult

#### Defined in

[src/shapes/Text/Text.ts:335](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L335)

___

### \_forceClearCache

 `Protected` **\_forceClearCache**: `boolean`

#### Inherited from

ITextClickBehavior.\_forceClearCache

#### Defined in

[src/shapes/Text/StyledText.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L28)

___

### \_reNewline

 `Private` **\_reNewline**: `RegExp`

#### Inherited from

ITextClickBehavior.\_reNewline

#### Defined in

[src/shapes/Text/Text.ts:140](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L140)

___

### \_reSpace

 `Protected` **\_reSpace**: `RegExp`

#### Inherited from

ITextClickBehavior.\_reSpace

#### Defined in

[src/shapes/IText/ITextBehavior.ts:66](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L66)

___

### \_reSpaceAndTab

 `Private` **\_reSpaceAndTab**: `RegExp`

Use this regular expression to filter for whitespace that is not a new line.
Mostly used when text is 'justify' aligned.

#### Inherited from

ITextClickBehavior.\_reSpaceAndTab

#### Defined in

[src/shapes/Text/Text.ts:154](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L154)

___

### \_reSpacesAndTabs

 `Private` **\_reSpacesAndTabs**: `RegExp`

Use this regular expression to filter for whitespaces that is not a new line.
Mostly used when text is 'justify' aligned.

#### Inherited from

ITextClickBehavior.\_reSpacesAndTabs

#### Defined in

[src/shapes/Text/Text.ts:147](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L147)

___

### \_reWords

 `Private` **\_reWords**: `RegExp`

Use this regular expression to filter consecutive groups of non spaces.
Mostly used when text is 'justify' aligned.

#### Inherited from

ITextClickBehavior.\_reWords

#### Defined in

[src/shapes/Text/Text.ts:161](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L161)

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

ITextClickBehavior.\_savedProps

#### Defined in

[src/shapes/IText/ITextBehavior.ts:75](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L75)

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

ITextClickBehavior.\_scaling

#### Defined in

[src/shapes/Object/InteractiveObject.ts:133](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L133)

___

### \_selectionDirection

 `Protected` **\_selectionDirection**: ``null`` \| ``"left"`` \| ``"right"``

#### Inherited from

ITextClickBehavior.\_selectionDirection

#### Defined in

[src/shapes/IText/ITextBehavior.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L85)

___

### \_text

 **\_text**: `string`[]

#### Inherited from

ITextClickBehavior.\_text

#### Defined in

[src/shapes/Text/Text.ts:405](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L405)

___

### \_textLines

 **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.\_textLines

#### Defined in

[src/shapes/Text/Text.ts:402](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L402)

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

ITextClickBehavior.\_transformDone

#### Defined in

[src/shapes/Object/Object.ts:265](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L265)

___

### \_unwrappedTextLines

 **\_unwrappedTextLines**: `string`[][]

#### Inherited from

ITextClickBehavior.\_unwrappedTextLines

#### Defined in

[src/shapes/Text/Text.ts:404](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L404)

___

### aCoords

 **aCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](/apidocs/classes/IText.md#setcoords).
You can calculate them without updating with [()](/apidocs/classes/IText.md#calcacoords)

#### Inherited from

ITextClickBehavior.aCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L50)

___

### absolutePositioned

 **absolutePositioned**: `boolean`

#### Inherited from

ITextClickBehavior.absolutePositioned

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L137)

___

### activeOn

 **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

ITextClickBehavior.activeOn

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L83)

___

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

ITextClickBehavior.angle

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

 **backgroundColor**: `string`

#### Inherited from

ITextClickBehavior.backgroundColor

#### Defined in

[src/shapes/Object/Object.ts:124](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L124)

___

### borderColor

 **borderColor**: `string`

#### Inherited from

ITextClickBehavior.borderColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L73)

___

### borderDashArray

 **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

ITextClickBehavior.borderDashArray

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L74)

___

### borderOpacityWhenMoving

 **borderOpacityWhenMoving**: `number`

#### Inherited from

ITextClickBehavior.borderOpacityWhenMoving

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L75)

___

### borderScaleFactor

 **borderScaleFactor**: `number`

#### Inherited from

ITextClickBehavior.borderScaleFactor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L76)

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

ITextClickBehavior.cacheHeight

#### Defined in

[src/shapes/Object/Object.ts:203](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L203)

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

ITextClickBehavior.cacheTranslationX

#### Defined in

[src/shapes/Object/Object.ts:230](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L230)

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

ITextClickBehavior.cacheTranslationY

#### Defined in

[src/shapes/Object/Object.ts:239](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L239)

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

ITextClickBehavior.cacheWidth

#### Defined in

[src/shapes/Object/Object.ts:194](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L194)

___

### caching

 **caching**: `boolean`

Indicates whether internal text char widths can be cached

**`Default`**

```ts

```

#### Defined in

[src/shapes/IText/IText.ts:197](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L197)

___

### canvas

 `Optional` **canvas**: [`Canvas`](/apidocs/classes/Canvas.md)

#### Inherited from

ITextClickBehavior.canvas

#### Defined in

[src/shapes/Object/InteractiveObject.ts:135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L135)

___

### centeredRotation

 **centeredRotation**: `boolean`

#### Inherited from

ITextClickBehavior.centeredRotation

#### Defined in

[src/shapes/Object/Object.ts:138](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L138)

___

### centeredScaling

 **centeredScaling**: `boolean`

#### Inherited from

ITextClickBehavior.centeredScaling

#### Defined in

[src/shapes/Object/Object.ts:139](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L139)

___

### charSpacing

 **charSpacing**: `number`

additional space between characters
expressed in thousands of em unit

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.charSpacing

#### Defined in

[src/shapes/Text/Text.ts:343](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L343)

___

### clipPath

 `Optional` **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

ITextClickBehavior.clipPath

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L135)

___

### clipPathId

 `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

ITextClickBehavior.clipPathId

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### compositionColor

 **compositionColor**: `string`

#### Defined in

[src/shapes/IText/IText.ts:190](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L190)

___

### compositionEnd

 **compositionEnd**: `number`

#### Overrides

ITextClickBehavior.compositionEnd

#### Defined in

[src/shapes/IText/IText.ts:129](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L129)

___

### compositionStart

 **compositionStart**: `number`

#### Overrides

ITextClickBehavior.compositionStart

#### Defined in

[src/shapes/IText/IText.ts:127](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L127)

___

### controls

 **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

ITextClickBehavior.controls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:117](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L117)

___

### cornerColor

 **cornerColor**: `string`

#### Inherited from

ITextClickBehavior.cornerColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L67)

___

### cornerDashArray

 **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

ITextClickBehavior.cornerDashArray

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L70)

___

### cornerSize

 **cornerSize**: `number`

#### Inherited from

ITextClickBehavior.cornerSize

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L64)

___

### cornerStrokeColor

 **cornerStrokeColor**: `string`

#### Inherited from

ITextClickBehavior.cornerStrokeColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L68)

___

### cornerStyle

 **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

ITextClickBehavior.cornerStyle

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L69)

___

### ctrlKeysMapDown

 **ctrlKeysMapDown**: `TKeyMapIText`

For functionalities on keyDown + ctrl || cmd

#### Inherited from

ITextClickBehavior.ctrlKeysMapDown

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:42](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L42)

___

### ctrlKeysMapUp

 **ctrlKeysMapUp**: `TKeyMapIText`

For functionalities on keyUp + ctrl || cmd

#### Inherited from

ITextClickBehavior.ctrlKeysMapUp

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:37](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L37)

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

#### Defined in

[src/shapes/IText/IText.ts:174](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L174)

___

### cursorDelay

 **cursorDelay**: `number`

Delay between cursor blink (in ms)

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.cursorDelay

#### Defined in

[src/shapes/IText/IText.ts:181](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L181)

___

### cursorDuration

 **cursorDuration**: `number`

Duration of cursor fade in (in ms)

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.cursorDuration

#### Defined in

[src/shapes/IText/IText.ts:188](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L188)

___

### cursorOffsetCache

 `Protected` **cursorOffsetCache**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left?` | `number` |
| `top?` | `number` |

#### Inherited from

ITextClickBehavior.cursorOffsetCache

#### Defined in

[src/shapes/IText/ITextBehavior.ts:74](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L74)

___

### cursorWidth

 **cursorWidth**: `number`

Width of cursor (in px)

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.cursorWidth

#### Defined in

[src/shapes/IText/IText.ts:164](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L164)

___

### deltaY

 **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.deltaY

#### Defined in

[src/shapes/Text/Text.ts:350](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L350)

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

ITextClickBehavior.direction

#### Defined in

[src/shapes/Text/Text.ts:363](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L363)

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

ITextClickBehavior.dirty

#### Defined in

[src/shapes/Object/Object.ts:164](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L164)

___

### draggableTextDelegate

 `Protected` **draggableTextDelegate**: `DraggableTextDelegate`

#### Inherited from

ITextClickBehavior.draggableTextDelegate

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L28)

___

### editable

 **editable**: `boolean`

Indicates whether a text can be edited

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.editable

#### Defined in

[src/shapes/IText/IText.ts:150](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L150)

___

### editingBorderColor

 **editingBorderColor**: `string`

Border color of text object while it's in editing mode

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.editingBorderColor

#### Defined in

[src/shapes/IText/IText.ts:157](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L157)

___

### evented

 **evented**: `boolean`

#### Inherited from

ITextClickBehavior.evented

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L81)

___

### excludeFromExport

 **excludeFromExport**: `boolean`

#### Inherited from

ITextClickBehavior.excludeFromExport

#### Defined in

[src/shapes/Object/Object.ts:131](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L131)

___

### fill

 **fill**: ``null`` \| `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

#### Inherited from

ITextClickBehavior.fill

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L114)

___

### fillRule

 **fillRule**: `CanvasFillRule`

#### Inherited from

ITextClickBehavior.fillRule

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L115)

___

### flipX

 **flipX**: `boolean`

#### Inherited from

ITextClickBehavior.flipX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

 **flipY**: `boolean`

#### Inherited from

ITextClickBehavior.flipY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L22)

___

### fontFamily

 **fontFamily**: `string`

Font family

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.fontFamily

#### Defined in

[src/shapes/Text/Text.ts:184](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L184)

___

### fontSize

 **fontSize**: `number`

Font size (in pixels)

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.fontSize

#### Defined in

[src/shapes/Text/Text.ts:170](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L170)

___

### fontStyle

 **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.fontStyle

#### Defined in

[src/shapes/Text/Text.ts:220](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L220)

___

### fontWeight

 **fontWeight**: `string`

Font weight (e.g. bold, normal, 400, 600, 800)

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.fontWeight

#### Defined in

[src/shapes/Text/Text.ts:177](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L177)

___

### globalCompositeOperation

 **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

ITextClickBehavior.globalCompositeOperation

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L123)

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

ITextClickBehavior.group

#### Defined in

[src/shapes/Object/Object.ts:247](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L247)

___

### hasBorders

 **hasBorders**: `boolean`

#### Inherited from

ITextClickBehavior.hasBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L77)

___

### hasControls

 **hasControls**: `boolean`

#### Inherited from

ITextClickBehavior.hasControls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:71](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L71)

___

### height

 **height**: `number`

#### Inherited from

ITextClickBehavior.height

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hiddenTextarea

 **hiddenTextarea**: ``null`` \| `HTMLTextAreaElement`

#### Inherited from

ITextClickBehavior.hiddenTextarea

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L44)

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

ITextClickBehavior.hiddenTextareaContainer

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:54](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L54)

___

### hoverCursor

 **hoverCursor**: ``null`` \| `string`

#### Inherited from

ITextClickBehavior.hoverCursor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L85)

___

### inCompositionMode

 `Protected` **inCompositionMode**: `boolean`

Helps determining when the text is in composition, so that the cursor
rendering is altered.

#### Inherited from

ITextClickBehavior.inCompositionMode

#### Defined in

[src/shapes/IText/ITextBehavior.ts:64](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L64)

___

### includeDefaultValues

 **includeDefaultValues**: `boolean`

#### Inherited from

ITextClickBehavior.includeDefaultValues

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L130)

___

### initialized

 `Optional` **initialized**: ``true``

#### Inherited from

ITextClickBehavior.initialized

#### Defined in

[src/shapes/Text/Text.ts:409](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L409)

___

### inverted

 **inverted**: `boolean`

#### Inherited from

ITextClickBehavior.inverted

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L136)

___

### isEditing

 **isEditing**: `boolean`

Indicates whether text is in editing mode

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.isEditing

#### Defined in

[src/shapes/IText/IText.ts:143](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L143)

___

### isMoving

 `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

ITextClickBehavior.isMoving

#### Defined in

[src/shapes/Object/InteractiveObject.ts:123](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L123)

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

ITextClickBehavior.keysMap

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:30](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L30)

___

### keysMapRtl

 **keysMapRtl**: `TKeyMapIText`

#### Inherited from

ITextClickBehavior.keysMapRtl

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:32](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L32)

___

### left

 **left**: `number`

#### Inherited from

ITextClickBehavior.left

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L18)

___

### lineHeight

 **lineHeight**: `number`

Line height

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.lineHeight

#### Defined in

[src/shapes/Text/Text.ts:227](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L227)

___

### linethrough

 **linethrough**: `boolean`

Text decoration linethrough.

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.linethrough

#### Defined in

[src/shapes/Text/Text.ts:205](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L205)

___

### lockMovementX

 **lockMovementX**: `boolean`

#### Inherited from

ITextClickBehavior.lockMovementX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:55](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L55)

___

### lockMovementY

 **lockMovementY**: `boolean`

#### Inherited from

ITextClickBehavior.lockMovementY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:56](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L56)

___

### lockRotation

 **lockRotation**: `boolean`

#### Inherited from

ITextClickBehavior.lockRotation

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L57)

___

### lockScalingFlip

 **lockScalingFlip**: `boolean`

#### Inherited from

ITextClickBehavior.lockScalingFlip

#### Defined in

[src/shapes/Object/InteractiveObject.ts:62](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L62)

___

### lockScalingX

 **lockScalingX**: `boolean`

#### Inherited from

ITextClickBehavior.lockScalingX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L58)

___

### lockScalingY

 **lockScalingY**: `boolean`

#### Inherited from

ITextClickBehavior.lockScalingY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:59](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L59)

___

### lockSkewingX

 **lockSkewingX**: `boolean`

#### Inherited from

ITextClickBehavior.lockSkewingX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L60)

___

### lockSkewingY

 **lockSkewingY**: `boolean`

#### Inherited from

ITextClickBehavior.lockSkewingY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L61)

___

### matrixCache

 `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

ITextClickBehavior.matrixCache

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L60)

___

### minScaleLimit

 **minScaleLimit**: `number`

#### Inherited from

ITextClickBehavior.minScaleLimit

#### Defined in

[src/shapes/Object/Object.ts:109](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L109)

___

### moveCursor

 **moveCursor**: ``null`` \| `string`

#### Inherited from

ITextClickBehavior.moveCursor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L86)

___

### noScaleCache

 **noScaleCache**: `boolean`

#### Inherited from

ITextClickBehavior.noScaleCache

#### Defined in

[src/shapes/Object/InteractiveObject.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L50)

___

### oCoords

 **oCoords**: `Record`\<`string`, `TOCoord`\>

The object's controls' position in viewport coordinates
Calculated by [Control#positionHandler](/apidocs/classes/Control.md#positionhandler) and [Control#calcCornerCoords](/apidocs/classes/Control.md#calccornercoords), depending on [padding](/apidocs/classes/FabricObject.md#padding).
`corner/touchCorner` describe the 4 points forming the interactive area of the corner.
Used to draw and locate controls.

#### Inherited from

ITextClickBehavior.oCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L94)

___

### objectCaching

 **objectCaching**: `boolean`

#### Inherited from

ITextClickBehavior.objectCaching

#### Defined in

[src/shapes/Object/Object.ts:133](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L133)

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

ITextClickBehavior.offsets

#### Defined in

[src/shapes/Text/Text.ts:328](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L328)

___

### opacity

 **opacity**: `number`

#### Inherited from

ITextClickBehavior.opacity

#### Defined in

[src/shapes/Object/Object.ts:111](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L111)

___

### originX

 **originX**: [`TOriginX`](/apidocs/modules.md#toriginx)

#### Inherited from

ITextClickBehavior.originX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

 **originY**: [`TOriginY`](/apidocs/modules.md#toriginy)

#### Inherited from

ITextClickBehavior.originY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L28)

___

### overline

 **overline**: `boolean`

Text decoration overline.

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.overline

#### Defined in

[src/shapes/Text/Text.ts:198](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L198)

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

ITextClickBehavior.ownCaching

#### Defined in

[src/shapes/Object/Object.ts:256](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L256)

___

### ownMatrixCache

 `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

ITextClickBehavior.ownMatrixCache

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:55](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L55)

___

### padding

 **padding**: `number`

#### Inherited from

ITextClickBehavior.padding

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:40](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L40)

___

### paintFirst

 **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

ITextClickBehavior.paintFirst

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L113)

___

### parent

 `Optional` **parent**: [`Group`](/apidocs/classes/Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

ITextClickBehavior.parent

#### Defined in

[src/shapes/Object/StackedObject.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L44)

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

ITextClickBehavior.path

#### Defined in

[src/shapes/Text/Text.ts:292](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L292)

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

ITextClickBehavior.pathAlign

#### Defined in

[src/shapes/Text/Text.ts:318](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L318)

___

### pathSide

 **pathSide**: [`TPathSide`](/apidocs/modules.md#tpathside)

Which side of the path the text should be drawn on.
Only used when text has a path

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.pathSide

#### Defined in

[src/shapes/Text/Text.ts:308](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L308)

___

### pathStartOffset

 **pathStartOffset**: `number`

Offset amount for text path starting position
Only used when text has a path

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.pathStartOffset

#### Defined in

[src/shapes/Text/Text.ts:300](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L300)

___

### perPixelTargetFind

 **perPixelTargetFind**: `boolean`

#### Inherited from

ITextClickBehavior.perPixelTargetFind

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L82)

___

### scaleX

 **scaleX**: `number`

#### Inherited from

ITextClickBehavior.scaleX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

 **scaleY**: `number`

#### Inherited from

ITextClickBehavior.scaleY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

 **selectable**: `boolean`

#### Inherited from

ITextClickBehavior.selectable

#### Defined in

[src/shapes/Object/InteractiveObject.ts:80](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L80)

___

### selected

 `Protected` **selected**: `boolean`

#### Inherited from

ITextClickBehavior.selected

#### Defined in

[src/shapes/IText/ITextBehavior.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L73)

___

### selectionBackgroundColor

 **selectionBackgroundColor**: `string`

#### Inherited from

ITextClickBehavior.selectionBackgroundColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L78)

___

### selectionColor

 **selectionColor**: `string`

Color of text selection

**`Default`**

```ts

```

#### Defined in

[src/shapes/IText/IText.ts:136](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L136)

___

### selectionEnd

 **selectionEnd**: `number`

Index where text selection ends

**`Default`**

```ts

```

#### Implementation of

UniqueITextProps.selectionEnd

#### Overrides

ITextClickBehavior.selectionEnd

#### Defined in

[src/shapes/IText/IText.ts:125](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L125)

___

### selectionStart

 **selectionStart**: `number`

Index where text selection starts (or where cursor is when there is no selection)

**`Default`**

```ts

```

#### Implementation of

UniqueITextProps.selectionStart

#### Overrides

ITextClickBehavior.selectionStart

#### Defined in

[src/shapes/IText/IText.ts:118](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L118)

___

### shadow

 **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md)

#### Inherited from

ITextClickBehavior.shadow

#### Defined in

[src/shapes/Object/Object.ts:126](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L126)

___

### skewX

 **skewX**: `number`

#### Inherited from

ITextClickBehavior.skewX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

 **skewY**: `number`

#### Inherited from

ITextClickBehavior.skewY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

 `Optional` **snapAngle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

ITextClickBehavior.snapAngle

#### Defined in

[src/shapes/Object/InteractiveObject.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L52)

___

### snapThreshold

 `Optional` **snapThreshold**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

ITextClickBehavior.snapThreshold

#### Defined in

[src/shapes/Object/InteractiveObject.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L53)

___

### stroke

 **stroke**: ``null`` \| `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

#### Inherited from

ITextClickBehavior.stroke

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L116)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

ITextClickBehavior.strokeDashArray

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L117)

___

### strokeDashOffset

 **strokeDashOffset**: `number`

#### Inherited from

ITextClickBehavior.strokeDashOffset

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L118)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap`

#### Inherited from

ITextClickBehavior.strokeLineCap

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L119)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

ITextClickBehavior.strokeLineJoin

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L120)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number`

#### Inherited from

ITextClickBehavior.strokeMiterLimit

#### Defined in

[src/shapes/Object/Object.ts:121](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L121)

___

### strokeUniform

 **strokeUniform**: `boolean`

#### Inherited from

ITextClickBehavior.strokeUniform

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

 **strokeWidth**: `number`

#### Inherited from

ITextClickBehavior.strokeWidth

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L30)

___

### styles

 **styles**: [`TextStyle`](/apidocs/modules.md#textstyle)

#### Inherited from

ITextClickBehavior.styles

#### Defined in

[src/shapes/Text/Text.ts:268](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L268)

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

ITextClickBehavior.subscript

#### Defined in

[src/shapes/Text/Text.ts:248](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L248)

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

ITextClickBehavior.superscript

#### Defined in

[src/shapes/Text/Text.ts:232](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L232)

___

### text

 **text**: `string`

#### Inherited from

ITextClickBehavior.text

#### Defined in

[src/shapes/Text/Text.ts:163](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L163)

___

### textAlign

 **textAlign**: `string`

Text alignment. Possible values: "left", "center", "right", "justify",
"justify-left", "justify-center" or "justify-right".

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.textAlign

#### Defined in

[src/shapes/Text/Text.ts:213](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L213)

___

### textBackgroundColor

 **textBackgroundColor**: `string`

Background color of text lines

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.textBackgroundColor

#### Defined in

[src/shapes/Text/Text.ts:266](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L266)

___

### textLines

 **textLines**: `string`[]

contains the the text of the object, divided in lines as they are displayed
on screen. Wrapping will divide the text independently of line breaks

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.textLines

#### Defined in

[src/shapes/Text/Text.ts:395](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L395)

___

### top

 **top**: `number`

#### Inherited from

ITextClickBehavior.top

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

 **touchCornerSize**: `number`

#### Inherited from

ITextClickBehavior.touchCornerSize

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L65)

___

### transparentCorners

 **transparentCorners**: `boolean`

#### Inherited from

ITextClickBehavior.transparentCorners

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L66)

___

### underline

 **underline**: `boolean`

Text decoration underline.

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.underline

#### Defined in

[src/shapes/Text/Text.ts:191](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L191)

___

### visible

 **visible**: `boolean`

#### Inherited from

ITextClickBehavior.visible

#### Defined in

[src/shapes/Object/Object.ts:128](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L128)

___

### width

 **width**: `number`

#### Inherited from

ITextClickBehavior.width

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:19](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L19)

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

ITextClickBehavior.zoomX

#### Defined in

[src/shapes/Object/Object.ts:212](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L212)

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

ITextClickBehavior.zoomY

#### Defined in

[src/shapes/Object/Object.ts:221](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L221)

___

### ATTRIBUTE\_NAMES

 `Static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [FabricText.fromElement](/apidocs/classes/FabricText.md#fromelement))

**`Static`**

**`Member Of`**

Text
@see: http://www.w3.org/TR/SVG/text.html#TextElement

#### Inherited from

ITextClickBehavior.ATTRIBUTE\_NAMES

#### Defined in

[src/shapes/Text/Text.ts:1801](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1801)

___

### \_styleProperties

 `Static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

ITextClickBehavior.\_styleProperties

#### Defined in

[src/shapes/Text/StyledText.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L29)

___

### cacheProperties

 `Static` **cacheProperties**: `string`[]

#### Inherited from

ITextClickBehavior.cacheProperties

#### Defined in

[src/shapes/Text/Text.ts:411](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L411)

___

### colorProperties

 `Static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

ITextClickBehavior.colorProperties

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/AnimatableObject.ts#L20)

___

### genericFonts

 `Static` **genericFonts**: `string`[]

#### Inherited from

ITextClickBehavior.genericFonts

#### Defined in

[src/shapes/Text/Text.ts:1785](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1785)

___

### ownDefaults

 `Static` **ownDefaults**: `Record`\<`string`, `any`\> = `iTextDefaultValues`

#### Overrides

ITextClickBehavior.ownDefaults

#### Defined in

[src/shapes/IText/IText.ts:199](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L199)

___

### stateProperties

 `Static` **stateProperties**: `string`[] = `stateProperties`

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

ITextClickBehavior.stateProperties

#### Defined in

[src/shapes/Object/Object.ts:147](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L147)

___

### textLayoutProperties

 `Static` `Protected` **textLayoutProperties**: `string`[] = `textLayoutProperties`

Properties that requires a text layout recalculation when changed

#### Inherited from

ITextClickBehavior.textLayoutProperties

#### Defined in

[src/shapes/Text/Text.ts:135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L135)

___

### type

 `Static` **type**: `string` = `'IText'`

#### Overrides

ITextClickBehavior.type

#### Defined in

[src/shapes/IText/IText.ts:205](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L205)

## Accessors

### type

`get` **type**(): `string`

#### Returns

`string`

#### Overrides

ITextClickBehavior.type

#### Defined in

[src/shapes/IText/IText.ts:207](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L207)

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

#### Defined in

[src/shapes/IText/IText.ts:434](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L434)

___

### \_animate

**_animate**\<`T`\>(`key`, `endValue`, `options?`): [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| [`TRGBColorSource`](/apidocs/modules.md#trgbcolorsource) \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource) \| [`Color`](/apidocs/classes/Color.md) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Property to animate |
| `endValue` | `T` | - |
| `options?` | `Partial`\<[`AnimationOptions`](/apidocs/modules/util.md#animationoptions)\<`T`\>\> | Options object |

#### Returns

[`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>

#### Inherited from

ITextClickBehavior.\_animate

#### Defined in

[src/shapes/Object/AnimatableObject.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/AnimatableObject.ts#L50)

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

ITextClickBehavior.\_animateCursor

#### Defined in

[src/shapes/IText/ITextBehavior.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L120)

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

ITextClickBehavior.\_applyPatternForTransformedGradient

#### Defined in

[src/shapes/Object/Object.ts:1259](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1259)

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

ITextClickBehavior.\_applyPatternGradientTransform

#### Defined in

[src/shapes/Object/Object.ts:1156](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1156)

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

ITextClickBehavior.\_applyPatternGradientTransformText

#### Defined in

[src/shapes/Text/Text.ts:1245](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1245)

___

### \_calcTextareaPosition

**_calcTextareaPosition**(): \{ `charHeight?`: `undefined` = charHeight; `fontSize?`: `undefined` ; `left`: `string` = '1px'; `top`: `string` = '1px' } \| \{ `charHeight`: `number` = charHeight; `fontSize`: `string` ; `left`: `string` ; `top`: `string`  }

#### Returns

\{ `charHeight?`: `undefined` = charHeight; `fontSize?`: `undefined` ; `left`: `string` = '1px'; `top`: `string` = '1px' } \| \{ `charHeight`: `number` = charHeight; `fontSize`: `string` ; `left`: `string` ; `top`: `string`  }

style contains style for hiddenTextarea

#### Inherited from

ITextClickBehavior.\_calcTextareaPosition

#### Defined in

[src/shapes/IText/ITextBehavior.ts:559](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L559)

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

ITextClickBehavior.\_calculateCurrentDimensions

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:553](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L553)

___

### \_clearCache

**_clearCache**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_clearCache

#### Defined in

[src/shapes/Text/Text.ts:1491](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1491)

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

ITextClickBehavior.\_constrainScale

#### Defined in

[src/shapes/Object/Object.ts:676](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L676)

___

### \_createBaseClipPathSVGMarkup

**_createBaseClipPathSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` |
| `objectMarkup` | `string`[] | `undefined` |
| `«destructured»` | `Object` | `{}` |
| › `additionalTransform?` | `string` | `''` |
| › `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | `undefined` |

#### Returns

`string`

#### Inherited from

ITextClickBehavior.\_createBaseClipPathSVGMarkup

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:158](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L158)

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

ITextClickBehavior.\_createBaseSVGMarkup

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

**_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_createCacheCanvas

#### Defined in

[src/shapes/Object/Object.ts:320](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L320)

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

ITextClickBehavior.\_deleteLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:320](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L320)

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

ITextClickBehavior.\_deleteStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:298](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L298)

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

ITextClickBehavior.\_drawBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:361](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L361)

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

ITextClickBehavior.\_drawClipPath

#### Defined in

[src/shapes/Object/Object.ts:948](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L948)

___

### \_exitEditing

**_exitEditing**(): `void`

runs the actual logic that exits from editing state, see [exitEditing](/apidocs/classes/IText.md#exitediting)

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_exitEditing

#### Defined in

[src/shapes/IText/ITextBehavior.ts:663](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L663)

___

### \_findCenterFromElement

**_findCenterFromElement**(): [`Point`](/apidocs/classes/Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates

#### Returns

[`Point`](/apidocs/classes/Point.md)

center point from element coordinates

#### Inherited from

ITextClickBehavior.\_findCenterFromElement

#### Defined in

[src/shapes/Object/Object.ts:1307](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1307)

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

ITextClickBehavior.\_findTargetCorner

#### Defined in

[src/shapes/Object/InteractiveObject.ts:180](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L180)

___

### \_fireSelectionChanged

**_fireSelectionChanged**(): `void`

Fires the even of selection changed

#### Returns

`void`

#### Overrides

ITextClickBehavior.\_fireSelectionChanged

#### Defined in

[src/shapes/IText/IText.ts:282](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L282)

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

ITextClickBehavior.\_getCacheCanvasDimensions

#### Defined in

[src/shapes/Text/Text.ts:588](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L588)

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

#### Defined in

[src/shapes/IText/IText.ts:682](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L682)

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

#### Overrides

ITextClickBehavior.\_getCursorBoundaries

#### Defined in

[src/shapes/IText/IText.ts:395](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L395)

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

#### Defined in

[src/shapes/IText/IText.ts:416](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L416)

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

ITextClickBehavior.\_getFontDeclaration

#### Defined in

[src/shapes/Text/Text.ts:1648](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1648)

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

ITextClickBehavior.\_getGraphemeBox

#### Defined in

[src/shapes/Text/Text.ts:973](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L973)

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

ITextClickBehavior.\_getIndexOnLine

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:416](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L416)

___

### \_getLeftOffset

**_getLeftOffset**(): `number`

#### Returns

`number`

Left offset

#### Inherited from

ITextClickBehavior.\_getLeftOffset

#### Defined in

[src/shapes/Text/Text.ts:1048](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1048)

___

### \_getLeftTopCoords

**_getLeftTopCoords**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

ITextClickBehavior.\_getLeftTopCoords

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:227](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L227)

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

ITextClickBehavior.\_getLineLeftOffset

#### Defined in

[src/shapes/Text/Text.ts:1445](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1445)

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

ITextClickBehavior.\_getLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:307](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L307)

___

### \_getNonTransformedDimensions

**_getNonTransformedDimensions**(): [`Point`](/apidocs/classes/Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

ITextClickBehavior.\_getNonTransformedDimensions

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:542](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L542)

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

ITextClickBehavior.\_getSelectionForOffset

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:377](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L377)

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

ITextClickBehavior.\_getStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:252](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L252)

___

### \_getTopOffset

**_getTopOffset**(): `number`

#### Returns

`number`

Top offset

#### Inherited from

ITextClickBehavior.\_getTopOffset

#### Defined in

[src/shapes/Text/Text.ts:1056](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1056)

___

### \_getTransformedDimensions

**_getTransformedDimensions**(`options?`): [`Point`](/apidocs/classes/Point.md)

Calculate object bounding box dimensions from its properties scale, skew.
This bounding box is aligned with object angle and not with canvas axis or screen.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

ITextClickBehavior.\_getTransformedDimensions

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L50)

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

ITextClickBehavior.\_getWidthBeforeCursor

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:328](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L328)

___

### \_getWidthOfCharSpacing

**_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Inherited from

ITextClickBehavior.\_getWidthOfCharSpacing

#### Defined in

[src/shapes/Text/Text.ts:1515](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1515)

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

ITextClickBehavior.\_limitCacheSize

#### Defined in

[src/shapes/Object/Object.ts:343](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L343)

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

ITextClickBehavior.\_measureChar

#### Defined in

[src/shapes/Text/Text.ts:792](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L792)

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

ITextClickBehavior.\_measureLine

#### Defined in

[src/shapes/Text/Text.ts:881](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L881)

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

ITextClickBehavior.\_mouseDownHandler

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:127](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L127)

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

ITextClickBehavior.\_mouseDownHandlerBefore

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:162](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L162)

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

ITextClickBehavior.\_move

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:548](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L548)

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

ITextClickBehavior.\_moveCursorLeftOrRight

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:638](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L638)

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

ITextClickBehavior.\_moveCursorUpOrDown

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:477](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L477)

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

ITextClickBehavior.\_moveLeft

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:572](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L572)

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

ITextClickBehavior.\_moveRight

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:579](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L579)

___

### \_removeCacheCanvas

**_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_removeCacheCanvas

#### Defined in

[src/shapes/Object/Object.ts:802](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L802)

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

ITextClickBehavior.\_removeDefaultValues

#### Defined in

[src/shapes/Object/Object.ts:591](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L591)

___

### \_removeExtraneousStyles

**_removeExtraneousStyles**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_removeExtraneousStyles

#### Defined in

[src/shapes/IText/ITextBehavior.ts:703](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L703)

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

ITextClickBehavior.\_removeShadow

#### Defined in

[src/shapes/Object/Object.ts:1142](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1142)

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

ITextClickBehavior.\_render

#### Defined in

[src/shapes/Text/Text.ts:600](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L600)

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

ITextClickBehavior.\_renderBackground

#### Defined in

[src/shapes/Object/Object.ts:1010](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1010)

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

ITextClickBehavior.\_renderChar

#### Defined in

[src/shapes/Text/Text.ts:1343](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1343)

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

ITextClickBehavior.\_renderChars

#### Defined in

[src/shapes/Text/Text.ts:1132](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1132)

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

ITextClickBehavior.\_renderControls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:387](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L387)

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

#### Defined in

[src/shapes/IText/IText.ts:493](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L493)

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

ITextClickBehavior.\_renderFill

#### Defined in

[src/shapes/Object/Object.ts:1209](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1209)

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

ITextClickBehavior.\_renderPaintInOrder

#### Defined in

[src/shapes/Object/Object.ts:1184](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1184)

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

#### Defined in

[src/shapes/IText/IText.ts:571](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L571)

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

ITextClickBehavior.\_renderStroke

#### Defined in

[src/shapes/Object/Object.ts:1228](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1228)

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

ITextClickBehavior.\_renderText

#### Defined in

[src/shapes/Text/Text.ts:615](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L615)

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

ITextClickBehavior.\_renderTextCommon

#### Defined in

[src/shapes/Text/Text.ts:1065](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1065)

___

### \_renderTextDecoration

**_renderTextDecoration**(`ctx`, `type`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `type` | ``"overline"`` \| ``"underline"`` \| ``"linethrough"`` | - |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderTextDecoration

#### Defined in

[src/shapes/Text/Text.ts:1542](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1542)

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

ITextClickBehavior.\_renderTextFill

#### Defined in

[src/shapes/Text/Text.ts:1094](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1094)

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

ITextClickBehavior.\_renderTextLine

#### Defined in

[src/shapes/Text/Text.ts:684](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L684)

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

ITextClickBehavior.\_renderTextLinesBackground

#### Defined in

[src/shapes/Text/Text.ts:700](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L700)

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

ITextClickBehavior.\_renderTextStroke

#### Defined in

[src/shapes/Text/Text.ts:1106](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1106)

___

### \_restoreEditingProps

**_restoreEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_restoreEditingProps

#### Defined in

[src/shapes/IText/ITextBehavior.ts:638](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L638)

___

### \_saveEditingProps

**_saveEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_saveEditingProps

#### Defined in

[src/shapes/IText/ITextBehavior.ts:622](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L622)

___

### \_set

**_set**(`key`, `value`): [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

While editing handle differently

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

ITextClickBehavior.\_set

#### Defined in

[src/shapes/IText/IText.ts:230](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L230)

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

ITextClickBehavior.\_setClippingProperties

#### Defined in

[src/shapes/Object/Object.ts:1088](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1088)

___

### \_setEditingProps

**_setEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setEditingProps

#### Defined in

[src/shapes/IText/ITextBehavior.ts:449](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L449)

___

### \_setFillStyles

**_setFillStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `style` | `Pick`\<[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>, ``"fill"``\> | with ill defined |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

ITextClickBehavior.\_setFillStyles

#### Defined in

[src/shapes/Text/Text.ts:1328](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1328)

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

ITextClickBehavior.\_setGraphemeOnPath

#### Defined in

[src/shapes/Text/Text.ts:954](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L954)

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

ITextClickBehavior.\_setLineDash

#### Defined in

[src/shapes/Object/Object.ts:1100](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1100)

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

ITextClickBehavior.\_setLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:316](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L316)

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

ITextClickBehavior.\_setObject

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L18)

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

ITextClickBehavior.\_setOpacity

#### Defined in

[src/shapes/Object/Object.ts:1027](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1027)

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

ITextClickBehavior.\_setOptions

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L9)

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

ITextClickBehavior.\_setScript

#### Defined in

[src/shapes/Text/Text.ts:1418](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1418)

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

ITextClickBehavior.\_setShadow

#### Defined in

[src/shapes/Object/Object.ts:1115](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1115)

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

ITextClickBehavior.\_setStrokeStyles

#### Defined in

[src/shapes/Text/Text.ts:1306](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1306)

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

ITextClickBehavior.\_setStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:284](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L284)

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

ITextClickBehavior.\_setTextStyles

#### Defined in

[src/shapes/Text/Text.ts:635](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L635)

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

ITextClickBehavior.\_setupCompositeOperation

#### Defined in

[src/shapes/Object/Object.ts:1539](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1539)

___

### \_splitText

**_splitText**(): `TextLinesInfo`

Divides text into lines of text and lines of graphemes.

#### Returns

`TextLinesInfo`

#### Inherited from

ITextClickBehavior.\_splitText

#### Defined in

[src/shapes/Text/Text.ts:446](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L446)

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

#### Inherited from

ITextClickBehavior.\_splitTextIntoLines

#### Defined in

[src/shapes/Text/Text.ts:1716](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1716)

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

ITextClickBehavior.\_toSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L120)

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

#### Defined in

[src/shapes/IText/IText.ts:267](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L267)

___

### \_updateCacheCanvas

**_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

ITextClickBehavior.\_updateCacheCanvas

#### Defined in

[src/shapes/Object/InteractiveObject.ts:153](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L153)

___

### \_updateTextarea

**_updateTextarea**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_updateTextarea

#### Defined in

[src/shapes/IText/ITextBehavior.ts:502](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L502)

___

### abortCursorAnimation

**abortCursorAnimation**(): `void`

Aborts cursor animation, clears all timeouts and clear textarea context if necessary

#### Returns

`void`

#### Inherited from

ITextClickBehavior.abortCursorAnimation

#### Defined in

[src/shapes/IText/ITextBehavior.ts:181](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L181)

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

ITextClickBehavior.addPaintOrder

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

___

### animate

**animate**\<`T`\>(`animatable`, `options?`): `Record`\<`string`, [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>\>

Animates object's properties

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| [`TRGBColorSource`](/apidocs/modules.md#trgbcolorsource) \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource) \| [`Color`](/apidocs/classes/Color.md) \| `number`[] |

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

ITextClickBehavior.animate

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/AnimatableObject.ts#L34)

___

### blur

**blur**(): `void`

Override this method to customize cursor behavior on textbox blur

#### Returns

`void`

#### Inherited from

ITextClickBehavior.blur

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:106](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L106)

___

### calcACoords

**calcACoords**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

#### Inherited from

ITextClickBehavior.calcACoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:414](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L414)

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

ITextClickBehavior.calcOCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:212](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L212)

___

### calcOwnMatrix

**calcOwnMatrix**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

transform matrix for the object

#### Inherited from

ITextClickBehavior.calcOwnMatrix

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:511](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L511)

___

### calcTextHeight

**calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Inherited from

ITextClickBehavior.calcTextHeight

#### Defined in

[src/shapes/Text/Text.ts:1034](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1034)

___

### calcTextWidth

**calcTextWidth**(): `number`

calculate and return the text Width measuring each line.

#### Returns

`number`

Maximum width of Text object

#### Inherited from

ITextClickBehavior.calcTextWidth

#### Defined in

[src/shapes/Text/Text.ts:663](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L663)

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

ITextClickBehavior.calcTransformMatrix

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:483](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L483)

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

ITextClickBehavior.canDrop

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:66](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L66)

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

ITextClickBehavior.cleanStyle

#### Defined in

[src/shapes/Text/StyledText.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L102)

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

ITextClickBehavior.clearContextTop

#### Defined in

[src/shapes/Object/InteractiveObject.ts:572](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L572)

___

### clone

**clone**(`propertiesToInclude?`): `Promise`\<[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`\<[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

ITextClickBehavior.clone

#### Defined in

[src/shapes/Object/Object.ts:1316](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1316)

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

ITextClickBehavior.cloneAsImage

#### Defined in

[src/shapes/Object/Object.ts:1342](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1342)

___

### complexity

**complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity

#### Inherited from

ITextClickBehavior.complexity

#### Defined in

[src/shapes/Text/Text.ts:1781](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1781)

___

### containsPoint

**containsPoint**(`point`): `boolean`

Checks if point is inside the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | Point to check against |

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

ITextClickBehavior.containsPoint

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:269](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L269)

___

### copy

**copy**(): `void`

Copies selected text

#### Returns

`void`

#### Inherited from

ITextClickBehavior.copy

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:295](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L295)

___

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Overrides

ITextClickBehavior.dispose

#### Defined in

[src/shapes/IText/IText.ts:689](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L689)

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

ITextClickBehavior.doubleClickHandler

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L102)

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

ITextClickBehavior.drawBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:425](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L425)

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

ITextClickBehavior.drawCacheOnCanvas

#### Defined in

[src/shapes/Object/Object.ts:966](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L966)

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

ITextClickBehavior.drawClipPathOnCache

#### Defined in

[src/shapes/Object/Object.ts:895](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L895)

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

ITextClickBehavior.drawControls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:494](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L494)

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

ITextClickBehavior.drawControlsConnectingLines

#### Defined in

[src/shapes/Object/InteractiveObject.ts:464](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L464)

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

ITextClickBehavior.drawObject

#### Defined in

[src/shapes/Object/Object.ts:927](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L927)

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

ITextClickBehavior.drawSelectionBackground

#### Defined in

[src/shapes/Object/InteractiveObject.ts:327](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L327)

___

### enlargeSpaces

**enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Inherited from

ITextClickBehavior.enlargeSpaces

#### Defined in

[src/shapes/Text/Text.ts:481](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L481)

___

### enterEditing

**enterEditing**(`e?`): `void`

Enters editing state

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.enterEditing

#### Defined in

[src/shapes/IText/ITextBehavior.ts:378](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L378)

___

### exitEditing

**exitEditing**(): [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

Exits from editing state and fires relevant events

#### Returns

[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.exitEditing

#### Defined in

[src/shapes/IText/ITextBehavior.ts:681](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L681)

___

### findCommonAncestors

**findCommonAncestors**\<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`\<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |
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

ITextClickBehavior.findCommonAncestors

#### Defined in

[src/shapes/Object/StackedObject.ts:90](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L90)

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

ITextClickBehavior.findLineBoundaryLeft

#### Defined in

[src/shapes/IText/ITextBehavior.ts:282](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L282)

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

ITextClickBehavior.findLineBoundaryRight

#### Defined in

[src/shapes/IText/ITextBehavior.ts:299](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L299)

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

ITextClickBehavior.findWordBoundaryLeft

#### Defined in

[src/shapes/IText/ITextBehavior.ts:234](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L234)

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

ITextClickBehavior.findWordBoundaryRight

#### Defined in

[src/shapes/IText/ITextBehavior.ts:258](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L258)

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

ITextClickBehavior.fire

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L159)

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

ITextClickBehavior.forEachControl

#### Defined in

[src/shapes/Object/InteractiveObject.ts:305](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L305)

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

ITextClickBehavior.fromGraphemeToStringSelection

#### Defined in

[src/shapes/IText/ITextBehavior.ts:481](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L481)

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

ITextClickBehavior.fromStringToGraphemeSelection

#### Defined in

[src/shapes/IText/ITextBehavior.ts:464](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L464)

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

ITextClickBehavior.get

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L59)

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

#### Overrides

ITextClickBehavior.get2DCursorLocation

#### Defined in

[src/shapes/IText/IText.ts:334](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L334)

___

### getActiveControl

**getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ITextClickBehavior.getActiveControl

#### Defined in

[src/shapes/Object/InteractiveObject.ts:165](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L165)

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

ITextClickBehavior.getAncestors

#### Defined in

[src/shapes/Object/StackedObject.ts:69](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L69)

___

### getBoundingRect

**getBoundingRect**(): [`TBBox`](/apidocs/modules.md#tbbox)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/apidocs/modules.md#tbbox)

Object with left, top, width, height properties

#### Inherited from

ITextClickBehavior.getBoundingRect

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:330](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L330)

___

### getCanvasRetinaScaling

**getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

ITextClickBehavior.getCanvasRetinaScaling

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:387](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L387)

___

### getCenterPoint

**getCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

ITextClickBehavior.getCenterPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:174](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L174)

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

ITextClickBehavior.getCompleteStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:267](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L267)

___

### getCoords

**getCoords**(): [`Point`](/apidocs/classes/Point.md)[]

#### Returns

[`Point`](/apidocs/classes/Point.md)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

ITextClickBehavior.getCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:191](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L191)

___

### getCurrentCharColor

**getCurrentCharColor**(): ``null`` \| `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

High level function to know the color of the cursor.
the currentChar is the one that precedes the cursor
Returns color (fill) of char at the current cursor
if the text object has a pattern or gradient for filler, it will return that.
Unused by the library, is for the end user

#### Returns

``null`` \| `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

Character color (fill)

#### Defined in

[src/shapes/IText/IText.ts:673](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L673)

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

#### Defined in

[src/shapes/IText/IText.ts:660](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L660)

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

ITextClickBehavior.getDownCursorOffset

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:345](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L345)

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

ITextClickBehavior.getHeightOfChar

#### Defined in

[src/shapes/Text/Text.ts:856](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L856)

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

ITextClickBehavior.getHeightOfLine

#### Defined in

[src/shapes/Text/Text.ts:1015](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1015)

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

ITextClickBehavior.getLineWidth

#### Defined in

[src/shapes/Text/Text.ts:1505](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1505)

___

### getObjectOpacity

**getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

ITextClickBehavior.getObjectOpacity

#### Defined in

[src/shapes/Object/Object.ts:661](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L661)

___

### getObjectScaling

**getObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

ITextClickBehavior.getObjectScaling

#### Defined in

[src/shapes/Object/Object.ts:630](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L630)

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

ITextClickBehavior.getPointByOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:199](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L199)

___

### getRelativeCenterPoint

**getRelativeCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

ITextClickBehavior.getRelativeCenterPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:185](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L185)

___

### getRelativeX

**getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/apidocs/classes/IText.md#getx)

#### Inherited from

ITextClickBehavior.getRelativeX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L102)

___

### getRelativeXY

**getRelativeXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x,y position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

ITextClickBehavior.getRelativeXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:163](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L163)

___

### getRelativeY

**getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/apidocs/classes/IText.md#gety)

#### Inherited from

ITextClickBehavior.getRelativeY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:118](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L118)

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

ITextClickBehavior.getScaledHeight

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:348](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L348)

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

ITextClickBehavior.getScaledWidth

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:339](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L339)

___

### getSelectedText

**getSelectedText**(): `string`

Returns selected text

#### Returns

`string`

#### Inherited from

ITextClickBehavior.getSelectedText

#### Defined in

[src/shapes/IText/ITextBehavior.ts:225](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L225)

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

ITextClickBehavior.getSelectionStartFromPointer

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:237](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L237)

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

#### Overrides

ITextClickBehavior.getSelectionStyles

#### Defined in

[src/shapes/IText/IText.ts:307](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L307)

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

ITextClickBehavior.getStyleAtPosition

#### Defined in

[src/shapes/Text/StyledText.ts:224](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L224)

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

ITextClickBehavior.getSvgCommons

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

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

ITextClickBehavior.getSvgFilter

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

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

ITextClickBehavior.getSvgStyles

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:21](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L21)

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

ITextClickBehavior.getSvgTransform

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

**getTotalAngle**(): [`TDegree`](/apidocs/modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

ITextClickBehavior.getTotalAngle

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:395](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L395)

___

### getTotalObjectScaling

**getTotalObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/apidocs/classes/Point.md)

object with scaleX and scaleY properties

#### Inherited from

ITextClickBehavior.getTotalObjectScaling

#### Defined in

[src/shapes/Object/Object.ts:647](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L647)

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

ITextClickBehavior.getUpCursorOffset

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:390](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L390)

___

### getValueOfPropertyAt

**getValueOfPropertyAt**\<`T`\>(`lineIndex`, `charIndex`, `property`): [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>[`T`]

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

[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>[`T`]

the value of 'property'

#### Inherited from

ITextClickBehavior.getValueOfPropertyAt

#### Defined in

[src/shapes/Text/Text.ts:1529](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1529)

___

### getViewportTransform

**getViewportTransform**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

#### Inherited from

ITextClickBehavior.getViewportTransform

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:405](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L405)

___

### getX

**getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

ITextClickBehavior.getX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L73)

___

### getXY

**getXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

ITextClickBehavior.getXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:133](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L133)

___

### getY

**getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

ITextClickBehavior.getY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:87](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L87)

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

ITextClickBehavior.graphemeSplit

#### Defined in

[src/shapes/Text/Text.ts:1707](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1707)

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
| `filler` | `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

ITextClickBehavior.handleFiller

#### Defined in

[src/shapes/Text/Text.ts:1266](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1266)

___

### hasCommonAncestors

**hasCommonAncestors**\<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.hasCommonAncestors

#### Defined in

[src/shapes/Object/StackedObject.ts:159](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L159)

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

ITextClickBehavior.hasFill

#### Defined in

[src/shapes/Object/Object.ts:835](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L835)

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

ITextClickBehavior.hasStroke

#### Defined in

[src/shapes/Object/Object.ts:819](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L819)

___

### initBehavior

**initBehavior**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.initBehavior

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:30](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L30)

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

ITextClickBehavior.initDelayedCursor

#### Defined in

[src/shapes/IText/ITextBehavior.ts:173](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L173)

___

### initDimensions

**initDimensions**(): `void`

Initialize text dimensions. Render all text on given context
or on a offscreen canvas to get the text width with measureText.
Updates this.width and this.height with the proper values.
Does not return dimensions.

#### Returns

`void`

#### Overrides

ITextClickBehavior.initDimensions

#### Defined in

[src/shapes/IText/IText.ts:294](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L294)

___

### initHiddenTextarea

**initHiddenTextarea**(): `void`

Initializes hidden textarea (needed to bring up keyboard in iOS)

#### Returns

`void`

#### Inherited from

ITextClickBehavior.initHiddenTextarea

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:63](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L63)

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

ITextClickBehavior.insertCharStyleObject

#### Defined in

[src/shapes/IText/ITextBehavior.ts:867](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L867)

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

ITextClickBehavior.insertChars

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1017](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L1017)

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

ITextClickBehavior.insertNewStyleBlock

#### Defined in

[src/shapes/IText/ITextBehavior.ts:925](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L925)

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

ITextClickBehavior.insertNewlineStyleObject

#### Defined in

[src/shapes/IText/ITextBehavior.ts:801](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L801)

___

### intersectsWithObject

**intersectsWithObject**(`other`): `boolean`

Checks if object intersects with another object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to test |

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

ITextClickBehavior.intersectsWithObject

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:219](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L219)

___

### intersectsWithRect

**intersectsWithRect**(`tl`, `br`): `boolean`

Checks if object intersects with the scene rect formed by tl and br

#### Parameters

| Name | Type |
| :------ | :------ |
| `tl` | [`Point`](/apidocs/classes/Point.md) |
| `br` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.intersectsWithRect

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:205](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L205)

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

ITextClickBehavior.isCacheDirty

#### Defined in

[src/shapes/Object/Object.ts:980](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L980)

___

### isContainedWithinObject

**isContainedWithinObject**(`other`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to test |

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

ITextClickBehavior.isContainedWithinObject

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:238](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L238)

___

### isContainedWithinRect

**isContainedWithinRect**(`tl`, `br`): `boolean`

Checks if object is fully contained within the scene rect formed by tl and br

#### Parameters

| Name | Type |
| :------ | :------ |
| `tl` | [`Point`](/apidocs/classes/Point.md) |
| `br` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isContainedWithinRect

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:246](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L246)

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

ITextClickBehavior.isControlVisible

#### Defined in

[src/shapes/Object/InteractiveObject.ts:529](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L529)

___

### isDescendantOf

**isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [Group.contains](/apidocs/classes/Group.md#contains) or [StaticCanvas.contains](/apidocs/classes/StaticCanvas.md#contains) for performance reasons

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TAncestor` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isDescendantOf

#### Defined in

[src/shapes/Object/StackedObject.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L52)

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

ITextClickBehavior.isEmptyStyles

#### Defined in

[src/shapes/Text/StyledText.ts:40](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L40)

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

#### Inherited from

ITextClickBehavior.isEndOfWrapping

#### Defined in

[src/shapes/Text/Text.ts:525](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L525)

___

### isInFrontOf

**isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

ITextClickBehavior.isInFrontOf

#### Defined in

[src/shapes/Object/StackedObject.ts:169](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L169)

___

### isNotVisible

**isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isNotVisible

#### Defined in

[src/shapes/Object/Object.ts:742](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L742)

___

### isOnScreen

**isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

ITextClickBehavior.isOnScreen

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:278](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L278)

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

ITextClickBehavior.isOverlapping

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:256](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L256)

___

### isPartiallyOnScreen

**isPartiallyOnScreen**(): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

ITextClickBehavior.isPartiallyOnScreen

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:308](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L308)

___

### isStrokeAccountedForInDimensions

**isStrokeAccountedForInDimensions**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

intermidiate method to be removed, do not use

#### Inherited from

ITextClickBehavior.isStrokeAccountedForInDimensions

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:184](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L184)

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

ITextClickBehavior.isTripleClick

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:90](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L90)

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

ITextClickBehavior.isType

#### Defined in

[src/shapes/Object/Object.ts:1470](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1470)

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

ITextClickBehavior.measureLine

#### Defined in

[src/shapes/Text/Text.ts:864](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L864)

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

#### Inherited from

ITextClickBehavior.missingNewlineOffset

#### Defined in

[src/shapes/Text/Text.ts:535](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L535)

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

ITextClickBehavior.mouseUpHandler

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:175](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L175)

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

ITextClickBehavior.moveCursorDown

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:451](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L451)

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

ITextClickBehavior.moveCursorLeft

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:535](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L535)

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

ITextClickBehavior.moveCursorLeftWithShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:607](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L607)

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

ITextClickBehavior.moveCursorLeftWithoutShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:587](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L587)

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

ITextClickBehavior.moveCursorRight

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:623](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L623)

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

ITextClickBehavior.moveCursorRightWithShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:655](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L655)

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

ITextClickBehavior.moveCursorRightWithoutShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:671](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L671)

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

ITextClickBehavior.moveCursorUp

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:465](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L465)

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

ITextClickBehavior.moveCursorWithShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:503](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L503)

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

ITextClickBehavior.moveCursorWithoutShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:520](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L520)

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

ITextClickBehavior.needsItsOwnCache

#### Defined in

[src/shapes/Object/Object.ts:847](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L847)

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

ITextClickBehavior.off

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L120)

**off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`\<`EventSpec`\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.off

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L125)

**off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

ITextClickBehavior.off

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L129)

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

ITextClickBehavior.on

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L23)

**on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

ITextClickBehavior.on

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L27)

___

### onCompositionEnd

**onCompositionEnd**(): `void`

Composition end

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onCompositionEnd

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:281](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L281)

___

### onCompositionStart

**onCompositionStart**(): `void`

Composition start

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onCompositionStart

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:274](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L274)

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

ITextClickBehavior.onCompositionUpdate

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:285](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L285)

___

### onDeselect

**onDeselect**(`options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` |
| `options.object?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.onDeselect

#### Defined in

[src/shapes/IText/ITextBehavior.ts:111](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L111)

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

ITextClickBehavior.onDragStart

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:59](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L59)

___

### onInput

**onInput**(`this`, `e`): `void`

Handles onInput event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\> & \{ `hiddenTextarea`: `HTMLTextAreaElement`  } | - |
| `e` | `Event` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onInput

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:167](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L167)

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

ITextClickBehavior.onKeyDown

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:115](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L115)

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

ITextClickBehavior.onKeyUp

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:147](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L147)

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

ITextClickBehavior.onMouseDown

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:74](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L74)

___

### onSelect

**onSelect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` | event if the process is generated by an event |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.onSelect

#### Defined in

[src/shapes/Object/InteractiveObject.ts:617](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L617)

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

ITextClickBehavior.once

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L62)

**once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

ITextClickBehavior.once

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L66)

___

### paste

**paste**(): `void`

Pastes text

#### Returns

`void`

#### Inherited from

ITextClickBehavior.paste

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:317](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextKeyBehavior.ts#L317)

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

ITextClickBehavior.removeChars

#### Defined in

[src/shapes/IText/ITextBehavior.ts:995](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L995)

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

ITextClickBehavior.removeStyle

#### Defined in

[src/shapes/Text/StyledText.ts:164](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L164)

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

ITextClickBehavior.removeStyleFromTo

#### Defined in

[src/shapes/IText/ITextBehavior.ts:716](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L716)

___

### render

**render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Overrides

ITextClickBehavior.render

#### Defined in

[src/shapes/IText/IText.ts:345](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L345)

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

ITextClickBehavior.renderCache

#### Defined in

[src/shapes/Object/Object.ts:788](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L788)

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

#### Defined in

[src/shapes/IText/IText.ts:489](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L489)

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

#### Defined in

[src/shapes/IText/IText.ts:479](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L479)

___

### renderCursorOrSelection

**renderCursorOrSelection**(): `void`

Renders cursor or selection (depending on what exists)
it does on the contextTop. If contextTop is not available, do nothing.

#### Returns

`void`

#### Overrides

ITextClickBehavior.renderCursorOrSelection

#### Defined in

[src/shapes/IText/IText.ts:369](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L369)

___

### renderDragSourceEffect

**renderDragSourceEffect**(): `void`

Renders drag start text selection

#### Returns

`void`

#### Overrides

ITextClickBehavior.renderDragSourceEffect

#### Defined in

[src/shapes/IText/IText.ts:549](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L549)

___

### renderDropTargetEffect

**renderDropTargetEffect**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Overrides

ITextClickBehavior.renderDropTargetEffect

#### Defined in

[src/shapes/IText/IText.ts:559](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L559)

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

#### Defined in

[src/shapes/IText/IText.ts:534](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L534)

___

### restartCursorIfNeeded

**restartCursorIfNeeded**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.restartCursorIfNeeded

#### Defined in

[src/shapes/IText/ITextBehavior.ts:200](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L200)

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

ITextClickBehavior.rotate

#### Defined in

[src/shapes/Object/Object.ts:1498](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1498)

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

ITextClickBehavior.scale

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:357](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L357)

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

ITextClickBehavior.scaleToHeight

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:380](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L380)

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

ITextClickBehavior.scaleToWidth

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:368](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L368)

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

ITextClickBehavior.searchWordBoundary

#### Defined in

[src/shapes/IText/ITextBehavior.ts:317](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L317)

___

### selectAll

**selectAll**(): [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

Selects entire text

#### Returns

[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.selectAll

#### Defined in

[src/shapes/IText/ITextBehavior.ts:213](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L213)

___

### selectLine

**selectLine**(`selectionStart`): [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

Selects a line based on the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart` | `number` | Index of a character |

#### Returns

[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.selectLine

#### Defined in

[src/shapes/IText/ITextBehavior.ts:363](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L363)

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

ITextClickBehavior.selectWord

#### Defined in

[src/shapes/IText/ITextBehavior.ts:342](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L342)

___

### set

**set**(`key`, `value?`): [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

#### Returns

[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.set

#### Defined in

[src/shapes/Text/Text.ts:1750](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1750)

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

ITextClickBehavior.setControlVisible

#### Defined in

[src/shapes/Object/InteractiveObject.ts:544](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L544)

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

ITextClickBehavior.setControlsVisibility

#### Defined in

[src/shapes/Object/InteractiveObject.ts:556](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L556)

___

### setCoords

**setCoords**(): `void`

set controls' coordinates as well
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:295](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L295)

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

ITextClickBehavior.setCursorByClick

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:216](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L216)

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

ITextClickBehavior.setOnGroup

#### Defined in

[src/shapes/Object/Object.ts:1530](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1530)

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

ITextClickBehavior.setOptions

#### Defined in

[src/shapes/Object/Object.ts:496](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L496)

___

### setPathInfo

**setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setPathInfo

#### Defined in

[src/shapes/Text/Text.ts:435](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L435)

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

ITextClickBehavior.setPositionByOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:214](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L214)

___

### setRelativeX

**setRelativeX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\ if parent is canvas then this method is identical to [setX](/apidocs/classes/IText.md#setx) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setRelativeX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:110](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L110)

___

### setRelativeXY

**setRelativeXY**(`point`, `originX?`, `originY?`): `void`

As [setXY](/apidocs/classes/IText.md#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | position according to object's originX originY properties in parent's coordinate plane |
| `originX?` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setRelativeXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:173](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L173)

___

### setRelativeY

**setRelativeY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\ if parent is canvas then this property is identical to [setY](/apidocs/classes/IText.md#sety) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setRelativeY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:126](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L126)

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

#### Defined in

[src/shapes/IText/IText.ts:257](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L257)

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

#### Defined in

[src/shapes/IText/IText.ts:248](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L248)

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

ITextClickBehavior.setSelectionStartEndWithShift

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1044](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L1044)

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

#### Overrides

ITextClickBehavior.setSelectionStyles

#### Defined in

[src/shapes/IText/IText.ts:321](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L321)

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

ITextClickBehavior.setSubscript

#### Defined in

[src/shapes/Text/Text.ts:1407](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1407)

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

ITextClickBehavior.setSuperscript

#### Defined in

[src/shapes/Text/Text.ts:1398](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1398)

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

ITextClickBehavior.setX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:80](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L80)

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
| `originX?` | `number` \| ``"center"`` \| ``"left"`` \| ``"right"`` | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | `number` \| ``"center"`` \| ``"top"`` \| ``"bottom"`` | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

**`Example`**

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

ITextClickBehavior.setXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:150](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L150)

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

ITextClickBehavior.setY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L94)

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

ITextClickBehavior.shiftLineStyles

#### Defined in

[src/shapes/IText/ITextBehavior.ts:778](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L778)

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

ITextClickBehavior.shouldCache

#### Defined in

[src/shapes/Object/Object.ts:871](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L871)

___

### shouldStartDragging

**shouldStartDragging**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.shouldStartDragging

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:51](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L51)

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

ITextClickBehavior.strokeBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:351](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L351)

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

ITextClickBehavior.styleHas

#### Defined in

[src/shapes/Text/StyledText.ts:69](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L69)

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

#### Overrides

ITextClickBehavior.toCanvasElement

#### Defined in

[src/shapes/IText/IText.ts:357](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L357)

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

ITextClickBehavior.toClipPathSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:143](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L143)

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

ITextClickBehavior.toDataURL

#### Defined in

[src/shapes/Object/Object.ts:1457](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1457)

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

ITextClickBehavior.toDatalessObject

#### Defined in

[src/shapes/Object/Object.ts:582](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L582)

___

### toJSON

**toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

ITextClickBehavior.toJSON

#### Defined in

[src/shapes/Object/Object.ts:1489](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1489)

___

### toObject

**toObject**\<`T`, `K`\>(`propertiesToInclude?`): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`\<`Props` & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Inherited from

ITextClickBehavior.toObject

#### Defined in

[src/shapes/Text/Text.ts:1739](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1739)

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

ITextClickBehavior.toSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

**toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Inherited from

ITextClickBehavior.toString

#### Defined in

[src/shapes/Text/Text.ts:571](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L571)

___

### toggle

**toggle**(`property`): [`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`IText`](/apidocs/classes/IText.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.toggle

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L46)

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

ITextClickBehavior.transform

#### Defined in

[src/shapes/Object/Object.ts:504](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L504)

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

ITextClickBehavior.transformMatrixKey

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:440](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L440)

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

ITextClickBehavior.translateToCenterPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:127](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L127)

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

ITextClickBehavior.translateToGivenOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L99)

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

ITextClickBehavior.translateToOriginPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:152](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L152)

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

ITextClickBehavior.tripleClickHandler

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:112](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextClickBehavior.ts#L112)

___

### updateFromTextArea

**updateFromTextArea**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.updateFromTextArea

#### Defined in

[src/shapes/IText/ITextBehavior.ts:522](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L522)

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

ITextClickBehavior.updateSelectionOnMouseMove

#### Defined in

[src/shapes/IText/ITextBehavior.ts:410](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L410)

___

### updateTextareaPosition

**updateTextareaPosition**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.updateTextareaPosition

#### Defined in

[src/shapes/IText/ITextBehavior.ts:547](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/ITextBehavior.ts#L547)

___

### willDrawShadow

**willDrawShadow**(): `boolean`

Check if this object will cast a shadow with an offset.
used by Group.shouldCache to know if child has a shadow recursively

#### Returns

`boolean`

**`Deprecated`**

#### Inherited from

ITextClickBehavior.willDrawShadow

#### Defined in

[src/shapes/Object/Object.ts:884](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L884)

___

### \_fromObject

**_fromObject**\<`S`\>(`«destructured»`, `«destructured»?`): `Promise`\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Record`\<`string`, `unknown`\> |
| `«destructured»` | [`Abortable`](/apidocs/modules.md#abortable) & \{ `extraParam?`: `string`  } |

#### Returns

`Promise`\<`S`\>

#### Inherited from

ITextClickBehavior.\_fromObject

#### Defined in

[src/shapes/Object/Object.ts:1568](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1568)

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

ITextClickBehavior.fromElement

#### Defined in

[src/shapes/Text/Text.ts:1822](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1822)

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

ITextClickBehavior.fromObject

#### Defined in

[src/shapes/Text/Text.ts:1899](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L1899)

___

### getDefaults

**getDefaults**(): `Object`

#### Returns

`Object`

#### Overrides

ITextClickBehavior.getDefaults

#### Defined in

[src/shapes/IText/IText.ts:201](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L201)
