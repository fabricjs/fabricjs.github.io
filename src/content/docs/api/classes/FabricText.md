---
editUrl: false
next: false
prev: false
title: "FabricText"
---

Text class

## Tutorial

[http://fabricjs.com/fabric-intro-part-2#text](http://fabricjs.com/fabric-intro-part-2#text)

## Extends

- `StyledText`\<`Props`, `SProps`, `EventSpec`\>

## Type Parameters

• **Props** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`TextProps`](/api/interfaces/textprops/)\> = `Partial`\<[`TextProps`](/api/interfaces/textprops/)\>

• **SProps** *extends* [`SerializedTextProps`](/api/interfaces/serializedtextprops/) = [`SerializedTextProps`](/api/interfaces/serializedtextprops/)

• **EventSpec** *extends* [`ObjectEvents`](/api/interfaces/objectevents/) = [`ObjectEvents`](/api/interfaces/objectevents/)

## Implements

- `UniqueTextProps`

## Constructors

### new FabricText()

> **new FabricText**\<`Props`, `SProps`, `EventSpec`\>(`text`, `options`?): [`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **text**: `string`

• **options?**: `Props`

#### Returns

[`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`StyledText<Props, SProps, EventSpec>.constructor`

#### Defined in

[src/shapes/Text/Text.ts:425](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L425)

## Properties

### MIN\_TEXT\_WIDTH

> **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

#### Default

```ts

```

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

`StyledText.__corner`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L105)

***

### \_\_lineHeights

> **\_\_lineHeights**: `number`[]

#### Defined in

[src/shapes/Text/Text.ts:411](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L411)

***

### \_\_lineWidths

> **\_\_lineWidths**: `number`[]

#### Defined in

[src/shapes/Text/Text.ts:412](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L412)

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

`StyledText._controlsVisibility`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:112](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L112)

***

### \_fontSizeMult

> **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

#### Default

```ts

```

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

`StyledText._scaling`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L134)

***

### \_text

> **\_text**: `string`[]

#### Defined in

[src/shapes/Text/Text.ts:409](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L409)

***

### \_textLines

> **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

#### Default

```ts

```

#### Overrides

`StyledText._textLines`

#### Defined in

[src/shapes/Text/Text.ts:406](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L406)

***

### \_unwrappedTextLines

> **\_unwrappedTextLines**: `string`[][]

#### Defined in

[src/shapes/Text/Text.ts:408](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L408)

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/fabrictext/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/fabrictext/#calcacoords)

#### Inherited from

`StyledText.aCoords`

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

`StyledText.absolutePositioned`

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

`StyledText.angle`

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

`StyledText.backgroundColor`

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

`StyledText.borderColor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L74)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

`StyledText.borderDashArray`

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

`StyledText.borderOpacityWhenMoving`

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

`StyledText.borderScaleFactor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L77)

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

`StyledText.centeredRotation`

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

`StyledText.centeredScaling`

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

#### Implementation of

`UniqueTextProps.charSpacing`

#### Defined in

[src/shapes/Text/Text.ts:347](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L347)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`StyledText.clipPath`

#### Defined in

[src/shapes/Object/Object.ts:216](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L216)

***

### clipPathId?

> `optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

`StyledText.clipPathId`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

`StyledText.controls`

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

`StyledText.cornerColor`

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

`StyledText.cornerDashArray`

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

`StyledText.cornerSize`

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

`StyledText.cornerStrokeColor`

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

`StyledText.cornerStyle`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L70)

***

### cursorWidth

> **cursorWidth**: `number`

#### Defined in

[src/shapes/Text/Text.ts:410](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L410)

***

### deltaY

> **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

#### Default

```ts

```

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

#### Implementation of

`UniqueTextProps.direction`

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

`StyledText.dirty`

#### Defined in

[src/shapes/Object/Object.ts:245](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L245)

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

`StyledText.evented`

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

`StyledText.excludeFromExport`

#### Defined in

[src/shapes/Object/Object.ts:212](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L212)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

`StyledText.fill`

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

`StyledText.fillRule`

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

`StyledText.flipX`

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

`StyledText.flipY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:568](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L568)

***

### fontFamily

> **fontFamily**: `string`

Font family

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.fontFamily`

#### Defined in

[src/shapes/Text/Text.ts:188](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L188)

***

### fontSize

> **fontSize**: `number`

Font size (in pixels)

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.fontSize`

#### Defined in

[src/shapes/Text/Text.ts:174](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L174)

***

### fontStyle

> **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.fontStyle`

#### Defined in

[src/shapes/Text/Text.ts:224](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L224)

***

### fontWeight

> **fontWeight**: `string` \| `number`

Font weight (e.g. bold, normal, 400, 600, 800)

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.fontWeight`

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

`StyledText.globalCompositeOperation`

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

`StyledText.hasBorders`

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

`StyledText.hasControls`

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

`StyledText.height`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:566](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L566)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

`StyledText.hoverCursor`

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

`StyledText.includeDefaultValues`

#### Defined in

[src/shapes/Object/Object.ts:211](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L211)

***

### initialized?

> `optional` **initialized**: `true`

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

`StyledText.inverted`

#### Defined in

[src/shapes/Object/Object.ts:217](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L217)

***

### isMoving?

> `optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

`StyledText.isMoving`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:124](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L124)

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

`StyledText.left`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:564](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L564)

***

### lineHeight

> **lineHeight**: `number`

Line height

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.lineHeight`

#### Defined in

[src/shapes/Text/Text.ts:231](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L231)

***

### linethrough

> **linethrough**: `boolean`

Text decoration linethrough.

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.linethrough`

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

`StyledText.lockMovementX`

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

`StyledText.lockMovementY`

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

`StyledText.lockRotation`

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

`StyledText.lockScalingFlip`

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

`StyledText.lockScalingX`

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

`StyledText.lockScalingY`

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

`StyledText.lockSkewingX`

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

`StyledText.lockSkewingY`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L62)

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

`StyledText.matrixCache`

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

`StyledText.minScaleLimit`

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

`StyledText.moveCursor`

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

`StyledText.noScaleCache`

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

`StyledText.oCoords`

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

`StyledText.objectCaching`

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

`StyledText.opacity`

#### Defined in

[src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L192)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

`StyledText.originX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:576](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L576)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

`StyledText.originY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:580](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L580)

***

### overline

> **overline**: `boolean`

Text decoration overline.

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.overline`

#### Defined in

[src/shapes/Text/Text.ts:202](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L202)

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

`StyledText.ownMatrixCache`

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

`StyledText.padding`

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

`StyledText.paintFirst`

#### Defined in

[src/shapes/Object/Object.ts:194](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L194)

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

`StyledText.parent`

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

#### Implementation of

`UniqueTextProps.path`

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

#### Implementation of

`UniqueTextProps.pathAlign`

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

#### Implementation of

`UniqueTextProps.pathSide`

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

`StyledText.perPixelTargetFind`

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

`StyledText.scaleX`

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

`StyledText.scaleY`

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

`StyledText.selectable`

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

`StyledText.selectionBackgroundColor`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L79)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

#### Inherited from

`StyledText.shadow`

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

`StyledText.skewX`

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

`StyledText.skewY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:572](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L572)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

`StyledText.snapAngle`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:53](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L53)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

`StyledText.snapThreshold`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:54](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L54)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Inherited from

`StyledText.stroke`

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

`StyledText.strokeDashArray`

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

`StyledText.strokeDashOffset`

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

`StyledText.strokeLineCap`

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

`StyledText.strokeLineJoin`

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

`StyledText.strokeMiterLimit`

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

`StyledText.strokeUniform`

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

`StyledText.strokeWidth`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:582](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L582)

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/)

#### Overrides

`StyledText.styles`

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

#### Defined in

[src/shapes/Text/Text.ts:236](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L236)

***

### text

> **text**: `string`

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

#### Implementation of

`UniqueTextProps.textAlign`

#### Defined in

[src/shapes/Text/Text.ts:217](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L217)

***

### textBackgroundColor

> **textBackgroundColor**: `string`

Background color of text lines

#### Default

```ts

```

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

`StyledText.top`

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

`StyledText.touchCornerSize`

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

`StyledText.transparentCorners`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L67)

***

### underline

> **underline**: `boolean`

Text decoration underline.

#### Default

```ts

```

#### Implementation of

`UniqueTextProps.underline`

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

`StyledText.visible`

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

`StyledText.width`

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

#### Defined in

[src/shapes/Text/Text.ts:1826](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1826)

***

### \_styleProperties

> `static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

`StyledText._styleProperties`

#### Defined in

[src/shapes/Text/StyledText.ts:30](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L30)

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Overrides

`StyledText.cacheProperties`

#### Defined in

[src/shapes/Text/Text.ts:415](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L415)

***

### colorProperties

> `static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

`StyledText.colorProperties`

#### Defined in

[src/shapes/Object/Object.ts:1543](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1543)

***

### customProperties

> `static` **customProperties**: `string`[] = `[]`

Define a list of custom properties that will be serialized when
instance.toObject() gets called

#### Inherited from

`StyledText.customProperties`

#### Defined in

[src/shapes/Object/Object.ts:1784](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1784)

***

### genericFonts

> `static` **genericFonts**: `string`[]

List of generic font families

#### See

https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#generic-name

#### Defined in

[src/shapes/Text/Text.ts:1802](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1802)

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`FabricText`](/api/classes/fabrictext/)\<`Partial`\<[`TextProps`](/api/interfaces/textprops/)\>, [`SerializedTextProps`](/api/interfaces/serializedtextprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>\> = `textDefaultValues`

#### Overrides

`StyledText.ownDefaults`

#### Defined in

[src/shapes/Text/Text.ts:417](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L417)

***

### stateProperties

> `static` **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

`StyledText.stateProperties`

#### Defined in

[src/shapes/Object/Object.ts:228](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L228)

***

### type

> `static` **type**: `string` = `'Text'`

The class type.
This is used for serialization and deserialization purposes and internally it can be used
to identify classes.
When we transform a class in a plain JS object we need a way to recognize which class it was,
and the type is the way we do that. It has no other purposes and you should not give one.
Hard to reach on instances and please do not use to drive instance's logic (this.constructor.type).
To idenfity a class use instanceof class ( instanceof Rect ).
We do not do that in fabricJS code because we want to try to have code splitting possible.

#### Overrides

`StyledText.type`

#### Defined in

[src/shapes/Text/Text.ts:419](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L419)

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

> `set` **type**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Inherited from

`StyledText.type`

#### Defined in

[src/shapes/Object/Object.ts:357](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L357)

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

`StyledText._drawClipPath`

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

#### Defined in

[src/shapes/Text/Text.ts:983](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L983)

***

### \_getWidthOfCharSpacing()

> **\_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

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

`StyledText._limitCacheSize`

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

#### Defined in

[src/shapes/Text/Text.ts:891](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L891)

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

`StyledText._removeCacheCanvas`

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

`StyledText._renderControls`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:435](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L435)

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

`StyledText._setClippingProperties`

#### Defined in

[src/shapes/Object/Object.ts:1062](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1062)

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `style`): `object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **style**: `Pick`\<[`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

with ill defined

#### Returns

`object`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

#### Overrides

`StyledText._setFillStyles`

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

#### Overrides

`StyledText._setStrokeStyles`

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

`StyledText._setupCompositeOperation`

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

`StyledText._toSVG`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:120](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L120)

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

`StyledText.addPaintOrder`

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

`StyledText.animate`

#### Defined in

[src/shapes/Object/Object.ts:1557](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1557)

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

`StyledText.calcACoords`

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

`StyledText.calcOCoords`

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

`StyledText.calcOwnMatrix`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:513](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L513)

***

### calcTextHeight()

> **calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

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

`StyledText.calcTransformMatrix`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:485](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L485)

***

### canDrop()

> **canDrop**(`_e`): `boolean`

Override to customize drag and drop behavior

#### Parameters

• **\_e**: `DragEvent`

#### Returns

`boolean`

true if the object currently dragged can be dropped on the target

#### Inherited from

`StyledText.canDrop`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:701](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L701)

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

`StyledText.cleanStyle`

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

`StyledText.clearContextTop`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:627](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L627)

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

`StyledText.clone`

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

`StyledText.cloneAsImage`

#### Defined in

[src/shapes/Object/Object.ts:1318](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1318)

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity

#### Overrides

`StyledText.complexity`

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

`StyledText.containsPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:282](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L282)

***

### dispose()

> **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

`StyledText.dispose`

#### Defined in

[src/shapes/Object/Object.ts:1528](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1528)

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

`StyledText.drawBorders`

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

`StyledText.drawCacheOnCanvas`

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

`StyledText.drawClipPathOnCache`

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

`StyledText.drawControls`

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

`StyledText.drawControlsConnectingLines`

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

`StyledText.drawObject`

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

`StyledText.drawSelectionBackground`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:375](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L375)

***

### enlargeSpaces()

> **enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:491](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L491)

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Compare ancestors

#### Type Parameters

• **T** *extends* [`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Inherited from

`StyledText.findCommonAncestors`

#### Defined in

[src/shapes/Object/Object.ts:1675](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1675)

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

`StyledText.fire`

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

`StyledText.forEachControl`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:353](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L353)

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

`StyledText.get`

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L59)

***

### get2DCursorLocation()

> **get2DCursorLocation**(`selectionStart`, `skipWrapping`?): `object`

Returns 2d representation (lineIndex and charIndex) of cursor

#### Parameters

• **selectionStart**: `number`

• **skipWrapping?**: `boolean`

consider the location for unwrapped lines. useful to manage styles.

#### Returns

`object`

##### charIndex

> **charIndex**: `number` = `selectionStart`

##### lineIndex

> **lineIndex**: `number` = `i`

#### Overrides

`StyledText.get2DCursorLocation`

#### Defined in

[src/shapes/Text/Text.ts:555](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L555)

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `object`

#### Returns

`undefined` \| `object`

#### Inherited from

`StyledText.getActiveControl`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:194](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L194)

***

### getAncestors()

> **getAncestors**(): `Ancestors`

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

`StyledText.getAncestors`

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

`StyledText.getBoundingRect`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:343](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L343)

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

`StyledText.getCanvasRetinaScaling`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:400](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L400)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`StyledText.getCenterPoint`

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

`StyledText.getCompleteStyleDeclaration`

#### Defined in

[src/shapes/Text/StyledText.ts:279](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L279)

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

`StyledText.getCoords`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:204](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L204)

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

#### Defined in

[src/shapes/Text/Text.ts:1025](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1025)

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

`StyledText.getObjectOpacity`

#### Defined in

[src/shapes/Object/Object.ts:607](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L607)

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`StyledText.getObjectScaling`

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

`StyledText.getPointByOrigin`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:762](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L762)

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`StyledText.getRelativeCenterPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:743](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L743)

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/fabrictext/getx/#getx)

#### Inherited from

`StyledText.getRelativeX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:115](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L115)

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

`StyledText.getRelativeXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:176](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L176)

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/fabrictext/gety/#gety)

#### Inherited from

`StyledText.getRelativeY`

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

`StyledText.getScaledHeight`

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

`StyledText.getScaledWidth`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:352](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L352)

***

### getSelectionStyles()

> **getSelectionStyles**(`startIndex`, `endIndex`?, `complete`?): `Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

Gets style of a current selection/cursor (at the start position)

#### Parameters

• **startIndex**: `number`

Start index to get styles at

• **endIndex?**: `number`

End index to get styles at, if not specified startIndex + 1

• **complete?**: `boolean`

get full style or not

#### Returns

`Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>[]

styles an array with one, zero or more Style objects

#### Inherited from

`StyledText.getSelectionStyles`

#### Defined in

[src/shapes/Text/StyledText.ts:213](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L213)

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> & `object`

#### Returns

`string`

#### Inherited from

`StyledText.getSvgCommons`

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

`StyledText.getSvgFilter`

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

`StyledText.getSvgStyles`

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

`StyledText.getSvgTransform`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

`StyledText.getTotalAngle`

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

`StyledText.getTotalObjectScaling`

#### Defined in

[src/shapes/Object/Object.ts:593](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L593)

***

### getValueOfPropertyAt()

> **getValueOfPropertyAt**\<`T`\>(`lineIndex`, `charIndex`, `property`): [`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

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

[`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>\[`T`\]

the value of 'property'

#### Defined in

[src/shapes/Text/Text.ts:1542](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1542)

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

`StyledText.getViewportTransform`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:418](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L418)

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

`StyledText.getX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L86)

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

`StyledText.getXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:146](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L146)

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

`StyledText.getY`

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

#### Defined in

[src/shapes/Text/Text.ts:1279](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1279)

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* [`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

`StyledText.hasCommonAncestors`

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

`StyledText.hasFill`

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

`StyledText.hasStroke`

#### Defined in

[src/shapes/Object/Object.ts:771](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L771)

***

### initDimensions()

> **initDimensions**(): `void`

Initialize or update text dimensions.
Updates this.width and this.height with the proper values.
Does not return dimensions.

#### Returns

`void`

#### Defined in

[src/shapes/Text/Text.ts:470](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L470)

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

`StyledText.intersectsWithObject`

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

`StyledText.intersectsWithRect`

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

`StyledText.isCacheDirty`

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

`StyledText.isContainedWithinObject`

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

`StyledText.isContainedWithinRect`

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

`StyledText.isControlVisible`

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

`StyledText.isDescendantOf`

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

`StyledText.isEmptyStyles`

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

#### Defined in

[src/shapes/Text/Text.ts:535](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L535)

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type Parameters

• **T** *extends* [`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

`StyledText.isInFrontOf`

#### Defined in

[src/shapes/Object/Object.ts:1750](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1750)

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`StyledText.isNotVisible`

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

`StyledText.isOnScreen`

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

`StyledText.isOverlapping`

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

`StyledText.isPartiallyOnScreen`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:321](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L321)

***

### isType()

> **isType**(...`types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

• ...**types**: `string`[]

#### Returns

`boolean`

#### Inherited from

`StyledText.isType`

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

#### Defined in

[src/shapes/Text/Text.ts:545](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L545)

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

`StyledText.needsItsOwnCache`

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

`StyledText.off`

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

`StyledText.off`

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

`StyledText.off`

##### Defined in

[src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L133)

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`StyledText.off`

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

`StyledText.on`

##### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L23)

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

`StyledText.on`

##### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L27)

***

### onDeselect()

> **onDeselect**(`_options`?): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

• **\_options?**

options sent from the upper functions

• **\_options.e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

• **\_options.object?**: [`InteractiveFabricObject`](/api/classes/interactivefabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`boolean`

#### Inherited from

`StyledText.onDeselect`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:658](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L658)

***

### onDragStart()

> **onDragStart**(`_e`): `boolean`

Override to customize Drag behavior\
Fired once a drag session has started

#### Parameters

• **\_e**: `DragEvent`

#### Returns

`boolean`

true to handle the drag event

#### Inherited from

`StyledText.onDragStart`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:691](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L691)

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

`StyledText.onSelect`

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

`StyledText.once`

##### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L62)

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

`StyledText.once`

##### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L66)

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

`StyledText.removeStyle`

#### Defined in

[src/shapes/Text/StyledText.ts:165](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L165)

***

### render()

> **render**(`ctx`): `void`

Renders text instance on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Overrides

`StyledText.render`

#### Defined in

[src/shapes/Text/Text.ts:1694](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1694)

***

### renderCache()

> **renderCache**(`this`, `options`?): `void`

#### Parameters

• **this**: `TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **options?**: `any`

#### Returns

`void`

#### Inherited from

`StyledText.renderCache`

#### Defined in

[src/shapes/Object/Object.ts:732](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L732)

***

### renderDragSourceEffect()

> **renderDragSourceEffect**(`_e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the source of a drag event
example: render the selection status for the part of text that is being dragged from a text object

#### Parameters

• **\_e**: `DragEvent`

#### Returns

`void`

#### Inherited from

`StyledText.renderDragSourceEffect`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:712](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L712)

***

### renderDropTargetEffect()

> **renderDropTargetEffect**(`_e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the target of a drag event
used to show that the underly object can receive a drop, or to show how the
object will change when dropping. example: show the cursor where the text is about to be dropped

#### Parameters

• **\_e**: `DragEvent`

#### Returns

`void`

#### Inherited from

`StyledText.renderDropTargetEffect`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:724](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L724)

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

`StyledText.rotate`

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

`StyledText.scale`

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

`StyledText.scaleToHeight`

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

`StyledText.scaleToWidth`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L381)

***

### set()

> **set**(`key`, `value`?): [`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `any`

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`StyledText.set`

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

`StyledText.setControlVisible`

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

`StyledText.setControlsVisibility`

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

`StyledText.setCoords`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:343](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L343)

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

`StyledText.setOnGroup`

#### Defined in

[src/shapes/Object/Object.ts:1509](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1509)

***

### setPathInfo()

> **setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

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

`StyledText.setPositionByOrigin`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:777](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L777)

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/fabrictext/#setx)

#### Returns

`void`

#### Inherited from

`StyledText.setRelativeX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:123](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L123)

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/fabrictext/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

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

`StyledText.setRelativeXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:186](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L186)

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/fabrictext/#sety)

#### Returns

`void`

#### Inherited from

`StyledText.setRelativeY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:139](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L139)

***

### setSelectionStyles()

> **setSelectionStyles**(`styles`, `startIndex`, `endIndex`?): `void`

Sets style of a current selection, if no selection exist, do not set anything.

#### Parameters

• **styles**: `object`

Styles object

• **startIndex**: `number`

Start index to get styles at

• **endIndex?**: `number`

End index to get styles at, if not specified startIndex + 1

#### Returns

`void`

#### Inherited from

`StyledText.setSelectionStyles`

#### Defined in

[src/shapes/Text/StyledText.ts:245](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L245)

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

`StyledText.setX`

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

`StyledText.setXY`

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

`StyledText.setY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:107](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L107)

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

`StyledText.shouldCache`

#### Defined in

[src/shapes/Object/Object.ts:823](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L823)

***

### shouldStartDragging()

> **shouldStartDragging**(`_e`): `boolean`

Override to customize Drag behavior
Fired from Canvas#_onMouseMove

#### Parameters

• **\_e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`boolean`

true in order for the window to start a drag session

#### Inherited from

`StyledText.shouldStartDragging`

#### Defined in

[src/shapes/Object/InteractiveObject.ts:682](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L682)

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

`StyledText.strokeBorders`

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

`StyledText.styleHas`

#### Defined in

[src/shapes/Text/StyledText.ts:70](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/StyledText.ts#L70)

***

### toCanvasElement()

> **toCanvasElement**(`options`): `HTMLCanvasElement`

Converts an object into a HTMLCanvas element

#### Parameters

• **options**: `ObjectToCanvasElementOptions` = `{}`

Options object

#### Returns

`HTMLCanvasElement`

Returns DOM element <canvas> with the FabricObject

#### Inherited from

`StyledText.toCanvasElement`

#### Defined in

[src/shapes/Object/Object.ts:1340](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1340)

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

`StyledText.toClipPathSVG`

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

`StyledText.toDataURL`

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

`StyledText.toDatalessObject`

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

`StyledText.toJSON`

#### Defined in

[src/shapes/Object/Object.ts:1468](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1468)

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type Parameters

• **T** *extends* `Omit`\<`Props` & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\>

• **K** *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Overrides

`StyledText.toObject`

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

`StyledText.toSVG`

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

***

### toString()

> **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Overrides

`StyledText.toString`

#### Defined in

[src/shapes/Text/Text.ts:581](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L581)

***

### toggle()

> **toggle**(`property`): [`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`FabricText`](/api/classes/fabrictext/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`StyledText.toggle`

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

`StyledText.transform`

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

`StyledText.transformMatrixKey`

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

`StyledText.translateToCenterPoint`

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

`StyledText.translateToGivenOrigin`

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

`StyledText.translateToOriginPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:710](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L710)

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

`StyledText.willDrawShadow`

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

`StyledText._fromObject`

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

`StyledText.createControls`

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

#### Overrides

`StyledText.fromObject`

#### Defined in

[src/shapes/Text/Text.ts:1924](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L1924)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

`StyledText.getDefaults`

#### Defined in

[src/shapes/Text/Text.ts:421](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L421)
