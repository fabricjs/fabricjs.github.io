# Interface: SerializedTextboxProps

## Hierarchy

- [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md)

- `Pick`\<`UniqueTextboxProps`, ``"minWidth"`` \| ``"splitByGrapheme"``\>

  ↳ **`SerializedTextboxProps`**

## Properties

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[angle](/apidocs/interfaces/SerializedITextProps.md#angle)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[backgroundColor](/apidocs/interfaces/SerializedITextProps.md#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L26)

___

### charSpacing

 **charSpacing**: `number`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[charSpacing](/apidocs/interfaces/SerializedITextProps.md#charspacing)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[clipPath](/apidocs/interfaces/SerializedITextProps.md#clippath)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L49)

___

### direction

 **direction**: `CanvasDirection`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[direction](/apidocs/interfaces/SerializedITextProps.md#direction)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[fill](/apidocs/interfaces/SerializedITextProps.md#fill)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[fillRule](/apidocs/interfaces/SerializedITextProps.md#fillrule)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[flipX](/apidocs/interfaces/SerializedITextProps.md#flipx)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[flipY](/apidocs/interfaces/SerializedITextProps.md#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:71](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L71)

___

### fontFamily

 **fontFamily**: `string`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[fontFamily](/apidocs/interfaces/SerializedITextProps.md#fontfamily)

#### Defined in

[src/shapes/Text/Text.ts:96](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L96)

___

### fontSize

 **fontSize**: `number`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[fontSize](/apidocs/interfaces/SerializedITextProps.md#fontsize)

#### Defined in

[src/shapes/Text/Text.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L94)

___

### fontStyle

 **fontStyle**: `string`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[fontStyle](/apidocs/interfaces/SerializedITextProps.md#fontstyle)

#### Defined in

[src/shapes/Text/Text.ts:97](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L97)

___

### fontWeight

 **fontWeight**: `string`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[fontWeight](/apidocs/interfaces/SerializedITextProps.md#fontweight)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[globalCompositeOperation](/apidocs/interfaces/SerializedITextProps.md#globalcompositeoperation)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[height](/apidocs/interfaces/SerializedITextProps.md#height)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[left](/apidocs/interfaces/SerializedITextProps.md#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L11)

___

### lineHeight

 **lineHeight**: `number`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[lineHeight](/apidocs/interfaces/SerializedITextProps.md#lineheight)

#### Defined in

[src/shapes/Text/Text.ts:93](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L93)

___

### linethrough

 **linethrough**: `boolean`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[linethrough](/apidocs/interfaces/SerializedITextProps.md#linethrough)

#### Defined in

[src/shapes/Text/Text.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L102)

___

### minWidth

 **minWidth**: `number`

#### Inherited from

Pick.minWidth

#### Defined in

[src/shapes/Textbox.ts:35](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Textbox.ts#L35)

___

### opacity

 **opacity**: `number`

Opacity of an object

**`Default`**

```ts
1
```

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[opacity](/apidocs/interfaces/SerializedITextProps.md#opacity)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[originX](/apidocs/interfaces/SerializedITextProps.md#originx)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[originY](/apidocs/interfaces/SerializedITextProps.md#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L50)

___

### overline

 **overline**: `boolean`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[overline](/apidocs/interfaces/SerializedITextProps.md#overline)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[paintFirst](/apidocs/interfaces/SerializedITextProps.md#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### path

 `Optional` **path**: [`Path`](/apidocs/classes/Path.md)\<`Partial`\<[`PathProps`](/apidocs/interfaces/PathProps.md)\>, [`SerializedPathProps`](/apidocs/interfaces/SerializedPathProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[path](/apidocs/interfaces/SerializedITextProps.md#path)

#### Defined in

[src/shapes/Text/Text.ts:105](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L105)

___

### pathAlign

 **pathAlign**: [`TPathAlign`](/apidocs/modules.md#tpathalign)

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[pathAlign](/apidocs/interfaces/SerializedITextProps.md#pathalign)

#### Defined in

[src/shapes/Text/Text.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L99)

___

### pathSide

 **pathSide**: [`TPathSide`](/apidocs/modules.md#tpathside)

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[pathSide](/apidocs/interfaces/SerializedITextProps.md#pathside)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[scaleX](/apidocs/interfaces/SerializedITextProps.md#scalex)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[scaleY](/apidocs/interfaces/SerializedITextProps.md#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L85)

___

### selectionEnd

 **selectionEnd**: `number`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[selectionEnd](/apidocs/interfaces/SerializedITextProps.md#selectionend)

#### Defined in

[src/shapes/IText/IText.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/IText/IText.ts#L53)

___

### selectionStart

 **selectionStart**: `number`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[selectionStart](/apidocs/interfaces/SerializedITextProps.md#selectionstart)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[shadow](/apidocs/interfaces/SerializedITextProps.md#shadow)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[skewX](/apidocs/interfaces/SerializedITextProps.md#skewx)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[skewY](/apidocs/interfaces/SerializedITextProps.md#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L99)

___

### splitByGrapheme

 **splitByGrapheme**: `boolean`

#### Inherited from

Pick.splitByGrapheme

#### Defined in

[src/shapes/Textbox.ts:36](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Textbox.ts#L36)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[stroke](/apidocs/interfaces/SerializedITextProps.md#stroke)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[strokeDashArray](/apidocs/interfaces/SerializedITextProps.md#strokedasharray)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[strokeDashOffset](/apidocs/interfaces/SerializedITextProps.md#strokedashoffset)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[strokeLineCap](/apidocs/interfaces/SerializedITextProps.md#strokelinecap)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[strokeLineJoin](/apidocs/interfaces/SerializedITextProps.md#strokelinejoin)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[strokeMiterLimit](/apidocs/interfaces/SerializedITextProps.md#strokemiterlimit)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[strokeUniform](/apidocs/interfaces/SerializedITextProps.md#strokeuniform)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[strokeWidth](/apidocs/interfaces/SerializedITextProps.md#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L41)

___

### styles

 **styles**: [`TextStyle`](/apidocs/modules.md#textstyle) \| [`TextStyleArray`](/apidocs/modules/util.md#textstylearray)

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[styles](/apidocs/interfaces/SerializedITextProps.md#styles)

#### Defined in

[src/shapes/Text/Text.ts:111](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L111)

___

### textAlign

 **textAlign**: `string`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[textAlign](/apidocs/interfaces/SerializedITextProps.md#textalign)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[top](/apidocs/interfaces/SerializedITextProps.md#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L20)

___

### underline

 **underline**: `boolean`

#### Inherited from

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[underline](/apidocs/interfaces/SerializedITextProps.md#underline)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[visible](/apidocs/interfaces/SerializedITextProps.md#visible)

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

[SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md).[width](/apidocs/interfaces/SerializedITextProps.md#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L27)
