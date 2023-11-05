# Interface: CanvasOptions

## Hierarchy

- [`StaticCanvasOptions`](/apidocs/interfaces/StaticCanvasOptions.md)

- `CanvasTransformOptions`

- `CanvasSelectionOptions`

- `CanvasCursorOptions`

- `TargetFindOptions`

- `CanvasEventsOptions`

  ↳ **`CanvasOptions`**

## Implemented by

- [`Canvas`](/apidocs/classes/Canvas.md)

## Table of contents

### Properties

- [allowTouchScrolling](/apidocs/interfaces/CanvasOptions.md#allowtouchscrolling)
- [altActionKey](/apidocs/interfaces/CanvasOptions.md#altactionkey)
- [altSelectionKey](/apidocs/interfaces/CanvasOptions.md#altselectionkey)
- [backgroundColor](/apidocs/interfaces/CanvasOptions.md#backgroundcolor)
- [backgroundImage](/apidocs/interfaces/CanvasOptions.md#backgroundimage)
- [backgroundVpt](/apidocs/interfaces/CanvasOptions.md#backgroundvpt)
- [centeredKey](/apidocs/interfaces/CanvasOptions.md#centeredkey)
- [centeredRotation](/apidocs/interfaces/CanvasOptions.md#centeredrotation)
- [centeredScaling](/apidocs/interfaces/CanvasOptions.md#centeredscaling)
- [clipPath](/apidocs/interfaces/CanvasOptions.md#clippath)
- [containerClass](/apidocs/interfaces/CanvasOptions.md#containerclass)
- [controlsAboveOverlay](/apidocs/interfaces/CanvasOptions.md#controlsaboveoverlay)
- [defaultCursor](/apidocs/interfaces/CanvasOptions.md#defaultcursor)
- [enablePointerEvents](/apidocs/interfaces/CanvasOptions.md#enablepointerevents)
- [enableRetinaScaling](/apidocs/interfaces/CanvasOptions.md#enableretinascaling)
- [fireMiddleClick](/apidocs/interfaces/CanvasOptions.md#firemiddleclick)
- [fireRightClick](/apidocs/interfaces/CanvasOptions.md#firerightclick)
- [freeDrawingCursor](/apidocs/interfaces/CanvasOptions.md#freedrawingcursor)
- [height](/apidocs/interfaces/CanvasOptions.md#height)
- [hoverCursor](/apidocs/interfaces/CanvasOptions.md#hovercursor)
- [imageSmoothingEnabled](/apidocs/interfaces/CanvasOptions.md#imagesmoothingenabled)
- [includeDefaultValues](/apidocs/interfaces/CanvasOptions.md#includedefaultvalues)
- [moveCursor](/apidocs/interfaces/CanvasOptions.md#movecursor)
- [notAllowedCursor](/apidocs/interfaces/CanvasOptions.md#notallowedcursor)
- [overlayColor](/apidocs/interfaces/CanvasOptions.md#overlaycolor)
- [overlayImage](/apidocs/interfaces/CanvasOptions.md#overlayimage)
- [overlayVpt](/apidocs/interfaces/CanvasOptions.md#overlayvpt)
- [perPixelTargetFind](/apidocs/interfaces/CanvasOptions.md#perpixeltargetfind)
- [preserveObjectStacking](/apidocs/interfaces/CanvasOptions.md#preserveobjectstacking)
- [renderOnAddRemove](/apidocs/interfaces/CanvasOptions.md#renderonaddremove)
- [selection](/apidocs/interfaces/CanvasOptions.md#selection)
- [selectionBorderColor](/apidocs/interfaces/CanvasOptions.md#selectionbordercolor)
- [selectionColor](/apidocs/interfaces/CanvasOptions.md#selectioncolor)
- [selectionDashArray](/apidocs/interfaces/CanvasOptions.md#selectiondasharray)
- [selectionFullyContained](/apidocs/interfaces/CanvasOptions.md#selectionfullycontained)
- [selectionKey](/apidocs/interfaces/CanvasOptions.md#selectionkey)
- [selectionLineWidth](/apidocs/interfaces/CanvasOptions.md#selectionlinewidth)
- [skipOffscreen](/apidocs/interfaces/CanvasOptions.md#skipoffscreen)
- [skipTargetFind](/apidocs/interfaces/CanvasOptions.md#skiptargetfind)
- [stopContextMenu](/apidocs/interfaces/CanvasOptions.md#stopcontextmenu)
- [svgViewportTransformation](/apidocs/interfaces/CanvasOptions.md#svgviewporttransformation)
- [targetFindTolerance](/apidocs/interfaces/CanvasOptions.md#targetfindtolerance)
- [uniScaleKey](/apidocs/interfaces/CanvasOptions.md#uniscalekey)
- [uniformScaling](/apidocs/interfaces/CanvasOptions.md#uniformscaling)
- [viewportTransform](/apidocs/interfaces/CanvasOptions.md#viewporttransform)
- [width](/apidocs/interfaces/CanvasOptions.md#width)

## Properties

### allowTouchScrolling

• **allowTouchScrolling**: `boolean`

Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas

**`Default`**

```ts

```

**`Todo`**

move to Canvas

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[allowTouchScrolling](/apidocs/interfaces/StaticCanvasOptions.md#allowtouchscrolling)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:161](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L161)

___

### altActionKey

• **altActionKey**: [`TOptionalModifierKey`](/apidocs/modules.md#toptionalmodifierkey)

Indicates which key enable alternate action on corner
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Inherited from

CanvasTransformOptions.altActionKey

#### Defined in

[src/canvas/CanvasOptions.ts:68](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L68)

___

### altSelectionKey

• **altSelectionKey**: [`TOptionalModifierKey`](/apidocs/modules.md#toptionalmodifierkey)

Indicates which key enable alternative selection
in case of target overlapping with active object
values: 'altKey', 'shiftKey', 'ctrlKey'.
For a series of reason that come from the general expectations on how
things should work, this feature works only for preserveObjectStacking true.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.

**`Since`**

1.6.5

**`Default`**

```ts

```

#### Inherited from

CanvasSelectionOptions.altSelectionKey

#### Defined in

[src/canvas/CanvasOptions.ts:103](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L103)

___

### backgroundColor

• **backgroundColor**: `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

Background color of canvas instance.

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[backgroundColor](/apidocs/interfaces/StaticCanvasOptions.md#backgroundcolor)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:21](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L21)

___

### backgroundImage

• `Optional` **backgroundImage**: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[backgroundImage](/apidocs/interfaces/StaticCanvasOptions.md#backgroundimage)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:31](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L31)

___

### backgroundVpt

• **backgroundVpt**: `boolean`

if set to false background image is not affected by viewport transform

**`Since`**

1.6.3

**`Todo`**

we should really find a different way to do this

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[backgroundVpt](/apidocs/interfaces/StaticCanvasOptions.md#backgroundvpt)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:14](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L14)

___

### centeredKey

• **centeredKey**: [`TOptionalModifierKey`](/apidocs/modules.md#toptionalmodifierkey)

Indicates which key enable centered Transform
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Inherited from

CanvasTransformOptions.centeredKey

#### Defined in

[src/canvas/CanvasOptions.ts:57](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L57)

___

### centeredRotation

• **centeredRotation**: `boolean`

When true, objects use center point as the origin of rotate transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Inherited from

CanvasTransformOptions.centeredRotation

#### Defined in

[src/canvas/CanvasOptions.ts:46](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L46)

___

### centeredScaling

• **centeredScaling**: `boolean`

When true, objects use center point as the origin of scale transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Inherited from

CanvasTransformOptions.centeredScaling

#### Defined in

[src/canvas/CanvasOptions.ts:37](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L37)

___

### clipPath

• `Optional` **clipPath**: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[clipPath](/apidocs/interfaces/StaticCanvasOptions.md#clippath)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:106](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L106)

___

### containerClass

• **containerClass**: `string`

Default element class that's given to wrapper (div) element of canvas

**`Default`**

```ts

```

**`Deprecated`**

customize [CanvasDOMManager](/apidocs/classes/CanvasDOMManager.md) instead or access elements directly

#### Defined in

[src/canvas/CanvasOptions.ts:252](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L252)

___

### controlsAboveOverlay

• **controlsAboveOverlay**: `boolean`

Indicates whether object controls (borders/controls) are rendered above overlay image

**`Default`**

```ts

```

**`Todo`**

move to Canvas

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[controlsAboveOverlay](/apidocs/interfaces/StaticCanvasOptions.md#controlsaboveoverlay)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:152](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L152)

___

### defaultCursor

• **defaultCursor**: `string`

Default cursor value used for the entire canvas

**`Default`**

```ts
default
```

#### Inherited from

CanvasCursorOptions.defaultCursor

#### Defined in

[src/canvas/CanvasOptions.ts:161](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L161)

___

### enablePointerEvents

• **enablePointerEvents**: `boolean`

When the option is enabled, PointerEvent is used instead of TPointerEvent.

**`Default`**

```ts

```

#### Inherited from

CanvasEventsOptions.enablePointerEvents

#### Defined in

[src/canvas/CanvasOptions.ts:236](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L236)

___

### enableRetinaScaling

• **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[enableRetinaScaling](/apidocs/interfaces/StaticCanvasOptions.md#enableretinascaling)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:90](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L90)

___

### fireMiddleClick

• **fireMiddleClick**: `boolean`

Indicates if the canvas can fire middle click events

**`Since`**

1.7.8

**`Default`**

```ts

```

#### Inherited from

CanvasEventsOptions.fireMiddleClick

#### Defined in

[src/canvas/CanvasOptions.ts:229](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L229)

___

### fireRightClick

• **fireRightClick**: `boolean`

Indicates if the canvas can fire right click events

**`Since`**

1.6.5

**`Default`**

```ts

```

#### Inherited from

CanvasEventsOptions.fireRightClick

#### Defined in

[src/canvas/CanvasOptions.ts:221](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L221)

___

### freeDrawingCursor

• **freeDrawingCursor**: `string`

Cursor value used during free drawing

**`Default`**

```ts
crosshair
```

#### Inherited from

CanvasCursorOptions.freeDrawingCursor

#### Defined in

[src/canvas/CanvasOptions.ts:168](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L168)

___

### height

• **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[height](/apidocs/interfaces/StaticCanvasOptions.md#height)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:143](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L143)

___

### hoverCursor

• **hoverCursor**: `string`

Default cursor value used when hovering over an object on canvas

**`Default`**

```ts
move
```

#### Inherited from

CanvasCursorOptions.hoverCursor

#### Defined in

[src/canvas/CanvasOptions.ts:147](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L147)

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[imageSmoothingEnabled](/apidocs/interfaces/StaticCanvasOptions.md#imagesmoothingenabled)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:97](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L97)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[includeDefaultValues](/apidocs/interfaces/StaticCanvasOptions.md#includedefaultvalues)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:116](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L116)

___

### moveCursor

• **moveCursor**: `string`

Default cursor value used when moving an object on canvas

**`Default`**

```ts
move
```

#### Inherited from

CanvasCursorOptions.moveCursor

#### Defined in

[src/canvas/CanvasOptions.ts:154](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L154)

___

### notAllowedCursor

• **notAllowedCursor**: `string`

Cursor value used for disabled elements ( corners with disabled action )

**`Since`**

2.0.0

**`Default`**

```ts
not-allowed
```

#### Inherited from

CanvasCursorOptions.notAllowedCursor

#### Defined in

[src/canvas/CanvasOptions.ts:176](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L176)

___

### overlayColor

• **overlayColor**: `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

Overlay color of canvas instance.

**`Since`**

1.3.9

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[overlayColor](/apidocs/interfaces/StaticCanvasOptions.md#overlaycolor)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:48](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L48)

___

### overlayImage

• `Optional` **overlayImage**: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[overlayImage](/apidocs/interfaces/StaticCanvasOptions.md#overlayimage)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:58](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L58)

___

### overlayVpt

• **overlayVpt**: `boolean`

if set to false overlay image is not affected by viewport transform

**`Since`**

1.6.3

**`Todo`**

we should really find a different way to do this

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[overlayVpt](/apidocs/interfaces/StaticCanvasOptions.md#overlayvpt)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:40](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L40)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

When true, object detection happens on per-pixel basis rather than on per-bounding-box

**`Default`**

```ts

```

#### Inherited from

TargetFindOptions.perPixelTargetFind

#### Defined in

[src/canvas/CanvasOptions.ts:185](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L185)

___

### preserveObjectStacking

• **preserveObjectStacking**: `boolean`

Indicates whether objects should remain in current stack position when selected.
When false objects are brought to top and rendered as part of the selection group

**`Default`**

```ts

```

#### Defined in

[src/canvas/CanvasOptions.ts:260](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L260)

___

### renderOnAddRemove

• **renderOnAddRemove**: `boolean`

Indicates whether [StaticCanvas#add](/apidocs/classes/StaticCanvas.md#add), [StaticCanvas#insertAt](/apidocs/classes/StaticCanvas.md#insertat) and [StaticCanvas#remove](/apidocs/classes/StaticCanvas.md#remove),
StaticCanvas#moveTo, [StaticCanvas#clear](/apidocs/classes/StaticCanvas.md#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[renderOnAddRemove](/apidocs/interfaces/StaticCanvasOptions.md#renderonaddremove)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:72](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L72)

___

### selection

• **selection**: `boolean`

Indicates whether group selection should be enabled

**`Default`**

```ts

```

#### Inherited from

CanvasSelectionOptions.selection

#### Defined in

[src/canvas/CanvasOptions.ts:77](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L77)

___

### selectionBorderColor

• **selectionBorderColor**: `string`

Color of the border of selection (usually slightly darker than color of selection itself)

**`Default`**

```ts

```

#### Inherited from

CanvasSelectionOptions.selectionBorderColor

#### Defined in

[src/canvas/CanvasOptions.ts:124](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L124)

___

### selectionColor

• **selectionColor**: `string`

Color of selection

**`Default`**

```ts

```

#### Inherited from

CanvasSelectionOptions.selectionColor

#### Defined in

[src/canvas/CanvasOptions.ts:110](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L110)

___

### selectionDashArray

• **selectionDashArray**: `number`[]

Default dash array pattern
If not empty the selection border is dashed

#### Inherited from

CanvasSelectionOptions.selectionDashArray

#### Defined in

[src/canvas/CanvasOptions.ts:117](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L117)

___

### selectionFullyContained

• **selectionFullyContained**: `boolean`

Select only shapes that are fully contained in the dragged selection rectangle.

**`Default`**

```ts

```

#### Inherited from

CanvasSelectionOptions.selectionFullyContained

#### Defined in

[src/canvas/CanvasOptions.ts:138](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L138)

___

### selectionKey

• **selectionKey**: [`TOptionalModifierKey`](/apidocs/modules.md#toptionalmodifierkey) \| (``"altKey"`` \| ``"shiftKey"`` \| ``"ctrlKey"`` \| ``"metaKey"``)[]

Indicates which key or keys enable multiple click selection
Pass value as a string or array of strings
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or empty or containing any other string that is not a modifier key
feature is disabled.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Inherited from

CanvasSelectionOptions.selectionKey

#### Defined in

[src/canvas/CanvasOptions.ts:89](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L89)

___

### selectionLineWidth

• **selectionLineWidth**: `number`

Width of a line used in object/group selection

**`Default`**

```ts

```

#### Inherited from

CanvasSelectionOptions.selectionLineWidth

#### Defined in

[src/canvas/CanvasOptions.ts:131](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L131)

___

### skipOffscreen

• **skipOffscreen**: `boolean`

Based on vptCoords and object.aCoords, skip rendering of objects that
are not included in current viewport.
May greatly help in applications with crowded canvas and use of zoom/pan
If One of the corner of the bounding box of the object is on the canvas
the objects get rendered.

**`Default`**

```ts
true
```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[skipOffscreen](/apidocs/interfaces/StaticCanvasOptions.md#skipoffscreen)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:83](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L83)

___

### skipTargetFind

• **skipTargetFind**: `boolean`

When true, target detection is skipped. Target detection will return always undefined.
click selection won't work anymore, events will fire with no targets.
if something is selected before setting it to true, it will be deselected at the first click.
area selection will still work. check the `selection` property too.
if you deactivate both, you should look into staticCanvas.

**`Default`**

```ts

```

#### Inherited from

TargetFindOptions.skipTargetFind

#### Defined in

[src/canvas/CanvasOptions.ts:203](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L203)

___

### stopContextMenu

• **stopContextMenu**: `boolean`

Indicates if the right click on canvas can output the context menu or not

**`Since`**

1.6.5

**`Default`**

```ts

```

#### Inherited from

CanvasEventsOptions.stopContextMenu

#### Defined in

[src/canvas/CanvasOptions.ts:213](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L213)

___

### svgViewportTransformation

• **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[svgViewportTransformation](/apidocs/interfaces/StaticCanvasOptions.md#svgviewporttransformation)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:124](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L124)

___

### targetFindTolerance

• **targetFindTolerance**: `number`

Number of pixels around target pixel to tolerate (consider active) during object detection

**`Default`**

```ts

```

#### Inherited from

TargetFindOptions.targetFindTolerance

#### Defined in

[src/canvas/CanvasOptions.ts:192](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L192)

___

### uniScaleKey

• **uniScaleKey**: [`TOptionalModifierKey`](/apidocs/modules.md#toptionalmodifierkey)

Indicates which key switches uniform scaling.
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.
totally wrong named. this sounds like `uniform scaling`
if Canvas.uniformScaling is true, pressing this will set it to false
and viceversa.

**`Since`**

1.6.2

**`Default`**

```ts

```

#### Inherited from

CanvasTransformOptions.uniScaleKey

#### Defined in

[src/canvas/CanvasOptions.ts:28](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L28)

___

### uniformScaling

• **uniformScaling**: `boolean`

When true, objects can be transformed by one side (unproportionately)
when dragged on the corners that normally would not do that.

**`Default`**

```ts

```

**`Since`**

fabric 4.0 // changed name and default value

#### Inherited from

CanvasTransformOptions.uniformScaling

#### Defined in

[src/canvas/CanvasOptions.ts:14](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/CanvasOptions.ts#L14)

___

### viewportTransform

• **viewportTransform**: [`TMat2D`](/apidocs/modules.md#tmat2d)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

**`Example`**

Default transform
```ts
canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
```

**`Example`**

Scale by 70% and translate toward bottom-right by 50, without skewing
```ts
canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
```

**`Default`**

```ts

```

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[viewportTransform](/apidocs/interfaces/StaticCanvasOptions.md#viewporttransform)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:172](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L172)

___

### width

• **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Inherited from

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[width](/apidocs/interfaces/StaticCanvasOptions.md#width)

#### Defined in

[src/canvas/StaticCanvasOptions.ts:136](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvasOptions.ts#L136)
