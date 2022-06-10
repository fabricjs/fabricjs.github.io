# Color

## [fabric](fabric.html).Color #### [new Color(color)&rarr; {[fabric.Color](fabric.Color.html)}](#Color)

Color class The purpose of [fabric.Color](fabric.Color.html) is to abstract and encapsulate common color operations; [fabric.Color](fabric.Color.html) is a constructor and creates instances of [fabric.Color](fabric.Color.html) objects.

##### Parameters:
|Name|Type|Description| |
|`color`|String|optional in hex or rgb(a) or hsl format or from known color list|

Source:

* [fabric.js](fabric.js.html), [line 6051](fabric.js.html#line6051)

Tutorials:

* *Tutorial: [http://fabricjs.com/fabric-intro-part-2/#colors](http://fabricjs.com/fabric-intro-part-2/#colors)*

##### Returns:

thisArg

Type

[fabric.Color](fabric.Color.html)

### Members

#### [(static)colorNameMap](#.colorNameMap)

Map of the 148 color names with HEX code

Source:

* [fabric.js](fabric.js.html), [line 6347](fabric.js.html#line6347)

#### [(static)reHex](#.reHex)

Regex matching color in HEX format (ex: #FF5544CC, #FF5555, 010155, aff)

Source:

* [fabric.js](fabric.js.html), [line 6338](fabric.js.html#line6338)

#### [(static)reHSLa](#.reHSLa)

Regex matching color in HSL or HSLA formats (ex: hsl(200, 80%, 10%), hsla(300, 50%, 80%, 0.5), hsla( 300 , 50% , 80% , 0.5 ))

Source:

* [fabric.js](fabric.js.html), [line 6330](fabric.js.html#line6330)

#### [(static)reRGBa](#.reRGBa)

Regex matching color in RGB or RGBA formats (ex: rgb(0, 0, 0), rgba(255, 100, 10, 0.5), rgba( 255 , 100 , 10 , 0.5 ), rgb(1,1,1), rgba(100%, 60%, 10%, 0.5))

Source:

* [fabric.js](fabric.js.html), [line 6322](fabric.js.html#line6322)

### Methods

#### [(static)fromHex(color)&rarr; {[fabric.Color](fabric.Color.html)}](#.fromHex)

Returns new color object, when given a color in HEX format

##### Parameters:
|Name|Type|Description| |
|`color`|String|Color value ex: FF5555|

Source:

* [fabric.js](fabric.js.html), [line 6632](fabric.js.html#line6632)

##### Returns:

Type

[fabric.Color](fabric.Color.html)

#### [(static)fromHsl(color)&rarr; {[fabric.Color](fabric.Color.html)}](#.fromHsl)

Returns new color object, when given a color in HSL format

##### Parameters:
|Name|Type|Description| |
|`color`|String|Color value ex: hsl(0-260,0%-100%,0%-100%)|

Source:

* [fabric.js](fabric.js.html), [line 6572](fabric.js.html#line6572)

##### Returns:

Type

[fabric.Color](fabric.Color.html)

#### [(static)fromHsla(color)&rarr; {[fabric.Color](fabric.Color.html)}](#.fromHsla)

Returns new color object, when given a color in HSLA format

##### Parameters:
|Name|Type|Description| |
|`color`|String|

Source:

* [fabric.js](fabric.js.html), [line 6623](fabric.js.html#line6623)

##### Returns:

Type

[fabric.Color](fabric.Color.html)

#### [(static)fromRgb(color)&rarr; {[fabric.Color](fabric.Color.html)}](#.fromRgb)

Returns new color object, when given a color in RGB format

##### Parameters:
|Name|Type|Description| |
|`color`|String|Color value ex: rgb(0-255,0-255,0-255)|

Source:

* [fabric.js](fabric.js.html), [line 6530](fabric.js.html#line6530)

##### Returns:

Type

[fabric.Color](fabric.Color.html)

#### [(static)fromRgba(color)&rarr; {[fabric.Color](fabric.Color.html)}](#.fromRgba)

Returns new color object, when given a color in RGBA format

##### Parameters:
|Name|Type|Description| |
|`color`|String|

Source:

* [fabric.js](fabric.js.html), [line 6564](fabric.js.html#line6564)

##### Returns:

Type

[fabric.Color](fabric.Color.html)

#### [(static)fromSource(source)&rarr; {[fabric.Color](fabric.Color.html)}](#.fromSource)

Returns new color object, when given color in array representation (ex: \[200, 100, 100, 0.5\])

##### Parameters:
|Name|Type|Description| |
|`source`|Array|

Source:

* [fabric.js](fabric.js.html), [line 6669](fabric.js.html#line6669)

##### Returns:

Type

[fabric.Color](fabric.Color.html)

#### [(static)sourceFromHex(color)&rarr; {Array}](#.sourceFromHex)

Returns array representation (ex: \[100, 100, 200, 1\]) of a color that's in HEX format

##### Parameters:
|Name|Type|Description| |
|`color`|String|ex: FF5555 or FF5544CC (RGBa)|

Source:

* [fabric.js](fabric.js.html), [line 6643](fabric.js.html#line6643)

##### Returns:

source

Type

Array

#### [(static)sourceFromHsl(color)&rarr; {Array}](#.sourceFromHsl)

Returns array representation (ex: \[100, 100, 200, 1\]) of a color that's in HSL or HSLA format. Adapted from [https://github.com/mjijackson](https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html)

##### Parameters:
|Name|Type|Description| |
|`color`|String|Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)|

Source:

* [fabric.js](fabric.js.html), [line 6584](fabric.js.html#line6584)

See:

* [http://http://www.w3.org/TR/css3-color/#hsl-color](http://http://www.w3.org/TR/css3-color/#hsl-color)

##### Returns:

source

Type

Array

#### [(static)sourceFromRgb(color)&rarr; {Array}](#.sourceFromRgb)

Returns array representation (ex: \[100, 100, 200, 1\]) of a color that's in RGB or RGBA format

##### Parameters:
|Name|Type|Description| |
|`color`|String|Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)|

Source:

* [fabric.js](fabric.js.html), [line 6540](fabric.js.html#line6540)

##### Returns:

source

Type

Array

#### [getAlpha()&rarr; {Number}](#getAlpha)

Gets value of alpha channel for this color

Source:

* [fabric.js](fabric.js.html), [line 6244](fabric.js.html#line6244)

##### Returns:

0-1

Type

Number

#### [getSource()&rarr; {Array}](#getSource)

Returns source of this color (where source is an array representation; ex: \[200, 200, 100, 1\])

Source:

* [fabric.js](fabric.js.html), [line 6155](fabric.js.html#line6155)

##### Returns:

Type

Array

#### [overlayWith(otherColor)&rarr; {[fabric.Color](fabric.Color.html)}](#overlayWith)

Overlays color with another color

##### Parameters:
|Name|Type|Description| |
|`otherColor`|String | [fabric.Color](fabric.Color.html)|

Source:

* [fabric.js](fabric.js.html), [line 6294](fabric.js.html#line6294)

##### Returns:

thisArg

Type

[fabric.Color](fabric.Color.html)

#### [setAlpha(alpha)&rarr; {[fabric.Color](fabric.Color.html)}](#setAlpha)

Sets value of alpha channel for this color

##### Parameters:
|Name|Type|Description| |
|`alpha`|Number|Alpha value 0-1|

Source:

* [fabric.js](fabric.js.html), [line 6253](fabric.js.html#line6253)

##### Returns:

thisArg

Type

[fabric.Color](fabric.Color.html)

#### [setSource(source)](#setSource)

Sets source of this color (where source is an array representation; ex: \[200, 200, 100, 1\])

##### Parameters:
|Name|Type|Description| |
|`source`|Array|

Source:

* [fabric.js](fabric.js.html), [line 6163](fabric.js.html#line6163)

#### [toBlackWhite(threshold)&rarr; {[fabric.Color](fabric.Color.html)}](#toBlackWhite)

Transforms color to its black and white representation

##### Parameters:
|Name|Type|Description| |
|`threshold`|Number|

Source:

* [fabric.js](fabric.js.html), [line 6277](fabric.js.html#line6277)

##### Returns:

thisArg

Type

[fabric.Color](fabric.Color.html)

#### [toGrayscale()&rarr; {[fabric.Color](fabric.Color.html)}](#toGrayscale)

Transforms color to its grayscale representation

Source:

* [fabric.js](fabric.js.html), [line 6264](fabric.js.html#line6264)

##### Returns:

thisArg

Type

[fabric.Color](fabric.Color.html)

#### [toHex()&rarr; {String}](#toHex)

Returns color representation in HEX format

Source:

* [fabric.js](fabric.js.html), [line 6211](fabric.js.html#line6211)

##### Returns:

ex: FF5555

Type

String

#### [toHexa()&rarr; {String}](#toHexa)

Returns color representation in HEXA format

Source:

* [fabric.js](fabric.js.html), [line 6230](fabric.js.html#line6230)

##### Returns:

ex: FF5555CC

Type

String

#### [toHsl()&rarr; {String}](#toHsl)

Returns color representation in HSL format

Source:

* [fabric.js](fabric.js.html), [line 6189](fabric.js.html#line6189)

##### Returns:

ex: hsl(0-360,0%-100%,0%-100%)

Type

String

#### [toHsla()&rarr; {String}](#toHsla)

Returns color representation in HSLA format

Source:

* [fabric.js](fabric.js.html), [line 6200](fabric.js.html#line6200)

##### Returns:

ex: hsla(0-360,0%-100%,0%-100%,0-1)

Type

String

#### [toRgb()&rarr; {String}](#toRgb)

Returns color representation in RGB format

Source:

* [fabric.js](fabric.js.html), [line 6171](fabric.js.html#line6171)

##### Returns:

ex: rgb(0-255,0-255,0-255)

Type

String

#### [toRgba()&rarr; {String}](#toRgba)

Returns color representation in RGBA format

Source:

* [fabric.js](fabric.js.html), [line 6180](fabric.js.html#line6180)

##### Returns:

ex: rgba(0-255,0-255,0-255,0-1)

Type

String
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:17 GMT+0100 (Central European Standard Time)