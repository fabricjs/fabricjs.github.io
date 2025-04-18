---
editUrl: false
next: false
prev: false
title: "SerializedEllipseProps"
---

Defined in: [src/shapes/Ellipse.ts:21](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Ellipse.ts#L21)

## Extends

- [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).`UniqueEllipseProps`

## Properties

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:63](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L63)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`angle`](/api/interfaces/serializedobjectprops/#angle)

***

### backgroundColor

> **backgroundColor**: `string`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/SerializedObjectProps.ts#L26)

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`backgroundColor`](/api/interfaces/serializedobjectprops/#backgroundcolor)

***

### clipPath?

> `optional` **clipPath**: `Partial`\<[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/) & `ClipPathProps`\>

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/SerializedObjectProps.ts#L49)

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`clipPath`](/api/interfaces/serializedobjectprops/#clippath)

***

### fill

> **fill**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:17](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L17)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`fill`](/api/interfaces/serializedobjectprops/#fill)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L26)

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`fillRule`](/api/interfaces/serializedobjectprops/#fillrule)

***

### flipX

> **flipX**: `boolean`

Defined in: [src/shapes/Object/types/BaseProps.ts:70](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L70)

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`flipX`](/api/interfaces/serializedobjectprops/#flipx)

***

### flipY

> **flipY**: `boolean`

Defined in: [src/shapes/Object/types/BaseProps.ts:77](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L77)

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`flipY`](/api/interfaces/serializedobjectprops/#flipy)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/SerializedObjectProps.ts#L18)

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`globalCompositeOperation`](/api/interfaces/serializedobjectprops/#globalcompositeoperation)

***

### height

> **height**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L34)

Object height

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`height`](/api/interfaces/serializedobjectprops/#height)

***

### left

> **left**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L11)

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [FabricObject#originX](/api/classes/fabricobject/#originx)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`left`](/api/interfaces/serializedobjectprops/#left)

***

### opacity

> **opacity**: `number`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/SerializedObjectProps.ts#L11)

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`opacity`](/api/interfaces/serializedobjectprops/#opacity)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Defined in: [src/shapes/Object/types/BaseProps.ts:45](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L45)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`originX`](/api/interfaces/serializedobjectprops/#originx)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Defined in: [src/shapes/Object/types/BaseProps.ts:56](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L56)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`originY`](/api/interfaces/serializedobjectprops/#originy)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L9)

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`paintFirst`](/api/interfaces/serializedobjectprops/#paintfirst)

***

### rx

> **rx**: `number`

Defined in: [src/shapes/Ellipse.ts:17](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Ellipse.ts#L17)

#### Inherited from

`UniqueEllipseProps.rx`

***

### ry

> **ry**: `number`

Defined in: [src/shapes/Ellipse.ts:18](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Ellipse.ts#L18)

#### Inherited from

`UniqueEllipseProps.ry`

***

### scaleX

> **scaleX**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:84](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L84)

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`scaleX`](/api/interfaces/serializedobjectprops/#scalex)

***

### scaleY

> **scaleY**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:91](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L91)

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`scaleY`](/api/interfaces/serializedobjectprops/#scaley)

***

### shadow

> **shadow**: `null` \| `Partial`\<[`SerializedShadowOptions`](/api/type-aliases/serializedshadowoptions/)\>

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:33](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/SerializedObjectProps.ts#L33)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`shadow`](/api/interfaces/serializedobjectprops/#shadow)

***

### skewX

> **skewX**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:98](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L98)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`skewX`](/api/interfaces/serializedobjectprops/#skewx)

***

### skewY

> **skewY**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:105](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L105)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`skewY`](/api/interfaces/serializedobjectprops/#skewy)

***

### stroke

> **stroke**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:34](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L34)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`stroke`](/api/interfaces/serializedobjectprops/#stroke)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L48)

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeDashArray`](/api/interfaces/serializedobjectprops/#strokedasharray)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L55)

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeDashOffset`](/api/interfaces/serializedobjectprops/#strokedashoffset)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L62)

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeLineCap`](/api/interfaces/serializedobjectprops/#strokelinecap)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L69)

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeLineJoin`](/api/interfaces/serializedobjectprops/#strokelinejoin)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L76)

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeMiterLimit`](/api/interfaces/serializedobjectprops/#strokemiterlimit)

***

### strokeUniform

> **strokeUniform**: `boolean`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L89)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeUniform`](/api/interfaces/serializedobjectprops/#strokeuniform)

***

### strokeWidth

> **strokeWidth**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/FillStrokeProps.ts#L41)

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeWidth`](/api/interfaces/serializedobjectprops/#strokewidth)

***

### top

> **top**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L20)

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [FabricObject#originY](/api/classes/fabricobject/#originy)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`top`](/api/interfaces/serializedobjectprops/#top)

***

### visible

> **visible**: `boolean`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/SerializedObjectProps.ts#L40)

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`visible`](/api/interfaces/serializedobjectprops/#visible)

***

### width

> **width**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/shapes/Object/types/BaseProps.ts#L27)

Object width

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`width`](/api/interfaces/serializedobjectprops/#width)
