# Interface: TextboxProps

## Hierarchy

- [`ITextProps`](ITextProps.md)

- `UniqueTextboxProps`

  ↳ **`TextboxProps`**

## Table of contents

### Properties

- [\_wordJoiners](TextboxProps.md#_wordjoiners)
- [absolutePositioned](TextboxProps.md#absolutepositioned)
- [activeOn](TextboxProps.md#activeon)
- [angle](TextboxProps.md#angle)
- [backgroundColor](TextboxProps.md#backgroundcolor)
- [borderColor](TextboxProps.md#bordercolor)
- [borderDashArray](TextboxProps.md#borderdasharray)
- [borderOpacityWhenMoving](TextboxProps.md#borderopacitywhenmoving)
- [borderScaleFactor](TextboxProps.md#borderscalefactor)
- [canvas](TextboxProps.md#canvas)
- [centeredRotation](TextboxProps.md#centeredrotation)
- [centeredScaling](TextboxProps.md#centeredscaling)
- [charSpacing](TextboxProps.md#charspacing)
- [clipPath](TextboxProps.md#clippath)
- [cornerColor](TextboxProps.md#cornercolor)
- [cornerDashArray](TextboxProps.md#cornerdasharray)
- [cornerSize](TextboxProps.md#cornersize)
- [cornerStrokeColor](TextboxProps.md#cornerstrokecolor)
- [cornerStyle](TextboxProps.md#cornerstyle)
- [direction](TextboxProps.md#direction)
- [dynamicMinWidth](TextboxProps.md#dynamicminwidth)
- [evented](TextboxProps.md#evented)
- [excludeFromExport](TextboxProps.md#excludefromexport)
- [fill](TextboxProps.md#fill)
- [fillRule](TextboxProps.md#fillrule)
- [flipX](TextboxProps.md#flipx)
- [flipY](TextboxProps.md#flipy)
- [fontFamily](TextboxProps.md#fontfamily)
- [fontSize](TextboxProps.md#fontsize)
- [fontStyle](TextboxProps.md#fontstyle)
- [fontWeight](TextboxProps.md#fontweight)
- [globalCompositeOperation](TextboxProps.md#globalcompositeoperation)
- [hasBorders](TextboxProps.md#hasborders)
- [hasControls](TextboxProps.md#hascontrols)
- [height](TextboxProps.md#height)
- [hoverCursor](TextboxProps.md#hovercursor)
- [includeDefaultValues](TextboxProps.md#includedefaultvalues)
- [inverted](TextboxProps.md#inverted)
- [left](TextboxProps.md#left)
- [lineHeight](TextboxProps.md#lineheight)
- [linethrough](TextboxProps.md#linethrough)
- [lockMovementX](TextboxProps.md#lockmovementx)
- [lockMovementY](TextboxProps.md#lockmovementy)
- [lockRotation](TextboxProps.md#lockrotation)
- [lockScalingFlip](TextboxProps.md#lockscalingflip)
- [lockScalingX](TextboxProps.md#lockscalingx)
- [lockScalingY](TextboxProps.md#lockscalingy)
- [lockSkewingX](TextboxProps.md#lockskewingx)
- [lockSkewingY](TextboxProps.md#lockskewingy)
- [minScaleLimit](TextboxProps.md#minscalelimit)
- [minWidth](TextboxProps.md#minwidth)
- [moveCursor](TextboxProps.md#movecursor)
- [noScaleCache](TextboxProps.md#noscalecache)
- [objectCaching](TextboxProps.md#objectcaching)
- [opacity](TextboxProps.md#opacity)
- [originX](TextboxProps.md#originx)
- [originY](TextboxProps.md#originy)
- [overline](TextboxProps.md#overline)
- [padding](TextboxProps.md#padding)
- [paintFirst](TextboxProps.md#paintfirst)
- [path](TextboxProps.md#path)
- [pathAlign](TextboxProps.md#pathalign)
- [pathSide](TextboxProps.md#pathside)
- [perPixelTargetFind](TextboxProps.md#perpixeltargetfind)
- [scaleX](TextboxProps.md#scalex)
- [scaleY](TextboxProps.md#scaley)
- [selectable](TextboxProps.md#selectable)
- [selectionBackgroundColor](TextboxProps.md#selectionbackgroundcolor)
- [selectionEnd](TextboxProps.md#selectionend)
- [selectionStart](TextboxProps.md#selectionstart)
- [shadow](TextboxProps.md#shadow)
- [skewX](TextboxProps.md#skewx)
- [skewY](TextboxProps.md#skewy)
- [snapAngle](TextboxProps.md#snapangle)
- [snapThreshold](TextboxProps.md#snapthreshold)
- [splitByGrapheme](TextboxProps.md#splitbygrapheme)
- [stroke](TextboxProps.md#stroke)
- [strokeDashArray](TextboxProps.md#strokedasharray)
- [strokeDashOffset](TextboxProps.md#strokedashoffset)
- [strokeLineCap](TextboxProps.md#strokelinecap)
- [strokeLineJoin](TextboxProps.md#strokelinejoin)
- [strokeMiterLimit](TextboxProps.md#strokemiterlimit)
- [strokeUniform](TextboxProps.md#strokeuniform)
- [strokeWidth](TextboxProps.md#strokewidth)
- [styles](TextboxProps.md#styles)
- [textAlign](TextboxProps.md#textalign)
- [top](TextboxProps.md#top)
- [touchCornerSize](TextboxProps.md#touchcornersize)
- [transparentCorners](TextboxProps.md#transparentcorners)
- [underline](TextboxProps.md#underline)
- [visible](TextboxProps.md#visible)
- [width](TextboxProps.md#width)

## Properties

### \_wordJoiners

• **\_wordJoiners**: `RegExp`

#### Inherited from

UniqueTextboxProps.\_wordJoiners

#### Defined in

[src/shapes/Textbox.ts:38](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L38)

___

### absolutePositioned

• **absolutePositioned**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will have its top and left relative to canvas, and will
not be influenced by the object transform. This will make the clipPath relative
to the canvas, but clipping just a particular object.
WARNING this is beta, this feature may change or be renamed.
since 2.4.0

**`Default`**

```ts
false
```

#### Inherited from

[ITextProps](ITextProps.md).[absolutePositioned](ITextProps.md#absolutepositioned)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L72)

___

### activeOn

• `Private` **activeOn**: ``"down"`` \| ``"up"``

When 'down', object is set to active on mousedown/touchstart
When 'up', object is set to active on mouseup/touchend
Experimental. Let's see if this breaks anything before supporting officially

since 4.4.0

**`Default`**

```ts
'down'
```

#### Inherited from

[ITextProps](ITextProps.md).[activeOn](ITextProps.md#activeon)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L110)

___

### angle

• **angle**: [`TDegree`](../modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[ITextProps](ITextProps.md).[angle](ITextProps.md#angle)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:95](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L95)

___

### backgroundColor

• **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[backgroundColor](ITextProps.md#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L26)

___

### borderColor

• **borderColor**: `string`

Color of controlling borders of an object (when it's active)

**`Default`**

```ts
rgb(178,204,255)
```

#### Inherited from

[ITextProps](ITextProps.md).[borderColor](ITextProps.md#bordercolor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:7](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BorderProps.ts#L7)

___

### borderDashArray

• **borderDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

**`Since`**

1.6.2

#### Inherited from

[ITextProps](ITextProps.md).[borderDashArray](ITextProps.md#borderdasharray)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:15](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BorderProps.ts#L15)

___

### borderOpacityWhenMoving

• **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

**`Default`**

```ts
0.4
```

#### Inherited from

[ITextProps](ITextProps.md).[borderOpacityWhenMoving](ITextProps.md#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BorderProps.ts#L29)

___

### borderScaleFactor

• **borderScaleFactor**: `number`

Scale factor of object's controlling borders
bigger number will make a thicker border
border is 1, so this is basically a border thickness
since there is no way to change the border itself.

**`Default`**

```ts
1
```

#### Inherited from

[ITextProps](ITextProps.md).[borderScaleFactor](ITextProps.md#borderscalefactor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BorderProps.ts#L39)

___

### canvas

• `Optional` **canvas**: [`Canvas`](../classes/Canvas.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)<[`StaticCanvasEvents`](StaticCanvasEvents.md)\>

#### Inherited from

[ITextProps](ITextProps.md).[canvas](ITextProps.md#canvas)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:16](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L16)

___

### centeredRotation

• **centeredRotation**: `boolean`

When true, this object will use center point as the origin of transformation
when being rotated via the controls.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[centeredRotation](ITextProps.md#centeredrotation)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L41)

___

### centeredScaling

• **centeredScaling**: ``false``

When true, this object will use center point as the origin of transformation
when being scaled via the controls.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[centeredScaling](ITextProps.md#centeredscaling)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L31)

___

### charSpacing

• **charSpacing**: `number`

#### Inherited from

[ITextProps](ITextProps.md).[charSpacing](ITextProps.md#charspacing)

#### Defined in

[src/shapes/Text/Text.ts:92](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L92)

___

### clipPath

• `Optional` **clipPath**: `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[ITextProps](ITextProps.md).[clipPath](ITextProps.md#clippath)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:12](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L12)

___

### cornerColor

• **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

**`Default`**

```ts
rgb(178,204,255)
```

#### Inherited from

[ITextProps](ITextProps.md).[cornerColor](ITextProps.md#cornercolor)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L28)

___

### cornerDashArray

• **cornerDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

**`Since`**

1.6.2

#### Inherited from

[ITextProps](ITextProps.md).[cornerDashArray](ITextProps.md#cornerdasharray)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L54)

___

### cornerSize

• **cornerSize**: `number`

Size of object's controlling corners (in pixels)

**`Default`**

```ts
13
```

#### Inherited from

[ITextProps](ITextProps.md).[cornerSize](ITextProps.md#cornersize)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:7](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L7)

___

### cornerStrokeColor

• **cornerStrokeColor**: `string`

Color of controlling corners of an object (when it's active and transparentCorners false)

**`Since`**

1.6.2

**`Default`**

```ts
null
```

#### Inherited from

[ITextProps](ITextProps.md).[cornerStrokeColor](ITextProps.md#cornerstrokecolor)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:36](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L36)

___

### cornerStyle

• **cornerStyle**: ``"circle"`` \| ``"rect"``

Specify style of control, 'rect' or 'circle'
This is deprecated. In the future there will be a standard control render
And you can swap it with one of the alternative proposed with the control api

**`Since`**

1.6.2

**`Default`**

```ts
rect
```

**`Deprecated`**

#### Inherited from

[ITextProps](ITextProps.md).[cornerStyle](ITextProps.md#cornerstyle)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:47](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L47)

___

### direction

• **direction**: `CanvasDirection`

#### Inherited from

[ITextProps](ITextProps.md).[direction](ITextProps.md#direction)

#### Defined in

[src/shapes/Text/Text.ts:104](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L104)

___

### dynamicMinWidth

• **dynamicMinWidth**: `number`

#### Inherited from

UniqueTextboxProps.dynamicMinWidth

#### Defined in

[src/shapes/Textbox.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L37)

___

### evented

• **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[evented](ITextProps.md#evented)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L99)

___

### excludeFromExport

• **excludeFromExport**: `boolean`

When `true`, object is not exported in OBJECT/JSON

**`Since`**

1.6.3

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[excludeFromExport](ITextProps.md#excludefromexport)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:48](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L48)

___

### fill

• **fill**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[ITextProps](ITextProps.md).[fill](ITextProps.md#fill)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:13](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L13)

___

### fillRule

• **fillRule**: `CanvasFillRule`

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

**`Default`**

```ts
nonzero
```

#### Inherited from

[ITextProps](ITextProps.md).[fillRule](ITextProps.md#fillrule)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L26)

___

### flipX

• **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

**`Default`**

```ts
false
```

#### Inherited from

[ITextProps](ITextProps.md).[flipX](ITextProps.md#flipx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L37)

___

### flipY

• **flipY**: `boolean`

When true, an object is rendered as flipped vertically

**`Default`**

```ts
false
```

#### Inherited from

[ITextProps](ITextProps.md).[flipY](ITextProps.md#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:44](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L44)

___

### fontFamily

• **fontFamily**: `string`

#### Inherited from

[ITextProps](ITextProps.md).[fontFamily](ITextProps.md#fontfamily)

#### Defined in

[src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L96)

___

### fontSize

• **fontSize**: `number`

#### Inherited from

[ITextProps](ITextProps.md).[fontSize](ITextProps.md#fontsize)

#### Defined in

[src/shapes/Text/Text.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L94)

___

### fontStyle

• **fontStyle**: `string`

#### Inherited from

[ITextProps](ITextProps.md).[fontStyle](ITextProps.md#fontstyle)

#### Defined in

[src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L97)

___

### fontWeight

• **fontWeight**: `string`

#### Inherited from

[ITextProps](ITextProps.md).[fontWeight](ITextProps.md#fontweight)

#### Defined in

[src/shapes/Text/Text.ts:95](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L95)

___

### globalCompositeOperation

• **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[globalCompositeOperation](ITextProps.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L18)

___

### hasBorders

• **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[hasBorders](ITextProps.md#hasborders)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:22](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BorderProps.ts#L22)

___

### hasControls

• **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[hasControls](ITextProps.md#hascontrols)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L68)

___

### height

• **height**: `number`

Object height

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[height](ITextProps.md#height)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L30)

___

### hoverCursor

• **hoverCursor**: ``null`` \| `string`

Default cursor value used when hovering over this object on canvas

**`Default`**

```ts
null
```

#### Inherited from

[ITextProps](ITextProps.md).[hoverCursor](ITextProps.md#hovercursor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:61](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L61)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[includeDefaultValues](ITextProps.md#includedefaultvalues)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L40)

___

### inverted

• **inverted**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

**`Default`**

```ts
false
```

#### Inherited from

[ITextProps](ITextProps.md).[inverted](ITextProps.md#inverted)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L60)

___

### left

• **left**: `number`

Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}

**`Default`**

```ts
0
```

#### Inherited from

[ITextProps](ITextProps.md).[left](ITextProps.md#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:16](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L16)

___

### lineHeight

• **lineHeight**: `number`

#### Inherited from

[ITextProps](ITextProps.md).[lineHeight](ITextProps.md#lineheight)

#### Defined in

[src/shapes/Text/Text.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L93)

___

### linethrough

• **linethrough**: `boolean`

#### Inherited from

[ITextProps](ITextProps.md).[linethrough](ITextProps.md#linethrough)

#### Defined in

[src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L102)

___

### lockMovementX

• **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[lockMovementX](ITextProps.md#lockmovementx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:7](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/LockInteractionProps.ts#L7)

___

### lockMovementY

• **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[lockMovementY](ITextProps.md#lockmovementy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/LockInteractionProps.ts#L14)

___

### lockRotation

• **lockRotation**: `boolean`

When `true`, object rotation is locked

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[lockRotation](ITextProps.md#lockrotation)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/LockInteractionProps.ts#L21)

___

### lockScalingFlip

• **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[lockScalingFlip](ITextProps.md#lockscalingflip)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:56](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/LockInteractionProps.ts#L56)

___

### lockScalingX

• **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[lockScalingX](ITextProps.md#lockscalingx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/LockInteractionProps.ts#L28)

___

### lockScalingY

• **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[lockScalingY](ITextProps.md#lockscalingy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:35](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/LockInteractionProps.ts#L35)

___

### lockSkewingX

• **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[lockSkewingX](ITextProps.md#lockskewingx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:42](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/LockInteractionProps.ts#L42)

___

### lockSkewingY

• **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[lockSkewingY](ITextProps.md#lockskewingy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:49](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/LockInteractionProps.ts#L49)

___

### minScaleLimit

• **minScaleLimit**: `number`

Minimum allowed scale value of an object

**`Default`**

```ts
0
```

#### Inherited from

[ITextProps](ITextProps.md).[minScaleLimit](ITextProps.md#minscalelimit)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L23)

___

### minWidth

• **minWidth**: `number`

#### Inherited from

UniqueTextboxProps.minWidth

#### Defined in

[src/shapes/Textbox.ts:35](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L35)

___

### moveCursor

• **moveCursor**: ``null`` \| `string`

Default cursor value used when moving this object on canvas

**`Default`**

```ts
null
```

#### Inherited from

[ITextProps](ITextProps.md).[moveCursor](ITextProps.md#movecursor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L68)

___

### noScaleCache

• `Optional` **noScaleCache**: `boolean`

When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
too much and will be redrawn with correct details at the end of scaling.
this setting is performance and application dependant.
default to true
since 1.7.0

**`Default`**

```ts
true
```

#### Inherited from

[ITextProps](ITextProps.md).[noScaleCache](ITextProps.md#noscalecache)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L21)

___

### objectCaching

• **objectCaching**: `boolean`

When `true`, object is cached on an additional canvas.
When `false`, object is not cached unless necessary ( clipPath )
default to true

**`Since`**

1.7.0

**`Default`**

```ts
true
```

#### Inherited from

[ITextProps](ITextProps.md).[objectCaching](ITextProps.md#objectcaching)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:33](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L33)

___

### opacity

• **opacity**: `number`

Opacity of an object

**`Default`**

```ts
1
```

#### Inherited from

[ITextProps](ITextProps.md).[opacity](ITextProps.md#opacity)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L11)

___

### originX

• **originX**: [`TOriginX`](../modules.md#toriginx)

Horizontal origin of transformation of an object (one of "left", "right", "center")
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'left'
```

#### Inherited from

[ITextProps](ITextProps.md).[originX](ITextProps.md#originx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:80](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L80)

___

### originY

• **originY**: [`TOriginY`](../modules.md#toriginy)

Vertical origin of transformation of an object (one of "top", "bottom", "center")
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'top'
```

#### Inherited from

[ITextProps](ITextProps.md).[originY](ITextProps.md#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L88)

___

### overline

• **overline**: `boolean`

#### Inherited from

[ITextProps](ITextProps.md).[overline](ITextProps.md#overline)

#### Defined in

[src/shapes/Text/Text.ts:101](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L101)

___

### padding

• **padding**: `number`

Padding between object and its controlling borders (in pixels)

**`Default`**

```ts
0
```

#### Inherited from

[ITextProps](ITextProps.md).[padding](ITextProps.md#padding)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:61](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L61)

___

### paintFirst

• **paintFirst**: ``"fill"`` \| ``"stroke"``

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[paintFirst](ITextProps.md#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### path

• `Optional` **path**: [`Path`](../classes/Path.md)<`Partial`<[`PathProps`](PathProps.md)\>, [`SerializedPathProps`](SerializedPathProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[ITextProps](ITextProps.md).[path](ITextProps.md#path)

#### Defined in

[src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L105)

___

### pathAlign

• **pathAlign**: [`TPathAlign`](../modules.md#tpathalign)

#### Inherited from

[ITextProps](ITextProps.md).[pathAlign](ITextProps.md#pathalign)

#### Defined in

[src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L99)

___

### pathSide

• **pathSide**: [`TPathSide`](../modules.md#tpathside)

#### Inherited from

[ITextProps](ITextProps.md).[pathSide](ITextProps.md#pathside)

#### Defined in

[src/shapes/Text/Text.ts:98](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L98)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[perPixelTargetFind](ITextProps.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L84)

___

### scaleX

• **scaleX**: `number`

Object scale factor (horizontal)

**`Default`**

```ts
1
```

#### Inherited from

[ITextProps](ITextProps.md).[scaleX](ITextProps.md#scalex)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L51)

___

### scaleY

• **scaleY**: `number`

Object scale factor (vertical)

**`Default`**

```ts
1
```

#### Inherited from

[ITextProps](ITextProps.md).[scaleY](ITextProps.md#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L58)

___

### selectable

• **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[selectable](ITextProps.md#selectable)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:92](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L92)

___

### selectionBackgroundColor

• **selectionBackgroundColor**: `string`

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

**`Deprecated`**

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[selectionBackgroundColor](ITextProps.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:77](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L77)

___

### selectionEnd

• **selectionEnd**: `number`

#### Inherited from

[ITextProps](ITextProps.md).[selectionEnd](ITextProps.md#selectionend)

#### Defined in

[src/shapes/IText/IText.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L53)

___

### selectionStart

• **selectionStart**: `number`

#### Inherited from

[ITextProps](ITextProps.md).[selectionStart](ITextProps.md#selectionstart)

#### Defined in

[src/shapes/IText/IText.ts:52](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L52)

___

### shadow

• **shadow**: ``null`` \| [`Shadow`](../classes/Shadow.md)

#### Inherited from

[ITextProps](ITextProps.md).[shadow](ITextProps.md#shadow)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:15](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L15)

___

### skewX

• **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[ITextProps](ITextProps.md).[skewX](ITextProps.md#skewx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L65)

___

### skewY

• **skewY**: `number`

Angle of skew on y axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[ITextProps](ITextProps.md).[skewY](ITextProps.md#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L72)

___

### snapAngle

• `Optional` **snapAngle**: [`TDegree`](../modules.md#tdegree)

The angle that an object will lock to while rotating.

#### Inherited from

[ITextProps](ITextProps.md).[snapAngle](ITextProps.md#snapangle)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:47](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L47)

___

### snapThreshold

• `Optional` **snapThreshold**: [`TDegree`](../modules.md#tdegree)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[ITextProps](ITextProps.md).[snapThreshold](ITextProps.md#snapthreshold)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L54)

___

### splitByGrapheme

• **splitByGrapheme**: `boolean`

#### Inherited from

UniqueTextboxProps.splitByGrapheme

#### Defined in

[src/shapes/Textbox.ts:36](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L36)

___

### stroke

• **stroke**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[ITextProps](ITextProps.md).[stroke](ITextProps.md#stroke)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L14)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

**`Default`**

```ts
null;
```

#### Inherited from

[ITextProps](ITextProps.md).[strokeDashArray](ITextProps.md#strokedasharray)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L48)

___

### strokeDashOffset

• **strokeDashOffset**: `number`

Line offset of an object's stroke

**`Default`**

```ts
0
```

#### Inherited from

[ITextProps](ITextProps.md).[strokeDashOffset](ITextProps.md#strokedashoffset)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L55)

___

### strokeLineCap

• **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

**`Default`**

```ts
butt
```

#### Inherited from

[ITextProps](ITextProps.md).[strokeLineCap](ITextProps.md#strokelinecap)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L62)

___

### strokeLineJoin

• **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[strokeLineJoin](ITextProps.md#strokelinejoin)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L69)

___

### strokeMiterLimit

• **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

**`Default`**

```ts
4
```

#### Inherited from

[ITextProps](ITextProps.md).[strokeMiterLimit](ITextProps.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L76)

___

### strokeUniform

• **strokeUniform**: `boolean`

When `false`, the stoke width will scale with the object.
When `true`, the stroke will always match the exact pixel size entered for stroke width.
this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
default to false

**`Since`**

2.6.0

**`Default`**

```ts
false
```

**`Default`**

```ts
false
```

#### Inherited from

[ITextProps](ITextProps.md).[strokeUniform](ITextProps.md#strokeuniform)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L89)

___

### strokeWidth

• **strokeWidth**: `number`

Width of a stroke used to render this object

**`Default`**

```ts
1
```

#### Inherited from

[ITextProps](ITextProps.md).[strokeWidth](ITextProps.md#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L41)

___

### styles

• **styles**: [`TextStyle`](../modules.md#textstyle)

#### Inherited from

[ITextProps](ITextProps.md).[styles](ITextProps.md#styles)

#### Defined in

[src/shapes/Text/Text.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L115)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

[ITextProps](ITextProps.md).[textAlign](ITextProps.md#textalign)

#### Defined in

[src/shapes/Text/Text.ts:103](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L103)

___

### top

• **top**: `number`

Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}

**`Default`**

```ts
0
```

#### Inherited from

[ITextProps](ITextProps.md).[top](ITextProps.md#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L9)

___

### touchCornerSize

• **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

**`Default`**

```ts
24
```

#### Inherited from

[ITextProps](ITextProps.md).[touchCornerSize](ITextProps.md#touchcornersize)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L14)

___

### transparentCorners

• **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

**`Default`**

```ts
true
```

#### Inherited from

[ITextProps](ITextProps.md).[transparentCorners](ITextProps.md#transparentcorners)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L21)

___

### underline

• **underline**: `boolean`

#### Inherited from

[ITextProps](ITextProps.md).[underline](ITextProps.md#underline)

#### Defined in

[src/shapes/Text/Text.ts:100](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L100)

___

### visible

• **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[visible](ITextProps.md#visible)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L40)

___

### width

• **width**: `number`

Object width

**`Default`**

```ts

```

#### Inherited from

[ITextProps](ITextProps.md).[width](ITextProps.md#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L23)
