---
editUrl: false
next: false
prev: false
title: "Pixelate"
---

Defined in: [src/filters/Pixelate.ts:23](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/Pixelate.ts#L23)

Pixelate filter class

## Example

```ts
const filter = new Pixelate({
  blocksize: 8
});
object.filters.push(filter);
object.applyFilters();
```

## Extends

- [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`"Pixelate"`, `PixelateOwnProps`\>

## Constructors

### new Pixelate()

> **new Pixelate**(`options`?): [`Pixelate`](/api/namespaces/filters/classes/pixelate/)

Defined in: [src/filters/BaseFilter.ts:57](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L57)

Constructor

#### Parameters

##### options?

`object` & `Partial`\<`PixelateOwnProps`\> & `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

[`Pixelate`](/api/namespaces/filters/classes/pixelate/)

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`constructor`](/api/namespaces/filters/classes/basefilter/#constructors)

## Properties

### blocksize

> **blocksize**: `number`

Defined in: [src/filters/Pixelate.ts:24](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/Pixelate.ts#L24)

***

### defaults

> `static` **defaults**: `PixelateOwnProps` = `pixelateDefaultValues`

Defined in: [src/filters/Pixelate.ts:28](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/Pixelate.ts#L28)

#### Overrides

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`defaults`](/api/namespaces/filters/classes/basefilter/#defaults)

***

### type

> `static` **type**: `string` = `'Pixelate'`

Defined in: [src/filters/Pixelate.ts:26](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/Pixelate.ts#L26)

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

Defined in: [src/filters/Pixelate.ts:30](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/Pixelate.ts#L30)

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

Defined in: [src/filters/Pixelate.ts:38](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/Pixelate.ts#L38)

Apply the Pixelate operation to a Uint8ClampedArray representing the pixels of an image.

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

Defined in: [src/filters/BaseFilter.ts:315](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L315)

Apply this filter using webgl.

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

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

Defined in: [src/filters/BaseFilter.ts:284](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L284)

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getCacheKey`](/api/namespaces/filters/classes/basefilter/#getcachekey)

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

Defined in: [src/filters/BaseFilter.ts:72](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L72)

#### Returns

`string`

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`getVertexSource`](/api/namespaces/filters/classes/basefilter/#getvertexsource)

***

### isNeutralState()

> **isNeutralState**(): `boolean`

Defined in: [src/filters/Pixelate.ts:63](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/Pixelate.ts#L63)

Indicate when the filter is not gonna apply changes to the image

#### Returns

`boolean`

#### Overrides

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

Defined in: [src/filters/Pixelate.ts:77](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/Pixelate.ts#L77)

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

> **toJSON**(): `object` & `PixelateOwnProps`

Defined in: [src/filters/BaseFilter.ts:407](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L407)

Returns a JSON representation of an instance

#### Returns

`object` & `PixelateOwnProps`

JSON

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`toJSON`](/api/namespaces/filters/classes/basefilter/#tojson)

***

### toObject()

> **toObject**(): `object` & `PixelateOwnProps`

Defined in: [src/filters/BaseFilter.ts:387](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L387)

Returns object representation of an instance
It will automatically export the default values of a filter,
stored in the static defaults property.

#### Returns

`object` & `PixelateOwnProps`

Object representation of an instance

#### Inherited from

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

> `static` **fromObject**(`__namedParameters`, `_options`): `Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`\>\>

Defined in: [src/filters/BaseFilter.ts:412](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/filters/BaseFilter.ts#L412)

#### Parameters

##### \_\_namedParameters

`Record`\<`string`, `any`\>

##### \_options

[`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`\>\>

#### Inherited from

[`BaseFilter`](/api/namespaces/filters/classes/basefilter/).[`fromObject`](/api/namespaces/filters/classes/basefilter/#fromobject)
