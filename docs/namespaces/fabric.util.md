# util

## [fabric](fabric.html).util Source:

* [fabric.js](fabric.js.html), [line 632](fabric.js.html#line632)

### Namespaces

[array](fabric.util.array.html)

[ease](fabric.util.ease.html)

[object](fabric.util.object.html)

[string](fabric.util.string.html)

### Members

#### [(static)getElementStyle](#.getElementStyle)

Returns style attribute value of a given element

Source:

* [fabric.js](fabric.js.html), [line 3385](fabric.js.html#line3385)

#### [(static)setImageSmoothing](#.setImageSmoothing)

setImageSmoothing sets the context imageSmoothingEnabled property. Used by canvas and by ImageObject.

Since:

* 4.0.0

Source:

* [fabric.js](fabric.js.html), [line 3490](fabric.js.html#line3490)

### Methods

#### [(static)addClass(element, className)](#.addClass)

Adds class to an element

##### Parameters:
|Name|Type|Description| |
|`element`|HTMLElement|Element to add class to|
|`className`|String|Class to add to an element|

Source:

* [fabric.js](fabric.js.html), [line 3271](fabric.js.html#line3271)

#### [(static)addListener(element, eventName, handler)](#.addListener)

Adds an event listener to an element

##### Parameters:
|Name|Type|Description| |
|`element`|HTMLElement|
|`eventName`|String|
|`handler`|function|

Source:

* [fabric.js](fabric.js.html), [line 3090](fabric.js.html#line3090)

#### [(static)addTransformToObject(object, transform)](#.addTransformToObject)

given an object and a transform, apply the transform to the object. this is equivalent to change the space where the object is drawn. Adding to an object a transform that scale by 2 is like scaling it by 2. This is used when removing an object from an active selection for example.

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|the object you want to transform|
|`transform`|Array|the destination transform|

Source:

* [fabric.js](fabric.js.html), [line 1730](fabric.js.html#line1730)

#### [(static)animate(optionsopt)&rarr; {CancelFunction}](#.animate)

Changes value from one to another within certain period of time, invoking callbacks as value is being changed.

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|AnimationOptions|optional|Animation options|

Source:

* [fabric.js](fabric.js.html), [line 3699](fabric.js.html#line3699)

##### Returns:

cancel function

Type

CancelFunction

#### [(static)animateColor(fromColor, toColor, durationopt, optionsopt)&rarr; {function}](#.animateColor)

Changes the color from one to another within certain period of time, invoking callbacks as value is being changed.

##### Parameters:
|Name|Type|Attributes|Description| |
|`fromColor`|String|The starting color in hex or rgb(a) format.|
|`toColor`|String|The starting color in hex or rgb(a) format.|
|`duration`|Number|optional|Duration of change (in ms).|
|`options`|Object|optional|Animation options
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeonChange/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Callback; invoked on every value change/td        /tr            tr                            td class="name"codeonComplete/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Callback; invoked when value change is completed/td        /tr            tr                            td class="name"codecolorEasing/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Easing function. Note that this function only take two arguments (currentTime, duration). Thus the regular animation easing functions cannot be used./td        /tr            tr                            td class="name"codeabort/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Additional function with logic. If returns true, onComplete is called./td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 3832](fabric.js.html#line3832)

##### Returns:

abort function

Type

function

#### [(static)applyTransformToObject(object, transform)](#.applyTransformToObject)

discard an object transform state and apply the one from the matrix.

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|the object you want to transform|
|`transform`|Array|the destination transform|

Source:

* [fabric.js](fabric.js.html), [line 1743](fabric.js.html#line1743)

#### [(static)calcAngleBetweenVectors(a, b)](#.calcAngleBetweenVectors)

Calculates angle between 2 vectors using dot product

##### Parameters:
|Name|Type|Description| |
|`a`|Point|
|`b`|Point|

Source:

* [fabric.js](fabric.js.html), [line 790](fabric.js.html#line790)

##### Returns:

the angle in radian between the vectors

#### [(static)calcDimensionsMatrix(options)&rarr; {Array.Number}](#.calcDimensionsMatrix)

Returns a transform matrix starting from an object of the same kind of the one returned from qrDecompose, useful also if you want to calculate some transformations from an object that is not enlived yet. is called DimensionsTransformMatrix because those properties are the one that influence the size of the resulting box of the object.

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codescaleX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codescaleY/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codeflipX/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codeflipY/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codeskewX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codeskewY/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 1446](fabric.js.html#line1446)

##### Returns:

transform matrix

Type

Array.Number

#### [(static)calcRotateMatrix(options)&rarr; {Array.Number}](#.calcRotateMatrix)

Returns a transform matrix starting from an object of the same kind of the one returned from qrDecompose, useful also if you want to calculate some transformations from an object that is not enlived yet

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeangle/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"angle in degrees/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 1419](fabric.js.html#line1419)

##### Returns:

transform matrix

Type

Array.Number

#### [(static)clearFabricFontCache(fontFamilyopt)](#.clearFabricFontCache)

Clear char widths cache for the given font family or all the cache if no fontFamily is specified. Use it if you know you are loading fonts in a lazy way and you are not waiting for custom fonts to load properly when adding text objects to the canvas. If a text object is added when its own font is not loaded yet, you will get wrong measurement and so wrong bounding boxes. After the font cache is cleared, either change the textObject text content or call initDimensions() to trigger a recalculation

##### Parameters:
|Name|Type|Attributes|Description| |
|`fontFamily`|String|optional|font family to clear|

Source:

* [fabric.js](fabric.js.html), [line 1627](fabric.js.html#line1627)

#### [(static)composeMatrix(options)&rarr; {Array.Number}](#.composeMatrix)

Returns a transform matrix starting from an object of the same kind of the one returned from qrDecompose, useful also if you want to calculate some transformations from an object that is not enlived yet

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeangle/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codescaleX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codescaleY/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codeflipX/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codeflipY/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codeskewX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codeskewX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codetranslateX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr            tr                            td class="name"codetranslateY/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 1491](fabric.js.html#line1491)

##### Returns:

transform matrix

Type

Array.Number

#### [(static)copyCanvasElement(canvas)&rarr; {CanvasElement}](#.copyCanvasElement)

Creates a canvas element that is a copy of another and is also painted

##### Parameters:
|Name|Type|Description| |
|`canvas`|CanvasElement|to copy size and content of|

Source:

* [fabric.js](fabric.js.html), [line 1333](fabric.js.html#line1333)

##### Returns:

initialized canvas element

Type

CanvasElement

#### [(static)cos(angle)&rarr; {Number}](#.cos)

Calculate the cos of an angle, avoiding returning floats for known results

##### Parameters:
|Name|Type|Description| |
|`angle`|Number|the angle in radians or in degree|

Source:

* [fabric.js](fabric.js.html), [line 644](fabric.js.html#line644)

##### Returns:

Type

Number

#### [(static)createCanvasElement()&rarr; {CanvasElement}](#.createCanvasElement)

Creates canvas element

Source:

* [fabric.js](fabric.js.html), [line 1322](fabric.js.html#line1322)

##### Returns:

initialized canvas element

Type

CanvasElement

#### [(static)createClass(parentopt, propertiesopt)](#.createClass)

Helper for creation of "classes".

##### Parameters:
|Name|Type|Attributes|Description| |
|`parent`|function|optional|optional "Class" to inherit from|
|`properties`|Object|optional|Properties shared by all instances of this class (be careful modifying objects defined here as this would affect all instances)|

Source:

* [fabric.js](fabric.js.html), [line 3044](fabric.js.html#line3044)

#### [(static)createImage()&rarr; {HTMLImageElement}](#.createImage)

Creates image element (works on client and node)

Source:

* [fabric.js](fabric.js.html), [line 1360](fabric.js.html#line1360)

##### Returns:

HTML image element

Type

HTMLImageElement

#### [(static)degreesToRadians(degrees)&rarr; {Number}](#.degreesToRadians)

Transforms degrees to radians.

##### Parameters:
|Name|Type|Description| |
|`degrees`|Number|value in degrees|

Source:

* [fabric.js](fabric.js.html), [line 716](fabric.js.html#line716)

##### Returns:

value in radians

Type

Number

#### [(static)enlivenObjectEnlivables(object, contextopt)](#.enlivenObjectEnlivables)

Creates corresponding fabric instances residing in an object, e.g. \`clipPath\`

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|Object|
|`context`|Object|optional|assign enlived props to this object (pass null to skip this)|

Source:

* [fabric.js](fabric.js.html), [line 1213](fabric.js.html#line1213)

See:

* [fabric.Object.ENLIVEN\_PROPS](fabric.Object.html#.ENLIVEN_PROPS)

#### [(static)enlivenObjects(objects, callback, namespace, reviver)](#.enlivenObjects)

Creates corresponding fabric instances from their object representations

##### Parameters:
|Name|Type|Description| |
|`objects`|Array|Objects to enliven|
|`callback`|function|Callback to invoke when all objects are created|
|`namespace`|String|Namespace to get klass "Class" object from|
|`reviver`|function|Method for further parsing of object elements, called after each fabric object created.|

Source:

* [fabric.js](fabric.js.html), [line 1170](fabric.js.html#line1170)

#### [(static)enlivenPatterns(patterns, callback)](#.enlivenPatterns)

Create and wait for loading of patterns

##### Parameters:
|Name|Type|Description| |
|`patterns`|Array|Objects to enliven|
|`callback`|function|Callback to invoke when all objects are created called after each fabric object created.|

Source:

* [fabric.js](fabric.js.html), [line 1233](fabric.js.html#line1233)

#### [(static)falseFunction()&rarr; {Boolean}](#.falseFunction)

Function which always returns \`false\`.

Source:

* [fabric.js](fabric.js.html), [line 1016](fabric.js.html#line1016)

##### Returns:

Type

Boolean

#### [(static)findScaleToCover(source, destination)&rarr; {Number}](#.findScaleToCover)

Finds the scale for the object source to cover entirely the object destination, keeping aspect ratio intact. respect the total allowed area for the cache.

##### Parameters:
|Name|Type|Description| |
|`source`|Object | [fabric.Object](fabric.Object.html)|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"natural unscaled height of the object/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"natural unscaled width of the object/td        /tr        /tbody/table|
|`destination`|Object | [fabric.Object](fabric.Object.html)|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"natural unscaled height of the object/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"natural unscaled width of the object/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 1686](fabric.js.html#line1686)

##### Returns:

scale factor to apply to source to cover destination

Type

Number

#### [(static)findScaleToFit(source, destination)&rarr; {Number}](#.findScaleToFit)

Finds the scale for the object source to fit inside the object destination, keeping aspect ratio intact. respect the total allowed area for the cache.

##### Parameters:
|Name|Type|Description| |
|`source`|Object | [fabric.Object](fabric.Object.html)|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"natural unscaled height of the object/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"natural unscaled width of the object/td        /tr        /tbody/table|
|`destination`|Object | [fabric.Object](fabric.Object.html)|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"natural unscaled height of the object/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"natural unscaled width of the object/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 1669](fabric.js.html#line1669)

##### Returns:

scale factor to apply to source to fit into destination

Type

Number

#### [(static)getBisector(A, B, C)&rarr; {Object}](#.getBisector)

##### Parameters:
|Name|Type|Description| |
|`A`|Point|
|`B`|Point|
|`C`|Point|

Source:

* [fabric.js](fabric.js.html), [line 812](fabric.js.html#line812)

##### Returns:

vector representing the bisector of A and A's angle

Type

Object

#### [(static)getById(id)&rarr; {HTMLElement|null}](#.getById)

Takes id and returns an element with that id (if one exists in a document)

##### Parameters:
|Name|Type|Description| |
|`id`|String | HTMLElement|

Source:

* [fabric.js](fabric.js.html), [line 3212](fabric.js.html#line3212)

##### Returns:

Type

HTMLElement | null

#### [(static)getElementOffset(element)&rarr; {Object}](#.getElementOffset)

Returns offset for a given element

##### Parameters:
|Name|Type|Description| |
|`element`|HTMLElement|Element to get offset for|

Source:

* [fabric.js](fabric.js.html), [line 3344](fabric.js.html#line3344)

##### Returns:

Object with "left" and "top" properties

Type

Object

#### [(static)getHatVector(v)&rarr; {Point}](#.getHatVector)

##### Parameters:
|Name|Type|Description| |
|`v`|Point|

Source:

* [fabric.js](fabric.js.html), [line 800](fabric.js.html#line800)

##### Returns:

vector representing the unit vector of pointing to the direction of \`v\`

Type

Point

#### [(static)getKlass(type, namespace)&rarr; {Object}](#.getKlass)

Returns klass "Class" object of given namespace

##### Parameters:
|Name|Type|Description| |
|`type`|String|Type of object (eg. 'circle')|
|`namespace`|String|Namespace to get klass "Class" object from|

Source:

* [fabric.js](fabric.js.html), [line 1027](fabric.js.html#line1027)

##### Returns:

klass "Class"

Type

Object

#### [(static)getRandomInt(min, max)&rarr; {Number}](#.getRandomInt)

Returns random number between 2 specified ones.

##### Parameters:
|Name|Type|Description| |
|`min`|Number|lower limit|
|`max`|Number|upper limit|

Source:

* [fabric.js](fabric.js.html), [line 705](fabric.js.html#line705)

##### Returns:

random value (between min and max)

Type

Number

#### [(static)getScrollLeftTop(element)&rarr; {Object}](#.getScrollLeftTop)

Returns element scroll offsets

##### Parameters:
|Name|Type|Description| |
|`element`|HTMLElement|Element to operate on|

Source:

* [fabric.js](fabric.js.html), [line 3302](fabric.js.html#line3302)

##### Returns:

Object with left/top values

Type

Object

#### [(static)getSvgAttributes(type)&rarr; {Array}](#.getSvgAttributes)

Returns array of attributes for given svg that fabric parses

##### Parameters:
|Name|Type|Description| |
|`type`|String|Type of svg element (eg. 'circle')|

Source:

* [fabric.js](fabric.js.html), [line 1039](fabric.js.html#line1039)

##### Returns:

string names of supported attributes

Type

Array

#### [(static)groupSVGElements(elements, optionsopt, path)&rarr; {[fabric.Object](fabric.Object.html)|[fabric.Group](fabric.Group.html)}](#.groupSVGElements)

Groups SVG elements (usually those retrieved from SVG document)

##### Parameters:
|Name|Type|Attributes|Description| |
|`elements`|Array|SVG elements to group|
|`options`|Object|optional|Options object|
|`path`|String|Value to set sourcePath to|

Source:

* [fabric.js](fabric.js.html), [line 1274](fabric.js.html#line1274)

##### Returns:

Type

[fabric.Object](fabric.Object.html) | [fabric.Group](fabric.Group.html)

#### [(static)invertTransform(t)&rarr; {Array}](#.invertTransform)

Invert transformation t

##### Parameters:
|Name|Type|Description| |
|`t`|Array|The transform|

Source:

* [fabric.js](fabric.js.html), [line 952](fabric.js.html#line952)

##### Returns:

The inverted transform

Type

Array

#### [(static)isTransparent(ctx, x, y, tolerance)](#.isTransparent)

Returns true if context has transparent pixel at specified location (taking tolerance into account)

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|context|
|`x`|Number|x coordinate|
|`y`|Number|y coordinate|
|`tolerance`|Number|Tolerance|

Source:

* [fabric.js](fabric.js.html), [line 1549](fabric.js.html#line1549)

#### [(static)joinPath(pathData)&rarr; {String}](#.joinPath)

Join path commands to go back to svg format

##### Parameters:
|Name|Type|Description| |
|`pathData`|Array|fabricJS parsed path commands|

Source:

* [fabric.js](fabric.js.html), [line 2663](fabric.js.html#line2663)

##### Returns:

joined path 'M 0 0 L 20 30'

Type

String

#### [(static)limitDimsByArea(ar, maximumArea)&rarr; {Object.x|Object.y}](#.limitDimsByArea)

Given current aspect ratio, determines the max width and height that can respect the total allowed area for the cache.

##### Parameters:
|Name|Type|Description| |
|`ar`|Number|aspect ratio|
|`maximumArea`|Number|Maximum area you want to achieve|

Source:

* [fabric.js](fabric.js.html), [line 1646](fabric.js.html#line1646)

##### Returns:

* Limited dimensions by X

  Type

Object.x
* Limited dimensions by Y

  Type

Object.y

#### [(static)loadImage(url, callback, contextopt, crossOriginopt)](#.loadImage)

Loads image element from given url and passes it to a callback

##### Parameters:
|Name|Type|Attributes|Description| |
|`url`|String|URL representing an image|
|`callback`|function|Callback; invoked with loaded image|
|`context`|\*|optional|Context to invoke callback in|
|`crossOrigin`|Object|optional|crossOrigin value to set image element to|

Source:

* [fabric.js](fabric.js.html), [line 1090](fabric.js.html#line1090)

#### [(static)loadImageInDom(img, callback)&rarr; {Object}](#.loadImageInDom)

Attaches SVG image with data: URL to the dom

##### Parameters:
|Name|Type|Description| |
|`img`|Object|Image object with data:image/svg src|
|`callback`|function|Callback; invoked with loaded image|

Source:

* [fabric.js](fabric.js.html), [line 1141](fabric.js.html#line1141)

##### Returns:

DOM element (div containing the SVG image)

Type

Object

#### [(static)makeBoundingBoxFromPoints(points, transformopt)&rarr; {Object}](#.makeBoundingBoxFromPoints)

Returns coordinates of points's bounding rectangle (left, top, width, height)

##### Parameters:
|Name|Type|Attributes|Description| |
|`points`|Array|4 points array|
|`transform`|Array|optional|an array of 6 numbers representing a 2x3 transform matrix|

Source:

* [fabric.js](fabric.js.html), [line 922](fabric.js.html#line922)

##### Returns:

Object with left, top, width, height properties

Type

Object

#### [(static)makeElement(tagName, attributesopt)&rarr; {HTMLElement}](#.makeElement)

Creates specified element with specified attributes

##### Parameters:
|Name|Type|Attributes|Description| |
|`tagName`|String|Type of an element to create|
|`attributes`|Object|optional|Attributes to set on an element|

Source:

* [fabric.js](fabric.js.html), [line 3249](fabric.js.html#line3249)

##### Returns:

Newly created element

Type

HTMLElement

#### [(static)makeElementSelectable(element)&rarr; {HTMLElement}](#.makeElementSelectable)

Makes element selectable

##### Parameters:
|Name|Type|Description| |
|`element`|HTMLElement|Element to make selectable|

Source:

* [fabric.js](fabric.js.html), [line 3439](fabric.js.html#line3439)

##### Returns:

Element that was passed in

Type

HTMLElement

#### [(static)makeElementUnselectable(element)&rarr; {HTMLElement}](#.makeElementUnselectable)

Makes element unselectable

##### Parameters:
|Name|Type|Description| |
|`element`|HTMLElement|Element to make unselectable|

Source:

* [fabric.js](fabric.js.html), [line 3420](fabric.js.html#line3420)

##### Returns:

Element that was passed in

Type

HTMLElement

#### [(static)matrixToSVG(transform)&rarr; {String|Object.y}](#.matrixToSVG)

given an array of 6 number returns something like \`"matrix(...numbers)"\`

##### Parameters:
|Name|Type|Description| |
|`transform`|Array|an array with 6 numbers|

Source:

* [fabric.js](fabric.js.html), [line 1697](fabric.js.html#line1697)

##### Returns:

* transform matrix for svg

  Type

String
* Limited dimensions by Y

  Type

Object.y

#### [(static)mergeClipPaths(c1, c2)&rarr; {[fabric.Object](fabric.Object.html)}](#.mergeClipPaths)

Merges 2 clip paths into one visually equal clip path \*\*IMPORTANT\*\*:\\ Does \*\*NOT\*\* clone the arguments, clone them proir if necessary. Creates a wrapper (group) that contains one clip path and is clipped by the other so content is kept where both overlap. Use this method if both the clip paths may have nested clip paths of their own, so assigning one to the other's clip path property is not possible. In order to handle the \`inverted\` property we follow logic described in the following cases:\\ \*\*(1)\*\* both clip paths are inverted - the clip paths pass the inverted prop to the wrapper and loose it themselves.\\ \*\*(2)\*\* one is inverted and the other isn't - the wrapper shouldn't become inverted and the inverted clip path must clip the non inverted one to produce an identical visual effect.\\ \*\*(3)\*\* both clip paths are not inverted - wrapper and clip paths remain unchanged.

##### Parameters:
|Name|Type|Description| |
|`c1`|[fabric.Object](fabric.Object.html)|
|`c2`|[fabric.Object](fabric.Object.html)|

Source:

* [fabric.js](fabric.js.html), [line 1818](fabric.js.html#line1818)

##### Returns:

merged clip path

Type

[fabric.Object](fabric.Object.html)

#### [(static)multiplyTransformMatrices(a, b, is2x2)&rarr; {Array}](#.multiplyTransformMatrices)

Multiply matrix A by matrix B to nest transformations

##### Parameters:
|Name|Type|Description| |
|`a`|Array|First transformMatrix|
|`b`|Array|Second transformMatrix|
|`is2x2`|Boolean|flag to multiply matrices as 2x2 matrices|

Source:

* [fabric.js](fabric.js.html), [line 1373](fabric.js.html#line1373)

##### Returns:

The product of the two transform matrices

Type

Array

#### [(static)parsePreserveAspectRatioAttribute(attribute)&rarr; {Object}](#.parsePreserveAspectRatioAttribute)

Parse preserveAspectRatio attribute from element

##### Parameters:
|Name|Type|Description| |
|`attribute`|string|to be parsed|

Source:

* [fabric.js](fabric.js.html), [line 1591](fabric.js.html#line1591)

##### Returns:

an object containing align and meetOrSlice attribute

Type

Object

#### [(static)parseUnit(value, fontSize)&rarr; {Number|String}](#.parseUnit)

Converts from attribute value to pixel value if applicable. Returns converted pixels or original value not converted.

##### Parameters:
|Name|Type|Description| |
|`value`|Number | String|number to operate on|
|`fontSize`|Number|

Source:

* [fabric.js](fabric.js.html), [line 980](fabric.js.html#line980)

##### Returns:

Type

Number | String

#### [(static)populateWithProperties(source, destination)&rarr; {Array}](#.populateWithProperties)

Populates an object with properties of another object

##### Parameters:
|Name|Type|Description| |
|`source`|Object|Source object|
|`destination`|Object|Destination object|

Source:

* [fabric.js](fabric.js.html), [line 1306](fabric.js.html#line1306)

##### Returns:

properties Properties names to include

Type

Array

#### [(static)projectStrokeOnPoints(points, options, openPathopt)&rarr; {Array.[fabric.Point](fabric.Point.html)\}](#.projectStrokeOnPoints)

Project stroke width on points returning 2 projections for each point as follows: - \`miter\`: 2 points corresponding to the outer boundary and the inner boundary of stroke. - \`bevel\`: 2 points corresponding to the bevel boundaries, tangent to the bisector. - \`round\`: same as \`bevel\` Used to calculate object's bounding box

##### Parameters:
|Name|Type|Attributes|Description| |
|`points`|Array.Point|
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codestrokeWidth/code/td                        td class="type"                            span class="param-type"number/span                        /td                                    td class="description last"/td        /tr            tr                            td class="name"codestrokeLineJoin/code/td                        td class="type"                            span class="param-type"'miter'/span|span class="param-type"'bevel'/span|span class="param-type"'round'/span                        /td                                    td class="description last"/td        /tr            tr                            td class="name"codestrokeMiterLimit/code/td                        td class="type"                            span class="param-type"number/span                        /td                                    td class="description last"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit/td        /tr            tr                            td class="name"codestrokeUniform/code/td                        td class="type"                            span class="param-type"boolean/span                        /td                                    td class="description last"/td        /tr            tr                            td class="name"codescaleX/code/td                        td class="type"                            span class="param-type"number/span                        /td                                    td class="description last"/td        /tr            tr                            td class="name"codescaleY/code/td                        td class="type"                            span class="param-type"number/span                        /td                                    td class="description last"/td        /tr        /tbody/table|
|`openPath`|boolean|optional|whether the shape is open or not, affects the calculations of the first and last points|

Source:

* [fabric.js](fabric.js.html), [line 843](fabric.js.html#line843)

##### Returns:

array of size 2n/4n of all suspected points

Type

Array.[fabric.Point](fabric.Point.html)\

#### [(static)qrDecompose(a)&rarr; {Object}](#.qrDecompose)

Decomposes standard 2x3 matrix into transform components

##### Parameters:
|Name|Type|Description| |
|`a`|Array|transformMatrix|

Source:

* [fabric.js](fabric.js.html), [line 1392](fabric.js.html#line1392)

##### Returns:

Components of transform

Type

Object

#### [(static)radiansToDegrees(radians)&rarr; {Number}](#.radiansToDegrees)

Transforms radians to degrees.

##### Parameters:
|Name|Type|Description| |
|`radians`|Number|value in radians|

Source:

* [fabric.js](fabric.js.html), [line 727](fabric.js.html#line727)

##### Returns:

value in degrees

Type

Number

#### [(static)removeFromArray(array, value)&rarr; {Array}](#.removeFromArray)

Removes value from an array. Presence of value (and its position in an array) is determined via \`Array.prototype.indexOf\`

##### Parameters:
|Name|Type|Description| |
|`array`|Array|
|`value`|\*|

Source:

* [fabric.js](fabric.js.html), [line 689](fabric.js.html#line689)

##### Returns:

original array

Type

Array

#### [(static)removeListener(element, eventName, handler)](#.removeListener)

Removes an event listener from an element

##### Parameters:
|Name|Type|Description| |
|`element`|HTMLElement|
|`eventName`|String|
|`handler`|function|

Source:

* [fabric.js](fabric.js.html), [line 3102](fabric.js.html#line3102)

#### [(static)removeTransformFromObject(object, transform)](#.removeTransformFromObject)

given an object and a transform, apply the inverse transform to the object, this is equivalent to remove from that object that transformation, so that added in a space with the removed transform, the object will be the same as before. Removing from an object a transform that scale by 2 is like scaling it by 1/2. Removing from an object a transfrom that rotate by 30deg is like rotating by 30deg in the opposite direction. This util is used to add objects inside transformed groups or nested groups.

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|the object you want to transform|
|`transform`|Array|the destination transform|

Source:

* [fabric.js](fabric.js.html), [line 1715](fabric.js.html#line1715)

#### [(static)request(url, optionsopt)&rarr; {XMLHttpRequest}](#.request)

Cross-browser abstraction for sending XMLHttpRequest

##### Parameters:
|Name|Type|Attributes|Description| |
|`url`|String|URL to send XMLHttpRequest to|
|`options`|Object|optional|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codemethod/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    "GET"                                /td                        td class="description last"/td        /tr            tr                            td class="name"codeparameters/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"parameters to append to url in GET or in body/td        /tr            tr                            td class="name"codebody/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"body to send with POST or PUT request/td        /tr            tr                            td class="name"codeonComplete/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                                                /td                                        td class="default"                                /td                        td class="description last"Callback to invoke when request is completed/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 3523](fabric.js.html#line3523)

##### Returns:

request

Type

XMLHttpRequest

#### [(static)requestAnimFrame(callback, element)](#.requestAnimFrame)

requestAnimationFrame polyfill based on http://paulirish.com/2011/requestanimationframe-for-smart-animating/ In order to get a precise start time, \`requestAnimFrame\` should be called as an entry into the method

##### Parameters:
|Name|Type|Description| |
|`callback`|function|Callback to invoke|
|`element`|DOMElement|optional Element to associate with animation|

Source:

* [fabric.js](fabric.js.html), [line 3789](fabric.js.html#line3789)

#### [(static)resetObjectTransform(target)](#.resetObjectTransform)

reset an object transform state to neutral. Top and left are not accounted for

##### Parameters:
|Name|Type|Description| |
|`target`|[fabric.Object](fabric.Object.html)|object to transform|

Source:

* [fabric.js](fabric.js.html), [line 1510](fabric.js.html#line1510)

#### [(static)resolveNamespace(namespace)&rarr; {Object}](#.resolveNamespace)

Returns object of given namespace

##### Parameters:
|Name|Type|Description| |
|`namespace`|String|Namespace string e.g. 'fabric.Image.filter' or 'fabric'|

Source:

* [fabric.js](fabric.js.html), [line 1066](fabric.js.html#line1066)

##### Returns:

Object for given namespace (default fabric)

Type

Object

#### [(static)rotatePoint(point, origin, radians)&rarr; {[fabric.Point](fabric.Point.html)}](#.rotatePoint)

Rotates \`point\` around \`origin\` with \`radians\`

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|The point to rotate|
|`origin`|[fabric.Point](fabric.Point.html)|The origin of the rotation|
|`radians`|Number|The radians of the angle for the rotation|

Source:

* [fabric.js](fabric.js.html), [line 740](fabric.js.html#line740)

##### Returns:

The new rotated point

Type

[fabric.Point](fabric.Point.html)

#### [(static)rotateVector(vector, radians)&rarr; {Object}](#.rotateVector)

Rotates \`vector\` with \`radians\`

##### Parameters:
|Name|Type|Description| |
|`vector`|Object|The vector to rotate (x and y)|
|`radians`|Number|The radians of the angle for the rotation|

Source:

* [fabric.js](fabric.js.html), [line 754](fabric.js.html#line754)

##### Returns:

The new rotated point

Type

Object

#### [(static)saveObjectTransform(target)&rarr; {Object}](#.saveObjectTransform)

Extract Object transform values

##### Parameters:
|Name|Type|Description| |
|`target`|[fabric.Object](fabric.Object.html)|object to read from|

Source:

* [fabric.js](fabric.js.html), [line 1527](fabric.js.html#line1527)

##### Returns:

Components of transform

Type

Object

#### [(static)setStyle(element, styles)&rarr; {HTMLElement}](#.setStyle)

Cross-browser wrapper for setting element's style

##### Parameters:
|Name|Type|Description| |
|`element`|HTMLElement|
|`styles`|Object|

Source:

* [fabric.js](fabric.js.html), [line 3139](fabric.js.html#line3139)

##### Returns:

Element that was passed as a first argument

Type

HTMLElement

#### [(static)sin(angle)&rarr; {Number}](#.sin)

Calculate the sin of an angle, avoiding returning floats for known results

##### Parameters:
|Name|Type|Description| |
|`angle`|Number|the angle in radians or in degree|

Source:

* [fabric.js](fabric.js.html), [line 665](fabric.js.html#line665)

##### Returns:

Type

Number

#### [(static)sizeAfterTransform(width, height, options)&rarr; {Object.x|Object.y}](#.sizeAfterTransform)

given a width and height, return the size of the bounding box that can contains the box with width/height with applied transform described in options. Use to calculate the boxes around objects for controls.

##### Parameters:
|Name|Type|Description| |
|`width`|Number|
|`height`|Number|
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codescaleX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"/td        /tr            tr                            td class="name"codescaleY/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"/td        /tr            tr                            td class="name"codeskewX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"/td        /tr            tr                            td class="name"codeskewY/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 1772](fabric.js.html#line1772)

##### Returns:

* width of containing

  Type

Object.x
* height of containing

  Type

Object.y

#### [(static)toArray(arrayLike)&rarr; {Array}](#.toArray)

Converts an array-like object (e.g. arguments or NodeList) to an array

##### Parameters:
|Name|Type|Description| |
|`arrayLike`|Object|

Source:

* [fabric.js](fabric.js.html), [line 3223](fabric.js.html#line3223)

##### Returns:

Type

Array

#### [(static)toDataURL(canvasEl, format, quality)&rarr; {String}](#.toDataURL)

since 2.6.0 moved from canvas instance to utility.

##### Parameters:
|Name|Type|Description| |
|`canvasEl`|CanvasElement|to copy size and content of|
|`format`|String|'jpeg' or 'png', in some browsers 'webp' is ok too|
|`quality`|Number|= 1 and  0|

Source:

* [fabric.js](fabric.js.html), [line 1350](fabric.js.html#line1350)

##### Returns:

data url

Type

String

#### [(static)toFixed(number, fractionDigits)&rarr; {Number}](#.toFixed)

A wrapper around Number#toFixed, which contrary to native method returns number, not string.

##### Parameters:
|Name|Type|Description| |
|`number`|Number | String|number to operate on|
|`fractionDigits`|Number|number of fraction digits to "leave"|

Source:

* [fabric.js](fabric.js.html), [line 969](fabric.js.html#line969)

##### Returns:

Type

Number

#### [(static)transformPoint(p, t, ignoreOffsetopt)&rarr; {[fabric.Point](fabric.Point.html)}](#.transformPoint)

Apply transform t to point p

##### Parameters:
|Name|Type|Attributes|Description| |
|`p`|[fabric.Point](fabric.Point.html)|The point to transform|
|`t`|Array|The transform|
|`ignoreOffset`|Boolean|optional|Indicates that the offset should not be applied|

Source:

* [fabric.js](fabric.js.html), [line 903](fabric.js.html#line903)

##### Returns:

The transformed point

Type

[fabric.Point](fabric.Point.html)

#### [(static)wrapElement(element, wrapper, attributesopt)&rarr; {HTMLElement}](#.wrapElement)

Wraps element with another element

##### Parameters:
|Name|Type|Attributes|Description| |
|`element`|HTMLElement|Element to wrap|
|`wrapper`|HTMLElement | String|Element to wrap with|
|`attributes`|Object|optional|Attributes to set on a wrapper|

Source:

* [fabric.js](fabric.js.html), [line 3285](fabric.js.html#line3285)

##### Returns:

wrapper

Type

HTMLElement

### Type Definitions

#### [Point](#.Point)

Creates a vetor from points represented as a point

##### Type:

* Object

##### Properties:
|Name|Type|Description| |
|`x`|number|
|`y`|number|

Source:

* [fabric.js](fabric.js.html), [line 765](fabric.js.html#line765)
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:18 GMT+0100 (Central European Standard Time)