---
editUrl: false
next: false
prev: false
title: "SerializedTextboxProps"
---

Defined in: [src/shapes/Textbox.ts:42](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Textbox.ts#L42)

## Extends

- [`SerializedITextProps`](/api/interfaces/serializeditextprops/).`Pick`\<`UniqueTextboxProps`, `"minWidth"` \| `"splitByGrapheme"`\>

## Properties

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:63](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L63)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`angle`](/api/interfaces/serializeditextprops/#angle)

***

### backgroundColor

> **backgroundColor**: `string`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/SerializedObjectProps.ts#L26)

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`backgroundColor`](/api/interfaces/serializeditextprops/#backgroundcolor)

***

### charSpacing

> **charSpacing**: `number`

Defined in: [src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L96)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`charSpacing`](/api/interfaces/serializeditextprops/#charspacing)

***

### clipPath?

> `optional` **clipPath**: `Partial`\<[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/) & `ClipPathProps`\>

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/SerializedObjectProps.ts#L49)

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`clipPath`](/api/interfaces/serializeditextprops/#clippath)

***

### direction

> **direction**: `CanvasDirection`

Defined in: [src/shapes/Text/Text.ts:108](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L108)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`direction`](/api/interfaces/serializeditextprops/#direction)

***

### fill

> **fill**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:17](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L17)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fill`](/api/interfaces/serializeditextprops/#fill)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L26)

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fillRule`](/api/interfaces/serializeditextprops/#fillrule)

***

### flipX

> **flipX**: `boolean`

Defined in: [src/shapes/Object/types/BaseProps.ts:70](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L70)

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`flipX`](/api/interfaces/serializeditextprops/#flipx)

***

### flipY

> **flipY**: `boolean`

Defined in: [src/shapes/Object/types/BaseProps.ts:77](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L77)

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`flipY`](/api/interfaces/serializeditextprops/#flipy)

***

### fontFamily

> **fontFamily**: `string`

Defined in: [src/shapes/Text/Text.ts:100](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L100)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fontFamily`](/api/interfaces/serializeditextprops/#fontfamily)

***

### fontSize

> **fontSize**: `number`

Defined in: [src/shapes/Text/Text.ts:98](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L98)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fontSize`](/api/interfaces/serializeditextprops/#fontsize)

***

### fontStyle

> **fontStyle**: `string`

Defined in: [src/shapes/Text/Text.ts:101](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L101)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fontStyle`](/api/interfaces/serializeditextprops/#fontstyle)

***

### fontWeight

> **fontWeight**: `string` \| `number`

Defined in: [src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L99)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`fontWeight`](/api/interfaces/serializeditextprops/#fontweight)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/SerializedObjectProps.ts#L18)

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`globalCompositeOperation`](/api/interfaces/serializeditextprops/#globalcompositeoperation)

***

### height

> **height**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L34)

Object height

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`height`](/api/interfaces/serializeditextprops/#height)

***

### left

> **left**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L11)

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [FabricObject#originX](/api/classes/fabricobject/#originx)

#### Default

```ts
0
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`left`](/api/interfaces/serializeditextprops/#left)

***

### lineHeight

> **lineHeight**: `number`

Defined in: [src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L97)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`lineHeight`](/api/interfaces/serializeditextprops/#lineheight)

***

### linethrough

> **linethrough**: `boolean`

Defined in: [src/shapes/Text/Text.ts:106](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L106)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`linethrough`](/api/interfaces/serializeditextprops/#linethrough)

***

### minWidth

> **minWidth**: `number`

Defined in: [src/shapes/Textbox.ts:36](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Textbox.ts#L36)

#### Inherited from

`Pick.minWidth`

***

### opacity

> **opacity**: `number`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/SerializedObjectProps.ts#L11)

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`opacity`](/api/interfaces/serializeditextprops/#opacity)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Defined in: [src/shapes/Object/types/BaseProps.ts:45](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L45)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`originX`](/api/interfaces/serializeditextprops/#originx)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Defined in: [src/shapes/Object/types/BaseProps.ts:56](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L56)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`originY`](/api/interfaces/serializeditextprops/#originy)

***

### overline

> **overline**: `boolean`

Defined in: [src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L105)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`overline`](/api/interfaces/serializeditextprops/#overline)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L9)

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`paintFirst`](/api/interfaces/serializeditextprops/#paintfirst)

***

### path?

> `optional` **path**: [`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/shapes/Text/Text.ts:109](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L109)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`path`](/api/interfaces/serializeditextprops/#path)

***

### pathAlign

> **pathAlign**: [`TPathAlign`](/api/type-aliases/tpathalign/)

Defined in: [src/shapes/Text/Text.ts:103](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L103)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`pathAlign`](/api/interfaces/serializeditextprops/#pathalign)

***

### pathSide

> **pathSide**: [`TPathSide`](/api/type-aliases/tpathside/)

Defined in: [src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L102)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`pathSide`](/api/interfaces/serializeditextprops/#pathside)

***

### scaleX

> **scaleX**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:84](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L84)

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`scaleX`](/api/interfaces/serializeditextprops/#scalex)

***

### scaleY

> **scaleY**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:91](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L91)

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`scaleY`](/api/interfaces/serializeditextprops/#scaley)

***

### selectionEnd

> **selectionEnd**: `number`

Defined in: [src/shapes/IText/IText.ts:71](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/IText/IText.ts#L71)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`selectionEnd`](/api/interfaces/serializeditextprops/#selectionend)

***

### selectionStart

> **selectionStart**: `number`

Defined in: [src/shapes/IText/IText.ts:70](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/IText/IText.ts#L70)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`selectionStart`](/api/interfaces/serializeditextprops/#selectionstart)

***

### shadow

> **shadow**: `null` \| `Partial`\<[`SerializedShadowOptions`](/api/type-aliases/serializedshadowoptions/)\>

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:33](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/SerializedObjectProps.ts#L33)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`shadow`](/api/interfaces/serializeditextprops/#shadow)

***

### skewX

> **skewX**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:98](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L98)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`skewX`](/api/interfaces/serializeditextprops/#skewx)

***

### skewY

> **skewY**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/types/BaseProps.ts:105](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L105)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`skewY`](/api/interfaces/serializeditextprops/#skewy)

***

### splitByGrapheme

> **splitByGrapheme**: `boolean`

Defined in: [src/shapes/Textbox.ts:37](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Textbox.ts#L37)

#### Inherited from

`Pick.splitByGrapheme`

***

### stroke

> **stroke**: `null` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"linear"`, `"linear"`\>\> & `object` \| `Partial`\<[`Gradient`](/api/classes/gradient/)\<`"radial"`, `"radial"`\>\> & `object`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:34](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L34)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`stroke`](/api/interfaces/serializeditextprops/#stroke)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L48)

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeDashArray`](/api/interfaces/serializeditextprops/#strokedasharray)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L55)

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeDashOffset`](/api/interfaces/serializeditextprops/#strokedashoffset)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L62)

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeLineCap`](/api/interfaces/serializeditextprops/#strokelinecap)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L69)

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeLineJoin`](/api/interfaces/serializeditextprops/#strokelinejoin)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L76)

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeMiterLimit`](/api/interfaces/serializeditextprops/#strokemiterlimit)

***

### strokeUniform

> **strokeUniform**: `boolean`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L89)

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

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeUniform`](/api/interfaces/serializeditextprops/#strokeuniform)

***

### strokeWidth

> **strokeWidth**: `number`

Defined in: [src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/FillStrokeProps.ts#L41)

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`strokeWidth`](/api/interfaces/serializeditextprops/#strokewidth)

***

### styles

> **styles**: [`TextStyle`](/api/type-aliases/textstyle/) \| [`TextStyleArray`](/api/fabric/namespaces/util/type-aliases/textstylearray/)

Defined in: [src/shapes/Text/Text.ts:115](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L115)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`styles`](/api/interfaces/serializeditextprops/#styles)

***

### textAlign

> **textAlign**: `string`

Defined in: [src/shapes/Text/Text.ts:107](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L107)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`textAlign`](/api/interfaces/serializeditextprops/#textalign)

***

### top

> **top**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L20)

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [FabricObject#originY](/api/classes/fabricobject/#originy)

#### Default

```ts
0
```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`top`](/api/interfaces/serializeditextprops/#top)

***

### underline

> **underline**: `boolean`

Defined in: [src/shapes/Text/Text.ts:104](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Text/Text.ts#L104)

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`underline`](/api/interfaces/serializeditextprops/#underline)

***

### visible

> **visible**: `boolean`

Defined in: [src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/SerializedObjectProps.ts#L40)

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`visible`](/api/interfaces/serializeditextprops/#visible)

***

### width

> **width**: `number`

Defined in: [src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/shapes/Object/types/BaseProps.ts#L27)

Object width

#### Default

```ts

```

#### Inherited from

[`SerializedITextProps`](/api/interfaces/serializeditextprops/).[`width`](/api/interfaces/serializeditextprops/#width)
