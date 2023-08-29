# Class: Shadow

## Table of contents

### Constructors

- [constructor](Shadow.md#constructor)

### Properties

- [affectStroke](Shadow.md#affectstroke)
- [blur](Shadow.md#blur)
- [color](Shadow.md#color)
- [id](Shadow.md#id)
- [includeDefaultValues](Shadow.md#includedefaultvalues)
- [nonScaling](Shadow.md#nonscaling)
- [offsetX](Shadow.md#offsetx)
- [offsetY](Shadow.md#offsety)
- [ownDefaults](Shadow.md#owndefaults)
- [reOffsetsAndBlur](Shadow.md#reoffsetsandblur)

### Methods

- [toObject](Shadow.md#toobject)
- [toSVG](Shadow.md#tosvg)
- [toString](Shadow.md#tostring)
- [parseShadow](Shadow.md#parseshadow)

## Constructors

### constructor

• **new Shadow**(`options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`<[`TClassProperties`](../modules.md#tclassproperties)<[`Shadow`](Shadow.md)\>\> | Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px") |

**`See`**

[demo](http://fabricjs.com/shadows|Shadow)

#### Defined in

[src/Shadow.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L89)

• **new Shadow**(`svgAttribute`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `svgAttribute` | `string` |

#### Defined in

[src/Shadow.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L90)

## Properties

### affectStroke

• **affectStroke**: `boolean`

Whether the shadow should affect stroke operations

**`Default`**

```ts

```

#### Defined in

[src/Shadow.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L64)

___

### blur

• **blur**: `number`

Shadow blur

#### Defined in

[src/Shadow.ts:43](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L43)

___

### color

• **color**: `string`

Shadow color

**`Default`**

```ts

```

#### Defined in

[src/Shadow.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L37)

___

### id

• **id**: `number`

#### Defined in

[src/Shadow.ts:82](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L82)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

Indicates whether toObject should include default values

**`Default`**

```ts

```

#### Defined in

[src/Shadow.ts:71](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L71)

___

### nonScaling

• **nonScaling**: `boolean`

When `false`, the shadow will scale with the object.
When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
default to false

**`Default`**

```ts

```

#### Defined in

[src/Shadow.ts:80](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L80)

___

### offsetX

• **offsetX**: `number`

Shadow horizontal offset

**`Default`**

```ts

```

#### Defined in

[src/Shadow.ts:50](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L50)

___

### offsetY

• **offsetY**: `number`

Shadow vertical offset

**`Default`**

```ts

```

#### Defined in

[src/Shadow.ts:57](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L57)

___

### ownDefaults

▪ `Static` **ownDefaults**: `Partial`<[`TClassProperties`](../modules.md#tclassproperties)<[`Shadow`](Shadow.md)\>\> = `shadowDefaultValues`

#### Defined in

[src/Shadow.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L84)

___

### reOffsetsAndBlur

▪ `Static` **reOffsetsAndBlur**: `RegExp`

Regex matching shadow offsetX, offsetY and blur (ex: "2px 2px 10px rgba(0,0,0,0.2)", "rgb(0,255,0) 2px 2px")

#### Defined in

[src/Shadow.ts:212](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L212)

## Methods

### toObject

▸ **toObject**(): `Partial`<[`SerializedShadowOptions`](../modules.md#serializedshadowoptions)\>

Returns object representation of a shadow

#### Returns

`Partial`<[`SerializedShadowOptions`](../modules.md#serializedshadowoptions)\>

Object representation of a shadow instance

#### Defined in

[src/Shadow.ts:193](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L193)

___

### toSVG

▸ **toSVG**(`object`): `string`

Returns SVG representation of a shadow

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`string`

SVG representation of a shadow

#### Defined in

[src/Shadow.ts:138](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L138)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

Returns CSS3 text-shadow declaration

**`See`**

http://www.w3.org/TR/css-text-decor-3/#text-shadow

#### Defined in

[src/Shadow.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L129)

___

### parseShadow

▸ `Static` **parseShadow**(`value`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Shadow value to parse |

#### Returns

`Object`

Shadow object with color, offsetX, offsetY and blur

| Name | Type |
| :------ | :------ |
| `blur` | `number` |
| `color` | `string` |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Defined in

[src/Shadow.ts:107](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Shadow.ts#L107)
