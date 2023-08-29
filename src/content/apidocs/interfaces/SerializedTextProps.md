# Interface: SerializedTextProps

## Hierarchy

- [`SerializedObjectProps`](SerializedObjectProps.md)

- `UniqueTextProps`

  ↳ **`SerializedTextProps`**

  ↳↳ [`SerializedITextProps`](SerializedITextProps.md)

## Table of contents

### Properties

- [angle](SerializedTextProps.md#angle)
- [backgroundColor](SerializedTextProps.md#backgroundcolor)
- [charSpacing](SerializedTextProps.md#charspacing)
- [clipPath](SerializedTextProps.md#clippath)
- [direction](SerializedTextProps.md#direction)
- [fill](SerializedTextProps.md#fill)
- [fillRule](SerializedTextProps.md#fillrule)
- [flipX](SerializedTextProps.md#flipx)
- [flipY](SerializedTextProps.md#flipy)
- [fontFamily](SerializedTextProps.md#fontfamily)
- [fontSize](SerializedTextProps.md#fontsize)
- [fontStyle](SerializedTextProps.md#fontstyle)
- [fontWeight](SerializedTextProps.md#fontweight)
- [globalCompositeOperation](SerializedTextProps.md#globalcompositeoperation)
- [height](SerializedTextProps.md#height)
- [left](SerializedTextProps.md#left)
- [lineHeight](SerializedTextProps.md#lineheight)
- [linethrough](SerializedTextProps.md#linethrough)
- [opacity](SerializedTextProps.md#opacity)
- [originX](SerializedTextProps.md#originx)
- [originY](SerializedTextProps.md#originy)
- [overline](SerializedTextProps.md#overline)
- [paintFirst](SerializedTextProps.md#paintfirst)
- [path](SerializedTextProps.md#path)
- [pathAlign](SerializedTextProps.md#pathalign)
- [pathSide](SerializedTextProps.md#pathside)
- [scaleX](SerializedTextProps.md#scalex)
- [scaleY](SerializedTextProps.md#scaley)
- [shadow](SerializedTextProps.md#shadow)
- [skewX](SerializedTextProps.md#skewx)
- [skewY](SerializedTextProps.md#skewy)
- [stroke](SerializedTextProps.md#stroke)
- [strokeDashArray](SerializedTextProps.md#strokedasharray)
- [strokeDashOffset](SerializedTextProps.md#strokedashoffset)
- [strokeLineCap](SerializedTextProps.md#strokelinecap)
- [strokeLineJoin](SerializedTextProps.md#strokelinejoin)
- [strokeMiterLimit](SerializedTextProps.md#strokemiterlimit)
- [strokeUniform](SerializedTextProps.md#strokeuniform)
- [strokeWidth](SerializedTextProps.md#strokewidth)
- [styles](SerializedTextProps.md#styles)
- [textAlign](SerializedTextProps.md#textalign)
- [top](SerializedTextProps.md#top)
- [underline](SerializedTextProps.md#underline)
- [visible](SerializedTextProps.md#visible)
- [width](SerializedTextProps.md#width)

## Properties

### angle

• **angle**: [`TDegree`](../modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[angle](SerializedObjectProps.md#angle)

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

[SerializedObjectProps](SerializedObjectProps.md).[backgroundColor](SerializedObjectProps.md#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L26)

___

### charSpacing

• **charSpacing**: `number`

#### Inherited from

UniqueTextProps.charSpacing

#### Defined in

[src/shapes/Text/Text.ts:92](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L92)

___

### clipPath

• `Optional` **clipPath**: `Partial`<[`SerializedObjectProps`](SerializedObjectProps.md)\> & `ClipPathProps`

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[clipPath](SerializedObjectProps.md#clippath)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L49)

___

### direction

• **direction**: `CanvasDirection`

#### Inherited from

UniqueTextProps.direction

#### Defined in

[src/shapes/Text/Text.ts:104](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L104)

___

### fill

• **fill**: ``null`` \| `string` \| `Record`<`string`, `any`\> \| `Partial`<[`Gradient`](../classes/Gradient.md)<``"linear"``, ``"linear"``\>\> & { `colorStops`: [`ColorStop`](../modules.md#colorstop)[] ; `coords`: [`LinearGradientCoords`](../modules.md#lineargradientcoords)<`number`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](../modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: ``"linear"``  } \| `Partial`<[`Gradient`](../classes/Gradient.md)<``"radial"``, ``"radial"``\>\> & { `colorStops`: [`ColorStop`](../modules.md#colorstop)[] ; `coords`: [`RadialGradientCoords`](../modules.md#radialgradientcoords)<`number`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](../modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: ``"radial"``  }

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

**`Default`**

```ts
rgb(0,0,0)
```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[fill](SerializedObjectProps.md#fill)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:17](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L17)

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

[SerializedObjectProps](SerializedObjectProps.md).[fillRule](SerializedObjectProps.md#fillrule)

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

[SerializedObjectProps](SerializedObjectProps.md).[flipX](SerializedObjectProps.md#flipx)

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

[SerializedObjectProps](SerializedObjectProps.md).[flipY](SerializedObjectProps.md#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:44](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L44)

___

### fontFamily

• **fontFamily**: `string`

#### Inherited from

UniqueTextProps.fontFamily

#### Defined in

[src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L96)

___

### fontSize

• **fontSize**: `number`

#### Inherited from

UniqueTextProps.fontSize

#### Defined in

[src/shapes/Text/Text.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L94)

___

### fontStyle

• **fontStyle**: `string`

#### Inherited from

UniqueTextProps.fontStyle

#### Defined in

[src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L97)

___

### fontWeight

• **fontWeight**: `string`

#### Inherited from

UniqueTextProps.fontWeight

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

[SerializedObjectProps](SerializedObjectProps.md).[globalCompositeOperation](SerializedObjectProps.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L18)

___

### height

• **height**: `number`

Object height

**`Default`**

```ts

```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[height](SerializedObjectProps.md#height)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L30)

___

### left

• **left**: `number`

Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}

**`Default`**

```ts
0
```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[left](SerializedObjectProps.md#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:16](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L16)

___

### lineHeight

• **lineHeight**: `number`

#### Inherited from

UniqueTextProps.lineHeight

#### Defined in

[src/shapes/Text/Text.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L93)

___

### linethrough

• **linethrough**: `boolean`

#### Inherited from

UniqueTextProps.linethrough

#### Defined in

[src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L102)

___

### opacity

• **opacity**: `number`

Opacity of an object

**`Default`**

```ts
1
```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[opacity](SerializedObjectProps.md#opacity)

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

[SerializedObjectProps](SerializedObjectProps.md).[originX](SerializedObjectProps.md#originx)

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

[SerializedObjectProps](SerializedObjectProps.md).[originY](SerializedObjectProps.md#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L88)

___

### overline

• **overline**: `boolean`

#### Inherited from

UniqueTextProps.overline

#### Defined in

[src/shapes/Text/Text.ts:101](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L101)

___

### paintFirst

• **paintFirst**: ``"fill"`` \| ``"stroke"``

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

**`Default`**

```ts

```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[paintFirst](SerializedObjectProps.md#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### path

• `Optional` **path**: [`Path`](../classes/Path.md)<`Partial`<[`PathProps`](PathProps.md)\>, [`SerializedPathProps`](SerializedPathProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

UniqueTextProps.path

#### Defined in

[src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L105)

___

### pathAlign

• **pathAlign**: [`TPathAlign`](../modules.md#tpathalign)

#### Inherited from

UniqueTextProps.pathAlign

#### Defined in

[src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L99)

___

### pathSide

• **pathSide**: [`TPathSide`](../modules.md#tpathside)

#### Inherited from

UniqueTextProps.pathSide

#### Defined in

[src/shapes/Text/Text.ts:98](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L98)

___

### scaleX

• **scaleX**: `number`

Object scale factor (horizontal)

**`Default`**

```ts
1
```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[scaleX](SerializedObjectProps.md#scalex)

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

[SerializedObjectProps](SerializedObjectProps.md).[scaleY](SerializedObjectProps.md#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L58)

___

### shadow

• **shadow**: ``null`` \| `Partial`<[`SerializedShadowOptions`](../modules.md#serializedshadowoptions)\>

Shadow object representing shadow of this shape

**`Default`**

```ts
null
```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[shadow](SerializedObjectProps.md#shadow)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:33](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L33)

___

### skewX

• **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[skewX](SerializedObjectProps.md#skewx)

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

[SerializedObjectProps](SerializedObjectProps.md).[skewY](SerializedObjectProps.md#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L72)

___

### stroke

• **stroke**: ``null`` \| `string` \| `Record`<`string`, `any`\> \| `Partial`<[`Gradient`](../classes/Gradient.md)<``"linear"``, ``"linear"``\>\> & { `colorStops`: [`ColorStop`](../modules.md#colorstop)[] ; `coords`: [`LinearGradientCoords`](../modules.md#lineargradientcoords)<`number`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](../modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: ``"linear"``  } \| `Partial`<[`Gradient`](../classes/Gradient.md)<``"radial"``, ``"radial"``\>\> & { `colorStops`: [`ColorStop`](../modules.md#colorstop)[] ; `coords`: [`RadialGradientCoords`](../modules.md#radialgradientcoords)<`number`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](../modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: ``"radial"``  }

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

**`Default`**

```ts
null
```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[stroke](SerializedObjectProps.md#stroke)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L34)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

**`Default`**

```ts
null;
```

#### Inherited from

[SerializedObjectProps](SerializedObjectProps.md).[strokeDashArray](SerializedObjectProps.md#strokedasharray)

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

[SerializedObjectProps](SerializedObjectProps.md).[strokeDashOffset](SerializedObjectProps.md#strokedashoffset)

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

[SerializedObjectProps](SerializedObjectProps.md).[strokeLineCap](SerializedObjectProps.md#strokelinecap)

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

[SerializedObjectProps](SerializedObjectProps.md).[strokeLineJoin](SerializedObjectProps.md#strokelinejoin)

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

[SerializedObjectProps](SerializedObjectProps.md).[strokeMiterLimit](SerializedObjectProps.md#strokemiterlimit)

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

[SerializedObjectProps](SerializedObjectProps.md).[strokeUniform](SerializedObjectProps.md#strokeuniform)

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

[SerializedObjectProps](SerializedObjectProps.md).[strokeWidth](SerializedObjectProps.md#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L41)

___

### styles

• **styles**: [`TextStyle`](../modules.md#textstyle) \| [`TextStyleArray`](../modules/util.md#textstylearray)

#### Defined in

[src/shapes/Text/Text.ts:111](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L111)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

UniqueTextProps.textAlign

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

[SerializedObjectProps](SerializedObjectProps.md).[top](SerializedObjectProps.md#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L9)

___

### underline

• **underline**: `boolean`

#### Inherited from

UniqueTextProps.underline

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

[SerializedObjectProps](SerializedObjectProps.md).[visible](SerializedObjectProps.md#visible)

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

[SerializedObjectProps](SerializedObjectProps.md).[width](SerializedObjectProps.md#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L23)
