---
editUrl: false
next: false
prev: false
title: "PathProps"
---

Defined in: [src/shapes/Path.ts:41](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Path.ts#L41)

## Extends

- [`FabricObjectProps`](/api/interfaces/fabricobjectprops/).`UniquePathProps`

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`absolutePositioned`](/api/interfaces/fabricobjectprops/#absolutepositioned)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`angle`](/api/interfaces/fabricobjectprops/#angle)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`backgroundColor`](/api/interfaces/fabricobjectprops/#backgroundcolor)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`borderColor`](/api/interfaces/fabricobjectprops/#bordercolor)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/types/BorderProps.ts:15](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BorderProps.ts#L15)

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`borderDashArray`](/api/interfaces/fabricobjectprops/#borderdasharray)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`borderOpacityWhenMoving`](/api/interfaces/fabricobjectprops/#borderopacitywhenmoving)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`borderScaleFactor`](/api/interfaces/fabricobjectprops/#borderscalefactor)

***

### canvas?

> `optional` **canvas**: [`Canvas`](/api/classes/canvas/) \| [`StaticCanvas`](/api/classes/staticcanvas/)

Defined in: [src/shapes/Object/types/ObjectProps.ts:20](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L20)

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`canvas`](/api/interfaces/fabricobjectprops/#canvas)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`centeredRotation`](/api/interfaces/fabricobjectprops/#centeredrotation)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`centeredScaling`](/api/interfaces/fabricobjectprops/#centeredscaling)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)

Defined in: [src/shapes/Object/types/ObjectProps.ts:16](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L16)

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`clipPath`](/api/interfaces/fabricobjectprops/#clippath)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerColor`](/api/interfaces/fabricobjectprops/#cornercolor)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerDashArray`](/api/interfaces/fabricobjectprops/#cornerdasharray)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerSize`](/api/interfaces/fabricobjectprops/#cornersize)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerStrokeColor`](/api/interfaces/fabricobjectprops/#cornerstrokecolor)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerStyle`](/api/interfaces/fabricobjectprops/#cornerstyle)

***

### evented

> **evented**: `boolean`

Defined in: [src/shapes/Object/types/FabricObjectProps.ts:65](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FabricObjectProps.ts#L65)

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`evented`](/api/interfaces/fabricobjectprops/#evented)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`excludeFromExport`](/api/interfaces/fabricobjectprops/#excludefromexport)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`fill`](/api/interfaces/fabricobjectprops/#fill)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`fillRule`](/api/interfaces/fabricobjectprops/#fillrule)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`flipX`](/api/interfaces/fabricobjectprops/#flipx)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`flipY`](/api/interfaces/fabricobjectprops/#flipy)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/SerializedObjectProps.ts#L18)

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`globalCompositeOperation`](/api/interfaces/fabricobjectprops/#globalcompositeoperation)

***

### hasBorders

> **hasBorders**: `boolean`

Defined in: [src/shapes/Object/types/BorderProps.ts:22](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BorderProps.ts#L22)

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`hasBorders`](/api/interfaces/fabricobjectprops/#hasborders)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`hasControls`](/api/interfaces/fabricobjectprops/#hascontrols)

***

### height

> **height**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L34)

Object height

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`height`](/api/interfaces/fabricobjectprops/#height)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`hoverCursor`](/api/interfaces/fabricobjectprops/#hovercursor)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Defined in: [src/shapes/Object/types/ObjectProps.ts:44](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectProps.ts#L44)

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`includeDefaultValues`](/api/interfaces/fabricobjectprops/#includedefaultvalues)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`inverted`](/api/interfaces/fabricobjectprops/#inverted)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`left`](/api/interfaces/fabricobjectprops/#left)

***

### lockMovementX

> **lockMovementX**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:7](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L7)

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockMovementX`](/api/interfaces/fabricobjectprops/#lockmovementx)

***

### lockMovementY

> **lockMovementY**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:14](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L14)

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockMovementY`](/api/interfaces/fabricobjectprops/#lockmovementy)

***

### lockRotation

> **lockRotation**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:21](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L21)

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockRotation`](/api/interfaces/fabricobjectprops/#lockrotation)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:56](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L56)

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockScalingFlip`](/api/interfaces/fabricobjectprops/#lockscalingflip)

***

### lockScalingX

> **lockScalingX**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:28](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L28)

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockScalingX`](/api/interfaces/fabricobjectprops/#lockscalingx)

***

### lockScalingY

> **lockScalingY**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:35](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L35)

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockScalingY`](/api/interfaces/fabricobjectprops/#lockscalingy)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:42](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L42)

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockSkewingX`](/api/interfaces/fabricobjectprops/#lockskewingx)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

Defined in: [src/shapes/Object/types/LockInteractionProps.ts:49](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/LockInteractionProps.ts#L49)

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockSkewingY`](/api/interfaces/fabricobjectprops/#lockskewingy)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`minScaleLimit`](/api/interfaces/fabricobjectprops/#minscalelimit)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`moveCursor`](/api/interfaces/fabricobjectprops/#movecursor)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`noScaleCache`](/api/interfaces/fabricobjectprops/#noscalecache)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`objectCaching`](/api/interfaces/fabricobjectprops/#objectcaching)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`opacity`](/api/interfaces/fabricobjectprops/#opacity)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`originX`](/api/interfaces/fabricobjectprops/#originx)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`originY`](/api/interfaces/fabricobjectprops/#originy)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`padding`](/api/interfaces/fabricobjectprops/#padding)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L9)

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`paintFirst`](/api/interfaces/fabricobjectprops/#paintfirst)

***

### path?

> `optional` **path**: [`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

Defined in: [src/shapes/Path.ts:34](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Path.ts#L34)

#### Inherited from

`UniquePathProps.path`

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

Defined in: [src/shapes/Object/types/FabricObjectProps.ts:50](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FabricObjectProps.ts#L50)

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`perPixelTargetFind`](/api/interfaces/fabricobjectprops/#perpixeltargetfind)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`scaleX`](/api/interfaces/fabricobjectprops/#scalex)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`scaleY`](/api/interfaces/fabricobjectprops/#scaley)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`selectable`](/api/interfaces/fabricobjectprops/#selectable)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`selectionBackgroundColor`](/api/interfaces/fabricobjectprops/#selectionbackgroundcolor)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`shadow`](/api/interfaces/fabricobjectprops/#shadow)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`skewX`](/api/interfaces/fabricobjectprops/#skewx)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`skewY`](/api/interfaces/fabricobjectprops/#skewy)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/ObjectTransformProps.ts:8](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectTransformProps.ts#L8)

The angle that an object will lock to while rotating.

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`snapAngle`](/api/interfaces/fabricobjectprops/#snapangle)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/ObjectTransformProps.ts:15](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/ObjectTransformProps.ts#L15)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`snapThreshold`](/api/interfaces/fabricobjectprops/#snapthreshold)

***

### sourcePath?

> `optional` **sourcePath**: `string`

Defined in: [src/shapes/Path.ts:33](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Path.ts#L33)

#### Inherited from

`UniquePathProps.sourcePath`

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`stroke`](/api/interfaces/fabricobjectprops/#stroke)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeDashArray`](/api/interfaces/fabricobjectprops/#strokedasharray)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeDashOffset`](/api/interfaces/fabricobjectprops/#strokedashoffset)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeLineCap`](/api/interfaces/fabricobjectprops/#strokelinecap)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/FillStrokeProps.ts#L69)

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeLineJoin`](/api/interfaces/fabricobjectprops/#strokelinejoin)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeMiterLimit`](/api/interfaces/fabricobjectprops/#strokemiterlimit)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeUniform`](/api/interfaces/fabricobjectprops/#strokeuniform)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeWidth`](/api/interfaces/fabricobjectprops/#strokewidth)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`top`](/api/interfaces/fabricobjectprops/#top)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`touchCornerSize`](/api/interfaces/fabricobjectprops/#touchcornersize)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`transparentCorners`](/api/interfaces/fabricobjectprops/#transparentcorners)

***

### visible

> **visible**: `boolean`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/SerializedObjectProps.ts#L40)

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`visible`](/api/interfaces/fabricobjectprops/#visible)

***

### width

> **width**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/types/BaseProps.ts#L27)

Object width

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`width`](/api/interfaces/fabricobjectprops/#width)
