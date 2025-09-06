---
editUrl: false
next: false
prev: false
title: "Color"
---

Defined in: [src/color/Color.ts:17](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L17)

Color common color operations

## See

[colors](http://fabricjs.com/fabric-intro-part-2/#colors)

## Constructors

### Constructor

> **new Color**(`color?`): `Color`

Defined in: [src/color/Color.ts:25](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L25)

#### Parameters

##### color?

[`TColorArg`](/api/type-aliases/tcolorarg/)

optional in hex or rgb(a) or hsl format or from known color list

#### Returns

`Color`

## Properties

### isUnrecognised

> **isUnrecognised**: `boolean` = `false`

Defined in: [src/color/Color.ts:19](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L19)

## Methods

### getAlpha()

> **getAlpha**(): `number`

Defined in: [src/color/Color.ts:133](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L133)

Gets value of alpha channel for this color

#### Returns

`number`

0-1

***

### getSource()

> **getSource**(): [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Defined in: [src/color/Color.ts:64](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L64)

Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Returns

[`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

***

### overlayWith()

> **overlayWith**(`otherColor`): `Color`

Defined in: [src/color/Color.ts:173](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L173)

Overlays color with another color

#### Parameters

##### otherColor

`string` | `Color`

#### Returns

`Color`

thisArg

***

### setAlpha()

> **setAlpha**(`alpha`): `Color`

Defined in: [src/color/Color.ts:142](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L142)

Sets value of alpha channel for this color

#### Parameters

##### alpha

`number`

Alpha value 0-1

#### Returns

`Color`

thisArg

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/color/Color.ts:72](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L72)

Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Parameters

##### source

[`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

#### Returns

`void`

***

### toBlackWhite()

> **toBlackWhite**(`threshold`): `Color`

Defined in: [src/color/Color.ts:161](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L161)

Transforms color to its black and white representation

#### Parameters

##### threshold

`number`

#### Returns

`Color`

thisArg

***

### toGrayscale()

> **toGrayscale**(): `Color`

Defined in: [src/color/Color.ts:151](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L151)

Transforms color to its grayscale representation

#### Returns

`Color`

thisArg

***

### toHex()

> **toHex**(): `string`

Defined in: [src/color/Color.ts:115](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L115)

Returns color representation in HEX format

#### Returns

`string`

ex: FF5555

***

### toHexa()

> **toHexa**(): `string`

Defined in: [src/color/Color.ts:124](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L124)

Returns color representation in HEXA format

#### Returns

`string`

ex: FF5555CC

***

### toHsl()

> **toHsl**(): `string`

Defined in: [src/color/Color.ts:97](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L97)

Returns color representation in HSL format

#### Returns

`string`

ex: hsl(0-360,0%-100%,0%-100%)

***

### toHsla()

> **toHsla**(): `string`

Defined in: [src/color/Color.ts:106](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L106)

Returns color representation in HSLA format

#### Returns

`string`

ex: hsla(0-360,0%-100%,0%-100%,0-1)

***

### toRgb()

> **toRgb**(): `string`

Defined in: [src/color/Color.ts:80](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L80)

Returns color representation in RGB format

#### Returns

`string`

ex: rgb(0-255,0-255,0-255)

***

### toRgba()

> **toRgba**(): `string`

Defined in: [src/color/Color.ts:89](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L89)

Returns color representation in RGBA format

#### Returns

`string`

ex: rgba(0-255,0-255,0-255,0-1)

***

### fromHex()

> `static` **fromHex**(`color`): `Color`

Defined in: [src/color/Color.ts:286](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L286)

Returns new color object, when given a color in HEX format

#### Parameters

##### color

`string`

Color value ex: FF5555

#### Returns

`Color`

***

### fromHsl()

> `static` **fromHsl**(`color`): `Color`

Defined in: [src/color/Color.ts:230](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L230)

Returns new color object, when given a color in HSL format

#### Parameters

##### color

`string`

Color value ex: hsl(0-260,0%-100%,0%-100%)

#### Returns

`Color`

***

### fromHsla()

> `static` **fromHsla**(`color`): `Color`

Defined in: [src/color/Color.ts:239](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L239)

Returns new color object, when given a color in HSLA format

#### Parameters

##### color

`string`

#### Returns

`Color`

***

### fromRgb()

> `static` **fromRgb**(`color`): `Color`

Defined in: [src/color/Color.ts:194](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L194)

Returns new color object, when given a color in RGB format

#### Parameters

##### color

`string`

Color value ex: rgb(0-255,0-255,0-255)

#### Returns

`Color`

***

### fromRgba()

> `static` **fromRgba**(`color`): `Color`

Defined in: [src/color/Color.ts:203](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L203)

Returns new color object, when given a color in RGBA format

#### Parameters

##### color

`string`

#### Returns

`Color`

***

### parseAngletoDegrees()

> `static` **parseAngletoDegrees**(`value`): `number`

Defined in: [src/color/Color.ts:318](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L318)

Converts a string that could be any angle notation (50deg, 0.5turn, 2rad)
into degrees without the 'deg' suffix

#### Parameters

##### value

`string`

ex: 0deg, 0.5turn, 2rad

#### Returns

`number`

number in degrees or NaN if inputs are invalid

***

### sourceFromHex()

> `static` **sourceFromHex**(`color`): `undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Defined in: [src/color/Color.ts:295](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L295)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HEX format

#### Parameters

##### color

`string`

ex: FF5555 or FF5544CC (RGBa)

#### Returns

`undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

source

***

### sourceFromHsl()

> `static` **sourceFromHsl**(`color`): `undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Defined in: [src/color/Color.ts:250](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L250)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>

#### Parameters

##### color

`string`

Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)

#### Returns

`undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

source

#### See

http://http://www.w3.org/TR/css3-color/#hsl-color

***

### sourceFromRgb()

> `static` **sourceFromRgb**(`color`): `undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Defined in: [src/color/Color.ts:212](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/color/Color.ts#L212)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format

#### Parameters

##### color

`string`

Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)

#### Returns

`undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

source
