# PencilBrush

## [fabric](fabric.html).PencilBrush #### [new PencilBrush()](#PencilBrush)

PencilBrush class

Source:

* [fabric.js](fabric.js.html), [line 10765](fabric.js.html#line10765)

### Extends

* [fabric.BaseBrush](fabric.BaseBrush.html)

### Members

#### [color:String](#color)

Color of a brush

##### Type:

* String

Inherited From:

* [fabric.BaseBrush#color](fabric.BaseBrush.html#color)

Default Value:

* rgb(0, 0, 0)

Source:

* [fabric.js](fabric.js.html), [line 10634](fabric.js.html#line10634)

#### [decimate:Number](#decimate)

Discard points that are less than \`decimate\` pixel distant from each other

##### Type:

* Number

Default Value:

* 0.4

Source:

* [fabric.js](fabric.js.html), [line 10777](fabric.js.html#line10777)

#### [drawStraightLine:boolean](#drawStraightLine)

Draws a straight line between last recorded point to current pointer Used for \`shift\` functionality

##### Type:

* boolean

Default Value:

* false

Source:

* [fabric.js](fabric.js.html), [line 10786](fabric.js.html#line10786)

#### [limitedToCanvasSize:Boolean](#limitedToCanvasSize)

When \`true\`, the free drawing is limited to the whiteboard size. Default to false.

##### Type:

* Boolean

Inherited From:

* [fabric.BaseBrush#limitedToCanvasSize](fabric.BaseBrush.html#limitedToCanvasSize)

Default Value:

* false

Source:

* [fabric.js](fabric.js.html), [line 10686](fabric.js.html#line10686)

#### [shadow:[fabric.Shadow](fabric.Shadow.html)](#shadow)

Shadow object representing shadow of this shape. **Backwards incompatibility note:** This property replaces "shadowColor" (String), "shadowOffsetX" (Number), "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

##### Type:

* [fabric.Shadow](fabric.Shadow.html)

Inherited From:

* [fabric.BaseBrush#shadow](fabric.BaseBrush.html#shadow)

Source:

* [fabric.js](fabric.js.html), [line 10650](fabric.js.html#line10650)

#### [straightLineKey:'altKey'|'shiftKey'|'ctrlKey'|'none'|undefined|null](#straightLineKey)

The event modifier key that makes the brush draw a straight line. If \`null\` or 'none' or any other string that is not a modifier key the feature is disabled.

##### Type:

* 'altKey' | 'shiftKey' | 'ctrlKey' | 'none' | undefined | null

Source:

* [fabric.js](fabric.js.html), [line 10793](fabric.js.html#line10793)

#### [strokeDashArray:Array](#strokeDashArray)

Stroke Dash Array.

##### Type:

* Array

Inherited From:

* [fabric.BaseBrush#strokeDashArray](fabric.BaseBrush.html#strokeDashArray)

Source:

* [fabric.js](fabric.js.html), [line 10678](fabric.js.html#line10678)

#### [strokeLineCap:String](#strokeLineCap)

Line endings style of a brush (one of "butt", "round", "square")

##### Type:

* String

Inherited From:

* [fabric.BaseBrush#strokeLineCap](fabric.BaseBrush.html#strokeLineCap)

Default Value:

* round

Source:

* [fabric.js](fabric.js.html), [line 10657](fabric.js.html#line10657)

#### [strokeLineJoin:String](#strokeLineJoin)

Corner style of a brush (one of "bevel", "round", "miter")

##### Type:

* String

Inherited From:

* [fabric.BaseBrush#strokeLineJoin](fabric.BaseBrush.html#strokeLineJoin)

Default Value:

* round

Source:

* [fabric.js](fabric.js.html), [line 10664](fabric.js.html#line10664)

#### [strokeMiterLimit:Number](#strokeMiterLimit)

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

##### Type:

* Number

Inherited From:

* [fabric.BaseBrush#strokeMiterLimit](fabric.BaseBrush.html#strokeMiterLimit)

Default Value:

* 10

Source:

* [fabric.js](fabric.js.html), [line 10671](fabric.js.html#line10671)

#### [width:Number](#width)

Width of a brush, has to be a Number, no string literals

##### Type:

* Number

Inherited From:

* [fabric.BaseBrush#width](fabric.BaseBrush.html#width)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 10641](fabric.js.html#line10641)

### Methods

#### [\_drawSegment(pointer)](#_drawSegment)

Invoked inside on mouse down and mouse move

##### Parameters:
|Name|Type|Description| |
|`pointer`|Object|

Source:

* [fabric.js](fabric.js.html), [line 10813](fabric.js.html#line10813)

#### [\_finalizeAndAddPath()](#_finalizeAndAddPath)

On mouseup after drawing the path on contextTop canvas we use the points captured to create an new fabric path object and add it to the fabric canvas.

Source:

* [fabric.js](fabric.js.html), [line 11044](fabric.js.html#line11044)

#### [convertPointsToSVGPath(points)](#convertPointsToSVGPath)

Converts points to SVG path

##### Parameters:
|Name|Type|Description| |
|`points`|Array|Array of points|

Source:

* [fabric.js](fabric.js.html), [line 10976](fabric.js.html#line10976)

##### Returns:

#### [createPath()&rarr; {[fabric.Path](fabric.Path.html)}](#createPath)

Creates fabric.Path object to add on canvas

##### Parameters:
|Type|Description|

Source:

* [fabric.js](fabric.js.html), [line 10996](fabric.js.html#line10996)

##### Returns:

Path to add on canvas

Type

[fabric.Path](fabric.Path.html)

#### [decimatePoints()](#decimatePoints)

Decimate points array with the decimate value

Source:

* [fabric.js](fabric.js.html), [line 11017](fabric.js.html#line11017)

#### [initialize(canvas)&rarr; {[fabric.PencilBrush](fabric.PencilBrush.html)}](#initialize)

Constructor

##### Parameters:
|Name|Type|Description| |
|`canvas`|[fabric.Canvas](fabric.Canvas.html)|

Source:

* [fabric.js](fabric.js.html), [line 10800](fabric.js.html#line10800)

##### Returns:

Instance of a pencil brush

Type

[fabric.PencilBrush](fabric.PencilBrush.html)

#### [onMouseDown(pointer)](#onMouseDown)

Invoked on mouse down

##### Parameters:
|Name|Type|Description| |
|`pointer`|Object|

Source:

* [fabric.js](fabric.js.html), [line 10823](fabric.js.html#line10823)

#### [onMouseMove(pointer)](#onMouseMove)

Invoked on mouse move

##### Parameters:
|Name|Type|Description| |
|`pointer`|Object|

Source:

* [fabric.js](fabric.js.html), [line 10839](fabric.js.html#line10839)

#### [onMouseUp()](#onMouseUp)

Invoked on mouse up

Source:

* [fabric.js](fabric.js.html), [line 10872](fabric.js.html#line10872)
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:17 GMT+0100 (Central European Standard Time)