# Global

### Members

#### [\_\_cachedLines:Array](#__cachedLines)

Cached array of text wrapping.

##### Type:

* Array

Source:

* [fabric.js](fabric.js.html), [line 30516](fabric.js.html#line30516)

#### [dynamicMinWidth:Number](#dynamicMinWidth)

Minimum calculated width of a textbox, in pixels. fixed to 2 so that an empty textbox cannot go to 0 and is still selectable without text.

##### Type:

* Number

Default Value:

* 2

Source:

* [fabric.js](fabric.js.html), [line 30510](fabric.js.html#line30510)

#### [lockScalingFlip](#lockScalingFlip)

Override standard Object class values

Source:

* [fabric.js](fabric.js.html), [line 30521](fabric.js.html#line30521)

#### [minWidth:Number](#minWidth)

Minimum width of textbox, in pixels.

##### Type:

* Number

Default Value:

* 20

Source:

* [fabric.js](fabric.js.html), [line 30501](fabric.js.html#line30501)

#### [noScaleCache](#noScaleCache)

Override standard Object class values Textbox needs this on false

Source:

* [fabric.js](fabric.js.html), [line 30527](fabric.js.html#line30527)

#### [splitByGrapheme:Boolean](#splitByGrapheme)

Use this boolean property in order to split strings that have no white space concept. this is a cheap way to help with chinese/japanese

##### Type:

* Boolean

Since:

* 2.6.0

Source:

* [fabric.js](fabric.js.html), [line 30548](fabric.js.html#line30548)

#### [type:String](#type)

Type of an object

##### Type:

* String

Default Value:

* textbox

Source:

* [fabric.js](fabric.js.html), [line 30494](fabric.js.html#line30494)

### Methods

#### [\_splitTextIntoLines(text)&rarr; {Array}](#_splitTextIntoLines)

Gets lines of text to render in the Textbox. This function calculates text wrapping on the fly every time it is called.

##### Parameters:
|Name|Type|Description| |
|`text`|String|text to split|

Source:

* [fabric.js](fabric.js.html), [line 30876](fabric.js.html#line30876)

##### Returns:

Array of lines in the Textbox.

Type

Array

#### [\_wrapLine(line, lineIndex, desiredWidth, reservedSpace)&rarr; {Array}](#_wrapLine)

Wraps a line of text using the width of the Textbox and a context.

##### Parameters:
|Name|Type|Description| |
|`line`|Array|The grapheme array that represent the line|
|`lineIndex`|Number|
|`desiredWidth`|Number|width you want to wrap the line to|
|`reservedSpace`|Number|space to remove from wrapping for custom functionalities|

Source:

* [fabric.js](fabric.js.html), [line 30779](fabric.js.html#line30779)

##### Returns:

Array of line(s) into which the given text is wrapped to.

Type

Array

#### [\_wrapText(lines, desiredWidth)&rarr; {Array}](#_wrapText)

Wraps text using the 'width' property of Textbox. First this function splits text on newlines, so we preserve newlines entered by the user. Then it wraps each line using the width of the Textbox by calling \_wrapLine().

##### Parameters:
|Name|Type|Description| |
|`lines`|Array|The string array of text that is split into lines|
|`desiredWidth`|Number|width you want to wrap to|

Source:

* [fabric.js](fabric.js.html), [line 30739](fabric.js.html#line30739)

##### Returns:

Array of lines

Type

Array

#### [applyFilters(filters, forResizing)&rarr; {thisArg}](#applyFilters)

Applies filters assigned to this image (from "filters" array) or from filter param

##### Parameters:
|Name|Type|Description| |
|`filters`|Array|to be applied|
|`forResizing`|Boolean|specify if the filter operation is a resize operation|

Source:

* [fabric.js](fabric.js.html), [line 21171](fabric.js.html#line21171)

##### Returns:

return the fabric.Image object

Type

thisArg

#### [cancelAll()&rarr; {Array.AnimationContext}](#cancelAll)

cancel all running animations at the next requestAnimFrame

Source:

* [fabric.js](fabric.js.html), [line 3611](fabric.js.html#line3611)

##### Returns:

Type

Array.AnimationContext

#### [cancelByCanvas(canvas)&rarr; {Array.AnimationContext}](#cancelByCanvas)

cancel all running animations attached to canvas at the next requestAnimFrame

##### Parameters:
|Name|Type|Description| |
|`canvas`|[fabric.Canvas](fabric.Canvas.html)|

Source:

* [fabric.js](fabric.js.html), [line 3624](fabric.js.html#line3624)

##### Returns:

Type

Array.AnimationContext

#### [cancelByTarget(target)&rarr; {Array.AnimationContext}](#cancelByTarget)

cancel all running animations for target at the next requestAnimFrame

##### Parameters:
|Name|Type|Description| |
|`target`|\*|

Source:

* [fabric.js](fabric.js.html), [line 3642](fabric.js.html#line3642)

##### Returns:

Type

Array.AnimationContext

#### [copyGLTo2DDrawImage(sourceContext, targetCanvas, pipelineState)](#copyGLTo2DDrawImage)

Copy an input WebGL canvas on to an output 2D canvas. The WebGL canvas is assumed to be upside down, with the top-left pixel of the desired output image appearing in the bottom-left corner of the WebGL canvas.

##### Parameters:
|Name|Type|Description| |
|`sourceContext`|WebGLRenderingContext|The WebGL context to copy from.|
|`targetCanvas`|HTMLCanvasElement|The 2D target canvas to copy on to.|
|`pipelineState`|Object|The 2D target canvas to copy on to.|

Source:

* [fabric.js](fabric.js.html), [line 21949](fabric.js.html#line21949)

#### [copyGLTo2DPutImageData(sourceContext, targetCanvas, pipelineState)](#copyGLTo2DPutImageData)

Copy an input WebGL canvas on to an output 2D canvas using 2d canvas' putImageData API. Measurably faster than using ctx.drawImage in Firefox (version 54 on OSX Sierra).

##### Parameters:
|Name|Type|Description| |
|`sourceContext`|WebGLRenderingContext|The WebGL context to copy from.|
|`targetCanvas`|HTMLCanvasElement|The 2D target canvas to copy on to.|
|`pipelineState`|Object|The 2D target canvas to copy on to.|

Source:

* [fabric.js](fabric.js.html), [line 21968](fabric.js.html#line21968)

#### [findAnimation(cancelFunc)&rarr; {AnimationContext|undefined}](#findAnimation)

##### Parameters:
|Name|Type|Description| |
|`cancelFunc`|CancelFunction|the function returned by animate|

Source:

* [fabric.js](fabric.js.html), [line 3664](fabric.js.html#line3664)

##### Returns:

animation's options object

Type

AnimationContext | undefined

#### [findAnimationIndex(cancelFunc)&rarr; {number}](#findAnimationIndex)

##### Parameters:
|Name|Type|Description| |
|`cancelFunc`|CancelFunction|the function returned by animate|

Source:

* [fabric.js](fabric.js.html), [line 3655](fabric.js.html#line3655)

##### Returns:

Type

number

#### [findAnimationsByTarget(target)&rarr; {Array.AnimationContext}](#findAnimationsByTarget)

##### Parameters:
|Name|Type|Description| |
|`target`|\*|the object that is assigned to the target property of the animation context|

Source:

* [fabric.js](fabric.js.html), [line 3675](fabric.js.html#line3675)

##### Returns:

array of animation options object associated with target

Type

Array.AnimationContext

#### [isEmptyStyles(lineIndex)&rarr; {Boolean}](#isEmptyStyles)

Returns true if object has no styling or no styling in a line

##### Parameters:
|Name|Type|Description| |
|`lineIndex`|Number|, lineIndex is on wrapped lines.|

Source:

* [fabric.js](fabric.js.html), [line 30634](fabric.js.html#line30634)

##### Returns:

Type

Boolean

#### [isEndOfWrapping(lineIndex)&rarr; {Boolean}](#isEndOfWrapping)

Detect if the text line is ended with an hard break text and itext do not have wrapping, return false

##### Parameters:
|Name|Type|Description| |
|`lineIndex`|Number|text to split|

Source:

* [fabric.js](fabric.js.html), [line 30845](fabric.js.html#line30845)

##### Returns:

Type

Boolean

#### [missingNewlineOffset()](#missingNewlineOffset)

Detect if a line has a linebreak and so we need to account for it when moving and counting style.

Source:

* [fabric.js](fabric.js.html), [line 30862](fabric.js.html#line30862)

##### Returns:

Number

#### [styleHas(lineIndex)&rarr; {Boolean}](#styleHas)

Returns true if object has a style property or has it on a specified line

##### Parameters:
|Name|Type|Description| |
|`lineIndex`|Number|

Source:

* [fabric.js](fabric.js.html), [line 30619](fabric.js.html#line30619)

##### Returns:

Type

Boolean

#### [toObject(propertiesToIncludeopt)&rarr; {Object}](#toObject)

Returns object representation of an instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Source:

* [fabric.js](fabric.js.html), [line 18440](fabric.js.html#line18440)

##### Returns:

object representation of an instance

Type

Object

#### [toObject(propertiesToIncludeopt)&rarr; {Object}](#toObject)

Returns object representation of an instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Source:

* [fabric.js](fabric.js.html), [line 30906](fabric.js.html#line30906)

##### Returns:

object representation of an instance

Type

Object

### Type Definitions

#### [AnimationCurrentState](#AnimationCurrentState)

##### Type:

* Object

##### Properties:
|Name|Type|Attributes|Default|Description| |
|`options.onChange`|function|optional|Callback; invoked on every value change|
|`options.onComplete`|function|optional|Callback; invoked when value change is completed|
|`options.startValue`|Number|optional|0|Starting value|
|`options.endValue`|Number|optional|100|Ending value|
|`options.byValue`|Number|optional|100|Value to modify the property by|
|`options.easing`|function|optional|Easing function|
|`options.duration`|Number|optional|500|Duration of change (in ms)|
|`options.abort`|function|optional|Additional function with logic. If returns true, animation aborts.|
|`currentValue`|number|value in range \[\`startValue\`, \`endValue\`\]|
|`completionRate`|number|value in range \[0, 1\]|
|`durationRate`|number|value in range \[0, 1\]|

Source:

* [fabric.js](fabric.js.html), [line 3578](fabric.js.html#line3578)
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:16 GMT+0100 (Central European Standard Time)