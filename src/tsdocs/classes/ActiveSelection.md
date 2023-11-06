# Class: ActiveSelection

Used by Canvas to manage selection.
Canvas accepts an `activeSelection` option allowing overriding and customization.

**`Example`**

```ts
class MyActiveSelection extends ActiveSelection {
  ...
}

const canvas = new Canvas(el, {
 activeSelection: new MyActiveSelection()
})
```

## Hierarchy

- [`Group`](/apidocs/classes/Group.md)

  ↳ **`ActiveSelection`**

## Constructors

### constructor

**new ActiveSelection**(`objects?`, `options?`, `objectsRelativeToGroup?`): [`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

Constructor

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `objects?` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | `[]` | instance objects |
| `options?` | `Partial`\<[`GroupProps`](/apidocs/interfaces/GroupProps.md)\> | `{}` | Options object |
| `objectsRelativeToGroup?` | `boolean` | `undefined` | true if objects exist in group coordinate plane |

#### Returns

[`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[constructor](/apidocs/classes/Group.md#constructor)

#### Defined in

[src/shapes/Group.ts:171](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L171)

## Properties

### \_\_corner

 `Optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[Group](/apidocs/classes/Group.md).[__corner](/apidocs/classes/Group.md#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:115](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L115)

___

### \_\_owningGroup

 `Optional` **\_\_owningGroup**: [`Group`](/apidocs/classes/Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[Group](/apidocs/classes/Group.md).[__owningGroup](/apidocs/classes/Group.md#__owninggroup)

#### Defined in

[src/shapes/Object/StackedObject.ts:45](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L45)

___

### \_activeObjects

 `Private` **\_activeObjects**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] = `[]`

Used internally to optimize performance
Once an object is selected, instance is rendered without the selected object.
This way instance is cached only once for the entire interaction with the selected object.

#### Inherited from

[Group](/apidocs/classes/Group.md).[_activeObjects](/apidocs/classes/Group.md#_activeobjects)

#### Defined in

[src/shapes/Group.ts:143](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L143)

___

### \_cacheCanvas

 `Optional` `Private` **\_cacheCanvas**: `HTMLCanvasElement`

A reference to the HTMLCanvasElement that is used to contain the cache of the object
this canvas element is resized and cleared as needed
Is marked private, you can read it, don't use it since it is handled by fabric
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[_cacheCanvas](/apidocs/classes/Group.md#_cachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:184](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L184)

___

### \_cacheContext

 `Private` **\_cacheContext**: ``null`` \| `CanvasRenderingContext2D` = `null`

Quick access for the _cacheCanvas rendering context
This is part of the objectCaching feature
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[_cacheContext](/apidocs/classes/Group.md#_cachecontext)

#### Defined in

[src/shapes/Object/Object.ts:173](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L173)

___

### \_controlsVisibility

 **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[Group](/apidocs/classes/Group.md).[_controlsVisibility](/apidocs/classes/Group.md#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:122](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L122)

___

### \_objects

 **\_objects**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

**`TODO`**

needs to end up in the constructor too

#### Overrides

[Group](/apidocs/classes/Group.md).[_objects](/apidocs/classes/Group.md#_objects)

#### Defined in

[src/shapes/ActiveSelection.ts:27](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L27)

___

### \_scaling

 `Optional` **\_scaling**: `boolean`

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

**`TODO`**

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

[Group](/apidocs/classes/Group.md).[_scaling](/apidocs/classes/Group.md#_scaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:144](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L144)

___

### \_transformDone

 `Optional` `Private` **\_transformDone**: `boolean`

Private. indicates if the object inside a group is on a transformed context or not
or is part of a larger cache for many object ( a group for example)

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[_transformDone](/apidocs/classes/Group.md#_transformdone)

#### Defined in

[src/shapes/Object/Object.ts:264](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L264)

___

### aCoords

 **aCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Describe object's corner position in canvas object absolute coordinates
properties are tl,tr,bl,br and describe the four main corner.
each property is an object with x, y, instance of Fabric.Point.
The coordinates depends from this properties: width, height, scaleX, scaleY
skewX, skewY, angle, strokeWidth, top, left.
Those coordinates are useful to understand where an object is. They get updated
with lineCoords or oCoords in interactive cases but they do not need to be updated when zoom or panning change.
The coordinates get updated with

**`Method`**

setCoords.
You can calculate them without updating with

**`Method`**

calcACoords();

#### Inherited from

[Group](/apidocs/classes/Group.md).[aCoords](/apidocs/classes/Group.md#acoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:57](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L57)

___

### absolutePositioned

 **absolutePositioned**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[absolutePositioned](/apidocs/classes/Group.md#absolutepositioned)

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L137)

___

### activeOn

 **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

[Group](/apidocs/classes/Group.md).[activeOn](/apidocs/classes/Group.md#activeon)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:91](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L91)

___

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[Group](/apidocs/classes/Group.md).[angle](/apidocs/classes/Group.md#angle)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

 **backgroundColor**: `string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[backgroundColor](/apidocs/classes/Group.md#backgroundcolor)

#### Defined in

[src/shapes/Object/Object.ts:124](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L124)

___

### borderColor

 **borderColor**: `string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[borderColor](/apidocs/classes/Group.md#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L81)

___

### borderDashArray

 **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

[Group](/apidocs/classes/Group.md).[borderDashArray](/apidocs/classes/Group.md#borderdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L82)

___

### borderOpacityWhenMoving

 **borderOpacityWhenMoving**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[borderOpacityWhenMoving](/apidocs/classes/Group.md#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L83)

___

### borderScaleFactor

 **borderScaleFactor**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[borderScaleFactor](/apidocs/classes/Group.md#borderscalefactor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:84](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L84)

___

### cacheHeight

 `Optional` `Private` **cacheHeight**: `number`

Size of the cache canvas, height
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[cacheHeight](/apidocs/classes/Group.md#cacheheight)

#### Defined in

[src/shapes/Object/Object.ts:202](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L202)

___

### cacheTranslationX

 `Optional` `Private` **cacheTranslationX**: `number`

zoom level used on the cacheCanvas to draw the cache, Y axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[cacheTranslationX](/apidocs/classes/Group.md#cachetranslationx)

#### Defined in

[src/shapes/Object/Object.ts:229](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L229)

___

### cacheTranslationY

 `Optional` `Private` **cacheTranslationY**: `number`

translation of the cacheCanvas away from the center, for subpixel accuracy and crispness
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[cacheTranslationY](/apidocs/classes/Group.md#cachetranslationy)

#### Defined in

[src/shapes/Object/Object.ts:238](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L238)

___

### cacheWidth

 `Optional` `Private` **cacheWidth**: `number`

Size of the cache canvas, width
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[cacheWidth](/apidocs/classes/Group.md#cachewidth)

#### Defined in

[src/shapes/Object/Object.ts:193](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L193)

___

### canvas

 `Optional` **canvas**: [`Canvas`](/apidocs/classes/Canvas.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[canvas](/apidocs/classes/Group.md#canvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:146](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L146)

___

### centeredRotation

 **centeredRotation**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[centeredRotation](/apidocs/classes/Group.md#centeredrotation)

#### Defined in

[src/shapes/Object/Object.ts:138](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L138)

___

### centeredScaling

 **centeredScaling**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[centeredScaling](/apidocs/classes/Group.md#centeredscaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L58)

___

### clipPath

 `Optional` **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Inherited from

[Group](/apidocs/classes/Group.md).[clipPath](/apidocs/classes/Group.md#clippath)

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L135)

___

### clipPathId

 `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[Group](/apidocs/classes/Group.md).[clipPathId](/apidocs/classes/Group.md#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### colorProperties

 **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[Group](/apidocs/classes/Group.md).[colorProperties](/apidocs/classes/Group.md#colorproperties)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/AnimatableObject.ts#L20)

___

### controls

 **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[Group](/apidocs/classes/Group.md).[controls](/apidocs/classes/Group.md#controls)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:128](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L128)

___

### cornerColor

 **cornerColor**: `string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[cornerColor](/apidocs/classes/Group.md#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L75)

___

### cornerDashArray

 **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

[Group](/apidocs/classes/Group.md).[cornerDashArray](/apidocs/classes/Group.md#cornerdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L78)

___

### cornerSize

 **cornerSize**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[cornerSize](/apidocs/classes/Group.md#cornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L72)

___

### cornerStrokeColor

 **cornerStrokeColor**: `string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[cornerStrokeColor](/apidocs/classes/Group.md#cornerstrokecolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L76)

___

### cornerStyle

 **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

[Group](/apidocs/classes/Group.md).[cornerStyle](/apidocs/classes/Group.md#cornerstyle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L77)

___

### dirty

 **dirty**: `boolean`

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

**`Default`**

```ts
true
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[dirty](/apidocs/classes/Group.md#dirty)

#### Defined in

[src/shapes/Object/Object.ts:163](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L163)

___

### evented

 **evented**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[evented](/apidocs/classes/Group.md#evented)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L89)

___

### excludeFromExport

 **excludeFromExport**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[excludeFromExport](/apidocs/classes/Group.md#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:131](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L131)

___

### fill

 **fill**: ``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

#### Inherited from

[Group](/apidocs/classes/Group.md).[fill](/apidocs/classes/Group.md#fill)

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L114)

___

### fillRule

 **fillRule**: `CanvasFillRule`

#### Inherited from

[Group](/apidocs/classes/Group.md).[fillRule](/apidocs/classes/Group.md#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L115)

___

### flipX

 **flipX**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[flipX](/apidocs/classes/Group.md#flipx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

 **flipY**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[flipY](/apidocs/classes/Group.md#flipy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L22)

___

### globalCompositeOperation

 **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

[Group](/apidocs/classes/Group.md).[globalCompositeOperation](/apidocs/classes/Group.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L123)

___

### group

 `Optional` `Private` **group**: [`Group`](/apidocs/classes/Group.md)

A reference to the parent of the object, usually a Group

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[group](/apidocs/classes/Group.md#group)

#### Defined in

[src/shapes/Object/Object.ts:246](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L246)

___

### hasBorders

 **hasBorders**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[hasBorders](/apidocs/classes/Group.md#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L85)

___

### hasControls

 **hasControls**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[hasControls](/apidocs/classes/Group.md#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L79)

___

### height

 **height**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[height](/apidocs/classes/Group.md#height)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hoverCursor

 **hoverCursor**: ``null`` \| `string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[hoverCursor](/apidocs/classes/Group.md#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:93](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L93)

___

### includeDefaultValues

 **includeDefaultValues**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[includeDefaultValues](/apidocs/classes/Group.md#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L130)

___

### interactive

 **interactive**: `boolean`

Used to allow targeting of object inside groups.
set to true if you want to select an object inside a group.\
**REQUIRES** `subTargetCheck` set to true

**`Default`**

```ts

```

#### Inherited from

[Group](/apidocs/classes/Group.md).[interactive](/apidocs/classes/Group.md#interactive)

#### Defined in

[src/shapes/Group.ts:135](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L135)

___

### inverted

 **inverted**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[inverted](/apidocs/classes/Group.md#inverted)

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L136)

___

### isMoving

 `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[Group](/apidocs/classes/Group.md).[isMoving](/apidocs/classes/Group.md#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L134)

___

### layout

 **layout**: [`LayoutStrategy`](/apidocs/modules.md#layoutstrategy)

Specifies the **layout strategy** for instance
Used by `getLayoutStrategyResult` to calculate layout
`fit-content`, `fit-content-lazy`, `fixed`, `clip-path` are supported out of the box

**`Default`**

```ts

```

#### Inherited from

[Group](/apidocs/classes/Group.md).[layout](/apidocs/classes/Group.md#layout)

#### Defined in

[src/shapes/Group.ts:118](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L118)

___

### left

 **left**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[left](/apidocs/classes/Group.md#left)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:18](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L18)

___

### lineCoords

 **lineCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Describe object's corner position in canvas element coordinates.
includes padding. Used of object detection.
set and refreshed with setCoords.
Those could go away

**`Todo`**

investigate how to get rid of those

#### Inherited from

[Group](/apidocs/classes/Group.md).[lineCoords](/apidocs/classes/Group.md#linecoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L66)

___

### lockMovementX

 **lockMovementX**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[lockMovementX](/apidocs/classes/Group.md#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L63)

___

### lockMovementY

 **lockMovementY**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[lockMovementY](/apidocs/classes/Group.md#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L64)

___

### lockRotation

 **lockRotation**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[lockRotation](/apidocs/classes/Group.md#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L65)

___

### lockScalingFlip

 **lockScalingFlip**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[lockScalingFlip](/apidocs/classes/Group.md#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L70)

___

### lockScalingX

 **lockScalingX**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[lockScalingX](/apidocs/classes/Group.md#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L66)

___

### lockScalingY

 **lockScalingY**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[lockScalingY](/apidocs/classes/Group.md#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L67)

___

### lockSkewingX

 **lockSkewingX**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[lockSkewingX](/apidocs/classes/Group.md#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L68)

___

### lockSkewingY

 **lockSkewingY**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[lockSkewingY](/apidocs/classes/Group.md#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L69)

___

### matrixCache

 `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[Group](/apidocs/classes/Group.md).[matrixCache](/apidocs/classes/Group.md#matrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L76)

___

### minScaleLimit

 **minScaleLimit**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[minScaleLimit](/apidocs/classes/Group.md#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:109](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L109)

___

### moveCursor

 **moveCursor**: ``null`` \| `string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[moveCursor](/apidocs/classes/Group.md#movecursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L94)

___

### multiSelectionStacking

 **multiSelectionStacking**: [`MultiSelectionStacking`](/apidocs/modules.md#multiselectionstacking) = `'canvas-stacking'`

controls how selected objects are added during a multiselection event
- `canvas-stacking` adds the selected object to the active selection while respecting canvas object stacking order
- `selection-order` adds the selected object to the top of the stack,
meaning that the stack is ordered by the order in which objects were selected

**`Default`**

`canvas-stacking`

#### Defined in

[src/shapes/ActiveSelection.ts:37](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L37)

___

### noScaleCache

 **noScaleCache**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[noScaleCache](/apidocs/classes/Group.md#noscalecache)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L57)

___

### oCoords

 **oCoords**: `Record`\<`string`, `TOCoord`\>

Describe object's corner position in canvas element coordinates.
properties are depending on control keys and padding the main controls.
each property is an object with x, y and corner.
The `corner` property contains in a similar manner the 4 points of the
interactive area of the corner.
The coordinates depends from the controls positionHandler and are used
to draw and locate controls

#### Inherited from

[Group](/apidocs/classes/Group.md).[oCoords](/apidocs/classes/Group.md#ocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L105)

___

### objectCaching

 **objectCaching**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[objectCaching](/apidocs/classes/Group.md#objectcaching)

#### Defined in

[src/shapes/Object/Object.ts:133](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L133)

___

### opacity

 **opacity**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[opacity](/apidocs/classes/Group.md#opacity)

#### Defined in

[src/shapes/Object/Object.ts:111](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L111)

___

### originX

 **originX**: [`TOriginX`](/apidocs/modules.md#toriginx)

#### Inherited from

[Group](/apidocs/classes/Group.md).[originX](/apidocs/classes/Group.md#originx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

 **originY**: [`TOriginY`](/apidocs/modules.md#toriginy)

#### Inherited from

[Group](/apidocs/classes/Group.md).[originY](/apidocs/classes/Group.md#originy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L28)

___

### ownCaching

 `Optional` `Private` **ownCaching**: `boolean`

Indicate if the object is sitting on a cache dedicated to it
or is part of a larger cache for many object ( a group for example)

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[ownCaching](/apidocs/classes/Group.md#owncaching)

#### Defined in

[src/shapes/Object/Object.ts:255](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L255)

___

### ownMatrixCache

 `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[Group](/apidocs/classes/Group.md).[ownMatrixCache](/apidocs/classes/Group.md#ownmatrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:71](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L71)

___

### padding

 **padding**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[padding](/apidocs/classes/Group.md#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:44](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L44)

___

### paintFirst

 **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

[Group](/apidocs/classes/Group.md).[paintFirst](/apidocs/classes/Group.md#paintfirst)

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L113)

___

### perPixelTargetFind

 **perPixelTargetFind**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[perPixelTargetFind](/apidocs/classes/Group.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:90](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L90)

___

### scaleX

 **scaleX**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[scaleX](/apidocs/classes/Group.md#scalex)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

 **scaleY**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[scaleY](/apidocs/classes/Group.md#scaley)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

 **selectable**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[selectable](/apidocs/classes/Group.md#selectable)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:88](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L88)

___

### selectionBackgroundColor

 **selectionBackgroundColor**: `string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[selectionBackgroundColor](/apidocs/classes/Group.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L86)

___

### shadow

 **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[shadow](/apidocs/classes/Group.md#shadow)

#### Defined in

[src/shapes/Object/Object.ts:126](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L126)

___

### skewX

 **skewX**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[skewX](/apidocs/classes/Group.md#skewx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

 **skewY**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[skewY](/apidocs/classes/Group.md#skewy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

 `Optional` **snapAngle**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[Group](/apidocs/classes/Group.md).[snapAngle](/apidocs/classes/Group.md#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L60)

___

### snapThreshold

 `Optional` **snapThreshold**: [`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[Group](/apidocs/classes/Group.md).[snapThreshold](/apidocs/classes/Group.md#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L61)

___

### stroke

 **stroke**: ``null`` \| `string` \| [`TFiller`](/apidocs/modules.md#tfiller)

#### Inherited from

[Group](/apidocs/classes/Group.md).[stroke](/apidocs/classes/Group.md#stroke)

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L116)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

[Group](/apidocs/classes/Group.md).[strokeDashArray](/apidocs/classes/Group.md#strokedasharray)

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L117)

___

### strokeDashOffset

 **strokeDashOffset**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[strokeDashOffset](/apidocs/classes/Group.md#strokedashoffset)

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L118)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap`

#### Inherited from

[Group](/apidocs/classes/Group.md).[strokeLineCap](/apidocs/classes/Group.md#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L119)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

[Group](/apidocs/classes/Group.md).[strokeLineJoin](/apidocs/classes/Group.md#strokelinejoin)

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L120)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[strokeMiterLimit](/apidocs/classes/Group.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/Object.ts:121](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L121)

___

### strokeUniform

 **strokeUniform**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[strokeUniform](/apidocs/classes/Group.md#strokeuniform)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

 **strokeWidth**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[strokeWidth](/apidocs/classes/Group.md#strokewidth)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L30)

___

### subTargetCheck

 **subTargetCheck**: `boolean`

Used to optimize performance
set to `false` if you don't need contained objects to be targets of events

**`Default`**

```ts

```

#### Inherited from

[Group](/apidocs/classes/Group.md).[subTargetCheck](/apidocs/classes/Group.md#subtargetcheck)

#### Defined in

[src/shapes/Group.ts:126](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L126)

___

### top

 **top**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[top](/apidocs/classes/Group.md#top)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

 **touchCornerSize**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[touchCornerSize](/apidocs/classes/Group.md#touchcornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L73)

___

### transparentCorners

 **transparentCorners**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[transparentCorners](/apidocs/classes/Group.md#transparentcorners)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L74)

___

### visible

 **visible**: `boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[visible](/apidocs/classes/Group.md#visible)

#### Defined in

[src/shapes/Object/Object.ts:128](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L128)

___

### width

 **width**: `number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[width](/apidocs/classes/Group.md#width)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:19](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L19)

___

### zoomX

 `Optional` `Private` **zoomX**: `number`

zoom level used on the cacheCanvas to draw the cache, X axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[zoomX](/apidocs/classes/Group.md#zoomx)

#### Defined in

[src/shapes/Object/Object.ts:211](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L211)

___

### zoomY

 `Optional` `Private` **zoomY**: `number`

zoom level used on the cacheCanvas to draw the cache, Y axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[zoomY](/apidocs/classes/Group.md#zoomy)

#### Defined in

[src/shapes/Object/Object.ts:220](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L220)

___

### cacheProperties

 `Static` **cacheProperties**: `string`[] = `cacheProperties`

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[Group](/apidocs/classes/Group.md).[cacheProperties](/apidocs/classes/Group.md#cacheproperties)

#### Defined in

[src/shapes/Object/Object.ts:155](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L155)

___

### ownDefaults

 `Static` **ownDefaults**: `Record`\<`string`, `any`\> = `groupDefaultValues`

#### Inherited from

[Group](/apidocs/classes/Group.md).[ownDefaults](/apidocs/classes/Group.md#owndefaults)

#### Defined in

[src/shapes/Group.ts:152](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L152)

___

### stateProperties

 `Static` **stateProperties**: `string`[]

#### Inherited from

[Group](/apidocs/classes/Group.md).[stateProperties](/apidocs/classes/Group.md#stateproperties)

#### Defined in

[src/shapes/Group.ts:145](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L145)

___

### type

 `Static` **type**: `string` = `'ActiveSelection'`

#### Overrides

[Group](/apidocs/classes/Group.md).[type](/apidocs/classes/Group.md#type)

#### Defined in

[src/shapes/ActiveSelection.ts:39](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L39)

## Accessors

### type

`get` **type**(): `string`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists because is very hard to catch all the ways in which a type value
could be set in the instance

#### Returns

`string`

**`TODO`**

add sustainable warning message

**`Deprecated`**

#### Inherited from

Group.type

#### Defined in

[src/shapes/Object/Object.ts:290](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L290)

`set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

Group.type

#### Defined in

[src/shapes/Object/Object.ts:298](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L298)

## Methods

### \_\_objectMonitor

**__objectMonitor**(`ev`): `void`

invalidates layout on object modified

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[__objectMonitor](/apidocs/classes/Group.md#__objectmonitor)

#### Defined in

[src/shapes/Group.ts:356](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L356)

___

### \_\_objectSelectionMonitor

**__objectSelectionMonitor**(): `void`

we don't want the selection monitor to be active

#### Returns

`void`

#### Overrides

[Group](/apidocs/classes/Group.md).[__objectSelectionMonitor](/apidocs/classes/Group.md#__objectselectionmonitor)

#### Defined in

[src/shapes/ActiveSelection.ts:52](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L52)

___

### \_\_serializeObjects

**__serializeObjects**(`method?`, `propertiesToInclude?`): `any`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method?` | ``"toObject"`` \| ``"toDatalessObject"`` |  |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`[]

serialized objects

#### Inherited from

[Group](/apidocs/classes/Group.md).[__serializeObjects](/apidocs/classes/Group.md#__serializeobjects)

#### Defined in

[src/shapes/Group.ts:964](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L964)

___

### \_adjustObjectPosition

**_adjustObjectPosition**(`object`, `diff`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `diff` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_adjustObjectPosition](/apidocs/classes/Group.md#_adjustobjectposition)

#### Defined in

[src/shapes/Group.ts:588](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L588)

___

### \_animate

**_animate**\<`T`\>(`key`, `endValue`, `options?`): [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](/apidocs/modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Property to animate |
| `endValue` | `T` | - |
| `options?` | `Partial`\<[`AnimationOptions`](/apidocs/modules/util.md#animationoptions)\<`T`\>\> | Options object |

#### Returns

[`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>

#### Inherited from

[Group](/apidocs/classes/Group.md).[_animate](/apidocs/classes/Group.md#_animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:50](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/AnimatableObject.ts#L50)

___

### \_applyLayoutStrategy

**_applyLayoutStrategy**(`context`): `void`

initial layout logic:
calculate bbox of objects (if necessary) and translate it according to options received from the constructor (left, top, width, height)
so it is placed in the center of the bbox received from the constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`LayoutContext`](/apidocs/modules.md#layoutcontext) |

#### Returns

`void`

#### Overrides

[Group](/apidocs/classes/Group.md).[_applyLayoutStrategy](/apidocs/classes/Group.md#_applylayoutstrategy)

#### Defined in

[src/shapes/ActiveSelection.ts:149](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L149)

___

### \_applyPatternForTransformedGradient

**_applyPatternForTransformedGradient**(`ctx`, `filler`): `void`

This function try to patch the missing gradientTransform on canvas gradients.
transforming a context to transform the gradient, is going to transform the stroke too.
we want to transform the gradient but not the stroke operation, so we create
a transformed gradient on a pattern and then we use the pattern instead of the gradient.
this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
is limited.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `filler` | [`TFiller`](/apidocs/modules.md#tfiller) |  |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_applyPatternForTransformedGradient](/apidocs/classes/Group.md#_applypatternfortransformedgradient)

#### Defined in

[src/shapes/Object/Object.ts:1255](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1255)

___

### \_applyPatternGradientTransform

**_applyPatternGradientTransform**(`ctx`, `filler`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `filler` | [`TFiller`](/apidocs/modules.md#tfiller) | [Pattern](/apidocs/classes/Pattern.md) or [Gradient](/apidocs/classes/Gradient.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

[Group](/apidocs/classes/Group.md).[_applyPatternGradientTransform](/apidocs/classes/Group.md#_applypatterngradienttransform)

#### Defined in

[src/shapes/Object/Object.ts:1152](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1152)

___

### \_calculateCurrentDimensions

**_calculateCurrentDimensions**(`options?`): [`Point`](/apidocs/classes/Point.md)

Calculate object dimensions for controls box, including padding and canvas zoom.
and active selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | transform options |

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

[Group](/apidocs/classes/Group.md).[_calculateCurrentDimensions](/apidocs/classes/Group.md#_calculatecurrentdimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:633](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L633)

___

### \_constrainScale

**_constrainScale**(`value`): `number`

Makes sure the scale is valid and modifies it if necessary
@todo: this is a control action issue, not a geometry one

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

constrained value;

#### Inherited from

[Group](/apidocs/classes/Group.md).[_constrainScale](/apidocs/classes/Group.md#_constrainscale)

#### Defined in

[src/shapes/Object/Object.ts:675](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L675)

___

### \_createBaseClipPathSVGMarkup

**_createBaseClipPathSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_createBaseClipPathSVGMarkup](/apidocs/classes/Group.md#_createbaseclippathsvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:158](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L158)

___

### \_createBaseSVGMarkup

**_createBaseSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `noStyle?` | `boolean` |
| › `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |
| › `withShadow?` | `boolean` |

#### Returns

`string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_createBaseSVGMarkup](/apidocs/classes/Group.md#_createbasesvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

**_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_createCacheCanvas](/apidocs/classes/Group.md#_createcachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:319](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L319)

___

### \_createSVGBgRect

**_createSVGBgRect**(`reviver?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |

#### Returns

`string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_createSVGBgRect](/apidocs/classes/Group.md#_createsvgbgrect)

#### Defined in

[src/shapes/Group.ts:1025](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L1025)

___

### \_drawBorders

**_drawBorders**(`ctx`, `size`, `styleOverride?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `size` | [`Point`](/apidocs/classes/Point.md) |  |
| `styleOverride` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_drawBorders](/apidocs/classes/Group.md#_drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:376](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L376)

___

### \_drawClipPath

**_drawClipPath**(`ctx`, `clipPath?`): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `clipPath?` | `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_drawClipPath](/apidocs/classes/Group.md#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:944](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L944)

___

### \_enterGroup

**_enterGroup**(`object`, `removeParentTransform?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object is in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_enterGroup](/apidocs/classes/Group.md#_entergroup)

#### Defined in

[src/shapes/Group.ts:419](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L419)

___

### \_exitGroup

**_exitGroup**(`object`, `removeParentTransform?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object should exit group without applying group's transform to it |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_exitGroup](/apidocs/classes/Group.md#_exitgroup)

#### Defined in

[src/shapes/Group.ts:462](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L462)

___

### \_filterObjectsBeforeEnteringGroup

**_filterObjectsBeforeEnteringGroup**(`objects`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Override this method to enhance performance (for groups with a lot of objects).
If Overriding, be sure not pass illegal objects to group - it will break your app.

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Inherited from

[Group](/apidocs/classes/Group.md).[_filterObjectsBeforeEnteringGroup](/apidocs/classes/Group.md#_filterobjectsbeforeenteringgroup)

#### Defined in

[src/shapes/Group.ts:229](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L229)

___

### \_findCenterFromElement

**_findCenterFromElement**(): [`Point`](/apidocs/classes/Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates

#### Returns

[`Point`](/apidocs/classes/Point.md)

center point from element coordinates

#### Inherited from

[Group](/apidocs/classes/Group.md).[_findCenterFromElement](/apidocs/classes/Group.md#_findcenterfromelement)

#### Defined in

[src/shapes/Object/Object.ts:1303](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1303)

___

### \_findTargetCorner

**_findTargetCorner**(`pointer`, `forTouch?`): `string`

Determines which corner is under the mouse cursor, represented by `pointer`.
This function is return a corner only if the object is the active one.
This is done to avoid selecting corner of non active object and activating transformations
rather than drag action. The default behavior of fabricJS is that if you want to transform
an object, first you select it to show the control set

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pointer` | [`Point`](/apidocs/classes/Point.md) | `undefined` | The pointer indicating the mouse position |
| `forTouch` | `boolean` | `false` | indicates if we are looking for interaction area with a touch action |

#### Returns

`string`

corner code (tl, tr, bl, br, etc.), or 0 if nothing is found.

#### Inherited from

[Group](/apidocs/classes/Group.md).[_findTargetCorner](/apidocs/classes/Group.md#_findtargetcorner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:191](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L191)

___

### \_getCacheCanvasDimensions

**_getCacheCanvasDimensions**(): [`TCacheCanvasDimensions`](/apidocs/modules.md#tcachecanvasdimensions)

Return the dimension and the zoom level needed to create a cache canvas
big enough to host the object to be cached.

#### Returns

[`TCacheCanvasDimensions`](/apidocs/modules.md#tcachecanvasdimensions)

.x width of object to be cached

.y height of object to be cached

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

[Group](/apidocs/classes/Group.md).[_getCacheCanvasDimensions](/apidocs/classes/Group.md#_getcachecanvasdimensions)

#### Defined in

[src/shapes/Object/Object.ts:390](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L390)

___

### \_getLeftTopCoords

**_getLeftTopCoords**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[_getLeftTopCoords](/apidocs/classes/Group.md#_getlefttopcoords)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:222](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L222)

___

### \_getNonTransformedDimensions

**_getNonTransformedDimensions**(): [`Point`](/apidocs/classes/Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

[Group](/apidocs/classes/Group.md).[_getNonTransformedDimensions](/apidocs/classes/Group.md#_getnontransformeddimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:622](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L622)

___

### \_getTransformedDimensions

**_getTransformedDimensions**(`options?`): [`Point`](/apidocs/classes/Point.md)

Calculate object bounding box dimensions from its properties scale, skew.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

[Group](/apidocs/classes/Group.md).[_getTransformedDimensions](/apidocs/classes/Group.md#_gettransformeddimensions)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:49](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L49)

___

### \_limitCacheSize

**_limitCacheSize**(`dims`): `any`

Limit the cache dimensions so that X * Y do not cross config.perfLimitSizeTotal
and each side do not cross fabric.cacheSideLimit
those numbers are configurable so that you can get as much detail as you want
making bargain with performances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dims` | `any` |

#### Returns

`any`

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

[Group](/apidocs/classes/Group.md).[_limitCacheSize](/apidocs/classes/Group.md#_limitcachesize)

#### Defined in

[src/shapes/Object/Object.ts:342](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L342)

___

### \_onAfterObjectsChange

**_onAfterObjectsChange**(`type`, `targets`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"added"`` \| ``"removed"`` |
| `targets` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`void`

#### Overrides

[Group](/apidocs/classes/Group.md).[_onAfterObjectsChange](/apidocs/classes/Group.md#_onafterobjectschange)

#### Defined in

[src/shapes/ActiveSelection.ts:118](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L118)

___

### \_onObjectAdded

**_onObjectAdded**(`object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_onObjectAdded](/apidocs/classes/Group.md#_onobjectadded)

#### Defined in

[src/shapes/Group.ts:270](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L270)

___

### \_onObjectRemoved

**_onObjectRemoved**(`object`, `removeParentTransform?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object should exit group without applying group's transform to it |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_onObjectRemoved](/apidocs/classes/Group.md#_onobjectremoved)

#### Defined in

[src/shapes/Group.ts:287](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L287)

___

### \_onRelativeObjectAdded

**_onRelativeObjectAdded**(`object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_onRelativeObjectAdded](/apidocs/classes/Group.md#_onrelativeobjectadded)

#### Defined in

[src/shapes/Group.ts:276](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L276)

___

### \_onStackOrderChanged

**_onStackOrderChanged**(): `void`

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_onStackOrderChanged](/apidocs/classes/Group.md#_onstackorderchanged)

#### Defined in

[src/shapes/Group.ts:306](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L306)

___

### \_removeCacheCanvas

**_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_removeCacheCanvas](/apidocs/classes/Group.md#_removecachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:798](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L798)

___

### \_removeDefaultValues

**_removeDefaultValues**\<`T`\>(`object`): `Partial`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

`Partial`\<`T`\>

#### Inherited from

[Group](/apidocs/classes/Group.md).[_removeDefaultValues](/apidocs/classes/Group.md#_removedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:590](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L590)

___

### \_removeShadow

**_removeShadow**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_removeShadow](/apidocs/classes/Group.md#_removeshadow)

#### Defined in

[src/shapes/Object/Object.ts:1138](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1138)

___

### \_render

**_render**(`ctx`): `void`

function that actually render something on the context.
empty here to allow Obects to work on tests to benchmark fabric functionalites
not related to rendering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_render](/apidocs/classes/Group.md#_render)

#### Defined in

[src/shapes/Object/Object.ts:1197](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1197)

___

### \_renderBackground

**_renderBackground**(`ctx`): `void`

Draws a background for the object big as its untransformed dimensions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_renderBackground](/apidocs/classes/Group.md#_renderbackground)

#### Defined in

[src/shapes/Object/Object.ts:1006](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1006)

___

### \_renderControls

**_renderControls**(`ctx`, `styleOverride?`, `childrenOverride?`): `void`

Renders controls and borders for the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `styleOverride?` | `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | properties to override the object style |
| `childrenOverride?` | `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | properties to override the children overrides |

#### Returns

`void`

#### Overrides

[Group](/apidocs/classes/Group.md).[_renderControls](/apidocs/classes/Group.md#_rendercontrols)

#### Defined in

[src/shapes/ActiveSelection.ts:202](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L202)

___

### \_renderFill

**_renderFill**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_renderFill](/apidocs/classes/Group.md#_renderfill)

#### Defined in

[src/shapes/Object/Object.ts:1205](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1205)

___

### \_renderPaintInOrder

**_renderPaintInOrder**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_renderPaintInOrder](/apidocs/classes/Group.md#_renderpaintinorder)

#### Defined in

[src/shapes/Object/Object.ts:1180](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1180)

___

### \_renderStroke

**_renderStroke**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_renderStroke](/apidocs/classes/Group.md#_renderstroke)

#### Defined in

[src/shapes/Object/Object.ts:1224](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1224)

___

### \_set

**_set**(`key`, `value`): [`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[_set](/apidocs/classes/Group.md#_set)

#### Defined in

[src/shapes/Group.ts:315](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L315)

___

### \_setClippingProperties

**_setClippingProperties**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_setClippingProperties](/apidocs/classes/Group.md#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1084](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1084)

___

### \_setFillStyles

**_setFillStyles**(`ctx`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `«destructured»` | `Pick`\<[`ActiveSelection`](/apidocs/classes/ActiveSelection.md), ``"fill"``\> |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_setFillStyles](/apidocs/classes/Group.md#_setfillstyles)

#### Defined in

[src/shapes/Object/Object.ts:1073](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1073)

___

### \_setLineDash

**_setLineDash**(`ctx`, `dashArray?`): `void`

Sets line dash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to set the dash line on |
| `dashArray?` | ``null`` \| `number`[] | array representing dashes |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_setLineDash](/apidocs/classes/Group.md#_setlinedash)

#### Defined in

[src/shapes/Object/Object.ts:1096](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1096)

___

### \_setObject

**_setObject**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`\<`string`, `any`\> |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_setObject](/apidocs/classes/Group.md#_setobject)

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L18)

___

### \_setOpacity

**_setOpacity**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_setOpacity](/apidocs/classes/Group.md#_setopacity)

#### Defined in

[src/shapes/Object/Object.ts:1023](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1023)

___

### \_setOptions

**_setOptions**(`options?`): `void`

Sets object's properties from options, for initialization only

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Options object |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_setOptions](/apidocs/classes/Group.md#_setoptions)

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L9)

___

### \_setShadow

**_setShadow**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_setShadow](/apidocs/classes/Group.md#_setshadow)

#### Defined in

[src/shapes/Object/Object.ts:1111](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1111)

___

### \_setStrokeStyles

**_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `decl` | `Pick`\<[`ActiveSelection`](/apidocs/classes/ActiveSelection.md), ``"strokeDashOffset"`` \| ``"strokeLineCap"`` \| ``"strokeLineJoin"`` \| ``"strokeMiterLimit"`` \| ``"strokeWidth"`` \| ``"stroke"``\> |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_setStrokeStyles](/apidocs/classes/Group.md#_setstrokestyles)

#### Defined in

[src/shapes/Object/Object.ts:1031](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1031)

___

### \_setupCompositeOperation

**_setupCompositeOperation**(`ctx`): `void`

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Rendering canvas context |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_setupCompositeOperation](/apidocs/classes/Group.md#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1535](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1535)

___

### \_shouldSetNestedCoords

**_shouldSetNestedCoords**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Group](/apidocs/classes/Group.md).[_shouldSetNestedCoords](/apidocs/classes/Group.md#_shouldsetnestedcoords)

#### Defined in

[src/shapes/ActiveSelection.ts:44](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L44)

___

### \_toSVG

**_toSVG**(`reviver?`): `string`[]

Returns svg representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`[]

svg representation of an instance

#### Inherited from

[Group](/apidocs/classes/Group.md).[_toSVG](/apidocs/classes/Group.md#_tosvg)

#### Defined in

[src/shapes/Group.ts:1041](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L1041)

___

### \_updateCacheCanvas

**_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

[Group](/apidocs/classes/Group.md).[_updateCacheCanvas](/apidocs/classes/Group.md#_updatecachecanvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:164](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L164)

___

### \_watchObject

**_watchObject**(`watch`, `object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `watch` | `boolean` |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[_watchObject](/apidocs/classes/Group.md#_watchobject)

#### Defined in

[src/shapes/Group.ts:386](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L386)

___

### add

**add**(`...objects`): `number`

Add objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[add](/apidocs/classes/Group.md#add)

#### Defined in

[src/shapes/Group.ts:240](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L240)

___

### addPaintOrder

**addPaintOrder**(`this`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[addPaintOrder](/apidocs/classes/Group.md#addpaintorder)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

___

### animate

**animate**\<`T`\>(`animatable`, `options?`): `Record`\<`string`, [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>\>

Animates object's properties

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](/apidocs/modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animatable` | `Record`\<`string`, `T`\> | map of keys and end values |
| `options?` | `Partial`\<[`AnimationOptions`](/apidocs/modules/util.md#animationoptions)\<`T`\>\> |  |

#### Returns

`Record`\<`string`, [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Inherited from

[Group](/apidocs/classes/Group.md).[animate](/apidocs/classes/Group.md#animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/AnimatableObject.ts#L34)

___

### bringObjectForward

**bringObjectForward**(`object`, `intersecting?`): `boolean`

Moves an object or a selection up in stack of drawn objects
An optional parameter, intersecting allows to move the object in front
of the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object in front of next upper intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

[Group](/apidocs/classes/Group.md).[bringObjectForward](/apidocs/classes/Group.md#bringobjectforward)

#### Defined in

[src/Collection.ts:232](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L232)

___

### bringObjectToFront

**bringObjectToFront**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the top of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |

#### Returns

`boolean`

true if change occurred

#### Inherited from

[Group](/apidocs/classes/Group.md).[bringObjectToFront](/apidocs/classes/Group.md#bringobjecttofront)

#### Defined in

[src/Collection.ts:186](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L186)

___

### calcACoords

**calcACoords**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

#### Inherited from

[Group](/apidocs/classes/Group.md).[calcACoords](/apidocs/classes/Group.md#calcacoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:491](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L491)

___

### calcOCoords

**calcOCoords**(): `Record`\<`string`, `TOCoord`\>

Calculates the coordinates of the center of each control plus the corners of the control itself
This basically just delegates to each control positionHandler
WARNING: changing what is passed to positionHandler is a breaking change, since position handler
is a public api and should be done just if extremely necessary

#### Returns

`Record`\<`string`, `TOCoord`\>

#### Inherited from

[Group](/apidocs/classes/Group.md).[calcOCoords](/apidocs/classes/Group.md#calcocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:223](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L223)

___

### calcOwnMatrix

**calcOwnMatrix**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

transform matrix for the object

#### Inherited from

[Group](/apidocs/classes/Group.md).[calcOwnMatrix](/apidocs/classes/Group.md#calcownmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:591](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L591)

___

### calcTransformMatrix

**calcTransformMatrix**(`skipGroup?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `skipGroup?` | `boolean` | `false` | return transform matrix for object not counting parent transformations There are some situation in which this is useful to avoid the fake rotation. |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

transform matrix for the object

#### Inherited from

[Group](/apidocs/classes/Group.md).[calcTransformMatrix](/apidocs/classes/Group.md#calctransformmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:563](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L563)

___

### canDrop

**canDrop**(`e`): `boolean`

Override to customize drag and drop behavior
return true if the object currently dragged can be dropped on the target

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[canDrop](/apidocs/classes/Group.md#candrop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:639](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L639)

___

### canEnterGroup

**canEnterGroup**(`object`): `boolean`

Checks if object can enter group and logs relevant warnings

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[canEnterGroup](/apidocs/classes/Group.md#canentergroup)

#### Defined in

[src/shapes/Group.ts:205](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L205)

___

### clearContextTop

**clearContextTop**(`restoreManually?`): `undefined` \| `CanvasRenderingContext2D`

Clears the canvas.contextTop in a specific area that corresponds to the object's bounding box
that is in the canvas.contextContainer.
This function is used to clear pieces of contextTop where we render ephemeral effects on top of the object.
Example: blinking cursor text selection, drag effects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `restoreManually?` | `boolean` | When true won't restore the context after clear, in order to draw something else. |

#### Returns

`undefined` \| `CanvasRenderingContext2D`

canvas.contextTop that is either still transformed
with the object transformMatrix, or restored to neutral transform

**`Todo`**

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Inherited from

[Group](/apidocs/classes/Group.md).[clearContextTop](/apidocs/classes/Group.md#clearcontexttop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:582](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L582)

___

### clone

**clone**(`propertiesToInclude?`): `Promise`\<[`ActiveSelection`](/apidocs/classes/ActiveSelection.md)\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`\<[`ActiveSelection`](/apidocs/classes/ActiveSelection.md)\>

#### Inherited from

[Group](/apidocs/classes/Group.md).[clone](/apidocs/classes/Group.md#clone)

#### Defined in

[src/shapes/Object/Object.ts:1312](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1312)

___

### cloneAsImage

**cloneAsImage**(`options?`): [`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Creates an instance of Image out of an object
makes use of toCanvasElement.
Once this method was based on toDataUrl and loadImage, so it also had a quality
and format option. toCanvasElement is faster and produce no loss of quality.
If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
toCanvasElement and then toBlob from the obtained canvas is also a good option.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | for clone as image, passed to toDataURL |

#### Returns

[`FabricImage`](/apidocs/classes/FabricImage.md)\<`Partial`\<[`ImageProps`](/apidocs/interfaces/ImageProps.md)\>, [`SerializedImageProps`](/apidocs/interfaces/SerializedImageProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Object cloned as image.

**`Todo`**

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Inherited from

[Group](/apidocs/classes/Group.md).[cloneAsImage](/apidocs/classes/Group.md#cloneasimage)

#### Defined in

[src/shapes/Object/Object.ts:1338](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1338)

___

### collectObjects

**collectObjects**(`bbox`, `options?`): `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Given a bounding box, return all the objects of the collection that are contained in the bounding box.
If `includeIntersecting` is true, return also the objects that intersect the bounding box as well.
This is meant to work with selection. Is not a generic method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bbox` | [`TBBox`](/apidocs/modules.md#tbbox) | a bounding box in scene coordinates |
| `options` | `Object` | an object with includeIntersecting |
| `options.includeIntersecting?` | `boolean` | - |

#### Returns

`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

array of objects contained in the bounding box, ordered from top to bottom stacking wise

#### Inherited from

[Group](/apidocs/classes/Group.md).[collectObjects](/apidocs/classes/Group.md#collectobjects)

#### Defined in

[src/Collection.ts:318](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L318)

___

### complexity

**complexity**(): `number`

Returns number representation of a collection complexity

#### Returns

`number`

complexity

#### Inherited from

[Group](/apidocs/classes/Group.md).[complexity](/apidocs/classes/Group.md#complexity)

#### Defined in

[src/Collection.ts:157](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L157)

___

### contains

**contains**(`object`, `deep?`): `boolean`

Returns true if collection contains an object.\
**Prefer using [FabricObject#isDescendantOf](/apidocs/classes/FabricObject.md#isdescendantof) for performance reasons**
instead of `a.contains(b)` use `b.isDescendantOf(a)`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to check against |
| `deep?` | `boolean` | `true` to check all descendants, `false` to check only `_objects` |

#### Returns

`boolean`

`true` if collection contains an object

#### Inherited from

[Group](/apidocs/classes/Group.md).[contains](/apidocs/classes/Group.md#contains)

#### Defined in

[src/Collection.ts:140](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L140)

___

### containsPoint

**containsPoint**(`point`, `calculate?`): `boolean`

Checks if point is inside the object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | `undefined` | Point to check against |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

[Group](/apidocs/classes/Group.md).[containsPoint](/apidocs/classes/Group.md#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:322](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L322)

___

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[dispose](/apidocs/classes/Group.md#dispose)

#### Defined in

[src/shapes/Group.ts:1013](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L1013)

___

### drawBorders

**drawBorders**(`ctx`, `options`, `styleOverride?`): `void`

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `options` | `Required`\<`Omit`\<[`TComposeMatrixArgs`](/apidocs/modules/util.md#tcomposematrixargs), ``"flipX"`` \| ``"flipY"``\>\> | object representing current object parameters |
| `styleOverride?` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[drawBorders](/apidocs/classes/Group.md#drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:440](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L440)

___

### drawCacheOnCanvas

**drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> | - |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[drawCacheOnCanvas](/apidocs/classes/Group.md#drawcacheoncanvas)

#### Defined in

[src/shapes/Object/Object.ts:962](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L962)

___

### drawClipPathOnCache

**drawClipPathOnCache**(`ctx`, `clipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\> |  |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[drawClipPathOnCache](/apidocs/classes/Group.md#drawclippathoncache)

#### Defined in

[src/shapes/Object/Object.ts:891](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L891)

___

### drawControls

**drawControls**(`ctx`, `styleOverride?`): `void`

Draws corners of an object's bounding box.
Requires public properties: width, height
Requires public options: cornerSize, padding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `styleOverride` | `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | object to override the object style |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[drawControls](/apidocs/classes/Group.md#drawcontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:504](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L504)

___

### drawControlsConnectingLines

**drawControlsConnectingLines**(`ctx`, `size`): `void`

Draws lines from a borders of an object's bounding box to controls that have `withConnection` property set.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `size` | [`Point`](/apidocs/classes/Point.md) | object size x = width, y = height |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[drawControlsConnectingLines](/apidocs/classes/Group.md#drawcontrolsconnectinglines)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:474](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L474)

___

### drawObject

**drawObject**(`ctx`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[drawObject](/apidocs/classes/Group.md#drawobject)

#### Defined in

[src/shapes/Group.ts:530](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L530)

___

### drawSelectionBackground

**drawSelectionBackground**(`ctx`): `void`

Draws a colored layer behind the object, inside its selection borders.
Requires public options: padding, selectionBackgroundColor
this function is called when the context is transformed
has checks to be skipped when the object is on a staticCanvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |

#### Returns

`void`

**`Todo`**

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Inherited from

[Group](/apidocs/classes/Group.md).[drawSelectionBackground](/apidocs/classes/Group.md#drawselectionbackground)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:342](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L342)

___

### enterGroup

**enterGroup**(`object`, `removeParentTransform?`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object is in canvas coordinate plane |

#### Returns

`boolean`

true if object entered group

#### Overrides

[Group](/apidocs/classes/Group.md).[enterGroup](/apidocs/classes/Group.md#entergroup)

#### Defined in

[src/shapes/ActiveSelection.ts:84](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L84)

___

### exitGroup

**exitGroup**(`object`, `removeParentTransform?`): `void`

we want objects to retain their canvas ref when exiting instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |  |
| `removeParentTransform?` | `boolean` | true if object should exit group without applying group's transform to it |

#### Returns

`void`

#### Overrides

[Group](/apidocs/classes/Group.md).[exitGroup](/apidocs/classes/Group.md#exitgroup)

#### Defined in

[src/shapes/ActiveSelection.ts:103](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L103)

___

### findCommonAncestors

**findCommonAncestors**\<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`\<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActiveSelection`](/apidocs/classes/ActiveSelection.md)\<`T`\> |
| `S` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `S` | finds only ancestors that are objects (without canvas) |

#### Returns

`AncestryComparison`\<`S`\>

an object that represent the ancestry situation.

#### Inherited from

[Group](/apidocs/classes/Group.md).[findCommonAncestors](/apidocs/classes/Group.md#findcommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:99](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L99)

___

### findNewLowerIndex

**findNewLowerIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[findNewLowerIndex](/apidocs/classes/Group.md#findnewlowerindex)

#### Defined in

[src/Collection.ts:264](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L264)

___

### findNewUpperIndex

**findNewUpperIndex**(`object`, `idx`, `intersecting?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `idx` | `number` |
| `intersecting?` | `boolean` |

#### Returns

`number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[findNewUpperIndex](/apidocs/classes/Group.md#findnewupperindex)

#### Defined in

[src/Collection.ts:287](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L287)

___

### fire

**fire**\<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`GroupEvents`](/apidocs/interfaces/GroupEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | [`GroupEvents`](/apidocs/interfaces/GroupEvents.md)[`K`] | Options object |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[fire](/apidocs/classes/Group.md#fire)

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L159)

___

### forEachControl

**forEachControl**(`fn`): `void`

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`control`: [`Control`](/apidocs/classes/Control.md), `key`: `string`, `fabricObject`: `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>) => `any` | function to iterate over the controls over |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[forEachControl](/apidocs/classes/Group.md#foreachcontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:320](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L320)

___

### forEachObject

**forEachObject**(`callback`): `void`

Executes given function for each object in this group
A simple shortcut for getObjects().forEach, before es6 was more complicated,
now is just a shortcut.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`object`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, `index`: `number`, `array`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]) => `any` | Callback invoked with current object as first argument, index - as second and an array of all objects - as third. |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[forEachObject](/apidocs/classes/Group.md#foreachobject)

#### Defined in

[src/Collection.ts:83](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L83)

___

### get

**get**(`property`): `any`

Basic getter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property name |

#### Returns

`any`

value of a property

#### Inherited from

[Group](/apidocs/classes/Group.md).[get](/apidocs/classes/Group.md#get)

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L59)

___

### getActiveControl

**getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[getActiveControl](/apidocs/classes/Group.md#getactivecontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:176](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L176)

___

### getAncestors

**getAncestors**\<`T`\>(`strict?`): `Ancestors`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strict?` | `T` | returns only ancestors that are objects (without canvas) |

#### Returns

`Ancestors`\<`T`\>

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[Group](/apidocs/classes/Group.md).[getAncestors](/apidocs/classes/Group.md#getancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:80](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L80)

___

### getBoundingRect

**getBoundingRect**(`calculate?`): [`TBBox`](/apidocs/modules.md#tbbox)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `calculate?` | `boolean` | use coordinates of current position instead of .lineCoords / .aCoords |

#### Returns

[`TBBox`](/apidocs/modules.md#tbbox)

Object with left, top, width, height properties

#### Inherited from

[Group](/apidocs/classes/Group.md).[getBoundingRect](/apidocs/classes/Group.md#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:405](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L405)

___

### getCanvasRetinaScaling

**getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[getCanvasRetinaScaling](/apidocs/classes/Group.md#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:462](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L462)

___

### getCenterPoint

**getCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[getCenterPoint](/apidocs/classes/Group.md#getcenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:169](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L169)

___

### getCoords

**getCoords**(`calculate?`): [`Point`](/apidocs/classes/Point.md)[]

return correct set of coordinates for intersection
this will return either aCoords or lineCoords.
The coords are returned in an array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `calculate` | `boolean` | `false` | will return aCoords if true or lineCoords |

#### Returns

[`Point`](/apidocs/classes/Point.md)[]

[tl, tr, br, bl] of points

#### Inherited from

[Group](/apidocs/classes/Group.md).[getCoords](/apidocs/classes/Group.md#getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:222](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L222)

___

### getLayoutStrategyResult

**getLayoutStrategyResult**\<`T`\>(`layoutDirective`, `objects`, `context`): `any`

Override this method to customize layout.
If you need to run logic once layout completes use `onLayout`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LayoutStrategy`](/apidocs/modules.md#layoutstrategy) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layoutDirective` | `T` |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |
| `context` | [`LayoutContext`](/apidocs/modules.md#layoutcontext) |

#### Returns

`any`

#### Inherited from

[Group](/apidocs/classes/Group.md).[getLayoutStrategyResult](/apidocs/classes/Group.md#getlayoutstrategyresult)

#### Defined in

[src/shapes/Group.ts:692](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L692)

___

### getObjectOpacity

**getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[getObjectOpacity](/apidocs/classes/Group.md#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:660](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L660)

___

### getObjectScaling

**getObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[getObjectScaling](/apidocs/classes/Group.md#getobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:629](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L629)

___

### getObjects

**getObjects**(`...types?`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Returns an array of children objects of this instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...types?` | `string`[] | When specified, only objects of these types are returned |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Inherited from

[Group](/apidocs/classes/Group.md).[getObjects](/apidocs/classes/Group.md#getobjects)

#### Defined in

[src/Collection.ts:100](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L100)

___

### getObjectsBoundingBox

**getObjectsBoundingBox**(`objects`, `ignoreOffset?`): ``null`` \| [`LayoutResult`](/apidocs/modules.md#layoutresult)

Calculate the bbox of objects relative to instance's containing plane

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |
| `ignoreOffset?` | `boolean` |

#### Returns

``null`` \| [`LayoutResult`](/apidocs/modules.md#layoutresult)

bounding box

#### Inherited from

[Group](/apidocs/classes/Group.md).[getObjectsBoundingBox](/apidocs/classes/Group.md#getobjectsboundingbox)

#### Defined in

[src/shapes/Group.ts:904](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L904)

___

### getParent

**getParent**\<`T`\>(`strict?`): `undefined` \| `TAncestor`

Returns instance's parent **EXCLUDING** `ActiveSelection`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strict?` | `T` | exclude canvas as well |

#### Returns

`undefined` \| `TAncestor`

#### Inherited from

[Group](/apidocs/classes/Group.md).[getParent](/apidocs/classes/Group.md#getparent)

#### Defined in

[src/shapes/Object/StackedObject.ts:51](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L51)

___

### getPointByOrigin

**getPointByOrigin**(`originX`, `originY`): [`Point`](/apidocs/classes/Point.md)

Returns the coordinates of the object as if it has a different origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[getPointByOrigin](/apidocs/classes/Group.md#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:194](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L194)

___

### getRelativeCenterPoint

**getRelativeCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[getRelativeCenterPoint](/apidocs/classes/Group.md#getrelativecenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:180](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L180)

___

### getRelativeX

**getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/apidocs/classes/FabricObject.md#getx)

#### Inherited from

[Group](/apidocs/classes/Group.md).[getRelativeX](/apidocs/classes/Group.md#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:118](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L118)

___

### getRelativeXY

**getRelativeXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x,y position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

[Group](/apidocs/classes/Group.md).[getRelativeXY](/apidocs/classes/Group.md#getrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:179](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L179)

___

### getRelativeY

**getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/apidocs/classes/FabricObject.md#gety)

#### Inherited from

[Group](/apidocs/classes/Group.md).[getRelativeY](/apidocs/classes/Group.md#getrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:134](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L134)

___

### getScaledHeight

**getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

**`Todo`**

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[Group](/apidocs/classes/Group.md).[getScaledHeight](/apidocs/classes/Group.md#getscaledheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:423](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L423)

___

### getScaledWidth

**getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

**`Todo`**

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[Group](/apidocs/classes/Group.md).[getScaledWidth](/apidocs/classes/Group.md#getscaledwidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:414](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L414)

___

### getSvgCommons

**getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> & \{ `id?`: `string`  } |

#### Returns

`string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[getSvgCommons](/apidocs/classes/Group.md#getsvgcommons)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

___

### getSvgFilter

**getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[getSvgFilter](/apidocs/classes/Group.md#getsvgfilter)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

___

### getSvgStyles

**getSvgStyles**(): `string`

Returns styles-string for svg-export, specific version for group

#### Returns

`string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[getSvgStyles](/apidocs/classes/Group.md#getsvgstyles)

#### Defined in

[src/shapes/Group.ts:1056](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L1056)

___

### getSvgTransform

**getSvgTransform**(`this`, `full?`, `additionalTransform?`): `string`

Returns transform-string for svg-export

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` |
| `full?` | `boolean` | `undefined` |
| `additionalTransform` | `string` | `''` |

#### Returns

`string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[getSvgTransform](/apidocs/classes/Group.md#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

**getTotalAngle**(): [`TDegree`](/apidocs/modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[Group](/apidocs/classes/Group.md).[getTotalAngle](/apidocs/classes/Group.md#gettotalangle)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:470](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L470)

___

### getTotalObjectScaling

**getTotalObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/apidocs/classes/Point.md)

object with scaleX and scaleY properties

#### Inherited from

[Group](/apidocs/classes/Group.md).[getTotalObjectScaling](/apidocs/classes/Group.md#gettotalobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:646](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L646)

___

### getViewportTransform

**getViewportTransform**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

Retrieves viewportTransform from Object's canvas if possible

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

**`Method`**

getViewportTransform

**`Member Of`**

FabricObject.prototype

#### Inherited from

[Group](/apidocs/classes/Group.md).[getViewportTransform](/apidocs/classes/Group.md#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:482](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L482)

___

### getX

**getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

[Group](/apidocs/classes/Group.md).[getX](/apidocs/classes/Group.md#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:89](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L89)

___

### getXY

**getXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

[Group](/apidocs/classes/Group.md).[getXY](/apidocs/classes/Group.md#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:149](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L149)

___

### getY

**getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

[Group](/apidocs/classes/Group.md).[getY](/apidocs/classes/Group.md#gety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:103](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L103)

___

### hasCommonAncestors

**hasCommonAncestors**\<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActiveSelection`](/apidocs/classes/ActiveSelection.md)\<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[hasCommonAncestors](/apidocs/classes/Group.md#hascommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:168](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L168)

___

### hasFill

**hasFill**(): ``null`` \| `boolean` \| ``""``

return true if the object will draw a fill
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when fill happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the fill is invisible.

#### Returns

``null`` \| `boolean` \| ``""``

Boolean

**`Since`**

3.0.0

#### Inherited from

[Group](/apidocs/classes/Group.md).[hasFill](/apidocs/classes/Group.md#hasfill)

#### Defined in

[src/shapes/Object/Object.ts:831](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L831)

___

### hasStroke

**hasStroke**(): ``null`` \| `boolean` \| ``""``

return true if the object will draw a stroke
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when stroke happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the stroke is invisible.

#### Returns

``null`` \| `boolean` \| ``""``

Boolean

**`Since`**

3.0.0

#### Inherited from

[Group](/apidocs/classes/Group.md).[hasStroke](/apidocs/classes/Group.md#hasstroke)

#### Defined in

[src/shapes/Object/Object.ts:815](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L815)

___

### insertAt

**insertAt**(`index`, `...objects`): `number`

Inserts an object into collection at specified index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index to insert object at |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | Object to insert |

#### Returns

`number`

#### Inherited from

[Group](/apidocs/classes/Group.md).[insertAt](/apidocs/classes/Group.md#insertat)

#### Defined in

[src/shapes/Group.ts:252](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L252)

___

### intersectsWithObject

**intersectsWithObject**(`other`, `calculate?`): `boolean`

Checks if object intersects with another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of calculating them |

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[Group](/apidocs/classes/Group.md).[intersectsWithObject](/apidocs/classes/Group.md#intersectswithobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:260](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L260)

___

### intersectsWithRect

**intersectsWithRect**(`pointTL`, `pointBR`, `calculate?`): `boolean`

Checks if object intersects with an area formed by 2 points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](/apidocs/classes/Point.md) | top-left point of area |
| `pointBR` | [`Point`](/apidocs/classes/Point.md) | bottom-right point of area |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object intersects with an area formed by 2 points

#### Inherited from

[Group](/apidocs/classes/Group.md).[intersectsWithRect](/apidocs/classes/Group.md#intersectswithrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:239](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L239)

___

### isCacheDirty

**isCacheDirty**(`skipCanvas?`): `boolean`

Check if cache is dirty

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `skipCanvas` | `boolean` | `false` | skip canvas checks because this object is painted on parent canvas. |

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[isCacheDirty](/apidocs/classes/Group.md#iscachedirty)

#### Defined in

[src/shapes/Object/Object.ts:976](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L976)

___

### isContainedWithinObject

**isContainedWithinObject**(`other`, `calculate?`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[Group](/apidocs/classes/Group.md).[isContainedWithinObject](/apidocs/classes/Group.md#iscontainedwithinobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:281](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L281)

___

### isContainedWithinRect

**isContainedWithinRect**(`pointTL`, `pointBR`, `calculate?`): `boolean`

Checks if object is fully contained within area formed by 2 points, aligned with scene axis.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](/apidocs/classes/Point.md) | top-left point of area |
| `pointBR` | [`Point`](/apidocs/classes/Point.md) | bottom-right point of area |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object is fully contained within area formed by 2 points

#### Inherited from

[Group](/apidocs/classes/Group.md).[isContainedWithinRect](/apidocs/classes/Group.md#iscontainedwithinrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:294](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L294)

___

### isControlVisible

**isControlVisible**(`controlKey`): `boolean`

Returns true if the specified control is visible, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlKey` | `string` | The key of the control. Possible values are usually 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr', but since the control api allow for any control name, can be any string. |

#### Returns

`boolean`

true if the specified control is visible, false otherwise

#### Inherited from

[Group](/apidocs/classes/Group.md).[isControlVisible](/apidocs/classes/Group.md#iscontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:539](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L539)

___

### isDescendantOf

**isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [Group.contains](/apidocs/classes/StaticCanvas.md#contains) or [StaticCanvas.contains](/apidocs/classes/StaticCanvas.md#contains) for performance reasons

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TAncestor` |

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[isDescendantOf](/apidocs/classes/Group.md#isdescendantof)

#### Defined in

[src/shapes/Object/StackedObject.ts:64](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L64)

___

### isEmpty

**isEmpty**(): `boolean`

Returns true if collection contains no objects

#### Returns

`boolean`

true if collection is empty

#### Inherited from

[Group](/apidocs/classes/Group.md).[isEmpty](/apidocs/classes/Group.md#isempty)

#### Defined in

[src/Collection.ts:120](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L120)

___

### isInFrontOf

**isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActiveSelection`](/apidocs/classes/ActiveSelection.md)\<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[Group](/apidocs/classes/Group.md).[isInFrontOf](/apidocs/classes/Group.md#isinfrontof)

#### Defined in

[src/shapes/Object/StackedObject.ts:178](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/StackedObject.ts#L178)

___

### isNotVisible

**isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[isNotVisible](/apidocs/classes/Group.md#isnotvisible)

#### Defined in

[src/shapes/Object/Object.ts:738](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L738)

___

### isOnACache

**isOnACache**(): `boolean`

Check if this group or its parent group are caching, recursively up

#### Returns

`boolean`

#### Overrides

[Group](/apidocs/classes/Group.md).[isOnACache](/apidocs/classes/Group.md#isonacache)

#### Defined in

[src/shapes/ActiveSelection.ts:192](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L192)

___

### isOnScreen

**isOnScreen**(`calculate?`): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of .aCoords |

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

[Group](/apidocs/classes/Group.md).[isOnScreen](/apidocs/classes/Group.md#isonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:332](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L332)

___

### isOverlapping

**isOverlapping**\<`T`\>(`other`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[isOverlapping](/apidocs/classes/Group.md#isoverlapping)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:308](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L308)

___

### isPartiallyOnScreen

**isPartiallyOnScreen**(`calculate?`): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `calculate?` | `boolean` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[Group](/apidocs/classes/Group.md).[isPartiallyOnScreen](/apidocs/classes/Group.md#ispartiallyonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L381)

___

### isType

**isType**(`...types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `...types` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[isType](/apidocs/classes/Group.md#istype)

#### Defined in

[src/shapes/Object/Object.ts:1466](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1466)

___

### item

**item**(`index`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

Returns object at specified index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

object at index

#### Inherited from

[Group](/apidocs/classes/Group.md).[item](/apidocs/classes/Group.md#item)

#### Defined in

[src/Collection.ts:112](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L112)

___

### moveObjectTo

**moveObjectTo**(`object`, `index`): `boolean`

Moves an object to specified level in stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `index` | `number` | Position to move to |

#### Returns

`boolean`

true if change occurred

#### Inherited from

[Group](/apidocs/classes/Group.md).[moveObjectTo](/apidocs/classes/Group.md#moveobjectto)

#### Defined in

[src/Collection.ts:254](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L254)

___

### multiSelectAdd

**multiSelectAdd**(`...targets`): `void`

Adds objects with respect to [multiSelectionStacking](/apidocs/classes/ActiveSelection.md#multiselectionstacking)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...targets` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | object to add to selection |

#### Returns

`void`

#### Defined in

[src/shapes/ActiveSelection.ts:60](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L60)

___

### needsItsOwnCache

**needsItsOwnCache**(): `boolean`

When set to `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Inherited from

[Group](/apidocs/classes/Group.md).[needsItsOwnCache](/apidocs/classes/Group.md#needsitsowncache)

#### Defined in

[src/shapes/Object/Object.ts:843](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L843)

___

### off

**off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`GroupEvents`](/apidocs/interfaces/GroupEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[off](/apidocs/classes/Group.md#off)

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L120)

**off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`\<[`GroupEvents`](/apidocs/interfaces/GroupEvents.md)\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[off](/apidocs/classes/Group.md#off)

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L125)

**off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[off](/apidocs/classes/Group.md#off)

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L129)

___

### on

**on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`GroupEvents`](/apidocs/interfaces/GroupEvents.md) |
| `E` | extends [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  } \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](/apidocs/interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`Canvas`](/apidocs/classes/Canvas.md) \| [`Group`](/apidocs/classes/Group.md) \| [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<[`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)\>  } \| \{ `target`: [`Canvas`](/apidocs/classes/Canvas.md) \| [`Group`](/apidocs/classes/Group.md) \| [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<[`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)\>  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `context`: [`LayoutContext`](/apidocs/modules.md#layoutcontext) ; `diff`: [`Point`](/apidocs/classes/Point.md) ; `result`: [`LayoutResult`](/apidocs/modules.md#layoutresult)  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

on

#### Inherited from

[Group](/apidocs/classes/Group.md).[on](/apidocs/classes/Group.md#on)

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L23)

**on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<[`GroupEvents`](/apidocs/interfaces/GroupEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

[Group](/apidocs/classes/Group.md).[on](/apidocs/classes/Group.md#on)

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L27)

___

### onDeselect

**onDeselect**(): `boolean`

If returns true, deselection is cancelled.

#### Returns

`boolean`

[cancel]

**`Since`**

2.0.0

#### Overrides

[Group](/apidocs/classes/Group.md).[onDeselect](/apidocs/classes/Group.md#ondeselect)

#### Defined in

[src/shapes/ActiveSelection.ts:144](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L144)

___

### onLayout

**onLayout**(`context`, `result`): `void`

Hook that is called once layout has completed.
Provided for layout customization, override if necessary.
Complements `getLayoutStrategyResult`, which is called at the beginning of layout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`LayoutContext`](/apidocs/modules.md#layoutcontext) | layout context |
| `result` | [`LayoutResult`](/apidocs/modules.md#layoutresult) | layout result |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[onLayout](/apidocs/classes/Group.md#onlayout)

#### Defined in

[src/shapes/Group.ts:955](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L955)

___

### onSelect

**onSelect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | event if the process is generated by an event |

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[onSelect](/apidocs/classes/Group.md#onselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:627](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L627)

___

### once

**once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`GroupEvents`](/apidocs/interfaces/GroupEvents.md) |
| `E` | extends [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `currentSubTargets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `currentTarget?`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> ; `isClick`: `boolean`  } \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<`WheelEvent`\> \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `InEvent` \| [`TPointerEventInfo`](/apidocs/interfaces/TPointerEventInfo.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & `OutEvent` \| [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `InEvent` \| [`DragEventData`](/apidocs/interfaces/DragEventData.md) & `OutEvent` \| [`DropEventData`](/apidocs/interfaces/DropEventData.md) \| `SimpleEventHandler`\<`Event`\> \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| `Partial`\<[`TEvent`](/apidocs/interfaces/TEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\>\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `target`: [`Canvas`](/apidocs/classes/Canvas.md) \| [`Group`](/apidocs/classes/Group.md) \| [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<[`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)\>  } \| \{ `target`: [`Canvas`](/apidocs/classes/Canvas.md) \| [`Group`](/apidocs/classes/Group.md) \| [`StaticCanvas`](/apidocs/classes/StaticCanvas.md)\<[`StaticCanvasEvents`](/apidocs/interfaces/StaticCanvasEvents.md)\>  } \| \{ `path`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } \| \{ `context`: [`LayoutContext`](/apidocs/modules.md#layoutcontext) ; `diff`: [`Point`](/apidocs/classes/Point.md) ; `result`: [`LayoutResult`](/apidocs/modules.md#layoutresult)  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

once

#### Inherited from

[Group](/apidocs/classes/Group.md).[once](/apidocs/classes/Group.md#once)

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L62)

**once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<[`GroupEvents`](/apidocs/interfaces/GroupEvents.md)\> |

#### Returns

`VoidFunction`

#### Inherited from

[Group](/apidocs/classes/Group.md).[once](/apidocs/classes/Group.md#once)

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/078809453/src/Observable.ts#L66)

___

### prepareBoundingBox

**prepareBoundingBox**\<`T`\>(`layoutDirective`, `objects`, `context`): `any`

Override this method to customize layout.
A wrapper around [Group#getObjectsBoundingBox](/apidocs/classes/Group.md#getobjectsboundingbox)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LayoutStrategy`](/apidocs/modules.md#layoutstrategy) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layoutDirective` | `T` |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |
| `context` | [`LayoutContext`](/apidocs/modules.md#layoutcontext) |

#### Returns

`any`

#### Inherited from

[Group](/apidocs/classes/Group.md).[prepareBoundingBox](/apidocs/classes/Group.md#prepareboundingbox)

#### Defined in

[src/shapes/Group.ts:778](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L778)

___

### prepareInitialBoundingBox

**prepareInitialBoundingBox**\<`T`\>(`layoutDirective`, `objects`, `context`): `undefined` \| \{ `centerX`: `number` = center.x; `centerY`: `number` = center.y; `correctionX`: `number` = correction.x; `correctionY`: `number` = correction.y; `height`: `number` = size.y; `width`: `number` = size.x }

Calculates center taking into account originX, originY while not being sure that width/height are initialized

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LayoutStrategy`](/apidocs/modules.md#layoutstrategy) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layoutDirective` | `T` |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |
| `context` | [`LayoutContext`](/apidocs/modules.md#layoutcontext) |

#### Returns

`undefined` \| \{ `centerX`: `number` = center.x; `centerY`: `number` = center.y; `correctionX`: `number` = correction.x; `correctionY`: `number` = correction.y; `height`: `number` = size.y; `width`: `number` = size.x }

#### Inherited from

[Group](/apidocs/classes/Group.md).[prepareInitialBoundingBox](/apidocs/classes/Group.md#prepareinitialboundingbox)

#### Defined in

[src/shapes/Group.ts:803](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L803)

___

### remove

**remove**(`...objects`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Remove objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

removed objects

#### Inherited from

[Group](/apidocs/classes/Group.md).[remove](/apidocs/classes/Group.md#remove)

#### Defined in

[src/shapes/Group.ts:264](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L264)

___

### removeAll

**removeAll**(): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

Remove all objects

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

removed objects

#### Inherited from

[Group](/apidocs/classes/Group.md).[removeAll](/apidocs/classes/Group.md#removeall)

#### Defined in

[src/shapes/Group.ts:347](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L347)

___

### render

**render**(`ctx`): `void`

Renders instance on a given context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | context to render instance on |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[render](/apidocs/classes/Group.md#render)

#### Defined in

[src/shapes/Group.ts:563](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L563)

___

### renderCache

**renderCache**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[renderCache](/apidocs/classes/Group.md#rendercache)

#### Defined in

[src/shapes/Object/Object.ts:784](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L784)

___

### renderDragSourceEffect

**renderDragSourceEffect**(`e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the source of a drag event
example: render the selection status for the part of text that is being dragged from a text object

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[renderDragSourceEffect](/apidocs/classes/Group.md#renderdragsourceeffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:651](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L651)

___

### renderDropTargetEffect

**renderDropTargetEffect**(`e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the target of a drag event
used to show that the underly object can receive a drop, or to show how the
object will change when dropping. example: show the cursor where the text is about to be dropped

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[renderDropTargetEffect](/apidocs/classes/Group.md#renderdroptargeteffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:664](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L664)

___

### rotate

**rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | [`TDegree`](/apidocs/modules.md#tdegree) | Angle value (in degrees) |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[rotate](/apidocs/classes/Group.md#rotate)

#### Defined in

[src/shapes/Object/Object.ts:1494](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1494)

___

### scale

**scale**(`value`): `void`

Scales an object (equally by x and y)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Scale factor |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[scale](/apidocs/classes/Group.md#scale)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:432](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L432)

___

### scaleToHeight

**scaleToHeight**(`value`): `void`

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | New height value |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[scaleToHeight](/apidocs/classes/Group.md#scaletoheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:455](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L455)

___

### scaleToWidth

**scaleToWidth**(`value`): `void`

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | New width value |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[scaleToWidth](/apidocs/classes/Group.md#scaletowidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:443](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L443)

___

### sendObjectBackwards

**sendObjectBackwards**(`object`, `intersecting?`): `boolean`

Moves an object or a selection down in stack of drawn objects
An optional parameter, `intersecting` allows to move the object in behind
the first intersecting object. Where intersection is calculated with
bounding box. If no intersection is found, there will not be change in the
stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send |
| `intersecting?` | `boolean` | If `true`, send object behind next lower intersecting object |

#### Returns

`boolean`

true if change occurred

#### Inherited from

[Group](/apidocs/classes/Group.md).[sendObjectBackwards](/apidocs/classes/Group.md#sendobjectbackwards)

#### Defined in

[src/Collection.ts:206](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L206)

___

### sendObjectToBack

**sendObjectToBack**(`object`): `boolean`

Moves an object or the objects of a multiple selection
to the bottom of the stack of drawn objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to send to back |

#### Returns

`boolean`

true if change occurred

#### Inherited from

[Group](/apidocs/classes/Group.md).[sendObjectToBack](/apidocs/classes/Group.md#sendobjecttoback)

#### Defined in

[src/Collection.ts:170](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L170)

___

### set

**set**(`key`, `value?`): [`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`\<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[set](/apidocs/classes/Group.md#set)

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L29)

___

### setControlVisible

**setControlVisible**(`controlKey`, `visible`): `void`

Sets the visibility of the specified control.
please do not use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlKey` | `string` | The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'. but since the control api allow for any control name, can be any string. |
| `visible` | `boolean` | true to set the specified control visible, false otherwise |

#### Returns

`void`

**`Todo`**

discuss this overlap of priority here with the team. Andrea Bogazzi for details

#### Inherited from

[Group](/apidocs/classes/Group.md).[setControlVisible](/apidocs/classes/Group.md#setcontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:554](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L554)

___

### setControlsVisibility

**setControlsVisibility**(`options?`): `void`

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`\<`string`, `boolean`\> | with an optional key per control example: {Boolean} [options.bl] true to enable the bottom-left control, false to disable it |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setControlsVisibility](/apidocs/classes/Group.md#setcontrolsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:566](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L566)

___

### setCoords

**setCoords**(): `void`

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setCoords](/apidocs/classes/Group.md#setcoords)

#### Defined in

[src/shapes/Group.ts:553](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L553)

___

### setOnGroup

**setOnGroup**(): `void`

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setOnGroup](/apidocs/classes/Group.md#setongroup)

#### Defined in

[src/shapes/Object/Object.ts:1526](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1526)

___

### setOptions

**setOptions**(`options?`): `void`

Sets object's properties from options, for class constructor only.
Needs to be overridden for different defaults.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`\<`string`, `any`\> | Options object |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setOptions](/apidocs/classes/Group.md#setoptions)

#### Defined in

[src/shapes/Object/Object.ts:495](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L495)

___

### setPositionByOrigin

**setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Sets the position of the object taking into consideration the object's origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Point`](/apidocs/classes/Point.md) | The new position of the object |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setPositionByOrigin](/apidocs/classes/Group.md#setpositionbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:209](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L209)

___

### setRelativeX

**setRelativeX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\ if parent is canvas then this method is identical to [setX](/apidocs/classes/FabricObject.md#setx) |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setRelativeX](/apidocs/classes/Group.md#setrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:126](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L126)

___

### setRelativeXY

**setRelativeXY**(`point`, `originX?`, `originY?`): `void`

As [setXY](/apidocs/classes/FabricObject.md#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | position according to object's originX originY properties in parent's coordinate plane |
| `originX?` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setRelativeXY](/apidocs/classes/Group.md#setrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:189](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L189)

___

### setRelativeY

**setRelativeY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\ if parent is canvas then this property is identical to [setY](/apidocs/classes/FabricObject.md#sety) |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setRelativeY](/apidocs/classes/Group.md#setrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:142](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L142)

___

### setX

**setX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setX](/apidocs/classes/Group.md#setx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:96](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L96)

___

### setXY

**setXY**(`point`, `originX?`, `originY?`): `void`

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
that otherwise are the object's current values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | position in canvas coordinate plane |
| `originX?` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

**`Example`**

Set object's bottom left corner to point (5,5) on canvas
```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

[Group](/apidocs/classes/Group.md).[setXY](/apidocs/classes/Group.md#setxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:166](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L166)

___

### setY

**setY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[setY](/apidocs/classes/Group.md#sety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:110](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L110)

___

### shouldCache

**shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.

#### Returns

`boolean`

#### Overrides

[Group](/apidocs/classes/Group.md).[shouldCache](/apidocs/classes/Group.md#shouldcache)

#### Defined in

[src/shapes/ActiveSelection.ts:184](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L184)

___

### size

**size**(): `number`

Returns a size of a collection (i.e: length of an array containing its objects)

#### Returns

`number`

Collection size

#### Inherited from

[Group](/apidocs/classes/Group.md).[size](/apidocs/classes/Group.md#size)

#### Defined in

[src/Collection.ts:128](https://github.com/fabricjs/fabric.js/blob/078809453/src/Collection.ts#L128)

___

### strokeBorders

**strokeBorders**(`ctx`, `size`): `void`

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | ctx is rotated and translated so that (0,0) is at object's center |
| `size` | [`Point`](/apidocs/classes/Point.md) | the control box size used |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[strokeBorders](/apidocs/classes/Group.md#strokeborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:366](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/InteractiveObject.ts#L366)

___

### toCanvasElement

**toCanvasElement**(`options?`): `HTMLCanvasElement`

Converts an object into a HTMLCanvas element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | Options object |

#### Returns

`HTMLCanvasElement`

Returns DOM element <canvas> with the FabricObject

#### Inherited from

[Group](/apidocs/classes/Group.md).[toCanvasElement](/apidocs/classes/Group.md#tocanvaselement)

#### Defined in

[src/shapes/Object/Object.ts:1359](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1359)

___

### toClipPathSVG

**toClipPathSVG**(`reviver?`): `string`

Returns svg clipPath representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[Group](/apidocs/classes/Group.md).[toClipPathSVG](/apidocs/classes/Group.md#toclippathsvg)

#### Defined in

[src/shapes/Group.ts:1070](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L1070)

___

### toDataURL

**toDataURL**(`options?`): `string`

Converts an object into a data-url-like string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | Options object |

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

[Group](/apidocs/classes/Group.md).[toDataURL](/apidocs/classes/Group.md#todataurl)

#### Defined in

[src/shapes/Object/Object.ts:1453](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1453)

___

### toDatalessObject

**toDatalessObject**(`propertiesToInclude?`): `any`

Returns (dataless) object representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `any`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

Object representation of an instance

#### Inherited from

[Group](/apidocs/classes/Group.md).[toDatalessObject](/apidocs/classes/Group.md#todatalessobject)

#### Defined in

[src/shapes/Object/Object.ts:581](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L581)

___

### toJSON

**toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[Group](/apidocs/classes/Group.md).[toJSON](/apidocs/classes/Group.md#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1485](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1485)

___

### toObject

**toObject**\<`T`, `K`\>(`propertiesToInclude?`): `Pick`\<`T`, `K`\> & [`SerializedGroupProps`](/apidocs/interfaces/SerializedGroupProps.md)

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`\<[`GroupProps`](/apidocs/interfaces/GroupProps.md) & [`TClassProperties`](/apidocs/modules.md#tclassproperties)\<[`ActiveSelection`](/apidocs/classes/ActiveSelection.md)\>, keyof [`SerializedGroupProps`](/apidocs/interfaces/SerializedGroupProps.md)\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedGroupProps`](/apidocs/interfaces/SerializedGroupProps.md)

object representation of an instance

#### Inherited from

[Group](/apidocs/classes/Group.md).[toObject](/apidocs/classes/Group.md#toobject)

#### Defined in

[src/shapes/Group.ts:988](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L988)

___

### toSVG

**toSVG**(`this`, `reviver?`): `string`

Returns svg representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[Group](/apidocs/classes/Group.md).[toSVG](/apidocs/classes/Group.md#tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

**toString**(): `string`

Returns string representation of a group

#### Returns

`string`

#### Overrides

[Group](/apidocs/classes/Group.md).[toString](/apidocs/classes/Group.md#tostring)

#### Defined in

[src/shapes/ActiveSelection.ts:172](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/ActiveSelection.ts#L172)

___

### toggle

**toggle**(`property`): [`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`ActiveSelection`](/apidocs/classes/ActiveSelection.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[toggle](/apidocs/classes/Group.md#toggle)

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/078809453/src/CommonMethods.ts#L46)

___

### transform

**transform**(`ctx`): `void`

Transforms context when rendering an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[transform](/apidocs/classes/Group.md#transform)

#### Defined in

[src/shapes/Object/Object.ts:503](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L503)

___

### transformMatrixKey

**transformMatrixKey**(`skipGroup?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skipGroup` | `boolean` | `false` |

#### Returns

`string`

#### Inherited from

[Group](/apidocs/classes/Group.md).[transformMatrixKey](/apidocs/classes/Group.md#transformmatrixkey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:520](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectGeometry.ts#L520)

___

### translateToCenterPoint

**translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/apidocs/classes/Point.md)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | The point which corresponds to the originX and originY params |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[translateToCenterPoint](/apidocs/classes/Group.md#translatetocenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:122](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L122)

___

### translateToGivenOrigin

**translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/apidocs/classes/Point.md)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | The point which corresponds to the originX and originY params |
| `fromOriginX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `fromOriginY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |
| `toOriginX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `toOriginY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[translateToGivenOrigin](/apidocs/classes/Group.md#translatetogivenorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:94](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L94)

___

### translateToOriginPoint

**translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/apidocs/classes/Point.md)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Point`](/apidocs/classes/Point.md) | The point which corresponds to center of the object |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[Group](/apidocs/classes/Group.md).[translateToOriginPoint](/apidocs/classes/Group.md#translatetooriginpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:147](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/ObjectOrigin.ts#L147)

___

### triggerLayout

**triggerLayout**\<`T`\>(`context?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LayoutStrategy`](/apidocs/modules.md#layoutstrategy) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context?` | `Partial`\<[`LayoutResult`](/apidocs/modules.md#layoutresult)\> & \{ `layout?`: `T`  } | pass values to use for layout calculations |

#### Returns

`void`

#### Inherited from

[Group](/apidocs/classes/Group.md).[triggerLayout](/apidocs/classes/Group.md#triggerlayout)

#### Defined in

[src/shapes/Group.ts:573](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L573)

___

### willDrawShadow

**willDrawShadow**(): `boolean`

Check if this object or a child object will cast a shadow

#### Returns

`boolean`

#### Inherited from

[Group](/apidocs/classes/Group.md).[willDrawShadow](/apidocs/classes/Group.md#willdrawshadow)

#### Defined in

[src/shapes/Group.ts:506](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L506)

___

### \_fromObject

**_fromObject**\<`S`\>(`object`, `«destructured»?`): `Promise`\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Record`\<`string`, `unknown`\> |
| `«destructured»` | [`Abortable`](/apidocs/modules.md#abortable) & \{ `extraParam?`: `string`  } |

#### Returns

`Promise`\<`S`\>

#### Inherited from

[Group](/apidocs/classes/Group.md).[_fromObject](/apidocs/classes/Group.md#_fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1564](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Object/Object.ts#L1564)

___

### fromObject

**fromObject**\<`T`\>(`object`): `Promise`\<[`Group`](/apidocs/classes/Group.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`SerializedGroupProps`](/apidocs/interfaces/SerializedGroupProps.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | Object to create a group from |

#### Returns

`Promise`\<[`Group`](/apidocs/classes/Group.md)\>

**`Todo`**

support loading from svg

**`Static`**

**`Member Of`**

Group

#### Inherited from

[Group](/apidocs/classes/Group.md).[fromObject](/apidocs/classes/Group.md#fromobject)

#### Defined in

[src/shapes/Group.ts:1090](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L1090)

___

### getDefaults

**getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[Group](/apidocs/classes/Group.md).[getDefaults](/apidocs/classes/Group.md#getdefaults)

#### Defined in

[src/shapes/Group.ts:157](https://github.com/fabricjs/fabric.js/blob/078809453/src/shapes/Group.ts#L157)
