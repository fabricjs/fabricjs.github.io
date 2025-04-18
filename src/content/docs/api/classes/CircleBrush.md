---
editUrl: false
next: false
prev: false
title: "CircleBrush"
---

Defined in: [src/brushes/CircleBrush.ts:12](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L12)

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`BaseBrush`](/api/classes/basebrush/)

## Constructors

### Constructor

> **new CircleBrush**(`canvas`): `CircleBrush`

Defined in: [src/brushes/CircleBrush.ts:22](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L22)

#### Parameters

##### canvas

[`Canvas`](/api/classes/canvas/)

#### Returns

`CircleBrush`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`constructor`](/api/classes/basebrush/#constructor)

## Properties

### canvas

> **canvas**: [`Canvas`](/api/classes/canvas/)

Defined in: [src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L73)

#### Todo

add type

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`canvas`](/api/classes/basebrush/#canvas)

***

### color

> **color**: `string` = `'rgb(0, 0, 0)'`

Defined in: [src/brushes/BaseBrush.ts:16](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L16)

Color of a brush

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`color`](/api/classes/basebrush/#color)

***

### limitedToCanvasSize

> **limitedToCanvasSize**: `boolean` = `false`

Defined in: [src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L68)

When `true`, the free drawing is limited to the whiteboard size. Default to false.

#### Default

```ts
false
```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`limitedToCanvasSize`](/api/classes/basebrush/#limitedtocanvassize)

***

### points

> **points**: [`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)[]

Defined in: [src/brushes/CircleBrush.ts:20](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L20)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/) = `null`

Defined in: [src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L32)

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`shadow`](/api/classes/basebrush/#shadow)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[] = `null`

Defined in: [src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L60)

Stroke Dash Array.

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeDashArray`](/api/classes/basebrush/#strokedasharray)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap` = `'round'`

Defined in: [src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L39)

Line endings style of a brush (one of "butt", "round", "square")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeLineCap`](/api/classes/basebrush/#strokelinecap)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Defined in: [src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L46)

Corner style of a brush (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeLineJoin`](/api/classes/basebrush/#strokelinejoin)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number` = `10`

Defined in: [src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L53)

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeMiterLimit`](/api/classes/basebrush/#strokemiterlimit)

***

### width

> **width**: `number` = `10`

Defined in: [src/brushes/CircleBrush.ts:18](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L18)

Width of a brush

#### Default

```ts

```

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`width`](/api/classes/basebrush/#width)

## Methods

### addPoint()

> **addPoint**(`pointer`): [`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)

Defined in: [src/brushes/CircleBrush.ts:128](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L128)

#### Parameters

##### pointer

[`Point`](/api/classes/point/)

#### Returns

[`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)

Just added pointer point

***

### dot()

> **dot**(`ctx`, `point`): `void`

Defined in: [src/brushes/CircleBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L39)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### point

[`CircleBrushPoint`](/api/type-aliases/circlebrushpoint/)

#### Returns

`void`

***

### drawDot()

> **drawDot**(`pointer`): `void`

Defined in: [src/brushes/CircleBrush.ts:31](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L31)

Invoked inside on mouse down and mouse move

#### Parameters

##### pointer

[`Point`](/api/classes/point/)

#### Returns

`void`

***

### onMouseDown()

> **onMouseDown**(`pointer`): `void`

Defined in: [src/brushes/CircleBrush.ts:50](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L50)

Invoked on mouse down

#### Parameters

##### pointer

[`Point`](/api/classes/point/)

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseDown`](/api/classes/basebrush/#onmousedown)

***

### onMouseMove()

> **onMouseMove**(`pointer`): `void`

Defined in: [src/brushes/CircleBrush.ts:75](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L75)

Invoked on mouse move

#### Parameters

##### pointer

[`Point`](/api/classes/point/)

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseMove`](/api/classes/basebrush/#onmousemove)

***

### onMouseUp()

> **onMouseUp**(): `void`

Defined in: [src/brushes/CircleBrush.ts:91](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/CircleBrush.ts#L91)

Invoked on mouse up

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseUp`](/api/classes/basebrush/#onmouseup)
