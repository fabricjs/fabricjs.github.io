# Interface: SerializedPolylineProps

## Hierarchy

- [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md)

  ↳ **`SerializedPolylineProps`**

## Properties

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[angle](/apidocs/interfaces/SerializedObjectProps.md#angle)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:95](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L95)

___

### backgroundColor

 **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

**`Default`**

```ts

```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[backgroundColor](/apidocs/interfaces/SerializedObjectProps.md#backgroundcolor)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/SerializedObjectProps.ts#L26)

___

### clipPath

 `Optional` **clipPath**: `Partial`\<[`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md)\> & `ClipPathProps`

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[clipPath](/apidocs/interfaces/SerializedObjectProps.md#clippath)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/SerializedObjectProps.ts#L49)

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

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[fill](/apidocs/interfaces/SerializedObjectProps.md#fill)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:17](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L17)

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

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[fillRule](/apidocs/interfaces/SerializedObjectProps.md#fillrule)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:26](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L26)

___

### flipX

 **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

**`Default`**

```ts
false
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[flipX](/apidocs/interfaces/SerializedObjectProps.md#flipx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:37](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L37)

___

### flipY

 **flipY**: `boolean`

When true, an object is rendered as flipped vertically

**`Default`**

```ts
false
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[flipY](/apidocs/interfaces/SerializedObjectProps.md#flipy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:44](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L44)

___

### globalCompositeOperation

 **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

**`Default`**

```ts

```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[globalCompositeOperation](/apidocs/interfaces/SerializedObjectProps.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:18](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/SerializedObjectProps.ts#L18)

___

### height

 **height**: `number`

Object height

**`Default`**

```ts

```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[height](/apidocs/interfaces/SerializedObjectProps.md#height)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:30](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L30)

___

### left

 **left**: `number`

Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}

**`Default`**

```ts
0
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[left](/apidocs/interfaces/SerializedObjectProps.md#left)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:16](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L16)

___

### opacity

 **opacity**: `number`

Opacity of an object

**`Default`**

```ts
1
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[opacity](/apidocs/interfaces/SerializedObjectProps.md#opacity)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:11](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/SerializedObjectProps.ts#L11)

___

### originX

 **originX**: [`TOriginX`](/apidocs/modules.md#toriginx)

Horizontal origin of transformation of an object (one of "left", "right", "center")
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'left'
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[originX](/apidocs/interfaces/SerializedObjectProps.md#originx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:80](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L80)

___

### originY

 **originY**: [`TOriginY`](/apidocs/modules.md#toriginy)

Vertical origin of transformation of an object (one of "top", "bottom", "center")
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'top'
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[originY](/apidocs/interfaces/SerializedObjectProps.md#originy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:88](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L88)

___

### paintFirst

 **paintFirst**: ``"fill"`` \| ``"stroke"``

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

**`Default`**

```ts

```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[paintFirst](/apidocs/interfaces/SerializedObjectProps.md#paintfirst)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### points

 **points**: [`XY`](/apidocs/interfaces/XY.md)[]

#### Defined in

[src/shapes/Polyline.ts:27](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L27)

___

### scaleX

 **scaleX**: `number`

Object scale factor (horizontal)

**`Default`**

```ts
1
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[scaleX](/apidocs/interfaces/SerializedObjectProps.md#scalex)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:51](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L51)

___

### scaleY

 **scaleY**: `number`

Object scale factor (vertical)

**`Default`**

```ts
1
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[scaleY](/apidocs/interfaces/SerializedObjectProps.md#scaley)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:58](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L58)

___

### shadow

 **shadow**: ``null`` \| `Partial`\<[`SerializedShadowOptions`](/apidocs/modules.md#serializedshadowoptions)\>

Shadow object representing shadow of this shape

**`Default`**

```ts
null
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[shadow](/apidocs/interfaces/SerializedObjectProps.md#shadow)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:33](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/SerializedObjectProps.ts#L33)

___

### skewX

 **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[skewX](/apidocs/interfaces/SerializedObjectProps.md#skewx)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:65](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L65)

___

### skewY

 **skewY**: `number`

Angle of skew on y axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[skewY](/apidocs/interfaces/SerializedObjectProps.md#skewy)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:72](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L72)

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

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[stroke](/apidocs/interfaces/SerializedObjectProps.md#stroke)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:34](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L34)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

**`Default`**

```ts
null;
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[strokeDashArray](/apidocs/interfaces/SerializedObjectProps.md#strokedasharray)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:48](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L48)

___

### strokeDashOffset

 **strokeDashOffset**: `number`

Line offset of an object's stroke

**`Default`**

```ts
0
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[strokeDashOffset](/apidocs/interfaces/SerializedObjectProps.md#strokedashoffset)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:55](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L55)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

**`Default`**

```ts
butt
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[strokeLineCap](/apidocs/interfaces/SerializedObjectProps.md#strokelinecap)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:62](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L62)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[strokeLineJoin](/apidocs/interfaces/SerializedObjectProps.md#strokelinejoin)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:69](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L69)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

**`Default`**

```ts
4
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[strokeMiterLimit](/apidocs/interfaces/SerializedObjectProps.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L76)

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

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[strokeUniform](/apidocs/interfaces/SerializedObjectProps.md#strokeuniform)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L89)

___

### strokeWidth

 **strokeWidth**: `number`

Width of a stroke used to render this object

**`Default`**

```ts
1
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[strokeWidth](/apidocs/interfaces/SerializedObjectProps.md#strokewidth)

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/FillStrokeProps.ts#L41)

___

### top

 **top**: `number`

Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}

**`Default`**

```ts
0
```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[top](/apidocs/interfaces/SerializedObjectProps.md#top)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:9](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L9)

___

### visible

 **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

**`Default`**

```ts

```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[visible](/apidocs/interfaces/SerializedObjectProps.md#visible)

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:40](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/SerializedObjectProps.ts#L40)

___

### width

 **width**: `number`

Object width

**`Default`**

```ts

```

#### Inherited from

[SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md).[width](/apidocs/interfaces/SerializedObjectProps.md#width)

#### Defined in

[src/shapes/Object/types/BaseProps.ts:23](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/types/BaseProps.ts#L23)
