---
editUrl: false
next: false
prev: false
title: "Polygon"
---

Defined in: [src/shapes/Polygon.ts:4](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polygon.ts#L4)

Exported so we can tweak default values

## Extends

- [`Polyline`](/api/classes/polyline/)

## Constructors

### Constructor

> **new Polygon**(`points`, `options?`): `Polygon`

Defined in: [src/shapes/Polyline.ts:117](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L117)

Constructor

#### Parameters

##### points

[`XY`](/api/interfaces/xy/)[] = `[]`

Array of points (where each point is an object with x and y)

##### options?

`Props` = `...`

Options object

#### Returns

`Polygon`

thisArg

#### Example

```ts
var poly = new Polyline([
    { x: 10, y: 10 },
    { x: 50, y: 30 },
    { x: 40, y: 70 },
    { x: 60, y: 50 },
    { x: 100, y: 150 },
    { x: 40, y: 100 }
  ], {
  stroke: 'red',
  left: 100,
  top: 100
});
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`constructor`](/api/classes/polyline/#constructor)

## Properties

### \_\_corner?

> `optional` **\_\_corner**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L105)

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`__corner`](/api/classes/polyline/#__corner)

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

Defined in: [src/shapes/Object/InteractiveObject.ts:112](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L112)

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_controlsVisibility`](/api/classes/polyline/#_controlsvisibility)

***

### \_scaling?

> `optional` **\_scaling**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L134)

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

#### TODO

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_scaling`](/api/classes/polyline/#_scaling)

***

### absolutePositioned

> **absolutePositioned**: `boolean`

Defined in: [src/shapes/Object/Object.ts:215](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L215)

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`absolutePositioned`](/api/classes/polyline/#absolutepositioned)

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:63](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L63)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](/api/classes/polygon/#setcoords).
You can calculate them without updating with [()](/api/classes/polygon/#calcacoords)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`aCoords`](/api/classes/polyline/#acoords)

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:581](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L581)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`angle`](/api/classes/polyline/#angle)

***

### backgroundColor

> **backgroundColor**: `string`

Defined in: [src/shapes/Object/Object.ts:202](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L202)

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`backgroundColor`](/api/classes/polyline/#backgroundcolor)

***

### borderColor

> **borderColor**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L74)

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderColor`](/api/classes/polyline/#bordercolor)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L75)

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderDashArray`](/api/classes/polyline/#borderdasharray)

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Defined in: [src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L76)

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderOpacityWhenMoving`](/api/classes/polyline/#borderopacitywhenmoving)

***

### borderScaleFactor

> **borderScaleFactor**: `number`

Defined in: [src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L77)

Scale factor for the border of the objects ( selection box and controls stroke ).
Bigger number will make a thicker border
border default value is 1, so this scale value is equal to a border and control strokeWidth.
If you need to divide border from control strokeWidth
you will need to write your own render function for controls

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderScaleFactor`](/api/classes/polyline/#borderscalefactor)

***

### centeredRotation

> **centeredRotation**: `boolean`

Defined in: [src/shapes/Object/Object.ts:216](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L216)

When `true` the object will rotate on its center.
When `false` will rotate around the origin point defined by originX and originY.
The value of this property is IGNORED during a transform if the canvas has already
centeredRotation set to `true`
The object method `rotate` will always consider this property and never the canvas's one.

#### Since

1.3.4

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`centeredRotation`](/api/classes/polyline/#centeredrotation)

***

### centeredScaling

> **centeredScaling**: `boolean`

Defined in: [src/shapes/Object/Object.ts:217](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L217)

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

#### Since

1.3.4

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`centeredScaling`](/api/classes/polyline/#centeredscaling)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Defined in: [src/shapes/Object/Object.ts:213](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L213)

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clipPath`](/api/classes/polyline/#clippath)

***

### clipPathId?

> `optional` **clipPathId**: `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:15](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/FabricObjectSVGExportMixin.ts#L15)

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clipPathId`](/api/classes/polyline/#clippathid)

***

### controls

> **controls**: `TControlSet`

Defined in: [src/shapes/Object/InteractiveObject.ts:118](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L118)

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`controls`](/api/classes/polyline/#controls)

***

### cornerColor

> **cornerColor**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L68)

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerColor`](/api/classes/polyline/#cornercolor)

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/InteractiveObject.ts:71](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L71)

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerDashArray`](/api/classes/polyline/#cornerdasharray)

***

### cornerSize

> **cornerSize**: `number`

Defined in: [src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L65)

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerSize`](/api/classes/polyline/#cornersize)

***

### cornerStrokeColor

> **cornerStrokeColor**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L69)

Color of controlling corners of an object (when it's active and transparentCorners false)

#### Since

1.6.2

#### Default

```ts
''
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerStrokeColor`](/api/classes/polyline/#cornerstrokecolor)

***

### ~~cornerStyle~~

> **cornerStyle**: `"circle"` \| `"rect"`

Defined in: [src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L70)

Specify style of control, 'rect' or 'circle'
This is deprecated. In the future there will be a standard control render
And you can swap it with one of the alternative proposed with the control api

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Since

1.6.2

#### Default

```ts
'rect'
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerStyle`](/api/classes/polyline/#cornerstyle)

***

### dirty

> **dirty**: `boolean`

Defined in: [src/shapes/Object/Object.ts:242](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L242)

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`dirty`](/api/classes/polyline/#dirty)

***

### evented

> **evented**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L82)

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`evented`](/api/classes/polyline/#evented)

***

### ~~exactBoundingBox~~

> **exactBoundingBox**: `boolean`

Defined in: [src/shapes/Polyline.ts:60](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L60)

WARNING: Feature in progress
Calculate the exact bounding box taking in account strokeWidth on acute angles
this will be turned to true by default on fabric 6.0
maybe will be left in as an optimization since calculations may be slow

:::caution[Deprecated]
transient option soon to be removed in favor of a different design
:::

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`exactBoundingBox`](/api/classes/polyline/#exactboundingbox)

***

### excludeFromExport

> **excludeFromExport**: `boolean`

Defined in: [src/shapes/Object/Object.ts:209](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L209)

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`excludeFromExport`](/api/classes/polyline/#excludefromexport)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L192)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fill`](/api/classes/polyline/#fill)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Defined in: [src/shapes/Object/Object.ts:193](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L193)

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fillRule`](/api/classes/polyline/#fillrule)

***

### flipX

> **flipX**: `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:567](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L567)

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`flipX`](/api/classes/polyline/#flipx)

***

### flipY

> **flipY**: `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:568](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L568)

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`flipY`](/api/classes/polyline/#flipy)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Defined in: [src/shapes/Object/Object.ts:201](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L201)

Composite rule used for canvas globalCompositeOperation

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`globalCompositeOperation`](/api/classes/polyline/#globalcompositeoperation)

***

### hasBorders

> **hasBorders**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L78)

When set to `false`, object's controlling borders are not rendered

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasBorders`](/api/classes/polyline/#hasborders)

***

### hasControls

> **hasControls**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L72)

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasControls`](/api/classes/polyline/#hascontrols)

***

### height

> **height**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:566](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L566)

Object height

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`height`](/api/classes/polyline/#height)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L86)

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hoverCursor`](/api/classes/polyline/#hovercursor)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Defined in: [src/shapes/Object/Object.ts:208](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L208)

When `false`, default object's values are not included in its serialization

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`includeDefaultValues`](/api/classes/polyline/#includedefaultvalues)

***

### inverted

> **inverted**: `boolean`

Defined in: [src/shapes/Object/Object.ts:214](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L214)

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`inverted`](/api/classes/polyline/#inverted)

***

### isMoving?

> `optional` **isMoving**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:124](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L124)

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isMoving`](/api/classes/polyline/#ismoving)

***

### left

> **left**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:564](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L564)

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting originX

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`left`](/api/classes/polyline/#left)

***

### lockMovementX

> **lockMovementX**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:56](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L56)

When `true`, object horizontal movement is locked

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockMovementX`](/api/classes/polyline/#lockmovementx)

***

### lockMovementY

> **lockMovementY**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L57)

When `true`, object vertical movement is locked

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockMovementY`](/api/classes/polyline/#lockmovementy)

***

### lockRotation

> **lockRotation**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L58)

When `true`, object rotation is locked

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockRotation`](/api/classes/polyline/#lockrotation)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L63)

When `true`, object cannot be flipped by scaling into negative values

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockScalingFlip`](/api/classes/polyline/#lockscalingflip)

***

### lockScalingX

> **lockScalingX**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:59](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L59)

When `true`, object horizontal scaling is locked

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockScalingX`](/api/classes/polyline/#lockscalingx)

***

### lockScalingY

> **lockScalingY**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L60)

When `true`, object vertical scaling is locked

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockScalingY`](/api/classes/polyline/#lockscalingy)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L61)

When `true`, object horizontal skewing is locked

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockSkewingX`](/api/classes/polyline/#lockskewingx)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:62](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L62)

When `true`, object vertical skewing is locked

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockSkewingY`](/api/classes/polyline/#lockskewingy)

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

Defined in: [src/shapes/Object/ObjectGeometry.ts:73](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L73)

storage cache for object full transform matrix

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`matrixCache`](/api/classes/polyline/#matrixcache)

***

### minScaleLimit

> **minScaleLimit**: `number`

Defined in: [src/shapes/Object/Object.ts:187](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L187)

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`minScaleLimit`](/api/classes/polyline/#minscalelimit)

***

### moveCursor

> **moveCursor**: `null` \| `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:87](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L87)

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`moveCursor`](/api/classes/polyline/#movecursor)

***

### noScaleCache

> **noScaleCache**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:51](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L51)

When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
too much and will be redrawn with correct details at the end of scaling.
this setting is performance and application dependant.
default to true
since 1.7.0

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`noScaleCache`](/api/classes/polyline/#noscalecache)

***

### objectCaching

> **objectCaching**: `boolean`

Defined in: [src/shapes/Object/Object.ts:211](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L211)

When `true`, object is cached on an additional canvas.
When `false`, object is not cached unless necessary ( clipPath )
default to true

#### Since

1.7.0

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`objectCaching`](/api/classes/polyline/#objectcaching)

***

### oCoords

> **oCoords**: `Record`\<`string`, `TOCoord`\>

Defined in: [src/shapes/Object/InteractiveObject.ts:95](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L95)

The object's controls' position in viewport coordinates
Calculated by [Control#positionHandler](/api/classes/control/#positionhandler) and [Control#calcCornerCoords](/api/classes/control/#calccornercoords), depending on [padding](/api/classes/fabricobject/#padding).
`corner/touchCorner` describe the 4 points forming the interactive area of the corner.
Used to draw and locate controls.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`oCoords`](/api/classes/polyline/#ocoords)

***

### opacity

> **opacity**: `number`

Defined in: [src/shapes/Object/Object.ts:189](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L189)

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`opacity`](/api/classes/polyline/#opacity)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:576](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L576)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`originX`](/api/classes/polyline/#originx)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:580](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L580)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`originY`](/api/classes/polyline/#originy)

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

Defined in: [src/shapes/Object/ObjectGeometry.ts:68](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L68)

storage cache for object transform matrix

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`ownMatrixCache`](/api/classes/polyline/#ownmatrixcache)

***

### padding

> **padding**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:53](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L53)

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`padding`](/api/classes/polyline/#padding)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Defined in: [src/shapes/Object/Object.ts:191](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L191)

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`paintFirst`](/api/classes/polyline/#paintfirst)

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

Defined in: [src/shapes/Object/Object.ts:1602](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1602)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`parent`](/api/classes/polyline/#parent)

***

### pathOffset

> **pathOffset**: [`Point`](/api/classes/point/)

Defined in: [src/shapes/Polyline.ts:90](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L90)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`pathOffset`](/api/classes/polyline/#pathoffset)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L83)

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`perPixelTargetFind`](/api/classes/polyline/#perpixeltargetfind)

***

### points

> **points**: [`XY`](/api/interfaces/xy/)[]

Defined in: [src/shapes/Polyline.ts:49](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L49)

Points array

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`points`](/api/classes/polyline/#points)

***

### scaleX

> **scaleX**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:569](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L569)

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleX`](/api/classes/polyline/#scalex)

***

### scaleY

> **scaleY**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:570](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L570)

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleY`](/api/classes/polyline/#scaley)

***

### selectable

> **selectable**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L81)

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`selectable`](/api/classes/polyline/#selectable)

***

### ~~selectionBackgroundColor~~

> **selectionBackgroundColor**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L79)

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`selectionBackgroundColor`](/api/classes/polyline/#selectionbackgroundcolor)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Defined in: [src/shapes/Object/Object.ts:204](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L204)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`shadow`](/api/classes/polyline/#shadow)

***

### skewX

> **skewX**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:571](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L571)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`skewX`](/api/classes/polyline/#skewx)

***

### skewY

> **skewY**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:572](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L572)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`skewY`](/api/classes/polyline/#skewy)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/InteractiveObject.ts:53](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L53)

The angle that an object will lock to while rotating.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`snapAngle`](/api/classes/polyline/#snapangle)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/InteractiveObject.ts:54](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L54)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`snapThreshold`](/api/classes/polyline/#snapthreshold)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/shapes/Object/Object.ts:194](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L194)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`stroke`](/api/classes/polyline/#stroke)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/Object.ts:195](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L195)

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeDashArray`](/api/classes/polyline/#strokedasharray)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Defined in: [src/shapes/Object/Object.ts:196](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L196)

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeDashOffset`](/api/classes/polyline/#strokedashoffset)

***

### strokeDiff

> **strokeDiff**: [`Point`](/api/classes/point/)

Defined in: [src/shapes/Polyline.ts:96](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L96)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeDiff`](/api/classes/polyline/#strokediff)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Defined in: [src/shapes/Object/Object.ts:197](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L197)

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeLineCap`](/api/classes/polyline/#strokelinecap)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Defined in: [src/shapes/Object/Object.ts:198](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L198)

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeLineJoin`](/api/classes/polyline/#strokelinejoin)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Defined in: [src/shapes/Object/Object.ts:199](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L199)

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeMiterLimit`](/api/classes/polyline/#strokemiterlimit)

***

### strokeOffset

> **strokeOffset**: [`Point`](/api/classes/point/)

Defined in: [src/shapes/Polyline.ts:92](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L92)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeOffset`](/api/classes/polyline/#strokeoffset)

***

### strokeUniform

> **strokeUniform**: `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:583](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L583)

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeUniform`](/api/classes/polyline/#strokeuniform)

***

### strokeWidth

> **strokeWidth**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:582](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L582)

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeWidth`](/api/classes/polyline/#strokewidth)

***

### top

> **top**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:563](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L563)

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting originY

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`top`](/api/classes/polyline/#top)

***

### touchCornerSize

> **touchCornerSize**: `number`

Defined in: [src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L66)

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`touchCornerSize`](/api/classes/polyline/#touchcornersize)

***

### transparentCorners

> **transparentCorners**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L67)

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`transparentCorners`](/api/classes/polyline/#transparentcorners)

***

### visible

> **visible**: `boolean`

Defined in: [src/shapes/Object/Object.ts:206](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L206)

When set to `false`, an object is not rendered on canvas

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`visible`](/api/classes/polyline/#visible)

***

### width

> **width**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:565](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L565)

Object width

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`width`](/api/classes/polyline/#width)

***

### ATTRIBUTE\_NAMES

> `static` **ATTRIBUTE\_NAMES**: `string`[]

Defined in: [src/shapes/Polyline.ts:388](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L388)

List of attribute names to account for when parsing SVG element (used by [Polyline.fromElement](/api/classes/polyline/#fromelement))
@see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`ATTRIBUTE_NAMES`](/api/classes/polyline/#attribute_names)

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

Defined in: [src/shapes/Polyline.ts:94](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L94)

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cacheProperties`](/api/classes/polyline/#cacheproperties)

***

### colorProperties

> `static` **colorProperties**: `string`[]

Defined in: [src/shapes/Object/Object.ts:1509](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1509)

List of properties to consider for animating colors.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`colorProperties`](/api/classes/polyline/#colorproperties)

***

### customProperties

> `static` **customProperties**: `string`[] = `[]`

Defined in: [src/shapes/Object/Object.ts:1750](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1750)

Define a list of custom properties that will be serialized when
instance.toObject() gets called

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`customProperties`](/api/classes/polyline/#customproperties)

***

### layoutProperties

> `static` **layoutProperties**: keyof [`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

Defined in: [src/shapes/Polyline.ts:79](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L79)

A list of properties that if changed trigger a recalculation of dimensions

#### Todo

check if you really need to recalculate for all cases

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`layoutProperties`](/api/classes/polyline/#layoutproperties)

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>\> = `polylineDefaultValues`

Defined in: [src/shapes/Polygon.ts:5](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polygon.ts#L5)

#### Overrides

[`Polyline`](/api/classes/polyline/).[`ownDefaults`](/api/classes/polyline/#owndefaults)

***

### stateProperties

> `static` **stateProperties**: `string`[]

Defined in: [src/shapes/Object/Object.ts:225](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L225)

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`stateProperties`](/api/classes/polyline/#stateproperties)

***

### type

> `static` **type**: `string` = `'Polygon'`

Defined in: [src/shapes/Polygon.ts:7](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polygon.ts#L7)

The class type.
This is used for serialization and deserialization purposes and internally it can be used
to identify classes.
When we transform a class in a plain JS object we need a way to recognize which class it was,
and the type is the way we do that. It has no other purposes and you should not give one.
Hard to reach on instances and please do not use to drive instance's logic (this.constructor.type).
To idenfity a class use instanceof class ( instanceof Rect ).
We do not do that in fabricJS code because we want to try to have code splitting possible.

#### Overrides

[`Polyline`](/api/classes/polyline/).[`type`](/api/classes/polyline/#type)

## Accessors

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [src/shapes/Object/Object.ts:354](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L354)

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

Defined in: [src/shapes/Object/Object.ts:362](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L362)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`type`](/api/classes/polyline/#type-1)

## Methods

### \_drawClipPath()

> **\_drawClipPath**(`ctx`, `clipPath`, `context`): `void`

Defined in: [src/shapes/Object/Object.ts:871](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L871)

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### clipPath

`undefined` | [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### context

[`DrawContext`](/api/type-aliases/drawcontext/)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_drawClipPath`](/api/classes/polyline/#_drawclippath)

***

### \_getNonTransformedDimensions()

> **\_getNonTransformedDimensions**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Polyline.ts:235](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L235)

stroke is taken in account in size

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_getNonTransformedDimensions`](/api/classes/polyline/#_getnontransformeddimensions)

***

### \_limitCacheSize()

> **\_limitCacheSize**(`dims`): [`TSize`](/api/type-aliases/tsize/) & `object` & `object`

Defined in: [src/shapes/Object/Object.ts:397](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L397)

Limit the cache dimensions so that X * Y do not cross config.perfLimitSizeTotal
and each side do not cross fabric.cacheSideLimit
those numbers are configurable so that you can get as much detail as you want
making bargain with performances.
It mutates the input object dims.

#### Parameters

##### dims

[`TSize`](/api/type-aliases/tsize/) & `object` & `object`

#### Returns

[`TSize`](/api/type-aliases/tsize/) & `object` & `object`

dims

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_limitCacheSize`](/api/classes/polyline/#_limitcachesize)

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Defined in: [src/shapes/Object/Object.ts:707](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L707)

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_removeCacheCanvas`](/api/classes/polyline/#_removecachecanvas)

***

### \_renderControls()

> **\_renderControls**(`ctx`, `styleOverride?`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:435](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L435)

Renders controls and borders for the object
the context here is not transformed

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to render on

##### styleOverride?

`TStyleOverride` = `{}`

properties to override the object style

#### Returns

`void`

#### Todo

move to interactivity

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_renderControls`](/api/classes/polyline/#_rendercontrols)

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:1016](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1016)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setClippingProperties`](/api/classes/polyline/#_setclippingproperties)

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

Defined in: [src/shapes/Object/Object.ts:1005](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1005)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### \_\_namedParameters

`Pick`\<`this`, `"fill"`\>

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setFillStyles`](/api/classes/polyline/#_setfillstyles)

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

Defined in: [src/shapes/Object/Object.ts:963](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L963)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### decl

`Pick`\<`this`, `"stroke"` \| `"strokeWidth"` \| `"strokeLineCap"` \| `"strokeDashOffset"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"`\>

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setStrokeStyles`](/api/classes/polyline/#_setstrokestyles)

***

### \_setupCompositeOperation()

> **\_setupCompositeOperation**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:1484](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1484)

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Rendering canvas context

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setupCompositeOperation`](/api/classes/polyline/#_setupcompositeoperation)

***

### \_toSVG()

> **\_toSVG**(): `string`[]

Defined in: [src/shapes/Polyline.ts:325](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L325)

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_toSVG`](/api/classes/polyline/#_tosvg)

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:250](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/FabricObjectSVGExportMixin.ts#L250)

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`addPaintOrder`](/api/classes/polyline/#addpaintorder)

***

### animate()

> **animate**\<`T`\>(`animatable`, `options?`): `Record`\<`string`, [`TAnimation`](/api/fabric/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

Defined in: [src/shapes/Object/Object.ts:1523](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1523)

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

#### See

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`animate`](/api/classes/polyline/#animate)

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:427](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L427)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`calcACoords`](/api/classes/polyline/#calcacoords)

***

### calcOCoords()

> **calcOCoords**(): `Record`\<`string`, `TOCoord`\>

Defined in: [src/shapes/Object/InteractiveObject.ts:255](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L255)

Calculates the coordinates of the center of each control plus the corners of the control itself
This basically just delegates to each control positionHandler
WARNING: changing what is passed to positionHandler is a breaking change, since position handler
is a public api and should be done just if extremely necessary

#### Returns

`Record`\<`string`, `TOCoord`\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`calcOCoords`](/api/classes/polyline/#calcocoords)

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:513](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L513)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`calcOwnMatrix`](/api/classes/polyline/#calcownmatrix)

***

### calcTransformMatrix()

> **calcTransformMatrix**(`skipGroup?`): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:485](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L485)

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

[`Polyline`](/api/classes/polyline/).[`calcTransformMatrix`](/api/classes/polyline/#calctransformmatrix)

***

### canDrop()

> **canDrop**(`_e`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:701](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L701)

Override to customize drag and drop behavior

#### Parameters

##### \_e

`DragEvent`

#### Returns

`boolean`

true if the object currently dragged can be dropped on the target

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`canDrop`](/api/classes/polyline/#candrop)

***

### clearContextTop()

> **clearContextTop**(`restoreManually?`): `undefined` \| `CanvasRenderingContext2D`

Defined in: [src/shapes/Object/InteractiveObject.ts:627](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L627)

Clears the canvas.contextTop in a specific area that corresponds to the object's bounding box
that is in the canvas.contextContainer.
This function is used to clear pieces of contextTop where we render ephemeral effects on top of the object.
Example: blinking cursor text selection, drag effects.

#### Parameters

##### restoreManually?

`boolean`

When true won't restore the context after clear, in order to draw something else.

#### Returns

`undefined` \| `CanvasRenderingContext2D`

canvas.contextTop that is either still transformed
with the object transformMatrix, or restored to neutral transform

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clearContextTop`](/api/classes/polyline/#clearcontexttop)

***

### clone()

> **clone**(`propertiesToInclude?`): `Promise`\<`Polygon`\>

Defined in: [src/shapes/Object/Object.ts:1242](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1242)

Clones an instance.

#### Parameters

##### propertiesToInclude?

`string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<`Polygon`\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clone`](/api/classes/polyline/#clone)

***

### cloneAsImage()

> **cloneAsImage**(`options?`): [`FabricImage`](/api/classes/fabricimage/)

Defined in: [src/shapes/Object/Object.ts:1268](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1268)

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cloneAsImage`](/api/classes/polyline/#cloneasimage)

***

### complexity()

> **complexity**(): `number`

Defined in: [src/shapes/Polyline.ts:378](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L378)

Returns complexity of an instance

#### Returns

`number`

complexity of this instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`complexity`](/api/classes/polyline/#complexity)

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:282](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L282)

Checks if point is inside the object

#### Parameters

##### point

[`Point`](/api/classes/point/)

Point to check against

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`containsPoint`](/api/classes/polyline/#containspoint)

***

### dispose()

> **dispose**(): `void`

Defined in: [src/shapes/Object/Object.ts:1494](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1494)

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`dispose`](/api/classes/polyline/#dispose)

***

### drawBorders()

> **drawBorders**(`ctx`, `options`, `styleOverride?`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:478](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L478)

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to draw on

##### options

[`TQrDecomposeOut`](/api/fabric/namespaces/util/type-aliases/tqrdecomposeout/)

object representing current object parameters

##### styleOverride?

`TStyleOverride`

object to override the object style

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawBorders`](/api/classes/polyline/#drawborders)

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:893](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L893)

Paint the cached copy of the object on the target context.

#### Parameters

##### this

`TCachedFabricObject`

##### ctx

`CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawCacheOnCanvas`](/api/classes/polyline/#drawcacheoncanvas)

***

### drawClipPathOnCache()

> **drawClipPathOnCache**(`ctx`, `clipPath`, `canvasWithClipPath`): `void`

Defined in: [src/shapes/Object/Object.ts:799](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L799)

Execute the drawing operation for an object clipPath

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to render on

##### clipPath

[`BaseFabricObject`](/api/classes/basefabricobject/)

##### canvasWithClipPath

`HTMLCanvasElement`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawClipPathOnCache`](/api/classes/polyline/#drawclippathoncache)

***

### drawControls()

> **drawControls**(`ctx`, `styleOverride`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:550](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L550)

Draws corners of an object's bounding box.
Requires public properties: width, height
Requires public options: cornerSize, padding
Be aware that since fabric 6.0 this function does not call setCoords anymore.
setCoords needs to be called manually if the object of which we are rendering controls
is outside the standard selection and transform process.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to draw on

##### styleOverride

`ControlRenderingStyleOverride` = `{}`

object to override the object style

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawControls`](/api/classes/polyline/#drawcontrols)

***

### drawControlsConnectingLines()

> **drawControlsConnectingLines**(`ctx`, `size`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:517](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L517)

Draws lines from a borders of an object's bounding box to controls that have `withConnection` property set.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to draw on

##### size

[`Point`](/api/classes/point/)

object size x = width, y = height

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawControlsConnectingLines`](/api/classes/polyline/#drawcontrolsconnectinglines)

***

### drawObject()

> **drawObject**(`ctx`, `forClipping`, `context`): `void`

Defined in: [src/shapes/Object/Object.ts:823](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L823)

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawObject`](/api/classes/polyline/#drawobject)

***

### drawSelectionBackground()

> **drawSelectionBackground**(`ctx`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:375](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L375)

Draws a colored layer behind the object, inside its selection borders.
Requires public options: padding, selectionBackgroundColor
this function is called when the context is transformed
has checks to be skipped when the object is on a staticCanvas

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to draw on

#### Returns

`void`

#### Todo

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawSelectionBackground`](/api/classes/polyline/#drawselectionbackground)

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Defined in: [src/shapes/Object/Object.ts:1641](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1641)

Compare ancestors

#### Type Parameters

##### T

`T` *extends* `Polygon`

#### Parameters

##### other

`T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`findCommonAncestors`](/api/classes/polyline/#findcommonancestors)

***

### fire()

> **fire**\<`K`\>(`eventName`, `options?`): `void`

Defined in: [src/Observable.ts:167](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/Observable.ts#L167)

Fires event with an optional options object

#### Type Parameters

##### K

`K` *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

#### Parameters

##### eventName

`K`

Event name to fire

##### options?

[`ObjectEvents`](/api/interfaces/objectevents/)\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fire`](/api/classes/polyline/#fire)

***

### forEachControl()

> **forEachControl**(`fn`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:353](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L353)

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

##### fn

(`control`, `key`, `fabricObject`) => `any`

function to iterate over the controls over

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`forEachControl`](/api/classes/polyline/#foreachcontrol)

***

### get()

> **get**(`property`): `any`

Defined in: [src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/CommonMethods.ts#L59)

Basic getter

#### Parameters

##### property

`string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`get`](/api/classes/polyline/#get)

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| \{ `control`: [`Control`](/api/classes/control/); `coord`: `TOCoord`; `key`: `string`; \}

Defined in: [src/shapes/Object/InteractiveObject.ts:194](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L194)

#### Returns

`undefined` \| \{ `control`: [`Control`](/api/classes/control/); `coord`: `TOCoord`; `key`: `string`; \}

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getActiveControl`](/api/classes/polyline/#getactivecontrol)

***

### getAncestors()

> **getAncestors**(): `Ancestors`

Defined in: [src/shapes/Object/Object.ts:1624](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1624)

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getAncestors`](/api/classes/polyline/#getancestors)

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](/api/type-aliases/tbbox/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:343](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L343)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/api/type-aliases/tbbox/)

Object with left, top, width, height properties

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getBoundingRect`](/api/classes/polyline/#getboundingrect)

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:400](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L400)

#### Returns

`number`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getCanvasRetinaScaling`](/api/classes/polyline/#getcanvasretinascaling)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:733](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L733)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getCenterPoint`](/api/classes/polyline/#getcenterpoint)

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

Defined in: [src/shapes/Object/ObjectGeometry.ts:204](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L204)

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getCoords`](/api/classes/polyline/#getcoords)

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Defined in: [src/shapes/Object/Object.ts:560](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L560)

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getObjectOpacity`](/api/classes/polyline/#getobjectopacity)

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/Object.ts:529](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L529)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getObjectScaling`](/api/classes/polyline/#getobjectscaling)

***

### getPointByOrigin()

> **getPointByOrigin**(`originX`, `originY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:763](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L763)

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

[`Polyline`](/api/classes/polyline/).[`getPointByOrigin`](/api/classes/polyline/#getpointbyorigin)

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:744](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L744)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeCenterPoint`](/api/classes/polyline/#getrelativecenterpoint)

***

### getRelativeX()

> **getRelativeX**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:115](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L115)

#### Returns

`number`

x position according to object's originX property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/classes/polygon/#getx)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeX`](/api/classes/polyline/#getrelativex)

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:176](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L176)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's originX originY properties in parent's coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeXY`](/api/classes/polyline/#getrelativexy)

***

### getRelativeY()

> **getRelativeY**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:131](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L131)

#### Returns

`number`

y position according to object's originY property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/classes/polygon/#gety)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeY`](/api/classes/polyline/#getrelativey)

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:361](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L361)

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getScaledHeight`](/api/classes/polyline/#getscaledheight)

***

### getScaledWidth()

> **getScaledWidth**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:352](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L352)

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getScaledWidth`](/api/classes/polyline/#getscaledwidth)

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:85](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/FabricObjectSVGExportMixin.ts#L85)

Returns id attribute for svg output

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> & `object`

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgCommons`](/api/classes/polyline/#getsvgcommons)

***

### getSvgFilter()

> **getSvgFilter**(`this`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:77](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/FabricObjectSVGExportMixin.ts#L77)

Returns filter for svg shadow

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgFilter`](/api/classes/polyline/#getsvgfilter)

***

### getSvgStyles()

> **getSvgStyles**(`this`, `skipShadow?`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:22](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/FabricObjectSVGExportMixin.ts#L22)

Returns styles-string for svg-export

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### skipShadow?

`boolean`

a boolean to skip shadow filter output

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgStyles`](/api/classes/polyline/#getsvgstyles)

***

### getSvgTransform()

> **getSvgTransform**(`this`, `full?`, `additionalTransform?`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:104](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/FabricObjectSVGExportMixin.ts#L104)

Returns transform-string for svg-export

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### full?

`boolean`

##### additionalTransform?

`string` = `''`

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgTransform`](/api/classes/polyline/#getsvgtransform)

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:408](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L408)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getTotalAngle`](/api/classes/polyline/#gettotalangle)

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/Object.ts:546](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L546)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/api/classes/point/)

object with scaleX and scaleY properties

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getTotalObjectScaling`](/api/classes/polyline/#gettotalobjectscaling)

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:418](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L418)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getViewportTransform`](/api/classes/polyline/#getviewporttransform)

***

### getX()

> **getX**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L86)

#### Returns

`number`

x position according to object's originX property in canvas coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getX`](/api/classes/polyline/#getx)

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:146](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L146)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's originX originY properties in canvas coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getXY`](/api/classes/polyline/#getxy)

***

### getY()

> **getY**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:100](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L100)

#### Returns

`number`

y position according to object's originY property in canvas coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getY`](/api/classes/polyline/#gety)

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

Defined in: [src/shapes/Object/Object.ts:1706](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1706)

#### Type Parameters

##### T

`T` *extends* `Polygon`

#### Parameters

##### other

`T`

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasCommonAncestors`](/api/classes/polyline/#hascommonancestors)

***

### hasFill()

> **hasFill**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:738](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L738)

return true if the object will draw a fill
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when fill happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the fill is invisible.

#### Returns

`boolean`

Boolean

#### Since

3.0.0

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasFill`](/api/classes/polyline/#hasfill)

***

### hasStroke()

> **hasStroke**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:722](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L722)

return true if the object will draw a stroke
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when stroke happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the stroke is invisible.

#### Returns

`boolean`

Boolean

#### Since

3.0.0

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasStroke`](/api/classes/polyline/#hasstroke)

***

### intersectsWithObject()

> **intersectsWithObject**(`other`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:232](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L232)

Checks if object intersects with another object

#### Parameters

##### other

`ObjectGeometry`

Object to test

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`intersectsWithObject`](/api/classes/polyline/#intersectswithobject)

***

### intersectsWithRect()

> **intersectsWithRect**(`tl`, `br`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:218](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L218)

Checks if object intersects with the scene rect formed by tl and br

#### Parameters

##### tl

[`Point`](/api/classes/point/)

##### br

[`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`intersectsWithRect`](/api/classes/polyline/#intersectswithrect)

***

### isCacheDirty()

> **isCacheDirty**(`skipCanvas`): `boolean`

Defined in: [src/shapes/Object/Object.ts:910](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L910)

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

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isCacheDirty`](/api/classes/polyline/#iscachedirty)

***

### isContainedWithinObject()

> **isContainedWithinObject**(`other`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:251](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L251)

Checks if object is fully contained within area of another object

#### Parameters

##### other

`ObjectGeometry`

Object to test

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isContainedWithinObject`](/api/classes/polyline/#iscontainedwithinobject)

***

### isContainedWithinRect()

> **isContainedWithinRect**(`tl`, `br`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:259](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L259)

Checks if object is fully contained within the scene rect formed by tl and br

#### Parameters

##### tl

[`Point`](/api/classes/point/)

##### br

[`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isContainedWithinRect`](/api/classes/polyline/#iscontainedwithinrect)

***

### isControlVisible()

> **isControlVisible**(`controlKey`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:584](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L584)

Returns true if the specified control is visible, false otherwise.

#### Parameters

##### controlKey

`string`

The key of the control. Possible values are usually 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr',
but since the control api allow for any control name, can be any string.

#### Returns

`boolean`

true if the specified control is visible, false otherwise

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isControlVisible`](/api/classes/polyline/#iscontrolvisible)

***

### isDescendantOf()

> **isDescendantOf**(`target`): `boolean`

Defined in: [src/shapes/Object/Object.ts:1610](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1610)

Checks if object is descendant of target
Should be used instead of [Group.contains](/api/classes/group/#contains) or [StaticCanvas.contains](/api/classes/staticcanvas/#contains) for performance reasons

#### Parameters

##### target

`TAncestor`

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isDescendantOf`](/api/classes/polyline/#isdescendantof)

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

Defined in: [src/shapes/Object/Object.ts:1716](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1716)

#### Type Parameters

##### T

`T` *extends* `Polygon`

#### Parameters

##### other

`T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isInFrontOf`](/api/classes/polyline/#isinfrontof)

***

### isNotVisible()

> **isNotVisible**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:637](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L637)

return if the object would be visible in rendering

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isNotVisible`](/api/classes/polyline/#isnotvisible)

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:291](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L291)

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isOnScreen`](/api/classes/polyline/#isonscreen)

***

### isOverlapping()

> **isOverlapping**\<`T`\>(`other`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:269](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L269)

#### Type Parameters

##### T

`T` *extends* `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

##### other

`T`

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isOverlapping`](/api/classes/polyline/#isoverlapping)

***

### isPartiallyOnScreen()

> **isPartiallyOnScreen**(): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:321](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L321)

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isPartiallyOnScreen`](/api/classes/polyline/#ispartiallyonscreen)

***

### isType()

> **isType**(...`types`): `boolean`

Defined in: [src/shapes/Object/Object.ts:1415](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1415)

Checks if the instance is of any of the specified types.
We use this to filter a list of objects for the `getObjects` function.

For detecting an instance type `instanceOf` is a better check,
but to avoid to make specific classes a dependency of generic code
internally we use this.

This compares both the static class `type` and the instance's own `type` property
against the provided list of types.

#### Parameters

##### types

...`string`[]

A list of type strings to check against.

#### Returns

`boolean`

`true` if the object's type or class type matches any in the list, otherwise `false`.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isType`](/api/classes/polyline/#istype)

***

### needsItsOwnCache()

> **needsItsOwnCache**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:750](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L750)

When returns `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`needsItsOwnCache`](/api/classes/polyline/#needsitsowncache)

***

### off()

#### Call Signature

> **off**\<`K`\>(`eventName`): `void`

Defined in: [src/Observable.ts:122](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/Observable.ts#L122)

Unsubscribe all event listeners for eventname.
Do not use this pattern. You could kill internal fabricJS events.
We know we should have protected events for internal flows, but we don't have yet

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

##### Type Parameters

###### K

`K` *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

##### Parameters

###### eventName

`K`

event name (eg. 'after:render')

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

#### Call Signature

> **off**\<`K`\>(`eventName`, `handler`): `void`

Defined in: [src/Observable.ts:128](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/Observable.ts#L128)

unsubscribe an event listener

##### Type Parameters

###### K

`K` *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

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

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

#### Call Signature

> **off**(`handlers`): `void`

Defined in: [src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/Observable.ts#L133)

unsubscribe event listeners

##### Parameters

###### handlers

`EventRegistryObject`\<`EventSpec`\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

#### Call Signature

> **off**(): `void`

Defined in: [src/Observable.ts:137](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/Observable.ts#L137)

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

***

### on()

#### Call Signature

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Defined in: [src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/Observable.ts#L23)

Observes specified event

##### Type Parameters

###### K

`K` *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

###### E

`E` *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| `SimpleEventHandler`\<`Event`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| `TEventWithTarget`\<`DragEvent`\> \| [`DropEventData`](/api/interfaces/dropeventdata/) \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| \{ `target`: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>; \} \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| \{ `target`: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>; \} \| \{ `path`: [`FabricObject`](/api/classes/fabricobject/); \}

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

[`Polyline`](/api/classes/polyline/).[`on`](/api/classes/polyline/#on)

#### Call Signature

> **on**(`handlers`): `VoidFunction`

Defined in: [src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/Observable.ts#L27)

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

[`Polyline`](/api/classes/polyline/).[`on`](/api/classes/polyline/#on)

***

### once()

#### Call Signature

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Defined in: [src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/Observable.ts#L62)

Observes specified event **once**

##### Type Parameters

###### K

`K` *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

###### E

`E` *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| `SimpleEventHandler`\<`Event`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| `TEventWithTarget`\<`DragEvent`\> \| [`DropEventData`](/api/interfaces/dropeventdata/) \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| \{ `target`: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>; \} \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| \{ `target`: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/)\<[`StaticCanvasEvents`](/api/interfaces/staticcanvasevents/)\>; \} \| \{ `path`: [`FabricObject`](/api/classes/fabricobject/); \}

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

[`Polyline`](/api/classes/polyline/).[`once`](/api/classes/polyline/#once)

#### Call Signature

> **once**(`handlers`): `VoidFunction`

Defined in: [src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/Observable.ts#L66)

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

[`Polyline`](/api/classes/polyline/).[`once`](/api/classes/polyline/#once)

***

### onDeselect()

> **onDeselect**(`_options?`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:658](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L658)

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

##### \_options?

options sent from the upper functions

###### e?

[`TPointerEvent`](/api/type-aliases/tpointerevent/)

###### object?

[`InteractiveFabricObject`](/api/classes/interactivefabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`onDeselect`](/api/classes/polyline/#ondeselect)

***

### onDragStart()

> **onDragStart**(`_e`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:691](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L691)

Override to customize Drag behavior\
Fired once a drag session has started

#### Parameters

##### \_e

`DragEvent`

#### Returns

`boolean`

true to handle the drag event

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`onDragStart`](/api/classes/polyline/#ondragstart)

***

### onSelect()

> **onSelect**(`_options?`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:672](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L672)

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

##### \_options?

options sent from the upper functions

###### e?

[`TPointerEvent`](/api/type-aliases/tpointerevent/)

event if the process is generated by an event

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`onSelect`](/api/classes/polyline/#onselect)

***

### render()

> **render**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:649](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L649)

Renders an object on a specified context

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`render`](/api/classes/polyline/#render)

***

### renderCache()

> **renderCache**(`this`, `options?`): `void`

Defined in: [src/shapes/Object/Object.ts:683](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L683)

#### Parameters

##### this

`TCachedFabricObject`

##### options?

`any`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`renderCache`](/api/classes/polyline/#rendercache)

***

### renderDragSourceEffect()

> **renderDragSourceEffect**(`_e`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:712](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L712)

Override to customize drag and drop behavior
render a specific effect when an object is the source of a drag event
example: render the selection status for the part of text that is being dragged from a text object

#### Parameters

##### \_e

`DragEvent`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`renderDragSourceEffect`](/api/classes/polyline/#renderdragsourceeffect)

***

### renderDropTargetEffect()

> **renderDropTargetEffect**(`_e`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:724](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L724)

Override to customize drag and drop behavior
render a specific effect when an object is the target of a drag event
used to show that the underly object can receive a drop, or to show how the
object will change when dropping. example: show the cursor where the text is about to be dropped

#### Parameters

##### \_e

`DragEvent`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`renderDropTargetEffect`](/api/classes/polyline/#renderdroptargeteffect)

***

### rotate()

> **rotate**(`angle`): `void`

Defined in: [src/shapes/Object/Object.ts:1443](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1443)

Sets "angle" of an instance with centered rotation

#### Parameters

##### angle

[`TDegree`](/api/type-aliases/tdegree/)

Angle value (in degrees)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`rotate`](/api/classes/polyline/#rotate)

***

### scale()

> **scale**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:370](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L370)

Scales an object (equally by x and y)

#### Parameters

##### value

`number`

Scale factor

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scale`](/api/classes/polyline/#scale)

***

### scaleToHeight()

> **scaleToHeight**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:393](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L393)

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

##### value

`number`

New height value

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleToHeight`](/api/classes/polyline/#scaletoheight)

***

### scaleToWidth()

> **scaleToWidth**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L381)

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

##### value

`number`

New width value

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleToWidth`](/api/classes/polyline/#scaletowidth)

***

### set()

> **set**(`key`, `value?`): `Polygon`

Defined in: [src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/CommonMethods.ts#L29)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

##### key

Property name or object (if object, iterate over the object properties)

`string` | `Record`\<`string`, `any`\>

##### value?

`any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

`Polygon`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`set`](/api/classes/polyline/#set)

***

### setBoundingBox()

> **setBoundingBox**(`adjustPosition?`): `void`

Defined in: [src/shapes/Polyline.ts:213](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L213)

#### Parameters

##### adjustPosition?

`boolean`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setBoundingBox`](/api/classes/polyline/#setboundingbox)

***

### setControlsVisibility()

> **setControlsVisibility**(`options?`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:611](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L611)

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

##### options?

`Record`\<`string`, `boolean`\> = `{}`

with an optional key per control
example: {Boolean} [options.bl] true to enable the bottom-left control, false to disable it

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setControlsVisibility`](/api/classes/polyline/#setcontrolsvisibility)

***

### setControlVisible()

> **setControlVisible**(`controlKey`, `visible`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:599](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L599)

Sets the visibility of the specified control.
please do not use.

#### Parameters

##### controlKey

`string`

The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
but since the control api allow for any control name, can be any string.

##### visible

`boolean`

true to set the specified control visible, false otherwise

#### Returns

`void`

#### Todo

discuss this overlap of priority here with the team. Andrea Bogazzi for details

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setControlVisible`](/api/classes/polyline/#setcontrolvisible)

***

### setCoords()

> **setCoords**(): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:343](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L343)

set controls' coordinates as well
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setCoords`](/api/classes/polyline/#setcoords)

***

### setDimensions()

> **setDimensions**(): `void`

Defined in: [src/shapes/Polyline.ts:209](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L209)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setDimensions`](/api/classes/polyline/#setdimensions)

***

### setOnGroup()

> **setOnGroup**(): `void`

Defined in: [src/shapes/Object/Object.ts:1475](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1475)

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setOnGroup`](/api/classes/polyline/#setongroup)

***

### setPositionByOrigin()

> **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:778](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L778)

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

[`Polyline`](/api/classes/polyline/).[`setPositionByOrigin`](/api/classes/polyline/#setpositionbyorigin)

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:123](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L123)

#### Parameters

##### value

`number`

x position according to object's originX property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](/api/classes/polygon/#setx)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setRelativeX`](/api/classes/polyline/#setrelativex)

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX?`, `originY?`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:186](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L186)

As [setXY](/api/classes/polygon/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

##### point

[`Point`](/api/classes/point/)

position according to object's originX originY properties in parent's coordinate plane

##### originX?

[`TOriginX`](/api/type-aliases/toriginx/) = `...`

Horizontal origin: 'left', 'center' or 'right'

##### originY?

[`TOriginY`](/api/type-aliases/toriginy/) = `...`

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setRelativeXY`](/api/classes/polyline/#setrelativexy)

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:139](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L139)

#### Parameters

##### value

`number`

y position according to object's originY property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](/api/classes/polygon/#sety)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setRelativeY`](/api/classes/polyline/#setrelativey)

***

### setX()

> **setX**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:93](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L93)

#### Parameters

##### value

`number`

x position according to object's originX property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setX`](/api/classes/polyline/#setx)

***

### setXY()

> **setXY**(`point`, `originX?`, `originY?`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:163](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L163)

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
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

[`Polyline`](/api/classes/polyline/).[`setXY`](/api/classes/polyline/#setxy)

***

### setY()

> **setY**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:107](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L107)

#### Parameters

##### value

`number`

y position according to object's originY property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setY`](/api/classes/polyline/#sety)

***

### shouldCache()

> **shouldCache**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:775](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L775)

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`shouldCache`](/api/classes/polyline/#shouldcache)

***

### shouldStartDragging()

> **shouldStartDragging**(`_e`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:682](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L682)

Override to customize Drag behavior
Fired from Canvas#\_onMouseMove

#### Parameters

##### \_e

[`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`boolean`

true in order for the window to start a drag session

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`shouldStartDragging`](/api/classes/polyline/#shouldstartdragging)

***

### strokeBorders()

> **strokeBorders**(`ctx`, `size`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:399](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L399)

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

##### ctx

`CanvasRenderingContext2D`

ctx is rotated and translated so that (0,0) is at object's center

##### size

[`Point`](/api/classes/point/)

the control box size used

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeBorders`](/api/classes/polyline/#strokeborders)

***

### toBlob()

> **toBlob**(`options`): `Promise`\<`null` \| `Blob`\>

Defined in: [src/shapes/Object/Object.ts:1393](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1393)

#### Parameters

##### options

`toDataURLOptions` = `{}`

#### Returns

`Promise`\<`null` \| `Blob`\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toBlob`](/api/classes/polyline/#toblob)

***

### toCanvasElement()

> **toCanvasElement**(`options`): `HTMLCanvasElement`

Defined in: [src/shapes/Object/Object.ts:1290](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1290)

Converts an object into a HTMLCanvas element

#### Parameters

##### options

`ObjectToCanvasElementOptions` = `{}`

Options object

#### Returns

`HTMLCanvasElement`

Returns DOM element <canvas> with the FabricObject

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toCanvasElement`](/api/classes/polyline/#tocanvaselement)

***

### toClipPathSVG()

> **toClipPathSVG**(`this`, `reviver?`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:144](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/FabricObjectSVGExportMixin.ts#L144)

Returns svg clipPath representation of an instance

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### reviver?

[`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toClipPathSVG`](/api/classes/polyline/#toclippathsvg)

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude?`): `any`

Defined in: [src/shapes/Object/Object.ts:1850](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1850)

Returns (dataless) object representation of an instance

#### Parameters

##### propertiesToInclude?

`any`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

Object representation of an instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toDatalessObject`](/api/classes/polyline/#todatalessobject)

***

### toDataURL()

> **toDataURL**(`options`): `string`

Defined in: [src/shapes/Object/Object.ts:1386](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1386)

Converts an object into a data-url-like string

#### Parameters

##### options

`toDataURLOptions` = `{}`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toDataURL`](/api/classes/polyline/#todataurl)

***

### toggle()

> **toggle**(`property`): `Polygon`

Defined in: [src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/CommonMethods.ts#L46)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

##### property

`string`

Property to toggle

#### Returns

`Polygon`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toggle`](/api/classes/polyline/#toggle)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [src/shapes/Object/Object.ts:1434](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1434)

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toJSON`](/api/classes/polyline/#tojson)

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude?`): `Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)

Defined in: [src/shapes/Polyline.ts:310](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L310)

Returns object representation of an instance

#### Type Parameters

##### T

`T` *extends* `Omit`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\> & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<`Polygon`\>, keyof [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)\>

##### K

`K` *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

##### propertiesToInclude?

`K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)

Object representation of an instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toObject`](/api/classes/polyline/#toobject)

***

### toString()

> **toString**(): `string`

Defined in: [src/shapes/Object/Object.ts:1890](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1890)

Returns a string representation of an instance

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toString`](/api/classes/polyline/#tostring)

***

### toSVG()

> **toSVG**(`this`, `reviver?`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:130](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/FabricObjectSVGExportMixin.ts#L130)

Returns svg representation of an instance

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

##### reviver?

[`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toSVG`](/api/classes/polyline/#tosvg)

***

### transform()

> **transform**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:517](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L517)

Transforms context when rendering an object

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`transform`](/api/classes/polyline/#transform)

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `number`[]

Defined in: [src/shapes/Object/ObjectGeometry.ts:453](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L453)

#### Parameters

##### skipGroup

`boolean` = `false`

#### Returns

`number`[]

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`transformMatrixKey`](/api/classes/polyline/#transformmatrixkey)

***

### translateToCenterPoint()

> **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:683](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L683)

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

[`Polyline`](/api/classes/polyline/).[`translateToCenterPoint`](/api/classes/polyline/#translatetocenterpoint)

***

### translateToGivenOrigin()

> **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:655](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L655)

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

[`Polyline`](/api/classes/polyline/).[`translateToGivenOrigin`](/api/classes/polyline/#translatetogivenorigin)

***

### translateToOriginPoint()

> **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:711](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/ObjectGeometry.ts#L711)

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

[`Polyline`](/api/classes/polyline/).[`translateToOriginPoint`](/api/classes/polyline/#translatetooriginpoint)

***

### ~~willDrawShadow()~~

> **willDrawShadow**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:788](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L788)

Check if this object will cast a shadow with an offset.
used by Group.shouldCache to know if child has a shadow recursively

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`willDrawShadow`](/api/classes/polyline/#willdrawshadow)

***

### \_fromObject()

> `static` **\_fromObject**\<`S`\>(`__namedParameters`, `__namedParameters`): `Promise`\<`S`\>

Defined in: [src/shapes/Object/Object.ts:1903](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/Object.ts#L1903)

#### Type Parameters

##### S

`S` *extends* [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

##### \_\_namedParameters

`Record`\<`string`, `unknown`\>

##### \_\_namedParameters

[`Abortable`](/api/type-aliases/abortable/) & `object` = `{}`

#### Returns

`Promise`\<`S`\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_fromObject`](/api/classes/polyline/#_fromobject)

***

### createControls()

> `static` **createControls**(): `object`

Defined in: [src/shapes/Object/InteractiveObject.ts:167](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Object/InteractiveObject.ts#L167)

Creates the default control object.
If you prefer to have on instance of controls shared among all objects
make this function return an empty object and add controls to the ownDefaults

#### Returns

`object`

##### controls

> **controls**: `Record`\<`string`, [`Control`](/api/classes/control/)\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`createControls`](/api/classes/polyline/#createcontrols)

***

### fromElement()

> `static` **fromElement**(`element`, `options?`, `cssRules?`): `Promise`\<[`Polyline`](/api/classes/polyline/)\<\{ `signal?`: `AbortSignal`; \}, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Defined in: [src/shapes/Polyline.ts:395](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L395)

Returns Polyline instance from an SVG element

#### Parameters

##### element

Element to parser

`HTMLElement` | `SVGElement`

##### options?

[`Abortable`](/api/type-aliases/abortable/)

Options object

##### cssRules?

`CSSRules`

#### Returns

`Promise`\<[`Polyline`](/api/classes/polyline/)\<\{ `signal?`: `AbortSignal`; \}, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fromElement`](/api/classes/polyline/#fromelement)

***

### fromObject()

> `static` **fromObject**\<`T`\>(`object`): `Promise`\<[`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Defined in: [src/shapes/Polyline.ts:421](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L421)

Returns Polyline instance from an object representation

#### Type Parameters

##### T

`T` *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)\>

#### Parameters

##### object

`T`

Object to create an instance from

#### Returns

`Promise`\<[`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fromObject`](/api/classes/polyline/#fromobject)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

Defined in: [src/shapes/Polyline.ts:68](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/shapes/Polyline.ts#L68)

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getDefaults`](/api/classes/polyline/#getdefaults)
