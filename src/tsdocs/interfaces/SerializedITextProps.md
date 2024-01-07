# Interface: SerializedITextProps

## Hierarchy

- [`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md)

- `UniqueITextProps`

  ↳ **`SerializedITextProps`**

  ↳↳ [`SerializedTextboxProps`](/apidocs/interfaces/SerializedTextboxProps.md)

## Properties

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[angle](/apidocs/interfaces/SerializedTextProps.md#angle)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:57](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L57)

___

### backgroundColor

 **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

**`Default`**

```ts

```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[backgroundColor](/apidocs/interfaces/SerializedTextProps.md#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L26)

___

### charSpacing

 **charSpacing**: `number`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[charSpacing](/apidocs/interfaces/SerializedTextProps.md#charspacing)

#### Defined in

[src/shapes/Text/Text.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L92)

___

### clipPath

 `Optional` **clipPath**: `Partial`\<[`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md)\> & `ClipPathProps`

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[clipPath](/apidocs/interfaces/SerializedTextProps.md#clippath)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L49)

___

### direction

 **direction**: `CanvasDirection`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[direction](/apidocs/interfaces/SerializedTextProps.md#direction)

#### Defined in

[src/shapes/Text/Text.ts:104](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L104)

___

### fill

 **fill**: ``null`` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\>\> & \{ `colorStops`: [`ColorStop`](/apidocs/modules.md#colorstop)[] ; `coords`: [`LinearGradientCoords`](/apidocs/modules.md#lineargradientcoords)\<`number`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](/apidocs/modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: ``"linear"``  } \| `Partial`\<[`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>\> & \{ `colorStops`: [`ColorStop`](/apidocs/modules.md#colorstop)[] ; `coords`: [`RadialGradientCoords`](/apidocs/modules.md#radialgradientcoords)\<`number`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](/apidocs/modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: ``"radial"``  }

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

**`Default`**

```ts
rgb(0,0,0)
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[fill](/apidocs/interfaces/SerializedTextProps.md#fill)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:17](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L17)

___

### fillRule

 **fillRule**: `CanvasFillRule`

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

**`Default`**

```ts
nonzero
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[fillRule](/apidocs/interfaces/SerializedTextProps.md#fillrule)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L26)

___

### flipX

 **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

**`Default`**

```ts
false
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[flipX](/apidocs/interfaces/SerializedTextProps.md#flipx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:64](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L64)

___

### flipY

 **flipY**: `boolean`

When true, an object is rendered as flipped vertically

**`Default`**

```ts
false
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[flipY](/apidocs/interfaces/SerializedTextProps.md#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:71](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L71)

___

### fontFamily

 **fontFamily**: `string`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[fontFamily](/apidocs/interfaces/SerializedTextProps.md#fontfamily)

#### Defined in

[src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L96)

___

### fontSize

 **fontSize**: `number`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[fontSize](/apidocs/interfaces/SerializedTextProps.md#fontsize)

#### Defined in

[src/shapes/Text/Text.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L94)

___

### fontStyle

 **fontStyle**: `string`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[fontStyle](/apidocs/interfaces/SerializedTextProps.md#fontstyle)

#### Defined in

[src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L97)

___

### fontWeight

 **fontWeight**: `string`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[fontWeight](/apidocs/interfaces/SerializedTextProps.md#fontweight)

#### Defined in

[src/shapes/Text/Text.ts:95](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L95)

___

### globalCompositeOperation

 **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

**`Default`**

```ts

```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[globalCompositeOperation](/apidocs/interfaces/SerializedTextProps.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L18)

___

### height

 **height**: `number`

Object height

**`Default`**

```ts

```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[height](/apidocs/interfaces/SerializedTextProps.md#height)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L34)

___

### left

 **left**: `number`

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](/apidocs/interfaces/FabricObjectProps.md#originx)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[left](/apidocs/interfaces/SerializedTextProps.md#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L11)

___

### lineHeight

 **lineHeight**: `number`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[lineHeight](/apidocs/interfaces/SerializedTextProps.md#lineheight)

#### Defined in

[src/shapes/Text/Text.ts:93](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L93)

___

### linethrough

 **linethrough**: `boolean`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[linethrough](/apidocs/interfaces/SerializedTextProps.md#linethrough)

#### Defined in

[src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L102)

___

### opacity

 **opacity**: `number`

Opacity of an object

**`Default`**

```ts
1
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[opacity](/apidocs/interfaces/SerializedTextProps.md#opacity)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L11)

___

### originX

 **originX**: [`TOriginX`](/apidocs/modules.md#toriginx)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'left'
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[originX](/apidocs/interfaces/SerializedTextProps.md#originx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:42](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L42)

___

### originY

 **originY**: [`TOriginY`](/apidocs/modules.md#toriginy)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'top'
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[originY](/apidocs/interfaces/SerializedTextProps.md#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L50)

___

### overline

 **overline**: `boolean`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[overline](/apidocs/interfaces/SerializedTextProps.md#overline)

#### Defined in

[src/shapes/Text/Text.ts:101](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L101)

___

### paintFirst

 **paintFirst**: ``"fill"`` \| ``"stroke"``

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

**`Default`**

```ts

```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[paintFirst](/apidocs/interfaces/SerializedTextProps.md#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### path

 `Optional` **path**: [`Path`](/apidocs/classes/Path.md)\<`Partial`\<[`PathProps`](/apidocs/interfaces/PathProps.md)\>, [`SerializedPathProps`](/apidocs/interfaces/SerializedPathProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[path](/apidocs/interfaces/SerializedTextProps.md#path)

#### Defined in

[src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L105)

___

### pathAlign

 **pathAlign**: [`TPathAlign`](/apidocs/modules.md#tpathalign)

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[pathAlign](/apidocs/interfaces/SerializedTextProps.md#pathalign)

#### Defined in

[src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L99)

___

### pathSide

 **pathSide**: [`TPathSide`](/apidocs/modules.md#tpathside)

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[pathSide](/apidocs/interfaces/SerializedTextProps.md#pathside)

#### Defined in

[src/shapes/Text/Text.ts:98](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L98)

___

### scaleX

 **scaleX**: `number`

Object scale factor (horizontal)

**`Default`**

```ts
1
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[scaleX](/apidocs/interfaces/SerializedTextProps.md#scalex)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:78](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L78)

___

### scaleY

 **scaleY**: `number`

Object scale factor (vertical)

**`Default`**

```ts
1
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[scaleY](/apidocs/interfaces/SerializedTextProps.md#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L85)

___

### selectionEnd

 **selectionEnd**: `number`

#### Inherited from

UniqueITextProps.selectionEnd

#### Defined in

[src/shapes/IText/IText.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L53)

___

### selectionStart

 **selectionStart**: `number`

#### Inherited from

UniqueITextProps.selectionStart

#### Defined in

[src/shapes/IText/IText.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L52)

___

### shadow

 **shadow**: ``null`` \| `Partial`\<[`SerializedShadowOptions`](/apidocs/modules.md#serializedshadowoptions)\>

Shadow object representing shadow of this shape

**`Default`**

```ts
null
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[shadow](/apidocs/interfaces/SerializedTextProps.md#shadow)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:33](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L33)

___

### skewX

 **skewX**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of skew on x axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[skewX](/apidocs/interfaces/SerializedTextProps.md#skewx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L92)

___

### skewY

 **skewY**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of skew on y axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[skewY](/apidocs/interfaces/SerializedTextProps.md#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L99)

___

### stroke

 **stroke**: ``null`` \| `string` \| `Record`\<`string`, `any`\> \| `Partial`\<[`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\>\> & \{ `colorStops`: [`ColorStop`](/apidocs/modules.md#colorstop)[] ; `coords`: [`LinearGradientCoords`](/apidocs/modules.md#lineargradientcoords)\<`number`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](/apidocs/modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: ``"linear"``  } \| `Partial`\<[`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>\> & \{ `colorStops`: [`ColorStop`](/apidocs/modules.md#colorstop)[] ; `coords`: [`RadialGradientCoords`](/apidocs/modules.md#radialgradientcoords)\<`number`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](/apidocs/modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: ``"radial"``  }

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

**`Default`**

```ts
null
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[stroke](/apidocs/interfaces/SerializedTextProps.md#stroke)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L34)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

**`Default`**

```ts
null;
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[strokeDashArray](/apidocs/interfaces/SerializedTextProps.md#strokedasharray)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L48)

___

### strokeDashOffset

 **strokeDashOffset**: `number`

Line offset of an object's stroke

**`Default`**

```ts
0
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[strokeDashOffset](/apidocs/interfaces/SerializedTextProps.md#strokedashoffset)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L55)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

**`Default`**

```ts
butt
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[strokeLineCap](/apidocs/interfaces/SerializedTextProps.md#strokelinecap)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L62)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[strokeLineJoin](/apidocs/interfaces/SerializedTextProps.md#strokelinejoin)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L69)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

**`Default`**

```ts
4
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[strokeMiterLimit](/apidocs/interfaces/SerializedTextProps.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L76)

___

### strokeUniform

 **strokeUniform**: `boolean`

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

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[strokeUniform](/apidocs/interfaces/SerializedTextProps.md#strokeuniform)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L89)

___

### strokeWidth

 **strokeWidth**: `number`

Width of a stroke used to render this object

**`Default`**

```ts
1
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[strokeWidth](/apidocs/interfaces/SerializedTextProps.md#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L41)

___

### styles

 **styles**: [`TextStyle`](/apidocs/modules.md#textstyle) \| [`TextStyleArray`](/apidocs/modules/util.md#textstylearray)

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[styles](/apidocs/interfaces/SerializedTextProps.md#styles)

#### Defined in

[src/shapes/Text/Text.ts:111](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L111)

___

### textAlign

 **textAlign**: `string`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[textAlign](/apidocs/interfaces/SerializedTextProps.md#textalign)

#### Defined in

[src/shapes/Text/Text.ts:103](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L103)

___

### top

 **top**: `number`

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](/apidocs/interfaces/FabricObjectProps.md#originy)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[top](/apidocs/interfaces/SerializedTextProps.md#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L20)

___

### underline

 **underline**: `boolean`

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[underline](/apidocs/interfaces/SerializedTextProps.md#underline)

#### Defined in

[src/shapes/Text/Text.ts:100](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L100)

___

### visible

 **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

**`Default`**

```ts

```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[visible](/apidocs/interfaces/SerializedTextProps.md#visible)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L40)

___

### width

 **width**: `number`

Object width

**`Default`**

```ts

```

#### Inherited from

[SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md).[width](/apidocs/interfaces/SerializedTextProps.md#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L27)
