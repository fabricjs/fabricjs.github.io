# Gradient

## [fabric](fabric.html).Gradient #### [new Gradient()](#Gradient)

Gradient class

Source:

* [fabric.js](fabric.js.html), [line 7937](fabric.js.html#line7937)

Tutorials:

* *Tutorial: [http://fabricjs.com/fabric-intro-part-2#gradients](http://fabricjs.com/fabric-intro-part-2#gradients)*

See:

* [fabric.Gradient#initialize](fabric.Gradient.html#initialize) for constructor definition

### Members

#### [gradientTransform:Array.Number](#gradientTransform)

A transform matrix to apply to the gradient before painting. Imported from svg gradients, is not applied with the current transform in the center. Before this transform is applied, the origin point is at the top left corner of the object plus the addition of offsetY and offsetX.

##### Type:

* Array.Number

Default Value:

* null

Source:

* [fabric.js](fabric.js.html), [line 7967](fabric.js.html#line7967)

#### [gradientUnits:String](#gradientUnits)

coordinates units for coords. If \`pixels\`, the number of coords are in the same unit of width / height. If set as \`percentage\` the coords are still a number, but 1 means 100% of width for the X and 100% of the height for the y. It can be bigger than 1 and negative. allowed values pixels or percentage.

##### Type:

* String

Default Value:

* 'pixels'

Source:

* [fabric.js](fabric.js.html), [line 7978](fabric.js.html#line7978)

#### [offsetX:Number](#offsetX)

Horizontal offset for aligning gradients coming from SVG when outside pathgroups

##### Type:

* Number

Default Value:

* 0

Source:

* [fabric.js](fabric.js.html), [line 7950](fabric.js.html#line7950)

#### [offsetY:Number](#offsetY)

Vertical offset for aligning gradients coming from SVG when outside pathgroups

##### Type:

* Number

Default Value:

* 0

Source:

* [fabric.js](fabric.js.html), [line 7957](fabric.js.html#line7957)

#### [type:String](#type)

Gradient type linear or radial

##### Type:

* String

Default Value:

* 'pixels'

Source:

* [fabric.js](fabric.js.html), [line 7985](fabric.js.html#line7985)

### Methods

#### [(static)fromElement(el, instance, opacityAttr, svgOptions, viewBoxWidth, viewBoxHeight, width, height)&rarr; {[fabric.Gradient](fabric.Gradient.html)}](#.fromElement)

Returns [fabric.Gradient](fabric.Gradient.html) instance from an SVG element

##### Parameters:
|Name|Type|Description| |
|`el`|SVGGradientElement|SVG gradient element|
|`instance`|[fabric.Object](fabric.Object.html)|
|`opacityAttr`|String|A fill-opacity or stroke-opacity attribute to multiply to each stop's opacity.|
|`svgOptions`|Object|an object containing the size of the SVG in order to parse correctly gradients that uses gradientUnits as 'userSpaceOnUse' and percentages.|
|`viewBoxWidth`|Object.number|width part of the viewBox attribute on svg|
|`viewBoxHeight`|Object.number|height part of the viewBox attribute on svg|
|`width`|Object.number|width part of the svg tag if viewBox is not specified|
|`height`|Object.number|height part of the svg tag if viewBox is not specified|

Source:

* [fabric.js](fabric.js.html), [line 8234](fabric.js.html#line8234)

See:

* [http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement](http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement)
* [http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement](http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement)

##### Returns:

Gradient instance

Type

[fabric.Gradient](fabric.Gradient.html)

#### [addColorStop(colorStop)&rarr; {[fabric.Gradient](fabric.Gradient.html)}](#addColorStop)

Adds another colorStop

##### Parameters:
|Name|Type|Description| |
|`colorStop`|Object|Object with offset and color|

Source:

* [fabric.js](fabric.js.html), [line 8043](fabric.js.html#line8043)

##### Returns:

thisArg

Type

[fabric.Gradient](fabric.Gradient.html)

#### [initialize(options)&rarr; {[fabric.Gradient](fabric.Gradient.html)}](#initialize)

Constructor

##### Parameters:
|Name|Type|Description| |
|`options`|Object|Options object with type, coords, gradientUnits and colorStops
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codetype/code/td                        td class="type"                            span class="param-type"Object/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"gradient type linear or radial/td        /tr            tr                            td class="name"codegradientUnits/code/td                        td class="type"                            span class="param-type"Object/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"gradient units/td        /tr            tr                            td class="name"codeoffsetX/code/td                        td class="type"                            span class="param-type"Object/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"SVG import compatibility/td        /tr            tr                            td class="name"codeoffsetY/code/td                        td class="type"                            span class="param-type"Object/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"SVG import compatibility/td        /tr            tr                            td class="name"codecolorStops/code/td                        td class="type"                            span class="param-type"Array.Object/span                        /td                            td class="attributes"                                                                /td                                    td class="description last"contains the colorstops./td        /tr            tr                            td class="name"codecoords/code/td                        td class="type"                            span class="param-type"Object/span                        /td                            td class="attributes"                                                                /td                                    td class="description last"contains the coords of the gradient                h6Properties/h6                table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codex1/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"X coordiante of the first point for linear or of the focal point for radial/td        /tr            tr                            td class="name"codey1/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Y coordiante of the first point for linear or of the focal point for radial/td        /tr            tr                            td class="name"codex2/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"X coordiante of the second point for linear or of the center point for radial/td        /tr            tr                            td class="name"codey2/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Y coordiante of the second point for linear or of the center point for radial/td        /tr            tr                            td class="name"coder1/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"only for radial gradient, radius of the inner circle/td        /tr            tr                            td class="name"coder2/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"only for radial gradient, radius of the external circle/td        /tr        /tbody/table            /td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 8004](fabric.js.html#line8004)

##### Returns:

thisArg

Type

[fabric.Gradient](fabric.Gradient.html)

#### [toLive(ctx)&rarr; {CanvasGradient}](#toLive)

Returns an instance of CanvasGradient

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|

Source:

* [fabric.js](fabric.js.html), [line 8183](fabric.js.html#line8183)

##### Returns:

Type

CanvasGradient

#### [toObject(propertiesToIncludeopt)&rarr; {Object}](#toObject)

Returns object representation of a gradient

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Source:

* [fabric.js](fabric.js.html), [line 8060](fabric.js.html#line8060)

##### Returns:

Type

Object

#### [toSVG(object)&rarr; {String}](#toSVG)

Returns SVG representation of an gradient

##### Parameters:
|Name|Type|Description| |
|`object`|Object|Object to create a gradient for|

Source:

* [fabric.js](fabric.js.html), [line 8081](fabric.js.html#line8081)

##### Returns:

SVG representation of an gradient (linear/radial)

Type

String
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:17 GMT+0100 (Central European Standard Time)