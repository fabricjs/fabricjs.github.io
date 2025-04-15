---
editUrl: false
next: false
prev: false
title: "SerializedObjectProps"
---

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:5](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/SerializedObjectProps.ts#L5)

## Extends

- `BaseProps`.`FillStrokeProps`

## Extended by

- [`SerializedLineProps`](/api/interfaces/serializedlineprops/)
- [`SerializedCircleProps`](/api/interfaces/serializedcircleprops/)
- [`SerializedEllipseProps`](/api/interfaces/serializedellipseprops/)
- [`SerializedRectProps`](/api/interfaces/serializedrectprops/)
- [`SerializedPathProps`](/api/interfaces/serializedpathprops/)
- [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)
- [`SerializedTextProps`](/api/interfaces/serializedtextprops/)
- [`SerializedGroupProps`](/api/interfaces/serializedgroupprops/)
- [`SerializedImageProps`](/api/interfaces/serializedimageprops/)

## Properties

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:63](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L63)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

`BaseProps.angle`

***

### backgroundColor

> **backgroundColor**: `string`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/SerializedObjectProps.ts#L26)

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

***

### clipPath?

> `optional` **clipPath**: `Partial`\<`SerializedObjectProps` & `ClipPathProps`\>

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/SerializedObjectProps.ts#L49)

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

***

### fill

> **fill**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:17](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L17)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

`FillStrokeProps.fill`

***

### fillRule

> **fillRule**: `CanvasFillRule`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L26)

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Inherited from

`FillStrokeProps.fillRule`

***

### flipX

> **flipX**: `boolean`

Defined in: [src/shapes/Object/types/BaseProps.ts:70](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L70)

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

`BaseProps.flipX`

***

### flipY

> **flipY**: `boolean`

Defined in: [src/shapes/Object/types/BaseProps.ts:77](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L77)

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

`BaseProps.flipY`

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/SerializedObjectProps.ts#L18)

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

***

### height

> **height**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L34)

Object height

#### Default

```ts

```

#### Inherited from

`BaseProps.height`

***

### left

> **left**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L11)

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [FabricObject#originX](/api/classes/fabricobject/#originx)

#### Default

```ts
0
```

#### Inherited from

`BaseProps.left`

***

### opacity

> **opacity**: `number`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/SerializedObjectProps.ts#L11)

Opacity of an object

#### Default

```ts
1
```

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Defined in: [src/shapes/Object/types/BaseProps.ts:45](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L45)

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

`BaseProps.originX`

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Defined in: [src/shapes/Object/types/BaseProps.ts:56](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L56)

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

`BaseProps.originY`

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L9)

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

`FillStrokeProps.paintFirst`

***

### scaleX

> **scaleX**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:84](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L84)

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

`BaseProps.scaleX`

***

### scaleY

> **scaleY**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:91](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L91)

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

`BaseProps.scaleY`

***

### shadow

> **shadow**: `null` \| `Partial`\<[`SerializedShadowOptions`](/api/type-aliases/serializedshadowoptions/)\>

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:33](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/SerializedObjectProps.ts#L33)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

***

### skewX

> **skewX**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:98](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L98)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

`BaseProps.skewX`

***

### skewY

> **skewY**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:105](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L105)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

`BaseProps.skewY`

***

### stroke

> **stroke**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:34](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L34)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

`FillStrokeProps.stroke`

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L48)

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

`FillStrokeProps.strokeDashArray`

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L55)

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

`FillStrokeProps.strokeDashOffset`

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L62)

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

`FillStrokeProps.strokeLineCap`

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L69)

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

`FillStrokeProps.strokeLineJoin`

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L76)

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

`FillStrokeProps.strokeMiterLimit`

***

### strokeUniform

> **strokeUniform**: `boolean`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L89)

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

`FillStrokeProps.strokeUniform`

***

### strokeWidth

> **strokeWidth**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/FillStrokeProps.ts#L41)

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

`FillStrokeProps.strokeWidth`

***

### top

> **top**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L20)

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [FabricObject#originY](/api/classes/fabricobject/#originy)

#### Default

```ts
0
```

#### Inherited from

`BaseProps.top`

***

### visible

> **visible**: `boolean`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/SerializedObjectProps.ts#L40)

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

***

### width

> **width**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/types/BaseProps.ts#L27)

Object width

#### Default

```ts

```

#### Inherited from

`BaseProps.width`
