# Class: Point

Adaptation of work of Kevin Lindsey(kevin@kevlindev.com)

## Implements

- [`XY`](/apidocs/interfaces/XY.md)

## Table of contents

### Constructors

- [constructor](/apidocs/classes/Point.md#constructor)

### Properties

- [x](/apidocs/classes/Point.md#x)
- [y](/apidocs/classes/Point.md#y)

### Methods

- [add](/apidocs/classes/Point.md#add)
- [addEquals](/apidocs/classes/Point.md#addequals)
- [clone](/apidocs/classes/Point.md#clone)
- [distanceFrom](/apidocs/classes/Point.md#distancefrom)
- [divide](/apidocs/classes/Point.md#divide)
- [eq](/apidocs/classes/Point.md#eq)
- [gt](/apidocs/classes/Point.md#gt)
- [gte](/apidocs/classes/Point.md#gte)
- [lerp](/apidocs/classes/Point.md#lerp)
- [lt](/apidocs/classes/Point.md#lt)
- [lte](/apidocs/classes/Point.md#lte)
- [max](/apidocs/classes/Point.md#max)
- [midPointFrom](/apidocs/classes/Point.md#midpointfrom)
- [min](/apidocs/classes/Point.md#min)
- [multiply](/apidocs/classes/Point.md#multiply)
- [rotate](/apidocs/classes/Point.md#rotate)
- [scalarAdd](/apidocs/classes/Point.md#scalaradd)
- [scalarAddEquals](/apidocs/classes/Point.md#scalaraddequals)
- [scalarDivide](/apidocs/classes/Point.md#scalardivide)
- [scalarDivideEquals](/apidocs/classes/Point.md#scalardivideequals)
- [scalarMultiply](/apidocs/classes/Point.md#scalarmultiply)
- [scalarMultiplyEquals](/apidocs/classes/Point.md#scalarmultiplyequals)
- [scalarSubtract](/apidocs/classes/Point.md#scalarsubtract)
- [scalarSubtractEquals](/apidocs/classes/Point.md#scalarsubtractequals)
- [setFromPoint](/apidocs/classes/Point.md#setfrompoint)
- [setX](/apidocs/classes/Point.md#setx)
- [setXY](/apidocs/classes/Point.md#setxy)
- [setY](/apidocs/classes/Point.md#sety)
- [subtract](/apidocs/classes/Point.md#subtract)
- [subtractEquals](/apidocs/classes/Point.md#subtractequals)
- [swap](/apidocs/classes/Point.md#swap)
- [toString](/apidocs/classes/Point.md#tostring)
- [transform](/apidocs/classes/Point.md#transform)

## Constructors

### constructor

• **new Point**()

#### Defined in

[src/Point.ts:18](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L18)

• **new Point**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/Point.ts:19](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L19)

• **new Point**(`point`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`XY`](/apidocs/interfaces/XY.md) |

#### Defined in

[src/Point.ts:20](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L20)

## Properties

### x

• **x**: `number`

#### Implementation of

[XY](/apidocs/interfaces/XY.md).[x](/apidocs/interfaces/XY.md#x)

#### Defined in

[src/Point.ts:14](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L14)

___

### y

• **y**: `number`

#### Implementation of

[XY](/apidocs/interfaces/XY.md).[y](/apidocs/interfaces/XY.md#y)

#### Defined in

[src/Point.ts:16](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L16)

## Methods

### add

▸ **add**(`that`): [`Point`](/apidocs/classes/Point.md)

Adds another point to this one and returns another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

new Point instance with added values

#### Defined in

[src/Point.ts:36](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L36)

___

### addEquals

▸ **addEquals**(`that`): [`Point`](/apidocs/classes/Point.md)

Adds another point to this one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

thisArg

**`Chainable`**

**`Deprecated`**

#### Defined in

[src/Point.ts:47](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L47)

___

### clone

▸ **clone**(): [`Point`](/apidocs/classes/Point.md)

return a cloned instance of the point

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:347](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L347)

___

### distanceFrom

▸ **distanceFrom**(`that`): `number`

Returns distance from this point and another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

`number`

#### Defined in

[src/Point.ts:246](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L246)

___

### divide

▸ **divide**(`that`): [`Point`](/apidocs/classes/Point.md)

Divides this point by another and returns a new one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:155](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L155)

___

### eq

▸ **eq**(`that`): `boolean`

Returns true if this point is equal to another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

`boolean`

#### Defined in

[src/Point.ts:186](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L186)

___

### gt

▸ **gt**(`that`): `boolean`

Returns true if this point is greater another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

`boolean`

#### Defined in

[src/Point.ts:214](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L214)

___

### gte

▸ **gte**(`that`): `boolean`

Returns true if this point is greater than or equal to another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

`boolean`

#### Defined in

[src/Point.ts:223](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L223)

___

### lerp

▸ **lerp**(`that`, `t?`): [`Point`](/apidocs/classes/Point.md)

Returns new point which is the result of linear interpolation with this one and another one

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) | `undefined` |  |
| `t` | `number` | `0.5` | , position of interpolation, between 0 and 1 default 0.5 |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:233](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L233)

___

### lt

▸ **lt**(`that`): `boolean`

Returns true if this point is less than another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

`boolean`

#### Defined in

[src/Point.ts:195](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L195)

___

### lte

▸ **lte**(`that`): `boolean`

Returns true if this point is less than or equal to another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

`boolean`

#### Defined in

[src/Point.ts:204](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L204)

___

### max

▸ **max**(`that`): [`Point`](/apidocs/classes/Point.md)

Returns a new point which is the max of this and another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:275](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L275)

___

### midPointFrom

▸ **midPointFrom**(`that`): [`Point`](/apidocs/classes/Point.md)

Returns the point between this point and another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:257](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L257)

___

### min

▸ **min**(`that`): [`Point`](/apidocs/classes/Point.md)

Returns a new point which is the min of this and another one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:266](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L266)

___

### multiply

▸ **multiply**(`that`): [`Point`](/apidocs/classes/Point.md)

Multiplies this point by another value and returns a new one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:124](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L124)

___

### rotate

▸ **rotate**(`radians`, `origin?`): [`Point`](/apidocs/classes/Point.md)

Rotates `point` around `origin` with `radians`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `radians` | [`TRadian`](/apidocs/modules.md#tradian) | `undefined` | The radians of the angle for the rotation |
| `origin` | [`XY`](/apidocs/interfaces/XY.md) | `originZero` | The origin of the rotation |

#### Returns

[`Point`](/apidocs/classes/Point.md)

The new rotated point

**`Static`**

**`Member Of`**

fabric.util

#### Defined in

[src/Point.ts:359](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L359)

___

### scalarAdd

▸ **scalarAdd**(`scalar`): [`Point`](/apidocs/classes/Point.md)

Adds value to this point and returns a new one

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

new Point with added value

#### Defined in

[src/Point.ts:58](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L58)

___

### scalarAddEquals

▸ **scalarAddEquals**(`scalar`): [`Point`](/apidocs/classes/Point.md)

Adds value to this point

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

thisArg

**`Chainable`**

**`Deprecated`**

#### Defined in

[src/Point.ts:69](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L69)

___

### scalarDivide

▸ **scalarDivide**(`scalar`): [`Point`](/apidocs/classes/Point.md)

Divides this point by a value and returns a new one

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:164](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L164)

___

### scalarDivideEquals

▸ **scalarDivideEquals**(`scalar`): [`Point`](/apidocs/classes/Point.md)

Divides this point by a value

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

thisArg

**`Chainable`**

**`Deprecated`**

#### Defined in

[src/Point.ts:175](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L175)

___

### scalarMultiply

▸ **scalarMultiply**(`scalar`): [`Point`](/apidocs/classes/Point.md)

Multiplies this point by a value and returns a new one

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:133](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L133)

___

### scalarMultiplyEquals

▸ **scalarMultiplyEquals**(`scalar`): [`Point`](/apidocs/classes/Point.md)

Multiplies this point by a value

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

thisArg

**`Chainable`**

**`Deprecated`**

#### Defined in

[src/Point.ts:144](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L144)

___

### scalarSubtract

▸ **scalarSubtract**(`scalar`): [`Point`](/apidocs/classes/Point.md)

Subtracts value from this point and returns a new one

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/Point.ts:102](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L102)

___

### scalarSubtractEquals

▸ **scalarSubtractEquals**(`scalar`): [`Point`](/apidocs/classes/Point.md)

Subtracts value from this point

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

thisArg

**`Chainable`**

**`Deprecated`**

#### Defined in

[src/Point.ts:113](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L113)

___

### setFromPoint

▸ **setFromPoint**(`that`): [`Point`](/apidocs/classes/Point.md)

Sets x/y of this point from another point

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

**`Chainable`**

#### Defined in

[src/Point.ts:324](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L324)

___

### setX

▸ **setX**(`x`): [`Point`](/apidocs/classes/Point.md)

Sets x of this point

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

**`Chainable`**

#### Defined in

[src/Point.ts:304](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L304)

___

### setXY

▸ **setXY**(`x`, `y`): [`Point`](/apidocs/classes/Point.md)

Sets x/y of this point

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

**`Chainable`**

#### Defined in

[src/Point.ts:293](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L293)

___

### setY

▸ **setY**(`y`): [`Point`](/apidocs/classes/Point.md)

Sets y of this point

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

**`Chainable`**

#### Defined in

[src/Point.ts:314](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L314)

___

### subtract

▸ **subtract**(`that`): [`Point`](/apidocs/classes/Point.md)

Subtracts another point from this point and returns a new one

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

new Point object with subtracted values

#### Defined in

[src/Point.ts:80](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L80)

___

### subtractEquals

▸ **subtractEquals**(`that`): [`Point`](/apidocs/classes/Point.md)

Subtracts another point from this point

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

thisArg

**`Chainable`**

**`Deprecated`**

#### Defined in

[src/Point.ts:91](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L91)

___

### swap

▸ **swap**(`that`): `void`

Swaps x/y of this point and another point

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

`void`

#### Defined in

[src/Point.ts:334](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L334)

___

### toString

▸ **toString**(): `string`

Returns string representation of this point

#### Returns

`string`

#### Defined in

[src/Point.ts:283](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L283)

___

### transform

▸ **transform**(`t`, `ignoreOffset?`): [`Point`](/apidocs/classes/Point.md)

Apply transform t to point p

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `t` | [`TMat2D`](/apidocs/modules.md#tmat2d) | `undefined` | The transform |
| `ignoreOffset?` | `boolean` | `false` | Indicates that the offset should not be applied |

#### Returns

[`Point`](/apidocs/classes/Point.md)

The transformed point

**`Static`**

**`Member Of`**

fabric.util

#### Defined in

[src/Point.ts:380](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Point.ts#L380)
