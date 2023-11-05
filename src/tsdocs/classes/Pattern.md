# Class: Pattern

**`See`**

 - [demo](http://fabricjs.com/patterns)
 - [demo](http://fabricjs.com/dynamic-patterns)

## Table of contents

### Constructors

- [constructor](/apidocs/classes/Pattern.md#constructor)

### Properties

- [crossOrigin](/apidocs/classes/Pattern.md#crossorigin)
- [excludeFromExport](/apidocs/classes/Pattern.md#excludefromexport)
- [id](/apidocs/classes/Pattern.md#id)
- [offsetX](/apidocs/classes/Pattern.md#offsetx)
- [offsetY](/apidocs/classes/Pattern.md#offsety)
- [patternTransform](/apidocs/classes/Pattern.md#patterntransform)
- [repeat](/apidocs/classes/Pattern.md#repeat)
- [source](/apidocs/classes/Pattern.md#source)
- [type](/apidocs/classes/Pattern.md#type)

### Accessors

- [type](/apidocs/classes/Pattern.md#type-1)

### Methods

- [isCanvasSource](/apidocs/classes/Pattern.md#iscanvassource)
- [isImageSource](/apidocs/classes/Pattern.md#isimagesource)
- [sourceToString](/apidocs/classes/Pattern.md#sourcetostring)
- [toLive](/apidocs/classes/Pattern.md#tolive)
- [toObject](/apidocs/classes/Pattern.md#toobject)
- [toSVG](/apidocs/classes/Pattern.md#tosvg)
- [fromObject](/apidocs/classes/Pattern.md#fromobject)

## Constructors

### constructor

• **new Pattern**(`options?`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`<`Pick`<[`Pattern`](/apidocs/classes/Pattern.md), `ExportedKeys`\>\> | Options object |

#### Defined in

[src/Pattern/Pattern.ts:95](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L95)

## Properties

### crossOrigin

• **crossOrigin**: [`TCrossOrigin`](/apidocs/modules.md#tcrossorigin) = `''`

**`Default`**

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:63](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L63)

___

### excludeFromExport

• `Optional` **excludeFromExport**: `boolean`

If true, this object will not be exported during the serialization of a canvas

#### Defined in

[src/Pattern/Pattern.ts:82](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L82)

___

### id

• `Readonly` **id**: `number`

ID used for SVG export functionalities

#### Defined in

[src/Pattern/Pattern.ts:88](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L88)

___

### offsetX

• **offsetX**: `number` = `0`

Pattern horizontal offset from object's left/top corner

**`Default`**

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:50](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L50)

___

### offsetY

• **offsetY**: `number` = `0`

Pattern vertical offset from object's left/top corner

**`Default`**

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:57](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L57)

___

### patternTransform

• **patternTransform**: ``null`` \| [`TMat2D`](/apidocs/modules.md#tmat2d) = `null`

transform matrix to change the pattern, imported from svgs.

**`Todo`**

verify if using the identity matrix as default makes the rest of the code more easy

**`Default`**

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:71](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L71)

___

### repeat

• **repeat**: [`PatternRepeat`](/apidocs/modules.md#patternrepeat) = `'repeat'`

**`Defaults`**

#### Defined in

[src/Pattern/Pattern.ts:43](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L43)

___

### source

• **source**: `CanvasImageSource`

The actual pixel source of the pattern

#### Defined in

[src/Pattern/Pattern.ts:76](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L76)

___

### type

▪ `Static` **type**: `string` = `'Pattern'`

#### Defined in

[src/Pattern/Pattern.ts:21](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L21)

## Accessors

### type

• `get` **type**(): `string`

Legacy identifier of the class. Prefer using this.constructor.type 'Pattern'
or utils like isPattern, or instance of to indentify a pattern in your code.
Will be removed in future versiones

#### Returns

`string`

**`TODO`**

add sustainable warning message

**`Deprecated`**

#### Defined in

[src/Pattern/Pattern.ts:31](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L31)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/Pattern/Pattern.ts:35](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L35)

## Methods

### isCanvasSource

▸ **isCanvasSource**(): this is Object

#### Returns

this is Object

true if [source](/apidocs/classes/Pattern.md#source) is a <canvas> element

#### Defined in

[src/Pattern/Pattern.ts:112](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L112)

___

### isImageSource

▸ **isImageSource**(): this is Object

#### Returns

this is Object

true if [source](/apidocs/classes/Pattern.md#source) is an <img> element

#### Defined in

[src/Pattern/Pattern.ts:103](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L103)

___

### sourceToString

▸ **sourceToString**(): `string`

#### Returns

`string`

#### Defined in

[src/Pattern/Pattern.ts:116](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L116)

___

### toLive

▸ **toLive**(`ctx`): ``null`` \| `CanvasPattern`

Returns an instance of CanvasPattern

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to create pattern |

#### Returns

``null`` \| `CanvasPattern`

#### Defined in

[src/Pattern/Pattern.ts:129](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L129)

___

### toObject

▸ **toObject**(`propertiesToInclude?`): `Record`<`string`, `any`\>

Returns object representation of a pattern

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Record`<`string`, `any`\>

Object representation of a pattern instance

#### Defined in

[src/Pattern/Pattern.ts:150](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L150)

___

### toSVG

▸ **toSVG**(`«destructured»`): `string`

Returns SVG representation of a pattern

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TSize`](/apidocs/modules.md#tsize) |

#### Returns

`string`

#### Defined in

[src/Pattern/Pattern.ts:170](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L170)

___

### fromObject

▸ `Static` **fromObject**(`«destructured»`, `options`): `Promise`<[`Pattern`](/apidocs/classes/Pattern.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SerializedPatternOptions`](/apidocs/modules.md#serializedpatternoptions) |
| `options` | [`Abortable`](/apidocs/modules.md#abortable) |

#### Returns

`Promise`<[`Pattern`](/apidocs/classes/Pattern.md)\>

#### Defined in

[src/Pattern/Pattern.ts:194](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Pattern/Pattern.ts#L194)
