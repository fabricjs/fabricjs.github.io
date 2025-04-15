---
editUrl: false
next: false
prev: false
title: "BaseFabricObject"
---

Defined in: [src/shapes/Object/Object.ts:178](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L178)

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

### Props

`Props` *extends* [`TOptions`](/api/type-aliases/toptions/)\<`ObjectProps`\> = `Partial`\<`ObjectProps`\>

### SProps

`SProps` *extends* [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/) = [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/)

### EventSpec

`EventSpec` *extends* [`ObjectEvents`](/api/interfaces/objectevents/) = [`ObjectEvents`](/api/interfaces/objectevents/)

## Implements

- `ObjectProps`

## Constructors

### Constructor

> **new BaseFabricObject**\<`Props`, `SProps`, `EventSpec`\>(`options?`): `FabricObject`\<`Props`, `SProps`, `EventSpec`\>

Defined in: [src/shapes/Object/Object.ts:370](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L370)

Constructor

#### Parameters

##### options?

`Props`

Options object

#### Returns

`FabricObject`\<`Props`, `SProps`, `EventSpec`\>

#### Overrides

`ObjectGeometry<EventSpec>.constructor`

## Properties

### absolutePositioned

> **absolutePositioned**: `boolean`

Defined in: [src/shapes/Object/Object.ts:215](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L215)

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

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:63](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L63)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](/api/classes/basefabricobject/#setcoords).
You can calculate them without updating with [()](/api/classes/basefabricobject/#calcacoords)

#### Inherited from

`ObjectGeometry.aCoords`

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:583](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L583)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.angle`

#### Inherited from

`ObjectGeometry.angle`

***

### backgroundColor

> **backgroundColor**: `string`

Defined in: [src/shapes/Object/Object.ts:202](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L202)

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Implementation of

`ObjectProps.backgroundColor`

***

### centeredRotation

> **centeredRotation**: `boolean`

Defined in: [src/shapes/Object/Object.ts:216](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L216)

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

***

### centeredScaling

> **centeredScaling**: `boolean`

Defined in: [src/shapes/Object/Object.ts:217](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L217)

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

#### Since

1.3.4

#### Default

```ts

```

#### Implementation of

`ObjectProps.centeredScaling`

***

### clipPath?

> `optional` **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/shapes/Object/Object.ts:213](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L213)

#### Implementation of

`ObjectProps.clipPath`

***

### dirty

> **dirty**: `boolean`

Defined in: [src/shapes/Object/Object.ts:242](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L242)

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

#### Default

```ts
true
```

***

### excludeFromExport

> **excludeFromExport**: `boolean`

Defined in: [src/shapes/Object/Object.ts:209](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L209)

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Default

```ts

```

#### Implementation of

`ObjectProps.excludeFromExport`

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L192)

#### Implementation of

`ObjectProps.fill`

***

### fillRule

> **fillRule**: `CanvasFillRule`

Defined in: [src/shapes/Object/Object.ts:193](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L193)

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Implementation of

`ObjectProps.fillRule`

***

### flipX

> **flipX**: `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:569](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L569)

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Implementation of

`ObjectProps.flipX`

#### Inherited from

`ObjectGeometry.flipX`

***

### flipY

> **flipY**: `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:570](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L570)

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Implementation of

`ObjectProps.flipY`

#### Inherited from

`ObjectGeometry.flipY`

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Defined in: [src/shapes/Object/Object.ts:201](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L201)

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Implementation of

`ObjectProps.globalCompositeOperation`

***

### height

> **height**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:568](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L568)

Object height

#### Default

```ts

```

#### Implementation of

`ObjectProps.height`

#### Inherited from

`ObjectGeometry.height`

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Defined in: [src/shapes/Object/Object.ts:208](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L208)

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Implementation of

`ObjectProps.includeDefaultValues`

***

### inverted

> **inverted**: `boolean`

Defined in: [src/shapes/Object/Object.ts:214](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L214)

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

#### Default

```ts
false
```

#### Implementation of

`ObjectProps.inverted`

***

### left

> **left**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:566](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L566)

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [FabricObject#originX](/api/classes/fabricobject/#originx)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.left`

#### Inherited from

`ObjectGeometry.left`

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

Defined in: [src/shapes/Object/ObjectGeometry.ts:73](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L73)

storage cache for object full transform matrix

#### Inherited from

`ObjectGeometry.matrixCache`

***

### minScaleLimit

> **minScaleLimit**: `number`

Defined in: [src/shapes/Object/Object.ts:187](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L187)

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.minScaleLimit`

***

### objectCaching

> **objectCaching**: `boolean`

Defined in: [src/shapes/Object/Object.ts:211](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L211)

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

***

### opacity

> **opacity**: `number`

Defined in: [src/shapes/Object/Object.ts:189](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L189)

Opacity of an object

#### Default

```ts
1
```

#### Implementation of

`ObjectProps.opacity`

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:578](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L578)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Implementation of

`ObjectProps.originX`

#### Inherited from

`ObjectGeometry.originX`

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:582](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L582)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Implementation of

`ObjectProps.originY`

#### Inherited from

`ObjectGeometry.originY`

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

Defined in: [src/shapes/Object/ObjectGeometry.ts:68](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L68)

storage cache for object transform matrix

#### Inherited from

`ObjectGeometry.ownMatrixCache`

***

### padding

> **padding**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:53](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L53)

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

`ObjectGeometry.padding`

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Defined in: [src/shapes/Object/Object.ts:191](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L191)

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Implementation of

`ObjectProps.paintFirst`

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

Defined in: [src/shapes/Object/Object.ts:1606](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1606)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

***

### scaleX

> **scaleX**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:571](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L571)

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Implementation of

`ObjectProps.scaleX`

#### Inherited from

`ObjectGeometry.scaleX`

***

### scaleY

> **scaleY**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:572](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L572)

Object scale factor (vertical)

#### Default

```ts
1
```

#### Implementation of

`ObjectProps.scaleY`

#### Inherited from

`ObjectGeometry.scaleY`

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Defined in: [src/shapes/Object/Object.ts:204](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L204)

#### Implementation of

`ObjectProps.shadow`

***

### skewX

> **skewX**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:573](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L573)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.skewX`

#### Inherited from

`ObjectGeometry.skewX`

***

### skewY

> **skewY**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:574](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L574)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.skewY`

#### Inherited from

`ObjectGeometry.skewY`

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/shapes/Object/Object.ts:194](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L194)

#### Implementation of

`ObjectProps.stroke`

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/Object.ts:195](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L195)

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Implementation of

`ObjectProps.strokeDashArray`

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Defined in: [src/shapes/Object/Object.ts:196](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L196)

Line offset of an object's stroke

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.strokeDashOffset`

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Defined in: [src/shapes/Object/Object.ts:197](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L197)

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Implementation of

`ObjectProps.strokeLineCap`

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Defined in: [src/shapes/Object/Object.ts:198](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L198)

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Implementation of

`ObjectProps.strokeLineJoin`

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Defined in: [src/shapes/Object/Object.ts:199](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L199)

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Implementation of

`ObjectProps.strokeMiterLimit`

***

### strokeUniform

> **strokeUniform**: `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:585](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L585)

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

***

### strokeWidth

> **strokeWidth**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:584](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L584)

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Implementation of

`ObjectProps.strokeWidth`

#### Inherited from

`ObjectGeometry.strokeWidth`

***

### top

> **top**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:565](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L565)

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [FabricObject#originY](/api/classes/fabricobject/#originy)

#### Default

```ts
0
```

#### Implementation of

`ObjectProps.top`

#### Inherited from

`ObjectGeometry.top`

***

### visible

> **visible**: `boolean`

Defined in: [src/shapes/Object/Object.ts:206](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L206)

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Implementation of

`ObjectProps.visible`

***

### width

> **width**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:567](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L567)

Object width

#### Default

```ts

```

#### Implementation of

`ObjectProps.width`

#### Inherited from

`ObjectGeometry.width`

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

Defined in: [src/shapes/Object/Object.ts:234](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L234)

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

***

### colorProperties

> `static` **colorProperties**: `string`[]

Defined in: [src/shapes/Object/Object.ts:1513](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1513)

List of properties to consider for animating colors.

***

### customProperties

> `static` **customProperties**: `string`[] = `[]`

Defined in: [src/shapes/Object/Object.ts:1754](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1754)

Define a list of custom properties that will be serialized when
instance.toObject() gets called

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>\> = `fabricObjectDefaultValues`

Defined in: [src/shapes/Object/Object.ts:327](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L327)

***

### stateProperties

> `static` **stateProperties**: `string`[]

Defined in: [src/shapes/Object/Object.ts:225](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L225)

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

***

### type

> `static` **type**: `string` = `'FabricObject'`

Defined in: [src/shapes/Object/Object.ts:343](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L343)

The class type.
This is used for serialization and deserialization purposes and internally it can be used
to identify classes.
When we transform a class in a plain JS object we need a way to recognize which class it was,
and the type is the way we do that. It has no other purposes and you should not give one.
Hard to reach on instances and please do not use to drive instance's logic (this.constructor.type).
To idenfity a class use instanceof class ( instanceof Rect ).
We do not do that in fabricJS code because we want to try to have code splitting possible.

## Accessors

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [src/shapes/Object/Object.ts:354](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L354)

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists to avoid type errors in old code and possibly current deserialization code.
DO NOT build new code around this type value

##### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

##### Returns

`string`

#### Set Signature

> **set** **type**(`value`): `void`

Defined in: [src/shapes/Object/Object.ts:362](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L362)

##### Parameters

###### value

`string`

##### Returns

`void`

## Methods

### \_drawClipPath()

> **\_drawClipPath**(`ctx`, `clipPath`, `context`): `void`

Defined in: [src/shapes/Object/Object.ts:884](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L884)

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### clipPath

`undefined` | `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### context

[`DrawContext`](/api/type-aliases/drawcontext/)

#### Returns

`void`

***

### \_limitCacheSize()

> **\_limitCacheSize**(`dims`): `any`

Defined in: [src/shapes/Object/Object.ts:403](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L403)

Limit the cache dimensions so that X * Y do not cross config.perfLimitSizeTotal
and each side do not cross fabric.cacheSideLimit
those numbers are configurable so that you can get as much detail as you want
making bargain with performances.

#### Parameters

##### dims

`any`

#### Returns

`any`

.width width of canvas

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Defined in: [src/shapes/Object/Object.ts:720](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L720)

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:1029](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1029)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

Defined in: [src/shapes/Object/Object.ts:1018](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1018)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### \_\_namedParameters

`Pick`\<`FabricObject`\<`Props`, `SProps`, `EventSpec`\>, `"fill"`\>

#### Returns

`void`

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

Defined in: [src/shapes/Object/Object.ts:976](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L976)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### decl

`Pick`\<`FabricObject`\<`Props`, `SProps`, `EventSpec`\>, `"stroke"` \| `"strokeWidth"` \| `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"`\>

#### Returns

`void`

***

### \_setupCompositeOperation()

> **\_setupCompositeOperation**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:1488](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1488)

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Rendering canvas context

#### Returns

`void`

***

### animate()

> **animate**\<`T`\>(`animatable`, `options?`): `Record`\<`string`, [`TAnimation`](/api/fabric/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

Defined in: [src/shapes/Object/Object.ts:1527](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1527)

Animates object's properties

#### Type Parameters

##### T

`T` *extends* `number` \| `number`[] \| [`TColorArg`](/api/type-aliases/tcolorarg/)

#### Parameters

##### animatable

`Record`\<`string`, `T`\>

map of keys and end values

##### options?

`Partial`\<[`AnimationOptions`](/api/fabric/namespaces/util/type-aliases/animationoptions/)\<`T`\>\>

#### Returns

`Record`\<`string`, [`TAnimation`](/api/fabric/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:429](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L429)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

`ObjectGeometry.calcACoords`

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:515](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L515)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

`ObjectGeometry.calcOwnMatrix`

***

### calcTransformMatrix()

> **calcTransformMatrix**(`skipGroup?`): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:487](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L487)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

##### skipGroup?

`boolean` = `false`

return transform matrix for object not counting parent transformations
There are some situation in which this is useful to avoid the fake rotation.

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

`ObjectGeometry.calcTransformMatrix`

***

### clone()

> **clone**(`propertiesToInclude?`): `Promise`\<`FabricObject`\<`Props`, `SProps`, `EventSpec`\>\>

Defined in: [src/shapes/Object/Object.ts:1255](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1255)

Clones an instance.

#### Parameters

##### propertiesToInclude?

`string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<`FabricObject`\<`Props`, `SProps`, `EventSpec`\>\>

***

### cloneAsImage()

> **cloneAsImage**(`options?`): [`FabricImage`](/api/classes/fabricimage/)

Defined in: [src/shapes/Object/Object.ts:1281](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1281)

Creates an instance of Image out of an object
makes use of toCanvasElement.
Once this method was based on toDataUrl and loadImage, so it also had a quality
and format option. toCanvasElement is faster and produce no loss of quality.
If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
toCanvasElement and then toBlob from the obtained canvas is also a good option.

#### Parameters

##### options?

`ObjectToCanvasElementOptions`

for clone as image, passed to toDataURL

#### Returns

[`FabricImage`](/api/classes/fabricimage/)

Object cloned as image.

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

***

### complexity()

> **complexity**(): `number`

Defined in: [src/shapes/Object/Object.ts:1430](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1430)

Returns complexity of an instance

#### Returns

`number`

complexity of this instance (is 1 unless subclassed)

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:284](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L284)

Checks if point is inside the object

#### Parameters

##### point

[`Point`](/api/classes/point/)

Point to check against

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

`ObjectGeometry.containsPoint`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/shapes/Object/Object.ts:1498](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1498)

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:906](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L906)

Paint the cached copy of the object on the target context.

#### Parameters

##### this

`TCachedFabricObject`

##### ctx

`CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

***

### drawClipPathOnCache()

> **drawClipPathOnCache**(`ctx`, `clipPath`, `canvasWithClipPath`): `void`

Defined in: [src/shapes/Object/Object.ts:812](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L812)

Execute the drawing operation for an object clipPath

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to render on

##### clipPath

`FabricObject`

##### canvasWithClipPath

`HTMLCanvasElement`

#### Returns

`void`

***

### drawObject()

> **drawObject**(`ctx`, `forClipping`, `context`): `void`

Defined in: [src/shapes/Object/Object.ts:836](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L836)

Execute the drawing operation for an object on a specified context

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to render on

##### forClipping

apply clipping styles

`undefined` | `boolean`

##### context

[`DrawContext`](/api/type-aliases/drawcontext/)

additional context for rendering

#### Returns

`void`

***

### drawSelectionBackground()

> **drawSelectionBackground**(`_ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:692](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L692)

#### Parameters

##### \_ctx

`CanvasRenderingContext2D`

#### Returns

`void`

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Defined in: [src/shapes/Object/Object.ts:1645](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1645)

Compare ancestors

#### Type Parameters

##### T

`T` *extends* `FabricObject`\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

##### other

`T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

***

### fire()

> **fire**\<`K`\>(`eventName`, `options?`): `void`

Defined in: [src/Observable.ts:167](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Observable.ts#L167)

Fires event with an optional options object

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### eventName

`K`

Event name to fire

##### options?

`EventSpec`\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

`ObjectGeometry.fire`

***

### get()

> **get**(`property`): `any`

Defined in: [src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/CommonMethods.ts#L59)

Basic getter

#### Parameters

##### property

`string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

`ObjectGeometry.get`

***

### getAncestors()

> **getAncestors**(): `Ancestors`

Defined in: [src/shapes/Object/Object.ts:1628](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1628)

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](/api/type-aliases/tbbox/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:345](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L345)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/api/type-aliases/tbbox/)

Object with left, top, width, height properties

#### Inherited from

`ObjectGeometry.getBoundingRect`

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:402](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L402)

#### Returns

`number`

#### Inherited from

`ObjectGeometry.getCanvasRetinaScaling`

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:735](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L735)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.getCenterPoint`

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

Defined in: [src/shapes/Object/ObjectGeometry.ts:204](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L204)

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

`ObjectGeometry.getCoords`

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Defined in: [src/shapes/Object/Object.ts:571](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L571)

Return the object opacity counting also the group property

#### Returns

`number`

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/Object.ts:540](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L540)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

***

### getPointByOrigin()

> **getPointByOrigin**(`originX`, `originY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:765](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L765)

Returns the position of the object as if it has a different origin.
Take an object that has left, top set to 100, 100 with origin 'left', 'top'.
Return the values of left top ( wrapped in a point ) that you would need to keep
the same position if origin where different.
Alternatively you can use this to also find which point in the parent plane is a specific origin
( where is the bottom right corner of my object? )

#### Parameters

##### originX

[`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

##### originY

[`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.getPointByOrigin`

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:746](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L746)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.getRelativeCenterPoint`

***

### getRelativeX()

> **getRelativeX**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:115](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L115)

#### Returns

`number`

x position according to object's [FabricObject#originX](/api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/classes/basefabricobject/#getx)

#### Inherited from

`ObjectGeometry.getRelativeX`

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:176](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L176)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [FabricObject#originX](/api/classes/fabricobject/#originx) [FabricObject#originY](/api/classes/fabricobject/#originy) properties in parent's coordinate plane

#### Inherited from

`ObjectGeometry.getRelativeXY`

***

### getRelativeY()

> **getRelativeY**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:131](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L131)

#### Returns

`number`

y position according to object's [FabricObject#originY](/api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/classes/basefabricobject/#gety)

#### Inherited from

`ObjectGeometry.getRelativeY`

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:363](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L363)

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

`ObjectGeometry.getScaledHeight`

***

### getScaledWidth()

> **getScaledWidth**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:354](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L354)

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

`ObjectGeometry.getScaledWidth`

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:410](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L410)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

`ObjectGeometry.getTotalAngle`

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/Object.ts:557](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L557)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/api/classes/point/)

object with scaleX and scaleY properties

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:420](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L420)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

`ObjectGeometry.getViewportTransform`

***

### getX()

> **getX**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L86)

#### Returns

`number`

x position according to object's [FabricObject#originX](/api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Inherited from

`ObjectGeometry.getX`

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:146](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L146)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [FabricObject#originX](/api/classes/fabricobject/#originx) [FabricObject#originY](/api/classes/fabricobject/#originy) properties in canvas coordinate plane

#### Inherited from

`ObjectGeometry.getXY`

***

### getY()

> **getY**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:100](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L100)

#### Returns

`number`

y position according to object's [FabricObject#originY](/api/classes/fabricobject/#originy) property in canvas coordinate plane

#### Inherited from

`ObjectGeometry.getY`

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

Defined in: [src/shapes/Object/Object.ts:1710](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1710)

#### Type Parameters

##### T

`T` *extends* `FabricObject`\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

##### other

`T`

#### Returns

`boolean`

***

### hasFill()

> **hasFill**(): `null` \| `boolean` \| `""`

Defined in: [src/shapes/Object/Object.ts:751](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L751)

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

***

### hasStroke()

> **hasStroke**(): `null` \| `boolean` \| `""`

Defined in: [src/shapes/Object/Object.ts:735](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L735)

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

***

### intersectsWithObject()

> **intersectsWithObject**(`other`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:234](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L234)

Checks if object intersects with another object

#### Parameters

##### other

`ObjectGeometry`

Object to test

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

`ObjectGeometry.intersectsWithObject`

***

### intersectsWithRect()

> **intersectsWithRect**(`tl`, `br`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:220](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L220)

Checks if object intersects with the scene rect formed by TL and BR
In this case the rect is meant aligned with the axis of the canvas.
TL is the TOP LEFT point while br is the BOTTOM RIGHT point

#### Parameters

##### tl

[`Point`](/api/classes/point/)

##### br

[`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

`ObjectGeometry.intersectsWithRect`

***

### isCacheDirty()

> **isCacheDirty**(`skipCanvas`): `boolean`

Defined in: [src/shapes/Object/Object.ts:923](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L923)

Check if cache is dirty and if is dirty clear the context.
This check has a big side effect, it changes the underlying cache canvas if necessary.
Do not call this method on your own to check if the cache is dirty, because if it is,
it is also going to wipe the cache. This is badly designed and needs to be fixed.

#### Parameters

##### skipCanvas

`boolean` = `false`

skip canvas checks because this object is painted
on parent canvas.

#### Returns

`boolean`

***

### isContainedWithinObject()

> **isContainedWithinObject**(`other`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:253](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L253)

Checks if object is fully contained within area of another object

#### Parameters

##### other

`ObjectGeometry`

Object to test

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

`ObjectGeometry.isContainedWithinObject`

***

### isContainedWithinRect()

> **isContainedWithinRect**(`tl`, `br`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:261](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L261)

Checks if object is fully contained within the scene rect formed by TL and BR

#### Parameters

##### tl

[`Point`](/api/classes/point/)

##### br

[`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

`ObjectGeometry.isContainedWithinRect`

***

### isDescendantOf()

> **isDescendantOf**(`target`): `boolean`

Defined in: [src/shapes/Object/Object.ts:1614](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1614)

Checks if object is descendant of target
Should be used instead of [Group.contains](/api/classes/group/#contains) or [StaticCanvas.contains](/api/classes/staticcanvas/#contains) for performance reasons

#### Parameters

##### target

`TAncestor`

#### Returns

`boolean`

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

Defined in: [src/shapes/Object/Object.ts:1720](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1720)

#### Type Parameters

##### T

`T` *extends* `FabricObject`\<`Props`, `SProps`, `EventSpec`\>

#### Parameters

##### other

`T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

***

### isNotVisible()

> **isNotVisible**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:650](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L650)

#### Returns

`boolean`

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:293](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L293)

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

`ObjectGeometry.isOnScreen`

***

### isOverlapping()

> **isOverlapping**\<`T`\>(`other`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:271](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L271)

#### Type Parameters

##### T

`T` *extends* `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

##### other

`T`

#### Returns

`boolean`

#### Inherited from

`ObjectGeometry.isOverlapping`

***

### isPartiallyOnScreen()

> **isPartiallyOnScreen**(): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:323](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L323)

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

`ObjectGeometry.isPartiallyOnScreen`

***

### isType()

> **isType**(...`types`): `boolean`

Defined in: [src/shapes/Object/Object.ts:1419](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1419)

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

##### types

...`string`[]

#### Returns

`boolean`

***

### needsItsOwnCache()

> **needsItsOwnCache**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:763](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L763)

When returns `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

***

### off()

#### Call Signature

> **off**\<`K`\>(`eventName`): `void`

Defined in: [src/Observable.ts:122](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Observable.ts#L122)

Unsubscribe all event listeners for eventname.
Do not use this pattern. You could kill internal fabricJS events.
We know we should have protected events for internal flows, but we don't have yet

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### eventName

`K`

event name (eg. 'after:render')

##### Returns

`void`

##### Inherited from

`ObjectGeometry.off`

#### Call Signature

> **off**\<`K`\>(`eventName`, `handler`): `void`

Defined in: [src/Observable.ts:128](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Observable.ts#L128)

unsubscribe an event listener

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### eventName

`K`

event name (eg. 'after:render')

###### handler

`TEventCallback`

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

`ObjectGeometry.off`

#### Call Signature

> **off**(`handlers`): `void`

Defined in: [src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Observable.ts#L133)

unsubscribe event listeners

##### Parameters

###### handlers

`EventRegistryObject`\<`EventSpec`\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

`ObjectGeometry.off`

#### Call Signature

> **off**(): `void`

Defined in: [src/Observable.ts:137](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Observable.ts#L137)

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

`ObjectGeometry.off`

***

### on()

#### Call Signature

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Defined in: [src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Observable.ts#L23)

Observes specified event

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

###### E

`E`

##### Parameters

###### eventName

`K`

Event name (eg. 'after:render')

###### handler

`TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

on

##### Inherited from

`ObjectGeometry.on`

#### Call Signature

> **on**(`handlers`): `VoidFunction`

Defined in: [src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Observable.ts#L27)

Observes specified event

##### Parameters

###### handlers

`EventRegistryObject`\<`EventSpec`\>

key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`VoidFunction`

disposer

##### Alias

on

##### Inherited from

`ObjectGeometry.on`

***

### once()

#### Call Signature

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Defined in: [src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Observable.ts#L62)

Observes specified event **once**

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

###### E

`E`

##### Parameters

###### eventName

`K`

Event name (eg. 'after:render')

###### handler

`TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

once

##### Inherited from

`ObjectGeometry.once`

#### Call Signature

> **once**(`handlers`): `VoidFunction`

Defined in: [src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/Observable.ts#L66)

Observes specified event **once**

##### Parameters

###### handlers

`EventRegistryObject`\<`EventSpec`\>

key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`VoidFunction`

disposer

##### Alias

once

##### Inherited from

`ObjectGeometry.once`

***

### render()

> **render**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:662](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L662)

Renders an object on a specified context

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

***

### renderCache()

> **renderCache**(`this`, `options?`): `void`

Defined in: [src/shapes/Object/Object.ts:696](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L696)

#### Parameters

##### this

`TCachedFabricObject`

##### options?

`any`

#### Returns

`void`

***

### rotate()

> **rotate**(`angle`): `void`

Defined in: [src/shapes/Object/Object.ts:1447](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1447)

Sets "angle" of an instance with centered rotation

#### Parameters

##### angle

[`TDegree`](/api/type-aliases/tdegree/)

Angle value (in degrees)

#### Returns

`void`

***

### scale()

> **scale**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:372](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L372)

Scales an object (equally by x and y)

#### Parameters

##### value

`number`

Scale factor

#### Returns

`void`

#### Inherited from

`ObjectGeometry.scale`

***

### scaleToHeight()

> **scaleToHeight**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:395](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L395)

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

##### value

`number`

New height value

#### Returns

`void`

#### Inherited from

`ObjectGeometry.scaleToHeight`

***

### scaleToWidth()

> **scaleToWidth**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:383](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L383)

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

##### value

`number`

New width value

#### Returns

`void`

#### Inherited from

`ObjectGeometry.scaleToWidth`

***

### set()

> **set**(`key`, `value?`): `FabricObject`\<`Props`, `SProps`, `EventSpec`\>

Defined in: [src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/CommonMethods.ts#L29)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

##### key

Property name or object (if object, iterate over the object properties)

`string` | `Record`\<`string`, `any`\>

##### value?

`any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

`FabricObject`\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ObjectGeometry.set`

***

### setCoords()

> **setCoords**(): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:451](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L451)

Sets corner and controls position coordinates based on current angle, width and height, left and top.
aCoords are used to quickly find an object on the canvas.
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setCoords`

***

### setOnGroup()

> **setOnGroup**(): `void`

Defined in: [src/shapes/Object/Object.ts:1479](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1479)

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

***

### setPositionByOrigin()

> **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:780](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L780)

Sets the position of the object taking into consideration the object's origin

#### Parameters

##### pos

[`Point`](/api/classes/point/)

The new position of the object

##### originX

[`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

##### originY

[`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setPositionByOrigin`

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:123](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L123)

#### Parameters

##### value

`number`

x position according to object's [FabricObject#originX](/api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](/api/classes/basefabricobject/#setx)

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setRelativeX`

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX?`, `originY?`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:186](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L186)

As [setXY](/api/classes/basefabricobject/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

##### point

[`Point`](/api/classes/point/)

position according to object's [FabricObject#originX](/api/classes/fabricobject/#originx) [FabricObject#originY](/api/classes/fabricobject/#originy) properties in parent's coordinate plane

##### originX?

[`TOriginX`](/api/type-aliases/toriginx/) = `...`

Horizontal origin: 'left', 'center' or 'right'

##### originY?

[`TOriginY`](/api/type-aliases/toriginy/) = `...`

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setRelativeXY`

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:139](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L139)

#### Parameters

##### value

`number`

y position according to object's [FabricObject#originY](/api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](/api/classes/basefabricobject/#sety)

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setRelativeY`

***

### setX()

> **setX**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:93](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L93)

#### Parameters

##### value

`number`

x position according to object's [FabricObject#originX](/api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setX`

***

### setXY()

> **setXY**(`point`, `originX?`, `originY?`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:163](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L163)

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify [FabricObject#originX](/api/classes/fabricobject/#originx) and [FabricObject#originY](/api/classes/fabricobject/#originy) values,
that otherwise are the object's current values.

#### Parameters

##### point

[`Point`](/api/classes/point/)

position in scene coordinate plane

##### originX?

[`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

##### originY?

[`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Example

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

`ObjectGeometry.setXY`

***

### setY()

> **setY**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:107](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L107)

#### Parameters

##### value

`number`

y position according to object's [FabricObject#originY](/api/classes/fabricobject/#originy) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

`ObjectGeometry.setY`

***

### shouldCache()

> **shouldCache**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:788](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L788)

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

***

### toBlob()

> **toBlob**(`options`): `Promise`\<`null` \| `Blob`\>

Defined in: [src/shapes/Object/Object.ts:1406](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1406)

#### Parameters

##### options

`toDataURLOptions` = `{}`

#### Returns

`Promise`\<`null` \| `Blob`\>

***

### toCanvasElement()

> **toCanvasElement**(`options`): `HTMLCanvasElement`

Defined in: [src/shapes/Object/Object.ts:1303](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1303)

Converts an object into a HTMLCanvas element

#### Parameters

##### options

`ObjectToCanvasElementOptions` = `{}`

Options object

#### Returns

`HTMLCanvasElement`

Returns DOM element <canvas> with the FabricObject

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude?`): `any`

Defined in: [src/shapes/Object/Object.ts:1854](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1854)

Returns (dataless) object representation of an instance

#### Parameters

##### propertiesToInclude?

`any`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

Object representation of an instance

***

### toDataURL()

> **toDataURL**(`options`): `string`

Defined in: [src/shapes/Object/Object.ts:1399](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1399)

Converts an object into a data-url-like string

#### Parameters

##### options

`toDataURLOptions` = `{}`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

***

### toggle()

> **toggle**(`property`): `FabricObject`\<`Props`, `SProps`, `EventSpec`\>

Defined in: [src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/CommonMethods.ts#L46)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

##### property

`string`

Property to toggle

#### Returns

`FabricObject`\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

`ObjectGeometry.toggle`

***

### toJSON()

> **toJSON**(): `any`

Defined in: [src/shapes/Object/Object.ts:1438](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1438)

Returns a JSON representation of an instance

#### Returns

`any`

JSON

***

### toObject()

> **toObject**(`propertiesToInclude?`): `any`

Defined in: [src/shapes/Object/Object.ts:1761](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1761)

Returns an object representation of an instance

#### Parameters

##### propertiesToInclude?

`any`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`any`

Object representation of an instance

***

### toString()

> **toString**(): `string`

Defined in: [src/shapes/Object/Object.ts:1894](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1894)

Returns a string representation of an instance

#### Returns

`string`

***

### transform()

> **transform**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:528](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L528)

Transforms context when rendering an object

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context

#### Returns

`void`

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `number`[]

Defined in: [src/shapes/Object/ObjectGeometry.ts:455](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L455)

#### Parameters

##### skipGroup

`boolean` = `false`

#### Returns

`number`[]

#### Inherited from

`ObjectGeometry.transformMatrixKey`

***

### translateToCenterPoint()

> **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:685](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L685)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

##### point

[`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

##### originX

[`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

##### originY

[`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.translateToCenterPoint`

***

### translateToGivenOrigin()

> **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:657](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L657)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

##### point

[`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

##### fromOriginX

[`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

##### fromOriginY

[`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

##### toOriginX

[`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

##### toOriginY

[`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.translateToGivenOrigin`

***

### translateToOriginPoint()

> **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:713](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/ObjectGeometry.ts#L713)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

##### center

[`Point`](/api/classes/point/)

The point which corresponds to center of the object

##### originX

[`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

##### originY

[`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

`ObjectGeometry.translateToOriginPoint`

***

### ~~willDrawShadow()~~

> **willDrawShadow**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:801](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L801)

Check if this object will cast a shadow with an offset.
used by Group.shouldCache to know if child has a shadow recursively

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Returns

`boolean`

***

### \_fromObject()

> `static` **\_fromObject**\<`S`\>(`__namedParameters`, `__namedParameters`): `Promise`\<`S`\>

Defined in: [src/shapes/Object/Object.ts:1907](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1907)

#### Type Parameters

##### S

`S` *extends* `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

##### \_\_namedParameters

`Record`\<`string`, `unknown`\>

##### \_\_namedParameters

[`Abortable`](/api/type-aliases/abortable/) & `object` = `{}`

#### Returns

`Promise`\<`S`\>

***

### fromObject()

> `static` **fromObject**\<`T`\>(`object`, `options?`): `Promise`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Defined in: [src/shapes/Object/Object.ts:1936](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L1936)

#### Type Parameters

##### T

`T` *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`SerializedObjectProps`](/api/interfaces/serializedobjectprops/)\>

#### Parameters

##### object

`T`

##### options?

[`Abortable`](/api/type-aliases/abortable/)

#### Returns

`Promise`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

Defined in: [src/shapes/Object/Object.ts:329](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/shapes/Object/Object.ts#L329)

#### Returns

`Record`\<`string`, `any`\>
