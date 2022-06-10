##### Type:

* String

Inherited From:

* [fabric.Object#borderColor](fabric.Object.html#borderColor)

Default Value:

* rgba(102,153,255,0.75)

Source:

* [fabric.js](fabric.js.html), [line 12166](fabric.js.html#line12166)

#### borderDashArray:[Array](Array.html)

Array specifying dash pattern of an object's borders (hasBorder must be true)

##### Type:

* [Array](Array.html)

Since:

* 1.6.2

Inherited From:

* [fabric.Object#borderDashArray](fabric.Object.html#borderDashArray)

Source:

* [fabric.js](fabric.js.html), [line 12173](fabric.js.html#line12173)

#### borderOpacityWhenMoving:Number

Opacity of object's controlling borders when object is active and moving

##### Type:

* Number

Inherited From:

* [fabric.Object#borderOpacityWhenMoving](fabric.Object.html#borderOpacityWhenMoving)

Default Value:

* 0.4

Source:

* [fabric.js](fabric.js.html), [line 12315](fabric.js.html#line12315)

#### borderScaleFactor:Number

Scale factor of object's controlling borders

##### Type:

* Number

Inherited From:

* [fabric.Object#borderScaleFactor](fabric.Object.html#borderScaleFactor)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 12322](fabric.js.html#line12322)

#### cacheProperties:Boolean

Pathgroups are container, do not render anything on theyr own, ence no cache properties

##### Type:

* Boolean

Overrides:

* [fabric.Path#cacheProperties](fabric.Path.html#cacheProperties)

Default Value:

* ```
  []
  ```

Source:

* [fabric.js](fabric.js.html), [line 18007](fabric.js.html#line18007)

#### centeredRotation:Boolean

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

* [fabric.js](fabric.js.html), [line 12222](fabric.js.html#line12222)

#### centeredScaling:Boolean

When true, this object will use center point as the origin of transformation when being scaled via the controls. **Backwards incompatibility note:** This property replaces "centerTransform" (Boolean).

##### Type:

* Boolean

Since:

* 1.3.4

Inherited From:

* [fabric.Object#centeredScaling](fabric.Object.html#centeredScaling)

Source:

* [fabric.js](fabric.js.html), [line 12212](fabric.js.html#line12212)

#### clipTo:function

Function that determines clipping of an object (context is passed as a first argument) Note that context origin is at the object's center point (not left/top corner)

##### Type:

* function

Inherited From:

* [fabric.Object#clipTo](fabric.Object.html#clipTo)

Source:

* [fabric.js](fabric.js.html), [line 12406](fabric.js.html#line12406)

#### cornerColor:String

Color of controlling corners of an object (when it's active)

##### Type:

* String

Inherited From:

* [fabric.Object#cornerColor](fabric.Object.html#cornerColor)

Default Value:

* rgba(102,153,255,0.5)

Source:

* [fabric.js](fabric.js.html), [line 12180](fabric.js.html#line12180)

#### cornerDashArray:[Array](Array.html)

Array specifying dash pattern of an object's control (hasBorder must be true)

##### Type:

* [Array](Array.html)

Since:

* 1.6.2

Inherited From:

* [fabric.Object#cornerDashArray](fabric.Object.html#cornerDashArray)

Source:

* [fabric.js](fabric.js.html), [line 12202](fabric.js.html#line12202)

#### cornerSize:Number

Size of object's controlling corners (in pixels)

##### Type:

* Number

Inherited From:

* [fabric.Object#cornerSize](fabric.Object.html#cornerSize)

Default Value:

* 13

Source:

* [fabric.js](fabric.js.html), [line 12131](fabric.js.html#line12131)

#### cornerStrokeColor:String

Color of controlling corners of an object (when it's active and transparentCorners false)

##### Type:

* String

Since:

* 1.6.2

Inherited From:

* [fabric.Object#cornerStrokeColor](fabric.Object.html#cornerStrokeColor)

Source:

* [fabric.js](fabric.js.html), [line 12188](fabric.js.html#line12188)

#### cornerStyle:String

Specify style of control, 'rect' or 'circle'

##### Type:

* String

Since:

* 1.6.2

Inherited From:

* [fabric.Object#cornerStyle](fabric.Object.html#cornerStyle)

Source:

* [fabric.js](fabric.js.html), [line 12195](fabric.js.html#line12195)

#### dirty:Boolean

When set to \`true\`, object's cache will be rerendered next render call. since 1.7.0

##### Type:

* Boolean

Inherited From:

* [fabric.Object#dirty](fabric.Object.html#dirty)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12517](fabric.js.html#line12517)

#### evented:Boolean

When set to \`false\`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

##### Type:

* Boolean

Inherited From:

* [fabric.Object#evented](fabric.Object.html#evented)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12350](fabric.js.html#line12350)

#### excludeFromExport:Boolean

When \`true\`, object is not exported in SVG or OBJECT/JSON since 1.6.3

##### Type:

* Boolean

Inherited From:

* [fabric.Object#excludeFromExport](fabric.Object.html#excludeFromExport)

Source:

* [fabric.js](fabric.js.html), [line 12477](fabric.js.html#line12477)

#### fill:String

Fill value

##### Type:

* String

Overrides:

* [fabric.Path#fill](fabric.Path.html#fill)

Source:

* [fabric.js](fabric.js.html), [line 18000](fabric.js.html#line18000)

#### fillRule:String

Fill rule used to fill an object accepted values are nonzero, evenodd **Backwards incompatibility note:** This property was used for setting globalCompositeOperation until v1.4.12 (use \`fabric.Object#globalCompositeOperation\` instead)

##### Type:

* String

Inherited From:

* [fabric.Object#fillRule](fabric.Object.html#fillRule)

Default Value:

* nonzero

Source:

* [fabric.js](fabric.js.html), [line 12238](fabric.js.html#line12238)

#### flipX:Boolean

When true, an object is rendered as flipped horizontally

##### Type:

* Boolean

Inherited From:

* [fabric.Object#flipX](fabric.Object.html#flipX)

Source:

* [fabric.js](fabric.js.html), [line 12089](fabric.js.html#line12089)

#### flipY:Boolean

When true, an object is rendered as flipped vertically

##### Type:

* Boolean

Inherited From:

* [fabric.Object#flipY](fabric.Object.html#flipY)

Source:

* [fabric.js](fabric.js.html), [line 12096](fabric.js.html#line12096)

#### globalCompositeOperation:String

Composite rule used for canvas globalCompositeOperation

##### Type:

* String

Inherited From:

* [fabric.Object#globalCompositeOperation](fabric.Object.html#globalCompositeOperation)

Default Value:

* source-over

Source:

* [fabric.js](fabric.js.html), [line 12245](fabric.js.html#line12245)

#### hasBorders:Boolean

When set to \`false\`, object's controlling borders are not rendered

##### Type:

* Boolean

Inherited From:

* [fabric.Object#hasBorders](fabric.Object.html#hasBorders)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12371](fabric.js.html#line12371)

#### hasControls:Boolean

When set to \`false\`, object's controls are not displayed and can not be used to manipulate object

##### Type:

* Boolean

Inherited From:

* [fabric.Object#hasControls](fabric.Object.html#hasControls)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12364](fabric.js.html#line12364)

#### hasRotatingPoint:Boolean

When set to \`false\`, object's controlling rotating point will not be visible or selectable

##### Type:

* Boolean

Inherited From:

* [fabric.Object#hasRotatingPoint](fabric.Object.html#hasRotatingPoint)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12378](fabric.js.html#line12378)

#### height:Number

Object height

##### Type:

* Number

Inherited From:

* [fabric.Object#height](fabric.Object.html#height)

Source:

* [fabric.js](fabric.js.html), [line 12068](fabric.js.html#line12068)

#### hoverCursor:String

Default cursor value used when hovering over this object on canvas

##### Type:

* String

Inherited From:

* [fabric.Object#hoverCursor](fabric.Object.html#hoverCursor)

Source:

* [fabric.js](fabric.js.html), [line 12145](fabric.js.html#line12145)

#### includeDefaultValues:Boolean

When \`false\`, default object's values are not included in its serialization

##### Type:

* Boolean

Inherited From:

* [fabric.Object#includeDefaultValues](fabric.Object.html#includeDefaultValues)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12399](fabric.js.html#line12399)

#### left:Number

Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}

##### Type:

* Number

Inherited From:

* [fabric.Object#left](fabric.Object.html#left)

Source:

* [fabric.js](fabric.js.html), [line 12054](fabric.js.html#line12054)

#### lockMovementX:Boolean

When \`true\`, object horizontal movement is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockMovementX](fabric.Object.html#lockMovementX)

Source:

* [fabric.js](fabric.js.html), [line 12413](fabric.js.html#line12413)

#### lockMovementY:Boolean

When \`true\`, object vertical movement is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockMovementY](fabric.Object.html#lockMovementY)

Source:

* [fabric.js](fabric.js.html), [line 12420](fabric.js.html#line12420)

#### lockRotation:Boolean

When \`true\`, object rotation is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockRotation](fabric.Object.html#lockRotation)

Source:

* [fabric.js](fabric.js.html), [line 12427](fabric.js.html#line12427)

#### lockScalingFlip:Boolean

When \`true\`, object cannot be flipped by scaling into negative values

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockScalingFlip](fabric.Object.html#lockScalingFlip)

Source:

* [fabric.js](fabric.js.html), [line 12469](fabric.js.html#line12469)

#### lockScalingX:Boolean

When \`true\`, object horizontal scaling is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockScalingX](fabric.Object.html#lockScalingX)

Source:

* [fabric.js](fabric.js.html), [line 12434](fabric.js.html#line12434)

#### lockScalingY:Boolean

When \`true\`, object vertical scaling is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockScalingY](fabric.Object.html#lockScalingY)

Source:

* [fabric.js](fabric.js.html), [line 12441](fabric.js.html#line12441)

#### lockSkewingX:Boolean

When \`true\`, object horizontal skewing is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockSkewingX](fabric.Object.html#lockSkewingX)

Source:

* [fabric.js](fabric.js.html), [line 12455](fabric.js.html#line12455)

#### lockSkewingY:Boolean

When \`true\`, object vertical skewing is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockSkewingY](fabric.Object.html#lockSkewingY)

Source:

* [fabric.js](fabric.js.html), [line 12462](fabric.js.html#line12462)

#### lockUniScaling:Boolean

When \`true\`, object non-uniform scaling is locked

##### Type:

* Boolean

Inherited From:

* [fabric.Object#lockUniScaling](fabric.Object.html#lockUniScaling)

Source:

* [fabric.js](fabric.js.html), [line 12448](fabric.js.html#line12448)

#### minScaleLimit:Number

Minimum allowed scale value of an object

##### Type:

* Number

Inherited From:

* [fabric.Object#minScaleLimit](fabric.Object.html#minScaleLimit)

Default Value:

* 0.01

Source:

* [fabric.js](fabric.js.html), [line 12335](fabric.js.html#line12335)

#### minX:Number

Minimum X from points values, necessary to offset points

##### Type:

* Number

Inherited From:

* [fabric.Path#minX](fabric.Path.html#minX)

Source:

* [fabric.js](fabric.js.html), [line 17055](fabric.js.html#line17055)

#### minY:Number

Minimum Y from points values, necessary to offset points

##### Type:

* Number

Inherited From:

* [fabric.Path#minY](fabric.Path.html#minY)

Source:

* [fabric.js](fabric.js.html), [line 17062](fabric.js.html#line17062)

#### moveCursor:String

Default cursor value used when moving this object on canvas

##### Type:

* String

Inherited From:

* [fabric.Object#moveCursor](fabric.Object.html#moveCursor)

Source:

* [fabric.js](fabric.js.html), [line 12152](fabric.js.html#line12152)

#### noScaleCache:Boolean

When \`true\`, cache does not get updated during scaling. The picture will get blocky if scaled too much and will be redrawn with correct details at the end of scaling. this setting is performance and application dependant. default to true since 1.7.0

##### Type:

* Boolean

Inherited From:

* [fabric.Object#noScaleCache](fabric.Object.html#noScaleCache)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12509](fabric.js.html#line12509)

#### objectCaching:Boolean

When \`true\`, object is cached on an additional canvas. default to true since 1.7.0

##### Type:

* Boolean

Inherited From:

* [fabric.Object#objectCaching](fabric.Object.html#objectCaching)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12486](fabric.js.html#line12486)

#### oCoords

Describe object's corner position in canvas element coordinates. properties are tl,mt,tr,ml,mr,bl,mb,br,mtr for the main controls. each property is an object with x, y and corner. The \`corner\` property contains in a similar manner the 4 points of the interactive area of the corner. The coordinates depends from this properties: width, height, scaleX, scaleY skewX, skewY, angle, strokeWidth, viewportTransform, top, left, padding. The coordinates get updated with @method setCoords. You can calculate them without updating with @method calcCoords;

Inherited From:

* [fabric.Object#oCoords](fabric.Object.html#oCoords)

Source:

* [fabric.js](fabric.js.html), [line 13964](fabric.js.html#line13964)

#### opacity:Number

Opacity of an object

##### Type:

* Number

Inherited From:

* [fabric.Object#opacity](fabric.Object.html#opacity)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 12103](fabric.js.html#line12103)

#### originX:String

Horizontal origin of transformation of an object (one of "left", "right", "center") See http://jsfiddle.net/1ow02gea/40/ on how originX/originY affect objects in groups

##### Type:

* String

Inherited From:

* [fabric.Object#originX](fabric.Object.html#originX)

Default Value:

* left

Source:

* [fabric.js](fabric.js.html), [line 12032](fabric.js.html#line12032)

#### originY:String

Vertical origin of transformation of an object (one of "top", "bottom", "center") See http://jsfiddle.net/1ow02gea/40/ on how originX/originY affect objects in groups

##### Type:

* String

Inherited From:

* [fabric.Object#originY](fabric.Object.html#originY)

Default Value:

* top

Source:

* [fabric.js](fabric.js.html), [line 12040](fabric.js.html#line12040)

#### padding:Number

Padding between object and its controlling borders (in pixels)

##### Type:

* Number

Inherited From:

* [fabric.Object#padding](fabric.Object.html#padding)

Source:

* [fabric.js](fabric.js.html), [line 12159](fabric.js.html#line12159)

#### path:[Array](Array.html)

Array of path points

##### Type:

* [Array](Array.html)

Inherited From:

* [fabric.Path#path](fabric.Path.html#path)

Source:

* [fabric.js](fabric.js.html), [line 17048](fabric.js.html#line17048)

#### perPixelTargetFind:Boolean

When set to \`true\`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

##### Type:

* Boolean

Inherited From:

* [fabric.Object#perPixelTargetFind](fabric.Object.html#perPixelTargetFind)

Source:

* [fabric.js](fabric.js.html), [line 12392](fabric.js.html#line12392)

#### rotatingPointOffset:Number

Offset for object's controlling rotating point (when enabled via \`hasRotatingPoint\`)

##### Type:

* Number

Inherited From:

* [fabric.Object#rotatingPointOffset](fabric.Object.html#rotatingPointOffset)

Default Value:

* 40

Source:

* [fabric.js](fabric.js.html), [line 12385](fabric.js.html#line12385)

#### scaleX:Number

Object scale factor (horizontal)

##### Type:

* Number

Inherited From:

* [fabric.Object#scaleX](fabric.Object.html#scaleX)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 12075](fabric.js.html#line12075)

#### scaleY:Number

Object scale factor (vertical)

##### Type:

* Number

Inherited From:

* [fabric.Object#scaleY](fabric.Object.html#scaleY)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 12082](fabric.js.html#line12082)

#### selectable:Boolean

When set to \`false\`, an object can not be selected for modification (using either point-click-based or group-based selection). But events still fire on it.

##### Type:

* Boolean

Inherited From:

* [fabric.Object#selectable](fabric.Object.html#selectable)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12343](fabric.js.html#line12343)

#### selectionBackgroundColor:String

Selection Background color of an object. colored layer behind the object when it is active. does not mix good with globalCompositeOperation methods.

##### Type:

* String

Inherited From:

* [fabric.Object#selectionBackgroundColor](fabric.Object.html#selectionBackgroundColor)

Source:

* [fabric.js](fabric.js.html), [line 12260](fabric.js.html#line12260)

#### shadow:[fabric.Shadow](fabric.Shadow.html)

Shadow object representing shadow of this shape

##### Type:

* [fabric.Shadow](fabric.Shadow.html)

Inherited From:

* [fabric.Object#shadow](fabric.Object.html#shadow)

Source:

* [fabric.js](fabric.js.html), [line 12308](fabric.js.html#line12308)

#### skewX:Number

Angle of skew on x axes of an object (in degrees)

##### Type:

* Number

Inherited From:

* [fabric.Object#skewX](fabric.Object.html#skewX)

Source:

* [fabric.js](fabric.js.html), [line 12117](fabric.js.html#line12117)

#### skewY:Number

Angle of skew on y axes of an object (in degrees)

##### Type:

* Number

Inherited From:

* [fabric.Object#skewY](fabric.Object.html#skewY)

Source:

* [fabric.js](fabric.js.html), [line 12124](fabric.js.html#line12124)

#### statefullCache:Boolean

When \`true\`, object properties are checked for cache invalidation. In some particular situation you may want this to be disabled ( spray brush, very big pathgroups, groups) or if your application does not allow you to modify properties for groups child you want to disable it for groups. default to false since 1.7.0

##### Type:

* Boolean

Inherited From:

* [fabric.Object#statefullCache](fabric.Object.html#statefullCache)

Default Value:

* false

Source:

* [fabric.js](fabric.js.html), [line 12498](fabric.js.html#line12498)

#### stateProperties:[Array](Array.html)

List of properties to consider when checking if state of an object is changed (fabric.Object#hasStateChanged) as well as for history (undo/redo) purposes

##### Type:

* [Array](Array.html)

Inherited From:

* [fabric.Object#stateProperties](fabric.Object.html#stateProperties)

Source:

* [fabric.js](fabric.js.html), [line 12525](fabric.js.html#line12525)

#### stroke:String

When defined, an object is rendered via stroke and this property specifies its color

##### Type:

* String

Inherited From:

* [fabric.Object#stroke](fabric.Object.html#stroke)

Source:

* [fabric.js](fabric.js.html), [line 12267](fabric.js.html#line12267)

#### strokeDashArray:[Array](Array.html)

Array specifying dash pattern of an object's stroke (stroke must be defined)

##### Type:

* [Array](Array.html)

Inherited From:

* [fabric.Object#strokeDashArray](fabric.Object.html#strokeDashArray)

Source:

* [fabric.js](fabric.js.html), [line 12280](fabric.js.html#line12280)

#### strokeLineCap:String

Line endings style of an object's stroke (one of "butt", "round", "square")

##### Type:

* String

Inherited From:

* [fabric.Object#strokeLineCap](fabric.Object.html#strokeLineCap)

Default Value:

* butt

Source:

* [fabric.js](fabric.js.html), [line 12287](fabric.js.html#line12287)

#### strokeLineJoin:String

Corner style of an object's stroke (one of "bevil", "round", "miter")

##### Type:

* String

Inherited From:

* [fabric.Object#strokeLineJoin](fabric.Object.html#strokeLineJoin)

Default Value:

* miter

Source:

* [fabric.js](fabric.js.html), [line 12294](fabric.js.html#line12294)

#### strokeMiterLimit:Number

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

##### Type:

* Number

Inherited From:

* [fabric.Object#strokeMiterLimit](fabric.Object.html#strokeMiterLimit)

Default Value:

* 10

Source:

* [fabric.js](fabric.js.html), [line 12301](fabric.js.html#line12301)

#### strokeWidth:Number

Width of a stroke used to render this object

##### Type:

* Number

Inherited From:

* [fabric.Object#strokeWidth](fabric.Object.html#strokeWidth)

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 12274](fabric.js.html#line12274)

#### top:Number

Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}

##### Type:

* Number

Inherited From:

* [fabric.Object#top](fabric.Object.html#top)

Source:

* [fabric.js](fabric.js.html), [line 12047](fabric.js.html#line12047)

#### transformMatrix:[Array](Array.html)

Transform matrix (similar to SVG's transform matrix)

##### Type:

* [Array](Array.html)

Inherited From:

* [fabric.Object#transformMatrix](fabric.Object.html#transformMatrix)

Source:

* [fabric.js](fabric.js.html), [line 12328](fabric.js.html#line12328)

#### transparentCorners:Boolean

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

##### Type:

* Boolean

Inherited From:

* [fabric.Object#transparentCorners](fabric.Object.html#transparentCorners)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12138](fabric.js.html#line12138)

#### type:String

Type of an object

##### Type:

* String

Overrides:

* [fabric.Path#type](fabric.Path.html#type)

Default Value:

* path-group

Source:

* [fabric.js](fabric.js.html), [line 17993](fabric.js.html#line17993)

#### visible:Boolean

When set to \`false\`, an object is not rendered on canvas

##### Type:

* Boolean

Inherited From:

* [fabric.Object#visible](fabric.Object.html#visible)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 12357](fabric.js.html#line12357)

#### width:Number

Object width

##### Type:

* Number

Inherited From:

* [fabric.Object#width](fabric.Object.html#width)

Source:

* [fabric.js](fabric.js.html), [line 12061](fabric.js.html#line12061)

### Methods

#### (static)fromObject(object, callbackopt)

Creates fabric.PathGroup instance from an object representation

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|Object|Object to create an instance from|
|`callback`|function|optional|Callback to invoke when an fabric.PathGroup instance is created|

Source:

* [fabric.js](fabric.js.html), [line 18272](fabric.js.html#line18272)

#### \_calcRotateMatrix()&rarr; {[Array](Array.html)}

calculate rotation matrix of an object

Inherited From:

* [fabric.Object#\_calcRotateMatrix](fabric.Object.html#_calcRotateMatrix)

Source:

* [fabric.js](fabric.js.html), [line 14385](fabric.js.html#line14385)

##### Returns:

rotation matrix for the object

Type

[Array](Array.html)

#### \_limitCacheSize(dims)&rarr; {Object|Object|Object|Object}

Limit the cache dimensions so that X \* Y do not cross fabric.perfLimitSizeTotal and each side do not cross fabric.cacheSideLimit those numbers are configurable so that you can get as much detail as you want making bargain with performances.

##### Parameters:
|Name|Type|Description| |
|`dims`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"width of canvas/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"height of canvas/td        /tr            tr                            td class="name"codezoomX/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"zoomX zoom value to unscale the canvas before drawing cache/td        /tr            tr                            td class="name"codezoomY/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"zoomY zoom value to unscale the canvas before drawing cache/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#\_limitCacheSize](fabric.Object.html#_limitCacheSize)

Source:

* [fabric.js](fabric.js.html), [line 12578](fabric.js.html#line12578)

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

#### \_renderControls(ctx)

Renders controls and borders for the object

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|

Inherited From:

* [fabric.Object#\_renderControls](fabric.Object.html#_renderControls)

Source:

* [fabric.js](fabric.js.html), [line 13121](fabric.js.html#line13121)

#### \_set(prop, value)&rarr; {[fabric.PathGroup](fabric.PathGroup.html)}

Sets certain property to a certain value

##### Parameters:
|Name|Type|Description| |
|`prop`|String|
|`value`|\*|

Overrides:

* fabric.Path#\_set

Source:

* [fabric.js](fabric.js.html), [line 18150](fabric.js.html#line18150)

##### Returns:

thisArg

Type

[fabric.PathGroup](fabric.PathGroup.html)

#### \_setupCompositeOperation(ctx)

Sets canvas globalCompositeOperation for specific object custom composition operation for the particular object can be specifed using globalCompositeOperation property

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Rendering canvas context|

Inherited From:

* [fabric.Object#\_setupCompositeOperation](fabric.Object.html#_setupCompositeOperation)

Source:

* [fabric.js](fabric.js.html), [line 13610](fabric.js.html#line13610)

#### adjustPosition(to)

##### Parameters:
|Name|Type|Description| |
|`to`|String|One of 'left', 'center', 'right'|

Inherited From:

* [fabric.Object#adjustPosition](fabric.Object.html#adjustPosition)

Source:

* [fabric.js](fabric.js.html), [line 13853](fabric.js.html#line13853)

#### animate(property, value)&rarr; {[fabric.Object](fabric.Object.html)}

Animates object's properties

##### Parameters:
|Name|Type|Description| |
|`property`|String | Object|Property to animate (if string) or properties to animate (if object)|
|`value`|Number | Object|Value to animate property to (if string was given first) or options object|

Inherited From:

* [fabric.Object#animate](fabric.Object.html#animate)

Source:

* [fabric.js](fabric.js.html), [line 15375](fabric.js.html#line15375)

Tutorials:

* *Tutorial: [http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)*

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### bringForward(intersectingopt)&rarr; {[fabric.Object](fabric.Object.html)}

Moves an object up in stack of drawn objects

##### Parameters:
|Name|Type|Attributes|Description| |
|`intersecting`|Boolean|optional|If \`true\`, send object in front of next upper intersecting object|

Inherited From:

* [fabric.Object#bringForward](fabric.Object.html#bringForward)

Source:

* [fabric.js](fabric.js.html), [line 14562](fabric.js.html#line14562)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### bringToFront()&rarr; {[fabric.Object](fabric.Object.html)}

Moves an object to the top of the stack of drawn objects

Inherited From:

* [fabric.Object#bringToFront](fabric.Object.html#bringToFront)

Source:

* [fabric.js](fabric.js.html), [line 14530](fabric.js.html#line14530)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### calcCoords()&rarr; {Object}

Calculate and returns the .coords of an object.

Inherited From:

* [fabric.Object#calcCoords](fabric.Object.html#calcCoords)

Source:

* [fabric.js](fabric.js.html), [line 14304](fabric.js.html#line14304)

##### Returns:

Object with tl, tr, br, bl ....

Type

Object

#### calcTransformMatrix(skipGroupopt)&rarr; {[Array](Array.html)}

calculate trasform Matrix that represent current transformation from object properties.

##### Parameters:
|Name|Type|Attributes|Description| |
|`skipGroup`|Boolean|optional|return transformMatrix for object and not go upward with parents|

Inherited From:

* [fabric.Object#calcTransformMatrix](fabric.Object.html#calcTransformMatrix)

Source:

* [fabric.js](fabric.js.html), [line 14403](fabric.js.html#line14403)

##### Returns:

matrix Transform Matrix for the object

Type

[Array](Array.html)

#### center()&rarr; {[fabric.Object](fabric.Object.html)}

Centers object vertically and horizontally on canvas to which is was added last You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#center](fabric.Object.html#center)

Source:

* [fabric.js](fabric.js.html), [line 13559](fabric.js.html#line13559)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### centerH()&rarr; {[fabric.Object](fabric.Object.html)}

Centers object horizontally on canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#centerH](fabric.Object.html#centerH)

Source:

* [fabric.js](fabric.js.html), [line 13515](fabric.js.html#line13515)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### centerV()&rarr; {[fabric.Object](fabric.Object.html)}

Centers object vertically on canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#centerV](fabric.Object.html#centerV)

Source:

* [fabric.js](fabric.js.html), [line 13537](fabric.js.html#line13537)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### clone(callback, propertiesToIncludeopt)&rarr; {[fabric.Object](fabric.Object.html)}

Clones an instance, some objects are async, so using callback method will work for every object. Using the direct return does not work for images and groups.

##### Parameters:
|Name|Type|Attributes|Description| |
|`callback`|function|Callback is invoked with a clone as a first argument|
|`propertiesToInclude`|[Array](Array.html)|optional|Any properties that you might want to additionally include in the output|

Inherited From:

* [fabric.Object#clone](fabric.Object.html#clone)

Source:

* [fabric.js](fabric.js.html), [line 13250](fabric.js.html#line13250)

##### Returns:

clone of an instance

Type

[fabric.Object](fabric.Object.html)

#### cloneAsImage(callback, optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}

Creates an instance of fabric.Image out of an object

##### Parameters:
|Name|Type|Attributes|Description| |
|`callback`|function|callback, invoked with an instance as a first argument|
|`options`|Object|optional|for clone as image, passed to toDataURL
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeenableRetinaScaling/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"enable retina scaling for the cloned image/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#cloneAsImage](fabric.Object.html#cloneAsImage)

Source:

* [fabric.js](fabric.js.html), [line 13264](fabric.js.html#line13264)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### complexity()&rarr; {Number}

Returns number representation of object's complexity

Overrides:

* [fabric.Path#complexity](fabric.Path.html#complexity)

Source:

* [fabric.js](fabric.js.html), [line 18250](fabric.js.html#line18250)

##### Returns:

complexity

Type

Number

#### containsPoint(point, linesopt, absoluteopt, calculateopt)&rarr; {Boolean}

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

* [fabric.js](fabric.js.html), [line 14074](fabric.js.html#line14074)

##### Returns:

true if point is inside the object

Type

Boolean

#### drawBorders(ctx)&rarr; {[fabric.Object](fabric.Object.html)}

Draws borders of an object's bounding box. Requires public properties: width, height Requires public options: padding, borderColor

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to draw on|

Inherited From:

* [fabric.Object#drawBorders](fabric.Object.html#drawBorders)

Source:

* [fabric.js](fabric.js.html), [line 14986](fabric.js.html#line14986)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### drawBordersInGroup(ctx, options)&rarr; {[fabric.Object](fabric.Object.html)}

Draws borders of an object's bounding box when it is inside a group. Requires public properties: width, height Requires public options: padding, borderColor

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to draw on|
|`options`|object|object representing current object parameters|

Inherited From:

* [fabric.Object#drawBordersInGroup](fabric.Object.html#drawBordersInGroup)

Source:

* [fabric.js](fabric.js.html), [line 15031](fabric.js.html#line15031)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### drawCacheOnCanvas(ctx)

Paint the cached copy of the object on the target context.

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|

Inherited From:

* [fabric.Object#drawCacheOnCanvas](fabric.Object.html#drawCacheOnCanvas)

Source:

* [fabric.js](fabric.js.html), [line 13012](fabric.js.html#line13012)

#### drawControls(ctx)&rarr; {[fabric.Object](fabric.Object.html)}

Draws corners of an object's bounding box. Requires public properties: width, height Requires public options: cornerSize, padding

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to draw on|

Inherited From:

* [fabric.Object#drawControls](fabric.Object.html#drawControls)

Source:

* [fabric.js](fabric.js.html), [line 15066](fabric.js.html#line15066)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### drawObject(ctx, noTransformopt)

Execute the drawing operation for an object on a specified context

##### Parameters:
|Name|Type|Attributes|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|
|`noTransform`|Boolean|optional|When true, context is not transformed|

Overrides:

* [fabric.Path#drawObject](fabric.Path.html#drawObject)

Source:

* [fabric.js](fabric.js.html), [line 18067](fabric.js.html#line18067)

#### drawSelectionBackground(ctx)&rarr; {[fabric.Object](fabric.Object.html)}

Draws a colored layer behind the object, inside its selection borders. Requires public options: padding, selectionBackgroundColor this function is called when the context is transformed has checks to be skipped when the object is on a staticCanvas

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to draw on|

Inherited From:

* [fabric.Object#drawSelectionBackground](fabric.Object.html#drawSelectionBackground)

Source:

* [fabric.js](fabric.js.html), [line 14961](fabric.js.html#line14961)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### fxStraighten(callbacks)&rarr; {[fabric.Object](fabric.Object.html)}

Same as fabric.Object.prototype.straighten but with animation

##### Parameters:
|Name|Type|Description| |
|`callbacks`|Object|Object with callback functions
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeonComplete/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on completion/td        /tr            tr                            td class="name"codeonChange/code/td                        td class="type"                            span class="param-type"function/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"Invoked on every step of animation/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#fxStraighten](fabric.Object.html#fxStraighten)

Source:

* [fabric.js](fabric.js.html), [line 19682](fabric.js.html#line19682)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### getAngle()&rarr; {Number}

Retrieves object's [angle](fabric.Object.html#angle) (in degrees)

Inherited From:

* [fabric.Object#getAngle](fabric.Object.html#getAngle)

Source:

* [fabric.js](fabric.js.html), [line 11914](fabric.js.html#line11914)

##### Returns:

Type

Number

#### getBoundingRect(absoluteopt, calculateopt)&rarr; {Object}

Returns coordinates of object's bounding rectangle (left, top, width, height) the box is intented as aligned to axis of canvas.

##### Parameters:
|Name|Type|Attributes|Description| |
|`absolute`|Boolean|optional|use coordinates without viewportTransform|
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#getBoundingRect](fabric.Object.html#getBoundingRect)

Source:

* [fabric.js](fabric.js.html), [line 14215](fabric.js.html#line14215)

##### Returns:

Object with left, top, width, height properties

Type

Object

#### getBoundingRectHeight()&rarr; {Number}

Returns height of an object's bounding rectangle

Inherited From:

* [fabric.Object#getBoundingRectHeight](fabric.Object.html#getBoundingRectHeight)

Deprecated:

* since 1.0.4

Source:

* [fabric.js](fabric.js.html), [line 14204](fabric.js.html#line14204)

##### Returns:

height value

Type

Number

#### getBoundingRectWidth()&rarr; {Number}

Returns width of an object's bounding rectangle

Inherited From:

* [fabric.Object#getBoundingRectWidth](fabric.Object.html#getBoundingRectWidth)

Deprecated:

* since 1.0.4

Source:

* [fabric.js](fabric.js.html), [line 14195](fabric.js.html#line14195)

##### Returns:

width value

Type

Number

#### getCenterPoint()&rarr; {[fabric.Point](fabric.Point.html)}

Returns the real center coordinates of the object

Inherited From:

* [fabric.Object#getCenterPoint](fabric.Object.html#getCenterPoint)

Source:

* [fabric.js](fabric.js.html), [line 13776](fabric.js.html#line13776)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### getClipTo()&rarr; {function}

Retrieves object's [clipping function](fabric.Object.html#clipTo)

Inherited From:

* [fabric.Object#getClipTo](fabric.Object.html#getClipTo)

Source:

* [fabric.js](fabric.js.html), [line 11763](fabric.js.html#line11763)

##### Returns:

Type

function

#### getCoords()

return correct set of coordinates for intersection

Inherited From:

* [fabric.Object#getCoords](fabric.Object.html#getCoords)

Source:

* [fabric.js](fabric.js.html), [line 13983](fabric.js.html#line13983)

#### getFill()&rarr; {String}

Retrieves object's [fill](fabric.Object.html#fill)

Inherited From:

* [fabric.Object#getFill](fabric.Object.html#getFill)

Source:

* [fabric.js](fabric.js.html), [line 11882](fabric.js.html#line11882)

##### Returns:

Fill value

Type

String

#### getFlipX()&rarr; {Boolean}

Retrieves object's [flipX](fabric.Object.html#flipX) value

Inherited From:

* [fabric.Object#getFlipX](fabric.Object.html#getFlipX)

Source:

* [fabric.js](fabric.js.html), [line 11985](fabric.js.html#line11985)

##### Returns:

flipX value

Type

Boolean

#### getFlipY()&rarr; {Boolean}

Retrieves object's [flipY](fabric.Object.html#flipY) value

Inherited From:

* [fabric.Object#getFlipY](fabric.Object.html#getFlipY)

Source:

* [fabric.js](fabric.js.html), [line 12001](fabric.js.html#line12001)

##### Returns:

flipY value

Type

Boolean

#### getHeight()&rarr; {Number}

Returns height of an object bounding box counting transformations to be renamed in 2.0

Inherited From:

* [fabric.Object#getHeight](fabric.Object.html#getHeight)

Source:

* [fabric.js](fabric.js.html), [line 14233](fabric.js.html#line14233)

##### Returns:

height value

Type

Number

#### getLeft()&rarr; {Number}

Retrieves object's [left position](fabric.Object.html#left)

Inherited From:

* [fabric.Object#getLeft](fabric.Object.html#getLeft)

Source:

* [fabric.js](fabric.js.html), [line 11937](fabric.js.html#line11937)

##### Returns:

Left value (in pixels)

Type

Number

#### getLocalPointer(e, pointeropt)&rarr; {Object}

Returns coordinates of a pointer relative to an object

##### Parameters:
|Name|Type|Attributes|Description| |
|`e`|Event|Event to operate upon|
|`pointer`|Object|optional|Pointer to operate upon (instead of event)|

Inherited From:

* [fabric.Object#getLocalPointer](fabric.Object.html#getLocalPointer)

Source:

* [fabric.js](fabric.js.html), [line 13591](fabric.js.html#line13591)

##### Returns:

Coordinates of a pointer (x, y)

Type

Object

#### getObjects()&rarr; {[Array](Array.html)}

Returns all paths in this path group

Source:

* [fabric.js](fabric.js.html), [line 18260](fabric.js.html#line18260)

##### Returns:

array of path objects included in this path group

Type

[Array](Array.html)

#### getObjectScaling()&rarr; {Object}

Return the object scale factor counting also the group scaling

Inherited From:

* [fabric.Object#getObjectScaling](fabric.Object.html#getObjectScaling)

Source:

* [fabric.js](fabric.js.html), [line 12811](fabric.js.html#line12811)

##### Returns:

object with scaleX and scaleY properties

Type

Object

#### getOpacity()&rarr; {Number}

Retrieves object's [opacity](fabric.Object.html#opacity)

Inherited From:

* [fabric.Object#getOpacity](fabric.Object.html#getOpacity)

Source:

* [fabric.js](fabric.js.html), [line 11898](fabric.js.html#line11898)

##### Returns:

Opacity value (0-1)

Type

Number

#### getOriginX()&rarr; {String}

Retrieves object's [originX](fabric.Object.html#originX)

Inherited From:

* [fabric.Object#getOriginX](fabric.Object.html#getOriginX)

Source:

* [fabric.js](fabric.js.html), [line 11850](fabric.js.html#line11850)

##### Returns:

originX value

Type

String

#### getOriginY()&rarr; {String}

Retrieves object's [originY](fabric.Object.html#originY)

Inherited From:

* [fabric.Object#getOriginY](fabric.Object.html#getOriginY)

Source:

* [fabric.js](fabric.js.html), [line 11866](fabric.js.html#line11866)

##### Returns:

originY value

Type

String

#### getPointByOrigin(originX, originY)&rarr; {[fabric.Point](fabric.Point.html)}

Returns the coordinates of the object as if it has a different origin

##### Parameters:
|Name|Type|Description| |
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#getPointByOrigin](fabric.Object.html#getPointByOrigin)

Source:

* [fabric.js](fabric.js.html), [line 13796](fabric.js.html#line13796)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### getScaleX()&rarr; {Number}

Retrieves object's [scaleX](fabric.Object.html#scaleX) value

Inherited From:

* [fabric.Object#getScaleX](fabric.Object.html#getScaleX)

Source:

* [fabric.js](fabric.js.html), [line 11953](fabric.js.html#line11953)

##### Returns:

scaleX value

Type

Number

#### getScaleY()&rarr; {Number}

Retrieves object's [scaleY](fabric.Object.html#scaleY) value

Inherited From:

* [fabric.Object#getScaleY](fabric.Object.html#getScaleY)

Source:

* [fabric.js](fabric.js.html), [line 11969](fabric.js.html#line11969)

##### Returns:

scaleY value

Type

Number

#### getShadow()&rarr; {Object}

Retrieves object's [shadow](fabric.Object.html#shadow)

Inherited From:

* [fabric.Object#getShadow](fabric.Object.html#getShadow)

Source:

* [fabric.js](fabric.js.html), [line 11811](fabric.js.html#line11811)

##### Returns:

Shadow instance

Type

Object

#### getStroke()&rarr; {String}

Retrieves object's [stroke](fabric.Object.html#stroke)

Inherited From:

* [fabric.Object#getStroke](fabric.Object.html#getStroke)

Source:

* [fabric.js](fabric.js.html), [line 11818](fabric.js.html#line11818)

##### Returns:

stroke value

Type

String

#### getStrokeWidth()&rarr; {Number}

Retrieves object's [strokeWidth](fabric.Object.html#strokeWidth)

Inherited From:

* [fabric.Object#getStrokeWidth](fabric.Object.html#getStrokeWidth)

Source:

* [fabric.js](fabric.js.html), [line 11834](fabric.js.html#line11834)

##### Returns:

strokeWidth value

Type

Number

#### getSvgFilter()&rarr; {String}

Returns filter for svg shadow

Inherited From:

* [fabric.Object#getSvgFilter](fabric.Object.html#getSvgFilter)

Source:

* [fabric.js](fabric.js.html), [line 14651](fabric.js.html#line14651)

##### Returns:

Type

String

#### getSvgId()&rarr; {String}

Returns id attribute for svg output

Inherited From:

* [fabric.Object#getSvgId](fabric.Object.html#getSvgId)

Source:

* [fabric.js](fabric.js.html), [line 14659](fabric.js.html#line14659)

##### Returns:

Type

String

#### getSvgStyles(skipShadow)&rarr; {String}

Returns styles-string for svg-export

##### Parameters:
|Name|Type|Description| |
|`skipShadow`|Boolean|a boolean to skip shadow filter output|

Inherited From:

* [fabric.Object#getSvgStyles](fabric.Object.html#getSvgStyles)

Source:

* [fabric.js](fabric.js.html), [line 14618](fabric.js.html#line14618)

##### Returns:

Type

String

#### getSvgTransform()&rarr; {String}

Returns transform-string for svg-export

Inherited From:

* [fabric.Object#getSvgTransform](fabric.Object.html#getSvgTransform)

Source:

* [fabric.js](fabric.js.html), [line 14667](fabric.js.html#line14667)

##### Returns:

Type

String

#### getSvgTransformMatrix()&rarr; {String}

Returns transform-string for svg-export from the transform matrix of single elements

Inherited From:

* [fabric.Object#getSvgTransformMatrix](fabric.Object.html#getSvgTransformMatrix)

Source:

* [fabric.js](fabric.js.html), [line 14718](fabric.js.html#line14718)

##### Returns:

Type

String

#### getTop()&rarr; {Number}

Retrieves object's [top position](fabric.Object.html#top)

Inherited From:

* [fabric.Object#getTop](fabric.Object.html#getTop)

Source:

* [fabric.js](fabric.js.html), [line 11921](fabric.js.html#line11921)

##### Returns:

Top value (in pixels)

Type

Number

#### getTransformMatrix()&rarr; {[Array](Array.html)}

Retrieves object's [transformMatrix](fabric.Object.html#transformMatrix)

Inherited From:

* [fabric.Object#getTransformMatrix](fabric.Object.html#getTransformMatrix)

Source:

* [fabric.js](fabric.js.html), [line 11779](fabric.js.html#line11779)

##### Returns:

transformMatrix

Type

[Array](Array.html)

#### getViewportTransform()&rarr; {Boolean}

Retrieves viewportTransform from Object's canvas if possible

Inherited From:

* [fabric.Object#getViewportTransform](fabric.Object.html#getViewportTransform)

Source:

* [fabric.js](fabric.js.html), [line 12889](fabric.js.html#line12889)

##### Returns:

Type

Boolean

#### getVisible()&rarr; {Boolean}

Retrieves object's [visible](fabric.Object.html#visible) state

Inherited From:

* [fabric.Object#getVisible](fabric.Object.html#getVisible)

Source:

* [fabric.js](fabric.js.html), [line 11795](fabric.js.html#line11795)

##### Returns:

True if visible

Type

Boolean

#### getWidth()&rarr; {Number}

Returns width of an object bounding box counting transformations

Inherited From:

* [fabric.Object#getWidth](fabric.Object.html#getWidth)

Source:

* [fabric.js](fabric.js.html), [line 14224](fabric.js.html#line14224)

##### Returns:

width value

Type

Number

#### hasStateChanged(propertySetopt)&rarr; {Boolean}

Returns true if object state (one of its state properties) was changed

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertySet`|String|optional|optional name for the set of property we want to save|

Inherited From:

* [fabric.Object#hasStateChanged](fabric.Object.html#hasStateChanged)

Source:

* [fabric.js](fabric.js.html), [line 14799](fabric.js.html#line14799)

##### Returns:

true if instance' state has changed since \`[fabric.Object#saveState](fabric.Object.html#saveState)\` was called

Type

Boolean

#### initialize(paths, optionsopt)&rarr; {[fabric.PathGroup](fabric.PathGroup.html)}

Constructor

##### Parameters:
|Name|Type|Attributes|Description| |
|`paths`|[Array](Array.html)|
|`options`|Object|optional|Options object|

Overrides:

* [fabric.Path#initialize](fabric.Path.html#initialize)

Source:

* [fabric.js](fabric.js.html), [line 18015](fabric.js.html#line18015)

##### Returns:

thisArg

Type

[fabric.PathGroup](fabric.PathGroup.html)

#### intersectsWithObject(other, absoluteopt, calculateopt)&rarr; {Boolean}

Checks if object intersects with another object

##### Parameters:
|Name|Type|Attributes|Description| |
|`other`|Object|Object to test|
|`absolute`|Boolean|optional|use coordinates without viewportTransform|
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#intersectsWithObject](fabric.Object.html#intersectsWithObject)

Source:

* [fabric.js](fabric.js.html), [line 14016](fabric.js.html#line14016)

##### Returns:

true if object intersects with another object

Type

Boolean

#### intersectsWithRect(pointTL, pointBR, absoluteopt, calculateopt)&rarr; {Boolean}

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

* [fabric.js](fabric.js.html), [line 13999](fabric.js.html#line13999)

##### Returns:

true if object intersects with an area formed by 2 points

Type

Boolean

#### isCacheDirty()

Check if cache is dirty

Overrides:

* [fabric.Path#isCacheDirty](fabric.Path.html#isCacheDirty)

Source:

* [fabric.js](fabric.js.html), [line 18125](fabric.js.html#line18125)

#### isCaching()&rarr; {Boolean}

Check if this group or its parent group are caching, recursively up

Source:

* [fabric.js](fabric.js.html), [line 18118](fabric.js.html#line18118)

##### Returns:

Type

Boolean

#### isContainedWithinObject(other, absoluteopt, calculateopt)&rarr; {Boolean}

Checks if object is fully contained within area of another object

##### Parameters:
|Name|Type|Attributes|Description| |
|`other`|Object|Object to test|
|`absolute`|Boolean|optional|use coordinates without viewportTransform|
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#isContainedWithinObject](fabric.Object.html#isContainedWithinObject)

Source:

* [fabric.js](fabric.js.html), [line 14034](fabric.js.html#line14034)

##### Returns:

true if object is fully contained within area of another object

Type

Boolean

#### isContainedWithinRect(pointTL, pointBR, absoluteopt, calculateopt)&rarr; {Boolean}

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

* [fabric.js](fabric.js.html), [line 14055](fabric.js.html#line14055)

##### Returns:

true if object is fully contained within area formed by 2 points

Type

Boolean

#### isControlVisible(controlName)&rarr; {Boolean}

Returns true if the specified control is visible, false otherwise.

##### Parameters:
|Name|Type|Description| |
|`controlName`|String|The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.|

Inherited From:

* [fabric.Object#isControlVisible](fabric.Object.html#isControlVisible)

Source:

* [fabric.js](fabric.js.html), [line 15172](fabric.js.html#line15172)

##### Returns:

true if the specified control is visible, false otherwise

Type

Boolean

#### isOnScreen(calculateopt)&rarr; {Boolean}

Checks if object is contained within the canvas with current viewportTransform the check is done stopping at first point that appear on screen

##### Parameters:
|Name|Type|Attributes|Description| |
|`calculate`|Boolean|optional|use coordinates of current position instead of .oCoords|

Inherited From:

* [fabric.Object#isOnScreen](fabric.Object.html#isOnScreen)

Source:

* [fabric.js](fabric.js.html), [line 14090](fabric.js.html#line14090)

##### Returns:

true if object is fully contained within canvas

Type

Boolean

#### isSameColor()&rarr; {Boolean}

Returns true if all paths in this group are of same color

Source:

* [fabric.js](fabric.js.html), [line 18234](fabric.js.html#line18234)

##### Returns:

true if all paths are of the same color (\`fill\`)

Type

Boolean

#### isType(type)&rarr; {Boolean}

Returns true if specified type is identical to the type of an instance

##### Parameters:
|Name|Type|Description| |
|`type`|String|Type to check against|

Inherited From:

* [fabric.Object#isType](fabric.Object.html#isType)

Source:

* [fabric.js](fabric.js.html), [line 13333](fabric.js.html#line13333)

##### Returns:

Type

Boolean

#### moveTo(index)&rarr; {[fabric.Object](fabric.Object.html)}

Moves an object to specified level in stack of drawn objects

##### Parameters:
|Name|Type|Description| |
|`index`|Number|New position of object|

Inherited From:

* [fabric.Object#moveTo](fabric.Object.html#moveTo)

Source:

* [fabric.js](fabric.js.html), [line 14578](fabric.js.html#line14578)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### needsItsOwnCache()

When returns \`true\`, force the object to have its own cache, even if it is inside a group it may be needed when your object behave in a particular way on the cache and always needs its own isolated canvas to render correctly. This function is created to be subclassed by custom classes. since 1.7.12

Inherited From:

* [fabric.Object#needsItsOwnCache](fabric.Object.html#needsItsOwnCache)

Source:

* [fabric.js](fabric.js.html), [line 12969](fabric.js.html#line12969)

##### Returns:

false

#### onDeselect()

Callback; invoked right before object is about to go from active to inactive

Inherited From:

* [fabric.Object#onDeselect](fabric.Object.html#onDeselect)

Source:

* [fabric.js](fabric.js.html), [line 13928](fabric.js.html#line13928)

#### parseDimensionsFromPaths()

Calculate width and height based on paths contained

Source:

* [fabric.js](fabric.js.html), [line 18035](fabric.js.html#line18035)

#### remove()&rarr; {[fabric.Object](fabric.Object.html)}

Removes object from canvas to which it was added last

Inherited From:

* [fabric.Object#remove](fabric.Object.html#remove)

Source:

* [fabric.js](fabric.js.html), [line 13580](fabric.js.html#line13580)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### render(ctx, noTransformopt)

Renders an object on a specified context

##### Parameters:
|Name|Type|Attributes|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|
|`noTransform`|Boolean|optional|When true, context is not transformed|

Inherited From:

* [fabric.Object#render](fabric.Object.html#render)

Source:

* [fabric.js](fabric.js.html), [line 12917](fabric.js.html#line12917)

#### saveState(optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}

Saves state of an object

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Object with additional \`stateProperties\` array to include when saving state|

Inherited From:

* [fabric.Object#saveState](fabric.Object.html#saveState)

Source:

* [fabric.js](fabric.js.html), [line 14813](fabric.js.html#line14813)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### scale(value)&rarr; {[fabric.Object](fabric.Object.html)}

Scales an object (equally by x and y)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|Scale factor|

Inherited From:

* [fabric.Object#scale](fabric.Object.html#scale)

Source:

* [fabric.js](fabric.js.html), [line 14261](fabric.js.html#line14261)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### scaleToHeight(value)&rarr; {[fabric.Object](fabric.Object.html)}

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|New height value|

Inherited From:

* [fabric.Object#scaleToHeight](fabric.Object.html#scaleToHeight)

Source:

* [fabric.js](fabric.js.html), [line 14293](fabric.js.html#line14293)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### scaleToWidth(value)&rarr; {[fabric.Object](fabric.Object.html)}

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|New width value|

Inherited From:

* [fabric.Object#scaleToWidth](fabric.Object.html#scaleToWidth)

Source:

* [fabric.js](fabric.js.html), [line 14281](fabric.js.html#line14281)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### sendBackwards(intersectingopt)&rarr; {[fabric.Object](fabric.Object.html)}

Moves an object down in stack of drawn objects

##### Parameters:
|Name|Type|Attributes|Description| |
|`intersecting`|Boolean|optional|If \`true\`, send object behind next lower intersecting object|

Inherited From:

* [fabric.Object#sendBackwards](fabric.Object.html#sendBackwards)

Source:

* [fabric.js](fabric.js.html), [line 14546](fabric.js.html#line14546)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### sendToBack()&rarr; {[fabric.Object](fabric.Object.html)}

Moves an object to the bottom of the stack of drawn objects

Inherited From:

* [fabric.Object#sendToBack](fabric.Object.html#sendToBack)

Source:

* [fabric.js](fabric.js.html), [line 14515](fabric.js.html#line14515)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setAngle(angle)&rarr; {[fabric.Object](fabric.Object.html)}

Sets "angle" of an instance

##### Parameters:
|Name|Type|Description| |
|`angle`|Number|Angle value (in degrees)|

Inherited From:

* [fabric.Object#setAngle](fabric.Object.html#setAngle)

Source:

* [fabric.js](fabric.js.html), [line 13493](fabric.js.html#line13493)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setClipTo(clipTo)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [clipping function](fabric.Object.html#clipTo)

##### Parameters:
|Name|Type|Description| |
|`clipTo`|function|Clipping function|

Inherited From:

* [fabric.Object#setClipTo](fabric.Object.html#setClipTo)

Source:

* [fabric.js](fabric.js.html), [line 11770](fabric.js.html#line11770)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setColor(color)&rarr; {[fabric.Object](fabric.Object.html)}

Sets "color" of an instance (alias of \`set('fill', &hellip;)\`)

##### Parameters:
|Name|Type|Description| |
|`color`|String|Color value|

Inherited From:

* [fabric.Object#setColor](fabric.Object.html#setColor)

Source:

* [fabric.js](fabric.js.html), [line 13482](fabric.js.html#line13482)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setControlsVisibility(optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}

Sets the visibility state of object controls.

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codebl/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the bottom-left control, false to disable it/td        /tr            tr                            td class="name"codebr/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the bottom-right control, false to disable it/td        /tr            tr                            td class="name"codemb/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-bottom control, false to disable it/td        /tr            tr                            td class="name"codeml/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-left control, false to disable it/td        /tr            tr                            td class="name"codemr/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-right control, false to disable it/td        /tr            tr                            td class="name"codemt/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-top control, false to disable it/td        /tr            tr                            td class="name"codetl/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the top-left control, false to disable it/td        /tr            tr                            td class="name"codetr/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the top-right control, false to disable it/td        /tr            tr                            td class="name"codemtr/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                    td class="description last"true to enable the middle-top-rotate control, false to disable it/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#setControlsVisibility](fabric.Object.html#setControlsVisibility)

Source:

* [fabric.js](fabric.js.html), [line 15203](fabric.js.html#line15203)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setControlVisible(controlName, visible)&rarr; {[fabric.Object](fabric.Object.html)}

Sets the visibility of the specified control.

##### Parameters:
|Name|Type|Description| |
|`controlName`|String|The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.|
|`visible`|Boolean|true to set the specified control visible, false otherwise|

Inherited From:

* [fabric.Object#setControlVisible](fabric.Object.html#setControlVisible)

Source:

* [fabric.js](fabric.js.html), [line 15183](fabric.js.html#line15183)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setCoords(ignoreZoomopt, skipAbsoluteopt)&rarr; {[fabric.Object](fabric.Object.html)}

Sets corner position coordinates based on current angle, width and height See https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords

##### Parameters:
|Name|Type|Attributes|Description| |
|`ignoreZoom`|Boolean|optional|set oCoords with or without the viewport transform.|
|`skipAbsolute`|Boolean|optional|skip calculation of aCoords, usefull in setViewportTransform|

Inherited From:

* [fabric.Object#setCoords](fabric.Object.html#setCoords)

Source:

* [fabric.js](fabric.js.html), [line 14369](fabric.js.html#line14369)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setFill(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [fill](fabric.Object.html#fill)

##### Parameters:
|Name|Type|Description| |
|`value`|String|Fill value|

Inherited From:

* [fabric.Object#setFill](fabric.Object.html#setFill)

Source:

* [fabric.js](fabric.js.html), [line 11889](fabric.js.html#line11889)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setFlipX(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [flipX](fabric.Object.html#flipX) value

##### Parameters:
|Name|Type|Description| |
|`value`|Boolean|flipX value|

Inherited From:

* [fabric.Object#setFlipX](fabric.Object.html#setFlipX)

Source:

* [fabric.js](fabric.js.html), [line 11992](fabric.js.html#line11992)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setFlipY(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [flipY](fabric.Object.html#flipY) value

##### Parameters:
|Name|Type|Description| |
|`value`|Boolean|flipY value|

Inherited From:

* [fabric.Object#setFlipY](fabric.Object.html#setFlipY)

Source:

* [fabric.js](fabric.js.html), [line 12008](fabric.js.html#line12008)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setGradient(property, optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}

Sets gradient (fill or stroke) of an object **Backwards incompatibility note:** This method was named "setGradientFill" until v1.1.0

##### Parameters:
|Name|Type|Attributes|Description| |
|`property`|String|Property name 'stroke' or 'fill'|
|`options`|Object|optional|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codetype/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Type of gradient 'radial' or 'linear'/td        /tr            tr                            td class="name"codex1/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"x-coordinate of start point/td        /tr            tr                            td class="name"codey1/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"y-coordinate of start point/td        /tr            tr                            td class="name"codex2/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"x-coordinate of end point/td        /tr            tr                            td class="name"codey2/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"y-coordinate of end point/td        /tr            tr                            td class="name"coder1/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"Radius of start point (only for radial gradients)/td        /tr            tr                            td class="name"coder2/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"Radius of end point (only for radial gradients)/td        /tr            tr                            td class="name"codecolorStops/code/td                        td class="type"                            span class="param-type"Object/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Color stops object eg. {0: 'ff0000', 1: '000000'}/td        /tr            tr                            td class="name"codegradientTransform/code/td                        td class="type"                            span class="param-type"Object/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"transforMatrix for gradient/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#setGradient](fabric.Object.html#setGradient)

Source:

* [fabric.js](fabric.js.html), [line 13403](fabric.js.html#line13403)

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/58y8b/)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

##### Examples

Set linear gradient

```
object.setGradient('fill', {
  type: 'linear',
  x1: -object.width / 2,
  y1: 0,
  x2: object.width / 2,
  y2: 0,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
```

Set radial gradient

```
object.setGradient('fill', {
  type: 'radial',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  r1: object.width / 2,
  r2: 10,
  colorStops: {
    0: 'red',
    0.5: '#005555',
    1: 'rgba(0,0,255,0.5)'
  }
});
canvas.renderAll();
```

#### setLeft(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [left position](fabric.Object.html#left)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|Left value (in pixels)|

Inherited From:

* [fabric.Object#setLeft](fabric.Object.html#setLeft)

Source:

* [fabric.js](fabric.js.html), [line 11944](fabric.js.html#line11944)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setOnGroup()

This callback function is called by the parent group of an object every time a non-delegated property changes on the group. It is passed the key and value as parameters. Not adding in this function's signature to avoid Travis build error about unused variables.

Inherited From:

* [fabric.Object#setOnGroup](fabric.Object.html#setOnGroup)

Source:

* [fabric.js](fabric.js.html), [line 12874](fabric.js.html#line12874)

#### setOpacity(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [opacity](fabric.Object.html#opacity)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|Opacity value (0-1)|

Inherited From:

* [fabric.Object#setOpacity](fabric.Object.html#setOpacity)

Source:

* [fabric.js](fabric.js.html), [line 11905](fabric.js.html#line11905)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setOptions(optionsopt)

Sets object's properties from options

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object|

Inherited From:

* [fabric.Object#setOptions](fabric.Object.html#setOptions)

Source:

* [fabric.js](fabric.js.html), [line 12688](fabric.js.html#line12688)

#### setOriginX(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [originX](fabric.Object.html#originX)

##### Parameters:
|Name|Type|Description| |
|`value`|String|originX value|

Inherited From:

* [fabric.Object#setOriginX](fabric.Object.html#setOriginX)

Source:

* [fabric.js](fabric.js.html), [line 11857](fabric.js.html#line11857)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setOriginY(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [originY](fabric.Object.html#originY)

##### Parameters:
|Name|Type|Description| |
|`value`|String|originY value|

Inherited From:

* [fabric.Object#setOriginY](fabric.Object.html#setOriginY)

Source:

* [fabric.js](fabric.js.html), [line 11873](fabric.js.html#line11873)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setPatternFill(options)&rarr; {[fabric.Object](fabric.Object.html)}

Sets pattern fill of an object

##### Parameters:
|Name|Type|Description| |
|`options`|Object|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codesource/code/td                        td class="type"                            span class="param-type"String/span|span class="param-type"HTMLImageElement/span                        /td                            td class="attributes"                                                                /td                                        td class="default"                                /td                        td class="description last"Pattern source/td        /tr            tr                            td class="name"coderepeat/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    repeat                                /td                        td class="description last"Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)/td        /tr            tr                            td class="name"codeoffsetX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"Pattern horizontal offset from object's left/top corner/td        /tr            tr                            td class="name"codeoffsetY/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"Pattern vertical offset from object's left/top corner/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#setPatternFill](fabric.Object.html#setPatternFill)

Source:

* [fabric.js](fabric.js.html), [line 13446](fabric.js.html#line13446)

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/QT3pa/)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

##### Example

Set pattern

```
fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
  object.setPatternFill({
    source: img,
    repeat: 'repeat'
  });
  canvas.renderAll();
});
```

#### setPositionByOrigin(pos, originX, originY)&rarr; {void}

Sets the position of the object taking into consideration the object's origin

##### Parameters:
|Name|Type|Description| |
|`pos`|[fabric.Point](fabric.Point.html)|The new position of the object|
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#setPositionByOrigin](fabric.Object.html#setPositionByOrigin)

Source:

* [fabric.js](fabric.js.html), [line 13842](fabric.js.html#line13842)

##### Returns:

Type

void

#### setScaleX(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [scaleX](fabric.Object.html#scaleX) value

##### Parameters:
|Name|Type|Description| |
|`value`|Number|scaleX value|

Inherited From:

* [fabric.Object#setScaleX](fabric.Object.html#setScaleX)

Source:

* [fabric.js](fabric.js.html), [line 11960](fabric.js.html#line11960)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setScaleY(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [scaleY](fabric.Object.html#scaleY) value

##### Parameters:
|Name|Type|Description| |
|`value`|Number|scaleY value|

Inherited From:

* [fabric.Object#setScaleY](fabric.Object.html#setScaleY)

Source:

* [fabric.js](fabric.js.html), [line 11976](fabric.js.html#line11976)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setShadow(optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}

Sets [shadow](fabric.Object.html#shadow) of an object

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object | String|optional|Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codecolor/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    rgb(0,0,0)                                /td                        td class="description last"Shadow color/td        /tr            tr                            td class="name"codeblur/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"Shadow blur/td        /tr            tr                            td class="name"codeoffsetX/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"Shadow horizontal offset/td        /tr            tr                            td class="name"codeoffsetY/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    0                                /td                        td class="description last"Shadow vertical offset/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#setShadow](fabric.Object.html#setShadow)

Source:

* [fabric.js](fabric.js.html), [line 13472](fabric.js.html#line13472)

See:

* [jsFiddle demo](http://jsfiddle.net/fabricjs/7gvJG/)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

##### Examples

Set shadow with string notation

```
object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
canvas.renderAll();
```

Set shadow with object notation

```
object.setShadow({
  color: 'red',
  blur: 10,
  offsetX: 20,
  offsetY: 20
});
canvas.renderAll();
```

#### setSourcePath(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets sourcePath of an object

##### Parameters:
|Name|Type|Description| |
|`value`|String|Value to set sourcePath to|

Inherited From:

* [fabric.Object#setSourcePath](fabric.Object.html#setSourcePath)

Source:

* [fabric.js](fabric.js.html), [line 12884](fabric.js.html#line12884)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setStroke(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [stroke](fabric.Object.html#stroke)

##### Parameters:
|Name|Type|Description| |
|`value`|String|stroke value|

Inherited From:

* [fabric.Object#setStroke](fabric.Object.html#setStroke)

Source:

* [fabric.js](fabric.js.html), [line 11825](fabric.js.html#line11825)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setStrokeWidth(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [strokeWidth](fabric.Object.html#strokeWidth)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|strokeWidth value|

Inherited From:

* [fabric.Object#setStrokeWidth](fabric.Object.html#setStrokeWidth)

Source:

* [fabric.js](fabric.js.html), [line 11841](fabric.js.html#line11841)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setTop(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [top position](fabric.Object.html#top)

##### Parameters:
|Name|Type|Description| |
|`value`|Number|Top value (in pixels)|

Inherited From:

* [fabric.Object#setTop](fabric.Object.html#setTop)

Source:

* [fabric.js](fabric.js.html), [line 11928](fabric.js.html#line11928)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setTransformMatrix(transformMatrix)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [transformMatrix](fabric.Object.html#transformMatrix)

##### Parameters:
|Name|Type|Description| |
|`transformMatrix`|[Array](Array.html)|

Inherited From:

* [fabric.Object#setTransformMatrix](fabric.Object.html#setTransformMatrix)

Source:

* [fabric.js](fabric.js.html), [line 11786](fabric.js.html#line11786)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setupState(optionsopt)&rarr; {[fabric.Object](fabric.Object.html)}

Setups state of an object

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Object with additional \`stateProperties\` array to include when saving state|

Inherited From:

* [fabric.Object#setupState](fabric.Object.html#setupState)

Source:

* [fabric.js](fabric.js.html), [line 14831](fabric.js.html#line14831)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### setVisible(value)&rarr; {[fabric.Object](fabric.Object.html)}

Sets object's [visible](fabric.Object.html#visible) state

##### Parameters:
|Name|Type|Description| |
|`value`|Boolean|visible value|

Inherited From:

* [fabric.Object#setVisible](fabric.Object.html#setVisible)

Source:

* [fabric.js](fabric.js.html), [line 11802](fabric.js.html#line11802)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### shouldCache()&rarr; {Boolean}

Decide if the object should cache or not. objectCaching is a global flag, wins over everything needsItsOwnCache should be used when the object drawing method requires a cache step. None of the fabric classes requires it. Generally you do not cache objects in groups because the group outside is cached.

Overrides:

* [fabric.Path#shouldCache](fabric.Path.html#shouldCache)

Source:

* [fabric.js](fabric.js.html), [line 18084](fabric.js.html#line18084)

##### Returns:

Type

Boolean

#### straighten()&rarr; {[fabric.Object](fabric.Object.html)}

Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)

Inherited From:

* [fabric.Object#straighten](fabric.Object.html#straighten)

Source:

* [fabric.js](fabric.js.html), [line 19669](fabric.js.html#line19669)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### toDatalessObject(propertiesToIncludeopt)&rarr; {Object}

Returns dataless object representation of this path group

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|[Array](Array.html)|optional|Any properties that you might want to additionally include in the output|

Overrides:

* [fabric.Path#toDatalessObject](fabric.Path.html#toDatalessObject)

Source:

* [fabric.js](fabric.js.html), [line 18186](fabric.js.html#line18186)

##### Returns:

dataless object representation of an instance

Type

Object

#### toDataURL(options)&rarr; {String}

Converts an object into a data-url-like string

##### Parameters:
|Name|Type|Description| |
|`options`|Object|Options object
###### Properties
table class="params"    thead    tr                thName/th                thType/th                thAttributes/th                        thDefault/th                th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeformat/code/td                        td class="type"                            span class="param-type"String/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    png                                /td                        td class="description last"The format of the output image. Either "jpeg" or "png"/td        /tr            tr                            td class="name"codequality/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    1                                /td                        td class="description last"Quality level (0..1). Only used for jpeg./td        /tr            tr                            td class="name"codemultiplier/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                    1                                /td                        td class="description last"Multiplier to scale by/td        /tr            tr                            td class="name"codeleft/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping left offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codetop/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping top offset. Introduced in v1.2.14/td        /tr            tr                            td class="name"codewidth/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping width. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeheight/code/td                        td class="type"                            span class="param-type"Number/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Cropping height. Introduced in v1.2.14/td        /tr            tr                            td class="name"codeenableRetina/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                            td class="attributes"                                    optionalbr                                                                /td                                        td class="default"                                /td                        td class="description last"Enable retina scaling for clone image. Introduce in 1.6.4/td        /tr        /tbody/table|

Inherited From:

* [fabric.Object#toDataURL](fabric.Object.html#toDataURL)

Source:

* [fabric.js](fabric.js.html), [line 13287](fabric.js.html#line13287)

##### Returns:

Returns a data: URL containing a representation of the object in the format specified by options.format

Type

String

#### toJSON(propertiesToIncludeopt)&rarr; {Object}

Returns a JSON representation of an instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|[Array](Array.html)|optional|Any properties that you might want to additionally include in the output|

Inherited From:

* [fabric.Object#toJSON](fabric.Object.html#toJSON)

Source:

* [fabric.js](fabric.js.html), [line 13350](fabric.js.html#line13350)

##### Returns:

JSON

Type

Object

#### toLocalPoint(point, originX, originY)&rarr; {[fabric.Point](fabric.Point.html)}

Returns the point in local coordinates

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|The point relative to the global coordinate system|
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#toLocalPoint](fabric.Object.html#toLocalPoint)

Source:

* [fabric.js](fabric.js.html), [line 13808](fabric.js.html#line13808)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### toObject(propertiesToIncludeopt)&rarr; {Object}

Returns object representation of this path group

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|[Array](Array.html)|optional|Any properties that you might want to additionally include in the output|

Overrides:

* [fabric.Path#toObject](fabric.Path.html#toObject)

Source:

* [fabric.js](fabric.js.html), [line 18167](fabric.js.html#line18167)

##### Returns:

object representation of an instance

Type

Object

#### toString()&rarr; {String}

Returns a string representation of this path group

Overrides:

* [fabric.Path#toString](fabric.Path.html#toString)

Source:

* [fabric.js](fabric.js.html), [line 18225](fabric.js.html#line18225)

##### Returns:

string representation of an object

Type

String

#### toSVG(reviveropt)&rarr; {String}

Returns svg representation of an instance

##### Parameters:
|Name|Type|Attributes|Description| |
|`reviver`|function|optional|Method for further parsing of svg representation.|

Overrides:

* [fabric.Path#toSVG](fabric.Path.html#toSVG)

Source:

* [fabric.js](fabric.js.html), [line 18200](fabric.js.html#line18200)

##### Returns:

svg representation of an instance

Type

String

#### transform(ctx, fromLeft)

Transforms context when rendering an object

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context|
|`fromLeft`|Boolean|When true, context is transformed to object's top/left corner. This is used when rendering text on Node|

Inherited From:

* [fabric.Object#transform](fabric.Object.html#transform)

Source:

* [fabric.js](fabric.js.html), [line 12702](fabric.js.html#line12702)

#### translateToCenterPoint(point, originX, originY)&rarr; {[fabric.Point](fabric.Point.html)}

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|The point which corresponds to the originX and originY params|
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#translateToCenterPoint](fabric.Object.html#translateToCenterPoint)

Source:

* [fabric.js](fabric.js.html), [line 13749](fabric.js.html#line13749)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### translateToGivenOrigin(point, fromOriginX, fromOriginY, toOriginX, toOriginY)&rarr; {[fabric.Point](fabric.Point.html)}

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

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

* [fabric.js](fabric.js.html), [line 13696](fabric.js.html#line13696)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### translateToOriginPoint(center, originX, originY)&rarr; {[fabric.Point](fabric.Point.html)}

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

##### Parameters:
|Name|Type|Description| |
|`center`|[fabric.Point](fabric.Point.html)|The point which corresponds to center of the object|
|`originX`|String|Horizontal origin: 'left', 'center' or 'right'|
|`originY`|String|Vertical origin: 'top', 'center' or 'bottom'|

Inherited From:

* [fabric.Object#translateToOriginPoint](fabric.Object.html#translateToOriginPoint)

Source:

* [fabric.js](fabric.js.html), [line 13764](fabric.js.html#line13764)

##### Returns:

Type

[fabric.Point](fabric.Point.html)

#### viewportCenter()&rarr; {[fabric.Object](fabric.Object.html)}

Centers object on current viewport of canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#viewportCenter](fabric.Object.html#viewportCenter)

Source:

* [fabric.js](fabric.js.html), [line 13570](fabric.js.html#line13570)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### viewportCenterH()&rarr; {[fabric.Object](fabric.Object.html)}

Centers object horizontally on current viewport of canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#viewportCenterH](fabric.Object.html#viewportCenterH)

Source:

* [fabric.js](fabric.js.html), [line 13526](fabric.js.html#line13526)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### viewportCenterV()&rarr; {[fabric.Object](fabric.Object.html)}

Centers object vertically on current viewport of canvas to which it was added last. You might need to call \`setCoords\` on an object after centering, to update controls area.

Inherited From:

* [fabric.Object#viewportCenterV](fabric.Object.html#viewportCenterV)

Source:

* [fabric.js](fabric.js.html), [line 13548](fabric.js.html#line13548)

##### Returns:

thisArg

Type

[fabric.Object](fabric.Object.html)

#### willDrawShadow()&rarr; {Boolean}

Check if this object or a child object will cast a shadow

Overrides:

* [fabric.Path#willDrawShadow](fabric.Path.html#willDrawShadow)

Source:

* [fabric.js](fabric.js.html), [line 18102](fabric.js.html#line18102)

##### Returns:

Type

Boolean
## [Home](index.html)

### Classes

* [BaseBrush](fabric.BaseBrush.html)
* [Canvas](fabric.Canvas.html)
* [Circle](fabric.Circle.html)
* [CircleBrush](fabric.CircleBrush.html)
* [Color](fabric.Color.html)
* [Ellipse](fabric.Ellipse.html)
* [Gradient](fabric.Gradient.html)
* [Group](fabric.Group.html)
* [Image](fabric.Image.html)
* [BaseFilter](fabric.Image.filters.BaseFilter.html)
* [Brightness](fabric.Image.filters.Brightness.html)
* [ColorMatrix](fabric.Image.filters.ColorMatrix.html)
* [Contrast](fabric.Image.filters.Contrast.html)
* [Convolute](fabric.Image.filters.Convolute.html)
* [Blend](fabric.Image.filters.fabric.Image.filter.Blend.html)
* [GradientTransparency](fabric.Image.filters.GradientTransparency.html)
* [Grayscale](fabric.Image.filters.Grayscale.html)
* [Invert](fabric.Image.filters.Invert.html)
* [Mask](fabric.Image.filters.Mask.html)
* [Multiply](fabric.Image.filters.Multiply.html)
* [Noise](fabric.Image.filters.Noise.html)
* [Pixelate](fabric.Image.filters.Pixelate.html)
* [RemoveWhite](fabric.Image.filters.RemoveWhite.html)
* [Resize](fabric.Image.filters.Resize.html)
* [Saturate](fabric.Image.filters.Saturate.html)
* [Sepia](fabric.Image.filters.Sepia.html)
* [Sepia2](fabric.Image.filters.Sepia2.html)
* [Tint](fabric.Image.filters.Tint.html)
* [Intersection](fabric.Intersection.html)
* [IText](fabric.IText.html)
* [Line](fabric.Line.html)
* [Object](fabric.Object.html)
* [Path](fabric.Path.html)
* [PathGroup](fabric.PathGroup.html)
* [Pattern](fabric.Pattern.html)
* [PatternBrush](fabric.PatternBrush.html)
* [PencilBrush](fabric.PencilBrush.html)
* [Point](fabric.Point.html)
* [Polygon](fabric.Polygon.html)
* [Polyline](fabric.Polyline.html)
* [Rect](fabric.Rect.html)
* [Shadow](fabric.Shadow.html)
* [SprayBrush](fabric.SprayBrush.html)
* [StaticCanvas](fabric.StaticCanvas.html)
* [Text](fabric.Text.html)
* [Textbox](fabric.Textbox.html)
* [Triangle](fabric.Triangle.html)

### Namespaces

* [fabric](fabric.html)
* [Collection](fabric.Collection.html)
* [CommonMethods](fabric.CommonMethods.html)
* [filters](fabric.Image.filters.html)
* [Observable](fabric.Observable.html)
* [util](fabric.util.html)
* [array](fabric.util.array.html)
* [ease](fabric.util.ease.html)
* [object](fabric.util.object.html)
* [string](fabric.util.string.html)

### Global

* [\_\_cachedLines](global.html#__cachedLines)
* [\_getCursorBoundariesOffsets](global.html#_getCursorBoundariesOffsets)
* [\_splitTextIntoLines](global.html#_splitTextIntoLines)
* [\_wrapLine](global.html#_wrapLine)
* [\_wrapText](global.html#_wrapText)
* [applyFilters](global.html#applyFilters)
* [dynamicMinWidth](global.html#dynamicMinWidth)
* [get2DCursorLocation](global.html#get2DCursorLocation)
* [initialize](global.html#initialize)
* [lockScalingFlip](global.html#lockScalingFlip)
* [lockScalingY](global.html#lockScalingY)
* [minWidth](global.html#minWidth)
* [noScaleCache](global.html#noScaleCache)
* [setOnGroup](global.html#setOnGroup)
* [toObject](global.html#toObject)
* [type](global.html#type) labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.4.0](https://github.com/jsdoc3/jsdoc) on Sun Jul 09 2017 09:33:23 GMT+0200 (CEST)