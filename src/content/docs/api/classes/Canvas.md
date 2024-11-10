---
editUrl: false
next: false
prev: false
title: "Canvas"
---

## Extends

- `SelectableCanvas`

## Implements

- [`CanvasOptions`](/api/interfaces/canvasoptions/)

## Constructors

### new Canvas()

> **new Canvas**(`el`?, `options`?): [`Canvas`](/api/classes/canvas/)

#### Parameters

• **el?**: `string` \| `HTMLCanvasElement`

• **options?**: `TCanvasOptions` = `{}`

#### Returns

[`Canvas`](/api/classes/canvas/)

#### Overrides

`SelectableCanvas.constructor`

#### Defined in

[src/canvas/Canvas.ts:117](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L117)

## Properties

### \_activeObject?

> `optional` **\_activeObject**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Inherited from

`SelectableCanvas._activeObject`

#### Defined in

[src/canvas/SelectableCanvas.ts:309](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L309)

***

### \_objects

> **\_objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### TODO

needs to end up in the constructor too

#### Inherited from

`SelectableCanvas._objects`

#### Defined in

[src/canvas/SelectableCanvas.ts:153](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L153)

***

### \_offset

> **\_offset**: `object`

#### left

> **left**: `number`

#### top

> **top**: `number`

#### Inherited from

`SelectableCanvas._offset`

#### Defined in

[src/canvas/StaticCanvas.ts:159](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L159)

***

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

#### Todo

move to Canvas

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`allowTouchScrolling`](/api/interfaces/canvasoptions/#allowtouchscrolling)

#### Inherited from

`SelectableCanvas.allowTouchScrolling`

#### Defined in

[src/canvas/StaticCanvas.ts:123](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L123)

***

### altActionKey

> **altActionKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Indicates which key enable alternate action on corner
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`altActionKey`](/api/interfaces/canvasoptions/#altactionkey)

#### Inherited from

`SelectableCanvas.altActionKey`

#### Defined in

[src/canvas/SelectableCanvas.ts:161](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L161)

***

### altSelectionKey

> **altSelectionKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`altSelectionKey`](/api/interfaces/canvasoptions/#altselectionkey)

#### Inherited from

`SelectableCanvas.altSelectionKey`

#### Defined in

[src/canvas/SelectableCanvas.ts:166](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L166)

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Background color of canvas instance.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`backgroundColor`](/api/interfaces/canvasoptions/#backgroundcolor)

#### Inherited from

`SelectableCanvas.backgroundColor`

#### Defined in

[src/canvas/StaticCanvas.ts:98](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L98)

***

### backgroundImage?

> `optional` **backgroundImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`backgroundImage`](/api/interfaces/canvasoptions/#backgroundimage)

#### Inherited from

`SelectableCanvas.backgroundImage`

#### Defined in

[src/canvas/StaticCanvas.ts:99](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L99)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`backgroundVpt`](/api/interfaces/canvasoptions/#backgroundvpt)

#### Inherited from

`SelectableCanvas.backgroundVpt`

#### Defined in

[src/canvas/StaticCanvas.ts:97](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L97)

***

### centeredKey

> **centeredKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

Indicates which key enable centered Transform
values: 'altKey', 'shiftKey', 'ctrlKey'.
If `null` or 'none' or any other string that is not a modifier key
feature is disabled feature disabled.

#### Since

1.6.2

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`centeredKey`](/api/interfaces/canvasoptions/#centeredkey)

#### Inherited from

`SelectableCanvas.centeredKey`

#### Defined in

[src/canvas/SelectableCanvas.ts:160](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L160)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`centeredRotation`](/api/interfaces/canvasoptions/#centeredrotation)

#### Inherited from

`SelectableCanvas.centeredRotation`

#### Defined in

[src/canvas/SelectableCanvas.ts:159](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L159)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`centeredScaling`](/api/interfaces/canvasoptions/#centeredscaling)

#### Inherited from

`SelectableCanvas.centeredScaling`

#### Defined in

[src/canvas/SelectableCanvas.ts:158](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L158)

***

### clipPath?

> `optional` **clipPath**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`clipPath`](/api/interfaces/canvasoptions/#clippath)

#### Inherited from

`SelectableCanvas.clipPath`

#### Defined in

[src/canvas/StaticCanvas.ts:105](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L105)

***

### ~~containerClass~~

> **containerClass**: `string`

Default element class that's given to wrapper (div) element of canvas

#### Default

```ts

```

:::caution[Deprecated]
customize [CanvasDOMManager](/api/classes/canvasdommanager/) instead or access [elements](/api/classes/canvas/#elements) directly
:::

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`containerClass`](/api/interfaces/canvasoptions/#containerclass)

#### Inherited from

`SelectableCanvas.containerClass`

#### Defined in

[src/canvas/SelectableCanvas.ts:180](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L180)

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

#### Todo

move to Canvas

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`controlsAboveOverlay`](/api/interfaces/canvasoptions/#controlsaboveoverlay)

#### Inherited from

`SelectableCanvas.controlsAboveOverlay`

#### Defined in

[src/canvas/StaticCanvas.ts:118](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L118)

***

### defaultCursor

> **defaultCursor**: `string`

Default cursor value used for the entire canvas

#### Default

```ts
default
```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`defaultCursor`](/api/interfaces/canvasoptions/#defaultcursor)

#### Inherited from

`SelectableCanvas.defaultCursor`

#### Defined in

[src/canvas/SelectableCanvas.ts:176](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L176)

***

### destroyed?

> `optional` **destroyed**: `boolean`

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

#### Inherited from

`SelectableCanvas.destroyed`

#### Defined in

[src/canvas/StaticCanvas.ts:150](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L150)

***

### disposed?

> `optional` **disposed**: `boolean`

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

#### Inherited from

`SelectableCanvas.disposed`

#### Defined in

[src/canvas/StaticCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L157)

***

### elements

> **elements**: [`CanvasDOMManager`](/api/classes/canvasdommanager/)

#### Inherited from

`SelectableCanvas.elements`

#### Defined in

[src/canvas/SelectableCanvas.ts:294](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L294)

***

### enablePointerEvents

> **enablePointerEvents**: `boolean`

When the option is enabled, PointerEvent is used instead of TPointerEvent.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`enablePointerEvents`](/api/interfaces/canvasoptions/#enablepointerevents)

#### Defined in

[src/canvas/Canvas.ts:81](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L81)

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`enableRetinaScaling`](/api/interfaces/canvasoptions/#enableretinascaling)

#### Inherited from

`SelectableCanvas.enableRetinaScaling`

#### Defined in

[src/canvas/StaticCanvas.ts:112](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L112)

***

### fireMiddleClick

> **fireMiddleClick**: `boolean`

Indicates if the canvas can fire middle click events

#### Since

1.7.8

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`fireMiddleClick`](/api/interfaces/canvasoptions/#firemiddleclick)

#### Inherited from

`SelectableCanvas.fireMiddleClick`

#### Defined in

[src/canvas/SelectableCanvas.ts:202](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L202)

***

### fireRightClick

> **fireRightClick**: `boolean`

Indicates if the canvas can fire right click events

#### Since

1.6.5

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`fireRightClick`](/api/interfaces/canvasoptions/#firerightclick)

#### Inherited from

`SelectableCanvas.fireRightClick`

#### Defined in

[src/canvas/SelectableCanvas.ts:201](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L201)

***

### freeDrawingBrush?

> `optional` **freeDrawingBrush**: [`BaseBrush`](/api/classes/basebrush/)

#### Inherited from

`SelectableCanvas.freeDrawingBrush`

#### Defined in

[src/canvas/SelectableCanvas.ts:308](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L308)

***

### freeDrawingCursor

> **freeDrawingCursor**: `string`

Cursor value used during free drawing

#### Default

```ts
crosshair
```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`freeDrawingCursor`](/api/interfaces/canvasoptions/#freedrawingcursor)

#### Inherited from

`SelectableCanvas.freeDrawingCursor`

#### Defined in

[src/canvas/SelectableCanvas.ts:177](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L177)

***

### height

> **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`height`](/api/interfaces/canvasoptions/#height)

#### Inherited from

`SelectableCanvas.height`

#### Defined in

[src/canvas/StaticCanvas.ts:94](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L94)

***

### hoverCursor

> **hoverCursor**: `string`

Default cursor value used when hovering over an object on canvas

#### Default

```ts
move
```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`hoverCursor`](/api/interfaces/canvasoptions/#hovercursor)

#### Inherited from

`SelectableCanvas.hoverCursor`

#### Defined in

[src/canvas/SelectableCanvas.ts:174](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L174)

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`imageSmoothingEnabled`](/api/interfaces/canvasoptions/#imagesmoothingenabled)

#### Inherited from

`SelectableCanvas.imageSmoothingEnabled`

#### Defined in

[src/canvas/StaticCanvas.ts:113](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L113)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`includeDefaultValues`](/api/interfaces/canvasoptions/#includedefaultvalues)

#### Inherited from

`SelectableCanvas.includeDefaultValues`

#### Defined in

[src/canvas/StaticCanvas.ts:107](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L107)

***

### isDrawingMode

> **isDrawingMode**: `boolean`

When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
After mousedown, mousemove creates a shape,
and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.

#### Tutorial

[http://fabricjs.com/fabric-intro-part-4#free_drawing](http://fabricjs.com/fabric-intro-part-4#free_drawing)

#### Default

```ts

```

#### Inherited from

`SelectableCanvas.isDrawingMode`

#### Defined in

[src/canvas/SelectableCanvas.ts:195](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L195)

***

### moveCursor

> **moveCursor**: `string`

Default cursor value used when moving an object on canvas

#### Default

```ts
move
```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`moveCursor`](/api/interfaces/canvasoptions/#movecursor)

#### Inherited from

`SelectableCanvas.moveCursor`

#### Defined in

[src/canvas/SelectableCanvas.ts:175](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L175)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`notAllowedCursor`](/api/interfaces/canvasoptions/#notallowedcursor)

#### Inherited from

`SelectableCanvas.notAllowedCursor`

#### Defined in

[src/canvas/SelectableCanvas.ts:178](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L178)

***

### overlayColor

> **overlayColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Overlay color of canvas instance.

#### Since

1.3.9

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`overlayColor`](/api/interfaces/canvasoptions/#overlaycolor)

#### Inherited from

`SelectableCanvas.overlayColor`

#### Defined in

[src/canvas/StaticCanvas.ts:102](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L102)

***

### overlayImage?

> `optional` **overlayImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`overlayImage`](/api/interfaces/canvasoptions/#overlayimage)

#### Inherited from

`SelectableCanvas.overlayImage`

#### Defined in

[src/canvas/StaticCanvas.ts:103](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L103)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`overlayVpt`](/api/interfaces/canvasoptions/#overlayvpt)

#### Inherited from

`SelectableCanvas.overlayVpt`

#### Defined in

[src/canvas/StaticCanvas.ts:101](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L101)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When true, object detection happens on per-pixel basis rather than on per-bounding-box

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`perPixelTargetFind`](/api/interfaces/canvasoptions/#perpixeltargetfind)

#### Inherited from

`SelectableCanvas.perPixelTargetFind`

#### Defined in

[src/canvas/SelectableCanvas.ts:183](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L183)

***

### preserveObjectStacking

> **preserveObjectStacking**: `boolean`

Indicates whether objects should remain in current stack position when selected.
When false objects are brought to top and rendered as part of the selection group

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`preserveObjectStacking`](/api/interfaces/canvasoptions/#preserveobjectstacking)

#### Inherited from

`SelectableCanvas.preserveObjectStacking`

#### Defined in

[src/canvas/SelectableCanvas.ts:197](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L197)

***

### renderOnAddRemove

> **renderOnAddRemove**: `boolean`

Indicates whether [StaticCanvas#add](../../../../api/classes/staticcanvas/#add), [StaticCanvas#insertAt](../../../../api/classes/staticcanvas/#insertat) and StaticCanvas#remove,
StaticCanvas#moveTo, [StaticCanvas#clear](../../../../api/classes/staticcanvas/#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`renderOnAddRemove`](/api/interfaces/canvasoptions/#renderonaddremove)

#### Inherited from

`SelectableCanvas.renderOnAddRemove`

#### Defined in

[src/canvas/StaticCanvas.ts:110](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L110)

***

### selection

> **selection**: `boolean`

Indicates whether group selection should be enabled

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`selection`](/api/interfaces/canvasoptions/#selection)

#### Inherited from

`SelectableCanvas.selection`

#### Defined in

[src/canvas/SelectableCanvas.ts:164](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L164)

***

### selectionBorderColor

> **selectionBorderColor**: `string`

Color of the border of selection (usually slightly darker than color of selection itself)

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`selectionBorderColor`](/api/interfaces/canvasoptions/#selectionbordercolor)

#### Inherited from

`SelectableCanvas.selectionBorderColor`

#### Defined in

[src/canvas/SelectableCanvas.ts:169](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L169)

***

### selectionColor

> **selectionColor**: `string`

Color of selection

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`selectionColor`](/api/interfaces/canvasoptions/#selectioncolor)

#### Inherited from

`SelectableCanvas.selectionColor`

#### Defined in

[src/canvas/SelectableCanvas.ts:167](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L167)

***

### selectionDashArray

> **selectionDashArray**: `number`[]

Default dash array pattern
If not empty the selection border is dashed

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`selectionDashArray`](/api/interfaces/canvasoptions/#selectiondasharray)

#### Inherited from

`SelectableCanvas.selectionDashArray`

#### Defined in

[src/canvas/SelectableCanvas.ts:168](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L168)

***

### selectionFullyContained

> **selectionFullyContained**: `boolean`

Select only shapes that are fully contained in the dragged selection rectangle.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`selectionFullyContained`](/api/interfaces/canvasoptions/#selectionfullycontained)

#### Inherited from

`SelectableCanvas.selectionFullyContained`

#### Defined in

[src/canvas/SelectableCanvas.ts:171](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L171)

***

### selectionKey

> **selectionKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/) \| (`"altKey"` \| `"shiftKey"` \| `"ctrlKey"` \| `"metaKey"`)[]

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`selectionKey`](/api/interfaces/canvasoptions/#selectionkey)

#### Inherited from

`SelectableCanvas.selectionKey`

#### Defined in

[src/canvas/SelectableCanvas.ts:165](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L165)

***

### selectionLineWidth

> **selectionLineWidth**: `number`

Width of a line used in object/group selection

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`selectionLineWidth`](/api/interfaces/canvasoptions/#selectionlinewidth)

#### Inherited from

`SelectableCanvas.selectionLineWidth`

#### Defined in

[src/canvas/SelectableCanvas.ts:170](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L170)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`skipOffscreen`](/api/interfaces/canvasoptions/#skipoffscreen)

#### Inherited from

`SelectableCanvas.skipOffscreen`

#### Defined in

[src/canvas/StaticCanvas.ts:111](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L111)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`skipTargetFind`](/api/interfaces/canvasoptions/#skiptargetfind)

#### Inherited from

`SelectableCanvas.skipTargetFind`

#### Defined in

[src/canvas/SelectableCanvas.ts:185](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L185)

***

### stopContextMenu

> **stopContextMenu**: `boolean`

Indicates if the right click on canvas can output the context menu or not

#### Since

1.6.5

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`stopContextMenu`](/api/interfaces/canvasoptions/#stopcontextmenu)

#### Inherited from

`SelectableCanvas.stopContextMenu`

#### Defined in

[src/canvas/SelectableCanvas.ts:200](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L200)

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`svgViewportTransformation`](/api/interfaces/canvasoptions/#svgviewporttransformation)

#### Inherited from

`SelectableCanvas.svgViewportTransformation`

#### Defined in

[src/canvas/StaticCanvas.ts:954](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L954)

***

### targetFindTolerance

> **targetFindTolerance**: `number`

Number of pixels around target pixel to tolerate (consider active) during object detection

#### Default

```ts

```

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`targetFindTolerance`](/api/interfaces/canvasoptions/#targetfindtolerance)

#### Inherited from

`SelectableCanvas.targetFindTolerance`

#### Defined in

[src/canvas/SelectableCanvas.ts:184](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L184)

***

### targets

> **targets**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[] = `[]`

Keep track of the subTargets for Mouse Events, ordered bottom up from innermost nested subTarget

#### Inherited from

`SelectableCanvas.targets`

#### Defined in

[src/canvas/SelectableCanvas.ts:208](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L208)

***

### textEditingManager

> **textEditingManager**: `TextEditingManager`

#### Defined in

[src/canvas/Canvas.ts:115](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L115)

***

### uniScaleKey

> **uniScaleKey**: [`TOptionalModifierKey`](/api/type-aliases/toptionalmodifierkey/)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`uniScaleKey`](/api/interfaces/canvasoptions/#uniscalekey)

#### Inherited from

`SelectableCanvas.uniScaleKey`

#### Defined in

[src/canvas/SelectableCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L157)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`uniformScaling`](/api/interfaces/canvasoptions/#uniformscaling)

#### Inherited from

`SelectableCanvas.uniformScaling`

#### Defined in

[src/canvas/SelectableCanvas.ts:156](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L156)

***

### viewportTransform

> **viewportTransform**: [`TMat2D`](/api/type-aliases/tmat2d/)

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

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`viewportTransform`](/api/interfaces/canvasoptions/#viewporttransform)

#### Inherited from

`SelectableCanvas.viewportTransform`

#### Defined in

[src/canvas/StaticCanvas.ts:125](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L125)

***

### vptCoords

> **vptCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

The viewport bounding box in scene plane coordinates, see [calcViewportBoundaries](../../../../api/classes/canvas/#calcviewportboundaries)

#### Inherited from

`SelectableCanvas.vptCoords`

#### Defined in

[src/canvas/StaticCanvas.ts:130](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L130)

***

### width

> **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[`CanvasOptions`](/api/interfaces/canvasoptions/).[`width`](/api/interfaces/canvasoptions/#width)

#### Inherited from

`SelectableCanvas.width`

#### Defined in

[src/canvas/StaticCanvas.ts:93](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L93)

***

### ownDefaults

> `static` **ownDefaults**: [`TOptions`](/api/type-aliases/toptions/)\<[`CanvasOptions`](/api/interfaces/canvasoptions/)\> = `canvasDefaults`

#### Inherited from

`SelectableCanvas.ownDefaults`

#### Defined in

[src/canvas/SelectableCanvas.ts:288](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L288)

## Accessors

### contextContainer

> `get` **contextContainer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

`SelectableCanvas.contextContainer`

#### Defined in

[src/canvas/StaticCanvas.ts:141](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L141)

***

### contextTop

> `get` **contextTop**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

`SelectableCanvas.contextTop`

#### Defined in

[src/canvas/SelectableCanvas.ts:298](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L298)

***

### lowerCanvasEl

> `get` **lowerCanvasEl**(): `HTMLCanvasElement`

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

#### Returns

`HTMLCanvasElement`

#### Inherited from

`SelectableCanvas.lowerCanvasEl`

#### Defined in

[src/canvas/StaticCanvas.ts:137](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L137)

***

### upperCanvasEl

> `get` **upperCanvasEl**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Inherited from

`SelectableCanvas.upperCanvasEl`

#### Defined in

[src/canvas/SelectableCanvas.ts:295](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L295)

***

### wrapperEl

> `get` **wrapperEl**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Inherited from

`SelectableCanvas.wrapperEl`

#### Defined in

[src/canvas/SelectableCanvas.ts:301](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L301)

## Methods

### \_\_onMouseWheel()

> **\_\_onMouseWheel**(`e`): `void`

Method that defines actions when an Event Mouse Wheel

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

Event object fired on mouseup

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1286](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L1286)

***

### \_basicEventHandler()

> **\_basicEventHandler**\<`T`\>(`eventType`, `options`): [`CanvasEvents`](/api/interfaces/canvasevents/) & [`ObjectEvents`](/api/interfaces/objectevents/)\[`T`\]

#### Type Parameters

• **T** *extends* `"erasing:end"` \| `"dragstart"` \| `"drag"` \| `"dragover"` \| `"dragenter"` \| `"dragleave"` \| `"dragend"` \| `"drop:before"` \| `"drop"` \| `"drop:after"` \| `"contextmenu:before"` \| `"contextmenu"`

#### Parameters

• **eventType**: `T`

• **options**: [`CanvasEvents`](/api/interfaces/canvasevents/) & [`ObjectEvents`](/api/interfaces/objectevents/)\[`T`\]

#### Returns

[`CanvasEvents`](/api/interfaces/canvasevents/) & [`ObjectEvents`](/api/interfaces/objectevents/)\[`T`\]

#### Defined in

[src/canvas/Canvas.ts:892](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L892)

***

### \_chooseObjectsToRender()

> **\_chooseObjectsToRender**(): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Divides objects in two groups, one to render immediately
and one to render as activeGroup.

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

objects to render immediately and pushes the other in the activeGroup.

#### Inherited from

`SelectableCanvas._chooseObjectsToRender`

#### Defined in

[src/canvas/SelectableCanvas.ts:360](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L360)

***

### \_discardActiveObject()

> **\_discardActiveObject**(`e`?, `object`?): `this is Object`

This is supposed to be equivalent to discardActiveObject but without firing
any selection events ( can still fire object transformation events ). There is commitment to have this stay this way.
This is the functional part of discardActiveObject.

#### Parameters

• **e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

Event (passed along when firing "object:deselected")

• **object?**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

the next object to set as active, reason why we are discarding this

#### Returns

`this is Object`

true if the active object has been discarded

#### Inherited from

`SelectableCanvas._discardActiveObject`

#### Defined in

[src/canvas/SelectableCanvas.ts:1179](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1179)

***

### \_onStackOrderChanged()

> **\_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Inherited from

`SelectableCanvas._onStackOrderChanged`

#### Defined in

[src/canvas/SelectableCanvas.ts:350](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L350)

***

### \_set()

> **\_set**(`key`, `value`): `void`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`void`

#### Inherited from

`SelectableCanvas._set`

#### Defined in

[src/CommonMethods.ts:38](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L38)

***

### \_setActiveObject()

> **\_setActiveObject**(`object`, `e`?): `boolean`

This is supposed to be equivalent to setActiveObject but without firing
any event. There is commitment to have this stay this way.
This is the functional part of setActiveObject.

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

to set as active

• **e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

Event (passed along when firing "object:selected")

#### Returns

`boolean`

true if the object has been selected

#### Inherited from

`SelectableCanvas._setActiveObject`

#### Defined in

[src/canvas/SelectableCanvas.ts:1147](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1147)

***

### \_setCursorFromEvent()

> **\_setCursorFromEvent**(`e`, `target`?): `void`

Sets the cursor depending on where the canvas is being hovered.
Note: very buggy in Opera

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

Event object

• **target?**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object that the mouse is hovering, if so.

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:1344](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L1344)

***

### absolutePan()

> **absolutePan**(`point`): `void`

Pan viewport so as to place point at top left corner of canvas

#### Parameters

• **point**: [`Point`](/api/classes/point/)

to move to

#### Returns

`void`

#### Inherited from

`SelectableCanvas.absolutePan`

#### Defined in

[src/canvas/StaticCanvas.ts:431](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L431)

***

### add()

> **add**(...`objects`): `number`

Adds objects to collection
Objects should be instances of (or inherit from) FabricObject

#### Parameters

• ...**objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

to add

#### Returns

`number`

new array length

#### Inherited from

`SelectableCanvas.add`

#### Defined in

[src/canvas/StaticCanvas.ts:210](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L210)

***

### addOrRemove()

> **addOrRemove**(`functor`, `_eventjsFunctor`): `void`

#### Parameters

• **functor**: `any`

• **\_eventjsFunctor**: `"add"` \| `"remove"`

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:162](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L162)

***

### bringObjectForward()

> **bringObjectForward**(`object`, `intersecting`?): `boolean`

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to send

• **intersecting?**: `boolean`

If `true`, send object in front of next upper intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.bringObjectForward`

#### Defined in

[src/Collection.ts:240](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L240)

***

### bringObjectToFront()

> **bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to send

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.bringObjectToFront`

#### Defined in

[src/Collection.ts:194](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L194)

***

### calcOffset()

> **calcOffset**(): `object`

Calculates canvas element offset relative to the document
This method is also attached as "resize" event handler of window

#### Returns

`object`

##### left

> **left**: `number` = `0`

##### top

> **top**: `number` = `0`

#### Inherited from

`SelectableCanvas.calcOffset`

#### Defined in

[src/canvas/StaticCanvas.ts:266](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L266)

***

### calcViewportBoundaries()

> **calcViewportBoundaries**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

`SelectableCanvas.calcViewportBoundaries`

#### Defined in

[src/canvas/StaticCanvas.ts:528](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L528)

***

### cancelRequestedRender()

> **cancelRequestedRender**(): `void`

#### Returns

`void`

#### Inherited from

`SelectableCanvas.cancelRequestedRender`

#### Defined in

[src/canvas/StaticCanvas.ts:546](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L546)

***

### centerObject()

> **centerObject**(`object`): `void`

Centers object vertically and horizontally in the canvas

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to center vertically and horizontally

#### Returns

`void`

#### Inherited from

`SelectableCanvas.centerObject`

#### Defined in

[src/canvas/StaticCanvas.ts:756](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L756)

***

### centerObjectH()

> **centerObjectH**(`object`): `void`

Centers object horizontally in the canvas

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`void`

#### Inherited from

`SelectableCanvas.centerObjectH`

#### Defined in

[src/canvas/StaticCanvas.ts:734](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L734)

***

### centerObjectV()

> **centerObjectV**(`object`): `void`

Centers object vertically in the canvas

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to center vertically

#### Returns

`void`

#### Inherited from

`SelectableCanvas.centerObjectV`

#### Defined in

[src/canvas/StaticCanvas.ts:745](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L745)

***

### clear()

> **clear**(): `void`

clear [textEditingManager](../../../../api/classes/canvas/#texteditingmanager)

#### Returns

`void`

#### Overrides

`SelectableCanvas.clear`

#### Defined in

[src/canvas/Canvas.ts:1535](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L1535)

***

### clearContext()

> **clearContext**(`ctx`): `void`

Clears specified context of canvas element

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to clear

#### Returns

`void`

#### Inherited from

`SelectableCanvas.clearContext`

#### Defined in

[src/canvas/StaticCanvas.ts:463](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L463)

***

### clone()

> **clone**(`properties`?): `Promise`\<[`Canvas`](/api/classes/canvas/)\>

Clones canvas instance

#### Parameters

• **properties?**: `string`[]

Array of properties to include in the cloned canvas and children

#### Returns

`Promise`\<[`Canvas`](/api/classes/canvas/)\>

#### Inherited from

`SelectableCanvas.clone`

#### Defined in

[src/canvas/StaticCanvas.ts:1327](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1327)

***

### cloneWithoutData()

> **cloneWithoutData**(): [`Canvas`](/api/classes/canvas/)

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

[`Canvas`](/api/classes/canvas/)

#### Inherited from

`SelectableCanvas.cloneWithoutData`

#### Defined in

[src/canvas/StaticCanvas.ts:1337](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1337)

***

### collectObjects()

> **collectObjects**(`bbox`, `options`): [`InteractiveFabricObject`](/api/classes/interactivefabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

• **bbox**: [`TBBox`](/api/type-aliases/tbbox/)

a bounding box in scene coordinates

• **options** = `{}`

an object with includeIntersecting

• **options.includeIntersecting?**: `boolean` = `true`

#### Returns

[`InteractiveFabricObject`](/api/classes/interactivefabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

`SelectableCanvas.collectObjects`

#### Defined in

[src/Collection.ts:326](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L326)

***

### complexity()

> **complexity**(): `number`

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

`SelectableCanvas.complexity`

#### Defined in

[src/Collection.ts:165](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L165)

***

### contains()

> **contains**(`object`, `deep`?): `boolean`

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](../../../../api/classes/fabricobject/#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to check against

• **deep?**: `boolean`

`true` to check all descendants, `false` to check only `_objects`

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

`SelectableCanvas.contains`

#### Defined in

[src/Collection.ts:148](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L148)

***

### createSVGClipPathMarkup()

> **createSVGClipPathMarkup**(`options`): `string`

#### Parameters

• **options**: [`TSVGExportOptions`](/api/type-aliases/tsvgexportoptions/)

#### Returns

`string`

#### Inherited from

`SelectableCanvas.createSVGClipPathMarkup`

#### Defined in

[src/canvas/StaticCanvas.ts:1080](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1080)

***

### createSVGFontFacesMarkup()

> **createSVGFontFacesMarkup**(): `string`

Creates markup containing SVG font faces,
font URLs for font faces must be collected by developers
and are not extracted from the DOM by fabricjs

#### Returns

`string`

#### Inherited from

`SelectableCanvas.createSVGFontFacesMarkup`

#### Defined in

[src/canvas/StaticCanvas.ts:1123](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1123)

***

### createSVGRefElementsMarkup()

> **createSVGRefElementsMarkup**(): `string`

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

#### Inherited from

`SelectableCanvas.createSVGRefElementsMarkup`

#### Defined in

[src/canvas/StaticCanvas.ts:1095](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1095)

***

### destroy()

> **destroy**(): `void`

clear [textEditingManager](../../../../api/classes/canvas/#texteditingmanager)

#### Returns

`void`

#### Overrides

`SelectableCanvas.destroy`

#### Defined in

[src/canvas/Canvas.ts:1543](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L1543)

***

### discardActiveObject()

> **discardActiveObject**(`e`?): `this is Object`

Discards currently active object and fire events. If the function is called by fabric
as a consequence of a mouse event, the event is passed as a parameter and
sent to the fire function for the custom events. When used as a method the
e param does not have any application.

#### Parameters

• **e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`this is Object`

true if the active object has been discarded

#### Inherited from

`SelectableCanvas.discardActiveObject`

#### Defined in

[src/canvas/SelectableCanvas.ts:1209](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1209)

***

### dispose()

> **dispose**(): `Promise`\<`boolean`\>

Waits until rendering has settled to destroy the canvas

#### Returns

`Promise`\<`boolean`\>

a promise resolving to `true` once the canvas has been destroyed or to `false` if the canvas has was already destroyed

#### Throws

if aborted by a consequent call

#### Inherited from

`SelectableCanvas.dispose`

#### Defined in

[src/canvas/StaticCanvas.ts:1455](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1455)

***

### drawClipPathOnCanvas()

> **drawClipPathOnCanvas**(`ctx`, `clipPath`): `void`

Paint the cached clipPath on the lowerCanvasEl

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **clipPath**: `TCachedFabricObject`

#### Returns

`void`

#### Inherited from

`SelectableCanvas.drawClipPathOnCanvas`

#### Defined in

[src/canvas/StaticCanvas.ts:610](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L610)

***

### drawControls()

> **drawControls**(`ctx`): `void`

Draws objects' controls (borders/controls)

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render controls on

#### Returns

`void`

#### Inherited from

`SelectableCanvas.drawControls`

#### Defined in

[src/canvas/SelectableCanvas.ts:1317](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1317)

***

### endCurrentTransform()

> **endCurrentTransform**(`e`?): `void`

End the current transform.
You don't usually need to call this method unless you are interrupting a user initiated transform
because of some other event ( a press of key combination, or something that block the user UX )

#### Parameters

• **e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

send the mouse event that generate the finalize down, so it can be used in the event

#### Returns

`void`

#### Inherited from

`SelectableCanvas.endCurrentTransform`

#### Defined in

[src/canvas/SelectableCanvas.ts:1229](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1229)

***

### findNewLowerIndex()

> **findNewLowerIndex**(`object`, `idx`, `intersecting`?): `number`

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **idx**: `number`

• **intersecting?**: `boolean`

#### Returns

`number`

#### Inherited from

`SelectableCanvas.findNewLowerIndex`

#### Defined in

[src/Collection.ts:272](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L272)

***

### findNewUpperIndex()

> **findNewUpperIndex**(`object`, `idx`, `intersecting`?): `number`

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **idx**: `number`

• **intersecting?**: `boolean`

#### Returns

`number`

#### Inherited from

`SelectableCanvas.findNewUpperIndex`

#### Defined in

[src/Collection.ts:295](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L295)

***

### findTarget()

> **findTarget**(`e`): `undefined` \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Method that determines what object we are clicking on
11/09/2018 TODO: would be cool if findTarget could discern between being a full target
or the outside part of the corner.

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

mouse event

#### Returns

`undefined` \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

the target found

#### Inherited from

`SelectableCanvas.findTarget`

#### Defined in

[src/canvas/SelectableCanvas.ts:712](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L712)

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type Parameters

• **K** *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: [`CanvasEvents`](/api/interfaces/canvasevents/)\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

`SelectableCanvas.fire`

#### Defined in

[src/Observable.ts:167](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L167)

***

### forEachObject()

> **forEachObject**(`callback`): `void`

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

• **callback**

Callback invoked with current object as first argument,
                  index - as second and an array of all objects - as third.

#### Returns

`void`

#### Inherited from

`SelectableCanvas.forEachObject`

#### Defined in

[src/Collection.ts:91](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L91)

***

### get()

> **get**(`property`): `any`

Basic getter

#### Parameters

• **property**: `string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

`SelectableCanvas.get`

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L59)

***

### getActiveObject()

> **getActiveObject**(): `undefined` \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Returns currently active object

#### Returns

`undefined` \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

active object

#### Inherited from

`SelectableCanvas.getActiveObject`

#### Defined in

[src/canvas/SelectableCanvas.ts:1049](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1049)

***

### getActiveObjects()

> **getActiveObjects**(): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Returns an array with the current selected objects

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

active objects array

#### Inherited from

`SelectableCanvas.getActiveObjects`

#### Defined in

[src/canvas/SelectableCanvas.ts:1057](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1057)

***

### ~~getCenter()~~

> **getCenter**(): `object`

Returns coordinates of a center of canvas.
Returned value is an object with top and left properties

:::caution[Deprecated]
migrate to `getCenterPoint`
:::

#### Returns

`object`

object with "top" and "left" number values

##### ~~left~~

> **left**: `number`

##### ~~top~~

> **top**: `number`

#### Inherited from

`SelectableCanvas.getCenter`

#### Defined in

[src/canvas/StaticCanvas.ts:716](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L716)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns coordinates of a center of canvas.

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`SelectableCanvas.getCenterPoint`

#### Defined in

[src/canvas/StaticCanvas.ts:727](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L727)

***

### getContext()

> **getContext**(): `CanvasRenderingContext2D`

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

`SelectableCanvas.getContext`

#### Defined in

[src/canvas/StaticCanvas.ts:471](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L471)

***

### getElement()

> **getElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

#### Inherited from

`SelectableCanvas.getElement`

#### Defined in

[src/canvas/StaticCanvas.ts:455](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L455)

***

### getHeight()

> **getHeight**(): `number`

Returns canvas height (in px)

#### Returns

`number`

#### Inherited from

`SelectableCanvas.getHeight`

#### Defined in

[src/canvas/StaticCanvas.ts:282](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L282)

***

### getObjects()

> **getObjects**(...`types`?): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Returns an array of children objects of this instance

#### Parameters

• ...**types?**: `string`[]

When specified, only objects of these types are returned

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

`SelectableCanvas.getObjects`

#### Defined in

[src/Collection.ts:108](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L108)

***

### ~~getPointer()~~

> **getPointer**(`e`, `fromViewport`?): [`Point`](/api/classes/point/)

Returns pointer relative to canvas.

:::caution[Deprecated]
This method is deprecated since v6 to protect you from misuse.
Use [getViewportPoint](/api/classes/canvas/#getviewportpoint) or [getScenePoint](/api/classes/canvas/#getscenepoint) instead.
:::

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

• **fromViewport?**: `boolean` = `false`

whether to return the point from the viewport or in the scene

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`SelectableCanvas.getPointer`

#### Defined in

[src/canvas/SelectableCanvas.ts:954](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L954)

***

### getScenePoint()

> **getScenePoint**(`e`): [`Point`](/api/classes/point/)

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

[`Point`](/api/classes/point/)

point existing in the scene (the same plane as the plane [FabricObject#getCenterPoint](/api/api/classes/fabricobject/getcenterpoint/#getcenterpoint) exists in).
This means that changes to the [viewportTransform](/api/api/classes/staticcanvas/viewporttransform/#viewporttransform) do not change the values of the point,
however, from the viewer's perspective, the point is changed.

#### Example

```ts
const viewportPoint = sendPointToPlane(
 this.getScenePoint(e),
 canvas.viewportTransform
);
```

#### Inherited from

`SelectableCanvas.getScenePoint`

#### Defined in

[src/canvas/SelectableCanvas.ts:937](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L937)

***

### getSelectionContext()

> **getSelectionContext**(): `CanvasRenderingContext2D`

Returns context of canvas where object selection is drawn

#### Returns

`CanvasRenderingContext2D`

#### Alias

#### Inherited from

`SelectableCanvas.getSelectionContext`

#### Defined in

[src/canvas/SelectableCanvas.ts:1033](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1033)

***

### getSelectionElement()

> **getSelectionElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element on which object selection is drawn

#### Returns

`HTMLCanvasElement`

#### Inherited from

`SelectableCanvas.getSelectionElement`

#### Defined in

[src/canvas/SelectableCanvas.ts:1041](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1041)

***

### getTopContext()

> **getTopContext**(): `CanvasRenderingContext2D`

Returns context of top canvas where interactions are drawn

#### Returns

`CanvasRenderingContext2D`

#### Inherited from

`SelectableCanvas.getTopContext`

#### Defined in

[src/canvas/SelectableCanvas.ts:1024](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1024)

***

### getViewportPoint()

> **getViewportPoint**(`e`): [`Point`](/api/classes/point/)

#### Parameters

• **e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

[`Point`](/api/classes/point/)

point existing in the same plane as the HTMLCanvasElement,
`(0, 0)` being the top left corner of the HTMLCanvasElement.
This means that changes to the [viewportTransform](/api/api/classes/staticcanvas/viewporttransform/#viewporttransform) do not change the values of the point
and it remains unchanged from the viewer's perspective.

#### Example

```ts
const scenePoint = sendPointToPlane(
 this.getViewportPoint(e),
 undefined,
 canvas.viewportTransform
);
```

#### Inherited from

`SelectableCanvas.getViewportPoint`

#### Defined in

[src/canvas/SelectableCanvas.ts:918](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L918)

***

### getVpCenter()

> **getVpCenter**(): [`Point`](/api/classes/point/)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](/api/classes/point/)

vpCenter, viewport center

#### Inherited from

`SelectableCanvas.getVpCenter`

#### Defined in

[src/canvas/StaticCanvas.ts:794](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L794)

***

### getWidth()

> **getWidth**(): `number`

Returns canvas width (in px)

#### Returns

`number`

#### Inherited from

`SelectableCanvas.getWidth`

#### Defined in

[src/canvas/StaticCanvas.ts:274](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L274)

***

### getZoom()

> **getZoom**(): `number`

Returns canvas zoom level

#### Returns

`number`

#### Inherited from

`SelectableCanvas.getZoom`

#### Defined in

[src/canvas/StaticCanvas.ts:384](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L384)

***

### insertAt()

> **insertAt**(`index`, ...`objects`): `number`

Inserts an object into collection at specified index

#### Parameters

• **index**: `number`

Index to insert object at

• ...**objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Object(s) to insert

#### Returns

`number`

new array length

#### Inherited from

`SelectableCanvas.insertAt`

#### Defined in

[src/canvas/StaticCanvas.ts:216](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L216)

***

### isEmpty()

> **isEmpty**(): `boolean`

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

`SelectableCanvas.isEmpty`

#### Defined in

[src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L128)

***

### isTargetTransparent()

> **isTargetTransparent**(`target`, `x`, `y`): `boolean`

Returns true if object is transparent at a certain location
Clarification: this is `is target transparent at location X or are controls there`

#### Parameters

• **target**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to check

• **x**: `number`

Left coordinate in viewport space

• **y**: `number`

Top coordinate in viewport space

#### Returns

`boolean`

#### TODO

this seems dumb that we treat controls with transparency. we can find controls
programmatically without painting them, the cache canvas optimization is always valid

#### Inherited from

`SelectableCanvas.isTargetTransparent`

#### Defined in

[src/canvas/SelectableCanvas.ts:444](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L444)

***

### item()

> **item**(`index`): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Returns object at specified index

#### Parameters

• **index**: `number`

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

object at index

#### Inherited from

`SelectableCanvas.item`

#### Defined in

[src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L120)

***

### loadFromJSON()

> **loadFromJSON**(`json`, `reviver`?, `options`?): `Promise`\<[`Canvas`](/api/classes/canvas/)\>

Populates canvas with data from the specified JSON.
JSON format must conform to the one of fabric.Canvas#toJSON

**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

• **json**: `string` \| `Record`\<`string`, `any`\>

JSON string or object

• **reviver?**

Method for further parsing of JSON elements, called after each fabric object created.

• **options?**: [`Abortable`](/api/type-aliases/abortable/) = `{}`

options

#### Returns

`Promise`\<[`Canvas`](/api/classes/canvas/)\>

instance

#### Tutorial

[http://fabricjs.com/fabric-intro-part-3#deserialization](http://fabricjs.com/fabric-intro-part-3#deserialization)

#### See

[demo](http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle)

#### Examples

```ts
canvas.loadFromJSON(json).then((canvas) => canvas.requestRenderAll());
```

```ts
canvas.loadFromJSON(json, function(o, object) {
  // `o` = json object
  // `object` = fabric.Object instance
  // ... do some stuff ...
}).then((canvas) => {
  ... canvas is restored, add your code.
});
```

#### Inherited from

`SelectableCanvas.loadFromJSON`

#### Defined in

[src/canvas/StaticCanvas.ts:1276](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1276)

***

### moveObjectTo()

> **moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to send

• **index**: `number`

Position to move to

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.moveObjectTo`

#### Defined in

[src/Collection.ts:262](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L262)

***

### off()

#### off(eventName)

> **off**\<`K`\>(`eventName`): `void`

Unsubscribe all event listeners for eventname.
Do not use this pattern. You could kill internal fabricJS events.
We know we should have protected events for internal flows, but we don't have yet

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

##### Type Parameters

• **K** *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

##### Returns

`void`

##### Inherited from

`SelectableCanvas.off`

##### Defined in

[src/Observable.ts:122](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L122)

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type Parameters

• **K** *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

`SelectableCanvas.off`

##### Defined in

[src/Observable.ts:128](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L128)

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

`SelectableCanvas.off`

##### Defined in

[src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L133)

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`SelectableCanvas.off`

##### Defined in

[src/Observable.ts:137](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L137)

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type Parameters

• **K** *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` & `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> \| `object` \| `object` \| `object` \| [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object` \| [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object` \| [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

on

##### Inherited from

`SelectableCanvas.on`

##### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L23)

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

`SelectableCanvas.on`

##### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L27)

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type Parameters

• **K** *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` & `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> \| `object` \| `object` \| `object` \| [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object` \| [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object` \| [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

once

##### Inherited from

`SelectableCanvas.once`

##### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L62)

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

`SelectableCanvas.once`

##### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L66)

***

### relativePan()

> **relativePan**(`point`): `void`

Pans viewpoint relatively

#### Parameters

• **point**: [`Point`](/api/classes/point/)

(position vector) to move by

#### Returns

`void`

#### Inherited from

`SelectableCanvas.relativePan`

#### Defined in

[src/canvas/StaticCanvas.ts:442](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L442)

***

### removeListeners()

> **removeListeners**(): `void`

Removes all event listeners, used when disposing the instance

#### Returns

`void`

#### Defined in

[src/canvas/Canvas.ts:203](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/Canvas.ts#L203)

***

### renderAll()

> **renderAll**(): `void`

Renders both the top canvas and the secondary container canvas.

#### Returns

`void`

#### Inherited from

`SelectableCanvas.renderAll`

#### Defined in

[src/canvas/SelectableCanvas.ts:372](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L372)

***

### renderCanvas()

> **renderCanvas**(`ctx`, `objects`): `void`

Renders background, objects, overlay and controls.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

to render

#### Returns

`void`

#### Inherited from

`SelectableCanvas.renderCanvas`

#### Defined in

[src/canvas/StaticCanvas.ts:562](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L562)

***

### renderTop()

> **renderTop**(): `void`

Method to render only the top canvas.
Also used to render the group selection box.
Does not render text selection.

#### Returns

`void`

#### Inherited from

`SelectableCanvas.renderTop`

#### Defined in

[src/canvas/SelectableCanvas.ts:412](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L412)

***

### renderTopLayer()

> **renderTopLayer**(`ctx`): `void`

text selection is rendered by the active text instance during the rendering cycle

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

`SelectableCanvas.renderTopLayer`

#### Defined in

[src/canvas/SelectableCanvas.ts:393](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L393)

***

### requestRenderAll()

> **requestRenderAll**(): `void`

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

#### Inherited from

`SelectableCanvas.requestRenderAll`

#### Defined in

[src/canvas/StaticCanvas.ts:518](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L518)

***

### searchPossibleTargets()

> **searchPossibleTargets**(`objects`?, `pointer`?): `undefined` \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Function used to search inside objects an object that contains pointer in bounding box or that contains pointerOnCanvas when painted

#### Parameters

• **objects?**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

objects array to look into

• **pointer?**: [`Point`](/api/classes/point/)

coordinates from viewport to check.

#### Returns

`undefined` \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

**top most object on screen** that contains pointer

#### See

_searchPossibleTargets

#### Inherited from

`SelectableCanvas.searchPossibleTargets`

#### Defined in

[src/canvas/SelectableCanvas.ts:872](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L872)

***

### sendObjectBackwards()

> **sendObjectBackwards**(`object`, `intersecting`?): `boolean`

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to send

• **intersecting?**: `boolean`

If `true`, send object behind next lower intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.sendObjectBackwards`

#### Defined in

[src/Collection.ts:214](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L214)

***

### sendObjectToBack()

> **sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to send to back

#### Returns

`boolean`

true if change occurred

#### Inherited from

`SelectableCanvas.sendObjectToBack`

#### Defined in

[src/Collection.ts:178](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L178)

***

### set()

> **set**(`key`, `value`?): [`Canvas`](/api/classes/canvas/)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`Canvas`](/api/classes/canvas/)

#### Inherited from

`SelectableCanvas.set`

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L29)

***

### setActiveObject()

> **setActiveObject**(`object`, `e`?): `boolean`

Sets given object as the only active object on canvas

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to set as an active one

• **e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

Event (passed along when firing "object:selected")

#### Returns

`boolean`

true if the object has been selected

#### Inherited from

`SelectableCanvas.setActiveObject`

#### Defined in

[src/canvas/SelectableCanvas.ts:1131](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1131)

***

### setCursor()

> **setCursor**(`value`): `void`

Set the cursor type of the canvas element

#### Parameters

• **value**: `string`

Cursor type of the canvas element.

#### Returns

`void`

#### See

http://www.w3.org/TR/css3-ui/#cursor

#### Inherited from

`SelectableCanvas.setCursor`

#### Defined in

[src/canvas/SelectableCanvas.ts:660](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L660)

***

### setDimensions()

#### setDimensions(dimensions, options)

> **setDimensions**(`dimensions`, `options`?): `void`

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

##### Parameters

• **dimensions**: `Partial`\<`CSSDimensions`\>

Object with width/height properties

• **options?**

Options object

• **options.backstoreOnly?**: `false`

Set the given dimensions only as canvas backstore dimensions

• **options.cssOnly?**: `true`

Set the given dimensions only as css dimensions

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setDimensions`

##### Defined in

[src/canvas/StaticCanvas.ts:361](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L361)

#### setDimensions(dimensions, options)

> **setDimensions**(`dimensions`, `options`?): `void`

##### Parameters

• **dimensions**: `Partial`\<[`TSize`](/api/type-aliases/tsize/)\>

• **options?**

• **options.backstoreOnly?**: `true`

• **options.cssOnly?**: `false`

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setDimensions`

##### Defined in

[src/canvas/StaticCanvas.ts:365](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L365)

#### setDimensions(dimensions, options)

> **setDimensions**(`dimensions`, `options`?): `void`

##### Parameters

• **dimensions**: `Partial`\<[`TSize`](/api/type-aliases/tsize/)\>

• **options?**: `undefined`

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setDimensions`

##### Defined in

[src/canvas/StaticCanvas.ts:369](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L369)

***

### setHeight()

#### setHeight(value, options)

> **setHeight**(`value`, `options`?): `void`

s
Sets height of this canvas instance

:::caution[Deprecated]
will be removed in 7.0
:::

##### Parameters

• **value**: `number`

Value to set height to

• **options?**

Options object

• **options.backstoreOnly?**: `true`

Set the given dimensions only as canvas backstore dimensions

• **options.cssOnly?**: `false`

Set the given dimensions only as css dimensions

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setHeight`

##### Defined in

[src/canvas/StaticCanvas.ts:314](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L314)

#### setHeight(value, options)

> **setHeight**(`value`, `options`?): `void`

##### Parameters

• **value**: `string` \| `number`

• **options?**

• **options.backstoreOnly?**: `false`

• **options.cssOnly?**: `true`

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setHeight`

##### Defined in

[src/canvas/StaticCanvas.ts:318](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L318)

***

### setViewportTransform()

> **setViewportTransform**(`vpt`): `void`

Sets viewport transformation of this canvas instance

#### Parameters

• **vpt**: [`TMat2D`](/api/type-aliases/tmat2d/)

a Canvas 2D API transform matrix

#### Returns

`void`

#### Inherited from

`SelectableCanvas.setViewportTransform`

#### Defined in

[src/canvas/SelectableCanvas.ts:1269](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L1269)

***

### setWidth()

#### setWidth(value, options)

> **setWidth**(`value`, `options`?): `void`

Sets width of this canvas instance

:::caution[Deprecated]
will be removed in 7.0
:::

##### Parameters

• **value**: `number`

Value to set width to

• **options?**

Options object

• **options.backstoreOnly?**: `true`

Set the given dimensions only as canvas backstore dimensions

• **options.cssOnly?**: `false`

Set the given dimensions only as css dimensions

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setWidth`

##### Defined in

[src/canvas/StaticCanvas.ts:294](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L294)

#### setWidth(value, options)

> **setWidth**(`value`, `options`?): `void`

##### Parameters

• **value**: `string` \| `number`

• **options?**

• **options.backstoreOnly?**: `false`

• **options.cssOnly?**: `true`

##### Returns

`void`

##### Inherited from

`SelectableCanvas.setWidth`

##### Defined in

[src/canvas/StaticCanvas.ts:298](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L298)

***

### setZoom()

> **setZoom**(`value`): `void`

Sets zoom level of this canvas instance

#### Parameters

• **value**: `number`

to set zoom to, less than 1 zooms out

#### Returns

`void`

#### Inherited from

`SelectableCanvas.setZoom`

#### Defined in

[src/canvas/StaticCanvas.ts:423](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L423)

***

### size()

> **size**(): `number`

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

`SelectableCanvas.size`

#### Defined in

[src/Collection.ts:136](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L136)

***

### toCanvasElement()

> **toCanvasElement**(`multiplier`?, `options`?): `HTMLCanvasElement`

Create a new HTMLCanvas element painted with the current canvas content.
No need to resize the actual one or repaint it.
Will transfer object ownership to a new canvas, paint it, and set everything back.
This is an intermediary step used to get to a dataUrl but also it is useful to
create quick image copies of a canvas without passing for the dataUrl string

#### Parameters

• **multiplier?**: `number` = `1`

a zoom factor.

• **options?**: [`TToCanvasElementOptions`](/api/type-aliases/ttocanvaselementoptions/) = `...`

Cropping informations

#### Returns

`HTMLCanvasElement`

#### Inherited from

`SelectableCanvas.toCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:1411](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1411)

***

### toDataURL()

> **toDataURL**(`options`?): `string`

Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately

#### Parameters

• **options?**: [`TDataUrlOptions`](/api/type-aliases/tdataurloptions/) = `...`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### See

[demo](https://jsfiddle.net/xsjua1rd/)

#### Examples

```ts
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
```

```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  left: 100,
  top: 100,
  width: 200,
  height: 200
});
```

```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});
```

```ts
var myObject;
var dataURL = canvas.toDataURL({
  filter: (object) => object.isContainedWithinObject(myObject) || object.intersectsWithObject(myObject)
});
```

#### Inherited from

`SelectableCanvas.toDataURL`

#### Defined in

[src/canvas/StaticCanvas.ts:1380](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1380)

***

### toDatalessJSON()

> **toDatalessJSON**(`propertiesToInclude`?): `any`

Returns dataless JSON representation of canvas

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

json string

#### Inherited from

`SelectableCanvas.toDatalessJSON`

#### Defined in

[src/canvas/StaticCanvas.ts:817](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L817)

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude`?): `any`

Returns dataless object representation of canvas

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

object representation of an instance

#### Inherited from

`SelectableCanvas.toDatalessObject`

#### Defined in

[src/canvas/StaticCanvas.ts:854](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L854)

***

### toJSON()

> **toJSON**(): `any`

Returns Object representation of canvas
this alias is provided because if you call JSON.stringify on an instance,
the toJSON object will be invoked if it exists.
Having a toJSON method means you can do JSON.stringify(myCanvas)

#### Returns

`any`

JSON compatible object

#### Tutorial

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

#### See

[demo](http://jsfiddle.net/fabricjs/pec86/|jsFiddle)

#### Examples

```ts
var json = canvas.toJSON();
```

```ts
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY']);
```

```ts
var json = canvas.toJSON();
```

#### Inherited from

`SelectableCanvas.toJSON`

#### Defined in

[src/canvas/StaticCanvas.ts:845](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L845)

***

### toObject()

> **toObject**(`propertiesToInclude`?): `any`

Returns object representation of canvas

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

object representation of an instance

#### Inherited from

`SelectableCanvas.toObject`

#### Defined in

[src/canvas/StaticCanvas.ts:826](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L826)

***

### toSVG()

> **toSVG**(`options`?, `reviver`?): `string`

Returns SVG representation of canvas

#### Parameters

• **options?**: [`TSVGExportOptions`](/api/type-aliases/tsvgexportoptions/) = `{}`

Options object for SVG output

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg elements, called after each fabric object converted into svg representation.

#### Returns

`string`

SVG string

#### Function

#### Tutorial

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

#### See

[demo](http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle)

#### Examples

```ts
var svg = canvas.toSVG();
```

```ts
var svg = canvas.toSVG({suppressPreamble: true});
```

```ts
var svg = canvas.toSVG({
  viewBox: {
    x: 100,
    y: 100,
    width: 200,
    height: 300
  }
});
```

```ts
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
```

```ts
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});
```

#### Inherited from

`SelectableCanvas.toSVG`

#### Defined in

[src/canvas/StaticCanvas.ts:993](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L993)

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

string representation of an instance

#### Inherited from

`SelectableCanvas.toString`

#### Defined in

[src/canvas/StaticCanvas.ts:1514](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1514)

***

### toggle()

> **toggle**(`property`): [`Canvas`](/api/classes/canvas/)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`Canvas`](/api/classes/canvas/)

#### Inherited from

`SelectableCanvas.toggle`

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L46)

***

### viewportCenterObject()

> **viewportCenterObject**(`object`): `void`

Centers object vertically and horizontally in the viewport

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to center vertically and horizontally

#### Returns

`void`

#### Inherited from

`SelectableCanvas.viewportCenterObject`

#### Defined in

[src/canvas/StaticCanvas.ts:764](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L764)

***

### viewportCenterObjectH()

> **viewportCenterObjectH**(`object`): `void`

Centers object horizontally in the viewport, object.top is unchanged

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to center vertically and horizontally

#### Returns

`void`

#### Inherited from

`SelectableCanvas.viewportCenterObjectH`

#### Defined in

[src/canvas/StaticCanvas.ts:772](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L772)

***

### viewportCenterObjectV()

> **viewportCenterObjectV**(`object`): `void`

Centers object Vertically in the viewport, object.top is unchanged

#### Parameters

• **object**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to center vertically and horizontally

#### Returns

`void`

#### Inherited from

`SelectableCanvas.viewportCenterObjectV`

#### Defined in

[src/canvas/StaticCanvas.ts:783](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L783)

***

### zoomToPoint()

> **zoomToPoint**(`point`, `value`): `void`

Sets zoom level of this canvas instance, the zoom centered around point
meaning that following zoom to point with the same point will have the visual
effect of the zoom originating from that point. The point won't move.
It has nothing to do with canvas center or visual center of the viewport.

#### Parameters

• **point**: [`Point`](/api/classes/point/)

to zoom with respect to

• **value**: `number`

to set zoom to, less than 1 zooms out

#### Returns

`void`

#### Inherited from

`SelectableCanvas.zoomToPoint`

#### Defined in

[src/canvas/StaticCanvas.ts:406](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L406)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

`SelectableCanvas.getDefaults`

#### Defined in

[src/canvas/SelectableCanvas.ts:290](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/SelectableCanvas.ts#L290)
