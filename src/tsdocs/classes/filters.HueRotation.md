# Class: HueRotation

[filters](/apidocs/modules/filters.md).HueRotation

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

- [`ColorMatrix`](/apidocs/classes/filters.ColorMatrix.md)

  ↳ **`HueRotation`**

## Constructors

### constructor

**new HueRotation**(`options?`): [`HueRotation`](/apidocs/classes/filters.HueRotation.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`\<`string`, `any`\> | Options object |

#### Returns

[`HueRotation`](/apidocs/classes/filters.HueRotation.md)

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[constructor](/apidocs/classes/filters.ColorMatrix.md#constructor)

#### Defined in

[src/filters/BaseFilter.ts:58](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L58)

## Properties

### colorsOnly

 **colorsOnly**: `boolean`

Lock the colormatrix on the color part, skipping alpha, mainly for non webgl scenario
to save some calculation

**`Default`**

```ts
true
```

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[colorsOnly](/apidocs/classes/filters.ColorMatrix.md#colorsonly)

#### Defined in

[src/filters/ColorMatrix.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/ColorMatrix.ts#L46)

___

### mainParameter

 `Optional` `Private` **mainParameter**: ``"matrix"`` \| ``"type"`` \| ``"toObject"`` \| ``"toJSON"`` \| ``"setOptions"`` \| ``"getUniformLocations"`` \| ``"sendUniformData"`` \| ``"getCacheKey"`` \| ``"getFragmentSource"`` \| ``"applyTo"`` \| ``"isNeutralState"`` \| ``"applyTo2d"`` \| ``"vertexSource"`` \| ``"mainParameter"`` \| ``"createProgram"`` \| ``"getAttributeLocations"`` \| ``"sendAttributeData"`` \| ``"_setupFrameBuffer"`` \| ``"_swapTextures"`` \| ``"retrieveShader"`` \| ``"applyToWebGL"`` \| ``"bindAdditionalTexture"`` \| ``"unbindAdditionalTexture"`` \| ``"getMainParameter"`` \| ``"setMainParameter"`` \| ``"createHelpLayer"`` \| ``"calculateMatrix"`` \| ``"colorsOnly"`` \| ``"rotation"``

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[mainParameter](/apidocs/classes/filters.ColorMatrix.md#mainparameter)

#### Defined in

[src/filters/BaseFilter.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L52)

___

### matrix

 **matrix**: `number`[]

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

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[matrix](/apidocs/classes/filters.ColorMatrix.md#matrix)

#### Defined in

[src/filters/ColorMatrix.ts:38](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/ColorMatrix.ts#L38)

___

### rotation

 **rotation**: `number`

HueRotation value, from -1 to 1.

#### Defined in

[src/filters/HueRotation.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/HueRotation.ts#L28)

___

### vertexSource

 `Private` **vertexSource**: `string` = `vertexSource`

Array of attributes to send with buffers. do not modify

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[vertexSource](/apidocs/classes/filters.ColorMatrix.md#vertexsource)

#### Defined in

[src/filters/BaseFilter.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L44)

___

### defaults

 `Static` **defaults**: `Partial`\<[`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`HueRotation`](/apidocs/classes/filters.HueRotation.md)\>\> = `hueRotationDefaultValues`

#### Overrides

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[defaults](/apidocs/classes/filters.ColorMatrix.md#defaults)

#### Defined in

[src/filters/HueRotation.ts:32](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/HueRotation.ts#L32)

___

### type

 `Static` **type**: `string` = `'HueRotation'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[type](/apidocs/classes/filters.ColorMatrix.md#type)

#### Defined in

[src/filters/HueRotation.ts:30](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/HueRotation.ts#L30)

## Accessors

### type

`get` **type**(): `string`

Filter type

#### Returns

`string`

**`Default`**

```ts

```

#### Inherited from

ColorMatrix.type

#### Defined in

[src/filters/BaseFilter.ts:25](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L25)

## Methods

### \_setupFrameBuffer

**_setupFrameBuffer**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[_setupFrameBuffer](/apidocs/classes/filters.ColorMatrix.md#_setupframebuffer)

#### Defined in

[src/filters/BaseFilter.ts:190](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L190)

___

### \_swapTextures

**_swapTextures**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[_swapTextures](/apidocs/classes/filters.ColorMatrix.md#_swaptextures)

#### Defined in

[src/filters/BaseFilter.ts:217](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L217)

___

### applyTo

**applyTo**(`options`): `void`

Apply this filter to the input image data provided.

Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[applyTo](/apidocs/classes/filters.ColorMatrix.md#applyto)

#### Defined in

[src/filters/HueRotation.ts:58](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/HueRotation.ts#L58)

___

### applyTo2d

**applyTo2d**(`options`): `void`

Apply the ColorMatrix operation to a Uint8Array representing the pixels of an image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[applyTo2d](/apidocs/classes/filters.ColorMatrix.md#applyto2d)

#### Defined in

[src/filters/ColorMatrix.ts:70](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/ColorMatrix.ts#L70)

___

### applyToWebGL

**applyToWebGL**(`options`): `void`

Apply this filter using webgl.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[applyToWebGL](/apidocs/classes/filters.ColorMatrix.md#applytowebgl)

#### Defined in

[src/filters/BaseFilter.ts:315](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L315)

___

### bindAdditionalTexture

**bindAdditionalTexture**(`gl`, `texture`, `textureUnit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `WebGLRenderingContext` |
| `texture` | `WebGLTexture` |
| `textureUnit` | `number` |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[bindAdditionalTexture](/apidocs/classes/filters.ColorMatrix.md#bindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:334](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L334)

___

### calculateMatrix

**calculateMatrix**(): `void`

#### Returns

`void`

#### Defined in

[src/filters/HueRotation.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/HueRotation.ts#L34)

___

### createHelpLayer

**createHelpLayer**(`options`): `void`

If needed by a 2d filter, this functions can create an helper canvas to be used
remember that options.targetCanvas is available for use till end of chain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[createHelpLayer](/apidocs/classes/filters.ColorMatrix.md#createhelplayer)

#### Defined in

[src/filters/BaseFilter.ts:380](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L380)

___

### createProgram

**createProgram**(`gl`, `fragmentSource?`, `vertexSource?`): `Object`

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

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[createProgram](/apidocs/classes/filters.ColorMatrix.md#createprogram)

#### Defined in

[src/filters/BaseFilter.ts:77](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L77)

___

### getAttributeLocations

**getAttributeLocations**(`gl`, `program`): [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap)

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

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[getAttributeLocations](/apidocs/classes/filters.ColorMatrix.md#getattributelocations)

#### Defined in

[src/filters/BaseFilter.ts:146](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L146)

___

### getCacheKey

**getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[getCacheKey](/apidocs/classes/filters.ColorMatrix.md#getcachekey)

#### Defined in

[src/filters/BaseFilter.ts:284](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L284)

___

### getFragmentSource

**getFragmentSource**(): `string`

#### Returns

`string`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[getFragmentSource](/apidocs/classes/filters.ColorMatrix.md#getfragmentsource)

#### Defined in

[src/filters/ColorMatrix.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/ColorMatrix.ts#L60)

___

### getMainParameter

**getMainParameter**(): `undefined` \| `string` \| `number` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| () => `string` \| () => \{ `type`: `string`  } \| () => \{ `type`: `string`  } \| (`__namedParameters`: `Record`\<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => string \| number \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 22 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `void`

#### Returns

`undefined` \| `string` \| `number` \| `boolean` \| `number`[] \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| () => `string` \| () => \{ `type`: `string`  } \| () => \{ `type`: `string`  } \| (`__namedParameters`: `Record`\<`string`, `any`\>) => `void` \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => string \| number \| boolean \| number[] \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 22 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[getMainParameter](/apidocs/classes/filters.ColorMatrix.md#getmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:351](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L351)

___

### getUniformLocations

**getUniformLocations**(`gl`, `program`): [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)

Return WebGL uniform locations for this filter's shader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The GL canvas context used to compile this filter's shader. |
| `program` | `WebGLProgram` | This filter's compiled shader program. |

#### Returns

[`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[getUniformLocations](/apidocs/classes/filters.ColorMatrix.md#getuniformlocations)

#### Defined in

[src/filters/ColorMatrix.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/ColorMatrix.ts#L102)

___

### isNeutralState

**isNeutralState**(): `boolean`

Generic isNeutral implementation for one parameter based filters.
Used only in image applyFilters to discard filters that will not have an effect
on the image
Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )

#### Returns

`boolean`

#### Overrides

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[isNeutralState](/apidocs/classes/filters.ColorMatrix.md#isneutralstate)

#### Defined in

[src/filters/HueRotation.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/HueRotation.ts#L53)

___

### retrieveShader

**retrieveShader**(`options`): [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem)

Retrieves the cached shader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) |

#### Returns

[`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem)

the compiled program shader

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[retrieveShader](/apidocs/classes/filters.ColorMatrix.md#retrieveshader)

#### Defined in

[src/filters/BaseFilter.ts:295](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L295)

___

### sendAttributeData

**sendAttributeData**(`gl`, `attributeLocations`, `aPositionData`): `void`

Send attribute data from this filter to its shader program on the GPU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The canvas context used to compile the shader program. |
| `attributeLocations` | `Record`\<`string`, `number`\> | A map of shader attribute names to their locations. |
| `aPositionData` | `Float32Array` | - |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[sendAttributeData](/apidocs/classes/filters.ColorMatrix.md#sendattributedata)

#### Defined in

[src/filters/BaseFilter.ts:177](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L177)

___

### sendUniformData

**sendUniformData**(`gl`, `uniformLocations`): `void`

Send data from this filter to its shader program's uniforms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The GL canvas context used to compile this filter's shader. |
| `uniformLocations` | [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) | A map of string uniform names to WebGLUniformLocation objects |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[sendUniformData](/apidocs/classes/filters.ColorMatrix.md#senduniformdata)

#### Defined in

[src/filters/ColorMatrix.ts:118](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/ColorMatrix.ts#L118)

___

### setMainParameter

**setMainParameter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[setMainParameter](/apidocs/classes/filters.ColorMatrix.md#setmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:355](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L355)

___

### setOptions

**setOptions**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Record`\<`string`, `any`\> |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[setOptions](/apidocs/classes/filters.ColorMatrix.md#setoptions)

#### Defined in

[src/filters/ColorMatrix.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/ColorMatrix.ts#L52)

___

### toJSON

**toJSON**(): `Object`

Returns a JSON representation of an instance

#### Returns

`Object`

JSON

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[toJSON](/apidocs/classes/filters.ColorMatrix.md#tojson)

#### Defined in

[src/filters/BaseFilter.ts:405](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L405)

___

### toObject

**toObject**(): `Object`

Returns object representation of an instance

#### Returns

`Object`

Object representation of an instance

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[toObject](/apidocs/classes/filters.ColorMatrix.md#toobject)

#### Defined in

[src/filters/BaseFilter.ts:393](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L393)

___

### unbindAdditionalTexture

**unbindAdditionalTexture**(`gl`, `textureUnit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | `WebGLRenderingContext` |
| `textureUnit` | `number` |

#### Returns

`void`

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[unbindAdditionalTexture](/apidocs/classes/filters.ColorMatrix.md#unbindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:345](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L345)

___

### fromObject

**fromObject**(`«destructured»`, `options`): `Promise`\<[`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Record`\<`string`, `any`\> |
| `options` | [`Abortable`](/apidocs/modules.md#abortable) |

#### Returns

`Promise`\<[`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)\>

#### Inherited from

[ColorMatrix](/apidocs/classes/filters.ColorMatrix.md).[fromObject](/apidocs/classes/filters.ColorMatrix.md#fromobject)

#### Defined in

[src/filters/BaseFilter.ts:410](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/BaseFilter.ts#L410)
