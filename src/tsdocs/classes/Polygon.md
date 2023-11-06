# Class: Polygon

## Hierarchy

- [`Polyline`](/apidocs/classes/Polyline.md)

  ↳ **`Polygon`**

## Constructors

### constructor

**new Polygon**(`points?`, `options?`): [`Polygon`](/apidocs/classes/Polygon.md)

Constructor

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `points` | [`XY`](/apidocs/interfaces/XY.md)[] | `[]` | Array of points (where each point is an object with x and y) |
| `options?` | `Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> | `undefined` | Options object |

#### Returns

[`Polygon`](/apidocs/classes/Polygon.md)

thisArg

**`Example`**

```ts
var poly = new Polyline([
    { x: 10, y: 10 },
    { x: 50, y: 30 },
    { x: 40, y: 70 },
    { x: 60, y: 50 },
    { x: 100, y: 150 },
    { x: 40, y: 100 }
  ], {
  stroke: 'red',
  left: 100,
  top: 100
});
```

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[constructor](/apidocs/classes/Polyline.md#constructor)

#### Defined in

[src/shapes/Polyline.ts:110](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L110)

## Properties

### exactBoundingBox

 **exactBoundingBox**: `boolean`

WARNING: Feature in progress
Calculate the exact bounding box taking in account strokeWidth on acute angles
this will be turned to true by default on fabric 6.0
maybe will be left in as an optimization since calculations may be slow

**`Deprecated`**

**`Default`**

```ts
false
```

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[exactBoundingBox](/apidocs/classes/Polyline.md#exactboundingbox)

#### Defined in

[src/shapes/Polyline.ts:54](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L54)

___

### pathOffset

 **pathOffset**: [`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[pathOffset](/apidocs/classes/Polyline.md#pathoffset)

#### Defined in

[src/shapes/Polyline.ts:83](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L83)

___

### points

 **points**: [`XY`](/apidocs/interfaces/XY.md)[]

Points array

**`Default`**

```ts

```

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[points](/apidocs/classes/Polyline.md#points)

#### Defined in

[src/shapes/Polyline.ts:43](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L43)

___

### strokeDiff

 **strokeDiff**: [`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[strokeDiff](/apidocs/classes/Polyline.md#strokediff)

#### Defined in

[src/shapes/Polyline.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L89)

___

### strokeOffset

 **strokeOffset**: [`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[strokeOffset](/apidocs/classes/Polyline.md#strokeoffset)

#### Defined in

[src/shapes/Polyline.ts:85](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L85)

___

### ATTRIBUTE\_NAMES

 `Static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [Polyline.fromElement](/apidocs/classes/Polyline.md#fromelement))

**`Static`**

**`Member Of`**

Polyline
@see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[ATTRIBUTE_NAMES](/apidocs/classes/Polyline.md#attribute_names)

#### Defined in

[src/shapes/Polyline.ts:369](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L369)

___

### cacheProperties

 `Static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[cacheProperties](/apidocs/classes/Polyline.md#cacheproperties)

#### Defined in

[src/shapes/Polyline.ts:87](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L87)

___

### layoutProperties

 `Static` **layoutProperties**: keyof [`Polyline`](/apidocs/classes/Polyline.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

A list of properties that if changed trigger a recalculation of dimensions

**`Todo`**

check if you really need to recalculate for all cases

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[layoutProperties](/apidocs/classes/Polyline.md#layoutproperties)

#### Defined in

[src/shapes/Polyline.ts:72](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L72)

___

### ownDefaults

 `Static` **ownDefaults**: `Record`\<`string`, `any`\> = `polylineDefaultValues`

#### Overrides

[Polyline](/apidocs/classes/Polyline.md).[ownDefaults](/apidocs/classes/Polyline.md#owndefaults)

#### Defined in

[src/shapes/Polygon.ts:5](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polygon.ts#L5)

___

### type

 `Static` **type**: `string` = `'Polygon'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[Polyline](/apidocs/classes/Polyline.md).[type](/apidocs/classes/Polyline.md#type)

#### Defined in

[src/shapes/Polygon.ts:7](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polygon.ts#L7)

## Accessors

### type

`get` **type**(): `string`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists because is very hard to catch all the ways in which a type value
could be set in the instance

#### Returns

`string`

**`TODO`**

add sustainable warning message

**`Deprecated`**

#### Inherited from

Polyline.type

#### Defined in

[src/shapes/Object/Object.ts:290](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L290)

`set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

Polyline.type

#### Defined in

[src/shapes/Object/Object.ts:298](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L298)

## Methods

### \_calcDimensions

**_calcDimensions**(`options?`): `Object`

Calculate the polygon bounding box

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`TProjectStrokeOnPointsOptions`](/apidocs/modules/util.md#tprojectstrokeonpointsoptions)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `left` | `number` |
| `pathOffset` | [`Point`](/apidocs/classes/Point.md) |
| `strokeDiff` | [`Point`](/apidocs/classes/Point.md) |
| `strokeOffset` | [`Point`](/apidocs/classes/Point.md) |
| `top` | `number` |
| `width` | `number` |

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[_calcDimensions](/apidocs/classes/Polyline.md#_calcdimensions)

#### Defined in

[src/shapes/Polyline.ts:131](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L131)

___

### \_findCenterFromElement

**_findCenterFromElement**(): [`Point`](/apidocs/classes/Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates, by look at the polyline/polygon points.

#### Returns

[`Point`](/apidocs/classes/Point.md)

center point from element coordinates

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[_findCenterFromElement](/apidocs/classes/Polyline.md#_findcenterfromelement)

#### Defined in

[src/shapes/Polyline.ts:190](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L190)

___

### \_getNonTransformedDimensions

**_getNonTransformedDimensions**(): [`Point`](/apidocs/classes/Point.md)

stroke is taken in account in size

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[_getNonTransformedDimensions](/apidocs/classes/Polyline.md#_getnontransformeddimensions)

#### Defined in

[src/shapes/Polyline.ts:214](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L214)

___

### \_getTransformedDimensions

**_getTransformedDimensions**(`options?`): [`Point`](/apidocs/classes/Point.md)

stroke and skewing are taken into account when projecting stroke on points,
therefore we don't want the default calculation to account for skewing as well.
Though it is possible to pass `width` and `height` in `options`, doing so is very strange, use with discretion.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[_getTransformedDimensions](/apidocs/classes/Polyline.md#_gettransformeddimensions)

#### Defined in

[src/shapes/Polyline.ts:228](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L228)

___

### \_render

**_render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[_render](/apidocs/classes/Polyline.md#_render)

#### Defined in

[src/shapes/Polyline.ts:333](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L333)

___

### \_set

**_set**(`key`, `value`): [`Polygon`](/apidocs/classes/Polygon.md)

Recalculates dimensions when changing skew and scale

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Polygon`](/apidocs/classes/Polygon.md)

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[_set](/apidocs/classes/Polyline.md#_set)

#### Defined in

[src/shapes/Polyline.ts:264](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L264)

___

### \_toSVG

**_toSVG**(): `string`[]

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[_toSVG](/apidocs/classes/Polyline.md#_tosvg)

#### Defined in

[src/shapes/Polyline.ts:304](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L304)

___

### complexity

**complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[complexity](/apidocs/classes/Polyline.md#complexity)

#### Defined in

[src/shapes/Polyline.ts:357](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L357)

___

### isOpen

**isOpen**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Polyline](/apidocs/classes/Polyline.md).[isOpen](/apidocs/classes/Polyline.md#isopen)

#### Defined in

[src/shapes/Polygon.ts:16](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polygon.ts#L16)

___

### setBoundingBox

**setBoundingBox**(`adjustPosition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adjustPosition?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[setBoundingBox](/apidocs/classes/Polyline.md#setboundingbox)

#### Defined in

[src/shapes/Polyline.ts:199](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L199)

___

### setDimensions

**setDimensions**(): `void`

#### Returns

`void`

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[setDimensions](/apidocs/classes/Polyline.md#setdimensions)

#### Defined in

[src/shapes/Polyline.ts:195](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L195)

___

### toObject

**toObject**\<`T`, `K`\>(`propertiesToInclude?`): `Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md)

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`Polygon`](/apidocs/classes/Polygon.md)\>, keyof [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md)\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md)

Object representation of an instance

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[toObject](/apidocs/classes/Polyline.md#toobject)

#### Defined in

[src/shapes/Polyline.ts:289](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L289)

___

### fromElement

**fromElement**(`element`, `options?`, `cssRules?`): `Promise`\<[`Polyline`](/apidocs/classes/Polyline.md)\<\{ `signal?`: `AbortSignal`  }, [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

Returns Polyline instance from an SVG element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | Element to parser |
| `options?` | [`Abortable`](/apidocs/modules.md#abortable) | Options object |
| `cssRules?` | `CSSRules` | - |

#### Returns

`Promise`\<[`Polyline`](/apidocs/classes/Polyline.md)\<\{ `signal?`: `AbortSignal`  }, [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Polyline

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[fromElement](/apidocs/classes/Polyline.md#fromelement)

#### Defined in

[src/shapes/Polyline.ts:378](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L378)

___

### fromObject

**fromObject**\<`T`\>(`object`): `Promise`\<[`Polyline`](/apidocs/classes/Polyline.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

Returns Polyline instance from an object representation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | Object to create an instance from |

#### Returns

`Promise`\<[`Polyline`](/apidocs/classes/Polyline.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Polyline

#### Inherited from

[Polyline](/apidocs/classes/Polyline.md).[fromObject](/apidocs/classes/Polyline.md#fromobject)

#### Defined in

[src/shapes/Polyline.ts:406](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L406)

___

### getDefaults

**getDefaults**(): `Object`

#### Returns

`Object`

#### Overrides

[Polyline](/apidocs/classes/Polyline.md).[getDefaults](/apidocs/classes/Polyline.md#getdefaults)

#### Defined in

[src/shapes/Polygon.ts:9](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polygon.ts#L9)
