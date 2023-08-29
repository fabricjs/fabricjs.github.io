# Class: BlendImage

[filters](../modules/filters.md).BlendImage

Image Blend filter class

**`Example`**

```ts
const filter = new filters.BlendColor({
 color: '#000',
 mode: 'multiply'
});

const filter = new BlendImage({
 image: fabricImageObject,
 mode: 'multiply',
 alpha: 0.5
});
object.filters.push(filter);
object.applyFilters();
canvas.renderAll();
```

## Hierarchy

- [`BaseFilter`](filters.BaseFilter.md)

  ↳ **`BlendImage`**

## Table of contents

### Constructors

- [constructor](filters.BlendImage.md#constructor)

### Properties

- [alpha](filters.BlendImage.md#alpha)
- [image](filters.BlendImage.md#image)
- [mainParameter](filters.BlendImage.md#mainparameter)
- [mode](filters.BlendImage.md#mode)
- [vertexSource](filters.BlendImage.md#vertexsource)
- [defaults](filters.BlendImage.md#defaults)
- [type](filters.BlendImage.md#type)

### Accessors

- [type](filters.BlendImage.md#type-1)

### Methods

- [\_setupFrameBuffer](filters.BlendImage.md#_setupframebuffer)
- [\_swapTextures](filters.BlendImage.md#_swaptextures)
- [applyTo](filters.BlendImage.md#applyto)
- [applyTo2d](filters.BlendImage.md#applyto2d)
- [applyToWebGL](filters.BlendImage.md#applytowebgl)
- [bindAdditionalTexture](filters.BlendImage.md#bindadditionaltexture)
- [calculateMatrix](filters.BlendImage.md#calculatematrix)
- [createHelpLayer](filters.BlendImage.md#createhelplayer)
- [createProgram](filters.BlendImage.md#createprogram)
- [createTexture](filters.BlendImage.md#createtexture)
- [getAttributeLocations](filters.BlendImage.md#getattributelocations)
- [getCacheKey](filters.BlendImage.md#getcachekey)
- [getFragmentSource](filters.BlendImage.md#getfragmentsource)
- [getMainParameter](filters.BlendImage.md#getmainparameter)
- [getUniformLocations](filters.BlendImage.md#getuniformlocations)
- [isNeutralState](filters.BlendImage.md#isneutralstate)
- [retrieveShader](filters.BlendImage.md#retrieveshader)
- [sendAttributeData](filters.BlendImage.md#sendattributedata)
- [sendUniformData](filters.BlendImage.md#senduniformdata)
- [setMainParameter](filters.BlendImage.md#setmainparameter)
- [toJSON](filters.BlendImage.md#tojson)
- [toObject](filters.BlendImage.md#toobject)
- [unbindAdditionalTexture](filters.BlendImage.md#unbindadditionaltexture)
- [fromObject](filters.BlendImage.md#fromobject)

## Constructors

### constructor

• **new BlendImage**(`options?`)

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

### alpha

• **alpha**: `number`

alpha value. represent the strength of the blend image operation.
not implemented.

#### Defined in

[src/filters/BlendImage.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L62)

___

### image

• **image**: [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Color to make the blend operation with. default to a reddish color since black or white
gives always strong result.

#### Defined in

[src/filters/BlendImage.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L54)

___

### mainParameter

• `Optional` `Private` **mainParameter**: keyof [`BlendImage`](filters.BlendImage.md)

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[BaseFilter](filters.BaseFilter.md).[mainParameter](filters.BaseFilter.md#mainparameter)

#### Defined in

[src/filters/BaseFilter.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BaseFilter.ts#L51)

___

### mode

• **mode**: `TBlendImageMode`

#### Defined in

[src/filters/BlendImage.ts:56](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L56)

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

▪ `Static` **defaults**: `Partial`<[`TClassProperties`](../modules.md#tclassproperties)<[`BlendImage`](filters.BlendImage.md)\>\> = `blendImageDefaultValues`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[defaults](filters.BaseFilter.md#defaults)

#### Defined in

[src/filters/BlendImage.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L66)

___

### type

▪ `Static` **type**: `string` = `'BlendImage'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[BaseFilter](filters.BaseFilter.md).[type](filters.BaseFilter.md#type)

#### Defined in

[src/filters/BlendImage.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L64)

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

Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](../modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[applyTo2d](filters.BaseFilter.md#applyto2d)

#### Defined in

[src/filters/BlendImage.ts:116](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L116)

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

#### Overrides

[BaseFilter](filters.BaseFilter.md).[applyToWebGL](filters.BaseFilter.md#applytowebgl)

#### Defined in

[src/filters/BlendImage.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L76)

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

### calculateMatrix

▸ **calculateMatrix**(): `number`[]

Calculate a transformMatrix to adapt the image to blend over

#### Returns

`number`[]

#### Defined in

[src/filters/BlendImage.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L94)

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

### createTexture

▸ **createTexture**(`backend`, `image`): ``null`` \| `WebGLTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `backend` | [`WebGLFilterBackend`](WebGLFilterBackend.md) |
| `image` | [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

``null`` \| `WebGLTexture`

#### Defined in

[src/filters/BlendImage.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L84)

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

#### Overrides

[BaseFilter](filters.BaseFilter.md).[getCacheKey](filters.BaseFilter.md#getcachekey)

#### Defined in

[src/filters/BlendImage.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L68)

___

### getFragmentSource

▸ **getFragmentSource**(): `string`

#### Returns

`string`

#### Overrides

[BaseFilter](filters.BaseFilter.md).[getFragmentSource](filters.BaseFilter.md#getfragmentsource)

#### Defined in

[src/filters/BlendImage.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L72)

___

### getMainParameter

▸ **getMainParameter**(): `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> \| (`options?`: `any`) => `boolean` \| () => { `alpha`: `number` ; `image`: `Pick`<`Omit`<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\> & [`TClassProperties`](../modules.md#tclassproperties)<[`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](../interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](../interfaces/SerializedImageProps.md) ; `mode`: `TBlendImageMode` ; `type`: `string`  } \| (`backend`: [`WebGLFilterBackend`](WebGLFilterBackend.md), `image`: [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>) => ``null`` \| `WebGLTexture` \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> \| (`options?`: `any`) => `boolean` \| () => { `alpha`: `number` ; `image`: `Pick`<`Omit`<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\> & [`TClassProperties`](../modules.md#tclassproperties)<[`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](../interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](../interfaces/SerializedImageProps.md) ; `mode`: `TBlendImageMode` ; `type`: `string`  } \| (`backend`: [`WebGLFilterBackend`](WebGLFilterBackend.md), `image`: [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>) => ``null`` \| `WebGLTexture` \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 23 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `number`[] \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `number`[]

#### Returns

`undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> \| (`options?`: `any`) => `boolean` \| () => { `alpha`: `number` ; `image`: `Pick`<`Omit`<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\> & [`TClassProperties`](../modules.md#tclassproperties)<[`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](../interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](../interfaces/SerializedImageProps.md) ; `mode`: `TBlendImageMode` ; `type`: `string`  } \| (`backend`: [`WebGLFilterBackend`](WebGLFilterBackend.md), `image`: [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>) => ``null`` \| `WebGLTexture` \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](../modules.md#twebglprogramcacheitem) \| [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> \| (`options?`: `any`) => `boolean` \| () => { `alpha`: `number` ; `image`: `Pick`<`Omit`<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\> & [`TClassProperties`](../modules.md#tclassproperties)<[`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](../interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](../interfaces/SerializedImageProps.md) ; `mode`: `TBlendImageMode` ; `type`: `string`  } \| (`backend`: [`WebGLFilterBackend`](WebGLFilterBackend.md), `image`: [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>) => ``null`` \| `WebGLTexture` \| () => { `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate) \| [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => { `attributeLocations`: [`TWebGLAttributeLocationMap`](../modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](../modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](../modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 23 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `number`[] \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](../modules.md#t2dpipelinestate)) => `void` \| () => `number`[]

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

[src/filters/BlendImage.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L173)

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

[src/filters/BlendImage.ts:189](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L189)

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
| `alpha` | `number` |
| `image` | `Pick`<`Omit`<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\> & [`TClassProperties`](../modules.md#tclassproperties)<[`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](../interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](../interfaces/SerializedImageProps.md) |
| `mode` | `TBlendImageMode` |
| `type` | `string` |

#### Overrides

[BaseFilter](filters.BaseFilter.md).[toObject](filters.BaseFilter.md#toobject)

#### Defined in

[src/filters/BlendImage.ts:202](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L202)

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

Create filter instance from an object representation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Record`<`string`, `any`\> | Object to create an instance from |
| `options?` | `Object` |  |
| `options.signal` | `AbortSignal` | handle aborting image loading, see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal |

#### Returns

`Promise`<[`BaseFilter`](filters.BaseFilter.md)\>

**`Static`**

#### Overrides

[BaseFilter](filters.BaseFilter.md).[fromObject](filters.BaseFilter.md#fromobject)

#### Defined in

[src/filters/BlendImage.ts:219](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/filters/BlendImage.ts#L219)
