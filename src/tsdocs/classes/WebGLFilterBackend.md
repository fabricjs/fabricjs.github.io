# Class: WebGLFilterBackend

## Constructors

### constructor

• **new WebGLFilterBackend**(`«destructured»?`): [`WebGLFilterBackend`](/apidocs/classes/WebGLFilterBackend.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `tileSize` | `undefined` \| `number` |

#### Returns

[`WebGLFilterBackend`](/apidocs/classes/WebGLFilterBackend.md)

#### Defined in

[src/filters/WebGLFilterBackend.ts:57](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L57)

## Properties

### aPosition

• **aPosition**: `Float32Array`

Define ...

#### Defined in

[src/filters/WebGLFilterBackend.ts:18](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L18)

___

### canvas

• **canvas**: `HTMLCanvasElement`

#### Defined in

[src/filters/WebGLFilterBackend.ts:26](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L26)

___

### gl

• **gl**: `WebGLRenderingContext`

The Webgl context that will execute the operations for filtering

#### Defined in

[src/filters/WebGLFilterBackend.ts:31](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L31)

___

### gpuInfo

• **gpuInfo**: `any`

Contains GPU info for debug

#### Defined in

[src/filters/WebGLFilterBackend.ts:46](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L46)

___

### imageBuffer

• `Optional` **imageBuffer**: `ArrayBuffer`

If GLPut data is the fastest operation, or if forced, this buffer will be used
to transfer the data back in the 2d logic

#### Defined in

[src/filters/WebGLFilterBackend.ts:24](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L24)

___

### programCache

• **programCache**: `any`

Keyed map for shader cache

#### Defined in

[src/filters/WebGLFilterBackend.ts:36](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L36)

___

### resources

• **resources**: [`TPipelineResources`](/apidocs/modules.md#tpipelineresources) = `{}`

Experimental. This object is a sort of repository of help layers used to avoid
of recreating them during frequent filtering. If you are previewing a filter with
a slider you probably do not want to create help layers every filter step.
in this object there will be appended some canvases, created once, resized sometimes
cleared never. Clearing is left to the developer.

#### Defined in

[src/filters/WebGLFilterBackend.ts:55](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L55)

___

### textureCache

• **textureCache**: [`TTextureCache`](/apidocs/modules.md#ttexturecache)

Keyed map for texture cache

#### Defined in

[src/filters/WebGLFilterBackend.ts:41](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L41)

___

### tileSize

• **tileSize**: `number`

#### Defined in

[src/filters/WebGLFilterBackend.ts:13](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L13)

## Methods

### applyFilters

▸ **applyFilters**(`filters`, `source`, `width`, `height`, `targetCanvas`, `cacheKey?`): `undefined` \| [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)

Attempts to apply the requested filters to the source provided, drawing the filtered output
to the provided target canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filters` | [`BaseFilter`](/apidocs/classes/filters.BaseFilter.md)[] | The filters to apply. |
| `source` | `TexImageSource` | The source to be filtered. |
| `width` | `number` | The width of the source input. |
| `height` | `number` | The height of the source input. |
| `targetCanvas` | `HTMLCanvasElement` | The destination for filtered output to be drawn. |
| `cacheKey?` | `string` | A key used to cache resources related to the source. If omitted, caching will be skipped. |

#### Returns

`undefined` \| [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate)

#### Defined in

[src/filters/WebGLFilterBackend.ts:153](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L153)

___

### captureGPUInfo

▸ **captureGPUInfo**(): `any`

Attempt to extract GPU information strings from a WebGL context.

Useful information when debugging or blacklisting specific GPUs.

#### Returns

`any`

A GPU info object with renderer and vendor strings.

#### Defined in

[src/filters/WebGLFilterBackend.ts:398](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L398)

___

### chooseFastestCopyGLTo2DMethod

▸ **chooseFastestCopyGLTo2DMethod**(`width`, `height`): `void`

Pick a method to copy data from GL context to 2d canvas.  In some browsers using
drawImage should be faster, but is also bugged for a small combination of old hardware
and drivers.
putImageData is faster than drawImage for that specific operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/filters/WebGLFilterBackend.ts:79](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L79)

___

### clearWebGLCaches

▸ **clearWebGLCaches**(): `void`

Wipe out WebGL-related caches.

#### Returns

`void`

#### Defined in

[src/filters/WebGLFilterBackend.ts:242](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L242)

___

### copyGLTo2D

▸ **copyGLTo2D**(`gl`, `pipelineState`): `void`

Copy an input WebGL canvas on to an output 2D canvas.

The WebGL canvas is assumed to be upside down, with the top-left pixel of the
desired output image appearing in the bottom-left corner of the WebGL canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | - |
| `pipelineState` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) | The 2D target canvas to copy on to. |

#### Returns

`void`

#### Defined in

[src/filters/WebGLFilterBackend.ts:367](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L367)

___

### createTexture

▸ **createTexture**(`gl`, `width`, `height`, `textureImageSource?`, `filter?`): ``null`` \| `WebGLTexture`

Create a WebGL texture object.

Accepts specific dimensions to initialize the texture to or a source image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The GL context to use for creating the texture. |
| `width` | `number` | The width to initialize the texture at. |
| `height` | `number` | The height to initialize the texture. |
| `textureImageSource?` | `TexImageSource` | A source for the texture data. |
| `filter?` | `number` | gl.NEAREST default or gl.LINEAR filters for the texture. This filter is very useful for LUTs filters. If you need interpolation use gl.LINEAR |

#### Returns

``null`` \| `WebGLTexture`

#### Defined in

[src/filters/WebGLFilterBackend.ts:260](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L260)

___

### createWebGLCanvas

▸ **createWebGLCanvas**(`width`, `height`): `void`

Create a canvas element and associated WebGL context and attaches them as
class properties to the GLFilterBackend class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/filters/WebGLFilterBackend.ts:119](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L119)

___

### dispose

▸ **dispose**(): `void`

Detach event listeners, remove references, and clean up caches.

#### Returns

`void`

#### Defined in

[src/filters/WebGLFilterBackend.ts:227](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L227)

___

### evictCachesForKey

▸ **evictCachesForKey**(`cacheKey`): `void`

Clear out cached resources related to a source image that has been
filtered previously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheKey` | `string` | The cache key provided when the source image was filtered. |

#### Returns

`void`

#### Defined in

[src/filters/WebGLFilterBackend.ts:351](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L351)

___

### getCachedTexture

▸ **getCachedTexture**(`uniqueId`, `textureImageSource`, `filter?`): ``null`` \| `WebGLTexture`

Can be optionally used to get a texture from the cache array

If an existing texture is not found, a new texture is created and cached.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueId` | `string` | A cache key to use to find an existing texture. |
| `textureImageSource` | `TexImageSource` | A source to use to create the texture cache entry if one does not already exist. |
| `filter?` | `number` | - |

#### Returns

``null`` \| `WebGLTexture`

#### Defined in

[src/filters/WebGLFilterBackend.ts:320](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L320)

___

### setupGLContext

▸ **setupGLContext**(`width`, `height`): `void`

Setup a WebGL context suitable for filtering, and bind any needed event handlers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/filters/WebGLFilterBackend.ts:66](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/filters/WebGLFilterBackend.ts#L66)
