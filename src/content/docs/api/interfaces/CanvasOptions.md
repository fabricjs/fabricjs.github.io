---
editUrl: false
next: false
prev: false
title: "CanvasOptions"
---

## Extends

- [`StaticCanvasOptions`](StaticCanvasOptions.md).`CanvasTransformOptions`.`CanvasSelectionOptions`.`CanvasCursorOptions`.`TargetFindOptions`.`CanvasEventsOptions`

## Properties

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas

#### Default

```ts

```

#### Todo

move to Canvas

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`allowTouchScrolling`](StaticCanvasOptions.md#allowtouchscrolling)

#### Source

src/canvas/StaticCanvasOptions.ts:161

***

### altActionKey

> **altActionKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md)

Indicates which key enable alternate action on corner
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.altActionKey`

#### Source

src/canvas/CanvasOptions.ts:67

***

### altSelectionKey

> **altSelectionKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md)

Indicates which key enable alternative selection
in case of target overlapping with active object
values: 'altKey', 'shiftKey', 'ctrlKey'.
For a series of reason that come from the general expectations on how
things should work, this feature works only for preserveObjectStacking true.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.

#### Since

1.6.5

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.altSelectionKey`

#### Source

src/canvas/CanvasOptions.ts:102

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](../type-aliases/TFiller.md)

Background color of canvas instance.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`backgroundColor`](StaticCanvasOptions.md#backgroundcolor)

#### Source

src/canvas/StaticCanvasOptions.ts:21

***

### backgroundImage?

> **`optional`** **backgroundImage**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`backgroundImage`](StaticCanvasOptions.md#backgroundimage)

#### Source

src/canvas/StaticCanvasOptions.ts:31

***

### backgroundVpt

> **backgroundVpt**: `boolean`

if set to false background image is not affected by viewport transform

#### Since

1.6.3

#### Todo

we should really find a different way to do this

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`backgroundVpt`](StaticCanvasOptions.md#backgroundvpt)

#### Source

src/canvas/StaticCanvasOptions.ts:14

***

### centeredKey

> **centeredKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md)

Indicates which key enable centered Transform
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.centeredKey`

#### Source

src/canvas/CanvasOptions.ts:56

***

### centeredRotation

> **centeredRotation**: `boolean`

When true, objects use center point as the origin of rotate transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.centeredRotation`

#### Source

src/canvas/CanvasOptions.ts:45

***

### centeredScaling

> **centeredScaling**: `boolean`

When true, objects use center point as the origin of scale transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.centeredScaling`

#### Source

src/canvas/CanvasOptions.ts:36

***

### clipPath?

> **`optional`** **clipPath**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`clipPath`](StaticCanvasOptions.md#clippath)

#### Source

src/canvas/StaticCanvasOptions.ts:106

***

### ~~containerClass~~

> **containerClass**: `string`

Default element class that's given to wrapper (div) element of canvas

#### Default

```ts

```

:::caution[Deprecated]
customize [CanvasDOMManager](../classes/CanvasDOMManager.md) instead or access elements directly
:::

#### Source

src/canvas/CanvasOptions.ts:251

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

Indicates whether object controls (borders/controls) are rendered above overlay image

#### Default

```ts

```

#### Todo

move to Canvas

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`controlsAboveOverlay`](StaticCanvasOptions.md#controlsaboveoverlay)

#### Source

src/canvas/StaticCanvasOptions.ts:152

***

### defaultCursor

> **defaultCursor**: `string`

Default cursor value used for the entire canvas

#### Default

```ts
default
```

#### Inherited from

`CanvasCursorOptions.defaultCursor`

#### Source

src/canvas/CanvasOptions.ts:160

***

### enablePointerEvents

> **enablePointerEvents**: `boolean`

When the option is enabled, PointerEvent is used instead of TPointerEvent.

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.enablePointerEvents`

#### Source

src/canvas/CanvasOptions.ts:235

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`enableRetinaScaling`](StaticCanvasOptions.md#enableretinascaling)

#### Source

src/canvas/StaticCanvasOptions.ts:90

***

### fireMiddleClick

> **fireMiddleClick**: `boolean`

Indicates if the canvas can fire middle click events

#### Since

1.7.8

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.fireMiddleClick`

#### Source

src/canvas/CanvasOptions.ts:228

***

### fireRightClick

> **fireRightClick**: `boolean`

Indicates if the canvas can fire right click events

#### Since

1.6.5

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.fireRightClick`

#### Source

src/canvas/CanvasOptions.ts:220

***

### freeDrawingCursor

> **freeDrawingCursor**: `string`

Cursor value used during free drawing

#### Default

```ts
crosshair
```

#### Inherited from

`CanvasCursorOptions.freeDrawingCursor`

#### Source

src/canvas/CanvasOptions.ts:167

***

### height

> **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`height`](StaticCanvasOptions.md#height)

#### Source

src/canvas/StaticCanvasOptions.ts:143

***

### hoverCursor

> **hoverCursor**: `string`

Default cursor value used when hovering over an object on canvas

#### Default

```ts
move
```

#### Inherited from

`CanvasCursorOptions.hoverCursor`

#### Source

src/canvas/CanvasOptions.ts:146

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`imageSmoothingEnabled`](StaticCanvasOptions.md#imagesmoothingenabled)

#### Source

src/canvas/StaticCanvasOptions.ts:97

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`includeDefaultValues`](StaticCanvasOptions.md#includedefaultvalues)

#### Source

src/canvas/StaticCanvasOptions.ts:116

***

### moveCursor

> **moveCursor**: `string`

Default cursor value used when moving an object on canvas

#### Default

```ts
move
```

#### Inherited from

`CanvasCursorOptions.moveCursor`

#### Source

src/canvas/CanvasOptions.ts:153

***

### notAllowedCursor

> **notAllowedCursor**: `string`

Cursor value used for disabled elements ( corners with disabled action )

#### Since

2.0.0

#### Default

```ts
not-allowed
```

#### Inherited from

`CanvasCursorOptions.notAllowedCursor`

#### Source

src/canvas/CanvasOptions.ts:175

***

### overlayColor

> **overlayColor**: `string` \| [`TFiller`](../type-aliases/TFiller.md)

Overlay color of canvas instance.

#### Since

1.3.9

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`overlayColor`](StaticCanvasOptions.md#overlaycolor)

#### Source

src/canvas/StaticCanvasOptions.ts:48

***

### overlayImage?

> **`optional`** **overlayImage**: [`FabricObject`](../classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`overlayImage`](StaticCanvasOptions.md#overlayimage)

#### Source

src/canvas/StaticCanvasOptions.ts:58

***

### overlayVpt

> **overlayVpt**: `boolean`

if set to false overlay image is not affected by viewport transform

#### Since

1.6.3

#### Todo

we should really find a different way to do this

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`overlayVpt`](StaticCanvasOptions.md#overlayvpt)

#### Source

src/canvas/StaticCanvasOptions.ts:40

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When true, object detection happens on per-pixel basis rather than on per-bounding-box

#### Default

```ts

```

#### Inherited from

`TargetFindOptions.perPixelTargetFind`

#### Source

src/canvas/CanvasOptions.ts:184

***

### preserveObjectStacking

> **preserveObjectStacking**: `boolean`

Indicates whether objects should remain in current stack position when selected.
When false objects are brought to top and rendered as part of the selection group

#### Default

```ts

```

#### Source

src/canvas/CanvasOptions.ts:259

***

### renderOnAddRemove

> **renderOnAddRemove**: `boolean`

Indicates whether [StaticCanvas#add](../../../../api/interfaces/classes/staticcanvas/#add), [StaticCanvas#insertAt](../../../../api/interfaces/classes/staticcanvas/#insertat) and [StaticCanvas#remove](../../../../api/interfaces/classes/staticcanvas/#remove),
StaticCanvas#moveTo, [StaticCanvas#clear](../../../../api/interfaces/classes/staticcanvas/#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`renderOnAddRemove`](StaticCanvasOptions.md#renderonaddremove)

#### Source

src/canvas/StaticCanvasOptions.ts:72

***

### selection

> **selection**: `boolean`

Indicates whether group selection should be enabled

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selection`

#### Source

src/canvas/CanvasOptions.ts:76

***

### selectionBorderColor

> **selectionBorderColor**: `string`

Color of the border of selection (usually slightly darker than color of selection itself)

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionBorderColor`

#### Source

src/canvas/CanvasOptions.ts:123

***

### selectionColor

> **selectionColor**: `string`

Color of selection

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionColor`

#### Source

src/canvas/CanvasOptions.ts:109

***

### selectionDashArray

> **selectionDashArray**: `number`[]

Default dash array pattern
If not empty the selection border is dashed

#### Inherited from

`CanvasSelectionOptions.selectionDashArray`

#### Source

src/canvas/CanvasOptions.ts:116

***

### selectionFullyContained

> **selectionFullyContained**: `boolean`

Select only shapes that are fully contained in the dragged selection rectangle.

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionFullyContained`

#### Source

src/canvas/CanvasOptions.ts:137

***

### selectionKey

> **selectionKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md) \| (`"altKey"` \| `"shiftKey"` \| `"ctrlKey"` \| `"metaKey"`)[]

Indicates which key or keys enable multiple click selection
Pass value as a string or array of strings
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or empty or containing any other string that is not a modifier key
feature is disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionKey`

#### Source

src/canvas/CanvasOptions.ts:88

***

### selectionLineWidth

> **selectionLineWidth**: `number`

Width of a line used in object/group selection

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionLineWidth`

#### Source

src/canvas/CanvasOptions.ts:130

***

### skipOffscreen

> **skipOffscreen**: `boolean`

Based on vptCoords and object.aCoords, skip rendering of objects that
are not included in current viewport.
May greatly help in applications with crowded canvas and use of zoom/pan
If One of the corner of the bounding box of the object is on the canvas
the objects get rendered.

#### Default

```ts
true
```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`skipOffscreen`](StaticCanvasOptions.md#skipoffscreen)

#### Source

src/canvas/StaticCanvasOptions.ts:83

***

### skipTargetFind

> **skipTargetFind**: `boolean`

When true, target detection is skipped. Target detection will return always undefined.
click selection won't work anymore, events will fire with no targets.
if something is selected before setting it to true, it will be deselected at the first click.
area selection will still work. check the `selection` property too.
if you deactivate both, you should look into staticCanvas.

#### Default

```ts

```

#### Inherited from

`TargetFindOptions.skipTargetFind`

#### Source

src/canvas/CanvasOptions.ts:202

***

### stopContextMenu

> **stopContextMenu**: `boolean`

Indicates if the right click on canvas can output the context menu or not

#### Since

1.6.5

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.stopContextMenu`

#### Source

src/canvas/CanvasOptions.ts:212

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`svgViewportTransformation`](StaticCanvasOptions.md#svgviewporttransformation)

#### Source

src/canvas/StaticCanvasOptions.ts:124

***

### targetFindTolerance

> **targetFindTolerance**: `number`

Number of pixels around target pixel to tolerate (consider active) during object detection

#### Default

```ts

```

#### Inherited from

`TargetFindOptions.targetFindTolerance`

#### Source

src/canvas/CanvasOptions.ts:191

***

### uniScaleKey

> **uniScaleKey**: [`TOptionalModifierKey`](../type-aliases/TOptionalModifierKey.md)

Indicates which key switches uniform scaling.
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled.
totally wrong named. this sounds like `uniform scaling`
if Canvas.uniformScaling is true, pressing this will set it to false
and viceversa.

#### Since

1.6.2

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.uniScaleKey`

#### Source

src/canvas/CanvasOptions.ts:27

***

### uniformScaling

> **uniformScaling**: `boolean`

When true, objects can be transformed by one side (unproportionately)
when dragged on the corners that normally would not do that.

#### Default

```ts

```

#### Since

fabric 4.0 // changed name and default value

#### Inherited from

`CanvasTransformOptions.uniformScaling`

#### Source

src/canvas/CanvasOptions.ts:13

***

### viewportTransform

> **viewportTransform**: [`TMat2D`](../type-aliases/TMat2D.md)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

#### Example

```ts
canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
```

#### Example

```ts
canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
```

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`viewportTransform`](StaticCanvasOptions.md#viewporttransform)

#### Source

src/canvas/StaticCanvasOptions.ts:172

***

### width

> **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Inherited from

[`StaticCanvasOptions`](StaticCanvasOptions.md).[`width`](StaticCanvasOptions.md#width)

#### Source

src/canvas/StaticCanvasOptions.ts:136
