---
editUrl: false
next: false
prev: false
title: "Shadow"
---

Defined in: [src/Shadow.ts:63](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L63)

## Constructors

### Constructor

> **new Shadow**(`options?`): `Shadow`

Defined in: [src/Shadow.ts:124](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L124)

#### Parameters

##### options?

`Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<`Shadow`\>\>

Options object with any of color, blur, offsetX, offsetY properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px")

#### Returns

`Shadow`

#### See

[demo](http://fabricjs.com/shadows|Shadow)

### Constructor

> **new Shadow**(`svgAttribute`): `Shadow`

Defined in: [src/Shadow.ts:125](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L125)

#### Parameters

##### svgAttribute

`string`

#### Returns

`Shadow`

## Properties

### affectStroke

> **affectStroke**: `boolean`

Defined in: [src/Shadow.ts:96](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L96)

Whether the shadow should affect stroke operations

#### Default

```ts

```

***

### blur

> **blur**: `number`

Defined in: [src/Shadow.ts:75](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L75)

Shadow blur

***

### color

> **color**: `string`

Defined in: [src/Shadow.ts:69](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L69)

Shadow color

#### Default

```ts

```

***

### id

> **id**: `number`

Defined in: [src/Shadow.ts:114](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L114)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Defined in: [src/Shadow.ts:103](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L103)

Indicates whether toObject should include default values

#### Default

```ts

```

***

### nonScaling

> **nonScaling**: `boolean`

Defined in: [src/Shadow.ts:112](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L112)

When `false`, the shadow will scale with the object.
When `true`, the shadow's offsetX, offsetY, and blur will not be affected by the object's scale.
default to false

#### Default

```ts

```

***

### offsetX

> **offsetX**: `number`

Defined in: [src/Shadow.ts:82](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L82)

Shadow horizontal offset

#### Default

```ts

```

***

### offsetY

> **offsetY**: `number`

Defined in: [src/Shadow.ts:89](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L89)

Shadow vertical offset

#### Default

```ts

```

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<`Shadow`\>\> = `shadowDefaultValues`

Defined in: [src/Shadow.ts:116](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L116)

***

### type

> `static` **type**: `string` = `'shadow'`

Defined in: [src/Shadow.ts:118](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L118)

## Methods

### toObject()

> **toObject**(): `Partial`\<[`SerializedShadowOptions`](/api/type-aliases/serializedshadowoptions/)\>

Defined in: [src/Shadow.ts:221](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L221)

Returns object representation of a shadow

#### Returns

`Partial`\<[`SerializedShadowOptions`](/api/type-aliases/serializedshadowoptions/)\>

Object representation of a shadow instance

***

### toString()

> **toString**(): `string`

Defined in: [src/Shadow.ts:157](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L157)

Returns a string representation of an instance

#### Returns

`string`

Returns CSS3 text-shadow declaration

#### See

http://www.w3.org/TR/css-text-decor-3/#text-shadow

***

### toSVG()

> **toSVG**(`object`): `string`

Defined in: [src/Shadow.ts:166](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L166)

Returns SVG representation of a shadow

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

#### Returns

`string`

SVG representation of a shadow

***

### fromObject()

> `static` **fromObject**(`options`): `Promise`\<`Shadow`\>

Defined in: [src/Shadow.ts:237](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L237)

#### Parameters

##### options

`Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<`Shadow`\>\>

#### Returns

`Promise`\<`Shadow`\>

***

### parseShadow()

> `static` **parseShadow**(`value`): `object`

Defined in: [src/Shadow.ts:137](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Shadow.ts#L137)

#### Parameters

##### value

`string`

Shadow value to parse

#### Returns

`object`

Shadow object with color, offsetX, offsetY and blur

##### blur

> **blur**: `number`

##### color

> **color**: `string`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`
