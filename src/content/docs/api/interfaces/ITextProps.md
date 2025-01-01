---
editUrl: false
next: false
prev: false
title: "ITextProps"
---

Defined in: [src/shapes/IText/IText.ts:75](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/IText/IText.ts#L75)

## Extends

- [`TextProps`](/api/interfaces/textprops/).`UniqueITextProps`

## Extended by

- [`TextboxProps`](/api/interfaces/textboxprops/)

## Properties

### absolutePositioned

> **absolutePositioned**: `boolean`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:72](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/SerializedObjectProps.ts#L72)

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

[`TextProps`](/api/interfaces/textprops/).[`absolutePositioned`](/api/interfaces/textprops/#absolutepositioned)

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:63](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L63)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`angle`](/api/interfaces/textprops/#angle)

***

### backgroundColor

> **backgroundColor**: `string`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/SerializedObjectProps.ts#L26)

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`backgroundColor`](/api/interfaces/textprops/#backgroundcolor)

***

### borderColor

> **borderColor**: `string`

Defined in: [src/shapes/Object/types/BorderProps.ts:7](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BorderProps.ts#L7)

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`borderColor`](/api/interfaces/textprops/#bordercolor)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/types/BorderProps.ts:15](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BorderProps.ts#L15)

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`borderDashArray`](/api/interfaces/textprops/#borderdasharray)

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Defined in: [src/shapes/Object/types/BorderProps.ts:29](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BorderProps.ts#L29)

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`borderOpacityWhenMoving`](/api/interfaces/textprops/#borderopacitywhenmoving)

***

### borderScaleFactor

> **borderScaleFactor**: `number`

Defined in: [src/shapes/Object/types/BorderProps.ts:40](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BorderProps.ts#L40)

Scale factor for the border of the objects ( selection box and controls stroke ).
Bigger number will make a thicker border
border default value is 1, so this scale value is equal to a border and control strokeWidth.
Id you need to divide border from control strokeWidth
you will need to write your own render function for controls

#### Default

```ts
1
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`borderScaleFactor`](/api/interfaces/textprops/#borderscalefactor)

***

### canvas?

> `optional` **canvas**: [`Canvas`](/api/classes/canvas/) \| [`StaticCanvas`](/api/classes/staticcanvas/)

Defined in: [src/shapes/Object/types/ObjectProps.ts:20](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L20)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`canvas`](/api/interfaces/textprops/#canvas)

***

### centeredRotation

> **centeredRotation**: `boolean`

Defined in: [src/shapes/Object/types/ObjectTransformProps.ts:27](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectTransformProps.ts#L27)

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

[`TextProps`](/api/interfaces/textprops/).[`centeredRotation`](/api/interfaces/textprops/#centeredrotation)

***

### centeredScaling

> **centeredScaling**: `boolean`

Defined in: [src/shapes/Object/types/ObjectTransformProps.ts:36](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectTransformProps.ts#L36)

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`centeredScaling`](/api/interfaces/textprops/#centeredscaling)

***

### charSpacing

> **charSpacing**: `number`

Defined in: [src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L96)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`charSpacing`](/api/interfaces/textprops/#charspacing)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)

Defined in: [src/shapes/Object/types/ObjectProps.ts:16](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L16)

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`clipPath`](/api/interfaces/textprops/#clippath)

***

### cornerColor

> **cornerColor**: `string`

Defined in: [src/shapes/Object/types/ControlProps.ts:28](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ControlProps.ts#L28)

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`cornerColor`](/api/interfaces/textprops/#cornercolor)

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/types/ControlProps.ts:55](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ControlProps.ts#L55)

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Default

```ts
null
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`cornerDashArray`](/api/interfaces/textprops/#cornerdasharray)

***

### cornerSize

> **cornerSize**: `number`

Defined in: [src/shapes/Object/types/ControlProps.ts:7](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ControlProps.ts#L7)

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`cornerSize`](/api/interfaces/textprops/#cornersize)

***

### cornerStrokeColor

> **cornerStrokeColor**: `string`

Defined in: [src/shapes/Object/types/ControlProps.ts:36](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ControlProps.ts#L36)

Color of controlling corners of an object (when it's active and transparentCorners false)

#### Since

1.6.2

#### Default

```ts
''
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`cornerStrokeColor`](/api/interfaces/textprops/#cornerstrokecolor)

***

### ~~cornerStyle~~

> **cornerStyle**: `"circle"` \| `"rect"`

Defined in: [src/shapes/Object/types/ControlProps.ts:47](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ControlProps.ts#L47)

Specify style of control, 'rect' or 'circle'
This is deprecated. In the future there will be a standard control render
And you can swap it with one of the alternative proposed with the control api

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Since

1.6.2

#### Default

```ts
'rect'
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`cornerStyle`](/api/interfaces/textprops/#cornerstyle)

***

### direction

> **direction**: `CanvasDirection`

Defined in: [src/shapes/Text/Text.ts:108](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L108)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`direction`](/api/interfaces/textprops/#direction)

***

### evented

> **evented**: `boolean`

Defined in: [src/shapes/Object/types/FabricObjectProps.ts:65](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FabricObjectProps.ts#L65)

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`evented`](/api/interfaces/textprops/#evented)

***

### excludeFromExport

> **excludeFromExport**: `boolean`

Defined in: [src/shapes/Object/types/ObjectProps.ts:52](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L52)

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`excludeFromExport`](/api/interfaces/textprops/#excludefromexport)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/shapes/Object/types/ObjectProps.ts:17](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L17)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fill`](/api/interfaces/textprops/#fill)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L26)

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fillRule`](/api/interfaces/textprops/#fillrule)

***

### flipX

> **flipX**: `boolean`

Defined in: [src/shapes/Object/types/BaseProps.ts:70](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L70)

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`flipX`](/api/interfaces/textprops/#flipx)

***

### flipY

> **flipY**: `boolean`

Defined in: [src/shapes/Object/types/BaseProps.ts:77](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L77)

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`flipY`](/api/interfaces/textprops/#flipy)

***

### fontFamily

> **fontFamily**: `string`

Defined in: [src/shapes/Text/Text.ts:100](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L100)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fontFamily`](/api/interfaces/textprops/#fontfamily)

***

### fontSize

> **fontSize**: `number`

Defined in: [src/shapes/Text/Text.ts:98](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L98)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fontSize`](/api/interfaces/textprops/#fontsize)

***

### fontStyle

> **fontStyle**: `string`

Defined in: [src/shapes/Text/Text.ts:101](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L101)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fontStyle`](/api/interfaces/textprops/#fontstyle)

***

### fontWeight

> **fontWeight**: `string` \| `number`

Defined in: [src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L99)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`fontWeight`](/api/interfaces/textprops/#fontweight)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/SerializedObjectProps.ts#L18)

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`globalCompositeOperation`](/api/interfaces/textprops/#globalcompositeoperation)

***

### hasBorders

> **hasBorders**: `boolean`

Defined in: [src/shapes/Object/types/BorderProps.ts:22](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BorderProps.ts#L22)

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`hasBorders`](/api/interfaces/textprops/#hasborders)

***

### hasControls

> **hasControls**: `boolean`

Defined in: [src/shapes/Object/types/ControlProps.ts:69](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ControlProps.ts#L69)

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts
true
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`hasControls`](/api/interfaces/textprops/#hascontrols)

***

### height

> **height**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L34)

Object height

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`height`](/api/interfaces/textprops/#height)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Defined in: [src/shapes/Object/types/FabricObjectProps.ts:27](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FabricObjectProps.ts#L27)

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`hoverCursor`](/api/interfaces/textprops/#hovercursor)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Defined in: [src/shapes/Object/types/ObjectProps.ts:44](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L44)

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`includeDefaultValues`](/api/interfaces/textprops/#includedefaultvalues)

***

### inverted

> **inverted**: `boolean`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:60](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/SerializedObjectProps.ts#L60)

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

#### Default

```ts
false
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`inverted`](/api/interfaces/textprops/#inverted)

***

### left

> **left**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L11)

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](../../../../api/interfaces/fabricobjectprops/#originx)

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`left`](/api/interfaces/textprops/#left)

***

### lineHeight

> **lineHeight**: `number`

Defined in: [src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L97)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lineHeight`](/api/interfaces/textprops/#lineheight)

***

### linethrough

> **linethrough**: `boolean`

Defined in: [src/shapes/Text/Text.ts:106](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L106)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`linethrough`](/api/interfaces/textprops/#linethrough)

***

### lockMovementX

> **lockMovementX**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:7](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L7)

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockMovementX`](/api/interfaces/textprops/#lockmovementx)

***

### lockMovementY

> **lockMovementY**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:14](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L14)

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockMovementY`](/api/interfaces/textprops/#lockmovementy)

***

### lockRotation

> **lockRotation**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:21](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L21)

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockRotation`](/api/interfaces/textprops/#lockrotation)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:56](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L56)

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockScalingFlip`](/api/interfaces/textprops/#lockscalingflip)

***

### lockScalingX

> **lockScalingX**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:28](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L28)

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockScalingX`](/api/interfaces/textprops/#lockscalingx)

***

### lockScalingY

> **lockScalingY**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:35](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L35)

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockScalingY`](/api/interfaces/textprops/#lockscalingy)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:42](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L42)

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockSkewingX`](/api/interfaces/textprops/#lockskewingx)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:49](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L49)

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`lockSkewingY`](/api/interfaces/textprops/#lockskewingy)

***

### minScaleLimit

> **minScaleLimit**: `number`

Defined in: [src/shapes/Object/types/ObjectProps.ts:27](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L27)

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`minScaleLimit`](/api/interfaces/textprops/#minscalelimit)

***

### moveCursor

> **moveCursor**: `null` \| `string`

Defined in: [src/shapes/Object/types/FabricObjectProps.ts:34](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FabricObjectProps.ts#L34)

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`moveCursor`](/api/interfaces/textprops/#movecursor)

***

### noScaleCache?

> `optional` **noScaleCache**: `boolean`

Defined in: [src/shapes/Object/types/FabricObjectProps.ts:20](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FabricObjectProps.ts#L20)

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

[`TextProps`](/api/interfaces/textprops/).[`noScaleCache`](/api/interfaces/textprops/#noscalecache)

***

### objectCaching

> **objectCaching**: `boolean`

Defined in: [src/shapes/Object/types/ObjectProps.ts:37](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L37)

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

[`TextProps`](/api/interfaces/textprops/).[`objectCaching`](/api/interfaces/textprops/#objectcaching)

***

### opacity

> **opacity**: `number`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/SerializedObjectProps.ts#L11)

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`opacity`](/api/interfaces/textprops/#opacity)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Defined in: [src/shapes/Object/types/BaseProps.ts:45](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L45)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

:::caution[Deprecated]
please set your default to 'center' in new projects and don't use it to build logic
The reason is explained here: https://github.com/fabricjs/fabric.js/discussions/9736
To set the default value to 'center' import BaseFabricObject and set the static BaseFabricObject.ownDefaults.originX = 'center'
:::

#### Default

```ts
'left'
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`originX`](/api/interfaces/textprops/#originx)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Defined in: [src/shapes/Object/types/BaseProps.ts:56](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L56)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

:::caution[Deprecated]
please set your default to 'center' in new projects and don't use it to build logic
The reason is explained here: https://github.com/fabricjs/fabric.js/discussions/9736
To set the default value to 'center' import BaseFabricObject and set the static BaseFabricObject.ownDefaults.originY = 'center'
:::

#### Default

```ts
'top'
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`originY`](/api/interfaces/textprops/#originy)

***

### overline

> **overline**: `boolean`

Defined in: [src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L105)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`overline`](/api/interfaces/textprops/#overline)

***

### padding

> **padding**: `number`

Defined in: [src/shapes/Object/types/ControlProps.ts:62](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ControlProps.ts#L62)

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`padding`](/api/interfaces/textprops/#padding)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L9)

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`paintFirst`](/api/interfaces/textprops/#paintfirst)

***

### path?

> `optional` **path**: [`Path`](/api/classes/path/)

Defined in: [src/shapes/Text/Text.ts:109](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L109)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`path`](/api/interfaces/textprops/#path)

***

### pathAlign

> **pathAlign**: [`TPathAlign`](/api/type-aliases/tpathalign/)

Defined in: [src/shapes/Text/Text.ts:103](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L103)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`pathAlign`](/api/interfaces/textprops/#pathalign)

***

### pathSide

> **pathSide**: [`TPathSide`](/api/type-aliases/tpathside/)

Defined in: [src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L102)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`pathSide`](/api/interfaces/textprops/#pathside)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

Defined in: [src/shapes/Object/types/FabricObjectProps.ts:50](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FabricObjectProps.ts#L50)

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`perPixelTargetFind`](/api/interfaces/textprops/#perpixeltargetfind)

***

### scaleX

> **scaleX**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:84](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L84)

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`scaleX`](/api/interfaces/textprops/#scalex)

***

### scaleY

> **scaleY**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:91](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L91)

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`scaleY`](/api/interfaces/textprops/#scaley)

***

### selectable

> **selectable**: `boolean`

Defined in: [src/shapes/Object/types/FabricObjectProps.ts:58](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FabricObjectProps.ts#L58)

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`selectable`](/api/interfaces/textprops/#selectable)

***

### ~~selectionBackgroundColor~~

> **selectionBackgroundColor**: `string`

Defined in: [src/shapes/Object/types/FabricObjectProps.ts:43](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FabricObjectProps.ts#L43)

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`selectionBackgroundColor`](/api/interfaces/textprops/#selectionbackgroundcolor)

***

### selectionEnd

> **selectionEnd**: `number`

Defined in: [src/shapes/IText/IText.ts:68](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/IText/IText.ts#L68)

#### Inherited from

`UniqueITextProps.selectionEnd`

***

### selectionStart

> **selectionStart**: `number`

Defined in: [src/shapes/IText/IText.ts:67](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/IText/IText.ts#L67)

#### Inherited from

`UniqueITextProps.selectionStart`

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Defined in: [src/shapes/Object/types/ObjectProps.ts:19](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L19)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`shadow`](/api/interfaces/textprops/#shadow)

***

### skewX

> **skewX**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:98](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L98)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`skewX`](/api/interfaces/textprops/#skewx)

***

### skewY

> **skewY**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:105](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L105)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`skewY`](/api/interfaces/textprops/#skewy)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/ObjectTransformProps.ts:8](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectTransformProps.ts#L8)

The angle that an object will lock to while rotating.

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`snapAngle`](/api/interfaces/textprops/#snapangle)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/ObjectTransformProps.ts:15](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectTransformProps.ts#L15)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`snapThreshold`](/api/interfaces/textprops/#snapthreshold)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/shapes/Object/types/ObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L18)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`stroke`](/api/interfaces/textprops/#stroke)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L48)

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`strokeDashArray`](/api/interfaces/textprops/#strokedasharray)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L55)

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`strokeDashOffset`](/api/interfaces/textprops/#strokedashoffset)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L62)

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`strokeLineCap`](/api/interfaces/textprops/#strokelinecap)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L69)

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`strokeLineJoin`](/api/interfaces/textprops/#strokelinejoin)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L76)

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`strokeMiterLimit`](/api/interfaces/textprops/#strokemiterlimit)

***

### strokeUniform

> **strokeUniform**: `boolean`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L89)

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

[`TextProps`](/api/interfaces/textprops/).[`strokeUniform`](/api/interfaces/textprops/#strokeuniform)

***

### strokeWidth

> **strokeWidth**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L41)

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`strokeWidth`](/api/interfaces/textprops/#strokewidth)

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/)

Defined in: [src/shapes/Text/Text.ts:119](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L119)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`styles`](/api/interfaces/textprops/#styles)

***

### textAlign

> **textAlign**: `string`

Defined in: [src/shapes/Text/Text.ts:107](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L107)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`textAlign`](/api/interfaces/textprops/#textalign)

***

### top

> **top**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L20)

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](../../../../api/interfaces/fabricobjectprops/#originy)

#### Default

```ts
0
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`top`](/api/interfaces/textprops/#top)

***

### touchCornerSize

> **touchCornerSize**: `number`

Defined in: [src/shapes/Object/types/ControlProps.ts:14](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ControlProps.ts#L14)

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`touchCornerSize`](/api/interfaces/textprops/#touchcornersize)

***

### transparentCorners

> **transparentCorners**: `boolean`

Defined in: [src/shapes/Object/types/ControlProps.ts:21](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ControlProps.ts#L21)

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`transparentCorners`](/api/interfaces/textprops/#transparentcorners)

***

### underline

> **underline**: `boolean`

Defined in: [src/shapes/Text/Text.ts:104](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Text/Text.ts#L104)

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`underline`](/api/interfaces/textprops/#underline)

***

### visible

> **visible**: `boolean`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/SerializedObjectProps.ts#L40)

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`visible`](/api/interfaces/textprops/#visible)

***

### width

> **width**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L27)

Object width

#### Default

```ts

```

#### Inherited from

[`TextProps`](/api/interfaces/textprops/).[`width`](/api/interfaces/textprops/#width)
