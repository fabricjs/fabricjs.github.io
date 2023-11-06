# Class: Intersection

## Constructors

### constructor

• **new Intersection**(`status?`): [`Intersection`](/apidocs/classes/Intersection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status?` | [`IntersectionType`](/apidocs/modules.md#intersectiontype) |

#### Returns

[`Intersection`](/apidocs/classes/Intersection.md)

#### Defined in

[src/Intersection.ts:13](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L13)

## Properties

### points

• **points**: [`Point`](/apidocs/classes/Point.md)[]

#### Defined in

[src/Intersection.ts:9](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L9)

___

### status

• `Optional` **status**: [`IntersectionType`](/apidocs/modules.md#intersectiontype)

#### Defined in

[src/Intersection.ts:11](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L11)

## Methods

### append

▸ **append**(`...points`): [`Intersection`](/apidocs/classes/Intersection.md)

Appends points of intersection

#### Parameters

| Name | Type |
| :------ | :------ |
| `...points` | [`Point`](/apidocs/classes/Point.md)[] |

#### Returns

[`Intersection`](/apidocs/classes/Intersection.md)

thisArg

**`Chainable`**

#### Defined in

[src/Intersection.ts:33](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L33)

___

### includes

▸ **includes**(`point`): `boolean`

Used to verify if a point is alredy in the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`boolean`

#### Defined in

[src/Intersection.ts:23](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L23)

___

### intersectLineLine

▸ **intersectLineLine**(`a1`, `a2`, `b1`, `b2`, `aInfinite?`, `bInfinite?`): [`Intersection`](/apidocs/classes/Intersection.md)

Checks if a line intersects another

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a1` | [`Point`](/apidocs/classes/Point.md) | `undefined` |  |
| `a2` | [`Point`](/apidocs/classes/Point.md) | `undefined` |  |
| `b1` | [`Point`](/apidocs/classes/Point.md) | `undefined` |  |
| `b2` | [`Point`](/apidocs/classes/Point.md) | `undefined` |  |
| `aInfinite?` | `boolean` | `true` | check segment intersection by passing `false` |
| `bInfinite?` | `boolean` | `true` | check segment intersection by passing `false` |

#### Returns

[`Intersection`](/apidocs/classes/Intersection.md)

**`See`**

 - [line intersection](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection)
 - [Cramer's rule](https://en.wikipedia.org/wiki/Cramer%27s_rule)

**`Static`**

#### Defined in

[src/Intersection.ts:127](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L127)

___

### intersectLinePolygon

▸ **intersectLinePolygon**(`a1`, `a2`, `points`, `infinite?`): [`Intersection`](/apidocs/classes/Intersection.md)

Checks if line intersects polygon

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a1` | [`Point`](/apidocs/classes/Point.md) | `undefined` | point on line |
| `a2` | [`Point`](/apidocs/classes/Point.md) | `undefined` | other point on line |
| `points` | [`Point`](/apidocs/classes/Point.md)[] | `undefined` | polygon points |
| `infinite?` | `boolean` | `true` | check segment intersection by passing `false` |

#### Returns

[`Intersection`](/apidocs/classes/Intersection.md)

**`Todo`**

account for stroke

**`Static`**

**`See`**

[intersectSegmentPolygon](/apidocs/classes/Intersection.md#intersectsegmentpolygon) for segment intersection

#### Defined in

[src/Intersection.ts:224](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L224)

___

### intersectPolygonPolygon

▸ **intersectPolygonPolygon**(`points1`, `points2`): [`Intersection`](/apidocs/classes/Intersection.md)

Checks if polygon intersects another polygon

#### Parameters

| Name | Type |
| :------ | :------ |
| `points1` | [`Point`](/apidocs/classes/Point.md)[] |
| `points2` | [`Point`](/apidocs/classes/Point.md)[] |

#### Returns

[`Intersection`](/apidocs/classes/Intersection.md)

**`Todo`**

account for stroke

**`Static`**

#### Defined in

[src/Intersection.ts:277](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L277)

___

### intersectPolygonRectangle

▸ **intersectPolygonRectangle**(`points`, `r1`, `r2`): [`Intersection`](/apidocs/classes/Intersection.md)

Checks if polygon intersects rectangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | [`Point`](/apidocs/classes/Point.md)[] | polygon points |
| `r1` | [`Point`](/apidocs/classes/Point.md) | top left point of rect |
| `r2` | [`Point`](/apidocs/classes/Point.md) | bottom right point of rect |

#### Returns

[`Intersection`](/apidocs/classes/Intersection.md)

**`Static`**

**`See`**

[intersectPolygonPolygon](/apidocs/classes/Intersection.md#intersectpolygonpolygon) for polygon intersection

#### Defined in

[src/Intersection.ts:315](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L315)

___

### intersectSegmentLine

▸ **intersectSegmentLine**(`s1`, `s2`, `l1`, `l2`): [`Intersection`](/apidocs/classes/Intersection.md)

Checks if a segment intersects a line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s1` | [`Point`](/apidocs/classes/Point.md) | boundary point of segment |
| `s2` | [`Point`](/apidocs/classes/Point.md) | other boundary point of segment |
| `l1` | [`Point`](/apidocs/classes/Point.md) | point on line |
| `l2` | [`Point`](/apidocs/classes/Point.md) | other point on line |

#### Returns

[`Intersection`](/apidocs/classes/Intersection.md)

**`See`**

[intersectLineLine](/apidocs/classes/Intersection.md#intersectlineline) for line intersection

**`Static`**

#### Defined in

[src/Intersection.ts:183](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L183)

___

### intersectSegmentPolygon

▸ **intersectSegmentPolygon**(`a1`, `a2`, `points`): [`Intersection`](/apidocs/classes/Intersection.md)

Checks if segment intersects polygon

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a1` | [`Point`](/apidocs/classes/Point.md) | boundary point of segment |
| `a2` | [`Point`](/apidocs/classes/Point.md) | other boundary point of segment |
| `points` | [`Point`](/apidocs/classes/Point.md)[] | polygon points |

#### Returns

[`Intersection`](/apidocs/classes/Intersection.md)

**`Static`**

**`See`**

[intersectLinePolygon](/apidocs/classes/Intersection.md#intersectlinepolygon) for line intersection

#### Defined in

[src/Intersection.ts:259](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L259)

___

### intersectSegmentSegment

▸ **intersectSegmentSegment**(`a1`, `a2`, `b1`, `b2`): [`Intersection`](/apidocs/classes/Intersection.md)

Checks if a segment intersects another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a1` | [`Point`](/apidocs/classes/Point.md) | boundary point of segment |
| `a2` | [`Point`](/apidocs/classes/Point.md) | other boundary point of segment |
| `b1` | [`Point`](/apidocs/classes/Point.md) | boundary point of segment |
| `b2` | [`Point`](/apidocs/classes/Point.md) | other boundary point of segment |

#### Returns

[`Intersection`](/apidocs/classes/Intersection.md)

**`See`**

[intersectLineLine](/apidocs/classes/Intersection.md#intersectlineline) for line intersection

**`Static`**

#### Defined in

[src/Intersection.ts:202](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L202)

___

### isPointContained

▸ **isPointContained**(`T`, `A`, `B`, `infinite?`): `boolean`

check if point T is on the segment or line defined between A and B

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `T` | [`Point`](/apidocs/classes/Point.md) | `undefined` | the point we are checking for |
| `A` | [`Point`](/apidocs/classes/Point.md) | `undefined` | one extremity of the segment |
| `B` | [`Point`](/apidocs/classes/Point.md) | `undefined` | the other extremity of the segment |
| `infinite?` | `boolean` | `false` | if true checks if `T` is on the line defined by `A` and `B` |

#### Returns

`boolean`

true if `T` is contained

#### Defined in

[src/Intersection.ts:51](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L51)

___

### isPointInPolygon

▸ **isPointInPolygon**(`point`, `points`): `boolean`

Use the ray casting algorithm to determine if point is in the polygon defined by points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) |  |
| `points` | [`Point`](/apidocs/classes/Point.md)[] | polygon points |

#### Returns

`boolean`

**`See`**

https://en.wikipedia.org/wiki/Point_in_polygon

#### Defined in

[src/Intersection.ts:91](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/Intersection.ts#L91)
