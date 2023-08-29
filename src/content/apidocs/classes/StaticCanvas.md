# Class: StaticCanvas<EventSpec\>

Static canvas class

**`See`**

[demo](http://fabricjs.com/static_canvas|StaticCanvas)

**`Fires`**

before:render

**`Fires`**

after:render

**`Fires`**

canvas:cleared

**`Fires`**

object:added

**`Fires`**

object:removed

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventSpec` | extends [`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md) = [`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md) |

## Hierarchy

- `Collection`<`Object`, `this`\> & `CommonMethods`<[`CanvasEvents`](../interfaces/CanvasEvents.md), `this`\>

  ↳ **`StaticCanvas`**

## Implements

- [`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md)

## Table of contents

### Constructors

- [constructor](StaticCanvas.md#constructor)

### Properties

- [\_\_cleanupTask](StaticCanvas.md#__cleanuptask)
- [\_objects](StaticCanvas.md#_objects)
- [\_offset](StaticCanvas.md#_offset)
- [allowTouchScrolling](StaticCanvas.md#allowtouchscrolling)
- [backgroundColor](StaticCanvas.md#backgroundcolor)
- [backgroundImage](StaticCanvas.md#backgroundimage)
- [backgroundVpt](StaticCanvas.md#backgroundvpt)
- [clipPath](StaticCanvas.md#clippath)
- [controlsAboveOverlay](StaticCanvas.md#controlsaboveoverlay)
- [destroyed](StaticCanvas.md#destroyed)
- [disposed](StaticCanvas.md#disposed)
- [elements](StaticCanvas.md#elements)
- [enableRetinaScaling](StaticCanvas.md#enableretinascaling)
- [hasLostContext](StaticCanvas.md#haslostcontext)
- [height](StaticCanvas.md#height)
- [imageSmoothingEnabled](StaticCanvas.md#imagesmoothingenabled)
- [includeDefaultValues](StaticCanvas.md#includedefaultvalues)
- [nextRenderHandle](StaticCanvas.md#nextrenderhandle)
- [overlayColor](StaticCanvas.md#overlaycolor)
- [overlayImage](StaticCanvas.md#overlayimage)
- [overlayVpt](StaticCanvas.md#overlayvpt)
- [renderOnAddRemove](StaticCanvas.md#renderonaddremove)
- [skipOffscreen](StaticCanvas.md#skipoffscreen)
- [svgViewportTransformation](StaticCanvas.md#svgviewporttransformation)
- [viewportTransform](StaticCanvas.md#viewporttransform)
- [vptCoords](StaticCanvas.md#vptcoords)
- [width](StaticCanvas.md#width)
- [ownDefaults](StaticCanvas.md#owndefaults)

### Accessors

- [contextContainer](StaticCanvas.md#contextcontainer)
- [lowerCanvasEl](StaticCanvas.md#lowercanvasel)

### Methods

- [\_\_serializeBgOverlay](StaticCanvas.md#__serializebgoverlay)
- [\_centerObject](StaticCanvas.md#_centerobject)
- [\_isRetinaScaling](StaticCanvas.md#_isretinascaling)
- [\_onObjectAdded](StaticCanvas.md#_onobjectadded)
- [\_onObjectRemoved](StaticCanvas.md#_onobjectremoved)
- [\_onStackOrderChanged](StaticCanvas.md#_onstackorderchanged)
- [\_renderBackground](StaticCanvas.md#_renderbackground)
- [\_renderBackgroundOrOverlay](StaticCanvas.md#_renderbackgroundoroverlay)
- [\_renderObjects](StaticCanvas.md#_renderobjects)
- [\_renderOverlay](StaticCanvas.md#_renderoverlay)
- [\_set](StaticCanvas.md#_set)
- [\_setDimensionsImpl](StaticCanvas.md#_setdimensionsimpl)
- [\_setObject](StaticCanvas.md#_setobject)
- [\_setOptions](StaticCanvas.md#_setoptions)
- [\_setSVGBgOverlayColor](StaticCanvas.md#_setsvgbgoverlaycolor)
- [\_setSVGBgOverlayImage](StaticCanvas.md#_setsvgbgoverlayimage)
- [\_setSVGHeader](StaticCanvas.md#_setsvgheader)
- [\_setSVGObject](StaticCanvas.md#_setsvgobject)
- [\_setSVGObjects](StaticCanvas.md#_setsvgobjects)
- [\_setSVGPreamble](StaticCanvas.md#_setsvgpreamble)
- [\_toObject](StaticCanvas.md#_toobject)
- [\_toObjectMethod](StaticCanvas.md#_toobjectmethod)
- [absolutePan](StaticCanvas.md#absolutepan)
- [add](StaticCanvas.md#add)
- [bringObjectForward](StaticCanvas.md#bringobjectforward)
- [bringObjectToFront](StaticCanvas.md#bringobjecttofront)
- [calcOffset](StaticCanvas.md#calcoffset)
- [calcViewportBoundaries](StaticCanvas.md#calcviewportboundaries)
- [cancelRequestedRender](StaticCanvas.md#cancelrequestedrender)
- [centerObject](StaticCanvas.md#centerobject)
- [centerObjectH](StaticCanvas.md#centerobjecth)
- [centerObjectV](StaticCanvas.md#centerobjectv)
- [clear](StaticCanvas.md#clear)
- [clearContext](StaticCanvas.md#clearcontext)
- [clone](StaticCanvas.md#clone)
- [cloneWithoutData](StaticCanvas.md#clonewithoutdata)
- [collectObjects](StaticCanvas.md#collectobjects)
- [complexity](StaticCanvas.md#complexity)
- [contains](StaticCanvas.md#contains)
- [createSVGClipPathMarkup](StaticCanvas.md#createsvgclippathmarkup)
- [createSVGFontFacesMarkup](StaticCanvas.md#createsvgfontfacesmarkup)
- [createSVGRefElementsMarkup](StaticCanvas.md#createsvgrefelementsmarkup)
- [destroy](StaticCanvas.md#destroy)
- [dispose](StaticCanvas.md#dispose)
- [drawClipPathOnCanvas](StaticCanvas.md#drawclippathoncanvas)
- [drawControls](StaticCanvas.md#drawcontrols)
- [findNewLowerIndex](StaticCanvas.md#findnewlowerindex)
- [findNewUpperIndex](StaticCanvas.md#findnewupperindex)
- [fire](StaticCanvas.md#fire)
- [forEachObject](StaticCanvas.md#foreachobject)
- [get](StaticCanvas.md#get)
- [getCenter](StaticCanvas.md#getcenter)
- [getCenterPoint](StaticCanvas.md#getcenterpoint)
- [getContext](StaticCanvas.md#getcontext)
- [getElement](StaticCanvas.md#getelement)
- [getHeight](StaticCanvas.md#getheight)
- [getObjects](StaticCanvas.md#getobjects)
- [getRetinaScaling](StaticCanvas.md#getretinascaling)
- [getVpCenter](StaticCanvas.md#getvpcenter)
- [getWidth](StaticCanvas.md#getwidth)
- [getZoom](StaticCanvas.md#getzoom)
- [initElements](StaticCanvas.md#initelements)
- [insertAt](StaticCanvas.md#insertat)
- [isEmpty](StaticCanvas.md#isempty)
- [item](StaticCanvas.md#item)
- [loadFromJSON](StaticCanvas.md#loadfromjson)
- [moveObjectTo](StaticCanvas.md#moveobjectto)
- [off](StaticCanvas.md#off)
- [on](StaticCanvas.md#on)
- [once](StaticCanvas.md#once)
- [relativePan](StaticCanvas.md#relativepan)
- [remove](StaticCanvas.md#remove)
- [renderAll](StaticCanvas.md#renderall)
- [renderAndReset](StaticCanvas.md#renderandreset)
- [renderCanvas](StaticCanvas.md#rendercanvas)
- [requestRenderAll](StaticCanvas.md#requestrenderall)
- [sendObjectBackwards](StaticCanvas.md#sendobjectbackwards)
- [sendObjectToBack](StaticCanvas.md#sendobjecttoback)
- [set](StaticCanvas.md#set)
- [setDimensions](StaticCanvas.md#setdimensions)
- [setHeight](StaticCanvas.md#setheight)
- [setViewportTransform](StaticCanvas.md#setviewporttransform)
- [setWidth](StaticCanvas.md#setwidth)
- [setZoom](StaticCanvas.md#setzoom)
- [size](StaticCanvas.md#size)
- [toCanvasElement](StaticCanvas.md#tocanvaselement)
- [toDataURL](StaticCanvas.md#todataurl)
- [toDatalessJSON](StaticCanvas.md#todatalessjson)
- [toDatalessObject](StaticCanvas.md#todatalessobject)
- [toJSON](StaticCanvas.md#tojson)
- [toObject](StaticCanvas.md#toobject)
- [toSVG](StaticCanvas.md#tosvg)
- [toString](StaticCanvas.md#tostring)
- [toggle](StaticCanvas.md#toggle)
- [viewportCenterObject](StaticCanvas.md#viewportcenterobject)
- [viewportCenterObjectH](StaticCanvas.md#viewportcenterobjecth)
- [viewportCenterObjectV](StaticCanvas.md#viewportcenterobjectv)
- [zoomToPoint](StaticCanvas.md#zoomtopoint)
- [getDefaults](StaticCanvas.md#getdefaults)

## Constructors

### constructor

• **new StaticCanvas**<`EventSpec`\>(`el`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventSpec` | extends [`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md) = [`StaticCanvasEvents`](../interfaces/StaticCanvasEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `string` \| `HTMLCanvasElement` |
| `options` | [`TOptions`](../modules.md#toptions)<[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md)\> |

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).constructor

#### Defined in

[src/canvas/StaticCanvas.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L173)

## Properties

### \_\_cleanupTask

• `Protected` `Optional` **\_\_cleanupTask**: `Object`

#### Call signature

▸ (): `void`

##### Returns

`void`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kill` | (`reason?`: `any`) => `void` |

#### Defined in

[src/canvas/StaticCanvas.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L164)

___

### \_objects

• **\_objects**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] = `[]`

**`TODO`**

needs to end up in the constructor too

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).\_objects

#### Defined in

[src/Collection.ts:13](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L13)

___

### \_offset

• **\_offset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[src/canvas/StaticCanvas.ts:155](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L155)

___

### allowTouchScrolling

• **allowTouchScrolling**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[allowTouchScrolling](../interfaces/StaticCanvasOptions.md#allowtouchscrolling)

#### Defined in

[src/canvas/StaticCanvas.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L115)

___

### backgroundColor

• **backgroundColor**: `string` \| [`TFiller`](../modules.md#tfiller)

Background color of canvas instance.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[backgroundColor](../interfaces/StaticCanvasOptions.md#backgroundcolor)

#### Defined in

[src/canvas/StaticCanvas.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L90)

___

### backgroundImage

• `Optional` **backgroundImage**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Background image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as background, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[backgroundImage](../interfaces/StaticCanvasOptions.md#backgroundimage)

#### Defined in

[src/canvas/StaticCanvas.ts:91](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L91)

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

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[backgroundVpt](../interfaces/StaticCanvasOptions.md#backgroundvpt)

#### Defined in

[src/canvas/StaticCanvas.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L89)

___

### clipPath

• `Optional` **clipPath**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[clipPath](../interfaces/StaticCanvasOptions.md#clippath)

#### Defined in

[src/canvas/StaticCanvas.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L97)

___

### controlsAboveOverlay

• **controlsAboveOverlay**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[controlsAboveOverlay](../interfaces/StaticCanvasOptions.md#controlsaboveoverlay)

#### Defined in

[src/canvas/StaticCanvas.ts:110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L110)

___

### destroyed

• `Optional` **destroyed**: `boolean`

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

#### Defined in

[src/canvas/StaticCanvas.ts:146](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L146)

___

### disposed

• `Optional` **disposed**: `boolean`

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

#### Defined in

[src/canvas/StaticCanvas.ts:153](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L153)

___

### elements

• **elements**: [`StaticCanvasDOMManager`](StaticCanvasDOMManager.md)

#### Defined in

[src/canvas/StaticCanvas.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L159)

___

### enableRetinaScaling

• **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[enableRetinaScaling](../interfaces/StaticCanvasOptions.md#enableretinascaling)

#### Defined in

[src/canvas/StaticCanvas.ts:104](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L104)

___

### hasLostContext

• `Protected` **hasLostContext**: `boolean`

#### Defined in

[src/canvas/StaticCanvas.ts:156](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L156)

___

### height

• **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[height](../interfaces/StaticCanvasOptions.md#height)

#### Defined in

[src/canvas/StaticCanvas.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L86)

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[imageSmoothingEnabled](../interfaces/StaticCanvasOptions.md#imagesmoothingenabled)

#### Defined in

[src/canvas/StaticCanvas.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L105)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[includeDefaultValues](../interfaces/StaticCanvasOptions.md#includedefaultvalues)

#### Defined in

[src/canvas/StaticCanvas.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L99)

___

### nextRenderHandle

• `Protected` **nextRenderHandle**: `number`

#### Defined in

[src/canvas/StaticCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L157)

___

### overlayColor

• **overlayColor**: `string` \| [`TFiller`](../modules.md#tfiller)

Overlay color of canvas instance.

**`Since`**

1.3.9

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[overlayColor](../interfaces/StaticCanvasOptions.md#overlaycolor)

#### Defined in

[src/canvas/StaticCanvas.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L94)

___

### overlayImage

• `Optional` **overlayImage**: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Overlay image of canvas instance.
since 2.4.0 image caching is active, please when putting an image as overlay, add to the
canvas property a reference to the canvas it is on. Otherwise the image cannot detect the zoom
vale. As an alternative you can disable image objectCaching

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[overlayImage](../interfaces/StaticCanvasOptions.md#overlayimage)

#### Defined in

[src/canvas/StaticCanvas.ts:95](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L95)

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

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[overlayVpt](../interfaces/StaticCanvasOptions.md#overlayvpt)

#### Defined in

[src/canvas/StaticCanvas.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L93)

___

### renderOnAddRemove

• **renderOnAddRemove**: `boolean`

Indicates whether [add](StaticCanvas.md#add), [insertAt](StaticCanvas.md#insertat) and [remove](StaticCanvas.md#remove),
StaticCanvas#moveTo, [clear](StaticCanvas.md#clear) and many more, should also re-render canvas.
Disabling this option will not give a performance boost when adding/removing a lot of objects to/from canvas at once
since the renders are queued and executed one per frame.
Disabling is suggested anyway and managing the renders of the app manually is not a big effort ( canvas.requestRenderAll() )
Left default to true to do not break documentation and old app, fiddles.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[renderOnAddRemove](../interfaces/StaticCanvasOptions.md#renderonaddremove)

#### Defined in

[src/canvas/StaticCanvas.ts:102](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L102)

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

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[skipOffscreen](../interfaces/StaticCanvasOptions.md#skipoffscreen)

#### Defined in

[src/canvas/StaticCanvas.ts:103](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L103)

___

### svgViewportTransformation

• **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[svgViewportTransformation](../interfaces/StaticCanvasOptions.md#svgviewporttransformation)

#### Defined in

[src/canvas/StaticCanvas.ts:941](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L941)

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

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[viewportTransform](../interfaces/StaticCanvasOptions.md#viewporttransform)

#### Defined in

[src/canvas/StaticCanvas.ts:117](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L117)

___

### vptCoords

• **vptCoords**: [`TCornerPoint`](../modules.md#tcornerpoint)

Describe canvas element extension over design
properties are tl,tr,bl,br.
if canvas is not zoomed/panned those points are the four corner of canvas
if canvas is viewportTransformed you those points indicate the extension
of canvas element in plain untrasformed coordinates
The coordinates get updated with

**`Method`**

calcViewportBoundaries.

#### Defined in

[src/canvas/StaticCanvas.ts:126](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L126)

___

### width

• **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[StaticCanvasOptions](../interfaces/StaticCanvasOptions.md).[width](../interfaces/StaticCanvasOptions.md#width)

#### Defined in

[src/canvas/StaticCanvas.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L85)

___

### ownDefaults

▪ `Static` **ownDefaults**: [`TOptions`](../modules.md#toptions)<[`StaticCanvasOptions`](../interfaces/StaticCanvasOptions.md)\> = `staticCanvasDefaults`

#### Defined in

[src/canvas/StaticCanvas.ts:161](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L161)

## Accessors

### contextContainer

• `get` **contextContainer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[src/canvas/StaticCanvas.ts:137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L137)

___

### lowerCanvasEl

• `get` **lowerCanvasEl**(): `HTMLCanvasElement`

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:133](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L133)

## Methods

### \_\_serializeBgOverlay

▸ `Private` **__serializeBgOverlay**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](../modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Defined in

[src/canvas/StaticCanvas.ts:895](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L895)

___

### \_centerObject

▸ `Private` **_centerObject**(`object`, `center`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center |
| `center` | [`Point`](Point.md) | Center point |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:793](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L793)

___

### \_isRetinaScaling

▸ `Private` **_isRetinaScaling**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/canvas/StaticCanvas.ts:243](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L243)

___

### \_onObjectAdded

▸ **_onObjectAdded**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).\_onObjectAdded

#### Defined in

[src/canvas/StaticCanvas.ts:214](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L214)

___

### \_onObjectRemoved

▸ **_onObjectRemoved**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).\_onObjectRemoved

#### Defined in

[src/canvas/StaticCanvas.ts:230](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L230)

___

### \_onStackOrderChanged

▸ **_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).\_onStackOrderChanged

#### Defined in

[src/canvas/StaticCanvas.ts:236](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L236)

___

### \_renderBackground

▸ `Private` **_renderBackground**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:685](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L685)

___

### \_renderBackgroundOrOverlay

▸ `Private` **_renderBackgroundOrOverlay**(`ctx`, `property`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `property` | ``"overlay"`` \| ``"background"`` | 'background' or 'overlay' |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:633](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L633)

___

### \_renderObjects

▸ `Private` **_renderObjects**(`ctx`, `objects`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:622](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L622)

___

### \_renderOverlay

▸ `Private` **_renderOverlay**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:693](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L693)

___

### \_set

▸ **_set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).\_set

#### Defined in

[src/CommonMethods.ts:38](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L38)

___

### \_setDimensionsImpl

▸ `Protected` **_setDimensionsImpl**(`dimensions`, `«destructured»?`): `void`

Internal use only

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Partial`<[`TSize`](../modules.md#tsize) \| `CSSDimensions`\> |
| `«destructured»` | [`TCanvasSizeOptions`](../modules.md#tcanvassizeoptions) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:307](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L307)

___

### \_setObject

▸ `Private` **_setObject**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).\_setObject

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L18)

___

### \_setOptions

▸ `Protected` **_setOptions**(`options?`): `void`

Sets object's properties from options, for initialization only

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Options object |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).\_setOptions

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L9)

___

### \_setSVGBgOverlayColor

▸ `Private` **_setSVGBgOverlayColor**(`markup`, `property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `property` | ``"overlay"`` \| ``"background"`` |

#### Returns

`void`

**`TODO`**

this seems to handle patterns but fail at gradients.

#### Defined in

[src/canvas/StaticCanvas.ts:1198](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1198)

___

### \_setSVGBgOverlayImage

▸ `Private` **_setSVGBgOverlayImage**(`markup`, `property`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `property` | ``"backgroundImage"`` \| ``"overlayImage"`` |
| `reviver` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1183](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1183)

___

### \_setSVGHeader

▸ `Private` **_setSVGHeader**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](../modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1022](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1022)

___

### \_setSVGObject

▸ `Private` **_setSVGObject**(`markup`, `instance`, `reviver`): `void`

This is its own function because the Canvas ( non static ) requires extra code here

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `instance` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `reviver` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1172)

___

### \_setSVGObjects

▸ `Private` **_setSVGObjects**(`markup`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `reviver` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1159)

___

### \_setSVGPreamble

▸ `Private` **_setSVGPreamble**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](../modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1006](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1006)

___

### \_toObject

▸ `Private` **_toObject**(`instance`, `methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `methodName` | [`TValidToObjectMethod`](../modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Defined in

[src/canvas/StaticCanvas.ts:873](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L873)

___

### \_toObjectMethod

▸ `Private` **_toObjectMethod**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](../modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Defined in

[src/canvas/StaticCanvas.ts:848](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L848)

___

### absolutePan

▸ **absolutePan**(`point`): `void`

Pan viewport so as to place point at top left corner of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | to move to |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:416](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L416)

___

### add

▸ **add**(`...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).add

#### Defined in

[src/canvas/StaticCanvas.ts:196](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L196)

___

### bringObjectForward

▸ **bringObjectForward**(`object`, `intersecting?`): `boolean`

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object in front of next upper intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).bringObjectForward

#### Defined in

[src/Collection.ts:232](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L232)

___

### bringObjectToFront

▸ **bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).bringObjectToFront

#### Defined in

[src/Collection.ts:186](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L186)

___

### calcOffset

▸ **calcOffset**(): `Object`

Calculates canvas element offset relative to the document
This method is also attached as "resize" event handler of window

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[src/canvas/StaticCanvas.ts:259](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L259)

___

### calcViewportBoundaries

▸ **calcViewportBoundaries**(): [`TCornerPoint`](../modules.md#tcornerpoint)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport using
object absolute coordinates ( aCoords )

#### Returns

[`TCornerPoint`](../modules.md#tcornerpoint)

points.tl

**`Chainable`**

#### Defined in

[src/canvas/StaticCanvas.ts:516](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L516)

___

### cancelRequestedRender

▸ **cancelRequestedRender**(): `void`

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:534](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L534)

___

### centerObject

▸ **centerObject**(`object`): `void`

Centers object vertically and horizontally in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:743](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L743)

___

### centerObjectH

▸ **centerObjectH**(`object`): `void`

Centers object horizontally in the canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:721](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L721)

___

### centerObjectV

▸ **centerObjectV**(`object`): `void`

Centers object vertically in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:732](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L732)

___

### clear

▸ **clear**(): `void`

Clears all contexts (background, main, top) of an instance

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:463](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L463)

___

### clearContext

▸ **clearContext**(`ctx`): `void`

Clears specified context of canvas element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to clear |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:448](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L448)

___

### clone

▸ **clone**(`properties?`): `Promise`<[`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>\>

Clones canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | `string`[] | Array of properties to include in the cloned canvas and children |

#### Returns

`Promise`<[`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>\>

#### Defined in

[src/canvas/StaticCanvas.ts:1314](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1314)

___

### cloneWithoutData

▸ **cloneWithoutData**(): [`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

[`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>

#### Defined in

[src/canvas/StaticCanvas.ts:1324](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1324)

___

### collectObjects

▸ **collectObjects**(`«destructured»`, `«destructured»?`): `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TBBox`](../modules.md#tbbox) |
| `«destructured»` | `Object` |
| › `includeIntersecting?` | `boolean` |

#### Returns

`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).collectObjects

#### Defined in

[src/Collection.ts:316](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L316)

___

### complexity

▸ **complexity**(): `number`

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).complexity

#### Defined in

[src/Collection.ts:157](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L157)

___

### contains

▸ **contains**(`object`, `deep?`): `boolean`

Returns true if collection contains an object.\
**Prefer using FabricObject#isDescendantOf for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to check against |
| `deep?` | `boolean` | `true` to check all descendants, `false` to check only `_objects` |

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).contains

#### Defined in

[src/Collection.ts:140](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L140)

___

### createSVGClipPathMarkup

▸ **createSVGClipPathMarkup**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TSVGExportOptions`](../modules.md#tsvgexportoptions) |

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1067](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1067)

___

### createSVGFontFacesMarkup

▸ **createSVGFontFacesMarkup**(): `string`

Creates markup containing SVG font faces,
font URLs for font faces must be collected by developers
and are not extracted from the DOM by fabricjs

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1110)

___

### createSVGRefElementsMarkup

▸ **createSVGRefElementsMarkup**(): `string`

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1082](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1082)

___

### destroy

▸ `Private` **destroy**(): `void`

Clears the canvas element, disposes objects and frees resources.

Invoked as part of the **async** operation of [dispose](StaticCanvas.md#dispose).

**CAUTION**:

This method is **UNSAFE**.
You may encounter a race condition using it if there's a requested render.
Call this method only if you are sure rendering has settled.
Consider using [dispose](StaticCanvas.md#dispose) as it is **SAFE**

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1478](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1478)

___

### dispose

▸ **dispose**(): `Promise`<`boolean`\>

Waits until rendering has settled to destroy the canvas

#### Returns

`Promise`<`boolean`\>

a promise resolving to `true` once the canvas has been destroyed or to `false` if the canvas has was already destroyed

**`Throws`**

if aborted by a consequent call

#### Defined in

[src/canvas/StaticCanvas.ts:1440](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1440)

___

### drawClipPathOnCanvas

▸ **drawClipPathOnCanvas**(`ctx`, `clipPath`): `void`

Paint the cached clipPath on the lowerCanvasEl

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> | - |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:597](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L597)

___

### drawControls

▸ **drawControls**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:541](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L541)

___

### findNewLowerIndex

▸ **findNewLowerIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).findNewLowerIndex

#### Defined in

[src/Collection.ts:264](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L264)

___

### findNewUpperIndex

▸ **findNewUpperIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).findNewUpperIndex

#### Defined in

[src/Collection.ts:287](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L287)

___

### fire

▸ **fire**<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | [`CanvasEvents`](../interfaces/CanvasEvents.md)[`K`] | Options object |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).fire

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L159)

___

### forEachObject

▸ **forEachObject**(`callback`): `void`

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`object`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, `index`: `number`, `array`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]) => `any` | Callback invoked with current object as first argument, index - as second and an array of all objects - as third. |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).forEachObject

#### Defined in

[src/Collection.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L83)

___

### get

▸ **get**(`property`): `any`

Basic getter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property name |

#### Returns

`any`

value of a property

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).get

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L59)

___

### getCenter

▸ **getCenter**(): `Object`

Returns coordinates of a center of canvas.
Returned value is an object with top and left properties

#### Returns

`Object`

object with "top" and "left" number values

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

**`Deprecated`**

migrate to `getCenterPoint`

#### Defined in

[src/canvas/StaticCanvas.ts:703](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L703)

___

### getCenterPoint

▸ **getCenterPoint**(): [`Point`](Point.md)

Returns coordinates of a center of canvas.

#### Returns

[`Point`](Point.md)

#### Defined in

[src/canvas/StaticCanvas.ts:714](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L714)

___

### getContext

▸ **getContext**(): `CanvasRenderingContext2D`

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[src/canvas/StaticCanvas.ts:456](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L456)

___

### getElement

▸ **getElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:440](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L440)

___

### getHeight

▸ **getHeight**(): `number`

Returns canvas height (in px)

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:275](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L275)

___

### getObjects

▸ **getObjects**(`...types?`): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

Returns an array of children objects of this instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...types?` | `string`[] | When specified, only objects of these types are returned |

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).getObjects

#### Defined in

[src/Collection.ts:100](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L100)

___

### getRetinaScaling

▸ `Private` **getRetinaScaling**(): `number`

#### Returns

`number`

retinaScaling if applied, otherwise 1;

#### Defined in

[src/canvas/StaticCanvas.ts:251](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L251)

___

### getVpCenter

▸ **getVpCenter**(): [`Point`](Point.md)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](Point.md)

vpCenter, viewport center

#### Defined in

[src/canvas/StaticCanvas.ts:781](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L781)

___

### getWidth

▸ **getWidth**(): `number`

Returns canvas width (in px)

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:267](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L267)

___

### getZoom

▸ **getZoom**(): `number`

Returns canvas zoom level

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:355](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L355)

___

### initElements

▸ `Protected` **initElements**(`el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `string` \| `HTMLCanvasElement` |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:192](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L192)

___

### insertAt

▸ **insertAt**(`index`, `...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `...objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).insertAt

#### Defined in

[src/canvas/StaticCanvas.ts:202](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L202)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).isEmpty

#### Defined in

[src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L120)

___

### item

▸ **item**(`index`): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Returns object at specified index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

object at index

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).item

#### Defined in

[src/Collection.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L112)

___

### loadFromJSON

▸ **loadFromJSON**(`json`, `reviver?`, `options?`): `Promise`<[`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>\>

Populates canvas with data from the specified JSON.
JSON format must conform to the one of fabric.Canvas#toJSON

**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `string` \| `Record`<`string`, `any`\> | JSON string or object |
| `reviver?` | <T\>(`serializedObj`: `Record`<`string`, `any`\>, `instance`: `T`) => `void` | Method for further parsing of object elements, called after each fabric object created. |
| `options?` | [`Abortable`](../modules.md#abortable) | options |

#### Returns

`Promise`<[`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>\>

instance

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#deserialization](http://fabricjs.com/fabric-intro-part-3#deserialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle)

**`Example`**

loadFromJSON
```ts
canvas.loadFromJSON(json).then((canvas) => canvas.requestRenderAll());
```

**`Example`**

loadFromJSON with reviver
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

[src/canvas/StaticCanvas.ts:1263](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1263)

___

### moveObjectTo

▸ **moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send |
| `index` | `number` | Position to move to |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).moveObjectTo

#### Defined in

[src/Collection.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L254)

___

### off

▸ **off**<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).off

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L120)

▸ **off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`<[`CanvasEvents`](../interfaces/CanvasEvents.md)\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).off

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).off

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L129)

___

### on

▸ **on**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent` \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `drawables`: { `backgroundImage?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } ; `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> ; `subTargets`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] ; `targets`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `ctx`: `CanvasRenderingContext2D`  } \| { `ctx`: `CanvasRenderingContext2D`  } \| [`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `transform`: [`Transform`](../modules.md#transform)  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `selected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] ; `selected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

on

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).on

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L23)

▸ **on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`CanvasEvents`](../interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).on

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L27)

___

### once

▸ **once**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](../interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & `OutEvent` \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](../interfaces/DragEventData.md) \| [`DragEventData`](../interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](../interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](../interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| [`BasicTransformEvent`](../interfaces/BasicTransformEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](../interfaces/ModifiedEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> \| { `target`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `drawables`: { `backgroundImage?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } ; `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> ; `subTargets`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] ; `targets`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `path`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](IText.md)<`Partial`<[`ITextProps`](../interfaces/ITextProps.md)\>, [`SerializedITextProps`](../interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `ctx`: `CanvasRenderingContext2D`  } \| { `ctx`: `CanvasRenderingContext2D`  } \| [`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> & { `transform`: [`Transform`](../modules.md#transform)  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `selected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] ; `selected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](../interfaces/TEvent.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>\> & { `deselected`: [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

once

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).once

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L62)

▸ **once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`CanvasEvents`](../interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).once

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L66)

___

### relativePan

▸ **relativePan**(`point`): `void`

Pans viewpoint relatively

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | (position vector) to move by |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:427](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L427)

___

### remove

▸ **remove**(`...objects`): [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] |

#### Returns

[`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[]

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).remove

#### Defined in

[src/canvas/StaticCanvas.ts:208](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L208)

___

### renderAll

▸ **renderAll**(): `void`

Renders the canvas

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:477](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L477)

___

### renderAndReset

▸ `Private` **renderAndReset**(): `void`

Function created to be instance bound at initialization
used in requestAnimationFrame rendering
Let the fabricJS call it. If you call it manually you could have more
animationFrame stacking on to of each other
for an imperative rendering, use canvas.renderAll

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:493](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L493)

___

### renderCanvas

▸ **renderCanvas**(`ctx`, `objects`): `void`

Renders background, objects, overlay and controls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `objects` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:550](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L550)

___

### requestRenderAll

▸ **requestRenderAll**(): `void`

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:503](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L503)

___

### sendObjectBackwards

▸ **sendObjectBackwards**(`object`, `intersecting?`): `boolean`

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object behind next lower intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).sendObjectBackwards

#### Defined in

[src/Collection.ts:206](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L206)

___

### sendObjectToBack

▸ **sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to send to back |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).sendObjectToBack

#### Defined in

[src/Collection.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L170)

___

### set

▸ **set**(`key`, `value?`): [`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).set

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L29)

___

### setDimensions

▸ **setDimensions**(`dimensions`, `options?`): `void`

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dimensions` | `Partial`<[`TSize`](../modules.md#tsize)\> | Object with width/height properties |
| `options?` | [`TCanvasSizeOptions`](../modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:338](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L338)

___

### setHeight

▸ **setHeight**(`value`, `options?`): `void`

Sets height of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value to set height to |
| `options?` | [`TCanvasSizeOptions`](../modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

**`Deprecated`**

will be removed in 7.0

#### Defined in

[src/canvas/StaticCanvas.ts:299](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L299)

___

### setViewportTransform

▸ **setViewportTransform**(`vpt`): `void`

Sets viewport transformation of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vpt` | [`TMat2D`](../modules.md#tmat2d) | a Canvas 2D API transform matrix |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:363](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L363)

___

### setWidth

▸ **setWidth**(`value`, `options?`): `void`

Sets width of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value to set width to |
| `options?` | [`TCanvasSizeOptions`](../modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

**`Deprecated`**

will be removed in 7.0

#### Defined in

[src/canvas/StaticCanvas.ts:287](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L287)

___

### setZoom

▸ **setZoom**(`value`): `void`

Sets zoom level of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | to set zoom to, less than 1 zooms out |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:408](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L408)

___

### size

▸ **size**(): `number`

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).size

#### Defined in

[src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Collection.ts#L128)

___

### toCanvasElement

▸ **toCanvasElement**(`multiplier?`, `options?`): `HTMLCanvasElement`

Create a new HTMLCanvas element painted with the current canvas content.
No need to resize the actual one or repaint it.
Will transfer object ownership to a new canvas, paint it, and set everything back.
This is an intermediary step used to get to a dataUrl but also it is useful to
create quick image copies of a canvas without passing for the dataUrl string

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `multiplier?` | `number` | `1` | a zoom factor. |
| `options?` | [`TToCanvasElementOptions`](../modules.md#ttocanvaselementoptions)<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> | `undefined` | Cropping informations |

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:1400](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1400)

___

### toDataURL

▸ **toDataURL**(`options?`): `string`

Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TDataUrlOptions`](../modules.md#tdataurloptions)<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> | Options object |

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

**`See`**

[demo](https://jsfiddle.net/xsjua1rd/)

**`Example`**

Generate jpeg dataURL with lower quality
```ts
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
```

**`Example`**

Generate cropped png dataURL (clipping of canvas)
```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  left: 100,
  top: 100,
  width: 200,
  height: 200
});
```

**`Example`**

Generate double scaled png dataURL
```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});
```

**`Example`**

Generate dataURL with objects that overlap a specified object
```ts
var myObject;
var dataURL = canvas.toDataURL({
  filter: (object) => object.isContainedWithinObject(myObject) || object.intersectsWithObject(myObject)
});
```

#### Defined in

[src/canvas/StaticCanvas.ts:1369](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1369)

___

### toDatalessJSON

▸ **toDatalessJSON**(`propertiesToInclude?`): `any`

Returns dataless JSON representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

json string

#### Defined in

[src/canvas/StaticCanvas.ts:804](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L804)

___

### toDatalessObject

▸ **toDatalessObject**(`propertiesToInclude?`): `any`

Returns dataless object representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

object representation of an instance

#### Defined in

[src/canvas/StaticCanvas.ts:841](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L841)

___

### toJSON

▸ **toJSON**(): `any`

Returns Object representation of canvas
this alias is provided because if you call JSON.stringify on an instance,
the toJSON object will be invoked if it exists.
Having a toJSON method means you can do JSON.stringify(myCanvas)

#### Returns

`any`

JSON compatible object

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/pec86/|jsFiddle)

**`Example`**

JSON without additional properties
```ts
var json = canvas.toJSON();
```

**`Example`**

JSON with additional properties included
```ts
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY']);
```

**`Example`**

JSON without default values
```ts
var json = canvas.toJSON();
```

#### Defined in

[src/canvas/StaticCanvas.ts:832](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L832)

___

### toObject

▸ **toObject**(`propertiesToInclude?`): `any`

Returns object representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

object representation of an instance

#### Defined in

[src/canvas/StaticCanvas.ts:813](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L813)

___

### toSVG

▸ **toSVG**(`options?`, `reviver?`): `string`

Returns SVG representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TSVGExportOptions`](../modules.md#tsvgexportoptions) | Options object for SVG output |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) | Method for further parsing of svg elements, called after each fabric object converted into svg representation. |

#### Returns

`string`

SVG string

**`Function`**

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#serialization](http://fabricjs.com/fabric-intro-part-3#serialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle)

**`Example`**

Normal SVG output
```ts
var svg = canvas.toSVG();
```

**`Example`**

SVG output without preamble (without &lt;?xml ../>)
```ts
var svg = canvas.toSVG({suppressPreamble: true});
```

**`Example`**

SVG output with viewBox attribute
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

**`Example`**

SVG output with different encoding (default: UTF-8)
```ts
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
```

**`Example`**

Modify SVG output with reviver function
```ts
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});
```

#### Defined in

[src/canvas/StaticCanvas.ts:980](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L980)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

string representation of an instance

#### Defined in

[src/canvas/StaticCanvas.ts:1498](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L1498)

___

### toggle

▸ **toggle**(`property`): [`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`StaticCanvas`](StaticCanvas.md)<`EventSpec`\>

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).toggle

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L46)

___

### viewportCenterObject

▸ **viewportCenterObject**(`object`): `void`

Centers object vertically and horizontally in the viewport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:751](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L751)

___

### viewportCenterObjectH

▸ **viewportCenterObjectH**(`object`): `void`

Centers object horizontally in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:759](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L759)

___

### viewportCenterObjectV

▸ **viewportCenterObjectV**(`object`): `void`

Centers object Vertically in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:770](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L770)

___

### zoomToPoint

▸ **zoomToPoint**(`point`, `value`): `void`

Sets zoom level of this canvas instance, the zoom centered around point
meaning that following zoom to point with the same point will have the visual
effect of the zoom originating from that point. The point won't move.
It has nothing to do with canvas center or visual center of the viewport.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | to zoom with respect to |
| `value` | `number` | to set zoom to, less than 1 zooms out |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:391](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L391)

___

### getDefaults

▸ `Static` **getDefaults**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/canvas/StaticCanvas.ts:169](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/canvas/StaticCanvas.ts#L169)
