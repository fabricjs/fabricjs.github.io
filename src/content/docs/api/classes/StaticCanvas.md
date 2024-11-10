---
editUrl: false
next: false
prev: false
title: "StaticCanvas"
---

Static canvas class

## See

[demo](http://fabricjs.com/static_canvas|StaticCanvas)

## Fires

before:render

## Fires

after:render

## Fires

canvas:cleared

## Fires

object:added

## Fires

object:removed

## Extends

- `Collection`\<() => `CommonMethods`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>, `this`\> & `CommonMethods`\<[`CanvasEvents`](/api/interfaces/canvasevents/), `this`\>

## Type Parameters

• **EventSpec** *extends* [`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/) = [`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)

## Implements

- [`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/)

## Constructors

### new StaticCanvas()

> **new StaticCanvas**\<`EventSpec`\>(`el`?, `options`?): [`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>

#### Parameters

• **el?**: `string` \| `HTMLCanvasElement`

• **options?**: [`TOptions`](/api/type-aliases/toptions/)\<[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/)\> = `{}`

#### Returns

[`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).constructor`

#### Defined in

[src/canvas/StaticCanvas.ts:186](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L186)

## Properties

### \_objects

> **\_objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[] = `[]`

#### TODO

needs to end up in the constructor too

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>)._objects`

#### Defined in

[src/Collection.ts:21](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L21)

***

### \_offset

> **\_offset**: `object`

#### left

> **left**: `number`

#### top

> **top**: `number`

#### Defined in

[src/canvas/StaticCanvas.ts:159](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L159)

***

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

#### Todo

move to Canvas

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`allowTouchScrolling`](/api/interfaces/staticcanvasoptions/#allowtouchscrolling)

#### Defined in

[src/canvas/StaticCanvas.ts:123](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L123)

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Background color of canvas instance.

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundColor`](/api/interfaces/staticcanvasoptions/#backgroundcolor)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundImage`](/api/interfaces/staticcanvasoptions/#backgroundimage)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundVpt`](/api/interfaces/staticcanvasoptions/#backgroundvpt)

#### Defined in

[src/canvas/StaticCanvas.ts:97](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L97)

***

### clipPath?

> `optional` **clipPath**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`clipPath`](/api/interfaces/staticcanvasoptions/#clippath)

#### Defined in

[src/canvas/StaticCanvas.ts:105](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L105)

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

#### Todo

move to Canvas

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`controlsAboveOverlay`](/api/interfaces/staticcanvasoptions/#controlsaboveoverlay)

#### Defined in

[src/canvas/StaticCanvas.ts:118](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L118)

***

### destroyed?

> `optional` **destroyed**: `boolean`

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

#### Defined in

[src/canvas/StaticCanvas.ts:150](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L150)

***

### disposed?

> `optional` **disposed**: `boolean`

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

#### Defined in

[src/canvas/StaticCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L157)

***

### elements

> **elements**: [`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/)

#### Defined in

[src/canvas/StaticCanvas.ts:163](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L163)

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`enableRetinaScaling`](/api/interfaces/staticcanvasoptions/#enableretinascaling)

#### Defined in

[src/canvas/StaticCanvas.ts:112](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L112)

***

### height

> **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`height`](/api/interfaces/staticcanvasoptions/#height)

#### Defined in

[src/canvas/StaticCanvas.ts:94](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L94)

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`imageSmoothingEnabled`](/api/interfaces/staticcanvasoptions/#imagesmoothingenabled)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`includeDefaultValues`](/api/interfaces/staticcanvasoptions/#includedefaultvalues)

#### Defined in

[src/canvas/StaticCanvas.ts:107](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L107)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayColor`](/api/interfaces/staticcanvasoptions/#overlaycolor)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayImage`](/api/interfaces/staticcanvasoptions/#overlayimage)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayVpt`](/api/interfaces/staticcanvasoptions/#overlayvpt)

#### Defined in

[src/canvas/StaticCanvas.ts:101](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L101)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`renderOnAddRemove`](/api/interfaces/staticcanvasoptions/#renderonaddremove)

#### Defined in

[src/canvas/StaticCanvas.ts:110](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L110)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`skipOffscreen`](/api/interfaces/staticcanvasoptions/#skipoffscreen)

#### Defined in

[src/canvas/StaticCanvas.ts:111](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L111)

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`svgViewportTransformation`](/api/interfaces/staticcanvasoptions/#svgviewporttransformation)

#### Defined in

[src/canvas/StaticCanvas.ts:954](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L954)

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

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`viewportTransform`](/api/interfaces/staticcanvasoptions/#viewporttransform)

#### Defined in

[src/canvas/StaticCanvas.ts:125](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L125)

***

### vptCoords

> **vptCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

The viewport bounding box in scene plane coordinates, see [calcViewportBoundaries](../../../../api/classes/staticcanvas/#calcviewportboundaries)

#### Defined in

[src/canvas/StaticCanvas.ts:130](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L130)

***

### width

> **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`width`](/api/interfaces/staticcanvasoptions/#width)

#### Defined in

[src/canvas/StaticCanvas.ts:93](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L93)

***

### ownDefaults

> `static` **ownDefaults**: [`TOptions`](/api/type-aliases/toptions/)\<[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/)\> = `staticCanvasDefaults`

#### Defined in

[src/canvas/StaticCanvas.ts:174](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L174)

## Accessors

### contextContainer

> `get` **contextContainer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[src/canvas/StaticCanvas.ts:141](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L141)

***

### lowerCanvasEl

> `get` **lowerCanvasEl**(): `HTMLCanvasElement`

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:137](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L137)

## Methods

### \_onObjectAdded()

> **\_onObjectAdded**(`obj`): `void`

#### Parameters

• **obj**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`void`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>)._onObjectAdded`

#### Defined in

[src/canvas/StaticCanvas.ts:228](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L228)

***

### \_onObjectRemoved()

> **\_onObjectRemoved**(`obj`): `void`

#### Parameters

• **obj**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`void`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>)._onObjectRemoved`

#### Defined in

[src/canvas/StaticCanvas.ts:243](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L243)

***

### \_onStackOrderChanged()

> **\_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>)._onStackOrderChanged`

#### Defined in

[src/canvas/StaticCanvas.ts:249](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L249)

***

### \_set()

> **\_set**(`key`, `value`): `void`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`void`

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>)._set`

#### Defined in

[src/CommonMethods.ts:38](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L38)

***

### absolutePan()

> **absolutePan**(`point`): `void`

Pan viewport so as to place point at top left corner of canvas

#### Parameters

• **point**: [`Point`](/api/classes/point/)

to move to

#### Returns

`void`

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

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).add`

#### Defined in

[src/canvas/StaticCanvas.ts:210](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L210)

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

`createCollectionMixin(CommonMethods<CanvasEvents>).bringObjectForward`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).bringObjectToFront`

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

#### Defined in

[src/canvas/StaticCanvas.ts:266](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L266)

***

### calcViewportBoundaries()

> **calcViewportBoundaries**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Defined in

[src/canvas/StaticCanvas.ts:528](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L528)

***

### cancelRequestedRender()

> **cancelRequestedRender**(): `void`

#### Returns

`void`

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

#### Defined in

[src/canvas/StaticCanvas.ts:745](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L745)

***

### clear()

> **clear**(): `void`

Clears all contexts (background, main, top) of an instance

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:478](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L478)

***

### clearContext()

> **clearContext**(`ctx`): `void`

Clears specified context of canvas element

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to clear

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:463](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L463)

***

### clone()

> **clone**(`properties`?): `Promise`\<[`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>\>

Clones canvas instance

#### Parameters

• **properties?**: `string`[]

Array of properties to include in the cloned canvas and children

#### Returns

`Promise`\<[`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>\>

#### Defined in

[src/canvas/StaticCanvas.ts:1327](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1327)

***

### cloneWithoutData()

> **cloneWithoutData**(): [`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

[`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>

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

`createCollectionMixin(CommonMethods<CanvasEvents>).collectObjects`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).complexity`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).contains`

#### Defined in

[src/Collection.ts:148](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L148)

***

### createSVGClipPathMarkup()

> **createSVGClipPathMarkup**(`options`): `string`

#### Parameters

• **options**: [`TSVGExportOptions`](/api/type-aliases/tsvgexportoptions/)

#### Returns

`string`

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

#### Defined in

[src/canvas/StaticCanvas.ts:1123](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1123)

***

### createSVGRefElementsMarkup()

> **createSVGRefElementsMarkup**(): `string`

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1095](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1095)

***

### dispose()

> **dispose**(): `Promise`\<`boolean`\>

Waits until rendering has settled to destroy the canvas

#### Returns

`Promise`\<`boolean`\>

a promise resolving to `true` once the canvas has been destroyed or to `false` if the canvas has was already destroyed

#### Throws

if aborted by a consequent call

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

#### Defined in

[src/canvas/StaticCanvas.ts:610](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L610)

***

### drawControls()

> **drawControls**(`_ctx`): `void`

#### Parameters

• **\_ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:553](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L553)

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

`createCollectionMixin(CommonMethods<CanvasEvents>).findNewLowerIndex`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).findNewUpperIndex`

#### Defined in

[src/Collection.ts:295](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L295)

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

`createCollectionMixin(CommonMethods<CanvasEvents>).fire`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).forEachObject`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).get`

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L59)

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

#### Defined in

[src/canvas/StaticCanvas.ts:716](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L716)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns coordinates of a center of canvas.

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

[src/canvas/StaticCanvas.ts:727](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L727)

***

### getContext()

> **getContext**(): `CanvasRenderingContext2D`

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[src/canvas/StaticCanvas.ts:471](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L471)

***

### getElement()

> **getElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:455](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L455)

***

### getHeight()

> **getHeight**(): `number`

Returns canvas height (in px)

#### Returns

`number`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).getObjects`

#### Defined in

[src/Collection.ts:108](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L108)

***

### getVpCenter()

> **getVpCenter**(): [`Point`](/api/classes/point/)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](/api/classes/point/)

vpCenter, viewport center

#### Defined in

[src/canvas/StaticCanvas.ts:794](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L794)

***

### getWidth()

> **getWidth**(): `number`

Returns canvas width (in px)

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:274](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L274)

***

### getZoom()

> **getZoom**(): `number`

Returns canvas zoom level

#### Returns

`number`

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

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).insertAt`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).isEmpty`

#### Defined in

[src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L128)

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

`createCollectionMixin(CommonMethods<CanvasEvents>).item`

#### Defined in

[src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L120)

***

### loadFromJSON()

> **loadFromJSON**(`json`, `reviver`?, `options`?): `Promise`\<[`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>\>

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

`Promise`\<[`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>\>

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

`createCollectionMixin(CommonMethods<CanvasEvents>).moveObjectTo`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

##### Defined in

[src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L133)

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).on`

##### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L23)

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).on`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).once`

##### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L62)

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).once`

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

#### Defined in

[src/canvas/StaticCanvas.ts:442](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L442)

***

### renderAll()

> **renderAll**(): `void`

Renders the canvas

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:492](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L492)

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

#### Defined in

[src/canvas/StaticCanvas.ts:562](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L562)

***

### requestRenderAll()

> **requestRenderAll**(): `void`

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:518](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L518)

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

`createCollectionMixin(CommonMethods<CanvasEvents>).sendObjectBackwards`

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

`createCollectionMixin(CommonMethods<CanvasEvents>).sendObjectToBack`

#### Defined in

[src/Collection.ts:178](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Collection.ts#L178)

***

### set()

> **set**(`key`, `value`?): [`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).set`

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L29)

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

##### Defined in

[src/canvas/StaticCanvas.ts:365](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L365)

#### setDimensions(dimensions, options)

> **setDimensions**(`dimensions`, `options`?): `void`

##### Parameters

• **dimensions**: `Partial`\<[`TSize`](/api/type-aliases/tsize/)\>

• **options?**: `undefined`

##### Returns

`void`

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

#### Defined in

[src/canvas/StaticCanvas.ts:392](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L392)

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

`createCollectionMixin(CommonMethods<CanvasEvents>).size`

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

#### Defined in

[src/canvas/StaticCanvas.ts:993](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L993)

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

string representation of an instance

#### Defined in

[src/canvas/StaticCanvas.ts:1514](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L1514)

***

### toggle()

> **toggle**(`property`): [`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`StaticCanvas`](/api/classes/staticcanvas/)\<`EventSpec`\>

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).toggle`

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

#### Defined in

[src/canvas/StaticCanvas.ts:406](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L406)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

[src/canvas/StaticCanvas.ts:182](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/canvas/StaticCanvas.ts#L182)
