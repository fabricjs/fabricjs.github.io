---
editUrl: false
next: false
prev: false
title: "CanvasOptions"
---

Defined in: [src/canvas/CanvasOptions.ts:238](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L238)

## Extends

- [`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).`CanvasTransformOptions`.`CanvasSelectionOptions`.`CanvasCursorOptions`.`TargetFindOptions`.`CanvasEventsOptions`

## Properties

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:163](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L163)

Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
It gives PRIORITY to DOM scrolling, it doesn't make it always possible.
If is true, when using a touch event on the canvas, the canvas will scroll if scroll is possible.
If we are in drawing mode or if we are selecting an object the canvas preventDefault and so it won't scroll

#### Default

```ts

```

#### Todo

move to Canvas

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`allowTouchScrolling`](/api/interfaces/staticcanvasoptions/#allowtouchscrolling)

***

### altActionKey

> **altActionKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Defined in: [src/canvas/CanvasOptions.ts:67](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L67)

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

***

### altSelectionKey

> **altSelectionKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Defined in: [src/canvas/CanvasOptions.ts:102](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L102)

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

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/canvas/StaticCanvasOptions.ts:20](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L20)

Background color of canvas instance.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundColor`](/api/interfaces/staticcanvasoptions/#backgroundcolor)

***

### backgroundImage?

> `optional` **backgroundImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/canvas/StaticCanvasOptions.ts:30](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L30)

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundImage`](/api/interfaces/staticcanvasoptions/#backgroundimage)

***

### backgroundVpt

> **backgroundVpt**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:13](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L13)

if set to false background image is not affected by viewport transform

#### Since

1.6.3

#### Todo

we should really find a different way to do this

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundVpt`](/api/interfaces/staticcanvasoptions/#backgroundvpt)

***

### centeredKey

> **centeredKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Defined in: [src/canvas/CanvasOptions.ts:56](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L56)

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

***

### centeredRotation

> **centeredRotation**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:45](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L45)

When true, objects use center point as the origin of rotate transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.centeredRotation`

***

### centeredScaling

> **centeredScaling**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:36](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L36)

When true, objects use center point as the origin of scale transformation.
<b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

`CanvasTransformOptions.centeredScaling`

***

### clipPath?

> `optional` **clipPath**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/canvas/StaticCanvasOptions.ts:105](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L105)

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`clipPath`](/api/interfaces/staticcanvasoptions/#clippath)

***

### ~~containerClass~~

> **containerClass**: `string`

Defined in: [src/canvas/CanvasOptions.ts:251](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L251)

Default element class that's given to wrapper (div) element of canvas

:::caution[Deprecated]
customize [CanvasDOMManager](/api/classes/canvasdommanager/) instead or access elements directly
:::

#### Default

```ts

```

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:151](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L151)

Indicates whether object controls (borders/controls) are rendered above overlay image

#### Default

```ts

```

#### Todo

move to Canvas

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`controlsAboveOverlay`](/api/interfaces/staticcanvasoptions/#controlsaboveoverlay)

***

### defaultCursor

> **defaultCursor**: `string`

Defined in: [src/canvas/CanvasOptions.ts:160](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L160)

Default cursor value used for the entire canvas

#### Default

```ts
default
```

#### Inherited from

`CanvasCursorOptions.defaultCursor`

***

### enablePointerEvents

> **enablePointerEvents**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:235](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L235)

When the option is enabled, PointerEvent is used instead of TPointerEvent.

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.enablePointerEvents`

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:89](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L89)

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`enableRetinaScaling`](/api/interfaces/staticcanvasoptions/#enableretinascaling)

***

### fireMiddleClick

> **fireMiddleClick**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:228](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L228)

Indicates if the canvas can fire middle click events

#### Since

1.7.8

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.fireMiddleClick`

***

### fireRightClick

> **fireRightClick**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:220](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L220)

Indicates if the canvas can fire right click events

#### Since

1.6.5

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.fireRightClick`

***

### freeDrawingCursor

> **freeDrawingCursor**: `string`

Defined in: [src/canvas/CanvasOptions.ts:167](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L167)

Cursor value used during free drawing

#### Default

```ts
crosshair
```

#### Inherited from

`CanvasCursorOptions.freeDrawingCursor`

***

### height

> **height**: `number`

Defined in: [src/canvas/StaticCanvasOptions.ts:142](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L142)

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`height`](/api/interfaces/staticcanvasoptions/#height)

***

### hoverCursor

> **hoverCursor**: `string`

Defined in: [src/canvas/CanvasOptions.ts:146](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L146)

Default cursor value used when hovering over an object on canvas

#### Default

```ts
move
```

#### Inherited from

`CanvasCursorOptions.hoverCursor`

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:96](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L96)

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`imageSmoothingEnabled`](/api/interfaces/staticcanvasoptions/#imagesmoothingenabled)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:115](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L115)

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`includeDefaultValues`](/api/interfaces/staticcanvasoptions/#includedefaultvalues)

***

### moveCursor

> **moveCursor**: `string`

Defined in: [src/canvas/CanvasOptions.ts:153](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L153)

Default cursor value used when moving an object on canvas

#### Default

```ts
move
```

#### Inherited from

`CanvasCursorOptions.moveCursor`

***

### notAllowedCursor

> **notAllowedCursor**: `string`

Defined in: [src/canvas/CanvasOptions.ts:175](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L175)

Cursor value used for disabled elements ( corners with disabled action )

#### Since

2.0.0

#### Default

```ts
not-allowed
```

#### Inherited from

`CanvasCursorOptions.notAllowedCursor`

***

### overlayColor

> **overlayColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/canvas/StaticCanvasOptions.ts:47](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L47)

Overlay color of canvas instance.

#### Since

1.3.9

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayColor`](/api/interfaces/staticcanvasoptions/#overlaycolor)

***

### overlayImage?

> `optional` **overlayImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/canvas/StaticCanvasOptions.ts:57](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L57)

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayImage`](/api/interfaces/staticcanvasoptions/#overlayimage)

***

### overlayVpt

> **overlayVpt**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:39](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L39)

if set to false overlay image is not affected by viewport transform

#### Since

1.6.3

#### Todo

we should really find a different way to do this

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayVpt`](/api/interfaces/staticcanvasoptions/#overlayvpt)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:184](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L184)

When true, object detection happens on per-pixel basis rather than on per-bounding-box

#### Default

```ts

```

#### Inherited from

`TargetFindOptions.perPixelTargetFind`

***

### preserveObjectStacking

> **preserveObjectStacking**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:259](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L259)

Indicates whether objects should remain in current stack position when selected.
When false objects are brought to top and rendered as part of the selection group

#### Default

```ts

```

***

### renderOnAddRemove

> **renderOnAddRemove**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:71](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L71)

Indicates whether [StaticCanvas#add](/api/classes/staticcanvas/#add), [StaticCanvas#insertAt](/api/classes/staticcanvas/#insertat) and StaticCanvas#remove,
StaticCanvas#moveTo, [StaticCanvas#clear](/api/classes/staticcanvas/#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`renderOnAddRemove`](/api/interfaces/staticcanvasoptions/#renderonaddremove)

***

### selection

> **selection**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:76](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L76)

Indicates whether group selection should be enabled

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selection`

***

### selectionBorderColor

> **selectionBorderColor**: `string`

Defined in: [src/canvas/CanvasOptions.ts:123](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L123)

Color of the border of selection (usually slightly darker than color of selection itself)

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionBorderColor`

***

### selectionColor

> **selectionColor**: `string`

Defined in: [src/canvas/CanvasOptions.ts:109](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L109)

Color of selection

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionColor`

***

### selectionDashArray

> **selectionDashArray**: `number`[]

Defined in: [src/canvas/CanvasOptions.ts:116](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L116)

Default dash array pattern
If not empty the selection border is dashed

#### Inherited from

`CanvasSelectionOptions.selectionDashArray`

***

### selectionFullyContained

> **selectionFullyContained**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:137](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L137)

Select only shapes that are fully contained in the dragged selection rectangle.

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionFullyContained`

***

### selectionKey

> **selectionKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/) \| (`"altKey"` \| `"ctrlKey"` \| `"metaKey"` \| `"shiftKey"`)[]

Defined in: [src/canvas/CanvasOptions.ts:88](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L88)

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

***

### selectionLineWidth

> **selectionLineWidth**: `number`

Defined in: [src/canvas/CanvasOptions.ts:130](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L130)

Width of a line used in object/group selection

#### Default

```ts

```

#### Inherited from

`CanvasSelectionOptions.selectionLineWidth`

***

### skipOffscreen

> **skipOffscreen**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:82](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L82)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`skipOffscreen`](/api/interfaces/staticcanvasoptions/#skipoffscreen)

***

### skipTargetFind

> **skipTargetFind**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:202](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L202)

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

***

### stopContextMenu

> **stopContextMenu**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:212](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L212)

Indicates if the right click on canvas can output the context menu or not

#### Since

1.6.5

#### Default

```ts

```

#### Inherited from

`CanvasEventsOptions.stopContextMenu`

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

Defined in: [src/canvas/StaticCanvasOptions.ts:123](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L123)

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`svgViewportTransformation`](/api/interfaces/staticcanvasoptions/#svgviewporttransformation)

***

### targetFindTolerance

> **targetFindTolerance**: `number`

Defined in: [src/canvas/CanvasOptions.ts:191](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L191)

Number of pixels around target pixel to tolerate (consider active) during object detection

#### Default

```ts

```

#### Inherited from

`TargetFindOptions.targetFindTolerance`

***

### uniformScaling

> **uniformScaling**: `boolean`

Defined in: [src/canvas/CanvasOptions.ts:13](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L13)

When true, objects can be transformed by one side (unproportionately)
when dragged on the corners that normally would not do that.

#### Default

```ts

```

#### Since

fabric 4.0 // changed name and default value

#### Inherited from

`CanvasTransformOptions.uniformScaling`

***

### uniScaleKey

> **uniScaleKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Defined in: [src/canvas/CanvasOptions.ts:27](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/CanvasOptions.ts#L27)

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

***

### viewportTransform

> **viewportTransform**: [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/canvas/StaticCanvasOptions.ts:174](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L174)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

#### Examples

```ts
canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
```

```ts
canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
```

#### Default

```ts

```

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`viewportTransform`](/api/interfaces/staticcanvasoptions/#viewporttransform)

***

### width

> **width**: `number`

Defined in: [src/canvas/StaticCanvasOptions.ts:135](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/canvas/StaticCanvasOptions.ts#L135)

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Inherited from

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`width`](/api/interfaces/staticcanvasoptions/#width)
