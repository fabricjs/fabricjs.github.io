---
editUrl: false
next: false
prev: false
title: "EllipseProps"
---

## Extends

- [`FabricObjectProps`](/api/interfaces/fabricobjectprops/).`UniqueEllipseProps`

## Properties

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`absolutePositioned`](/api/interfaces/fabricobjectprops/#absolutepositioned)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:72](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L72)

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`angle`](/api/interfaces/fabricobjectprops/#angle)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:63](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L63)

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`backgroundColor`](/api/interfaces/fabricobjectprops/#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L26)

***

### borderColor

> **borderColor**: `string`

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`borderColor`](/api/interfaces/fabricobjectprops/#bordercolor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:7](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BorderProps.ts#L7)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`borderDashArray`](/api/interfaces/fabricobjectprops/#borderdasharray)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:15](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BorderProps.ts#L15)

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`borderOpacityWhenMoving`](/api/interfaces/fabricobjectprops/#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:29](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BorderProps.ts#L29)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`borderScaleFactor`](/api/interfaces/fabricobjectprops/#borderscalefactor)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:39](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BorderProps.ts#L39)

***

### canvas?

> `optional` **canvas**: [`Canvas`](/api/classes/canvas/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`canvas`](/api/interfaces/fabricobjectprops/#canvas)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:20](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectProps.ts#L20)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`centeredRotation`](/api/interfaces/fabricobjectprops/#centeredrotation)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectTransformProps.ts#L27)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`centeredScaling`](/api/interfaces/fabricobjectprops/#centeredscaling)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:36](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectTransformProps.ts#L36)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`clipPath`](/api/interfaces/fabricobjectprops/#clippath)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:16](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectProps.ts#L16)

***

### cornerColor

> **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerColor`](/api/interfaces/fabricobjectprops/#cornercolor)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:28](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ControlProps.ts#L28)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerDashArray`](/api/interfaces/fabricobjectprops/#cornerdasharray)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:55](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ControlProps.ts#L55)

***

### cornerSize

> **cornerSize**: `number`

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerSize`](/api/interfaces/fabricobjectprops/#cornersize)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:7](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ControlProps.ts#L7)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerStrokeColor`](/api/interfaces/fabricobjectprops/#cornerstrokecolor)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:36](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ControlProps.ts#L36)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`cornerStyle`](/api/interfaces/fabricobjectprops/#cornerstyle)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:47](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ControlProps.ts#L47)

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`evented`](/api/interfaces/fabricobjectprops/#evented)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:65](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FabricObjectProps.ts#L65)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`excludeFromExport`](/api/interfaces/fabricobjectprops/#excludefromexport)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:52](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectProps.ts#L52)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`fill`](/api/interfaces/fabricobjectprops/#fill)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:17](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectProps.ts#L17)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`fillRule`](/api/interfaces/fabricobjectprops/#fillrule)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L26)

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`flipX`](/api/interfaces/fabricobjectprops/#flipx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:70](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L70)

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`flipY`](/api/interfaces/fabricobjectprops/#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:77](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L77)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`globalCompositeOperation`](/api/interfaces/fabricobjectprops/#globalcompositeoperation)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L18)

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`hasBorders`](/api/interfaces/fabricobjectprops/#hasborders)

#### Defined in

[src/shapes/Object/types/BorderProps.ts:22](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BorderProps.ts#L22)

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts
true
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`hasControls`](/api/interfaces/fabricobjectprops/#hascontrols)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:69](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ControlProps.ts#L69)

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`height`](/api/interfaces/fabricobjectprops/#height)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L34)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`hoverCursor`](/api/interfaces/fabricobjectprops/#hovercursor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FabricObjectProps.ts#L27)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`includeDefaultValues`](/api/interfaces/fabricobjectprops/#includedefaultvalues)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:44](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectProps.ts#L44)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`inverted`](/api/interfaces/fabricobjectprops/#inverted)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:60](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L60)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`left`](/api/interfaces/fabricobjectprops/#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L11)

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockMovementX`](/api/interfaces/fabricobjectprops/#lockmovementx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:7](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/LockInteractionProps.ts#L7)

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockMovementY`](/api/interfaces/fabricobjectprops/#lockmovementy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:14](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/LockInteractionProps.ts#L14)

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockRotation`](/api/interfaces/fabricobjectprops/#lockrotation)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:21](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/LockInteractionProps.ts#L21)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockScalingFlip`](/api/interfaces/fabricobjectprops/#lockscalingflip)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:56](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/LockInteractionProps.ts#L56)

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockScalingX`](/api/interfaces/fabricobjectprops/#lockscalingx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:28](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/LockInteractionProps.ts#L28)

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockScalingY`](/api/interfaces/fabricobjectprops/#lockscalingy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:35](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/LockInteractionProps.ts#L35)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockSkewingX`](/api/interfaces/fabricobjectprops/#lockskewingx)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:42](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/LockInteractionProps.ts#L42)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`lockSkewingY`](/api/interfaces/fabricobjectprops/#lockskewingy)

#### Defined in

[src/shapes/Object/types/LockInteractionProps.ts:49](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/LockInteractionProps.ts#L49)

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`minScaleLimit`](/api/interfaces/fabricobjectprops/#minscalelimit)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectProps.ts#L27)

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`moveCursor`](/api/interfaces/fabricobjectprops/#movecursor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:34](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FabricObjectProps.ts#L34)

***

### noScaleCache?

> `optional` **noScaleCache**: `boolean`

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

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:20](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FabricObjectProps.ts#L20)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`objectCaching`](/api/interfaces/fabricobjectprops/#objectcaching)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:37](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectProps.ts#L37)

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`opacity`](/api/interfaces/fabricobjectprops/#opacity)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L11)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'left'
```

:::caution[Deprecated]
please set your default to 'center' in new projects and don't use it to build logic
The reason is explained here: https://github.com/fabricjs/fabric.js/discussions/9736
To set the default value to 'center' import BaseFabricObject and set the static BaseFabricObject.ownDefaults.originX = 'center'
:::

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`originX`](/api/interfaces/fabricobjectprops/#originx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:45](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L45)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'top'
```

:::caution[Deprecated]
please set your default to 'center' in new projects and don't use it to build logic
The reason is explained here: https://github.com/fabricjs/fabric.js/discussions/9736
To set the default value to 'center' import BaseFabricObject and set the static BaseFabricObject.ownDefaults.originY = 'center'
:::

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`originY`](/api/interfaces/fabricobjectprops/#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:56](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L56)

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`padding`](/api/interfaces/fabricobjectprops/#padding)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ControlProps.ts#L62)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`paintFirst`](/api/interfaces/fabricobjectprops/#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L9)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`perPixelTargetFind`](/api/interfaces/fabricobjectprops/#perpixeltargetfind)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:50](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FabricObjectProps.ts#L50)

***

### rx

> **rx**: `number`

#### Inherited from

`UniqueEllipseProps.rx`

#### Defined in

[src/shapes/Ellipse.ts:17](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Ellipse.ts#L17)

***

### ry

> **ry**: `number`

#### Inherited from

`UniqueEllipseProps.ry`

#### Defined in

[src/shapes/Ellipse.ts:18](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Ellipse.ts#L18)

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`scaleX`](/api/interfaces/fabricobjectprops/#scalex)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:84](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L84)

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`scaleY`](/api/interfaces/fabricobjectprops/#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:91](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L91)

***

### selectable

> **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`selectable`](/api/interfaces/fabricobjectprops/#selectable)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:58](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FabricObjectProps.ts#L58)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`selectionBackgroundColor`](/api/interfaces/fabricobjectprops/#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/types/FabricObjectProps.ts:43](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FabricObjectProps.ts#L43)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`shadow`](/api/interfaces/fabricobjectprops/#shadow)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:19](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectProps.ts#L19)

***

### skewX

> **skewX**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`skewX`](/api/interfaces/fabricobjectprops/#skewx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:98](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L98)

***

### skewY

> **skewY**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`skewY`](/api/interfaces/fabricobjectprops/#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:105](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L105)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`snapAngle`](/api/interfaces/fabricobjectprops/#snapangle)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:8](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectTransformProps.ts#L8)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`snapThreshold`](/api/interfaces/fabricobjectprops/#snapthreshold)

#### Defined in

[src/shapes/Object/types/ObjectTransformProps.ts:15](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectTransformProps.ts#L15)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`stroke`](/api/interfaces/fabricobjectprops/#stroke)

#### Defined in

[src/shapes/Object/types/ObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ObjectProps.ts#L18)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeDashArray`](/api/interfaces/fabricobjectprops/#strokedasharray)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L48)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeDashOffset`](/api/interfaces/fabricobjectprops/#strokedashoffset)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L55)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeLineCap`](/api/interfaces/fabricobjectprops/#strokelinecap)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L62)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeLineJoin`](/api/interfaces/fabricobjectprops/#strokelinejoin)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L69)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeMiterLimit`](/api/interfaces/fabricobjectprops/#strokemiterlimit)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L76)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeUniform`](/api/interfaces/fabricobjectprops/#strokeuniform)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L89)

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`strokeWidth`](/api/interfaces/fabricobjectprops/#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L41)

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

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`top`](/api/interfaces/fabricobjectprops/#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L20)

***

### touchCornerSize

> **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`touchCornerSize`](/api/interfaces/fabricobjectprops/#touchcornersize)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:14](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ControlProps.ts#L14)

***

### transparentCorners

> **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`transparentCorners`](/api/interfaces/fabricobjectprops/#transparentcorners)

#### Defined in

[src/shapes/Object/types/ControlProps.ts:21](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/ControlProps.ts#L21)

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`visible`](/api/interfaces/fabricobjectprops/#visible)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L40)

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

[`FabricObjectProps`](/api/interfaces/fabricobjectprops/).[`width`](/api/interfaces/fabricobjectprops/#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L27)
