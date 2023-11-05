# Class: Color

**`Tutorial`**

[colors](http://fabricjs.com/fabric-intro-part-2/#colors)

## Table of contents

### Constructors

- [constructor](/apidocs/classes/Color.md#constructor)

### Properties

- [\_source](/apidocs/classes/Color.md#_source)

### Methods

- [\_tryParsingColor](/apidocs/classes/Color.md#_tryparsingcolor)
- [getAlpha](/apidocs/classes/Color.md#getalpha)
- [getSource](/apidocs/classes/Color.md#getsource)
- [overlayWith](/apidocs/classes/Color.md#overlaywith)
- [setAlpha](/apidocs/classes/Color.md#setalpha)
- [setSource](/apidocs/classes/Color.md#setsource)
- [toBlackWhite](/apidocs/classes/Color.md#toblackwhite)
- [toGrayscale](/apidocs/classes/Color.md#tograyscale)
- [toHex](/apidocs/classes/Color.md#tohex)
- [toHexa](/apidocs/classes/Color.md#tohexa)
- [toHsl](/apidocs/classes/Color.md#tohsl)
- [toHsla](/apidocs/classes/Color.md#tohsla)
- [toRgb](/apidocs/classes/Color.md#torgb)
- [toRgba](/apidocs/classes/Color.md#torgba)
- [fromHex](/apidocs/classes/Color.md#fromhex)
- [fromHsl](/apidocs/classes/Color.md#fromhsl)
- [fromHsla](/apidocs/classes/Color.md#fromhsla)
- [fromRgb](/apidocs/classes/Color.md#fromrgb)
- [fromRgba](/apidocs/classes/Color.md#fromrgba)
- [sourceFromHex](/apidocs/classes/Color.md#sourcefromhex)
- [sourceFromHsl](/apidocs/classes/Color.md#sourcefromhsl)
- [sourceFromRgb](/apidocs/classes/Color.md#sourcefromrgb)

## Constructors

### constructor

• **new Color**(`color?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color?` | [`TColorArg`](/apidocs/modules.md#tcolorarg) | optional in hex or rgb(a) or hsl format or from known color list |

#### Defined in

[src/color/Color.ts:23](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L23)

## Properties

### \_source

• `Private` **\_source**: [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

#### Defined in

[src/color/Color.ts:17](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L17)

## Methods

### \_tryParsingColor

▸ `Private` **_tryParsingColor**(`color?`): [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color?` | `string` | Color value to parse |

#### Returns

[`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

#### Defined in

[src/color/Color.ts:42](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L42)

___

### getAlpha

▸ **getAlpha**(): `number`

Gets value of alpha channel for this color

#### Returns

`number`

0-1

#### Defined in

[src/color/Color.ts:129](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L129)

___

### getSource

▸ **getSource**(): [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Returns

[`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

#### Defined in

[src/color/Color.ts:60](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L60)

___

### overlayWith

▸ **overlayWith**(`otherColor`): [`Color`](/apidocs/classes/Color.md)

Overlays color with another color

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherColor` | `string` \| [`Color`](/apidocs/classes/Color.md) |

#### Returns

[`Color`](/apidocs/classes/Color.md)

thisArg

#### Defined in

[src/color/Color.ts:169](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L169)

___

### setAlpha

▸ **setAlpha**(`alpha`): [`Color`](/apidocs/classes/Color.md)

Sets value of alpha channel for this color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alpha` | `number` | Alpha value 0-1 |

#### Returns

[`Color`](/apidocs/classes/Color.md)

thisArg

#### Defined in

[src/color/Color.ts:138](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L138)

___

### setSource

▸ **setSource**(`source`): `void`

Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource) |

#### Returns

`void`

#### Defined in

[src/color/Color.ts:68](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L68)

___

### toBlackWhite

▸ **toBlackWhite**(`threshold`): [`Color`](/apidocs/classes/Color.md)

Transforms color to its black and white representation

#### Parameters

| Name | Type |
| :------ | :------ |
| `threshold` | `number` |

#### Returns

[`Color`](/apidocs/classes/Color.md)

thisArg

#### Defined in

[src/color/Color.ts:157](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L157)

___

### toGrayscale

▸ **toGrayscale**(): [`Color`](/apidocs/classes/Color.md)

Transforms color to its grayscale representation

#### Returns

[`Color`](/apidocs/classes/Color.md)

thisArg

#### Defined in

[src/color/Color.ts:147](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L147)

___

### toHex

▸ **toHex**(): `string`

Returns color representation in HEX format

#### Returns

`string`

ex: FF5555

#### Defined in

[src/color/Color.ts:111](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L111)

___

### toHexa

▸ **toHexa**(): `string`

Returns color representation in HEXA format

#### Returns

`string`

ex: FF5555CC

#### Defined in

[src/color/Color.ts:120](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L120)

___

### toHsl

▸ **toHsl**(): `string`

Returns color representation in HSL format

#### Returns

`string`

ex: hsl(0-360,0%-100%,0%-100%)

#### Defined in

[src/color/Color.ts:93](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L93)

___

### toHsla

▸ **toHsla**(): `string`

Returns color representation in HSLA format

#### Returns

`string`

ex: hsla(0-360,0%-100%,0%-100%,0-1)

#### Defined in

[src/color/Color.ts:102](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L102)

___

### toRgb

▸ **toRgb**(): `string`

Returns color representation in RGB format

#### Returns

`string`

ex: rgb(0-255,0-255,0-255)

#### Defined in

[src/color/Color.ts:76](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L76)

___

### toRgba

▸ **toRgba**(): `string`

Returns color representation in RGBA format

#### Returns

`string`

ex: rgba(0-255,0-255,0-255,0-1)

#### Defined in

[src/color/Color.ts:85](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L85)

___

### fromHex

▸ `Static` **fromHex**(`color`): [`Color`](/apidocs/classes/Color.md)

Returns new color object, when given a color in HEX format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | Color value ex: FF5555 |

#### Returns

[`Color`](/apidocs/classes/Color.md)

**`Static`**

**`Member Of`**

Color

#### Defined in

[src/color/Color.ts:293](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L293)

___

### fromHsl

▸ `Static` **fromHsl**(`color`): [`Color`](/apidocs/classes/Color.md)

Returns new color object, when given a color in HSL format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | Color value ex: hsl(0-260,0%-100%,0%-100%) |

#### Returns

[`Color`](/apidocs/classes/Color.md)

**`Member Of`**

Color

#### Defined in

[src/color/Color.ts:232](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L232)

___

### fromHsla

▸ `Static` **fromHsla**(`color`): [`Color`](/apidocs/classes/Color.md)

Returns new color object, when given a color in HSLA format

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

[`Color`](/apidocs/classes/Color.md)

**`Static`**

**`Function`**

**`Member Of`**

Color

#### Defined in

[src/color/Color.ts:244](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L244)

___

### fromRgb

▸ `Static` **fromRgb**(`color`): [`Color`](/apidocs/classes/Color.md)

Returns new color object, when given a color in RGB format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | Color value ex: rgb(0-255,0-255,0-255) |

#### Returns

[`Color`](/apidocs/classes/Color.md)

**`Member Of`**

Color

#### Defined in

[src/color/Color.ts:191](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L191)

___

### fromRgba

▸ `Static` **fromRgba**(`color`): [`Color`](/apidocs/classes/Color.md)

Returns new color object, when given a color in RGBA format

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

[`Color`](/apidocs/classes/Color.md)

**`Static`**

**`Function`**

**`Member Of`**

Color

#### Defined in

[src/color/Color.ts:203](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L203)

___

### sourceFromHex

▸ `Static` **sourceFromHex**(`color`): `undefined` \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HEX format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | ex: FF5555 or FF5544CC (RGBa) |

#### Returns

`undefined` \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

source

**`Static`**

**`Member Of`**

Color

#### Defined in

[src/color/Color.ts:304](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L304)

___

### sourceFromHsl

▸ `Static` **sourceFromHsl**(`color`): `undefined` \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1) |

#### Returns

`undefined` \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

source

**`Member Of`**

Color

**`See`**

http://http://www.w3.org/TR/css3-color/#hsl-color

#### Defined in

[src/color/Color.ts:256](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L256)

___

### sourceFromRgb

▸ `Static` **sourceFromRgb**(`color`): `undefined` \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%) |

#### Returns

`undefined` \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource)

source

**`Member Of`**

Color

#### Defined in

[src/color/Color.ts:213](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/color/Color.ts#L213)
