# Interface: EllipseProps

## Hierarchy

- [`FabricObjectProps`](FabricObjectProps.md)

- `UniqueEllipseProps`

  ↳ **`EllipseProps`**

## Implemented by

- [`Ellipse`](../classes/Ellipse.md)

## Table of contents

### Properties

- [absolutePositioned](EllipseProps.md#absolutepositioned)
- [activeOn](EllipseProps.md#activeon)
- [angle](EllipseProps.md#angle)
- [backgroundColor](EllipseProps.md#backgroundcolor)
- [borderColor](EllipseProps.md#bordercolor)
- [borderDashArray](EllipseProps.md#borderdasharray)
- [borderOpacityWhenMoving](EllipseProps.md#borderopacitywhenmoving)
- [borderScaleFactor](EllipseProps.md#borderscalefactor)
- [canvas](EllipseProps.md#canvas)
- [centeredRotation](EllipseProps.md#centeredrotation)
- [centeredScaling](EllipseProps.md#centeredscaling)
- [clipPath](EllipseProps.md#clippath)
- [cornerColor](EllipseProps.md#cornercolor)
- [cornerDashArray](EllipseProps.md#cornerdasharray)
- [cornerSize](EllipseProps.md#cornersize)
- [cornerStrokeColor](EllipseProps.md#cornerstrokecolor)
- [cornerStyle](EllipseProps.md#cornerstyle)
- [evented](EllipseProps.md#evented)
- [excludeFromExport](EllipseProps.md#excludefromexport)
- [fill](EllipseProps.md#fill)
- [fillRule](EllipseProps.md#fillrule)
- [flipX](EllipseProps.md#flipx)
- [flipY](EllipseProps.md#flipy)
- [globalCompositeOperation](EllipseProps.md#globalcompositeoperation)
- [hasBorders](EllipseProps.md#hasborders)
- [hasControls](EllipseProps.md#hascontrols)
- [height](EllipseProps.md#height)
- [hoverCursor](EllipseProps.md#hovercursor)
- [includeDefaultValues](EllipseProps.md#includedefaultvalues)
- [inverted](EllipseProps.md#inverted)
- [left](EllipseProps.md#left)
- [lockMovementX](EllipseProps.md#lockmovementx)
- [lockMovementY](EllipseProps.md#lockmovementy)
- [lockRotation](EllipseProps.md#lockrotation)
- [lockScalingFlip](EllipseProps.md#lockscalingflip)
- [lockScalingX](EllipseProps.md#lockscalingx)
- [lockScalingY](EllipseProps.md#lockscalingy)
- [lockSkewingX](EllipseProps.md#lockskewingx)
- [lockSkewingY](EllipseProps.md#lockskewingy)
- [minScaleLimit](EllipseProps.md#minscalelimit)
- [moveCursor](EllipseProps.md#movecursor)
- [noScaleCache](EllipseProps.md#noscalecache)
- [objectCaching](EllipseProps.md#objectcaching)
- [opacity](EllipseProps.md#opacity)
- [originX](EllipseProps.md#originx)
- [originY](EllipseProps.md#originy)
- [padding](EllipseProps.md#padding)
- [paintFirst](EllipseProps.md#paintfirst)
- [perPixelTargetFind](EllipseProps.md#perpixeltargetfind)
- [rx](EllipseProps.md#rx)
- [ry](EllipseProps.md#ry)
- [scaleX](EllipseProps.md#scalex)
- [scaleY](EllipseProps.md#scaley)
- [selectable](EllipseProps.md#selectable)
- [selectionBackgroundColor](EllipseProps.md#selectionbackgroundcolor)
- [shadow](EllipseProps.md#shadow)
- [skewX](EllipseProps.md#skewx)
- [skewY](EllipseProps.md#skewy)
- [snapAngle](EllipseProps.md#snapangle)
- [snapThreshold](EllipseProps.md#snapthreshold)
- [stroke](EllipseProps.md#stroke)
- [strokeDashArray](EllipseProps.md#strokedasharray)
- [strokeDashOffset](EllipseProps.md#strokedashoffset)
- [strokeLineCap](EllipseProps.md#strokelinecap)
- [strokeLineJoin](EllipseProps.md#strokelinejoin)
- [strokeMiterLimit](EllipseProps.md#strokemiterlimit)
- [strokeUniform](EllipseProps.md#strokeuniform)
- [strokeWidth](EllipseProps.md#strokewidth)
- [top](EllipseProps.md#top)
- [touchCornerSize](EllipseProps.md#touchcornersize)
- [transparentCorners](EllipseProps.md#transparentcorners)
- [visible](EllipseProps.md#visible)
- [width](EllipseProps.md#width)

## Properties

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

[FabricObjectProps](FabricObjectProps.md).[absolutePositioned](FabricObjectProps.md#absolutepositioned)

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

[FabricObjectProps](FabricObjectProps.md).[activeOn](FabricObjectProps.md#activeon)

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

[FabricObjectProps](FabricObjectProps.md).[angle](FabricObjectProps.md#angle)

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

[FabricObjectProps](FabricObjectProps.md).[backgroundColor](FabricObjectProps.md#backgroundcolor)

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

[FabricObjectProps](FabricObjectProps.md).[borderColor](FabricObjectProps.md#bordercolor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:7](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BorderProps.ts#L7)

___

### borderDashArray

• **borderDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

**`Since`**

1.6.2

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[borderDashArray](FabricObjectProps.md#borderdasharray)

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

[FabricObjectProps](FabricObjectProps.md).[borderOpacityWhenMoving](FabricObjectProps.md#borderopacitywhenmoving)

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

[FabricObjectProps](FabricObjectProps.md).[borderScaleFactor](FabricObjectProps.md#borderscalefactor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BorderProps.ts#L39)

___

### canvas

• `Optional` **canvas**: [`Canvas`](../classes/Canvas.md) \| [`StaticCanvas`](../classes/StaticCanvas.md)<[`StaticCanvasEvents`](StaticCanvasEvents.md)\>

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[canvas](FabricObjectProps.md#canvas)

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

[FabricObjectProps](FabricObjectProps.md).[centeredRotation](FabricObjectProps.md#centeredrotation)

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

[FabricObjectProps](FabricObjectProps.md).[centeredScaling](FabricObjectProps.md#centeredscaling)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L31)

___

### clipPath

• `Optional` **clipPath**: `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[clipPath](FabricObjectProps.md#clippath)

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

[FabricObjectProps](FabricObjectProps.md).[cornerColor](FabricObjectProps.md#cornercolor)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L28)

___

### cornerDashArray

• **cornerDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

**`Since`**

1.6.2

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[cornerDashArray](FabricObjectProps.md#cornerdasharray)

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

[FabricObjectProps](FabricObjectProps.md).[cornerSize](FabricObjectProps.md#cornersize)

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

[FabricObjectProps](FabricObjectProps.md).[cornerStrokeColor](FabricObjectProps.md#cornerstrokecolor)

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

[FabricObjectProps](FabricObjectProps.md).[cornerStyle](FabricObjectProps.md#cornerstyle)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:47](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L47)

___

### evented

• **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[evented](FabricObjectProps.md#evented)

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

[FabricObjectProps](FabricObjectProps.md).[excludeFromExport](FabricObjectProps.md#excludefromexport)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:48](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L48)

___

### fill

• **fill**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[fill](FabricObjectProps.md#fill)

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

[FabricObjectProps](FabricObjectProps.md).[fillRule](FabricObjectProps.md#fillrule)

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

[FabricObjectProps](FabricObjectProps.md).[flipX](FabricObjectProps.md#flipx)

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

[FabricObjectProps](FabricObjectProps.md).[flipY](FabricObjectProps.md#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:44](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L44)

___

### globalCompositeOperation

• **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[globalCompositeOperation](FabricObjectProps.md#globalcompositeoperation)

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

[FabricObjectProps](FabricObjectProps.md).[hasBorders](FabricObjectProps.md#hasborders)

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

[FabricObjectProps](FabricObjectProps.md).[hasControls](FabricObjectProps.md#hascontrols)

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

[FabricObjectProps](FabricObjectProps.md).[height](FabricObjectProps.md#height)

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

[FabricObjectProps](FabricObjectProps.md).[hoverCursor](FabricObjectProps.md#hovercursor)

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

[FabricObjectProps](FabricObjectProps.md).[includeDefaultValues](FabricObjectProps.md#includedefaultvalues)

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

[FabricObjectProps](FabricObjectProps.md).[inverted](FabricObjectProps.md#inverted)

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

[FabricObjectProps](FabricObjectProps.md).[left](FabricObjectProps.md#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:16](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L16)

___

### lockMovementX

• **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[lockMovementX](FabricObjectProps.md#lockmovementx)

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

[FabricObjectProps](FabricObjectProps.md).[lockMovementY](FabricObjectProps.md#lockmovementy)

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

[FabricObjectProps](FabricObjectProps.md).[lockRotation](FabricObjectProps.md#lockrotation)

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

[FabricObjectProps](FabricObjectProps.md).[lockScalingFlip](FabricObjectProps.md#lockscalingflip)

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

[FabricObjectProps](FabricObjectProps.md).[lockScalingX](FabricObjectProps.md#lockscalingx)

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

[FabricObjectProps](FabricObjectProps.md).[lockScalingY](FabricObjectProps.md#lockscalingy)

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

[FabricObjectProps](FabricObjectProps.md).[lockSkewingX](FabricObjectProps.md#lockskewingx)

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

[FabricObjectProps](FabricObjectProps.md).[lockSkewingY](FabricObjectProps.md#lockskewingy)

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

[FabricObjectProps](FabricObjectProps.md).[minScaleLimit](FabricObjectProps.md#minscalelimit)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ObjectProps.ts#L23)

___

### moveCursor

• **moveCursor**: ``null`` \| `string`

Default cursor value used when moving this object on canvas

**`Default`**

```ts
null
```

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[moveCursor](FabricObjectProps.md#movecursor)

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

[FabricObjectProps](FabricObjectProps.md).[noScaleCache](FabricObjectProps.md#noscalecache)

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

[FabricObjectProps](FabricObjectProps.md).[objectCaching](FabricObjectProps.md#objectcaching)

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

[FabricObjectProps](FabricObjectProps.md).[opacity](FabricObjectProps.md#opacity)

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

[FabricObjectProps](FabricObjectProps.md).[originX](FabricObjectProps.md#originx)

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

[FabricObjectProps](FabricObjectProps.md).[originY](FabricObjectProps.md#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L88)

___

### padding

• **padding**: `number`

Padding between object and its controlling borders (in pixels)

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[padding](FabricObjectProps.md#padding)

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

[FabricObjectProps](FabricObjectProps.md).[paintFirst](FabricObjectProps.md#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[perPixelTargetFind](FabricObjectProps.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L84)

___

### rx

• **rx**: `number`

#### Inherited from

UniqueEllipseProps.rx

#### Defined in

[src/shapes/Ellipse.ts:17](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Ellipse.ts#L17)

___

### ry

• **ry**: `number`

#### Inherited from

UniqueEllipseProps.ry

#### Defined in

[src/shapes/Ellipse.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Ellipse.ts#L18)

___

### scaleX

• **scaleX**: `number`

Object scale factor (horizontal)

**`Default`**

```ts
1
```

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[scaleX](FabricObjectProps.md#scalex)

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

[FabricObjectProps](FabricObjectProps.md).[scaleY](FabricObjectProps.md#scaley)

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

[FabricObjectProps](FabricObjectProps.md).[selectable](FabricObjectProps.md#selectable)

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

[FabricObjectProps](FabricObjectProps.md).[selectionBackgroundColor](FabricObjectProps.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:77](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L77)

___

### shadow

• **shadow**: ``null`` \| [`Shadow`](../classes/Shadow.md)

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[shadow](FabricObjectProps.md#shadow)

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

[FabricObjectProps](FabricObjectProps.md).[skewX](FabricObjectProps.md#skewx)

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

[FabricObjectProps](FabricObjectProps.md).[skewY](FabricObjectProps.md#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L72)

___

### snapAngle

• `Optional` **snapAngle**: [`TDegree`](../modules.md#tdegree)

The angle that an object will lock to while rotating.

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[snapAngle](FabricObjectProps.md#snapangle)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:47](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L47)

___

### snapThreshold

• `Optional` **snapThreshold**: [`TDegree`](../modules.md#tdegree)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[snapThreshold](FabricObjectProps.md#snapthreshold)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FabricObjectProps.ts#L54)

___

### stroke

• **stroke**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[stroke](FabricObjectProps.md#stroke)

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

[FabricObjectProps](FabricObjectProps.md).[strokeDashArray](FabricObjectProps.md#strokedasharray)

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

[FabricObjectProps](FabricObjectProps.md).[strokeDashOffset](FabricObjectProps.md#strokedashoffset)

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

[FabricObjectProps](FabricObjectProps.md).[strokeLineCap](FabricObjectProps.md#strokelinecap)

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

[FabricObjectProps](FabricObjectProps.md).[strokeLineJoin](FabricObjectProps.md#strokelinejoin)

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

[FabricObjectProps](FabricObjectProps.md).[strokeMiterLimit](FabricObjectProps.md#strokemiterlimit)

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

[FabricObjectProps](FabricObjectProps.md).[strokeUniform](FabricObjectProps.md#strokeuniform)

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

[FabricObjectProps](FabricObjectProps.md).[strokeWidth](FabricObjectProps.md#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L41)

___

### top

• **top**: `number`

Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}

**`Default`**

```ts
0
```

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[top](FabricObjectProps.md#top)

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

[FabricObjectProps](FabricObjectProps.md).[touchCornerSize](FabricObjectProps.md#touchcornersize)

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

[FabricObjectProps](FabricObjectProps.md).[transparentCorners](FabricObjectProps.md#transparentcorners)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/ControlProps.ts#L21)

___

### visible

• **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

**`Default`**

```ts

```

#### Inherited from

[FabricObjectProps](FabricObjectProps.md).[visible](FabricObjectProps.md#visible)

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

[FabricObjectProps](FabricObjectProps.md).[width](FabricObjectProps.md#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L23)
