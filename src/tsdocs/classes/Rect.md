# Class: Rect\<Props, SProps, EventSpec\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`RectProps`](/apidocs/interfaces/RectProps.md)\> = `Partial`\<[`RectProps`](/apidocs/interfaces/RectProps.md)\> |
| `SProps` | extends [`SerializedRectProps`](/apidocs/interfaces/SerializedRectProps.md) = [`SerializedRectProps`](/apidocs/interfaces/SerializedRectProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

## Hierarchy

- [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Props`, `SProps`, `EventSpec`\>

  ↳ **`Rect`**

## Implements

- [`RectProps`](/apidocs/interfaces/RectProps.md)

## Constructors

### constructor

**new Rect**\<`Props`, `SProps`, `EventSpec`\>(`options?`): [`Rect`](/apidocs/classes/Rect.md)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`RectProps`](/apidocs/interfaces/RectProps.md)\> = `Partial`\<[`RectProps`](/apidocs/interfaces/RectProps.md)\> |
| `SProps` | extends [`SerializedRectProps`](/apidocs/interfaces/SerializedRectProps.md) = [`SerializedRectProps`](/apidocs/interfaces/SerializedRectProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\<`EventSpec`\> = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Props` | Options object |

#### Returns

[`Rect`](/apidocs/classes/Rect.md)\<`Props`, `SProps`, `EventSpec`\>

thisArg

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[constructor](/apidocs/classes/FabricObject.md#constructor)

#### Defined in

[src/shapes/Rect.ts:72](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L72)

## Properties

### rx

 **rx**: `number`

Horizontal border radius

**`Default`**

```ts

```

#### Implementation of

[RectProps](/apidocs/interfaces/RectProps.md).[rx](/apidocs/interfaces/RectProps.md#rx)

#### Defined in

[src/shapes/Rect.ts:45](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L45)

___

### ry

 **ry**: `number`

Vertical border radius

**`Default`**

```ts

```

#### Implementation of

[RectProps](/apidocs/interfaces/RectProps.md).[ry](/apidocs/interfaces/RectProps.md#ry)

#### Defined in

[src/shapes/Rect.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L52)

___

### ATTRIBUTE\_NAMES

 `Static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by `Rect.fromElement`)

**`Static`**

**`Member Of`**

Rect
@see: http://www.w3.org/TR/SVG/shapes.html#RectElement

#### Defined in

[src/shapes/Rect.ts:182](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L182)

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

[src/shapes/Rect.ts:56](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L56)

___

### ownDefaults

 `Static` **ownDefaults**: `Record`\<`string`, `any`\> = `rectDefaultValues`

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[ownDefaults](/apidocs/classes/FabricObject.md#owndefaults)

#### Defined in

[src/shapes/Rect.ts:58](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L58)

___

### type

 `Static` **type**: `string` = `'Rect'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[type](/apidocs/classes/FabricObject.md#type)

#### Defined in

[src/shapes/Rect.ts:54](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L54)

## Methods

### \_initRxRy

**_initRxRy**(): `void`

Initializes rx/ry attributes

#### Returns

`void`

#### Defined in

[src/shapes/Rect.ts:81](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L81)

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

[src/shapes/Rect.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L94)

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

[src/shapes/Rect.ts:165](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L165)

___

### toObject

**toObject**\<`T`, `K`\>(`propertiesToInclude?`): `Pick`\<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`\<`Props` & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`Rect`](/apidocs/classes/Rect.md)\<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`\<`T`, `K`\> & `SProps`

object representation of an instance

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[toObject](/apidocs/classes/FabricObject.md#toobject)

#### Defined in

[src/shapes/Rect.ts:153](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L153)

___

### fromElement

**fromElement**(`element`, `options?`, `cssRules?`): `Promise`\<[`Rect`](/apidocs/classes/Rect.md)\<\{ `height`: `any` ; `left`: `any` ; `signal?`: `AbortSignal` ; `top`: `any` ; `visible`: `boolean` ; `width`: `any`  }, [`SerializedRectProps`](/apidocs/interfaces/SerializedRectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

Returns [Rect](/apidocs/classes/Rect.md) instance from an SVG element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | Element to parse |
| `options?` | [`Abortable`](/apidocs/modules.md#abortable) | Options object |
| `cssRules?` | `CSSRules` | - |

#### Returns

`Promise`\<[`Rect`](/apidocs/classes/Rect.md)\<\{ `height`: `any` ; `left`: `any` ; `signal?`: `AbortSignal` ; `top`: `any` ; `visible`: `boolean` ; `width`: `any`  }, [`SerializedRectProps`](/apidocs/interfaces/SerializedRectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Rect

#### Defined in

[src/shapes/Rect.ts:201](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L201)

___

### getDefaults

**getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[getDefaults](/apidocs/classes/FabricObject.md#getdefaults)

#### Defined in

[src/shapes/Rect.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Rect.ts#L60)
