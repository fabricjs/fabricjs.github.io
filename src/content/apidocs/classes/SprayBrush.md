# Class: SprayBrush

**`See`**

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Hierarchy

- [`BaseBrush`](BaseBrush.md)

  ↳ **`SprayBrush`**

## Table of contents

### Constructors

- [constructor](SprayBrush.md#constructor)

### Properties

- [canvas](SprayBrush.md#canvas)
- [color](SprayBrush.md#color)
- [density](SprayBrush.md#density)
- [dotWidth](SprayBrush.md#dotwidth)
- [dotWidthVariance](SprayBrush.md#dotwidthvariance)
- [limitedToCanvasSize](SprayBrush.md#limitedtocanvassize)
- [optimizeOverlapping](SprayBrush.md#optimizeoverlapping)
- [randomOpacity](SprayBrush.md#randomopacity)
- [shadow](SprayBrush.md#shadow)
- [sprayChunk](SprayBrush.md#spraychunk)
- [sprayChunks](SprayBrush.md#spraychunks)
- [strokeDashArray](SprayBrush.md#strokedasharray)
- [strokeLineCap](SprayBrush.md#strokelinecap)
- [strokeLineJoin](SprayBrush.md#strokelinejoin)
- [strokeMiterLimit](SprayBrush.md#strokemiterlimit)
- [width](SprayBrush.md#width)

### Methods

- [\_isOutSideCanvas](SprayBrush.md#_isoutsidecanvas)
- [\_render](SprayBrush.md#_render)
- [\_resetShadow](SprayBrush.md#_resetshadow)
- [\_saveAndTransform](SprayBrush.md#_saveandtransform)
- [\_setBrushStyles](SprayBrush.md#_setbrushstyles)
- [\_setShadow](SprayBrush.md#_setshadow)
- [addSprayChunk](SprayBrush.md#addspraychunk)
- [needsFullRender](SprayBrush.md#needsfullrender)
- [onMouseDown](SprayBrush.md#onmousedown)
- [onMouseMove](SprayBrush.md#onmousemove)
- [onMouseUp](SprayBrush.md#onmouseup)
- [renderChunck](SprayBrush.md#renderchunck)

## Constructors

### constructor

• **new SprayBrush**(`canvas`)

Constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`Canvas`](Canvas.md) |

#### Overrides

[BaseBrush](BaseBrush.md).[constructor](BaseBrush.md#constructor)

#### Defined in

[src/brushes/SprayBrush.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L83)

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

### density

• **density**: `number` = `20`

Density of a spray (number of dots per chunk)

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:44](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L44)

___

### dotWidth

• **dotWidth**: `number` = `1`

Width of spray dots

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L51)

___

### dotWidthVariance

• **dotWidthVariance**: `number` = `1`

Width variance of spray dots

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L58)

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

### optimizeOverlapping

• **optimizeOverlapping**: `boolean` = `true`

Whether overlapping dots (rectangles) should be removed (for performance reasons)

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L72)

___

### randomOpacity

• **randomOpacity**: `boolean` = `false`

Whether opacity of a dot should be random

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L65)

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

### sprayChunk

• `Private` **sprayChunk**: [`SprayBrushPoint`](../modules.md#spraybrushpoint)[]

#### Defined in

[src/brushes/SprayBrush.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L76)

___

### sprayChunks

• `Private` **sprayChunks**: [`SprayBrushPoint`](../modules.md#spraybrushpoint)[][]

#### Defined in

[src/brushes/SprayBrush.ts:74](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L74)

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

Width of a spray

**`Default`**

```ts

```

#### Overrides

[BaseBrush](BaseBrush.md).[width](BaseBrush.md#width)

#### Defined in

[src/brushes/SprayBrush.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L37)

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

▸ **_render**(): `void`

Render all spray chunks

#### Returns

`void`

#### Overrides

[BaseBrush](BaseBrush.md).[_render](BaseBrush.md#_render)

#### Defined in

[src/brushes/SprayBrush.ts:178](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L178)

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

### addSprayChunk

▸ **addSprayChunk**(`pointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |

#### Returns

`void`

#### Defined in

[src/brushes/SprayBrush.ts:193](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L193)

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

[src/brushes/SprayBrush.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L93)

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

[src/brushes/SprayBrush.ts:106](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L106)

___

### onMouseUp

▸ **onMouseUp**(): `void`

Invoked on mouse up

#### Returns

`void`

#### Overrides

[BaseBrush](BaseBrush.md).[onMouseUp](BaseBrush.md#onmouseup)

#### Defined in

[src/brushes/SprayBrush.ts:117](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L117)

___

### renderChunck

▸ **renderChunck**(`sprayChunck`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sprayChunck` | [`SprayBrushPoint`](../modules.md#spraybrushpoint)[] |

#### Returns

`void`

#### Defined in

[src/brushes/SprayBrush.ts:160](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/SprayBrush.ts#L160)
