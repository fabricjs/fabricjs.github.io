---
editUrl: false
next: false
prev: false
title: "Point"
---

Defined in: [src/Point.ts:13](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L13)

Adaptation of work of Kevin Lindsey(kevin@kevlindev.com)

## Implements

- [`XY`](/api/interfaces/xy/)

## Constructors

### new Point()

> **new Point**(): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:18](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L18)

#### Returns

[`Point`](/api/classes/point/)

### new Point()

> **new Point**(`x`, `y`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:19](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L19)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

[`Point`](/api/classes/point/)

### new Point()

> **new Point**(`point`?): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:20](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L20)

#### Parameters

##### point?

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

## Properties

### x

> **x**: `number`

Defined in: [src/Point.ts:14](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L14)

#### Implementation of

[`XY`](/api/interfaces/xy/).[`x`](/api/interfaces/xy/#x)

***

### y

> **y**: `number`

Defined in: [src/Point.ts:16](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L16)

#### Implementation of

[`XY`](/api/interfaces/xy/).[`y`](/api/interfaces/xy/#y)

## Methods

### add()

> **add**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:36](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L36)

Adds another point to this one and returns another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

new Point instance with added values

***

### ~~addEquals()~~

> **addEquals**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:47](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L47)

Adds another point to this one

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

***

### clone()

> **clone**(): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:347](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L347)

return a cloned instance of the point

#### Returns

[`Point`](/api/classes/point/)

***

### distanceFrom()

> **distanceFrom**(`that`): `number`

Defined in: [src/Point.ts:246](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L246)

Returns distance from this point and another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

`number`

***

### divide()

> **divide**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:155](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L155)

Divides this point by another and returns a new one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

***

### eq()

> **eq**(`that`): `boolean`

Defined in: [src/Point.ts:186](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L186)

Returns true if this point is equal to another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

***

### gt()

> **gt**(`that`): `boolean`

Defined in: [src/Point.ts:214](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L214)

Returns true if this point is greater another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

***

### gte()

> **gte**(`that`): `boolean`

Defined in: [src/Point.ts:223](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L223)

Returns true if this point is greater than or equal to another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

***

### lerp()

> **lerp**(`that`, `t`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:233](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L233)

Returns new point which is the result of linear interpolation with this one and another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

##### t

`number` = `0.5`

, position of interpolation, between 0 and 1 default 0.5

#### Returns

[`Point`](/api/classes/point/)

***

### lt()

> **lt**(`that`): `boolean`

Defined in: [src/Point.ts:195](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L195)

Returns true if this point is less than another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

***

### lte()

> **lte**(`that`): `boolean`

Defined in: [src/Point.ts:204](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L204)

Returns true if this point is less than or equal to another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

`boolean`

***

### max()

> **max**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:275](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L275)

Returns a new point which is the max of this and another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

***

### midPointFrom()

> **midPointFrom**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:257](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L257)

Returns the point between this point and another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

***

### min()

> **min**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:266](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L266)

Returns a new point which is the min of this and another one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

***

### multiply()

> **multiply**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:124](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L124)

Multiplies this point by another value and returns a new one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

***

### rotate()

> **rotate**(`radians`, `origin`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:359](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L359)

Rotates `point` around `origin` with `radians`

#### Parameters

##### radians

[`TRadian`](/api/type-aliases/tradian/)

The radians of the angle for the rotation

##### origin

[`XY`](/api/interfaces/xy/) = `ZERO`

The origin of the rotation

#### Returns

[`Point`](/api/classes/point/)

The new rotated point

#### Static

#### Member Of

fabric.util

***

### scalarAdd()

> **scalarAdd**(`scalar`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:58](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L58)

Adds value to this point and returns a new one

#### Parameters

##### scalar

`number`

#### Returns

[`Point`](/api/classes/point/)

new Point with added value

***

### ~~scalarAddEquals()~~

> **scalarAddEquals**(`scalar`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:69](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L69)

Adds value to this point

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

##### scalar

`number`

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

***

### scalarDivide()

> **scalarDivide**(`scalar`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:164](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L164)

Divides this point by a value and returns a new one

#### Parameters

##### scalar

`number`

#### Returns

[`Point`](/api/classes/point/)

***

### ~~scalarDivideEquals()~~

> **scalarDivideEquals**(`scalar`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:175](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L175)

Divides this point by a value

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

##### scalar

`number`

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

***

### scalarMultiply()

> **scalarMultiply**(`scalar`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:133](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L133)

Multiplies this point by a value and returns a new one

#### Parameters

##### scalar

`number`

#### Returns

[`Point`](/api/classes/point/)

***

### ~~scalarMultiplyEquals()~~

> **scalarMultiplyEquals**(`scalar`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:144](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L144)

Multiplies this point by a value

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

##### scalar

`number`

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

***

### scalarSubtract()

> **scalarSubtract**(`scalar`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:102](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L102)

Subtracts value from this point and returns a new one

#### Parameters

##### scalar

`number`

#### Returns

[`Point`](/api/classes/point/)

***

### ~~scalarSubtractEquals()~~

> **scalarSubtractEquals**(`scalar`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:113](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L113)

Subtracts value from this point

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

##### scalar

`number`

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

***

### setFromPoint()

> **setFromPoint**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:324](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L324)

Sets x/y of this point from another point

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

#### Chainable

***

### setX()

> **setX**(`x`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:304](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L304)

Sets x of this point

#### Parameters

##### x

`number`

#### Returns

[`Point`](/api/classes/point/)

#### Chainable

***

### setXY()

> **setXY**(`x`, `y`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:293](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L293)

Sets x/y of this point

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

[`Point`](/api/classes/point/)

#### Chainable

***

### setY()

> **setY**(`y`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:314](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L314)

Sets y of this point

#### Parameters

##### y

`number`

#### Returns

[`Point`](/api/classes/point/)

#### Chainable

***

### subtract()

> **subtract**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:80](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L80)

Subtracts another point from this point and returns a new one

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

new Point object with subtracted values

***

### ~~subtractEquals()~~

> **subtractEquals**(`that`): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:91](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L91)

Subtracts another point from this point

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

[`Point`](/api/classes/point/)

thisArg

#### Chainable

***

### swap()

> **swap**(`that`): `void`

Defined in: [src/Point.ts:334](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L334)

Swaps x/y of this point and another point

#### Parameters

##### that

[`XY`](/api/interfaces/xy/)

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [src/Point.ts:283](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L283)

Returns string representation of this point

#### Returns

`string`

***

### transform()

> **transform**(`t`, `ignoreOffset`?): [`Point`](/api/classes/point/)

Defined in: [src/Point.ts:380](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Point.ts#L380)

Apply transform t to point p

#### Parameters

##### t

[`TMat2D`](/api/type-aliases/tmat2d/)

The transform

##### ignoreOffset?

`boolean` = `false`

Indicates that the offset should not be applied

#### Returns

[`Point`](/api/classes/point/)

The transformed point

#### Static

#### Member Of

fabric.util
