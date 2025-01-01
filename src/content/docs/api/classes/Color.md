---
editUrl: false
next: false
prev: false
title: "Color"
---

Defined in: [src/color/Color.ts:17](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L17)

Color common color operations

## Tutorial

[colors](http://fabricjs.com/fabric-intro-part-2/#colors)

## Constructors

### new Color()

> **new Color**(`color`?): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:25](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L25)

#### Parameters

##### color?

[`TColorArg`](/api/type-aliases/tcolorarg/)

optional in hex or rgb(a) or hsl format or from known color list

#### Returns

[`Color`](/api/classes/color/)

## Properties

### isUnrecognised

> **isUnrecognised**: `boolean` = `false`

Defined in: [src/color/Color.ts:19](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L19)

## Methods

### getAlpha()

> **getAlpha**(): `number`

Defined in: [src/color/Color.ts:133](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L133)

Gets value of alpha channel for this color

#### Returns

`number`

0-1

***

### getSource()

> **getSource**(): [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Defined in: [src/color/Color.ts:64](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L64)

Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Returns

[`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

***

### overlayWith()

> **overlayWith**(`otherColor`): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:173](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L173)

Overlays color with another color

#### Parameters

##### otherColor

`string` | [`Color`](/api/classes/color/)

#### Returns

[`Color`](/api/classes/color/)

thisArg

***

### setAlpha()

> **setAlpha**(`alpha`): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:142](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L142)

Sets value of alpha channel for this color

#### Parameters

##### alpha

`number`

Alpha value 0-1

#### Returns

[`Color`](/api/classes/color/)

thisArg

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/color/Color.ts:72](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L72)

Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])

#### Parameters

##### source

[`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

#### Returns

`void`

***

### toBlackWhite()

> **toBlackWhite**(`threshold`): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:161](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L161)

Transforms color to its black and white representation

#### Parameters

##### threshold

`number`

#### Returns

[`Color`](/api/classes/color/)

thisArg

***

### toGrayscale()

> **toGrayscale**(): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:151](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L151)

Transforms color to its grayscale representation

#### Returns

[`Color`](/api/classes/color/)

thisArg

***

### toHex()

> **toHex**(): `string`

Defined in: [src/color/Color.ts:115](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L115)

Returns color representation in HEX format

#### Returns

`string`

ex: FF5555

***

### toHexa()

> **toHexa**(): `string`

Defined in: [src/color/Color.ts:124](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L124)

Returns color representation in HEXA format

#### Returns

`string`

ex: FF5555CC

***

### toHsl()

> **toHsl**(): `string`

Defined in: [src/color/Color.ts:97](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L97)

Returns color representation in HSL format

#### Returns

`string`

ex: hsl(0-360,0%-100%,0%-100%)

***

### toHsla()

> **toHsla**(): `string`

Defined in: [src/color/Color.ts:106](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L106)

Returns color representation in HSLA format

#### Returns

`string`

ex: hsla(0-360,0%-100%,0%-100%,0-1)

***

### toRgb()

> **toRgb**(): `string`

Defined in: [src/color/Color.ts:80](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L80)

Returns color representation in RGB format

#### Returns

`string`

ex: rgb(0-255,0-255,0-255)

***

### toRgba()

> **toRgba**(): `string`

Defined in: [src/color/Color.ts:89](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L89)

Returns color representation in RGBA format

#### Returns

`string`

ex: rgba(0-255,0-255,0-255,0-1)

***

### fromHex()

> `static` **fromHex**(`color`): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:298](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L298)

Returns new color object, when given a color in HEX format

#### Parameters

##### color

`string`

Color value ex: FF5555

#### Returns

[`Color`](/api/classes/color/)

#### Static

#### Member Of

Color

***

### fromHsl()

> `static` **fromHsl**(`color`): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:236](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L236)

Returns new color object, when given a color in HSL format

#### Parameters

##### color

`string`

Color value ex: hsl(0-260,0%-100%,0%-100%)

#### Returns

[`Color`](/api/classes/color/)

#### Member Of

Color

***

### fromHsla()

> `static` **fromHsla**(`color`): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:248](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L248)

Returns new color object, when given a color in HSLA format

#### Parameters

##### color

`string`

#### Returns

[`Color`](/api/classes/color/)

#### Static

#### Function

#### Member Of

Color

***

### fromRgb()

> `static` **fromRgb**(`color`): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:195](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L195)

Returns new color object, when given a color in RGB format

#### Parameters

##### color

`string`

Color value ex: rgb(0-255,0-255,0-255)

#### Returns

[`Color`](/api/classes/color/)

#### Member Of

Color

***

### fromRgba()

> `static` **fromRgba**(`color`): [`Color`](/api/classes/color/)

Defined in: [src/color/Color.ts:207](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L207)

Returns new color object, when given a color in RGBA format

#### Parameters

##### color

`string`

#### Returns

[`Color`](/api/classes/color/)

#### Static

#### Function

#### Member Of

Color

***

### parseAngletoDegrees()

> `static` **parseAngletoDegrees**(`value`): `number`

Defined in: [src/color/Color.ts:334](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L334)

Converts a string that could be any angle notation (50deg, 0.5turn, 2rad)
into degrees without the 'deg' suffix

#### Parameters

##### value

`string`

ex: 0deg, 0.5turn, 2rad

#### Returns

`number`

number in degrees or NaN if inputs are invalid

#### Static

#### Member Of

Color

***

### sourceFromHex()

> `static` **sourceFromHex**(`color`): `undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Defined in: [src/color/Color.ts:309](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L309)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HEX format

#### Parameters

##### color

`string`

ex: FF5555 or FF5544CC (RGBa)

#### Returns

`undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

source

#### Static

#### Member Of

Color

***

### sourceFromHsl()

> `static` **sourceFromHsl**(`color`): `undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Defined in: [src/color/Color.ts:260](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L260)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>

#### Parameters

##### color

`string`

Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)

#### Returns

`undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

source

#### Member Of

Color

#### See

http://http://www.w3.org/TR/css3-color/#hsl-color

***

### sourceFromRgb()

> `static` **sourceFromRgb**(`color`): `undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

Defined in: [src/color/Color.ts:217](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/color/Color.ts#L217)

Returns array representation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format

#### Parameters

##### color

`string`

Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)

#### Returns

`undefined` \| [`TRGBAColorSource`](/api/type-aliases/trgbacolorsource/)

source

#### Member Of

Color
