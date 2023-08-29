# Class: Gamma

[filters](../modules/filters.md).Gamma

Gamma filter class

**`Example`**

```ts
const filter = new Gamma({
  gamma: [1, 0.5, 2.1]
});
object.filters.push(filter);
object.applyFilters();
```

## Hierarchy

- [`BaseFilter`](filters.BaseFilter.md)

  ↳ **`Gamma`**

## Table of contents

### Constructors

- [constructor](filters.Gamma.md#constructor)

### Properties

- [gamma](filters.Gamma.md#gamma)
- [mainParameter](filters.Gamma.md#mainparameter)
- [rgbValues](filters.Gamma.md#rgbvalues)
- [vertexSource](filters.Gamma.md#vertexsource)
- [defaults](filters.Gamma.md#defaults)
- [type](filters.Gamma.md#type)

### Accessors

- [type](filters.Gamma.md#type-1)

### Methods

- [\_setupFrameBuffer](filters.Gamma.md#_setupframebuffer)
- [\_swapTextures](filters.Gamma.md#_swaptextures)
- [applyTo](filters.Gamma.md#applyto)
- [applyTo2d](filters.Gamma.md#applyto2d)
- [applyToWebGL](filters.Gamma.md#applytowebgl)
- [bindAdditionalTexture](filters.Gamma.md#bindadditionaltexture)
- [createHelpLayer](filters.Gamma.md#createhelplayer)
- [createProgram](filters.Gamma.md#createprogram)
- [getAttributeLocations](filters.Gamma.md#getattributelocations)
- [getCacheKey](filters.Gamma.md#getcachekey)
- [getFragmentSource](filters.Gamma.md#getfragmentsource)
- [getMainParameter](filters.Gamma.md#getmainparameter)
- [getUniformLocations](filters.Gamma.md#getuniformlocations)
- [isNeutralState](filters.Gamma.md#isneutralstate)
- [retrieveShader](filters.Gamma.md#retrieveshader)
- [sendAttributeData](filters.Gamma.md#sendattributedata)
- [sendUniformData](filters.Gamma.md#senduniformdata)
- [setMainParameter](filters.Gamma.md#setmainparameter)
- [toJSON](filters.Gamma.md#tojson)
- [toObject](filters.Gamma.md#toobject)
- [unbindAdditionalTexture](filters.Gamma.md#unbindadditionaltexture)
- [fromObject](filters.Gamma.md#fromobject)

## Constructors

### constructor

• **new Gamma**(`«destructured»?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `gamma?` | `GammaInput` |

#### Overrides

[BaseFilter](filters.BaseFilter.md).[constructor](filters.BaseFilter.md#constructor)

#### Defined in

[src/filters/Gamma.ts:43](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Gamma.ts#L43)

## Properties

### gamma

• **gamma**: `GammaInput`

Gamma array value, from 0.01 to 2.2.

**`Param`**

**`Default`**

```ts

```

#### Defined in

[src/filters/Gamma.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Gamma.ts#L28)

___

### mainParameter

• `Optional` `Private` **mainParameter**: keyof [`Gamma`](filters.Gamma.md)

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[mainParameter](filters.BaseFilter.md#mainparameter)

#### Defined in

[src/filters/BaseFilter.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L51)

___

### rgbValues

• `Optional` **rgbValues**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `b` | `Uint8Array` |
| `g` | `Uint8Array` |
| `r` | `Uint8Array` |

#### Defined in

[src/filters/Gamma.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Gamma.ts#L29)

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

▪ `Static` **defaults**: `Partial`<[`TClassProperties`](../modules.md#tclassproperties)<[`Gamma`](filters.Gamma.md)\>\> = `gammaDefaultValues`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[defaults](filters.BaseFilter.md#defaults)

#### Defined in

[src/filters/Gamma.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Gamma.ts#L37)

___

### type

▪ `Static` **type**: `string` = `'Gamma'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[BaseFilter](filters.BaseFilter.md).[type](filters.BaseFilter.md#type)

#### Defined in

[src/filters/Gamma.ts:35](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Gamma.ts#L35)

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

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[applyTo](filters.BaseFilter.md#applyto)

#### Defined in

[src/filters/BaseFilter.ts:263](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L263)

___

### applyTo2d

▸ **applyTo2d**(`options`): `void`

Apply the Gamma operation to a Uint8Array representing the pixels of an image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[applyTo2d](filters.BaseFilter.md#applyto2d)

#### Defined in

[src/filters/Gamma.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Gamma.ts#L54)

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

▸ **getFragmentSource**(): `string`

#### Returns

`string`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[getFragmentSource](filters.BaseFilter.md#getfragmentsource)

#### Defined in

[src/filters/Gamma.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Gamma.ts#L39)

___

### getMainParameter

▸ **getMainParameter**(): `undefined` \| `string` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| `GammaInput` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| `GammaInput` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ((options: TWebGLPipelineState) =\> TWebGLProgramCacheItem) \| ... 21 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| { `b`: `Uint8Array` ; `g`: `Uint8Array` ; `r`: `Uint8Array`  } \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| { `b`: `Uint8Array` ; `g`: `Uint8Array` ; `r`: `Uint8Array`  }

#### Returns

`undefined` \| `string` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| `GammaInput` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| `GammaInput` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ((options: TWebGLPipelineState) =\> TWebGLProgramCacheItem) \| ... 21 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| { `b`: `Uint8Array` ; `g`: `Uint8Array` ; `r`: `Uint8Array`  } \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| { `b`: `Uint8Array` ; `g`: `Uint8Array` ; `r`: `Uint8Array`  }

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[getMainParameter](filters.BaseFilter.md#getmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:349](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L349)

___

### getUniformLocations

▸ **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)

Return WebGL uniform locations for this filter's shader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The GL canvas context used to compile this filter's shader. |
| `program` | `WebGLProgram` | This filter's compiled shader program. |

#### Returns

[`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)

#### Overrides

[BaseFilter](filters.BaseFilter.md).[getUniformLocations](filters.BaseFilter.md#getuniformlocations)

#### Defined in

[src/filters/Gamma.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Gamma.ts#L89)

___

### isNeutralState

▸ **isNeutralState**(`options?`): `boolean`

Generic isNeutral implementation for one parameter based filters.
Used only in image applyFilters to discard filters that will not have an effect
on the image
Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`boolean`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[isNeutralState](filters.BaseFilter.md#isneutralstate)

#### Defined in

[src/filters/BaseFilter.ts:231](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L231)

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

Send data from this filter to its shader program's uniforms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The GL canvas context used to compile this filter's shader. |
| `uniformLocations` | [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) | A map of string uniform names to WebGLUniformLocation objects |

#### Returns

`void`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[sendUniformData](filters.BaseFilter.md#senduniformdata)

#### Defined in

[src/filters/Gamma.ts:104](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Gamma.ts#L104)

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

Returns object representation of an instance

#### Returns

`Object`

Object representation of an instance

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[toObject](filters.BaseFilter.md#toobject)

#### Defined in

[src/filters/BaseFilter.ts:391](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L391)

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

▸ `Static` **fromObject**(`«destructured»`, `options`): `Promise`<[`BaseFilter`](filters.BaseFilter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Record`<`string`, `any`\> |
| `options` | [`Abortable`](../modules.md#abortable) |

#### Returns

`Promise`<[`BaseFilter`](filters.BaseFilter.md)\>

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[fromObject](filters.BaseFilter.md#fromobject)

#### Defined in

[src/filters/BaseFilter.ts:408](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L408)
