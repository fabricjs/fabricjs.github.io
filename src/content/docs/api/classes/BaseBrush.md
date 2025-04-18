---
editUrl: false
next: false
prev: false
title: "BaseBrush"
---

Defined in: [src/brushes/BaseBrush.ts:10](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L10)

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extended by

- [`PencilBrush`](/api/classes/pencilbrush/)
- [`CircleBrush`](/api/classes/circlebrush/)
- [`SprayBrush`](/api/classes/spraybrush/)

## Constructors

### Constructor

> **new BaseBrush**(`canvas`): `BaseBrush`

Defined in: [src/brushes/BaseBrush.ts:75](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L75)

#### Parameters

##### canvas

[`Canvas`](/api/classes/canvas/)

#### Returns

`BaseBrush`

## Properties

### canvas

> **canvas**: [`Canvas`](/api/classes/canvas/)

Defined in: [src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L73)

#### Todo

add type

***

### color

> **color**: `string` = `'rgb(0, 0, 0)'`

Defined in: [src/brushes/BaseBrush.ts:16](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L16)

Color of a brush

#### Default

```ts

```

***

### limitedToCanvasSize

> **limitedToCanvasSize**: `boolean` = `false`

Defined in: [src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L68)

When `true`, the free drawing is limited to the whiteboard size. Default to false.

#### Default

```ts
false
```

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

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[] = `null`

Defined in: [src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L60)

Stroke Dash Array.

#### Default

```ts

```

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap` = `'round'`

Defined in: [src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L39)

Line endings style of a brush (one of "butt", "round", "square")

#### Default

```ts

```

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Defined in: [src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L46)

Corner style of a brush (one of "bevel", "round", "miter")

#### Default

```ts

```

***

### strokeMiterLimit

> **strokeMiterLimit**: `number` = `10`

Defined in: [src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L53)

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

#### Default

```ts

```

***

### width

> **width**: `number` = `1`

Defined in: [src/brushes/BaseBrush.ts:23](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L23)

Width of a brush, has to be a Number, no string literals

#### Default

```ts

```

## Methods

### \_render()

> `abstract` **\_render**(): `void`

Defined in: [src/brushes/BaseBrush.ts:79](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L79)

#### Returns

`void`

***

### onMouseDown()

> `abstract` **onMouseDown**(`pointer`, `ev`): `void`

Defined in: [src/brushes/BaseBrush.ts:80](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L80)

#### Parameters

##### pointer

[`Point`](/api/classes/point/)

##### ev

[`TBrushEventData`](/api/type-aliases/tbrusheventdata/)

#### Returns

`void`

***

### onMouseMove()

> `abstract` **onMouseMove**(`pointer`, `ev`): `void`

Defined in: [src/brushes/BaseBrush.ts:81](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L81)

#### Parameters

##### pointer

[`Point`](/api/classes/point/)

##### ev

[`TBrushEventData`](/api/type-aliases/tbrusheventdata/)

#### Returns

`void`

***

### onMouseUp()

> `abstract` **onMouseUp**(`ev`): `boolean` \| `void`

Defined in: [src/brushes/BaseBrush.ts:85](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L85)

#### Parameters

##### ev

[`TBrushEventData`](/api/type-aliases/tbrusheventdata/)

#### Returns

`boolean` \| `void`

true if brush should continue blocking interaction
