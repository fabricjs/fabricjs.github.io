# Namespace: controlsUtils

## Functions

### changeWidth

**changeWidth**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `transform` | [`Transform`](/apidocs/modules.md#transform) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/controls/changeWidth.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/changeWidth.ts#L50)

___

### createObjectDefaultControls

**createObjectDefaultControls**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bl` | [`Control`](/apidocs/classes/Control.md) |
| `br` | [`Control`](/apidocs/classes/Control.md) |
| `mb` | [`Control`](/apidocs/classes/Control.md) |
| `ml` | [`Control`](/apidocs/classes/Control.md) |
| `mr` | [`Control`](/apidocs/classes/Control.md) |
| `mt` | [`Control`](/apidocs/classes/Control.md) |
| `mtr` | [`Control`](/apidocs/classes/Control.md) |
| `tl` | [`Control`](/apidocs/classes/Control.md) |
| `tr` | [`Control`](/apidocs/classes/Control.md) |

#### Defined in

[src/controls/commonControls.ts:13](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/commonControls.ts#L13)

___

### createPolyActionHandler

**createPolyActionHandler**(`pointIndex`): [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<[`Transform`](/apidocs/modules.md#transform)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointIndex` | `number` |

#### Returns

[`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<[`Transform`](/apidocs/modules.md#transform)\>

#### Defined in

[src/controls/polyControl.ts:98](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/polyControl.ts#L98)

___

### createPolyControls

**createPolyControls**(`poly`, `options?`): `Record`\<`string`, [`Control`](/apidocs/classes/Control.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poly` | [`Polyline`](/apidocs/classes/Polyline.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `options?` | `Partial`\<[`Control`](/apidocs/classes/Control.md)\> |

#### Returns

`Record`\<`string`, [`Control`](/apidocs/classes/Control.md)\>

#### Defined in

[src/controls/polyControl.ts:104](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/polyControl.ts#L104)

**createPolyControls**(`numOfControls`, `options?`): `Record`\<`string`, [`Control`](/apidocs/classes/Control.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `numOfControls` | `number` |
| `options?` | `Partial`\<[`Control`](/apidocs/classes/Control.md)\> |

#### Returns

`Record`\<`string`, [`Control`](/apidocs/classes/Control.md)\>

#### Defined in

[src/controls/polyControl.ts:108](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/polyControl.ts#L108)

___

### createPolyPositionHandler

**createPolyPositionHandler**(`pointIndex`): (`dim`: [`Point`](/apidocs/classes/Point.md), `finalMatrix`: [`TMat2D`](/apidocs/modules.md#tmat2d), `polyObject`: [`Polyline`](/apidocs/classes/Polyline.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>) => [`Point`](/apidocs/classes/Point.md)

This function locates the controls.
It'll be used both for drawing and for interaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointIndex` | `number` |

#### Returns

`fn`

(`dim`, `finalMatrix`, `polyObject`): [`Point`](/apidocs/classes/Point.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `dim` | [`Point`](/apidocs/classes/Point.md) |
| `finalMatrix` | [`TMat2D`](/apidocs/modules.md#tmat2d) |
| `polyObject` | [`Polyline`](/apidocs/classes/Polyline.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedPolylineProps`](/apidocs/interfaces/SerializedPolylineProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

##### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/controls/polyControl.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/polyControl.ts#L23)

___

### createResizeControls

**createResizeControls**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ml` | [`Control`](/apidocs/classes/Control.md) |
| `mr` | [`Control`](/apidocs/classes/Control.md) |

#### Defined in

[src/controls/commonControls.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/commonControls.ts#L85)

___

### createTextboxDefaultControls

**createTextboxDefaultControls**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bl` | [`Control`](/apidocs/classes/Control.md) |
| `br` | [`Control`](/apidocs/classes/Control.md) |
| `mb` | [`Control`](/apidocs/classes/Control.md) |
| `ml` | [`Control`](/apidocs/classes/Control.md) |
| `mr` | [`Control`](/apidocs/classes/Control.md) |
| `mt` | [`Control`](/apidocs/classes/Control.md) |
| `mtr` | [`Control`](/apidocs/classes/Control.md) |
| `tl` | [`Control`](/apidocs/classes/Control.md) |
| `tr` | [`Control`](/apidocs/classes/Control.md) |

#### Defined in

[src/controls/commonControls.ts:102](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/commonControls.ts#L102)

___

### dragHandler

**dragHandler**(`eventData`, `transform`, `x`, `y`): `boolean`

Action handler

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](/apidocs/modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if the translation occurred

#### Defined in

[src/controls/drag.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/drag.ts#L15)

___

### factoryPolyActionHandler

**factoryPolyActionHandler**(`pointIndex`, `fn`): (`eventData`: [`TPointerEvent`](/apidocs/modules.md#tpointerevent), `transform`: [`Transform`](/apidocs/modules.md#transform), `x`: `number`, `y`: `number`) => `boolean`

Keep the polygon in the same position when we change its `width`/`height`/`top`/`left`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointIndex` | `number` |
| `fn` | [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<`TTransformAnchor`\> |

#### Returns

`fn`

(`eventData`, `transform`, `x`, `y`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `transform` | [`Transform`](/apidocs/modules.md#transform) |
| `x` | `number` |
| `y` | `number` |

##### Returns

`boolean`

#### Defined in

[src/controls/polyControl.ts:67](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/polyControl.ts#L67)

___

### getLocalPoint

**getLocalPoint**(`transform`, `originX`, `originY`, `x`, `y`): [`Point`](/apidocs/classes/Point.md)

Transforms a point to the offset from the given origin

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](/apidocs/modules.md#transform) |
| `originX` | [`TOriginX`](/apidocs/modules.md#toriginx) |
| `originY` | [`TOriginY`](/apidocs/modules.md#toriginy) |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

the normalized point

#### Defined in

[src/controls/util.ts:129](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/util.ts#L129)

___

### polyActionHandler

**polyActionHandler**(`eventData`, `transform`, `x`, `y`): `boolean`

This function defines what the control does.
It'll be called on every mouse move after a control has been clicked and is being dragged.
The function receives as argument the mouse event, the current transform object
and the current position in canvas coordinate `transform.target` is a reference to the
current object being transformed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `transform` | `TTransformAnchor` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/controls/polyControl.ts:44](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/polyControl.ts#L44)

___

### renderCircleControl

**renderCircleControl**(`this`, `ctx`, `left`, `top`, `styleOverride`, `fabricObject`): `void`

Render a round control, as per fabric features.
This function is written to respect object properties like transparentCorners, cornerSize
cornerColor, cornerStrokeColor
plus the addition of offsetY and offsetX.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Control`](/apidocs/classes/Control.md) | - |
| `ctx` | `CanvasRenderingContext2D` | context to render on |
| `left` | `number` | x coordinate where the control center should be |
| `top` | `number` | y coordinate where the control center should be |
| `styleOverride` | `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | override for FabricObject controls style |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the fabric object for which we are rendering controls |

#### Returns

`void`

#### Defined in

[src/controls/controlRendering.ts:37](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/controlRendering.ts#L37)

___

### renderSquareControl

**renderSquareControl**(`this`, `ctx`, `left`, `top`, `styleOverride`, `fabricObject`): `void`

Render a square control, as per fabric features.
This function is written to respect object properties like transparentCorners, cornerSize
cornerColor, cornerStrokeColor
plus the addition of offsetY and offsetX.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Control`](/apidocs/classes/Control.md) | - |
| `ctx` | `CanvasRenderingContext2D` | context to render on |
| `left` | `number` | x coordinate where the control center should be |
| `top` | `number` | y coordinate where the control center should be |
| `styleOverride` | `Partial`\<`Pick`\<`InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | override for FabricObject controls style |
| `fabricObject` | `InteractiveFabricObject`\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the fabric object for which we are rendering controls |

#### Returns

`void`

#### Defined in

[src/controls/controlRendering.ts:98](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/controlRendering.ts#L98)

___

### rotationStyleHandler

**rotationStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

Find the correct style for the control that is used for rotation.
this function is very simple and it just take care of not-allowed or standard cursor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](/apidocs/classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

`string`

a valid css string for the cursor

#### Defined in

[src/controls/rotate.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/rotate.ts#L18)

___

### rotationWithSnapping

**rotationWithSnapping**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `transform` | [`Transform`](/apidocs/modules.md#transform) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/controls/rotate.ts:84](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/rotate.ts#L84)

___

### scaleCursorStyleHandler

**scaleCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

return the correct cursor style for the scale action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](/apidocs/classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

`string`

a valid css string for the cursor

#### Defined in

[src/controls/scale.ts:85](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/scale.ts#L85)

___

### scaleOrSkewActionName

**scaleOrSkewActionName**(`eventData`, `control`, `fabricObject`): ``""`` \| ``"scaleX"`` \| ``"scaleY"`` \| ``"skewX"`` \| ``"skewY"``

Inspect event, control and fabricObject to return the correct action name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](/apidocs/classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

``""`` \| ``"scaleX"`` \| ``"scaleY"`` \| ``"skewX"`` \| ``"skewY"``

an action name

#### Defined in

[src/controls/scaleSkew.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/scaleSkew.ts#L23)

___

### scaleSkewCursorStyleHandler

**scaleSkewCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

Combine skew and scale style handlers to cover fabric standard use case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](/apidocs/classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

`string`

a valid css string for the cursor

#### Defined in

[src/controls/scaleSkew.ts:45](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/scaleSkew.ts#L45)

___

### scalingEqually

**scalingEqually**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `transform` | `ScaleTransform` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/controls/scale.ts:264](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/scale.ts#L264)

___

### scalingX

**scalingX**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `transform` | `ScaleTransform` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/controls/scale.ts:269](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/scale.ts#L269)

___

### scalingXOrSkewingY

**scalingXOrSkewingY**(`eventData`, `transform`, `x`, `y`): `boolean`

Composed action handler to either scale X or skew Y
Needs to be wrapped with `wrapWithFixedAnchor` to be effective

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](/apidocs/modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if some change happened

#### Defined in

[src/controls/scaleSkew.ts:63](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/scaleSkew.ts#L63)

___

### scalingY

**scalingY**(`eventData`, `transform`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |
| `transform` | `ScaleTransform` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/controls/scale.ts:274](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/scale.ts#L274)

___

### scalingYOrSkewingX

**scalingYOrSkewingX**(`eventData`, `transform`, `x`, `y`): `boolean`

Composed action handler to either scale Y or skew X
Needs to be wrapped with `wrapWithFixedAnchor` to be effective

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](/apidocs/modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if some change happened

#### Defined in

[src/controls/scaleSkew.ts:83](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/scaleSkew.ts#L83)

___

### skewCursorStyleHandler

**skewCursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

return the correct cursor style for the skew action

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | the javascript event that is causing the scale |
| `control` | [`Control`](/apidocs/classes/Control.md) | the control that is interested in the action |
| `fabricObject` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the fabric object that is interested in the action |

#### Returns

`string`

a valid css string for the cursor

#### Defined in

[src/controls/skew.ts:64](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/skew.ts#L64)

___

### skewHandlerX

**skewHandlerX**(`eventData`, `transform`, `x`, `y`): `boolean`

Wrapped Action handler for skewing on the X axis, takes care of the
skew direction and determines the correct transform origin for the anchor point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](/apidocs/modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if some change happened

#### Defined in

[src/controls/skew.ts:218](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/skew.ts#L218)

___

### skewHandlerY

**skewHandlerY**(`eventData`, `transform`, `x`, `y`): `boolean`

Wrapped Action handler for skewing on the Y axis, takes care of the
skew direction and determines the correct transform origin for the anchor point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) | javascript event that is doing the transform |
| `transform` | [`Transform`](/apidocs/modules.md#transform) | javascript object containing a series of information around the current transform |
| `x` | `number` | current mouse x position, canvas normalized |
| `y` | `number` | current mouse y position, canvas normalized |

#### Returns

`boolean`

true if some change happened

#### Defined in

[src/controls/skew.ts:236](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/skew.ts#L236)

___

### wrapWithFireEvent

**wrapWithFireEvent**\<`T`\>(`eventName`, `actionHandler`): [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<`T`\>

Wrap an action handler with firing an event if the action is performed

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Transform`](/apidocs/modules.md#transform) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | [`TModificationEvents`](/apidocs/modules.md#tmodificationevents) | - |
| `actionHandler` | [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<`T`\> | the function to wrap |

#### Returns

[`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<`T`\>

a function with an action handler signature

#### Defined in

[src/controls/wrapWithFireEvent.ts:14](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/wrapWithFireEvent.ts#L14)

___

### wrapWithFixedAnchor

**wrapWithFixedAnchor**\<`T`\>(`actionHandler`): [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<`T`\>

Wrap an action handler with saving/restoring object position on the transform.
this is the code that permits to objects to keep their position while transforming.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Transform`](/apidocs/modules.md#transform) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionHandler` | [`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<`T`\> | the function to wrap |

#### Returns

[`TransformActionHandler`](/apidocs/modules.md#transformactionhandler)\<`T`\>

a function with an action handler signature

#### Defined in

[src/controls/wrapWithFixedAnchor.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/controls/wrapWithFixedAnchor.ts#L9)
