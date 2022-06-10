# BaseFilter

## [fabric](fabric.html)[.Image](fabric.Image.html)[.filters](fabric.Image.filters.html).BaseFilter #### [new BaseFilter()](#BaseFilter)

Root filter class from which all filter classes inherit from

Source:

* [fabric.js](fabric.js.html), [line 22061](fabric.js.html#line22061)

### Members

#### [type](#type)

Filter type

Default Value:

* BaseFilter

Source:

* [fabric.js](fabric.js.html), [line 22073](fabric.js.html#line22073)

### Methods

#### [applyTo(options)](#applyTo)

Apply this filter to the input image data provided. Determines whether to use WebGL or Canvas2D based on the options.webgl flag.

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codepasses/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"The number of filters remaining to be executed/td        /tr            tr                            td class="name"codewebgl/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                                    td class="description last"Whether to use webgl to render the filter./td        /tr            tr                            td class="name"codesourceTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture setup as the source to be filtered./td        /tr            tr                            td class="name"codetargetTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture where filtered output should be drawn./td        /tr            tr                            td class="name"codecontext/code/td                        td class="type"                            span class="param-type"WebGLRenderingContext/span                        /td                                    td class="description last"The GL context used for rendering./td        /tr            tr                            td class="name"codeprogramCache/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"A map of compiled shader programs, keyed by filter type./td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 22285](fabric.js.html#line22285)

#### [applyToWebGL(options)](#applyToWebGL)

Apply this filter using webgl.

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codepasses/code/td                        td class="type"                            span class="param-type"Number/span                        /td                                    td class="description last"The number of filters remaining to be executed/td        /tr            tr                            td class="name"codewebgl/code/td                        td class="type"                            span class="param-type"Boolean/span                        /td                                    td class="description last"Whether to use webgl to render the filter./td        /tr            tr                            td class="name"codeoriginalTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture of the original input image./td        /tr            tr                            td class="name"codesourceTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture setup as the source to be filtered./td        /tr            tr                            td class="name"codetargetTexture/code/td                        td class="type"                            span class="param-type"WebGLTexture/span                        /td                                    td class="description last"The texture where filtered output should be drawn./td        /tr            tr                            td class="name"codecontext/code/td                        td class="type"                            span class="param-type"WebGLRenderingContext/span                        /td                                    td class="description last"The GL context used for rendering./td        /tr            tr                            td class="name"codeprogramCache/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"A map of compiled shader programs, keyed by filter type./td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 22321](fabric.js.html#line22321)

#### [createHelpLayer()](#createHelpLayer)

If needed by a 2d filter, this functions can create an helper canvas to be used remember that options.targetCanvas is available for use till end of chain.

Source:

* [fabric.js](fabric.js.html), [line 22378](fabric.js.html#line22378)

#### [createProgram(gl, fragmentSource, vertexSource)](#createProgram)

Compile this filter's shader program.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The GL canvas context to use for shader compilation.|
|`fragmentSource`|String|fragmentShader source for compilation|
|`vertexSource`|String|vertexShader source for compilation|

Source:

* [fabric.js](fabric.js.html), [line 22121](fabric.js.html#line22121)

#### [getAttributeLocations(gl, program)&rarr; {Object}](#getAttributeLocations)

Return a map of attribute names to WebGLAttributeLocation objects.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The canvas context used to compile the shader program.|
|`program`|WebGLShaderProgram|The shader program from which to take attribute locations.|

Source:

* [fabric.js](fabric.js.html), [line 22182](fabric.js.html#line22182)

##### Returns:

A map of attribute names to attribute locations.

Type

Object

#### [getUniformLocations(gl, program)&rarr; {Object}](#getUniformLocations)

Return a map of uniform names to WebGLUniformLocation objects. Intended to be overridden by subclasses.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The canvas context used to compile the shader program.|
|`program`|WebGLShaderProgram|The shader program from which to take uniform locations.|

Source:

* [fabric.js](fabric.js.html), [line 22197](fabric.js.html#line22197)

##### Returns:

A map of uniform names to uniform locations.

Type

Object

#### [initialize(optionsopt)](#initialize)

Constructor

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object|

Source:

* [fabric.js](fabric.js.html), [line 22098](fabric.js.html#line22098)

#### [isNeutralState(options)](#isNeutralState)

Generic isNeutral implementation for one parameter based filters. Used only in image applyFilters to discard filters that will not have an effect on the image Other filters may need their own version ( ColorMatrix, HueRotation, gamma, ComposedFilter )

##### Parameters:
|Name|Type|Description| |
|`options`|Object|

Source:

* [fabric.js](fabric.js.html), [line 22251](fabric.js.html#line22251)

#### [retrieveShader(options)](#retrieveShader)

Retrieves the cached shader.

##### Parameters:
|Name|Type|Description| |
|`options`|Object|###### Properties
table class="params"    thead    tr                thName/th                thType/th                        th class="last"Description/th    /tr    /thead    tbody            tr                            td class="name"codecontext/code/td                        td class="type"                            span class="param-type"WebGLRenderingContext/span                        /td                                    td class="description last"The GL context used for rendering./td        /tr            tr                            td class="name"codeprogramCache/code/td                        td class="type"                            span class="param-type"Object/span                        /td                                    td class="description last"A map of compiled shader programs, keyed by filter type./td        /tr        /tbody/table|

Source:

* [fabric.js](fabric.js.html), [line 22302](fabric.js.html#line22302)

#### [sendAttributeData(gl, attributeLocations)](#sendAttributeData)

Send attribute data from this filter to its shader program on the GPU.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The canvas context used to compile the shader program.|
|`attributeLocations`|Object|A map of shader attribute names to their locations.|

Source:

* [fabric.js](fabric.js.html), [line 22208](fabric.js.html#line22208)

#### [sendUniformData(gl, uniformLocations)](#sendUniformData)

Send uniform data from this filter to its shader program on the GPU. Intended to be overridden by subclasses.

##### Parameters:
|Name|Type|Description| |
|`gl`|WebGLRenderingContext|The canvas context used to compile the shader program.|
|`uniformLocations`|Object|A map of shader uniform names to their locations.|

Source:

* [fabric.js](fabric.js.html), [line 22370](fabric.js.html#line22370)

#### [setOptions(optionsopt)](#setOptions)

Sets filter's properties from options

##### Parameters:
|Name|Type|Attributes|Description| |
|`options`|Object|optional|Options object|

Source:

* [fabric.js](fabric.js.html), [line 22108](fabric.js.html#line22108)

#### [toJSON()&rarr; {Object}](#toJSON)

Returns a JSON representation of an instance

Source:

* [fabric.js](fabric.js.html), [line 22403](fabric.js.html#line22403)

##### Returns:

JSON

Type

Object

#### [toObject()&rarr; {Object}](#toObject)

Returns object representation of an instance

Source:

* [fabric.js](fabric.js.html), [line 22391](fabric.js.html#line22391)

##### Returns:

Object representation of an instance

Type

Object
labelHide inherited properties and method from the page/label  
Documentation generated by [JSDoc 3.6.7](https://github.com/jsdoc3/jsdoc) on Sun Feb 06 2022 00:57:17 GMT+0100 (Central European Standard Time)