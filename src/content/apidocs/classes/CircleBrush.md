# Class: CircleBrush

**`See`**

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Hierarchy

- [`BaseBrush`](BaseBrush.md)

  ↳ **`CircleBrush`**

## Table of contents

### Constructors

- [constructor](CircleBrush.md#constructor)

### Properties

- [canvas](CircleBrush.md#canvas)
- [color](CircleBrush.md#color)
- [limitedToCanvasSize](CircleBrush.md#limitedtocanvassize)
- [points](CircleBrush.md#points)
- [shadow](CircleBrush.md#shadow)
- [strokeDashArray](CircleBrush.md#strokedasharray)
- [strokeLineCap](CircleBrush.md#strokelinecap)
- [strokeLineJoin](CircleBrush.md#strokelinejoin)
- [strokeMiterLimit](CircleBrush.md#strokemiterlimit)
- [width](CircleBrush.md#width)

### Methods

- [\_isOutSideCanvas](CircleBrush.md#_isoutsidecanvas)
- [\_render](CircleBrush.md#_render)
- [\_resetShadow](CircleBrush.md#_resetshadow)
- [\_saveAndTransform](CircleBrush.md#_saveandtransform)
- [\_setBrushStyles](CircleBrush.md#_setbrushstyles)
- [\_setShadow](CircleBrush.md#_setshadow)
- [addPoint](CircleBrush.md#addpoint)
- [dot](CircleBrush.md#dot)
- [drawDot](CircleBrush.md#drawdot)
- [needsFullRender](CircleBrush.md#needsfullrender)
- [onMouseDown](CircleBrush.md#onmousedown)
- [onMouseMove](CircleBrush.md#onmousemove)
- [onMouseUp](CircleBrush.md#onmouseup)

## Constructors

### constructor

• **new CircleBrush**(`canvas`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`Canvas`](Canvas.md) |

#### Overrides

[BaseBrush](BaseBrush.md).[constructor](BaseBrush.md#constructor)

#### Defined in

[src/brushes/CircleBrush.ts:22](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L22)

## Properties

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

### points

• **points**: [`CircleBrushPoint`](../modules.md#circlebrushpoint)[]

#### Defined in

[src/brushes/CircleBrush.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L20)

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

• **width**: `number` = `10`

Width of a brush

**`Default`**

```ts

```

#### Overrides

[BaseBrush](BaseBrush.md).[width](BaseBrush.md#width)

#### Defined in

[src/brushes/CircleBrush.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L18)

## Methods

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

### \_render

▸ `Private` **_render**(): `void`

Render the full state of the brush

#### Returns

`void`

#### Overrides

[BaseBrush](BaseBrush.md).[_render](BaseBrush.md#_render)

#### Defined in

[src/brushes/CircleBrush.ts:61](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L61)

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

### addPoint

▸ **addPoint**(`pointer`): [`CircleBrushPoint`](../modules.md#circlebrushpoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |

#### Returns

[`CircleBrushPoint`](../modules.md#circlebrushpoint)

Just added pointer point

#### Defined in

[src/brushes/CircleBrush.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L128)

___

### dot

▸ **dot**(`ctx`, `point`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `point` | [`CircleBrushPoint`](../modules.md#circlebrushpoint) |

#### Returns

`void`

#### Defined in

[src/brushes/CircleBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L39)

___

### drawDot

▸ **drawDot**(`pointer`): `void`

Invoked inside on mouse down and mouse move

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |

#### Returns

`void`

#### Defined in

[src/brushes/CircleBrush.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L31)

___

### needsFullRender

▸ `Protected` **needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseBrush](BaseBrush.md).[needsFullRender](BaseBrush.md#needsfullrender)

#### Defined in

[src/brushes/BaseBrush.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L112)

___

### onMouseDown

▸ **onMouseDown**(`pointer`): `void`

Invoked on mouse down

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |

#### Returns

`void`

#### Overrides

[BaseBrush](BaseBrush.md).[onMouseDown](BaseBrush.md#onmousedown)

#### Defined in

[src/brushes/CircleBrush.ts:50](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L50)

___

### onMouseMove

▸ **onMouseMove**(`pointer`): `void`

Invoked on mouse move

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |

#### Returns

`void`

#### Overrides

[BaseBrush](BaseBrush.md).[onMouseMove](BaseBrush.md#onmousemove)

#### Defined in

[src/brushes/CircleBrush.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L75)

___

### onMouseUp

▸ **onMouseUp**(): `void`

Invoked on mouse up

#### Returns

`void`

#### Overrides

[BaseBrush](BaseBrush.md).[onMouseUp](BaseBrush.md#onmouseup)

#### Defined in

[src/brushes/CircleBrush.ts:91](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/CircleBrush.ts#L91)
