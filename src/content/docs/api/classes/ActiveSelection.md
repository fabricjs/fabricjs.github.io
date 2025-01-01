---
editUrl: false
next: false
prev: false
title: "ActiveSelection"
---

Defined in: [src/shapes/ActiveSelection.ts:36](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L36)

Used by Canvas to manage selection.

## Example

```ts
class MyActiveSelection extends ActiveSelection {
  ...
}

// override the default `ActiveSelection` class
classRegistry.setClass(MyActiveSelection)
```

## Extends

- [`Group`](/api/classes/group/)

## Constructors

### new ActiveSelection()

> **new ActiveSelection**(`objects`, `options`): [`ActiveSelection`](/api/classes/activeselection/)

Defined in: [src/shapes/ActiveSelection.ts:60](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L60)

#### Parameters

##### objects

[`FabricObject`](/api/classes/fabricobject/)[] = `[]`

##### options

`Partial`\<[`ActiveSelectionOptions`](/api/interfaces/activeselectionoptions/)\> = `{}`

#### Returns

[`ActiveSelection`](/api/classes/activeselection/)

#### Overrides

[`Group`](/api/classes/group/).[`constructor`](/api/classes/group/#constructors)

## Properties

### \_\_corner?

> `optional` **\_\_corner**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L105)

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[`Group`](/api/classes/group/).[`__corner`](/api/classes/group/#__corner)

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

Defined in: [src/shapes/Object/InteractiveObject.ts:112](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L112)

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[`Group`](/api/classes/group/).[`_controlsVisibility`](/api/classes/group/#_controlsvisibility)

***

### \_objects

> **\_objects**: [`FabricObject`](/api/classes/fabricobject/)[] = `[]`

Defined in: [src/Collection.ts:21](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L21)

#### TODO

needs to end up in the constructor too

#### Inherited from

[`Group`](/api/classes/group/).[`_objects`](/api/classes/group/#_objects)

***

### \_scaling?

> `optional` **\_scaling**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L134)

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

#### TODO

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

[`Group`](/api/classes/group/).[`_scaling`](/api/classes/group/#_scaling)

***

### absolutePositioned

> **absolutePositioned**: `boolean`

Defined in: [src/shapes/Object/Object.ts:214](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L214)

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

[`Group`](/api/classes/group/).[`absolutePositioned`](/api/classes/group/#absolutepositioned)

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:63](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L63)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/activeselection/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/activeselection/#calcacoords)

#### Inherited from

[`Group`](/api/classes/group/).[`aCoords`](/api/classes/group/#acoords)

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:581](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L581)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Group`](/api/classes/group/).[`angle`](/api/classes/group/#angle)

***

### backgroundColor

> **backgroundColor**: `string`

Defined in: [src/shapes/Object/Object.ts:201](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L201)

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`backgroundColor`](/api/classes/group/#backgroundcolor)

***

### borderColor

> **borderColor**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L74)

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`Group`](/api/classes/group/).[`borderColor`](/api/classes/group/#bordercolor)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L75)

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`Group`](/api/classes/group/).[`borderDashArray`](/api/classes/group/#borderdasharray)

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Defined in: [src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L76)

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Inherited from

[`Group`](/api/classes/group/).[`borderOpacityWhenMoving`](/api/classes/group/#borderopacitywhenmoving)

***

### borderScaleFactor

> **borderScaleFactor**: `number`

Defined in: [src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L77)

Scale factor for the border of the objects ( selection box and controls stroke ).
Bigger number will make a thicker border
border default value is 1, so this scale value is equal to a border and control strokeWidth.
Id you need to divide border from control strokeWidth
you will need to write your own render function for controls

#### Default

```ts
1
```

#### Inherited from

[`Group`](/api/classes/group/).[`borderScaleFactor`](/api/classes/group/#borderscalefactor)

***

### centeredRotation

> **centeredRotation**: `boolean`

Defined in: [src/shapes/Object/Object.ts:215](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L215)

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

#### Inherited from

[`Group`](/api/classes/group/).[`centeredRotation`](/api/classes/group/#centeredrotation)

***

### centeredScaling

> **centeredScaling**: `boolean`

Defined in: [src/shapes/Object/Object.ts:216](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L216)

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`centeredScaling`](/api/classes/group/#centeredscaling)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)

Defined in: [src/shapes/Object/Object.ts:212](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L212)

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`Group`](/api/classes/group/).[`clipPath`](/api/classes/group/#clippath)

***

### clipPathId?

> `optional` **clipPathId**: `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[`Group`](/api/classes/group/).[`clipPathId`](/api/classes/group/#clippathid)

***

### controls

> **controls**: `TControlSet`

Defined in: [src/shapes/Object/InteractiveObject.ts:118](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L118)

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[`Group`](/api/classes/group/).[`controls`](/api/classes/group/#controls)

***

### cornerColor

> **cornerColor**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L68)

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`Group`](/api/classes/group/).[`cornerColor`](/api/classes/group/#cornercolor)

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/InteractiveObject.ts:71](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L71)

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Default

```ts
null
```

#### Inherited from

[`Group`](/api/classes/group/).[`cornerDashArray`](/api/classes/group/#cornerdasharray)

***

### cornerSize

> **cornerSize**: `number`

Defined in: [src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L65)

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Inherited from

[`Group`](/api/classes/group/).[`cornerSize`](/api/classes/group/#cornersize)

***

### cornerStrokeColor

> **cornerStrokeColor**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L69)

Color of controlling corners of an object (when it's active and transparentCorners false)

#### Since

1.6.2

#### Default

```ts
''
```

#### Inherited from

[`Group`](/api/classes/group/).[`cornerStrokeColor`](/api/classes/group/#cornerstrokecolor)

***

### ~~cornerStyle~~

> **cornerStyle**: `"circle"` \| `"rect"`

Defined in: [src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L70)

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

[`Group`](/api/classes/group/).[`cornerStyle`](/api/classes/group/#cornerstyle)

***

### dirty

> **dirty**: `boolean`

Defined in: [src/shapes/Object/Object.ts:241](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L241)

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

#### Default

```ts
true
```

#### Inherited from

[`Group`](/api/classes/group/).[`dirty`](/api/classes/group/#dirty)

***

### evented

> **evented**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L82)

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`evented`](/api/classes/group/#evented)

***

### excludeFromExport

> **excludeFromExport**: `boolean`

Defined in: [src/shapes/Object/Object.ts:208](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L208)

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`excludeFromExport`](/api/classes/group/#excludefromexport)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/shapes/Object/Object.ts:191](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L191)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`Group`](/api/classes/group/).[`fill`](/api/classes/group/#fill)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Defined in: [src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L192)

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Inherited from

[`Group`](/api/classes/group/).[`fillRule`](/api/classes/group/#fillrule)

***

### flipX

> **flipX**: `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:567](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L567)

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`Group`](/api/classes/group/).[`flipX`](/api/classes/group/#flipx)

***

### flipY

> **flipY**: `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:568](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L568)

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`Group`](/api/classes/group/).[`flipY`](/api/classes/group/#flipy)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Defined in: [src/shapes/Object/Object.ts:200](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L200)

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`globalCompositeOperation`](/api/classes/group/#globalcompositeoperation)

***

### hasBorders

> **hasBorders**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L78)

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`hasBorders`](/api/classes/group/#hasborders)

***

### hasControls

> **hasControls**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L72)

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts
true
```

#### Inherited from

[`Group`](/api/classes/group/).[`hasControls`](/api/classes/group/#hascontrols)

***

### height

> **height**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:566](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L566)

Object height

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`height`](/api/classes/group/#height)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L86)

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`Group`](/api/classes/group/).[`hoverCursor`](/api/classes/group/#hovercursor)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

Defined in: [src/shapes/Object/Object.ts:207](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L207)

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`includeDefaultValues`](/api/classes/group/#includedefaultvalues)

***

### ~~interactive~~

> **interactive**: `boolean`

Defined in: [src/shapes/Group.ts:108](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L108)

Used to allow targeting of object inside groups.
set to true if you want to select an object inside a group.\
**REQUIRES** `subTargetCheck` set to true
This will be not removed but slowly replaced with a method setInteractive
that will take care of enabling subTargetCheck and necessary object events.
There is too much attached to group interactivity to just be evaluated by a
boolean in the code

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`interactive`](/api/classes/group/#interactive)

***

### inverted

> **inverted**: `boolean`

Defined in: [src/shapes/Object/Object.ts:213](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L213)

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

#### Default

```ts
false
```

#### Inherited from

[`Group`](/api/classes/group/).[`inverted`](/api/classes/group/#inverted)

***

### isMoving?

> `optional` **isMoving**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:124](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L124)

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[`Group`](/api/classes/group/).[`isMoving`](/api/classes/group/#ismoving)

***

### layoutManager

> **layoutManager**: `ActiveSelectionLayoutManager`

Defined in: [src/shapes/ActiveSelection.ts:49](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L49)

The ActiveSelection needs to use the ActiveSelectionLayoutManager
or selections on interactive groups may be broken

#### Overrides

[`Group`](/api/classes/group/).[`layoutManager`](/api/classes/group/#layoutmanager)

***

### left

> **left**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:564](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L564)

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](../../../../api/interfaces/fabricobjectprops/#originx)

#### Default

```ts
0
```

#### Inherited from

[`Group`](/api/classes/group/).[`left`](/api/classes/group/#left)

***

### lockMovementX

> **lockMovementX**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:56](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L56)

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`lockMovementX`](/api/classes/group/#lockmovementx)

***

### lockMovementY

> **lockMovementY**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L57)

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`lockMovementY`](/api/classes/group/#lockmovementy)

***

### lockRotation

> **lockRotation**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L58)

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`lockRotation`](/api/classes/group/#lockrotation)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L63)

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`lockScalingFlip`](/api/classes/group/#lockscalingflip)

***

### lockScalingX

> **lockScalingX**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:59](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L59)

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`lockScalingX`](/api/classes/group/#lockscalingx)

***

### lockScalingY

> **lockScalingY**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L60)

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`lockScalingY`](/api/classes/group/#lockscalingy)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L61)

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`lockSkewingX`](/api/classes/group/#lockskewingx)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:62](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L62)

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`lockSkewingY`](/api/classes/group/#lockskewingy)

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

Defined in: [src/shapes/Object/ObjectGeometry.ts:73](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L73)

storage cache for object full transform matrix

#### Inherited from

[`Group`](/api/classes/group/).[`matrixCache`](/api/classes/group/#matrixcache)

***

### minScaleLimit

> **minScaleLimit**: `number`

Defined in: [src/shapes/Object/Object.ts:186](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L186)

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Inherited from

[`Group`](/api/classes/group/).[`minScaleLimit`](/api/classes/group/#minscalelimit)

***

### moveCursor

> **moveCursor**: `null` \| `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:87](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L87)

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`Group`](/api/classes/group/).[`moveCursor`](/api/classes/group/#movecursor)

***

### multiSelectionStacking

> **multiSelectionStacking**: [`MultiSelectionStacking`](/api/type-aliases/multiselectionstacking/)

Defined in: [src/shapes/ActiveSelection.ts:58](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L58)

controls how selected objects are added during a multiselection event
- `canvas-stacking` adds the selected object to the active selection while respecting canvas object stacking order
- `selection-order` adds the selected object to the top of the stack,
meaning that the stack is ordered by the order in which objects were selected

#### Default

`canvas-stacking`

***

### noScaleCache

> **noScaleCache**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:51](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L51)

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

[`Group`](/api/classes/group/).[`noScaleCache`](/api/classes/group/#noscalecache)

***

### objectCaching

> **objectCaching**: `boolean`

Defined in: [src/shapes/Object/Object.ts:210](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L210)

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

[`Group`](/api/classes/group/).[`objectCaching`](/api/classes/group/#objectcaching)

***

### oCoords

> **oCoords**: `Record`\<`string`, `TOCoord`\>

Defined in: [src/shapes/Object/InteractiveObject.ts:95](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L95)

The object's controls' position in viewport coordinates
Calculated by [Control#positionHandler](../../../../api/classes/control/#positionhandler) and [Control#calcCornerCoords](../../../../api/classes/control/#calccornercoords), depending on [padding](../../../../api/classes/fabricobject/#padding).
`corner/touchCorner` describe the 4 points forming the interactive area of the corner.
Used to draw and locate controls.

#### Inherited from

[`Group`](/api/classes/group/).[`oCoords`](/api/classes/group/#ocoords)

***

### opacity

> **opacity**: `number`

Defined in: [src/shapes/Object/Object.ts:188](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L188)

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`Group`](/api/classes/group/).[`opacity`](/api/classes/group/#opacity)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:576](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L576)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

[`Group`](/api/classes/group/).[`originX`](/api/classes/group/#originx)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:580](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L580)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

[`Group`](/api/classes/group/).[`originY`](/api/classes/group/#originy)

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

Defined in: [src/shapes/Object/ObjectGeometry.ts:68](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L68)

storage cache for object transform matrix

#### Inherited from

[`Group`](/api/classes/group/).[`ownMatrixCache`](/api/classes/group/#ownmatrixcache)

***

### padding

> **padding**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:53](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L53)

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

[`Group`](/api/classes/group/).[`padding`](/api/classes/group/#padding)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Defined in: [src/shapes/Object/Object.ts:190](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L190)

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`paintFirst`](/api/classes/group/#paintfirst)

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

Defined in: [src/shapes/Object/Object.ts:1595](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1595)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[`Group`](/api/classes/group/).[`parent`](/api/classes/group/#parent)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L83)

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`perPixelTargetFind`](/api/classes/group/#perpixeltargetfind)

***

### scaleX

> **scaleX**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:569](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L569)

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`Group`](/api/classes/group/).[`scaleX`](/api/classes/group/#scalex)

***

### scaleY

> **scaleY**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:570](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L570)

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`Group`](/api/classes/group/).[`scaleY`](/api/classes/group/#scaley)

***

### selectable

> **selectable**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L81)

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`selectable`](/api/classes/group/#selectable)

***

### ~~selectionBackgroundColor~~

> **selectionBackgroundColor**: `string`

Defined in: [src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L79)

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`selectionBackgroundColor`](/api/classes/group/#selectionbackgroundcolor)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Defined in: [src/shapes/Object/Object.ts:203](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L203)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`Group`](/api/classes/group/).[`shadow`](/api/classes/group/#shadow)

***

### skewX

> **skewX**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:571](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L571)

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Group`](/api/classes/group/).[`skewX`](/api/classes/group/#skewx)

***

### skewY

> **skewY**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:572](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L572)

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Group`](/api/classes/group/).[`skewY`](/api/classes/group/#skewy)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/InteractiveObject.ts:53](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L53)

The angle that an object will lock to while rotating.

#### Inherited from

[`Group`](/api/classes/group/).[`snapAngle`](/api/classes/group/#snapangle)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/InteractiveObject.ts:54](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L54)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`Group`](/api/classes/group/).[`snapThreshold`](/api/classes/group/#snapthreshold)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Defined in: [src/shapes/Object/Object.ts:193](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L193)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`Group`](/api/classes/group/).[`stroke`](/api/classes/group/#stroke)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Defined in: [src/shapes/Object/Object.ts:194](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L194)

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`Group`](/api/classes/group/).[`strokeDashArray`](/api/classes/group/#strokedasharray)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Defined in: [src/shapes/Object/Object.ts:195](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L195)

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`Group`](/api/classes/group/).[`strokeDashOffset`](/api/classes/group/#strokedashoffset)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Defined in: [src/shapes/Object/Object.ts:196](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L196)

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`Group`](/api/classes/group/).[`strokeLineCap`](/api/classes/group/#strokelinecap)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Defined in: [src/shapes/Object/Object.ts:197](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L197)

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`strokeLineJoin`](/api/classes/group/#strokelinejoin)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Defined in: [src/shapes/Object/Object.ts:198](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L198)

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`Group`](/api/classes/group/).[`strokeMiterLimit`](/api/classes/group/#strokemiterlimit)

***

### strokeUniform

> **strokeUniform**: `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:583](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L583)

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

[`Group`](/api/classes/group/).[`strokeUniform`](/api/classes/group/#strokeuniform)

***

### strokeWidth

> **strokeWidth**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:582](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L582)

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`Group`](/api/classes/group/).[`strokeWidth`](/api/classes/group/#strokewidth)

***

### subTargetCheck

> **subTargetCheck**: `boolean`

Defined in: [src/shapes/Group.ts:94](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L94)

Used to optimize performance
set to `false` if you don't need contained objects to be targets of events

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`subTargetCheck`](/api/classes/group/#subtargetcheck)

***

### top

> **top**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:563](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L563)

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](../../../../api/interfaces/fabricobjectprops/#originy)

#### Default

```ts
0
```

#### Inherited from

[`Group`](/api/classes/group/).[`top`](/api/classes/group/#top)

***

### touchCornerSize

> **touchCornerSize**: `number`

Defined in: [src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L66)

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Inherited from

[`Group`](/api/classes/group/).[`touchCornerSize`](/api/classes/group/#touchcornersize)

***

### transparentCorners

> **transparentCorners**: `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L67)

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Inherited from

[`Group`](/api/classes/group/).[`transparentCorners`](/api/classes/group/#transparentcorners)

***

### visible

> **visible**: `boolean`

Defined in: [src/shapes/Object/Object.ts:205](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L205)

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`visible`](/api/classes/group/#visible)

***

### width

> **width**: `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:565](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L565)

Object width

#### Default

```ts

```

#### Inherited from

[`Group`](/api/classes/group/).[`width`](/api/classes/group/#width)

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

Defined in: [src/shapes/Object/Object.ts:233](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L233)

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[`Group`](/api/classes/group/).[`cacheProperties`](/api/classes/group/#cacheproperties)

***

### colorProperties

> `static` **colorProperties**: `string`[]

Defined in: [src/shapes/Object/Object.ts:1502](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1502)

List of properties to consider for animating colors.

#### Inherited from

[`Group`](/api/classes/group/).[`colorProperties`](/api/classes/group/#colorproperties)

***

### customProperties

> `static` **customProperties**: `string`[] = `[]`

Defined in: [src/shapes/Object/Object.ts:1743](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1743)

Define a list of custom properties that will be serialized when
instance.toObject() gets called

#### Inherited from

[`Group`](/api/classes/group/).[`customProperties`](/api/classes/group/#customproperties)

***

### ownDefaults

> `static` **ownDefaults**: `Record`\<`string`, `any`\> = `activeSelectionDefaultValues`

Defined in: [src/shapes/ActiveSelection.ts:39](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L39)

#### Overrides

[`Group`](/api/classes/group/).[`ownDefaults`](/api/classes/group/#owndefaults)

***

### stateProperties

> `static` **stateProperties**: `string`[]

Defined in: [src/shapes/Object/Object.ts:224](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L224)

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[`Group`](/api/classes/group/).[`stateProperties`](/api/classes/group/#stateproperties)

***

### ~~type~~

> `static` **type**: `string` = `'ActiveSelection'`

Defined in: [src/shapes/ActiveSelection.ts:37](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L37)

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists to avoid type errors in old code and possibly current deserialization code.
DO NOT build new code around this type value

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### TODO

add sustainable warning message

#### Overrides

[`Group`](/api/classes/group/).[`type`](/api/classes/group/#type)

## Accessors

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [src/shapes/Object/Object.ts:353](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L353)

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

Defined in: [src/shapes/Object/Object.ts:361](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L361)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`type`](/api/classes/group/#type-1)

## Methods

### \_drawClipPath()

> **\_drawClipPath**(`ctx`, `clipPath`, `context`): `void`

Defined in: [src/shapes/Object/Object.ts:883](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L883)

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### clipPath

`undefined` | [`BaseFabricObject`](/api/classes/basefabricobject/)

##### context

[`DrawContext`](/api/type-aliases/drawcontext/)

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`_drawClipPath`](/api/classes/group/#_drawclippath)

***

### \_limitCacheSize()

> **\_limitCacheSize**(`dims`): `any`

Defined in: [src/shapes/Object/Object.ts:402](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L402)

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

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

[`Group`](/api/classes/group/).[`_limitCacheSize`](/api/classes/group/#_limitcachesize)

***

### \_onObjectAdded()

> **\_onObjectAdded**(`object`): `void`

Defined in: [src/shapes/Group.ts:258](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L258)

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`_onObjectAdded`](/api/classes/group/#_onobjectadded)

***

### \_onStackOrderChanged()

> **\_onStackOrderChanged**(): `void`

Defined in: [src/shapes/Group.ts:288](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L288)

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`_onStackOrderChanged`](/api/classes/group/#_onstackorderchanged)

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Defined in: [src/shapes/Object/Object.ts:719](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L719)

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`_removeCacheCanvas`](/api/classes/group/#_removecachecanvas)

***

### \_renderControls()

> **\_renderControls**(`ctx`, `styleOverride`?, `childrenOverride`?): `void`

Defined in: [src/shapes/ActiveSelection.ts:237](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L237)

Renders controls and borders for the object

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to render on

##### styleOverride?

`Partial`\<`Pick`\<[`InteractiveFabricObject`](/api/classes/interactivefabricobject/), `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\>

properties to override the object style

##### childrenOverride?

`Partial`\<`Pick`\<[`InteractiveFabricObject`](/api/classes/interactivefabricobject/), `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\>

properties to override the children overrides

#### Returns

`void`

#### Overrides

[`Group`](/api/classes/group/).[`_renderControls`](/api/classes/group/#_rendercontrols)

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:1025](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1025)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`_setClippingProperties`](/api/classes/group/#_setclippingproperties)

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

Defined in: [src/shapes/Object/Object.ts:1014](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1014)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### \_\_namedParameters

`Pick`\<[`ActiveSelection`](/api/classes/activeselection/), `"fill"`\>

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`_setFillStyles`](/api/classes/group/#_setfillstyles)

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

Defined in: [src/shapes/Object/Object.ts:972](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L972)

#### Parameters

##### ctx

`CanvasRenderingContext2D`

##### decl

`Pick`\<[`ActiveSelection`](/api/classes/activeselection/), `"stroke"` \| `"strokeWidth"` \| `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"`\>

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`_setStrokeStyles`](/api/classes/group/#_setstrokestyles)

***

### \_setupCompositeOperation()

> **\_setupCompositeOperation**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:1477](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1477)

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Rendering canvas context

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`_setupCompositeOperation`](/api/classes/group/#_setupcompositeoperation)

***

### \_toSVG()

> **\_toSVG**(`reviver`?): `string`[]

Defined in: [src/shapes/Group.ts:637](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L637)

Returns svg representation of an instance

#### Parameters

##### reviver?

[`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`[]

svg representation of an instance

#### Inherited from

[`Group`](/api/classes/group/).[`_toSVG`](/api/classes/group/#_tosvg)

***

### add()

> **add**(...`objects`): `number`

Defined in: [src/shapes/Group.ts:228](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L228)

Add objects

#### Parameters

##### objects

...[`FabricObject`](/api/classes/fabricobject/)[]

#### Returns

`number`

#### Inherited from

[`Group`](/api/classes/group/).[`add`](/api/classes/group/#add)

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)

#### Returns

`string`

#### Inherited from

[`Group`](/api/classes/group/).[`addPaintOrder`](/api/classes/group/#addpaintorder)

***

### animate()

> **animate**\<`T`\>(`animatable`, `options`?): `Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

Defined in: [src/shapes/Object/Object.ts:1516](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1516)

Animates object's properties

#### Type Parameters

• **T** *extends* `number` \| `number`[] \| [`TColorArg`](/api/type-aliases/tcolorarg/)

#### Parameters

##### animatable

`Record`\<`string`, `T`\>

map of keys and end values

##### options?

`Partial`\<[`AnimationOptions`](/api/namespaces/util/type-aliases/animationoptions/)\<`T`\>\>

#### Returns

`Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Inherited from

[`Group`](/api/classes/group/).[`animate`](/api/classes/group/#animate)

***

### bringObjectForward()

> **bringObjectForward**(`object`, `intersecting`?): `boolean`

Defined in: [src/Collection.ts:240](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L240)

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send

##### intersecting?

`boolean`

If `true`, send object in front of next upper intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](/api/classes/group/).[`bringObjectForward`](/api/classes/group/#bringobjectforward)

***

### bringObjectToFront()

> **bringObjectToFront**(`object`): `boolean`

Defined in: [src/Collection.ts:194](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L194)

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](/api/classes/group/).[`bringObjectToFront`](/api/classes/group/#bringobjecttofront)

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:427](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L427)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

[`Group`](/api/classes/group/).[`calcACoords`](/api/classes/group/#calcacoords)

***

### calcOCoords()

> **calcOCoords**(): `Record`\<`string`, `TOCoord`\>

Defined in: [src/shapes/Object/InteractiveObject.ts:255](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L255)

Calculates the coordinates of the center of each control plus the corners of the control itself
This basically just delegates to each control positionHandler
WARNING: changing what is passed to positionHandler is a breaking change, since position handler
is a public api and should be done just if extremely necessary

#### Returns

`Record`\<`string`, `TOCoord`\>

#### Inherited from

[`Group`](/api/classes/group/).[`calcOCoords`](/api/classes/group/#calcocoords)

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:513](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L513)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

[`Group`](/api/classes/group/).[`calcOwnMatrix`](/api/classes/group/#calcownmatrix)

***

### calcTransformMatrix()

> **calcTransformMatrix**(`skipGroup`?): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:485](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L485)

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

[`Group`](/api/classes/group/).[`calcTransformMatrix`](/api/classes/group/#calctransformmatrix)

***

### canDrop()

> **canDrop**(`_e`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:701](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L701)

Override to customize drag and drop behavior

#### Parameters

##### \_e

`DragEvent`

#### Returns

`boolean`

true if the object currently dragged can be dropped on the target

#### Inherited from

[`Group`](/api/classes/group/).[`canDrop`](/api/classes/group/#candrop)

***

### canEnterGroup()

> **canEnterGroup**(`object`): `boolean`

Defined in: [src/shapes/ActiveSelection.ts:115](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L115)

block ancestors/descendants of selected objects from being selected to prevent a circular object tree

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

#### Returns

`boolean`

#### Overrides

`Group.canEnterGroup`

***

### clearContextTop()

> **clearContextTop**(`restoreManually`?): `undefined` \| `CanvasRenderingContext2D`

Defined in: [src/shapes/Object/InteractiveObject.ts:627](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L627)

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

[`Group`](/api/classes/group/).[`clearContextTop`](/api/classes/group/#clearcontexttop)

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`ActiveSelection`](/api/classes/activeselection/)\>

Defined in: [src/shapes/Object/Object.ts:1251](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1251)

Clones an instance.

#### Parameters

##### propertiesToInclude?

`string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`ActiveSelection`](/api/classes/activeselection/)\>

#### Inherited from

[`Group`](/api/classes/group/).[`clone`](/api/classes/group/#clone)

***

### cloneAsImage()

> **cloneAsImage**(`options`?): [`FabricImage`](/api/classes/fabricimage/)

Defined in: [src/shapes/Object/Object.ts:1277](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1277)

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

[`Group`](/api/classes/group/).[`cloneAsImage`](/api/classes/group/#cloneasimage)

***

### collectObjects()

> **collectObjects**(`bbox`, `options`): [`InteractiveFabricObject`](/api/classes/interactivefabricobject/)[]

Defined in: [src/Collection.ts:326](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L326)

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

##### bbox

[`TBBox`](/api/type-aliases/tbbox/)

a bounding box in scene coordinates

##### options

an object with includeIntersecting

###### includeIntersecting

`boolean` = `true`

#### Returns

[`InteractiveFabricObject`](/api/classes/interactivefabricobject/)[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

[`Group`](/api/classes/group/).[`collectObjects`](/api/classes/group/#collectobjects)

***

### complexity()

> **complexity**(): `number`

Defined in: [src/Collection.ts:165](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L165)

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

[`Group`](/api/classes/group/).[`complexity`](/api/classes/group/#complexity)

***

### contains()

> **contains**(`object`, `deep`?): `boolean`

Defined in: [src/Collection.ts:148](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L148)

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](../../../../api/classes/fabricobject/#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to check against

##### deep?

`boolean`

`true` to check all descendants, `false` to check only `_objects`

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

[`Group`](/api/classes/group/).[`contains`](/api/classes/group/#contains)

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:282](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L282)

Checks if point is inside the object

#### Parameters

##### point

[`Point`](/api/classes/point/)

Point to check against

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

[`Group`](/api/classes/group/).[`containsPoint`](/api/classes/group/#containspoint)

***

### dispose()

> **dispose**(): `void`

Defined in: [src/shapes/Group.ts:605](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L605)

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`dispose`](/api/classes/group/#dispose)

***

### drawBorders()

> **drawBorders**(`ctx`, `options`, `styleOverride`?): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:478](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L478)

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to draw on

##### options

`Required`\<`Omit`\<[`TComposeMatrixArgs`](/api/namespaces/util/type-aliases/tcomposematrixargs/), `"flipY"` \| `"flipX"`\>\>

object representing current object parameters

##### styleOverride?

`TStyleOverride`

object to override the object style

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`drawBorders`](/api/classes/group/#drawborders)

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:905](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L905)

Paint the cached copy of the object on the target context.

#### Parameters

##### this

`TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\>

##### ctx

`CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`drawCacheOnCanvas`](/api/classes/group/#drawcacheoncanvas)

***

### drawClipPathOnCache()

> **drawClipPathOnCache**(`ctx`, `clipPath`, `canvasWithClipPath`): `void`

Defined in: [src/shapes/Object/Object.ts:810](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L810)

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

[`Group`](/api/classes/group/).[`drawClipPathOnCache`](/api/classes/group/#drawclippathoncache)

***

### drawControls()

> **drawControls**(`ctx`, `styleOverride`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:550](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L550)

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

`Partial`\<`Pick`\<[`InteractiveFabricObject`](/api/classes/interactivefabricobject/), `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\> = `{}`

object to override the object style

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`drawControls`](/api/classes/group/#drawcontrols)

***

### drawControlsConnectingLines()

> **drawControlsConnectingLines**(`ctx`, `size`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:517](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L517)

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

[`Group`](/api/classes/group/).[`drawControlsConnectingLines`](/api/classes/group/#drawcontrolsconnectinglines)

***

### drawObject()

> **drawObject**(`ctx`, `forClipping`, `context`): `void`

Defined in: [src/shapes/Group.ts:496](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L496)

Execute the drawing operation for an object on a specified context

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context to render on

##### forClipping

`undefined` | `boolean`

##### context

[`DrawContext`](/api/type-aliases/drawcontext/)

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`drawObject`](/api/classes/group/#drawobject)

***

### drawSelectionBackground()

> **drawSelectionBackground**(`ctx`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:375](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L375)

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

[`Group`](/api/classes/group/).[`drawSelectionBackground`](/api/classes/group/#drawselectionbackground)

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Defined in: [src/shapes/Object/Object.ts:1634](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1634)

Compare ancestors

#### Type Parameters

• **T** *extends* [`ActiveSelection`](/api/classes/activeselection/)

#### Parameters

##### other

`T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Inherited from

[`Group`](/api/classes/group/).[`findCommonAncestors`](/api/classes/group/#findcommonancestors)

***

### findNewLowerIndex()

> **findNewLowerIndex**(`object`, `idx`, `intersecting`?): `number`

Defined in: [src/Collection.ts:272](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L272)

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

##### idx

`number`

##### intersecting?

`boolean`

#### Returns

`number`

#### Inherited from

[`Group`](/api/classes/group/).[`findNewLowerIndex`](/api/classes/group/#findnewlowerindex)

***

### findNewUpperIndex()

> **findNewUpperIndex**(`object`, `idx`, `intersecting`?): `number`

Defined in: [src/Collection.ts:295](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L295)

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

##### idx

`number`

##### intersecting?

`boolean`

#### Returns

`number`

#### Inherited from

[`Group`](/api/classes/group/).[`findNewUpperIndex`](/api/classes/group/#findnewupperindex)

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Defined in: [src/Observable.ts:167](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Observable.ts#L167)

Fires event with an optional options object

#### Type Parameters

• **K** *extends* keyof [`GroupEvents`](/api/interfaces/groupevents/)

#### Parameters

##### eventName

`K`

Event name to fire

##### options?

[`GroupEvents`](/api/interfaces/groupevents/)\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`fire`](/api/classes/group/#fire)

***

### forEachControl()

> **forEachControl**(`fn`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:353](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L353)

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

##### fn

(`control`, `key`, `fabricObject`) => `any`

function to iterate over the controls over

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`forEachControl`](/api/classes/group/#foreachcontrol)

***

### forEachObject()

> **forEachObject**(`callback`): `void`

Defined in: [src/Collection.ts:91](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L91)

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

##### callback

(`object`, `index`, `array`) => `any`

Callback invoked with current object as first argument,
                  index - as second and an array of all objects - as third.

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`forEachObject`](/api/classes/group/#foreachobject)

***

### get()

> **get**(`property`): `any`

Defined in: [src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/CommonMethods.ts#L59)

Basic getter

#### Parameters

##### property

`string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

[`Group`](/api/classes/group/).[`get`](/api/classes/group/#get)

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| \{ `control`: [`Control`](/api/classes/control/); `coord`: `TOCoord`; `key`: `string`; \}

Defined in: [src/shapes/Object/InteractiveObject.ts:194](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L194)

#### Returns

`undefined` \| \{ `control`: [`Control`](/api/classes/control/); `coord`: `TOCoord`; `key`: `string`; \}

#### Inherited from

[`Group`](/api/classes/group/).[`getActiveControl`](/api/classes/group/#getactivecontrol)

***

### getAncestors()

> **getAncestors**(): `Ancestors`

Defined in: [src/shapes/Object/Object.ts:1617](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1617)

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[`Group`](/api/classes/group/).[`getAncestors`](/api/classes/group/#getancestors)

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](/api/type-aliases/tbbox/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:343](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L343)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/api/type-aliases/tbbox/)

Object with left, top, width, height properties

#### Inherited from

[`Group`](/api/classes/group/).[`getBoundingRect`](/api/classes/group/#getboundingrect)

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:400](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L400)

#### Returns

`number`

#### Inherited from

[`Group`](/api/classes/group/).[`getCanvasRetinaScaling`](/api/classes/group/#getcanvasretinascaling)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:732](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L732)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Group`](/api/classes/group/).[`getCenterPoint`](/api/classes/group/#getcenterpoint)

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

Defined in: [src/shapes/Object/ObjectGeometry.ts:204](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L204)

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[`Group`](/api/classes/group/).[`getCoords`](/api/classes/group/#getcoords)

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Defined in: [src/shapes/Object/Object.ts:570](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L570)

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[`Group`](/api/classes/group/).[`getObjectOpacity`](/api/classes/group/#getobjectopacity)

***

### getObjects()

> **getObjects**(...`types`?): [`FabricObject`](/api/classes/fabricobject/)[]

Defined in: [src/Collection.ts:108](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L108)

Returns an array of children objects of this instance

#### Parameters

##### types?

...`string`[]

When specified, only objects of these types are returned

#### Returns

[`FabricObject`](/api/classes/fabricobject/)[]

#### Inherited from

[`Group`](/api/classes/group/).[`getObjects`](/api/classes/group/#getobjects)

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/Object.ts:539](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L539)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Group`](/api/classes/group/).[`getObjectScaling`](/api/classes/group/#getobjectscaling)

***

### getPointByOrigin()

> **getPointByOrigin**(`originX`, `originY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:762](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L762)

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

[`Group`](/api/classes/group/).[`getPointByOrigin`](/api/classes/group/#getpointbyorigin)

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:743](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L743)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Group`](/api/classes/group/).[`getRelativeCenterPoint`](/api/classes/group/#getrelativecenterpoint)

***

### getRelativeX()

> **getRelativeX**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:115](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L115)

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/activeselection/getx/#getx)

#### Inherited from

[`Group`](/api/classes/group/).[`getRelativeX`](/api/classes/group/#getrelativex)

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:176](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L176)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

[`Group`](/api/classes/group/).[`getRelativeXY`](/api/classes/group/#getrelativexy)

***

### getRelativeY()

> **getRelativeY**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:131](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L131)

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/activeselection/gety/#gety)

#### Inherited from

[`Group`](/api/classes/group/).[`getRelativeY`](/api/classes/group/#getrelativey)

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:361](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L361)

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[`Group`](/api/classes/group/).[`getScaledHeight`](/api/classes/group/#getscaledheight)

***

### getScaledWidth()

> **getScaledWidth**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:352](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L352)

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[`Group`](/api/classes/group/).[`getScaledWidth`](/api/classes/group/#getscaledwidth)

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

Returns id attribute for svg output

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/) & `object`

#### Returns

`string`

#### Inherited from

[`Group`](/api/classes/group/).[`getSvgCommons`](/api/classes/group/#getsvgcommons)

***

### getSvgFilter()

> **getSvgFilter**(`this`): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

Returns filter for svg shadow

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)

#### Returns

`string`

#### Inherited from

[`Group`](/api/classes/group/).[`getSvgFilter`](/api/classes/group/#getsvgfilter)

***

### getSvgStyles()

> **getSvgStyles**(): `string`

Defined in: [src/shapes/Group.ts:652](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L652)

Returns styles-string for svg-export, specific version for group

#### Returns

`string`

#### Inherited from

[`Group`](/api/classes/group/).[`getSvgStyles`](/api/classes/group/#getsvgstyles)

***

### getSvgTransform()

> **getSvgTransform**(`this`, `full`?, `additionalTransform`?): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

Returns transform-string for svg-export

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)

##### full?

`boolean`

##### additionalTransform?

`string` = `''`

#### Returns

`string`

#### Inherited from

[`Group`](/api/classes/group/).[`getSvgTransform`](/api/classes/group/#getsvgtransform)

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:408](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L408)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

[`Group`](/api/classes/group/).[`getTotalAngle`](/api/classes/group/#gettotalangle)

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/Object.ts:556](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L556)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/api/classes/point/)

object with scaleX and scaleY properties

#### Inherited from

[`Group`](/api/classes/group/).[`getTotalObjectScaling`](/api/classes/group/#gettotalobjectscaling)

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:418](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L418)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

[`Group`](/api/classes/group/).[`getViewportTransform`](/api/classes/group/#getviewporttransform)

***

### getX()

> **getX**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L86)

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

[`Group`](/api/classes/group/).[`getX`](/api/classes/group/#getx)

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:146](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L146)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

[`Group`](/api/classes/group/).[`getXY`](/api/classes/group/#getxy)

***

### getY()

> **getY**(): `number`

Defined in: [src/shapes/Object/ObjectGeometry.ts:100](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L100)

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

[`Group`](/api/classes/group/).[`getY`](/api/classes/group/#gety)

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

Defined in: [src/shapes/Object/Object.ts:1699](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1699)

#### Type Parameters

• **T** *extends* [`ActiveSelection`](/api/classes/activeselection/)

#### Parameters

##### other

`T`

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`hasCommonAncestors`](/api/classes/group/#hascommonancestors)

***

### hasFill()

> **hasFill**(): `null` \| `boolean` \| `""`

Defined in: [src/shapes/Object/Object.ts:750](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L750)

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

#### Inherited from

[`Group`](/api/classes/group/).[`hasFill`](/api/classes/group/#hasfill)

***

### hasStroke()

> **hasStroke**(): `null` \| `boolean` \| `""`

Defined in: [src/shapes/Object/Object.ts:734](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L734)

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

#### Inherited from

[`Group`](/api/classes/group/).[`hasStroke`](/api/classes/group/#hasstroke)

***

### insertAt()

> **insertAt**(`index`, ...`objects`): `number`

Defined in: [src/shapes/Group.ts:240](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L240)

Inserts an object into collection at specified index

#### Parameters

##### index

`number`

Index to insert object at

##### objects

...[`FabricObject`](/api/classes/fabricobject/)[]

Object to insert

#### Returns

`number`

#### Inherited from

[`Group`](/api/classes/group/).[`insertAt`](/api/classes/group/#insertat)

***

### intersectsWithObject()

> **intersectsWithObject**(`other`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:232](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L232)

Checks if object intersects with another object

#### Parameters

##### other

`ObjectGeometry`

Object to test

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[`Group`](/api/classes/group/).[`intersectsWithObject`](/api/classes/group/#intersectswithobject)

***

### intersectsWithRect()

> **intersectsWithRect**(`tl`, `br`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:218](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L218)

Checks if object intersects with the scene rect formed by [tl](../../../../api/classes/fabricobject/#tl) and [br](../../../../api/classes/fabricobject/#br)

#### Parameters

##### tl

[`Point`](/api/classes/point/)

##### br

[`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`intersectsWithRect`](/api/classes/group/#intersectswithrect)

***

### isCacheDirty()

> **isCacheDirty**(`skipCanvas`): `boolean`

Defined in: [src/shapes/Object/Object.ts:919](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L919)

Check if cache is dirty

#### Parameters

##### skipCanvas

`boolean` = `false`

skip canvas checks because this object is painted
on parent canvas.

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`isCacheDirty`](/api/classes/group/#iscachedirty)

***

### isContainedWithinObject()

> **isContainedWithinObject**(`other`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:251](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L251)

Checks if object is fully contained within area of another object

#### Parameters

##### other

`ObjectGeometry`

Object to test

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[`Group`](/api/classes/group/).[`isContainedWithinObject`](/api/classes/group/#iscontainedwithinobject)

***

### isContainedWithinRect()

> **isContainedWithinRect**(`tl`, `br`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:259](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L259)

Checks if object is fully contained within the scene rect formed by [tl](../../../../api/classes/fabricobject/#tl-1) and [br](../../../../api/classes/fabricobject/#br-1)

#### Parameters

##### tl

[`Point`](/api/classes/point/)

##### br

[`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`isContainedWithinRect`](/api/classes/group/#iscontainedwithinrect)

***

### isControlVisible()

> **isControlVisible**(`controlKey`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:584](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L584)

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

[`Group`](/api/classes/group/).[`isControlVisible`](/api/classes/group/#iscontrolvisible)

***

### isDescendantOf()

> **isDescendantOf**(`target`): `boolean`

Defined in: [src/shapes/Object/Object.ts:1603](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1603)

Checks if object is descendant of target
Should be used instead of [Group.contains](../../../../api/classes/group/#contains) or [StaticCanvas.contains](../../../../api/classes/staticcanvas/#contains) for performance reasons

#### Parameters

##### target

`TAncestor`

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`isDescendantOf`](/api/classes/group/#isdescendantof)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L128)

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

[`Group`](/api/classes/group/).[`isEmpty`](/api/classes/group/#isempty)

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

Defined in: [src/shapes/Object/Object.ts:1709](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1709)

#### Type Parameters

• **T** *extends* [`ActiveSelection`](/api/classes/activeselection/)

#### Parameters

##### other

`T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[`Group`](/api/classes/group/).[`isInFrontOf`](/api/classes/group/#isinfrontof)

***

### isNotVisible()

> **isNotVisible**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:649](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L649)

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`isNotVisible`](/api/classes/group/#isnotvisible)

***

### isOnACache()

> **isOnACache**(): `boolean`

Defined in: [src/shapes/ActiveSelection.ts:227](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L227)

Check if this group or its parent group are caching, recursively up

#### Returns

`boolean`

#### Overrides

[`Group`](/api/classes/group/).[`isOnACache`](/api/classes/group/#isonacache)

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:291](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L291)

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

[`Group`](/api/classes/group/).[`isOnScreen`](/api/classes/group/#isonscreen)

***

### isOverlapping()

> **isOverlapping**\<`T`\>(`other`): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:269](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L269)

#### Type Parameters

• **T** *extends* `ObjectGeometry`

#### Parameters

##### other

`T`

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`isOverlapping`](/api/classes/group/#isoverlapping)

***

### isPartiallyOnScreen()

> **isPartiallyOnScreen**(): `boolean`

Defined in: [src/shapes/Object/ObjectGeometry.ts:321](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L321)

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[`Group`](/api/classes/group/).[`isPartiallyOnScreen`](/api/classes/group/#ispartiallyonscreen)

***

### isType()

> **isType**(...`types`): `boolean`

Defined in: [src/shapes/Object/Object.ts:1408](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1408)

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

##### types

...`string`[]

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`isType`](/api/classes/group/#istype)

***

### item()

> **item**(`index`): [`FabricObject`](/api/classes/fabricobject/)

Defined in: [src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L120)

Returns object at specified index

#### Parameters

##### index

`number`

#### Returns

[`FabricObject`](/api/classes/fabricobject/)

object at index

#### Inherited from

[`Group`](/api/classes/group/).[`item`](/api/classes/group/#item)

***

### moveObjectTo()

> **moveObjectTo**(`object`, `index`): `boolean`

Defined in: [src/Collection.ts:262](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L262)

Moves an object to specified level in stack of drawn objects

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send

##### index

`number`

Position to move to

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](/api/classes/group/).[`moveObjectTo`](/api/classes/group/#moveobjectto)

***

### multiSelectAdd()

> **multiSelectAdd**(...`targets`): `void`

Defined in: [src/shapes/ActiveSelection.ts:94](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L94)

Adds objects with respect to [multiSelectionStacking](../../../../api/classes/activeselection/#multiselectionstacking)

#### Parameters

##### targets

...[`FabricObject`](/api/classes/fabricobject/)[]

object to add to selection

#### Returns

`void`

***

### needsItsOwnCache()

> **needsItsOwnCache**(): `boolean`

Defined in: [src/shapes/Object/Object.ts:762](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L762)

When set to `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Inherited from

[`Group`](/api/classes/group/).[`needsItsOwnCache`](/api/classes/group/#needsitsowncache)

***

### off()

#### Call Signature

> **off**\<`K`\>(`eventName`): `void`

Defined in: [src/Observable.ts:122](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Observable.ts#L122)

Unsubscribe all event listeners for eventname.
Do not use this pattern. You could kill internal fabricJS events.
We know we should have protected events for internal flows, but we don't have yet

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

##### Type Parameters

• **K** *extends* keyof [`GroupEvents`](/api/interfaces/groupevents/)

##### Parameters

###### eventName

`K`

event name (eg. 'after:render')

##### Returns

`void`

##### Inherited from

[`Group`](/api/classes/group/).[`off`](/api/classes/group/#off)

#### Call Signature

> **off**\<`K`\>(`eventName`, `handler`): `void`

Defined in: [src/Observable.ts:128](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Observable.ts#L128)

unsubscribe an event listener

##### Type Parameters

• **K** *extends* keyof [`GroupEvents`](/api/interfaces/groupevents/)

##### Parameters

###### eventName

`K`

event name (eg. 'after:render')

###### handler

`TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

[`Group`](/api/classes/group/).[`off`](/api/classes/group/#off)

#### Call Signature

> **off**(`handlers`): `void`

Defined in: [src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Observable.ts#L133)

unsubscribe event listeners

##### Parameters

###### handlers

`EventRegistryObject`\<[`GroupEvents`](/api/interfaces/groupevents/)\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

[`Group`](/api/classes/group/).[`off`](/api/classes/group/#off)

#### Call Signature

> **off**(): `void`

Defined in: [src/Observable.ts:137](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Observable.ts#L137)

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

[`Group`](/api/classes/group/).[`off`](/api/classes/group/#off)

***

### on()

#### Call Signature

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Defined in: [src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Observable.ts#L23)

Observes specified event

##### Type Parameters

• **K** *extends* keyof [`GroupEvents`](/api/interfaces/groupevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `OutEvent` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object` \| \{ `target`: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/); \} \| \{ `target`: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/); \} \| \{ `path`: [`FabricObject`](/api/classes/fabricobject/); \} \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/) \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| [`ModifiedEvent`](/api/interfaces/modifiedevent/) \| \{ `target`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `target`: [`FabricObject`](/api/classes/fabricobject/); \} \| [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) \| [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/)

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

[`Group`](/api/classes/group/).[`on`](/api/classes/group/#on)

#### Call Signature

> **on**(`handlers`): `VoidFunction`

Defined in: [src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Observable.ts#L27)

Observes specified event

##### Parameters

###### handlers

`EventRegistryObject`\<[`GroupEvents`](/api/interfaces/groupevents/)\>

key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`VoidFunction`

disposer

##### Alias

on

##### Inherited from

[`Group`](/api/classes/group/).[`on`](/api/classes/group/#on)

***

### once()

#### Call Signature

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Defined in: [src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Observable.ts#L62)

Observes specified event **once**

##### Type Parameters

• **K** *extends* keyof [`GroupEvents`](/api/interfaces/groupevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/) & `OutEvent` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\> & `object` \| \{ `target`: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/); \} \| \{ `target`: [`Canvas`](/api/classes/canvas/) \| [`Group`](/api/classes/group/) \| [`StaticCanvas`](/api/classes/staticcanvas/); \} \| \{ `path`: [`FabricObject`](/api/classes/fabricobject/); \} \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/) \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/) & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| [`ModifiedEvent`](/api/interfaces/modifiedevent/) \| \{ `target`: [`FabricObject`](/api/classes/fabricobject/); \} \| \{ `target`: [`FabricObject`](/api/classes/fabricobject/); \} \| [`LayoutBeforeEvent`](/api/type-aliases/layoutbeforeevent/) \| [`LayoutAfterEvent`](/api/type-aliases/layoutafterevent/)

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

[`Group`](/api/classes/group/).[`once`](/api/classes/group/#once)

#### Call Signature

> **once**(`handlers`): `VoidFunction`

Defined in: [src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Observable.ts#L66)

Observes specified event **once**

##### Parameters

###### handlers

`EventRegistryObject`\<[`GroupEvents`](/api/interfaces/groupevents/)\>

key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`VoidFunction`

disposer

##### Alias

once

##### Inherited from

[`Group`](/api/classes/group/).[`once`](/api/classes/group/#once)

***

### onDeselect()

> **onDeselect**(): `boolean`

Defined in: [src/shapes/ActiveSelection.ts:198](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L198)

remove all objects

#### Returns

`boolean`

#### Overrides

[`Group`](/api/classes/group/).[`onDeselect`](/api/classes/group/#ondeselect)

***

### onDragStart()

> **onDragStart**(`_e`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:691](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L691)

Override to customize Drag behavior\
Fired once a drag session has started

#### Parameters

##### \_e

`DragEvent`

#### Returns

`boolean`

true to handle the drag event

#### Inherited from

[`Group`](/api/classes/group/).[`onDragStart`](/api/classes/group/#ondragstart)

***

### onSelect()

> **onSelect**(`_options`?): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:672](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L672)

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

##### \_options?

options sent from the upper functions

###### e

[`TPointerEvent`](/api/type-aliases/tpointerevent/)

event if the process is generated by an event

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`onSelect`](/api/classes/group/#onselect)

***

### remove()

> **remove**(...`objects`): [`FabricObject`](/api/classes/fabricobject/)[]

Defined in: [src/shapes/Group.ts:252](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L252)

Remove objects

#### Parameters

##### objects

...[`FabricObject`](/api/classes/fabricobject/)[]

#### Returns

[`FabricObject`](/api/classes/fabricobject/)[]

removed objects

#### Inherited from

[`Group`](/api/classes/group/).[`remove`](/api/classes/group/#remove)

***

### removeAll()

> **removeAll**(): [`FabricObject`](/api/classes/fabricobject/)[]

Defined in: [src/shapes/Group.ts:319](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L319)

Remove all objects

#### Returns

[`FabricObject`](/api/classes/fabricobject/)[]

removed objects

#### Inherited from

[`Group`](/api/classes/group/).[`removeAll`](/api/classes/group/#removeall)

***

### render()

> **render**(`ctx`): `void`

Defined in: [src/shapes/Group.ts:539](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L539)

Renders instance on a given context

#### Parameters

##### ctx

`CanvasRenderingContext2D`

context to render instance on

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`render`](/api/classes/group/#render)

***

### renderCache()

> **renderCache**(`this`, `options`?): `void`

Defined in: [src/shapes/Object/Object.ts:695](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L695)

#### Parameters

##### this

`TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\>

##### options?

`any`

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`renderCache`](/api/classes/group/#rendercache)

***

### renderDragSourceEffect()

> **renderDragSourceEffect**(`_e`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:712](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L712)

Override to customize drag and drop behavior
render a specific effect when an object is the source of a drag event
example: render the selection status for the part of text that is being dragged from a text object

#### Parameters

##### \_e

`DragEvent`

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`renderDragSourceEffect`](/api/classes/group/#renderdragsourceeffect)

***

### renderDropTargetEffect()

> **renderDropTargetEffect**(`_e`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:724](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L724)

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

[`Group`](/api/classes/group/).[`renderDropTargetEffect`](/api/classes/group/#renderdroptargeteffect)

***

### rotate()

> **rotate**(`angle`): `void`

Defined in: [src/shapes/Object/Object.ts:1436](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1436)

Sets "angle" of an instance with centered rotation

#### Parameters

##### angle

[`TDegree`](/api/type-aliases/tdegree/)

Angle value (in degrees)

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`rotate`](/api/classes/group/#rotate)

***

### scale()

> **scale**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:370](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L370)

Scales an object (equally by x and y)

#### Parameters

##### value

`number`

Scale factor

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`scale`](/api/classes/group/#scale)

***

### scaleToHeight()

> **scaleToHeight**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:393](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L393)

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

##### value

`number`

New height value

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`scaleToHeight`](/api/classes/group/#scaletoheight)

***

### scaleToWidth()

> **scaleToWidth**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L381)

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

##### value

`number`

New width value

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`scaleToWidth`](/api/classes/group/#scaletowidth)

***

### sendObjectBackwards()

> **sendObjectBackwards**(`object`, `intersecting`?): `boolean`

Defined in: [src/Collection.ts:214](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L214)

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send

##### intersecting?

`boolean`

If `true`, send object behind next lower intersecting object

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](/api/classes/group/).[`sendObjectBackwards`](/api/classes/group/#sendobjectbackwards)

***

### sendObjectToBack()

> **sendObjectToBack**(`object`): `boolean`

Defined in: [src/Collection.ts:178](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L178)

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

##### object

[`FabricObject`](/api/classes/fabricobject/)

Object to send to back

#### Returns

`boolean`

true if change occurred

#### Inherited from

[`Group`](/api/classes/group/).[`sendObjectToBack`](/api/classes/group/#sendobjecttoback)

***

### set()

> **set**(`key`, `value`?): [`ActiveSelection`](/api/classes/activeselection/)

Defined in: [src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/CommonMethods.ts#L29)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

##### key

Property name or object (if object, iterate over the object properties)

`string` | `Record`\<`string`, `any`\>

##### value?

`any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`ActiveSelection`](/api/classes/activeselection/)

#### Inherited from

[`Group`](/api/classes/group/).[`set`](/api/classes/group/#set)

***

### setControlsVisibility()

> **setControlsVisibility**(`options`?): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:611](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L611)

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

##### options?

`Record`\<`string`, `boolean`\> = `{}`

with an optional key per control
example: {Boolean} [options.bl] true to enable the bottom-left control, false to disable it

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`setControlsVisibility`](/api/classes/group/#setcontrolsvisibility)

***

### setControlVisible()

> **setControlVisible**(`controlKey`, `visible`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:599](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L599)

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

[`Group`](/api/classes/group/).[`setControlVisible`](/api/classes/group/#setcontrolvisible)

***

### setCoords()

> **setCoords**(): `void`

Defined in: [src/shapes/Group.ts:521](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L521)

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`setCoords`](/api/classes/group/#setcoords)

***

### setOnGroup()

> **setOnGroup**(): `void`

Defined in: [src/shapes/Object/Object.ts:1468](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1468)

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`setOnGroup`](/api/classes/group/#setongroup)

***

### setPositionByOrigin()

> **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:777](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L777)

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

[`Group`](/api/classes/group/).[`setPositionByOrigin`](/api/classes/group/#setpositionbyorigin)

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:123](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L123)

#### Parameters

##### value

`number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/activeselection/#setx)

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`setRelativeX`](/api/classes/group/#setrelativex)

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:186](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L186)

As [setXY](../../../../api/classes/activeselection/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

##### point

[`Point`](/api/classes/point/)

position according to object's [originX](../../../../api/classes/fabricobject/#originx-3) [originY](../../../../api/classes/fabricobject/#originy-3) properties in parent's coordinate plane

##### originX?

[`TOriginX`](/api/type-aliases/toriginx/) = `...`

Horizontal origin: 'left', 'center' or 'right'

##### originY?

[`TOriginY`](/api/type-aliases/toriginy/) = `...`

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`setRelativeXY`](/api/classes/group/#setrelativexy)

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:139](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L139)

#### Parameters

##### value

`number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/activeselection/#sety)

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`setRelativeY`](/api/classes/group/#setrelativey)

***

### setX()

> **setX**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:93](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L93)

#### Parameters

##### value

`number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`setX`](/api/classes/group/#setx)

***

### setXY()

> **setXY**(`point`, `originX`?, `originY`?): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:163](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L163)

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify [originX](../../../../api/classes/fabricobject/#originx-4) and [originY](../../../../api/classes/fabricobject/#originy-4) values,
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

[`Group`](/api/classes/group/).[`setXY`](/api/classes/group/#setxy)

***

### setY()

> **setY**(`value`): `void`

Defined in: [src/shapes/Object/ObjectGeometry.ts:107](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L107)

#### Parameters

##### value

`number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`setY`](/api/classes/group/#sety)

***

### shouldCache()

> **shouldCache**(): `boolean`

Defined in: [src/shapes/ActiveSelection.ts:219](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L219)

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.

#### Returns

`boolean`

#### Overrides

[`Group`](/api/classes/group/).[`shouldCache`](/api/classes/group/#shouldcache)

***

### shouldStartDragging()

> **shouldStartDragging**(`_e`): `boolean`

Defined in: [src/shapes/Object/InteractiveObject.ts:682](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L682)

Override to customize Drag behavior
Fired from Canvas#\_onMouseMove

#### Parameters

##### \_e

[`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`boolean`

true in order for the window to start a drag session

#### Inherited from

[`Group`](/api/classes/group/).[`shouldStartDragging`](/api/classes/group/#shouldstartdragging)

***

### size()

> **size**(): `number`

Defined in: [src/Collection.ts:136](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/Collection.ts#L136)

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

[`Group`](/api/classes/group/).[`size`](/api/classes/group/#size-1)

***

### strokeBorders()

> **strokeBorders**(`ctx`, `size`): `void`

Defined in: [src/shapes/Object/InteractiveObject.ts:399](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L399)

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

[`Group`](/api/classes/group/).[`strokeBorders`](/api/classes/group/#strokeborders)

***

### toCanvasElement()

> **toCanvasElement**(`options`): `HTMLCanvasElement`

Defined in: [src/shapes/Object/Object.ts:1299](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1299)

Converts an object into a HTMLCanvas element

#### Parameters

##### options

`ObjectToCanvasElementOptions` = `{}`

Options object

#### Returns

`HTMLCanvasElement`

Returns DOM element <canvas> with the FabricObject

#### Inherited from

[`Group`](/api/classes/group/).[`toCanvasElement`](/api/classes/group/#tocanvaselement)

***

### toClipPathSVG()

> **toClipPathSVG**(`reviver`?): `string`

Defined in: [src/shapes/Group.ts:666](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L666)

Returns svg clipPath representation of an instance

#### Parameters

##### reviver?

[`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`Group`](/api/classes/group/).[`toClipPathSVG`](/api/classes/group/#toclippathsvg)

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude`?): `any`

Defined in: [src/shapes/Object/Object.ts:1843](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1843)

Returns (dataless) object representation of an instance

#### Parameters

##### propertiesToInclude?

`any`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

Object representation of an instance

#### Inherited from

[`Group`](/api/classes/group/).[`toDatalessObject`](/api/classes/group/#todatalessobject)

***

### toDataURL()

> **toDataURL**(`options`): `string`

Defined in: [src/shapes/Object/Object.ts:1395](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1395)

Converts an object into a data-url-like string

#### Parameters

##### options

`toDataURLOptions` = `{}`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

[`Group`](/api/classes/group/).[`toDataURL`](/api/classes/group/#todataurl)

***

### toggle()

> **toggle**(`property`): [`ActiveSelection`](/api/classes/activeselection/)

Defined in: [src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/CommonMethods.ts#L46)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

##### property

`string`

Property to toggle

#### Returns

[`ActiveSelection`](/api/classes/activeselection/)

#### Inherited from

[`Group`](/api/classes/group/).[`toggle`](/api/classes/group/#toggle)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [src/shapes/Object/Object.ts:1427](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1427)

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[`Group`](/api/classes/group/).[`toJSON`](/api/classes/group/#tojson)

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & [`SerializedGroupProps`](/api/interfaces/serializedgroupprops/)

Defined in: [src/shapes/Group.ts:576](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L576)

Returns object representation of an instance

#### Type Parameters

• **T** *extends* `Omit`\<[`GroupProps`](/api/interfaces/groupprops/) & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`ActiveSelection`](/api/classes/activeselection/)\>, keyof [`SerializedGroupProps`](/api/interfaces/serializedgroupprops/)\>

• **K** *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

##### propertiesToInclude?

`K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedGroupProps`](/api/interfaces/serializedgroupprops/)

object representation of an instance

#### Inherited from

[`Group`](/api/classes/group/).[`toObject`](/api/classes/group/#toobject)

***

### toString()

> **toString**(): `string`

Defined in: [src/shapes/ActiveSelection.ts:207](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L207)

Returns string representation of a group

#### Returns

`string`

#### Overrides

[`Group`](/api/classes/group/).[`toString`](/api/classes/group/#tostring)

***

### toSVG()

> **toSVG**(`this`, `reviver`?): `string`

Defined in: [src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

Returns svg representation of an instance

#### Parameters

##### this

`FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)

##### reviver?

[`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`Group`](/api/classes/group/).[`toSVG`](/api/classes/group/#tosvg)

***

### transform()

> **transform**(`ctx`): `void`

Defined in: [src/shapes/Object/Object.ts:527](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L527)

Transforms context when rendering an object

#### Parameters

##### ctx

`CanvasRenderingContext2D`

Context

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`transform`](/api/classes/group/#transform)

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `number`[]

Defined in: [src/shapes/Object/ObjectGeometry.ts:453](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L453)

#### Parameters

##### skipGroup

`boolean` = `false`

#### Returns

`number`[]

#### Inherited from

[`Group`](/api/classes/group/).[`transformMatrixKey`](/api/classes/group/#transformmatrixkey)

***

### translateToCenterPoint()

> **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:682](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L682)

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

[`Group`](/api/classes/group/).[`translateToCenterPoint`](/api/classes/group/#translatetocenterpoint)

***

### translateToGivenOrigin()

> **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:654](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L654)

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

[`Group`](/api/classes/group/).[`translateToGivenOrigin`](/api/classes/group/#translatetogivenorigin)

***

### translateToOriginPoint()

> **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/api/classes/point/)

Defined in: [src/shapes/Object/ObjectGeometry.ts:710](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/ObjectGeometry.ts#L710)

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

[`Group`](/api/classes/group/).[`translateToOriginPoint`](/api/classes/group/#translatetooriginpoint)

***

### triggerLayout()

> **triggerLayout**(`options`): `void`

Defined in: [src/shapes/Group.ts:527](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L527)

#### Parameters

##### options

[`ImperativeLayoutOptions`](/api/type-aliases/imperativelayoutoptions/) = `{}`

#### Returns

`void`

#### Inherited from

[`Group`](/api/classes/group/).[`triggerLayout`](/api/classes/group/#triggerlayout)

***

### willDrawShadow()

> **willDrawShadow**(): `boolean`

Defined in: [src/shapes/Group.ts:472](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Group.ts#L472)

Check if this object or a child object will cast a shadow

#### Returns

`boolean`

#### Inherited from

[`Group`](/api/classes/group/).[`willDrawShadow`](/api/classes/group/#willdrawshadow)

***

### \_fromObject()

> `static` **\_fromObject**\<`S`\>(`__namedParameters`, `__namedParameters`): `Promise`\<`S`\>

Defined in: [src/shapes/Object/Object.ts:1896](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/Object.ts#L1896)

#### Type Parameters

• **S** *extends* [`BaseFabricObject`](/api/classes/basefabricobject/)

#### Parameters

##### \_\_namedParameters

`Record`\<`string`, `unknown`\>

##### \_\_namedParameters

[`Abortable`](/api/type-aliases/abortable/) & `object` = `{}`

#### Returns

`Promise`\<`S`\>

#### Inherited from

[`Group`](/api/classes/group/).[`_fromObject`](/api/classes/group/#_fromobject)

***

### createControls()

> `static` **createControls**(): `object`

Defined in: [src/shapes/Object/InteractiveObject.ts:167](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/Object/InteractiveObject.ts#L167)

Creates the default control object.
If you prefer to have on instance of controls shared among all objects
make this function return an empty object and add controls to the ownDefaults

#### Returns

`object`

##### controls

> **controls**: `Record`\<`string`, [`Control`](/api/classes/control/)\>

#### Inherited from

[`Group`](/api/classes/group/).[`createControls`](/api/classes/group/#createcontrols)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

Defined in: [src/shapes/ActiveSelection.ts:41](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/shapes/ActiveSelection.ts#L41)

#### Returns

`Record`\<`string`, `any`\>

#### Overrides

[`Group`](/api/classes/group/).[`getDefaults`](/api/classes/group/#getdefaults)
