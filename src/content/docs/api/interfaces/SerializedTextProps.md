---
editUrl: false
next: false
prev: false
title: "SerializedTextProps"
---

## Extends

- [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).`UniqueTextProps`

## Extended by

- [`SerializedITextProps`](/api/interfaces/serializeditextprops/)

## Properties

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`angle`](/api/interfaces/serializedobjectprops/#angle)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`backgroundColor`](/api/interfaces/serializedobjectprops/#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L26)

***

### charSpacing

> **charSpacing**: `number`

#### Inherited from

`UniqueTextProps.charSpacing`

#### Defined in

[src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L96)

***

### clipPath?

> `optional` **clipPath**: `Partial`\<[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/) & `ClipPathProps`\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`clipPath`](/api/interfaces/serializedobjectprops/#clippath)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L49)

***

### direction

> **direction**: `CanvasDirection`

#### Inherited from

`UniqueTextProps.direction`

#### Defined in

[src/shapes/Text/Text.ts:108](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L108)

***

### fill

> **fill**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`fill`](/api/interfaces/serializedobjectprops/#fill)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:17](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L17)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`fillRule`](/api/interfaces/serializedobjectprops/#fillrule)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`flipX`](/api/interfaces/serializedobjectprops/#flipx)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`flipY`](/api/interfaces/serializedobjectprops/#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:77](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L77)

***

### fontFamily

> **fontFamily**: `string`

#### Inherited from

`UniqueTextProps.fontFamily`

#### Defined in

[src/shapes/Text/Text.ts:100](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L100)

***

### fontSize

> **fontSize**: `number`

#### Inherited from

`UniqueTextProps.fontSize`

#### Defined in

[src/shapes/Text/Text.ts:98](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L98)

***

### fontStyle

> **fontStyle**: `string`

#### Inherited from

`UniqueTextProps.fontStyle`

#### Defined in

[src/shapes/Text/Text.ts:101](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L101)

***

### fontWeight

> **fontWeight**: `string` \| `number`

#### Inherited from

`UniqueTextProps.fontWeight`

#### Defined in

[src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L99)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`globalCompositeOperation`](/api/interfaces/serializedobjectprops/#globalcompositeoperation)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L18)

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`height`](/api/interfaces/serializedobjectprops/#height)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L34)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`left`](/api/interfaces/serializedobjectprops/#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L11)

***

### lineHeight

> **lineHeight**: `number`

#### Inherited from

`UniqueTextProps.lineHeight`

#### Defined in

[src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L97)

***

### linethrough

> **linethrough**: `boolean`

#### Inherited from

`UniqueTextProps.linethrough`

#### Defined in

[src/shapes/Text/Text.ts:106](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L106)

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`opacity`](/api/interfaces/serializedobjectprops/#opacity)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`originX`](/api/interfaces/serializedobjectprops/#originx)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`originY`](/api/interfaces/serializedobjectprops/#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:56](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L56)

***

### overline

> **overline**: `boolean`

#### Inherited from

`UniqueTextProps.overline`

#### Defined in

[src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L105)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`paintFirst`](/api/interfaces/serializedobjectprops/#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L9)

***

### path?

> `optional` **path**: [`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`UniqueTextProps.path`

#### Defined in

[src/shapes/Text/Text.ts:109](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L109)

***

### pathAlign

> **pathAlign**: [`TPathAlign`](/api/type-aliases/tpathalign/)

#### Inherited from

`UniqueTextProps.pathAlign`

#### Defined in

[src/shapes/Text/Text.ts:103](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L103)

***

### pathSide

> **pathSide**: [`TPathSide`](/api/type-aliases/tpathside/)

#### Inherited from

`UniqueTextProps.pathSide`

#### Defined in

[src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L102)

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`scaleX`](/api/interfaces/serializedobjectprops/#scalex)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`scaleY`](/api/interfaces/serializedobjectprops/#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:91](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L91)

***

### shadow

> **shadow**: `null` \| `Partial`\<[`SerializedShadowOptions`](/api/type-aliases/serializedshadowoptions/)\>

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`shadow`](/api/interfaces/serializedobjectprops/#shadow)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:33](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/SerializedObjectProps.ts#L33)

***

### skewX

> **skewX**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`skewX`](/api/interfaces/serializedobjectprops/#skewx)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`skewY`](/api/interfaces/serializedobjectprops/#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:105](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L105)

***

### stroke

> **stroke**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`stroke`](/api/interfaces/serializedobjectprops/#stroke)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:34](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L34)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeDashArray`](/api/interfaces/serializedobjectprops/#strokedasharray)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeDashOffset`](/api/interfaces/serializedobjectprops/#strokedashoffset)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeLineCap`](/api/interfaces/serializedobjectprops/#strokelinecap)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeLineJoin`](/api/interfaces/serializedobjectprops/#strokelinejoin)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeMiterLimit`](/api/interfaces/serializedobjectprops/#strokemiterlimit)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeUniform`](/api/interfaces/serializedobjectprops/#strokeuniform)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`strokeWidth`](/api/interfaces/serializedobjectprops/#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/FillStrokeProps.ts#L41)

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/) \| [`TextStyleArray`](/api/namespaces/util/type-aliases/textstylearray/)

#### Defined in

[src/shapes/Text/Text.ts:115](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L115)

***

### textAlign

> **textAlign**: `string`

#### Inherited from

`UniqueTextProps.textAlign`

#### Defined in

[src/shapes/Text/Text.ts:107](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L107)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`top`](/api/interfaces/serializedobjectprops/#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L20)

***

### underline

> **underline**: `boolean`

#### Inherited from

`UniqueTextProps.underline`

#### Defined in

[src/shapes/Text/Text.ts:104](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Text/Text.ts#L104)

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`visible`](/api/interfaces/serializedobjectprops/#visible)

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

[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/).[`width`](/api/interfaces/serializedobjectprops/#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/types/BaseProps.ts#L27)
