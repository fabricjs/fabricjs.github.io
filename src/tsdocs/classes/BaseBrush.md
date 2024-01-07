# Class: BaseBrush

**`See`**

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Hierarchy

- **`BaseBrush`**

  ↳ [`PencilBrush`](/apidocs/classes/PencilBrush.md)

  ↳ [`CircleBrush`](/apidocs/classes/CircleBrush.md)

  ↳ [`SprayBrush`](/apidocs/classes/SprayBrush.md)

## Constructors

### constructor

**new BaseBrush**(`canvas`): [`BaseBrush`](/apidocs/classes/BaseBrush.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`Canvas`](/apidocs/classes/Canvas.md) |

#### Returns

[`BaseBrush`](/apidocs/classes/BaseBrush.md)

#### Defined in

[src/brushes/BaseBrush.ts:75](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L75)

## Properties

### canvas

 **canvas**: [`Canvas`](/apidocs/classes/Canvas.md)

**`Todo`**

add type

#### Defined in

[src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L73)

___

### color

 **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:16](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L16)

___

### limitedToCanvasSize

 **limitedToCanvasSize**: `boolean` = `false`

When `true`, the free drawing is limited to the whiteboard size. Default to false.

**`Default`**

```ts
false
```

#### Defined in

[src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L68)

___

### shadow

 **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md) = `null`

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L32)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[] = `null`

Stroke Dash Array.

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L60)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L39)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L46)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L53)

___

### width

 **width**: `number` = `1`

Width of a brush, has to be a Number, no string literals

**`Default`**

```ts

```

#### Defined in

[src/brushes/BaseBrush.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L23)

## Methods

### \_isOutSideCanvas

**_isOutSideCanvas**(`pointer`): `boolean`

Check is pointer is outside canvas boundaries

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`boolean`

#### Defined in

[src/brushes/BaseBrush.ts:153](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L153)

___

### \_render

**_render**(): `void`

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:79](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L79)

___

### \_resetShadow

**_resetShadow**(): `void`

Removes brush shadow styles

#### Returns

`void`

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

#### Defined in

[src/brushes/BaseBrush.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L92)

___

### \_setShadow

**_setShadow**(): `void`

Sets brush shadow styles

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:121](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L121)

___

### needsFullRender

**needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/brushes/BaseBrush.ts:112](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L112)

___

### onMouseDown

**onMouseDown**(`pointer`, `ev`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |
| `ev` | [`TBrushEventData`](/apidocs/modules.md#tbrusheventdata) |

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:80](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L80)

___

### onMouseMove

**onMouseMove**(`pointer`, `ev`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |
| `ev` | [`TBrushEventData`](/apidocs/modules.md#tbrusheventdata) |

#### Returns

`void`

#### Defined in

[src/brushes/BaseBrush.ts:81](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L81)

___

### onMouseUp

**onMouseUp**(`ev`): `boolean` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | [`TBrushEventData`](/apidocs/modules.md#tbrusheventdata) |

#### Returns

`boolean` \| `void`

true if brush should continue blocking interaction

#### Defined in

[src/brushes/BaseBrush.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L85)
