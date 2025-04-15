---
editUrl: false
next: false
prev: false
title: "Convolute"
---

Defined in: [src/filters/Convolute.ts:56](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L56)

Adapted from <a href="http://www.html5rocks.com/en/tutorials/canvas/imagefilters/">html5rocks article</a>

## Examples

```ts
const filter = new Convolute({
  matrix: [ 0, -1,  0,
           -1,  5, -1,
            0, -1,  0 ]
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

```ts
const filter = new Convolute({
  matrix: [ 1/9, 1/9, 1/9,
            1/9, 1/9, 1/9,
            1/9, 1/9, 1/9 ]
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

```ts
const filter = new Convolute({
  matrix: [ 1,   1,  1,
            1, 0.7, -1,
           -1,  -1, -1 ]
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

```ts
const filter = new Convolute({
  opaque: true,
  matrix: [ 1,   1,  1,
            1, 0.7, -1,
           -1,  -1, -1 ]
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

## Extends

- [`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/)\<`"Convolute"`, `ConvoluteOwnProps`\>

## Constructors

### Constructor

> **new Convolute**(`options?`): `Convolute`

Defined in: [src/filters/BaseFilter.ts:57](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L57)

Constructor

#### Parameters

##### options?

`object` & `Partial`\<`ConvoluteOwnProps`\> & `Record`\<`string`, `any`\> = `{}`

Options object

#### Returns

`Convolute`

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`constructor`](/api/fabric/namespaces/filters/classes/basefilter/#constructor)

## Properties

### matrix

> **matrix**: `number`[]

Defined in: [src/filters/Convolute.ts:65](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L65)

***

### opaque

> **opaque**: `boolean`

Defined in: [src/filters/Convolute.ts:60](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L60)

***

### defaults

> `static` **defaults**: `ConvoluteOwnProps` = `convoluteDefaultValues`

Defined in: [src/filters/Convolute.ts:69](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L69)

#### Overrides

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`defaults`](/api/fabric/namespaces/filters/classes/basefilter/#defaults)

***

### type

> `static` **type**: `string` = `'Convolute'`

Defined in: [src/filters/Convolute.ts:67](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L67)

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

Defined in: [src/filters/Convolute.ts:71](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L71)

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

Defined in: [src/filters/Convolute.ts:89](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L89)

Apply the Brightness operation to a Uint8ClampedArray representing the pixels of an image.

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

> **getCacheKey**(): `"Convolute_3_1"` \| `"Convolute_3_0"` \| `"Convolute_5_1"` \| `"Convolute_5_0"` \| `"Convolute_7_1"` \| `"Convolute_7_0"` \| `"Convolute_9_1"` \| `"Convolute_9_0"`

Defined in: [src/filters/Convolute.ts:73](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L73)

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`"Convolute_3_1"` \| `"Convolute_3_0"` \| `"Convolute_5_1"` \| `"Convolute_5_0"` \| `"Convolute_7_1"` \| `"Convolute_7_0"` \| `"Convolute_9_1"` \| `"Convolute_9_0"`

#### Overrides

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`getCacheKey`](/api/fabric/namespaces/filters/classes/basefilter/#getcachekey)

***

### getFragmentSource()

> **getFragmentSource**(): `string`

Defined in: [src/filters/Convolute.ts:79](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L79)

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

> **isNeutralState**(`options?`): `boolean`

Defined in: [src/filters/BaseFilter.ts:248](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L248)

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

Defined in: [src/filters/Convolute.ts:154](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L154)

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

> **toJSON**(): `object` & `ConvoluteOwnProps`

Defined in: [src/filters/BaseFilter.ts:407](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/BaseFilter.ts#L407)

Returns a JSON representation of an instance

#### Returns

`object` & `ConvoluteOwnProps`

JSON

#### Inherited from

[`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/).[`toJSON`](/api/fabric/namespaces/filters/classes/basefilter/#tojson)

***

### toObject()

> **toObject**(): `object`

Defined in: [src/filters/Convolute.ts:165](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/Convolute.ts#L165)

Returns object representation of an instance

#### Returns

`object`

Object representation of an instance

##### matrix

> **matrix**: `number`[]

##### opaque

> **opaque**: `boolean`

##### type

> **type**: `"Convolute"`

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
