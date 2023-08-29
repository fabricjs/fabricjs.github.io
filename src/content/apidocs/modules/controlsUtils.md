# Namespace: controlsUtils

## Table of contents

### Functions

- [changeWidth](controlsUtils.md#changewidth)
- [createObjectDefaultControls](controlsUtils.md#createobjectdefaultcontrols)
- [createPolyControls](controlsUtils.md#createpolycontrols)
- [createResizeControls](controlsUtils.md#createresizecontrols)
- [createTextboxDefaultControls](controlsUtils.md#createtextboxdefaultcontrols)
- [dragHandler](controlsUtils.md#draghandler)
- [getLocalPoint](controlsUtils.md#getlocalpoint)
- [renderCircleControl](controlsUtils.md#rendercirclecontrol)
- [renderSquareControl](controlsUtils.md#rendersquarecontrol)
- [rotationStyleHandler](controlsUtils.md#rotationstylehandler)
- [rotationWithSnapping](controlsUtils.md#rotationwithsnapping)
- [scaleCursorStyleHandler](controlsUtils.md#scalecursorstylehandler)
- [scaleOrSkewActionName](controlsUtils.md#scaleorskewactionname)
- [scaleSkewCursorStyleHandler](controlsUtils.md#scaleskewcursorstylehandler)
- [scalingEqually](controlsUtils.md#scalingequally)
- [scalingX](controlsUtils.md#scalingx)
- [scalingXOrSkewingY](controlsUtils.md#scalingxorskewingy)
- [scalingY](controlsUtils.md#scalingy)
- [scalingYOrSkewingX](controlsUtils.md#scalingyorskewingx)
- [skewCursorStyleHandler](controlsUtils.md#skewcursorstylehandler)
- [skewHandlerX](controlsUtils.md#skewhandlerx)
- [skewHandlerY](controlsUtils.md#skewhandlery)
- [wrapWithFireEvent](controlsUtils.md#wrapwithfireevent)
- [wrapWithFixedAnchor](controlsUtils.md#wrapwithfixedanchor)

## Functions

### changeWidth

▸ **changeWidth**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) |
| `transform` | [`Transform`](../modules.md#transform) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### createObjectDefaultControls

▸ **createObjectDefaultControls**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bl` | [`Control`](../classes/Control.md) |
| `br` | [`Control`](../classes/Control.md) |
| `mb` | [`Control`](../classes/Control.md) |
| `ml` | [`Control`](../classes/Control.md) |
| `mr` | [`Control`](../classes/Control.md) |
| `mt` | [`Control`](../classes/Control.md) |
| `mtr` | [`Control`](../classes/Control.md) |
| `tl` | [`Control`](../classes/Control.md) |
| `tr` | [`Control`](../classes/Control.md) |

#### Defined in

[src/controls/commonControls.ts:13](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/commonControls.ts#L13)

___

### createPolyControls

▸ **createPolyControls**(`poly`, `options?`): `Record`<`string`, [`Control`](../classes/Control.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poly` | [`Polyline`](../classes/Polyline.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](../interfaces/SerializedPolylineProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `options?` | `Partial`<[`Control`](../classes/Control.md)\> |

#### Returns

`Record`<`string`, [`Control`](../classes/Control.md)\>

#### Defined in

[src/controls/polyControl.ts:107](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/polyControl.ts#L107)

▸ **createPolyControls**(`numOfControls`, `options?`): `Record`<`string`, [`Control`](../classes/Control.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `numOfControls` | `number` |
| `options?` | `Partial`<[`Control`](../classes/Control.md)\> |

#### Returns

`Record`<`string`, [`Control`](../classes/Control.md)\>

#### Defined in

[src/controls/polyControl.ts:111](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/polyControl.ts#L111)

___

### createResizeControls

▸ **createResizeControls**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ml` | [`Control`](../classes/Control.md) |
| `mr` | [`Control`](../classes/Control.md) |

#### Defined in

[src/controls/commonControls.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/commonControls.ts#L85)

___

### createTextboxDefaultControls

▸ **createTextboxDefaultControls**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bl` | [`Control`](../classes/Control.md) |
| `br` | [`Control`](../classes/Control.md) |
| `mb` | [`Control`](../classes/Control.md) |
| `ml` | [`Control`](../classes/Control.md) |
| `mr` | [`Control`](../classes/Control.md) |
| `mt` | [`Control`](../classes/Control.md) |
| `mtr` | [`Control`](../classes/Control.md) |
| `tl` | [`Control`](../classes/Control.md) |
| `tr` | [`Control`](../classes/Control.md) |

#### Defined in

[src/controls/commonControls.ts:102](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/commonControls.ts#L102)

___

### dragHandler

▸ `Private` **dragHandler**(`eventData`, `transform`, `x`, `y`): `boolean`

Action handler

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](../modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if the translation occurred

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### getLocalPoint

▸ **getLocalPoint**(`transform`, `originX`, `originY`, `x`, `y`): [`Point`](../classes/Point.md)

Transforms a point to the offset from the given origin

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](../modules.md#transform) |
| `originX` | [`TOriginX`](../modules.md#toriginx) |
| `originY` | [`TOriginY`](../modules.md#toriginy) |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Point`](../classes/Point.md)

the normalized point

#### Defined in

[src/controls/util.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/util.ts#L129)

___

### renderCircleControl

▸ **renderCircleControl**(`this`, `ctx`, `left`, `top`, `styleOverride`, `fabricObject`): `void`

Render a round control, as per fabric features.
This function is written to respect object properties like transparentCorners, cornerSize
cornerColor, cornerStrokeColor
plus the addition of offsetY and offsetX.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Control`](../classes/Control.md) | - |
| `ctx` | `CanvasRenderingContext2D` | context to render on |
| `left` | `number` | x coordinate where the control center should be |
| `top` | `number` | y coordinate where the control center should be |
| `styleOverride` | `Partial`<`Pick`<`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | override for FabricObject controls style |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the fabric object for which we are rendering controls |

#### Returns

`void`

#### Defined in

[src/controls/controlRendering.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/controlRendering.ts#L37)

___

### renderSquareControl

▸ **renderSquareControl**(`this`, `ctx`, `left`, `top`, `styleOverride`, `fabricObject`): `void`

Render a square control, as per fabric features.
This function is written to respect object properties like transparentCorners, cornerSize
cornerColor, cornerStrokeColor
plus the addition of offsetY and offsetX.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Control`](../classes/Control.md) | - |
| `ctx` | `CanvasRenderingContext2D` | context to render on |
| `left` | `number` | x coordinate where the control center should be |
| `top` | `number` | y coordinate where the control center should be |
| `styleOverride` | `Partial`<`Pick`<`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | override for FabricObject controls style |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the fabric object for which we are rendering controls |

#### Returns

`void`

#### Defined in

[src/controls/controlRendering.ts:98](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/controlRendering.ts#L98)

___

### rotationStyleHandler

▸ **rotationStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

Find the correct style for the control that is used for rotation.
this function is very simple and it just take care of not-allowed or standard cursor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](../classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

`string`

a valid css string for the cursor

#### Defined in

[src/EventTypeDefs.ts:40](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L40)

___

### rotationWithSnapping

▸ **rotationWithSnapping**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) |
| `transform` | [`Transform`](../modules.md#transform) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### scaleCursorStyleHandler

▸ **scaleCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

return the correct cursor style for the scale action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](../classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

`string`

a valid css string for the cursor

#### Defined in

[src/EventTypeDefs.ts:40](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L40)

___

### scaleOrSkewActionName

▸ **scaleOrSkewActionName**(`eventData`, `control`, `fabricObject`): ``""`` \| ``"scaleX"`` \| ``"scaleY"`` \| ``"skewX"`` \| ``"skewY"``

Inspect event, control and fabricObject to return the correct action name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](../classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

``""`` \| ``"scaleX"`` \| ``"scaleY"`` \| ``"skewX"`` \| ``"skewY"``

an action name

#### Defined in

[src/EventTypeDefs.ts:40](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L40)

___

### scaleSkewCursorStyleHandler

▸ **scaleSkewCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

Combine skew and scale style handlers to cover fabric standard use case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](../classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

`string`

a valid css string for the cursor

#### Defined in

[src/EventTypeDefs.ts:40](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L40)

___

### scalingEqually

▸ **scalingEqually**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) |
| `transform` | `ScaleTransform` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### scalingX

▸ **scalingX**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) |
| `transform` | `ScaleTransform` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### scalingXOrSkewingY

▸ **scalingXOrSkewingY**(`eventData`, `transform`, `x`, `y`): `boolean`

Composed action handler to either scale X or skew Y
Needs to be wrapped with `wrapWithFixedAnchor` to be effective

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](../modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if some change happened

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### scalingY

▸ **scalingY**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) |
| `transform` | `ScaleTransform` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### scalingYOrSkewingX

▸ **scalingYOrSkewingX**(`eventData`, `transform`, `x`, `y`): `boolean`

Composed action handler to either scale Y or skew X
Needs to be wrapped with `wrapWithFixedAnchor` to be effective

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](../modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if some change happened

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### skewCursorStyleHandler

▸ **skewCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

return the correct cursor style for the skew action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](../classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`Object`](../classes/Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

`string`

a valid css string for the cursor

#### Defined in

[src/EventTypeDefs.ts:40](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L40)

___

### skewHandlerX

▸ **skewHandlerX**(`eventData`, `transform`, `x`, `y`): `boolean`

Wrapped Action handler for skewing on the X axis, takes care of the
skew direction and determines the correct transform origin for the anchor point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](../modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if some change happened

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### skewHandlerY

▸ **skewHandlerY**(`eventData`, `transform`, `x`, `y`): `boolean`

Wrapped Action handler for skewing on the Y axis, takes care of the
skew direction and determines the correct transform origin for the anchor point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](../modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if some change happened

#### Defined in

[src/EventTypeDefs.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/EventTypeDefs.ts#L20)

___

### wrapWithFireEvent

▸ **wrapWithFireEvent**<`T`\>(`eventName`, `actionHandler`): [`TransformActionHandler`](../modules.md#transformactionhandler)<`T`\>

Wrap an action handler with firing an event if the action is performed

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Transform`](../modules.md#transform) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | [`TModificationEvents`](../modules.md#tmodificationevents) | - |
| `actionHandler` | [`TransformActionHandler`](../modules.md#transformactionhandler)<`T`\> | the function to wrap |

#### Returns

[`TransformActionHandler`](../modules.md#transformactionhandler)<`T`\>

a function with an action handler signature

#### Defined in

[src/controls/wrapWithFireEvent.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/wrapWithFireEvent.ts#L14)

___

### wrapWithFixedAnchor

▸ **wrapWithFixedAnchor**<`T`\>(`actionHandler`): [`TransformActionHandler`](../modules.md#transformactionhandler)<`T`\>

Wrap an action handler with saving/restoring object position on the transform.
this is the code that permits to objects to keep their position while transforming.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Transform`](../modules.md#transform) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionHandler` | [`TransformActionHandler`](../modules.md#transformactionhandler)<`T`\> | the function to wrap |

#### Returns

[`TransformActionHandler`](../modules.md#transformactionhandler)<`T`\>

a function with an action handler signature

#### Defined in

[src/controls/wrapWithFixedAnchor.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/wrapWithFixedAnchor.ts#L9)
