---
editUrl: false
next: false
prev: false
title: "SerializedPathProps"
---

## Extends

- [`SerializedObjectProps`](SerializedObjectProps.md).`UniquePathProps`

## Properties

### angle

> **angle**: [`TDegree`](../type-aliases/TDegree.md)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`angle`](SerializedObjectProps.md#angle)

#### Source

src/shapes/Object/types/BaseProps.ts:57

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`backgroundColor`](SerializedObjectProps.md#backgroundcolor)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:26

***

### clipPath?

> **`optional`** **clipPath**: `Partial`\<[`SerializedObjectProps`](SerializedObjectProps.md) & `ClipPathProps`\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`clipPath`](SerializedObjectProps.md#clippath)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:49

***

### fill

> **fill**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](../classes/Gradient.md)\<`"linear"`, `"linear"`\>\> & `Object` \| `Partial`\<[`Gradient`](../classes/Gradient.md)\<`"radial"`, `"radial"`\>\> & `Object`

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`fill`](SerializedObjectProps.md#fill)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:17

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

[`SerializedObjectProps`](SerializedObjectProps.md).[`fillRule`](SerializedObjectProps.md#fillrule)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:26

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`flipX`](SerializedObjectProps.md#flipx)

#### Source

src/shapes/Object/types/BaseProps.ts:64

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`flipY`](SerializedObjectProps.md#flipy)

#### Source

src/shapes/Object/types/BaseProps.ts:71

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`globalCompositeOperation`](SerializedObjectProps.md#globalcompositeoperation)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:18

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`height`](SerializedObjectProps.md#height)

#### Source

src/shapes/Object/types/BaseProps.ts:34

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

[`SerializedObjectProps`](SerializedObjectProps.md).[`left`](SerializedObjectProps.md#left)

#### Source

src/shapes/Object/types/BaseProps.ts:11

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`opacity`](SerializedObjectProps.md#opacity)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:11

***

### originX

> **originX**: [`TOriginX`](../type-aliases/TOriginX.md)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'left'
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`originX`](SerializedObjectProps.md#originx)

#### Source

src/shapes/Object/types/BaseProps.ts:42

***

### originY

> **originY**: [`TOriginY`](../type-aliases/TOriginY.md)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

#### Default

```ts
'top'
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`originY`](SerializedObjectProps.md#originy)

#### Source

src/shapes/Object/types/BaseProps.ts:50

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`paintFirst`](SerializedObjectProps.md#paintfirst)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:9

***

### path?

> **`optional`** **path**: [`TSimplePathData`](../namespaces/util/type-aliases/TSimplePathData.md)

#### Inherited from

`UniquePathProps.path`

#### Source

src/shapes/Path.ts:34

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`scaleX`](SerializedObjectProps.md#scalex)

#### Source

src/shapes/Object/types/BaseProps.ts:78

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`scaleY`](SerializedObjectProps.md#scaley)

#### Source

src/shapes/Object/types/BaseProps.ts:85

***

### shadow

> **shadow**: `null` \| `Partial`\<[`SerializedShadowOptions`](../type-aliases/SerializedShadowOptions.md)\>

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`shadow`](SerializedObjectProps.md#shadow)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:33

***

### skewX

> **skewX**: [`TDegree`](../type-aliases/TDegree.md)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`skewX`](SerializedObjectProps.md#skewx)

#### Source

src/shapes/Object/types/BaseProps.ts:92

***

### skewY

> **skewY**: [`TDegree`](../type-aliases/TDegree.md)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`skewY`](SerializedObjectProps.md#skewy)

#### Source

src/shapes/Object/types/BaseProps.ts:99

***

### sourcePath?

> **`optional`** **sourcePath**: `string`

#### Inherited from

`UniquePathProps.sourcePath`

#### Source

src/shapes/Path.ts:33

***

### stroke

> **stroke**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](../classes/Gradient.md)\<`"linear"`, `"linear"`\>\> & `Object` \| `Partial`\<[`Gradient`](../classes/Gradient.md)\<`"radial"`, `"radial"`\>\> & `Object`

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`stroke`](SerializedObjectProps.md#stroke)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:34

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`strokeDashArray`](SerializedObjectProps.md#strokedasharray)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:48

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`strokeDashOffset`](SerializedObjectProps.md#strokedashoffset)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:55

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`strokeLineCap`](SerializedObjectProps.md#strokelinecap)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:62

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`strokeLineJoin`](SerializedObjectProps.md#strokelinejoin)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:69

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`strokeMiterLimit`](SerializedObjectProps.md#strokemiterlimit)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:76

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

[`SerializedObjectProps`](SerializedObjectProps.md).[`strokeUniform`](SerializedObjectProps.md#strokeuniform)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:89

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`strokeWidth`](SerializedObjectProps.md#strokewidth)

#### Source

src/shapes/Object/types/FillStrokeProps.ts:41

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

[`SerializedObjectProps`](SerializedObjectProps.md).[`top`](SerializedObjectProps.md#top)

#### Source

src/shapes/Object/types/BaseProps.ts:20

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`visible`](SerializedObjectProps.md#visible)

#### Source

src/shapes/Object/types/SerializedObjectProps.ts:40

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](SerializedObjectProps.md).[`width`](SerializedObjectProps.md#width)

#### Source

src/shapes/Object/types/BaseProps.ts:27
