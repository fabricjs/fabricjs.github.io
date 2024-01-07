# Class: PencilBrush

**`See`**

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Hierarchy

- [`BaseBrush`](/apidocs/classes/BaseBrush.md)

  ↳ **`PencilBrush`**

  ↳↳ [`PatternBrush`](/apidocs/classes/PatternBrush.md)

## Constructors

### constructor

**new PencilBrush**(`canvas`): [`PencilBrush`](/apidocs/classes/PencilBrush.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`Canvas`](/apidocs/classes/Canvas.md) |

#### Returns

[`PencilBrush`](/apidocs/classes/PencilBrush.md)

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[constructor](/apidocs/classes/BaseBrush.md#constructor)

#### Defined in

[src/brushes/PencilBrush.ts:47](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L47)

## Properties

### \_hasStraightLine

 `Private` **\_hasStraightLine**: `boolean`

#### Defined in

[src/brushes/PencilBrush.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L44)

___

### \_points

 `Private` **\_points**: [`Point`](/apidocs/classes/Point.md)[]

#### Defined in

[src/brushes/PencilBrush.ts:43](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L43)

___

### canvas

 **canvas**: [`Canvas`](/apidocs/classes/Canvas.md)

**`Todo`**

add type

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[canvas](/apidocs/classes/BaseBrush.md#canvas)

#### Defined in

[src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L73)

___

### color

 **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[color](/apidocs/classes/BaseBrush.md#color)

#### Defined in

[src/brushes/BaseBrush.ts:16](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L16)

___

### decimate

 **decimate**: `number` = `0.4`

Discard points that are less than `decimate` pixel distant from each other

**`Default`**

```ts
0.4
```

#### Defined in

[src/brushes/PencilBrush.ts:25](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L25)

___

### drawStraightLine

 **drawStraightLine**: `boolean` = `false`

Draws a straight line between last recorded point to current pointer
Used for `shift` functionality

**`Default`**

```ts
false
```

#### Defined in

[src/brushes/PencilBrush.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L34)

___

### limitedToCanvasSize

 **limitedToCanvasSize**: `boolean` = `false`

When `true`, the free drawing is limited to the whiteboard size. Default to false.

**`Default`**

```ts
false
```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[limitedToCanvasSize](/apidocs/classes/BaseBrush.md#limitedtocanvassize)

#### Defined in

[src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L68)

___

### oldEnd

 `Private` `Optional` **oldEnd**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/brushes/PencilBrush.ts:45](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L45)

___

### shadow

 **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md) = `null`

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[shadow](/apidocs/classes/BaseBrush.md#shadow)

#### Defined in

[src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L32)

___

### straightLineKey

 **straightLineKey**: `undefined` \| ``null`` \| ``"altKey"`` \| ``"shiftKey"`` \| ``"ctrlKey"`` \| ``"metaKey"`` = `'shiftKey'`

The event modifier key that makes the brush draw a straight line.
If `null` or 'none' or any other string that is not a modifier key the feature is disabled.

#### Defined in

[src/brushes/PencilBrush.ts:41](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L41)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[] = `null`

Stroke Dash Array.

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[strokeDashArray](/apidocs/classes/BaseBrush.md#strokedasharray)

#### Defined in

[src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L60)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[strokeLineCap](/apidocs/classes/BaseBrush.md#strokelinecap)

#### Defined in

[src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L39)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[strokeLineJoin](/apidocs/classes/BaseBrush.md#strokelinejoin)

#### Defined in

[src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L46)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[strokeMiterLimit](/apidocs/classes/BaseBrush.md#strokemiterlimit)

#### Defined in

[src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L53)

___

### width

 **width**: `number` = `1`

Width of a brush, has to be a Number, no string literals

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[width](/apidocs/classes/BaseBrush.md#width)

#### Defined in

[src/brushes/BaseBrush.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L23)

## Methods

### \_addPoint

**_addPoint**(`point`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | Point to be added to points array |

#### Returns

`boolean`

#### Defined in

[src/brushes/PencilBrush.ts:145](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L145)

___

### \_finalizeAndAddPath

**_finalizeAndAddPath**(): `void`

On mouseup after drawing the path on contextTop canvas
we use the points captured to create an new Path object
and add it to the canvas.

#### Returns

`void`

#### Defined in

[src/brushes/PencilBrush.ts:273](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L273)

___

### \_isOutSideCanvas

**_isOutSideCanvas**(`pointer`): `boolean`

Check is pointer is outside canvas boundaries

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`boolean`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_isOutSideCanvas](/apidocs/classes/BaseBrush.md#_isoutsidecanvas)

#### Defined in

[src/brushes/BaseBrush.ts:153](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L153)

___

### \_prepareForDrawing

**_prepareForDrawing**(`pointer`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) | Actual mouse position related to the canvas. |

#### Returns

`void`

#### Defined in

[src/brushes/PencilBrush.ts:135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L135)

___

### \_render

**_render**(`ctx?`): `void`

Draw a smooth path on the topCanvas using quadraticCurveTo

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx?` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[_render](/apidocs/classes/BaseBrush.md#_render)

#### Defined in

[src/brushes/PencilBrush.ts:176](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L176)

___

### \_reset

**_reset**(): `void`

Clear points array and set contextTop canvas style.

#### Returns

`void`

#### Defined in

[src/brushes/PencilBrush.ts:164](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L164)

___

### \_resetShadow

**_resetShadow**(): `void`

Removes brush shadow styles

#### Returns

`void`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_resetShadow](/apidocs/classes/BaseBrush.md#_resetshadow)

#### Defined in

[src/brushes/BaseBrush.ts:141](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L141)

___

### \_saveAndTransform

**_saveAndTransform**(`ctx`): `void`

Sets the transformation on given context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | context to render on |

#### Returns

`void`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_saveAndTransform](/apidocs/classes/BaseBrush.md#_saveandtransform)

#### Defined in

[src/brushes/BaseBrush.ts:106](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L106)

___

### \_setBrushStyles

**_setBrushStyles**(`ctx`): `void`

Sets brush styles

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_setBrushStyles](/apidocs/classes/BaseBrush.md#_setbrushstyles)

#### Defined in

[src/brushes/BaseBrush.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L92)

___

### \_setShadow

**_setShadow**(): `void`

Sets brush shadow styles

#### Returns

`void`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_setShadow](/apidocs/classes/BaseBrush.md#_setshadow)

#### Defined in

[src/brushes/BaseBrush.ts:121](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L121)

___

### convertPointsToSVGPath

**convertPointsToSVGPath**(`points`): [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

Converts points to SVG path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | [`Point`](/apidocs/classes/Point.md)[] | Array of points |

#### Returns

[`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

SVG path commands

#### Defined in

[src/brushes/PencilBrush.ts:212](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L212)

___

### createPath

**createPath**(`pathData`): [`Path`](/apidocs/classes/Path.md)\<`Partial`\<[`PathProps`](/apidocs/interfaces/PathProps.md)\>, [`SerializedPathProps`](/apidocs/interfaces/SerializedPathProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Creates a Path object to add on canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathData` | [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata) | Path data |

#### Returns

[`Path`](/apidocs/classes/Path.md)\<`Partial`\<[`PathProps`](/apidocs/interfaces/PathProps.md)\>, [`SerializedPathProps`](/apidocs/interfaces/SerializedPathProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Path to add on canvas

#### Defined in

[src/brushes/PencilBrush.ts:222](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L222)

___

### decimatePoints

**decimatePoints**(`points`, `distance`): [`Point`](/apidocs/classes/Point.md)[]

Decimate points array with the decimate value

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Point`](/apidocs/classes/Point.md)[] |
| `distance` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)[]

#### Defined in

[src/brushes/PencilBrush.ts:243](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L243)

___

### needsFullRender

**needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[needsFullRender](/apidocs/classes/BaseBrush.md#needsfullrender)

#### Defined in

[src/brushes/PencilBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L53)

___

### onMouseDown

**onMouseDown**(`pointer`, `«destructured»`): `void`

Invoked on mouse down

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |
| `«destructured»` | [`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`void`

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[onMouseDown](/apidocs/classes/BaseBrush.md#onmousedown)

#### Defined in

[src/brushes/PencilBrush.ts:67](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L67)

___

### onMouseMove

**onMouseMove**(`pointer`, `«destructured»`): `void`

Invoked on mouse move

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |
| `«destructured»` | [`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`void`

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[onMouseMove](/apidocs/classes/BaseBrush.md#onmousemove)

#### Defined in

[src/brushes/PencilBrush.ts:83](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L83)

___

### onMouseUp

**onMouseUp**(`«destructured»`): `boolean`

Invoked on mouse up

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`boolean`

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[onMouseUp](/apidocs/classes/BaseBrush.md#onmouseup)

#### Defined in

[src/brushes/PencilBrush.ts:121](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L121)

___

### drawSegment

**drawSegment**(`ctx`, `p1`, `p2`): [`Point`](/apidocs/classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `p1` | [`Point`](/apidocs/classes/Point.md) |
| `p2` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/brushes/PencilBrush.ts:57](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/PencilBrush.ts#L57)
