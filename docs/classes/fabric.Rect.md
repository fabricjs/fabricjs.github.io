# Rect

## [fabric](fabric.html).Rect #### [new Rect()&rarr; {[fabric.Rect](fabric.Rect.html)}](#Rect)

Rectangle class

Source:

* [fabric.js](fabric.js.html), [line 19084](fabric.js.html#line19084)

See:

* [fabric.Rect#initialize](fabric.Rect.html#initialize) for constructor definition

##### Returns:

thisArg

Type

[fabric.Rect](fabric.Rect.html)

### Extends

* [fabric.Object](fabric.Object.html)

### Members

#### [(static)ATTRIBUTE\_NAMES](#.ATTRIBUTE_NAMES)

List of attribute names to account for when parsing SVG element (used by \`fabric.Rect.fromElement\`)

Source:

* [fabric.js](fabric.js.html), [line 19220](fabric.js.html#line19220)

#### [\_\_corner:number|string|any](#__corner)

keeps the value of the last hovered corner during mouse move. 0 is no corner, or 'mt', 'ml', 'mtr' etc.. It should be private, but there is no harm in using it as a read-only property.

##### Type:

* number | string | any

Inherited From:

* [fabric.Object#\_\_corner](fabric.Object.html#__corner)

Default Value:

* 0

Source:

* [fabric.js](fabric.js.html), [line 14868](fabric.js.html#line14868)

#### [absolutePositioned:boolean](#absolutePositioned)

Meaningful ONLY when the object is used as clipPath. if true, the clipPath will have its top and left relative to canvas, and will not be influenced by the object transform. This will make the clipPath relative to the canvas, but clipping just a particular object. WARNING this is beta, this feature may change or be renamed. since 2.4.0

##### Type:

* boolean

Inherited From:

* [fabric.Object#absolutePositioned](fabric.Object.html#absolutePositioned)

Default Value:

* false

Source:

* [fabric.js](fabric.js.html), [line 14949](fabric.js.html#line14949)

#### [aCoords](#aCoords)

Describe object's corner position in canvas object absolute coordinates properties are tl,tr,bl,br and describe the four main corner. each property is an object with x, y, instance of Fabric.Point. The coordinates depends from this properties: width, height, scaleX, scaleY skewX, skewY, angle, strokeWidth, top, left. Those coordinates are useful to understand where an object is. They get updated with oCoords but they do not need to be updated when zoom or panning change. The coordinates get updated with @method setCoords. You can calculate them without updating with @method calcACoords();

Inherited From:

* [fabric.Object#aCoords](fabric.Object.html#aCoords)

Source:

* [fabric.js](fabric.js.html), [line 16613](fabric.js.html#line16613)

#### [angle:Number](#angle)

Angle of rotation of an object (in degrees)

##### Type:

* Number

Inherited From:

* [fabric.Object#angle](fabric.Object.html#angle)

Source:

* [fabric.js](fabric.js.html), [line 14451](fabric.js.html#line14451)

#### [backgroundColor:String](#backgroundColor)

Background color of an object. takes css colors https://www.w3.org/TR/css-color-3/

##### Type:

* String

Inherited From:

* [fabric.Object#backgroundColor](fabric.Object.html#backgroundColor)

Source:

* [fabric.js](fabric.js.html), [line 14602](fabric.js.html#line14602)

#### [borderColor:String](#borderColor)

Color of controlling borders of an object (when it's active)

##### Type:

* String

Inherited From:

* [fabric.Object#borderColor](fabric.Object.html#borderColor)

Default Value:

* rgb(178,204,255)

Source:

* [fabric.js](fabric.js.html), [line 14514](fabric.js.html#line14514)

#### [borderDashArray:Array](#borderDashArray)

Array specifying dash pattern of an object's borders (hasBorder must be true)

##### Type:

* Array

Since:

* 1.6.2

Inherited From:

* [fabric.Object#borderDashArray](fabric.Object.html#borderDashArray)

Source:

* [fabric.js](fabric.js.html), [line 14521](fabric.js.html#line14521)

#### [borderOpacityWhenMoving:Number](#borderOpacityWhenMoving)

Opacity of object's controlling borders when object is active and moving

##### Type:

* Number

Inherited From:

* [fabric.Object#borderOpacityWhenMoving](fabric.Object.html#borderOpacityWhenMoving)

Default Value:

* 0.4

Source:

* [fabric.js](fabric.js.html), [line 14673](fabric.js.html#line14673)

#### [borderScaleFactor:Number](#borderScaleFactor)

Scale factor of object's controlling borders bigger number will make a thicker border border is 1, so this is basically a border thickness since there is no way to change the border itself.

##### Type:

* Number

Inherited From:

* [fabric.Object#borderScaleFactor](fabric.Object.html#borderScaleFactor)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 14683](fabric.js.html#line14683)

#### [cacheProperties:Array](#cacheProperties)

List of properties to consider when checking if cache needs refresh Those properties are checked by statefullCache ON ( or lazy mode if we want ) or from single calls to Object.set(key, value). If the key is in this list, the object is marked as dirty and refreshed at the next render

##### Type:

* Array

Overrides:

* [fabric.Object#cacheProperties](fabric.Object.html#cacheProperties)

Source:

* [fabric.js](fabric.js.html), [line 14908](fabric.js.html#line14908)

#### [centeredRotation:Boolean](#centeredRotation)

When true, this object will use center point as the origin of transformation when being rotated via the controls. **Backwards incompatibility note:** This property replaces "centerTransform" (Boolean).

##### Type:

* Boolean

Since:

* 1.3.4

Inherited From:

* [fabric.Object#centeredRotation](fabric.Object.html#centeredRotation)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14570](fabric.js.html#line14570)

#### [centeredScaling:Boolean](#centeredScaling)

When true, this object will use center point as the origin of transformation when being scaled via the controls. **Backwards incompatibility note:** This property replaces "centerTransform" (Boolean).

##### Type:

* Boolean

Since:

* 1.3.4

Inherited From:

* [fabric.Object#centeredScaling](fabric.Object.html#centeredScaling)

Source:

* [fabric.js](fabric.js.html), [line 14560](fabric.js.html#line14560)

#### [clipPath:[fabric.Object](fabric.Object.html)](#clipPath)

a fabricObject that, without stroke define a clipping area with their shape. filled in black the clipPath object gets used when the object has rendered, and the context is placed in the center of the object cacheCanvas. If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

##### Type:

* [fabric.Object](fabric.Object.html)

Inherited From:

* [fabric.Object#clipPath](fabric.Object.html#clipPath)

Source:

* [fabric.js](fabric.js.html), [line 14928](fabric.js.html#line14928)

#### [colorProperties:Array](#colorProperties)

List of properties to consider for animating colors.

##### Type:

* Array

Inherited From:

* [fabric.Object#colorProperties](fabric.Object.html#colorProperties)

Source:

* [fabric.js](fabric.js.html), [line 14917](fabric.js.html#line14917)

#### [controls](#controls)

custom controls interface controls are added by default\_controls.js

Inherited From:

* [fabric.Object#controls](fabric.Object.html#controls)

Source:

* [fabric.js](fabric.js.html), [line 16637](fabric.js.html#line16637)

#### [cornerColor:String](#cornerColor)

Color of controlling corners of an object (when it's active)

##### Type:

* String

Inherited From:

* [fabric.Object#cornerColor](fabric.Object.html#cornerColor)

Default Value:

* rgb(178,204,255)

Source:

* [fabric.js](fabric.js.html), [line 14528](fabric.js.html#line14528)

#### [cornerDashArray:Array](#cornerDashArray)

Array specifying dash pattern of an object's control (hasBorder must be true)

##### Type:

* Array

Since:

* 1.6.2

Inherited From:

* [fabric.Object#cornerDashArray](fabric.Object.html#cornerDashArray)

Source:

* [fabric.js](fabric.js.html), [line 14550](fabric.js.html#line14550)

#### [cornerSize:Number](#cornerSize)

Size of object's controlling corners (in pixels)

##### Type:

* Number

Inherited From:

* [fabric.Object#cornerSize](fabric.Object.html#cornerSize)

Default Value:

* 13

Source:

* [fabric.js](fabric.js.html), [line 14472](fabric.js.html#line14472)

#### [cornerStrokeColor:String](#cornerStrokeColor)

Color of controlling corners of an object (when it's active and transparentCorners false)

##### Type:

* String

Since:

* 1.6.2

Inherited From:

* [fabric.Object#cornerStrokeColor](fabric.Object.html#cornerStrokeColor)

Source:

* [fabric.js](fabric.js.html), [line 14536](fabric.js.html#line14536)

#### [cornerStyle:String](#cornerStyle)

Specify style of control, 'rect' or 'circle'

##### Type:

* String

Since:

* 1.6.2

Inherited From:

* [fabric.Object#cornerStyle](fabric.Object.html#cornerStyle)

Source:

* [fabric.js](fabric.js.html), [line 14543](fabric.js.html#line14543)

#### [dirty:Boolean](#dirty)

When set to \`true\`, object's cache will be rerendered next render call. since 1.7.0

##### Type:

* Boolean

Inherited From:

* [fabric.Object#dirty](fabric.Object.html#dirty)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14858](fabric.js.html#line14858)

#### [evented:Boolean](#evented)

When set to \`false\`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

##### Type:

* Boolean

Inherited From:

* [fabric.Object#evented](fabric.Object.html#evented)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14705](fabric.js.html#line14705)

#### [excludeFromExport:Boolean](#excludeFromExport)

When \`true\`, object is not exported in OBJECT/JSON

##### Type:

* Boolean

Since:

* 1.6.3

Inherited From:

* [fabric.Object#excludeFromExport](fabric.Object.html#excludeFromExport)

Source:

* [fabric.js](fabric.js.html), [line 14804](fabric.js.html#line14804)

#### [fill:String](#fill)

Color of object's fill takes css colors https://www.w3.org/TR/css-color-3/

##### Type:

* String

Inherited From:

* [fabric.Object#fill](fabric.Object.html#fill)

Default Value:

* rgb(0,0,0)

Source:

* [fabric.js](fabric.js.html), [line 14578](fabric.js.html#line14578)

#### [fillRule:String](#fillRule)

Fill rule used to fill an object accepted values are nonzero, evenodd **Backwards incompatibility note:** This property was used for setting globalCompositeOperation until v1.4.12 (use \`fabric.Object#globalCompositeOperation\` instead)

##### Type:

* String

Inherited From:

* [fabric.Object#fillRule](fabric.Object.html#fillRule)

Default Value:

* nonzero

Source:

* [fabric.js](fabric.js.html), [line 14587](fabric.js.html#line14587)

#### [flipX:Boolean](#flipX)

When true, an object is rendered as flipped horizontally

##### Type:

* Boolean

Inherited From:

* [fabric.Object#flipX](fabric.Object.html#flipX)

Source:

* [fabric.js](fabric.js.html), [line 14430](fabric.js.html#line14430)

#### [flipY:Boolean](#flipY)

When true, an object is rendered as flipped vertically

##### Type:

* Boolean

Inherited From:

* [fabric.Object#flipY](fabric.Object.html#flipY)

Source:

* [fabric.js](fabric.js.html), [line 14437](fabric.js.html#line14437)

#### [globalCompositeOperation:String](#globalCompositeOperation)

Composite rule used for canvas globalCompositeOperation

##### Type:

* String

Inherited From:

* [fabric.Object#globalCompositeOperation](fabric.Object.html#globalCompositeOperation)

Default Value:

* source-over

Source:

* [fabric.js](fabric.js.html), [line 14594](fabric.js.html#line14594)

#### [hasBorders:Boolean](#hasBorders)

When set to \`false\`, object's controlling borders are not rendered

##### Type:

* Boolean

Inherited From:

* [fabric.Object#hasBorders](fabric.Object.html#hasBorders)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14726](fabric.js.html#line14726)

#### [hasControls:Boolean](#hasControls)

When set to \`false\`, object's controls are not displayed and can not be used to manipulate object

##### Type:

* Boolean

Inherited From:

* [fabric.Object#hasControls](fabric.Object.html#hasControls)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14719](fabric.js.html#line14719)

#### [height:Number](#height)

Object height

##### Type:

* Number

Inherited From:

* [fabric.Object#height](fabric.Object.html#height)

Source:

* [fabric.js](fabric.js.html), [line 14409](fabric.js.html#line14409)

#### [hoverCursor:String](#hoverCursor)

Default cursor value used when hovering over this object on canvas

##### Type:

* String

Inherited From:

* [fabric.Object#hoverCursor](fabric.Object.html#hoverCursor)

Source:

* [fabric.js](fabric.js.html), [line 14493](fabric.js.html#line14493)

#### [includeDefaultValues:Boolean](#includeDefaultValues)

When \`false\`, default object's values are not included in its serialization

##### Type:

* Boolean

Inherited From:

* [fabric.Object#includeDefaultValues](fabric.Object.html#includeDefaultValues)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14740](fabric.js.html#line14740)

#### [inverted:boolean](#inverted)

Meaningful ONLY when the object is used as clipPath. if true, the clipPath will make the object clip to the outside of the clipPath since 2.4.0

##### Type:

* boolean

Inherited From:

* [fabric.Object#inverted](fabric.Object.html#inverted)

Default Value:

* false

Source:

* [fabric.js](fabric.js.html), [line 14937](fabric.js.html#line14937)

#### [left:Number](#left)

Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}

##### Type:

* Number

Inherited From:

* [fabric.Object#left](fabric.Object.html#left)

Source:

* [fabric.js](fabric.js.html), [line 14395](fabric.js.html#line14395)

#### [lineCoords](#lineCoords)

Describe object's corner position in canvas element coordinates. includes padding. Used of object detection. set and refreshed with setCoords.

Inherited From:

* [fabric.Object#lineCoords](fabric.Object.html#lineCoords)

Source:

* [fabric.js](fabric.js.html), [line 16621](fabric.js.html#line16621)

#### [lockMovementX:Boolean](#lockMovementX)

When \`true\`, object horizontal movement is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockMovementX](fabric.Object.html#lockMovementX)

Source:

* [fabric.js](fabric.js.html), [line 14747](fabric.js.html#line14747)

#### [lockMovementY:Boolean](#lockMovementY)

When \`true\`, object vertical movement is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockMovementY](fabric.Object.html#lockMovementY)

Source:

* [fabric.js](fabric.js.html), [line 14754](fabric.js.html#line14754)

#### [lockRotation:Boolean](#lockRotation)

When \`true\`, object rotation is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockRotation](fabric.Object.html#lockRotation)

Source:

* [fabric.js](fabric.js.html), [line 14761](fabric.js.html#line14761)

#### [lockScalingFlip:Boolean](#lockScalingFlip)

When \`true\`, object cannot be flipped by scaling into negative values

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockScalingFlip](fabric.Object.html#lockScalingFlip)

Source:

* [fabric.js](fabric.js.html), [line 14796](fabric.js.html#line14796)

#### [lockScalingX:Boolean](#lockScalingX)

When \`true\`, object horizontal scaling is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockScalingX](fabric.Object.html#lockScalingX)

Source:

* [fabric.js](fabric.js.html), [line 14768](fabric.js.html#line14768)

#### [lockScalingY:Boolean](#lockScalingY)

When \`true\`, object vertical scaling is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockScalingY](fabric.Object.html#lockScalingY)

Source:

* [fabric.js](fabric.js.html), [line 14775](fabric.js.html#line14775)

#### [lockSkewingX:Boolean](#lockSkewingX)

When \`true\`, object horizontal skewing is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockSkewingX](fabric.Object.html#lockSkewingX)

Source:

* [fabric.js](fabric.js.html), [line 14782](fabric.js.html#line14782)

#### [lockSkewingY:Boolean](#lockSkewingY)

When \`true\`, object vertical skewing is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockSkewingY](fabric.Object.html#lockSkewingY)

Source:

* [fabric.js](fabric.js.html), [line 14789](fabric.js.html#line14789)

#### [matrixCache](#matrixCache)

storage for object full transform matrix

Inherited From:

* [fabric.Object#matrixCache](fabric.Object.html#matrixCache)

Source:

* [fabric.js](fabric.js.html), [line 16631](fabric.js.html#line16631)

#### [minScaleLimit:Number](#minScaleLimit)

Minimum allowed scale value of an object

##### Type:

* Number

Inherited From:

* [fabric.Object#minScaleLimit](fabric.Object.html#minScaleLimit)

Source:

* [fabric.js](fabric.js.html), [line 14690](fabric.js.html#line14690)

#### [moveCursor:String](#moveCursor)

Default cursor value used when moving this object on canvas

##### Type:

* String

Inherited From:

* [fabric.Object#moveCursor](fabric.Object.html#moveCursor)

Source:

* [fabric.js](fabric.js.html), [line 14500](fabric.js.html#line14500)

#### [noScaleCache:Boolean](#noScaleCache)

When \`true\`, cache does not get updated during scaling. The picture will get blocky if scaled too much and will be redrawn with correct details at the end of scaling. this setting is performance and application dependant. default to true since 1.7.0

##### Type:

* Boolean

Inherited From:

* [fabric.Object#noScaleCache](fabric.Object.html#noScaleCache)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14837](fabric.js.html#line14837)

#### [objectCaching:Boolean](#objectCaching)

When \`true\`, object is cached on an additional canvas. When \`false\`, object is not cached unless necessary ( clipPath ) default to true

##### Type:

* Boolean

Since:

* 1.7.0

Inherited From:

* [fabric.Object#objectCaching](fabric.Object.html#objectCaching)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14814](fabric.js.html#line14814)

#### [oCoords](#oCoords)

Describe object's corner position in canvas element coordinates. properties are depending on control keys and padding the main controls. each property is an object with x, y and corner. The \`corner\` property contains in a similar manner the 4 points of the interactive area of the corner. The coordinates depends from the controls positionHandler and are used to draw and locate controls

Inherited From:

* [fabric.Object#oCoords](fabric.Object.html#oCoords)

Source:

* [fabric.js](fabric.js.html), [line 16599](fabric.js.html#line16599)

#### [opacity:Number](#opacity)

Opacity of an object

##### Type:

* Number

Inherited From:

* [fabric.Object#opacity](fabric.Object.html#opacity)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 14444](fabric.js.html#line14444)

#### [originX:String](#originX)

Horizontal origin of transformation of an object (one of "left", "right", "center") See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

##### Type:

* String

Inherited From:

* [fabric.Object#originX](fabric.Object.html#originX)

Default Value:

* left

Source:

* [fabric.js](fabric.js.html), [line 14373](fabric.js.html#line14373)

#### [originY:String](#originY)

Vertical origin of transformation of an object (one of "top", "bottom", "center") See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

##### Type:

* String

Inherited From:

* [fabric.Object#originY](fabric.Object.html#originY)

Default Value:

* top

Source:

* [fabric.js](fabric.js.html), [line 14381](fabric.js.html#line14381)

#### [ownMatrixCache](#ownMatrixCache)

storage for object transform matrix

Inherited From:

* [fabric.Object#ownMatrixCache](fabric.Object.html#ownMatrixCache)

Source:

* [fabric.js](fabric.js.html), [line 16626](fabric.js.html#line16626)

#### [padding:Number](#padding)

Padding between object and its controlling borders (in pixels)

##### Type:

* Number

Inherited From:

* [fabric.Object#padding](fabric.Object.html#padding)

Source:

* [fabric.js](fabric.js.html), [line 14507](fabric.js.html#line14507)

#### [paintFirst:String](#paintFirst)

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

##### Type:

* String

Inherited From:

* [fabric.Object#paintFirst](fabric.Object.html#paintFirst)

Default Value:

* fill

Source:

* [fabric.js](fabric.js.html), [line 14875](fabric.js.html#line14875)

#### [perPixelTargetFind:Boolean](#perPixelTargetFind)

When set to \`true\`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

##### Type:

* Boolean

Inherited From:

* [fabric.Object#perPixelTargetFind](fabric.Object.html#perPixelTargetFind)

Source:

* [fabric.js](fabric.js.html), [line 14733](fabric.js.html#line14733)

#### [rx:Number](#rx)

Horizontal border radius

##### Type:

* Number

Source:

* [fabric.js](fabric.js.html), [line 19112](fabric.js.html#line19112)

#### [ry:Number](#ry)

Vertical border radius

##### Type:

* Number

Source:

* [fabric.js](fabric.js.html), [line 19119](fabric.js.html#line19119)

#### [scaleX:Number](#scaleX)

Object scale factor (horizontal)

##### Type:

* Number

Inherited From:

* [fabric.Object#scaleX](fabric.Object.html#scaleX)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 14416](fabric.js.html#line14416)

#### [scaleY:Number](#scaleY)

Object scale factor (vertical)

##### Type:

* Number

Inherited From:

* [fabric.Object#scaleY](fabric.Object.html#scaleY)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 14423](fabric.js.html#line14423)

#### [selectable:Boolean](#selectable)

When set to \`false\`, an object can not be selected for modification (using either point-click-based or group-based selection). But events still fire on it.

##### Type:

* Boolean

Inherited From:

* [fabric.Object#selectable](fabric.Object.html#selectable)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14698](fabric.js.html#line14698)

#### [selectionBackgroundColor:String](#selectionBackgroundColor)

Selection Background color of an object. colored layer behind the object when it is active. does not mix good with globalCompositeOperation methods.

##### Type:

* String

Inherited From:

* [fabric.Object#selectionBackgroundColor](fabric.Object.html#selectionBackgroundColor)

Source:

* [fabric.js](fabric.js.html), [line 14610](fabric.js.html#line14610)

#### [shadow:[fabric.Shadow](fabric.Shadow.html)](#shadow)

Shadow object representing shadow of this shape

##### Type:

* [fabric.Shadow](fabric.Shadow.html)

Inherited From:

* [fabric.Object#shadow](fabric.Object.html#shadow)

Source:

* [fabric.js](fabric.js.html), [line 14666](fabric.js.html#line14666)

#### [skewX:Number](#skewX)

Angle of skew on x axes of an object (in degrees)

##### Type:

* Number

Inherited From:

* [fabric.Object#skewX](fabric.Object.html#skewX)

Source:

* [fabric.js](fabric.js.html), [line 14458](fabric.js.html#line14458)

#### [skewY:Number](#skewY)

Angle of skew on y axes of an object (in degrees)

##### Type:

* Number

Inherited From:

* [fabric.Object#skewY](fabric.Object.html#skewY)

Source:

* [fabric.js](fabric.js.html), [line 14465](fabric.js.html#line14465)

#### [statefullCache:Boolean](#statefullCache)

When \`true\`, object properties are checked for cache invalidation. In some particular situation you may want this to be disabled ( spray brush, very big, groups) or if your application does not allow you to modify properties for groups child you want to disable it for groups. default to false since 1.7.0

##### Type:

* Boolean

Inherited From:

* [fabric.Object#statefullCache](fabric.Object.html#statefullCache)

Default Value:

* false

Source:

* [fabric.js](fabric.js.html), [line 14826](fabric.js.html#line14826)

#### [stateProperties:Array](#stateProperties)

List of properties to consider when checking if state of an object is changed ([fabric.Object#hasStateChanged](fabric.Object.html#hasStateChanged)) as well as for history (undo/redo) purposes

##### Type:

* Array

Overrides:

* [fabric.Object#stateProperties](fabric.Object.html#stateProperties)

Source:

* [fabric.js](fabric.js.html), [line 19098](fabric.js.html#line19098)

#### [stroke:String](#stroke)

When defined, an object is rendered via stroke and this property specifies its color takes css colors https://www.w3.org/TR/css-color-3/

##### Type:

* String

Inherited From:

* [fabric.Object#stroke](fabric.Object.html#stroke)

Source:

* [fabric.js](fabric.js.html), [line 14618](fabric.js.html#line14618)

#### [strokeDashArray:Array](#strokeDashArray)

Array specifying dash pattern of an object's stroke (stroke must be defined)

##### Type:

* Array

Inherited From:

* [fabric.Object#strokeDashArray](fabric.Object.html#strokeDashArray)

Source:

* [fabric.js](fabric.js.html), [line 14631](fabric.js.html#line14631)

#### [strokeDashOffset:Number](#strokeDashOffset)

Line offset of an object's stroke

##### Type:

* Number

Inherited From:

* [fabric.Object#strokeDashOffset](fabric.Object.html#strokeDashOffset)

Source:

* [fabric.js](fabric.js.html), [line 14638](fabric.js.html#line14638)

#### [strokeLineCap:String](#strokeLineCap)

Line endings style of an object's stroke (one of "butt", "round", "square")

##### Type:

* String

Inherited From:

* [fabric.Object#strokeLineCap](fabric.Object.html#strokeLineCap)

Default Value:

* butt

Source:

* [fabric.js](fabric.js.html), [line 14645](fabric.js.html#line14645)

#### [strokeLineJoin:String](#strokeLineJoin)

Corner style of an object's stroke (one of "bevel", "round", "miter")

##### Type:

* String

Inherited From:

* [fabric.Object#strokeLineJoin](fabric.Object.html#strokeLineJoin)

Default Value:

* miter

Source:

* [fabric.js](fabric.js.html), [line 14652](fabric.js.html#line14652)

#### [strokeMiterLimit:Number](#strokeMiterLimit)

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

##### Type:

* Number

Inherited From:

* [fabric.Object#strokeMiterLimit](fabric.Object.html#strokeMiterLimit)

Default Value:

* 4

Source:

* [fabric.js](fabric.js.html), [line 14659](fabric.js.html#line14659)

#### [strokeUniform:Boolean](#strokeUniform)

When \`false\`, the stoke width will scale with the object. When \`true\`, the stroke will always match the exact pixel size entered for stroke width. this Property does not work on Text classes or drawing call that uses strokeText,fillText methods default to false

##### Type:

* Boolean

Since:

* 2.6.0

Inherited From:

* [fabric.Object#strokeUniform](fabric.Object.html#strokeUniform)

Default Value:

* false

Source:

* [fabric.js](fabric.js.html), [line 14850](fabric.js.html#line14850)

#### [strokeWidth:Number](#strokeWidth)

Width of a stroke used to render this object

##### Type:

* Number

Inherited From:

* [fabric.Object#strokeWidth](fabric.Object.html#strokeWidth)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 14625](fabric.js.html#line14625)

#### [top:Number](#top)

Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}

##### Type:

* Number

Inherited From:

* [fabric.Object#top](fabric.Object.html#top)

Source:

* [fabric.js](fabric.js.html), [line 14388](fabric.js.html#line14388)

#### [touchCornerSize:Number](#touchCornerSize)

Size of object's controlling corners when touch interaction is detected

##### Type:

* Number

Inherited From:

* [fabric.Object#touchCornerSize](fabric.Object.html#touchCornerSize)

Default Value:

* 24

Source:

* [fabric.js](fabric.js.html), [line 14479](fabric.js.html#line14479)

#### [transparentCorners:Boolean](#transparentCorners)

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

##### Type:

* Boolean

Inherited From:

* [fabric.Object#transparentCorners](fabric.Object.html#transparentCorners)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14486](fabric.js.html#line14486)

#### [type:String](#type)

Type of an object

##### Type:

* String

Overrides:

* [fabric.Object#type](fabric.Object.html#type)

Default Value:

* rect

Source:

* [fabric.js](fabric.js.html), [line 19105](fabric.js.html#line19105)

#### [visible:Boolean](#visible)

When set to \`false\`, an object is not rendered on canvas

##### Type:

* Boolean

Inherited From:

* [fabric.Object#visible](fabric.Object.html#visible)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 14712](fabric.js.html#line14712)

#### [width:Number](#width)

Object width

##### Type:

* Number

Inherited From:

* [fabric.Object#width](fabric.Object.html#width)

Source:

* [fabric.js](fabric.js.html), [line 14402](fabric.js.html#line14402)

### Methods

#### [(static)fromElement(element, callback, optionsopt)](#.fromElement)

Returns [fabric.Rect](fabric.Rect.html) instance from an SVG element

##### Parameters:
|Name|Type|Attributes|Description| |
|`element`|SVGElement|Element to parse|
|`callback`|function|callback function invoked after parsing|
|`options`|Object|optional|Options object|

Source:

* [fabric.js](fabric.js.html), [line 19230](fabric.js.html#line19230)

#### [(static)fromObject(object, callbackopt)](#.fromObject)

Returns [fabric.Rect](fabric.Rect.html) instance from an object representation

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|Object|Object to create an instance from|
|`callback`|function|optional|Callback to invoke when an fabric.Rect instance is created|

Source:

* [fabric.js](fabric.js.html), [line 19254](fabric.js.html#line19254)

#### [\_calcRotateMatrix()&rarr; {Array}](#_calcRotateMatrix)

calculate rotation matrix of an object

Inherited From:

* [fabric.Object#\_calcRotateMatrix](fabric.Object.html#_calcRotateMatrix)

Source:

* [fabric.js](fabric.js.html), [line 17100](fabric.js.html#line17100)

##### Returns:

rotation matrix for the object

Type

Array

#### [\_calcTranslateMatrix()&rarr; {Array}](#_calcTranslateMatrix)

calculate the translation matrix for an object transform

Inherited From:

* [fabric.Object#\_calcTranslateMatrix](fabric.Object.html#_calcTranslateMatrix)

Source:

* [fabric.js](fabric.js.html), [line 17108](fabric.js.html#line17108)

##### Returns:

rotation matrix for the object

Type

Array

#### [\_drawClipPath(ctx, clipPath)](#_drawClipPath)

Prepare clipPath state and cache and draw it on instance's cache

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|
|`clipPath`|[fabric.Object](fabric.Object.html)|

Inherited From:

* [fabric.Object#\_drawClipPath](fabric.Object.html#_drawClipPath)

Source:

* [fabric.js](fabric.js.html), [line 15541](fabric.js.html#line15541)

#### [\_getCoords(absolute)&rarr; {Object}](#_getCoords)

return correct set of coordinates for intersection this will return either aCoords or lineCoords.

##### Parameters:
|Name|Type|Description| |
|`absolute`|Boolean|will return aCoords if true or lineCoords|

Inherited From:

* [fabric.Object#\_getCoords](fabric.Object.html#_getCoords)

Source:

* [fabric.js](fabric.js.html), [line 16645](fabric.js.html#line16645)

##### Returns:

{tl, tr, br, bl} points

Type

Object

#### [\_limitCacheSize(dims)&rarr; {Object|Object|Object|Object}](#_limitCacheSize)

Limit the cache dimensions so that X \* Y do not cross fabric.perfLimitSizeTotal and each side do not cross fabric.cacheSideLimit those numbers are configurable so that you can get as much detail as you want making bargain with performances.

##### Parameters:
|Name|Type|Description| |
|`dims`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"width of canvas/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"height of canvas/td        /tr            tr                            td class="name"codezoomX/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"zoomX zoom value to unscale the canvas before drawing cache/td        /tr            tr                            td class="name"codezoomY/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"zoomY zoom value to unscale the canvas before drawing cache/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#\_limitCacheSize](fabric.Object.html#_limitCacheSize)

Source:

* [fabric.js](fabric.js.html), [line 14989](fabric.js.html#line14989)

##### Returns:

* .width width of canvas

  Type

Object
* .height height of canvas

  Type

Object
* .zoomX zoomX zoom value to unscale the canvas before drawing cache

  Type

Object
* .zoomY zoomY zoom value to unscale the canvas before drawing cache

  Type

Object

#### [\_removeCacheCanvas()](#_removeCacheCanvas)

Remove cacheCanvas and its dimensions from the objects

Inherited From:

* [fabric.Object#\_removeCacheCanvas](fabric.Object.html#_removeCacheCanvas)

Source:

* [fabric.js](fabric.js.html), [line 15411](fabric.js.html#line15411)

#### [\_renderControls(ctx, styleOverrideopt)](#_renderControls)

Renders controls and borders for the object the context here is not transformed

##### Parameters:
|Name|Type|Attributes|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|
|`styleOverride`|Object|optional|properties to override the object style|

Inherited From:

* [fabric.Object#\_renderControls](fabric.Object.html#_renderControls)

Source:

* [fabric.js](fabric.js.html), [line 15698](fabric.js.html#line15698)

#### [\_setupCompositeOperation(ctx)](#_setupCompositeOperation)

Sets canvas globalCompositeOperation for specific object custom composition operation for the particular object can be specified using globalCompositeOperation property

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Rendering canvas context|

Inherited From:

* [fabric.Object#\_setupCompositeOperation](fabric.Object.html#_setupCompositeOperation)

Source:

* [fabric.js](fabric.js.html), [line 16248](fabric.js.html#line16248)

#### [\_toSVG()&rarr; {Array}](#_toSVG)

Returns svg representation of an instance

Source:

* [fabric.js](fabric.js.html), [line 19200](fabric.js.html#line19200)

##### Returns:

an array of strings with the specific svg representation of the instance

Type

Array

#### [adjustPosition(to)](#adjustPosition)

##### Parameters:
|Name|Type|Description| |
|`to`|String|One of 'left', 'center', 'right'|

Inherited From:

* [fabric.Object#adjustPosition](fabric.Object.html#adjustPosition)

Source:

* [fabric.js](fabric.js.html), [line 16495](fabric.js.html#line16495)

#### [animate(property, value)&rarr; {[fabric.Object](fabric.Object.html)|fabric.AnimationContext|Array.fabric.AnimationContext}](#animate)

Animates object's properties

##### Parameters:
|Name|Type|Description| |
|`property`|String | Object|Property to animate (if string) or properties to animate (if object)|
|`value`|Number | Object|Value to animate property to (if string was given first) or options object|

Inherited From:

* [fabric.Object#animate](fabric.Object.html#animate)

Source:

* [fabric.js](fabric.js.html), [line 18152](fabric.js.html#line18152)

Tutorials:

* *Tutorial: [http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)*

##### Returns:

* thisArg

  Type

[fabric.Object](fabric.Object.html)
* animation context (or an array if passed multiple properties) As object — multiple properties object.animate({ left: ..., top: ... }); object.animate({ left: ..., top: ... }, { duration: ... }); As string — one property object.animate('left', ...); object.animate('left', { duration: ... });

  Type

fabric.AnimationContext | Array.fabric.AnimationContext

#### [bringForward(intersectingopt)&rarr; {[fabric.Object](fabric.Object.html)}](#bringForward)

Moves an object up in stack of drawn objects

##### Parameters:
|Name|Type|Attributes|Description| |
|`intersecting`|Boolean|optional|If \`true\`, send object in front of next upper intersecting object|

Inherited From:

* [fabric.Object#bringForward](fabric.Object.html#bringForward)

Source:

* [fabric.js](fabric.js.html), [line 17310](fabric.js.html#line17310)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [bringToFront()&rarr; {[fabric.Object](fabric.Object.html)}](#bringToFront)

Moves an object to the top of the stack of drawn objects

Inherited From:

* [fabric.Object#bringToFront](fabric.Object.html#bringToFront)

Source:

* [fabric.js](fabric.js.html), [line 17278](fabric.js.html#line17278)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [calcOwnMatrix()&rarr; {Array}](#calcOwnMatrix)

calculate transform matrix that represents the current transformations from the object's properties, this matrix does not include the group transformation

Inherited From:

* [fabric.Object#calcOwnMatrix](fabric.Object.html#calcOwnMatrix)

Source:

* [fabric.js](fabric.js.html), [line 17152](fabric.js.html#line17152)

##### Returns:

transform matrix for the object

Type

Array

#### [calcTransformMatrix(skipGroupopt)&rarr; {Array}](#calcTransformMatrix)

calculate transform matrix that represents the current transformations from the object's properties.

##### Parameters:
|Name|Type|Attributes|Description| |
|`skipGroup`|Boolean|optional|return transform matrix for object not counting parent transformations There are some situation in which this is useful to avoid the fake rotation.|

Inherited From:

* [fabric.Object#calcTransformMatrix](fabric.Object.html#calcTransformMatrix)

Source:

* [fabric.js](fabric.js.html), [line 17130](fabric.js.html#line17130)

##### Returns:

transform matrix for the object

Type

Array

#### [center()&rarr; {[fabric.Object](fabric.Object.html)}](#center)

Centers object vertically and horizontally on canvas to which is was added last You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#center](fabric.Object.html#center)

Source:

* [fabric.js](fabric.js.html), [line 16207](fabric.js.html#line16207)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [centerH()&rarr; {[fabric.Object](fabric.Object.html)}](#centerH)

Centers object horizontally on canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#centerH](fabric.Object.html#centerH)

Source:

* [fabric.js](fabric.js.html), [line 16163](fabric.js.html#line16163)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [centerV()&rarr; {[fabric.Object](fabric.Object.html)}](#centerV)

Centers object vertically on canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#centerV](fabric.Object.html#centerV)

Source:

* [fabric.js](fabric.js.html), [line 16185](fabric.js.html#line16185)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [clone(callback, propertiesToIncludeopt)](#clone)

Clones an instance, using a callback method will work for every object.

##### Parameters:
|Name|Type|Attributes|Description| |
|`callback`|function|Callback is invoked with a clone as a first argument|
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Inherited From:

* [fabric.Object#clone](fabric.Object.html#clone)

Source:

* [fabric.js](fabric.js.html), [line 15967](fabric.js.html#line15967)

#### [cloneAsImage(callback, optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}](#cloneAsImage)

Creates an instance of fabric.Image out of an object makes use of toCanvasElement. Once this method was based on toDataUrl and loadImage, so it also had a quality and format option. toCanvasElement is faster and produce no loss of quality. If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it. toCanvasElement and then toBlob from the obtained canvas is also a good option. This method is sync now, but still support the callback because we did not want to break. When fabricJS 5.0 will be planned, this will probably be changed to not have a callback.

##### Parameters:
|Name|Type|Attributes|Description| |
|`callback`|function|callback, invoked with an instance as a first argument|
|`options`|Object|optional|for clone as image, passed to toDataURL
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codemultiplier/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    1                                /td                        td class="description last"Multiplier to scale by/td        /tr            tr                            td class="name"codeleft/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping left offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codetop/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping top offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping width. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping height. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeenableRetinaScaling/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Enable retina scaling for clone image. Introduce in 1.6.4/td        /tr            tr                            td class="name"codewithoutTransform/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4/td        /tr            tr                            td class="name"codewithoutShadow/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Remove current object shadow. Introduced in 2.4.2/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#cloneAsImage](fabric.Object.html#cloneAsImage)

Source:

* [fabric.js](fabric.js.html), [line 15998](fabric.js.html#line15998)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [complexity()&rarr; {Number}](#complexity)

Returns complexity of an instance

Inherited From:

* [fabric.Object#complexity](fabric.Object.html#complexity)

Source:

* [fabric.js](fabric.js.html), [line 16121](fabric.js.html#line16121)

##### Returns:

complexity of this instance (is 1 unless subclassed)

Type

Number

#### [containsPoint(point, linesopt, absoluteopt, calculateopt)&rarr; {Boolean}](#containsPoint)

Checks if point is inside the object

##### Parameters:
|Name|Type|Attributes|Description| |
|`point`|[fabric.Point](fabric.Point.html)|Point to check against|
|`lines`|Object|optional|object returned from @method \_getImageLines|
|`absolute`|Boolean|optional|use coordinates without viewportTransform|
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#containsPoint](fabric.Object.html#containsPoint)

Source:

* [fabric.js](fabric.js.html), [line 16747](fabric.js.html#line16747)

##### Returns:

true if point is inside the object

Type

Boolean

#### [dispose()](#dispose)

cancel instance's running animations

Inherited From:

* [fabric.Object#dispose](fabric.Object.html#dispose)

Source:

* [fabric.js](fabric.js.html), [line 16257](fabric.js.html#line16257)

#### [drawBorders(ctx, styleOverride)&rarr; {[fabric.Object](fabric.Object.html)}](#drawBorders)

Draws borders of an object's bounding box. Requires public properties: width, height Requires public options: padding, borderColor

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to draw on|
|`styleOverride`|Object|object to override the object style|

Inherited From:

* [fabric.Object#drawBorders](fabric.Object.html#drawBorders)

Source:

* [fabric.js](fabric.js.html), [line 17830](fabric.js.html#line17830)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [drawBordersInGroup(ctx, options, styleOverride)&rarr; {[fabric.Object](fabric.Object.html)}](#drawBordersInGroup)

Draws borders of an object's bounding box when it is inside a group. Requires public properties: width, height Requires public options: padding, borderColor

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to draw on|
|`options`|object|object representing current object parameters|
|`styleOverride`|Object|object to override the object style|

Inherited From:

* [fabric.Object#drawBordersInGroup](fabric.Object.html#drawBordersInGroup)

Source:

* [fabric.js](fabric.js.html), [line 17884](fabric.js.html#line17884)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [drawCacheOnCanvas(ctx)](#drawCacheOnCanvas)

Paint the cached copy of the object on the target context.

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|

Inherited From:

* [fabric.Object#drawCacheOnCanvas](fabric.Object.html#drawCacheOnCanvas)

Source:

* [fabric.js](fabric.js.html), [line 15557](fabric.js.html#line15557)

#### [drawClipPathOnCache(ctx, clipPath)](#drawClipPathOnCache)

Execute the drawing operation for an object clipPath

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|
|`clipPath`|[fabric.Object](fabric.Object.html)|

Inherited From:

* [fabric.Object#drawClipPathOnCache](fabric.Object.html#drawClipPathOnCache)

Source:

* [fabric.js](fabric.js.html), [line 15495](fabric.js.html#line15495)

#### [drawControls(ctx, styleOverride)&rarr; {[fabric.Object](fabric.Object.html)}](#drawControls)

Draws corners of an object's bounding box. Requires public properties: width, height Requires public options: cornerSize, padding

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to draw on|
|`styleOverride`|Object|object to override the object style|

Inherited From:

* [fabric.Object#drawControls](fabric.Object.html#drawControls)

Source:

* [fabric.js](fabric.js.html), [line 17917](fabric.js.html#line17917)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [drawObject(ctx)](#drawObject)

Execute the drawing operation for an object on a specified context

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|

Inherited From:

* [fabric.Object#drawObject](fabric.Object.html#drawObject)

Source:

* [fabric.js](fabric.js.html), [line 15520](fabric.js.html#line15520)

#### [drawSelectionBackground(ctx)&rarr; {[fabric.Object](fabric.Object.html)}](#drawSelectionBackground)

Draws a colored layer behind the object, inside its selection borders. Requires public options: padding, selectionBackgroundColor this function is called when the context is transformed has checks to be skipped when the object is on a staticCanvas

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to draw on|

Inherited From:

* [fabric.Object#drawSelectionBackground](fabric.Object.html#drawSelectionBackground)

Source:

* [fabric.js](fabric.js.html), [line 17802](fabric.js.html#line17802)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [forEachControl(fn)](#forEachControl)

Calls a function for each control. The function gets called, with the control, the object that is calling the iterator and the control's key

##### Parameters:
|Name|Type|Description| |
|`fn`|function|function to iterate over the controls over|

Inherited From:

* [fabric.Object#forEachControl](fabric.Object.html#forEachControl)

Source:

* [fabric.js](fabric.js.html), [line 17768](fabric.js.html#line17768)

#### [fxStraighten(callbacks)&rarr; {[fabric.Object](fabric.Object.html)}](#fxStraighten)

Same as fabric.Object.prototype.straighten but with animation

##### Parameters:
|Name|Type|Description| |
|`callbacks`|Object|Object with callback functions
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeonComplete/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on completion/td        /tr            tr                            td class="name"codeonChange/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on every step of animation/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#fxStraighten](fabric.Object.html#fxStraighten)

Source:

* [fabric.js](fabric.js.html), [line 21536](fabric.js.html#line21536)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [getBoundingRect(absoluteopt, calculateopt)&rarr; {Object}](#getBoundingRect)

Returns coordinates of object's bounding rectangle (left, top, width, height) the box is intended as aligned to axis of canvas.

##### Parameters:
|Name|Type|Attributes|Description| |
|`absolute`|Boolean|optional|use coordinates without viewportTransform|
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords / .aCoords|

Inherited From:

* [fabric.Object#getBoundingRect](fabric.Object.html#getBoundingRect)

Source:

* [fabric.js](fabric.js.html), [line 16920](fabric.js.html#line16920)

##### Returns:

Object with left, top, width, height properties

Type

Object

#### [getCenterPoint()&rarr; {[fabric.Point](fabric.Point.html)}](#getCenterPoint)

Returns the real center coordinates of the object

Inherited From:

* [fabric.Object#getCenterPoint](fabric.Object.html#getCenterPoint)

Source:

* [fabric.js](fabric.js.html), [line 16419](fabric.js.html#line16419)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [getCoords()&rarr; {Array}](#getCoords)

return correct set of coordinates for intersection this will return either aCoords or lineCoords. The coords are returned in an array.

Inherited From:

* [fabric.Object#getCoords](fabric.Object.html#getCoords)

Source:

* [fabric.js](fabric.js.html), [line 16661](fabric.js.html#line16661)

##### Returns:

\[tl, tr, br, bl\] of points

Type

Array

#### [getLocalPointer(e, pointeropt)&rarr; {Object}](#getLocalPointer)

Returns coordinates of a pointer relative to an object

##### Parameters:
|Name|Type|Attributes|Description| |
|`e`|Event|Event to operate upon|
|`pointer`|Object|optional|Pointer to operate upon (instead of event)|

Inherited From:

* [fabric.Object#getLocalPointer](fabric.Object.html#getLocalPointer)

Source:

* [fabric.js](fabric.js.html), [line 16229](fabric.js.html#line16229)

##### Returns:

Coordinates of a pointer (x, y)

Type

Object

#### [getObjectOpacity()&rarr; {Number}](#getObjectOpacity)

Return the object opacity counting also the group property

Inherited From:

* [fabric.Object#getObjectOpacity](fabric.Object.html#getObjectOpacity)

Source:

* [fabric.js](fabric.js.html), [line 15277](fabric.js.html#line15277)

##### Returns:

Type

Number

#### [getObjectScaling()&rarr; {Object}](#getObjectScaling)

Return the object scale factor counting also the group scaling

Inherited From:

* [fabric.Object#getObjectScaling](fabric.Object.html#getObjectScaling)

Source:

* [fabric.js](fabric.js.html), [line 15242](fabric.js.html#line15242)

##### Returns:

object with scaleX and scaleY properties

Type

Object

#### [getPointByOrigin(originX, originY)&rarr; {[fabric.Point](fabric.Point.html)}](#getPointByOrigin)

Returns the coordinates of the object as if it has a different origin

##### Parameters:
|Name|Type|Description| |
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#getPointByOrigin](fabric.Object.html#getPointByOrigin)

Source:

* [fabric.js](fabric.js.html), [line 16439](fabric.js.html#line16439)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [getScaledHeight()&rarr; {Number}](#getScaledHeight)

Returns height of an object bounding box counting transformations before 2.0 it was named getHeight();

Inherited From:

* [fabric.Object#getScaledHeight](fabric.Object.html#getScaledHeight)

Source:

* [fabric.js](fabric.js.html), [line 16939](fabric.js.html#line16939)

##### Returns:

height value

Type

Number

#### [getScaledWidth()&rarr; {Number}](#getScaledWidth)

Returns width of an object's bounding box counting transformations before 2.0 it was named getWidth();

Inherited From:

* [fabric.Object#getScaledWidth](fabric.Object.html#getScaledWidth)

Source:

* [fabric.js](fabric.js.html), [line 16930](fabric.js.html#line16930)

##### Returns:

width value

Type

Number

#### [getSvgCommons()&rarr; {String}](#getSvgCommons)

Returns id attribute for svg output

Inherited From:

* [fabric.Object#getSvgCommons](fabric.Object.html#getSvgCommons)

Source:

* [fabric.js](fabric.js.html), [line 17459](fabric.js.html#line17459)

##### Returns:

Type

String

#### [getSvgFilter()&rarr; {String}](#getSvgFilter)

Returns filter for svg shadow

Inherited From:

* [fabric.Object#getSvgFilter](fabric.Object.html#getSvgFilter)

Source:

* [fabric.js](fabric.js.html), [line 17451](fabric.js.html#line17451)

##### Returns:

Type

String

#### [getSvgSpanStyles(style, useWhiteSpace)&rarr; {String}](#getSvgSpanStyles)

Returns styles-string for svg-export

##### Parameters:
|Name|Type|Description| |
|`style`|Object|the object from which to retrieve style properties|
|`useWhiteSpace`|Boolean|a boolean to include an additional attribute in the style.|

Inherited From:

* [fabric.Object#getSvgSpanStyles](fabric.Object.html#getSvgSpanStyles)

Source:

* [fabric.js](fabric.js.html), [line 17404](fabric.js.html#line17404)

##### Returns:

Type

String

#### [getSvgStyles(skipShadow)&rarr; {String}](#getSvgStyles)

Returns styles-string for svg-export

##### Parameters:
|Name|Type|Description| |
|`skipShadow`|Boolean|a boolean to skip shadow filter output|

Inherited From:

* [fabric.Object#getSvgStyles](fabric.Object.html#getSvgStyles)

Source:

* [fabric.js](fabric.js.html), [line 17367](fabric.js.html#line17367)

##### Returns:

Type

String

#### [getSvgTextDecoration(style)&rarr; {String}](#getSvgTextDecoration)

Returns text-decoration property for svg-export

##### Parameters:
|Name|Type|Description| |
|`style`|Object|the object from which to retrieve style properties|

Inherited From:

* [fabric.Object#getSvgTextDecoration](fabric.Object.html#getSvgTextDecoration)

Source:

* [fabric.js](fabric.js.html), [line 17441](fabric.js.html#line17441)

##### Returns:

Type

String

#### [getSvgTransform(use)&rarr; {String}](#getSvgTransform)

Returns transform-string for svg-export

##### Parameters:
|Name|Type|Description| |
|`use`|Boolean|the full transform or the single object one.|

Inherited From:

* [fabric.Object#getSvgTransform](fabric.Object.html#getSvgTransform)

Source:

* [fabric.js](fabric.js.html), [line 17471](fabric.js.html#line17471)

##### Returns:

Type

String

#### [getTotalObjectScaling()&rarr; {Object}](#getTotalObjectScaling)

Return the object scale factor counting also the group scaling, zoom and retina

Inherited From:

* [fabric.Object#getTotalObjectScaling](fabric.Object.html#getTotalObjectScaling)

Source:

* [fabric.js](fabric.js.html), [line 15262](fabric.js.html#line15262)

##### Returns:

object with scaleX and scaleY properties

Type

Object

#### [getViewportTransform()&rarr; {Array}](#getViewportTransform)

Retrieves viewportTransform from Object's canvas if possible

Inherited From:

* [fabric.Object#getViewportTransform](fabric.Object.html#getViewportTransform)

Source:

* [fabric.js](fabric.js.html), [line 15338](fabric.js.html#line15338)

##### Returns:

Type

Array

#### [hasFill()](#hasFill)

return true if the object will draw a fill Does not consider text styles. This is just a shortcut used at rendering time We want it to be an approximation and be fast. wrote to avoid extra caching, it has to return true when fill happens, can guess when it will not happen at 100% chance, does not matter if it misses some use case where the fill is invisible.

Since:

* 3.0.0

Inherited From:

* [fabric.Object#hasFill](fabric.Object.html#hasFill)

Source:

* [fabric.js](fabric.js.html), [line 15441](fabric.js.html#line15441)

##### Returns:

Boolean

#### [hasStateChanged(propertySetopt)&rarr; {Boolean}](#hasStateChanged)

Returns true if object state (one of its state properties) was changed

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertySet`|String|optional|optional name for the set of property we want to save|

Inherited From:

* [fabric.Object#hasStateChanged](fabric.Object.html#hasStateChanged)

Source:

* [fabric.js](fabric.js.html), [line 17663](fabric.js.html#line17663)

##### Returns:

true if instance' state has changed since \`[fabric.Object#saveState](fabric.Object.html#saveState)\` was called

Type

Boolean

#### [hasStroke()](#hasStroke)

return true if the object will draw a stroke Does not consider text styles. This is just a shortcut used at rendering time We want it to be an approximation and be fast. wrote to avoid extra caching, it has to return true when stroke happens, can guess when it will not happen at 100% chance, does not matter if it misses some use case where the stroke is invisible.

Since:

* 3.0.0

Inherited From:

* [fabric.Object#hasStroke](fabric.Object.html#hasStroke)

Source:

* [fabric.js](fabric.js.html), [line 15427](fabric.js.html#line15427)

##### Returns:

Boolean

#### [initialize(optionsopt)&rarr; {Object}](#initialize)

Constructor

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object|

Overrides:

* [fabric.Object#initialize](fabric.Object.html#initialize)

Source:

* [fabric.js](fabric.js.html), [line 19128](fabric.js.html#line19128)

##### Returns:

thisArg

Type

Object

#### [intersectsWithObject(other, absoluteopt, calculateopt)&rarr; {Boolean}](#intersectsWithObject)

Checks if object intersects with another object

##### Parameters:
|Name|Type|Attributes|Description| |
|`other`|Object|Object to test|
|`absolute`|Boolean|optional|use coordinates without viewportTransform|
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#intersectsWithObject](fabric.Object.html#intersectsWithObject)

Source:

* [fabric.js](fabric.js.html), [line 16690](fabric.js.html#line16690)

##### Returns:

true if object intersects with another object

Type

Boolean

#### [intersectsWithRect(pointTL, pointBR, absoluteopt, calculateopt)&rarr; {Boolean}](#intersectsWithRect)

Checks if object intersects with an area formed by 2 points

##### Parameters:
|Name|Type|Attributes|Description| |
|`pointTL`|Object|top-left point of area|
|`pointBR`|Object|bottom-right point of area|
|`absolute`|Boolean|optional|use coordinates without viewportTransform|
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#intersectsWithRect](fabric.Object.html#intersectsWithRect)

Source:

* [fabric.js](fabric.js.html), [line 16673](fabric.js.html#line16673)

##### Returns:

true if object intersects with an area formed by 2 points

Type

Boolean

#### [isCacheDirty(skipCanvas)](#isCacheDirty)

Check if cache is dirty

##### Parameters:
|Name|Type|Description| |
|`skipCanvas`|Boolean|skip canvas checks because this object is painted on parent canvas.|

Inherited From:

* [fabric.Object#isCacheDirty](fabric.Object.html#isCacheDirty)

Source:

* [fabric.js](fabric.js.html), [line 15567](fabric.js.html#line15567)

#### [isContainedWithinObject(other, absoluteopt, calculateopt)&rarr; {Boolean}](#isContainedWithinObject)

Checks if object is fully contained within area of another object

##### Parameters:
|Name|Type|Attributes|Description| |
|`other`|Object|Object to test|
|`absolute`|Boolean|optional|use coordinates without viewportTransform|
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#isContainedWithinObject](fabric.Object.html#isContainedWithinObject)

Source:

* [fabric.js](fabric.js.html), [line 16708](fabric.js.html#line16708)

##### Returns:

true if object is fully contained within area of another object

Type

Boolean

#### [isContainedWithinRect(pointTL, pointBR, absoluteopt, calculateopt)&rarr; {Boolean}](#isContainedWithinRect)

Checks if object is fully contained within area formed by 2 points

##### Parameters:
|Name|Type|Attributes|Description| |
|`pointTL`|Object|top-left point of area|
|`pointBR`|Object|bottom-right point of area|
|`absolute`|Boolean|optional|use coordinates without viewportTransform|
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#isContainedWithinRect](fabric.Object.html#isContainedWithinRect)

Source:

* [fabric.js](fabric.js.html), [line 16728](fabric.js.html#line16728)

##### Returns:

true if object is fully contained within area formed by 2 points

Type

Boolean

#### [isControlVisible(controlKey)&rarr; {Boolean}](#isControlVisible)

Returns true if the specified control is visible, false otherwise.

##### Parameters:
|Name|Type|Description| |
|`controlKey`|String|The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.|

Inherited From:

* [fabric.Object#isControlVisible](fabric.Object.html#isControlVisible)

Source:

* [fabric.js](fabric.js.html), [line 17955](fabric.js.html#line17955)

##### Returns:

true if the specified control is visible, false otherwise

Type

Boolean

#### [isOnScreen(calculateopt)&rarr; {Boolean}](#isOnScreen)

Checks if object is contained within the canvas with current viewportTransform the check is done stopping at first point that appears on screen

##### Parameters:
|Name|Type|Attributes|Description| |
|`calculate`|Boolean|optional|use coordinates of current position instead of .aCoords|

Inherited From:

* [fabric.Object#isOnScreen](fabric.Object.html#isOnScreen)

Source:

* [fabric.js](fabric.js.html), [line 16761](fabric.js.html#line16761)

##### Returns:

true if object is fully or partially contained within canvas

Type

Boolean

#### [isPartiallyOnScreen(calculateopt)&rarr; {Boolean}](#isPartiallyOnScreen)

Checks if object is partially contained within the canvas with current viewportTransform

##### Parameters:
|Name|Type|Attributes|Description| |
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#isPartiallyOnScreen](fabric.Object.html#isPartiallyOnScreen)

Source:

* [fabric.js](fabric.js.html), [line 16804](fabric.js.html#line16804)

##### Returns:

true if object is partially contained within canvas

Type

Boolean

#### [isType(type)&rarr; {Boolean}](#isType)

Returns true if specified type is identical to the type of an instance

##### Parameters:
|Name|Type|Description| |
|`type`|String|Type to check against|

Inherited From:

* [fabric.Object#isType](fabric.Object.html#isType)

Source:

* [fabric.js](fabric.js.html), [line 16113](fabric.js.html#line16113)

##### Returns:

Type

Boolean

#### [moveTo(index)&rarr; {[fabric.Object](fabric.Object.html)}](#moveTo)

Moves an object to specified level in stack of drawn objects

##### Parameters:
|Name|Type|Description| |
|`index`|Number|New position of object|

Inherited From:

* [fabric.Object#moveTo](fabric.Object.html#moveTo)

Source:

* [fabric.js](fabric.js.html), [line 17326](fabric.js.html#line17326)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [needsItsOwnCache()](#needsItsOwnCache)

When set to \`true\`, force the object to have its own cache, even if it is inside a group it may be needed when your object behave in a particular way on the cache and always needs its own isolated canvas to render correctly. Created to be overridden since 1.7.12

Inherited From:

* [fabric.Object#needsItsOwnCache](fabric.Object.html#needsItsOwnCache)

Source:

* [fabric.js](fabric.js.html), [line 15453](fabric.js.html#line15453)

##### Returns:

Boolean

#### [onDeselect(optionsopt)](#onDeselect)

This callback function is called every time \_discardActiveObject or \_setActiveObject try to to deselect this object. If the function returns true, the process is cancelled

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|options sent from the upper functions
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codee/code/td                        td class="type"                            span class="param-type"Event/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"event if the process is generated by an event/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#onDeselect](fabric.Object.html#onDeselect)

Source:

* [fabric.js](fabric.js.html), [line 18005](fabric.js.html#line18005)

#### [onSelect(optionsopt)](#onSelect)

This callback function is called every time \_discardActiveObject or \_setActiveObject try to to select this object. If the function returns true, the process is cancelled

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|options sent from the upper functions
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codee/code/td                        td class="type"                            span class="param-type"Event/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"event if the process is generated by an event/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#onSelect](fabric.Object.html#onSelect)

Source:

* [fabric.js](fabric.js.html), [line 18016](fabric.js.html#line18016)

#### [render(ctx)](#render)

Renders an object on a specified context

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|

Inherited From:

* [fabric.Object#render](fabric.Object.html#render)

Source:

* [fabric.js](fabric.js.html), [line 15367](fabric.js.html#line15367)

#### [rotate(angle)&rarr; {[fabric.Object](fabric.Object.html)}](#rotate)

Sets "angle" of an instance with centered rotation

##### Parameters:
|Name|Type|Description| |
|`angle`|Number|Angle value (in degrees)|

Inherited From:

* [fabric.Object#rotate](fabric.Object.html#rotate)

Source:

* [fabric.js](fabric.js.html), [line 16141](fabric.js.html#line16141)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [saveState(optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}](#saveState)

Saves state of an object

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Object with additional \`stateProperties\` array to include when saving state|

Inherited From:

* [fabric.Object#saveState](fabric.Object.html#saveState)

Source:

* [fabric.js](fabric.js.html), [line 17677](fabric.js.html#line17677)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [scale(value)&rarr; {[fabric.Object](fabric.Object.html)}](#scale)

Scales an object (equally by x and y)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|Scale factor|

Inherited From:

* [fabric.Object#scale](fabric.Object.html#scale)

Source:

* [fabric.js](fabric.js.html), [line 16970](fabric.js.html#line16970)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [scaleToHeight(value, absolute)&rarr; {[fabric.Object](fabric.Object.html)}](#scaleToHeight)

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|New height value|
|`absolute`|Boolean|ignore viewport|

Inherited From:

* [fabric.Object#scaleToHeight](fabric.Object.html#scaleToHeight)

Source:

* [fabric.js](fabric.js.html), [line 16996](fabric.js.html#line16996)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [scaleToWidth(value, absolute)&rarr; {[fabric.Object](fabric.Object.html)}](#scaleToWidth)

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|New width value|
|`absolute`|Boolean|ignore viewport|

Inherited From:

* [fabric.Object#scaleToWidth](fabric.Object.html#scaleToWidth)

Source:

* [fabric.js](fabric.js.html), [line 16983](fabric.js.html#line16983)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [sendBackwards(intersectingopt)&rarr; {[fabric.Object](fabric.Object.html)}](#sendBackwards)

Moves an object down in stack of drawn objects

##### Parameters:
|Name|Type|Attributes|Description| |
|`intersecting`|Boolean|optional|If \`true\`, send object behind next lower intersecting object|

Inherited From:

* [fabric.Object#sendBackwards](fabric.Object.html#sendBackwards)

Source:

* [fabric.js](fabric.js.html), [line 17294](fabric.js.html#line17294)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [sendToBack()&rarr; {[fabric.Object](fabric.Object.html)}](#sendToBack)

Moves an object to the bottom of the stack of drawn objects

Inherited From:

* [fabric.Object#sendToBack](fabric.Object.html#sendToBack)

Source:

* [fabric.js](fabric.js.html), [line 17263](fabric.js.html#line17263)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [setControlsVisibility(optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}](#setControlsVisibility)

Sets the visibility state of object controls.

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codebl/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the bottom-left control, false to disable it/td        /tr            tr                            td class="name"codebr/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the bottom-right control, false to disable it/td        /tr            tr                            td class="name"codemb/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-bottom control, false to disable it/td        /tr            tr                            td class="name"codeml/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-left control, false to disable it/td        /tr            tr                            td class="name"codemr/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-right control, false to disable it/td        /tr            tr                            td class="name"codemt/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-top control, false to disable it/td        /tr            tr                            td class="name"codetl/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the top-left control, false to disable it/td        /tr            tr                            td class="name"codetr/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the top-right control, false to disable it/td        /tr            tr                            td class="name"codemtr/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-top-rotate control, false to disable it/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#setControlsVisibility](fabric.Object.html#setControlsVisibility)

Source:

* [fabric.js](fabric.js.html), [line 17989](fabric.js.html#line17989)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [setControlVisible(controlKey, visible)&rarr; {[fabric.Object](fabric.Object.html)}](#setControlVisible)

Sets the visibility of the specified control.

##### Parameters:
|Name|Type|Description| |
|`controlKey`|String|The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.|
|`visible`|Boolean|true to set the specified control visible, false otherwise|

Inherited From:

* [fabric.Object#setControlVisible](fabric.Object.html#setControlVisible)

Source:

* [fabric.js](fabric.js.html), [line 17966](fabric.js.html#line17966)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [setCoords(skipCornersopt)&rarr; {[fabric.Object](fabric.Object.html)}](#setCoords)

Sets corner and controls position coordinates based on current angle, width and height, left and top. oCoords are used to find the corners aCoords are used to quickly find an object on the canvas lineCoords are used to quickly find object during pointer events. See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

##### Parameters:
|Name|Type|Attributes|Description| |
|`skipCorners`|Boolean|optional|skip calculation of oCoords.|

Inherited From:

* [fabric.Object#setCoords](fabric.Object.html#setCoords)

Source:

* [fabric.js](fabric.js.html), [line 17082](fabric.js.html#line17082)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [setOnGroup()](#setOnGroup)

This callback function is called by the parent group of an object every time a non-delegated property changes on the group. It is passed the key and value as parameters. Not adding in this function's signature to avoid Travis build error about unused variables.

Inherited From:

* [fabric.Object#setOnGroup](fabric.Object.html#setOnGroup)

Source:

* [fabric.js](fabric.js.html), [line 15334](fabric.js.html#line15334)

#### [setOptions(optionsopt)](#setOptions)

Sets object's properties from options

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object|

Inherited From:

* [fabric.Object#setOptions](fabric.Object.html#setOptions)

Source:

* [fabric.js](fabric.js.html), [line 15119](fabric.js.html#line15119)

#### [setPositionByOrigin(pos, originX, originY)&rarr; {void}](#setPositionByOrigin)

Sets the position of the object taking into consideration the object's origin

##### Parameters:
|Name|Type|Description| |
|`pos`|[fabric.Point](fabric.Point.html)|The new position of the object|
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#setPositionByOrigin](fabric.Object.html#setPositionByOrigin)

Source:

* [fabric.js](fabric.js.html), [line 16485](fabric.js.html#line16485)

##### Returns:

Type

void

#### [setupState(optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}](#setupState)

Setups state of an object

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Object with additional \`stateProperties\` array to include when saving state|

Inherited From:

* [fabric.Object#setupState](fabric.Object.html#setupState)

Source:

* [fabric.js](fabric.js.html), [line 17695](fabric.js.html#line17695)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [shouldCache()&rarr; {Boolean}](#shouldCache)

Decide if the object should cache or not. Create its own cache level objectCaching is a global flag, wins over everything needsItsOwnCache should be used when the object drawing method requires a cache step. None of the fabric classes requires it. Generally you do not cache objects in groups because the group outside is cached. Read as: cache if is needed, or if the feature is enabled but we are not already caching.

Inherited From:

* [fabric.Object#shouldCache](fabric.Object.html#shouldCache)

Source:

* [fabric.js](fabric.js.html), [line 15473](fabric.js.html#line15473)

##### Returns:

Type

Boolean

#### [straighten()&rarr; {[fabric.Object](fabric.Object.html)}](#straighten)

Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)

Inherited From:

* [fabric.Object#straighten](fabric.Object.html#straighten)

Source:

* [fabric.js](fabric.js.html), [line 21525](fabric.js.html#line21525)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [toCanvasElement(options)&rarr; {HTMLCanvasElement}](#toCanvasElement)

Converts an object into a HTMLCanvas element

##### Parameters:
|Name|Type|Description| |
|`options`|Object|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codemultiplier/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    1                                /td                        td class="description last"Multiplier to scale by/td        /tr            tr                            td class="name"codeleft/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping left offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codetop/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping top offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping width. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping height. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeenableRetinaScaling/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Enable retina scaling for clone image. Introduce in 1.6.4/td        /tr            tr                            td class="name"codewithoutTransform/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4/td        /tr            tr                            td class="name"codewithoutShadow/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Remove current object shadow. Introduced in 2.4.2/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#toCanvasElement](fabric.Object.html#toCanvasElement)

Source:

* [fabric.js](fabric.js.html), [line 16019](fabric.js.html#line16019)

##### Returns:

Returns DOM element canvas with the fabric.Object

Type

HTMLCanvasElement

#### [toClipPathSVG(reviveropt)&rarr; {String}](#toClipPathSVG)

Returns svg clipPath representation of an instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`reviver`|function|optional|Method for further parsing of svg representation.|

Inherited From:

* [fabric.Object#toClipPathSVG](fabric.Object.html#toClipPathSVG)

Source:

* [fabric.js](fabric.js.html), [line 17510](fabric.js.html#line17510)

##### Returns:

svg representation of an instance

Type

String

#### [toDatalessObject(propertiesToIncludeopt)&rarr; {Object}](#toDatalessObject)

Returns (dataless) object representation of an instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Inherited From:

* [fabric.Object#toDatalessObject](fabric.Object.html#toDatalessObject)

Source:

* [fabric.js](fabric.js.html), [line 15199](fabric.js.html#line15199)

##### Returns:

Object representation of an instance

Type

Object

#### [toDataURL(options)&rarr; {String}](#toDataURL)

Converts an object into a data-url-like string

##### Parameters:
|Name|Type|Description| |
|`options`|Object|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeformat/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    png                                /td                        td class="description last"The format of the output image. Either "jpeg" or "png"/td        /tr            tr                            td class="name"codequality/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    1                                /td                        td class="description last"Quality level (0..1). Only used for jpeg./td        /tr            tr                            td class="name"codemultiplier/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    1                                /td                        td class="description last"Multiplier to scale by/td        /tr            tr                            td class="name"codeleft/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping left offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codetop/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping top offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping width. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping height. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeenableRetinaScaling/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Enable retina scaling for clone image. Introduce in 1.6.4/td        /tr            tr                            td class="name"codewithoutTransform/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Remove current object transform ( no scale , no angle, no flip, no skew ). Introduced in 2.3.4/td        /tr            tr                            td class="name"codewithoutShadow/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Remove current object shadow. Introduced in 2.4.2/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#toDataURL](fabric.Object.html#toDataURL)

Source:

* [fabric.js](fabric.js.html), [line 16103](fabric.js.html#line16103)

##### Returns:

Returns a data: URL containing a representation of the object in the format specified by options.format

Type

String

#### [toJSON(propertiesToIncludeopt)&rarr; {Object}](#toJSON)

Returns a JSON representation of an instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Inherited From:

* [fabric.Object#toJSON](fabric.Object.html#toJSON)

Source:

* [fabric.js](fabric.js.html), [line 16130](fabric.js.html#line16130)

##### Returns:

JSON

Type

Object

#### [toLocalPoint(point, originX, originY)&rarr; {[fabric.Point](fabric.Point.html)}](#toLocalPoint)

Returns the point in local coordinates

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|The point relative to the global coordinate system|
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#toLocalPoint](fabric.Object.html#toLocalPoint)

Source:

* [fabric.js](fabric.js.html), [line 16451](fabric.js.html#line16451)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [toObject(propertiesToIncludeopt)&rarr; {Object}](#toObject)

Returns object representation of an instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Overrides:

* [fabric.Object#toObject](fabric.Object.html#toObject)

Source:

* [fabric.js](fabric.js.html), [line 19190](fabric.js.html#line19190)

##### Returns:

object representation of an instance

Type

Object

#### [toString()&rarr; {String}](#toString)

Returns a string representation of an instance

Inherited From:

* [fabric.Object#toString](fabric.Object.html#toString)

Source:

* [fabric.js](fabric.js.html), [line 15234](fabric.js.html#line15234)

##### Returns:

Type

String

#### [toSVG(reviveropt)&rarr; {String}](#toSVG)

Returns svg representation of an instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`reviver`|function|optional|Method for further parsing of svg representation.|

Inherited From:

* [fabric.Object#toSVG](fabric.Object.html#toSVG)

Source:

* [fabric.js](fabric.js.html), [line 17501](fabric.js.html#line17501)

##### Returns:

svg representation of an instance

Type

String

#### [transform(ctx)](#transform)

Transforms context when rendering an object

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context|

Inherited From:

* [fabric.Object#transform](fabric.Object.html#transform)

Source:

* [fabric.js](fabric.js.html), [line 15131](fabric.js.html#line15131)

#### [translateToCenterPoint(point, originX, originY)&rarr; {[fabric.Point](fabric.Point.html)}](#translateToCenterPoint)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|The point which corresponds to the originX and originY params|
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#translateToCenterPoint](fabric.Object.html#translateToCenterPoint)

Source:

* [fabric.js](fabric.js.html), [line 16392](fabric.js.html#line16392)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [translateToGivenOrigin(point, fromOriginX, fromOriginY, toOriginX, toOriginY)&rarr; {[fabric.Point](fabric.Point.html)}](#translateToGivenOrigin)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|The point which corresponds to the originX and originY params|
|`fromOriginX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`fromOriginY`|String|Vertical origin: 'top', 'center' or 'bottom'|
|`toOriginX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`toOriginY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#translateToGivenOrigin](fabric.Object.html#translateToGivenOrigin)

Source:

* [fabric.js](fabric.js.html), [line 16339](fabric.js.html#line16339)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [translateToOriginPoint(center, originX, originY)&rarr; {[fabric.Point](fabric.Point.html)}](#translateToOriginPoint)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

##### Parameters:
|Name|Type|Description| |
|`center`|[fabric.Point](fabric.Point.html)|The point which corresponds to center of the object|
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#translateToOriginPoint](fabric.Object.html#translateToOriginPoint)

Source:

* [fabric.js](fabric.js.html), [line 16407](fabric.js.html#line16407)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### [viewportCenter()&rarr; {[fabric.Object](fabric.Object.html)}](#viewportCenter)

Centers object on current viewport of canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#viewportCenter](fabric.Object.html#viewportCenter)

Source:

* [fabric.js](fabric.js.html), [line 16218](fabric.js.html#line16218)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [viewportCenterH()&rarr; {[fabric.Object](fabric.Object.html)}](#viewportCenterH)

Centers object horizontally on current viewport of canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#viewportCenterH](fabric.Object.html#viewportCenterH)

Source:

* [fabric.js](fabric.js.html), [line 16174](fabric.js.html#line16174)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [viewportCenterV()&rarr; {[fabric.Object](fabric.Object.html)}](#viewportCenterV)

Centers object vertically on current viewport of canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#viewportCenterV](fabric.Object.html#viewportCenterV)

Source:

* [fabric.js](fabric.js.html), [line 16196](fabric.js.html#line16196)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### [willDrawShadow()&rarr; {Boolean}](#willDrawShadow)

Check if this object or a child object will cast a shadow used by Group.shouldCache to know if child has a shadow recursively

Inherited From:

* [fabric.Object#willDrawShadow](fabric.Object.html#willDrawShadow)

Source:

* [fabric.js](fabric.js.html), [line 15486](fabric.js.html#line15486)

##### Returns:

Type

Boolean
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:17 GMT+0100 (Central European Standard Time)