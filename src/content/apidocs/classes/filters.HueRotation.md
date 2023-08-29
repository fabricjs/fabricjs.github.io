# Class: HueRotation

[filters](../modules/filters.md).HueRotation

HueRotation filter class

**`Example`**

```ts
const filter = new HueRotation({
  rotation: -0.5
});
object.filters.push(filter);
object.applyFilters();
```

## Hierarchy

- [`ColorMatrix`](filters.ColorMatrix.md)

  ↳ **`HueRotation`**

## Table of contents

### Constructors

- [constructor](filters.HueRotation.md#constructor)

### Properties

- [colorsOnly](filters.HueRotation.md#colorsonly)
- [mainParameter](filters.HueRotation.md#mainparameter)
- [matrix](filters.HueRotation.md#matrix)
- [rotation](filters.HueRotation.md#rotation)
- [vertexSource](filters.HueRotation.md#vertexsource)
- [defaults](filters.HueRotation.md#defaults)
- [type](filters.HueRotation.md#type)

### Accessors

- [type](filters.HueRotation.md#type-1)

### Methods

- [\_setupFrameBuffer](filters.HueRotation.md#_setupframebuffer)
- [\_swapTextures](filters.HueRotation.md#_swaptextures)
- [applyTo](filters.HueRotation.md#applyto)
- [applyTo2d](filters.HueRotation.md#applyto2d)
- [applyToWebGL](filters.HueRotation.md#applytowebgl)
- [bindAdditionalTexture](filters.HueRotation.md#bindadditionaltexture)
- [calculateMatrix](filters.HueRotation.md#calculatematrix)
- [createHelpLayer](filters.HueRotation.md#createhelplayer)
- [createProgram](filters.HueRotation.md#createprogram)
- [getAttributeLocations](filters.HueRotation.md#getattributelocations)
- [getCacheKey](filters.HueRotation.md#getcachekey)
- [getFragmentSource](filters.HueRotation.md#getfragmentsource)
- [getMainParameter](filters.HueRotation.md#getmainparameter)
- [getUniformLocations](filters.HueRotation.md#getuniformlocations)
- [isNeutralState](filters.HueRotation.md#isneutralstate)
- [retrieveShader](filters.HueRotation.md#retrieveshader)
- [sendAttributeData](filters.HueRotation.md#sendattributedata)
- [sendUniformData](filters.HueRotation.md#senduniformdata)
- [setMainParameter](filters.HueRotation.md#setmainparameter)
- [setOptions](filters.HueRotation.md#setoptions)
- [toJSON](filters.HueRotation.md#tojson)
- [toObject](filters.HueRotation.md#toobject)
- [unbindAdditionalTexture](filters.HueRotation.md#unbindadditionaltexture)
- [fromObject](filters.HueRotation.md#fromobject)

## Constructors

### constructor

• **new HueRotation**(`options?`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `any`\> | Options object |

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[constructor](filters.ColorMatrix.md#constructor)

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

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[colorsOnly](filters.ColorMatrix.md#colorsonly)

#### Defined in

[src/filters/ColorMatrix.ts:46](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L46)

___

### mainParameter

• `Optional` `Private` **mainParameter**: keyof [`HueRotation`](filters.HueRotation.md)

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[mainParameter](filters.ColorMatrix.md#mainparameter)

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

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[matrix](filters.ColorMatrix.md#matrix)

#### Defined in

[src/filters/ColorMatrix.ts:38](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L38)

___

### rotation

• **rotation**: `number`

HueRotation value, from -1 to 1.

#### Defined in

[src/filters/HueRotation.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/HueRotation.ts#L28)

___

### vertexSource

• `Private` **vertexSource**: `string` = `vertexSource`

Array of attributes to send with buffers. do not modify

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[vertexSource](filters.ColorMatrix.md#vertexsource)

#### Defined in

[src/filters/BaseFilter.ts:43](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L43)

___

### defaults

▪ `Static` **defaults**: `Partial`<[`TClassProperties`](../modules.md#tclassproperties)<[`HueRotation`](filters.HueRotation.md)\>\> = `hueRotationDefaultValues`

#### Overrides

[ColorMatrix](filters.ColorMatrix.md).[defaults](filters.ColorMatrix.md#defaults)

#### Defined in

[src/filters/HueRotation.ts:32](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/HueRotation.ts#L32)

___

### type

▪ `Static` **type**: `string` = `'HueRotation'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[ColorMatrix](filters.ColorMatrix.md).[type](filters.ColorMatrix.md#type)

#### Defined in

[src/filters/HueRotation.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/HueRotation.ts#L30)

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

ColorMatrix.type

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

[ColorMatrix](filters.ColorMatrix.md).[_setupFrameBuffer](filters.ColorMatrix.md#_setupframebuffer)

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

[ColorMatrix](filters.ColorMatrix.md).[_swapTextures](filters.ColorMatrix.md#_swaptextures)

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

#### Overrides

[ColorMatrix](filters.ColorMatrix.md).[applyTo](filters.ColorMatrix.md#applyto)

#### Defined in

[src/filters/HueRotation.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/HueRotation.ts#L58)

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

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[applyTo2d](filters.ColorMatrix.md#applyto2d)

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

[ColorMatrix](filters.ColorMatrix.md).[applyToWebGL](filters.ColorMatrix.md#applytowebgl)

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

[ColorMatrix](filters.ColorMatrix.md).[bindAdditionalTexture](filters.ColorMatrix.md#bindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:332](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L332)

___

### calculateMatrix

▸ **calculateMatrix**(): `void`

#### Returns

`void`

#### Defined in

[src/filters/HueRotation.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/HueRotation.ts#L34)

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

[ColorMatrix](filters.ColorMatrix.md).[createHelpLayer](filters.ColorMatrix.md#createhelplayer)

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

[ColorMatrix](filters.ColorMatrix.md).[createProgram](filters.ColorMatrix.md#createprogram)

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

[ColorMatrix](filters.ColorMatrix.md).[getAttributeLocations](filters.ColorMatrix.md#getattributelocations)

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

[ColorMatrix](filters.ColorMatrix.md).[getCacheKey](filters.ColorMatrix.md#getcachekey)

#### Defined in

[src/filters/BaseFilter.ts:282](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L282)

___

### getFragmentSource

▸ **getFragmentSource**(): `string`

#### Returns

`string`

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[getFragmentSource](filters.ColorMatrix.md#getfragmentsource)

#### Defined in

[src/filters/ColorMatrix.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L60)

___

### getMainParameter

▸ **getMainParameter**(): `undefined` \| `string` \| `number` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| () => `string` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| () => `string` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 22 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `void`

#### Returns

`undefined` \| `string` \| `number` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| () => `string` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| () => `string` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 22 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `void`

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[getMainParameter](filters.ColorMatrix.md#getmainparameter)

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

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[getUniformLocations](filters.ColorMatrix.md#getuniformlocations)

#### Defined in

[src/filters/ColorMatrix.ts:102](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/ColorMatrix.ts#L102)

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

[ColorMatrix](filters.ColorMatrix.md).[isNeutralState](filters.ColorMatrix.md#isneutralstate)

#### Defined in

[src/filters/HueRotation.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/HueRotation.ts#L53)

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

[ColorMatrix](filters.ColorMatrix.md).[retrieveShader](filters.ColorMatrix.md#retrieveshader)

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

[ColorMatrix](filters.ColorMatrix.md).[sendAttributeData](filters.ColorMatrix.md#sendattributedata)

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

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[sendUniformData](filters.ColorMatrix.md#senduniformdata)

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

[ColorMatrix](filters.ColorMatrix.md).[setMainParameter](filters.ColorMatrix.md#setmainparameter)

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

#### Inherited from

[ColorMatrix](filters.ColorMatrix.md).[setOptions](filters.ColorMatrix.md#setoptions)

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

[ColorMatrix](filters.ColorMatrix.md).[toJSON](filters.ColorMatrix.md#tojson)

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

[ColorMatrix](filters.ColorMatrix.md).[toObject](filters.ColorMatrix.md#toobject)

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

[ColorMatrix](filters.ColorMatrix.md).[unbindAdditionalTexture](filters.ColorMatrix.md#unbindadditionaltexture)

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

[ColorMatrix](filters.ColorMatrix.md).[fromObject](filters.ColorMatrix.md#fromobject)

#### Defined in

[src/filters/BaseFilter.ts:408](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L408)
