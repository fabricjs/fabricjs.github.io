# StaticCanvas

## [fabric](fabric.html).StaticCanvas #### [new StaticCanvas()](#StaticCanvas)

Static canvas class

Mixes In:

* [fabric.Collection](fabric.Collection.html)
* [fabric.Observable](fabric.Observable.html)

Source:

* [fabric.js](fabric.js.html), [line 8763](fabric.js.html#line8763)

See:

* [StaticCanvas demo](http://fabricjs.com/static_canvas)
* [fabric.StaticCanvas#initialize](fabric.StaticCanvas.html#initialize) for constructor definition

##### Fires:

* before:render
* after:render
* canvas:cleared
* object:added
* object:removed

### Members

#### [(static)EMPTY\_JSON:String](#.EMPTY_JSON)

##### Type:

* String

Default Value:

* {"objects": \[\], "background": "white"}

Source:

* [fabric.js](fabric.js.html), [line 10555](fabric.js.html#line10555)

#### [allowTouchScrolling:Boolean](#allowTouchScrolling)

Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 8867](fabric.js.html#line8867)

#### [backgroundColor:String|[fabric.Pattern](fabric.Pattern.html)](#backgroundColor)

Background color of canvas instance. Should be set via [fabric.StaticCanvas#setBackgroundColor](fabric.StaticCanvas.html#setBackgroundColor).

##### Type:

* String | [fabric.Pattern](fabric.Pattern.html)

Source:

* [fabric.js](fabric.js.html), [line 8797](fabric.js.html#line8797)

#### [backgroundImage:[fabric.Image](fabric.Image.html)](#backgroundImage)

Background image of canvas instance. since 2.4.0 image caching is active, please when putting an image as background, add to the canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom vale. As an alternative you can disable image objectCaching

##### Type:

* [fabric.Image](fabric.Image.html)

Source:

* [fabric.js](fabric.js.html), [line 8807](fabric.js.html#line8807)

#### [backgroundVpt:Boolean](#backgroundVpt)

if set to false background image is not affected by viewport transform

##### Type:

* Boolean

Since:

* 1.6.3

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8893](fabric.js.html#line8893)

#### [clipPath:[fabric.Object](fabric.Object.html)](#clipPath)

a fabricObject that, without stroke define a clipping area with their shape. filled in black the clipPath object gets used when the canvas has rendered, and the context is placed in the top left corner of the canvas. clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

##### Type:

* [fabric.Object](fabric.Object.html)

Source:

* [fabric.js](fabric.js.html), [line 8940](fabric.js.html#line8940)

#### [controlsAboveOverlay:Boolean](#controlsAboveOverlay)

Indicates whether object controls (borders/controls) are rendered above overlay image

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 8860](fabric.js.html#line8860)

#### [enableRetinaScaling:Boolean](#enableRetinaScaling)

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

##### Type:

* Boolean

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8908](fabric.js.html#line8908)

#### [FX\_DURATION:Number](#FX_DURATION)

Animation duration (in ms) for fx\* methods

##### Type:

* Number

Default Value:

* 500

Source:

* [fabric.js](fabric.js.html), [line 18030](fabric.js.html#line18030)

#### [imageSmoothingEnabled:Boolean](#imageSmoothingEnabled)

Indicates whether this canvas will use image smoothing, this is on by default in browsers

##### Type:

* Boolean

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8874](fabric.js.html#line8874)

#### [includeDefaultValues:Boolean](#includeDefaultValues)

Indicates whether toObject/toDatalessObject should include default values if set to false, takes precedence over the object value.

##### Type:

* Boolean

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8834](fabric.js.html#line8834)

#### [overlayColor:String|[fabric.Pattern](fabric.Pattern.html)](#overlayColor)

Overlay color of canvas instance. Should be set via [fabric.StaticCanvas#setOverlayColor](fabric.StaticCanvas.html#setOverlayColor)

##### Type:

* String | [fabric.Pattern](fabric.Pattern.html)

Since:

* 1.3.9

Source:

* [fabric.js](fabric.js.html), [line 8816](fabric.js.html#line8816)

#### [overlayImage:[fabric.Image](fabric.Image.html)](#overlayImage)

Overlay image of canvas instance. since 2.4.0 image caching is active, please when putting an image as overlay, add to the canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom vale. As an alternative you can disable image objectCaching

##### Type:

* [fabric.Image](fabric.Image.html)

Source:

* [fabric.js](fabric.js.html), [line 8826](fabric.js.html#line8826)

#### [overlayVpt:Boolean](#overlayVpt)

if set to false overlya image is not affected by viewport transform

##### Type:

* Boolean

Since:

* 1.6.3

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8901](fabric.js.html#line8901)

#### [renderOnAddRemove:Boolean](#renderOnAddRemove)

Indicates whether [fabric.Collection.add](fabric.Collection.html#.add), [fabric.Collection.insertAt](fabric.Collection.html#.insertAt) and [fabric.Collection.remove](fabric.Collection.html#.remove), fabric.StaticCanvas.moveTo, fabric.StaticCanvas.clear and many more, should also re-render canvas. Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once since the renders are quequed and executed one per frame. Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() ) Left default to true to do not break documentation and old app, fiddles.

##### Type:

* Boolean

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8853](fabric.js.html#line8853)

#### [skipOffscreen:Boolean](#skipOffscreen)

Based on vptCoords and object.aCoords, skip rendering of objects that are not included in current viewport. May greatly help in applications with crowded canvas and use of zoom/pan If One of the corner of the bounding box of the object is on the canvas the objects get rendered.

##### Type:

* Boolean

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8931](fabric.js.html#line8931)

#### [stateful:Boolean](#stateful)

Indicates whether objects' state should be saved

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 8841](fabric.js.html#line8841)

#### [svgViewportTransformation:Boolean](#svgViewportTransformation)

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true, a zoomed canvas will then produce zoomed SVG output.

##### Type:

* Boolean

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 9988](fabric.js.html#line9988)

#### [viewportTransform:Array](#viewportTransform)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

##### Type:

* Array

Source:

* [fabric.js](fabric.js.html), [line 8885](fabric.js.html#line8885)

##### Examples

Default transform

```
canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
```

Scale by 70% and translate toward bottom-right by 50, without skewing

```
canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
```

#### [vptCoords](#vptCoords)

Describe canvas element extension over design properties are tl,tr,bl,br. if canvas is not zoomed/panned those points are the four corner of canvas if canvas is viewportTransformed you those points indicate the extension of canvas element in plain untrasformed coordinates The coordinates get updated with @method calcViewportBoundaries.

Source:

* [fabric.js](fabric.js.html), [line 8919](fabric.js.html#line8919)

### Methods

#### [(static)supports(methodName)&rarr; {Boolean|null}](#.supports)

Provides a way to check support of some of the canvas methods (either those of HTMLCanvasElement itself, or rendering context)

##### Parameters:
|Name|Type|Description| |
|`methodName`|String|Method to check support for; Could be one of "setLineDash"|

Source:

* [fabric.js](fabric.js.html), [line 10566](fabric.js.html#line10566)

##### Returns:

\`true\` if method is supported (or at least exists), \`null\` if canvas element or context can not be initialized

Type

Boolean | null

#### [absolutePan(point)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#absolutePan)

Pan viewport so as to place point at top left corner of canvas

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|to move to|

Source:

* [fabric.js](fabric.js.html), [line 9486](fabric.js.html#line9486)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [add(&hellip;object)&rarr; {Self}](#add)

Adds objects to collection, Canvas or Group, then renders canvas (if \`renderOnAddRemove\` is not \`false\`). in case of Group no changes to bounding box are made. Objects should be instances of (or inherit from) fabric.Object Use of this function is highly discouraged for groups. you can add a bunch of objects with the add method but then you NEED to run a addWithUpdate call for the Group class or position/bbox will be wrong.

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|[fabric.Object](fabric.Object.html)|repeatable|Zero or more fabric instances|

Mixes In:

* [fabric.Collection.add](fabric.Collection.html#.add)

Source:

* [fabric.js](fabric.js.html), [line 375](fabric.js.html#line375)

##### Returns:

thisArg

Type

Self

#### [bringForward(object, intersectingopt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#bringForward)

Moves an object or a selection up in stack of drawn objects An optional parameter, intersecting allows to move the object in front of the first intersecting object. Where intersection is calculated with bounding box. If no intersection is found, there will not be change in the stack.

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to send|
|`intersecting`|Boolean|optional|If \`true\`, send object in front of next upper intersecting object|

Source:

* [fabric.js](fabric.js.html), [line 10418](fabric.js.html#line10418)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [bringToFront(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#bringToFront)

Moves an object or the objects of a multiple selection to the top of the stack of drawn objects

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to send|

Source:

* [fabric.js](fabric.js.html), [line 10312](fabric.js.html#line10312)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [calcOffset()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#calcOffset)

Calculates canvas element offset relative to the document This method is also attached as "resize" event handler of window

Source:

* [fabric.js](fabric.js.html), [line 9014](fabric.js.html#line9014)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [calcViewportBoundaries()&rarr; {Object}](#calcViewportBoundaries)

Calculate the position of the 4 corner of canvas with current viewportTransform. helps to determinate when an object is in the current rendering viewport using object absolute coordinates ( aCoords )

Source:

* [fabric.js](fabric.js.html), [line 9624](fabric.js.html#line9624)

##### Returns:

points.tl

Type

Object

#### [centerObject(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#centerObject)

Centers object vertically and horizontally in the canvas

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to center vertically and horizontally|

Source:

* [fabric.js](fabric.js.html), [line 9804](fabric.js.html#line9804)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [centerObjectH(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#centerObjectH)

Centers object horizontally in the canvas

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to center horizontally|

Source:

* [fabric.js](fabric.js.html), [line 9784](fabric.js.html#line9784)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [centerObjectV(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#centerObjectV)

Centers object vertically in the canvas

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to center vertically|

Source:

* [fabric.js](fabric.js.html), [line 9794](fabric.js.html#line9794)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [clear()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#clear)

Clears all contexts (background, main, top) of an instance

Source:

* [fabric.js](fabric.js.html), [line 9560](fabric.js.html#line9560)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [clearContext(ctx)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#clearContext)

Clears specified context of canvas element

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to clear|

Source:

* [fabric.js](fabric.js.html), [line 9542](fabric.js.html#line9542)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [clone(callbackopt, propertiesopt)](#clone)

Clones canvas instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`callback`|Object|optional|Receives cloned instance as a first argument|
|`properties`|Array|optional|Array of properties to include in the cloned canvas and children|

Source:

* [fabric.js](fabric.js.html), [line 14267](fabric.js.html#line14267)

#### [cloneWithoutData(callbackopt)](#cloneWithoutData)

Clones canvas instance without cloning existing data. This essentially copies canvas dimensions, clipping properties, etc. but leaves data empty (so that you can populate it with your own)

##### Parameters:
|Name|Type|Attributes|Description| |
|`callback`|Object|optional|Receives cloned instance as a first argument|

Source:

* [fabric.js](fabric.js.html), [line 14282](fabric.js.html#line14282)

#### [complexity()&rarr; {Number}](#complexity)

Returns number representation of a collection complexity

Mixes In:

* [fabric.Collection.complexity](fabric.Collection.html#.complexity)

Source:

* [fabric.js](fabric.js.html), [line 519](fabric.js.html#line519)

##### Returns:

complexity

Type

Number

#### [contains(object, deepopt)&rarr; {Boolean}](#contains)

Returns true if collection contains an object

##### Parameters:
|Name|Type|Attributes|Default|Description| |
|`object`|Object|Object to check against|
|`deep`|Boolean|optional|false|\`true\` to check all descendants, \`false\` to check only \`\_objects\`|

Mixes In:

* [fabric.Collection.contains](fabric.Collection.html#.contains)

Source:

* [fabric.js](fabric.js.html), [line 503](fabric.js.html#line503)

##### Returns:

\`true\` if collection contains an object

Type

Boolean

#### [createSVGFontFacesMarkup(objects)&rarr; {String}](#createSVGFontFacesMarkup)

Creates markup containing SVG font faces, font URLs for font faces must be collected by developers and are not extracted from the DOM by fabricjs

##### Parameters:
|Name|Type|Description| |
|`objects`|Array|Array of fabric objects|

Source:

* [fabric.js](fabric.js.html), [line 10151](fabric.js.html#line10151)

##### Returns:

Type

String

#### [createSVGRefElementsMarkup()&rarr; {String}](#createSVGRefElementsMarkup)

Creates markup containing SVG referenced elements like patterns, gradients etc.

Source:

* [fabric.js](fabric.js.html), [line 10125](fabric.js.html#line10125)

##### Returns:

Type

String

#### [dispose()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#dispose)

Clears a canvas element and dispose objects

Source:

* [fabric.js](fabric.js.html), [line 10498](fabric.js.html#line10498)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [drawClipPathOnCanvas(ctx)](#drawClipPathOnCanvas)

Paint the cached clipPath on the lowerCanvasEl

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|

Source:

* [fabric.js](fabric.js.html), [line 9685](fabric.js.html#line9685)

#### [fire(eventName, optionsopt)&rarr; {Self}](#fire)

Fires event with an optional options object

##### Parameters:
|Name|Type|Attributes|Description| |
|`eventName`|String|Event name to fire|
|`options`|Object|optional|Options object|

Mixes In:

* [fabric.Observable.fire](fabric.Observable.html#.fire)

Source:

* [fabric.js](fabric.js.html), [line 323](fabric.js.html#line323)

##### Returns:

thisArg

Type

Self

#### [forEachObject(callback, context)&rarr; {Self}](#forEachObject)

Executes given function for each object in this group

##### Parameters:
|Name|Type|Description| |
|`callback`|function|Callback invoked with current object as first argument, index - as second and an array of all objects - as third. Callback is invoked in a context of Global Object (e.g. \`window\`) when no \`context\` argument is given|
|`context`|Object|Context (aka thisObject)|

Mixes In:

* [fabric.Collection.forEachObject](fabric.Collection.html#.forEachObject)

Source:

* [fabric.js](fabric.js.html), [line 448](fabric.js.html#line448)

##### Returns:

thisArg

Type

Self

#### [fxCenterObjectH(object, callbacksopt)&rarr; {fabric.AnimationContext}](#fxCenterObjectH)

Centers object horizontally with animation.

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to center|
|`callbacks`|Object|optional|Callbacks object with optional "onComplete" and/or "onChange" properties
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeonComplete/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on completion/td        /tr            tr                            td class="name"codeonChange/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on every step of animation/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 18040](fabric.js.html#line18040)

##### Returns:

context

Type

fabric.AnimationContext

#### [fxCenterObjectV(object, callbacksopt)&rarr; {fabric.AnimationContext}](#fxCenterObjectV)

Centers object vertically with animation.

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to center|
|`callbacks`|Object|optional|Callbacks object with optional "onComplete" and/or "onChange" properties
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeonComplete/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on completion/td        /tr            tr                            td class="name"codeonChange/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on every step of animation/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 18073](fabric.js.html#line18073)

##### Returns:

context

Type

fabric.AnimationContext

#### [fxRemove(object, callbacksopt)&rarr; {fabric.AnimationContext}](#fxRemove)

Same as \`fabric.Canvas#remove\` but animated

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to remove|
|`callbacks`|Object|optional|Callbacks object with optional "onComplete" and/or "onChange" properties
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeonComplete/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on completion/td        /tr            tr                            td class="name"codeonChange/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on every step of animation/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 18106](fabric.js.html#line18106)

##### Returns:

context

Type

fabric.AnimationContext

#### [fxStraightenObject(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#fxStraightenObject)

Same as fabric.Canvas.prototype.straightenObject, but animated

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to straighten|

Source:

* [fabric.js](fabric.js.html), [line 21580](fabric.js.html#line21580)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [getCenter()&rarr; {Object}](#getCenter)

Returns coordinates of a center of canvas. Returned value is an object with top and left properties

Source:

* [fabric.js](fabric.js.html), [line 9772](fabric.js.html#line9772)

##### Returns:

object with "top" and "left" number values

Type

Object

#### [getContext()&rarr; {CanvasRenderingContext2D}](#getContext)

Returns context of canvas where objects are drawn

Source:

* [fabric.js](fabric.js.html), [line 9551](fabric.js.html#line9551)

##### Returns:

Type

CanvasRenderingContext2D

#### [getElement()&rarr; {HTMLCanvasElement}](#getElement)

Returns canvas element corresponding to this instance

Source:

* [fabric.js](fabric.js.html), [line 9510](fabric.js.html#line9510)

##### Returns:

Type

HTMLCanvasElement

#### [getHeight()&rarr; {Number}](#getHeight)

Returns canvas height (in px)

Source:

* [fabric.js](fabric.js.html), [line 9291](fabric.js.html#line9291)

##### Returns:

Type

Number

#### [getObjects(typeopt)&rarr; {Array}](#getObjects)

Returns an array of children objects of this instance Type parameter introduced in 1.3.10 since 2.3.5 this method return always a COPY of the array;

##### Parameters:
|Name|Type|Attributes|Description| |
|`type`|String|optional|When specified, only objects of this type are returned|

Mixes In:

* [fabric.Collection.getObjects](fabric.Collection.html#.getObjects)

Source:

* [fabric.js](fabric.js.html), [line 463](fabric.js.html#line463)

##### Returns:

Type

Array

#### [getVpCenter()&rarr; {[fabric.Point](fabric.Point.html)}](#getVpCenter)

Calculate the point in canvas that correspond to the center of actual viewport.

Source:

* [fabric.js](fabric.js.html), [line 9851](fabric.js.html#line9851)

##### Returns:

vpCenter, viewport center

Type

[fabric.Point](fabric.Point.html)

#### [getWidth()&rarr; {Number}](#getWidth)

Returns canvas width (in px)

Source:

* [fabric.js](fabric.js.html), [line 9283](fabric.js.html#line9283)

##### Returns:

Type

Number

#### [getZoom()&rarr; {Number}](#getZoom)

Returns canvas zoom level

Source:

* [fabric.js](fabric.js.html), [line 9413](fabric.js.html#line9413)

##### Returns:

Type

Number

#### [initialize(el, optionsopt)&rarr; {Object}](#initialize)

Constructor

##### Parameters:
|Name|Type|Attributes|Description| |
|`el`|HTMLElement | String|canvas element to initialize instance on|
|`options`|Object|optional|Options object|

Source:

* [fabric.js](fabric.js.html), [line 8784](fabric.js.html#line8784)

##### Returns:

thisArg

Type

Object

#### [insertAt(object, index, nonSplicing)&rarr; {Self}](#insertAt)

Inserts an object into collection at specified index, then renders canvas (if \`renderOnAddRemove\` is not \`false\`) An object should be an instance of (or inherit from) fabric.Object Use of this function is highly discouraged for groups. you can add a bunch of objects with the insertAt method but then you NEED to run a addWithUpdate call for the Group class or position/bbox will be wrong.

##### Parameters:
|Name|Type|Description| |
|`object`|Object|Object to insert|
|`index`|Number|Index to insert object at|
|`nonSplicing`|Boolean|When \`true\`, no splicing (shifting) of objects occurs|

Mixes In:

* [fabric.Collection.insertAt](fabric.Collection.html#.insertAt)

Source:

* [fabric.js](fabric.js.html), [line 398](fabric.js.html#line398)

##### Returns:

thisArg

Type

Self

#### [isEmpty()&rarr; {Boolean}](#isEmpty)

Returns true if collection contains no objects

Mixes In:

* [fabric.Collection.isEmpty](fabric.Collection.html#.isEmpty)

Source:

* [fabric.js](fabric.js.html), [line 485](fabric.js.html#line485)

##### Returns:

true if collection is empty

Type

Boolean

#### [item(index)&rarr; {Self}](#item)

Returns object at specified index

##### Parameters:
|Name|Type|Description| |
|`index`|Number|

Mixes In:

* [fabric.Collection.item](fabric.Collection.html#.item)

Source:

* [fabric.js](fabric.js.html), [line 477](fabric.js.html#line477)

##### Returns:

thisArg

Type

Self

#### [loadFromJSON(json, callback, reviveropt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#loadFromJSON)

Populates canvas with data from the specified JSON. JSON format must conform to the one of [fabric.Canvas#toJSON](fabric.Canvas.html#toJSON)

##### Parameters:
|Name|Type|Attributes|Description| |
|`json`|String | Object|JSON string or object|
|`callback`|function|Callback, invoked when json is parsed and corresponding objects (e.g: [fabric.Image](fabric.Image.html)) are initialized|
|`reviver`|function|optional|Method for further parsing of JSON elements, called after each fabric object created.|

Source:

* [fabric.js](fabric.js.html), [line 14096](fabric.js.html#line14096)

Tutorials:

* *Tutorial: [http://fabricjs.com/fabric-intro-part-3#deserialization](http://fabricjs.com/fabric-intro-part-3#deserialization)*

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/fmgXt/)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

##### Examples

loadFromJSON

```
canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
```

loadFromJSON with reviver

```
canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
  // `o` = json object
  // `object` = fabric.Object instance
  // ... do some stuff ...
});
```

#### [moveTo(object, index)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#moveTo)

Moves an object to specified level in stack of drawn objects

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to send|
|`index`|Number|Position to move to|

Source:

* [fabric.js](fabric.js.html), [line 10487](fabric.js.html#line10487)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [relativePan(point)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#relativePan)

Pans viewpoint relatively

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|(position vector) to move by|

Source:

* [fabric.js](fabric.js.html), [line 9499](fabric.js.html#line9499)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [remove(&hellip;object)&rarr; {Self}](#remove)

Removes objects from a collection, then renders canvas (if \`renderOnAddRemove\` is not \`false\`)

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|[fabric.Object](fabric.Object.html)|repeatable|Zero or more fabric instances|

Mixes In:

* [fabric.Collection.remove](fabric.Collection.html#.remove)

Source:

* [fabric.js](fabric.js.html), [line 417](fabric.js.html#line417)

##### Returns:

thisArg

Type

Self

#### [renderAll()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#renderAll)

Renders the canvas

Source:

* [fabric.js](fabric.js.html), [line 9582](fabric.js.html#line9582)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [renderCanvas(ctx, objects)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#renderCanvas)

Renders background, objects, overlay and controls.

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|
|`objects`|Array|to render|

Source:

* [fabric.js](fabric.js.html), [line 9649](fabric.js.html#line9649)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [requestRenderAll()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#requestRenderAll)

Append a renderAll request to next animation frame. unless one is already in progress, in that case nothing is done a boolean flag will avoid appending more.

Source:

* [fabric.js](fabric.js.html), [line 9610](fabric.js.html#line9610)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [sendBackwards(object, intersectingopt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#sendBackwards)

Moves an object or a selection down in stack of drawn objects An optional parameter, intersecting allows to move the object in behind the first intersecting object. Where intersection is calculated with bounding box. If no intersection is found, there will not be change in the stack.

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to send|
|`intersecting`|Boolean|optional|If \`true\`, send object behind next lower intersecting object|

Source:

* [fabric.js](fabric.js.html), [line 10345](fabric.js.html#line10345)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [sendToBack(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#sendToBack)

Moves an object or the objects of a multiple selection to the bottom of the stack of drawn objects

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to send to back|

Source:

* [fabric.js](fabric.js.html), [line 10283](fabric.js.html#line10283)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [setBackgroundColor(backgroundColor, callback)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setBackgroundColor)

Sets [background color](fabric.StaticCanvas.html#backgroundColor) for this canvas

##### Parameters:
|Name|Type|Description| |
|`backgroundColor`|String | [fabric.Pattern](fabric.Pattern.html)|Color or pattern to set background color to|
|`callback`|function|Callback to invoke when background color is set|

Source:

* [fabric.js](fabric.js.html), [line 9168](fabric.js.html#line9168)

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/hXzvk/)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

##### Examples

Normal backgroundColor - color value

```
canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
```

fabric.Pattern used as backgroundColor

```
canvas.setBackgroundColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png'
}, canvas.renderAll.bind(canvas));
```

fabric.Pattern used as backgroundColor with repeat and offset

```
canvas.setBackgroundColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png',
  repeat: 'repeat',
  offsetX: 200,
  offsetY: 100
}, canvas.renderAll.bind(canvas));
```

#### [setBackgroundImage(image, callback, optionsopt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setBackgroundImage)

Sets [background image](fabric.StaticCanvas.html#backgroundImage) for this canvas

##### Parameters:
|Name|Type|Attributes|Description| |
|`image`|[fabric.Image](fabric.Image.html) | String|fabric.Image instance or URL of an image to set background to|
|`callback`|function|Callback to invoke when image is loaded and set as background|
|`options`|Object|optional|Optional options to set for the [background image](fabric.Image.html).|

Source:

* [fabric.js](fabric.js.html), [line 9118](fabric.js.html#line9118)

See:

* [jsFiddle demo](http://jsfiddle.net/djnr8o7a/28/)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

##### Examples

Normal backgroundImage with left/top = 0

```
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  // Needed to position backgroundImage at 0/0
  originX: 'left',
  originY: 'top'
});
```

backgroundImage with different properties

```
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top'
});
```

Stretched backgroundImage #1 - width/height correspond to canvas width/height

```
fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img, isError) {
   img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
   canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
});
```

Stretched backgroundImage #2 - width/height correspond to canvas width/height

```
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  width: canvas.width,
  height: canvas.height,
  // Needed to position backgroundImage at 0/0
  originX: 'left',
  originY: 'top'
});
```

backgroundImage loaded from cross-origin

```
canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top',
  crossOrigin: 'anonymous'
});
```

#### [setDimensions(dimensions, optionsopt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setDimensions)

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

##### Parameters:
|Name|Type|Attributes|Description| |
|`dimensions`|Object|Object with width/height properties
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span|span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Width of canvas element/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span|span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Height of canvas element/td        /tr        /tbody/table|
|`options`|Object|optional|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codebackstoreOnly/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    false                                /td                        td class="description last"Set the given dimensions only as canvas backstore dimensions/td        /tr            tr                            td class="name"codecssOnly/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    false                                /td                        td class="description last"Set the given dimensions only as css dimensions/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 9332](fabric.js.html#line9332)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [setHeight(value, optionsopt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setHeight)

Sets height of this canvas instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`value`|Number | String|Value to set height to|
|`options`|Object|optional|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codebackstoreOnly/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    false                                /td                        td class="description last"Set the given dimensions only as canvas backstore dimensions/td        /tr            tr                            td class="name"codecssOnly/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    false                                /td                        td class="description last"Set the given dimensions only as css dimensions/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 9317](fabric.js.html#line9317)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [setOverlayColor(overlayColor, callback)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setOverlayColor)

Sets [foreground color](fabric.StaticCanvas.html#overlayColor) for this canvas

##### Parameters:
|Name|Type|Description| |
|`overlayColor`|String | [fabric.Pattern](fabric.Pattern.html)|Color or pattern to set foreground color to|
|`callback`|function|Callback to invoke when foreground color is set|

Source:

* [fabric.js](fabric.js.html), [line 9143](fabric.js.html#line9143)

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/pB55h/)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

##### Examples

Normal overlayColor - color value

```
canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
```

fabric.Pattern used as overlayColor

```
canvas.setOverlayColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png'
}, canvas.renderAll.bind(canvas));
```

fabric.Pattern used as overlayColor with repeat and offset

```
canvas.setOverlayColor({
  source: 'http://fabricjs.com/assets/escheresque_ste.png',
  repeat: 'repeat',
  offsetX: 200,
  offsetY: 100
}, canvas.renderAll.bind(canvas));
```

#### [setOverlayImage(image, callback, optionsopt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setOverlayImage)

Sets [overlay image](fabric.StaticCanvas.html#overlayImage) for this canvas

##### Parameters:
|Name|Type|Attributes|Description| |
|`image`|[fabric.Image](fabric.Image.html) | String|fabric.Image instance or URL of an image to set overlay to|
|`callback`|function|callback to invoke when image is loaded and set as an overlay|
|`options`|Object|optional|Optional options to set for the [overlay image](fabric.Image.html).|

Source:

* [fabric.js](fabric.js.html), [line 9066](fabric.js.html#line9066)

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/MnzHT/)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

##### Examples

Normal overlayImage with left/top = 0

```
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  // Needed to position overlayImage at 0/0
  originX: 'left',
  originY: 'top'
});
```

overlayImage with different properties

```
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top'
});
```

Stretched overlayImage #1 - width/height correspond to canvas width/height

```
fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img, isError) {
   img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
   canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
});
```

Stretched overlayImage #2 - width/height correspond to canvas width/height

```
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  width: canvas.width,
  height: canvas.height,
  // Needed to position overlayImage at 0/0
  originX: 'left',
  originY: 'top'
});
```

overlayImage loaded from cross-origin

```
canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
  opacity: 0.5,
  angle: 45,
  left: 400,
  top: 400,
  originX: 'left',
  originY: 'top',
  crossOrigin: 'anonymous'
});
```

#### [setViewportTransform(vpt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setViewportTransform)

Sets viewport transformation of this canvas instance

##### Parameters:
|Name|Type|Description| |
|`vpt`|Array|a Canvas 2D API transform matrix|

Source:

* [fabric.js](fabric.js.html), [line 9423](fabric.js.html#line9423)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [setWidth(value, optionsopt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setWidth)

Sets width of this canvas instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`value`|Number | String|Value to set width to|
|`options`|Object|optional|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codebackstoreOnly/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    false                                /td                        td class="description last"Set the given dimensions only as canvas backstore dimensions/td        /tr            tr                            td class="name"codecssOnly/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    false                                /td                        td class="description last"Set the given dimensions only as css dimensions/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 9304](fabric.js.html#line9304)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [setZoom(value)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setZoom)

Sets zoom level of this canvas instance

##### Parameters:
|Name|Type|Description| |
|`value`|Number|to set zoom to, less than 1 zooms out|

Source:

* [fabric.js](fabric.js.html), [line 9475](fabric.js.html#line9475)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [size()&rarr; {Number}](#size)

Returns a size of a collection (i.e: length of an array containing its objects)

Mixes In:

* [fabric.Collection.size](fabric.Collection.html#.size)

Source:

* [fabric.js](fabric.js.html), [line 493](fabric.js.html#line493)

##### Returns:

Collection size

Type

Number

#### [straightenObject(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#straightenObject)

Straightens object, then rerenders canvas

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to straighten|

Source:

* [fabric.js](fabric.js.html), [line 21569](fabric.js.html#line21569)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [toCanvasElement(multiplieropt, croppingopt)](#toCanvasElement)

Create a new HTMLCanvas element painted with the current canvas content. No need to resize the actual one or repaint it. Will transfer object ownership to a new canvas, paint it, and set everything back. This is an intermediary step used to get to a dataUrl but also it is useful to create quick image copies of a canvas without passing for the dataUrl string

##### Parameters:
|Name|Type|Attributes|Description| |
|`multiplier`|Number|optional|a zoom factor.|
|`cropping`|Object|optional|Cropping informations
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeleft/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Cropping left offset./td        /tr            tr                            td class="name"codetop/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Cropping top offset./td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Cropping width./td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Cropping height./td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 14033](fabric.js.html#line14033)

#### [toDatalessJSON(propertiesToIncludeopt)&rarr; {String}](#toDatalessJSON)

Returns dataless JSON representation of canvas

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Source:

* [fabric.js](fabric.js.html), [line 9876](fabric.js.html#line9876)

##### Returns:

json string

Type

String

#### [toDatalessObject(propertiesToIncludeopt)&rarr; {Object}](#toDatalessObject)

Returns dataless object representation of canvas

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Source:

* [fabric.js](fabric.js.html), [line 9894](fabric.js.html#line9894)

##### Returns:

object representation of an instance

Type

Object

#### [toDataURL(optionsopt)&rarr; {String}](#toDataURL)

Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeformat/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    png                                /td                        td class="description last"The format of the output image. Either "jpeg" or "png"/td        /tr            tr                            td class="name"codequality/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    1                                /td                        td class="description last"Quality level (0..1). Only used for jpeg./td        /tr            tr                            td class="name"codemultiplier/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    1                                /td                        td class="description last"Multiplier to scale by, to have consistent/td        /tr            tr                            td class="name"codeleft/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping left offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codetop/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping top offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping width. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping height. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeenableRetinaScaling/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Enable retina scaling for clone image. Introduce in 2.0.0/td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 14010](fabric.js.html#line14010)

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/NfZVb/)

##### Returns:

Returns a data: URL containing a representation of the object in the format specified by options.format

Type

String

##### Examples

Generate jpeg dataURL with lower quality

```
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
```

Generate cropped png dataURL (clipping of canvas)

```
var dataURL = canvas.toDataURL({
  format: 'png',
  left: 100,
  top: 100,
  width: 200,
  height: 200
});
```

Generate double scaled png dataURL

```
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});
```

#### [toJSON(propertiesToIncludeopt)&rarr; {Object}](#toJSON)

Returns Object representation of canvas this alias is provided because if you call JSON.stringify on an instance, the toJSON object will be invoked if it exists. Having a toJSON method means you can do JSON.stringify(myCanvas)

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Source:

* [fabric.js](fabric.js.html), [line 10607](fabric.js.html#line10607)

Tutorials:

* *Tutorial: [http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)*

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/pec86/)

##### Returns:

JSON compatible object

Type

Object

##### Examples

JSON without additional properties

```
var json = canvas.toJSON();
```

JSON with additional properties included

```
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY']);
```

JSON without default values

```
canvas.includeDefaultValues = false;
var json = canvas.toJSON();
```

#### [toObject(propertiesToIncludeopt)&rarr; {Object}](#toObject)

Returns object representation of canvas

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Source:

* [fabric.js](fabric.js.html), [line 9885](fabric.js.html#line9885)

##### Returns:

object representation of an instance

Type

Object

#### [toString()&rarr; {String}](#toString)

Returns a string representation of an instance

Source:

* [fabric.js](fabric.js.html), [line 10538](fabric.js.html#line10538)

##### Returns:

string representation of an instance

Type

String

#### [toSVG(optionsopt, reviveropt)&rarr; {String}](#toSVG)

Returns SVG representation of canvas

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object for SVG output
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codesuppressPreamble/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    false                                /td                        td class="description last"If true xml tag is not included/td        /tr            tr                            td class="name"codeviewBox/code/td                        td class="type"                            span class="param-type"Object/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"SVG viewbox object                h6Properties/h6                table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codex/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"x-coordinate of viewbox/td        /tr            tr                            td class="name"codey/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"y-coordinate of viewbox/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Width of viewbox/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Height of viewbox/td        /tr        /tbody/table            /td        /tr            tr                            td class="name"codeencoding/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    UTF-8                                /td                        td class="description last"Encoding of SVG output/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"desired width of svg with or without units/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"desired height of svg with or without units/td        /tr        /tbody/table|
|`reviver`|function|optional|Method for further parsing of svg elements, called after each fabric object converted into svg representation.|

Source:

* [fabric.js](fabric.js.html), [line 10027](fabric.js.html#line10027)

Tutorials:

* *Tutorial: [http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)*

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/jQ3ZZ/)

##### Returns:

SVG string

Type

String

##### Examples

Normal SVG output

```
var svg = canvas.toSVG();
```

SVG output without preamble (without ?xml ../)

```
var svg = canvas.toSVG({suppressPreamble: true});
```

SVG output with viewBox attribute

```
var svg = canvas.toSVG({
  viewBox: {
    x: 100,
    y: 100,
    width: 200,
    height: 300
  }
});
```

SVG output with different encoding (default: UTF-8)

```
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
```

Modify SVG output with reviver function

```
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});
```

#### [viewportCenterObject(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#viewportCenterObject)

Centers object vertically and horizontally in the viewport

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to center vertically and horizontally|

Source:

* [fabric.js](fabric.js.html), [line 9816](fabric.js.html#line9816)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [viewportCenterObjectH(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#viewportCenterObjectH)

Centers object horizontally in the viewport, object.top is unchanged

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to center vertically and horizontally|

Source:

* [fabric.js](fabric.js.html), [line 9828](fabric.js.html#line9828)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [viewportCenterObjectV(object)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#viewportCenterObjectV)

Centers object Vertically in the viewport, object.top is unchanged

##### Parameters:
|Name|Type|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to center vertically and horizontally|

Source:

* [fabric.js](fabric.js.html), [line 9840](fabric.js.html#line9840)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [zoomToPoint(point, value)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#zoomToPoint)

Sets zoom level of this canvas instance, the zoom centered around point meaning that following zoom to point with the same point will have the visual effect of the zoom originating from that point. The point won't move. It has nothing to do with canvas center or visual center of the viewport.

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|to zoom with respect to|
|`value`|Number|to set zoom to, less than 1 zooms out|

Source:

* [fabric.js](fabric.js.html), [line 9457](fabric.js.html#line9457)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:18 GMT+0100 (Central European Standard Time)