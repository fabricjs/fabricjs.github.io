# Canvas

## [fabric](fabric.html).Canvas #### [new Canvas()](#Canvas)

Canvas class

Source:

* [fabric.js](fabric.js.html), [line 11512](fabric.js.html#line11512)

Tutorials:

* *Tutorial: [http://fabricjs.com/fabric-intro-part-1#canvas](http://fabricjs.com/fabric-intro-part-1#canvas)*

See:

* [fabric.Canvas#initialize](fabric.Canvas.html#initialize) for constructor definition

##### Fires:

* object:modified at the end of a transform or any change when statefull is true
* object:rotating while an object is being rotated from the control
* object:scaling while an object is being scaled by controls
* object:moving while an object is being dragged
* object:skewing while an object is being skewed from the controls
* before:transform before a transform is is started
* before:selection:cleared
* selection:cleared
* selection:updated
* selection:created
* path:created after a drawing operation ends and the path is added
* mouse:down
* mouse:move
* mouse:up
* mouse:down:before on mouse down,event: before the inner fabric logic runs
* mouse:move:before on mouse move,event: before the inner fabric logic runs
* mouse:up:before on mouse up,event: before the inner fabric logic runs
* mouse:over
* mouse:out
* mouse:dblclick whenever a native dbl click event fires on the canvas.
* event:dragover
* event:dragenter
* event:dragleave
* drop:before before drop event. same native event.event: This is added to handle edge cases
* event:drop
* after:render at the end of the render process,event: receives the context in the callback
* before:render at start the render process,event: receives the context in the callback

### Extends

* [fabric.StaticCanvas](fabric.StaticCanvas.html)

### Members

#### [allowTouchScrolling:Boolean](#allowTouchScrolling)

Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas

##### Type:

* Boolean

Inherited From:

* [fabric.StaticCanvas#allowTouchScrolling](fabric.StaticCanvas.html#allowTouchScrolling)

Source:

* [fabric.js](fabric.js.html), [line 8867](fabric.js.html#line8867)

#### [altActionKey:String](#altActionKey)

Indicates which key enable alternate action on corner values: 'altKey', 'shiftKey', 'ctrlKey'. If \`null\` or 'none' or any other string that is not a modifier key feature is disabled feature disabled.

##### Type:

* String

Since:

* 1.6.2

Default Value:

* shiftKey

Source:

* [fabric.js](fabric.js.html), [line 11629](fabric.js.html#line11629)

#### [altSelectionKey:null|String](#altSelectionKey)

Indicates which key enable alternative selection in case of target overlapping with active object values: 'altKey', 'shiftKey', 'ctrlKey'. For a series of reason that come from the general expectations on how things should work, this feature works only for preserveObjectStacking true. If \`null\` or 'none' or any other string that is not a modifier key feature is disabled.

##### Type:

* null | String

Since:

* 1.6.5

Source:

* [fabric.js](fabric.js.html), [line 11669](fabric.js.html#line11669)

#### [backgroundColor:String|[fabric.Pattern](fabric.Pattern.html)](#backgroundColor)

Background color of canvas instance. Should be set via [fabric.StaticCanvas#setBackgroundColor](fabric.StaticCanvas.html#setBackgroundColor).

##### Type:

* String | [fabric.Pattern](fabric.Pattern.html)

Inherited From:

* [fabric.StaticCanvas#backgroundColor](fabric.StaticCanvas.html#backgroundColor)

Source:

* [fabric.js](fabric.js.html), [line 8797](fabric.js.html#line8797)

#### [backgroundImage:[fabric.Image](fabric.Image.html)](#backgroundImage)

Background image of canvas instance. since 2.4.0 image caching is active, please when putting an image as background, add to the canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom vale. As an alternative you can disable image objectCaching

##### Type:

* [fabric.Image](fabric.Image.html)

Inherited From:

* [fabric.StaticCanvas#backgroundImage](fabric.StaticCanvas.html#backgroundImage)

Source:

* [fabric.js](fabric.js.html), [line 8807](fabric.js.html#line8807)

#### [backgroundVpt:Boolean](#backgroundVpt)

if set to false background image is not affected by viewport transform

##### Type:

* Boolean

Since:

* 1.6.3

Inherited From:

* [fabric.StaticCanvas#backgroundVpt](fabric.StaticCanvas.html#backgroundVpt)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8893](fabric.js.html#line8893)

#### [centeredKey:String](#centeredKey)

Indicates which key enable centered Transform values: 'altKey', 'shiftKey', 'ctrlKey'. If \`null\` or 'none' or any other string that is not a modifier key feature is disabled feature disabled.

##### Type:

* String

Since:

* 1.6.2

Default Value:

* altKey

Source:

* [fabric.js](fabric.js.html), [line 11618](fabric.js.html#line11618)

#### [centeredRotation:Boolean](#centeredRotation)

When true, objects use center point as the origin of rotate transformation. **Backwards incompatibility note:** This property replaces "centerTransform" (Boolean).

##### Type:

* Boolean

Since:

* 1.3.4

Source:

* [fabric.js](fabric.js.html), [line 11607](fabric.js.html#line11607)

#### [centeredScaling:Boolean](#centeredScaling)

When true, objects use center point as the origin of scale transformation. **Backwards incompatibility note:** This property replaces "centerTransform" (Boolean).

##### Type:

* Boolean

Since:

* 1.3.4

Source:

* [fabric.js](fabric.js.html), [line 11598](fabric.js.html#line11598)

#### [clipPath:[fabric.Object](fabric.Object.html)](#clipPath)

a fabricObject that, without stroke define a clipping area with their shape. filled in black the clipPath object gets used when the canvas has rendered, and the context is placed in the top left corner of the canvas. clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

##### Type:

* [fabric.Object](fabric.Object.html)

Inherited From:

* [fabric.StaticCanvas#clipPath](fabric.StaticCanvas.html#clipPath)

Source:

* [fabric.js](fabric.js.html), [line 8940](fabric.js.html#line8940)

#### [containerClass:String](#containerClass)

Default element class that's given to wrapper (div) element of canvas

##### Type:

* String

Default Value:

* canvas-container

Source:

* [fabric.js](fabric.js.html), [line 11747](fabric.js.html#line11747)

#### [controlsAboveOverlay:Boolean](#controlsAboveOverlay)

Indicates whether object controls (borders/controls) are rendered above overlay image

##### Type:

* Boolean

Inherited From:

* [fabric.StaticCanvas#controlsAboveOverlay](fabric.StaticCanvas.html#controlsAboveOverlay)

Source:

* [fabric.js](fabric.js.html), [line 8860](fabric.js.html#line8860)

#### [defaultCursor:String](#defaultCursor)

Default cursor value used for the entire canvas

##### Type:

* String

Default Value:

* default

Source:

* [fabric.js](fabric.js.html), [line 11725](fabric.js.html#line11725)

#### [enablePointerEvents:Boolean](#enablePointerEvents)

When the option is enabled, PointerEvent is used instead of MouseEvent.

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 11844](fabric.js.html#line11844)

#### [enableRetinaScaling:Boolean](#enableRetinaScaling)

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

##### Type:

* Boolean

Inherited From:

* [fabric.StaticCanvas#enableRetinaScaling](fabric.StaticCanvas.html#enableRetinaScaling)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8908](fabric.js.html#line8908)

#### [fireMiddleClick:Boolean](#fireMiddleClick)

Indicates if the canvas can fire middle click events

##### Type:

* Boolean

Since:

* 1.7.8

Source:

* [fabric.js](fabric.js.html), [line 11831](fabric.js.html#line11831)

#### [fireRightClick:Boolean](#fireRightClick)

Indicates if the canvas can fire right click events

##### Type:

* Boolean

Since:

* 1.6.5

Source:

* [fabric.js](fabric.js.html), [line 11823](fabric.js.html#line11823)

#### [freeDrawingCursor:String](#freeDrawingCursor)

Cursor value used during free drawing

##### Type:

* String

Default Value:

* crosshair

Source:

* [fabric.js](fabric.js.html), [line 11732](fabric.js.html#line11732)

#### [FX\_DURATION:Number](#FX_DURATION)

Animation duration (in ms) for fx\* methods

##### Type:

* Number

Inherited From:

* [fabric.StaticCanvas#FX\_DURATION](fabric.StaticCanvas.html#FX_DURATION)

Default Value:

* 500

Source:

* [fabric.js](fabric.js.html), [line 18030](fabric.js.html#line18030)

#### [hoverCursor:String](#hoverCursor)

Default cursor value used when hovering over an object on canvas

##### Type:

* String

Default Value:

* move

Source:

* [fabric.js](fabric.js.html), [line 11711](fabric.js.html#line11711)

#### [imageSmoothingEnabled:Boolean](#imageSmoothingEnabled)

Indicates whether this canvas will use image smoothing, this is on by default in browsers

##### Type:

* Boolean

Inherited From:

* [fabric.StaticCanvas#imageSmoothingEnabled](fabric.StaticCanvas.html#imageSmoothingEnabled)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8874](fabric.js.html#line8874)

#### [includeDefaultValues:Boolean](#includeDefaultValues)

Indicates whether toObject/toDatalessObject should include default values if set to false, takes precedence over the object value.

##### Type:

* Boolean

Inherited From:

* [fabric.StaticCanvas#includeDefaultValues](fabric.StaticCanvas.html#includeDefaultValues)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8834](fabric.js.html#line8834)

#### [interactive:Boolean](#interactive)

Indicates that canvas is interactive. This property should not be changed.

##### Type:

* Boolean

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 11636](fabric.js.html#line11636)

#### [isDrawingMode:Boolean](#isDrawingMode)

When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing. After mousedown, mousemove creates a shape, and then mouseup finalizes it and adds an instance of \`fabric.Path\` onto canvas.

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 11782](fabric.js.html#line11782)

Tutorials:

* *Tutorial: [http://fabricjs.com/fabric-intro-part-4#free\_drawing](http://fabricjs.com/fabric-intro-part-4#free_drawing)*

#### [moveCursor:String](#moveCursor)

Default cursor value used when moving an object on canvas

##### Type:

* String

Default Value:

* move

Source:

* [fabric.js](fabric.js.html), [line 11718](fabric.js.html#line11718)

#### [notAllowedCursor:String](#notAllowedCursor)

Cursor value used for disabled elements ( corners with disabled action )

##### Type:

* String

Since:

* 2.0.0

Default Value:

* not-allowed

Source:

* [fabric.js](fabric.js.html), [line 11740](fabric.js.html#line11740)

#### [overlayColor:String|[fabric.Pattern](fabric.Pattern.html)](#overlayColor)

Overlay color of canvas instance. Should be set via [fabric.StaticCanvas#setOverlayColor](fabric.StaticCanvas.html#setOverlayColor)

##### Type:

* String | [fabric.Pattern](fabric.Pattern.html)

Since:

* 1.3.9

Inherited From:

* [fabric.StaticCanvas#overlayColor](fabric.StaticCanvas.html#overlayColor)

Source:

* [fabric.js](fabric.js.html), [line 8816](fabric.js.html#line8816)

#### [overlayImage:[fabric.Image](fabric.Image.html)](#overlayImage)

Overlay image of canvas instance. since 2.4.0 image caching is active, please when putting an image as overlay, add to the canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom vale. As an alternative you can disable image objectCaching

##### Type:

* [fabric.Image](fabric.Image.html)

Inherited From:

* [fabric.StaticCanvas#overlayImage](fabric.StaticCanvas.html#overlayImage)

Source:

* [fabric.js](fabric.js.html), [line 8826](fabric.js.html#line8826)

#### [overlayVpt:Boolean](#overlayVpt)

if set to false overlya image is not affected by viewport transform

##### Type:

* Boolean

Since:

* 1.6.3

Inherited From:

* [fabric.StaticCanvas#overlayVpt](fabric.StaticCanvas.html#overlayVpt)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8901](fabric.js.html#line8901)

#### [perPixelTargetFind:Boolean](#perPixelTargetFind)

When true, object detection happens on per-pixel basis rather than on per-bounding-box

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 11754](fabric.js.html#line11754)

#### [preserveObjectStacking:Boolean](#preserveObjectStacking)

Indicates whether objects should remain in current stack position when selected. When false objects are brought to top and rendered as part of the selection group

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 11790](fabric.js.html#line11790)

#### [renderOnAddRemove:Boolean](#renderOnAddRemove)

Indicates whether [fabric.Collection.add](fabric.Collection.html#.add), [fabric.Collection.insertAt](fabric.Collection.html#.insertAt) and [fabric.Collection.remove](fabric.Collection.html#.remove), fabric.StaticCanvas.moveTo, fabric.StaticCanvas.clear and many more, should also re-render canvas. Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once since the renders are quequed and executed one per frame. Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() ) Left default to true to do not break documentation and old app, fiddles.

##### Type:

* Boolean

Inherited From:

* [fabric.StaticCanvas#renderOnAddRemove](fabric.StaticCanvas.html#renderOnAddRemove)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8853](fabric.js.html#line8853)

#### [selection:Boolean](#selection)

Indicates whether group selection should be enabled

##### Type:

* Boolean

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 11643](fabric.js.html#line11643)

#### [selectionBorderColor:String](#selectionBorderColor)

Color of the border of selection (usually slightly darker than color of selection itself)

##### Type:

* String

Default Value:

* rgba(255, 255, 255, 0.3)

Source:

* [fabric.js](fabric.js.html), [line 11690](fabric.js.html#line11690)

#### [selectionColor:String](#selectionColor)

Color of selection

##### Type:

* String

Default Value:

* rgba(100, 100, 255, 0.3)

Source:

* [fabric.js](fabric.js.html), [line 11676](fabric.js.html#line11676)

#### [selectionDashArray:Array](#selectionDashArray)

Default dash array pattern If not empty the selection border is dashed

##### Type:

* Array

Source:

* [fabric.js](fabric.js.html), [line 11683](fabric.js.html#line11683)

#### [selectionFullyContained:Boolean](#selectionFullyContained)

Select only shapes that are fully contained in the dragged selection rectangle.

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 11704](fabric.js.html#line11704)

#### [selectionKey:String|Array](#selectionKey)

Indicates which key or keys enable multiple click selection Pass value as a string or array of strings values: 'altKey', 'shiftKey', 'ctrlKey'. If \`null\` or empty or containing any other string that is not a modifier key feature is disabled.

##### Type:

* String | Array

Since:

* 1.6.2

Default Value:

* shiftKey

Source:

* [fabric.js](fabric.js.html), [line 11655](fabric.js.html#line11655)

#### [selectionLineWidth:Number](#selectionLineWidth)

Width of a line used in object/group selection

##### Type:

* Number

Default Value:

* 1

Source:

* [fabric.js](fabric.js.html), [line 11697](fabric.js.html#line11697)

#### [skipOffscreen:Boolean](#skipOffscreen)

Based on vptCoords and object.aCoords, skip rendering of objects that are not included in current viewport. May greatly help in applications with crowded canvas and use of zoom/pan If One of the corner of the bounding box of the object is on the canvas the objects get rendered.

##### Type:

* Boolean

Inherited From:

* [fabric.StaticCanvas#skipOffscreen](fabric.StaticCanvas.html#skipOffscreen)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 8931](fabric.js.html#line8931)

#### [skipTargetFind:Boolean](#skipTargetFind)

When true, target detection is skipped. Target detection will return always undefined. click selection won't work anymore, events will fire with no targets. if something is selected before setting it to true, it will be deselected at the first click. area selection will still work. check the \`selection\` property too. if you deactivate both, you should look into staticCanvas.

##### Type:

* Boolean

Source:

* [fabric.js](fabric.js.html), [line 11772](fabric.js.html#line11772)

#### [snapAngle:Number](#snapAngle)

Indicates the angle that an object will lock to while rotating.

##### Type:

* Number

Since:

* 1.6.7

Source:

* [fabric.js](fabric.js.html), [line 11798](fabric.js.html#line11798)

#### [snapThreshold:null|Number](#snapThreshold)

Indicates the distance from the snapAngle the rotation will lock to the snapAngle. When \`null\`, the snapThreshold will default to the snapAngle.

##### Type:

* null | Number

Since:

* 1.6.7

Source:

* [fabric.js](fabric.js.html), [line 11807](fabric.js.html#line11807)

#### [stateful:Boolean](#stateful)

Indicates whether objects' state should be saved

##### Type:

* Boolean

Inherited From:

* [fabric.StaticCanvas#stateful](fabric.StaticCanvas.html#stateful)

Source:

* [fabric.js](fabric.js.html), [line 8841](fabric.js.html#line8841)

#### [stopContextMenu:Boolean](#stopContextMenu)

Indicates if the right click on canvas can output the context menu or not

##### Type:

* Boolean

Since:

* 1.6.5

Source:

* [fabric.js](fabric.js.html), [line 11815](fabric.js.html#line11815)

#### [svgViewportTransformation:Boolean](#svgViewportTransformation)

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true, a zoomed canvas will then produce zoomed SVG output.

##### Type:

* Boolean

Inherited From:

* [fabric.StaticCanvas#svgViewportTransformation](fabric.StaticCanvas.html#svgViewportTransformation)

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 9988](fabric.js.html#line9988)

#### [targetFindTolerance:Number](#targetFindTolerance)

Number of pixels around target pixel to tolerate (consider active) during object detection

##### Type:

* Number

Source:

* [fabric.js](fabric.js.html), [line 11761](fabric.js.html#line11761)

#### [targets:Array.[fabric.Object](fabric.Object.html)\](#targets)

Keep track of the subTargets for Mouse Events

##### Type:

* Array.[fabric.Object](fabric.Object.html)\

Source:

* [fabric.js](fabric.js.html), [line 11837](fabric.js.html#line11837)

#### [uniformScaling:Boolean](#uniformScaling)

When true, objects can be transformed by one side (unproportionally) when dragged on the corners that normally would not do that.

##### Type:

* Boolean

Since:

* fabric 4.0 // changed name and default value

Default Value:

* true

Source:

* [fabric.js](fabric.js.html), [line 11575](fabric.js.html#line11575)

#### [uniScaleKey:String](#uniScaleKey)

Indicates which key switches uniform scaling. values: 'altKey', 'shiftKey', 'ctrlKey'. If \`null\` or 'none' or any other string that is not a modifier key feature is disabled. totally wrong named. this sounds like \`uniform scaling\` if Canvas.uniformScaling is true, pressing this will set it to false and viceversa.

##### Type:

* String

Since:

* 1.6.2

Default Value:

* shiftKey

Source:

* [fabric.js](fabric.js.html), [line 11589](fabric.js.html#line11589)

#### [viewportTransform:Array](#viewportTransform)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

##### Type:

* Array

Inherited From:

* [fabric.StaticCanvas#viewportTransform](fabric.StaticCanvas.html#viewportTransform)

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

Inherited From:

* [fabric.StaticCanvas#vptCoords](fabric.StaticCanvas.html#vptCoords)

Source:

* [fabric.js](fabric.js.html), [line 8919](fabric.js.html#line8919)

### Methods

#### [\_\_onMouseWheel(e)](#__onMouseWheel)

Method that defines actions when an Event Mouse Wheel

##### Parameters:
|Name|Type|Description| |
|`e`|Event|Event object fired on mouseup|

Source:

* [fabric.js](fabric.js.html), [line 13700](fabric.js.html#line13700)

#### [\_chooseObjectsToRender()&rarr; {Array}](#_chooseObjectsToRender)

Divides objects in two groups, one to render immediately and one to render as activeGroup.

Source:

* [fabric.js](fabric.js.html), [line 11882](fabric.js.html#line11882)

##### Returns:

objects to render immediately and pushes the other in the activeGroup.

Type

Array

#### [\_onDrop(e)](#_onDrop)

\`drop:before\` is a an event that allow you to schedule logic before the \`drop\` event. Prefer \`drop\` event always, but if you need to run some drop-disabling logic on an event, since there is no way to handle event handlers ordering, use \`drop:before\`

##### Parameters:
|Name|Type|Description| |
|`e`|Event|

Source:

* [fabric.js](fabric.js.html), [line 13039](fabric.js.html#line13039)

#### [\_setCursorFromEvent(e, target)](#_setCursorFromEvent)

Sets the cursor depending on where the canvas is being hovered. Note: very buggy in Opera

##### Parameters:
|Name|Type|Description| |
|`e`|Event|Event object|
|`target`|Object|Object that the mouse is hovering, if so.|

Source:

* [fabric.js](fabric.js.html), [line 13755](fabric.js.html#line13755)

#### [absolutePan(point)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#absolutePan)

Pan viewport so as to place point at top left corner of canvas

##### Parameters:
|Name|Type|Description| |
|`point`|[fabric.Point](fabric.Point.html)|to move to|

Inherited From:

* [fabric.StaticCanvas#absolutePan](fabric.StaticCanvas.html#absolutePan)

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

Inherited From:

* [fabric.StaticCanvas#add](fabric.StaticCanvas.html#add)

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

Inherited From:

* [fabric.StaticCanvas#bringForward](fabric.StaticCanvas.html#bringForward)

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

Inherited From:

* [fabric.StaticCanvas#bringToFront](fabric.StaticCanvas.html#bringToFront)

Source:

* [fabric.js](fabric.js.html), [line 10312](fabric.js.html#line10312)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [calcOffset()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#calcOffset)

Calculates canvas element offset relative to the document This method is also attached as "resize" event handler of window

Inherited From:

* [fabric.StaticCanvas#calcOffset](fabric.StaticCanvas.html#calcOffset)

Source:

* [fabric.js](fabric.js.html), [line 9014](fabric.js.html#line9014)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [calcViewportBoundaries()&rarr; {Object}](#calcViewportBoundaries)

Calculate the position of the 4 corner of canvas with current viewportTransform. helps to determinate when an object is in the current rendering viewport using object absolute coordinates ( aCoords )

Inherited From:

* [fabric.StaticCanvas#calcViewportBoundaries](fabric.StaticCanvas.html#calcViewportBoundaries)

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

Inherited From:

* [fabric.StaticCanvas#centerObject](fabric.StaticCanvas.html#centerObject)

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

Inherited From:

* [fabric.StaticCanvas#centerObjectH](fabric.StaticCanvas.html#centerObjectH)

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

Inherited From:

* [fabric.StaticCanvas#centerObjectV](fabric.StaticCanvas.html#centerObjectV)

Source:

* [fabric.js](fabric.js.html), [line 9794](fabric.js.html#line9794)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [clear()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#clear)

Clears all contexts (background, main, top) of an instance

Overrides:

* [fabric.StaticCanvas#clear](fabric.StaticCanvas.html#clear)

Source:

* [fabric.js](fabric.js.html), [line 12715](fabric.js.html#line12715)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [clearContext(ctx)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#clearContext)

Clears specified context of canvas element

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to clear|

Inherited From:

* [fabric.StaticCanvas#clearContext](fabric.StaticCanvas.html#clearContext)

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

Inherited From:

* [fabric.StaticCanvas#clone](fabric.StaticCanvas.html#clone)

Source:

* [fabric.js](fabric.js.html), [line 14267](fabric.js.html#line14267)

#### [cloneWithoutData(callbackopt)](#cloneWithoutData)

Clones canvas instance without cloning existing data. This essentially copies canvas dimensions, clipping properties, etc. but leaves data empty (so that you can populate it with your own)

##### Parameters:
|Name|Type|Attributes|Description| |
|`callback`|Object|optional|Receives cloned instance as a first argument|

Inherited From:

* [fabric.StaticCanvas#cloneWithoutData](fabric.StaticCanvas.html#cloneWithoutData)

Source:

* [fabric.js](fabric.js.html), [line 14282](fabric.js.html#line14282)

#### [complexity()&rarr; {Number}](#complexity)

Returns number representation of a collection complexity

Inherited From:

* [fabric.StaticCanvas#complexity](fabric.StaticCanvas.html#complexity)

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

Inherited From:

* [fabric.StaticCanvas#contains](fabric.StaticCanvas.html#contains)

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

Inherited From:

* [fabric.StaticCanvas#createSVGFontFacesMarkup](fabric.StaticCanvas.html#createSVGFontFacesMarkup)

Source:

* [fabric.js](fabric.js.html), [line 10151](fabric.js.html#line10151)

##### Returns:

Type

String

#### [createSVGRefElementsMarkup()&rarr; {String}](#createSVGRefElementsMarkup)

Creates markup containing SVG referenced elements like patterns, gradients etc.

Inherited From:

* [fabric.StaticCanvas#createSVGRefElementsMarkup](fabric.StaticCanvas.html#createSVGRefElementsMarkup)

Source:

* [fabric.js](fabric.js.html), [line 10125](fabric.js.html#line10125)

##### Returns:

Type

String

#### [discardActiveObject(e)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#discardActiveObject)

Discards currently active object and fire events. If the function is called by fabric as a consequence of a mouse event, the event is passed as a parameter and sent to the fire function for the custom events. When used as a method the e param does not have any application.

##### Parameters:
|Name|Type|Description| |
|`e`|event|

Source:

* [fabric.js](fabric.js.html), [line 12676](fabric.js.html#line12676)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [dispose()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#dispose)

Clears a canvas element and removes all event listeners

Overrides:

* [fabric.StaticCanvas#dispose](fabric.StaticCanvas.html#dispose)

Source:

* [fabric.js](fabric.js.html), [line 12691](fabric.js.html#line12691)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [drawClipPathOnCanvas(ctx)](#drawClipPathOnCanvas)

Paint the cached clipPath on the lowerCanvasEl

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render on|

Inherited From:

* [fabric.StaticCanvas#drawClipPathOnCanvas](fabric.StaticCanvas.html#drawClipPathOnCanvas)

Source:

* [fabric.js](fabric.js.html), [line 9685](fabric.js.html#line9685)

#### [drawControls(ctx)](#drawControls)

Draws objects' controls (borders/controls)

##### Parameters:
|Name|Type|Description| |
|`ctx`|CanvasRenderingContext2D|Context to render controls on|

Source:

* [fabric.js](fabric.js.html), [line 12726](fabric.js.html#line12726)

#### [findTarget(e, skipGroup)&rarr; {[fabric.Object](fabric.Object.html)}](#findTarget)

Method that determines what object we are clicking on the skipGroup parameter is for internal use, is needed for shift+click action 11/09/2018 TODO: would be cool if findTarget could discern between being a full target or the outside part of the corner.

##### Parameters:
|Name|Type|Description| |
|`e`|Event|mouse event|
|`skipGroup`|Boolean|when true, activeGroup is skipped and only objects are traversed through|

Source:

* [fabric.js](fabric.js.html), [line 12231](fabric.js.html#line12231)

##### Returns:

the target found

Type

[fabric.Object](fabric.Object.html)

#### [fire(eventName, optionsopt)&rarr; {Self}](#fire)

Fires event with an optional options object

##### Parameters:
|Name|Type|Attributes|Description| |
|`eventName`|String|Event name to fire|
|`options`|Object|optional|Options object|

Inherited From:

* [fabric.StaticCanvas#fire](fabric.StaticCanvas.html#fire)

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

Inherited From:

* [fabric.StaticCanvas#forEachObject](fabric.StaticCanvas.html#forEachObject)

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

Inherited From:

* [fabric.StaticCanvas#fxCenterObjectH](fabric.StaticCanvas.html#fxCenterObjectH)

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

Inherited From:

* [fabric.StaticCanvas#fxCenterObjectV](fabric.StaticCanvas.html#fxCenterObjectV)

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

Inherited From:

* [fabric.StaticCanvas#fxRemove](fabric.StaticCanvas.html#fxRemove)

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

Inherited From:

* [fabric.StaticCanvas#fxStraightenObject](fabric.StaticCanvas.html#fxStraightenObject)

Source:

* [fabric.js](fabric.js.html), [line 21580](fabric.js.html#line21580)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [getActiveObject()&rarr; {[fabric.Object](fabric.Object.html)}](#getActiveObject)

Returns currently active object

Source:

* [fabric.js](fabric.js.html), [line 12518](fabric.js.html#line12518)

##### Returns:

active object

Type

[fabric.Object](fabric.Object.html)

#### [getActiveObjects()&rarr; {[fabric.Object](fabric.Object.html)}](#getActiveObjects)

Returns an array with the current selected objects

Source:

* [fabric.js](fabric.js.html), [line 12526](fabric.js.html#line12526)

##### Returns:

active object

Type

[fabric.Object](fabric.Object.html)

#### [getCenter()&rarr; {Object}](#getCenter)

Returns coordinates of a center of canvas. Returned value is an object with top and left properties

Inherited From:

* [fabric.StaticCanvas#getCenter](fabric.StaticCanvas.html#getCenter)

Source:

* [fabric.js](fabric.js.html), [line 9772](fabric.js.html#line9772)

##### Returns:

object with "top" and "left" number values

Type

Object

#### [getContext()&rarr; {CanvasRenderingContext2D}](#getContext)

Returns context of canvas where objects are drawn

Inherited From:

* [fabric.StaticCanvas#getContext](fabric.StaticCanvas.html#getContext)

Source:

* [fabric.js](fabric.js.html), [line 9551](fabric.js.html#line9551)

##### Returns:

Type

CanvasRenderingContext2D

#### [getElement()&rarr; {HTMLCanvasElement}](#getElement)

Returns canvas element corresponding to this instance

Inherited From:

* [fabric.StaticCanvas#getElement](fabric.StaticCanvas.html#getElement)

Source:

* [fabric.js](fabric.js.html), [line 9510](fabric.js.html#line9510)

##### Returns:

Type

HTMLCanvasElement

#### [getHeight()&rarr; {Number}](#getHeight)

Returns canvas height (in px)

Inherited From:

* [fabric.StaticCanvas#getHeight](fabric.StaticCanvas.html#getHeight)

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

Inherited From:

* [fabric.StaticCanvas#getObjects](fabric.StaticCanvas.html#getObjects)

Mixes In:

* [fabric.Collection.getObjects](fabric.Collection.html#.getObjects)

Source:

* [fabric.js](fabric.js.html), [line 463](fabric.js.html#line463)

##### Returns:

Type

Array

#### [getPointer(e, ignoreZoom)&rarr; {Object}](#getPointer)

Returns pointer coordinates relative to canvas. Can return coordinates with or without viewportTransform. ignoreZoom false gives back coordinates that represent the point clicked on canvas element. ignoreZoom true gives back coordinates after being processed by the viewportTransform ( sort of coordinates of what is displayed on the canvas where you are clicking. ignoreZoom true = HTMLElement coordinates relative to top,left ignoreZoom false, default = fabric space coordinates, the same used for shape position To interact with your shapes top and left you want to use ignoreZoom true most of the time, while ignoreZoom false will give you coordinates compatible with the object.oCoords system. of the time.

##### Parameters:
|Name|Type|Description| |
|`e`|Event|
|`ignoreZoom`|Boolean|

Source:

* [fabric.js](fabric.js.html), [line 12361](fabric.js.html#line12361)

##### Returns:

object with "x" and "y" number values

Type

Object

#### [getSelectionContext()&rarr; {CanvasRenderingContext2D}](#getSelectionContext)

Returns context of canvas where object selection is drawn

Source:

* [fabric.js](fabric.js.html), [line 12502](fabric.js.html#line12502)

##### Returns:

Type

CanvasRenderingContext2D

#### [getSelectionElement()&rarr; {HTMLCanvasElement}](#getSelectionElement)

Returns canvas element on which object selection is drawn

Source:

* [fabric.js](fabric.js.html), [line 12510](fabric.js.html#line12510)

##### Returns:

Type

HTMLCanvasElement

#### [getVpCenter()&rarr; {[fabric.Point](fabric.Point.html)}](#getVpCenter)

Calculate the point in canvas that correspond to the center of actual viewport.

Inherited From:

* [fabric.StaticCanvas#getVpCenter](fabric.StaticCanvas.html#getVpCenter)

Source:

* [fabric.js](fabric.js.html), [line 9851](fabric.js.html#line9851)

##### Returns:

vpCenter, viewport center

Type

[fabric.Point](fabric.Point.html)

#### [getWidth()&rarr; {Number}](#getWidth)

Returns canvas width (in px)

Inherited From:

* [fabric.StaticCanvas#getWidth](fabric.StaticCanvas.html#getWidth)

Source:

* [fabric.js](fabric.js.html), [line 9283](fabric.js.html#line9283)

##### Returns:

Type

Number

#### [getZoom()&rarr; {Number}](#getZoom)

Returns canvas zoom level

Inherited From:

* [fabric.StaticCanvas#getZoom](fabric.StaticCanvas.html#getZoom)

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

Overrides:

* [fabric.StaticCanvas#initialize](fabric.StaticCanvas.html#initialize)

Source:

* [fabric.js](fabric.js.html), [line 11559](fabric.js.html#line11559)

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

Inherited From:

* [fabric.StaticCanvas#insertAt](fabric.StaticCanvas.html#insertAt)

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

Inherited From:

* [fabric.StaticCanvas#isEmpty](fabric.StaticCanvas.html#isEmpty)

Mixes In:

* [fabric.Collection.isEmpty](fabric.Collection.html#.isEmpty)

Source:

* [fabric.js](fabric.js.html), [line 485](fabric.js.html#line485)

##### Returns:

true if collection is empty

Type

Boolean

#### [isTargetTransparent(target, x, y)&rarr; {Boolean}](#isTargetTransparent)

Returns true if object is transparent at a certain location

##### Parameters:
|Name|Type|Description| |
|`target`|[fabric.Object](fabric.Object.html)|Object to check|
|`x`|Number|Left coordinate|
|`y`|Number|Top coordinate|

Source:

* [fabric.js](fabric.js.html), [line 11973](fabric.js.html#line11973)

##### Returns:

Type

Boolean

#### [item(index)&rarr; {Self}](#item)

Returns object at specified index

##### Parameters:
|Name|Type|Description| |
|`index`|Number|

Inherited From:

* [fabric.StaticCanvas#item](fabric.StaticCanvas.html#item)

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

Inherited From:

* [fabric.StaticCanvas#loadFromJSON](fabric.StaticCanvas.html#loadFromJSON)

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

Inherited From:

* [fabric.StaticCanvas#moveTo](fabric.StaticCanvas.html#moveTo)

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

Inherited From:

* [fabric.StaticCanvas#relativePan](fabric.StaticCanvas.html#relativePan)

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

Inherited From:

* [fabric.StaticCanvas#remove](fabric.StaticCanvas.html#remove)

Mixes In:

* [fabric.Collection.remove](fabric.Collection.html#.remove)

Source:

* [fabric.js](fabric.js.html), [line 417](fabric.js.html#line417)

##### Returns:

thisArg

Type

Self

#### [removeListeners()](#removeListeners)

Removes all event listeners

Source:

* [fabric.js](fabric.js.html), [line 12883](fabric.js.html#line12883)

#### [renderAll()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#renderAll)

Renders both the top canvas and the secondary container canvas.

Overrides:

* [fabric.StaticCanvas#renderAll](fabric.StaticCanvas.html#renderAll)

Source:

* [fabric.js](fabric.js.html), [line 11914](fabric.js.html#line11914)

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

Inherited From:

* [fabric.StaticCanvas#renderCanvas](fabric.StaticCanvas.html#renderCanvas)

Source:

* [fabric.js](fabric.js.html), [line 9649](fabric.js.html#line9649)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [renderTop()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#renderTop)

Method to render only the top canvas. Also used to render the group selection box.

Source:

* [fabric.js](fabric.js.html), [line 11948](fabric.js.html#line11948)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [requestRenderAll()&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#requestRenderAll)

Append a renderAll request to next animation frame. unless one is already in progress, in that case nothing is done a boolean flag will avoid appending more.

Inherited From:

* [fabric.StaticCanvas#requestRenderAll](fabric.StaticCanvas.html#requestRenderAll)

Source:

* [fabric.js](fabric.js.html), [line 9610](fabric.js.html#line9610)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [restorePointerVpt(pointer)&rarr; {Object}](#restorePointerVpt)

Returns pointer coordinates without the effect of the viewport

##### Parameters:
|Name|Type|Description| |
|`pointer`|Object|with "x" and "y" number values|

Source:

* [fabric.js](fabric.js.html), [line 12336](fabric.js.html#line12336)

##### Returns:

object with "x" and "y" number values

Type

Object

#### [sendBackwards(object, intersectingopt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#sendBackwards)

Moves an object or a selection down in stack of drawn objects An optional parameter, intersecting allows to move the object in behind the first intersecting object. Where intersection is calculated with bounding box. If no intersection is found, there will not be change in the stack.

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to send|
|`intersecting`|Boolean|optional|If \`true\`, send object behind next lower intersecting object|

Inherited From:

* [fabric.StaticCanvas#sendBackwards](fabric.StaticCanvas.html#sendBackwards)

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

Inherited From:

* [fabric.StaticCanvas#sendToBack](fabric.StaticCanvas.html#sendToBack)

Source:

* [fabric.js](fabric.js.html), [line 10283](fabric.js.html#line10283)

##### Returns:

thisArg

Type

[fabric.Canvas](fabric.Canvas.html)

#### [setActiveObject(object, eopt)&rarr; {[fabric.Canvas](fabric.Canvas.html)}](#setActiveObject)

Sets given object as the only active object on canvas

##### Parameters:
|Name|Type|Attributes|Description| |
|`object`|[fabric.Object](fabric.Object.html)|Object to set as an active one|
|`e`|Event|optional|Event (passed along when firing "object:selected")|

Source:

* [fabric.js](fabric.js.html), [line 12614](fabric.js.html#line12614)

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

Inherited From:

* [fabric.StaticCanvas#setBackgroundColor](fabric.StaticCanvas.html#setBackgroundColor)

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

Inherited From:

* [fabric.StaticCanvas#setBackgroundImage](fabric.StaticCanvas.html#setBackgroundImage)

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

#### [setCursor(value)](#setCursor)

Set the cursor type of the canvas element

##### Parameters:
|Name|Type|Description| |
|`value`|String|Cursor type of the canvas element.|

Source:

* [fabric.js](fabric.js.html), [line 12182](fabric.js.html#line12182)

See:

* [http://www.w3.org/TR/css3-ui/#cursor](http://www.w3.org/TR/css3-ui/#cursor)

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

Inherited From:

* [fabric.StaticCanvas#setDimensions](fabric.StaticCanvas.html#setDimensions)

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

Inherited From:

* [fabric.StaticCanvas#setHeight](fabric.StaticCanvas.html#setHeight)

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

Inherited From:

* [fabric.StaticCanvas#setOverlayColor](fabric.StaticCanvas.html#setOverlayColor)

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

Inherited From:

* [fabric.StaticCanvas#setOverlayImage](fabric.StaticCanvas.html#setOverlayImage)

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

Overrides:

* [fabric.StaticCanvas#setViewportTransform](fabric.StaticCanvas.html#setViewportTransform)

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

Inherited From:

* [fabric.StaticCanvas#setWidth](fabric.StaticCanvas.html#setWidth)

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

Inherited From:

* [fabric.StaticCanvas#setZoom](fabric.StaticCanvas.html#setZoom)

Source:

* [fabric.js](fabric.js.html), [line 9475](fabric.js.html#line9475)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)

#### [size()&rarr; {Number}](#size)

Returns a size of a collection (i.e: length of an array containing its objects)

Inherited From:

* [fabric.StaticCanvas#size](fabric.StaticCanvas.html#size)

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

Inherited From:

* [fabric.StaticCanvas#straightenObject](fabric.StaticCanvas.html#straightenObject)

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

Inherited From:

* [fabric.StaticCanvas#toCanvasElement](fabric.StaticCanvas.html#toCanvasElement)

Source:

* [fabric.js](fabric.js.html), [line 14033](fabric.js.html#line14033)

#### [toDatalessJSON(propertiesToIncludeopt)&rarr; {String}](#toDatalessJSON)

Returns dataless JSON representation of canvas

##### Parameters:
|Name|Type|Attributes|Description| |
|`propertiesToInclude`|Array|optional|Any properties that you might want to additionally include in the output|

Inherited From:

* [fabric.StaticCanvas#toDatalessJSON](fabric.StaticCanvas.html#toDatalessJSON)

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

Inherited From:

* [fabric.StaticCanvas#toDatalessObject](fabric.StaticCanvas.html#toDatalessObject)

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

Inherited From:

* [fabric.StaticCanvas#toDataURL](fabric.StaticCanvas.html#toDataURL)

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

Inherited From:

* [fabric.StaticCanvas#toJSON](fabric.StaticCanvas.html#toJSON)

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

Inherited From:

* [fabric.StaticCanvas#toObject](fabric.StaticCanvas.html#toObject)

Source:

* [fabric.js](fabric.js.html), [line 9885](fabric.js.html#line9885)

##### Returns:

object representation of an instance

Type

Object

#### [toString()&rarr; {String}](#toString)

Returns a string representation of an instance

Inherited From:

* [fabric.StaticCanvas#toString](fabric.StaticCanvas.html#toString)

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

Inherited From:

* [fabric.StaticCanvas#toSVG](fabric.StaticCanvas.html#toSVG)

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

Inherited From:

* [fabric.StaticCanvas#viewportCenterObject](fabric.StaticCanvas.html#viewportCenterObject)

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

Inherited From:

* [fabric.StaticCanvas#viewportCenterObjectH](fabric.StaticCanvas.html#viewportCenterObjectH)

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

Inherited From:

* [fabric.StaticCanvas#viewportCenterObjectV](fabric.StaticCanvas.html#viewportCenterObjectV)

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

Inherited From:

* [fabric.StaticCanvas#zoomToPoint](fabric.StaticCanvas.html#zoomToPoint)

Source:

* [fabric.js](fabric.js.html), [line 9457](fabric.js.html#line9457)

##### Returns:

instance

Type

[fabric.Canvas](fabric.Canvas.html)
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:17 GMT+0100 (Central European Standard Time)