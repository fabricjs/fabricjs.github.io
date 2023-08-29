# Class: PatternBrush

**`See`**

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Hierarchy

- [`PencilBrush`](PencilBrush.md)

  ↳ **`PatternBrush`**

## Table of contents

### Constructors

- [constructor](PatternBrush.md#constructor)

### Properties

- [canvas](PatternBrush.md#canvas)
- [color](PatternBrush.md#color)
- [decimate](PatternBrush.md#decimate)
- [drawStraightLine](PatternBrush.md#drawstraightline)
- [limitedToCanvasSize](PatternBrush.md#limitedtocanvassize)
- [shadow](PatternBrush.md#shadow)
- [source](PatternBrush.md#source)
- [straightLineKey](PatternBrush.md#straightlinekey)
- [strokeDashArray](PatternBrush.md#strokedasharray)
- [strokeLineCap](PatternBrush.md#strokelinecap)
- [strokeLineJoin](PatternBrush.md#strokelinejoin)
- [strokeMiterLimit](PatternBrush.md#strokemiterlimit)
- [width](PatternBrush.md#width)

### Methods

- [\_addPoint](PatternBrush.md#_addpoint)
- [\_finalizeAndAddPath](PatternBrush.md#_finalizeandaddpath)
- [\_isOutSideCanvas](PatternBrush.md#_isoutsidecanvas)
- [\_prepareForDrawing](PatternBrush.md#_preparefordrawing)
- [\_render](PatternBrush.md#_render)
- [\_reset](PatternBrush.md#_reset)
- [\_resetShadow](PatternBrush.md#_resetshadow)
- [\_saveAndTransform](PatternBrush.md#_saveandtransform)
- [\_setBrushStyles](PatternBrush.md#_setbrushstyles)
- [\_setShadow](PatternBrush.md#_setshadow)
- [convertPointsToSVGPath](PatternBrush.md#convertpointstosvgpath)
- [createPath](PatternBrush.md#createpath)
- [decimatePoints](PatternBrush.md#decimatepoints)
- [getPattern](PatternBrush.md#getpattern)
- [getPatternSrc](PatternBrush.md#getpatternsrc)
- [needsFullRender](PatternBrush.md#needsfullrender)
- [onMouseDown](PatternBrush.md#onmousedown)
- [onMouseMove](PatternBrush.md#onmousemove)
- [onMouseUp](PatternBrush.md#onmouseup)
- [drawSegment](PatternBrush.md#drawsegment)

## Constructors

### constructor

• **new PatternBrush**(`canvas`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`Canvas`](Canvas.md) |

#### Overrides

[PencilBrush](PencilBrush.md).[constructor](PencilBrush.md#constructor)

#### Defined in

[src/brushes/PatternBrush.ts:10](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PatternBrush.ts#L10)

## Properties

### canvas

• **canvas**: [`Canvas`](Canvas.md)

**`Todo`**

add type

#### Inherited from

[PencilBrush](PencilBrush.md).[canvas](PencilBrush.md#canvas)

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

[PencilBrush](PencilBrush.md).[color](PencilBrush.md#color)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[decimate](PencilBrush.md#decimate)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[drawStraightLine](PencilBrush.md#drawstraightline)

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

[PencilBrush](PencilBrush.md).[limitedToCanvasSize](PencilBrush.md#limitedtocanvassize)

#### Defined in

[src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L68)

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

[PencilBrush](PencilBrush.md).[shadow](PencilBrush.md#shadow)

#### Defined in

[src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L32)

___

### source

• `Optional` **source**: `CanvasImageSource`

#### Defined in

[src/brushes/PatternBrush.ts:8](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PatternBrush.ts#L8)

___

### straightLineKey

• **straightLineKey**: `undefined` \| ``null`` \| ``"altKey"`` \| ``"shiftKey"`` \| ``"ctrlKey"`` \| ``"metaKey"`` = `'shiftKey'`

The event modifier key that makes the brush draw a straight line.
If `null` or 'none' or any other string that is not a modifier key the feature is disabled.

#### Inherited from

[PencilBrush](PencilBrush.md).[straightLineKey](PencilBrush.md#straightlinekey)

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

[PencilBrush](PencilBrush.md).[strokeDashArray](PencilBrush.md#strokedasharray)

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

[PencilBrush](PencilBrush.md).[strokeLineCap](PencilBrush.md#strokelinecap)

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

[PencilBrush](PencilBrush.md).[strokeLineJoin](PencilBrush.md#strokelinejoin)

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

[PencilBrush](PencilBrush.md).[strokeMiterLimit](PencilBrush.md#strokemiterlimit)

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

[PencilBrush](PencilBrush.md).[width](PencilBrush.md#width)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[_addPoint](PencilBrush.md#_addpoint)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[_finalizeAndAddPath](PencilBrush.md#_finalizeandaddpath)

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

[PencilBrush](PencilBrush.md).[_isOutSideCanvas](PencilBrush.md#_isoutsidecanvas)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[_prepareForDrawing](PencilBrush.md#_preparefordrawing)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[_render](PencilBrush.md#_render)

#### Defined in

[src/brushes/PencilBrush.ts:176](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L176)

___

### \_reset

▸ `Private` **_reset**(): `void`

Clear points array and set contextTop canvas style.

#### Returns

`void`

#### Inherited from

[PencilBrush](PencilBrush.md).[_reset](PencilBrush.md#_reset)

#### Defined in

[src/brushes/PencilBrush.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L164)

___

### \_resetShadow

▸ `Private` **_resetShadow**(): `void`

Removes brush shadow styles

#### Returns

`void`

#### Inherited from

[PencilBrush](PencilBrush.md).[_resetShadow](PencilBrush.md#_resetshadow)

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

[PencilBrush](PencilBrush.md).[_saveAndTransform](PencilBrush.md#_saveandtransform)

#### Defined in

[src/brushes/BaseBrush.ts:106](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L106)

___

### \_setBrushStyles

▸ **_setBrushStyles**(`ctx`): `void`

Sets brush styles

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Overrides

[PencilBrush](PencilBrush.md).[_setBrushStyles](PencilBrush.md#_setbrushstyles)

#### Defined in

[src/brushes/PatternBrush.ts:50](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PatternBrush.ts#L50)

___

### \_setShadow

▸ `Private` **_setShadow**(): `void`

Sets brush shadow styles

#### Returns

`void`

#### Inherited from

[PencilBrush](PencilBrush.md).[_setShadow](PencilBrush.md#_setshadow)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[convertPointsToSVGPath](PencilBrush.md#convertpointstosvgpath)

#### Defined in

[src/brushes/PencilBrush.ts:212](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L212)

___

### createPath

▸ **createPath**(`pathData`): [`Path`](Path.md)<`Partial`<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Creates path

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathData` | [`TSimplePathData`](../modules/util.md#tsimplepathdata) |

#### Returns

[`Path`](Path.md)<`Partial`<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Overrides

[PencilBrush](PencilBrush.md).[createPath](PencilBrush.md#createpath)

#### Defined in

[src/brushes/PatternBrush.ts:59](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PatternBrush.ts#L59)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[decimatePoints](PencilBrush.md#decimatepoints)

#### Defined in

[src/brushes/PencilBrush.ts:243](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L243)

___

### getPattern

▸ **getPattern**(`ctx`): ``null`` \| `CanvasPattern`

Creates "pattern" instance property

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

``null`` \| `CanvasPattern`

#### Defined in

[src/brushes/PatternBrush.ts:42](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PatternBrush.ts#L42)

___

### getPatternSrc

▸ **getPatternSrc**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/brushes/PatternBrush.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PatternBrush.ts#L14)

___

### needsFullRender

▸ **needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[PencilBrush](PencilBrush.md).[needsFullRender](PencilBrush.md#needsfullrender)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[onMouseDown](PencilBrush.md#onmousedown)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[onMouseMove](PencilBrush.md#onmousemove)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[onMouseUp](PencilBrush.md#onmouseup)

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

#### Inherited from

[PencilBrush](PencilBrush.md).[drawSegment](PencilBrush.md#drawsegment)

#### Defined in

[src/brushes/PencilBrush.ts:57](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/PencilBrush.ts#L57)
