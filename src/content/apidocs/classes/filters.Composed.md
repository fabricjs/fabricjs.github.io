# Class: Composed

[filters](../modules/filters.md).Composed

A container class that knows how to apply a sequence of filters to an input image.

## Hierarchy

- [`BaseFilter`](filters.BaseFilter.md)

  ↳ **`Composed`**

## Table of contents

### Constructors

- [constructor](filters.Composed.md#constructor)

### Properties

- [mainParameter](filters.Composed.md#mainparameter)
- [subFilters](filters.Composed.md#subfilters)
- [vertexSource](filters.Composed.md#vertexsource)
- [defaults](filters.Composed.md#defaults)
- [type](filters.Composed.md#type)

### Accessors

- [type](filters.Composed.md#type-1)

### Methods

- [\_setupFrameBuffer](filters.Composed.md#_setupframebuffer)
- [\_swapTextures](filters.Composed.md#_swaptextures)
- [applyTo](filters.Composed.md#applyto)
- [applyTo2d](filters.Composed.md#applyto2d)
- [applyToWebGL](filters.Composed.md#applytowebgl)
- [bindAdditionalTexture](filters.Composed.md#bindadditionaltexture)
- [createHelpLayer](filters.Composed.md#createhelplayer)
- [createProgram](filters.Composed.md#createprogram)
- [getAttributeLocations](filters.Composed.md#getattributelocations)
- [getCacheKey](filters.Composed.md#getcachekey)
- [getFragmentSource](filters.Composed.md#getfragmentsource)
- [getMainParameter](filters.Composed.md#getmainparameter)
- [getUniformLocations](filters.Composed.md#getuniformlocations)
- [isNeutralState](filters.Composed.md#isneutralstate)
- [retrieveShader](filters.Composed.md#retrieveshader)
- [sendAttributeData](filters.Composed.md#sendattributedata)
- [sendUniformData](filters.Composed.md#senduniformdata)
- [setMainParameter](filters.Composed.md#setmainparameter)
- [toJSON](filters.Composed.md#tojson)
- [toObject](filters.Composed.md#toobject)
- [unbindAdditionalTexture](filters.Composed.md#unbindadditionaltexture)
- [fromObject](filters.Composed.md#fromobject)

## Constructors

### constructor

• **new Composed**(`«destructured»?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | { `subFilters?`: [`BaseFilter`](filters.BaseFilter.md)[]  } & `Record`<`string`, `any`\> |

#### Overrides

[BaseFilter](filters.BaseFilter.md).[constructor](filters.BaseFilter.md#constructor)

#### Defined in

[src/filters/Composed.ts:17](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Composed.ts#L17)

## Properties

### mainParameter

• `Optional` `Private` **mainParameter**: keyof [`Composed`](filters.Composed.md)

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[mainParameter](filters.BaseFilter.md#mainparameter)

#### Defined in

[src/filters/BaseFilter.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L51)

___

### subFilters

• **subFilters**: [`BaseFilter`](filters.BaseFilter.md)[]

A non sparse array of filters to apply

#### Defined in

[src/filters/Composed.ts:13](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Composed.ts#L13)

___

### vertexSource

• `Private` **vertexSource**: `string` = `vertexSource`

Array of attributes to send with buffers. do not modify

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[vertexSource](filters.BaseFilter.md#vertexsource)

#### Defined in

[src/filters/BaseFilter.ts:43](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L43)

___

### defaults

▪ `Static` **defaults**: `Record`<`string`, `any`\>

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[defaults](filters.BaseFilter.md#defaults)

#### Defined in

[src/filters/BaseFilter.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L37)

___

### type

▪ `Static` **type**: `string` = `'Composed'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[BaseFilter](filters.BaseFilter.md).[type](filters.BaseFilter.md#type)

#### Defined in

[src/filters/Composed.ts:15](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Composed.ts#L15)

## Accessors

### type

• `get` **type**(): `string`

Filter type

#### Returns

`string`

**`Default`**

```ts

```

#### Inherited from

BaseFilter.type

#### Defined in

[src/filters/BaseFilter.ts:24](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L24)

## Methods

### \_setupFrameBuffer

▸ **_setupFrameBuffer**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[_setupFrameBuffer](filters.BaseFilter.md#_setupframebuffer)

#### Defined in

[src/filters/BaseFilter.ts:188](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L188)

___

### \_swapTextures

▸ **_swapTextures**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[_swapTextures](filters.BaseFilter.md#_swaptextures)

#### Defined in

[src/filters/BaseFilter.ts:215](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L215)

___

### applyTo

▸ **applyTo**(`options`): `void`

Apply this container's filters to the input image provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[applyTo](filters.BaseFilter.md#applyto)

#### Defined in

[src/filters/Composed.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Composed.ts#L31)

___

### applyTo2d

▸ **applyTo2d**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[applyTo2d](filters.BaseFilter.md#applyto2d)

#### Defined in

[src/filters/BaseFilter.ts:273](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L273)

___

### applyToWebGL

▸ **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[applyToWebGL](filters.BaseFilter.md#applytowebgl)

#### Defined in

[src/filters/BaseFilter.ts:313](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L313)

___

### bindAdditionalTexture

▸ **bindAdditionalTexture**(`gl`, `texture`, `textureUnit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `WebGLRenderingContext` |
| `texture` | `WebGLTexture` |
| `textureUnit` | `number` |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[bindAdditionalTexture](filters.BaseFilter.md#bindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:332](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L332)

___

### createHelpLayer

▸ **createHelpLayer**(`options`): `void`

If needed by a 2d filter, this functions can create an helper canvas to be used
remember that options.targetCanvas is available for use till end of chain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[createHelpLayer](filters.BaseFilter.md#createhelplayer)

#### Defined in

[src/filters/BaseFilter.ts:378](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L378)

___

### createProgram

▸ **createProgram**(`gl`, `fragmentSource?`, `vertexSource?`): `Object`

Compile this filter's shader program.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The GL canvas context to use for shader compilation. |
| `fragmentSource` | `string` | fragmentShader source for compilation |
| `vertexSource` | `string` | vertexShader source for compilation |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `attributeLocations` | [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) |
| `program` | `WebGLProgram` |
| `uniformLocations` | [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) |

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[createProgram](filters.BaseFilter.md#createprogram)

#### Defined in

[src/filters/BaseFilter.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L76)

___

### getAttributeLocations

▸ **getAttributeLocations**(`gl`, `program`): [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap)

Return a map of attribute names to WebGLAttributeLocation objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The canvas context used to compile the shader program. |
| `program` | `WebGLProgram` | The shader program from which to take attribute locations. |

#### Returns

[`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap)

A map of attribute names to attribute locations.

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[getAttributeLocations](filters.BaseFilter.md#getattributelocations)

#### Defined in

[src/filters/BaseFilter.ts:144](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L144)

___

### getCacheKey

▸ **getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[getCacheKey](filters.BaseFilter.md#getcachekey)

#### Defined in

[src/filters/BaseFilter.ts:282](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L282)

___

### getFragmentSource

▸ `Protected` **getFragmentSource**(): `string`

#### Returns

`string`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[getFragmentSource](filters.BaseFilter.md#getfragmentsource)

#### Defined in

[src/filters/BaseFilter.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L65)

___

### getMainParameter

▸ **getMainParameter**(): `undefined` \| `string` \| [`BaseFilter`](filters.BaseFilter.md)[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| [`BaseFilter`](filters.BaseFilter.md)[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| BaseFilter[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLUniformLocationMap) \| ... 19 more ... \| undefined \| () => { `subFilters`: { `type`: `string`  }[] ; `type`: `string`  } \| () => { `type`: `string`  } \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => { `subFilters`: { `type`: `string`  }[] ; `type`: `string`  } \| () => { `type`: `string`  } \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void`

#### Returns

`undefined` \| `string` \| [`BaseFilter`](filters.BaseFilter.md)[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| [`BaseFilter`](filters.BaseFilter.md)[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| BaseFilter[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLUniformLocationMap) \| ... 19 more ... \| undefined \| () => { `subFilters`: { `type`: `string`  }[] ; `type`: `string`  } \| () => { `type`: `string`  } \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => { `subFilters`: { `type`: `string`  }[] ; `type`: `string`  } \| () => { `type`: `string`  } \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[getMainParameter](filters.BaseFilter.md#getmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:349](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L349)

___

### getUniformLocations

▸ **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)

Return a map of uniform names to WebGLUniformLocation objects.

Intended to be overridden by subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The canvas context used to compile the shader program. |
| `program` | `WebGLProgram` | The shader program from which to take uniform locations. |

#### Returns

[`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)

A map of uniform names to uniform locations.

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[getUniformLocations](filters.BaseFilter.md#getuniformlocations)

#### Defined in

[src/filters/BaseFilter.ts:162](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L162)

___

### isNeutralState

▸ **isNeutralState**(): `boolean`

Generic isNeutral implementation for one parameter based filters.
Used only in image applyFilters to discard filters that will not have an effect
on the image
Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )

#### Returns

`boolean`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[isNeutralState](filters.BaseFilter.md#isneutralstate)

#### Defined in

[src/filters/Composed.ts:52](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Composed.ts#L52)

___

### retrieveShader

▸ **retrieveShader**(`options`): [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem)

Retrieves the cached shader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) |

#### Returns

[`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem)

the compiled program shader

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[retrieveShader](filters.BaseFilter.md#retrieveshader)

#### Defined in

[src/filters/BaseFilter.ts:293](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L293)

___

### sendAttributeData

▸ **sendAttributeData**(`gl`, `attributeLocations`, `aPositionData`): `void`

Send attribute data from this filter to its shader program on the GPU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The canvas context used to compile the shader program. |
| `attributeLocations` | `Record`<`string`, `number`\> | A map of shader attribute names to their locations. |
| `aPositionData` | `Float32Array` | - |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[sendAttributeData](filters.BaseFilter.md#sendattributedata)

#### Defined in

[src/filters/BaseFilter.ts:175](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L175)

___

### sendUniformData

▸ **sendUniformData**(`gl`, `uniformLocations`): `void`

Send uniform data from this filter to its shader program on the GPU.

Intended to be overridden by subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The canvas context used to compile the shader program. |
| `uniformLocations` | [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) | A map of shader uniform names to their locations. |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[sendUniformData](filters.BaseFilter.md#senduniformdata)

#### Defined in

[src/filters/BaseFilter.ts:367](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L367)

___

### setMainParameter

▸ **setMainParameter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[setMainParameter](filters.BaseFilter.md#setmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:353](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L353)

___

### toJSON

▸ **toJSON**(): `Object`

Returns a JSON representation of an instance

#### Returns

`Object`

JSON

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[toJSON](filters.BaseFilter.md#tojson)

#### Defined in

[src/filters/BaseFilter.ts:403](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L403)

___

### toObject

▸ **toObject**(): `Object`

Serialize this filter into JSON.

#### Returns

`Object`

A JSON representation of this filter.

| Name | Type |
| :------ | :------ |
| `subFilters` | { `type`: `string`  }[] |
| `type` | `string` |

#### Overrides

[BaseFilter](filters.BaseFilter.md).[toObject](filters.BaseFilter.md#toobject)

#### Defined in

[src/filters/Composed.ts:45](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Composed.ts#L45)

___

### unbindAdditionalTexture

▸ **unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `WebGLRenderingContext` |
| `textureUnit` | `number` |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[unbindAdditionalTexture](filters.BaseFilter.md#unbindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:343](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L343)

___

### fromObject

▸ `Static` **fromObject**(`object`, `options?`): `Promise`<[`BaseFilter`](filters.BaseFilter.md)\>

Deserialize a JSON definition of a ComposedFilter into a concrete instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Record`<`string`, `any`\> | Object to create an instance from |
| `options?` | `Object` |  |
| `options.signal` | `AbortSignal` | handle aborting `BlendImage` filter loading, see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal |

#### Returns

`Promise`<[`BaseFilter`](filters.BaseFilter.md)\>

**`Static`**

#### Overrides

[BaseFilter](filters.BaseFilter.md).[fromObject](filters.BaseFilter.md#fromobject)

#### Defined in

[src/filters/Composed.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Composed.ts#L64)
