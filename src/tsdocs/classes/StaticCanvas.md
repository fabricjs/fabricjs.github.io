# Class: StaticCanvas\<EventSpec\>

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

- `Collection`\<() => `CommonMethods`\<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\>, `this`\> & `CommonMethods`\<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md), `this`\>

  ↳ **`StaticCanvas`**

## Implements

- [`StaticCanvasOptions`](/apidocs/interfaces/StaticCanvasOptions.md)

## Constructors

### constructor

**new StaticCanvas**\<`EventSpec`\>(`el?`, `options?`): [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventSpec` | extends [`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md) = [`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el?` | `string` \| `HTMLCanvasElement` |
| `options` | [`TOptions`](/apidocs/modules.md#toptions)\<[`StaticCanvasOptions`](/apidocs/interfaces/StaticCanvasOptions.md)\> |

#### Returns

[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>

#### Overrides

createCollectionMixin(CommonMethods\&lt;CanvasEvents\&gt;).constructor

#### Defined in

[src/canvas/StaticCanvas.ts:166](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L166)

## Properties

### \_\_cleanupTask

 `Protected` `Optional` **\_\_cleanupTask**: `Object`

#### Call signature

(): `void`

##### Returns

`void`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kill` | (`reason?`: `any`) => `void` |

#### Defined in

[src/canvas/StaticCanvas.ts:157](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L157)

___

### \_objects

 **\_objects**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] = `[]`

**`TODO`**

needs to end up in the constructor too

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).\_objects

#### Defined in

[src/Collection.ts:21](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L21)

___

### \_offset

 **\_offset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[src/canvas/StaticCanvas.ts:148](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L148)

___

### allowTouchScrolling

 **allowTouchScrolling**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[allowTouchScrolling](/apidocs/interfaces/StaticCanvasOptions.md#allowtouchscrolling)

#### Defined in

[src/canvas/StaticCanvas.ts:112](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L112)

___

### backgroundColor

 **backgroundColor**: `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

Background color of canvas instance.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[backgroundColor](/apidocs/interfaces/StaticCanvasOptions.md#backgroundcolor)

#### Defined in

[src/canvas/StaticCanvas.ts:87](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L87)

___

### backgroundImage

 `Optional` **backgroundImage**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

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

[src/canvas/StaticCanvas.ts:88](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L88)

___

### backgroundVpt

 **backgroundVpt**: `boolean`

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

[src/canvas/StaticCanvas.ts:86](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L86)

___

### clipPath

 `Optional` **clipPath**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the canvas has rendered, and the context is placed in the
top left corner of the canvas.
clipPath will clip away controls, if you do not want this to happen use controlsAboveOverlay = true

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[clipPath](/apidocs/interfaces/StaticCanvasOptions.md#clippath)

#### Defined in

[src/canvas/StaticCanvas.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L94)

___

### controlsAboveOverlay

 **controlsAboveOverlay**: `boolean`

**`Todo`**

move to Canvas

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[controlsAboveOverlay](/apidocs/interfaces/StaticCanvasOptions.md#controlsaboveoverlay)

#### Defined in

[src/canvas/StaticCanvas.ts:107](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L107)

___

### destroyed

 `Optional` **destroyed**: `boolean`

If true the Canvas is in the process or has been disposed/destroyed.
No more rendering operation will be executed on this canvas.

#### Defined in

[src/canvas/StaticCanvas.ts:139](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L139)

___

### disposed

 `Optional` **disposed**: `boolean`

Started the process of disposing but not done yet.
WIll likely complete the render cycle already scheduled but stopping adding more.

#### Defined in

[src/canvas/StaticCanvas.ts:146](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L146)

___

### elements

 **elements**: [`StaticCanvasDOMManager`](/apidocs/classes/StaticCanvasDOMManager.md)

#### Defined in

[src/canvas/StaticCanvas.ts:152](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L152)

___

### enableRetinaScaling

 **enableRetinaScaling**: `boolean`

When true, canvas is scaled by devicePixelRatio for better rendering on retina screens

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[enableRetinaScaling](/apidocs/interfaces/StaticCanvasOptions.md#enableretinascaling)

#### Defined in

[src/canvas/StaticCanvas.ts:101](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L101)

___

### hasLostContext

 `Protected` **hasLostContext**: `boolean`

#### Defined in

[src/canvas/StaticCanvas.ts:149](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L149)

___

### height

 **height**: `number`

Height in virtual/logical pixels of the canvas.
The canvas can be taller than width if retina scaling is active

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[height](/apidocs/interfaces/StaticCanvasOptions.md#height)

#### Defined in

[src/canvas/StaticCanvas.ts:83](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L83)

___

### imageSmoothingEnabled

 **imageSmoothingEnabled**: `boolean`

Indicates whether this canvas will use image smoothing, this is on by default in browsers

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[imageSmoothingEnabled](/apidocs/interfaces/StaticCanvasOptions.md#imagesmoothingenabled)

#### Defined in

[src/canvas/StaticCanvas.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L102)

___

### includeDefaultValues

 **includeDefaultValues**: `boolean`

Indicates whether toObject/toDatalessObject should include default values
if set to false, takes precedence over the object value.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[includeDefaultValues](/apidocs/interfaces/StaticCanvasOptions.md#includedefaultvalues)

#### Defined in

[src/canvas/StaticCanvas.ts:96](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L96)

___

### nextRenderHandle

 `Protected` **nextRenderHandle**: `number`

#### Defined in

[src/canvas/StaticCanvas.ts:150](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L150)

___

### overlayColor

 **overlayColor**: `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

Overlay color of canvas instance.

**`Since`**

1.3.9

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[overlayColor](/apidocs/interfaces/StaticCanvasOptions.md#overlaycolor)

#### Defined in

[src/canvas/StaticCanvas.ts:91](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L91)

___

### overlayImage

 `Optional` **overlayImage**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

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

[src/canvas/StaticCanvas.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L92)

___

### overlayVpt

 **overlayVpt**: `boolean`

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

[src/canvas/StaticCanvas.ts:90](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L90)

___

### renderOnAddRemove

 **renderOnAddRemove**: `boolean`

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

[src/canvas/StaticCanvas.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L99)

___

### skipOffscreen

 **skipOffscreen**: `boolean`

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

[src/canvas/StaticCanvas.ts:100](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L100)

___

### svgViewportTransformation

 **svgViewportTransformation**: `boolean`

When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
a zoomed canvas will then produce zoomed SVG output.

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[svgViewportTransformation](/apidocs/interfaces/StaticCanvasOptions.md#svgviewporttransformation)

#### Defined in

[src/canvas/StaticCanvas.ts:930](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L930)

___

### viewportTransform

 **viewportTransform**: [`TMat2D`](/apidocs/modules.md#tmat2d)

The transformation (a Canvas 2D API transform matrix) which focuses the viewport

**`Example`**

```ts
canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
```

**`Example`**

```ts
canvas.viewportTransform = [0.7, 0, 0, 0.7, 50, 50];
```

**`Default`**

```ts

```

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[viewportTransform](/apidocs/interfaces/StaticCanvasOptions.md#viewporttransform)

#### Defined in

[src/canvas/StaticCanvas.ts:114](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L114)

___

### vptCoords

 **vptCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

The viewport bounding box in scene plane coordinates, see [calcViewportBoundaries](/apidocs/classes/StaticCanvas.md#calcviewportboundaries)

#### Defined in

[src/canvas/StaticCanvas.ts:119](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L119)

___

### width

 **width**: `number`

Width in virtual/logical pixels of the canvas.
The canvas can be larger than width if retina scaling is active

#### Implementation of

[StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md).[width](/apidocs/interfaces/StaticCanvasOptions.md#width)

#### Defined in

[src/canvas/StaticCanvas.ts:82](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L82)

___

### ownDefaults

 `Static` **ownDefaults**: [`TOptions`](/apidocs/modules.md#toptions)\<[`StaticCanvasOptions`](/apidocs/interfaces/StaticCanvasOptions.md)\> = `staticCanvasDefaults`

#### Defined in

[src/canvas/StaticCanvas.ts:154](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L154)

## Accessors

### contextContainer

`get` **contextContainer**(): `CanvasRenderingContext2D`

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[src/canvas/StaticCanvas.ts:130](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L130)

___

### lowerCanvasEl

`get` **lowerCanvasEl**(): `HTMLCanvasElement`

A reference to the canvas actual HTMLCanvasElement.
Can be use to read the raw pixels, but never write or manipulate

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:126](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L126)

## Methods

### \_\_serializeBgOverlay

**__serializeBgOverlay**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](/apidocs/modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Defined in

[src/canvas/StaticCanvas.ts:884](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L884)

___

### \_centerObject

**_centerObject**(`object`, `center`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center |
| `center` | [`Point`](/apidocs/classes/Point.md) | Center point |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:782](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L782)

___

### \_isRetinaScaling

**_isRetinaScaling**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/canvas/StaticCanvas.ts:235](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L235)

___

### \_onObjectAdded

**_onObjectAdded**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Overrides

createCollectionMixin(CommonMethods\&lt;CanvasEvents\&gt;).\_onObjectAdded

#### Defined in

[src/canvas/StaticCanvas.ts:207](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L207)

___

### \_onObjectRemoved

**_onObjectRemoved**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Overrides

createCollectionMixin(CommonMethods\&lt;CanvasEvents\&gt;).\_onObjectRemoved

#### Defined in

[src/canvas/StaticCanvas.ts:222](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L222)

___

### \_onStackOrderChanged

**_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Overrides

createCollectionMixin(CommonMethods\&lt;CanvasEvents\&gt;).\_onStackOrderChanged

#### Defined in

[src/canvas/StaticCanvas.ts:228](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L228)

___

### \_renderBackground

**_renderBackground**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:674](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L674)

___

### \_renderBackgroundOrOverlay

**_renderBackgroundOrOverlay**(`ctx`, `property`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `property` | ``"overlay"`` \| ``"background"`` | 'background' or 'overlay' |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:622](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L622)

___

### \_renderObjects

**_renderObjects**(`ctx`, `objects`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:611](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L611)

___

### \_renderOverlay

**_renderOverlay**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:682](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L682)

___

### \_set

**_set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).\_set

#### Defined in

[src/CommonMethods.ts:38](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L38)

___

### \_setDimensionsImpl

**_setDimensionsImpl**(`dimensions`, `«destructured»?`): `void`

Internal use only

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Partial`\<[`TSize`](/apidocs/modules.md#tsize) \| `CSSDimensions`\> |
| `«destructured»` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:299](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L299)

___

### \_setObject

**_setObject**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`\<`string`, `any`\> |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).\_setObject

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L18)

___

### \_setOptions

**_setOptions**(`options?`): `void`

Sets object's properties from options, for initialization only

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Options object |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).\_setOptions

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L9)

___

### \_setSVGBgOverlayColor

**_setSVGBgOverlayColor**(`markup`, `property`): `void`

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

[src/canvas/StaticCanvas.ts:1187](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1187)

___

### \_setSVGBgOverlayImage

**_setSVGBgOverlayImage**(`markup`, `property`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `property` | ``"backgroundImage"`` \| ``"overlayImage"`` |
| `reviver` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1172](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1172)

___

### \_setSVGHeader

**_setSVGHeader**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1011](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1011)

___

### \_setSVGObject

**_setSVGObject**(`markup`, `instance`, `reviver`): `void`

This is its own function because the Canvas ( non static ) requires extra code here

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `instance` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `reviver` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1161](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1161)

___

### \_setSVGObjects

**_setSVGObjects**(`markup`, `reviver`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `reviver` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:1148](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1148)

___

### \_setSVGPreamble

**_setSVGPreamble**(`markup`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string`[] |
| `options` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:995](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L995)

___

### \_toObject

**_toObject**(`instance`, `methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `methodName` | [`TValidToObjectMethod`](/apidocs/modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Defined in

[src/canvas/StaticCanvas.ts:862](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L862)

___

### \_toObjectMethod

**_toObjectMethod**(`methodName`, `propertiesToInclude?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | [`TValidToObjectMethod`](/apidocs/modules.md#tvalidtoobjectmethod) |
| `propertiesToInclude?` | `string`[] |

#### Returns

`any`

#### Defined in

[src/canvas/StaticCanvas.ts:837](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L837)

___

### absolutePan

**absolutePan**(`point`): `void`

Pan viewport so as to place point at top left corner of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | to move to |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:408](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L408)

___

### add

**add**(`...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Overrides

createCollectionMixin(CommonMethods\&lt;CanvasEvents\&gt;).add

#### Defined in

[src/canvas/StaticCanvas.ts:189](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L189)

___

### bringObjectForward

**bringObjectForward**(`object`, `intersecting?`): `boolean`

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object in front of next upper intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).bringObjectForward

#### Defined in

[src/Collection.ts:240](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L240)

___

### bringObjectToFront

**bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).bringObjectToFront

#### Defined in

[src/Collection.ts:194](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L194)

___

### calcOffset

**calcOffset**(): `Object`

Calculates canvas element offset relative to the document
This method is also attached as "resize" event handler of window

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[src/canvas/StaticCanvas.ts:251](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L251)

___

### calcViewportBoundaries

**calcViewportBoundaries**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Calculate the position of the 4 corner of canvas with current viewportTransform.
helps to determinate when an object is in the current rendering viewport

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

#### Defined in

[src/canvas/StaticCanvas.ts:505](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L505)

___

### cancelRequestedRender

**cancelRequestedRender**(): `void`

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:523](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L523)

___

### centerObject

**centerObject**(`object`): `void`

Centers object vertically and horizontally in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:732](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L732)

___

### centerObjectH

**centerObjectH**(`object`): `void`

Centers object horizontally in the canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:710](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L710)

___

### centerObjectV

**centerObjectV**(`object`): `void`

Centers object vertically in the canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:721](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L721)

___

### clear

**clear**(): `void`

Clears all contexts (background, main, top) of an instance

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:455](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L455)

___

### clearContext

**clearContext**(`ctx`): `void`

Clears specified context of canvas element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to clear |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:440](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L440)

___

### clone

**clone**(`properties?`): `Promise`\<[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>\>

Clones canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties?` | `string`[] | Array of properties to include in the cloned canvas and children |

#### Returns

`Promise`\<[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>\>

#### Defined in

[src/canvas/StaticCanvas.ts:1303](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1303)

___

### cloneWithoutData

**cloneWithoutData**(): [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>

Clones canvas instance without cloning existing data.
This essentially copies canvas dimensions since loadFromJSON does not affect canvas size.

#### Returns

[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>

#### Defined in

[src/canvas/StaticCanvas.ts:1313](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1313)

___

### collectObjects

**collectObjects**(`bbox`, `options?`): `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bbox` | [`TBBox`](/apidocs/modules.md#tbbox) | `undefined` | a bounding box in scene coordinates |
| `options` | `Object` | `{}` | an object with includeIntersecting |
| `options.includeIntersecting?` | `boolean` | `true` | - |

#### Returns

`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).collectObjects

#### Defined in

[src/Collection.ts:326](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L326)

___

### complexity

**complexity**(): `number`

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).complexity

#### Defined in

[src/Collection.ts:165](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L165)

___

### contains

**contains**(`object`, `deep?`): `boolean`

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](/apidocs/classes/FabricObject.md#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to check against |
| `deep?` | `boolean` | `true` to check all descendants, `false` to check only `_objects` |

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).contains

#### Defined in

[src/Collection.ts:148](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L148)

___

### createSVGClipPathMarkup

**createSVGClipPathMarkup**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TSVGExportOptions`](/apidocs/modules.md#tsvgexportoptions) |

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1056](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1056)

___

### createSVGFontFacesMarkup

**createSVGFontFacesMarkup**(): `string`

Creates markup containing SVG font faces,
font URLs for font faces must be collected by developers
and are not extracted from the DOM by fabricjs

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1099](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1099)

___

### createSVGRefElementsMarkup

**createSVGRefElementsMarkup**(): `string`

Creates markup containing SVG referenced elements like patterns, gradients etc.

#### Returns

`string`

#### Defined in

[src/canvas/StaticCanvas.ts:1071](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1071)

___

### destroy

**destroy**(): `void`

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

[src/canvas/StaticCanvas.ts:1468](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1468)

___

### dispose

**dispose**(): `Promise`\<`boolean`\>

Waits until rendering has settled to destroy the canvas

#### Returns

`Promise`\<`boolean`\>

a promise resolving to `true` once the canvas has been destroyed or to `false` if the canvas has was already destroyed

**`Throws`**

if aborted by a consequent call

#### Defined in

[src/canvas/StaticCanvas.ts:1429](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1429)

___

### drawClipPathOnCanvas

**drawClipPathOnCanvas**(`ctx`, `clipPath`): `void`

Paint the cached clipPath on the lowerCanvasEl

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | - |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:586](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L586)

___

### drawControls

**drawControls**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:530](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L530)

___

### findNewLowerIndex

**findNewLowerIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).findNewLowerIndex

#### Defined in

[src/Collection.ts:272](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L272)

___

### findNewUpperIndex

**findNewUpperIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).findNewUpperIndex

#### Defined in

[src/Collection.ts:295](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L295)

___

### fire

**fire**\<`K`\>(`eventName`, `options?`): `void`

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

createCollectionMixin(CommonMethods\<CanvasEvents\>).fire

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L159)

___

### forEachObject

**forEachObject**(`callback`): `void`

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`object`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, `index`: `number`, `array`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]) => `any` | Callback invoked with current object as first argument, index - as second and an array of all objects - as third. |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).forEachObject

#### Defined in

[src/Collection.ts:91](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L91)

___

### get

**get**(`property`): `any`

Basic getter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property name |

#### Returns

`any`

value of a property

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).get

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L59)

___

### getCenter

**getCenter**(): `Object`

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

[src/canvas/StaticCanvas.ts:692](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L692)

___

### getCenterPoint

**getCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns coordinates of a center of canvas.

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/canvas/StaticCanvas.ts:703](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L703)

___

### getContext

**getContext**(): `CanvasRenderingContext2D`

Returns context of canvas where objects are drawn

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[src/canvas/StaticCanvas.ts:448](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L448)

___

### getElement

**getElement**(): `HTMLCanvasElement`

Returns &lt;canvas> element corresponding to this instance

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:432](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L432)

___

### getHeight

**getHeight**(): `number`

Returns canvas height (in px)

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:267](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L267)

___

### getObjects

**getObjects**(`...types?`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Returns an array of children objects of this instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...types?` | `string`[] | When specified, only objects of these types are returned |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).getObjects

#### Defined in

[src/Collection.ts:108](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L108)

___

### getRetinaScaling

**getRetinaScaling**(): `number`

#### Returns

`number`

retinaScaling if applied, otherwise 1;

#### Defined in

[src/canvas/StaticCanvas.ts:243](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L243)

___

### getVpCenter

**getVpCenter**(): [`Point`](/apidocs/classes/Point.md)

Calculate the point in canvas that correspond to the center of actual viewport.

#### Returns

[`Point`](/apidocs/classes/Point.md)

vpCenter, viewport center

#### Defined in

[src/canvas/StaticCanvas.ts:770](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L770)

___

### getWidth

**getWidth**(): `number`

Returns canvas width (in px)

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:259](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L259)

___

### getZoom

**getZoom**(): `number`

Returns canvas zoom level

#### Returns

`number`

#### Defined in

[src/canvas/StaticCanvas.ts:347](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L347)

___

### initElements

**initElements**(`el?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el?` | `string` \| `HTMLCanvasElement` |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:185](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L185)

___

### insertAt

**insertAt**(`index`, `...objects`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Overrides

createCollectionMixin(CommonMethods\&lt;CanvasEvents\&gt;).insertAt

#### Defined in

[src/canvas/StaticCanvas.ts:195](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L195)

___

### isEmpty

**isEmpty**(): `boolean`

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).isEmpty

#### Defined in

[src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L128)

___

### item

**item**(`index`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Returns object at specified index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

object at index

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).item

#### Defined in

[src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L120)

___

### loadFromJSON

**loadFromJSON**(`json`, `reviver?`, `options?`): `Promise`\<[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>\>

Populates canvas with data from the specified JSON.
JSON format must conform to the one of fabric.Canvas#toJSON

**IMPORTANT**: It is recommended to abort loading tasks before calling this method to prevent race conditions and unnecessary networking

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `string` \| `Record`\<`string`, `any`\> | JSON string or object |
| `reviver?` | \<T\>(`serializedObj`: `Record`\<`string`, `any`\>, `instance`: `T`) => `void` | Method for further parsing of JSON elements, called after each fabric object created. |
| `options?` | [`Abortable`](/apidocs/modules.md#abortable) | options |

#### Returns

`Promise`\<[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>\>

instance

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-3#deserialization](http://fabricjs.com/fabric-intro-part-3#deserialization)

**`See`**

[demo](http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle)

**`Example`**

```ts
canvas.loadFromJSON(json).then((canvas) => canvas.requestRenderAll());
```

**`Example`**

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

[src/canvas/StaticCanvas.ts:1252](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1252)

___

### moveObjectTo

**moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `index` | `number` | Position to move to |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).moveObjectTo

#### Defined in

[src/Collection.ts:262](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L262)

___

### off

**off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).off

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L120)

**off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`\<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).off

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L125)

**off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).off

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L129)

___

### on

**on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  } \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](/apidocs/interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| \{ `drawables`: \{ `backgroundImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } ; `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `subTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `ctx`: `CanvasRenderingContext2D`  } \| \{ `ctx`: `CanvasRenderingContext2D`  } \| [`LayoutBeforeEvent`](/apidocs/modules.md#layoutbeforeevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  } \| [`LayoutAfterEvent`](/apidocs/modules.md#layoutafterevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `transform`: [`Transform`](/apidocs/modules.md#transform)  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

on

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).on

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L23)

**on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).on

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L27)

___

### once

**once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md) |
| `E` | extends [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  } \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](/apidocs/interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| \{ `drawables`: \{ `backgroundImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `overlayImage?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } ; `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `subTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `target`: [`IText`](/apidocs/classes/IText.md)\<`Partial`\<[`ITextProps`](/apidocs/interfaces/ITextProps.md)\>, [`SerializedITextProps`](/apidocs/interfaces/SerializedITextProps.md), `ITextEvents`\>  } \| \{ `ctx`: `CanvasRenderingContext2D`  } \| \{ `ctx`: `CanvasRenderingContext2D`  } \| [`LayoutBeforeEvent`](/apidocs/modules.md#layoutbeforeevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  } \| [`LayoutAfterEvent`](/apidocs/modules.md#layoutafterevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| [`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `transform`: [`Transform`](/apidocs/modules.md#transform)  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `selected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `deselected`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

once

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).once

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L62)

**once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<[`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).once

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L66)

___

### relativePan

**relativePan**(`point`): `void`

Pans viewpoint relatively

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | (position vector) to move by |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:419](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L419)

___

### remove

**remove**(`...objects`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Overrides

createCollectionMixin(CommonMethods\&lt;CanvasEvents\&gt;).remove

#### Defined in

[src/canvas/StaticCanvas.ts:201](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L201)

___

### renderAll

**renderAll**(): `void`

Renders the canvas

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:469](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L469)

___

### renderAndReset

**renderAndReset**(): `void`

Function created to be instance bound at initialization
used in requestAnimationFrame rendering
Let the fabricJS call it. If you call it manually you could have more
animationFrame stacking on to of each other
for an imperative rendering, use canvas.renderAll

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:485](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L485)

___

### renderCanvas

**renderCanvas**(`ctx`, `objects`): `void`

Renders background, objects, overlay and controls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | to render |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:539](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L539)

___

### requestRenderAll

**requestRenderAll**(): `void`

Append a renderAll request to next animation frame.
unless one is already in progress, in that case nothing is done
a boolean flag will avoid appending more.

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:495](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L495)

___

### sendObjectBackwards

**sendObjectBackwards**(`object`, `intersecting?`): `boolean`

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object behind next lower intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).sendObjectBackwards

#### Defined in

[src/Collection.ts:214](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L214)

___

### sendObjectToBack

**sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send to back |

#### Returns

`boolean`

true if change occurred

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).sendObjectToBack

#### Defined in

[src/Collection.ts:178](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L178)

___

### set

**set**(`key`, `value?`): [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`\<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).set

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L29)

___

### setDimensions

**setDimensions**(`dimensions`, `options?`): `void`

Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dimensions` | `Partial`\<[`TSize`](/apidocs/modules.md#tsize)\> | Object with width/height properties |
| `options?` | [`TCanvasSizeOptions`](/apidocs/modules.md#tcanvassizeoptions) | Options object |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:330](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L330)

___

### setHeight

**setHeight**(`value`, `options?`): `void`

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

[src/canvas/StaticCanvas.ts:291](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L291)

___

### setViewportTransform

**setViewportTransform**(`vpt`): `void`

Sets viewport transformation of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vpt` | [`TMat2D`](/apidocs/modules.md#tmat2d) | a Canvas 2D API transform matrix |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:355](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L355)

___

### setWidth

**setWidth**(`value`, `options?`): `void`

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

[src/canvas/StaticCanvas.ts:279](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L279)

___

### setZoom

**setZoom**(`value`): `void`

Sets zoom level of this canvas instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | to set zoom to, less than 1 zooms out |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:400](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L400)

___

### size

**size**(): `number`

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).size

#### Defined in

[src/Collection.ts:136](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L136)

___

### toCanvasElement

**toCanvasElement**(`multiplier?`, `options?`): `HTMLCanvasElement`

Create a new HTMLCanvas element painted with the current canvas content.
No need to resize the actual one or repaint it.
Will transfer object ownership to a new canvas, paint it, and set everything back.
This is an intermediary step used to get to a dataUrl but also it is useful to
create quick image copies of a canvas without passing for the dataUrl string

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `multiplier?` | `number` | `1` | a zoom factor. |
| `options?` | [`TToCanvasElementOptions`](/apidocs/modules.md#ttocanvaselementoptions)\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | `undefined` | Cropping informations |

#### Returns

`HTMLCanvasElement`

#### Defined in

[src/canvas/StaticCanvas.ts:1389](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1389)

___

### toDataURL

**toDataURL**(`options?`): `string`

Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TDataUrlOptions`](/apidocs/modules.md#tdataurloptions)\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | Options object |

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

**`See`**

[demo](https://jsfiddle.net/xsjua1rd/)

**`Example`**

```ts
var dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8
});
```

**`Example`**

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

```ts
var dataURL = canvas.toDataURL({
  format: 'png',
  multiplier: 2
});
```

**`Example`**

```ts
var myObject;
var dataURL = canvas.toDataURL({
  filter: (object) => object.isContainedWithinObject(myObject) || object.intersectsWithObject(myObject)
});
```

#### Defined in

[src/canvas/StaticCanvas.ts:1358](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1358)

___

### toDatalessJSON

**toDatalessJSON**(`propertiesToInclude?`): `any`

Returns dataless JSON representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

json string

#### Defined in

[src/canvas/StaticCanvas.ts:793](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L793)

___

### toDatalessObject

**toDatalessObject**(`propertiesToInclude?`): `any`

Returns dataless object representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

object representation of an instance

#### Defined in

[src/canvas/StaticCanvas.ts:830](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L830)

___

### toJSON

**toJSON**(): `any`

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

```ts
var json = canvas.toJSON();
```

**`Example`**

```ts
var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY']);
```

**`Example`**

```ts
var json = canvas.toJSON();
```

#### Defined in

[src/canvas/StaticCanvas.ts:821](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L821)

___

### toObject

**toObject**(`propertiesToInclude?`): `any`

Returns object representation of canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

object representation of an instance

#### Defined in

[src/canvas/StaticCanvas.ts:802](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L802)

___

### toSVG

**toSVG**(`options?`, `reviver?`): `string`

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

```ts
var svg = canvas.toSVG();
```

**`Example`**

```ts
var svg = canvas.toSVG({suppressPreamble: true});
```

**`Example`**

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

```ts
var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
```

**`Example`**

```ts
var svg = canvas.toSVG(null, function(svg) {
  return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
});
```

#### Defined in

[src/canvas/StaticCanvas.ts:969](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L969)

___

### toString

**toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

string representation of an instance

#### Defined in

[src/canvas/StaticCanvas.ts:1488](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L1488)

___

### toggle

**toggle**(`property`): [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<`EventSpec`\>

#### Inherited from

createCollectionMixin(CommonMethods\<CanvasEvents\>).toggle

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L46)

___

### viewportCenterObject

**viewportCenterObject**(`object`): `void`

Centers object vertically and horizontally in the viewport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:740](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L740)

___

### viewportCenterObjectH

**viewportCenterObjectH**(`object`): `void`

Centers object horizontally in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:748](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L748)

___

### viewportCenterObjectV

**viewportCenterObjectV**(`object`): `void`

Centers object Vertically in the viewport, object.top is unchanged

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to center vertically and horizontally |

#### Returns

`void`

#### Defined in

[src/canvas/StaticCanvas.ts:759](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L759)

___

### zoomToPoint

**zoomToPoint**(`point`, `value`): `void`

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

[src/canvas/StaticCanvas.ts:383](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L383)

___

### getDefaults

**getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

[src/canvas/StaticCanvas.ts:162](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L162)
