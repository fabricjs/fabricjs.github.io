# fabric

## Namespaces

- [controlsUtils](/apidocs/modules/controlsUtils.md)
- [filters](/apidocs/modules/filters.md)
- [util](/apidocs/modules/util.md)

## Classes

- [ActiveSelection](/apidocs/classes/ActiveSelection.md)
- [BaseBrush](/apidocs/classes/BaseBrush.md)
- [Canvas](/apidocs/classes/Canvas.md)
- [Canvas2dFilterBackend](/apidocs/classes/Canvas2dFilterBackend.md)
- [CanvasDOMManager](/apidocs/classes/CanvasDOMManager.md)
- [Circle](/apidocs/classes/Circle.md)
- [CircleBrush](/apidocs/classes/CircleBrush.md)
- [ClipPathLayout](/apidocs/classes/ClipPathLayout.md)
- [Color](/apidocs/classes/Color.md)
- [Control](/apidocs/classes/Control.md)
- [Ellipse](/apidocs/classes/Ellipse.md)
- [FabricImage](/apidocs/classes/FabricImage.md)
- [FabricObject](/apidocs/classes/FabricObject.md)
- [FabricText](/apidocs/classes/FabricText.md)
- [FitContentLayout](/apidocs/classes/FitContentLayout.md)
- [FixedLayout](/apidocs/classes/FixedLayout.md)
- [Gradient](/apidocs/classes/Gradient.md)
- [Group](/apidocs/classes/Group.md)
- [IText](/apidocs/classes/IText.md)
- [Intersection](/apidocs/classes/Intersection.md)
- [LayoutManager](/apidocs/classes/LayoutManager.md)
- [LayoutStrategy](/apidocs/classes/LayoutStrategy.md)
- [Line](/apidocs/classes/Line.md)
- [Observable](/apidocs/classes/Observable.md)
- [Path](/apidocs/classes/Path.md)
- [Pattern](/apidocs/classes/Pattern.md)
- [PatternBrush](/apidocs/classes/PatternBrush.md)
- [PencilBrush](/apidocs/classes/PencilBrush.md)
- [Point](/apidocs/classes/Point.md)
- [Polygon](/apidocs/classes/Polygon.md)
- [Polyline](/apidocs/classes/Polyline.md)
- [Rect](/apidocs/classes/Rect.md)
- [Shadow](/apidocs/classes/Shadow.md)
- [SprayBrush](/apidocs/classes/SprayBrush.md)
- [StaticCanvas](/apidocs/classes/StaticCanvas.md)
- [StaticCanvasDOMManager](/apidocs/classes/StaticCanvasDOMManager.md)
- [Textbox](/apidocs/classes/Textbox.md)
- [Triangle](/apidocs/classes/Triangle.md)
- [WebGLFilterBackend](/apidocs/classes/WebGLFilterBackend.md)

## Interfaces

- [ActiveSelectionOptions](/apidocs/interfaces/ActiveSelectionOptions.md)
- [BasicTransformEvent](/apidocs/interfaces/BasicTransformEvent.md)
- [CanvasEvents](/apidocs/interfaces/CanvasEvents.md)
- [CanvasOptions](/apidocs/interfaces/CanvasOptions.md)
- [CircleProps](/apidocs/interfaces/CircleProps.md)
- [CollectionEvents](/apidocs/interfaces/CollectionEvents.md)
- [DragEventData](/apidocs/interfaces/DragEventData.md)
- [DropEventData](/apidocs/interfaces/DropEventData.md)
- [EllipseProps](/apidocs/interfaces/EllipseProps.md)
- [FabricObjectProps](/apidocs/interfaces/FabricObjectProps.md)
- [GroupEvents](/apidocs/interfaces/GroupEvents.md)
- [GroupOwnProps](/apidocs/interfaces/GroupOwnProps.md)
- [GroupProps](/apidocs/interfaces/GroupProps.md)
- [ITextProps](/apidocs/interfaces/ITextProps.md)
- [ImageProps](/apidocs/interfaces/ImageProps.md)
- [MiscEvents](/apidocs/interfaces/MiscEvents.md)
- [ModifiedEvent](/apidocs/interfaces/ModifiedEvent.md)
- [ObjectEvents](/apidocs/interfaces/ObjectEvents.md)
- [PathProps](/apidocs/interfaces/PathProps.md)
- [RectProps](/apidocs/interfaces/RectProps.md)
- [SerializedCircleProps](/apidocs/interfaces/SerializedCircleProps.md)
- [SerializedEllipseProps](/apidocs/interfaces/SerializedEllipseProps.md)
- [SerializedGroupProps](/apidocs/interfaces/SerializedGroupProps.md)
- [SerializedITextProps](/apidocs/interfaces/SerializedITextProps.md)
- [SerializedImageProps](/apidocs/interfaces/SerializedImageProps.md)
- [SerializedLineProps](/apidocs/interfaces/SerializedLineProps.md)
- [SerializedObjectProps](/apidocs/interfaces/SerializedObjectProps.md)
- [SerializedPathProps](/apidocs/interfaces/SerializedPathProps.md)
- [SerializedPolylineProps](/apidocs/interfaces/SerializedPolylineProps.md)
- [SerializedRectProps](/apidocs/interfaces/SerializedRectProps.md)
- [SerializedTextProps](/apidocs/interfaces/SerializedTextProps.md)
- [SerializedTextboxProps](/apidocs/interfaces/SerializedTextboxProps.md)
- [StaticCanvasEvents](/apidocs/interfaces/StaticCanvasEvents.md)
- [StaticCanvasOptions](/apidocs/interfaces/StaticCanvasOptions.md)
- [TEvent](/apidocs/interfaces/TEvent.md)
- [TPointerEventInfo](/apidocs/interfaces/TPointerEventInfo.md)
- [TextProps](/apidocs/interfaces/TextProps.md)
- [TextboxProps](/apidocs/interfaces/TextboxProps.md)
- [XY](/apidocs/interfaces/XY.md)

## References

### Image

Renames and re-exports [FabricImage](/apidocs/classes/FabricImage.md)

___

### Object

Renames and re-exports [FabricObject](/apidocs/classes/FabricObject.md)

___

### Text

Renames and re-exports [FabricText](/apidocs/classes/FabricText.md)

## Type Aliases

### Abortable

 **Abortable**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `signal?` | `AbortSignal` | handle aborting **`See`** https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal |

#### Defined in

[src/typedefs.ts:118](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L118)

___

### CanvasPointerEvents

 **CanvasPointerEvents**: `TPointerEvents`\<``"mouse:"``\>

#### Defined in

[src/EventTypeDefs.ts:262](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L262)

___

### CircleBrushPoint

 **CircleBrushPoint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fill` | `string` |
| `radius` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/brushes/typedefs.ts:6](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/typedefs.ts#L6)

___

### CollectionChangeLayoutContext

 **CollectionChangeLayoutContext**: [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)[] ; `type`: typeof `LAYOUT_TYPE_ADDED` \| typeof `LAYOUT_TYPE_REMOVED`  }

#### Defined in

[src/LayoutManager/types.ts:91](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L91)

___

### ColorStop

 **ColorStop**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `offset` | `number` |
| `opacity?` | `number` |

#### Defined in

[src/gradient/typedefs.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/gradient/typedefs.ts#L9)

___

### CommonLayoutContext

 **CommonLayoutContext**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `path?` | [`Group`](/apidocs/classes/Group.md)[] | array of objects starting from the object that triggered the call to the current one |
| `strategy?` | [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) | - |
| `target` | [`Group`](/apidocs/classes/Group.md) | - |
| `type` | [`LayoutTrigger`](/apidocs/modules.md#layouttrigger) | - |

#### Defined in

[src/LayoutManager/types.ts:74](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L74)

___

### CompleteTextStyleDeclaration

 **CompleteTextStyleDeclaration**: `Pick`\<[`FabricText`](/apidocs/classes/FabricText.md), `StylePropertiesType`\>

#### Defined in

[src/shapes/Text/StyledText.ts:10](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L10)

___

### Constructor

 **Constructor**\<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Type declaration

(`...args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

[src/typedefs.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L20)

___

### ControlActionHandler

 **ControlActionHandler**: [`TransformAction`](/apidocs/modules.md#transformaction)\<[`Transform`](/apidocs/modules.md#transform), `any`\>

Control handlers that run on control click/down/up
Those handlers run with or without a transform defined

#### Defined in

[src/EventTypeDefs.ts:42](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L42)

___

### ControlCallback

 **ControlCallback**\<`R`\>: (`eventData`: [`TPointerEvent`](/apidocs/modules.md#tpointerevent), `control`: [`Control`](/apidocs/classes/Control.md), `fabricObject`: [`FabricObject`](/apidocs/classes/FabricObject.md)) => `R`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `void` |

#### Type declaration

(`eventData`, `control`, `fabricObject`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `control` | [`Control`](/apidocs/classes/Control.md) |
| `fabricObject` | [`FabricObject`](/apidocs/classes/FabricObject.md) |

##### Returns

`R`

#### Defined in

[src/EventTypeDefs.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L44)

___

### ControlCursorCallback

 **ControlCursorCallback**: [`ControlCallback`](/apidocs/modules.md#controlcallback)\<`string`\>

#### Defined in

[src/EventTypeDefs.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L50)

___

### GradientCoordValue

 **GradientCoordValue**: `number` \| [`Percent`](/apidocs/modules.md#percent) \| `string`

#### Defined in

[src/gradient/typedefs.ts:7](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/gradient/typedefs.ts#L7)

___

### GradientCoords

 **GradientCoords**\<`T`\>: `T` extends ``"linear"`` ? [`LinearGradientCoords`](/apidocs/modules.md#lineargradientcoords)\<`number`\> : [`RadialGradientCoords`](/apidocs/modules.md#radialgradientcoords)\<`number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GradientType`](/apidocs/modules.md#gradienttype) |

#### Defined in

[src/gradient/typedefs.ts:61](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/gradient/typedefs.ts#L61)

___

### GradientOptions

 **GradientOptions**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GradientType`](/apidocs/modules.md#gradienttype) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorStops?` | [`ColorStop`](/apidocs/modules.md#colorstop)[] | - |
| `coords?` | `Partial`\<[`GradientCoords`](/apidocs/modules.md#gradientcoords)\<`T`\>\> | - |
| `gradientTransform?` | [`TMat2D`](/apidocs/modules.md#tmat2d) | **`Todo`** rename? |
| `gradientUnits?` | [`GradientUnits`](/apidocs/modules.md#gradientunits) | - |
| `id?` | `string` | - |
| `offsetX?` | `number` | SVG import compatibility |
| `offsetY?` | `number` | SVG import compatibility |
| `type?` | `T` | - |

#### Defined in

[src/gradient/typedefs.ts:65](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/gradient/typedefs.ts#L65)

___

### GradientType

 **GradientType**: ``"linear"`` \| ``"radial"``

#### Defined in

[src/gradient/typedefs.ts:5](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/gradient/typedefs.ts#L5)

___

### GradientUnits

 **GradientUnits**: ``"pixels"`` \| ``"percentage"``

#### Defined in

[src/gradient/typedefs.ts:3](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/gradient/typedefs.ts#L3)

___

### GraphemeBBox

 **GraphemeBBox**: `Object`

Measure and return the info of a single grapheme.
needs the the info of previous graphemes already filled
Override to customize measuring

#### Type declaration

| Name | Type |
| :------ | :------ |
| `angle?` | `number` |
| `deltaY` | `number` |
| `height` | `number` |
| `kernedWidth` | `number` |
| `left` | `number` |
| `renderLeft?` | `number` |
| `renderTop?` | `number` |
| `width` | `number` |

#### Defined in

[src/shapes/Text/Text.ts:79](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L79)

___

### GraphemeData

 **GraphemeData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `largestWordWidth` | `number` |
| `wordsData` | \{ `width`: `number` ; `word`: `string`[]  }[][] |

#### Defined in

[src/shapes/Textbox.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Textbox.ts#L23)

___

### ImageFormat

 **ImageFormat**: ``"jpeg"`` \| ``"png"``

#### Defined in

[src/typedefs.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L46)

___

### ImageSource

 **ImageSource**: `HTMLImageElement` \| `HTMLVideoElement` \| `HTMLCanvasElement`

#### Defined in

[src/shapes/Image.ts:37](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Image.ts#L37)

___

### ImperativeLayoutContext

 **ImperativeLayoutContext**: [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & `ImperativeLayoutCommonOptions` & \{ `type`: typeof `LAYOUT_TYPE_IMPERATIVE`  }

#### Defined in

[src/LayoutManager/types.ts:116](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L116)

___

### ImperativeLayoutOptions

 **ImperativeLayoutOptions**: `ImperativeLayoutCommonOptions` & \{ `strategy?`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md)  }

#### Defined in

[src/LayoutManager/types.ts:70](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L70)

___

### InitializationLayoutContext

 **InitializationLayoutContext**: [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)[] ; `type`: typeof `LAYOUT_TYPE_INITIALIZATION` ; `x?`: `number` ; `y?`: `number`  }

#### Defined in

[src/LayoutManager/types.ts:84](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L84)

___

### IntersectionType

 **IntersectionType**: ``"Intersection"`` \| ``"Coincident"`` \| ``"Parallel"``

#### Defined in

[src/Intersection.ts:6](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Intersection.ts#L6)

___

### LayoutAfterEvent

 **LayoutAfterEvent**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) | - |
| `result?` | [`LayoutResult`](/apidocs/modules.md#layoutresult) | will be undefined if layout was skipped |

#### Defined in

[src/LayoutManager/types.ts:139](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L139)

___

### LayoutBeforeEvent

 **LayoutBeforeEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Defined in

[src/LayoutManager/types.ts:135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L135)

___

### LayoutContext

 **LayoutContext**: [`InitializationLayoutContext`](/apidocs/modules.md#initializationlayoutcontext) \| [`CollectionChangeLayoutContext`](/apidocs/modules.md#collectionchangelayoutcontext) \| [`ObjectModifiedLayoutContext`](/apidocs/modules.md#objectmodifiedlayoutcontext) \| [`ObjectModifyingLayoutContext`](/apidocs/modules.md#objectmodifyinglayoutcontext) \| [`ImperativeLayoutContext`](/apidocs/modules.md#imperativelayoutcontext)

#### Defined in

[src/LayoutManager/types.ts:121](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L121)

___

### LayoutResult

 **LayoutResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextCenter` | [`Point`](/apidocs/classes/Point.md) | - |
| `offset` | [`Point`](/apidocs/classes/Point.md) | The vector used to offset objects by, as measured by the plane |
| `prevCenter` | [`Point`](/apidocs/classes/Point.md) | - |
| `result?` | [`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult) | - |

#### Defined in

[src/LayoutManager/types.ts:54](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L54)

___

### LayoutStrategyResult

 **LayoutStrategyResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Point`](/apidocs/classes/Point.md) | new center point as measured by the **containing** plane (same as `left` with `originX` set to `center`) |
| `correction?` | [`Point`](/apidocs/classes/Point.md) | correction vector to translate objects by, measured in the same plane as `center` Since objects are measured relative to the group's center, once the group's size changes we must apply a correction to the objects' positions so that they relate to the new center. In other words, this value makes it possible to layout objects relative to the tl corner, for instance, but not only. |
| `relativeCorrection?` | [`Point`](/apidocs/classes/Point.md) | correction vector to translate objects by as measured by the plane |
| `size` | [`Point`](/apidocs/classes/Point.md) | new width and height of the layout target |

#### Defined in

[src/LayoutManager/types.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L28)

___

### LayoutTrigger

 **LayoutTrigger**: typeof `LAYOUT_TYPE_INITIALIZATION` \| typeof `LAYOUT_TYPE_OBJECT_MODIFYING` \| typeof `LAYOUT_TYPE_OBJECT_MODIFIED` \| typeof `LAYOUT_TYPE_ADDED` \| typeof `LAYOUT_TYPE_REMOVED` \| typeof `LAYOUT_TYPE_IMPERATIVE`

#### Defined in

[src/LayoutManager/types.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L20)

___

### LinearGradientCoords

 **LinearGradientCoords**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GradientCoordValue`](/apidocs/modules.md#gradientcoordvalue) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `T` | X coordiante of the first point |
| `x2` | `T` | X coordiante of the second point |
| `y1` | `T` | Y coordiante of the first point |
| `y2` | `T` | Y coordiante of the second point |

#### Defined in

[src/gradient/typedefs.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/gradient/typedefs.ts#L15)

___

### ModifierKey

 **ModifierKey**: keyof `Pick`\<`MouseEvent` \| `PointerEvent` \| `TouchEvent`, ``"altKey"`` \| ``"shiftKey"`` \| ``"ctrlKey"`` \| ``"metaKey"``\>

#### Defined in

[src/EventTypeDefs.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L15)

___

### MultiSelectionStacking

 **MultiSelectionStacking**: ``"canvas-stacking"`` \| ``"selection-order"``

#### Defined in

[src/shapes/ActiveSelection.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/ActiveSelection.ts#L11)

___

### ObjectModifiedLayoutContext

 **ObjectModifiedLayoutContext**: [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `e`: [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md) ; `trigger`: ``"modified"`` ; `type`: typeof `LAYOUT_TYPE_OBJECT_MODIFIED`  }

#### Defined in

[src/LayoutManager/types.ts:96](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L96)

___

### ObjectModifyingLayoutContext

 **ObjectModifyingLayoutContext**: [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `type`: typeof `LAYOUT_TYPE_OBJECT_MODIFYING`  } & \{ `e`: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md) & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)  } ; `trigger`: [`TModificationEvents`](/apidocs/modules.md#tmodificationevents)  } \| \{ `e`: `ITextEvents`[``"changed"``] & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)  } ; `trigger`: ``"changed"``  }

#### Defined in

[src/LayoutManager/types.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L102)

___

### ObjectPointerEvents

 **ObjectPointerEvents**: `TPointerEvents`\<``"mouse"``\>

#### Defined in

[src/EventTypeDefs.ts:261](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L261)

___

### PatternOptions

 **PatternOptions**: `Partial`\<`Pick`\<[`Pattern`](/apidocs/classes/Pattern.md), `ExportedKeys`\>\> & \{ `source`: `CanvasImageSource`  }

#### Defined in

[src/Pattern/types.ts:13](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Pattern/types.ts#L13)

___

### PatternRepeat

 **PatternRepeat**: ``"repeat"`` \| ``"repeat-x"`` \| ``"repeat-y"`` \| ``"no-repeat"``

#### Defined in

[src/Pattern/types.ts:3](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Pattern/types.ts#L3)

___

### Percent

 **Percent**: \`$\{number}%\`

#### Defined in

[src/typedefs.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L44)

___

### RadialGradientCoords

 **RadialGradientCoords**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GradientCoordValue`](/apidocs/modules.md#gradientcoordvalue) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `r1` | `T` | radius of the inner circle |
| `r2` | `T` | radius of the outer circle |
| `x1` | `T` | X coordinate of the first focal point |
| `x2` | `T` | X coordiante of the second focal point |
| `y1` | `T` | Y coordiante of the first focal point |
| `y2` | `T` | Y coordiante of the second focal point |

#### Defined in

[src/gradient/typedefs.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/gradient/typedefs.ts#L34)

___

### SVGElementName

 **SVGElementName**: ``"linearGradient"`` \| ``"radialGradient"`` \| ``"stop"``

#### Defined in

[src/typedefs.ts:48](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L48)

___

### SVGOptions

 **SVGOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `height` | `number` | height part of the svg tag if viewBox is not specified |
| `opacity` | `string` \| ``null`` | - |
| `viewBoxHeight` | `number` | height part of the viewBox attribute on svg |
| `viewBoxWidth` | `number` | width part of the viewBox attribute on svg |
| `width` | `number` | width part of the svg tag if viewBox is not specified |

#### Defined in

[src/gradient/typedefs.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/gradient/typedefs.ts#L85)

___

### SerializedLayoutManager

 **SerializedLayoutManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `strategy` | `string` |
| `type` | `string` |

#### Defined in

[src/LayoutManager/LayoutManager.ts:24](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L24)

___

### SerializedPatternOptions

 **SerializedPatternOptions**: [`PatternOptions`](/apidocs/modules.md#patternoptions) & \{ `source`: `string` ; `type`: ``"pattern"``  }

#### Defined in

[src/Pattern/types.ts:17](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Pattern/types.ts#L17)

___

### SerializedShadowOptions

 **SerializedShadowOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `affectStroke` | `boolean` |
| `blur` | `number` |
| `color` | `string` |
| `nonScaling` | `boolean` |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Defined in

[src/Shadow.ts:22](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Shadow.ts#L22)

___

### SprayBrushPoint

 **SprayBrushPoint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `opacity` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/brushes/typedefs.ts:13](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/typedefs.ts#L13)

___

### StrictLayoutContext

 **StrictLayoutContext**: [`LayoutContext`](/apidocs/modules.md#layoutcontext) & \{ `bubbles`: `boolean` ; `prevStrategy?`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `strategy`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `stopPropagation`: () => `void`  }

#### Defined in

[src/LayoutManager/types.ts:128](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/types.ts#L128)

___

### SupportedSVGUnit

 **SupportedSVGUnit**: ``"mm"`` \| ``"cm"`` \| ``"in"`` \| ``"pt"`` \| ``"pc"`` \| ``"em"``

#### Defined in

[src/typedefs.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L50)

___

### T2DPipelineState

 **T2DPipelineState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canvasEl` | `HTMLCanvasElement` |
| `ctx` | `CanvasRenderingContext2D` |
| `filterBackend` | [`Canvas2dFilterBackend`](/apidocs/classes/Canvas2dFilterBackend.md) |
| `helpLayer?` | `HTMLCanvasElement` |
| `imageData` | `ImageData` |
| `originalEl` | `CanvasImageSource` |
| `originalImageData?` | `ImageData` |
| `sourceHeight` | `number` |
| `sourceWidth` | `number` |

#### Defined in

[src/filters/typedefs.ts:35](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/typedefs.ts#L35)

___

### TApplyFilterArgs

 **TApplyFilterArgs**: `Object`

#### Defined in

[src/filters/typedefs.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/typedefs.ts#L60)

___

### TAxis

 **TAxis**: ``"x"`` \| ``"y"``

#### Defined in

[src/typedefs.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L28)

___

### TAxisKey

 **TAxisKey**\<`T`\>: \`$\{T}$\{Capitalize\<TAxis\>}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Defined in

[src/typedefs.ts:30](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L30)

___

### TBBox

 **TBBox**: \{ `left`: `number` ; `top`: `number`  } & [`TSize`](/apidocs/modules.md#tsize)

#### Defined in

[src/typedefs.ts:39](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L39)

___

### TBrushEventData

 **TBrushEventData**: [`TEvent`](/apidocs/interfaces/TEvent.md) & \{ `pointer`: [`Point`](/apidocs/classes/Point.md)  }

#### Defined in

[src/brushes/typedefs.ts:4](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/brushes/typedefs.ts#L4)

___

### TCacheCanvasDimensions

 **TCacheCanvasDimensions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |
| `zoomX` | `number` |
| `zoomY` | `number` |

#### Defined in

[src/typedefs.ts:89](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L89)

___

### TCanvasSizeOptions

 **TCanvasSizeOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstoreOnly?` | `boolean` |
| `cssOnly?` | `boolean` |

#### Defined in

[src/canvas/StaticCanvas.ts:47](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L47)

___

### TClassProperties

 **TClassProperties**\<`T`\>: `Pick`\<`T`, `TNonFunctionPropertyNames`\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/typedefs.ts:17](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L17)

___

### TColorArg

 **TColorArg**: `string` \| [`TRGBColorSource`](/apidocs/modules.md#trgbcolorsource) \| [`TRGBAColorSource`](/apidocs/modules.md#trgbacolorsource) \| [`Color`](/apidocs/classes/Color.md)

#### Defined in

[src/color/typedefs.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/color/typedefs.ts#L18)

___

### TCornerPoint

 **TCornerPoint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bl` | [`Point`](/apidocs/classes/Point.md) |
| `br` | [`Point`](/apidocs/classes/Point.md) |
| `tl` | [`Point`](/apidocs/classes/Point.md) |
| `tr` | [`Point`](/apidocs/classes/Point.md) |

#### Defined in

[src/typedefs.ts:78](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L78)

___

### TCrossOrigin

 **TCrossOrigin**: ``""`` \| ``"anonymous"`` \| ``"use-credentials"`` \| ``null``

An invalid keyword and an empty string will be handled as the `anonymous` keyword.

**`See`**

https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes

#### Defined in

[src/typedefs.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L73)

___

### TDataUrlOptions

 **TDataUrlOptions**\<`T`\>: [`TToCanvasElementOptions`](/apidocs/modules.md#ttocanvaselementoptions)\<`T`\> & \{ `enableRetinaScaling?`: `boolean` ; `format?`: [`ImageFormat`](/apidocs/modules.md#imageformat) ; `multiplier`: `number` ; `quality?`: `number`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `BaseFabricObject` = `BaseFabricObject` |

#### Defined in

[src/typedefs.ts:110](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L110)

___

### TDegree

 **TDegree**: `Nominal`\<`number`, `Degree`\>

#### Defined in

[src/typedefs.ts:25](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L25)

___

### TFabricObjectProps

 **TFabricObjectProps**: [`TOptions`](/apidocs/modules.md#toptions)\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>

#### Defined in

[src/shapes/Object/types/index.ts:7](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Object/types/index.ts#L7)

___

### TFiller

 **TFiller**: [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``\> \| [`Pattern`](/apidocs/classes/Pattern.md)

#### Defined in

[src/typedefs.ts:32](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L32)

___

### TMat2D

 **TMat2D**: [a: number, b: number, c: number, d: number, e: number, f: number]

A transform matrix.
Basically a matrix in the form
[ a c e ]
[ b d f ]
[ 0 0 1 ]
For more details, see

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#matrix

#### Defined in

[src/typedefs.ts:60](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L60)

___

### TModificationEvents

 **TModificationEvents**: ``"moving"`` \| ``"scaling"`` \| ``"rotating"`` \| ``"skewing"`` \| ``"resizing"`` \| ``"modifyPoly"``

#### Defined in

[src/EventTypeDefs.ts:101](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L101)

___

### TOptionalModifierKey

 **TOptionalModifierKey**: [`ModifierKey`](/apidocs/modules.md#modifierkey) \| ``null`` \| `undefined`

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L20)

___

### TOptions

 **TOptions**\<`T`\>: `Partial`\<`T`\> & `Record`\<`string`, `any`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/typedefs.ts:126](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L126)

___

### TOriginX

 **TOriginX**: ``"center"`` \| ``"left"`` \| ``"right"`` \| `number`

#### Defined in

[src/typedefs.ts:75](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L75)

___

### TOriginY

 **TOriginY**: ``"center"`` \| ``"top"`` \| ``"bottom"`` \| `number`

#### Defined in

[src/typedefs.ts:76](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L76)

___

### TPathAlign

 **TPathAlign**: ``"baseline"`` \| ``"center"`` \| ``"ascender"`` \| ``"descender"``

#### Defined in

[src/shapes/Text/Text.ts:65](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L65)

___

### TPathSide

 **TPathSide**: ``"left"`` \| ``"right"``

#### Defined in

[src/shapes/Text/Text.ts:63](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/Text.ts#L63)

___

### TPipelineResources

 **TPipelineResources**: \{ `blendImage?`: `HTMLCanvasElement` ; `blurLayer1?`: `HTMLCanvasElement` ; `blurLayer2?`: `HTMLCanvasElement` ; `sliceByTwo?`: `HTMLCanvasElement`  } & `Record`\<`string`, `unknown`\>

#### Defined in

[src/filters/typedefs.ts:8](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/typedefs.ts#L8)

___

### TPointerEvent

 **TPointerEvent**: `MouseEvent` \| `TouchEvent` \| `PointerEvent`

#### Defined in

[src/EventTypeDefs.ts:22](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L22)

___

### TPointerEventNames

 **TPointerEventNames**: `WithBeforeSuffix`\<``"down"``\> \| `WithBeforeSuffix`\<``"move"``\> \| `WithBeforeSuffix`\<``"up"``\> \| ``"dblclick"`` \| ``"wheel"``

#### Defined in

[src/EventTypeDefs.ts:254](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L254)

___

### TProgramCache

 **TProgramCache**: `any`

#### Defined in

[src/filters/typedefs.ts:4](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/typedefs.ts#L4)

___

### TRGBAColorSource

 **TRGBAColorSource**: [red: number, green: number, blue: number, alpha: number]

RGBA format

#### Defined in

[src/color/typedefs.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/color/typedefs.ts#L11)

___

### TRGBColorSource

 **TRGBColorSource**: [red: number, green: number, blue: number]

RGB format

#### Defined in

[src/color/typedefs.ts:6](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/color/typedefs.ts#L6)

___

### TRadian

 **TRadian**: `Nominal`\<`number`, `Radian`\>

#### Defined in

[src/typedefs.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L26)

___

### TRectBounds

 **TRectBounds**: [min: XY, max: XY]

#### Defined in

[src/typedefs.ts:98](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L98)

___

### TSVGExportOptions

 **TSVGExportOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `encoding?` | ``"UTF-8"`` |
| `height?` | `string` |
| `reviver?` | [`TSVGReviver`](/apidocs/modules.md#tsvgreviver) |
| `suppressPreamble?` | `boolean` |
| `viewBox?` | \{ `height`: `number` ; `width`: `number` ; `x`: `number` ; `y`: `number`  } |
| `viewBox.height` | `number` |
| `viewBox.width` | `number` |
| `viewBox.x` | `number` |
| `viewBox.y` | `number` |
| `width?` | `string` |

#### Defined in

[src/canvas/StaticCanvas.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/canvas/StaticCanvas.ts#L52)

___

### TSVGReviver

 **TSVGReviver**: (`markup`: `string`) => `string`

#### Type declaration

(`markup`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `markup` | `string` |

##### Returns

`string`

#### Defined in

[src/typedefs.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L85)

___

### TSize

 **TSize**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[src/typedefs.ts:34](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L34)

___

### TTextureCache

 **TTextureCache**: `Record`\<`string`, `WebGLTexture`\>

#### Defined in

[src/filters/typedefs.ts:6](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/typedefs.ts#L6)

___

### TToCanvasElementOptions

 **TToCanvasElementOptions**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `BaseFabricObject` = `BaseFabricObject` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filter?` | (`object`: `T`) => `boolean` |
| `height?` | `number` |
| `left?` | `number` |
| `top?` | `number` |
| `width?` | `number` |

#### Defined in

[src/typedefs.ts:100](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L100)

___

### TValidToObjectMethod

 **TValidToObjectMethod**: ``"toDatalessObject"`` \| ``"toObject"``

#### Defined in

[src/typedefs.ts:87](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/typedefs.ts#L87)

___

### TWebGLAttributeLocationMap

 **TWebGLAttributeLocationMap**: `Record`\<`string`, `number`\>

#### Defined in

[src/filters/typedefs.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/typedefs.ts#L52)

___

### TWebGLPipelineState

 **TWebGLPipelineState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aPosition` | `Float32Array` |
| `context` | `WebGLRenderingContext` |
| `destinationHeight` | `number` |
| `destinationWidth` | `number` |
| `filterBackend` | [`WebGLFilterBackend`](/apidocs/classes/WebGLFilterBackend.md) |
| `originalHeight` | `number` |
| `originalTexture` | `WebGLTexture` |
| `originalWidth` | `number` |
| `pass` | `number` |
| `passes` | `number` |
| `programCache` | [`TProgramCache`](/apidocs/modules.md#tprogramcache) |
| `sourceHeight` | `number` |
| `sourceTexture` | `WebGLTexture` \| ``null`` |
| `sourceWidth` | `number` |
| `targetCanvas` | `HTMLCanvasElement` |
| `targetTexture` | `WebGLTexture` \| ``null`` |
| `webgl` | `boolean` |

#### Defined in

[src/filters/typedefs.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/typedefs.ts#L15)

___

### TWebGLProgramCacheItem

 **TWebGLProgramCacheItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributeLocations` | [`TWebGLAttributeLocationMap`](/apidocs/modules.md#twebglattributelocationmap) |
| `program` | `WebGLProgram` |
| `uniformLocations` | [`TWebGLUniformLocationMap`](/apidocs/modules.md#twebgluniformlocationmap) |

#### Defined in

[src/filters/typedefs.ts:54](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/typedefs.ts#L54)

___

### TWebGLUniformLocationMap

 **TWebGLUniformLocationMap**: `Record`\<`string`, `WebGLUniformLocation` \| ``null``\>

#### Defined in

[src/filters/typedefs.ts:47](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/typedefs.ts#L47)

___

### TextStyle

 **TextStyle**: `Object`

#### Index signature

▪ [line: `number` \| `string`]: \{ `[char: number | string]`: [`TextStyleDeclaration`](/apidocs/modules.md#textstyledeclaration);  }

#### Defined in

[src/shapes/Text/StyledText.ts:17](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L17)

___

### TextStyleDeclaration

 **TextStyleDeclaration**: `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\>

#### Defined in

[src/shapes/Text/StyledText.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/shapes/Text/StyledText.ts#L15)

___

### Transform

 **Transform**: `Object`

relative to target's containing coordinate plane
both agree on every point

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `actionHandler?` | [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler) |
| `actionPerformed` | `boolean` |
| `altKey` | `boolean` |
| `corner` | `string` |
| `ex` | `number` |
| `ey` | `number` |
| `height` | `number` |
| `lastX` | `number` |
| `lastY` | `number` |
| `offsetX` | `number` |
| `offsetY` | `number` |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) |
| `original` | `ReturnType`\<typeof [`saveObjectTransform`](/apidocs/modules/util.md#saveobjecttransform)\> & \{ `originX`: [`TOriginX`](/apidocs/modules.md#toriginx) ; `originY`: [`TOriginY`](/apidocs/modules.md#toriginy)  } |
| `reset?` | `boolean` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `shiftKey` | `boolean` |
| `skewX` | `number` |
| `skewY` | `number` |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md) |
| `theta` | [`TRadian`](/apidocs/modules.md#tradian) |
| `width` | `number` |

#### Defined in

[src/EventTypeDefs.ts:56](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L56)

___

### TransformAction

 **TransformAction**\<`T`, `R`\>: (`eventData`: [`TPointerEvent`](/apidocs/modules.md#tpointerevent), `transform`: `T`, `x`: `number`, `y`: `number`) => `R`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Transform`](/apidocs/modules.md#transform) = [`Transform`](/apidocs/modules.md#transform) |
| `R` | `void` |

#### Type declaration

(`eventData`, `transform`, `x`, `y`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `transform` | `T` |
| `x` | `number` |
| `y` | `number` |

##### Returns

`R`

#### Defined in

[src/EventTypeDefs.ts:24](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L24)

___

### TransformActionHandler

 **TransformActionHandler**\<`T`\>: [`TransformAction`](/apidocs/modules.md#transformaction)\<`T`, `boolean`\>

Control handlers that define a transformation
Those handlers run when the user starts a transform and during a transform

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Transform`](/apidocs/modules.md#transform) = [`Transform`](/apidocs/modules.md#transform) |

#### Defined in

[src/EventTypeDefs.ts:35](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L35)

## Variables

### cache

 `Const` **cache**: `Cache`

#### Defined in

[src/cache.ts:90](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/cache.ts#L90)

___

### classRegistry

 `Const` **classRegistry**: `ClassRegistry`

#### Defined in

[src/ClassRegistry.ts:58](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/ClassRegistry.ts#L58)

___

### config

 `Const` **config**: `Configuration`

#### Defined in

[src/config.ts:160](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/config.ts#L160)

___

### iMatrix

 `Const` **iMatrix**: [`TMat2D`](/apidocs/modules.md#tmat2d)

#### Defined in

[src/constants.ts:13](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/constants.ts#L13)

___

### runningAnimations

 `Const` **runningAnimations**: `AnimationRegistry`

#### Defined in

[src/util/animation/AnimationRegistry.ts:59](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/AnimationRegistry.ts#L59)

___

### version

 `Const` **version**: `string` = `version`

#### Defined in

[src/constants.ts:5](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/constants.ts#L5)

## Functions

### createCollectionMixin

**createCollectionMixin**\<`TBase`\>(`Base`): (...`args`: `any`[]) => `Collection`\<`TBase`\> & `TBase`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`Constructor`](/apidocs/modules.md#constructor)\<`object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |

#### Returns

(...`args`: `any`[]) => `Collection`\<`TBase`\> & `TBase`

#### Defined in

[src/Collection.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/Collection.ts#L15)

___

### getCSSRules

**getCSSRules**(`doc`): `CSSRules`

Returns CSS rules for a given SVG document

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | `Document` | SVG document to parse |

#### Returns

`CSSRules`

CSS rules of this document

#### Defined in

[src/parser/getCSSRules.ts:8](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/parser/getCSSRules.ts#L8)

___

### getEnv

**getEnv**(): `TFabricEnv`

#### Returns

`TFabricEnv`

#### Defined in

[src/env/index.ts:33](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/env/index.ts#L33)

___

### getFabricDocument

**getFabricDocument**(): `Document`

#### Returns

`Document`

#### Defined in

[src/env/index.ts:35](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/env/index.ts#L35)

___

### getFabricWindow

**getFabricWindow**(): `Window` & typeof `globalThis` \| `DOMWindow`

#### Returns

`Window` & typeof `globalThis` \| `DOMWindow`

#### Defined in

[src/env/index.ts:37](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/env/index.ts#L37)

___

### getFilterBackend

**getFilterBackend**(`strict?`): `FilterBackend`

Get the current fabricJS filter backend  or initialize one if not available yet

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `strict?` | `boolean` | `true` | pass `true` to create the backend if it wasn't created yet (default behavior), pass `false` to get the backend ref without mutating it |

#### Returns

`FilterBackend`

#### Defined in

[src/filters/FilterBackend.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/FilterBackend.ts#L29)

___

### initFilterBackend

**initFilterBackend**(): `FilterBackend`

Verifies if it is possible to initialize webgl or fallback on a canvas2d filtering backend

#### Returns

`FilterBackend`

#### Defined in

[src/filters/FilterBackend.ts:14](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/FilterBackend.ts#L14)

___

### isWebGLPipelineState

**isWebGLPipelineState**(`options`): options is TWebGLPipelineState

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TWebGLPipelineState`](/apidocs/modules.md#twebglpipelinestate) \| [`T2DPipelineState`](/apidocs/modules.md#t2dpipelinestate) |

#### Returns

options is TWebGLPipelineState

#### Defined in

[src/filters/utils.ts:3](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/utils.ts#L3)

___

### loadSVGFromString

**loadSVGFromString**(`string`, `reviver?`, `options?`): `Promise`\<`SVGParsingOutput`\>

Takes string corresponding to an SVG document, and parses it into a set of fabric objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | representing the svg |
| `reviver?` | `TSvgReviverCallback` | Extra callback for further parsing of SVG elements, called after each fabric object has been created. Takes as input the original svg element and the generated `FabricObject` as arguments. Used to inspect extra properties not parsed by fabric, or extra custom manipulation |
| `options?` | [`LoadImageOptions`](/apidocs/modules/util.md#loadimageoptions) | Object containing options for parsing |

#### Returns

`Promise`\<`SVGParsingOutput`\>

**`Member Of`**

fabric

#### Defined in

[src/parser/loadSVGFromString.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/parser/loadSVGFromString.ts#L20)

___

### loadSVGFromURL

**loadSVGFromURL**(`url`, `reviver?`, `options?`): `Promise`\<`SVGParsingOutput`\>

Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | where the SVG is |
| `reviver?` | `TSvgReviverCallback` | Extra callback for further parsing of SVG elements, called after each fabric object has been created. Takes as input the original svg element and the generated `FabricObject` as arguments. Used to inspect extra properties not parsed by fabric, or extra custom manipulation |
| `options?` | [`LoadImageOptions`](/apidocs/modules/util.md#loadimageoptions) | Object containing options for parsing |

#### Returns

`Promise`\<`SVGParsingOutput`\>

**`Member Of`**

fabric

#### Defined in

[src/parser/loadSVGFromURL.ts:21](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/parser/loadSVGFromURL.ts#L21)

___

### parseAttributes

**parseAttributes**(`element`, `attributes`, `cssRules?`): `Record`\<`string`, `any`\>

Returns an object of attributes' name/value, given element and an array of attribute names;
Parses parent "g" nodes recursively upwards.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | ``null`` \| `HTMLElement` | Element to parse |
| `attributes` | `string`[] | Array of attributes to parse |
| `cssRules?` | `CSSRules` | - |

#### Returns

`Record`\<`string`, `any`\>

object containing parsed attributes' names/values

#### Defined in

[src/parser/parseAttributes.ts:19](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/parser/parseAttributes.ts#L19)

___

### parseFontDeclaration

**parseFontDeclaration**(`value`, `oStyle`): `void`

Parses a short font declaration, building adding its properties to a style object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | font declaration |
| `oStyle` | `Record`\<`string`, `any`\> | definition |

#### Returns

`void`

**`Static`**

**`Function`**

**`Member Of`**

fabric

#### Defined in

[src/parser/parseFontDeclaration.ts:12](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/parser/parseFontDeclaration.ts#L12)

___

### parsePointsAttribute

**parsePointsAttribute**(`points`): [`XY`](/apidocs/interfaces/XY.md)[]

Parses "points" attribute, returning an array of values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | ``null`` \| `string` | points attribute string |

#### Returns

[`XY`](/apidocs/interfaces/XY.md)[]

array of points

**`Static`**

**`Member Of`**

fabric

#### Defined in

[src/parser/parsePointsAttribute.ts:10](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/parser/parsePointsAttribute.ts#L10)

___

### parseSVGDocument

**parseSVGDocument**(`doc`, `reviver?`, `«destructured»?`): `Promise`\<`SVGParsingOutput`\>

Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | `Document` | SVG document to parse |
| `reviver?` | `TSvgReviverCallback` | Extra callback for further parsing of SVG elements, called after each fabric object has been created. Takes as input the original svg element and the generated `FabricObject` as arguments. Used to inspect extra properties not parsed by fabric, or extra custom manipulation |
| `«destructured»` | [`LoadImageOptions`](/apidocs/modules/util.md#loadimageoptions) | - |

#### Returns

`Promise`\<`SVGParsingOutput`\>

SVGParsingOutput also receives `allElements` array as the last argument. This is the full list of svg nodes available in the document.
You may want to use it if you are trying to regroup the objects as they were originally grouped in the SVG. ( This was the reason why it was added )

**`Static`**

**`Function`**

**`Member Of`**

fabric

#### Defined in

[src/parser/parseSVGDocument.ts:37](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/parser/parseSVGDocument.ts#L37)

___

### parseStyleAttribute

**parseStyleAttribute**(`element`): `Record`\<`string`, `any`\>

Parses "style" attribute, retuning an object with values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | Element to parse |

#### Returns

`Record`\<`string`, `any`\>

Objects with values parsed from style attribute of an element

**`Static`**

**`Member Of`**

fabric

#### Defined in

[src/parser/parseStyleAttribute.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/parser/parseStyleAttribute.ts#L11)

___

### parseTransformAttribute

**parseTransformAttribute**(`attributeValue`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Parses "transform" attribute, returning an array of values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeValue` | `string` | String containing attribute value |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

Array of 6 elements representing transformation matrix

**`Static`**

**`Function`**

**`Member Of`**

fabric

#### Defined in

[src/parser/parseTransformAttribute.ts:38](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/parser/parseTransformAttribute.ts#L38)

___

### setEnv

**setEnv**(`value`): `void`

Sets the environment variables used by fabric.\
This is exposed for special cases, such as configuring a test environment, and should be used with care.

**CAUTION**: Must be called before using the package.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TFabricEnv` |

#### Returns

`void`

**`Example`**

```ts
import { getEnv, setEnv } from 'fabric';
// we want fabric to use the `window` and `document` objects exposed by the environment we are running in.
setEnv({ ...getEnv(), window, document });
// done with setup, using fabric is now safe
```

#### Defined in

[src/env/index.ts:29](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/env/index.ts#L29)

___

### setFilterBackend

**setFilterBackend**(`backend`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `backend` | `FilterBackend` |

#### Returns

`void`

#### Defined in

[src/filters/FilterBackend.ts:36](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/filters/FilterBackend.ts#L36)
