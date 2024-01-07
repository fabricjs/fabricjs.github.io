# Class: SprayBrush

**`See`**

[demo](http://fabricjs.com/freedrawing|Freedrawing)

## Hierarchy

- [`BaseBrush`](/apidocs/classes/BaseBrush.md)

  ↳ **`SprayBrush`**

## Constructors

### constructor

**new SprayBrush**(`canvas`): [`SprayBrush`](/apidocs/classes/SprayBrush.md)

Constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`Canvas`](/apidocs/classes/Canvas.md) |

#### Returns

[`SprayBrush`](/apidocs/classes/SprayBrush.md)

Instance of a spray brush

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[constructor](/apidocs/classes/BaseBrush.md#constructor)

#### Defined in

[src/brushes/SprayBrush.ts:83](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L83)

## Properties

### canvas

 **canvas**: [`Canvas`](/apidocs/classes/Canvas.md)

**`Todo`**

add type

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[canvas](/apidocs/classes/BaseBrush.md#canvas)

#### Defined in

[src/brushes/BaseBrush.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L73)

___

### color

 **color**: `string` = `'rgb(0, 0, 0)'`

Color of a brush

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[color](/apidocs/classes/BaseBrush.md#color)

#### Defined in

[src/brushes/BaseBrush.ts:16](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L16)

___

### density

 **density**: `number` = `20`

Density of a spray (number of dots per chunk)

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L44)

___

### dotWidth

 **dotWidth**: `number` = `1`

Width of spray dots

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:51](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L51)

___

### dotWidthVariance

 **dotWidthVariance**: `number` = `1`

Width variance of spray dots

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:58](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L58)

___

### limitedToCanvasSize

 **limitedToCanvasSize**: `boolean` = `false`

When `true`, the free drawing is limited to the whiteboard size. Default to false.

**`Default`**

```ts
false
```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[limitedToCanvasSize](/apidocs/classes/BaseBrush.md#limitedtocanvassize)

#### Defined in

[src/brushes/BaseBrush.ts:68](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L68)

___

### optimizeOverlapping

 **optimizeOverlapping**: `boolean` = `true`

Whether overlapping dots (rectangles) should be removed (for performance reasons)

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:72](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L72)

___

### randomOpacity

 **randomOpacity**: `boolean` = `false`

Whether opacity of a dot should be random

**`Default`**

```ts

```

#### Defined in

[src/brushes/SprayBrush.ts:65](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L65)

___

### shadow

 **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md) = `null`

Shadow object representing shadow of this shape.
<b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
"shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[shadow](/apidocs/classes/BaseBrush.md#shadow)

#### Defined in

[src/brushes/BaseBrush.ts:32](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L32)

___

### sprayChunk

 `Private` **sprayChunk**: [`SprayBrushPoint`](/apidocs/modules.md#spraybrushpoint)[]

#### Defined in

[src/brushes/SprayBrush.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L76)

___

### sprayChunks

 `Private` **sprayChunks**: [`SprayBrushPoint`](/apidocs/modules.md#spraybrushpoint)[][]

#### Defined in

[src/brushes/SprayBrush.ts:74](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L74)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[] = `null`

Stroke Dash Array.

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[strokeDashArray](/apidocs/classes/BaseBrush.md#strokedasharray)

#### Defined in

[src/brushes/BaseBrush.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L60)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap` = `'round'`

Line endings style of a brush (one of "butt", "round", "square")

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[strokeLineCap](/apidocs/classes/BaseBrush.md#strokelinecap)

#### Defined in

[src/brushes/BaseBrush.ts:39](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L39)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin` = `'round'`

Corner style of a brush (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[strokeLineJoin](/apidocs/classes/BaseBrush.md#strokelinejoin)

#### Defined in

[src/brushes/BaseBrush.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L46)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number` = `10`

Maximum miter length (used for strokeLineJoin = "miter") of a brush's

**`Default`**

```ts

```

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[strokeMiterLimit](/apidocs/classes/BaseBrush.md#strokemiterlimit)

#### Defined in

[src/brushes/BaseBrush.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L53)

___

### width

 **width**: `number` = `10`

Width of a spray

**`Default`**

```ts

```

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[width](/apidocs/classes/BaseBrush.md#width)

#### Defined in

[src/brushes/SprayBrush.ts:37](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L37)

## Methods

### \_isOutSideCanvas

**_isOutSideCanvas**(`pointer`): `boolean`

Check is pointer is outside canvas boundaries

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`boolean`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_isOutSideCanvas](/apidocs/classes/BaseBrush.md#_isoutsidecanvas)

#### Defined in

[src/brushes/BaseBrush.ts:153](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L153)

___

### \_render

**_render**(): `void`

Render all spray chunks

#### Returns

`void`

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[_render](/apidocs/classes/BaseBrush.md#_render)

#### Defined in

[src/brushes/SprayBrush.ts:177](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L177)

___

### \_resetShadow

**_resetShadow**(): `void`

Removes brush shadow styles

#### Returns

`void`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_resetShadow](/apidocs/classes/BaseBrush.md#_resetshadow)

#### Defined in

[src/brushes/BaseBrush.ts:141](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L141)

___

### \_saveAndTransform

**_saveAndTransform**(`ctx`): `void`

Sets the transformation on given context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | context to render on |

#### Returns

`void`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_saveAndTransform](/apidocs/classes/BaseBrush.md#_saveandtransform)

#### Defined in

[src/brushes/BaseBrush.ts:106](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L106)

___

### \_setBrushStyles

**_setBrushStyles**(`ctx`): `void`

Sets brush styles

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_setBrushStyles](/apidocs/classes/BaseBrush.md#_setbrushstyles)

#### Defined in

[src/brushes/BaseBrush.ts:92](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L92)

___

### \_setShadow

**_setShadow**(): `void`

Sets brush shadow styles

#### Returns

`void`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[_setShadow](/apidocs/classes/BaseBrush.md#_setshadow)

#### Defined in

[src/brushes/BaseBrush.ts:121](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L121)

___

### addSprayChunk

**addSprayChunk**(`pointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`void`

#### Defined in

[src/brushes/SprayBrush.ts:192](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L192)

___

### needsFullRender

**needsFullRender**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseBrush](/apidocs/classes/BaseBrush.md).[needsFullRender](/apidocs/classes/BaseBrush.md#needsfullrender)

#### Defined in

[src/brushes/BaseBrush.ts:112](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/BaseBrush.ts#L112)

___

### onMouseDown

**onMouseDown**(`pointer`): `void`

Invoked on mouse down

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`void`

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[onMouseDown](/apidocs/classes/BaseBrush.md#onmousedown)

#### Defined in

[src/brushes/SprayBrush.ts:93](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L93)

___

### onMouseMove

**onMouseMove**(`pointer`): `void`

Invoked on mouse move

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`void`

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[onMouseMove](/apidocs/classes/BaseBrush.md#onmousemove)

#### Defined in

[src/brushes/SprayBrush.ts:106](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L106)

___

### onMouseUp

**onMouseUp**(): `void`

Invoked on mouse up

#### Returns

`void`

#### Overrides

[BaseBrush](/apidocs/classes/BaseBrush.md).[onMouseUp](/apidocs/classes/BaseBrush.md#onmouseup)

#### Defined in

[src/brushes/SprayBrush.ts:117](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L117)

___

### renderChunck

**renderChunck**(`sprayChunck`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sprayChunck` | [`SprayBrushPoint`](/apidocs/modules.md#spraybrushpoint)[] |

#### Returns

`void`

#### Defined in

[src/brushes/SprayBrush.ts:159](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/SprayBrush.ts#L159)
