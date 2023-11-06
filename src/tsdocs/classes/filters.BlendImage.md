# Class: BlendImage

[filters](/apidocs/modules/filters.md).BlendImage

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

- [`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)

  ↳ **`BlendImage`**

## Constructors

### constructor

**new BlendImage**(`options?`): [`BlendImage`](/apidocs/classes/filters.BlendImage.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`\<`string`, `any`\> | Options object |

#### Returns

[`BlendImage`](/apidocs/classes/filters.BlendImage.md)

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[constructor](/apidocs/classes/filters.BaseFilter.md#constructor)

#### Defined in

[src/filters/BaseFilter.ts:58](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L58)

## Properties

### alpha

 **alpha**: `number`

alpha value. represent the strength of the blend image operation.
not implemented.

#### Defined in

[src/filters/BlendImage.ts:62](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L62)

___

### image

 **image**: [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Color to make the blend operation with. default to a reddish color since black or white
gives always strong result.

#### Defined in

[src/filters/BlendImage.ts:54](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L54)

___

### mainParameter

 `Optional` `Private` **mainParameter**: keyof [`BlendImage`](/apidocs/classes/filters.BlendImage.md)

Name of the parameter that can be changed in the filter.
Some filters have more than one parameter and there is no
mainParameter

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[mainParameter](/apidocs/classes/filters.BaseFilter.md#mainparameter)

#### Defined in

[src/filters/BaseFilter.ts:52](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L52)

___

### mode

 **mode**: `TBlendImageMode`

#### Defined in

[src/filters/BlendImage.ts:56](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L56)

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

 `Static` **defaults**: `Partial`\<[`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`BlendImage`](/apidocs/classes/filters.BlendImage.md)\>\> = `blendImageDefaultValues`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[defaults](/apidocs/classes/filters.BaseFilter.md#defaults)

#### Defined in

[src/filters/BlendImage.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L66)

___

### type

 `Static` **type**: `string` = `'BlendImage'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[type](/apidocs/classes/filters.BaseFilter.md#type)

#### Defined in

[src/filters/BlendImage.ts:64](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L64)

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

[src/filters/BaseFilter.ts:265](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L265)

___

### applyTo2d

**applyTo2d**(`options`): `void`

Apply the Blend operation to a Uint8ClampedArray representing the pixels of an image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

`void`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[applyTo2d](/apidocs/classes/filters.BaseFilter.md#applyto2d)

#### Defined in

[src/filters/BlendImage.ts:116](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L116)

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

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[applyToWebGL](/apidocs/classes/filters.BaseFilter.md#applytowebgl)

#### Defined in

[src/filters/BlendImage.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L76)

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

### calculateMatrix

**calculateMatrix**(): `number`[]

Calculate a transformMatrix to adapt the image to blend over

#### Returns

`number`[]

#### Defined in

[src/filters/BlendImage.ts:94](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L94)

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

### createTexture

**createTexture**(`backend`, `image`): ``null`` \| `WebGLTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `backend` | [`WebGLFilterBackend`](/apidocs/classes/WebGLFilterBackend.md) |
| `image` | [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

``null`` \| `WebGLTexture`

#### Defined in

[src/filters/BlendImage.ts:84](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L84)

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

**getCacheKey**(): `string`

Returns a string that represent the current selected shader code for the filter.
Used to force recompilation when parameters change or to retrieve the shader from cache

#### Returns

`string`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getCacheKey](/apidocs/classes/filters.BaseFilter.md#getcachekey)

#### Defined in

[src/filters/BlendImage.ts:68](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L68)

___

### getFragmentSource

**getFragmentSource**(): `string`

#### Returns

`string`

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getFragmentSource](/apidocs/classes/filters.BaseFilter.md#getfragmentsource)

#### Defined in

[src/filters/BlendImage.ts:72](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L72)

___

### getMainParameter

**getMainParameter**(): `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> \| (`options?`: `any`) => `boolean` \| () => \{ `alpha`: `number` ; `image`: `Pick`\<`Omit`\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\> & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md) ; `mode`: `TBlendImageMode` ; `type`: `string`  } \| (`backend`: [`WebGLFilterBackend`](/apidocs/classes/WebGLFilterBackend.md), `image`: [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>) => ``null`` \| `WebGLTexture` \| () => \{ `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> \| (`options?`: `any`) => `boolean` \| () => \{ `alpha`: `number` ; `image`: `Pick`\<`Omit`\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\> & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md) ; `mode`: `TBlendImageMode` ; `type`: `string`  } \| (`backend`: [`WebGLFilterBackend`](/apidocs/classes/WebGLFilterBackend.md), `image`: [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>) => ``null`` \| `WebGLTexture` \| () => \{ `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 23 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `number`[] \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `number`[]

#### Returns

`undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> \| (`options?`: `any`) => `boolean` \| () => \{ `alpha`: `number` ; `image`: `Pick`\<`Omit`\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\> & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md) ; `mode`: `TBlendImageMode` ; `type`: `string`  } \| (`backend`: [`WebGLFilterBackend`](/apidocs/classes/WebGLFilterBackend.md), `image`: [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>) => ``null`` \| `WebGLTexture` \| () => \{ `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () => `undefined` \| `string` \| `number` \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => [`TWebGLProgramCacheItem`](/apidocs/modules.md#twebglprogramcacheitem) \| [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> \| (`options?`: `any`) => `boolean` \| () => \{ `alpha`: `number` ; `image`: `Pick`\<`Omit`\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\> & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md) ; `mode`: `TBlendImageMode` ; `type`: `string`  } \| (`backend`: [`WebGLFilterBackend`](/apidocs/classes/WebGLFilterBackend.md), `image`: [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>) => ``null`` \| `WebGLTexture` \| () => \{ `type`: `string`  } \| (`gl`: `WebGLRenderingContext`, `program`: `WebGLProgram`) => [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) \| (`gl`: `WebGLRenderingContext`, `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)) => `void` \| () => `string` \| () => `string` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `fragmentSource`: `string`, `vertexSource`: `string`) => \{ `attributeLocations`: [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) ; `program`: `WebGLProgram` ; `uniformLocations`: [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap)  } \| (`gl`: `WebGLRenderingContext`, `attributeLocations`: `Record`\<`string`, `number`\>, `aPositionData`: `Float32Array`) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`options`: [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)) => `void` \| (`gl`: `WebGLRenderingContext`, `texture`: `WebGLTexture`, `textureUnit`: `number`) => `void` \| (`gl`: `WebGLRenderingContext`, `textureUnit`: `number`) => `void` \| () =\> string \| number \| ((gl: WebGLRenderingContext, program: WebGLProgram) =\> TWebGLAttributeLocationMap) \| ... 23 more ... \| undefined \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `number`[] \| (`value`: `any`) => `void` \| (`options`: [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate)) => `void` \| () => `number`[]

#### Inherited from

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getMainParameter](/apidocs/classes/filters.BaseFilter.md#getmainparameter)

#### Defined in

[src/filters/BaseFilter.ts:351](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L351)

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

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[getUniformLocations](/apidocs/classes/filters.BaseFilter.md#getuniformlocations)

#### Defined in

[src/filters/BlendImage.ts:173](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L173)

___

### isNeutralState

**isNeutralState**(`options?`): `boolean`

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

[src/filters/BaseFilter.ts:233](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BaseFilter.ts#L233)

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

**sendUniformData**(`gl`, `uniformLocations`): `void`

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

[src/filters/BlendImage.ts:189](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L189)

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
| `alpha` | `number` |
| `image` | `Pick`\<`Omit`\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\> & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>, keyof [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md)\>, `never`\> & [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md) |
| `mode` | `TBlendImageMode` |
| `type` | `string` |

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[toObject](/apidocs/classes/filters.BaseFilter.md#toobject)

#### Defined in

[src/filters/BlendImage.ts:202](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L202)

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

**fromObject**(`object`, `options?`): `Promise`\<[`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)\>

Create filter instance from an object representation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Record`\<`string`, `any`\> | Object to create an instance from |
| `options?` | `Object` |  |
| `options.signal` | `AbortSignal` | handle aborting image loading, see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal |

#### Returns

`Promise`\<[`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)\>

**`Static`**

#### Overrides

[BaseFilter](/apidocs/classes/filters.BaseFilter.md).[fromObject](/apidocs/classes/filters.BaseFilter.md#fromobject)

#### Defined in

[src/filters/BlendImage.ts:219](https://github.com/fabricjs/fabric.js/blob/078809453/src/filters/BlendImage.ts#L219)
