# Class: Intersection

## Table of contents

### Constructors

- [constructor](Intersection.md#constructor)

### Properties

- [points](Intersection.md#points)
- [status](Intersection.md#status)

### Methods

- [append](Intersection.md#append)
- [includes](Intersection.md#includes)
- [intersectLineLine](Intersection.md#intersectlineline)
- [intersectLinePolygon](Intersection.md#intersectlinepolygon)
- [intersectPolygonPolygon](Intersection.md#intersectpolygonpolygon)
- [intersectPolygonRectangle](Intersection.md#intersectpolygonrectangle)
- [intersectSegmentLine](Intersection.md#intersectsegmentline)
- [intersectSegmentPolygon](Intersection.md#intersectsegmentpolygon)
- [intersectSegmentSegment](Intersection.md#intersectsegmentsegment)
- [isPointContained](Intersection.md#ispointcontained)

## Constructors

### constructor

• **new Intersection**(`status?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status?` | [`IntersectionType`](../modules.md#intersectiontype) |

#### Defined in

[src/Intersection.ts:13](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L13)

## Properties

### points

• **points**: [`Point`](Point.md)[]

#### Defined in

[src/Intersection.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L9)

___

### status

• `Optional` **status**: [`IntersectionType`](../modules.md#intersectiontype)

#### Defined in

[src/Intersection.ts:11](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L11)

## Methods

### append

▸ `Private` **append**(`...points`): [`Intersection`](Intersection.md)

Appends points of intersection

#### Parameters

| Name | Type |
| :------ | :------ |
| `...points` | [`Point`](Point.md)[] |

#### Returns

[`Intersection`](Intersection.md)

thisArg

**`Chainable`**

#### Defined in

[src/Intersection.ts:33](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L33)

___

### includes

▸ `Private` **includes**(`point`): `boolean`

Used to verify if a point is alredy in the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](Point.md) |

#### Returns

`boolean`

#### Defined in

[src/Intersection.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L23)

___

### intersectLineLine

▸ `Static` **intersectLineLine**(`a1`, `a2`, `b1`, `b2`, `aInfinite?`, `bInfinite?`): [`Intersection`](Intersection.md)

Checks if a line intersects another

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a1` | [`Point`](Point.md) | `undefined` |  |
| `a2` | [`Point`](Point.md) | `undefined` |  |
| `b1` | [`Point`](Point.md) | `undefined` |  |
| `b2` | [`Point`](Point.md) | `undefined` |  |
| `aInfinite?` | `boolean` | `true` | check segment intersection by passing `false` |
| `bInfinite?` | `boolean` | `true` | check segment intersection by passing `false` |

#### Returns

[`Intersection`](Intersection.md)

**`See`**

 - [line intersection](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection)
 - [Cramer's rule](https://en.wikipedia.org/wiki/Cramer%27s_rule)

**`Static`**

#### Defined in

[src/Intersection.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L97)

___

### intersectLinePolygon

▸ `Static` **intersectLinePolygon**(`a1`, `a2`, `points`, `infinite?`): [`Intersection`](Intersection.md)

Checks if line intersects polygon

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a1` | [`Point`](Point.md) | `undefined` | point on line |
| `a2` | [`Point`](Point.md) | `undefined` | other point on line |
| `points` | [`Point`](Point.md)[] | `undefined` | polygon points |
| `infinite?` | `boolean` | `true` | check segment intersection by passing `false` |

#### Returns

[`Intersection`](Intersection.md)

**`Todo`**

account for stroke

**`Static`**

**`See`**

[intersectSegmentPolygon](Intersection.md#intersectsegmentpolygon) for segment intersection

#### Defined in

[src/Intersection.ts:194](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L194)

___

### intersectPolygonPolygon

▸ `Static` **intersectPolygonPolygon**(`points1`, `points2`): [`Intersection`](Intersection.md)

Checks if polygon intersects another polygon

#### Parameters

| Name | Type |
| :------ | :------ |
| `points1` | [`Point`](Point.md)[] |
| `points2` | [`Point`](Point.md)[] |

#### Returns

[`Intersection`](Intersection.md)

**`Todo`**

account for stroke

**`Static`**

#### Defined in

[src/Intersection.ts:247](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L247)

___

### intersectPolygonRectangle

▸ `Static` **intersectPolygonRectangle**(`points`, `r1`, `r2`): [`Intersection`](Intersection.md)

Checks if polygon intersects rectangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | [`Point`](Point.md)[] | polygon points |
| `r1` | [`Point`](Point.md) | top left point of rect |
| `r2` | [`Point`](Point.md) | bottom right point of rect |

#### Returns

[`Intersection`](Intersection.md)

**`Static`**

**`See`**

[intersectPolygonPolygon](Intersection.md#intersectpolygonpolygon) for polygon intersection

#### Defined in

[src/Intersection.ts:285](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L285)

___

### intersectSegmentLine

▸ `Static` **intersectSegmentLine**(`s1`, `s2`, `l1`, `l2`): [`Intersection`](Intersection.md)

Checks if a segment intersects a line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s1` | [`Point`](Point.md) | boundary point of segment |
| `s2` | [`Point`](Point.md) | other boundary point of segment |
| `l1` | [`Point`](Point.md) | point on line |
| `l2` | [`Point`](Point.md) | other point on line |

#### Returns

[`Intersection`](Intersection.md)

**`See`**

[intersectLineLine](Intersection.md#intersectlineline) for line intersection

**`Static`**

#### Defined in

[src/Intersection.ts:153](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L153)

___

### intersectSegmentPolygon

▸ `Static` **intersectSegmentPolygon**(`a1`, `a2`, `points`): [`Intersection`](Intersection.md)

Checks if segment intersects polygon

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a1` | [`Point`](Point.md) | boundary point of segment |
| `a2` | [`Point`](Point.md) | other boundary point of segment |
| `points` | [`Point`](Point.md)[] | polygon points |

#### Returns

[`Intersection`](Intersection.md)

**`Static`**

**`See`**

[intersectLinePolygon](Intersection.md#intersectlinepolygon) for line intersection

#### Defined in

[src/Intersection.ts:229](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L229)

___

### intersectSegmentSegment

▸ `Static` **intersectSegmentSegment**(`a1`, `a2`, `b1`, `b2`): [`Intersection`](Intersection.md)

Checks if a segment intersects another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a1` | [`Point`](Point.md) | boundary point of segment |
| `a2` | [`Point`](Point.md) | other boundary point of segment |
| `b1` | [`Point`](Point.md) | boundary point of segment |
| `b2` | [`Point`](Point.md) | other boundary point of segment |

#### Returns

[`Intersection`](Intersection.md)

**`See`**

[intersectLineLine](Intersection.md#intersectlineline) for line intersection

**`Static`**

#### Defined in

[src/Intersection.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L172)

___

### isPointContained

▸ `Static` **isPointContained**(`T`, `A`, `B`, `infinite?`): `boolean`

check if point T is on the segment or line defined between A and B

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `T` | [`Point`](Point.md) | `undefined` | the point we are checking for |
| `A` | [`Point`](Point.md) | `undefined` | one extremity of the segment |
| `B` | [`Point`](Point.md) | `undefined` | the other extremity of the segment |
| `infinite?` | `boolean` | `false` | if true checks if `T` is on the line defined by `A` and `B` |

#### Returns

`boolean`

true if `T` is contained

#### Defined in

[src/Intersection.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Intersection.ts#L51)
