# Class: ColorMatrix

[filters](/apidocs/modules/filters.md).ColorMatrix

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

- [`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)

  ↳ **`ColorMatrix`**

  ↳↳ [`HueRotation`](/apidocs/classes/filters.HueRotation.md)

## Table of contents

### Constructors

- [constructor](/apidocs/classes/filters.ColorMatrix.md#constructor)

### Properties

- [colorsOnly](/apidocs/classes/filters.ColorMatrix.md#colorsonly)
- [mainParameter](/apidocs/classes/filters.ColorMatrix.md#mainparameter)
- [matrix](/apidocs/classes/filters.ColorMatrix.md#matrix)
- [vertexSource](/apidocs/classes/filters.ColorMatrix.md#vertexsource)
- [defaults](/apidocs/classes/filters.ColorMatrix.md#defaults)
- [type](/apidocs/classes/filters.ColorMatrix.md#type)

### Accessors

- [type](/apidocs/classes/filters.ColorMatrix.md#type-1)

### Methods

- [\_setupFrameBuffer](/apidocs/classes/filters.ColorMatrix.md#_setupframebuffer)
- [\_swapTextures](/apidocs/classes/filters.ColorMatrix.md#_swaptextures)
- [applyTo](/apidocs/classes/filters.ColorMatrix.md#applyto)
- [applyTo2d](/apidocs/classes/filters.ColorMatrix.md#applyto2d)
- [applyToWebGL](/apidocs/classes/filters.ColorMatrix.md#applytowebgl)
- [bindAdditionalTexture](/apidocs/classes/filters.ColorMatrix.md#bindadditionaltexture)
- [createHelpLayer](/apidocs/classes/filters.ColorMatrix.md#createhelplayer)
- [createProgram](/apidocs/classes/filters.ColorMatrix.md#createprogram)
- [getAttributeLocations](/apidocs/classes/filters.ColorMatrix.md#getattributelocations)
- [getCacheKey](/apidocs/classes/filters.ColorMatrix.md#getcachekey)
- [getFragmentSource](/apidocs/classes/filters.ColorMatrix.md#getfragmentsource)
- [getMainParameter](/apidocs/classes/filters.ColorMatrix.md#getmainparameter)
- [getUniformLocations](/apidocs/classes/filters.ColorMatrix.md#getuniformlocations)
- [isNeutralState](/apidocs/classes/filters.ColorMatrix.md#isneutralstate)
- [retrieveShader](/apidocs/classes/filters.ColorMatrix.md#retrieveshader)
- [sendAttributeData](/apidocs/classes/filters.ColorMatrix.md#sendattributedata)
- [sendUniformData](/apidocs/classes/filters.ColorMatrix.md#senduniformdata)
- [setMainParameter](/apidocs/classes/filters.ColorMatrix.md#setmainparameter)
- [setOptions](/apidocs/classes/filters.ColorMatrix.md#setoptions)
- [toJSON](/apidocs/classes/filters.ColorMatrix.md#tojson)
- [toObject](/apidocs/classes/filters.ColorMatrix.md#toobject)
- [unbindAdditionalTexture](/apidocs/classes/filters.ColorMatrix.md#unbindadditionaltexture)
- [fromObject](/apidocs/classes/filters.ColorMatrix.md#fromobject)

## Constructors

### constructor

• **new ColorMatrix**(`options?`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `any`\> | Options object |

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[constructor](/apidocs/classes/filters.BaseFilter.md#constructor)

#### Defined in

[src/filters/BaseFilter.ts:58](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L58)

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

[src/filters/ColorMatrix.ts:46](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/ColorMatrix.ts#L46)

___

### mainParameter

• `Optional` `Private` **mainParameter**: keyof [`ColorMatrix`](/apidocs/classes/filters.ColorMatrix.md)

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[mainParameter](/apidocs/classes/filters.BaseFilter.md#mainparameter)

#### Defined in

[src/filters/BaseFilter.ts:52](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L52)

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

[src/filters/ColorMatrix.ts:38](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/ColorMatrix.ts#L38)

___

### vertexSource

• `Private` **vertexSource**: `string` = `vertexSource`

Array of attributes to send with buffers. do not modify

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[vertexSource](/apidocs/classes/filters.BaseFilter.md#vertexsource)

#### Defined in

[src/filters/BaseFilter.ts:44](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L44)

___

### defaults

▪ `Static` **defaults**: `Partial`<[`TClassProperties`](/apidocs/modules.md#tclassproperties)<[`ColorMatrix`](/apidocs/classes/filters.ColorMatrix.md)\>\> = `colorMatrixDefaultValues`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[defaults](/apidocs/classes/filters.BaseFilter.md#defaults)

#### Defined in

[src/filters/ColorMatrix.ts:50](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/ColorMatrix.ts#L50)

___

### type

▪ `Static` **type**: `string` = `'ColorMatrix'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[type](/apidocs/classes/filters.BaseFilter.md#type)

#### Defined in

[src/filters/ColorMatrix.ts:48](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/ColorMatrix.ts#L48)

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

[src/filters/BaseFilter.ts:25](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L25)

## Methods

### \_setupFrameBuffer

▸ **_setupFrameBuffer**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[_setupFrameBuffer](/apidocs/classes/filters.BaseFilter.md#_setupframebuffer)

#### Defined in

[src/filters/BaseFilter.ts:190](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L190)

___

### \_swapTextures

▸ **_swapTextures**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[_swapTextures](/apidocs/classes/filters.BaseFilter.md#_swaptextures)

#### Defined in

[src/filters/BaseFilter.ts:217](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L217)

___

### applyTo

▸ **applyTo**(`options`): `void`

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[applyTo](/apidocs/classes/filters.BaseFilter.md#applyto)

#### Defined in

[src/filters/BaseFilter.ts:265](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L265)

___

### applyTo2d

▸ **applyTo2d**(`options`): `void`

Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[applyTo2d](/apidocs/classes/filters.BaseFilter.md#applyto2d)

#### Defined in

[src/filters/ColorMatrix.ts:70](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/ColorMatrix.ts#L70)

___

### applyToWebGL

▸ **applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[applyToWebGL](/apidocs/classes/filters.BaseFilter.md#applytowebgl)

#### Defined in

[src/filters/BaseFilter.ts:315](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L315)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[bindAdditionalTexture](/apidocs/classes/filters.BaseFilter.md#bindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:334](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L334)

___

### createHelpLayer

▸ **createHelpLayer**(`options`): `void`

If needed by a 2d filter, this functions can create an helper canvas to be used
remember that options.targetCanvas is available for use till end of chain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[createHelpLayer](/apidocs/classes/filters.BaseFilter.md#createhelplayer)

#### Defined in

[src/filters/BaseFilter.ts:380](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L380)

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
| `attributeLocations` | [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) |
| `program` | `WebGLProgram` |
| `uniformLocations` | [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) |

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[createProgram](/apidocs/classes/filters.BaseFilter.md#createprogram)

#### Defined in

[src/filters/BaseFilter.ts:77](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L77)

___

### getAttributeLocations

▸ **getAttributeLocations**(`gl`, `program`): [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap)

Return a map of attribute names to WebGLAttributeLocation objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The canvas context used to compile the shader program. |
| `program` | `WebGLProgram` | The shader program from which to take attribute locations. |

#### Returns

[`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap)

A map of attribute names to attribute locations.

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getAttributeLocations](/apidocs/classes/filters.BaseFilter.md#getattributelocations)

#### Defined in

[src/filters/BaseFilter.ts:146](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L146)

___

### getCacheKey

▸ **getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getCacheKey](/apidocs/classes/filters.BaseFilter.md#getcachekey)

#### Defined in

[src/filters/BaseFilter.ts:284](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L284)

___

### getFragmentSource

▸ **getFragmentSource**(): `string`

#### Returns

`string`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getFragmentSource](/apidocs/classes/filters.BaseFilter.md#getfragmentsource)

#### Defined in

[src/filters/ColorMatrix.ts:60](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/ColorMatrix.ts#L60)

___

### getMainParameter

▸ **getMainParameter**(): `undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 21 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void`

#### Returns

`undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| (`options?`: `any`) => `boolean` \| () => { `type`: `string`  } \| () => { `type`: `string`  } \| (`__namedParameters`: `Record`<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 21 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void`

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getMainParameter](/apidocs/classes/filters.BaseFilter.md#getmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:351](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L351)

___

### getUniformLocations

▸ **getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)

Return WebGL uniform locations for this filter's shader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The GL canvas context used to compile this filter's shader. |
| `program` | `WebGLProgram` | This filter's compiled shader program. |

#### Returns

[`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getUniformLocations](/apidocs/classes/filters.BaseFilter.md#getuniformlocations)

#### Defined in

[src/filters/ColorMatrix.ts:102](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/ColorMatrix.ts#L102)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[isNeutralState](/apidocs/classes/filters.BaseFilter.md#isneutralstate)

#### Defined in

[src/filters/BaseFilter.ts:233](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L233)

___

### retrieveShader

▸ **retrieveShader**(`options`): [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem)

Retrieves the cached shader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) |

#### Returns

[`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem)

the compiled program shader

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[retrieveShader](/apidocs/classes/filters.BaseFilter.md#retrieveshader)

#### Defined in

[src/filters/BaseFilter.ts:295](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L295)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[sendAttributeData](/apidocs/classes/filters.BaseFilter.md#sendattributedata)

#### Defined in

[src/filters/BaseFilter.ts:177](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L177)

___

### sendUniformData

▸ **sendUniformData**(`gl`, `uniformLocations`): `void`

Send data from this filter to its shader program's uniforms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The GL canvas context used to compile this filter's shader. |
| `uniformLocations` | [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) | A map of string uniform names to WebGLUniformLocation objects |

#### Returns

`void`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[sendUniformData](/apidocs/classes/filters.BaseFilter.md#senduniformdata)

#### Defined in

[src/filters/ColorMatrix.ts:118](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/ColorMatrix.ts#L118)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[setMainParameter](/apidocs/classes/filters.BaseFilter.md#setmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:355](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L355)

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

[src/filters/ColorMatrix.ts:52](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/ColorMatrix.ts#L52)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[toJSON](/apidocs/classes/filters.BaseFilter.md#tojson)

#### Defined in

[src/filters/BaseFilter.ts:405](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L405)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[toObject](/apidocs/classes/filters.BaseFilter.md#toobject)

#### Defined in

[src/filters/BaseFilter.ts:393](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L393)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[unbindAdditionalTexture](/apidocs/classes/filters.BaseFilter.md#unbindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:345](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L345)

___

### fromObject

▸ `Static` **fromObject**(`«destructured»`, `options`): `Promise`<[`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Record`<`string`, `any`\> |
| `options` | [`Abortable`](/apidocs/modules.md#abortable) |

#### Returns

`Promise`<[`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)\>

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[fromObject](/apidocs/classes/filters.BaseFilter.md#fromobject)

#### Defined in

[src/filters/BaseFilter.ts:410](https://github.com/fabricjs/fabric.js/blob/7d0e39dd9/src/filters/BaseFilter.ts#L410)
