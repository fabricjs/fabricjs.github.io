# Class: ColorMatrix

[filters](../modules/filters.md).ColorMatrix

Color Matrix filter class

**`See`**

 - [demo](http://fabricjs.com/image-filters|ImageFilters)
 - {@Link http://phoboslab.org/log/2013/11/fast-image-filters-with-webgl demo}

**`Example`**

Kodachrome filter
```ts
const filter = new ColorMatrix({
 matrix: [
    1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502,
    -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203,
    -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946,
    0, 0, 0, 1, 0
   ]
});
object.filters.push(filter);
object.applyFilters();
```

## Hierarchy

- [`BaseFilter`](filters.BaseFilter.md)

  ↳ **`ColorMatrix`**

  ↳↳ [`HueRotation`](filters.HueRotation.md)

## Table of contents

### Constructors

- [constructor](filters.ColorMatrix.md#constructor)

### Properties

- [colorsOnly](filters.ColorMatrix.md#colorsonly)
- [mainParameter](filters.ColorMatrix.md#mainparameter)
- [matrix](filters.ColorMatrix.md#matrix)
- [vertexSource](filters.ColorMatrix.md#vertexsource)
- [defaults](filters.ColorMatrix.md#defaults)
- [type](filters.ColorMatrix.md#type)

### Accessors

- [type](filters.ColorMatrix.md#type-1)

### Methods

- [\_setupFrameBuffer](filters.ColorMatrix.md#_setupframebuffer)
- [\_swapTextures](filters.ColorMatrix.md#_swaptextures)
- [applyTo](filters.ColorMatrix.md#applyto)
- [applyTo2d](filters.ColorMatrix.md#applyto2d)
- [applyToWebGL](filters.ColorMatrix.md#applytowebgl)
- [bindAdditionalTexture](filters.ColorMatrix.md#bindadditionaltexture)
- [createHelpLayer](filters.ColorMatrix.md#createhelplayer)
- [createProgram](filters.ColorMatrix.md#createprogram)
- [getAttributeLocations](filters.ColorMatrix.md#getattributelocations)
- [getCacheKey](filters.ColorMatrix.md#getcachekey)
- [getFragmentSource](filters.ColorMatrix.md#getfragmentsource)
- [getMainParameter](filters.ColorMatrix.md#getmainparameter)
- [getUniformLocations](filters.ColorMatrix.md#getuniformlocations)
- [isNeutralState](filters.ColorMatrix.md#isneutralstate)
- [retrieveShader](filters.ColorMatrix.md#retrieveshader)
- [sendAttributeData](filters.ColorMatrix.md#sendattributedata)
- [sendUniformData](filters.ColorMatrix.md#senduniformdata)
- [setMainParameter](filters.ColorMatrix.md#setmainparameter)
- [setOptions](filters.ColorMatrix.md#setoptions)
- [toJSON](filters.ColorMatrix.md#tojson)
- [toObject](filters.ColorMatrix.md#toobject)
- [unbindAdditionalTexture](filters.ColorMatrix.md#unbindadditionaltexture)
- [fromObject](filters.ColorMatrix.md#fromobject)

## Constructors

### constructor

• **new ColorMatrix**(`options?`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `any`\> | Options object |

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[constructor](filters.BaseFilter.md#constructor)

#### Defined in

[src/filters/BaseFilter.ts:57](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L57)

## Properties

### colorsOnly

• **colorsOnly**: `boolean`

Lock the colormatrix on the color part, skipping alpha, mainly for non webgl scenario
to save some calculation

**`Default`**

```ts
true
```

#### Defined in

[src/filters/ColorMatrix.ts:46](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L46)

___

### mainParameter

• `Optional` `Private` **mainParameter**: keyof [`ColorMatrix`](filters.ColorMatrix.md)

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[mainParameter](filters.BaseFilter.md#mainparameter)

#### Defined in

[src/filters/BaseFilter.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L51)

___

### matrix

• **matrix**: `number`[]

Colormatrix for pixels.
array of 20 floats. Numbers in positions 4, 9, 14, 19 loose meaning
outside the -1, 1 range.
0.0039215686 is the part of 1 that get translated to 1 in 2d

**`Param`**

array of 20 numbers.

**`Default`**

```ts

```

#### Defined in

[src/filters/ColorMatrix.ts:38](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L38)

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

▪ `Static` **defaults**: `Partial`<[`TClassProperties`](../modules.md#tclassproperties)<[`ColorMatrix`](filters.ColorMatrix.md)\>\> = `colorMatrixDefaultValues`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[defaults](filters.BaseFilter.md#defaults)

#### Defined in

[src/filters/ColorMatrix.ts:50](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L50)

___

### type

▪ `Static` **type**: `string` = `'ColorMatrix'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[BaseFilter](filters.BaseFilter.md).[type](filters.BaseFilter.md#type)

#### Defined in

[src/filters/ColorMatrix.ts:48](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L48)

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

Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[applyTo2d](filters.BaseFilter.md#applyto2d)

#### Defined in

[src/filters/ColorMatrix.ts:70](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L70)

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

[src/filters/ColorMatrix.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L60)

___

### getMainParameter

▸ **getMainParameter**(): `undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 21 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void`

#### Returns

`undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 21 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void`

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

[src/filters/ColorMatrix.ts:102](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L102)

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

[src/filters/ColorMatrix.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L118)

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

### setOptions

▸ **setOptions**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Defined in

[src/filters/ColorMatrix.ts:52](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L52)

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
