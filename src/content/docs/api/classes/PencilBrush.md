---
editUrl: false
next: false
prev: false
title: "PencilBrush"
---

Defined in: [src/brushes/PencilBrush.ts:19](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L19)

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`BaseBrush`](/api/classes/basebrush/)

## Extended by

- [`PatternBrush`](/api/classes/patternbrush/)

## Constructors

### Constructor

> **new PencilBrush**(`canvas`): `PencilBrush`

Defined in: [src/brushes/PencilBrush.ts:47](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L47)

#### Parameters

##### canvas

[`Canvas`](/api/classes/canvas/)

#### Returns

`PencilBrush`

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

### decimate

> **decimate**: `number` = `0.4`

Defined in: [src/brushes/PencilBrush.ts:25](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L25)

Discard points that are less than `decimate` pixel distant from each other

#### Default

```ts
0.4
```

***

### drawStraightLine

> **drawStraightLine**: `boolean` = `false`

Defined in: [src/brushes/PencilBrush.ts:34](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L34)

Draws a straight line between last recorded point to current pointer
Used for `shift` functionality

#### Default

```ts
false
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

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`limitedToCanvasSize`](/api/classes/basebrush/#limitedtocanvassize)

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

### straightLineKey

> **straightLineKey**: `undefined` \| `null` \| `"altKey"` \| `"ctrlKey"` \| `"metaKey"` \| `"shiftKey"` = `'shiftKey'`

Defined in: [src/brushes/PencilBrush.ts:41](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L41)

The event modifier key that makes the brush draw a straight line.
If `null` or 'none' or any other string that is not a modifier key the feature is disabled.

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

> **width**: `number` = `1`

Defined in: [src/brushes/BaseBrush.ts:23](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/BaseBrush.ts#L23)

Width of a brush, has to be a Number, no string literals

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`width`](/api/classes/basebrush/#width)

## Methods

### \_finalizeAndAddPath()

> **\_finalizeAndAddPath**(): `void`

Defined in: [src/brushes/PencilBrush.ts:273](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L273)

On mouseup after drawing the path on contextTop canvas
we use the points captured to create an new Path object
and add it to the canvas.

#### Returns

`void`

***

### convertPointsToSVGPath()

> **convertPointsToSVGPath**(`points`): [`TSimplePathData`](/api/type-aliases/tsimplepathdata/)

Defined in: [src/brushes/PencilBrush.ts:212](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L212)

Converts points to SVG path

#### Parameters

##### points

[`Point`](/api/classes/point/)[]

Array of points

#### Returns

[`TSimplePathData`](/api/type-aliases/tsimplepathdata/)

SVG path commands

***

### createPath()

> **createPath**(`pathData`): [`Path`](/api/classes/path/)

Defined in: [src/brushes/PencilBrush.ts:222](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L222)

Creates a Path object to add on canvas

#### Parameters

##### pathData

[`TSimplePathData`](/api/type-aliases/tsimplepathdata/)

Path data

#### Returns

[`Path`](/api/classes/path/)

Path to add on canvas

***

### decimatePoints()

> **decimatePoints**(`points`, `distance`): [`Point`](/api/classes/point/)[]

Defined in: [src/brushes/PencilBrush.ts:243](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L243)

Decimate points array with the decimate value

#### Parameters

##### points

[`Point`](/api/classes/point/)[]

##### distance

`number`

#### Returns

[`Point`](/api/classes/point/)[]

***

### needsFullRender()

> **needsFullRender**(): `boolean`

Defined in: [src/brushes/PencilBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L53)

#### Returns

`boolean`

#### Overrides

`BaseBrush.needsFullRender`

***

### onMouseDown()

> **onMouseDown**(`pointer`, `__namedParameters`): `void`

Defined in: [src/brushes/PencilBrush.ts:67](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L67)

Invoked on mouse down

#### Parameters

##### pointer

[`Point`](/api/classes/point/)

##### \_\_namedParameters

[`TEvent`](/api/interfaces/tevent/)

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseDown`](/api/classes/basebrush/#onmousedown)

***

### onMouseMove()

> **onMouseMove**(`pointer`, `__namedParameters`): `void`

Defined in: [src/brushes/PencilBrush.ts:83](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L83)

Invoked on mouse move

#### Parameters

##### pointer

[`Point`](/api/classes/point/)

##### \_\_namedParameters

[`TEvent`](/api/interfaces/tevent/)

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseMove`](/api/classes/basebrush/#onmousemove)

***

### onMouseUp()

> **onMouseUp**(`__namedParameters`): `boolean`

Defined in: [src/brushes/PencilBrush.ts:121](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L121)

Invoked on mouse up

#### Parameters

##### \_\_namedParameters

[`TEvent`](/api/interfaces/tevent/)

#### Returns

`boolean`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseUp`](/api/classes/basebrush/#onmouseup)

***

### drawSegment()

> `static` **drawSegment**(`ctx`, `p1`, `p2`): [`Point`](/api/classes/point/)

Defined in: [src/brushes/PencilBrush.ts:57](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/brushes/PencilBrush.ts#L57)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### p1

[`Point`](/api/classes/point/)

##### p2

[`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)
