# Class: Triangle\<Props, SProps, EventSpec\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> = `Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> |
| `SProps` | extends [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md) = [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

## Hierarchy

- [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Props`, `SProps`, `EventSpec`\>

  ↳ **`Triangle`**

## Implements

- [`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)

## Constructors

### constructor

**new Triangle**\<`Props`, `SProps`, `EventSpec`\>(`options?`): [`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> = `Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\> |
| `SProps` | extends [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md) = [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md) |
| `EventSpec` | extends [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\<`EventSpec`\> = [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Props` | Options object |

#### Returns

[`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[constructor](/apidocs/classes/FabricObject.md#constructor)

#### Defined in

[src/shapes/Object/Object.ts:307](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L307)

## Properties

### \_\_corner

 `Optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[__corner](/apidocs/classes/FabricObject.md#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:104](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L104)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_cacheCanvas](/apidocs/classes/FabricObject.md#_cachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:185](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L185)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_cacheContext](/apidocs/classes/FabricObject.md#_cachecontext)

#### Defined in

[src/shapes/Object/Object.ts:174](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L174)

___

### \_controlsVisibility

 **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_controlsVisibility](/apidocs/classes/FabricObject.md#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:111](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L111)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_scaling](/apidocs/classes/FabricObject.md#_scaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:133](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L133)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_transformDone](/apidocs/classes/FabricObject.md#_transformdone)

#### Defined in

[src/shapes/Object/Object.ts:265](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L265)

___

### aCoords

 **aCoords**: [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](/apidocs/classes/Triangle.md#setcoords).
You can calculate them without updating with [()](/apidocs/classes/Triangle.md#calcacoords)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[aCoords](/apidocs/classes/FabricObject.md#acoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L50)

___

### absolutePositioned

 **absolutePositioned**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will have its top and left relative to canvas, and will
not be influenced by the object transform. This will make the clipPath relative
to the canvas, but clipping just a particular object.
WARNING this is beta, this feature may change or be renamed.
since 2.4.0

**`Default`**

```ts
false
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[absolutePositioned](/apidocs/interfaces/FabricObjectProps.md#absolutepositioned)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[absolutePositioned](/apidocs/classes/FabricObject.md#absolutepositioned)

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L137)

___

### activeOn

 **activeOn**: ``"down"`` \| ``"up"``

When 'down', object is set to active on mousedown/touchstart
When 'up', object is set to active on mouseup/touchend
Experimental. Let's see if this breaks anything before supporting officially

since 4.4.0

**`Default`**

```ts
'down'
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[activeOn](/apidocs/interfaces/FabricObjectProps.md#activeon)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[activeOn](/apidocs/classes/FabricObject.md#activeon)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L83)

___

### angle

 **angle**: [`TDegree`](/apidocs/modules.md#tdegree)

Angle of rotation of an object (in degrees)

**`Default`**

```ts
0
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[angle](/apidocs/interfaces/FabricObjectProps.md#angle)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[angle](/apidocs/classes/FabricObject.md#angle)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

 **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[backgroundColor](/apidocs/interfaces/FabricObjectProps.md#backgroundcolor)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[backgroundColor](/apidocs/classes/FabricObject.md#backgroundcolor)

#### Defined in

[src/shapes/Object/Object.ts:124](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L124)

___

### borderColor

 **borderColor**: `string`

Color of controlling borders of an object (when it's active)

**`Default`**

```ts
rgb(178,204,255)
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[borderColor](/apidocs/interfaces/FabricObjectProps.md#bordercolor)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[borderColor](/apidocs/classes/FabricObject.md#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L73)

___

### borderDashArray

 **borderDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

**`Since`**

1.6.2

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[borderDashArray](/apidocs/interfaces/FabricObjectProps.md#borderdasharray)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[borderDashArray](/apidocs/classes/FabricObject.md#borderdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L74)

___

### borderOpacityWhenMoving

 **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

**`Default`**

```ts
0.4
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[borderOpacityWhenMoving](/apidocs/interfaces/FabricObjectProps.md#borderopacitywhenmoving)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[borderOpacityWhenMoving](/apidocs/classes/FabricObject.md#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L75)

___

### borderScaleFactor

 **borderScaleFactor**: `number`

Scale factor of object's controlling borders
bigger number will make a thicker border
border is 1, so this is basically a border thickness
since there is no way to change the border itself.

**`Default`**

```ts
1
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[borderScaleFactor](/apidocs/interfaces/FabricObjectProps.md#borderscalefactor)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[borderScaleFactor](/apidocs/classes/FabricObject.md#borderscalefactor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L76)

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

[FabricObject](/apidocs/classes/FabricObject.md).[cacheHeight](/apidocs/classes/FabricObject.md#cacheheight)

#### Defined in

[src/shapes/Object/Object.ts:203](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L203)

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

[FabricObject](/apidocs/classes/FabricObject.md).[cacheTranslationX](/apidocs/classes/FabricObject.md#cachetranslationx)

#### Defined in

[src/shapes/Object/Object.ts:230](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L230)

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

[FabricObject](/apidocs/classes/FabricObject.md).[cacheTranslationY](/apidocs/classes/FabricObject.md#cachetranslationy)

#### Defined in

[src/shapes/Object/Object.ts:239](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L239)

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

[FabricObject](/apidocs/classes/FabricObject.md).[cacheWidth](/apidocs/classes/FabricObject.md#cachewidth)

#### Defined in

[src/shapes/Object/Object.ts:194](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L194)

___

### canvas

 `Optional` **canvas**: [`Canvas`](/apidocs/classes/Canvas.md)

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[canvas](/apidocs/interfaces/FabricObjectProps.md#canvas)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[canvas](/apidocs/classes/FabricObject.md#canvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L135)

___

### centeredRotation

 **centeredRotation**: `boolean`

When `true` the object will rotate on its center.
When `false` will rotate around the origin point defined by originX and originY.
The value of this property is IGNORED during a transform if the canvas has already
centeredRotation set to `true`
The object method `rotate` will always consider this property and never the canvas's one.

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[centeredRotation](/apidocs/interfaces/FabricObjectProps.md#centeredrotation)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[centeredRotation](/apidocs/classes/FabricObject.md#centeredrotation)

#### Defined in

[src/shapes/Object/Object.ts:138](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L138)

___

### centeredScaling

 **centeredScaling**: `boolean`

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

**`Since`**

1.3.4

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[centeredScaling](/apidocs/interfaces/FabricObjectProps.md#centeredscaling)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[centeredScaling](/apidocs/classes/FabricObject.md#centeredscaling)

#### Defined in

[src/shapes/Object/Object.ts:139](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L139)

___

### clipPath

 `Optional` **clipPath**: `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[clipPath](/apidocs/interfaces/FabricObjectProps.md#clippath)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[clipPath](/apidocs/classes/FabricObject.md#clippath)

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L135)

___

### clipPathId

 `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[clipPathId](/apidocs/classes/FabricObject.md#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### controls

 **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[controls](/apidocs/classes/FabricObject.md#controls)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:117](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L117)

___

### cornerColor

 **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

**`Default`**

```ts
rgb(178,204,255)
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerColor](/apidocs/interfaces/FabricObjectProps.md#cornercolor)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerColor](/apidocs/classes/FabricObject.md#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L67)

___

### cornerDashArray

 **cornerDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

**`Since`**

1.6.2

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerDashArray](/apidocs/interfaces/FabricObjectProps.md#cornerdasharray)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerDashArray](/apidocs/classes/FabricObject.md#cornerdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L70)

___

### cornerSize

 **cornerSize**: `number`

Size of object's controlling corners (in pixels)

**`Default`**

```ts
13
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerSize](/apidocs/interfaces/FabricObjectProps.md#cornersize)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerSize](/apidocs/classes/FabricObject.md#cornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L64)

___

### cornerStrokeColor

 **cornerStrokeColor**: `string`

Color of controlling corners of an object (when it's active and transparentCorners false)

**`Since`**

1.6.2

**`Default`**

```ts
null
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerStrokeColor](/apidocs/interfaces/FabricObjectProps.md#cornerstrokecolor)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerStrokeColor](/apidocs/classes/FabricObject.md#cornerstrokecolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L68)

___

### cornerStyle

 **cornerStyle**: ``"circle"`` \| ``"rect"``

Specify style of control, 'rect' or 'circle'
This is deprecated. In the future there will be a standard control render
And you can swap it with one of the alternative proposed with the control api

**`Since`**

1.6.2

**`Default`**

```ts
rect
```

**`Deprecated`**

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[cornerStyle](/apidocs/interfaces/FabricObjectProps.md#cornerstyle)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cornerStyle](/apidocs/classes/FabricObject.md#cornerstyle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L69)

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

[FabricObject](/apidocs/classes/FabricObject.md).[dirty](/apidocs/classes/FabricObject.md#dirty)

#### Defined in

[src/shapes/Object/Object.ts:164](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L164)

___

### evented

 **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[evented](/apidocs/interfaces/FabricObjectProps.md#evented)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[evented](/apidocs/classes/FabricObject.md#evented)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L81)

___

### excludeFromExport

 **excludeFromExport**: `boolean`

When `true`, object is not exported in OBJECT/JSON

**`Since`**

1.6.3

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[excludeFromExport](/apidocs/interfaces/FabricObjectProps.md#excludefromexport)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[excludeFromExport](/apidocs/classes/FabricObject.md#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:131](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L131)

___

### fill

 **fill**: ``null`` \| `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[fill](/apidocs/interfaces/FabricObjectProps.md#fill)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[fill](/apidocs/classes/FabricObject.md#fill)

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L114)

___

### fillRule

 **fillRule**: `CanvasFillRule`

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

**`Default`**

```ts
nonzero
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[fillRule](/apidocs/interfaces/FabricObjectProps.md#fillrule)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[fillRule](/apidocs/classes/FabricObject.md#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L115)

___

### flipX

 **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

**`Default`**

```ts
false
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[flipX](/apidocs/interfaces/FabricObjectProps.md#flipx)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[flipX](/apidocs/classes/FabricObject.md#flipx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

 **flipY**: `boolean`

When true, an object is rendered as flipped vertically

**`Default`**

```ts
false
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[flipY](/apidocs/interfaces/FabricObjectProps.md#flipy)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[flipY](/apidocs/classes/FabricObject.md#flipy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L22)

___

### globalCompositeOperation

 **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[globalCompositeOperation](/apidocs/interfaces/FabricObjectProps.md#globalcompositeoperation)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[globalCompositeOperation](/apidocs/classes/FabricObject.md#globalcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L123)

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

[FabricObject](/apidocs/classes/FabricObject.md).[group](/apidocs/classes/FabricObject.md#group)

#### Defined in

[src/shapes/Object/Object.ts:247](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L247)

___

### hasBorders

 **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[hasBorders](/apidocs/interfaces/FabricObjectProps.md#hasborders)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[hasBorders](/apidocs/classes/FabricObject.md#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L77)

___

### hasControls

 **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[hasControls](/apidocs/interfaces/FabricObjectProps.md#hascontrols)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[hasControls](/apidocs/classes/FabricObject.md#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:71](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L71)

___

### height

 **height**: `number`

Object height

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[height](/apidocs/interfaces/FabricObjectProps.md#height)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[height](/apidocs/classes/FabricObject.md#height)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hoverCursor

 **hoverCursor**: ``null`` \| `string`

Default cursor value used when hovering over this object on canvas

**`Default`**

```ts
null
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[hoverCursor](/apidocs/interfaces/FabricObjectProps.md#hovercursor)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[hoverCursor](/apidocs/classes/FabricObject.md#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L85)

___

### includeDefaultValues

 **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[includeDefaultValues](/apidocs/interfaces/FabricObjectProps.md#includedefaultvalues)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[includeDefaultValues](/apidocs/classes/FabricObject.md#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L130)

___

### inverted

 **inverted**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

**`Default`**

```ts
false
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[inverted](/apidocs/interfaces/FabricObjectProps.md#inverted)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[inverted](/apidocs/classes/FabricObject.md#inverted)

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L136)

___

### isMoving

 `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isMoving](/apidocs/classes/FabricObject.md#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:123](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L123)

___

### left

 **left**: `number`

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](/apidocs/interfaces/FabricObjectProps.md#originx)

**`Default`**

```ts
0
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[left](/apidocs/interfaces/FabricObjectProps.md#left)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[left](/apidocs/classes/FabricObject.md#left)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L18)

___

### lockMovementX

 **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockMovementX](/apidocs/interfaces/FabricObjectProps.md#lockmovementx)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockMovementX](/apidocs/classes/FabricObject.md#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:55](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L55)

___

### lockMovementY

 **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockMovementY](/apidocs/interfaces/FabricObjectProps.md#lockmovementy)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockMovementY](/apidocs/classes/FabricObject.md#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:56](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L56)

___

### lockRotation

 **lockRotation**: `boolean`

When `true`, object rotation is locked

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockRotation](/apidocs/interfaces/FabricObjectProps.md#lockrotation)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockRotation](/apidocs/classes/FabricObject.md#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L57)

___

### lockScalingFlip

 **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockScalingFlip](/apidocs/interfaces/FabricObjectProps.md#lockscalingflip)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockScalingFlip](/apidocs/classes/FabricObject.md#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:62](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L62)

___

### lockScalingX

 **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockScalingX](/apidocs/interfaces/FabricObjectProps.md#lockscalingx)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockScalingX](/apidocs/classes/FabricObject.md#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L58)

___

### lockScalingY

 **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockScalingY](/apidocs/interfaces/FabricObjectProps.md#lockscalingy)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockScalingY](/apidocs/classes/FabricObject.md#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:59](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L59)

___

### lockSkewingX

 **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockSkewingX](/apidocs/interfaces/FabricObjectProps.md#lockskewingx)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockSkewingX](/apidocs/classes/FabricObject.md#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L60)

___

### lockSkewingY

 **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[lockSkewingY](/apidocs/interfaces/FabricObjectProps.md#lockskewingy)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[lockSkewingY](/apidocs/classes/FabricObject.md#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L61)

___

### matrixCache

 `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[matrixCache](/apidocs/classes/FabricObject.md#matrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L60)

___

### minScaleLimit

 **minScaleLimit**: `number`

Minimum allowed scale value of an object

**`Default`**

```ts
0
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[minScaleLimit](/apidocs/interfaces/FabricObjectProps.md#minscalelimit)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[minScaleLimit](/apidocs/classes/FabricObject.md#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:109](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L109)

___

### moveCursor

 **moveCursor**: ``null`` \| `string`

Default cursor value used when moving this object on canvas

**`Default`**

```ts
null
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[moveCursor](/apidocs/interfaces/FabricObjectProps.md#movecursor)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[moveCursor](/apidocs/classes/FabricObject.md#movecursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L86)

___

### noScaleCache

 **noScaleCache**: `boolean`

When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
too much and will be redrawn with correct details at the end of scaling.
this setting is performance and application dependant.
default to true
since 1.7.0

**`Default`**

```ts
true
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[noScaleCache](/apidocs/interfaces/FabricObjectProps.md#noscalecache)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[noScaleCache](/apidocs/classes/FabricObject.md#noscalecache)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L50)

___

### oCoords

 **oCoords**: `Record`\<`string`, `TOCoord`\>

The object's controls' position in viewport coordinates
Calculated by [Control#positionHandler](/apidocs/classes/Control.md#positionhandler) and [Control#calcCornerCoords](/apidocs/classes/Control.md#calccornercoords), depending on [padding](/apidocs/classes/FabricObject.md#padding).
`corner/touchCorner` describe the 4 points forming the interactive area of the corner.
Used to draw and locate controls.

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[oCoords](/apidocs/classes/FabricObject.md#ocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L94)

___

### objectCaching

 **objectCaching**: `boolean`

When `true`, object is cached on an additional canvas.
When `false`, object is not cached unless necessary ( clipPath )
default to true

**`Since`**

1.7.0

**`Default`**

```ts
true
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[objectCaching](/apidocs/interfaces/FabricObjectProps.md#objectcaching)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[objectCaching](/apidocs/classes/FabricObject.md#objectcaching)

#### Defined in

[src/shapes/Object/Object.ts:133](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L133)

___

### opacity

 **opacity**: `number`

Opacity of an object

**`Default`**

```ts
1
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[opacity](/apidocs/interfaces/FabricObjectProps.md#opacity)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[opacity](/apidocs/classes/FabricObject.md#opacity)

#### Defined in

[src/shapes/Object/Object.ts:111](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L111)

___

### originX

 **originX**: [`TOriginX`](/apidocs/modules.md#toriginx)

Horizontal origin of transformation of an object (`left`, `center`, `right`  or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'left'
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[originX](/apidocs/interfaces/FabricObjectProps.md#originx)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[originX](/apidocs/classes/FabricObject.md#originx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

 **originY**: [`TOriginY`](/apidocs/modules.md#toriginy)

Vertical origin of transformation of an object (`top`, `center`, `bottom` or `[0, 1]`)
See http://jsfiddle.net/1ow02gea/244/ on how originX/originY affect objects in groups

**`Default`**

```ts
'top'
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[originY](/apidocs/interfaces/FabricObjectProps.md#originy)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[originY](/apidocs/classes/FabricObject.md#originy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L28)

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

[FabricObject](/apidocs/classes/FabricObject.md).[ownCaching](/apidocs/classes/FabricObject.md#owncaching)

#### Defined in

[src/shapes/Object/Object.ts:256](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L256)

___

### ownMatrixCache

 `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[ownMatrixCache](/apidocs/classes/FabricObject.md#ownmatrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:55](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L55)

___

### padding

 **padding**: `number`

Padding between object and its controlling borders (in pixels)

**`Default`**

```ts
0
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[padding](/apidocs/interfaces/FabricObjectProps.md#padding)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[padding](/apidocs/classes/FabricObject.md#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:40](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L40)

___

### paintFirst

 **paintFirst**: ``"fill"`` \| ``"stroke"``

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[paintFirst](/apidocs/interfaces/FabricObjectProps.md#paintfirst)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[paintFirst](/apidocs/classes/FabricObject.md#paintfirst)

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L113)

___

### parent

 `Optional` **parent**: [`Group`](/apidocs/classes/Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[parent](/apidocs/classes/FabricObject.md#parent)

#### Defined in

[src/shapes/Object/StackedObject.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L44)

___

### perPixelTargetFind

 **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[perPixelTargetFind](/apidocs/interfaces/FabricObjectProps.md#perpixeltargetfind)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[perPixelTargetFind](/apidocs/classes/FabricObject.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L82)

___

### scaleX

 **scaleX**: `number`

Object scale factor (horizontal)

**`Default`**

```ts
1
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[scaleX](/apidocs/interfaces/FabricObjectProps.md#scalex)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[scaleX](/apidocs/classes/FabricObject.md#scalex)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

 **scaleY**: `number`

Object scale factor (vertical)

**`Default`**

```ts
1
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[scaleY](/apidocs/interfaces/FabricObjectProps.md#scaley)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[scaleY](/apidocs/classes/FabricObject.md#scaley)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

 **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[selectable](/apidocs/interfaces/FabricObjectProps.md#selectable)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[selectable](/apidocs/classes/FabricObject.md#selectable)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:80](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L80)

___

### selectionBackgroundColor

 **selectionBackgroundColor**: `string`

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

**`Deprecated`**

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[selectionBackgroundColor](/apidocs/interfaces/FabricObjectProps.md#selectionbackgroundcolor)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[selectionBackgroundColor](/apidocs/classes/FabricObject.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L78)

___

### shadow

 **shadow**: ``null`` \| [`Shadow`](/apidocs/classes/Shadow.md)

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[shadow](/apidocs/interfaces/FabricObjectProps.md#shadow)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[shadow](/apidocs/classes/FabricObject.md#shadow)

#### Defined in

[src/shapes/Object/Object.ts:126](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L126)

___

### skewX

 **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[skewX](/apidocs/interfaces/FabricObjectProps.md#skewx)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[skewX](/apidocs/classes/FabricObject.md#skewx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

 **skewY**: `number`

Angle of skew on y axes of an object (in degrees)

**`Default`**

```ts
0
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[skewY](/apidocs/interfaces/FabricObjectProps.md#skewy)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[skewY](/apidocs/classes/FabricObject.md#skewy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

 `Optional` **snapAngle**: [`TDegree`](/apidocs/modules.md#tdegree)

The angle that an object will lock to while rotating.

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[snapAngle](/apidocs/interfaces/FabricObjectProps.md#snapangle)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[snapAngle](/apidocs/classes/FabricObject.md#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L52)

___

### snapThreshold

 `Optional` **snapThreshold**: [`TDegree`](/apidocs/modules.md#tdegree)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[snapThreshold](/apidocs/interfaces/FabricObjectProps.md#snapthreshold)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[snapThreshold](/apidocs/classes/FabricObject.md#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L53)

___

### stroke

 **stroke**: ``null`` \| `string` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[stroke](/apidocs/interfaces/FabricObjectProps.md#stroke)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[stroke](/apidocs/classes/FabricObject.md#stroke)

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L116)

___

### strokeDashArray

 **strokeDashArray**: ``null`` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

**`Default`**

```ts
null;
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeDashArray](/apidocs/interfaces/FabricObjectProps.md#strokedasharray)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeDashArray](/apidocs/classes/FabricObject.md#strokedasharray)

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L117)

___

### strokeDashOffset

 **strokeDashOffset**: `number`

Line offset of an object's stroke

**`Default`**

```ts
0
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeDashOffset](/apidocs/interfaces/FabricObjectProps.md#strokedashoffset)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeDashOffset](/apidocs/classes/FabricObject.md#strokedashoffset)

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L118)

___

### strokeLineCap

 **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

**`Default`**

```ts
butt
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeLineCap](/apidocs/interfaces/FabricObjectProps.md#strokelinecap)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeLineCap](/apidocs/classes/FabricObject.md#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L119)

___

### strokeLineJoin

 **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeLineJoin](/apidocs/interfaces/FabricObjectProps.md#strokelinejoin)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeLineJoin](/apidocs/classes/FabricObject.md#strokelinejoin)

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L120)

___

### strokeMiterLimit

 **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

**`Default`**

```ts
4
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeMiterLimit](/apidocs/interfaces/FabricObjectProps.md#strokemiterlimit)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeMiterLimit](/apidocs/classes/FabricObject.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/Object.ts:121](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L121)

___

### strokeUniform

 **strokeUniform**: `boolean`

When `false`, the stoke width will scale with the object.
When `true`, the stroke will always match the exact pixel size entered for stroke width.
this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
default to false

**`Since`**

2.6.0

**`Default`**

```ts
false
```

**`Default`**

```ts
false
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeUniform](/apidocs/interfaces/FabricObjectProps.md#strokeuniform)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeUniform](/apidocs/classes/FabricObject.md#strokeuniform)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

 **strokeWidth**: `number`

Width of a stroke used to render this object

**`Default`**

```ts
1
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[strokeWidth](/apidocs/interfaces/FabricObjectProps.md#strokewidth)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[strokeWidth](/apidocs/classes/FabricObject.md#strokewidth)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L30)

___

### top

 **top**: `number`

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](/apidocs/interfaces/FabricObjectProps.md#originy)

**`Default`**

```ts
0
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[top](/apidocs/interfaces/FabricObjectProps.md#top)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[top](/apidocs/classes/FabricObject.md#top)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

 **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

**`Default`**

```ts
24
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[touchCornerSize](/apidocs/interfaces/FabricObjectProps.md#touchcornersize)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[touchCornerSize](/apidocs/classes/FabricObject.md#touchcornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L65)

___

### transparentCorners

 **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

**`Default`**

```ts
true
```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[transparentCorners](/apidocs/interfaces/FabricObjectProps.md#transparentcorners)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[transparentCorners](/apidocs/classes/FabricObject.md#transparentcorners)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L66)

___

### visible

 **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[visible](/apidocs/interfaces/FabricObjectProps.md#visible)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[visible](/apidocs/classes/FabricObject.md#visible)

#### Defined in

[src/shapes/Object/Object.ts:128](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L128)

___

### width

 **width**: `number`

Object width

**`Default`**

```ts

```

#### Implementation of

[FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md).[width](/apidocs/interfaces/FabricObjectProps.md#width)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[width](/apidocs/classes/FabricObject.md#width)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:19](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L19)

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

[FabricObject](/apidocs/classes/FabricObject.md).[zoomX](/apidocs/classes/FabricObject.md#zoomx)

#### Defined in

[src/shapes/Object/Object.ts:212](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L212)

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

[FabricObject](/apidocs/classes/FabricObject.md).[zoomY](/apidocs/classes/FabricObject.md#zoomy)

#### Defined in

[src/shapes/Object/Object.ts:221](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L221)

___

### cacheProperties

 `Static` **cacheProperties**: `string`[] = `cacheProperties`

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[cacheProperties](/apidocs/classes/FabricObject.md#cacheproperties)

#### Defined in

[src/shapes/Object/Object.ts:156](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L156)

___

### colorProperties

 `Static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[colorProperties](/apidocs/classes/FabricObject.md#colorproperties)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/AnimatableObject.ts#L20)

___

### ownDefaults

 `Static` **ownDefaults**: `Record`\<`string`, `any`\> = `triangleDefaultValues`

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[ownDefaults](/apidocs/classes/FabricObject.md#owndefaults)

#### Defined in

[src/shapes/Triangle.ts:22](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Triangle.ts#L22)

___

### stateProperties

 `Static` **stateProperties**: `string`[] = `stateProperties`

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[stateProperties](/apidocs/classes/FabricObject.md#stateproperties)

#### Defined in

[src/shapes/Object/Object.ts:147](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L147)

___

### type

 `Static` **type**: `string` = `'Triangle'`

The class type. Used to identify which class this is.
This is used for serialization purposes and internally it can be used
to identify classes. As a developer you could use `instance of Class`
but to avoid importing all the code and blocking tree shaking we try
to avoid doing that.

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[type](/apidocs/classes/FabricObject.md#type)

#### Defined in

[src/shapes/Triangle.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Triangle.ts#L20)

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

FabricObject.type

#### Defined in

[src/shapes/Object/Object.ts:291](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L291)

`set` **type**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

FabricObject.type

#### Defined in

[src/shapes/Object/Object.ts:299](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L299)

## Methods

### \_animate

**_animate**\<`T`\>(`key`, `endValue`, `options?`): [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| [`TRGBColorSource`](/apidocs/modules.md#trgbcolorsource) \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource) \| [`Color`](/apidocs/classes/Color.md) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Property to animate |
| `endValue` | `T` | - |
| `options?` | `Partial`\<[`AnimationOptions`](/apidocs/modules/util.md#animationoptions)\<`T`\>\> | Options object |

#### Returns

[`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_animate](/apidocs/classes/FabricObject.md#_animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/AnimatableObject.ts#L50)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_applyPatternForTransformedGradient](/apidocs/classes/FabricObject.md#_applypatternfortransformedgradient)

#### Defined in

[src/shapes/Object/Object.ts:1259](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1259)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_applyPatternGradientTransform](/apidocs/classes/FabricObject.md#_applypatterngradienttransform)

#### Defined in

[src/shapes/Object/Object.ts:1156](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1156)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_calculateCurrentDimensions](/apidocs/classes/FabricObject.md#_calculatecurrentdimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:553](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L553)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_constrainScale](/apidocs/classes/FabricObject.md#_constrainscale)

#### Defined in

[src/shapes/Object/Object.ts:676](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L676)

___

### \_createBaseClipPathSVGMarkup

**_createBaseClipPathSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | `undefined` |
| `objectMarkup` | `string`[] | `undefined` |
| `«destructured»` | `Object` | `{}` |
| › `additionalTransform?` | `string` | `''` |
| › `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | `undefined` |

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_createBaseClipPathSVGMarkup](/apidocs/classes/FabricObject.md#_createbaseclippathsvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:158](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L158)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_createBaseSVGMarkup](/apidocs/classes/FabricObject.md#_createbasesvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

**_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_createCacheCanvas](/apidocs/classes/FabricObject.md#_createcachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:320](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L320)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_drawBorders](/apidocs/classes/FabricObject.md#_drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:361](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L361)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_drawClipPath](/apidocs/classes/FabricObject.md#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:948](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L948)

___

### \_findCenterFromElement

**_findCenterFromElement**(): [`Point`](/apidocs/classes/Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates

#### Returns

[`Point`](/apidocs/classes/Point.md)

center point from element coordinates

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_findCenterFromElement](/apidocs/classes/FabricObject.md#_findcenterfromelement)

#### Defined in

[src/shapes/Object/Object.ts:1307](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1307)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_findTargetCorner](/apidocs/classes/FabricObject.md#_findtargetcorner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:180](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L180)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_getCacheCanvasDimensions](/apidocs/classes/FabricObject.md#_getcachecanvasdimensions)

#### Defined in

[src/shapes/Object/Object.ts:391](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L391)

___

### \_getLeftTopCoords

**_getLeftTopCoords**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_getLeftTopCoords](/apidocs/classes/FabricObject.md#_getlefttopcoords)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:227](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L227)

___

### \_getNonTransformedDimensions

**_getNonTransformedDimensions**(): [`Point`](/apidocs/classes/Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_getNonTransformedDimensions](/apidocs/classes/FabricObject.md#_getnontransformeddimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:542](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L542)

___

### \_getTransformedDimensions

**_getTransformedDimensions**(`options?`): [`Point`](/apidocs/classes/Point.md)

Calculate object bounding box dimensions from its properties scale, skew.
This bounding box is aligned with object angle and not with canvas axis or screen.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

dimensions

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_getTransformedDimensions](/apidocs/classes/FabricObject.md#_gettransformeddimensions)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L50)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_limitCacheSize](/apidocs/classes/FabricObject.md#_limitcachesize)

#### Defined in

[src/shapes/Object/Object.ts:343](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L343)

___

### \_removeCacheCanvas

**_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_removeCacheCanvas](/apidocs/classes/FabricObject.md#_removecachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:802](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L802)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_removeDefaultValues](/apidocs/classes/FabricObject.md#_removedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:591](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L591)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_removeShadow](/apidocs/classes/FabricObject.md#_removeshadow)

#### Defined in

[src/shapes/Object/Object.ts:1142](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1142)

___

### \_render

**_render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_render](/apidocs/classes/FabricObject.md#_render)

#### Defined in

[src/shapes/Triangle.ts:32](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Triangle.ts#L32)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_renderBackground](/apidocs/classes/FabricObject.md#_renderbackground)

#### Defined in

[src/shapes/Object/Object.ts:1010](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1010)

___

### \_renderControls

**_renderControls**(`ctx`, `styleOverride?`): `void`

Renders controls and borders for the object
the context here is not transformed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `styleOverride?` | `TStyleOverride` | properties to override the object style |

#### Returns

`void`

**`Todo`**

move to interactivity

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_renderControls](/apidocs/classes/FabricObject.md#_rendercontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:387](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L387)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_renderFill](/apidocs/classes/FabricObject.md#_renderfill)

#### Defined in

[src/shapes/Object/Object.ts:1209](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1209)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_renderPaintInOrder](/apidocs/classes/FabricObject.md#_renderpaintinorder)

#### Defined in

[src/shapes/Object/Object.ts:1184](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1184)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_renderStroke](/apidocs/classes/FabricObject.md#_renderstroke)

#### Defined in

[src/shapes/Object/Object.ts:1228](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1228)

___

### \_set

**_set**(`key`, `value`): [`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>

Handles setting values on the instance and handling internal side effects

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_set](/apidocs/classes/FabricObject.md#_set)

#### Defined in

[src/shapes/Object/Object.ts:695](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L695)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setClippingProperties](/apidocs/classes/FabricObject.md#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1088](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1088)

___

### \_setFillStyles

**_setFillStyles**(`ctx`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `«destructured»` | `Pick`\<[`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>, ``"fill"``\> |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_setFillStyles](/apidocs/classes/FabricObject.md#_setfillstyles)

#### Defined in

[src/shapes/Object/Object.ts:1077](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1077)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setLineDash](/apidocs/classes/FabricObject.md#_setlinedash)

#### Defined in

[src/shapes/Object/Object.ts:1100](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1100)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setObject](/apidocs/classes/FabricObject.md#_setobject)

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L18)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setOpacity](/apidocs/classes/FabricObject.md#_setopacity)

#### Defined in

[src/shapes/Object/Object.ts:1027](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1027)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setOptions](/apidocs/classes/FabricObject.md#_setoptions)

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L9)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setShadow](/apidocs/classes/FabricObject.md#_setshadow)

#### Defined in

[src/shapes/Object/Object.ts:1115](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1115)

___

### \_setStrokeStyles

**_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `decl` | `Pick`\<[`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>, ``"strokeDashOffset"`` \| ``"strokeLineCap"`` \| ``"strokeLineJoin"`` \| ``"strokeMiterLimit"`` \| ``"strokeWidth"`` \| ``"stroke"``\> |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_setStrokeStyles](/apidocs/classes/FabricObject.md#_setstrokestyles)

#### Defined in

[src/shapes/Object/Object.ts:1035](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1035)

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

[FabricObject](/apidocs/classes/FabricObject.md).[_setupCompositeOperation](/apidocs/classes/FabricObject.md#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1539](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1539)

___

### \_toSVG

**_toSVG**(): `string`[]

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[_toSVG](/apidocs/classes/FabricObject.md#_tosvg)

#### Defined in

[src/shapes/Triangle.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Triangle.ts#L50)

___

### \_updateCacheCanvas

**_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_updateCacheCanvas](/apidocs/classes/FabricObject.md#_updatecachecanvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:153](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L153)

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

[FabricObject](/apidocs/classes/FabricObject.md).[addPaintOrder](/apidocs/classes/FabricObject.md#addpaintorder)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

___

### animate

**animate**\<`T`\>(`animatable`, `options?`): `Record`\<`string`, [`TAnimation`](/apidocs/modules/util.md#tanimation)\<`T`\>\>

Animates object's properties

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| [`TRGBColorSource`](/apidocs/modules.md#trgbcolorsource) \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource) \| [`Color`](/apidocs/classes/Color.md) \| `number`[] |

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

[FabricObject](/apidocs/classes/FabricObject.md).[animate](/apidocs/classes/FabricObject.md#animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/AnimatableObject.ts#L34)

___

### calcACoords

**calcACoords**(): [`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/apidocs/modules.md#tcornerpoint)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[calcACoords](/apidocs/classes/FabricObject.md#calcacoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:414](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L414)

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

[FabricObject](/apidocs/classes/FabricObject.md).[calcOCoords](/apidocs/classes/FabricObject.md#calcocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:212](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L212)

___

### calcOwnMatrix

**calcOwnMatrix**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

transform matrix for the object

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[calcOwnMatrix](/apidocs/classes/FabricObject.md#calcownmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:511](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L511)

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

[FabricObject](/apidocs/classes/FabricObject.md).[calcTransformMatrix](/apidocs/classes/FabricObject.md#calctransformmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:483](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L483)

___

### canDrop

**canDrop**(`e`): `boolean`

Override to customize drag and drop behavior

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`boolean`

true if the object currently dragged can be dropped on the target

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[canDrop](/apidocs/classes/FabricObject.md#candrop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:646](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L646)

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

[FabricObject](/apidocs/classes/FabricObject.md).[clearContextTop](/apidocs/classes/FabricObject.md#clearcontexttop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:572](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L572)

___

### clone

**clone**(`propertiesToInclude?`): `Promise`\<[`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`\<[`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[clone](/apidocs/classes/FabricObject.md#clone)

#### Defined in

[src/shapes/Object/Object.ts:1316](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1316)

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

[FabricObject](/apidocs/classes/FabricObject.md).[cloneAsImage](/apidocs/classes/FabricObject.md#cloneasimage)

#### Defined in

[src/shapes/Object/Object.ts:1342](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1342)

___

### complexity

**complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance (is 1 unless subclassed)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[complexity](/apidocs/classes/FabricObject.md#complexity)

#### Defined in

[src/shapes/Object/Object.ts:1481](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1481)

___

### containsPoint

**containsPoint**(`point`): `boolean`

Checks if point is inside the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | Point to check against |

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[containsPoint](/apidocs/classes/FabricObject.md#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:269](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L269)

___

### dispose

**dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[dispose](/apidocs/classes/FabricObject.md#dispose)

#### Defined in

[src/shapes/Object/Object.ts:1549](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1549)

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

[FabricObject](/apidocs/classes/FabricObject.md).[drawBorders](/apidocs/classes/FabricObject.md#drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:425](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L425)

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

[FabricObject](/apidocs/classes/FabricObject.md).[drawCacheOnCanvas](/apidocs/classes/FabricObject.md#drawcacheoncanvas)

#### Defined in

[src/shapes/Object/Object.ts:966](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L966)

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

[FabricObject](/apidocs/classes/FabricObject.md).[drawClipPathOnCache](/apidocs/classes/FabricObject.md#drawclippathoncache)

#### Defined in

[src/shapes/Object/Object.ts:895](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L895)

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

[FabricObject](/apidocs/classes/FabricObject.md).[drawControls](/apidocs/classes/FabricObject.md#drawcontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:494](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L494)

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

[FabricObject](/apidocs/classes/FabricObject.md).[drawControlsConnectingLines](/apidocs/classes/FabricObject.md#drawcontrolsconnectinglines)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:464](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L464)

___

### drawObject

**drawObject**(`ctx`, `forClipping?`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `forClipping?` | `boolean` | apply clipping styles |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[drawObject](/apidocs/classes/FabricObject.md#drawobject)

#### Defined in

[src/shapes/Object/Object.ts:927](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L927)

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

[FabricObject](/apidocs/classes/FabricObject.md).[drawSelectionBackground](/apidocs/classes/FabricObject.md#drawselectionbackground)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:327](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L327)

___

### findCommonAncestors

**findCommonAncestors**\<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`\<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |
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

[FabricObject](/apidocs/classes/FabricObject.md).[findCommonAncestors](/apidocs/classes/FabricObject.md#findcommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:90](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L90)

___

### fire

**fire**\<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | `EventSpec`[`K`] | Options object |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[fire](/apidocs/classes/FabricObject.md#fire)

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L159)

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

[FabricObject](/apidocs/classes/FabricObject.md).[forEachControl](/apidocs/classes/FabricObject.md#foreachcontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:305](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L305)

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

[FabricObject](/apidocs/classes/FabricObject.md).[get](/apidocs/classes/FabricObject.md#get)

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L59)

___

### getActiveControl

**getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getActiveControl](/apidocs/classes/FabricObject.md#getactivecontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:165](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L165)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getAncestors](/apidocs/classes/FabricObject.md#getancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:69](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L69)

___

### getBoundingRect

**getBoundingRect**(): [`TBBox`](/apidocs/modules.md#tbbox)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/apidocs/modules.md#tbbox)

Object with left, top, width, height properties

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getBoundingRect](/apidocs/classes/FabricObject.md#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:330](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L330)

___

### getCanvasRetinaScaling

**getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getCanvasRetinaScaling](/apidocs/classes/FabricObject.md#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:387](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L387)

___

### getCenterPoint

**getCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getCenterPoint](/apidocs/classes/FabricObject.md#getcenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:174](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L174)

___

### getCoords

**getCoords**(): [`Point`](/apidocs/classes/Point.md)[]

#### Returns

[`Point`](/apidocs/classes/Point.md)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getCoords](/apidocs/classes/FabricObject.md#getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:191](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L191)

___

### getObjectOpacity

**getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getObjectOpacity](/apidocs/classes/FabricObject.md#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:661](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L661)

___

### getObjectScaling

**getObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getObjectScaling](/apidocs/classes/FabricObject.md#getobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:630](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L630)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getPointByOrigin](/apidocs/classes/FabricObject.md#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:199](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L199)

___

### getRelativeCenterPoint

**getRelativeCenterPoint**(): [`Point`](/apidocs/classes/Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getRelativeCenterPoint](/apidocs/classes/FabricObject.md#getrelativecenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:185](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L185)

___

### getRelativeX

**getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/apidocs/classes/Triangle.md#getx)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getRelativeX](/apidocs/classes/FabricObject.md#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L102)

___

### getRelativeXY

**getRelativeXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x,y position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in parent's coordinate plane

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getRelativeXY](/apidocs/classes/FabricObject.md#getrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:163](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L163)

___

### getRelativeY

**getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/apidocs/classes/Triangle.md#gety)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getRelativeY](/apidocs/classes/FabricObject.md#getrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:118](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L118)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getScaledHeight](/apidocs/classes/FabricObject.md#getscaledheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:348](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L348)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getScaledWidth](/apidocs/classes/FabricObject.md#getscaledwidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:339](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L339)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getSvgCommons](/apidocs/classes/FabricObject.md#getsvgcommons)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getSvgFilter](/apidocs/classes/FabricObject.md#getsvgfilter)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

___

### getSvgStyles

**getSvgStyles**(`this`, `skipShadow?`): `string`

Returns styles-string for svg-export

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `skipShadow?` | `boolean` | a boolean to skip shadow filter output |

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getSvgStyles](/apidocs/classes/FabricObject.md#getsvgstyles)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:21](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L21)

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

[FabricObject](/apidocs/classes/FabricObject.md).[getSvgTransform](/apidocs/classes/FabricObject.md#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

**getTotalAngle**(): [`TDegree`](/apidocs/modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/apidocs/modules.md#tdegree)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getTotalAngle](/apidocs/classes/FabricObject.md#gettotalangle)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:395](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L395)

___

### getTotalObjectScaling

**getTotalObjectScaling**(): [`Point`](/apidocs/classes/Point.md)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/apidocs/classes/Point.md)

object with scaleX and scaleY properties

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getTotalObjectScaling](/apidocs/classes/FabricObject.md#gettotalobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:647](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L647)

___

### getViewportTransform

**getViewportTransform**(): [`TMat2D`](/apidocs/modules.md#tmat2d)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getViewportTransform](/apidocs/classes/FabricObject.md#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:405](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L405)

___

### getX

**getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in canvas coordinate plane

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getX](/apidocs/classes/FabricObject.md#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L73)

___

### getXY

**getXY**(): [`Point`](/apidocs/classes/Point.md)

#### Returns

[`Point`](/apidocs/classes/Point.md)

x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) [originY](/apidocs/classes/FabricObject.md#originy) properties in canvas coordinate plane

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getXY](/apidocs/classes/FabricObject.md#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:133](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L133)

___

### getY

**getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in canvas coordinate plane

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[getY](/apidocs/classes/FabricObject.md#gety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:87](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L87)

___

### hasCommonAncestors

**hasCommonAncestors**\<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[hasCommonAncestors](/apidocs/classes/FabricObject.md#hascommonancestors)

#### Defined in

[src/shapes/Object/StackedObject.ts:159](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L159)

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

[FabricObject](/apidocs/classes/FabricObject.md).[hasFill](/apidocs/classes/FabricObject.md#hasfill)

#### Defined in

[src/shapes/Object/Object.ts:835](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L835)

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

[FabricObject](/apidocs/classes/FabricObject.md).[hasStroke](/apidocs/classes/FabricObject.md#hasstroke)

#### Defined in

[src/shapes/Object/Object.ts:819](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L819)

___

### intersectsWithObject

**intersectsWithObject**(`other`): `boolean`

Checks if object intersects with another object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to test |

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[intersectsWithObject](/apidocs/classes/FabricObject.md#intersectswithobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:219](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L219)

___

### intersectsWithRect

**intersectsWithRect**(`tl`, `br`): `boolean`

Checks if object intersects with the scene rect formed by tl and br

#### Parameters

| Name | Type |
| :------ | :------ |
| `tl` | [`Point`](/apidocs/classes/Point.md) |
| `br` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[intersectsWithRect](/apidocs/classes/FabricObject.md#intersectswithrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:205](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L205)

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

[FabricObject](/apidocs/classes/FabricObject.md).[isCacheDirty](/apidocs/classes/FabricObject.md#iscachedirty)

#### Defined in

[src/shapes/Object/Object.ts:980](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L980)

___

### isContainedWithinObject

**isContainedWithinObject**(`other`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `ObjectGeometry`\<[`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | Object to test |

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isContainedWithinObject](/apidocs/classes/FabricObject.md#iscontainedwithinobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:238](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L238)

___

### isContainedWithinRect

**isContainedWithinRect**(`tl`, `br`): `boolean`

Checks if object is fully contained within the scene rect formed by tl and br

#### Parameters

| Name | Type |
| :------ | :------ |
| `tl` | [`Point`](/apidocs/classes/Point.md) |
| `br` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isContainedWithinRect](/apidocs/classes/FabricObject.md#iscontainedwithinrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:246](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L246)

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

[FabricObject](/apidocs/classes/FabricObject.md).[isControlVisible](/apidocs/classes/FabricObject.md#iscontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:529](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L529)

___

### isDescendantOf

**isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [Group.contains](/apidocs/classes/Group.md#contains) or [StaticCanvas.contains](/apidocs/classes/StaticCanvas.md#contains) for performance reasons

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TAncestor` |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isDescendantOf](/apidocs/classes/FabricObject.md#isdescendantof)

#### Defined in

[src/shapes/Object/StackedObject.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L52)

___

### isInFrontOf

**isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isInFrontOf](/apidocs/classes/FabricObject.md#isinfrontof)

#### Defined in

[src/shapes/Object/StackedObject.ts:169](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/StackedObject.ts#L169)

___

### isNotVisible

**isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isNotVisible](/apidocs/classes/FabricObject.md#isnotvisible)

#### Defined in

[src/shapes/Object/Object.ts:742](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L742)

___

### isOnScreen

**isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isOnScreen](/apidocs/classes/FabricObject.md#isonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:278](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L278)

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

[FabricObject](/apidocs/classes/FabricObject.md).[isOverlapping](/apidocs/classes/FabricObject.md#isoverlapping)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:256](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L256)

___

### isPartiallyOnScreen

**isPartiallyOnScreen**(): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isPartiallyOnScreen](/apidocs/classes/FabricObject.md#ispartiallyonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:308](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L308)

___

### isStrokeAccountedForInDimensions

**isStrokeAccountedForInDimensions**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

intermidiate method to be removed, do not use

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[isStrokeAccountedForInDimensions](/apidocs/classes/FabricObject.md#isstrokeaccountedforindimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:184](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L184)

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

[FabricObject](/apidocs/classes/FabricObject.md).[isType](/apidocs/classes/FabricObject.md#istype)

#### Defined in

[src/shapes/Object/Object.ts:1470](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1470)

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

[FabricObject](/apidocs/classes/FabricObject.md).[needsItsOwnCache](/apidocs/classes/FabricObject.md#needsitsowncache)

#### Defined in

[src/shapes/Object/Object.ts:847](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L847)

___

### off

**off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`\<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[off](/apidocs/classes/FabricObject.md#off)

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L120)

**off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`\<`EventSpec`\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[off](/apidocs/classes/FabricObject.md#off)

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L125)

**off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[off](/apidocs/classes/FabricObject.md#off)

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L129)

___

### on

**on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `E` | `E` |

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

[FabricObject](/apidocs/classes/FabricObject.md).[on](/apidocs/classes/FabricObject.md#on)

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L23)

**on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[on](/apidocs/classes/FabricObject.md#on)

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L27)

___

### onDeselect

**onDeselect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` | event if the process is generated by an event |
| `options.object?` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | next object we are setting as active, and reason why this is being deselected |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[onDeselect](/apidocs/classes/FabricObject.md#ondeselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:603](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L603)

___

### onDragStart

**onDragStart**(`e`): `boolean`

Override to customize Drag behavior\
Fired once a drag session has started

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`boolean`

true to handle the drag event

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[onDragStart](/apidocs/classes/FabricObject.md#ondragstart)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:636](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L636)

___

### onSelect

**onSelect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | `MouseEvent` \| `TouchEvent` \| `PointerEvent` | event if the process is generated by an event |

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[onSelect](/apidocs/classes/FabricObject.md#onselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:617](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L617)

___

### once

**once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `E` | `E` |

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

[FabricObject](/apidocs/classes/FabricObject.md).[once](/apidocs/classes/FabricObject.md#once)

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L62)

**once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`\<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[once](/apidocs/classes/FabricObject.md#once)

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Observable.ts#L66)

___

### render

**render**(`ctx`): `void`

Renders an object on a specified context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[render](/apidocs/classes/FabricObject.md#render)

#### Defined in

[src/shapes/Object/Object.ts:754](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L754)

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

[FabricObject](/apidocs/classes/FabricObject.md).[renderCache](/apidocs/classes/FabricObject.md#rendercache)

#### Defined in

[src/shapes/Object/Object.ts:788](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L788)

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

[FabricObject](/apidocs/classes/FabricObject.md).[renderDragSourceEffect](/apidocs/classes/FabricObject.md#renderdragsourceeffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:657](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L657)

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

[FabricObject](/apidocs/classes/FabricObject.md).[renderDropTargetEffect](/apidocs/classes/FabricObject.md#renderdroptargeteffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:669](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L669)

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

[FabricObject](/apidocs/classes/FabricObject.md).[rotate](/apidocs/classes/FabricObject.md#rotate)

#### Defined in

[src/shapes/Object/Object.ts:1498](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1498)

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

[FabricObject](/apidocs/classes/FabricObject.md).[scale](/apidocs/classes/FabricObject.md#scale)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:357](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L357)

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

[FabricObject](/apidocs/classes/FabricObject.md).[scaleToHeight](/apidocs/classes/FabricObject.md#scaletoheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:380](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L380)

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

[FabricObject](/apidocs/classes/FabricObject.md).[scaleToWidth](/apidocs/classes/FabricObject.md#scaletowidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:368](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L368)

___

### set

**set**(`key`, `value?`): [`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| `Record`\<`string`, `any`\> | Property name or object (if object, iterate over the object properties) |
| `value?` | `any` | Property value (if function, the value is passed into it and its return value is used as a new one) |

#### Returns

[`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[set](/apidocs/classes/FabricObject.md#set)

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L29)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setControlVisible](/apidocs/classes/FabricObject.md#setcontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:544](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L544)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setControlsVisibility](/apidocs/classes/FabricObject.md#setcontrolsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:556](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L556)

___

### setCoords

**setCoords**(): `void`

set controls' coordinates as well
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setCoords](/apidocs/classes/FabricObject.md#setcoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:295](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L295)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setOnGroup](/apidocs/classes/FabricObject.md#setongroup)

#### Defined in

[src/shapes/Object/Object.ts:1530](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1530)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setOptions](/apidocs/classes/FabricObject.md#setoptions)

#### Defined in

[src/shapes/Object/Object.ts:496](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L496)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setPositionByOrigin](/apidocs/classes/FabricObject.md#setpositionbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:214](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L214)

___

### setRelativeX

**setRelativeX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](/apidocs/classes/FabricObject.md#originx) property in parent's coordinate plane\ if parent is canvas then this method is identical to [setX](/apidocs/classes/Triangle.md#setx) |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setRelativeX](/apidocs/classes/FabricObject.md#setrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:110](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L110)

___

### setRelativeXY

**setRelativeXY**(`point`, `originX?`, `originY?`): `void`

As [setXY](/apidocs/classes/Triangle.md#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | position according to object's originX originY properties in parent's coordinate plane |
| `originX?` | [`TOriginX`](/apidocs/modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](/apidocs/modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setRelativeXY](/apidocs/classes/FabricObject.md#setrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:173](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L173)

___

### setRelativeY

**setRelativeY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](/apidocs/classes/FabricObject.md#originy) property in parent's coordinate plane\ if parent is canvas then this property is identical to [setY](/apidocs/classes/Triangle.md#sety) |

#### Returns

`void`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setRelativeY](/apidocs/classes/FabricObject.md#setrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:126](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L126)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setX](/apidocs/classes/FabricObject.md#setx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:80](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L80)

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
| `originX?` | `number` \| ``"center"`` \| ``"left"`` \| ``"right"`` | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | `number` \| ``"center"`` \| ``"top"`` \| ``"bottom"`` | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

**`Example`**

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[setXY](/apidocs/classes/FabricObject.md#setxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:150](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L150)

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

[FabricObject](/apidocs/classes/FabricObject.md).[setY](/apidocs/classes/FabricObject.md#sety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L94)

___

### shouldCache

**shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[shouldCache](/apidocs/classes/FabricObject.md#shouldcache)

#### Defined in

[src/shapes/Object/Object.ts:871](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L871)

___

### shouldStartDragging

**shouldStartDragging**(): `boolean`

Override to customize Drag behavior
Fired from [Canvas#_onMouseMove](/apidocs/classes/Canvas.md#_onmousemove)

#### Returns

`boolean`

true in order for the window to start a drag session

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[shouldStartDragging](/apidocs/classes/FabricObject.md#shouldstartdragging)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:627](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L627)

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

[FabricObject](/apidocs/classes/FabricObject.md).[strokeBorders](/apidocs/classes/FabricObject.md#strokeborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:351](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/InteractiveObject.ts#L351)

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

[FabricObject](/apidocs/classes/FabricObject.md).[toCanvasElement](/apidocs/classes/FabricObject.md#tocanvaselement)

#### Defined in

[src/shapes/Object/Object.ts:1363](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1363)

___

### toClipPathSVG

**toClipPathSVG**(`this`, `reviver?`): `string`

Returns svg clipPath representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toClipPathSVG](/apidocs/classes/FabricObject.md#toclippathsvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:143](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L143)

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

[FabricObject](/apidocs/classes/FabricObject.md).[toDataURL](/apidocs/classes/FabricObject.md#todataurl)

#### Defined in

[src/shapes/Object/Object.ts:1457](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1457)

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

[FabricObject](/apidocs/classes/FabricObject.md).[toDatalessObject](/apidocs/classes/FabricObject.md#todatalessobject)

#### Defined in

[src/shapes/Object/Object.ts:582](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L582)

___

### toJSON

**toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toJSON](/apidocs/classes/FabricObject.md#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1489](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1489)

___

### toObject

**toObject**(`propertiesToInclude?`): `any`

Returns an object representation of an instance

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `any`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`any`

Object representation of an instance

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toObject](/apidocs/classes/FabricObject.md#toobject)

#### Defined in

[src/shapes/Object/Object.ts:517](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L517)

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

[FabricObject](/apidocs/classes/FabricObject.md).[toSVG](/apidocs/classes/FabricObject.md#tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

**toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toString](/apidocs/classes/FabricObject.md#tostring)

#### Defined in

[src/shapes/Object/Object.ts:622](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L622)

___

### toggle

**toggle**(`property`): [`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`Triangle`](/apidocs/classes/Triangle.md)\<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[toggle](/apidocs/classes/FabricObject.md#toggle)

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/CommonMethods.ts#L46)

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

[FabricObject](/apidocs/classes/FabricObject.md).[transform](/apidocs/classes/FabricObject.md#transform)

#### Defined in

[src/shapes/Object/Object.ts:504](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L504)

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

[FabricObject](/apidocs/classes/FabricObject.md).[transformMatrixKey](/apidocs/classes/FabricObject.md#transformmatrixkey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:440](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectGeometry.ts#L440)

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

[FabricObject](/apidocs/classes/FabricObject.md).[translateToCenterPoint](/apidocs/classes/FabricObject.md#translatetocenterpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:127](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L127)

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

[FabricObject](/apidocs/classes/FabricObject.md).[translateToGivenOrigin](/apidocs/classes/FabricObject.md#translatetogivenorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:99](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L99)

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

[FabricObject](/apidocs/classes/FabricObject.md).[translateToOriginPoint](/apidocs/classes/FabricObject.md#translatetooriginpoint)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:152](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/ObjectOrigin.ts#L152)

___

### willDrawShadow

**willDrawShadow**(): `boolean`

Check if this object will cast a shadow with an offset.
used by Group.shouldCache to know if child has a shadow recursively

#### Returns

`boolean`

**`Deprecated`**

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[willDrawShadow](/apidocs/classes/FabricObject.md#willdrawshadow)

#### Defined in

[src/shapes/Object/Object.ts:884](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L884)

___

### \_fromObject

**_fromObject**\<`S`\>(`«destructured»`, `«destructured»?`): `Promise`\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Record`\<`string`, `unknown`\> |
| `«destructured»` | [`Abortable`](/apidocs/modules.md#abortable) & \{ `extraParam?`: `string`  } |

#### Returns

`Promise`\<`S`\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[_fromObject](/apidocs/classes/FabricObject.md#_fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1568](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1568)

___

### fromObject

**fromObject**\<`T`\>(`object`, `options?`): `Promise`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TOptions`](/apidocs/modules.md#toptions)\<[`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |
| `options?` | [`Abortable`](/apidocs/modules.md#abortable) |

#### Returns

`Promise`\<`FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>\>

#### Inherited from

[FabricObject](/apidocs/classes/FabricObject.md).[fromObject](/apidocs/classes/FabricObject.md#fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1595](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/Object.ts#L1595)

___

### getDefaults

**getDefaults**(): `Object`

#### Returns

`Object`

#### Overrides

[FabricObject](/apidocs/classes/FabricObject.md).[getDefaults](/apidocs/classes/FabricObject.md#getdefaults)

#### Defined in

[src/shapes/Triangle.ts:24](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Triangle.ts#L24)
