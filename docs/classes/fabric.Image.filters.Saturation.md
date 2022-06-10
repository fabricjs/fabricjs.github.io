# Saturation

## [fabric](fabric.html)[.Image](fabric.Image.html)[.filters](fabric.Image.filters.html).Saturation #### [new Saturation()](#Saturation)

Saturate filter class

Source:

* [fabric.js](fabric.js.html), [line 24960](fabric.js.html#line24960)

See:

* [fabric.Image.filters.Saturation#initialize](fabric.Image.filters.Saturation.html#initialize) for constructor definition
* [ImageFilters demo](http://fabricjs.com/image-filters)

##### Example

```
var filter = new fabric.Image.filters.Saturation({
  saturation: 1
});
object.filters.push(filter);
object.applyFilters();
```

### Extends

* [fabric.Image.filters.BaseFilter](fabric.Image.filters.BaseFilter.html)

### Members

#### [saturation](#saturation)

Saturation value, from -1 to 1. Increases/decreases the color saturation. A value of 0 has no effect.

Source:

* [fabric.js](fabric.js.html), [line 25005](fabric.js.html#line25005)

#### [type](#type)

Filter type

Overrides:

* [fabric.Image.filters.BaseFilter#type](fabric.Image.filters.BaseFilter.html#type)

Default Value:

* Saturation

Source:

* [fabric.js](fabric.js.html), [line 24981](fabric.js.html#line24981)

### Methods

#### [applyTo(options)](#applyTo)

Apply this filter to the input image data provided. Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codepasses/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"The number of filters remaining to be executed/td        /tr            tr                            td class="name"codewebgl/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                                    td class="description last"Whether to use webgl to render the filter./td        /tr            tr                            td class="name"codesourceTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture setup as the source to be filtered./td        /tr            tr                            td class="name"codetargetTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture where filtered output should be drawn./td        /tr            tr                            td class="name"codecontext/code/td                        td class="type"                            span class="param-type"WebGLRenderingContext/span                        /td                                    td class="description last"The GL context used for rendering./td        /tr            tr                            td class="name"codeprogramCache/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"A map of compiled shader programs, keyed by filter type./td        /tr        /tbody/table|

Inherited From:

* [fabric.Image.filters.BaseFilter#applyTo](fabric.Image.filters.BaseFilter.html#applyTo)

Source:

* [fabric.js](fabric.js.html), [line 22285](fabric.js.html#line22285)

#### [applyTo2d(options)](#applyTo2d)

Apply the Saturation operation to a Uint8ClampedArray representing the pixels of an image.

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codeimageData/code/td                        td class="type"                            span class="param-type"ImageData/span                        /td                                    td class="description last"The Uint8ClampedArray to be filtered./td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 25022](fabric.js.html#line25022)

#### [applyToWebGL(options)](#applyToWebGL)

Apply this filter using webgl.

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codepasses/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"The number of filters remaining to be executed/td        /tr            tr                            td class="name"codewebgl/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                                    td class="description last"Whether to use webgl to render the filter./td        /tr            tr                            td class="name"codeoriginalTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture of the original input image./td        /tr            tr                            td class="name"codesourceTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture setup as the source to be filtered./td        /tr            tr                            td class="name"codetargetTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture where filtered output should be drawn./td        /tr            tr                            td class="name"codecontext/code/td                        td class="type"                            span class="param-type"WebGLRenderingContext/span                        /td                                    td class="description last"The GL context used for rendering./td        /tr            tr                            td class="name"codeprogramCache/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"A map of compiled shader programs, keyed by filter type./td        /tr        /tbody/table|

Inherited From:

* [fabric.Image.filters.BaseFilter#applyToWebGL](fabric.Image.filters.BaseFilter.html#applyToWebGL)

Source:

* [fabric.js](fabric.js.html), [line 22321](fabric.js.html#line22321)

#### [createHelpLayer()](#createHelpLayer)

If needed by a 2d filter, this functions can create an helper canvas to be used remember that options.targetCanvas is available for use till end of chain.

Inherited From:

* [fabric.Image.filters.BaseFilter#createHelpLayer](fabric.Image.filters.BaseFilter.html#createHelpLayer)

Source:

* [fabric.js](fabric.js.html), [line 22378](fabric.js.html#line22378)

#### [createProgram(gl, fragmentSource, vertexSource)](#createProgram)

Compile this filter's shader program.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The GL canvas context to use for shader compilation.|
|`fragmentSource`|String|fragmentShader source for compilation|
|`vertexSource`|String|vertexShader source for compilation|

Inherited From:

* [fabric.Image.filters.BaseFilter#createProgram](fabric.Image.filters.BaseFilter.html#createProgram)

Source:

* [fabric.js](fabric.js.html), [line 22121](fabric.js.html#line22121)

#### [getAttributeLocations(gl, program)&rarr; {Object}](#getAttributeLocations)

Return a map of attribute names to WebGLAttributeLocation objects.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The canvas context used to compile the shader program.|
|`program`|WebGLShaderProgram|The shader program from which to take attribute locations.|

Inherited From:

* [fabric.Image.filters.BaseFilter#getAttributeLocations](fabric.Image.filters.BaseFilter.html#getAttributeLocations)

Source:

* [fabric.js](fabric.js.html), [line 22182](fabric.js.html#line22182)

##### Returns:

A map of attribute names to attribute locations.

Type

Object

#### [getUniformLocations(gl, program)](#getUniformLocations)

Return WebGL uniform locations for this filter's shader.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The GL canvas context used to compile this filter's shader.|
|`program`|WebGLShaderProgram|This filter's compiled shader program.|

Overrides:

* [fabric.Image.filters.BaseFilter#getUniformLocations](fabric.Image.filters.BaseFilter.html#getUniformLocations)

Source:

* [fabric.js](fabric.js.html), [line 25044](fabric.js.html#line25044)

#### [initialize(optionsopt)](#initialize)

Constructor

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object|

Inherited From:

* [fabric.Image.filters.BaseFilter#initialize](fabric.Image.filters.BaseFilter.html#initialize)

Source:

* [fabric.js](fabric.js.html), [line 22098](fabric.js.html#line22098)

#### [isNeutralState(options)](#isNeutralState)

Generic isNeutral implementation for one parameter based filters. Used only in image applyFilters to discard filters that will not have an effect on the image Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )

##### Parameters:
|Name|Type|Description| |
|`options`|Object|

Inherited From:

* [fabric.Image.filters.BaseFilter#isNeutralState](fabric.Image.filters.BaseFilter.html#isNeutralState)

Source:

* [fabric.js](fabric.js.html), [line 22251](fabric.js.html#line22251)

#### [retrieveShader(options)](#retrieveShader)

Retrieves the cached shader.

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codecontext/code/td                        td class="type"                            span class="param-type"WebGLRenderingContext/span                        /td                                    td class="description last"The GL context used for rendering./td        /tr            tr                            td class="name"codeprogramCache/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"A map of compiled shader programs, keyed by filter type./td        /tr        /tbody/table|

Inherited From:

* [fabric.Image.filters.BaseFilter#retrieveShader](fabric.Image.filters.BaseFilter.html#retrieveShader)

Source:

* [fabric.js](fabric.js.html), [line 22302](fabric.js.html#line22302)

#### [sendAttributeData(gl, attributeLocations)](#sendAttributeData)

Send attribute data from this filter to its shader program on the GPU.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The canvas context used to compile the shader program.|
|`attributeLocations`|Object|A map of shader attribute names to their locations.|

Inherited From:

* [fabric.Image.filters.BaseFilter#sendAttributeData](fabric.Image.filters.BaseFilter.html#sendAttributeData)

Source:

* [fabric.js](fabric.js.html), [line 22208](fabric.js.html#line22208)

#### [sendUniformData(gl, uniformLocations)](#sendUniformData)

Send data from this filter to its shader program's uniforms.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The GL canvas context used to compile this filter's shader.|
|`uniformLocations`|Object|A map of string uniform names to WebGLUniformLocation objects|

Overrides:

* [fabric.Image.filters.BaseFilter#sendUniformData](fabric.Image.filters.BaseFilter.html#sendUniformData)

Source:

* [fabric.js](fabric.js.html), [line 25056](fabric.js.html#line25056)

#### [setOptions(optionsopt)](#setOptions)

Sets filter's properties from options

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object|

Inherited From:

* [fabric.Image.filters.BaseFilter#setOptions](fabric.Image.filters.BaseFilter.html#setOptions)

Source:

* [fabric.js](fabric.js.html), [line 22108](fabric.js.html#line22108)

#### [toJSON()&rarr; {Object}](#toJSON)

Returns a JSON representation of an instance

Inherited From:

* [fabric.Image.filters.BaseFilter#toJSON](fabric.Image.filters.BaseFilter.html#toJSON)

Source:

* [fabric.js](fabric.js.html), [line 22403](fabric.js.html#line22403)

##### Returns:

JSON

Type

Object

#### [toObject()&rarr; {Object}](#toObject)

Returns object representation of an instance

Inherited From:

* [fabric.Image.filters.BaseFilter#toObject](fabric.Image.filters.BaseFilter.html#toObject)

Source:

* [fabric.js](fabric.js.html), [line 22391](fabric.js.html#line22391)

##### Returns:

Object representation of an instance

Type

Object
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:17 GMT+0100 (Central European Standard Time)