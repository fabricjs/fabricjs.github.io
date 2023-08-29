# Class: Pattern

**`See`**

 - [demo](http://fabricjs.com/patterns)
 - [demo](http://fabricjs.com/dynamic-patterns)

## Table of contents

### Constructors

- [constructor](Pattern.md#constructor)

### Properties

- [crossOrigin](Pattern.md#crossorigin)
- [excludeFromExport](Pattern.md#excludefromexport)
- [id](Pattern.md#id)
- [offsetX](Pattern.md#offsetx)
- [offsetY](Pattern.md#offsety)
- [patternTransform](Pattern.md#patterntransform)
- [repeat](Pattern.md#repeat)
- [source](Pattern.md#source)
- [type](Pattern.md#type)

### Accessors

- [type](Pattern.md#type-1)

### Methods

- [isCanvasSource](Pattern.md#iscanvassource)
- [isImageSource](Pattern.md#isimagesource)
- [sourceToString](Pattern.md#sourcetostring)
- [toLive](Pattern.md#tolive)
- [toObject](Pattern.md#toobject)
- [toSVG](Pattern.md#tosvg)
- [fromObject](Pattern.md#fromobject)

## Constructors

### constructor

• **new Pattern**(`options?`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`<`Pick`<[`Pattern`](Pattern.md), `ExportedKeys`\>\> | Options object |

#### Defined in

[src/Pattern/Pattern.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L94)

## Properties

### crossOrigin

• **crossOrigin**: [`TCrossOrigin`](../modules.md#tcrossorigin) = `''`

**`Default`**

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L62)

___

### excludeFromExport

• `Optional` **excludeFromExport**: `boolean`

If true, this object will not be exported during the serialization of a canvas

#### Defined in

[src/Pattern/Pattern.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L81)

___

### id

• `Readonly` **id**: `number`

ID used for SVG export functionalities

#### Defined in

[src/Pattern/Pattern.ts:87](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L87)

___

### offsetX

• **offsetX**: `number` = `0`

Pattern horizontal offset from object's left/top corner

**`Default`**

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:49](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L49)

___

### offsetY

• **offsetY**: `number` = `0`

Pattern vertical offset from object's left/top corner

**`Default`**

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:56](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L56)

___

### patternTransform

• **patternTransform**: ``null`` \| [`TMat2D`](../modules.md#tmat2d) = `null`

transform matrix to change the pattern, imported from svgs.

**`Todo`**

verify if using the identity matrix as default makes the rest of the code more easy

**`Default`**

```ts

```

#### Defined in

[src/Pattern/Pattern.ts:70](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L70)

___

### repeat

• **repeat**: [`PatternRepeat`](../modules.md#patternrepeat) = `'repeat'`

**`Defaults`**

#### Defined in

[src/Pattern/Pattern.ts:42](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L42)

___

### source

• **source**: `CanvasImageSource`

The actual pixel source of the pattern

#### Defined in

[src/Pattern/Pattern.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L75)

___

### type

▪ `Static` **type**: `string` = `'Pattern'`

#### Defined in

[src/Pattern/Pattern.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L20)

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

[src/Pattern/Pattern.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L30)

• `set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/Pattern/Pattern.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L34)

## Methods

### isCanvasSource

▸ **isCanvasSource**(): this is Object

#### Returns

this is Object

true if [source](Pattern.md#source) is a <canvas> element

#### Defined in

[src/Pattern/Pattern.ts:111](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L111)

___

### isImageSource

▸ **isImageSource**(): this is Object

#### Returns

this is Object

true if [source](Pattern.md#source) is an <img> element

#### Defined in

[src/Pattern/Pattern.ts:102](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L102)

___

### sourceToString

▸ **sourceToString**(): `string`

#### Returns

`string`

#### Defined in

[src/Pattern/Pattern.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L115)

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

[src/Pattern/Pattern.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L128)

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

[src/Pattern/Pattern.ts:149](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L149)

___

### toSVG

▸ **toSVG**(`«destructured»`): `string`

Returns SVG representation of a pattern

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TSize`](../modules.md#tsize) |

#### Returns

`string`

#### Defined in

[src/Pattern/Pattern.ts:169](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L169)

___

### fromObject

▸ `Static` **fromObject**(`«destructured»`, `options`): `Promise`<[`Pattern`](Pattern.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SerializedPatternOptions`](../modules.md#serializedpatternoptions) |
| `options` | [`Abortable`](../modules.md#abortable) |

#### Returns

`Promise`<[`Pattern`](Pattern.md)\>

#### Defined in

[src/Pattern/Pattern.ts:193](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Pattern/Pattern.ts#L193)
