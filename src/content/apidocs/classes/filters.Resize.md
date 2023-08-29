# Class: Resize

[filters](../modules/filters.md).Resize

Resize image filter class

**`Example`**

```ts
const filter = new Resize();
object.filters.push(filter);
object.applyFilters(canvas.renderAll.bind(canvas));
```

## Hierarchy

- [`BaseFilter`](filters.BaseFilter.md)

  ↳ **`Resize`**

## Table of contents

### Constructors

- [constructor](filters.Resize.md#constructor)

### Properties

- [fragmentSourceTOP](filters.Resize.md#fragmentsourcetop)
- [lanczosLobes](filters.Resize.md#lanczoslobes)
- [mainParameter](filters.Resize.md#mainparameter)
- [resizeType](filters.Resize.md#resizetype)
- [scaleX](filters.Resize.md#scalex)
- [scaleY](filters.Resize.md#scaley)
- [vertexSource](filters.Resize.md#vertexsource)
- [defaults](filters.Resize.md#defaults)
- [type](filters.Resize.md#type)

### Accessors

- [type](filters.Resize.md#type-1)

### Methods

- [\_setupFrameBuffer](filters.Resize.md#_setupframebuffer)
- [\_swapTextures](filters.Resize.md#_swaptextures)
- [applyTo](filters.Resize.md#applyto)
- [applyTo2d](filters.Resize.md#applyto2d)
- [applyToForWebgl](filters.Resize.md#applytoforwebgl)
- [applyToWebGL](filters.Resize.md#applytowebgl)
- [bilinearFiltering](filters.Resize.md#bilinearfiltering)
- [bindAdditionalTexture](filters.Resize.md#bindadditionaltexture)
- [createHelpLayer](filters.Resize.md#createhelplayer)
- [createProgram](filters.Resize.md#createprogram)
- [generateShader](filters.Resize.md#generateshader)
- [getAttributeLocations](filters.Resize.md#getattributelocations)
- [getCacheKey](filters.Resize.md#getcachekey)
- [getFilterWindow](filters.Resize.md#getfilterwindow)
- [getFragmentSource](filters.Resize.md#getfragmentsource)
- [getMainParameter](filters.Resize.md#getmainparameter)
- [getTaps](filters.Resize.md#gettaps)
- [getUniformLocations](filters.Resize.md#getuniformlocations)
- [hermiteFastResize](filters.Resize.md#hermitefastresize)
- [isNeutralState](filters.Resize.md#isneutralstate)
- [lanczosCreate](filters.Resize.md#lanczoscreate)
- [lanczosResize](filters.Resize.md#lanczosresize)
- [retrieveShader](filters.Resize.md#retrieveshader)
- [sendAttributeData](filters.Resize.md#sendattributedata)
- [sendUniformData](filters.Resize.md#senduniformdata)
- [setMainParameter](filters.Resize.md#setmainparameter)
- [sliceByTwo](filters.Resize.md#slicebytwo)
- [toJSON](filters.Resize.md#tojson)
- [toObject](filters.Resize.md#toobject)
- [unbindAdditionalTexture](filters.Resize.md#unbindadditionaltexture)
- [fromObject](filters.Resize.md#fromobject)

## Constructors

### constructor

• **new Resize**(`options?`)

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

### fragmentSourceTOP

• **fragmentSourceTOP**: `string`

#### Defined in

[src/filters/Resize.ts:82](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L82)

___

### lanczosLobes

• **lanczosLobes**: `number`

LanczosLobes parameter for lanczos filter, valid for resizeType lanczos

**`Param`**

**`Default`**

```ts

```

#### Defined in

[src/filters/Resize.ts:80](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L80)

___

### mainParameter

• `Optional` `Private` **mainParameter**: keyof [`Resize`](filters.Resize.md)

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[mainParameter](filters.BaseFilter.md#mainparameter)

#### Defined in

[src/filters/BaseFilter.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L51)

___

### resizeType

• **resizeType**: [`TResizeType`](../modules/filters.md#tresizetype)

Resize type
for webgl resizeType is just lanczos, for canvas2d can be:
bilinear, hermite, sliceHack, lanczos.

**`Default`**

```ts

```

#### Defined in

[src/filters/Resize.ts:59](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L59)

___

### scaleX

• **scaleX**: `number`

Scale factor for resizing, x axis

**`Param`**

**`Default`**

```ts

```

#### Defined in

[src/filters/Resize.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L66)

___

### scaleY

• **scaleY**: `number`

Scale factor for resizing, y axis

**`Param`**

**`Default`**

```ts

```

#### Defined in

[src/filters/Resize.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L73)

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

▪ `Static` **defaults**: `Partial`<[`TClassProperties`](../modules.md#tclassproperties)<[`Resize`](filters.Resize.md)\>\> = `resizeDefaultValues`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[defaults](filters.BaseFilter.md#defaults)

#### Defined in

[src/filters/Resize.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L86)

___

### type

▪ `Static` **type**: `string` = `'Resize'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[BaseFilter](filters.BaseFilter.md).[type](filters.BaseFilter.md#type)

#### Defined in

[src/filters/Resize.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L84)

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

Apply the resize filter to the image
Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[applyTo](filters.BaseFilter.md#applyto)

#### Defined in

[src/filters/Resize.ts:207](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L207)

___

### applyTo2d

▸ **applyTo2d**(`this`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuring2DResize` |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[applyTo2d](filters.BaseFilter.md#applyto2d)

#### Defined in

[src/filters/Resize.ts:233](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L233)

___

### applyToForWebgl

▸ **applyToForWebgl**(`this`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |
| `options` | [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) |

#### Returns

`void`

#### Defined in

[src/filters/Resize.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L173)

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

### bilinearFiltering

▸ **bilinearFiltering**(`this`, `options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

bilinearFiltering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ResizeDuring2DResize` | - |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) | - |
| `oW` | `number` | Original Width |
| `oH` | `number` | Original Height |
| `dW` | `number` | Destination Width |
| `dH` | `number` | Destination Height |

#### Returns

`ImageData`

#### Defined in

[src/filters/Resize.ts:427](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L427)

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

### generateShader

▸ **generateShader**(`filterWindow`): `string`

Generate vertex and shader sources from the necessary steps numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterWindow` | `number` |

#### Returns

`string`

#### Defined in

[src/filters/Resize.ts:149](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L149)

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

▸ **getCacheKey**(`this`): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |

#### Returns

`string`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[getCacheKey](filters.BaseFilter.md#getcachekey)

#### Defined in

[src/filters/Resize.ts:124](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L124)

___

### getFilterWindow

▸ **getFilterWindow**(`this`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |

#### Returns

`number`

#### Defined in

[src/filters/Resize.ts:119](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L119)

___

### getFragmentSource

▸ **getFragmentSource**(`this`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |

#### Returns

`string`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[getFragmentSource](filters.BaseFilter.md#getfragmentsource)

#### Defined in

[src/filters/Resize.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L129)

___

### getMainParameter

▸ **getMainParameter**(): `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| () => { `lanczosLobes`: `number` ; `resizeType`: [`TResizeType`](../modules/filters.md#tresizetype) ; `scaleX`: `number` ; `scaleY`: `number` ; `type`: `string`  } \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => { `uDelta`: ``null`` \| `WebGLUniformLocation` ; `uTaps`: ``null`` \| `WebGLUniformLocation`  } \| (`this`: `ResizeDuringWEBGLResize`, `gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| (`this`: `ResizeDuringWEBGLResize`) => `number` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `any`[] \| (`filterWindow`: `number`) => `string` \| (`this`: `ResizeDuringWEBGLResize`, `options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`lobes`: `number`) => (`x`: `number`) => `number` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| () => { `lanczosLobes`: `number` ; `resizeType`: [`TResizeType`](../modules/filters.md#tresizetype) ; `scaleX`: `number` ; `scaleY`: `number` ; `type`: `string`  } \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => { `uDelta`: ``null`` \| `WebGLUniformLocation` ; `uTaps`: ``null`` \| `WebGLUniformLocation`  } \| (`this`: `ResizeDuringWEBGLResize`, `gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| (`this`: `ResizeDuringWEBGLResize`) => `number` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `any`[] \| (`filterWindow`: `number`) => `string` \| (`this`: `ResizeDuringWEBGLResize`, `options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`lobes`: `number`) => (`x`: `number`) => `number` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 29 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void`

#### Returns

`undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| () => { `lanczosLobes`: `number` ; `resizeType`: [`TResizeType`](../modules/filters.md#tresizetype) ; `scaleX`: `number` ; `scaleY`: `number` ; `type`: `string`  } \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => { `uDelta`: ``null`` \| `WebGLUniformLocation` ; `uTaps`: ``null`` \| `WebGLUniformLocation`  } \| (`this`: `ResizeDuringWEBGLResize`, `gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| (`this`: `ResizeDuringWEBGLResize`) => `number` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `any`[] \| (`filterWindow`: `number`) => `string` \| (`this`: `ResizeDuringWEBGLResize`, `options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`lobes`: `number`) => (`x`: `number`) => `number` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| () => { `lanczosLobes`: `number` ; `resizeType`: [`TResizeType`](../modules/filters.md#tresizetype) ; `scaleX`: `number` ; `scaleY`: `number` ; `type`: `string`  } \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => { `uDelta`: ``null`` \| `WebGLUniformLocation` ; `uTaps`: ``null`` \| `WebGLUniformLocation`  } \| (`this`: `ResizeDuringWEBGLResize`, `gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| (`this`: `ResizeDuringWEBGLResize`) => `number` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `string` \| (`this`: `ResizeDuringWEBGLResize`) => `any`[] \| (`filterWindow`: `number`) => `string` \| (`this`: `ResizeDuringWEBGLResize`, `options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `boolean` \| (`lobes`: `number`) => (`x`: `number`) => `number` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`this`: `ResizeDuring2DResize`, `options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate), `oW`: `number`, `oH`: `number`, `dW`: `number`, `dH`: `number`) => `ImageData` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 29 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void`

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[getMainParameter](filters.BaseFilter.md#getmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:349](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L349)

___

### getTaps

▸ **getTaps**(`this`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` |

#### Returns

`any`[]

#### Defined in

[src/filters/Resize.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L134)

___

### getUniformLocations

▸ **getUniformLocations**(`gl`, `program`): `Object`

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

[BaseFilter](filters.BaseFilter.md).[getUniformLocations](filters.BaseFilter.md#getuniformlocations)

#### Defined in

[src/filters/Resize.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L94)

___

### hermiteFastResize

▸ **hermiteFastResize**(`this`, `options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

hermiteFastResize

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ResizeDuring2DResize` | - |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) | - |
| `oW` | `number` | Original Width |
| `oH` | `number` | Original Height |
| `dW` | `number` | Destination Width |
| `dH` | `number` | Destination Height |

#### Returns

`ImageData`

#### Defined in

[src/filters/Resize.ts:490](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L490)

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

[src/filters/Resize.ts:215](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L215)

___

### lanczosCreate

▸ **lanczosCreate**(`lobes`): (`x`: `number`) => `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lobes` | `number` |

#### Returns

`fn`

▸ (`x`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

##### Returns

`number`

#### Defined in

[src/filters/Resize.ts:219](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L219)

___

### lanczosResize

▸ **lanczosResize**(`this`, `options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

Filter lanczosResize

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ResizeDuring2DResize` | - |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) | - |
| `oW` | `number` | Original Width |
| `oH` | `number` | Original Height |
| `dW` | `number` | Destination Width |
| `dH` | `number` | Destination Height |

#### Returns

`ImageData`

#### Defined in

[src/filters/Resize.ts:336](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L336)

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

▸ **sendUniformData**(`this`, `gl`, `uniformLocations`): `void`

Send data from this filter to its shader program's uniforms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ResizeDuringWEBGLResize` | - |
| `gl` | `WebGLRenderingContext` | The GL canvas context used to compile this filter's shader. |
| `uniformLocations` | [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) | A map of string uniform names to WebGLUniformLocation objects |

#### Returns

`void`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[sendUniformData](filters.BaseFilter.md#senduniformdata)

#### Defined in

[src/filters/Resize.ts:107](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L107)

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

### sliceByTwo

▸ **sliceByTwo**(`options`, `oW`, `oH`, `dW`, `dH`): `ImageData`

Filter sliceByTwo

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) | - |
| `oW` | `number` | Original Width |
| `oH` | `number` | Original Height |
| `dW` | `number` | Destination Width |
| `dH` | `number` | Destination Height |

#### Returns

`ImageData`

#### Defined in

[src/filters/Resize.ts:271](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L271)

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
| `lanczosLobes` | `number` |
| `resizeType` | [`TResizeType`](../modules/filters.md#tresizetype) |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `type` | `string` |

#### Overrides

[BaseFilter](filters.BaseFilter.md).[toObject](filters.BaseFilter.md#toobject)

#### Defined in

[src/filters/Resize.ts:560](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/Resize.ts#L560)

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
