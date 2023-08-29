# Interface: SerializedITextProps

## Hierarchy

- [`SerializedTextProps`](SerializedTextProps.md)

- `UniqueITextProps`

  ↳ **`SerializedITextProps`**

  ↳↳ [`SerializedTextboxProps`](SerializedTextboxProps.md)

## Table of contents

### Properties

- [angle](SerializedITextProps.md#angle)
- [backgroundColor](SerializedITextProps.md#backgroundcolor)
- [charSpacing](SerializedITextProps.md#charspacing)
- [clipPath](SerializedITextProps.md#clippath)
- [direction](SerializedITextProps.md#direction)
- [fill](SerializedITextProps.md#fill)
- [fillRule](SerializedITextProps.md#fillrule)
- [flipX](SerializedITextProps.md#flipx)
- [flipY](SerializedITextProps.md#flipy)
- [fontFamily](SerializedITextProps.md#fontfamily)
- [fontSize](SerializedITextProps.md#fontsize)
- [fontStyle](SerializedITextProps.md#fontstyle)
- [fontWeight](SerializedITextProps.md#fontweight)
- [globalCompositeOperation](SerializedITextProps.md#globalcompositeoperation)
- [height](SerializedITextProps.md#height)
- [left](SerializedITextProps.md#left)
- [lineHeight](SerializedITextProps.md#lineheight)
- [linethrough](SerializedITextProps.md#linethrough)
- [opacity](SerializedITextProps.md#opacity)
- [originX](SerializedITextProps.md#originx)
- [originY](SerializedITextProps.md#originy)
- [overline](SerializedITextProps.md#overline)
- [paintFirst](SerializedITextProps.md#paintfirst)
- [path](SerializedITextProps.md#path)
- [pathAlign](SerializedITextProps.md#pathalign)
- [pathSide](SerializedITextProps.md#pathside)
- [scaleX](SerializedITextProps.md#scalex)
- [scaleY](SerializedITextProps.md#scaley)
- [selectionEnd](SerializedITextProps.md#selectionend)
- [selectionStart](SerializedITextProps.md#selectionstart)
- [shadow](SerializedITextProps.md#shadow)
- [skewX](SerializedITextProps.md#skewx)
- [skewY](SerializedITextProps.md#skewy)
- [stroke](SerializedITextProps.md#stroke)
- [strokeDashArray](SerializedITextProps.md#strokedasharray)
- [strokeDashOffset](SerializedITextProps.md#strokedashoffset)
- [strokeLineCap](SerializedITextProps.md#strokelinecap)
- [strokeLineJoin](SerializedITextProps.md#strokelinejoin)
- [strokeMiterLimit](SerializedITextProps.md#strokemiterlimit)
- [strokeUniform](SerializedITextProps.md#strokeuniform)
- [strokeWidth](SerializedITextProps.md#strokewidth)
- [styles](SerializedITextProps.md#styles)
- [textAlign](SerializedITextProps.md#textalign)
- [top](SerializedITextProps.md#top)
- [underline](SerializedITextProps.md#underline)
- [visible](SerializedITextProps.md#visible)
- [width](SerializedITextProps.md#width)

## Properties

### angle

• **angle**: [`TDegree`](../modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[angle](SerializedTextProps.md#angle)

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

[SerializedTextProps](SerializedTextProps.md).[backgroundColor](SerializedTextProps.md#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L26)

___

### charSpacing

• **charSpacing**: `number`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[charSpacing](SerializedTextProps.md#charspacing)

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

[SerializedTextProps](SerializedTextProps.md).[clipPath](SerializedTextProps.md#clippath)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L49)

___

### direction

• **direction**: `CanvasDirection`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[direction](SerializedTextProps.md#direction)

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

[SerializedTextProps](SerializedTextProps.md).[fill](SerializedTextProps.md#fill)

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

[SerializedTextProps](SerializedTextProps.md).[fillRule](SerializedTextProps.md#fillrule)

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

[SerializedTextProps](SerializedTextProps.md).[flipX](SerializedTextProps.md#flipx)

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

[SerializedTextProps](SerializedTextProps.md).[flipY](SerializedTextProps.md#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:44](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L44)

___

### fontFamily

• **fontFamily**: `string`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[fontFamily](SerializedTextProps.md#fontfamily)

#### Defined in

[src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L96)

___

### fontSize

• **fontSize**: `number`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[fontSize](SerializedTextProps.md#fontsize)

#### Defined in

[src/shapes/Text/Text.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L94)

___

### fontStyle

• **fontStyle**: `string`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[fontStyle](SerializedTextProps.md#fontstyle)

#### Defined in

[src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L97)

___

### fontWeight

• **fontWeight**: `string`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[fontWeight](SerializedTextProps.md#fontweight)

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

[SerializedTextProps](SerializedTextProps.md).[globalCompositeOperation](SerializedTextProps.md#globalcompositeoperation)

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

[SerializedTextProps](SerializedTextProps.md).[height](SerializedTextProps.md#height)

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

[SerializedTextProps](SerializedTextProps.md).[left](SerializedTextProps.md#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:16](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L16)

___

### lineHeight

• **lineHeight**: `number`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[lineHeight](SerializedTextProps.md#lineheight)

#### Defined in

[src/shapes/Text/Text.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L93)

___

### linethrough

• **linethrough**: `boolean`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[linethrough](SerializedTextProps.md#linethrough)

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

[SerializedTextProps](SerializedTextProps.md).[opacity](SerializedTextProps.md#opacity)

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

[SerializedTextProps](SerializedTextProps.md).[originX](SerializedTextProps.md#originx)

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

[SerializedTextProps](SerializedTextProps.md).[originY](SerializedTextProps.md#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L88)

___

### overline

• **overline**: `boolean`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[overline](SerializedTextProps.md#overline)

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

[SerializedTextProps](SerializedTextProps.md).[paintFirst](SerializedTextProps.md#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### path

• `Optional` **path**: [`Path`](../classes/Path.md)<`Partial`<[`PathProps`](PathProps.md)\>, [`SerializedPathProps`](SerializedPathProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[path](SerializedTextProps.md#path)

#### Defined in

[src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L105)

___

### pathAlign

• **pathAlign**: [`TPathAlign`](../modules.md#tpathalign)

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[pathAlign](SerializedTextProps.md#pathalign)

#### Defined in

[src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L99)

___

### pathSide

• **pathSide**: [`TPathSide`](../modules.md#tpathside)

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[pathSide](SerializedTextProps.md#pathside)

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

[SerializedTextProps](SerializedTextProps.md).[scaleX](SerializedTextProps.md#scalex)

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

[SerializedTextProps](SerializedTextProps.md).[scaleY](SerializedTextProps.md#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L58)

___

### selectionEnd

• **selectionEnd**: `number`

#### Inherited from

UniqueITextProps.selectionEnd

#### Defined in

[src/shapes/IText/IText.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L53)

___

### selectionStart

• **selectionStart**: `number`

#### Inherited from

UniqueITextProps.selectionStart

#### Defined in

[src/shapes/IText/IText.ts:52](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L52)

___

### shadow

• **shadow**: ``null`` \| `Partial`<[`SerializedShadowOptions`](../modules.md#serializedshadowoptions)\>

Shadow object representing shadow of this shape

**`Default`**

```ts
null
```

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[shadow](SerializedTextProps.md#shadow)

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

[SerializedTextProps](SerializedTextProps.md).[skewX](SerializedTextProps.md#skewx)

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

[SerializedTextProps](SerializedTextProps.md).[skewY](SerializedTextProps.md#skewy)

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

[SerializedTextProps](SerializedTextProps.md).[stroke](SerializedTextProps.md#stroke)

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

[SerializedTextProps](SerializedTextProps.md).[strokeDashArray](SerializedTextProps.md#strokedasharray)

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

[SerializedTextProps](SerializedTextProps.md).[strokeDashOffset](SerializedTextProps.md#strokedashoffset)

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

[SerializedTextProps](SerializedTextProps.md).[strokeLineCap](SerializedTextProps.md#strokelinecap)

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

[SerializedTextProps](SerializedTextProps.md).[strokeLineJoin](SerializedTextProps.md#strokelinejoin)

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

[SerializedTextProps](SerializedTextProps.md).[strokeMiterLimit](SerializedTextProps.md#strokemiterlimit)

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

[SerializedTextProps](SerializedTextProps.md).[strokeUniform](SerializedTextProps.md#strokeuniform)

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

[SerializedTextProps](SerializedTextProps.md).[strokeWidth](SerializedTextProps.md#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L41)

___

### styles

• **styles**: [`TextStyle`](../modules.md#textstyle) \| [`TextStyleArray`](../modules/util.md#textstylearray)

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[styles](SerializedTextProps.md#styles)

#### Defined in

[src/shapes/Text/Text.ts:111](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L111)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[textAlign](SerializedTextProps.md#textalign)

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

[SerializedTextProps](SerializedTextProps.md).[top](SerializedTextProps.md#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L9)

___

### underline

• **underline**: `boolean`

#### Inherited from

[SerializedTextProps](SerializedTextProps.md).[underline](SerializedTextProps.md#underline)

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

[SerializedTextProps](SerializedTextProps.md).[visible](SerializedTextProps.md#visible)

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

[SerializedTextProps](SerializedTextProps.md).[width](SerializedTextProps.md#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L23)
