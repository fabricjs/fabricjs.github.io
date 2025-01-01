---
editUrl: false
next: false
prev: false
title: "BlendImage"
---

Defined in: [src/filters/BlendImage.ts:41](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L41)

Image Blend filter class

## Example

```ts
const filter = new filters.BlendColor({
 color: '#000',
 mode: 'multiply'
});

const filter = new BlendImage({
 image: fabricImageObject,
 mode: 'multiply'
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

## Extends

- [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`"BlendImage"`, `BlendImageOwnProps`\>

## Constructors

### new BlendImage()

> **new BlendImage**(`options`?): [`BlendImage`](/api/namespaces/filters/classes/blendimage/)

Defined in: [src/filters/BaseFilter.ts:57](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L57)

Constructor

#### Parameters

##### options?

`object` & `Partial`\<`BlendImageOwnProps`\> & `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`BlendImage`](/api/namespaces/filters/classes/blendimage/)

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`constructor`](/api/namespaces/filters/classes/basefilter/#constructors)

## Properties

### alpha

> **alpha**: `number`

Defined in: [src/filters/BlendImage.ts:62](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L62)

alpha value. represent the strength of the blend image operation.
not implemented.

***

### image

> **image**: [`FabricImage`](/api/classes/fabricimage/)

Defined in: [src/filters/BlendImage.ts:45](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L45)

Image to make the blend operation with.

***

### mode

> **mode**: `TBlendImageMode`

Defined in: [src/filters/BlendImage.ts:56](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L56)

Blend mode for the filter: either 'multiply' or 'mask'. 'multiply' will
multiply the values of each channel (R, G, B, and A) of the filter image by
their corresponding values in the base image. 'mask' will only look at the
alpha channel of the filter image, and apply those values to the base
image's alpha channel.

#### Default

```ts

```

***

### defaults

> `static` **defaults**: `BlendImageOwnProps` = `blendImageDefaultValues`

Defined in: [src/filters/BlendImage.ts:66](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L66)

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`defaults`](/api/namespaces/filters/classes/basefilter/#defaults)

***

### type

> `static` **type**: `string` = `'BlendImage'`

Defined in: [src/filters/BlendImage.ts:64](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L64)

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`type`](/api/namespaces/filters/classes/basefilter/#type)

***

### uniformLocations

> `static` **uniformLocations**: `string`[]

Defined in: [src/filters/BlendImage.ts:68](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L68)

Contains the uniform locations for the fragment shader.
uStepW and uStepH are handled by the BaseFilter, each filter class
needs to specify all the one that are needed

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`uniformLocations`](/api/namespaces/filters/classes/basefilter/#uniformlocations)

## Accessors

### type

#### Get Signature

> **get** **type**(): `Name`

Defined in: [src/filters/BaseFilter.ts:31](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L31)

Filter type

##### Default

```ts

```

##### Returns

`Name`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`type`](/api/namespaces/filters/classes/basefilter/#type-1)

## Methods

### \_setupFrameBuffer()

> **\_setupFrameBuffer**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:205](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L205)

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`_setupFrameBuffer`](/api/namespaces/filters/classes/basefilter/#_setupframebuffer)

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:232](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L232)

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`_swapTextures`](/api/namespaces/filters/classes/basefilter/#_swaptextures)

***

### applyTo()

> **applyTo**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:265](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L265)

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/) | [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyTo`](/api/namespaces/filters/classes/basefilter/#applyto)

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

Defined in: [src/filters/BlendImage.ts:122](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L122)

Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.

#### Parameters

##### options

[`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyTo2d`](/api/namespaces/filters/classes/basefilter/#applyto2d)

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Defined in: [src/filters/BlendImage.ts:82](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L82)

Apply this filter using webgl.

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyToWebGL`](/api/namespaces/filters/classes/basefilter/#applytowebgl)

***

### bindAdditionalTexture()

> **bindAdditionalTexture**(`gl`, `texture`, `textureUnit`): `void`

Defined in: [src/filters/BaseFilter.ts:334](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L334)

#### Parameters

##### gl

`WebGLRenderingContext`

##### texture

`WebGLTexture`

##### textureUnit

`number`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`bindAdditionalTexture`](/api/namespaces/filters/classes/basefilter/#bindadditionaltexture)

***

### calculateMatrix()

> **calculateMatrix**(): `number`[]

Defined in: [src/filters/BlendImage.ts:100](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L100)

Calculate a transformMatrix to adapt the image to blend over

#### Returns

`number`[]

***

### createHelpLayer()

> **createHelpLayer**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:370](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L370)

If needed by a 2d filter, this functions can create an helper canvas to be used
remember that options.targetCanvas is available for use till end of chain.

#### Parameters

##### options

[`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`createHelpLayer`](/api/namespaces/filters/classes/basefilter/#createhelplayer)

***

### createProgram()

> **createProgram**(`gl`, `fragmentSource`, `vertexSource`): `object`

Defined in: [src/filters/BaseFilter.ts:83](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L83)

Compile this filter's shader program.

#### Parameters

##### gl

`WebGLRenderingContext`

The GL canvas context to use for shader compilation.

##### fragmentSource

`string` = `...`

fragmentShader source for compilation

##### vertexSource

`string` = `...`

vertexShader source for compilation

#### Returns

`object`

##### attributeLocations

> **attributeLocations**: [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/)

##### program

> **program**: `WebGLProgram`

##### uniformLocations

> **uniformLocations**: [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`createProgram`](/api/namespaces/filters/classes/basefilter/#createprogram)

***

### createTexture()

> **createTexture**(`backend`, `image`): `null` \| `WebGLTexture`

Defined in: [src/filters/BlendImage.ts:90](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L90)

#### Parameters

##### backend

[`WebGLFilterBackend`](/api/classes/webglfilterbackend/)

##### image

[`FabricImage`](/api/classes/fabricimage/)

#### Returns

`null` \| `WebGLTexture`

***

### getAttributeLocations()

> **getAttributeLocations**(`gl`, `program`): [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/)

Defined in: [src/filters/BaseFilter.ts:153](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L153)

Return a map of attribute names to WebGLAttributeLocation objects.

#### Parameters

##### gl

`WebGLRenderingContext`

The canvas context used to compile the shader program.

##### program

`WebGLProgram`

The shader program from which to take attribute locations.

#### Returns

[`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/)

A map of attribute names to attribute locations.

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getAttributeLocations`](/api/namespaces/filters/classes/basefilter/#getattributelocations)

***

### getCacheKey()

> **getCacheKey**(): `string`

Defined in: [src/filters/BlendImage.ts:70](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L70)

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getCacheKey`](/api/namespaces/filters/classes/basefilter/#getcachekey)

***

### getFragmentSource()

> **getFragmentSource**(): `string`

Defined in: [src/filters/BlendImage.ts:74](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L74)

#### Returns

`string`

#### Overrides

`BaseFilter.getFragmentSource`

***

### getUniformLocations()

> **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

Defined in: [src/filters/BaseFilter.ts:169](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L169)

Return a map of uniform names to WebGLUniformLocation objects.

#### Parameters

##### gl

`WebGLRenderingContext`

The canvas context used to compile the shader program.

##### program

`WebGLProgram`

The shader program from which to take uniform locations.

#### Returns

[`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of uniform names to uniform locations.

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getUniformLocations`](/api/namespaces/filters/classes/basefilter/#getuniformlocations)

***

### getVertexSource()

> **getVertexSource**(): `string`

Defined in: [src/filters/BlendImage.ts:78](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L78)

#### Returns

`string`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getVertexSource`](/api/namespaces/filters/classes/basefilter/#getvertexsource)

***

### isNeutralState()

> **isNeutralState**(`options`?): `boolean`

Defined in: [src/filters/BaseFilter.ts:248](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L248)

Generic isNeutral implementation for one parameter based filters.
Used only in image applyFilters to discard filters that will not have an effect
on the image
Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )

#### Parameters

##### options?

`any`

#### Returns

`boolean`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`isNeutralState`](/api/namespaces/filters/classes/basefilter/#isneutralstate)

***

### retrieveShader()

> **retrieveShader**(`options`): [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

Defined in: [src/filters/BaseFilter.ts:295](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L295)

Retrieves the cached shader.

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

[`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

the compiled program shader

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`retrieveShader`](/api/namespaces/filters/classes/basefilter/#retrieveshader)

***

### sendAttributeData()

> **sendAttributeData**(`gl`, `attributeLocations`, `aPositionData`): `void`

Defined in: [src/filters/BaseFilter.ts:192](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L192)

Send attribute data from this filter to its shader program on the GPU.

#### Parameters

##### gl

`WebGLRenderingContext`

The canvas context used to compile the shader program.

##### attributeLocations

`Record`\<`string`, `number`\>

A map of shader attribute names to their locations.

##### aPositionData

`Float32Array`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`sendAttributeData`](/api/namespaces/filters/classes/basefilter/#sendattributedata)

***

### sendUniformData()

> **sendUniformData**(`gl`, `uniformLocations`): `void`

Defined in: [src/filters/BlendImage.ts:179](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L179)

Send data from this filter to its shader program's uniforms.

#### Parameters

##### gl

`WebGLRenderingContext`

The GL canvas context used to compile this filter's shader.

##### uniformLocations

[`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of string uniform names to WebGLUniformLocation objects

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`sendUniformData`](/api/namespaces/filters/classes/basefilter/#senduniformdata)

***

### toJSON()

> **toJSON**(): `object` & `BlendImageOwnProps`

Defined in: [src/filters/BaseFilter.ts:407](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L407)

Returns a JSON representation of an instance

#### Returns

`object` & `BlendImageOwnProps`

JSON

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toJSON`](/api/namespaces/filters/classes/basefilter/#tojson)

***

### toObject()

> **toObject**(): `object` & `BlendImageOwnProps`

Defined in: [src/filters/BlendImage.ts:194](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L194)

Returns object representation of an instance
TODO: Handle the possibility of missing image better.
As of now a BlendImage filter without image can't be used with fromObject

#### Returns

`object` & `BlendImageOwnProps`

Object representation of an instance

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toObject`](/api/namespaces/filters/classes/basefilter/#toobject)

***

### unbindAdditionalTexture()

> **unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

Defined in: [src/filters/BaseFilter.ts:345](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L345)

#### Parameters

##### gl

`WebGLRenderingContext`

##### textureUnit

`number`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`unbindAdditionalTexture`](/api/namespaces/filters/classes/basefilter/#unbindadditionaltexture)

***

### fromObject()

> `static` **fromObject**(`object`, `options`?): `Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`"BlendImage"`, `BlendImageOwnProps`, `BlendImageOwnProps`\>\>

Defined in: [src/filters/BlendImage.ts:212](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BlendImage.ts#L212)

Create filter instance from an object representation

#### Parameters

##### object

`Record`\<`string`, `any`\>

Object to create an instance from

##### options?

###### signal

`AbortSignal`

handle aborting image loading, see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal

#### Returns

`Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`"BlendImage"`, `BlendImageOwnProps`, `BlendImageOwnProps`\>\>

#### Static

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`fromObject`](/api/namespaces/filters/classes/basefilter/#fromobject)
