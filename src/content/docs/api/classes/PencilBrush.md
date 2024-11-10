---
editUrl: false
next: false
prev: false
title: "PencilBrush"
---

## See

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Extends

- [`BaseBrush`](/api/classes/basebrush/)

## Extended by

- [`PatternBrush`](/api/classes/patternbrush/)

## Constructors

### new PencilBrush()

> **new PencilBrush**(`canvas`): [`PencilBrush`](/api/classes/pencilbrush/)

#### Parameters

• **canvas**: [`Canvas`](/api/classes/canvas/)

#### Returns

[`PencilBrush`](/api/classes/pencilbrush/)

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`constructor`](/api/classes/basebrush/#constructors)

#### Defined in

[src/brushes/PencilBrush.ts:47](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L47)

## Properties

### canvas

> **canvas**: [`Canvas`](/api/classes/canvas/)

#### Todo

add type

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`canvas`](/api/classes/basebrush/#canvas)

#### Defined in

[src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/BaseBrush.ts#L73)

***

### color

> **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`color`](/api/classes/basebrush/#color)

#### Defined in

[src/brushes/BaseBrush.ts:16](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/BaseBrush.ts#L16)

***

### decimate

> **decimate**: `number` = `0.4`

Discard points that are less than `decimate` pixel distant from each other

#### Default

```ts
0.4
```

#### Defined in

[src/brushes/PencilBrush.ts:25](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L25)

***

### drawStraightLine

> **drawStraightLine**: `boolean` = `false`

Draws a straight line between last recorded point to current pointer
Used for `shift` functionality

#### Default

```ts
false
```

#### Defined in

[src/brushes/PencilBrush.ts:34](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L34)

***

### limitedToCanvasSize

> **limitedToCanvasSize**: `boolean` = `false`

When `true`, the free drawing is limited to the whiteboard size. Default to false.

#### Default

```ts
false
```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`limitedToCanvasSize`](/api/classes/basebrush/#limitedtocanvassize)

#### Defined in

[src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/BaseBrush.ts#L68)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/) = `null`

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`shadow`](/api/classes/basebrush/#shadow)

#### Defined in

[src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/BaseBrush.ts#L32)

***

### straightLineKey

> **straightLineKey**: `undefined` \| `null` \| `"altKey"` \| `"shiftKey"` \| `"ctrlKey"` \| `"metaKey"` = `'shiftKey'`

The event modifier key that makes the brush draw a straight line.
If `null` or 'none' or any other string that is not a modifier key the feature is disabled.

#### Defined in

[src/brushes/PencilBrush.ts:41](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L41)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[] = `null`

Stroke Dash Array.

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeDashArray`](/api/classes/basebrush/#strokedasharray)

#### Defined in

[src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/BaseBrush.ts#L60)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeLineCap`](/api/classes/basebrush/#strokelinecap)

#### Defined in

[src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/BaseBrush.ts#L39)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeLineJoin`](/api/classes/basebrush/#strokelinejoin)

#### Defined in

[src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/BaseBrush.ts#L46)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`strokeMiterLimit`](/api/classes/basebrush/#strokemiterlimit)

#### Defined in

[src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/BaseBrush.ts#L53)

***

### width

> **width**: `number` = `1`

Width of a brush, has to be a Number, no string literals

#### Default

```ts

```

#### Inherited from

[`BaseBrush`](/api/classes/basebrush/).[`width`](/api/classes/basebrush/#width)

#### Defined in

[src/brushes/BaseBrush.ts:23](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/BaseBrush.ts#L23)

## Methods

### \_finalizeAndAddPath()

> **\_finalizeAndAddPath**(): `void`

On mouseup after drawing the path on contextTop canvas
we use the points captured to create an new Path object
and add it to the canvas.

#### Returns

`void`

#### Defined in

[src/brushes/PencilBrush.ts:273](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L273)

***

### convertPointsToSVGPath()

> **convertPointsToSVGPath**(`points`): [`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

Converts points to SVG path

#### Parameters

• **points**: [`Point`](/api/classes/point/)[]

Array of points

#### Returns

[`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

SVG path commands

#### Defined in

[src/brushes/PencilBrush.ts:212](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L212)

***

### createPath()

> **createPath**(`pathData`): [`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Creates a Path object to add on canvas

#### Parameters

• **pathData**: [`TSimplePathData`](/api/namespaces/util/type-aliases/tsimplepathdata/)

Path data

#### Returns

[`Path`](/api/classes/path/)\<`Partial`\<[`PathProps`](/api/interfaces/pathprops/)\>, [`SerializedPathProps`](/api/interfaces/serializedpathprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Path to add on canvas

#### Defined in

[src/brushes/PencilBrush.ts:222](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L222)

***

### decimatePoints()

> **decimatePoints**(`points`, `distance`): [`Point`](/api/classes/point/)[]

Decimate points array with the decimate value

#### Parameters

• **points**: [`Point`](/api/classes/point/)[]

• **distance**: `number`

#### Returns

[`Point`](/api/classes/point/)[]

#### Defined in

[src/brushes/PencilBrush.ts:243](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L243)

***

### needsFullRender()

> **needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Overrides

`BaseBrush.needsFullRender`

#### Defined in

[src/brushes/PencilBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L53)

***

### onMouseDown()

> **onMouseDown**(`pointer`, `__namedParameters`): `void`

Invoked on mouse down

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

• **\_\_namedParameters**: [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseDown`](/api/classes/basebrush/#onmousedown)

#### Defined in

[src/brushes/PencilBrush.ts:67](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L67)

***

### onMouseMove()

> **onMouseMove**(`pointer`, `__namedParameters`): `void`

Invoked on mouse move

#### Parameters

• **pointer**: [`Point`](/api/classes/point/)

• **\_\_namedParameters**: [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`void`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseMove`](/api/classes/basebrush/#onmousemove)

#### Defined in

[src/brushes/PencilBrush.ts:83](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L83)

***

### onMouseUp()

> **onMouseUp**(`__namedParameters`): `boolean`

Invoked on mouse up

#### Parameters

• **\_\_namedParameters**: [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

#### Returns

`boolean`

#### Overrides

[`BaseBrush`](/api/classes/basebrush/).[`onMouseUp`](/api/classes/basebrush/#onmouseup)

#### Defined in

[src/brushes/PencilBrush.ts:121](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L121)

***

### drawSegment()

> `static` **drawSegment**(`ctx`, `p1`, `p2`): [`Point`](/api/classes/point/)

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **p1**: [`Point`](/api/classes/point/)

• **p2**: [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

[src/brushes/PencilBrush.ts:57](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/brushes/PencilBrush.ts#L57)
