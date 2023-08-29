# Class: PencilBrush

**`See`**

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Hierarchy

- [`BaseBrush`](BaseBrush.md)

  ↳ **`PencilBrush`**

  ↳↳ [`PatternBrush`](PatternBrush.md)

## Table of contents

### Constructors

- [constructor](PencilBrush.md#constructor)

### Properties

- [\_hasStraightLine](PencilBrush.md#_hasstraightline)
- [\_points](PencilBrush.md#_points)
- [canvas](PencilBrush.md#canvas)
- [color](PencilBrush.md#color)
- [decimate](PencilBrush.md#decimate)
- [drawStraightLine](PencilBrush.md#drawstraightline)
- [limitedToCanvasSize](PencilBrush.md#limitedtocanvassize)
- [oldEnd](PencilBrush.md#oldend)
- [shadow](PencilBrush.md#shadow)
- [straightLineKey](PencilBrush.md#straightlinekey)
- [strokeDashArray](PencilBrush.md#strokedasharray)
- [strokeLineCap](PencilBrush.md#strokelinecap)
- [strokeLineJoin](PencilBrush.md#strokelinejoin)
- [strokeMiterLimit](PencilBrush.md#strokemiterlimit)
- [width](PencilBrush.md#width)

### Methods

- [\_addPoint](PencilBrush.md#_addpoint)
- [\_finalizeAndAddPath](PencilBrush.md#_finalizeandaddpath)
- [\_isOutSideCanvas](PencilBrush.md#_isoutsidecanvas)
- [\_prepareForDrawing](PencilBrush.md#_preparefordrawing)
- [\_render](PencilBrush.md#_render)
- [\_reset](PencilBrush.md#_reset)
- [\_resetShadow](PencilBrush.md#_resetshadow)
- [\_saveAndTransform](PencilBrush.md#_saveandtransform)
- [\_setBrushStyles](PencilBrush.md#_setbrushstyles)
- [\_setShadow](PencilBrush.md#_setshadow)
- [convertPointsToSVGPath](PencilBrush.md#convertpointstosvgpath)
- [createPath](PencilBrush.md#createpath)
- [decimatePoints](PencilBrush.md#decimatepoints)
- [needsFullRender](PencilBrush.md#needsfullrender)
- [onMouseDown](PencilBrush.md#onmousedown)
- [onMouseMove](PencilBrush.md#onmousemove)
- [onMouseUp](PencilBrush.md#onmouseup)
- [drawSegment](PencilBrush.md#drawsegment)

## Constructors

### constructor

• **new PencilBrush**(`canvas`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`Canvas`](Canvas.md) |

#### Overrides

[BaseBrush](BaseBrush.md).[constructor](BaseBrush.md#constructor)

#### Defined in

[src/brushes/PencilBrush.ts:47](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L47)

## Properties

### \_hasStraightLine

• `Private` **\_hasStraightLine**: `boolean`

#### Defined in

[src/brushes/PencilBrush.ts:44](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L44)

___

### \_points

• `Private` **\_points**: [`Point`](Point.md)[]

#### Defined in

[src/brushes/PencilBrush.ts:43](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L43)

___

### canvas

• **canvas**: [`Canvas`](Canvas.md)

**`Todo`**

add type

#### Inherited from

[BaseBrush](BaseBrush.md).[canvas](BaseBrush.md#canvas)

#### Defined in

[src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L73)

___

### color

• **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](BaseBrush.md).[color](BaseBrush.md#color)

#### Defined in

[src/brushes/BaseBrush.ts:16](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L16)

___

### decimate

• **decimate**: `number` = `0.4`

Discard points that are less than `decimate` pixel distant from each other

**`Default`**

```ts
0.4
```

#### Defined in

[src/brushes/PencilBrush.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L25)

___

### drawStraightLine

• **drawStraightLine**: `boolean` = `false`

Draws a straight line between last recorded point to current pointer
Used for `shift` functionality

**`Default`**

```ts
false
```

#### Defined in

[src/brushes/PencilBrush.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L34)

___

### limitedToCanvasSize

• **limitedToCanvasSize**: `boolean` = `false`

When `true`, the free drawing is limited to the whiteboard size. Default to false.

**`Default`**

```ts
false
```

#### Inherited from

[BaseBrush](BaseBrush.md).[limitedToCanvasSize](BaseBrush.md#limitedtocanvassize)

#### Defined in

[src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L68)

___

### oldEnd

• `Private` `Optional` **oldEnd**: [`Point`](Point.md)

#### Defined in

[src/brushes/PencilBrush.ts:45](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L45)

___

### shadow

• **shadow**: ``null`` \| [`Shadow`](Shadow.md) = `null`

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](BaseBrush.md).[shadow](BaseBrush.md#shadow)

#### Defined in

[src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L32)

___

### straightLineKey

• **straightLineKey**: `undefined` \| ``null`` \| ``"altKey"`` \| ``"shiftKey"`` \| ``"ctrlKey"`` \| ``"metaKey"`` = `'shiftKey'`

The event modifier key that makes the brush draw a straight line.
If `null` or 'none' or any other string that is not a modifier key the feature is disabled.

#### Defined in

[src/brushes/PencilBrush.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L41)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[] = `null`

Stroke Dash Array.

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](BaseBrush.md).[strokeDashArray](BaseBrush.md#strokedasharray)

#### Defined in

[src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L60)

___

### strokeLineCap

• **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](BaseBrush.md).[strokeLineCap](BaseBrush.md#strokelinecap)

#### Defined in

[src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L39)

___

### strokeLineJoin

• **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](BaseBrush.md).[strokeLineJoin](BaseBrush.md#strokelinejoin)

#### Defined in

[src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L46)

___

### strokeMiterLimit

• **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](BaseBrush.md).[strokeMiterLimit](BaseBrush.md#strokemiterlimit)

#### Defined in

[src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L53)

___

### width

• **width**: `number` = `1`

Width of a brush, has to be a Number, no string literals

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](BaseBrush.md).[width](BaseBrush.md#width)

#### Defined in

[src/brushes/BaseBrush.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L23)

## Methods

### \_addPoint

▸ `Private` **_addPoint**(`point`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | Point to be added to points array |

#### Returns

`boolean`

#### Defined in

[src/brushes/PencilBrush.ts:145](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L145)

___

### \_finalizeAndAddPath

▸ **_finalizeAndAddPath**(): `void`

On mouseup after drawing the path on contextTop canvas
we use the points captured to create an new Path object
and add it to the canvas.

#### Returns

`void`

#### Defined in

[src/brushes/PencilBrush.ts:273](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L273)

___

### \_isOutSideCanvas

▸ `Private` **_isOutSideCanvas**(`pointer`): `boolean`

Check is pointer is outside canvas boundaries

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |

#### Returns

`boolean`

#### Inherited from

[BaseBrush](BaseBrush.md).[_isOutSideCanvas](BaseBrush.md#_isoutsidecanvas)

#### Defined in

[src/brushes/BaseBrush.ts:153](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L153)

___

### \_prepareForDrawing

▸ `Private` **_prepareForDrawing**(`pointer`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointer` | [`Point`](Point.md) | Actual mouse position related to the canvas. |

#### Returns

`void`

#### Defined in

[src/brushes/PencilBrush.ts:135](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L135)

___

### \_render

▸ `Private` **_render**(`ctx?`): `void`

Draw a smooth path on the topCanvas using quadraticCurveTo

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx?` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Overrides

[BaseBrush](BaseBrush.md).[_render](BaseBrush.md#_render)

#### Defined in

[src/brushes/PencilBrush.ts:176](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L176)

___

### \_reset

▸ `Private` **_reset**(): `void`

Clear points array and set contextTop canvas style.

#### Returns

`void`

#### Defined in

[src/brushes/PencilBrush.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L164)

___

### \_resetShadow

▸ `Private` **_resetShadow**(): `void`

Removes brush shadow styles

#### Returns

`void`

#### Inherited from

[BaseBrush](BaseBrush.md).[_resetShadow](BaseBrush.md#_resetshadow)

#### Defined in

[src/brushes/BaseBrush.ts:141](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L141)

___

### \_saveAndTransform

▸ `Private` **_saveAndTransform**(`ctx`): `void`

Sets the transformation on given context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | context to render on |

#### Returns

`void`

#### Inherited from

[BaseBrush](BaseBrush.md).[_saveAndTransform](BaseBrush.md#_saveandtransform)

#### Defined in

[src/brushes/BaseBrush.ts:106](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L106)

___

### \_setBrushStyles

▸ `Private` **_setBrushStyles**(`ctx`): `void`

Sets brush styles

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Inherited from

[BaseBrush](BaseBrush.md).[_setBrushStyles](BaseBrush.md#_setbrushstyles)

#### Defined in

[src/brushes/BaseBrush.ts:92](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L92)

___

### \_setShadow

▸ `Private` **_setShadow**(): `void`

Sets brush shadow styles

#### Returns

`void`

#### Inherited from

[BaseBrush](BaseBrush.md).[_setShadow](BaseBrush.md#_setshadow)

#### Defined in

[src/brushes/BaseBrush.ts:121](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L121)

___

### convertPointsToSVGPath

▸ **convertPointsToSVGPath**(`points`): [`TSimplePathData`](../modules/util.md#tsimplepathdata)

Converts points to SVG path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | [`Point`](Point.md)[] | Array of points |

#### Returns

[`TSimplePathData`](../modules/util.md#tsimplepathdata)

SVG path commands

#### Defined in

[src/brushes/PencilBrush.ts:212](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L212)

___

### createPath

▸ **createPath**(`pathData`): [`Path`](Path.md)<`Partial`<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Creates a Path object to add on canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathData` | [`TSimplePathData`](../modules/util.md#tsimplepathdata) | Path data |

#### Returns

[`Path`](Path.md)<`Partial`<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Path to add on canvas

#### Defined in

[src/brushes/PencilBrush.ts:222](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L222)

___

### decimatePoints

▸ **decimatePoints**(`points`, `distance`): [`Point`](Point.md)[]

Decimate points array with the decimate value

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Point`](Point.md)[] |
| `distance` | `number` |

#### Returns

[`Point`](Point.md)[]

#### Defined in

[src/brushes/PencilBrush.ts:243](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L243)

___

### needsFullRender

▸ **needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Overrides

[BaseBrush](BaseBrush.md).[needsFullRender](BaseBrush.md#needsfullrender)

#### Defined in

[src/brushes/PencilBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L53)

___

### onMouseDown

▸ **onMouseDown**(`pointer`, `«destructured»`): `void`

Invoked on mouse down

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |
| `«destructured»` | [`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`void`

#### Overrides

[BaseBrush](BaseBrush.md).[onMouseDown](BaseBrush.md#onmousedown)

#### Defined in

[src/brushes/PencilBrush.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L67)

___

### onMouseMove

▸ **onMouseMove**(`pointer`, `«destructured»`): `void`

Invoked on mouse move

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |
| `«destructured»` | [`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`void`

#### Overrides

[BaseBrush](BaseBrush.md).[onMouseMove](BaseBrush.md#onmousemove)

#### Defined in

[src/brushes/PencilBrush.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L83)

___

### onMouseUp

▸ **onMouseUp**(`«destructured»`): `boolean`

Invoked on mouse up

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`boolean`

#### Overrides

[BaseBrush](BaseBrush.md).[onMouseUp](BaseBrush.md#onmouseup)

#### Defined in

[src/brushes/PencilBrush.ts:121](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L121)

___

### drawSegment

▸ `Static` **drawSegment**(`ctx`, `p1`, `p2`): [`Point`](Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `p1` | [`Point`](Point.md) |
| `p2` | [`Point`](Point.md) |

#### Returns

[`Point`](Point.md)

#### Defined in

[src/brushes/PencilBrush.ts:57](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L57)
