---
editUrl: false
next: false
prev: false
title: "SprayBrush"
---

Defined in: [src/brushes/SprayBrush.ts:31](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L31)

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`BaseBrush`](/api/classes/basebrush/)

## Constructors

### Constructor

> **new SprayBrush**(`canvas`): `SprayBrush`

Defined in: [src/brushes/SprayBrush.ts:83](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L83)

Constructor

#### Parameters

##### canvas

[`Canvas`](/api/classes/canvas/)

#### Returns

`SprayBrush`

Instance of a spray brush

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`constructor`](/api/classes/basebrush/#constructor)

## Properties

### canvas

> **canvas**: [`Canvas`](/api/classes/canvas/)

Defined in: [src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/BaseBrush.ts#L73)

#### Todo

add type

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`canvas`](/api/classes/basebrush/#canvas)

***

### color

> **color**: `string` = `'rgb(0, 0, 0)'`

Defined in: [src/brushes/BaseBrush.ts:16](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/BaseBrush.ts#L16)

Color of a brush

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`color`](/api/classes/basebrush/#color)

***

### density

> **density**: `number` = `20`

Defined in: [src/brushes/SprayBrush.ts:44](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L44)

Density of a spray (number of dots per chunk)

#### Default

```ts

```

***

### dotWidth

> **dotWidth**: `number` = `1`

Defined in: [src/brushes/SprayBrush.ts:51](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L51)

Width of spray dots

#### Default

```ts

```

***

### dotWidthVariance

> **dotWidthVariance**: `number` = `1`

Defined in: [src/brushes/SprayBrush.ts:58](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L58)

Width variance of spray dots

#### Default

```ts

```

***

### limitedToCanvasSize

> **limitedToCanvasSize**: `boolean` = `false`

Defined in: [src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/BaseBrush.ts#L68)

When `true`, the free drawing is limited to the whiteboard size. Default to false.

#### Default

```ts
false
```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`limitedToCanvasSize`](/api/classes/basebrush/#limitedtocanvassize)

***

### optimizeOverlapping

> **optimizeOverlapping**: `boolean` = `true`

Defined in: [src/brushes/SprayBrush.ts:72](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L72)

Whether overlapping dots (rectangles) should be removed (for performance reasons)

#### Default

```ts

```

***

### randomOpacity

> **randomOpacity**: `boolean` = `false`

Defined in: [src/brushes/SprayBrush.ts:65](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L65)

Whether opacity of a dot should be random

#### Default

```ts

```

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/) = `null`

Defined in: [src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/BaseBrush.ts#L32)

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

Defined in: [src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/BaseBrush.ts#L60)

Stroke Dash Array.

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeDashArray`](/api/classes/basebrush/#strokedasharray)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap` = `'round'`

Defined in: [src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/BaseBrush.ts#L39)

Line endings style of a brush (one of "butt", "round", "square")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeLineCap`](/api/classes/basebrush/#strokelinecap)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Defined in: [src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/BaseBrush.ts#L46)

Corner style of a brush (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeLineJoin`](/api/classes/basebrush/#strokelinejoin)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number` = `10`

Defined in: [src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/BaseBrush.ts#L53)

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeMiterLimit`](/api/classes/basebrush/#strokemiterlimit)

***

### width

> **width**: `number` = `10`

Defined in: [src/brushes/SprayBrush.ts:37](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L37)

Width of a spray

#### Default

```ts

```

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`width`](/api/classes/basebrush/#width)

## Methods

### \_render()

> **\_render**(): `void`

Defined in: [src/brushes/SprayBrush.ts:177](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L177)

Render all spray chunks

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`_render`](/api/classes/basebrush/#_render)

***

### addSprayChunk()

> **addSprayChunk**(`pointer`): `void`

Defined in: [src/brushes/SprayBrush.ts:192](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L192)

#### Parameters

##### pointer

[`Point`](/api/classes/point/)

#### Returns

`void`

***

### onMouseDown()

> **onMouseDown**(`pointer`): `void`

Defined in: [src/brushes/SprayBrush.ts:93](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L93)

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

Defined in: [src/brushes/SprayBrush.ts:106](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L106)

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

Defined in: [src/brushes/SprayBrush.ts:117](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L117)

Invoked on mouse up

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseUp`](/api/classes/basebrush/#onmouseup)

***

### renderChunck()

> **renderChunck**(`sprayChunck`): `void`

Defined in: [src/brushes/SprayBrush.ts:159](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/brushes/SprayBrush.ts#L159)

#### Parameters

##### sprayChunck

[`SprayBrushPoint`](/api/type-aliases/spraybrushpoint/)[]

#### Returns

`void`
