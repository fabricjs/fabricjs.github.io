# Interface: StaticCanvasOptions

## Hierarchy

- `CanvasDrawableOptions`

- `CanvasRenderingOptions`

- `CanvasExportOptions`

  ↳ **`StaticCanvasOptions`**

  ↳↳ [`CanvasOptions`](CanvasOptions.md)

## Implemented by

- [`StaticCanvas`](../classes/StaticCanvas.md)

## Table of contents

### Properties

- [allowTouchScrolling](StaticCanvasOptions.md#allowtouchscrolling)
- [backgroundColor](StaticCanvasOptions.md#backgroundcolor)
- [backgroundImage](StaticCanvasOptions.md#backgroundimage)
- [backgroundVpt](StaticCanvasOptions.md#backgroundvpt)
- [clipPath](StaticCanvasOptions.md#clippath)
- [controlsAboveOverlay](StaticCanvasOptions.md#controlsaboveoverlay)
- [enableRetinaScaling](StaticCanvasOptions.md#enableretinascaling)
- [height](StaticCanvasOptions.md#height)
- [imageSmoothingEnabled](StaticCanvasOptions.md#imagesmoothingenabled)
- [includeDefaultValues](StaticCanvasOptions.md#includedefaultvalues)
- [overlayColor](StaticCanvasOptions.md#overlaycolor)
- [overlayImage](StaticCanvasOptions.md#overlayimage)
- [overlayVpt](StaticCanvasOptions.md#overlayvpt)
- [renderOnAddRemove](StaticCanvasOptions.md#renderonaddremove)
- [skipOffscreen](StaticCanvasOptions.md#skipoffscreen)
- [svgViewportTransformation](StaticCanvasOptions.md#svgviewporttransformation)
- [viewportTransform](StaticCanvasOptions.md#viewporttransform)
- [width](StaticCanvasOptions.md#width)

## Properties

### allowTouchScrolling

• **allowTouchScrolling**: `boolean`

Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas

**`Default`**

```ts

```

**`Todo`**

move to Canvas

#### Defined in

[src/canvas/StaticCanvasOptions.ts:161](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L161)

___

### backgroundColor

• **backgroundColor**: `string` \| [`TFiller`](../modules.md#tfiller)

Background color of canvas instance.

**`Default`**

```ts

```

#### Inherited from

CanvasDrawableOptions.backgroundColor

#### Defined in

[src/canvas/StaticCanvasOptions.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L21)

___

### backgroundImage

• `Optional` **backgroundImage**: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Inherited from

CanvasDrawableOptions.backgroundImage

#### Defined in

[src/canvas/StaticCanvasOptions.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L31)

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

CanvasDrawableOptions.backgroundVpt

#### Defined in

[src/canvas/StaticCanvasOptions.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L14)

___

### clipPath

• `Optional` **clipPath**: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Inherited from

CanvasRenderingOptions.clipPath

#### Defined in

[src/canvas/StaticCanvasOptions.ts:106](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L106)

___

### controlsAboveOverlay

• **controlsAboveOverlay**: `boolean`

Indicates whether object controls (borders/controls) are rendered above overlay image

**`Default`**

```ts

```

**`Todo`**

move to Canvas

#### Defined in

[src/canvas/StaticCanvasOptions.ts:152](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L152)

___

### enableRetinaScaling

• **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

**`Default`**

```ts

```

#### Inherited from

CanvasRenderingOptions.enableRetinaScaling

#### Defined in

[src/canvas/StaticCanvasOptions.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L90)

___

### height

• **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Defined in

[src/canvas/StaticCanvasOptions.ts:143](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L143)

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

**`Default`**

```ts

```

#### Inherited from

CanvasRenderingOptions.imageSmoothingEnabled

#### Defined in

[src/canvas/StaticCanvasOptions.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L97)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

**`Default`**

```ts

```

#### Inherited from

CanvasExportOptions.includeDefaultValues

#### Defined in

[src/canvas/StaticCanvasOptions.ts:116](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L116)

___

### overlayColor

• **overlayColor**: `string` \| [`TFiller`](../modules.md#tfiller)

Overlay color of canvas instance.

**`Since`**

1.3.9

**`Default`**

```ts

```

#### Inherited from

CanvasDrawableOptions.overlayColor

#### Defined in

[src/canvas/StaticCanvasOptions.ts:48](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L48)

___

### overlayImage

• `Optional` **overlayImage**: [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](FabricObjectProps.md)\>, [`SerializedObjectProps`](SerializedObjectProps.md), [`ObjectEvents`](ObjectEvents.md)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Inherited from

CanvasDrawableOptions.overlayImage

#### Defined in

[src/canvas/StaticCanvasOptions.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L58)

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

CanvasDrawableOptions.overlayVpt

#### Defined in

[src/canvas/StaticCanvasOptions.ts:40](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L40)

___

### renderOnAddRemove

• **renderOnAddRemove**: `boolean`

Indicates whether [add](../classes/StaticCanvas.md#add), [insertAt](../classes/StaticCanvas.md#insertat) and [remove](../classes/StaticCanvas.md#remove),
StaticCanvas#moveTo, [clear](../classes/StaticCanvas.md#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

**`Default`**

```ts

```

#### Inherited from

CanvasRenderingOptions.renderOnAddRemove

#### Defined in

[src/canvas/StaticCanvasOptions.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L72)

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

CanvasRenderingOptions.skipOffscreen

#### Defined in

[src/canvas/StaticCanvasOptions.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L83)

___

### svgViewportTransformation

• **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

**`Default`**

```ts

```

#### Inherited from

CanvasExportOptions.svgViewportTransformation

#### Defined in

[src/canvas/StaticCanvasOptions.ts:124](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L124)

___

### viewportTransform

• **viewportTransform**: [`TMat2D`](../modules.md#tmat2d)

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

#### Defined in

[src/canvas/StaticCanvasOptions.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L172)

___

### width

• **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Defined in

[src/canvas/StaticCanvasOptions.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvasOptions.ts#L136)
