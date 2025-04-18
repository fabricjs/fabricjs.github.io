---
editUrl: false
next: false
prev: false
title: "StaticCanvas"
---

Defined in: [src/canvas/StaticCanvas.ts:86](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L86)

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

- `Collection`\<\{(): `CommonMethods`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>; `prototype`: `CommonMethods`\<`any`\>; \}, `this`\> & `CommonMethods`\<[`CanvasEvents`](/api/interfaces/canvasevents/), `this`\>

## Type Parameters

### EventSpec

`EventSpec` *extends* [`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/) = [`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)

## Implements

- [`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/)

## Constructors

### Constructor

> **new StaticCanvas**\<`EventSpec`\>(`el?`, `options?`): `StaticCanvas`\<`EventSpec`\>

Defined in: [src/canvas/StaticCanvas.ts:186](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L186)

#### Parameters

##### el?

`string` | `HTMLCanvasElement`

##### options?

[`TOptions`](/api/type-aliases/toptions/)\<[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/)\> = `{}`

#### Returns

`StaticCanvas`\<`EventSpec`\>

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).constructor`

## Properties

### \_objects

> **\_objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[] = `[]`

Defined in: [src/Collection.ts:21](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L21)

#### TODO

needs to end up in the constructor too

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>)._objects`

***

### \_offset

> **\_offset**: `object`

Defined in: [src/canvas/StaticCanvas.ts:159](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L159)

#### left

> **left**: `number`

#### top

> **top**: `number`

***

### allowTouchScrolling

> **allowTouchScrolling**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:123](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L123)

#### Todo

move to Canvas

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`allowTouchScrolling`](/api/interfaces/staticcanvasoptions/#allowtouchscrolling)

***

### backgroundColor

> **backgroundColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/canvas/StaticCanvas.ts:98](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L98)

Background color of canvas instance.

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundColor`](/api/interfaces/staticcanvasoptions/#backgroundcolor)

***

### backgroundImage?

> `optional` **backgroundImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/canvas/StaticCanvas.ts:99](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L99)

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`backgroundImage`](/api/interfaces/staticcanvasoptions/#backgroundimage)

***

### backgroundVpt

> **backgroundVpt**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:97](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L97)

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

***

### clipPath?

> `optional` **clipPath**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/canvas/StaticCanvas.ts:105](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L105)

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`clipPath`](/api/interfaces/staticcanvasoptions/#clippath)

***

### controlsAboveOverlay

> **controlsAboveOverlay**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:118](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L118)

#### Todo

move to Canvas

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`controlsAboveOverlay`](/api/interfaces/staticcanvasoptions/#controlsaboveoverlay)

***

### destroyed?

> `optional` **destroyed**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:150](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L150)

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

***

### disposed?

> `optional` **disposed**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L157)

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

***

### elements

> **elements**: [`StaticCanvasDOMManager`](/api/classes/staticcanvasdommanager/)

Defined in: [src/canvas/StaticCanvas.ts:163](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L163)

***

### enableRetinaScaling

> **enableRetinaScaling**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:112](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L112)

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`enableRetinaScaling`](/api/interfaces/staticcanvasoptions/#enableretinascaling)

***

### height

> **height**: `number`

Defined in: [src/canvas/StaticCanvas.ts:94](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L94)

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`height`](/api/interfaces/staticcanvasoptions/#height)

***

### imageSmoothingEnabled

> **imageSmoothingEnabled**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:113](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L113)

Indicates whether this canvas will use image smoothing, this is on by default in browsers

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`imageSmoothingEnabled`](/api/interfaces/staticcanvasoptions/#imagesmoothingenabled)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:107](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L107)

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`includeDefaultValues`](/api/interfaces/staticcanvasoptions/#includedefaultvalues)

***

### overlayColor

> **overlayColor**: `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/canvas/StaticCanvas.ts:102](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L102)

Overlay color of canvas instance.

#### Since

1.3.9

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayColor`](/api/interfaces/staticcanvasoptions/#overlaycolor)

***

### overlayImage?

> `optional` **overlayImage**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/canvas/StaticCanvas.ts:103](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L103)

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`overlayImage`](/api/interfaces/staticcanvasoptions/#overlayimage)

***

### overlayVpt

> **overlayVpt**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:101](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L101)

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

***

### renderOnAddRemove

> **renderOnAddRemove**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:110](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L110)

Indicates whether [StaticCanvas#add](/api/classes/staticcanvas/#add), [StaticCanvas#insertAt](/api/classes/staticcanvas/#insertat) and StaticCanvas#remove,
StaticCanvas#moveTo, [StaticCanvas#clear](/api/classes/staticcanvas/#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`renderOnAddRemove`](/api/interfaces/staticcanvasoptions/#renderonaddremove)

***

### skipOffscreen

> **skipOffscreen**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:111](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L111)

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

***

### svgViewportTransformation

> **svgViewportTransformation**: `boolean`

Defined in: [src/canvas/StaticCanvas.ts:954](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L954)

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

#### Default

```ts

```

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`svgViewportTransformation`](/api/interfaces/staticcanvasoptions/#svgviewporttransformation)

***

### viewportTransform

> **viewportTransform**: [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/canvas/StaticCanvas.ts:125](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L125)

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

***

### vptCoords

> **vptCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Defined in: [src/canvas/StaticCanvas.ts:130](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L130)

The viewport bounding box in scene plane coordinates, see [calcViewportBoundaries](/api/classes/staticcanvas/#calcviewportboundaries)

***

### width

> **width**: `number`

Defined in: [src/canvas/StaticCanvas.ts:93](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L93)

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/).[`width`](/api/interfaces/staticcanvasoptions/#width)

***

### ownDefaults

> `static` **ownDefaults**: [`TOptions`](/api/type-aliases/toptions/)\<[`StaticCanvasOptions`](/api/interfaces/staticcanvasoptions/)\> = `staticCanvasDefaults`

Defined in: [src/canvas/StaticCanvas.ts:174](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L174)

## Accessors

### contextContainer

#### Get Signature

> **get** **contextContainer**(): `CanvasRenderingContext2D`

Defined in: [src/canvas/StaticCanvas.ts:141](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L141)

##### Returns

`CanvasRenderingContext2D`

***

### lowerCanvasEl

#### Get Signature

> **get** **lowerCanvasEl**(): `HTMLCanvasElement`

Defined in: [src/canvas/StaticCanvas.ts:137](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L137)

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

##### Returns

`HTMLCanvasElement`

## Methods

### \_onObjectAdded()

> **\_onObjectAdded**(`obj`): `void`

Defined in: [src/canvas/StaticCanvas.ts:228](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L228)

#### Parameters

##### obj

[`FabricObject`](/api/classes/fabricobject/)

#### Returns

`void`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>)._onObjectAdded`

***

### \_onObjectRemoved()

> **\_onObjectRemoved**(`obj`): `void`

Defined in: [src/canvas/StaticCanvas.ts:243](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L243)

#### Parameters

##### obj

[`FabricObject`](/api/classes/fabricobject/)

#### Returns

`void`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>)._onObjectRemoved`

***

### \_onStackOrderChanged()

> **\_onStackOrderChanged**(): `void`

Defined in: [src/canvas/StaticCanvas.ts:249](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L249)

#### Returns

`void`

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>)._onStackOrderChanged`

***

### \_set()

> **\_set**(`key`, `value`): `void`

Defined in: [src/CommonMethods.ts:38](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/CommonMethods.ts#L38)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`void`

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>)._set`

***

### absolutePan()

> **absolutePan**(`point`): `void`

Defined in: [src/canvas/StaticCanvas.ts:431](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L431)

Pan viewport so as to place point at top left corner of canvas

#### Parameters

##### point

[`Point`](/api/classes/point/)

to move to

#### Returns

`void`

***

### add()

> **add**(...`objects`): `number`

Defined in: [src/canvas/StaticCanvas.ts:210](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L210)

Adds objects to collection
Objects should be instances of (or inherit from) FabricObject

#### Parameters

##### objects

...[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

to add

#### Returns

`number`

new array length

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).add`

***

### bringObjectForward()

> **bringObjectForward**(`object`, `intersecting?`): `boolean`

Defined in: [src/Collection.ts:240](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L240)

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send

##### intersecting?

`boolean`

If `true`, send object in front of next upper intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).bringObjectForward`

***

### bringObjectToFront()

> **bringObjectToFront**(`object`): `boolean`

Defined in: [src/Collection.ts:194](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L194)

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send

#### Returns

`boolean`

true if change occurred

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).bringObjectToFront`

***

### calcOffset()

> **calcOffset**(): `object`

Defined in: [src/canvas/StaticCanvas.ts:266](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L266)

Calculates canvas element offset relative to the document
This method is also attached as "resize" event handler of window

#### Returns

`object`

##### left

> **left**: `number` = `0`

##### top

> **top**: `number` = `0`

***

### calcViewportBoundaries()

> **calcViewportBoundaries**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Defined in: [src/canvas/StaticCanvas.ts:528](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L528)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

***

### cancelRequestedRender()

> **cancelRequestedRender**(): `void`

Defined in: [src/canvas/StaticCanvas.ts:546](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L546)

#### Returns

`void`

***

### centerObject()

> **centerObject**(`object`): `void`

Defined in: [src/canvas/StaticCanvas.ts:756](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L756)

Centers object vertically and horizontally in the canvas

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to center vertically and horizontally

#### Returns

`void`

***

### centerObjectH()

> **centerObjectH**(`object`): `void`

Defined in: [src/canvas/StaticCanvas.ts:734](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L734)

Centers object horizontally in the canvas

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

#### Returns

`void`

***

### centerObjectV()

> **centerObjectV**(`object`): `void`

Defined in: [src/canvas/StaticCanvas.ts:745](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L745)

Centers object vertically in the canvas

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to center vertically

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [src/canvas/StaticCanvas.ts:478](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L478)

Clears all contexts (background, main, top) of an instance

#### Returns

`void`

***

### clearContext()

> **clearContext**(`ctx`): `void`

Defined in: [src/canvas/StaticCanvas.ts:463](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L463)

Clears specified context of canvas element

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to clear

#### Returns

`void`

***

### clone()

> **clone**(`properties?`): `Promise`\<`StaticCanvas`\<`EventSpec`\>\>

Defined in: [src/canvas/StaticCanvas.ts:1327](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1327)

Clones canvas instance

#### Parameters

##### properties?

`string`[]

Array of properties to include in the cloned canvas and children

#### Returns

`Promise`\<`StaticCanvas`\<`EventSpec`\>\>

***

### cloneWithoutData()

> **cloneWithoutData**(): `StaticCanvas`\<`EventSpec`\>

Defined in: [src/canvas/StaticCanvas.ts:1337](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1337)

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

`StaticCanvas`\<`EventSpec`\>

***

### collectObjects()

> **collectObjects**(`bbox`, `options`): [`InteractiveFabricObject`](/api/classes/interactivefabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Defined in: [src/Collection.ts:326](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L326)

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

##### bbox

[`TBBox`](/api/type-aliases/tbbox/)

a bounding box in scene coordinates

##### options

an object with includeIntersecting

###### includeIntersecting?

`boolean` = `true`

#### Returns

[`InteractiveFabricObject`](/api/classes/interactivefabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).collectObjects`

***

### complexity()

> **complexity**(): `number`

Defined in: [src/Collection.ts:165](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L165)

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).complexity`

***

### contains()

> **contains**(`object`, `deep?`): `boolean`

Defined in: [src/Collection.ts:148](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L148)

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](/api/classes/fabricobject/#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to check against

##### deep?

`boolean`

`true` to check all descendants, `false` to check only `_objects`

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).contains`

***

### createSVGClipPathMarkup()

> **createSVGClipPathMarkup**(`options`): `string`

Defined in: [src/canvas/StaticCanvas.ts:1080](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1080)

#### Parameters

##### options

[`TSVGExportOptions`](/api/type-aliases/tsvgexportoptions/)

#### Returns

`string`

***

### createSVGFontFacesMarkup()

> **createSVGFontFacesMarkup**(): `string`

Defined in: [src/canvas/StaticCanvas.ts:1123](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1123)

Creates markup containing SVG font faces,
font URLs for font faces must be collected by developers
and are not extracted from the DOM by fabricjs

#### Returns

`string`

***

### createSVGRefElementsMarkup()

> **createSVGRefElementsMarkup**(): `string`

Defined in: [src/canvas/StaticCanvas.ts:1095](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1095)

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

***

### dispose()

> **dispose**(): `Promise`\<`boolean`\>

Defined in: [src/canvas/StaticCanvas.ts:1471](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1471)

Waits until rendering has settled to destroy the canvas

#### Returns

`Promise`\<`boolean`\>

a promise resolving to `true` once the canvas has been destroyed or to `false` if the canvas has was already destroyed

#### Throws

if aborted by a consequent call

***

### drawClipPathOnCanvas()

> **drawClipPathOnCanvas**(`ctx`, `clipPath`): `void`

Defined in: [src/canvas/StaticCanvas.ts:610](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L610)

Paint the cached clipPath on the lowerCanvasEl

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to render on

##### clipPath

`TCachedFabricObject`

#### Returns

`void`

***

### drawControls()

> **drawControls**(`_ctx`): `void`

Defined in: [src/canvas/StaticCanvas.ts:553](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L553)

#### Parameters

##### \_ctx

`CanvasRenderingContext2D`

#### Returns

`void`

***

### findNewLowerIndex()

> **findNewLowerIndex**(`object`, `idx`, `intersecting?`): `number`

Defined in: [src/Collection.ts:272](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L272)

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

##### idx

`number`

##### intersecting?

`boolean`

#### Returns

`number`

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).findNewLowerIndex`

***

### findNewUpperIndex()

> **findNewUpperIndex**(`object`, `idx`, `intersecting?`): `number`

Defined in: [src/Collection.ts:295](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L295)

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

##### idx

`number`

##### intersecting?

`boolean`

#### Returns

`number`

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).findNewUpperIndex`

***

### fire()

> **fire**\<`K`\>(`eventName`, `options?`): `void`

Defined in: [src/Observable.ts:167](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Observable.ts#L167)

Fires event with an optional options object

#### Type Parameters

##### K

`K` *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

#### Parameters

##### eventName

`K`

Event name to fire

##### options?

[`CanvasEvents`](/api/interfaces/canvasevents/)\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).fire`

***

### forEachObject()

> **forEachObject**(`callback`): `void`

Defined in: [src/Collection.ts:91](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L91)

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

##### callback

(`object`, `index`, `array`) => `any`

Callback invoked with current object as first argument,
                  index - as second and an array of all objects - as third.

#### Returns

`void`

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).forEachObject`

***

### get()

> **get**(`property`): `any`

Defined in: [src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/CommonMethods.ts#L59)

Basic getter

#### Parameters

##### property

`string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).get`

***

### ~~getCenter()~~

> **getCenter**(): `object`

Defined in: [src/canvas/StaticCanvas.ts:716](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L716)

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

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Defined in: [src/canvas/StaticCanvas.ts:727](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L727)

Returns coordinates of a center of canvas.

#### Returns

[`Point`](/api/classes/point/)

***

### getContext()

> **getContext**(): `CanvasRenderingContext2D`

Defined in: [src/canvas/StaticCanvas.ts:471](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L471)

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

***

### getElement()

> **getElement**(): `HTMLCanvasElement`

Defined in: [src/canvas/StaticCanvas.ts:455](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L455)

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

***

### getHeight()

> **getHeight**(): `number`

Defined in: [src/canvas/StaticCanvas.ts:282](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L282)

Returns canvas height (in px)

#### Returns

`number`

***

### getObjects()

> **getObjects**(...`types?`): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Defined in: [src/Collection.ts:108](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L108)

Returns an array of children objects of this instance

#### Parameters

##### types?

...`string`[]

When specified, only objects of these types are returned

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).getObjects`

***

### getVpCenter()

> **getVpCenter**(): [`Point`](/api/classes/point/)

Defined in: [src/canvas/StaticCanvas.ts:794](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L794)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](/api/classes/point/)

vpCenter, viewport center

***

### getWidth()

> **getWidth**(): `number`

Defined in: [src/canvas/StaticCanvas.ts:274](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L274)

Returns canvas width (in px)

#### Returns

`number`

***

### getZoom()

> **getZoom**(): `number`

Defined in: [src/canvas/StaticCanvas.ts:384](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L384)

Returns canvas zoom level

#### Returns

`number`

***

### insertAt()

> **insertAt**(`index`, ...`objects`): `number`

Defined in: [src/canvas/StaticCanvas.ts:216](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L216)

Inserts an object into collection at specified index

#### Parameters

##### index

`number`

Index to insert object at

##### objects

...[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Object(s) to insert

#### Returns

`number`

new array length

#### Overrides

`createCollectionMixin(CommonMethods<CanvasEvents>).insertAt`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L128)

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).isEmpty`

***

### item()

> **item**(`index`): [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L120)

Returns object at specified index

#### Parameters

##### index

`number`

#### Returns

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

object at index

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).item`

***

### loadFromJSON()

> **loadFromJSON**(`json`, `reviver?`, `options?`): `Promise`\<`StaticCanvas`\<`EventSpec`\>\>

Defined in: [src/canvas/StaticCanvas.ts:1276](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1276)

Populates canvas with data from the specified JSON.
JSON format must conform to the one of fabric.Canvas#toJSON

**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

##### json

JSON string or object

`string` | `Record`\<`string`, `any`\>

##### reviver?

\<`T`\>(`serializedObj`, `instance`) => `void`

Method for further parsing of JSON elements, called after each fabric object created.

##### options?

[`Abortable`](/api/type-aliases/abortable/) = `{}`

options

#### Returns

`Promise`\<`StaticCanvas`\<`EventSpec`\>\>

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

***

### moveObjectTo()

> **moveObjectTo**(`object`, `index`): `boolean`

Defined in: [src/Collection.ts:262](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L262)

Moves an object to specified level in stack of drawn objects

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send

##### index

`number`

Position to move to

#### Returns

`boolean`

true if change occurred

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).moveObjectTo`

***

### off()

#### Call Signature

> **off**\<`K`\>(`eventName`): `void`

Defined in: [src/Observable.ts:122](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Observable.ts#L122)

Unsubscribe all event listeners for eventname.
Do not use this pattern. You could kill internal fabricJS events.
We know we should have protected events for internal flows, but we don't have yet

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

##### Type Parameters

###### K

`K` *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

##### Parameters

###### eventName

`K`

event name (eg. 'after:render')

##### Returns

`void`

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

#### Call Signature

> **off**\<`K`\>(`eventName`, `handler`): `void`

Defined in: [src/Observable.ts:128](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Observable.ts#L128)

unsubscribe an event listener

##### Type Parameters

###### K

`K` *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

##### Parameters

###### eventName

`K`

event name (eg. 'after:render')

###### handler

`TEventCallback`

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

#### Call Signature

> **off**(`handlers`): `void`

Defined in: [src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Observable.ts#L133)

unsubscribe event listeners

##### Parameters

###### handlers

`EventRegistryObject`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

#### Call Signature

> **off**(): `void`

Defined in: [src/Observable.ts:137](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Observable.ts#L137)

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).off`

***

### on()

#### Call Signature

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Defined in: [src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Observable.ts#L23)

Observes specified event

##### Type Parameters

###### K

`K` *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

###### E

`E` *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| \{ `drawables`: \{ `backgroundImage`: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>; `overlayImage`: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>; \}; `path`: [`FabricObject`](/api/classes/fabricobject/); `subTargets`: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]; `targets`: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]; \} \| \{ `target`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `target`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `path`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `path`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `target`: [`IText`](/api/classes/itext/); \} \| \{ `target`: [`IText`](/api/classes/itext/); \} \| `object` & `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> \| \{ `target`: [`IText`](/api/classes/itext/); \} \| \{ `ctx`: `CanvasRenderingContext2D`; \} \| \{ `ctx`: `CanvasRenderingContext2D`; \} \| [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object` \| [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object` \| [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

##### Parameters

###### eventName

`K`

Event name (eg. 'after:render')

###### handler

`TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

on

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).on`

#### Call Signature

> **on**(`handlers`): `VoidFunction`

Defined in: [src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Observable.ts#L27)

Observes specified event

##### Parameters

###### handlers

`EventRegistryObject`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>

key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`VoidFunction`

disposer

##### Alias

on

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).on`

***

### once()

#### Call Signature

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Defined in: [src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Observable.ts#L62)

Observes specified event **once**

##### Type Parameters

###### K

`K` *extends* keyof [`CanvasEvents`](/api/interfaces/canvasevents/)

###### E

`E` *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| \{ `drawables`: \{ `backgroundImage`: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>; `overlayImage`: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>; \}; `path`: [`FabricObject`](/api/classes/fabricobject/); `subTargets`: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]; `targets`: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]; \} \| \{ `target`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `target`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `path`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `path`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `target`: [`IText`](/api/classes/itext/); \} \| \{ `target`: [`IText`](/api/classes/itext/); \} \| `object` & `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> \| \{ `target`: [`IText`](/api/classes/itext/); \} \| \{ `ctx`: `CanvasRenderingContext2D`; \} \| \{ `ctx`: `CanvasRenderingContext2D`; \} \| [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) & `object` \| [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/) & `object` \| [`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object`

##### Parameters

###### eventName

`K`

Event name (eg. 'after:render')

###### handler

`TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

once

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).once`

#### Call Signature

> **once**(`handlers`): `VoidFunction`

Defined in: [src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Observable.ts#L66)

Observes specified event **once**

##### Parameters

###### handlers

`EventRegistryObject`\<[`CanvasEvents`](/api/interfaces/canvasevents/)\>

key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`VoidFunction`

disposer

##### Alias

once

##### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).once`

***

### relativePan()

> **relativePan**(`point`): `void`

Defined in: [src/canvas/StaticCanvas.ts:442](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L442)

Pans viewpoint relatively

#### Parameters

##### point

[`Point`](/api/classes/point/)

(position vector) to move by

#### Returns

`void`

***

### renderAll()

> **renderAll**(): `void`

Defined in: [src/canvas/StaticCanvas.ts:492](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L492)

Renders the canvas

#### Returns

`void`

***

### renderCanvas()

> **renderCanvas**(`ctx`, `objects`): `void`

Defined in: [src/canvas/StaticCanvas.ts:562](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L562)

Renders background, objects, overlay and controls.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### objects

[`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

to render

#### Returns

`void`

***

### requestRenderAll()

> **requestRenderAll**(): `void`

Defined in: [src/canvas/StaticCanvas.ts:518](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L518)

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

***

### sendObjectBackwards()

> **sendObjectBackwards**(`object`, `intersecting?`): `boolean`

Defined in: [src/Collection.ts:214](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L214)

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send

##### intersecting?

`boolean`

If `true`, send object behind next lower intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).sendObjectBackwards`

***

### sendObjectToBack()

> **sendObjectToBack**(`object`): `boolean`

Defined in: [src/Collection.ts:178](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L178)

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send to back

#### Returns

`boolean`

true if change occurred

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).sendObjectToBack`

***

### set()

> **set**(`key`, `value?`): `StaticCanvas`\<`EventSpec`\>

Defined in: [src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/CommonMethods.ts#L29)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

##### key

Property name or object (if object, iterate over the object properties)

`string` | `Record`\<`string`, `any`\>

##### value?

`any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

`StaticCanvas`\<`EventSpec`\>

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).set`

***

### setDimensions()

#### Call Signature

> **setDimensions**(`dimensions`, `options?`): `void`

Defined in: [src/canvas/StaticCanvas.ts:361](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L361)

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

##### Parameters

###### dimensions

`Partial`\<`CSSDimensions`\>

Object with width/height properties

###### options?

Options object

###### backstoreOnly?

`false`

Set the given dimensions only as canvas backstore dimensions

###### cssOnly?

`true`

Set the given dimensions only as css dimensions

##### Returns

`void`

#### Call Signature

> **setDimensions**(`dimensions`, `options?`): `void`

Defined in: [src/canvas/StaticCanvas.ts:365](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L365)

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

##### Parameters

###### dimensions

`Partial`\<[`TSize`](/api/type-aliases/tsize/)\>

Object with width/height properties

###### options?

Options object

###### backstoreOnly?

`true`

Set the given dimensions only as canvas backstore dimensions

###### cssOnly?

`false`

Set the given dimensions only as css dimensions

##### Returns

`void`

#### Call Signature

> **setDimensions**(`dimensions`, `options?`): `void`

Defined in: [src/canvas/StaticCanvas.ts:369](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L369)

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

##### Parameters

###### dimensions

`Partial`\<[`TSize`](/api/type-aliases/tsize/)\>

Object with width/height properties

###### options?

`undefined`

Options object

##### Returns

`void`

***

### ~~setHeight()~~

#### Call Signature

> **setHeight**(`value`, `options?`): `void`

Defined in: [src/canvas/StaticCanvas.ts:314](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L314)

s
Sets height of this canvas instance

:::caution[Deprecated]
will be removed in 7.0
:::

##### Parameters

###### value

`number`

Value to set height to

###### options?

Options object

###### backstoreOnly?

`true`

Set the given dimensions only as canvas backstore dimensions

###### cssOnly?

`false`

Set the given dimensions only as css dimensions

##### Returns

`void`

#### Call Signature

> **setHeight**(`value`, `options?`): `void`

Defined in: [src/canvas/StaticCanvas.ts:318](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L318)

s
Sets height of this canvas instance

:::caution[Deprecated]
will be removed in 7.0
:::

##### Parameters

###### value

Value to set height to

`string` | `number`

###### options?

Options object

###### backstoreOnly?

`false`

Set the given dimensions only as canvas backstore dimensions

###### cssOnly?

`true`

Set the given dimensions only as css dimensions

##### Returns

`void`

***

### setViewportTransform()

> **setViewportTransform**(`vpt`): `void`

Defined in: [src/canvas/StaticCanvas.ts:392](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L392)

Sets viewport transformation of this canvas instance

#### Parameters

##### vpt

[`TMat2D`](/api/type-aliases/tmat2d/)

a Canvas 2D API transform matrix

#### Returns

`void`

***

### ~~setWidth()~~

#### Call Signature

> **setWidth**(`value`, `options?`): `void`

Defined in: [src/canvas/StaticCanvas.ts:294](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L294)

Sets width of this canvas instance

:::caution[Deprecated]
will be removed in 7.0
:::

##### Parameters

###### value

`number`

Value to set width to

###### options?

Options object

###### backstoreOnly?

`true`

Set the given dimensions only as canvas backstore dimensions

###### cssOnly?

`false`

Set the given dimensions only as css dimensions

##### Returns

`void`

#### Call Signature

> **setWidth**(`value`, `options?`): `void`

Defined in: [src/canvas/StaticCanvas.ts:298](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L298)

Sets width of this canvas instance

:::caution[Deprecated]
will be removed in 7.0
:::

##### Parameters

###### value

Value to set width to

`string` | `number`

###### options?

Options object

###### backstoreOnly?

`false`

Set the given dimensions only as canvas backstore dimensions

###### cssOnly?

`true`

Set the given dimensions only as css dimensions

##### Returns

`void`

***

### setZoom()

> **setZoom**(`value`): `void`

Defined in: [src/canvas/StaticCanvas.ts:423](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L423)

Sets zoom level of this canvas instance

#### Parameters

##### value

`number`

to set zoom to, less than 1 zooms out

#### Returns

`void`

***

### size()

> **size**(): `number`

Defined in: [src/Collection.ts:136](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/Collection.ts#L136)

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).size`

***

### toBlob()

> **toBlob**(`options`): `Promise`\<`null` \| `Blob`\>

Defined in: [src/canvas/StaticCanvas.ts:1396](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1396)

#### Parameters

##### options

[`TDataUrlOptions`](/api/type-aliases/tdataurloptions/) = `...`

#### Returns

`Promise`\<`null` \| `Blob`\>

***

### toCanvasElement()

> **toCanvasElement**(`multiplier?`, `options?`): `HTMLCanvasElement`

Defined in: [src/canvas/StaticCanvas.ts:1427](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1427)

Create a new HTMLCanvas element painted with the current canvas content.
No need to resize the actual one or repaint it.
Will transfer object ownership to a new canvas, paint it, and set everything back.
This is an intermediary step used to get to a dataUrl but also it is useful to
create quick image copies of a canvas without passing for the dataUrl string

#### Parameters

##### multiplier?

`number` = `1`

a zoom factor.

##### options?

[`TToCanvasElementOptions`](/api/type-aliases/ttocanvaselementoptions/) = `...`

Cropping informations

#### Returns

`HTMLCanvasElement`

***

### toDatalessJSON()

> **toDatalessJSON**(`propertiesToInclude?`): `any`

Defined in: [src/canvas/StaticCanvas.ts:817](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L817)

Returns dataless JSON representation of canvas

#### Parameters

##### propertiesToInclude?

`string`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

json string

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude?`): `any`

Defined in: [src/canvas/StaticCanvas.ts:854](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L854)

Returns dataless object representation of canvas

#### Parameters

##### propertiesToInclude?

`string`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

object representation of an instance

***

### toDataURL()

> **toDataURL**(`options?`): `string`

Defined in: [src/canvas/StaticCanvas.ts:1380](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1380)

Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately

#### Parameters

##### options?

[`TDataUrlOptions`](/api/type-aliases/tdataurloptions/) = `...`

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

***

### toggle()

> **toggle**(`property`): `StaticCanvas`\<`EventSpec`\>

Defined in: [src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/CommonMethods.ts#L46)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

##### property

`string`

Property to toggle

#### Returns

`StaticCanvas`\<`EventSpec`\>

#### Inherited from

`createCollectionMixin(CommonMethods<CanvasEvents>).toggle`

***

### toJSON()

> **toJSON**(): `any`

Defined in: [src/canvas/StaticCanvas.ts:845](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L845)

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

***

### toObject()

> **toObject**(`propertiesToInclude?`): `any`

Defined in: [src/canvas/StaticCanvas.ts:826](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L826)

Returns object representation of canvas

#### Parameters

##### propertiesToInclude?

`string`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

object representation of an instance

***

### toString()

> **toString**(): `string`

Defined in: [src/canvas/StaticCanvas.ts:1530](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L1530)

Returns a string representation of an instance

#### Returns

`string`

string representation of an instance

***

### toSVG()

> **toSVG**(`options?`, `reviver?`): `string`

Defined in: [src/canvas/StaticCanvas.ts:993](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L993)

**`Function`**

Returns SVG representation of canvas

#### Parameters

##### options?

[`TSVGExportOptions`](/api/type-aliases/tsvgexportoptions/) = `{}`

Options object for SVG output

##### reviver?

[`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg elements, called after each fabric object converted into svg representation.

#### Returns

`string`

SVG string

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

***

### viewportCenterObject()

> **viewportCenterObject**(`object`): `void`

Defined in: [src/canvas/StaticCanvas.ts:764](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L764)

Centers object vertically and horizontally in the viewport

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to center vertically and horizontally

#### Returns

`void`

***

### viewportCenterObjectH()

> **viewportCenterObjectH**(`object`): `void`

Defined in: [src/canvas/StaticCanvas.ts:772](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L772)

Centers object horizontally in the viewport, object.top is unchanged

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to center vertically and horizontally

#### Returns

`void`

***

### viewportCenterObjectV()

> **viewportCenterObjectV**(`object`): `void`

Defined in: [src/canvas/StaticCanvas.ts:783](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L783)

Centers object Vertically in the viewport, object.top is unchanged

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to center vertically and horizontally

#### Returns

`void`

***

### zoomToPoint()

> **zoomToPoint**(`point`, `value`): `void`

Defined in: [src/canvas/StaticCanvas.ts:406](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L406)

Sets zoom level of this canvas instance, the zoom centered around point
meaning that following zoom to point with the same point will have the visual
effect of the zoom originating from that point. The point won't move.
It has nothing to do with canvas center or visual center of the viewport.

#### Parameters

##### point

[`Point`](/api/classes/point/)

to zoom with respect to

##### value

`number`

to set zoom to, less than 1 zooms out

#### Returns

`void`

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

Defined in: [src/canvas/StaticCanvas.ts:182](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L182)

#### Returns

`Record`\<`string`, `any`\>
