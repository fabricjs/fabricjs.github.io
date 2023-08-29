# Class: Control

## Table of contents

### Constructors

- [constructor](Control.md#constructor)

### Properties

- [actionHandler](Control.md#actionhandler)
- [actionName](Control.md#actionname)
- [angle](Control.md#angle)
- [cursorStyle](Control.md#cursorstyle)
- [mouseDownHandler](Control.md#mousedownhandler)
- [mouseUpHandler](Control.md#mouseuphandler)
- [offsetX](Control.md#offsetx)
- [offsetY](Control.md#offsety)
- [sizeX](Control.md#sizex)
- [sizeY](Control.md#sizey)
- [touchSizeX](Control.md#touchsizex)
- [touchSizeY](Control.md#touchsizey)
- [visible](Control.md#visible)
- [withConnection](Control.md#withconnection)
- [x](Control.md#x)
- [y](Control.md#y)

### Methods

- [calcCornerCoords](Control.md#calccornercoords)
- [cursorStyleHandler](Control.md#cursorstylehandler)
- [getActionHandler](Control.md#getactionhandler)
- [getActionName](Control.md#getactionname)
- [getMouseDownHandler](Control.md#getmousedownhandler)
- [getMouseUpHandler](Control.md#getmouseuphandler)
- [getVisibility](Control.md#getvisibility)
- [positionHandler](Control.md#positionhandler)
- [render](Control.md#render)
- [setVisibility](Control.md#setvisibility)
- [shouldActivate](Control.md#shouldactivate)

## Constructors

### constructor

• **new Control**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`Control`](Control.md)\> |

#### Defined in

[src/controls/Control.ts:138](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L138)

## Properties

### actionHandler

• **actionHandler**: [`TransformActionHandler`](../modules.md#transformactionhandler)<[`Transform`](../modules.md#transform)\>

The control actionHandler, provide one to handle action ( control being moved )

**`Param`**

the native mouse event

**`Param`**

properties of the current transform

**`Param`**

x position of the cursor

**`Param`**

y position of the cursor

#### Defined in

[src/controls/Control.ts:150](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L150)

___

### actionName

• **actionName**: `string` = `'scale'`

Name of the action that the control will likely execute.
This is optional. FabricJS uses to identify what the user is doing for some
extra optimizations. If you are writing a custom control and you want to know
somewhere else in the code what is going on, you can use this string here.
you can also provide a custom getActionName if your control run multiple actions
depending on some external state.
default to scale since is the most common, used on 4 corners by default

**`Default`**

```ts
'scale'
```

#### Defined in

[src/controls/Control.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L39)

___

### angle

• **angle**: `number` = `0`

Drawing angle of the control.
NOT used for now, but name marked as needed for internal logic
example: to reuse the same drawing function for different rotated controls

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:48](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L48)

___

### cursorStyle

• **cursorStyle**: `string` = `'crosshair'`

Css cursor style to display when the control is hovered.
if the method `cursorStyleHandler` is provided, this property is ignored.

**`Default`**

```ts
'crosshair'
```

#### Defined in

[src/controls/Control.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L128)

___

### mouseDownHandler

• `Optional` **mouseDownHandler**: [`ControlActionHandler`](../modules.md#controlactionhandler)

The control handler for mouse down, provide one to handle mouse down on control

**`Param`**

the native mouse event

**`Param`**

properties of the current transform

**`Param`**

x position of the cursor

**`Param`**

y position of the cursor

#### Defined in

[src/controls/Control.ts:160](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L160)

___

### mouseUpHandler

• `Optional` **mouseUpHandler**: [`ControlActionHandler`](../modules.md#controlactionhandler)

The control mouseUpHandler, provide one to handle an effect on mouse up.

**`Param`**

the native mouse event

**`Param`**

properties of the current transform

**`Param`**

x position of the cursor

**`Param`**

y position of the cursor

#### Defined in

[src/controls/Control.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L170)

___

### offsetX

• **offsetX**: `number` = `0`

Horizontal offset of the control from the defined position. In pixels
Positive offset moves the control to the right, negative to the left.
It used when you want to have position of control that does not scale with
the bounding box. Example: rotation control is placed at x:0, y: 0.5 on
the boundind box, with an offset of 30 pixels vertically. Those 30 pixels will
stay 30 pixels no matter how the object is big. Another example is having 2
controls in the corner, that stay in the same position when the object scale.
of the bounding box.

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:80](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L80)

___

### offsetY

• **offsetY**: `number` = `0`

Vertical offset of the control from the defined position. In pixels
Positive offset moves the control to the bottom, negative to the top.

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L88)

___

### sizeX

• **sizeX**: ``null`` \| `number` = `null`

Sets the length of the control. If null, defaults to object's cornerSize.
Expects both sizeX and sizeY to be set when set.

**`Default`**

```ts
null
```

#### Defined in

[src/controls/Control.ts:96](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L96)

___

### sizeY

• **sizeY**: ``null`` \| `number` = `null`

Sets the height of the control. If null, defaults to object's cornerSize.
Expects both sizeX and sizeY to be set when set.

**`Default`**

```ts
null
```

#### Defined in

[src/controls/Control.ts:104](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L104)

___

### touchSizeX

• **touchSizeX**: ``null`` \| `number` = `null`

Sets the length of the touch area of the control. If null, defaults to object's touchCornerSize.
Expects both touchSizeX and touchSizeY to be set when set.

**`Default`**

```ts
null
```

#### Defined in

[src/controls/Control.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L112)

___

### touchSizeY

• **touchSizeY**: ``null`` \| `number` = `null`

Sets the height of the touch area of the control. If null, defaults to object's touchCornerSize.
Expects both touchSizeX and touchSizeY to be set when set.

**`Default`**

```ts
null
```

#### Defined in

[src/controls/Control.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L120)

___

### visible

• **visible**: `boolean` = `true`

keep track of control visibility.
mainly for backward compatibility.
if you do not want to see a control, you can remove it
from the control set.

**`Default`**

```ts
true
```

#### Defined in

[src/controls/Control.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L26)

___

### withConnection

• **withConnection**: `boolean` = `false`

If controls has an offsetY or offsetX, draw a line that connects
the control to the bounding box

**`Default`**

```ts
false
```

#### Defined in

[src/controls/Control.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L136)

___

### x

• **x**: `number` = `0`

Relative position of the control. X
0,0 is the center of the Object, while -0.5 (left) or 0.5 (right) are the extremities
of the bounding box.

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:57](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L57)

___

### y

• **y**: `number` = `0`

Relative position of the control. Y
0,0 is the center of the Object, while -0.5 (top) or 0.5 (bottom) are the extremities
of the bounding box.

**`Default`**

```ts
0
```

#### Defined in

[src/controls/Control.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L66)

## Methods

### calcCornerCoords

▸ **calcCornerCoords**(`objectAngle`, `objectCornerSize`, `centerX`, `centerY`, `isTouch`): `Object`

Returns the coords for this control based on object values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectAngle` | [`TDegree`](../modules.md#tdegree) | angle from the fabric object holding the control |
| `objectCornerSize` | `number` | cornerSize from the fabric object holding the control (or touchCornerSize if isTouch is true) |
| `centerX` | `number` | x coordinate where the control center should be |
| `centerY` | `number` | y coordinate where the control center should be |
| `isTouch` | `boolean` | true if touch corner, false if normal corner |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bl` | [`Point`](Point.md) |
| `br` | [`Point`](Point.md) |
| `tl` | [`Point`](Point.md) |
| `tr` | [`Point`](Point.md) |

#### Defined in

[src/controls/Control.ts:302](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L302)

___

### cursorStyleHandler

▸ **cursorStyleHandler**(`eventData`, `control`, `fabricObject`): `string`

Returns control cursorStyle for css using cursorStyle. If you need a more elaborate
function you can pass one in the constructor
the cursorStyle property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the native mouse event |
| `control` | [`Control`](Control.md) | the current control ( likely this) |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |

#### Returns

`string`

#### Defined in

[src/controls/Control.ts:235](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L235)

___

### getActionHandler

▸ **getActionHandler**(`eventData`, `fabricObject`, `control`): `undefined` \| [`TransformActionHandler`](../modules.md#transformactionhandler)<[`Transform`](../modules.md#transform)\>

Returns control actionHandler

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the native mouse event |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | on which the control is displayed |
| `control` | [`Control`](Control.md) | control for which the action handler is being asked |

#### Returns

`undefined` \| [`TransformActionHandler`](../modules.md#transformactionhandler)<[`Transform`](../modules.md#transform)\>

the action handler

#### Defined in

[src/controls/Control.ts:187](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L187)

___

### getActionName

▸ **getActionName**(`eventData`, `control`, `fabricObject`): `string`

Returns the action name. The basic implementation just return the actionName property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the native mouse event |
| `control` | [`Control`](Control.md) | the current control ( likely this) |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |

#### Returns

`string`

#### Defined in

[src/controls/Control.ts:250](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L250)

___

### getMouseDownHandler

▸ **getMouseDownHandler**(`eventData`, `fabricObject`, `control`): `undefined` \| [`ControlActionHandler`](../modules.md#controlactionhandler)

Returns control mouseDown handler

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the native mouse event |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | on which the control is displayed |
| `control` | [`Control`](Control.md) | control for which the action handler is being asked |

#### Returns

`undefined` \| [`ControlActionHandler`](../modules.md#controlactionhandler)

the action handler

#### Defined in

[src/controls/Control.ts:202](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L202)

___

### getMouseUpHandler

▸ **getMouseUpHandler**(`eventData`, `fabricObject`, `control`): `undefined` \| [`ControlActionHandler`](../modules.md#controlactionhandler)

Returns control mouseUp handler.
During actions the fabricObject or the control can be of different obj

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventData` | [`TPointerEvent`](../modules.md#tpointerevent) | the native mouse event |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | on which the control is displayed |
| `control` | [`Control`](Control.md) | control for which the action handler is being asked |

#### Returns

`undefined` \| [`ControlActionHandler`](../modules.md#controlactionhandler)

the action handler

#### Defined in

[src/controls/Control.ts:218](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L218)

___

### getVisibility

▸ **getVisibility**(`fabricObject`, `controlKey`): `boolean`

Returns controls visibility

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |
| `controlKey` | `string` | key where the control is memorized on the |

#### Returns

`boolean`

#### Defined in

[src/controls/Control.ts:264](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L264)

___

### positionHandler

▸ **positionHandler**(`dim`, `finalMatrix`, `fabricObject`, `currentControl`): [`Point`](Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dim` | [`Point`](Point.md) |
| `finalMatrix` | [`TMat2D`](../modules.md#tmat2d) |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `currentControl` | [`Control`](Control.md) |

#### Returns

[`Point`](Point.md)

#### Defined in

[src/controls/Control.ts:281](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L281)

___

### render

▸ **render**(`ctx`, `left`, `top`, `styleOverride`, `fabricObject`): `void`

Render function for the control.
When this function runs the context is unscaled. unrotate. Just retina scaled.
all the functions will have to translate to the point left,top before starting Drawing
if they want to draw a control where the position is detected.
left and top are the result of the positionHandler function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | the context where the control will be drawn |
| `left` | `number` | position of the canvas where we are about to render the control. |
| `top` | `number` | position of the canvas where we are about to render the control. |
| `styleOverride` | `undefined` \| `Partial`<`Pick`<`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> |  |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | the object where the control is about to be rendered |

#### Returns

`void`

#### Defined in

[src/controls/Control.ts:355](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L355)

___

### setVisibility

▸ **setVisibility**(`visibility`, `name`, `fabricObject`): `void`

Sets controls visibility

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visibility` | `boolean` | for the object |
| `name` | `string` | - |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |

#### Returns

`void`

#### Defined in

[src/controls/Control.ts:273](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L273)

___

### shouldActivate

▸ **shouldActivate**(`controlKey`, `fabricObject`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controlKey` | `string` |
| `fabricObject` | `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`boolean`

#### Defined in

[src/controls/Control.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/controls/Control.ts#L172)
