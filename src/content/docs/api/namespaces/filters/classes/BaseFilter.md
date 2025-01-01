---
editUrl: false
next: false
prev: false
title: "BaseFilter"
---

Defined in: [src/filters/BaseFilter.ts:21](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L21)

## Extended by

- [`BlendColor`](/api/namespaces/filters/classes/blendcolor/)
- [`BlendImage`](/api/namespaces/filters/classes/blendimage/)
- [`Blur`](/api/namespaces/filters/classes/blur/)
- [`Brightness`](/api/namespaces/filters/classes/brightness/)
- [`ColorMatrix`](/api/namespaces/filters/classes/colormatrix/)
- [`Composed`](/api/namespaces/filters/classes/composed/)
- [`Contrast`](/api/namespaces/filters/classes/contrast/)
- [`Convolute`](/api/namespaces/filters/classes/convolute/)
- [`Gamma`](/api/namespaces/filters/classes/gamma/)
- [`Grayscale`](/api/namespaces/filters/classes/grayscale/)
- [`Invert`](/api/namespaces/filters/classes/invert/)
- [`Noise`](/api/namespaces/filters/classes/noise/)
- [`Pixelate`](/api/namespaces/filters/classes/pixelate/)
- [`RemoveColor`](/api/namespaces/filters/classes/removecolor/)
- [`Resize`](/api/namespaces/filters/classes/resize/)
- [`Saturation`](/api/namespaces/filters/classes/saturation/)
- [`Vibrance`](/api/namespaces/filters/classes/vibrance/)

## Type Parameters

• **Name** *extends* `string`

• **OwnProps** *extends* `Record`\<`string`, `any`\> = `object`

• **SerializedProps** *extends* `Record`\<`string`, `any`\> = `OwnProps`

## Constructors

### new BaseFilter()

> **new BaseFilter**\<`Name`, `OwnProps`, `SerializedProps`\>(`options`?): [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`Name`, `SerializedProps`\>

Defined in: [src/filters/BaseFilter.ts:57](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L57)

Constructor

#### Parameters

##### options?

`object` & `Partial`\<`OwnProps`\> & `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`Name`, `SerializedProps`\>

## Properties

### defaults

> `static` **defaults**: `Record`\<`string`, `unknown`\>

Defined in: [src/filters/BaseFilter.ts:51](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L51)

***

### type

> `static` **type**: `string` = `'BaseFilter'`

Defined in: [src/filters/BaseFilter.ts:42](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L42)

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

***

### uniformLocations

> `static` **uniformLocations**: `string`[] = `[]`

Defined in: [src/filters/BaseFilter.ts:49](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L49)

Contains the uniform locations for the fragment shader.
uStepW and uStepH are handled by the BaseFilter, each filter class
needs to specify all the one that are needed

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

## Methods

### \_setupFrameBuffer()

> **\_setupFrameBuffer**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:205](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L205)

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:232](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L232)

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

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

***

### applyTo2d()

> **applyTo2d**(`_options`): `void`

Defined in: [src/filters/BaseFilter.ts:275](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L275)

#### Parameters

##### \_options

[`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:315](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L315)

Apply this filter using webgl.

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

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

***

### getCacheKey()

> **getCacheKey**(): `string`

Defined in: [src/filters/BaseFilter.ts:284](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L284)

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

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

***

### getVertexSource()

> **getVertexSource**(): `string`

Defined in: [src/filters/BaseFilter.ts:72](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L72)

#### Returns

`string`

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

***

### sendUniformData()

> **sendUniformData**(`_gl`, `_uniformLocations`): `void`

Defined in: [src/filters/BaseFilter.ts:359](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L359)

Send uniform data from this filter to its shader program on the GPU.

Intended to be overridden by subclasses.

#### Parameters

##### \_gl

`WebGLRenderingContext`

The canvas context used to compile the shader program.

##### \_uniformLocations

[`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

A map of shader uniform names to their locations.

#### Returns

`void`

***

### toJSON()

> **toJSON**(): `object` & `SerializedProps`

Defined in: [src/filters/BaseFilter.ts:407](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L407)

Returns a JSON representation of an instance

#### Returns

`object` & `SerializedProps`

JSON

***

### toObject()

> **toObject**(): `object` & `SerializedProps`

Defined in: [src/filters/BaseFilter.ts:387](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L387)

Returns object representation of an instance
It will automatically export the default values of a filter,
stored in the static defaults property.

#### Returns

`object` & `SerializedProps`

Object representation of an instance

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

***

### fromObject()

> `static` **fromObject**(`__namedParameters`, `_options`): `Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`\>\>

Defined in: [src/filters/BaseFilter.ts:412](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L412)

#### Parameters

##### \_\_namedParameters

`Record`\<`string`, `any`\>

##### \_options

[`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`\>\>
