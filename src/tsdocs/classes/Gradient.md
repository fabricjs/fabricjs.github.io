# Class: Gradient\<S, T\>

Gradient class

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-2#gradients](http://fabricjs.com/fabric-intro-part-2#gradients)

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `S` |
| `T` | extends [`GradientType`](/apidocs/modules.md#gradienttype) = `S` extends [`GradientType`](/apidocs/modules.md#gradienttype) ? `S` : ``"linear"`` |

## Constructors

### constructor

• **new Gradient**\<`S`, `T`\>(`«destructured»`): [`Gradient`](/apidocs/classes/Gradient.md)\<`S`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `S` |
| `T` | extends [`GradientType`](/apidocs/modules.md#gradienttype) = `S` extends [`GradientType`](/apidocs/modules.md#gradienttype) ? `S` : ``"linear"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`GradientOptions`](/apidocs/modules.md#gradientoptions)\<`T`\> |

#### Returns

[`Gradient`](/apidocs/classes/Gradient.md)\<`S`, `T`\>

#### Defined in

[src/gradient/Gradient.ts:102](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L102)

## Properties

### colorStops

• **colorStops**: [`ColorStop`](/apidocs/modules.md#colorstop)[]

Defines how many colors a gradient has and how they are located on the axis
defined by coords

#### Defined in

[src/gradient/Gradient.ts:86](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L86)

___

### coords

• **coords**: [`GradientCoords`](/apidocs/modules.md#gradientcoords)\<`T`\>

Defines how the gradient is located in space and spread

#### Defined in

[src/gradient/Gradient.ts:79](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L79)

___

### excludeFromExport

• `Optional` **excludeFromExport**: `boolean`

If true, this object will not be exported during the serialization of a canvas

#### Defined in

[src/gradient/Gradient.ts:92](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L92)

___

### gradientTransform

• `Optional` **gradientTransform**: [`TMat2D`](/apidocs/modules.md#tmat2d)

A transform matrix to apply to the gradient before painting.
Imported from svg gradients, is not applied with the current transform in the center.
Before this transform is applied, the origin point is at the top left corner of the object
plus the addition of offsetY and offsetX.

**`Default`**

```ts
null
```

#### Defined in

[src/gradient/Gradient.ts:55](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L55)

___

### gradientUnits

• **gradientUnits**: [`GradientUnits`](/apidocs/modules.md#gradientunits)

coordinates units for coords.
If `pixels`, the number of coords are in the same unit of width / height.
If set as `percentage` the coords are still a number, but 1 means 100% of width
for the X and 100% of the height for the y. It can be bigger than 1 and negative.
allowed values pixels or percentage.

**`Default`**

```ts
'pixels'
```

#### Defined in

[src/gradient/Gradient.ts:66](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L66)

___

### id

• `Readonly` **id**: `string` \| `number`

ID used for SVG export functionalities

#### Defined in

[src/gradient/Gradient.ts:98](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L98)

___

### offsetX

• **offsetX**: `number`

Horizontal offset for aligning gradients coming from SVG when outside pathgroups

**`Default`**

```ts
0
```

#### Defined in

[src/gradient/Gradient.ts:38](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L38)

___

### offsetY

• **offsetY**: `number`

Vertical offset for aligning gradients coming from SVG when outside pathgroups

**`Default`**

```ts
0
```

#### Defined in

[src/gradient/Gradient.ts:45](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L45)

___

### type

• **type**: `T`

Gradient type linear or radial

**`Default`**

```ts
'linear'
```

#### Defined in

[src/gradient/Gradient.ts:73](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L73)

___

### type

▪ `Static` **type**: `string` = `'Gradient'`

#### Defined in

[src/gradient/Gradient.ts:100](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L100)

## Methods

### addColorStop

▸ **addColorStop**(`colorStops`): [`Gradient`](/apidocs/classes/Gradient.md)\<`S`, `T`\>

Adds another colorStop

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorStops` | `Record`\<`string`, `string`\> |

#### Returns

[`Gradient`](/apidocs/classes/Gradient.md)\<`S`, `T`\>

thisArg

#### Defined in

[src/gradient/Gradient.ts:134](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L134)

___

### toLive

▸ **toLive**(`ctx`): `CanvasGradient`

Returns an instance of CanvasGradient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`CanvasGradient`

#### Defined in

[src/gradient/Gradient.ts:298](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L298)

___

### toObject

▸ **toObject**(`propertiesToInclude?`): `Partial`\<[`Gradient`](/apidocs/classes/Gradient.md)\<`S`, `T`\>\> & \{ `colorStops`: [`ColorStop`](/apidocs/modules.md#colorstop)[] ; `coords`: [`GradientCoords`](/apidocs/modules.md#gradientcoords)\<`T`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](/apidocs/modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: `T`  }

Returns object representation of a gradient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Partial`\<[`Gradient`](/apidocs/classes/Gradient.md)\<`S`, `T`\>\> & \{ `colorStops`: [`ColorStop`](/apidocs/modules.md#colorstop)[] ; `coords`: [`GradientCoords`](/apidocs/modules.md#gradientcoords)\<`T`\> ; `gradientTransform`: `undefined` \| `number`[] ; `gradientUnits`: [`GradientUnits`](/apidocs/modules.md#gradientunits) ; `offsetX`: `number` ; `offsetY`: `number` ; `type`: `T`  }

#### Defined in

[src/gradient/Gradient.ts:151](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L151)

___

### toSVG

▸ **toSVG**(`object`, `«destructured»?`): `string`

Returns SVG representation of an gradient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to create a gradient for |
| `«destructured»` | `Object` | - |
| › `additionalTransform?` | `string` | - |

#### Returns

`string`

SVG representation of an gradient (linear/radial)

#### Defined in

[src/gradient/Gradient.ts:172](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L172)

___

### fromElement

▸ **fromElement**(`el`, `instance`, `svgOptions`): [`Gradient`](/apidocs/classes/Gradient.md)\<[`GradientType`](/apidocs/modules.md#gradienttype), [`GradientType`](/apidocs/modules.md#gradienttype)\>

Returns [Gradient](/apidocs/classes/Gradient.md) instance from an SVG element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `SVGGradientElement` | SVG gradient element |
| `instance` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |  |
| `svgOptions` | [`SVGOptions`](/apidocs/modules.md#svgoptions) | an object containing the size of the SVG in order to parse correctly gradients that uses gradientUnits as 'userSpaceOnUse' and percentages. |

#### Returns

[`Gradient`](/apidocs/classes/Gradient.md)\<[`GradientType`](/apidocs/modules.md#gradienttype), [`GradientType`](/apidocs/modules.md#gradienttype)\>

Gradient instance

**`Static`**

**`Member Of`**

Gradient

**`See`**

 - http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
 - http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement

**`Example`**

```ts
<linearGradient id="linearGrad1">
   <stop offset="0%" stop-color="white"/>
   <stop offset="100%" stop-color="black"/>
 </linearGradient>

 OR

 <linearGradient id="linearGrad2">
   <stop offset="0" style="stop-color:rgb(255,255,255)"/>
   <stop offset="1" style="stop-color:rgb(0,0,0)"/>
 </linearGradient>

 OR

 <radialGradient id="radialGrad1">
   <stop offset="0%" stop-color="white" stop-opacity="1" />
   <stop offset="50%" stop-color="black" stop-opacity="0.5" />
   <stop offset="100%" stop-color="white" stop-opacity="1" />
 </radialGradient>

 OR

 <radialGradient id="radialGrad2">
   <stop offset="0" stop-color="rgb(255,255,255)" />
   <stop offset="0.5" stop-color="rgb(0,0,0)" />
   <stop offset="1" stop-color="rgb(255,255,255)" />
 </radialGradient>
```

#### Defined in

[src/gradient/Gradient.ts:369](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/gradient/Gradient.ts#L369)
