# Class: BaseBrush

**`See`**

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Hierarchy

- **`BaseBrush`**

  ↳ [`PencilBrush`](PencilBrush.md)

  ↳ [`CircleBrush`](CircleBrush.md)

  ↳ [`SprayBrush`](SprayBrush.md)

## Table of contents

### Constructors

- [constructor](BaseBrush.md#constructor)

### Properties

- [canvas](BaseBrush.md#canvas)
- [color](BaseBrush.md#color)
- [limitedToCanvasSize](BaseBrush.md#limitedtocanvassize)
- [shadow](BaseBrush.md#shadow)
- [strokeDashArray](BaseBrush.md#strokedasharray)
- [strokeLineCap](BaseBrush.md#strokelinecap)
- [strokeLineJoin](BaseBrush.md#strokelinejoin)
- [strokeMiterLimit](BaseBrush.md#strokemiterlimit)
- [width](BaseBrush.md#width)

### Methods

- [\_isOutSideCanvas](BaseBrush.md#_isoutsidecanvas)
- [\_render](BaseBrush.md#_render)
- [\_resetShadow](BaseBrush.md#_resetshadow)
- [\_saveAndTransform](BaseBrush.md#_saveandtransform)
- [\_setBrushStyles](BaseBrush.md#_setbrushstyles)
- [\_setShadow](BaseBrush.md#_setshadow)
- [needsFullRender](BaseBrush.md#needsfullrender)
- [onMouseDown](BaseBrush.md#onmousedown)
- [onMouseMove](BaseBrush.md#onmousemove)
- [onMouseUp](BaseBrush.md#onmouseup)

## Constructors

### constructor

• **new BaseBrush**(`canvas`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`Canvas`](Canvas.md) |

#### Defined in

[src/brushes/BaseBrush.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L75)

## Properties

### canvas

• **canvas**: [`Canvas`](Canvas.md)

**`Todo`**

add type

#### Defined in

[src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L73)

___

### color

• **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

**`Default`**

```ts

```

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

#### Defined in

[src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L32)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[] = `null`

Stroke Dash Array.

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L60)

___

### strokeLineCap

• **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L39)

___

### strokeLineJoin

• **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L46)

___

### strokeMiterLimit

• **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L53)

___

### width

• **width**: `number` = `1`

Width of a brush, has to be a Number, no string literals

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L23)

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

#### Defined in

[src/brushes/BaseBrush.ts:153](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L153)

___

### \_render

▸ `Abstract` **_render**(): `void`

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:79](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L79)

___

### \_resetShadow

▸ `Private` **_resetShadow**(): `void`

Removes brush shadow styles

#### Returns

`void`

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

#### Defined in

[src/brushes/BaseBrush.ts:92](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L92)

___

### \_setShadow

▸ `Private` **_setShadow**(): `void`

Sets brush shadow styles

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:121](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L121)

___

### needsFullRender

▸ `Protected` **needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/brushes/BaseBrush.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L112)

___

### onMouseDown

▸ `Abstract` **onMouseDown**(`pointer`, `ev`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |
| `ev` | [`TBrushEventData`](../modules.md#tbrusheventdata) |

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:80](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L80)

___

### onMouseMove

▸ `Abstract` **onMouseMove**(`pointer`, `ev`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](Point.md) |
| `ev` | [`TBrushEventData`](../modules.md#tbrusheventdata) |

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L81)

___

### onMouseUp

▸ `Abstract` **onMouseUp**(`ev`): `boolean` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | [`TBrushEventData`](../modules.md#tbrusheventdata) |

#### Returns

`boolean` \| `void`

true if brush should continue blocking interaction

#### Defined in

[src/brushes/BaseBrush.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/brushes/BaseBrush.ts#L85)
