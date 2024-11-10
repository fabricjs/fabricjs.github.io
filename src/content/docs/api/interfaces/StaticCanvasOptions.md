---
editUrl: false
next: false
prev: false
title: "StaticCanvasOptions"
---

## Extends

- `CanvasDrawableOptions`.`CanvasRenderingOptions`.`CanvasExportOptions`

## Extended by

- [`CanvasOptions`](/api/interfaces/canvasoptions/)

## Properties

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
It gives PRIORITY to DOM scrolling, it doesn't make it always possible.
If is true, when using a touch event on the canvas, the canvas will scroll if scroll is possible.
If we are in drawing mode or if we are selecting an object the canvas preventDefault and so it won't scroll

#### Default

```ts

```

#### Todo

move to Canvas

#### Defined in

[src/canvas/StaticCanvasOptions.ts:163](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L163)

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Background color of canvas instance.

#### Default

```ts

```

#### Inherited from

`CanvasDrawableOptions.backgroundColor`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:20](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L20)

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

#### Inherited from

`CanvasDrawableOptions.backgroundImage`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:30](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L30)

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

`CanvasDrawableOptions.backgroundVpt`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:13](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L13)

***

### clipPath?

> `optional` **clipPath**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Inherited from

`CanvasRenderingOptions.clipPath`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:105](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L105)

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

Indicates whether object controls (borders/controls) are rendered above overlay image

#### Default

```ts

```

#### Todo

move to Canvas

#### Defined in

[src/canvas/StaticCanvasOptions.ts:151](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L151)

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Inherited from

`CanvasRenderingOptions.enableRetinaScaling`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:89](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L89)

***

### height

> **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Defined in

[src/canvas/StaticCanvasOptions.ts:142](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L142)

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Inherited from

`CanvasRenderingOptions.imageSmoothingEnabled`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:96](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L96)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

#### Default

```ts

```

#### Inherited from

`CanvasExportOptions.includeDefaultValues`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:115](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L115)

***

### overlayColor

> **overlayColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Overlay color of canvas instance.

#### Since

1.3.9

#### Default

```ts

```

#### Inherited from

`CanvasDrawableOptions.overlayColor`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:47](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L47)

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

#### Inherited from

`CanvasDrawableOptions.overlayImage`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:57](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L57)

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

`CanvasDrawableOptions.overlayVpt`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:39](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L39)

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

#### Inherited from

`CanvasRenderingOptions.renderOnAddRemove`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:71](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L71)

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

`CanvasRenderingOptions.skipOffscreen`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:82](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L82)

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Inherited from

`CanvasExportOptions.svgViewportTransformation`

#### Defined in

[src/canvas/StaticCanvasOptions.ts:123](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L123)

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

#### Defined in

[src/canvas/StaticCanvasOptions.ts:174](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L174)

***

### width

> **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Defined in

[src/canvas/StaticCanvasOptions.ts:135](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvasOptions.ts#L135)
