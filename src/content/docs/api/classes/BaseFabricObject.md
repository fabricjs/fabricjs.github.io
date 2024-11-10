---
editUrl: false
next: false
prev: false
title: "BaseFabricObject"
---

Root object class from which all 2d shape classes inherit from

## Tutorial

[http://fabricjs.com/fabric-intro-part-1#objects](http://fabricjs.com/fabric-intro-part-1#objects)

## Fires

added

## Fires

removed

## Fires

selected

## Fires

deselected

## Fires

rotating

## Fires

scaling

## Fires

moving

## Fires

skewing

## Fires

modified

## Fires

mousedown

## Fires

mouseup

## Fires

mouseover

## Fires

mouseout

## Fires

mousewheel

## Fires

mousedblclick

## Fires

dragover

## Fires

dragenter

## Fires

dragleave

## Fires

drop

## Extends

- `ObjectGeometry`\<`EventSpec`\>

## Extended by

- [`InteractiveFabricObject`](/api/classes/interactivefabricobject/)

## Type Parameters

• **Props** *extends* [`TOptions`](/api/type-aliases/toptions/)\<`ObjectProps`\> = `Partial`\<`ObjectProps`\>

• **SProps** *extends* [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/) = [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/)

• **EventSpec** *extends* [`ObjectEvents`](/api/interfaces/objectevents/) = [`ObjectEvents`](/api/interfaces/objectevents/)

## Implements

- `ObjectProps`

## Constructors

### new BaseFabricObject()

> **new BaseFabricObject**\<`Props`, `SProps`, `EventSpec`\>(`options`?): [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Parameters

• **options?**: `Props`

Options object

#### Returns

[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`ObjectGeometry<EventSpec>.constructor`

#### Defined in

[src/shapes/Object/Object.ts:373](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L373)

## Properties

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/basefabricobject/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/basefabricobject/#calcacoords)

#### Inherited from

`ObjectGeometry.aCoords`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:63](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L63)

***

### absolutePositioned

> **absolutePositioned**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will have its top and left relative to canvas, and will
not be influenced by the object transform. This will make the clipPath relative
to the canvas, but clipping just a particular object.
WARNING this is beta, this feature may change or be renamed.
since 2.4.0

#### Default

```ts
false
```

#### Implementation of

`ObjectProps.absolutePositioned`

#### Defined in

[src/shapes/Object/Object.ts:218](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L218)

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.angle`

#### Inherited from

`ObjectGeometry.angle`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:581](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L581)

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Implementation of

`ObjectProps.backgroundColor`

#### Defined in

[src/shapes/Object/Object.ts:205](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L205)

***

### centeredRotation

> **centeredRotation**: `boolean`

When `true` the object will rotate on its center.
When `false` will rotate around the origin point defined by originX and originY.
The value of this property is IGNORED during a transform if the canvas has already
centeredRotation set to `true`
The object method `rotate` will always consider this property and never the canvas's one.

#### Since

1.3.4

#### Default

```ts

```

#### Implementation of

`ObjectProps.centeredRotation`

#### Defined in

[src/shapes/Object/Object.ts:219](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L219)

***

### centeredScaling

> **centeredScaling**: `boolean`

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

#### Since

1.3.4

#### Default

```ts

```

#### Implementation of

`ObjectProps.centeredScaling`

#### Defined in

[src/shapes/Object/Object.ts:220](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L220)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Implementation of

`ObjectProps.clipPath`

#### Defined in

[src/shapes/Object/Object.ts:216](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L216)

***

### dirty

> **dirty**: `boolean`

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

#### Default

```ts
true
```

#### Defined in

[src/shapes/Object/Object.ts:245](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L245)

***

### excludeFromExport

> **excludeFromExport**: `boolean`

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Default

```ts

```

#### Implementation of

`ObjectProps.excludeFromExport`

#### Defined in

[src/shapes/Object/Object.ts:212](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L212)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Implementation of

`ObjectProps.fill`

#### Defined in

[src/shapes/Object/Object.ts:195](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L195)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Implementation of

`ObjectProps.fillRule`

#### Defined in

[src/shapes/Object/Object.ts:196](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L196)

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Implementation of

`ObjectProps.flipX`

#### Inherited from

`ObjectGeometry.flipX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:567](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L567)

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Implementation of

`ObjectProps.flipY`

#### Inherited from

`ObjectGeometry.flipY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:568](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L568)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Implementation of

`ObjectProps.globalCompositeOperation`

#### Defined in

[src/shapes/Object/Object.ts:204](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L204)

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Implementation of

`ObjectProps.height`

#### Inherited from

`ObjectGeometry.height`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:566](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L566)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Implementation of

`ObjectProps.includeDefaultValues`

#### Defined in

[src/shapes/Object/Object.ts:211](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L211)

***

### inverted

> **inverted**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

#### Default

```ts
false
```

#### Implementation of

`ObjectProps.inverted`

#### Defined in

[src/shapes/Object/Object.ts:217](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L217)

***

### left

> **left**: `number`

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](../../../../api/interfaces/fabricobjectprops/#originx)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.left`

#### Inherited from

`ObjectGeometry.left`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:564](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L564)

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

`ObjectGeometry.matrixCache`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:73](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L73)

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.minScaleLimit`

#### Defined in

[src/shapes/Object/Object.ts:190](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L190)

***

### objectCaching

> **objectCaching**: `boolean`

When `true`, object is cached on an additional canvas.
When `false`, object is not cached unless necessary ( clipPath )
default to true

#### Since

1.7.0

#### Default

```ts
true
```

#### Implementation of

`ObjectProps.objectCaching`

#### Defined in

[src/shapes/Object/Object.ts:214](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L214)

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Implementation of

`ObjectProps.opacity`

#### Defined in

[src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L192)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Implementation of

`ObjectProps.originX`

#### Inherited from

`ObjectGeometry.originX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:576](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L576)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Implementation of

`ObjectProps.originY`

#### Inherited from

`ObjectGeometry.originY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:580](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L580)

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

`ObjectGeometry.ownMatrixCache`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:68](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L68)

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

`ObjectGeometry.padding`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:53](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L53)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Implementation of

`ObjectProps.paintFirst`

#### Defined in

[src/shapes/Object/Object.ts:194](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L194)

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Defined in

[src/shapes/Object/Object.ts:1636](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1636)

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Implementation of

`ObjectProps.scaleX`

#### Inherited from

`ObjectGeometry.scaleX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:569](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L569)

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Implementation of

`ObjectProps.scaleY`

#### Inherited from

`ObjectGeometry.scaleY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:570](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L570)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

#### Implementation of

`ObjectProps.shadow`

#### Defined in

[src/shapes/Object/Object.ts:207](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L207)

***

### skewX

> **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.skewX`

#### Inherited from

`ObjectGeometry.skewX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:571](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L571)

***

### skewY

> **skewY**: `number`

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.skewY`

#### Inherited from

`ObjectGeometry.skewY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:572](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L572)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

#### Implementation of

`ObjectProps.stroke`

#### Defined in

[src/shapes/Object/Object.ts:197](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L197)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Implementation of

`ObjectProps.strokeDashArray`

#### Defined in

[src/shapes/Object/Object.ts:198](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L198)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.strokeDashOffset`

#### Defined in

[src/shapes/Object/Object.ts:199](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L199)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Implementation of

`ObjectProps.strokeLineCap`

#### Defined in

[src/shapes/Object/Object.ts:200](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L200)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Implementation of

`ObjectProps.strokeLineJoin`

#### Defined in

[src/shapes/Object/Object.ts:201](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L201)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Implementation of

`ObjectProps.strokeMiterLimit`

#### Defined in

[src/shapes/Object/Object.ts:202](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L202)

***

### strokeUniform

> **strokeUniform**: `boolean`

When `false`, the stoke width will scale with the object.
When `true`, the stroke will always match the exact pixel size entered for stroke width.
this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
default to false

#### Since

2.6.0

#### Default

```ts
false
```

#### Default

```ts
false
```

#### Implementation of

`ObjectProps.strokeUniform`

#### Inherited from

`ObjectGeometry.strokeUniform`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:583](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L583)

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Implementation of

`ObjectProps.strokeWidth`

#### Inherited from

`ObjectGeometry.strokeWidth`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:582](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L582)

***

### top

> **top**: `number`

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](../../../../api/interfaces/fabricobjectprops/#originy)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.top`

#### Inherited from

`ObjectGeometry.top`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:563](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L563)

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Implementation of

`ObjectProps.visible`

#### Defined in

[src/shapes/Object/Object.ts:209](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L209)

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Implementation of

`ObjectProps.width`

#### Inherited from

`ObjectGeometry.width`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:565](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L565)

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Defined in

[src/shapes/Object/Object.ts:237](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L237)

***

### colorProperties

> `static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Defined in

[src/shapes/Object/Object.ts:1543](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1543)

***

### customProperties

> `static` **customProperties**: `string`[] = `[]`

Define a list of custom properties that will be serialized when
instance.toObject() gets called

#### Defined in

[src/shapes/Object/Object.ts:1784](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1784)

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>\> = `fabricObjectDefaultValues`

#### Defined in

[src/shapes/Object/Object.ts:330](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L330)

***

### stateProperties

> `static` **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Defined in

[src/shapes/Object/Object.ts:228](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L228)

***

### type

> `static` **type**: `string` = `'FabricObject'`

The class type.
This is used for serialization and deserialization purposes and internally it can be used
to identify classes.
When we transform a class in a plain JS object we need a way to recognize which class it was,
and the type is the way we do that. It has no other purposes and you should not give one.
Hard to reach on instances and please do not use to drive instance's logic (this.constructor.type).
To idenfity a class use instanceof class ( instanceof Rect ).
We do not do that in fabricJS code because we want to try to have code splitting possible.

#### Defined in

[src/shapes/Object/Object.ts:346](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L346)

## Accessors

### type

> `get` **type**(): `string`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists to avoid type errors in old code and possibly current deserialization code.
DO NOT build new code around this type value

#### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

> `set` **type**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Defined in

[src/shapes/Object/Object.ts:357](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L357)

## Methods

### \_drawClipPath()

> **\_drawClipPath**(`ctx`, `clipPath`, `context`): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **clipPath**: `undefined` \| [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **context**: `DrawContext`

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:920](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L920)

***

### \_limitCacheSize()

> **\_limitCacheSize**(`dims`): `any`

Limit the cache dimensions so that X * Y do not cross config.perfLimitSizeTotal
and each side do not cross fabric.cacheSideLimit
those numbers are configurable so that you can get as much detail as you want
making bargain with performances.

#### Parameters

• **dims**: `any`

#### Returns

`any`

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Defined in

[src/shapes/Object/Object.ts:406](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L406)

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:756](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L756)

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:1062](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1062)

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **\_\_namedParameters**: `Pick`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:1051](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1051)

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **decl**: `Pick`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>, `"stroke"` \| `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"` \| `"strokeWidth"`\>

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:1009](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1009)

***

### \_setupCompositeOperation()

> **\_setupCompositeOperation**(`ctx`): `void`

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Rendering canvas context

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:1518](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1518)

***

### animate()

> **animate**\<`T`\>(`animatable`, `options`?): `Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

Animates object's properties

#### Type Parameters

• **T** *extends* `number` \| `number`[] \| [`TColorArg`](/api/type-aliases/tcolorarg/)

#### Parameters

• **animatable**: `Record`\<`string`, `T`\>

map of keys and end values

• **options?**: `Partial`\<[`AnimationOptions`](/api/namespaces/util/type-aliases/animationoptions/)\<`T`\>\>

#### Returns

`Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Defined in

[src/shapes/Object/Object.ts:1557](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1557)

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

`ObjectGeometry.calcACoords`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:427](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L427)

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

`ObjectGeometry.calcOwnMatrix`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:513](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L513)

***

### calcTransformMatrix()

> **calcTransformMatrix**(`skipGroup`?): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

• **skipGroup?**: `boolean` = `false`

return transform matrix for object not counting parent transformations
There are some situation in which this is useful to avoid the fake rotation.

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

`ObjectGeometry.calcTransformMatrix`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:485](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L485)

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>\>

#### Defined in

[src/shapes/Object/Object.ts:1292](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1292)

***

### cloneAsImage()

> **cloneAsImage**(`options`?): [`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Creates an instance of Image out of an object
makes use of toCanvasElement.
Once this method was based on toDataUrl and loadImage, so it also had a quality
and format option. toCanvasElement is faster and produce no loss of quality.
If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
toCanvasElement and then toBlob from the obtained canvas is also a good option.

#### Parameters

• **options?**: `ObjectToCanvasElementOptions`

for clone as image, passed to toDataURL

#### Returns

[`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object cloned as image.

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Defined in

[src/shapes/Object/Object.ts:1318](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1318)

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance (is 1 unless subclassed)

#### Defined in

[src/shapes/Object/Object.ts:1460](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1460)

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Checks if point is inside the object

#### Parameters

• **point**: [`Point`](/api/classes/point/)

Point to check against

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

`ObjectGeometry.containsPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:282](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L282)

***

### dispose()

> **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:1528](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1528)

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

• **this**: `TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:942](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L942)

***

### drawClipPathOnCache()

> **drawClipPathOnCache**(`ctx`, `clipPath`, `canvasWithClipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **canvasWithClipPath**: `HTMLCanvasElement`

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:847](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L847)

***

### drawObject()

> **drawObject**(`ctx`, `forClipping`, `context`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **forClipping**: `undefined` \| `boolean`

apply clipping styles

• **context**: `DrawContext`

additional context for rendering

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:872](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L872)

***

### drawSelectionBackground()

> **drawSelectionBackground**(`_ctx`): `void`

#### Parameters

• **\_ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:728](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L728)

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Compare ancestors

#### Type Parameters

• **T** *extends* [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Defined in

[src/shapes/Object/Object.ts:1675](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1675)

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: `EventSpec`\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

`ObjectGeometry.fire`

#### Defined in

[src/Observable.ts:167](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L167)

***

### get()

> **get**(`property`): `any`

Basic getter

#### Parameters

• **property**: `string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

`ObjectGeometry.get`

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L59)

***

### getAncestors()

> **getAncestors**(): `Ancestors`

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Defined in

[src/shapes/Object/Object.ts:1658](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1658)

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](/api/type-aliases/tbbox/)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/api/type-aliases/tbbox/)

Object with left, top, width, height properties

#### Inherited from

`ObjectGeometry.getBoundingRect`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:343](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L343)

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

`ObjectGeometry.getCanvasRetinaScaling`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:400](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L400)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.getCenterPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:732](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L732)

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

`ObjectGeometry.getCoords`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:204](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L204)

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Defined in

[src/shapes/Object/Object.ts:607](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L607)

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Defined in

[src/shapes/Object/Object.ts:576](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L576)

***

### getPointByOrigin()

> **getPointByOrigin**(`originX`, `originY`): [`Point`](/api/classes/point/)

Returns the position of the object as if it has a different origin.
Take an object that has left, top set to 100, 100 with origin 'left', 'top'.
Return the values of left top ( wrapped in a point ) that you would need to keep
the same position if origin where different.
Alternatively you can use this to also find which point in the parent plane is a specific origin
( where is the bottom right corner of my object? )

#### Parameters

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.getPointByOrigin`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:762](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L762)

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.getRelativeCenterPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:743](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L743)

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/basefabricobject/getx/#getx)

#### Inherited from

`ObjectGeometry.getRelativeX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:115](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L115)

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

`ObjectGeometry.getRelativeXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:176](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L176)

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/basefabricobject/gety/#gety)

#### Inherited from

`ObjectGeometry.getRelativeY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:131](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L131)

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

`ObjectGeometry.getScaledHeight`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:361](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L361)

***

### getScaledWidth()

> **getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

`ObjectGeometry.getScaledWidth`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:352](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L352)

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

`ObjectGeometry.getTotalAngle`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:408](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L408)

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/api/classes/point/)

object with scaleX and scaleY properties

#### Defined in

[src/shapes/Object/Object.ts:593](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L593)

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

`ObjectGeometry.getViewportTransform`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:418](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L418)

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

`ObjectGeometry.getX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L86)

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

`ObjectGeometry.getXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:146](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L146)

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

`ObjectGeometry.getY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:100](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L100)

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Defined in

[src/shapes/Object/Object.ts:1740](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1740)

***

### hasFill()

> **hasFill**(): `null` \| `boolean` \| `""`

return true if the object will draw a fill
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when fill happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the fill is invisible.

#### Returns

`null` \| `boolean` \| `""`

Boolean

#### Since

3.0.0

#### Defined in

[src/shapes/Object/Object.ts:787](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L787)

***

### hasStroke()

> **hasStroke**(): `null` \| `boolean` \| `""`

return true if the object will draw a stroke
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when stroke happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the stroke is invisible.

#### Returns

`null` \| `boolean` \| `""`

Boolean

#### Since

3.0.0

#### Defined in

[src/shapes/Object/Object.ts:771](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L771)

***

### intersectsWithObject()

> **intersectsWithObject**(`other`): `boolean`

Checks if object intersects with another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to test

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

`ObjectGeometry.intersectsWithObject`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:232](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L232)

***

### intersectsWithRect()

> **intersectsWithRect**(`tl`, `br`): `boolean`

Checks if object intersects with the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](/api/classes/point/)

• **br**: [`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

`ObjectGeometry.intersectsWithRect`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:218](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L218)

***

### isCacheDirty()

> **isCacheDirty**(`skipCanvas`): `boolean`

Check if cache is dirty

#### Parameters

• **skipCanvas**: `boolean` = `false`

skip canvas checks because this object is painted
on parent canvas.

#### Returns

`boolean`

#### Defined in

[src/shapes/Object/Object.ts:956](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L956)

***

### isContainedWithinObject()

> **isContainedWithinObject**(`other`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to test

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

`ObjectGeometry.isContainedWithinObject`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:251](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L251)

***

### isContainedWithinRect()

> **isContainedWithinRect**(`tl`, `br`): `boolean`

Checks if object is fully contained within the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](/api/classes/point/)

• **br**: [`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

`ObjectGeometry.isContainedWithinRect`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:259](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L259)

***

### isDescendantOf()

> **isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [Group.contains](../../../../api/classes/group/#contains) or [StaticCanvas.contains](../../../../api/classes/staticcanvas/#contains) for performance reasons

#### Parameters

• **target**: `TAncestor`

#### Returns

`boolean`

#### Defined in

[src/shapes/Object/Object.ts:1644](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1644)

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type Parameters

• **T** *extends* [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Defined in

[src/shapes/Object/Object.ts:1750](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1750)

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/shapes/Object/Object.ts:686](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L686)

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

`ObjectGeometry.isOnScreen`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:291](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L291)

***

### isOverlapping()

> **isOverlapping**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

`ObjectGeometry.isOverlapping`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:269](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L269)

***

### isPartiallyOnScreen()

> **isPartiallyOnScreen**(): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

`ObjectGeometry.isPartiallyOnScreen`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:321](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L321)

***

### isType()

> **isType**(...`types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

• ...**types**: `string`[]

#### Returns

`boolean`

#### Defined in

[src/shapes/Object/Object.ts:1449](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1449)

***

### needsItsOwnCache()

> **needsItsOwnCache**(): `boolean`

When set to `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Defined in

[src/shapes/Object/Object.ts:799](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L799)

***

### off()

#### off(eventName)

> **off**\<`K`\>(`eventName`): `void`

Unsubscribe all event listeners for eventname.
Do not use this pattern. You could kill internal fabricJS events.
We know we should have protected events for internal flows, but we don't have yet

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

##### Returns

`void`

##### Inherited from

`ObjectGeometry.off`

##### Defined in

[src/Observable.ts:122](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L122)

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

`ObjectGeometry.off`

##### Defined in

[src/Observable.ts:128](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L128)

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

`ObjectGeometry.off`

##### Defined in

[src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L133)

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`ObjectGeometry.off`

##### Defined in

[src/Observable.ts:137](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L137)

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **E**

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

on

##### Inherited from

`ObjectGeometry.on`

##### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L23)

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

`ObjectGeometry.on`

##### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L27)

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **E**

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

once

##### Inherited from

`ObjectGeometry.once`

##### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L62)

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<`EventSpec`\>

##### Returns

`VoidFunction`

##### Inherited from

`ObjectGeometry.once`

##### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L66)

***

### render()

> **render**(`ctx`): `void`

Renders an object on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:698](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L698)

***

### renderCache()

> **renderCache**(`this`, `options`?): `void`

#### Parameters

• **this**: `TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **options?**: `any`

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:732](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L732)

***

### rotate()

> **rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

• **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle value (in degrees)

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:1477](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1477)

***

### scale()

> **scale**(`value`): `void`

Scales an object (equally by x and y)

#### Parameters

• **value**: `number`

Scale factor

#### Returns

`void`

#### Inherited from

`ObjectGeometry.scale`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:370](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L370)

***

### scaleToHeight()

> **scaleToHeight**(`value`): `void`

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

• **value**: `number`

New height value

#### Returns

`void`

#### Inherited from

`ObjectGeometry.scaleToHeight`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:393](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L393)

***

### scaleToWidth()

> **scaleToWidth**(`value`): `void`

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

• **value**: `number`

New width value

#### Returns

`void`

#### Inherited from

`ObjectGeometry.scaleToWidth`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L381)

***

### set()

> **set**(`key`, `value`?): [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ObjectGeometry.set`

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L29)

***

### setCoords()

> **setCoords**(): `void`

Sets corner and controls position coordinates based on current angle, width and height, left and top.
aCoords are used to quickly find an object on the canvas.
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setCoords`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:449](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L449)

***

### setOnGroup()

> **setOnGroup**(): `void`

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:1509](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1509)

***

### setPositionByOrigin()

> **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Sets the position of the object taking into consideration the object's origin

#### Parameters

• **pos**: [`Point`](/api/classes/point/)

The new position of the object

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setPositionByOrigin`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:777](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L777)

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/basefabricobject/#setx)

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setRelativeX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:123](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L123)

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/basefabricobject/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

position according to object's originX originY properties in parent's coordinate plane

• **originX?**: [`TOriginX`](/api/type-aliases/toriginx/) = `...`

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](/api/type-aliases/toriginy/) = `...`

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setRelativeXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:186](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L186)

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/basefabricobject/#sety)

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setRelativeY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:139](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L139)

***

### setX()

> **setX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setX`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:93](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L93)

***

### setXY()

> **setXY**(`point`, `originX`?, `originY`?): `void`

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
that otherwise are the object's current values.

#### Parameters

• **point**: [`Point`](/api/classes/point/)

position in scene coordinate plane

• **originX?**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Example

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

`ObjectGeometry.setXY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:163](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L163)

***

### setY()

> **setY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setY`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:107](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L107)

***

### shouldCache()

> **shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Defined in

[src/shapes/Object/Object.ts:823](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L823)

***

### toCanvasElement()

> **toCanvasElement**(`options`): `HTMLCanvasElement`

Converts an object into a HTMLCanvas element

#### Parameters

• **options**: `ObjectToCanvasElementOptions` = `{}`

Options object

#### Returns

`HTMLCanvasElement`

Returns DOM element <canvas> with the FabricObject

#### Defined in

[src/shapes/Object/Object.ts:1340](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1340)

***

### toDataURL()

> **toDataURL**(`options`): `string`

Converts an object into a data-url-like string

#### Parameters

• **options**: `toDataURLOptions` = `{}`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Defined in

[src/shapes/Object/Object.ts:1436](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1436)

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude`?): `any`

Returns (dataless) object representation of an instance

#### Parameters

• **propertiesToInclude?**: `any`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

Object representation of an instance

#### Defined in

[src/shapes/Object/Object.ts:1884](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1884)

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Defined in

[src/shapes/Object/Object.ts:1468](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1468)

***

### toObject()

> **toObject**(`propertiesToInclude`?): `any`

Returns an object representation of an instance

#### Parameters

• **propertiesToInclude?**: `any`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`any`

Object representation of an instance

#### Defined in

[src/shapes/Object/Object.ts:1791](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1791)

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

#### Defined in

[src/shapes/Object/Object.ts:1924](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1924)

***

### toggle()

> **toggle**(`property`): [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ObjectGeometry.toggle`

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L46)

***

### transform()

> **transform**(`ctx`): `void`

Transforms context when rendering an object

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context

#### Returns

`void`

#### Defined in

[src/shapes/Object/Object.ts:564](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L564)

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `number`[]

#### Parameters

• **skipGroup**: `boolean` = `false`

#### Returns

`number`[]

#### Inherited from

`ObjectGeometry.transformMatrixKey`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:453](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L453)

***

### translateToCenterPoint()

> **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/api/classes/point/)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.translateToCenterPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:682](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L682)

***

### translateToGivenOrigin()

> **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/api/classes/point/)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

• **fromOriginX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **fromOriginY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

• **toOriginX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **toOriginY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.translateToGivenOrigin`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:654](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L654)

***

### translateToOriginPoint()

> **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/api/classes/point/)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

• **center**: [`Point`](/api/classes/point/)

The point which corresponds to center of the object

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.translateToOriginPoint`

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:710](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L710)

***

### ~~willDrawShadow()~~

> **willDrawShadow**(): `boolean`

Check if this object will cast a shadow with an offset.
used by Group.shouldCache to know if child has a shadow recursively

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Returns

`boolean`

#### Defined in

[src/shapes/Object/Object.ts:836](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L836)

***

### \_fromObject()

> `static` **\_fromObject**\<`S`\>(`__namedParameters`, `__namedParameters`): `Promise`\<`S`\>

#### Type Parameters

• **S** *extends* [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `unknown`\>

• **\_\_namedParameters**: [`Abortable`](/api/type-aliases/abortable/) & `object` = `{}`

#### Returns

`Promise`\<`S`\>

#### Defined in

[src/shapes/Object/Object.ts:1937](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1937)

***

### fromObject()

> `static` **fromObject**\<`T`\>(`object`, `options`?): `Promise`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Type Parameters

• **T** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/)\>

#### Parameters

• **object**: `T`

• **options?**: [`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Defined in

[src/shapes/Object/Object.ts:1966](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1966)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

[src/shapes/Object/Object.ts:332](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L332)
