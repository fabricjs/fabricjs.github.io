# Class: Polyline\<Props, SProps, EventSpec\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> = `Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> |
| `SProps` | extends [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md) = [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

## Hierarchy

- [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Props`, `SProps`, `EventSpec`\>

  ↳ **`Polyline`**

  ↳↳ [`Polygon`](/apidocs/classes/Polygon.md)

## Constructors

### constructor

**new Polyline**\<`Props`, `SProps`, `EventSpec`\>(`points?`, `options?`): [`Polyline`](/apidocs/classes/Polyline.md)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> = `Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> |
| `SProps` | extends [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md) = [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\<`EventSpec`\> = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `points` | [`XY`](/apidocs/interfaces/XY.md)[] | `[]` | Array of points (where each point is an object with x and y) |
| `options?` | `Props` | `undefined` | Options object |

#### Returns

[`Polyline`](/apidocs/classes/Polyline.md)\<`Props`, `SProps`, `EventSpec`\>

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

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[constructor](/apidocs/classes/FabricObject.md#constructor)

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

#### Defined in

[src/shapes/Polyline.ts:54](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L54)

___

### initialized

 `Private` **initialized**: `undefined` \| ``true``

#### Defined in

[src/shapes/Polyline.ts:56](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L56)

___

### pathOffset

 **pathOffset**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/shapes/Polyline.ts:83](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L83)

___

### points

 **points**: [`XY`](/apidocs/interfaces/XY.md)[]

Points array

**`Default`**

```ts

```

#### Defined in

[src/shapes/Polyline.ts:43](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L43)

___

### strokeDiff

 **strokeDiff**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/shapes/Polyline.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L89)

___

### strokeOffset

 **strokeOffset**: [`Point`](/apidocs/classes/Point.md)

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

#### Defined in

[src/shapes/Polyline.ts:369](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L369)

___

### cacheProperties

 `Static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[cacheProperties](/apidocs/classes/FabricObject.md#cacheproperties)

#### Defined in

[src/shapes/Polyline.ts:87](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L87)

___

### layoutProperties

 `Static` **layoutProperties**: keyof [`Polyline`](/apidocs/classes/Polyline.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

A list of properties that if changed trigger a recalculation of dimensions

**`Todo`**

check if you really need to recalculate for all cases

#### Defined in

[src/shapes/Polyline.ts:72](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L72)

___

### ownDefaults

 `Static` **ownDefaults**: `Record`\<`string`, `any`\> = `polylineDefaultValues`

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[ownDefaults](/apidocs/classes/FabricObject.md#owndefaults)

#### Defined in

[src/shapes/Polyline.ts:58](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L58)

___

### type

 `Static` **type**: `string` = `'Polyline'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[type](/apidocs/classes/FabricObject.md#type)

#### Defined in

[src/shapes/Polyline.ts:60](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L60)

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

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_findCenterFromElement](/apidocs/classes/FabricObject.md#_findcenterfromelement)

#### Defined in

[src/shapes/Polyline.ts:190](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L190)

___

### \_getNonTransformedDimensions

**_getNonTransformedDimensions**(): [`Point`](/apidocs/classes/Point.md)

stroke is taken in account in size

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_getNonTransformedDimensions](/apidocs/classes/FabricObject.md#_getnontransformeddimensions)

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

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_getTransformedDimensions](/apidocs/classes/FabricObject.md#_gettransformeddimensions)

#### Defined in

[src/shapes/Polyline.ts:228](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L228)

___

### \_projectStrokeOnPoints

**_projectStrokeOnPoints**(`options`): [`TProjection`](/apidocs/modules/util.md#tprojection)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TProjectStrokeOnPointsOptions`](/apidocs/modules/util.md#tprojectstrokeonpointsoptions) |

#### Returns

[`TProjection`](/apidocs/modules/util.md#tprojection)[]

#### Defined in

[src/shapes/Polyline.ts:123](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L123)

___

### \_render

**_render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_render](/apidocs/classes/FabricObject.md#_render)

#### Defined in

[src/shapes/Polyline.ts:333](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L333)

___

### \_set

**_set**(`key`, `value`): [`Polyline`](/apidocs/classes/Polyline.md)\<`Props`, `SProps`, `EventSpec`\>

Recalculates dimensions when changing skew and scale

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Polyline`](/apidocs/classes/Polyline.md)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_set](/apidocs/classes/FabricObject.md#_set)

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

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_toSVG](/apidocs/classes/FabricObject.md#_tosvg)

#### Defined in

[src/shapes/Polyline.ts:304](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L304)

___

### complexity

**complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[complexity](/apidocs/classes/FabricObject.md#complexity)

#### Defined in

[src/shapes/Polyline.ts:357](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L357)

___

### isOpen

**isOpen**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/shapes/Polyline.ts:119](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L119)

___

### setBoundingBox

**setBoundingBox**(`adjustPosition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adjustPosition?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/shapes/Polyline.ts:199](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L199)

___

### setDimensions

**setDimensions**(): `void`

#### Returns

`void`

#### Defined in

[src/shapes/Polyline.ts:195](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L195)

___

### toObject

**toObject**\<`T`, `K`\>(`propertiesToInclude?`): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`\<`Props` & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`Polyline`](/apidocs/classes/Polyline.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

Object representation of an instance

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[toObject](/apidocs/classes/FabricObject.md#toobject)

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

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[fromObject](/apidocs/classes/FabricObject.md#fromobject)

#### Defined in

[src/shapes/Polyline.ts:406](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L406)

___

### getDefaults

**getDefaults**(): `Object`

#### Returns

`Object`

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[getDefaults](/apidocs/classes/FabricObject.md#getdefaults)

#### Defined in

[src/shapes/Polyline.ts:62](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Polyline.ts#L62)
