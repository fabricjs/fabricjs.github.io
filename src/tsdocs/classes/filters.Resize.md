# Class: Resize

[filters](/apidocs/modules/filters.md).Resize

Resize image filter class

**`Example`**

```ts
const filter = new Resize();
object.filters.push(filter);
object.applyFilters(canvas.renderAll.bind(canvas));
```

## Hierarchy

- [`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)

  ↳ **`Resize`**

## Constructors

### constructor

**new Resize**(`options?`): [`Resize`](/apidocs/classes/filters.Resize.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`\<`string`, `any`\> | Options object |

#### Returns

[`Resize`](/apidocs/classes/filters.Resize.md)

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[constructor](/apidocs/classes/filters.BaseFilter.md#constructor)

#### Defined in

[src/filters/BaseFilter.ts:58](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L58)

## Properties

### fragmentSourceTOP

 **fragmentSourceTOP**: `string`

#### Defined in

[src/filters/Resize.ts:82](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L82)

___

### lanczosLobes

 **lanczosLobes**: `number`

LanczosLobes parameter for lanczos filter, valid for resizeType lanczos

**`Param`**

**`Default`**

```ts

```

#### Defined in

[src/filters/Resize.ts:80](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L80)

___

### mainParameter

 `Optional` `Private` **mainParameter**: keyof [`Resize`](/apidocs/classes/filters.Resize.md)

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[mainParameter](/apidocs/classes/filters.BaseFilter.md#mainparameter)

#### Defined in

[src/filters/BaseFilter.ts:52](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L52)

___

### resizeType

 **resizeType**: [`TResizeType`](/apidocs/modules/filters.md#tresizetype)

Resize type
for webgl resizeType is just lanczos, for canvas2d can be:
bilinear, hermite, sliceHack, lanczos.

**`Default`**

```ts

```

#### Defined in

[src/filters/Resize.ts:59](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L59)

___

### scaleX

 **scaleX**: `number`

Scale factor for resizing, x axis

**`Param`**

**`Default`**

```ts

```

#### Defined in

[src/filters/Resize.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L66)

___

### scaleY

 **scaleY**: `number`

Scale factor for resizing, y axis

**`Param`**

**`Default`**

```ts

```

#### Defined in

[src/filters/Resize.ts:73](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L73)

___

### vertexSource

 `Private` **vertexSource**: `string` = `vertexSource`

Array of attributes to send with buffers. do not modify

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[vertexSource](/apidocs/classes/filters.BaseFilter.md#vertexsource)

#### Defined in

[src/filters/BaseFilter.ts:44](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L44)

___

### defaults

 `Static` **defaults**: `Partial`\<[`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`Resize`](/apidocs/classes/filters.Resize.md)\>\> = `resizeDefaultValues`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[defaults](/apidocs/classes/filters.BaseFilter.md#defaults)

#### Defined in

[src/filters/Resize.ts:86](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L86)

___

### type

 `Static` **type**: `string` = `'Resize'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[type](/apidocs/classes/filters.BaseFilter.md#type)

#### Defined in

[src/filters/Resize.ts:84](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L84)

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

BaseFilter.type

#### Defined in

[src/filters/BaseFilter.ts:25](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L25)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[_setupFrameBuffer](/apidocs/classes/filters.BaseFilter.md#_setupframebuffer)

#### Defined in

[src/filters/BaseFilter.ts:190](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L190)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[_swapTextures](/apidocs/classes/filters.BaseFilter.md#_swaptextures)

#### Defined in

[src/filters/BaseFilter.ts:217](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L217)

___

### applyTo

**applyTo**(`options`): `void`

Apply the resize filter to the image
Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[applyTo](/apidocs/classes/filters.BaseFilter.md#applyto)

#### Defined in

[src/filters/Resize.ts:207](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L207)

___

### applyTo2d

**applyTo2d**(`this`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuring2DResize` |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[applyTo2d](/apidocs/classes/filters.BaseFilter.md#applyto2d)

#### Defined in

[src/filters/Resize.ts:233](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L233)

___

### applyToForWebgl

**applyToForWebgl**(`this`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Defined in

[src/filters/Resize.ts:173](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L173)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[applyToWebGL](/apidocs/classes/filters.BaseFilter.md#applytowebgl)

#### Defined in

[src/filters/BaseFilter.ts:315](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L315)

___

### bilinearFiltering

**bilinearFiltering**(`this`, `options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

bilinearFiltering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ResizeDuring2DResize` | - |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) | - |
| `oW` | `number` | Original Width |
| `oH` | `number` | Original Height |
| `dW` | `number` | Destination Width |
| `dH` | `number` | Destination Height |

#### Returns

`ImageData`

#### Defined in

[src/filters/Resize.ts:427](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L427)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[bindAdditionalTexture](/apidocs/classes/filters.BaseFilter.md#bindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:334](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L334)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[createHelpLayer](/apidocs/classes/filters.BaseFilter.md#createhelplayer)

#### Defined in

[src/filters/BaseFilter.ts:380](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L380)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[createProgram](/apidocs/classes/filters.BaseFilter.md#createprogram)

#### Defined in

[src/filters/BaseFilter.ts:77](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L77)

___

### generateShader

**generateShader**(`filterWindow`): `string`

Generate vertex and shader sources from the necessary steps numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterWindow` | `number` |

#### Returns

`string`

#### Defined in

[src/filters/Resize.ts:149](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L149)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getAttributeLocations](/apidocs/classes/filters.BaseFilter.md#getattributelocations)

#### Defined in

[src/filters/BaseFilter.ts:146](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L146)

___

### getCacheKey

**getCacheKey**(`this`): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |

#### Returns

`string`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getCacheKey](/apidocs/classes/filters.BaseFilter.md#getcachekey)

#### Defined in

[src/filters/Resize.ts:124](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L124)

___

### getFilterWindow

**getFilterWindow**(`this`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |

#### Returns

`number`

#### Defined in

[src/filters/Resize.ts:119](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L119)

___

### getFragmentSource

**getFragmentSource**(`this`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |

#### Returns

`string`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getFragmentSource](/apidocs/classes/filters.BaseFilter.md#getfragmentsource)

#### Defined in

[src/filters/Resize.ts:129](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L129)

___

### getMainParameter

**getMainParameter**(): `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| () => \{ `lanczosLobes`: `number` ; `resizeType`: [`TResizeType`](/apidocs/modules/filters.md#tresizetype) ; `scaleX`: `number` ; `scaleY`: `number` ; `type`: `string`  } \| () => \{ `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => \{ `uDelta`: ``null`` \| `WebGLUniformLocation` ; `uTaps`: ``null`` \| `WebGLUniformLocation`  } \| (`this`: `ResizeDuringWEBGLResize`, `gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| (`this`: `ResizeDuringWEBGLResize`) => `number` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `any`[] \| (`filterWindow`: `number`) => `string` \| (`this`: `ResizeDuringWEBGLResize`, `options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`lobes`: `number`) => (`x`: `number`) => `number` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| () => \{ `lanczosLobes`: `number` ; `resizeType`: [`TResizeType`](/apidocs/modules/filters.md#tresizetype) ; `scaleX`: `number` ; `scaleY`: `number` ; `type`: `string`  } \| () => \{ `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => \{ `uDelta`: ``null`` \| `WebGLUniformLocation` ; `uTaps`: ``null`` \| `WebGLUniformLocation`  } \| (`this`: `ResizeDuringWEBGLResize`, `gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| (`this`: `ResizeDuringWEBGLResize`) => `number` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `any`[] \| (`filterWindow`: `number`) => `string` \| (`this`: `ResizeDuringWEBGLResize`, `options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`lobes`: `number`) => (`x`: `number`) => `number` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 29 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void`

#### Returns

`undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| () => \{ `lanczosLobes`: `number` ; `resizeType`: [`TResizeType`](/apidocs/modules/filters.md#tresizetype) ; `scaleX`: `number` ; `scaleY`: `number` ; `type`: `string`  } \| () => \{ `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => \{ `uDelta`: ``null`` \| `WebGLUniformLocation` ; `uTaps`: ``null`` \| `WebGLUniformLocation`  } \| (`this`: `ResizeDuringWEBGLResize`, `gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| (`this`: `ResizeDuringWEBGLResize`) => `number` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `any`[] \| (`filterWindow`: `number`) => `string` \| (`this`: `ResizeDuringWEBGLResize`, `options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`lobes`: `number`) => (`x`: `number`) => `number` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| () => \{ `lanczosLobes`: `number` ; `resizeType`: [`TResizeType`](/apidocs/modules/filters.md#tresizetype) ; `scaleX`: `number` ; `scaleY`: `number` ; `type`: `string`  } \| () => \{ `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => \{ `uDelta`: ``null`` \| `WebGLUniformLocation` ; `uTaps`: ``null`` \| `WebGLUniformLocation`  } \| (`this`: `ResizeDuringWEBGLResize`, `gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| (`this`: `ResizeDuringWEBGLResize`) => `number` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `any`[] \| (`filterWindow`: `number`) => `string` \| (`this`: `ResizeDuringWEBGLResize`, `options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`lobes`: `number`) => (`x`: `number`) => `number` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 29 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void`

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getMainParameter](/apidocs/classes/filters.BaseFilter.md#getmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:351](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L351)

___

### getTaps

**getTaps**(`this`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |

#### Returns

`any`[]

#### Defined in

[src/filters/Resize.ts:134](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L134)

___

### getUniformLocations

**getUniformLocations**(`gl`, `program`): `Object`

Return WebGL uniform locations for this filter's shader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The GL canvas context used to compile this filter's shader. |
| `program` | `WebGLProgram` | This filter's compiled shader program. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `uDelta` | ``null`` \| `WebGLUniformLocation` |
| `uTaps` | ``null`` \| `WebGLUniformLocation` |

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getUniformLocations](/apidocs/classes/filters.BaseFilter.md#getuniformlocations)

#### Defined in

[src/filters/Resize.ts:94](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L94)

___

### hermiteFastResize

**hermiteFastResize**(`this`, `options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

hermiteFastResize

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ResizeDuring2DResize` | - |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) | - |
| `oW` | `number` | Original Width |
| `oH` | `number` | Original Height |
| `dW` | `number` | Destination Width |
| `dH` | `number` | Destination Height |

#### Returns

`ImageData`

#### Defined in

[src/filters/Resize.ts:490](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L490)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[isNeutralState](/apidocs/classes/filters.BaseFilter.md#isneutralstate)

#### Defined in

[src/filters/Resize.ts:215](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L215)

___

### lanczosCreate

**lanczosCreate**(`lobes`): (`x`: `number`) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lobes` | `number` |

#### Returns

`fn`

(`x`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

##### Returns

`number`

#### Defined in

[src/filters/Resize.ts:219](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L219)

___

### lanczosResize

**lanczosResize**(`this`, `options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

Filter lanczosResize

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ResizeDuring2DResize` | - |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) | - |
| `oW` | `number` | Original Width |
| `oH` | `number` | Original Height |
| `dW` | `number` | Destination Width |
| `dH` | `number` | Destination Height |

#### Returns

`ImageData`

#### Defined in

[src/filters/Resize.ts:336](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L336)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[retrieveShader](/apidocs/classes/filters.BaseFilter.md#retrieveshader)

#### Defined in

[src/filters/BaseFilter.ts:295](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L295)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[sendAttributeData](/apidocs/classes/filters.BaseFilter.md#sendattributedata)

#### Defined in

[src/filters/BaseFilter.ts:177](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L177)

___

### sendUniformData

**sendUniformData**(`this`, `gl`, `uniformLocations`): `void`

Send data from this filter to its shader program's uniforms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` | - |
| `gl` | `WebGLRenderingContext` | The GL canvas context used to compile this filter's shader. |
| `uniformLocations` | [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) | A map of string uniform names to WebGLUniformLocation objects |

#### Returns

`void`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[sendUniformData](/apidocs/classes/filters.BaseFilter.md#senduniformdata)

#### Defined in

[src/filters/Resize.ts:107](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L107)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[setMainParameter](/apidocs/classes/filters.BaseFilter.md#setmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:355](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L355)

___

### sliceByTwo

**sliceByTwo**(`options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

Filter sliceByTwo

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) | - |
| `oW` | `number` | Original Width |
| `oH` | `number` | Original Height |
| `dW` | `number` | Destination Width |
| `dH` | `number` | Destination Height |

#### Returns

`ImageData`

#### Defined in

[src/filters/Resize.ts:271](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L271)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[toJSON](/apidocs/classes/filters.BaseFilter.md#tojson)

#### Defined in

[src/filters/BaseFilter.ts:405](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L405)

___

### toObject

**toObject**(): `Object`

Returns object representation of an instance

#### Returns

`Object`

Object representation of an instance

| Name | Type |
| :------ | :------ |
| `lanczosLobes` | `number` |
| `resizeType` | [`TResizeType`](/apidocs/modules/filters.md#tresizetype) |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `type` | `string` |

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[toObject](/apidocs/classes/filters.BaseFilter.md#toobject)

#### Defined in

[src/filters/Resize.ts:560](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/Resize.ts#L560)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[unbindAdditionalTexture](/apidocs/classes/filters.BaseFilter.md#unbindadditionaltexture)

#### Defined in

[src/filters/BaseFilter.ts:345](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L345)

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

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[fromObject](/apidocs/classes/filters.BaseFilter.md#fromobject)

#### Defined in

[src/filters/BaseFilter.ts:410](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L410)
