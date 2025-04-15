---
editUrl: false
next: false
prev: false
title: "Gamma"
---

Defined in: [src/filters/Gamma.ts:27](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L27)

Gamma filter class

## Example

```ts
const filter = new Gamma({
  gamma: [1, 0.5, 2.1]
});
object.filters.push(filter);
object.applyFilters();
```

## Extends

- [`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/)\<*typeof* `GAMMA`, `GammaOwnProps`\>

## Constructors

### Constructor

> **new Gamma**(`options`): `Gamma`

Defined in: [src/filters/Gamma.ts:50](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L50)

#### Parameters

##### options

###### gamma?

`GammaInput`

#### Returns

`Gamma`

#### Overrides

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`constructor`](/api/fabric/namespaces/filters/classes/basefilter/#constructor)

## Properties

### gamma

> **gamma**: `GammaInput`

Defined in: [src/filters/Gamma.ts:33](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L33)

Gamma array value, from 0.01 to 2.2.

#### Param

#### Default

```ts

```

***

### rgbValues?

> `optional` **rgbValues**: `object`

Defined in: [src/filters/Gamma.ts:34](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L34)

#### b

> **b**: `Uint8Array`

#### g

> **g**: `Uint8Array`

#### r

> **r**: `Uint8Array`

***

### defaults

> `static` **defaults**: `GammaOwnProps` = `gammaDefaultValues`

Defined in: [src/filters/Gamma.ts:42](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L42)

#### Overrides

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`defaults`](/api/fabric/namespaces/filters/classes/basefilter/#defaults)

***

### type

> `static` **type**: `"Gamma"` = `GAMMA`

Defined in: [src/filters/Gamma.ts:40](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L40)

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`type`](/api/fabric/namespaces/filters/classes/basefilter/#type)

***

### uniformLocations

> `static` **uniformLocations**: `string`[]

Defined in: [src/filters/Gamma.ts:44](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L44)

Contains the uniform locations for the fragment shader.
uStepW and uStepH are handled by the BaseFilter, each filter class
needs to specify all the one that are needed

#### Overrides

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`uniformLocations`](/api/fabric/namespaces/filters/classes/basefilter/#uniformlocations)

## Accessors

### type

#### Get Signature

> **get** **type**(): `Name`

Defined in: [src/filters/BaseFilter.ts:31](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L31)

Filter type

##### Default

```ts

```

##### Returns

`Name`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`type`](/api/fabric/namespaces/filters/classes/basefilter/#type-1)

## Methods

### \_setupFrameBuffer()

> **\_setupFrameBuffer**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:205](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L205)

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`_setupFrameBuffer`](/api/fabric/namespaces/filters/classes/basefilter/#_setupframebuffer)

***

### \_swapTextures()

> **\_swapTextures**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:232](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L232)

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`_swapTextures`](/api/fabric/namespaces/filters/classes/basefilter/#_swaptextures)

***

### applyTo()

> **applyTo**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:265](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L265)

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/) | [`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`applyTo`](/api/fabric/namespaces/filters/classes/basefilter/#applyto)

***

### applyTo2d()

> **applyTo2d**(`options`): `void`

Defined in: [src/filters/Gamma.ts:65](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L65)

Apply the Gamma operation to a Uint8Array representing the pixels of an image.

#### Parameters

##### options

[`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Overrides

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`applyTo2d`](/api/fabric/namespaces/filters/classes/basefilter/#applyto2d)

***

### applyToWebGL()

> **applyToWebGL**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:315](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L315)

Apply this filter using webgl.

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`applyToWebGL`](/api/fabric/namespaces/filters/classes/basefilter/#applytowebgl)

***

### bindAdditionalTexture()

> **bindAdditionalTexture**(`gl`, `texture`, `textureUnit`): `void`

Defined in: [src/filters/BaseFilter.ts:334](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L334)

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

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`bindAdditionalTexture`](/api/fabric/namespaces/filters/classes/basefilter/#bindadditionaltexture)

***

### createHelpLayer()

> **createHelpLayer**(`options`): `void`

Defined in: [src/filters/BaseFilter.ts:370](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L370)

If needed by a 2d filter, this functions can create an helper canvas to be used
remember that options.targetCanvas is available for use till end of chain.

#### Parameters

##### options

[`T2DPipelineState`](/api/type-aliases/t2dpipelinestate/)

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`createHelpLayer`](/api/fabric/namespaces/filters/classes/basefilter/#createhelplayer)

***

### createProgram()

> **createProgram**(`gl`, `fragmentSource`, `vertexSource`): `object`

Defined in: [src/filters/BaseFilter.ts:83](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L83)

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

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`createProgram`](/api/fabric/namespaces/filters/classes/basefilter/#createprogram)

***

### getAttributeLocations()

> **getAttributeLocations**(`gl`, `program`): [`TWebGLAttributeLocationMap`](/api/type-aliases/twebglattributelocationmap/)

Defined in: [src/filters/BaseFilter.ts:153](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L153)

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

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`getAttributeLocations`](/api/fabric/namespaces/filters/classes/basefilter/#getattributelocations)

***

### getCacheKey()

> **getCacheKey**(): `string`

Defined in: [src/filters/BaseFilter.ts:284](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L284)

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`getCacheKey`](/api/fabric/namespaces/filters/classes/basefilter/#getcachekey)

***

### getFragmentSource()

> **getFragmentSource**(): `string`

Defined in: [src/filters/Gamma.ts:46](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L46)

#### Returns

`string`

#### Overrides

`BaseFilter.getFragmentSource`

***

### getUniformLocations()

> **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](/api/type-aliases/twebgluniformlocationmap/)

Defined in: [src/filters/BaseFilter.ts:169](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L169)

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

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`getUniformLocations`](/api/fabric/namespaces/filters/classes/basefilter/#getuniformlocations)

***

### getVertexSource()

> **getVertexSource**(): `string`

Defined in: [src/filters/BaseFilter.ts:72](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L72)

#### Returns

`string`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`getVertexSource`](/api/fabric/namespaces/filters/classes/basefilter/#getvertexsource)

***

### isNeutralState()

> **isNeutralState**(): `boolean`

Defined in: [src/filters/Gamma.ts:107](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L107)

Generic isNeutral implementation for one parameter based filters.
Used only in image applyFilters to discard filters that will not have an effect
on the image
Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )

#### Returns

`boolean`

#### Overrides

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`isNeutralState`](/api/fabric/namespaces/filters/classes/basefilter/#isneutralstate)

***

### retrieveShader()

> **retrieveShader**(`options`): [`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

Defined in: [src/filters/BaseFilter.ts:295](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L295)

Retrieves the cached shader.

#### Parameters

##### options

[`TWebGLPipelineState`](/api/type-aliases/twebglpipelinestate/)

#### Returns

[`TWebGLProgramCacheItem`](/api/type-aliases/twebglprogramcacheitem/)

the compiled program shader

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`retrieveShader`](/api/fabric/namespaces/filters/classes/basefilter/#retrieveshader)

***

### sendAttributeData()

> **sendAttributeData**(`gl`, `attributeLocations`, `aPositionData`): `void`

Defined in: [src/filters/BaseFilter.ts:192](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L192)

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

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`sendAttributeData`](/api/fabric/namespaces/filters/classes/basefilter/#sendattributedata)

***

### sendUniformData()

> **sendUniformData**(`gl`, `uniformLocations`): `void`

Defined in: [src/filters/Gamma.ts:100](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L100)

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

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`sendUniformData`](/api/fabric/namespaces/filters/classes/basefilter/#senduniformdata)

***

### toJSON()

> **toJSON**(): `object` & `GammaOwnProps`

Defined in: [src/filters/BaseFilter.ts:407](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L407)

Returns a JSON representation of an instance

#### Returns

`object` & `GammaOwnProps`

JSON

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`toJSON`](/api/fabric/namespaces/filters/classes/basefilter/#tojson)

***

### toObject()

> **toObject**(): `object`

Defined in: [src/filters/Gamma.ts:112](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Gamma.ts#L112)

Returns object representation of an instance
It will automatically export the default values of a filter,
stored in the static defaults property.

#### Returns

`object`

Object representation of an instance

##### gamma

> **gamma**: `GammaInput`

##### type

> **type**: `"Gamma"`

#### Overrides

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`toObject`](/api/fabric/namespaces/filters/classes/basefilter/#toobject)

***

### unbindAdditionalTexture()

> **unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

Defined in: [src/filters/BaseFilter.ts:345](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L345)

#### Parameters

##### gl

`WebGLRenderingContext`

##### textureUnit

`number`

#### Returns

`void`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`unbindAdditionalTexture`](/api/fabric/namespaces/filters/classes/basefilter/#unbindadditionaltexture)

***

### fromObject()

> `static` **fromObject**(`__namedParameters`, `_options`): `Promise`\<[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/)\<`string`, `object`, `object`\>\>

Defined in: [src/filters/BaseFilter.ts:412](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L412)

#### Parameters

##### \_\_namedParameters

`Record`\<`string`, `any`\>

##### \_options

[`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/)\<`string`, `object`, `object`\>\>

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`fromObject`](/api/fabric/namespaces/filters/classes/basefilter/#fromobject)
