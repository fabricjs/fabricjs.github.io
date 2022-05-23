# fabric

## fabric Source:

* [fabric.js](fabric.js.html), [line 4284](fabric.js.html#line4284)

### Classes

[ActiveSelection](fabric.ActiveSelection.html)

[BaseBrush](fabric.BaseBrush.html)

[Canvas](fabric.Canvas.html)

[Circle](fabric.Circle.html)

[CircleBrush](fabric.CircleBrush.html)

[Color](fabric.Color.html)

[Ellipse](fabric.Ellipse.html)

[Gradient](fabric.Gradient.html)

[Group](fabric.Group.html)

[Image](fabric.Image.html)

[Intersection](fabric.Intersection.html)

[IText](fabric.IText.html)

[Line](fabric.Line.html)

[Object](fabric.Object.html)

[Path](fabric.Path.html)

[Pattern](fabric.Pattern.html)

[PatternBrush](fabric.PatternBrush.html)

[PencilBrush](fabric.PencilBrush.html)

[Point](fabric.Point.html)

[Polygon](fabric.Polygon.html)

[Polyline](fabric.Polyline.html)

[Rect](fabric.Rect.html)

[Shadow](fabric.Shadow.html)

[SprayBrush](fabric.SprayBrush.html)

[StaticCanvas](fabric.StaticCanvas.html)

[Text](fabric.Text.html)

[Textbox](fabric.Textbox.html)

[Triangle](fabric.Triangle.html)

### Namespaces

[Collection](fabric.Collection.html)

[CommonMethods](fabric.CommonMethods.html)

[Observable](fabric.Observable.html)

[util](fabric.util.html)

### Members

#### [(static)arcToSegmentsCache](#.arcToSegmentsCache)

This object contains the result of arc to bezier conversion for faster retrieving if the same arc needs to be converted again. It was an internal variable, is accessible since version 2.3.4

Source:

* [fabric.js](fabric.js.html), [line 169](fabric.js.html#line169)

#### [(static)boundsOfCurveCache](#.boundsOfCurveCache)

This object keeps the results of the boundsOfCurve calculation mapped by the joined arguments necessary to calculate it. It does speed up calculation, if you parse and add always the same paths, but in case of heavy usage of freedrawing you do not get any speed benefit and you get a big object in memory. The object was a private variable before, while now is appended to the lib so that you have access to it and you can eventually clear it. It was an internal variable, is accessible since version 2.3.4

Source:

* [fabric.js](fabric.js.html), [line 179](fabric.js.html#line179)

#### [(static)browserShadowBlurConstant:Number](#.browserShadowBlurConstant)

Browser-specific constant to adjust CanvasRenderingContext2D.shadowBlur value, which is unitless and not rendered equally across browsers. Values that work quite well (as of October 2017) are: - Chrome: 1.5 - Edge: 1.75 - Firefox: 0.9 - Safari: 0.95

##### Type:

* Number

Since:

* 2.0.0

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 163](fabric.js.html#line163)

#### [(static)cachesBoundsOfCurve](#.cachesBoundsOfCurve)

If disabled boundsOfCurveCache is not used. For apps that make heavy usage of pencil drawing probably disabling it is better

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 185](fabric.js.html#line185)

#### [(static)charWidthsCache](#.charWidthsCache)

Cache Object for widths of chars in text rendering.

Source:

* [fabric.js](fabric.js.html), [line 111](fabric.js.html#line111)

#### [(static)devicePixelRatio](#.devicePixelRatio)

Device Pixel Ratio

Source:

* [fabric.js](fabric.js.html), [line 145](fabric.js.html#line145)

See:

* [https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/SettingUptheCanvas/SettingUptheCanvas.html](https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/SettingUptheCanvas/SettingUptheCanvas.html)

#### [(static)disableStyleCopyPaste:Boolean](#.disableStyleCopyPaste)

When 'true', style information is not retained when copy/pasting text, making pasted text use destination style. Defaults to 'false'.

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 129](fabric.js.html#line129)

#### [(static)DPI](#.DPI)

Pixel per Inch as a default value set to 96. Can be changed for more realistic conversion.

Source:

* [fabric.js](fabric.js.html), [line 75](fabric.js.html#line75)

#### [(static)enableGLFiltering:Boolean](#.enableGLFiltering)

Enable webgl for filtering picture is available A filtering backend will be initialized, this will both take memory and time since a default 2048x2048 canvas will be created for the gl context

##### Type:

* Boolean

Since:

* 2.0.0

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 139](fabric.js.html#line139)

#### [(static)forceGLPutImageData:Boolean](#.forceGLPutImageData)

Skip performance testing of setupGLContext and force the use of putImageData that seems to be the one that works best on Chrome + old hardware. if your users are experiencing empty images after filtering you may try to force this to true this has to be set before instantiating the filtering backend ( before filtering the first image )

##### Type:

* Boolean

Default Value:

* false

Source:

* [fabric.js](fabric.js.html), [line 194](fabric.js.html#line194)

#### [(static)isLikelyNode:boolean](#.isLikelyNode)

True when in environment that's probably Node.js

##### Type:

* boolean

Source:

* [fabric.js](fabric.js.html), [line 51](fabric.js.html#line51)

#### [(static)isTouchSupported:boolean](#.isTouchSupported)

True when in environment that supports touch events

##### Type:

* boolean

Source:

* [fabric.js](fabric.js.html), [line 44](fabric.js.html#line44)

#### [(static)log](#.log)

Wrapper around \`console.log\` (when available)

Source:

* [fabric.js](fabric.js.html), [line 3564](fabric.js.html#line3564)

#### [(static)maxCacheSideLimit:Number](#.maxCacheSideLimit)

Pixel limit for cache canvases width or height. IE fixes the maximum at 5000

##### Type:

* Number

Since:

* 1.7.14

Default Value:

* 4096

Source:

* [fabric.js](fabric.js.html), [line 98](fabric.js.html#line98)

#### [(static)minCacheSideLimit:Number](#.minCacheSideLimit)

Lowest pixel limit for cache canvases, set at 256PX

##### Type:

* Number

Since:

* 1.7.14

Default Value:

* 256

Source:

* [fabric.js](fabric.js.html), [line 106](fabric.js.html#line106)

#### [(static)perfLimitSizeTotal:Number](#.perfLimitSizeTotal)

Pixel limit for cache canvases. 1Mpx , 4Mpx should be fine.

##### Type:

* Number

Since:

* 1.7.14

Default Value:

* 2097152

Source:

* [fabric.js](fabric.js.html), [line 90](fabric.js.html#line90)

#### [(static)RUNNING\_ANIMATIONS:Array.AnimationContext](#.RUNNING_ANIMATIONS)

Array holding all running animations

##### Type:

* Array.AnimationContext

Source:

* [fabric.js](fabric.js.html), [line 3604](fabric.js.html#line3604)

#### [(static)SHARED\_ATTRIBUTES:array](#.SHARED_ATTRIBUTES)

Attributes parsed from all SVG elements

##### Type:

* array

Source:

* [fabric.js](fabric.js.html), [line 59](fabric.js.html#line59)

#### [(static)textureSize:Number](#.textureSize)

if webgl is enabled and available, textureSize will determine the size of the canvas backend

##### Type:

* Number

Since:

* 2.0.0

Default Value:

* 2048

Source:

* [fabric.js](fabric.js.html), [line 120](fabric.js.html#line120)

#### [(static)warn](#.warn)

Wrapper around \`console.warn\` (when available)

Source:

* [fabric.js](fabric.js.html), [line 3570](fabric.js.html#line3570)

### Methods

#### [(static)getCSSRules(doc)&rarr; {Object}](#.getCSSRules)

Returns CSS rules for a given SVG document

##### Parameters:
|Name|Type|Description| |
|`doc`|SVGDocument|SVG document to parse|

Source:

* [fabric.js](fabric.js.html), [line 5270](fabric.js.html#line5270)

##### Returns:

CSS rules of this document

Type

Object

#### [(static)getGradientDefs(doc)&rarr; {Object}](#.getGradientDefs)

Parses an SVG document, returning all of the gradient declarations found in it

##### Parameters:
|Name|Type|Description| |
|`doc`|SVGDocument|SVG document to parse|

Source:

* [fabric.js](fabric.js.html), [line 5104](fabric.js.html#line5104)

##### Returns:

Gradient definitions; key corresponds to element id, value -- to gradient definition element

Type

Object

#### [(static)isWebglSupported(tileSize)&rarr; {Boolean}](#.isWebglSupported)

Indicate whether this filtering backend is supported by the user's browser.

##### Parameters:
|Name|Type|Description| |
|`tileSize`|Number|check if the tileSize is supported|

Source:

* [fabric.js](fabric.js.html), [line 21614](fabric.js.html#line21614)

##### Returns:

Whether the user's browser supports WebGL.

Type

Boolean

#### [(static)loadSVGFromString(string, callback, reviveropt, optionsopt)](#.loadSVGFromString)

Takes string corresponding to an SVG document, and parses it into a set of fabric objects

##### Parameters:
|Name|Type|Attributes|Description| |
|`string`|String|
|`callback`|function|
|`reviver`|function|optional|Method for further parsing of SVG elements, called after each fabric object created.|
|`options`|Object|optional|Object containing options for parsing
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codecrossOrigin/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"crossOrigin crossOrigin setting to use for external resources/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 5361](fabric.js.html#line5361)

#### [(static)loadSVGFromURL(url, callback, reviveropt, optionsopt)](#.loadSVGFromURL)

Takes url corresponding to an SVG document, and parses it into a set of fabric objects. Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)

##### Parameters:
|Name|Type|Attributes|Description| |
|`url`|String|
|`callback`|function|
|`reviver`|function|optional|Method for further parsing of SVG elements, called after each fabric object created.|
|`options`|Object|optional|Object containing options for parsing
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codecrossOrigin/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"crossOrigin crossOrigin setting to use for external resources/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 5330](fabric.js.html#line5330)

#### [(static)parseAttributes(element, attributes)&rarr; {Object}](#.parseAttributes)

Returns an object of attributes' name/value, given element and an array of attribute names; Parses parent "g" nodes recursively upwards.

##### Parameters:
|Name|Type|Description| |
|`element`|DOMElement|Element to parse|
|`attributes`|Array|Array of attributes to parse|

Source:

* [fabric.js](fabric.js.html), [line 5132](fabric.js.html#line5132)

##### Returns:

object containing parsed attributes' names/values

Type

Object

#### [(static)parseElements(elements, callback, optionsopt, reviveropt)](#.parseElements)

Transforms an array of svg elements to corresponding fabric.\* instances

##### Parameters:
|Name|Type|Attributes|Description| |
|`elements`|Array|Array of elements to parse|
|`callback`|function|Being passed an array of fabric instances (transformed from SVG elements)|
|`options`|Object|optional|Options object|
|`reviver`|function|optional|Method for further parsing of SVG elements, called after each fabric object created.|

Source:

* [fabric.js](fabric.js.html), [line 5198](fabric.js.html#line5198)

#### [(static)parseFontDeclaration(value, oStyle)](#.parseFontDeclaration)

Parses a short font declaration, building adding its properties to a style object

##### Parameters:
|Name|Type|Description| |
|`value`|String|font declaration|
|`oStyle`|Object|definition|

Source:

* [fabric.js](fabric.js.html), [line 5065](fabric.js.html#line5065)

#### [(static)parsePointsAttribute(points)&rarr; {Array}](#.parsePointsAttribute)

Parses "points" attribute, returning an array of values

##### Parameters:
|Name|Type|Description| |
|`points`|String|points attribute string|

Source:

* [fabric.js](fabric.js.html), [line 5234](fabric.js.html#line5234)

##### Returns:

array of points

Type

Array

#### [(static)parseStyleAttribute(element)&rarr; {Object}](#.parseStyleAttribute)

Parses "style" attribute, retuning an object with values

##### Parameters:
|Name|Type|Description| |
|`element`|SVGElement|Element to parse|

Source:

* [fabric.js](fabric.js.html), [line 5209](fabric.js.html#line5209)

##### Returns:

Objects with values parsed from style attribute of an element

Type

Object

#### [(static)parseSVGDocument(doc, callback, reviveropt, parsingOptionsopt)](#.parseSVGDocument)

Parses an SVG document, converts it to an array of corresponding fabric.\* instances and passes them to a callback

##### Parameters:
|Name|Type|Attributes|Description| |
|`doc`|SVGDocument|SVG document to parse|
|`callback`|function|Callback to call when parsing is finished; It's being passed an array of elements (parsed from a document).|
|`reviver`|function|optional|Method for further parsing of SVG elements, called after each fabric object created.|
|`parsingOptions`|Object|optional|options for parsing document
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codecrossOrigin/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"crossOrigin settings/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 4972](fabric.js.html#line4972)

#### [(static)parseTransformAttribute(attributeValue)&rarr; {Array}](#.parseTransformAttribute)

Parses "transform" attribute, returning an array of values

##### Parameters:
|Name|Type|Description| |
|`attributeValue`|String|String containing attribute value|

Source:

* [fabric.js](fabric.js.html), [line 4486](fabric.js.html#line4486)

##### Returns:

Array of 6 elements representing transformation matrix

Type

Array
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:16 GMT+0100 (Central European Standard Time)