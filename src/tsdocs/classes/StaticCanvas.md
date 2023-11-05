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
| `EventSpec` | extends [`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md) = [`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md) |

## Hierarchy

- `Collection`<`Object`, `this`\> & `CommonMethods`<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md), `this`\>

  ↳ **`StaticCanvas`**

## Implements

- [`StaticCanvasOptions`](/apidocs/interfaces/StaticCanvasOptions.md)

## Table of contents

### Constructors

- [constructor](/apidocs/classes/StaticCanvas.md#constructor)

### Properties

- [\_\_cleanupTask](/apidocs/classes/StaticCanvas.md#__cleanuptask)
- [\_objects](/apidocs/classes/StaticCanvas.md#_objects)
- [\_offset](/apidocs/classes/StaticCanvas.md#_offset)
- [allowTouchScrolling](/apidocs/classes/StaticCanvas.md#allowtouchscrolling)
- [backgroundColor](/apidocs/classes/StaticCanvas.md#backgroundcolor)
- [backgroundImage](/apidocs/classes/StaticCanvas.md#backgroundimage)
- [backgroundVpt](/apidocs/classes/StaticCanvas.md#backgroundvpt)
- [clipPath](/apidocs/classes/StaticCanvas.md#clippath)
- [controlsAboveOverlay](/apidocs/classes/StaticCanvas.md#controlsaboveoverlay)
- [destroyed](/apidocs/classes/StaticCanvas.md#destroyed)
- [disposed](/apidocs/classes/StaticCanvas.md#disposed)
- [elements](/apidocs/classes/StaticCanvas.md#elements)
- [enableRetinaScaling](/apidocs/classes/StaticCanvas.md#enableretinascaling)
- [hasLostContext](/apidocs/classes/StaticCanvas.md#haslostcontext)
- [height](/apidocs/classes/StaticCanvas.md#height)
- [imageSmoothingEnabled](/apidocs/classes/StaticCanvas.md#imagesmoothingenabled)
- [includeDefaultValues](/apidocs/classes/StaticCanvas.md#includedefaultvalues)
- [nextRenderHandle](/apidocs/classes/StaticCanvas.md#nextrenderhandle)
- [overlayColor](/apidocs/classes/StaticCanvas.md#overlaycolor)
- [overlayImage](/apidocs/classes/StaticCanvas.md#overlayimage)
- [overlayVpt](/apidocs/classes/StaticCanvas.md#overlayvpt)
- [renderOnAddRemove](/apidocs/classes/StaticCanvas.md#renderonaddremove)
- [skipOffscreen](/apidocs/classes/StaticCanvas.md#skipoffscreen)
- [svgViewportTransformation](/apidocs/classes/StaticCanvas.md#svgviewporttransformation)
- [viewportTransform](/apidocs/classes/StaticCanvas.md#viewporttransform)
- [vptCoords](/apidocs/classes/StaticCanvas.md#vptcoords)
- [width](/apidocs/classes/StaticCanvas.md#width)
- [ownDefaults](/apidocs/classes/StaticCanvas.md#owndefaults)

### Accessors

- [contextContainer](/apidocs/classes/StaticCanvas.md#contextcontainer)
- [lowerCanvasEl](/apidocs/classes/StaticCanvas.md#lowercanvasel)

### Methods

- [\_\_serializeBgOverlay](/apidocs/classes/StaticCanvas.md#__serializebgoverlay)
- [\_centerObject](/apidocs/classes/StaticCanvas.md#_centerobject)
- [\_isRetinaScaling](/apidocs/classes/StaticCanvas.md#_isretinascaling)
- [\_onObjectAdded](/apidocs/classes/StaticCanvas.md#_onobjectadded)
- [\_onObjectRemoved](/apidocs/classes/StaticCanvas.md#_onobjectremoved)
- [\_onStackOrderChanged](/apidocs/classes/StaticCanvas.md#_onstackorderchanged)
- [\_renderBackground](/apidocs/classes/StaticCanvas.md#_renderbackground)
- [\_renderBackgroundOrOverlay](/apidocs/classes/StaticCanvas.md#_renderbackgroundoroverlay)
- [\_renderObjects](/apidocs/classes/StaticCanvas.md#_renderobjects)
- [\_renderOverlay](/apidocs/classes/StaticCanvas.md#_renderoverlay)
- [\_set](/apidocs/classes/StaticCanvas.md#_set)
- [\_setDimensionsImpl](/apidocs/classes/StaticCanvas.md#_setdimensionsimpl)
- [\_setObject](/apidocs/classes/StaticCanvas.md#_setobject)
- [\_setOptions](/apidocs/classes/StaticCanvas.md#_setoptions)
- [\_setSVGBgOverlayColor](/apidocs/classes/StaticCanvas.md#_setsvgbgoverlaycolor)
- [\_setSVGBgOverlayImage](/apidocs/classes/StaticCanvas.md#_setsvgbgoverlayimage)
- [\_setSVGHeader](/apidocs/classes/StaticCanvas.md#_setsvgheader)
- [\_setSVGObject](/apidocs/classes/StaticCanvas.md#_setsvgobject)
- [\_setSVGObjects](/apidocs/classes/StaticCanvas.md#_setsvgobjects)
- [\_setSVGPreamble](/apidocs/classes/StaticCanvas.md#_setsvgpreamble)
- [\_toObject](/apidocs/classes/StaticCanvas.md#_toobject)
- [\_toObjectMethod](/apidocs/classes/StaticCanvas.md#_toobjectmethod)
- [absolutePan](/apidocs/classes/StaticCanvas.md#absolutepan)
- [add](/apidocs/classes/StaticCanvas.md#add)
- [bringObjectForward](/apidocs/classes/StaticCanvas.md#bringobjectforward)
- [bringObjectToFront](/apidocs/classes/StaticCanvas.md#bringobjecttofront)
- [calcOffset](/apidocs/classes/StaticCanvas.md#calcoffset)
- [calcViewportBoundaries](/apidocs/classes/StaticCanvas.md#calcviewportboundaries)
- [cancelRequestedRender](/apidocs/classes/StaticCanvas.md#cancelrequestedrender)
- [centerObject](/apidocs/classes/StaticCanvas.md#centerobject)
- [centerObjectH](/apidocs/classes/StaticCanvas.md#centerobjecth)
- [centerObjectV](/apidocs/classes/StaticCanvas.md#centerobjectv)
- [clear](/apidocs/classes/StaticCanvas.md#clear)
- [clearContext](/apidocs/classes/StaticCanvas.md#clearcontext)
- [clone](/apidocs/classes/StaticCanvas.md#clone)
- [cloneWithoutData](/apidocs/classes/StaticCanvas.md#clonewithoutdata)
- [collectObjects](/apidocs/classes/StaticCanvas.md#collectobjects)
- [complexity](/apidocs/classes/StaticCanvas.md#complexity)
- [contains](/apidocs/classes/StaticCanvas.md#contains)
- [createSVGClipPathMarkup](/apidocs/classes/StaticCanvas.md#createsvgclippathmarkup)
- [createSVGFontFacesMarkup](/apidocs/classes/StaticCanvas.md#createsvgfontfacesmarkup)
- [createSVGRefElementsMarkup](/apidocs/classes/StaticCanvas.md#createsvgrefelementsmarkup)
- [destroy](/apidocs/classes/StaticCanvas.md#destroy)
- [dispose](/apidocs/classes/StaticCanvas.md#dispose)
- [drawClipPathOnCanvas](/apidocs/classes/StaticCanvas.md#drawclippathoncanvas)
- [drawControls](/apidocs/classes/StaticCanvas.md#drawcontrols)
- [findNewLowerIndex](/apidocs/classes/StaticCanvas.md#findnewlowerindex)
- [findNewUpperIndex](/apidocs/classes/StaticCanvas.md#findnewupperindex)
- [fire](/apidocs/classes/StaticCanvas.md#fire)
- [forEachObject](/apidocs/classes/StaticCanvas.md#foreachobject)
- [get](/apidocs/classes/StaticCanvas.md#get)
- [getCenter](/apidocs/classes/StaticCanvas.md#getcenter)
- [getCenterPoint](/apidocs/classes/StaticCanvas.md#getcenterpoint)
- [getContext](/apidocs/classes/StaticCanvas.md#getcontext)
- [getElement](/apidocs/classes/StaticCanvas.md#getelement)
- [getHeight](/apidocs/classes/StaticCanvas.md#getheight)
- [getObjects](/apidocs/classes/StaticCanvas.md#getobjects)
- [getRetinaScaling](/apidocs/classes/StaticCanvas.md#getretinascaling)
- [getVpCenter](/apidocs/classes/StaticCanvas.md#getvpcenter)
- [getWidth](/apidocs/classes/StaticCanvas.md#getwidth)
- [getZoom](/apidocs/classes/StaticCanvas.md#getzoom)
- [initElements](/apidocs/classes/StaticCanvas.md#initelements)
- [insertAt](/apidocs/classes/StaticCanvas.md#insertat)
- [isEmpty](/apidocs/classes/StaticCanvas.md#isempty)
- [item](/apidocs/classes/StaticCanvas.md#item)
- [loadFromJSON](/apidocs/classes/StaticCanvas.md#loadfromjson)
- [moveObjectTo](/apidocs/classes/StaticCanvas.md#moveobjectto)
- [off](/apidocs/classes/StaticCanvas.md#off)
- [on](/apidocs/classes/StaticCanvas.md#on)
- [once](/apidocs/classes/StaticCanvas.md#once)
- [relativePan](/apidocs/classes/StaticCanvas.md#relativepan)
- [remove](/apidocs/classes/StaticCanvas.md#remove)
- [renderAll](/apidocs/classes/StaticCanvas.md#renderall)
- [renderAndReset](/apidocs/classes/StaticCanvas.md#renderandreset)
- [renderCanvas](/apidocs/classes/StaticCanvas.md#rendercanvas)
- [requestRenderAll](/apidocs/classes/StaticCanvas.md#requestrenderall)
- [sendObjectBackwards](/apidocs/classes/StaticCanvas.md#sendobjectbackwards)
- [sendObjectToBack](/apidocs/classes/StaticCanvas.md#sendobjecttoback)
- [set](/apidocs/classes/StaticCanvas.md#set)
- [setDimensions](/apidocs/classes/StaticCanvas.md#setdimensions)
- [setHeight](/apidocs/classes/StaticCanvas.md#setheight)
- [setViewportTransform](/apidocs/classes/StaticCanvas.md#setviewporttransform)
- [setWidth](/apidocs/classes/StaticCanvas.md#setwidth)
- [setZoom](/apidocs/classes/StaticCanvas.md#setzoom)
- [size](/apidocs/classes/StaticCanvas.md#size)
- [toCanvasElement](/apidocs/classes/StaticCanvas.md#tocanvaselement)
- [toDataURL](/apidocs/classes/StaticCanvas.md#todataurl)
- [toDatalessJSON](/apidocs/classes/StaticCanvas.md#todatalessjson)
- [toDatalessObject](/apidocs/classes/StaticCanvas.md#todatalessobject)
- [toJSON](/apidocs/classes/StaticCanvas.md#tojson)
- [toObject](/apidocs/classes/StaticCanvas.md#toobject)
- [toSVG](/apidocs/classes/StaticCanvas.md#tosvg)
- [toString](/apidocs/classes/StaticCanvas.md#tostring)
- [toggle](/apidocs/classes/StaticCanvas.md#toggle)
- [viewportCenterObject](/apidocs/classes/StaticCanvas.md#viewportcenterobject)
- [viewportCenterObjectH](/apidocs/classes/StaticCanvas.md#viewportcenterobjecth)
- [viewportCenterObjectV](/apidocs/classes/StaticCanvas.md#viewportcenterobjectv)
- [zoomToPoint](/apidocs/classes/StaticCanvas.md#zoomtopoint)
- [getDefaults](/apidocs/classes/StaticCanvas.md#getdefaults)

## Constructors

### constructor

• **new StaticCanvas**<`EventSpec`\>(`el?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventSpec` | extends [`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md) = [`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el?` | `string` \| `HTMLCanvasElement` |
| `options` | [`TOptions`](/apidocs/modules.md#toptions)<[`StaticCanvasOptions`](/apidocs/interfaces/StaticCanvasOptions.md)\> |

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).constructor

#### Defined in

[src/canvas/StaticCanvas.ts:175](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L175)

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

[src/canvas/StaticCanvas.ts:166](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L166)

___

### \_objects

• **\_objects**: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] = `[]`

**`TODO`**

needs to end up in the constructor too

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).\_objects

#### Defined in

[src/Collection.ts:13](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L13)

___

### \_offset

• **\_offset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[src/canvas/StaticCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L157)

___

### allowTouchScrolling

• **allowTouchScrolling**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[allowTouchScrolling](/apidocs/interfaces/StaticCanvasOptions.md#allowtouchscrolling)

#### Defined in

[src/canvas/StaticCanvas.ts:117](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L117)

___

### backgroundColor

• **backgroundColor**: `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

Background color of canvas instance.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[backgroundColor](/apidocs/interfaces/StaticCanvasOptions.md#backgroundcolor)

#### Defined in

[src/canvas/StaticCanvas.ts:92](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L92)

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

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[backgroundImage](/apidocs/interfaces/StaticCanvasOptions.md#backgroundimage)

#### Defined in

[src/canvas/StaticCanvas.ts:93](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L93)

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

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[backgroundVpt](/apidocs/interfaces/StaticCanvasOptions.md#backgroundvpt)

#### Defined in

[src/canvas/StaticCanvas.ts:91](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L91)

___

### clipPath

• `Optional` **clipPath**: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[clipPath](/apidocs/interfaces/StaticCanvasOptions.md#clippath)

#### Defined in

[src/canvas/StaticCanvas.ts:99](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L99)

___

### controlsAboveOverlay

• **controlsAboveOverlay**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[controlsAboveOverlay](/apidocs/interfaces/StaticCanvasOptions.md#controlsaboveoverlay)

#### Defined in

[src/canvas/StaticCanvas.ts:112](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L112)

___

### destroyed

• `Optional` **destroyed**: `boolean`

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

#### Defined in

[src/canvas/StaticCanvas.ts:148](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L148)

___

### disposed

• `Optional` **disposed**: `boolean`

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

#### Defined in

[src/canvas/StaticCanvas.ts:155](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L155)

___

### elements

• **elements**: [`StaticCanvasDOMManager`](/apidocs/classes/StaticCanvasDOMManager.md)

#### Defined in

[src/canvas/StaticCanvas.ts:161](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L161)

___

### enableRetinaScaling

• **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[enableRetinaScaling](/apidocs/interfaces/StaticCanvasOptions.md#enableretinascaling)

#### Defined in

[src/canvas/StaticCanvas.ts:106](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L106)

___

### hasLostContext

• `Protected` **hasLostContext**: `boolean`

#### Defined in

[src/canvas/StaticCanvas.ts:158](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L158)

___

### height

• **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[height](/apidocs/interfaces/StaticCanvasOptions.md#height)

#### Defined in

[src/canvas/StaticCanvas.ts:88](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L88)

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[imageSmoothingEnabled](/apidocs/interfaces/StaticCanvasOptions.md#imagesmoothingenabled)

#### Defined in

[src/canvas/StaticCanvas.ts:107](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L107)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[includeDefaultValues](/apidocs/interfaces/StaticCanvasOptions.md#includedefaultvalues)

#### Defined in

[src/canvas/StaticCanvas.ts:101](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L101)

___

### nextRenderHandle

• `Protected` **nextRenderHandle**: `number`

#### Defined in

[src/canvas/StaticCanvas.ts:159](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L159)

___

### overlayColor

• **overlayColor**: `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

Overlay color of canvas instance.

**`Since`**

1.3.9

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[overlayColor](/apidocs/interfaces/StaticCanvasOptions.md#overlaycolor)

#### Defined in

[src/canvas/StaticCanvas.ts:96](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L96)

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

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[overlayImage](/apidocs/interfaces/StaticCanvasOptions.md#overlayimage)

#### Defined in

[src/canvas/StaticCanvas.ts:97](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L97)

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

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[overlayVpt](/apidocs/interfaces/StaticCanvasOptions.md#overlayvpt)

#### Defined in

[src/canvas/StaticCanvas.ts:95](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L95)

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

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[renderOnAddRemove](/apidocs/interfaces/StaticCanvasOptions.md#renderonaddremove)

#### Defined in

[src/canvas/StaticCanvas.ts:104](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L104)

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

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[skipOffscreen](/apidocs/interfaces/StaticCanvasOptions.md#skipoffscreen)

#### Defined in

[src/canvas/StaticCanvas.ts:105](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L105)

___

### svgViewportTransformation

• **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[svgViewportTransformation](/apidocs/interfaces/StaticCanvasOptions.md#svgviewporttransformation)

#### Defined in

[src/canvas/StaticCanvas.ts:942](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L942)

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

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[viewportTransform](/apidocs/interfaces/StaticCanvasOptions.md#viewporttransform)

#### Defined in

[src/canvas/StaticCanvas.ts:119](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L119)

___

### vptCoords

• **vptCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Describe canvas element extension over design
properties are tl,tr,bl,br.
if canvas is not zoomed/panned those points are the four corner of canvas
if canvas is viewportTransformed you those points indicate the extension
of canvas element in plain untrasformed coordinates
The coordinates get updated with

**`Method`**

calcViewportBoundaries.

#### Defined in

[src/canvas/StaticCanvas.ts:128](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L128)

___

### width

• **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[width](/apidocs/interfaces/StaticCanvasOptions.md#width)

#### Defined in

[src/canvas/StaticCanvas.ts:87](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L87)

___

### ownDefaults

▪ `Static` **ownDefaults**: [`TOptions`](/apidocs/modules.md#toptions)<[`StaticCanvasOptions`](/apidocs/interfaces/StaticCanvasOptions.md)\> = `staticCanvasDefaults`

#### Defined in

[src/canvas/StaticCanvas.ts:163](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L163)

## Accessors

### contextContainer

• `get` **contextContainer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[src/canvas/StaticCanvas.ts:139](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L139)

___

### lowerCanvasEl

• `get` **lowerCanvasEl**(): `HTMLCanvasElement`

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:135](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L135)

## Methods

### \_\_serializeBgOverlay

▸ `Private` **__serializeBgOverlay**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](/apidocs/modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Defined in

[src/canvas/StaticCanvas.ts:896](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L896)

___

### \_centerObject

▸ `Private` **_centerObject**(`object`, `center`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center |
| `center` | [`Point`](/apidocs/classes/Point.md) | Center point |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:794](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L794)

___

### \_isRetinaScaling

▸ `Private` **_isRetinaScaling**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/canvas/StaticCanvas.ts:244](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L244)

___

### \_onObjectAdded

▸ **_onObjectAdded**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).\_onObjectAdded

#### Defined in

[src/canvas/StaticCanvas.ts:216](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L216)

___

### \_onObjectRemoved

▸ **_onObjectRemoved**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).\_onObjectRemoved

#### Defined in

[src/canvas/StaticCanvas.ts:231](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L231)

___

### \_onStackOrderChanged

▸ **_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).\_onStackOrderChanged

#### Defined in

[src/canvas/StaticCanvas.ts:237](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L237)

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

[src/canvas/StaticCanvas.ts:686](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L686)

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

[src/canvas/StaticCanvas.ts:634](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L634)

___

### \_renderObjects

▸ `Private` **_renderObjects**(`ctx`, `objects`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:623](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L623)

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

[src/canvas/StaticCanvas.ts:694](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L694)

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

[src/CommonMethods.ts:38](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L38)

___

### \_setDimensionsImpl

▸ `Protected` **_setDimensionsImpl**(`dimensions`, `«destructured»?`): `void`

Internal use only

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Partial`<[`TSize`](/apidocs/modules.md#tsize) \| `CSSDimensions`\> |
| `«destructured»` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:308](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L308)

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

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L18)

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

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L9)

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

[src/canvas/StaticCanvas.ts:1199](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1199)

___

### \_setSVGBgOverlayImage

▸ `Private` **_setSVGBgOverlayImage**(`markup`, `property`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `property` | ``"backgroundImage"`` \| ``"overlayImage"`` |
| `reviver` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1184](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1184)

___

### \_setSVGHeader

▸ `Private` **_setSVGHeader**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1023](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1023)

___

### \_setSVGObject

▸ `Private` **_setSVGObject**(`markup`, `instance`, `reviver`): `void`

This is its own function because the Canvas ( non static ) requires extra code here

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `instance` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `reviver` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1173](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1173)

___

### \_setSVGObjects

▸ `Private` **_setSVGObjects**(`markup`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `reviver` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1160](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1160)

___

### \_setSVGPreamble

▸ `Private` **_setSVGPreamble**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1007](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1007)

___

### \_toObject

▸ `Private` **_toObject**(`instance`, `methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `methodName` | [`TValidToObjectMethod`](/apidocs/modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Defined in

[src/canvas/StaticCanvas.ts:874](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L874)

___

### \_toObjectMethod

▸ `Private` **_toObjectMethod**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](/apidocs/modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Defined in

[src/canvas/StaticCanvas.ts:849](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L849)

___

### absolutePan

▸ **absolutePan**(`point`): `void`

Pan viewport so as to place point at top left corner of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | to move to |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:417](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L417)

___

### add

▸ **add**(`...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).add

#### Defined in

[src/canvas/StaticCanvas.ts:198](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L198)

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
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object in front of next upper intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).bringObjectForward

#### Defined in

[src/Collection.ts:232](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L232)

___

### bringObjectToFront

▸ **bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).bringObjectToFront

#### Defined in

[src/Collection.ts:186](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L186)

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

[src/canvas/StaticCanvas.ts:260](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L260)

___

### calcViewportBoundaries

▸ **calcViewportBoundaries**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport using
object absolute coordinates ( aCoords )

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

points.tl

**`Chainable`**

#### Defined in

[src/canvas/StaticCanvas.ts:517](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L517)

___

### cancelRequestedRender

▸ **cancelRequestedRender**(): `void`

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:535](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L535)

___

### centerObject

▸ **centerObject**(`object`): `void`

Centers object vertically and horizontally in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:744](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L744)

___

### centerObjectH

▸ **centerObjectH**(`object`): `void`

Centers object horizontally in the canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:722](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L722)

___

### centerObjectV

▸ **centerObjectV**(`object`): `void`

Centers object vertically in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:733](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L733)

___

### clear

▸ **clear**(): `void`

Clears all contexts (background, main, top) of an instance

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:464](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L464)

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

[src/canvas/StaticCanvas.ts:449](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L449)

___

### clone

▸ **clone**(`properties?`): `Promise`<[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>\>

Clones canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | `string`[] | Array of properties to include in the cloned canvas and children |

#### Returns

`Promise`<[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>\>

#### Defined in

[src/canvas/StaticCanvas.ts:1315](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1315)

___

### cloneWithoutData

▸ **cloneWithoutData**(): [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>

#### Defined in

[src/canvas/StaticCanvas.ts:1325](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1325)

___

### collectObjects

▸ **collectObjects**(`«destructured»`, `«destructured»?`): `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TBBox`](/apidocs/modules.md#tbbox) |
| `«destructured»` | `Object` |
| › `includeIntersecting?` | `boolean` |

#### Returns

`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).collectObjects

#### Defined in

[src/Collection.ts:316](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L316)

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

[src/Collection.ts:157](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L157)

___

### contains

▸ **contains**(`object`, `deep?`): `boolean`

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](/apidocs/classes/FabricObject.md#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to check against |
| `deep?` | `boolean` | `true` to check all descendants, `false` to check only `_objects` |

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).contains

#### Defined in

[src/Collection.ts:140](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L140)

___

### createSVGClipPathMarkup

▸ **createSVGClipPathMarkup**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) |

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1068](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1068)

___

### createSVGFontFacesMarkup

▸ **createSVGFontFacesMarkup**(): `string`

Creates markup containing SVG font faces,
font URLs for font faces must be collected by developers
and are not extracted from the DOM by fabricjs

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1111](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1111)

___

### createSVGRefElementsMarkup

▸ **createSVGRefElementsMarkup**(): `string`

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1083](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1083)

___

### destroy

▸ `Private` **destroy**(): `void`

Clears the canvas element, disposes objects and frees resources.

Invoked as part of the **async** operation of [dispose](/apidocs/classes/StaticCanvas.md#dispose).

**CAUTION**:

This method is **UNSAFE**.
You may encounter a race condition using it if there's a requested render.
Call this method only if you are sure rendering has settled.
Consider using [dispose](/apidocs/classes/StaticCanvas.md#dispose) as it is **SAFE**

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1480](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1480)

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

[src/canvas/StaticCanvas.ts:1441](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1441)

___

### drawClipPathOnCanvas

▸ **drawClipPathOnCanvas**(`ctx`, `clipPath`): `void`

Paint the cached clipPath on the lowerCanvasEl

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | - |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:598](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L598)

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

[src/canvas/StaticCanvas.ts:542](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L542)

___

### findNewLowerIndex

▸ **findNewLowerIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).findNewLowerIndex

#### Defined in

[src/Collection.ts:264](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L264)

___

### findNewUpperIndex

▸ **findNewUpperIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).findNewUpperIndex

#### Defined in

[src/Collection.ts:287](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L287)

___

### fire

▸ **fire**<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)[`K`] | Options object |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).fire

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L159)

___

### forEachObject

▸ **forEachObject**(`callback`): `void`

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`object`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, `index`: `number`, `array`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]) => `any` | Callback invoked with current object as first argument, index - as second and an array of all objects - as third. |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).forEachObject

#### Defined in

[src/Collection.ts:83](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L83)

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

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L59)

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

[src/canvas/StaticCanvas.ts:704](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L704)

___

### getCenterPoint

▸ **getCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns coordinates of a center of canvas.

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/canvas/StaticCanvas.ts:715](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L715)

___

### getContext

▸ **getContext**(): `CanvasRenderingContext2D`

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[src/canvas/StaticCanvas.ts:457](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L457)

___

### getElement

▸ **getElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:441](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L441)

___

### getHeight

▸ **getHeight**(): `number`

Returns canvas height (in px)

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:276](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L276)

___

### getObjects

▸ **getObjects**(`...types?`): [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Returns an array of children objects of this instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...types?` | `string`[] | When specified, only objects of these types are returned |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).getObjects

#### Defined in

[src/Collection.ts:100](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L100)

___

### getRetinaScaling

▸ `Private` **getRetinaScaling**(): `number`

#### Returns

`number`

retinaScaling if applied, otherwise 1;

#### Defined in

[src/canvas/StaticCanvas.ts:252](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L252)

___

### getVpCenter

▸ **getVpCenter**(): [`Point`](/apidocs/classes/Point.md)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](/apidocs/classes/Point.md)

vpCenter, viewport center

#### Defined in

[src/canvas/StaticCanvas.ts:782](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L782)

___

### getWidth

▸ **getWidth**(): `number`

Returns canvas width (in px)

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:268](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L268)

___

### getZoom

▸ **getZoom**(): `number`

Returns canvas zoom level

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:356](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L356)

___

### initElements

▸ `Protected` **initElements**(`el?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el?` | `string` \| `HTMLCanvasElement` |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:194](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L194)

___

### insertAt

▸ **insertAt**(`index`, `...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).insertAt

#### Defined in

[src/canvas/StaticCanvas.ts:204](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L204)

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

[src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L120)

___

### item

▸ **item**(`index`): [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Returns object at specified index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

object at index

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).item

#### Defined in

[src/Collection.ts:112](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L112)

___

### loadFromJSON

▸ **loadFromJSON**(`json`, `reviver?`, `options?`): `Promise`<[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>\>

Populates canvas with data from the specified JSON.
JSON format must conform to the one of fabric.Canvas#toJSON

**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `string` \| `Record`<`string`, `any`\> | JSON string or object |
| `reviver?` | <T\>(`serializedObj`: `Record`<`string`, `any`\>, `instance`: `T`) => `void` | Method for further parsing of object elements, called after each fabric object created. |
| `options?` | [`Abortable`](/apidocs/modules.md#abortable) | options |

#### Returns

`Promise`<[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>\>

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

[src/canvas/StaticCanvas.ts:1264](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1264)

___

### moveObjectTo

▸ **moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `index` | `number` | Position to move to |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).moveObjectTo

#### Defined in

[src/Collection.ts:254](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L254)

___

### off

▸ **off**<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |

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

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L120)

▸ **off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).off

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).off

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L129)

___

### on

▸ **on**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  } \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| { `drawables`: { `backgroundImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } ; `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `subTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](/apidocs/interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> \| { `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| { `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| { `target`: [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `ctx`: `CanvasRenderingContext2D`  } \| { `ctx`: `CanvasRenderingContext2D`  } \| { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `transform`: [`Transform`](/apidocs/modules.md#transform)  } \| `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } |

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

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L23)

▸ **on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).on

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L27)

___

### once

▸ **once**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  } \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<`WheelEvent`\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| { `drawables`: { `backgroundImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } ; `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `subTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `TEventWithTarget`<`DragEvent`\> \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](/apidocs/interfaces/DropEventData.md) \| `SimpleEventHandler`<`Event`\> \| { `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| { `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| { `target`: [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `target`: [`IText`](/apidocs/classes/IText.md)<`Partial`<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| { `ctx`: `CanvasRenderingContext2D`  } \| { `ctx`: `CanvasRenderingContext2D`  } \| { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| { `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & { `transform`: [`Transform`](/apidocs/modules.md#transform)  } \| `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`<[`TEvent`](/apidocs/interfaces/TEvent.md)<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & { `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } |

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

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L62)

▸ **once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).once

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Observable.ts#L66)

___

### relativePan

▸ **relativePan**(`point`): `void`

Pans viewpoint relatively

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | (position vector) to move by |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:428](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L428)

___

### remove

▸ **remove**(`...objects`): [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Overrides

createCollectionMixin(CommonMethods&lt;CanvasEvents\&gt;).remove

#### Defined in

[src/canvas/StaticCanvas.ts:210](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L210)

___

### renderAll

▸ **renderAll**(): `void`

Renders the canvas

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:478](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L478)

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

[src/canvas/StaticCanvas.ts:494](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L494)

___

### renderCanvas

▸ **renderCanvas**(`ctx`, `objects`): `void`

Renders background, objects, overlay and controls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:551](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L551)

___

### requestRenderAll

▸ **requestRenderAll**(): `void`

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:504](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L504)

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
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object behind next lower intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).sendObjectBackwards

#### Defined in

[src/Collection.ts:206](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L206)

___

### sendObjectToBack

▸ **sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send to back |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).sendObjectToBack

#### Defined in

[src/Collection.ts:170](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L170)

___

### set

▸ **set**(`key`, `value?`): [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).set

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L29)

___

### setDimensions

▸ **setDimensions**(`dimensions`, `options?`): `void`

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dimensions` | `Partial`<[`TSize`](/apidocs/modules.md#tsize)\> | Object with width/height properties |
| `options?` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:339](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L339)

___

### setHeight

▸ **setHeight**(`value`, `options?`): `void`

Sets height of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value to set height to |
| `options?` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

**`Deprecated`**

will be removed in 7.0

#### Defined in

[src/canvas/StaticCanvas.ts:300](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L300)

___

### setViewportTransform

▸ **setViewportTransform**(`vpt`): `void`

Sets viewport transformation of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vpt` | [`TMat2D`](/apidocs/modules.md#tmat2d) | a Canvas 2D API transform matrix |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:364](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L364)

___

### setWidth

▸ **setWidth**(`value`, `options?`): `void`

Sets width of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value to set width to |
| `options?` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

**`Deprecated`**

will be removed in 7.0

#### Defined in

[src/canvas/StaticCanvas.ts:288](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L288)

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

[src/canvas/StaticCanvas.ts:409](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L409)

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

[src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/Collection.ts#L128)

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
| `options?` | [`TToCanvasElementOptions`](/apidocs/modules.md#ttocanvaselementoptions)<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | `undefined` | Cropping informations |

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:1401](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1401)

___

### toDataURL

▸ **toDataURL**(`options?`): `string`

Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TDataUrlOptions`](/apidocs/modules.md#tdataurloptions)<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | Options object |

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

[src/canvas/StaticCanvas.ts:1370](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1370)

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

[src/canvas/StaticCanvas.ts:805](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L805)

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

[src/canvas/StaticCanvas.ts:842](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L842)

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

[src/canvas/StaticCanvas.ts:833](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L833)

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

[src/canvas/StaticCanvas.ts:814](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L814)

___

### toSVG

▸ **toSVG**(`options?`, `reviver?`): `string`

Returns SVG representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) | Options object for SVG output |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg elements, called after each fabric object converted into svg representation. |

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

[src/canvas/StaticCanvas.ts:981](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L981)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

string representation of an instance

#### Defined in

[src/canvas/StaticCanvas.ts:1500](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L1500)

___

### toggle

▸ **toggle**(`property`): [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)<`EventSpec`\>

#### Inherited from

createCollectionMixin(CommonMethods<CanvasEvents\>).toggle

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/CommonMethods.ts#L46)

___

### viewportCenterObject

▸ **viewportCenterObject**(`object`): `void`

Centers object vertically and horizontally in the viewport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:752](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L752)

___

### viewportCenterObjectH

▸ **viewportCenterObjectH**(`object`): `void`

Centers object horizontally in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:760](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L760)

___

### viewportCenterObjectV

▸ **viewportCenterObjectV**(`object`): `void`

Centers object Vertically in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)<`Partial`<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:771](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L771)

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
| `point` | [`Point`](/apidocs/classes/Point.md) | to zoom with respect to |
| `value` | `number` | to set zoom to, less than 1 zooms out |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:392](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L392)

___

### getDefaults

▸ `Static` **getDefaults**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/canvas/StaticCanvas.ts:171](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/canvas/StaticCanvas.ts#L171)
