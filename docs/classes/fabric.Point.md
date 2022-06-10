# Point

## [fabric](fabric.html).Point

fabric.Point ## Constructor

#### [new Point(x, y)&rarr; {[fabric.Point](fabric.Point.html)}](#Point)

Point class

##### Parameters:
|Name|Type|Description| |
|`x`|Number|
|`y`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5551](fabric.js.html#line5551)

##### Returns:

thisArg

Type

[fabric.Point](fabric.Point.html)

### Methods

#### [add(that)&rarr; {[fabric.Point](fabric.Point.html)}](#add)

Adds another point to this one and returns another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5567](fabric.js.html#line5567)

##### Returns:

new Point instance with added values

Type

[fabric.Point](fabric.Point.html)

#### [addEquals(that)&rarr; {[fabric.Point](fabric.Point.html)}](#addEquals)

Adds another point to this one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5577](fabric.js.html#line5577)

##### Returns:

thisArg

Type

[fabric.Point](fabric.Point.html)

#### [clone()&rarr; {[fabric.Point](fabric.Point.html)}](#clone)

return a cloned instance of the point

Source:

* [fabric.js](fabric.js.html), [line 5858](fabric.js.html#line5858)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [distanceFrom(that)&rarr; {Number}](#distanceFrom)

Returns distance from this point and another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5757](fabric.js.html#line5757)

##### Returns:

Type

Number

#### [divide(scalar)&rarr; {[fabric.Point](fabric.Point.html)}](#divide)

Divides this point by a value and returns a new one TODO: rename in scalarDivide in 2.0

##### Parameters:
|Name|Type|Description| |
|`scalar`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5675](fabric.js.html#line5675)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [divideEquals(scalar)&rarr; {[fabric.Point](fabric.Point.html)}](#divideEquals)

Divides this point by a value TODO: rename in scalarDivideEquals in 2.0

##### Parameters:
|Name|Type|Description| |
|`scalar`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5686](fabric.js.html#line5686)

##### Returns:

thisArg

Type

[fabric.Point](fabric.Point.html)

#### [eq(that)&rarr; {Boolean}](#eq)

Returns true if this point is equal to another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5697](fabric.js.html#line5697)

##### Returns:

Type

Boolean

#### [gt(that)&rarr; {Boolean}](#gt)

Returns true if this point is greater another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5725](fabric.js.html#line5725)

##### Returns:

Type

Boolean

#### [gte(that)&rarr; {Boolean}](#gte)

Returns true if this point is greater than or equal to another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5734](fabric.js.html#line5734)

##### Returns:

Type

Boolean

#### [lerp(that, t)&rarr; {[fabric.Point](fabric.Point.html)}](#lerp)

Returns new point which is the result of linear interpolation with this one and another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|
|`t`|Number|, position of interpolation, between 0 and 1 default 0.5|

Source:

* [fabric.js](fabric.js.html), [line 5744](fabric.js.html#line5744)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [lt(that)&rarr; {Boolean}](#lt)

Returns true if this point is less than another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5706](fabric.js.html#line5706)

##### Returns:

Type

Boolean

#### [lte(that)&rarr; {Boolean}](#lte)

Returns true if this point is less than or equal to another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5715](fabric.js.html#line5715)

##### Returns:

Type

Boolean

#### [max(that)&rarr; {[fabric.Point](fabric.Point.html)}](#max)

Returns a new point which is the max of this and another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5786](fabric.js.html#line5786)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [midPointFrom(that)&rarr; {[fabric.Point](fabric.Point.html)}](#midPointFrom)

Returns the point between this point and another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5768](fabric.js.html#line5768)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [min(that)&rarr; {[fabric.Point](fabric.Point.html)}](#min)

Returns a new point which is the min of this and another one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5777](fabric.js.html#line5777)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [multiply(scalar)&rarr; {[fabric.Point](fabric.Point.html)}](#multiply)

Multiplies this point by a value and returns a new one TODO: rename in scalarMultiply in 2.0

##### Parameters:
|Name|Type|Description| |
|`scalar`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5652](fabric.js.html#line5652)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [multiplyEquals(scalar)&rarr; {[fabric.Point](fabric.Point.html)}](#multiplyEquals)

Multiplies this point by a value TODO: rename in scalarMultiplyEquals in 2.0

##### Parameters:
|Name|Type|Description| |
|`scalar`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5663](fabric.js.html#line5663)

##### Returns:

thisArg

Type

[fabric.Point](fabric.Point.html)

#### [scalarAdd(scalar)&rarr; {[fabric.Point](fabric.Point.html)}](#scalarAdd)

Adds value to this point and returns a new one

##### Parameters:
|Name|Type|Description| |
|`scalar`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5588](fabric.js.html#line5588)

##### Returns:

new Point with added value

Type

[fabric.Point](fabric.Point.html)

#### [scalarAddEquals(scalar)&rarr; {[fabric.Point](fabric.Point.html)}](#scalarAddEquals)

Adds value to this point

##### Parameters:
|Name|Type|Description| |
|`scalar`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5598](fabric.js.html#line5598)

##### Returns:

thisArg

Type

[fabric.Point](fabric.Point.html)

#### [scalarSubtract(scalar)&rarr; {[fabric.Point](fabric.Point.html)}](#scalarSubtract)

Subtracts value from this point and returns a new one

##### Parameters:
|Name|Type|Description| |
|`scalar`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5630](fabric.js.html#line5630)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [scalarSubtractEquals(scalar)&rarr; {[fabric.Point](fabric.Point.html)}](#scalarSubtractEquals)

Subtracts value from this point

##### Parameters:
|Name|Type|Description| |
|`scalar`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5640](fabric.js.html#line5640)

##### Returns:

thisArg

Type

[fabric.Point](fabric.Point.html)

#### [setFromPoint(that)](#setFromPoint)

Sets x/y of this point from another point

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5835](fabric.js.html#line5835)

#### [setX(x)](#setX)

Sets x of this point

##### Parameters:
|Name|Type|Description| |
|`x`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5815](fabric.js.html#line5815)

#### [setXY(x, y)](#setXY)

Sets x/y of this point

##### Parameters:
|Name|Type|Description| |
|`x`|Number|
|`y`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5804](fabric.js.html#line5804)

#### [setY(y)](#setY)

Sets y of this point

##### Parameters:
|Name|Type|Description| |
|`y`|Number|

Source:

* [fabric.js](fabric.js.html), [line 5825](fabric.js.html#line5825)

#### [subtract(that)&rarr; {[fabric.Point](fabric.Point.html)}](#subtract)

Subtracts another point from this point and returns a new one

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5609](fabric.js.html#line5609)

##### Returns:

new Point object with subtracted values

Type

[fabric.Point](fabric.Point.html)

#### [subtractEquals(that)&rarr; {[fabric.Point](fabric.Point.html)}](#subtractEquals)

Subtracts another point from this point

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5619](fabric.js.html#line5619)

##### Returns:

thisArg

Type

[fabric.Point](fabric.Point.html)

#### [swap(that)](#swap)

Swaps x/y of this point and another point

##### Parameters:
|Name|Type|Description| |
|`that`|[fabric.Point](fabric.Point.html)|

Source:

* [fabric.js](fabric.js.html), [line 5845](fabric.js.html#line5845)

#### [toString()&rarr; {String}](#toString)

Returns string representation of this point

Source:

* [fabric.js](fabric.js.html), [line 5794](fabric.js.html#line5794)

##### Returns:

Type

String
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:17 GMT+0100 (Central European Standard Time)