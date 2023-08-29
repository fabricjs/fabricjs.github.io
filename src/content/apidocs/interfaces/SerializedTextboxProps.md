# Interface: SerializedTextboxProps

## Hierarchy

- [`SerializedITextProps`](SerializedITextProps.md)

- `Pick`<`UniqueTextboxProps`, ``"minWidth"`` \| ``"splitByGrapheme"``\>

  ↳ **`SerializedTextboxProps`**

## Table of contents

### Properties

- [angle](SerializedTextboxProps.md#angle)
- [backgroundColor](SerializedTextboxProps.md#backgroundcolor)
- [charSpacing](SerializedTextboxProps.md#charspacing)
- [clipPath](SerializedTextboxProps.md#clippath)
- [direction](SerializedTextboxProps.md#direction)
- [fill](SerializedTextboxProps.md#fill)
- [fillRule](SerializedTextboxProps.md#fillrule)
- [flipX](SerializedTextboxProps.md#flipx)
- [flipY](SerializedTextboxProps.md#flipy)
- [fontFamily](SerializedTextboxProps.md#fontfamily)
- [fontSize](SerializedTextboxProps.md#fontsize)
- [fontStyle](SerializedTextboxProps.md#fontstyle)
- [fontWeight](SerializedTextboxProps.md#fontweight)
- [globalCompositeOperation](SerializedTextboxProps.md#globalcompositeoperation)
- [height](SerializedTextboxProps.md#height)
- [left](SerializedTextboxProps.md#left)
- [lineHeight](SerializedTextboxProps.md#lineheight)
- [linethrough](SerializedTextboxProps.md#linethrough)
- [minWidth](SerializedTextboxProps.md#minwidth)
- [opacity](SerializedTextboxProps.md#opacity)
- [originX](SerializedTextboxProps.md#originx)
- [originY](SerializedTextboxProps.md#originy)
- [overline](SerializedTextboxProps.md#overline)
- [paintFirst](SerializedTextboxProps.md#paintfirst)
- [path](SerializedTextboxProps.md#path)
- [pathAlign](SerializedTextboxProps.md#pathalign)
- [pathSide](SerializedTextboxProps.md#pathside)
- [scaleX](SerializedTextboxProps.md#scalex)
- [scaleY](SerializedTextboxProps.md#scaley)
- [selectionEnd](SerializedTextboxProps.md#selectionend)
- [selectionStart](SerializedTextboxProps.md#selectionstart)
- [shadow](SerializedTextboxProps.md#shadow)
- [skewX](SerializedTextboxProps.md#skewx)
- [skewY](SerializedTextboxProps.md#skewy)
- [splitByGrapheme](SerializedTextboxProps.md#splitbygrapheme)
- [stroke](SerializedTextboxProps.md#stroke)
- [strokeDashArray](SerializedTextboxProps.md#strokedasharray)
- [strokeDashOffset](SerializedTextboxProps.md#strokedashoffset)
- [strokeLineCap](SerializedTextboxProps.md#strokelinecap)
- [strokeLineJoin](SerializedTextboxProps.md#strokelinejoin)
- [strokeMiterLimit](SerializedTextboxProps.md#strokemiterlimit)
- [strokeUniform](SerializedTextboxProps.md#strokeuniform)
- [strokeWidth](SerializedTextboxProps.md#strokewidth)
- [styles](SerializedTextboxProps.md#styles)
- [textAlign](SerializedTextboxProps.md#textalign)
- [top](SerializedTextboxProps.md#top)
- [underline](SerializedTextboxProps.md#underline)
- [visible](SerializedTextboxProps.md#visible)
- [width](SerializedTextboxProps.md#width)

## Properties

### angle

• **angle**: [`TDegree`](../modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[angle](SerializedITextProps.md#angle)

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

[SerializedITextProps](SerializedITextProps.md).[backgroundColor](SerializedITextProps.md#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L26)

___

### charSpacing

• **charSpacing**: `number`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[charSpacing](SerializedITextProps.md#charspacing)

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

[SerializedITextProps](SerializedITextProps.md).[clipPath](SerializedITextProps.md#clippath)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/SerializedObjectProps.ts#L49)

___

### direction

• **direction**: `CanvasDirection`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[direction](SerializedITextProps.md#direction)

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

[SerializedITextProps](SerializedITextProps.md).[fill](SerializedITextProps.md#fill)

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

[SerializedITextProps](SerializedITextProps.md).[fillRule](SerializedITextProps.md#fillrule)

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

[SerializedITextProps](SerializedITextProps.md).[flipX](SerializedITextProps.md#flipx)

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

[SerializedITextProps](SerializedITextProps.md).[flipY](SerializedITextProps.md#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:44](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L44)

___

### fontFamily

• **fontFamily**: `string`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[fontFamily](SerializedITextProps.md#fontfamily)

#### Defined in

[src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L96)

___

### fontSize

• **fontSize**: `number`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[fontSize](SerializedITextProps.md#fontsize)

#### Defined in

[src/shapes/Text/Text.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L94)

___

### fontStyle

• **fontStyle**: `string`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[fontStyle](SerializedITextProps.md#fontstyle)

#### Defined in

[src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L97)

___

### fontWeight

• **fontWeight**: `string`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[fontWeight](SerializedITextProps.md#fontweight)

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

[SerializedITextProps](SerializedITextProps.md).[globalCompositeOperation](SerializedITextProps.md#globalcompositeoperation)

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

[SerializedITextProps](SerializedITextProps.md).[height](SerializedITextProps.md#height)

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

[SerializedITextProps](SerializedITextProps.md).[left](SerializedITextProps.md#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:16](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L16)

___

### lineHeight

• **lineHeight**: `number`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[lineHeight](SerializedITextProps.md#lineheight)

#### Defined in

[src/shapes/Text/Text.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L93)

___

### linethrough

• **linethrough**: `boolean`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[linethrough](SerializedITextProps.md#linethrough)

#### Defined in

[src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L102)

___

### minWidth

• **minWidth**: `number`

#### Inherited from

Pick.minWidth

#### Defined in

[src/shapes/Textbox.ts:35](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L35)

___

### opacity

• **opacity**: `number`

Opacity of an object

**`Default`**

```ts
1
```

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[opacity](SerializedITextProps.md#opacity)

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

[SerializedITextProps](SerializedITextProps.md).[originX](SerializedITextProps.md#originx)

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

[SerializedITextProps](SerializedITextProps.md).[originY](SerializedITextProps.md#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L88)

___

### overline

• **overline**: `boolean`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[overline](SerializedITextProps.md#overline)

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

[SerializedITextProps](SerializedITextProps.md).[paintFirst](SerializedITextProps.md#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### path

• `Optional` **path**: [`Path`](../classes/Path.md)<`Partial`<[`PathProps`](PathProps.md)\>, [`SerializedPathProps`](SerializedPathProps.md), [`ObjectEvents`](ObjectEvents.md)\>

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[path](SerializedITextProps.md#path)

#### Defined in

[src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L105)

___

### pathAlign

• **pathAlign**: [`TPathAlign`](../modules.md#tpathalign)

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[pathAlign](SerializedITextProps.md#pathalign)

#### Defined in

[src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L99)

___

### pathSide

• **pathSide**: [`TPathSide`](../modules.md#tpathside)

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[pathSide](SerializedITextProps.md#pathside)

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

[SerializedITextProps](SerializedITextProps.md).[scaleX](SerializedITextProps.md#scalex)

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

[SerializedITextProps](SerializedITextProps.md).[scaleY](SerializedITextProps.md#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L58)

___

### selectionEnd

• **selectionEnd**: `number`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[selectionEnd](SerializedITextProps.md#selectionend)

#### Defined in

[src/shapes/IText/IText.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L53)

___

### selectionStart

• **selectionStart**: `number`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[selectionStart](SerializedITextProps.md#selectionstart)

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

[SerializedITextProps](SerializedITextProps.md).[shadow](SerializedITextProps.md#shadow)

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

[SerializedITextProps](SerializedITextProps.md).[skewX](SerializedITextProps.md#skewx)

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

[SerializedITextProps](SerializedITextProps.md).[skewY](SerializedITextProps.md#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L72)

___

### splitByGrapheme

• **splitByGrapheme**: `boolean`

#### Inherited from

Pick.splitByGrapheme

#### Defined in

[src/shapes/Textbox.ts:36](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L36)

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

[SerializedITextProps](SerializedITextProps.md).[stroke](SerializedITextProps.md#stroke)

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

[SerializedITextProps](SerializedITextProps.md).[strokeDashArray](SerializedITextProps.md#strokedasharray)

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

[SerializedITextProps](SerializedITextProps.md).[strokeDashOffset](SerializedITextProps.md#strokedashoffset)

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

[SerializedITextProps](SerializedITextProps.md).[strokeLineCap](SerializedITextProps.md#strokelinecap)

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

[SerializedITextProps](SerializedITextProps.md).[strokeLineJoin](SerializedITextProps.md#strokelinejoin)

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

[SerializedITextProps](SerializedITextProps.md).[strokeMiterLimit](SerializedITextProps.md#strokemiterlimit)

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

[SerializedITextProps](SerializedITextProps.md).[strokeUniform](SerializedITextProps.md#strokeuniform)

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

[SerializedITextProps](SerializedITextProps.md).[strokeWidth](SerializedITextProps.md#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/FillStrokeProps.ts#L41)

___

### styles

• **styles**: [`TextStyle`](../modules.md#textstyle) \| [`TextStyleArray`](../modules/util.md#textstylearray)

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[styles](SerializedITextProps.md#styles)

#### Defined in

[src/shapes/Text/Text.ts:111](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L111)

___

### textAlign

• **textAlign**: `string`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[textAlign](SerializedITextProps.md#textalign)

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

[SerializedITextProps](SerializedITextProps.md).[top](SerializedITextProps.md#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L9)

___

### underline

• **underline**: `boolean`

#### Inherited from

[SerializedITextProps](SerializedITextProps.md).[underline](SerializedITextProps.md#underline)

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

[SerializedITextProps](SerializedITextProps.md).[visible](SerializedITextProps.md#visible)

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

[SerializedITextProps](SerializedITextProps.md).[width](SerializedITextProps.md#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/types/BaseProps.ts#L23)
