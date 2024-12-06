---
editUrl: false
next: false
prev: false
title: "Grayscale"
---

Grayscale image filter class

## Example

```ts
const filter = new Grayscale();
object.filters.push(filter);
object.applyFilters();
```

## Extends

- [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`"Grayscale"`, `GrayscaleOwnProps`\>

## Constructors

### new Grayscale()

> **new Grayscale**(`options`?): [`Grayscale`](/api/namespaces/filters/classes/grayscale/)

Constructor

#### Parameters

• **options?**: `object` & `Partial`\<`GrayscaleOwnProps`\> & `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`Grayscale`](/api/namespaces/filters/classes/grayscale/)

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`constructor`](/api/namespaces/filters/classes/basefilter/#constructors)

#### Defined in

[src/filters/BaseFilter.ts:57](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L57)

## Properties

### mode

> **mode**: `TGrayscaleMode`

#### Defined in

[src/filters/Grayscale.ts:24](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/Grayscale.ts#L24)

***

### defaults

> `static` **defaults**: `GrayscaleOwnProps` = `grayscaleDefaultValues`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`defaults`](/api/namespaces/filters/classes/basefilter/#defaults)

#### Defined in

[src/filters/Grayscale.ts:28](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/Grayscale.ts#L28)

***

### type

> `static` **type**: `string` = `'Grayscale'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`type`](/api/namespaces/filters/classes/basefilter/#type)

#### Defined in

[src/filters/Grayscale.ts:26](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/Grayscale.ts#L26)

***

### uniformLocations

> `static` **uniformLocations**: `string`[]

Contains the uniform locations for the fragment shader.
uStepW and uStepH are handled by the BaseFilter, each filter class
needs to specify all the one that are needed

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`uniformLocations`](/api/namespaces/filters/classes/basefilter/#uniformlocations)

#### Defined in

[src/filters/Grayscale.ts:30](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/Grayscale.ts#L30)

## Accessors

### type

> `get` **type**(): `Name`

Filter type

#### Default

```ts

```

#### Returns

`Name`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`type`](/api/namespaces/filters/classes/basefilter/#type-1)

#### Defined in

[src/filters/BaseFilter.ts:31](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L31)

## Methods

### \_setupFrameBuffer()

> **\_setupFrameBuffer**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`_setupFrameBuffer`](/api/namespaces/filters/classes/basefilter/#_setupframebuffer)

#### Defined in

[src/filters/BaseFilter.ts:205](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L205)

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`_swapTextures`](/api/namespaces/filters/classes/basefilter/#_swaptextures)

#### Defined in

[src/filters/BaseFilter.ts:232](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L232)

***

### applyTo()

> **applyTo**(`options`): `void`

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/) \| [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyTo`](/api/namespaces/filters/classes/basefilter/#applyto)

#### Defined in

[src/filters/BaseFilter.ts:265](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L265)

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

Apply the Grayscale operation to a Uint8Array representing the pixels of an image.

#### Parameters

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyTo2d`](/api/namespaces/filters/classes/basefilter/#applyto2d)

#### Defined in

[src/filters/Grayscale.ts:38](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/Grayscale.ts#L38)

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`applyToWebGL`](/api/namespaces/filters/classes/basefilter/#applytowebgl)

#### Defined in

[src/filters/BaseFilter.ts:315](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L315)

***

### bindAdditionalTexture()

> **bindAdditionalTexture**(`gl`, `texture`, `textureUnit`): `void`

#### Parameters

• **gl**: `WebGLRenderingContext`

• **texture**: `WebGLTexture`

• **textureUnit**: `number`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`bindAdditionalTexture`](/api/namespaces/filters/classes/basefilter/#bindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:334](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L334)

***

### createHelpLayer()

> **createHelpLayer**(`options`): `void`

If needed by a 2d filter, this functions can create an helper canvas to be used
remember that options.targetCanvas is available for use till end of chain.

#### Parameters

• **options**: [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`createHelpLayer`](/api/namespaces/filters/classes/basefilter/#createhelplayer)

#### Defined in

[src/filters/BaseFilter.ts:370](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L370)

***

### createProgram()

> **createProgram**(`gl`, `fragmentSource`, `vertexSource`): `object`

Compile this filter's shader program.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context to use for shader compilation.

• **fragmentSource**: `string` = `...`

fragmentShader source for compilation

• **vertexSource**: `string` = `...`

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

#### Defined in

[src/filters/BaseFilter.ts:83](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L83)

***

### getAttributeLocations()

> **getAttributeLocations**(`gl`, `program`): [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/)

Return a map of attribute names to WebGLAttributeLocation objects.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **program**: `WebGLProgram`

The shader program from which to take attribute locations.

#### Returns

[`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/)

A map of attribute names to attribute locations.

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getAttributeLocations`](/api/namespaces/filters/classes/basefilter/#getattributelocations)

#### Defined in

[src/filters/BaseFilter.ts:153](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L153)

***

### getCacheKey()

> **getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getCacheKey`](/api/namespaces/filters/classes/basefilter/#getcachekey)

#### Defined in

[src/filters/Grayscale.ts:59](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/Grayscale.ts#L59)

***

### getFragmentSource()

> **getFragmentSource**(): `string`

#### Returns

`string`

#### Overrides

`BaseFilter.getFragmentSource`

#### Defined in

[src/filters/Grayscale.ts:63](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/Grayscale.ts#L63)

***

### getUniformLocations()

> **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

Return a map of uniform names to WebGLUniformLocation objects.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **program**: `WebGLProgram`

The shader program from which to take uniform locations.

#### Returns

[`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of uniform names to uniform locations.

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getUniformLocations`](/api/namespaces/filters/classes/basefilter/#getuniformlocations)

#### Defined in

[src/filters/BaseFilter.ts:169](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L169)

***

### getVertexSource()

> **getVertexSource**(): `string`

#### Returns

`string`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getVertexSource`](/api/namespaces/filters/classes/basefilter/#getvertexsource)

#### Defined in

[src/filters/BaseFilter.ts:72](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L72)

***

### isNeutralState()

> **isNeutralState**(): `boolean`

Grayscale filter isNeutralState implementation
The filter is never neutral
on the image

#### Returns

`boolean`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`isNeutralState`](/api/namespaces/filters/classes/basefilter/#isneutralstate)

#### Defined in

[src/filters/Grayscale.ts:86](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/Grayscale.ts#L86)

***

### retrieveShader()

> **retrieveShader**(`options`): [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

Retrieves the cached shader.

#### Parameters

• **options**: [`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

[`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

the compiled program shader

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`retrieveShader`](/api/namespaces/filters/classes/basefilter/#retrieveshader)

#### Defined in

[src/filters/BaseFilter.ts:295](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L295)

***

### sendAttributeData()

> **sendAttributeData**(`gl`, `attributeLocations`, `aPositionData`): `void`

Send attribute data from this filter to its shader program on the GPU.

#### Parameters

• **gl**: `WebGLRenderingContext`

The canvas context used to compile the shader program.

• **attributeLocations**: `Record`\<`string`, `number`\>

A map of shader attribute names to their locations.

• **aPositionData**: `Float32Array`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`sendAttributeData`](/api/namespaces/filters/classes/basefilter/#sendattributedata)

#### Defined in

[src/filters/BaseFilter.ts:192](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L192)

***

### sendUniformData()

> **sendUniformData**(`gl`, `uniformLocations`): `void`

Send data from this filter to its shader program's uniforms.

#### Parameters

• **gl**: `WebGLRenderingContext`

The GL canvas context used to compile this filter's shader.

• **uniformLocations**: [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of string uniform names to WebGLUniformLocation objects

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`sendUniformData`](/api/namespaces/filters/classes/basefilter/#senduniformdata)

#### Defined in

[src/filters/Grayscale.ts:73](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/Grayscale.ts#L73)

***

### toJSON()

> **toJSON**(): `object` & `GrayscaleOwnProps`

Returns a JSON representation of an instance

#### Returns

`object` & `GrayscaleOwnProps`

JSON

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toJSON`](/api/namespaces/filters/classes/basefilter/#tojson)

#### Defined in

[src/filters/BaseFilter.ts:407](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L407)

***

### toObject()

> **toObject**(): `object` & `GrayscaleOwnProps`

Returns object representation of an instance
It will automatically export the default values of a filter,
stored in the static defaults property.

#### Returns

`object` & `GrayscaleOwnProps`

Object representation of an instance

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toObject`](/api/namespaces/filters/classes/basefilter/#toobject)

#### Defined in

[src/filters/BaseFilter.ts:387](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L387)

***

### unbindAdditionalTexture()

> **unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

#### Parameters

• **gl**: `WebGLRenderingContext`

• **textureUnit**: `number`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`unbindAdditionalTexture`](/api/namespaces/filters/classes/basefilter/#unbindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:345](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L345)

***

### fromObject()

> `static` **fromObject**(`__namedParameters`, `_options`): `Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `object`, `object`\>\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `any`\>

• **\_options**: [`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `object`, `object`\>\>

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`fromObject`](/api/namespaces/filters/classes/basefilter/#fromobject)

#### Defined in

[src/filters/BaseFilter.ts:412](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/filters/BaseFilter.ts#L412)
