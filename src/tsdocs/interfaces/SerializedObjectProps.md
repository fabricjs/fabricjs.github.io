# Interface: SerializedObjectProps

## Hierarchy

- `BaseProps`

- `FillStrokeProps`

  ↳ **`SerializedObjectProps`**

  ↳↳ [`SerializedLineProps`](/apidocs/interfaces/SerializedLineProps.md)

  ↳↳ [`SerializedCircleProps`](/apidocs/interfaces/SerializedCircleProps.md)

  ↳↳ [`SerializedEllipseProps`](/apidocs/interfaces/SerializedEllipseProps.md)

  ↳↳ [`SerializedRectProps`](/apidocs/interfaces/SerializedRectProps.md)

  ↳↳ [`SerializedPathProps`](/apidocs/interfaces/SerializedPathProps.md)

  ↳↳ [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md)

  ↳↳ [`SerializedTextProps`](/apidocs/interfaces/SerializedTextProps.md)

  ↳↳ [`SerializedGroupProps`](/apidocs/interfaces/SerializedGroupProps.md)

  ↳↳ [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md)

## Properties

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Inherited from

BaseProps.angle

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

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L26)

___

### clipPath

 `Optional` **clipPath**: `Partial`\<[`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md)\> & `ClipPathProps`

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Defined in

[src/shapes/Object/types/SerializedObjectProps.ts:49](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/SerializedObjectProps.ts#L49)

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

FillStrokeProps.fill

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

FillStrokeProps.fillRule

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

BaseProps.flipX

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

BaseProps.flipY

#### Defined in

[src/shapes/Object/types/BaseProps.ts:71](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L71)

___

### globalCompositeOperation

 **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

**`Default`**

```ts

```

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

BaseProps.height

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

BaseProps.left

#### Defined in

[src/shapes/Object/types/BaseProps.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L11)

___

### opacity

 **opacity**: `number`

Opacity of an object

**`Default`**

```ts
1
```

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

BaseProps.originX

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

BaseProps.originY

#### Defined in

[src/shapes/Object/types/BaseProps.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L50)

___

### paintFirst

 **paintFirst**: ``"fill"`` \| ``"stroke"``

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

**`Default`**

```ts

```

#### Inherited from

FillStrokeProps.paintFirst

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L9)

___

### scaleX

 **scaleX**: `number`

Object scale factor (horizontal)

**`Default`**

```ts
1
```

#### Inherited from

BaseProps.scaleX

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

BaseProps.scaleY

#### Defined in

[src/shapes/Object/types/BaseProps.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L85)

___

### shadow

 **shadow**: ``null`` \| `Partial`\<[`SerializedShadowOptions`](/apidocs/modules.md#serializedshadowoptions)\>

Shadow object representing shadow of this shape

**`Default`**

```ts
null
```

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

BaseProps.skewX

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

BaseProps.skewY

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

FillStrokeProps.stroke

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

FillStrokeProps.strokeDashArray

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

FillStrokeProps.strokeDashOffset

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

FillStrokeProps.strokeLineCap

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

FillStrokeProps.strokeLineJoin

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

FillStrokeProps.strokeMiterLimit

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

FillStrokeProps.strokeUniform

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

FillStrokeProps.strokeWidth

#### Defined in

[src/shapes/Object/types/FillStrokeProps.ts:41](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/FillStrokeProps.ts#L41)

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

BaseProps.top

#### Defined in

[src/shapes/Object/types/BaseProps.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L20)

___

### visible

 **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

**`Default`**

```ts

```

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

BaseProps.width

#### Defined in

[src/shapes/Object/types/BaseProps.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/BaseProps.ts#L27)
