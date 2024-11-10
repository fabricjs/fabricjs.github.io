---
editUrl: false
next: false
prev: false
title: "IText"
---

## Fires

changed

## Fires

selection:changed

## Fires

editing:entered

## Fires

editing:exited

## Fires

dragstart

## Fires

drag drag event firing on the drag source

## Fires

dragend

## Fires

copy

## Fires

cut

## Fires

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

## Extends

- `ITextClickBehavior`\<`Props`, `SProps`, `EventSpec`\>

## Extended by

- [`Textbox`](/api/classes/textbox/)

## Type Parameters

• **Props** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`ITextProps`](/api/interfaces/itextprops/)\> = `Partial`\<[`ITextProps`](/api/interfaces/itextprops/)\>

• **SProps** *extends* [`SerializedITextProps`](/api/interfaces/serializeditextprops/) = [`SerializedITextProps`](/api/interfaces/serializeditextprops/)

• **EventSpec** *extends* [`ITextEvents`](/api/type-aliases/itextevents/) = [`ITextEvents`](/api/type-aliases/itextevents/)

## Implements

- `UniqueITextProps`

## Constructors

### new IText()

> **new IText**\<`Props`, `SProps`, `EventSpec`\>(`text`, `options`?): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Parameters

• **text**: `string`

Text string

• **options?**: `Props`

Options object

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`ITextClickBehavior<Props, SProps, EventSpec>.constructor`

#### Defined in

[src/shapes/IText/IText.ts:233](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L233)

## Properties

### MIN\_TEXT\_WIDTH

> **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.MIN_TEXT_WIDTH`

#### Defined in

[src/shapes/Text/Text.ts:391](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L391)

***

### \_\_corner?

> `optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

`ITextClickBehavior.__corner`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L105)

***

### \_\_lineHeights

> **\_\_lineHeights**: `number`[]

#### Inherited from

`ITextClickBehavior.__lineHeights`

#### Defined in

[src/shapes/Text/Text.ts:411](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L411)

***

### \_\_lineWidths

> **\_\_lineWidths**: `number`[]

#### Inherited from

`ITextClickBehavior.__lineWidths`

#### Defined in

[src/shapes/Text/Text.ts:412](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L412)

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

`ITextClickBehavior._controlsVisibility`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:112](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L112)

***

### \_fontSizeMult

> **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior._fontSizeMult`

#### Defined in

[src/shapes/Text/Text.ts:339](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L339)

***

### \_scaling?

> `optional` **\_scaling**: `boolean`

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

#### TODO

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

`ITextClickBehavior._scaling`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L134)

***

### \_text

> **\_text**: `string`[]

#### Inherited from

`ITextClickBehavior._text`

#### Defined in

[src/shapes/Text/Text.ts:409](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L409)

***

### \_textLines

> **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior._textLines`

#### Defined in

[src/shapes/Text/Text.ts:406](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L406)

***

### \_unwrappedTextLines

> **\_unwrappedTextLines**: `string`[][]

#### Inherited from

`ITextClickBehavior._unwrappedTextLines`

#### Defined in

[src/shapes/Text/Text.ts:408](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L408)

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/itext/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/itext/#calcacoords)

#### Inherited from

`ITextClickBehavior.aCoords`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:63](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L63)

***

### absolutePositioned

> **absolutePositioned**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will have its top and left relative to canvas, and will
not be influenced by the object transform. This will make the clipPath relative
to the canvas, but clipping just a particular object.
WARNING this is beta, this feature may change or be renamed.
since 2.4.0

#### Default

```ts
false
```

#### Inherited from

`ITextClickBehavior.absolutePositioned`

#### Defined in

[src/shapes/Object/Object.ts:218](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L218)

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

`ITextClickBehavior.angle`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:581](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L581)

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.backgroundColor`

#### Defined in

[src/shapes/Object/Object.ts:205](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L205)

***

### borderColor

> **borderColor**: `string`

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

`ITextClickBehavior.borderColor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L74)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

`ITextClickBehavior.borderDashArray`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L75)

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Inherited from

`ITextClickBehavior.borderOpacityWhenMoving`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L76)

***

### borderScaleFactor

> **borderScaleFactor**: `number`

Scale factor of object's controlling borders
bigger number will make a thicker border
border is 1, so this is basically a border thickness
since there is no way to change the border itself.

#### Default

```ts
1
```

#### Inherited from

`ITextClickBehavior.borderScaleFactor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L77)

***

### caching

> **caching**: `boolean`

Indicates whether internal text char widths can be cached

#### Default

```ts

```

#### Defined in

[src/shapes/IText/IText.ts:212](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L212)

***

### centeredRotation

> **centeredRotation**: `boolean`

When `true` the object will rotate on its center.
When `false` will rotate around the origin point defined by originX and originY.
The value of this property is IGNORED during a transform if the canvas has already
centeredRotation set to `true`
The object method `rotate` will always consider this property and never the canvas's one.

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.centeredRotation`

#### Defined in

[src/shapes/Object/Object.ts:219](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L219)

***

### centeredScaling

> **centeredScaling**: `boolean`

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.centeredScaling`

#### Defined in

[src/shapes/Object/Object.ts:220](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L220)

***

### charSpacing

> **charSpacing**: `number`

additional space between characters
expressed in thousands of em unit

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.charSpacing`

#### Defined in

[src/shapes/Text/Text.ts:347](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L347)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`ITextClickBehavior.clipPath`

#### Defined in

[src/shapes/Object/Object.ts:216](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L216)

***

### clipPathId?

> `optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

`ITextClickBehavior.clipPathId`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

***

### compositionColor

> **compositionColor**: `string`

#### Defined in

[src/shapes/IText/IText.ts:205](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L205)

***

### compositionEnd

> **compositionEnd**: `number`

#### Overrides

`ITextClickBehavior.compositionEnd`

#### Defined in

[src/shapes/IText/IText.ts:144](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L144)

***

### compositionStart

> **compositionStart**: `number`

#### Overrides

`ITextClickBehavior.compositionStart`

#### Defined in

[src/shapes/IText/IText.ts:142](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L142)

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

`ITextClickBehavior.controls`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:118](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L118)

***

### cornerColor

> **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

`ITextClickBehavior.cornerColor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L68)

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Default

```ts
null
```

#### Inherited from

`ITextClickBehavior.cornerDashArray`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:71](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L71)

***

### cornerSize

> **cornerSize**: `number`

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Inherited from

`ITextClickBehavior.cornerSize`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L65)

***

### cornerStrokeColor

> **cornerStrokeColor**: `string`

Color of controlling corners of an object (when it's active and transparentCorners false)

#### Since

1.6.2

#### Default

```ts
''
```

#### Inherited from

`ITextClickBehavior.cornerStrokeColor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L69)

***

### ~~cornerStyle~~

> **cornerStyle**: `"circle"` \| `"rect"`

Specify style of control, 'rect' or 'circle'
This is deprecated. In the future there will be a standard control render
And you can swap it with one of the alternative proposed with the control api

#### Since

1.6.2

#### Default

```ts
'rect'
```

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Inherited from

`ITextClickBehavior.cornerStyle`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L70)

***

### ctrlKeysMapDown

> **ctrlKeysMapDown**: `TKeyMapIText`

For functionalities on keyDown + ctrl || cmd

#### Inherited from

`ITextClickBehavior.ctrlKeysMapDown`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:42](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L42)

***

### ctrlKeysMapUp

> **ctrlKeysMapUp**: `TKeyMapIText`

For functionalities on keyUp + ctrl || cmd

#### Inherited from

`ITextClickBehavior.ctrlKeysMapUp`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:37](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L37)

***

### cursorColor

> **cursorColor**: `string`

Color of text cursor color in editing mode.
if not set (default) will take color from the text.
if set to a color value that fabric can understand, it will
be used instead of the color of the text at the current position.

#### Default

```ts

```

#### Defined in

[src/shapes/IText/IText.ts:189](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L189)

***

### cursorDelay

> **cursorDelay**: `number`

Delay between cursor blink (in ms)

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.cursorDelay`

#### Defined in

[src/shapes/IText/IText.ts:196](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L196)

***

### cursorDuration

> **cursorDuration**: `number`

Duration of cursor fade in (in ms)

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.cursorDuration`

#### Defined in

[src/shapes/IText/IText.ts:203](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L203)

***

### cursorWidth

> **cursorWidth**: `number`

Width of cursor (in px)

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.cursorWidth`

#### Defined in

[src/shapes/IText/IText.ts:179](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L179)

***

### deltaY

> **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.deltaY`

#### Defined in

[src/shapes/Text/Text.ts:354](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L354)

***

### direction

> **direction**: `CanvasDirection`

WARNING: EXPERIMENTAL. NOT SUPPORTED YET
determine the direction of the text.
This has to be set manually together with textAlign and originX for proper
experience.
some interesting link for the future
https://www.w3.org/International/questions/qa-bidi-unicode-controls

#### Since

4.5.0

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.direction`

#### Defined in

[src/shapes/Text/Text.ts:367](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L367)

***

### dirty

> **dirty**: `boolean`

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

#### Default

```ts
true
```

#### Inherited from

`ITextClickBehavior.dirty`

#### Defined in

[src/shapes/Object/Object.ts:245](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L245)

***

### editable

> **editable**: `boolean`

Indicates whether a text can be edited

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.editable`

#### Defined in

[src/shapes/IText/IText.ts:165](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L165)

***

### editingBorderColor

> **editingBorderColor**: `string`

Border color of text object while it's in editing mode

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.editingBorderColor`

#### Defined in

[src/shapes/IText/IText.ts:172](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L172)

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.evented`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L82)

***

### excludeFromExport

> **excludeFromExport**: `boolean`

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.excludeFromExport`

#### Defined in

[src/shapes/Object/Object.ts:212](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L212)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

`ITextClickBehavior.fill`

#### Defined in

[src/shapes/Object/Object.ts:195](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L195)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Inherited from

`ITextClickBehavior.fillRule`

#### Defined in

[src/shapes/Object/Object.ts:196](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L196)

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

`ITextClickBehavior.flipX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:567](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L567)

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

`ITextClickBehavior.flipY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:568](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L568)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.fontFamily`

#### Defined in

[src/shapes/Text/Text.ts:188](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L188)

***

### fontSize

> **fontSize**: `number`

Font size (in pixels)

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.fontSize`

#### Defined in

[src/shapes/Text/Text.ts:174](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L174)

***

### fontStyle

> **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.fontStyle`

#### Defined in

[src/shapes/Text/Text.ts:224](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L224)

***

### fontWeight

> **fontWeight**: `string` \| `number`

Font weight (e.g. bold, normal, 400, 600, 800)

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.fontWeight`

#### Defined in

[src/shapes/Text/Text.ts:181](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L181)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.globalCompositeOperation`

#### Defined in

[src/shapes/Object/Object.ts:204](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L204)

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.hasBorders`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L78)

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts
true
```

#### Inherited from

`ITextClickBehavior.hasControls`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L72)

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.height`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:566](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L566)

***

### hiddenTextarea

> **hiddenTextarea**: `null` \| `HTMLTextAreaElement`

#### Inherited from

`ITextClickBehavior.hiddenTextarea`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:44](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L44)

***

### hiddenTextareaContainer?

> `optional` **hiddenTextareaContainer**: `null` \| `HTMLElement`

DOM container to append the hiddenTextarea.
An alternative to attaching to the document.body.
Useful to reduce laggish redraw of the full document.body tree and
also with modals event capturing that won't let the textarea take focus.

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.hiddenTextareaContainer`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:54](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L54)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

`ITextClickBehavior.hoverCursor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L86)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.includeDefaultValues`

#### Defined in

[src/shapes/Object/Object.ts:211](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L211)

***

### initialized?

> `optional` **initialized**: `true`

#### Inherited from

`ITextClickBehavior.initialized`

#### Defined in

[src/shapes/Text/Text.ts:413](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L413)

***

### inverted

> **inverted**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

#### Default

```ts
false
```

#### Inherited from

`ITextClickBehavior.inverted`

#### Defined in

[src/shapes/Object/Object.ts:217](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L217)

***

### isEditing

> **isEditing**: `boolean`

Indicates whether text is in editing mode

#### Default

```ts

```

#### Overrides

`ITextClickBehavior.isEditing`

#### Defined in

[src/shapes/IText/IText.ts:158](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L158)

***

### isMoving?

> `optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

`ITextClickBehavior.isMoving`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:124](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L124)

***

### keysMap

> **keysMap**: `TKeyMapIText`

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

`ITextClickBehavior.keysMap`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:30](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L30)

***

### keysMapRtl

> **keysMapRtl**: `TKeyMapIText`

#### Inherited from

`ITextClickBehavior.keysMapRtl`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:32](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L32)

***

### left

> **left**: `number`

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](../../../../api/interfaces/fabricobjectprops/#originx)

#### Default

```ts
0
```

#### Inherited from

`ITextClickBehavior.left`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:564](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L564)

***

### lineHeight

> **lineHeight**: `number`

Line height

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lineHeight`

#### Defined in

[src/shapes/Text/Text.ts:231](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L231)

***

### linethrough

> **linethrough**: `boolean`

Text decoration linethrough.

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.linethrough`

#### Defined in

[src/shapes/Text/Text.ts:209](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L209)

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lockMovementX`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:56](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L56)

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lockMovementY`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L57)

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lockRotation`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L58)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lockScalingFlip`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L63)

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lockScalingX`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:59](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L59)

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lockScalingY`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L60)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lockSkewingX`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L61)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.lockSkewingY`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L62)

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

`ITextClickBehavior.matrixCache`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:73](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L73)

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Inherited from

`ITextClickBehavior.minScaleLimit`

#### Defined in

[src/shapes/Object/Object.ts:190](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L190)

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

`ITextClickBehavior.moveCursor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:87](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L87)

***

### noScaleCache

> **noScaleCache**: `boolean`

When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
too much and will be redrawn with correct details at the end of scaling.
this setting is performance and application dependant.
default to true
since 1.7.0

#### Default

```ts
true
```

#### Inherited from

`ITextClickBehavior.noScaleCache`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:51](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L51)

***

### oCoords

> **oCoords**: `Record`\<`string`, `TOCoord`\>

The object's controls' position in viewport coordinates
Calculated by [Control#positionHandler](../../../../api/classes/control/#positionhandler) and [Control#calcCornerCoords](../../../../api/classes/control/#calccornercoords), depending on [padding](../../../../api/classes/fabricobject/#padding).
`corner/touchCorner` describe the 4 points forming the interactive area of the corner.
Used to draw and locate controls.

#### Inherited from

`ITextClickBehavior.oCoords`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:95](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L95)

***

### objectCaching

> **objectCaching**: `boolean`

When `true`, object is cached on an additional canvas.
When `false`, object is not cached unless necessary ( clipPath )
default to true

#### Since

1.7.0

#### Default

```ts
true
```

#### Inherited from

`ITextClickBehavior.objectCaching`

#### Defined in

[src/shapes/Object/Object.ts:214](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L214)

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

`ITextClickBehavior.opacity`

#### Defined in

[src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L192)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

`ITextClickBehavior.originX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:576](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L576)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

`ITextClickBehavior.originY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:580](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L580)

***

### overline

> **overline**: `boolean`

Text decoration overline.

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.overline`

#### Defined in

[src/shapes/Text/Text.ts:202](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L202)

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

`ITextClickBehavior.ownMatrixCache`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:68](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L68)

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

`ITextClickBehavior.padding`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:53](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L53)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.paintFirst`

#### Defined in

[src/shapes/Object/Object.ts:194](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L194)

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

`ITextClickBehavior.parent`

#### Defined in

[src/shapes/Object/Object.ts:1636](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1636)

***

### path?

> `optional` **path**: [`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Path that the text should follow.
since 4.6.0 the path will be drawn automatically.
if you want to make the path visible, give it a stroke and strokeWidth or fill value
if you want it to be hidden, assign visible = false to the path.
This feature is in BETA, and SVG import/export is not yet supported.

#### Example

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

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.path`

#### Defined in

[src/shapes/Text/Text.ts:296](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L296)

***

### pathAlign

> **pathAlign**: [`TPathAlign`](/api/type-aliases/tpathalign/)

How text is aligned to the path. This property determines
the perpendicular position of each character relative to the path.
(one of "baseline", "center", "ascender", "descender")
This feature is in BETA, and its behavior may change

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.pathAlign`

#### Defined in

[src/shapes/Text/Text.ts:322](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L322)

***

### pathSide

> **pathSide**: [`TPathSide`](/api/type-aliases/tpathside/)

Which side of the path the text should be drawn on.
Only used when text has a path

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.pathSide`

#### Defined in

[src/shapes/Text/Text.ts:312](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L312)

***

### pathStartOffset

> **pathStartOffset**: `number`

Offset amount for text path starting position
Only used when text has a path

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.pathStartOffset`

#### Defined in

[src/shapes/Text/Text.ts:304](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L304)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.perPixelTargetFind`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L83)

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

`ITextClickBehavior.scaleX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:569](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L569)

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

`ITextClickBehavior.scaleY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:570](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L570)

***

### selectable

> **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.selectable`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L81)

***

### ~~selectionBackgroundColor~~

> **selectionBackgroundColor**: `string`

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

#### Default

```ts

```

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Inherited from

`ITextClickBehavior.selectionBackgroundColor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L79)

***

### selectionColor

> **selectionColor**: `string`

Color of text selection

#### Default

```ts

```

#### Defined in

[src/shapes/IText/IText.ts:151](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L151)

***

### selectionEnd

> **selectionEnd**: `number`

Index where text selection ends

#### Default

```ts

```

#### Implementation of

`UniqueITextProps.selectionEnd`

#### Overrides

`ITextClickBehavior.selectionEnd`

#### Defined in

[src/shapes/IText/IText.ts:140](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L140)

***

### selectionStart

> **selectionStart**: `number`

Index where text selection starts (or where cursor is when there is no selection)

#### Default

```ts

```

#### Implementation of

`UniqueITextProps.selectionStart`

#### Overrides

`ITextClickBehavior.selectionStart`

#### Defined in

[src/shapes/IText/IText.ts:133](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L133)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

#### Inherited from

`ITextClickBehavior.shadow`

#### Defined in

[src/shapes/Object/Object.ts:207](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L207)

***

### skewX

> **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

`ITextClickBehavior.skewX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:571](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L571)

***

### skewY

> **skewY**: `number`

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

`ITextClickBehavior.skewY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:572](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L572)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

`ITextClickBehavior.snapAngle`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:53](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L53)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

`ITextClickBehavior.snapThreshold`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:54](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L54)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

`ITextClickBehavior.stroke`

#### Defined in

[src/shapes/Object/Object.ts:197](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L197)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

`ITextClickBehavior.strokeDashArray`

#### Defined in

[src/shapes/Object/Object.ts:198](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L198)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

`ITextClickBehavior.strokeDashOffset`

#### Defined in

[src/shapes/Object/Object.ts:199](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L199)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

`ITextClickBehavior.strokeLineCap`

#### Defined in

[src/shapes/Object/Object.ts:200](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L200)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.strokeLineJoin`

#### Defined in

[src/shapes/Object/Object.ts:201](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L201)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

`ITextClickBehavior.strokeMiterLimit`

#### Defined in

[src/shapes/Object/Object.ts:202](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L202)

***

### strokeUniform

> **strokeUniform**: `boolean`

When `false`, the stoke width will scale with the object.
When `true`, the stroke will always match the exact pixel size entered for stroke width.
this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
default to false

#### Since

2.6.0

#### Default

```ts
false
```

#### Default

```ts
false
```

#### Inherited from

`ITextClickBehavior.strokeUniform`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:583](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L583)

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

`ITextClickBehavior.strokeWidth`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:582](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L582)

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/)

#### Inherited from

`ITextClickBehavior.styles`

#### Defined in

[src/shapes/Text/Text.ts:272](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L272)

***

### subscript

> **subscript**: `object`

Subscript schema object (minimum overlap)

#### baseline

> **baseline**: `number`

baseline-shift factor (downwards)

##### Default

```ts
0.11
```

#### size

> **size**: `number`

fontSize factor

##### Default

```ts
0.6
```

#### Inherited from

`ITextClickBehavior.subscript`

#### Defined in

[src/shapes/Text/Text.ts:252](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L252)

***

### superscript

> **superscript**: `object`

Superscript schema object (minimum overlap)

#### baseline

> **baseline**: `number`

baseline-shift factor (upwards)

##### Default

```ts
-0.35
```

#### size

> **size**: `number`

fontSize factor

##### Default

```ts
0.6
```

#### Inherited from

`ITextClickBehavior.superscript`

#### Defined in

[src/shapes/Text/Text.ts:236](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L236)

***

### text

> **text**: `string`

#### Inherited from

`ITextClickBehavior.text`

#### Defined in

[src/shapes/Text/Text.ts:167](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L167)

***

### textAlign

> **textAlign**: `string`

Text alignment. Possible values: "left", "center", "right", "justify",
"justify-left", "justify-center" or "justify-right".

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.textAlign`

#### Defined in

[src/shapes/Text/Text.ts:217](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L217)

***

### textBackgroundColor

> **textBackgroundColor**: `string`

Background color of text lines

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.textBackgroundColor`

#### Defined in

[src/shapes/Text/Text.ts:270](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L270)

***

### textLines

> **textLines**: `string`[]

contains the the text of the object, divided in lines as they are displayed
on screen. Wrapping will divide the text independently of line breaks

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.textLines`

#### Defined in

[src/shapes/Text/Text.ts:399](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L399)

***

### top

> **top**: `number`

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](../../../../api/interfaces/fabricobjectprops/#originy)

#### Default

```ts
0
```

#### Inherited from

`ITextClickBehavior.top`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:563](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L563)

***

### touchCornerSize

> **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Inherited from

`ITextClickBehavior.touchCornerSize`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L66)

***

### transparentCorners

> **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Inherited from

`ITextClickBehavior.transparentCorners`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L67)

***

### underline

> **underline**: `boolean`

Text decoration underline.

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.underline`

#### Defined in

[src/shapes/Text/Text.ts:195](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L195)

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.visible`

#### Defined in

[src/shapes/Object/Object.ts:209](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L209)

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

`ITextClickBehavior.width`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:565](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L565)

***

### ATTRIBUTE\_NAMES

> `static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [FabricText.fromElement](../../../../api/classes/fabrictext/#fromelement))

#### Static

#### Member Of

Text
@see: http://www.w3.org/TR/SVG/text.html#TextElement

#### Inherited from

`ITextClickBehavior.ATTRIBUTE_NAMES`

#### Defined in

[src/shapes/Text/Text.ts:1826](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1826)

***

### \_styleProperties

> `static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

`ITextClickBehavior._styleProperties`

#### Defined in

[src/shapes/Text/StyledText.ts:30](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L30)

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

`ITextClickBehavior.cacheProperties`

#### Defined in

[src/shapes/Text/Text.ts:415](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L415)

***

### colorProperties

> `static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

`ITextClickBehavior.colorProperties`

#### Defined in

[src/shapes/Object/Object.ts:1543](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1543)

***

### customProperties

> `static` **customProperties**: `string`[] = `[]`

Define a list of custom properties that will be serialized when
instance.toObject() gets called

#### Inherited from

`ITextClickBehavior.customProperties`

#### Defined in

[src/shapes/Object/Object.ts:1784](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1784)

***

### genericFonts

> `static` **genericFonts**: `string`[]

List of generic font families

#### See

https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#generic-name

#### Inherited from

`ITextClickBehavior.genericFonts`

#### Defined in

[src/shapes/Text/Text.ts:1802](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1802)

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`IText`](/api/classes/itext/)\<`Partial`\<[`ITextProps`](/api/interfaces/itextprops/)\>, [`SerializedITextProps`](/api/interfaces/serializeditextprops/), [`ITextEvents`](/api/type-aliases/itextevents/)\>\>\> = `iTextDefaultValues`

#### Overrides

`ITextClickBehavior.ownDefaults`

#### Defined in

[src/shapes/IText/IText.ts:214](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L214)

***

### stateProperties

> `static` **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

`ITextClickBehavior.stateProperties`

#### Defined in

[src/shapes/Object/Object.ts:228](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L228)

***

### type

> `static` **type**: `string` = `'IText'`

#### Overrides

`ITextClickBehavior.type`

#### Defined in

[src/shapes/IText/IText.ts:220](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L220)

## Accessors

### type

> `get` **type**(): `string`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists to avoid type errors in old code and possibly current deserialization code.
DO NOT build new code around this type value

#### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Returns

`string`

#### Overrides

`ITextClickBehavior.type`

#### Defined in

[src/shapes/IText/IText.ts:222](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L222)

## Methods

### \_drawClipPath()

> **\_drawClipPath**(`ctx`, `clipPath`, `context`): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **clipPath**: `undefined` \| [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **context**: `DrawContext`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._drawClipPath`

#### Defined in

[src/shapes/Object/Object.ts:920](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L920)

***

### \_getFontDeclaration()

> **\_getFontDeclaration**(`__namedParameters`?, `forMeasuring`?): `string`

return font declaration string for canvas context

#### Parameters

• **\_\_namedParameters?**: `Partial`\<`Pick`\<`Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>, `"fontFamily"` \| `"fontSize"` \| `"fontStyle"` \| `"fontWeight"`\>\> = `{}`

• **forMeasuring?**: `boolean`

#### Returns

`string`

font declaration formatted for canvas context.

#### Inherited from

`ITextClickBehavior._getFontDeclaration`

#### Defined in

[src/shapes/Text/Text.ts:1661](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1661)

***

### \_getGraphemeBox()

> **\_getGraphemeBox**(`grapheme`, `lineIndex`, `charIndex`, `prevGrapheme`?, `skipLeft`?): [`GraphemeBBox`](/api/type-aliases/graphemebbox/)

#### Parameters

• **grapheme**: `string`

to be measured

• **lineIndex**: `number`

index of the line where the char is

• **charIndex**: `number`

position in the line

• **prevGrapheme?**: `string`

character preceding the one to be measured

• **skipLeft?**: `boolean`

#### Returns

[`GraphemeBBox`](/api/type-aliases/graphemebbox/)

grapheme bbox

#### Inherited from

`ITextClickBehavior._getGraphemeBox`

#### Defined in

[src/shapes/Text/Text.ts:983](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L983)

***

### \_getSelectionForOffset()

> **\_getSelectionForOffset**(`e`, `isRight`): `number`

private
Helps finding if the offset should be counted from Start or End

#### Parameters

• **e**: `KeyboardEvent`

Event object

• **isRight**: `boolean`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior._getSelectionForOffset`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:377](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L377)

***

### \_getWidthOfCharSpacing()

> **\_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior._getWidthOfCharSpacing`

#### Defined in

[src/shapes/Text/Text.ts:1528](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1528)

***

### \_limitCacheSize()

> **\_limitCacheSize**(`dims`): `any`

Limit the cache dimensions so that X * Y do not cross config.perfLimitSizeTotal
and each side do not cross fabric.cacheSideLimit
those numbers are configurable so that you can get as much detail as you want
making bargain with performances.

#### Parameters

• **dims**: `any`

#### Returns

`any`

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

`ITextClickBehavior._limitCacheSize`

#### Defined in

[src/shapes/Object/Object.ts:406](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L406)

***

### \_measureLine()

> **\_measureLine**(`lineIndex`): `object`

measure every grapheme of a line, populating __charBounds

#### Parameters

• **lineIndex**: `number`

#### Returns

`object`

object.width total width of characters

object.numOfSpaces length of chars that match this._reSpacesAndTabs

##### numOfSpaces

> **numOfSpaces**: `number` = `0`

##### width

> **width**: `number`

#### Inherited from

`ITextClickBehavior._measureLine`

#### Defined in

[src/shapes/Text/Text.ts:891](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L891)

***

### \_mouseDownHandler()

> **\_mouseDownHandler**(`__namedParameters`): `void`

Default event handler for the basic functionalities needed on _mouseDown
can be overridden to do something different.
Scope of this implementation is: find the click position, set selectionStart
find selectionEnd, initialize the drawing of either cursor or selection area
initializing a mousedDown on a text area will cancel fabricjs knowledge of
current compositionMode. It will be set to false.

#### Parameters

• **\_\_namedParameters**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._mouseDownHandler`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:136](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L136)

***

### \_mouseDownHandlerBefore()

> **\_mouseDownHandlerBefore**(`__namedParameters`): `void`

Default event handler for the basic functionalities needed on mousedown:before
can be overridden to do something different.
Scope of this implementation is: verify the object is already selected when mousing down

#### Parameters

• **\_\_namedParameters**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._mouseDownHandlerBefore`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:171](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L171)

***

### \_moveCursorLeftOrRight()

> **\_moveCursorLeftOrRight**(`direction`, `e`): `void`

Moves cursor right or Left, fires event

#### Parameters

• **direction**: `"Left"` \| `"Right"`

'Left', 'Right'

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._moveCursorLeftOrRight`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:639](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L639)

***

### \_moveCursorUpOrDown()

> **\_moveCursorUpOrDown**(`direction`, `e`): `void`

Moves cursor up or down, fires the events

#### Parameters

• **direction**: `"Up"` \| `"Down"`

'Up' or 'Down'

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._moveCursorUpOrDown`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:477](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L477)

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._removeCacheCanvas`

#### Defined in

[src/shapes/Object/Object.ts:756](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L756)

***

### \_renderControls()

> **\_renderControls**(`ctx`, `styleOverride`?): `void`

Renders controls and borders for the object
the context here is not transformed

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **styleOverride?**: `TStyleOverride` = `{}`

properties to override the object style

#### Returns

`void`

#### Todo

move to interactivity

#### Inherited from

`ITextClickBehavior._renderControls`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:435](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L435)

***

### \_renderCursor()

> **\_renderCursor**(`ctx`, `boundaries`, `selectionStart`): `void`

Render the cursor at the given selectionStart.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **boundaries**: [`CursorBoundaries`](/api/type-aliases/cursorboundaries/)

• **selectionStart**: `number`

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:550](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L550)

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._setClippingProperties`

#### Defined in

[src/shapes/Object/Object.ts:1062](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1062)

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `style`): `object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **style**: `Pick`\<[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

with ill defined

#### Returns

`object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Inherited from

`ITextClickBehavior._setFillStyles`

#### Defined in

[src/shapes/Text/Text.ts:1341](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1341)

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `style`): `object`

This function prepare the canvas for a stroke style, and stroke and strokeWidth
need to be sent in as defined

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **style**: `Pick`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/), `"stroke"` \| `"strokeWidth"`\>

with stroke and strokeWidth defined

#### Returns

`object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Inherited from

`ITextClickBehavior._setStrokeStyles`

#### Defined in

[src/shapes/Text/Text.ts:1319](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1319)

***

### \_setupCompositeOperation()

> **\_setupCompositeOperation**(`ctx`): `void`

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Rendering canvas context

#### Returns

`void`

#### Inherited from

`ITextClickBehavior._setupCompositeOperation`

#### Defined in

[src/shapes/Object/Object.ts:1518](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1518)

***

### \_splitTextIntoLines()

> **\_splitTextIntoLines**(`text`): `TextLinesInfo`

Returns the text as an array of lines.

#### Parameters

• **text**: `string`

text to split

#### Returns

`TextLinesInfo`

Lines in the text

#### Inherited from

`ITextClickBehavior._splitTextIntoLines`

#### Defined in

[src/shapes/Text/Text.ts:1729](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1729)

***

### \_toSVG()

> **\_toSVG**(`_reviver`?): `string`[]

Returns svg representation of an instance
This function is implemented in each subclass
This is just because typescript otherwise cryies all the time

#### Parameters

• **\_reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

`ITextClickBehavior._toSVG`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:120](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L120)

***

### abortCursorAnimation()

> **abortCursorAnimation**(): `void`

Aborts cursor animation, clears all timeouts and clear textarea context if necessary

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.abortCursorAnimation`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:183](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L183)

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

`ITextClickBehavior.addPaintOrder`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

***

### animate()

> **animate**\<`T`\>(`animatable`, `options`?): `Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

Animates object's properties

#### Type Parameters

• **T** *extends* `number` \| `number`[] \| [`TColorArg`](/api/type-aliases/tcolorarg/)

#### Parameters

• **animatable**: `Record`\<`string`, `T`\>

map of keys and end values

• **options?**: `Partial`\<[`AnimationOptions`](/api/namespaces/util/type-aliases/animationoptions/)\<`T`\>\>

#### Returns

`Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Inherited from

`ITextClickBehavior.animate`

#### Defined in

[src/shapes/Object/Object.ts:1557](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1557)

***

### blur()

> **blur**(): `void`

Override this method to customize cursor behavior on textbox blur

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.blur`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:106](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L106)

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

`ITextClickBehavior.calcACoords`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:427](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L427)

***

### calcOCoords()

> **calcOCoords**(): `Record`\<`string`, `TOCoord`\>

Calculates the coordinates of the center of each control plus the corners of the control itself
This basically just delegates to each control positionHandler
WARNING: changing what is passed to positionHandler is a breaking change, since position handler
is a public api and should be done just if extremely necessary

#### Returns

`Record`\<`string`, `TOCoord`\>

#### Inherited from

`ITextClickBehavior.calcOCoords`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:255](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L255)

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

`ITextClickBehavior.calcOwnMatrix`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:513](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L513)

***

### calcTextHeight()

> **calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.calcTextHeight`

#### Defined in

[src/shapes/Text/Text.ts:1044](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1044)

***

### calcTransformMatrix()

> **calcTransformMatrix**(`skipGroup`?): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

• **skipGroup?**: `boolean` = `false`

return transform matrix for object not counting parent transformations
There are some situation in which this is useful to avoid the fake rotation.

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

`ITextClickBehavior.calcTransformMatrix`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:485](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L485)

***

### canDrop()

> **canDrop**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drop target

#### Parameters

• **e**: `DragEvent`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.canDrop`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:75](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L75)

***

### cleanStyle()

> **cleanStyle**(`property`): `undefined` \| `false`

Check if characters in a text have a value for a property
whose value matches the textbox's value for that property.  If so,
the character-level property is deleted.  If the character
has no other properties, then it is also deleted.  Finally,
if the line containing that character has no other characters
then it also is deleted.

#### Parameters

• **property**: `StylePropertiesType`

The property to compare between characters and text.

#### Returns

`undefined` \| `false`

#### Inherited from

`ITextClickBehavior.cleanStyle`

#### Defined in

[src/shapes/Text/StyledText.ts:103](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L103)

***

### clearContextTop()

> **clearContextTop**(`restoreManually`?): `undefined` \| `CanvasRenderingContext2D`

Clears the canvas.contextTop in a specific area that corresponds to the object's bounding box
that is in the canvas.contextContainer.
This function is used to clear pieces of contextTop where we render ephemeral effects on top of the object.
Example: blinking cursor text selection, drag effects.

#### Parameters

• **restoreManually?**: `boolean`

When true won't restore the context after clear, in order to draw something else.

#### Returns

`undefined` \| `CanvasRenderingContext2D`

canvas.contextTop that is either still transformed
with the object transformMatrix, or restored to neutral transform

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Inherited from

`ITextClickBehavior.clearContextTop`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:627](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L627)

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

`ITextClickBehavior.clone`

#### Defined in

[src/shapes/Object/Object.ts:1292](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1292)

***

### cloneAsImage()

> **cloneAsImage**(`options`?): [`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Creates an instance of Image out of an object
makes use of toCanvasElement.
Once this method was based on toDataUrl and loadImage, so it also had a quality
and format option. toCanvasElement is faster and produce no loss of quality.
If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
toCanvasElement and then toBlob from the obtained canvas is also a good option.

#### Parameters

• **options?**: `ObjectToCanvasElementOptions`

for clone as image, passed to toDataURL

#### Returns

[`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object cloned as image.

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Inherited from

`ITextClickBehavior.cloneAsImage`

#### Defined in

[src/shapes/Object/Object.ts:1318](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1318)

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity

#### Inherited from

`ITextClickBehavior.complexity`

#### Defined in

[src/shapes/Text/Text.ts:1794](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1794)

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Checks if point is inside the object

#### Parameters

• **point**: [`Point`](/api/classes/point/)

Point to check against

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

`ITextClickBehavior.containsPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:282](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L282)

***

### copy()

> **copy**(): `void`

Copies selected text

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.copy`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:295](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L295)

***

### dispose()

> **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Overrides

`ITextClickBehavior.dispose`

#### Defined in

[src/shapes/IText/IText.ts:722](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L722)

***

### doubleClickHandler()

> **doubleClickHandler**(`options`): `void`

Default handler for double click, select a word

#### Parameters

• **options**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.doubleClickHandler`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:111](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L111)

***

### drawBorders()

> **drawBorders**(`ctx`, `options`, `styleOverride`?): `void`

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **options**: `Required`\<`Omit`\<[`TComposeMatrixArgs`](/api/namespaces/util/type-aliases/tcomposematrixargs/), `"flipX"` \| `"flipY"`\>\>

object representing current object parameters

• **styleOverride?**: `TStyleOverride`

object to override the object style

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.drawBorders`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:478](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L478)

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

• **this**: `TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.drawCacheOnCanvas`

#### Defined in

[src/shapes/Object/Object.ts:942](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L942)

***

### drawClipPathOnCache()

> **drawClipPathOnCache**(`ctx`, `clipPath`, `canvasWithClipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **canvasWithClipPath**: `HTMLCanvasElement`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.drawClipPathOnCache`

#### Defined in

[src/shapes/Object/Object.ts:847](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L847)

***

### drawControls()

> **drawControls**(`ctx`, `styleOverride`): `void`

Draws corners of an object's bounding box.
Requires public properties: width, height
Requires public options: cornerSize, padding
Be aware that since fabric 6.0 this function does not call setCoords anymore.
setCoords needs to be called manually if the object of which we are rendering controls
is outside the standard selection and transform process.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **styleOverride**: `Partial`\<`Pick`\<[`InteractiveFabricObject`](/api/classes/interactivefabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>, `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\> = `{}`

object to override the object style

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.drawControls`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:550](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L550)

***

### drawControlsConnectingLines()

> **drawControlsConnectingLines**(`ctx`, `size`): `void`

Draws lines from a borders of an object's bounding box to controls that have `withConnection` property set.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **size**: [`Point`](/api/classes/point/)

object size x = width, y = height

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.drawControlsConnectingLines`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:517](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L517)

***

### drawObject()

> **drawObject**(`ctx`, `forClipping`, `context`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **forClipping**: `undefined` \| `boolean`

apply clipping styles

• **context**: `DrawContext`

additional context for rendering

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.drawObject`

#### Defined in

[src/shapes/Object/Object.ts:872](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L872)

***

### drawSelectionBackground()

> **drawSelectionBackground**(`ctx`): `void`

Draws a colored layer behind the object, inside its selection borders.
Requires public options: padding, selectionBackgroundColor
this function is called when the context is transformed
has checks to be skipped when the object is on a staticCanvas

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

#### Returns

`void`

#### Todo

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Inherited from

`ITextClickBehavior.drawSelectionBackground`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:375](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L375)

***

### enlargeSpaces()

> **enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.enlargeSpaces`

#### Defined in

[src/shapes/Text/Text.ts:491](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L491)

***

### enterEditing()

> **enterEditing**(`e`?): `void`

Enters editing state

#### Parameters

• **e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.enterEditing`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:386](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L386)

***

### enterEditingImpl()

> **enterEditingImpl**(): `void`

runs the actual logic that enter from editing state, see [enterEditing](../../../../api/classes/itext/#enterediting)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.enterEditingImpl`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:405](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L405)

***

### exitEditing()

> **exitEditing**(): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Exits from editing state and fires relevant events

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.exitEditing`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:715](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L715)

***

### exitEditingImpl()

> **exitEditingImpl**(): `void`

runs the actual logic that exits from editing state, see [exitEditing](../../../../api/classes/itext/#exitediting)
But it does not fire events

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.exitEditingImpl`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:702](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L702)

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Compare ancestors

#### Type Parameters

• **T** *extends* [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Inherited from

`ITextClickBehavior.findCommonAncestors`

#### Defined in

[src/shapes/Object/Object.ts:1675](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1675)

***

### findLineBoundaryLeft()

> **findLineBoundaryLeft**(`startFrom`): `number`

Find new selection index representing start of current line according to current selection index

#### Parameters

• **startFrom**: `number`

Current selection index

#### Returns

`number`

New selection index

#### Inherited from

`ITextClickBehavior.findLineBoundaryLeft`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:288](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L288)

***

### findLineBoundaryRight()

> **findLineBoundaryRight**(`startFrom`): `number`

Find new selection index representing end of current line according to current selection index

#### Parameters

• **startFrom**: `number`

Current selection index

#### Returns

`number`

New selection index

#### Inherited from

`ITextClickBehavior.findLineBoundaryRight`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:305](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L305)

***

### findWordBoundaryLeft()

> **findWordBoundaryLeft**(`startFrom`): `number`

Find new selection index representing start of current word according to current selection index

#### Parameters

• **startFrom**: `number`

Current selection index

#### Returns

`number`

New selection index

#### Inherited from

`ITextClickBehavior.findWordBoundaryLeft`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:240](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L240)

***

### findWordBoundaryRight()

> **findWordBoundaryRight**(`startFrom`): `number`

Find new selection index representing end of current word according to current selection index

#### Parameters

• **startFrom**: `number`

Current selection index

#### Returns

`number`

New selection index

#### Inherited from

`ITextClickBehavior.findWordBoundaryRight`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:264](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L264)

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: `EventSpec`\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.fire`

#### Defined in

[src/Observable.ts:167](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L167)

***

### forEachControl()

> **forEachControl**(`fn`): `void`

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

• **fn**

function to iterate over the controls over

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.forEachControl`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:353](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L353)

***

### fromGraphemeToStringSelection()

> **fromGraphemeToStringSelection**(`start`, `end`, `graphemes`): `object`

convert from fabric to textarea values

#### Parameters

• **start**: `number`

• **end**: `number`

• **graphemes**: `string`[]

#### Returns

`object`

##### selectionEnd

> **selectionEnd**: `number` = `graphemeStart`

##### selectionStart

> **selectionStart**: `number` = `graphemeStart`

#### Inherited from

`ITextClickBehavior.fromGraphemeToStringSelection`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:498](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L498)

***

### fromStringToGraphemeSelection()

> **fromStringToGraphemeSelection**(`start`, `end`, `text`): `object`

convert from textarea to grapheme indexes

#### Parameters

• **start**: `number`

• **end**: `number`

• **text**: `string`

#### Returns

`object`

##### selectionEnd

> **selectionEnd**: `number` = `graphemeStart`

##### selectionStart

> **selectionStart**: `number` = `graphemeStart`

#### Inherited from

`ITextClickBehavior.fromStringToGraphemeSelection`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:481](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L481)

***

### get()

> **get**(`property`): `any`

Basic getter

#### Parameters

• **property**: `string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

`ITextClickBehavior.get`

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L59)

***

### get2DCursorLocation()

> **get2DCursorLocation**(`selectionStart`?, `skipWrapping`?): `object`

Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)

#### Parameters

• **selectionStart?**: `number` = `...`

Optional index. When not given, current selectionStart is used.

• **skipWrapping?**: `boolean`

consider the location for unwrapped lines. useful to manage styles.

#### Returns

`object`

##### charIndex

> **charIndex**: `number` = `selectionStart`

##### lineIndex

> **lineIndex**: `number` = `i`

#### Overrides

`ITextClickBehavior.get2DCursorLocation`

#### Defined in

[src/shapes/IText/IText.ts:348](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L348)

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `object`

#### Returns

`undefined` \| `object`

#### Inherited from

`ITextClickBehavior.getActiveControl`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:194](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L194)

***

### getAncestors()

> **getAncestors**(): `Ancestors`

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

`ITextClickBehavior.getAncestors`

#### Defined in

[src/shapes/Object/Object.ts:1658](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1658)

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](/api/type-aliases/tbbox/)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/api/type-aliases/tbbox/)

Object with left, top, width, height properties

#### Inherited from

`ITextClickBehavior.getBoundingRect`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:343](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L343)

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getCanvasRetinaScaling`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:400](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L400)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.getCenterPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:732](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L732)

***

### getCompleteStyleDeclaration()

> **getCompleteStyleDeclaration**(`lineIndex`, `charIndex`): [`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)

return a new object that contains all the style property for a character
the object returned is newly created

#### Parameters

• **lineIndex**: `number`

of the line where the character is

• **charIndex**: `number`

position of the character on the line

#### Returns

[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)

style object

#### Inherited from

`ITextClickBehavior.getCompleteStyleDeclaration`

#### Defined in

[src/shapes/Text/StyledText.ts:279](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L279)

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

`ITextClickBehavior.getCoords`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:204](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L204)

***

### getCurrentCharColor()

> **getCurrentCharColor**(): `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

High level function to know the color of the cursor.
the currentChar is the one that precedes the cursor
Returns color (fill) of char at the current cursor
if the text object has a pattern or gradient for filler, it will return that.
Unused by the library, is for the end user

#### Returns

`null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Character color (fill)

#### Defined in

[src/shapes/IText/IText.ts:706](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L706)

***

### getCurrentCharFontSize()

> **getCurrentCharFontSize**(): `number`

High level function to know the height of the cursor.
the currentChar is the one that precedes the cursor
Returns fontSize of char at the current cursor
Unused from the library, is for the end user

#### Returns

`number`

Character font size

#### Defined in

[src/shapes/IText/IText.ts:693](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L693)

***

### getCursorRenderingData()

> **getCursorRenderingData**(`selectionStart`, `boundaries`): [`CursorRenderingData`](/api/type-aliases/cursorrenderingdata/)

Return the data needed to render the cursor for given selection start
The left,top are relative to the object, while width and height are prescaled
to look think with canvas zoom and object scaling,
so they depend on canvas and object scaling

#### Parameters

• **selectionStart**: `number` = `...`

• **boundaries**: [`CursorBoundaries`](/api/type-aliases/cursorboundaries/) = `...`

#### Returns

[`CursorRenderingData`](/api/type-aliases/cursorrenderingdata/)

#### Defined in

[src/shapes/IText/IText.ts:516](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L516)

***

### getDownCursorOffset()

> **getDownCursorOffset**(`e`, `isRight`): `number`

Gets start offset of a selection

#### Parameters

• **e**: `KeyboardEvent`

Event object

• **isRight**: `boolean`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getDownCursorOffset`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:345](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L345)

***

### getHeightOfChar()

> **getHeightOfChar**(`line`, `_char`): `number`

Computes height of character at given position

#### Parameters

• **line**: `number`

the line index number

• **\_char**: `number`

the character index number

#### Returns

`number`

fontSize of the character

#### Inherited from

`ITextClickBehavior.getHeightOfChar`

#### Defined in

[src/shapes/Text/Text.ts:866](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L866)

***

### getHeightOfLine()

> **getHeightOfLine**(`lineIndex`): `number`

Calculate height of line at 'lineIndex'

#### Parameters

• **lineIndex**: `number`

index of line to calculate

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getHeightOfLine`

#### Defined in

[src/shapes/Text/Text.ts:1025](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1025)

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getObjectOpacity`

#### Defined in

[src/shapes/Object/Object.ts:607](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L607)

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.getObjectScaling`

#### Defined in

[src/shapes/Object/Object.ts:576](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L576)

***

### getPointByOrigin()

> **getPointByOrigin**(`originX`, `originY`): [`Point`](/api/classes/point/)

Returns the position of the object as if it has a different origin.
Take an object that has left, top set to 100, 100 with origin 'left', 'top'.
Return the values of left top ( wrapped in a point ) that you would need to keep
the same position if origin where different.
Alternatively you can use this to also find which point in the parent plane is a specific origin
( where is the bottom right corner of my object? )

#### Parameters

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.getPointByOrigin`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:762](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L762)

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.getRelativeCenterPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:743](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L743)

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/itext/getx/#getx)

#### Inherited from

`ITextClickBehavior.getRelativeX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:115](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L115)

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

`ITextClickBehavior.getRelativeXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:176](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L176)

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/itext/gety/#gety)

#### Inherited from

`ITextClickBehavior.getRelativeY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:131](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L131)

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

`ITextClickBehavior.getScaledHeight`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:361](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L361)

***

### getScaledWidth()

> **getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

`ITextClickBehavior.getScaledWidth`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:352](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L352)

***

### getSelectedText()

> **getSelectedText**(): `string`

Returns selected text

#### Returns

`string`

#### Inherited from

`ITextClickBehavior.getSelectedText`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:231](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L231)

***

### getSelectionStartFromPointer()

> **getSelectionStartFromPointer**(`e`): `number`

Returns index of a character corresponding to where an object was clicked

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

Event object

#### Returns

`number`

Index of a character

#### Inherited from

`ITextClickBehavior.getSelectionStartFromPointer`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:246](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L246)

***

### getSelectionStyles()

> **getSelectionStyles**(`startIndex`, `endIndex`, `complete`?): `Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

Gets style of a current selection/cursor (at the start position)
if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.

#### Parameters

• **startIndex**: `number` = `...`

Start index to get styles at

• **endIndex**: `number` = `...`

End index to get styles at, if not specified selectionEnd or startIndex + 1

• **complete?**: `boolean`

get full style or not

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

styles an array with one, zero or more Style objects

#### Overrides

`ITextClickBehavior.getSelectionStyles`

#### Defined in

[src/shapes/IText/IText.ts:321](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L321)

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> & `object`

#### Returns

`string`

#### Inherited from

`ITextClickBehavior.getSvgCommons`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

***

### getSvgFilter()

> **getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

`ITextClickBehavior.getSvgFilter`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

***

### getSvgStyles()

> **getSvgStyles**(`this`, `skipShadow`?): `string`

Returns styles-string for svg-export

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **skipShadow?**: `boolean`

a boolean to skip shadow filter output

#### Returns

`string`

#### Inherited from

`ITextClickBehavior.getSvgStyles`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:21](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L21)

***

### getSvgTransform()

> **getSvgTransform**(`this`, `full`?, `additionalTransform`?): `string`

Returns transform-string for svg-export

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **full?**: `boolean`

• **additionalTransform?**: `string` = `''`

#### Returns

`string`

#### Inherited from

`ITextClickBehavior.getSvgTransform`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

`ITextClickBehavior.getTotalAngle`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:408](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L408)

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/api/classes/point/)

object with scaleX and scaleY properties

#### Inherited from

`ITextClickBehavior.getTotalObjectScaling`

#### Defined in

[src/shapes/Object/Object.ts:593](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L593)

***

### getUpCursorOffset()

> **getUpCursorOffset**(`e`, `isRight`): `number`

#### Parameters

• **e**: `KeyboardEvent`

Event object

• **isRight**: `boolean`

#### Returns

`number`

#### Inherited from

`ITextClickBehavior.getUpCursorOffset`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:390](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L390)

***

### getValueOfPropertyAt()

> **getValueOfPropertyAt**\<`T`\>(`lineIndex`, `charIndex`, `property`): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

Retrieves the value of property at given character position

#### Type Parameters

• **T** *extends* `StylePropertiesType`

#### Parameters

• **lineIndex**: `number`

the line number

• **charIndex**: `number`

the character number

• **property**: `T`

the property name

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

the value of 'property'

#### Inherited from

`ITextClickBehavior.getValueOfPropertyAt`

#### Defined in

[src/shapes/Text/Text.ts:1542](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1542)

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

`ITextClickBehavior.getViewportTransform`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:418](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L418)

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

`ITextClickBehavior.getX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L86)

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

`ITextClickBehavior.getXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:146](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L146)

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

`ITextClickBehavior.getY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:100](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L100)

***

### graphemeSplit()

> **graphemeSplit**(`value`): `string`[]

Override this method to customize grapheme splitting

#### Parameters

• **value**: `string`

#### Returns

`string`[]

array of graphemes

#### Todo

the util `graphemeSplit` needs to be injectable in some way.
is more comfortable to inject the correct util rather than having to override text
in the middle of the prototype chain

#### Inherited from

`ITextClickBehavior.graphemeSplit`

#### Defined in

[src/shapes/Text/Text.ts:1720](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1720)

***

### handleFiller()

> **handleFiller**\<`T`\>(`ctx`, `property`, `filler`): `object`

#### Type Parameters

• **T** *extends* `"fill"` \| `"stroke"`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **property**: \`$\{T\}Style\`

• **filler**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Returns

`object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Inherited from

`ITextClickBehavior.handleFiller`

#### Defined in

[src/shapes/Text/Text.ts:1279](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1279)

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.hasCommonAncestors`

#### Defined in

[src/shapes/Object/Object.ts:1740](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1740)

***

### hasFill()

> **hasFill**(): `null` \| `boolean` \| `""`

return true if the object will draw a fill
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when fill happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the fill is invisible.

#### Returns

`null` \| `boolean` \| `""`

Boolean

#### Since

3.0.0

#### Inherited from

`ITextClickBehavior.hasFill`

#### Defined in

[src/shapes/Object/Object.ts:787](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L787)

***

### hasStroke()

> **hasStroke**(): `null` \| `boolean` \| `""`

return true if the object will draw a stroke
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when stroke happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the stroke is invisible.

#### Returns

`null` \| `boolean` \| `""`

Boolean

#### Since

3.0.0

#### Inherited from

`ITextClickBehavior.hasStroke`

#### Defined in

[src/shapes/Object/Object.ts:771](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L771)

***

### initBehavior()

> **initBehavior**(): `void`

Initializes all the interactive behavior of IText

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.initBehavior`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:30](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L30)

***

### initDelayedCursor()

> **initDelayedCursor**(`restart`?): `void`

Initializes delayed cursor

#### Parameters

• **restart?**: `boolean`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.initDelayedCursor`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:175](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L175)

***

### initHiddenTextarea()

> **initHiddenTextarea**(): `void`

Initializes hidden textarea (needed to bring up keyboard in iOS)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.initHiddenTextarea`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:63](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L63)

***

### insertCharStyleObject()

> **insertCharStyleObject**(`lineIndex`, `charIndex`, `quantity`, `copiedStyle`?): `void`

Inserts style object for a given line/char index

#### Parameters

• **lineIndex**: `number`

Index of a line

• **charIndex**: `number`

Index of a char

• **quantity**: `number`

number Style object to insert, if given

• **copiedStyle?**: `Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

array of style objects

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.insertCharStyleObject`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:901](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L901)

***

### insertChars()

> **insertChars**(`text`, `style`, `start`, `end`): `void`

insert characters at start position, before start position.
start  equal 1 it means the text get inserted between actual grapheme 0 and 1
if style array is provided, it must be as the same length of text in graphemes
if end is provided and is bigger than start, old text is replaced.
start/end ar per grapheme position in _text array.

#### Parameters

• **text**: `string`

text to insert

• **style**: `undefined` \| `Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

array of style objects

• **start**: `number`

• **end**: `number` = `start`

default to start + 1

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.insertChars`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1051](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L1051)

***

### insertNewStyleBlock()

> **insertNewStyleBlock**(`insertedText`, `start`, `copiedStyle`?): `void`

Inserts style object(s)

#### Parameters

• **insertedText**: `string`[]

Characters at the location where style is inserted

• **start**: `number`

cursor index for inserting style

• **copiedStyle?**: `Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

array of style objects to insert.

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.insertNewStyleBlock`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:959](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L959)

***

### insertNewlineStyleObject()

> **insertNewlineStyleObject**(`lineIndex`, `charIndex`, `qty`, `copiedStyle`?): `void`

Handle insertion of more consecutive style lines for when one or more
newlines gets added to the text. Since current style needs to be shifted
first we shift the current style of the number lines needed, then we add
new lines from the last to the first.

#### Parameters

• **lineIndex**: `number`

Index of a line

• **charIndex**: `number`

Index of a char

• **qty**: `number`

number of lines to add

• **copiedStyle?**

Array of objects styles

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.insertNewlineStyleObject`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:832](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L832)

***

### intersectsWithObject()

> **intersectsWithObject**(`other`): `boolean`

Checks if object intersects with another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to test

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

`ITextClickBehavior.intersectsWithObject`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:232](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L232)

***

### intersectsWithRect()

> **intersectsWithRect**(`tl`, `br`): `boolean`

Checks if object intersects with the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](/api/classes/point/)

• **br**: [`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.intersectsWithRect`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:218](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L218)

***

### isCacheDirty()

> **isCacheDirty**(`skipCanvas`): `boolean`

Check if cache is dirty

#### Parameters

• **skipCanvas**: `boolean` = `false`

skip canvas checks because this object is painted
on parent canvas.

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isCacheDirty`

#### Defined in

[src/shapes/Object/Object.ts:956](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L956)

***

### isContainedWithinObject()

> **isContainedWithinObject**(`other`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to test

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

`ITextClickBehavior.isContainedWithinObject`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:251](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L251)

***

### isContainedWithinRect()

> **isContainedWithinRect**(`tl`, `br`): `boolean`

Checks if object is fully contained within the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](/api/classes/point/)

• **br**: [`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isContainedWithinRect`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:259](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L259)

***

### isControlVisible()

> **isControlVisible**(`controlKey`): `boolean`

Returns true if the specified control is visible, false otherwise.

#### Parameters

• **controlKey**: `string`

The key of the control. Possible values are usually 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr',
but since the control api allow for any control name, can be any string.

#### Returns

`boolean`

true if the specified control is visible, false otherwise

#### Inherited from

`ITextClickBehavior.isControlVisible`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:584](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L584)

***

### isDescendantOf()

> **isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [Group.contains](../../../../api/classes/group/#contains) or [StaticCanvas.contains](../../../../api/classes/staticcanvas/#contains) for performance reasons

#### Parameters

• **target**: `TAncestor`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isDescendantOf`

#### Defined in

[src/shapes/Object/Object.ts:1644](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1644)

***

### isEmptyStyles()

> **isEmptyStyles**(`lineIndex`?): `boolean`

Returns true if object has no styling or no styling in a line

#### Parameters

• **lineIndex?**: `number`

, lineIndex is on wrapped lines.

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isEmptyStyles`

#### Defined in

[src/shapes/Text/StyledText.ts:41](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L41)

***

### isEndOfWrapping()

> **isEndOfWrapping**(`lineIndex`): `boolean`

Detect if the text line is ended with an hard break
text and itext do not have wrapping, return false

#### Parameters

• **lineIndex**: `number`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isEndOfWrapping`

#### Defined in

[src/shapes/Text/Text.ts:535](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L535)

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type Parameters

• **T** *extends* [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

`ITextClickBehavior.isInFrontOf`

#### Defined in

[src/shapes/Object/Object.ts:1750](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1750)

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isNotVisible`

#### Defined in

[src/shapes/Object/Object.ts:686](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L686)

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

`ITextClickBehavior.isOnScreen`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:291](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L291)

***

### isOverlapping()

> **isOverlapping**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isOverlapping`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:269](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L269)

***

### isPartiallyOnScreen()

> **isPartiallyOnScreen**(): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

`ITextClickBehavior.isPartiallyOnScreen`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:321](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L321)

***

### isTripleClick()

> **isTripleClick**(`newPointer`): `boolean`

#### Parameters

• **newPointer**: [`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isTripleClick`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:99](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L99)

***

### isType()

> **isType**(...`types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

• ...**types**: `string`[]

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.isType`

#### Defined in

[src/shapes/Object/Object.ts:1449](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1449)

***

### measureLine()

> **measureLine**(`lineIndex`): `object`

measure a text line measuring all characters.

#### Parameters

• **lineIndex**: `number`

line number

#### Returns

`object`

##### numOfSpaces

> **numOfSpaces**: `number` = `0`

##### width

> **width**: `number`

#### Inherited from

`ITextClickBehavior.measureLine`

#### Defined in

[src/shapes/Text/Text.ts:874](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L874)

***

### missingNewlineOffset()

> **missingNewlineOffset**(`lineIndex`, `skipWrapping`?): `0` \| `1`

Detect if a line has a linebreak and so we need to account for it when moving
and counting style.
It return always 1 for text and Itext. Textbox has its own implementation

#### Parameters

• **lineIndex**: `number`

• **skipWrapping?**: `boolean`

#### Returns

`0` \| `1`

Number

#### Inherited from

`ITextClickBehavior.missingNewlineOffset`

#### Defined in

[src/shapes/Text/Text.ts:545](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L545)

***

### moveCursorDown()

> **moveCursorDown**(`e`): `void`

Moves cursor down

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.moveCursorDown`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:451](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L451)

***

### moveCursorLeft()

> **moveCursorLeft**(`e`): `void`

Moves cursor left

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.moveCursorLeft`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:536](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L536)

***

### moveCursorLeftWithShift()

> **moveCursorLeftWithShift**(`e`): `undefined` \| `boolean`

Moves cursor left while keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`undefined` \| `boolean`

#### Inherited from

`ITextClickBehavior.moveCursorLeftWithShift`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:608](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L608)

***

### moveCursorLeftWithoutShift()

> **moveCursorLeftWithoutShift**(`e`): `boolean`

Moves cursor left without keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.moveCursorLeftWithoutShift`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:588](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L588)

***

### moveCursorRight()

> **moveCursorRight**(`e`): `void`

Moves cursor right

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.moveCursorRight`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:624](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L624)

***

### moveCursorRightWithShift()

> **moveCursorRightWithShift**(`e`): `undefined` \| `boolean`

Moves cursor right while keeping selection

#### Parameters

• **e**: `KeyboardEvent`

#### Returns

`undefined` \| `boolean`

#### Inherited from

`ITextClickBehavior.moveCursorRightWithShift`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:658](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L658)

***

### moveCursorRightWithoutShift()

> **moveCursorRightWithoutShift**(`e`): `boolean`

Moves cursor right without keeping selection

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.moveCursorRightWithoutShift`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:674](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L674)

***

### moveCursorUp()

> **moveCursorUp**(`e`): `void`

Moves cursor up

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.moveCursorUp`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:465](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L465)

***

### moveCursorWithShift()

> **moveCursorWithShift**(`offset`): `boolean`

Moves cursor with shift

#### Parameters

• **offset**: `number`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.moveCursorWithShift`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:504](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L504)

***

### moveCursorWithoutShift()

> **moveCursorWithoutShift**(`offset`): `boolean`

Moves cursor up without shift

#### Parameters

• **offset**: `number`

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.moveCursorWithoutShift`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:521](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L521)

***

### needsItsOwnCache()

> **needsItsOwnCache**(): `boolean`

When set to `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Inherited from

`ITextClickBehavior.needsItsOwnCache`

#### Defined in

[src/shapes/Object/Object.ts:799](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L799)

***

### off()

#### off(eventName)

> **off**\<`K`\>(`eventName`): `void`

Unsubscribe all event listeners for eventname.
Do not use this pattern. You could kill internal fabricJS events.
We know we should have protected events for internal flows, but we don't have yet

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

##### Returns

`void`

##### Inherited from

`ITextClickBehavior.off`

##### Defined in

[src/Observable.ts:122](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L122)

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

`ITextClickBehavior.off`

##### Defined in

[src/Observable.ts:128](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L128)

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

`ITextClickBehavior.off`

##### Defined in

[src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L133)

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`ITextClickBehavior.off`

##### Defined in

[src/Observable.ts:137](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L137)

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **E**

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

on

##### Inherited from

`ITextClickBehavior.on`

##### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L23)

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

`ITextClickBehavior.on`

##### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L27)

***

### onCompositionEnd()

> **onCompositionEnd**(): `void`

Composition end

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onCompositionEnd`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:281](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L281)

***

### onCompositionStart()

> **onCompositionStart**(): `void`

Composition start

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onCompositionStart`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:274](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L274)

***

### onCompositionUpdate()

> **onCompositionUpdate**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: `CompositionEvent`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onCompositionUpdate`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:285](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L285)

***

### onDeselect()

> **onDeselect**(`options`?): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

• **options?**

• **options.e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

event if the process is generated by an event

• **options.object?**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

next object we are setting as active, and reason why
this is being deselected

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.onDeselect`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:111](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L111)

***

### onDragStart()

> **onDragStart**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drag source,

#### Parameters

• **e**: `DragEvent`

#### Returns

`boolean`

should handle event

#### See

also DraggableTextDelegate#isActive
To prevent drag and drop between objects both shouldStartDragging and onDragStart should return false

#### Inherited from

`ITextClickBehavior.onDragStart`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:68](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L68)

***

### onInput()

> **onInput**(`this`, `e`): `void`

Handles onInput event

#### Parameters

• **this**: [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\> & `object`

• **e**: `Event`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onInput`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:167](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L167)

***

### onKeyDown()

> **onKeyDown**(`e`): `void`

Handles keydown event
only used for arrows and combination of modifier keys.

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onKeyDown`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:115](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L115)

***

### onKeyUp()

> **onKeyUp**(`e`): `void`

Handles keyup event
We handle KeyUp because ie11 and edge have difficulties copy/pasting
if a copy/cut event fired, keyup is dismissed

#### Parameters

• **e**: `KeyboardEvent`

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.onKeyUp`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:147](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L147)

***

### onSelect()

> **onSelect**(`_options`?): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

• **\_options?**

options sent from the upper functions

• **\_options.e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

event if the process is generated by an event

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.onSelect`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:672](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L672)

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **E**

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

once

##### Inherited from

`ITextClickBehavior.once`

##### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L62)

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

`ITextClickBehavior.once`

##### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L66)

***

### paste()

> **paste**(): `void`

Pastes text

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.paste`

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:317](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextKeyBehavior.ts#L317)

***

### removeChars()

> **removeChars**(`start`, `end`): `void`

Removes characters from start/end
start/end ar per grapheme position in _text array.

#### Parameters

• **start**: `number`

• **end**: `number` = `...`

default to start + 1

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.removeChars`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1029](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L1029)

***

### removeStyle()

> **removeStyle**(`property`): `void`

Remove a style property or properties from all individual character styles
in a text object.  Deletes the character style object if it contains no other style
props.  Deletes a line style object if it contains no other character styles.

#### Parameters

• **property**: `StylePropertiesType`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.removeStyle`

#### Defined in

[src/shapes/Text/StyledText.ts:165](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L165)

***

### removeStyleFromTo()

> **removeStyleFromTo**(`start`, `end`): `void`

remove and reflow a style block from start to end.

#### Parameters

• **start**: `number`

linear start position for removal (included in removal)

• **end**: `number`

linear end position for removal ( excluded from removal )

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.removeStyleFromTo`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:747](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L747)

***

### renderCache()

> **renderCache**(`this`, `options`?): `void`

#### Parameters

• **this**: `TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **options?**: `any`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.renderCache`

#### Defined in

[src/shapes/Object/Object.ts:732](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L732)

***

### renderCursor()

> **renderCursor**(`ctx`, `boundaries`): `void`

Renders cursor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

transformed context to draw on

• **boundaries**: [`CursorBoundaries`](/api/type-aliases/cursorboundaries/)

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:506](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L506)

***

### renderCursorAt()

> **renderCursorAt**(`selectionStart`): `void`

Renders cursor on context Top, outside the animation cycle, on request
Used for the drag/drop effect.
If contextTop is not available, do nothing.

#### Parameters

• **selectionStart**: `number`

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:493](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L493)

***

### renderCursorOrSelection()

> **renderCursorOrSelection**(): `void`

Renders cursor or selection (depending on what exists)
it does on the contextTop. If contextTop is not available, do nothing.

#### Returns

`void`

#### Overrides

`ITextClickBehavior.renderCursorOrSelection`

#### Defined in

[src/shapes/IText/IText.ts:383](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L383)

***

### renderDragSourceEffect()

> **renderDragSourceEffect**(): `void`

Renders drag start text selection

#### Returns

`void`

#### Overrides

`ITextClickBehavior.renderDragSourceEffect`

#### Defined in

[src/shapes/IText/IText.ts:582](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L582)

***

### renderDropTargetEffect()

> **renderDropTargetEffect**(`e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the target of a drag event
used to show that the underly object can receive a drop, or to show how the
object will change when dropping. example: show the cursor where the text is about to be dropped

#### Parameters

• **e**: `DragEvent`

#### Returns

`void`

#### Overrides

`ITextClickBehavior.renderDropTargetEffect`

#### Defined in

[src/shapes/IText/IText.ts:592](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L592)

***

### renderSelection()

> **renderSelection**(`ctx`, `boundaries`): `void`

Renders text selection

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

transformed context to draw on

• **boundaries**: [`CursorBoundaries`](/api/type-aliases/cursorboundaries/)

Object with left/top/leftOffset/topOffset

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:567](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L567)

***

### restartCursorIfNeeded()

> **restartCursorIfNeeded**(): `void`

Restart tue cursor animation if either is in complete state ( between animations )
or if it never started before

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.restartCursorIfNeeded`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:206](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L206)

***

### rotate()

> **rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

• **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle value (in degrees)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.rotate`

#### Defined in

[src/shapes/Object/Object.ts:1477](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1477)

***

### scale()

> **scale**(`value`): `void`

Scales an object (equally by x and y)

#### Parameters

• **value**: `number`

Scale factor

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.scale`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:370](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L370)

***

### scaleToHeight()

> **scaleToHeight**(`value`): `void`

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

• **value**: `number`

New height value

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.scaleToHeight`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:393](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L393)

***

### scaleToWidth()

> **scaleToWidth**(`value`): `void`

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

• **value**: `number`

New width value

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.scaleToWidth`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L381)

***

### searchWordBoundary()

> **searchWordBoundary**(`selectionStart`, `direction`): `number`

Finds index corresponding to beginning or end of a word

#### Parameters

• **selectionStart**: `number`

Index of a character

• **direction**: `-1` \| `1`

1 or -1

#### Returns

`number`

Index of the beginning or end of a word

#### Inherited from

`ITextClickBehavior.searchWordBoundary`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:323](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L323)

***

### selectAll()

> **selectAll**(): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Selects entire text

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.selectAll`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:219](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L219)

***

### selectLine()

> **selectLine**(`selectionStart`?): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

TODO fix: selectionStart set as 0 will be ignored?
Selects a line based on the index

#### Parameters

• **selectionStart?**: `number`

Index of a character

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.selectLine`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:371](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L371)

***

### selectWord()

> **selectWord**(`selectionStart`?): `void`

TODO fix: selectionStart set as 0 will be ignored?
Selects a word based on the index

#### Parameters

• **selectionStart?**: `number`

Index of a character

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.selectWord`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:349](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L349)

***

### set()

> **set**(`key`, `value`?): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `any`

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.set`

#### Defined in

[src/shapes/Text/Text.ts:1763](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1763)

***

### setControlVisible()

> **setControlVisible**(`controlKey`, `visible`): `void`

Sets the visibility of the specified control.
please do not use.

#### Parameters

• **controlKey**: `string`

The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
but since the control api allow for any control name, can be any string.

• **visible**: `boolean`

true to set the specified control visible, false otherwise

#### Returns

`void`

#### Todo

discuss this overlap of priority here with the team. Andrea Bogazzi for details

#### Inherited from

`ITextClickBehavior.setControlVisible`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:599](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L599)

***

### setControlsVisibility()

> **setControlsVisibility**(`options`?): `void`

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

• **options?**: `Record`\<`string`, `boolean`\> = `{}`

with an optional key per control
example: {Boolean} [options.bl] true to enable the bottom-left control, false to disable it

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setControlsVisibility`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:611](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L611)

***

### setCoords()

> **setCoords**(): `void`

set controls' coordinates as well
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setCoords`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:343](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L343)

***

### setCursorByClick()

> **setCursorByClick**(`e`): `void`

Changes cursor location in a text depending on passed pointer (x/y) object

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

Event object

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setCursorByClick`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:225](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L225)

***

### setOnGroup()

> **setOnGroup**(): `void`

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setOnGroup`

#### Defined in

[src/shapes/Object/Object.ts:1509](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1509)

***

### setPathInfo()

> **setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setPathInfo`

#### Defined in

[src/shapes/Text/Text.ts:445](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L445)

***

### setPositionByOrigin()

> **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Sets the position of the object taking into consideration the object's origin

#### Parameters

• **pos**: [`Point`](/api/classes/point/)

The new position of the object

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setPositionByOrigin`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:777](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L777)

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/itext/#setx)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setRelativeX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:123](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L123)

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/itext/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

position according to object's originX originY properties in parent's coordinate plane

• **originX?**: [`TOriginX`](/api/type-aliases/toriginx/) = `...`

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](/api/type-aliases/toriginy/) = `...`

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setRelativeXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:186](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L186)

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/itext/#sety)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setRelativeY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:139](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L139)

***

### setSelectionEnd()

> **setSelectionEnd**(`index`): `void`

Sets selection end (right boundary of a selection)

#### Parameters

• **index**: `number`

Index to set selection end to

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:271](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L271)

***

### setSelectionStart()

> **setSelectionStart**(`index`): `void`

Sets selection start (left boundary of a selection)

#### Parameters

• **index**: `number`

Index to set selection start to

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:262](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L262)

***

### setSelectionStartEndWithShift()

> **setSelectionStartEndWithShift**(`start`, `end`, `newSelection`): `void`

Set the selectionStart and selectionEnd according to the new position of cursor
mimic the key - mouse navigation when shift is pressed.

#### Parameters

• **start**: `number`

• **end**: `number`

• **newSelection**: `number`

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setSelectionStartEndWithShift`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1078](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L1078)

***

### setSelectionStyles()

> **setSelectionStyles**(`styles`?, `startIndex`?, `endIndex`?): `void`

Sets style of a current selection, if no selection exist, do not set anything.

#### Parameters

• **styles?**: `object`

Styles object

• **startIndex?**: `number` = `...`

Start index to get styles at

• **endIndex?**: `number` = `...`

End index to get styles at, if not specified selectionEnd or startIndex + 1

#### Returns

`void`

#### Overrides

`ITextClickBehavior.setSelectionStyles`

#### Defined in

[src/shapes/IText/IText.ts:335](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L335)

***

### setSubscript()

> **setSubscript**(`start`, `end`): `void`

Turns the character into an 'inferior figure' (i.e. 'subscript')

#### Parameters

• **start**: `number`

selection start

• **end**: `number`

selection end

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setSubscript`

#### Defined in

[src/shapes/Text/Text.ts:1420](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1420)

***

### setSuperscript()

> **setSuperscript**(`start`, `end`): `void`

Turns the character into a 'superior figure' (i.e. 'superscript')

#### Parameters

• **start**: `number`

selection start

• **end**: `number`

selection end

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setSuperscript`

#### Defined in

[src/shapes/Text/Text.ts:1411](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1411)

***

### setX()

> **setX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:93](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L93)

***

### setXY()

> **setXY**(`point`, `originX`?, `originY`?): `void`

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
that otherwise are the object's current values.

#### Parameters

• **point**: [`Point`](/api/classes/point/)

position in scene coordinate plane

• **originX?**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Example

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

`ITextClickBehavior.setXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:163](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L163)

***

### setY()

> **setY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.setY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:107](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L107)

***

### shiftLineStyles()

> **shiftLineStyles**(`lineIndex`, `offset`): `void`

Shifts line styles up or down

#### Parameters

• **lineIndex**: `number`

Index of a line

• **offset**: `number`

Can any number?

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.shiftLineStyles`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:809](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L809)

***

### shouldCache()

> **shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.shouldCache`

#### Defined in

[src/shapes/Object/Object.ts:823](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L823)

***

### shouldStartDragging()

> **shouldStartDragging**(): `boolean`

If this method returns true a mouse move operation over a text selection
will not prevent the native mouse event allowing the browser to start a drag operation.
shouldStartDragging can be read 'do not prevent default for mouse move event'
To prevent drag and drop between objects both shouldStartDragging and onDragStart should return false

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.shouldStartDragging`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:58](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L58)

***

### strokeBorders()

> **strokeBorders**(`ctx`, `size`): `void`

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

ctx is rotated and translated so that (0,0) is at object's center

• **size**: [`Point`](/api/classes/point/)

the control box size used

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.strokeBorders`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:399](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L399)

***

### styleHas()

> **styleHas**(`property`, `lineIndex`?): `boolean`

Returns true if object has a style property or has it ina specified line
This function is used to detect if a text will use a particular property or not.

#### Parameters

• **property**: `StylePropertiesType`

to check for

• **lineIndex?**: `number`

to check the style on

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.styleHas`

#### Defined in

[src/shapes/Text/StyledText.ts:70](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L70)

***

### toCanvasElement()

> **toCanvasElement**(`options`?): `HTMLCanvasElement`

block cursor/selection logic while rendering the exported canvas

#### Parameters

• **options?**: `ObjectToCanvasElementOptions`

#### Returns

`HTMLCanvasElement`

#### Todo

this workaround should be replaced with a more robust solution

#### Overrides

`ITextClickBehavior.toCanvasElement`

#### Defined in

[src/shapes/IText/IText.ts:371](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L371)

***

### toClipPathSVG()

> **toClipPathSVG**(`this`, `reviver`?): `string`

Returns svg clipPath representation of an instance

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

`ITextClickBehavior.toClipPathSVG`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:143](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L143)

***

### toDataURL()

> **toDataURL**(`options`): `string`

Converts an object into a data-url-like string

#### Parameters

• **options**: `toDataURLOptions` = `{}`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

`ITextClickBehavior.toDataURL`

#### Defined in

[src/shapes/Object/Object.ts:1436](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1436)

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude`?): `any`

Returns (dataless) object representation of an instance

#### Parameters

• **propertiesToInclude?**: `any`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

Object representation of an instance

#### Inherited from

`ITextClickBehavior.toDatalessObject`

#### Defined in

[src/shapes/Object/Object.ts:1884](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1884)

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

`ITextClickBehavior.toJSON`

#### Defined in

[src/shapes/Object/Object.ts:1468](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1468)

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type Parameters

• **T** *extends* `Omit`\<`Props` & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Inherited from

`ITextClickBehavior.toObject`

#### Defined in

[src/shapes/Text/Text.ts:1752](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1752)

***

### toSVG()

> **toSVG**(`this`, `reviver`?): `string`

Returns svg representation of an instance

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

`ITextClickBehavior.toSVG`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

***

### toString()

> **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Inherited from

`ITextClickBehavior.toString`

#### Defined in

[src/shapes/Text/Text.ts:581](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L581)

***

### toggle()

> **toggle**(`property`): [`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`IText`](/api/classes/itext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ITextClickBehavior.toggle`

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L46)

***

### transform()

> **transform**(`ctx`): `void`

Transforms context when rendering an object

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.transform`

#### Defined in

[src/shapes/Object/Object.ts:564](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L564)

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `number`[]

#### Parameters

• **skipGroup**: `boolean` = `false`

#### Returns

`number`[]

#### Inherited from

`ITextClickBehavior.transformMatrixKey`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:453](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L453)

***

### translateToCenterPoint()

> **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/api/classes/point/)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.translateToCenterPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:682](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L682)

***

### translateToGivenOrigin()

> **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/api/classes/point/)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

• **fromOriginX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **fromOriginY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

• **toOriginX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **toOriginY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.translateToGivenOrigin`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:654](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L654)

***

### translateToOriginPoint()

> **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/api/classes/point/)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

• **center**: [`Point`](/api/classes/point/)

The point which corresponds to center of the object

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ITextClickBehavior.translateToOriginPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:710](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L710)

***

### tripleClickHandler()

> **tripleClickHandler**(`options`): `void`

Default handler for triple click, select a line

#### Parameters

• **options**: [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.tripleClickHandler`

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:121](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextClickBehavior.ts#L121)

***

### updateSelectionOnMouseMove()

> **updateSelectionOnMouseMove**(`e`): `void`

called by [Canvas#textEditingManager](../../../../api/classes/canvas/#texteditingmanager)

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`void`

#### Inherited from

`ITextClickBehavior.updateSelectionOnMouseMove`

#### Defined in

[src/shapes/IText/ITextBehavior.ts:427](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/ITextBehavior.ts#L427)

***

### ~~willDrawShadow()~~

> **willDrawShadow**(): `boolean`

Check if this object will cast a shadow with an offset.
used by Group.shouldCache to know if child has a shadow recursively

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Returns

`boolean`

#### Inherited from

`ITextClickBehavior.willDrawShadow`

#### Defined in

[src/shapes/Object/Object.ts:836](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L836)

***

### \_fromObject()

> `static` **\_fromObject**\<`S`\>(`__namedParameters`, `__namedParameters`): `Promise`\<`S`\>

#### Type Parameters

• **S** *extends* [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `unknown`\>

• **\_\_namedParameters**: [`Abortable`](/api/type-aliases/abortable/) & `object` = `{}`

#### Returns

`Promise`\<`S`\>

#### Inherited from

`ITextClickBehavior._fromObject`

#### Defined in

[src/shapes/Object/Object.ts:1937](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1937)

***

### createControls()

> `static` **createControls**(): `object`

Creates the default control object.
If you prefer to have on instance of controls shared among all objects
make this function return an empty object and add controls to the ownDefaults

#### Returns

`object`

##### controls

> **controls**: `Record`\<`string`, [`Control`](/api/classes/control/)\>

#### Inherited from

`ITextClickBehavior.createControls`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:167](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L167)

***

### fromElement()

> `static` **fromElement**(`element`, `options`?, `cssRules`?): `Promise`\<[`FabricText`](/api/classes/fabrictext/)\<`object`, [`SerializedTextProps`](/api/interfaces/serializedtextprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Returns FabricText instance from an SVG element (<b>not yet implemented</b>)

#### Parameters

• **element**: `HTMLElement`

Element to parse

• **options?**: [`Abortable`](/api/type-aliases/abortable/)

Options object

• **cssRules?**: `CSSRules`

#### Returns

`Promise`\<[`FabricText`](/api/classes/fabrictext/)\<`object`, [`SerializedTextProps`](/api/interfaces/serializedtextprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Static

#### Member Of

Text

#### Inherited from

`ITextClickBehavior.fromElement`

#### Defined in

[src/shapes/Text/Text.ts:1847](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1847)

***

### fromObject()

> `static` **fromObject**\<`T`, `S`\>(`object`): `Promise`\<`S`\>

Returns FabricText instance from an object representation

#### Type Parameters

• **T** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`SerializedTextProps`](/api/interfaces/serializedtextprops/)\>

• **S** *extends* [`FabricText`](/api/classes/fabrictext/)\<`Partial`\<[`TextProps`](/api/interfaces/textprops/)\>, [`SerializedTextProps`](/api/interfaces/serializedtextprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **object**: `T`

plain js Object to create an instance from

#### Returns

`Promise`\<`S`\>

#### Inherited from

`ITextClickBehavior.fromObject`

#### Defined in

[src/shapes/Text/Text.ts:1924](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1924)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

`ITextClickBehavior.getDefaults`

#### Defined in

[src/shapes/IText/IText.ts:216](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/IText/IText.ts#L216)
