# Class: ClipPathLayout

Layout will adjust the bounding box to match the clip path bounding box.

## Hierarchy

- [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md)

  ↳ **`ClipPathLayout`**

## Constructors

### constructor

**new ClipPathLayout**(): [`ClipPathLayout`](/apidocs/classes/ClipPathLayout.md)

#### Returns

[`ClipPathLayout`](/apidocs/classes/ClipPathLayout.md)

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[constructor](/apidocs/classes/LayoutStrategy.md#constructor)

## Properties

### type

 `Static` `Readonly` **type**: ``"clip-path"``

override by subclass for persistence (TS does not support `static abstract`)

#### Overrides

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[type](/apidocs/classes/LayoutStrategy.md#type)

#### Defined in

[src/LayoutManager/LayoutStrategies/ClipPathLayout.ts:14](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/ClipPathLayout.ts#L14)

## Methods

### calcBoundingBox

**calcBoundingBox**(`objects`, `context`): `undefined` \| [`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult)

Override this method to customize layout.

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`undefined` \| [`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult)

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[calcBoundingBox](/apidocs/classes/LayoutStrategy.md#calcboundingbox)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:74](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L74)

___

### calcLayoutResult

**calcLayoutResult**(`context`, `objects`): `undefined` \| [`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult)

Used by the `LayoutManager` to perform layout

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`undefined` \| [`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult)

layout result **OR** `undefined` to skip layout

#### Overrides

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[calcLayoutResult](/apidocs/classes/LayoutStrategy.md#calclayoutresult)

#### Defined in

[src/LayoutManager/LayoutStrategies/ClipPathLayout.ts:24](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/ClipPathLayout.ts#L24)

___

### getInitialSize

**getInitialSize**(`context`, `result`): [`Point`](/apidocs/classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) & [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `type`: ``"initialization"`` ; `x?`: `number` ; `y?`: `number`  } |
| `result` | `Pick`\<[`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult), ``"center"`` \| ``"size"``\> |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[getInitialSize](/apidocs/classes/LayoutStrategy.md#getinitialsize)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:57](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L57)

___

### shouldLayoutClipPath

**shouldLayoutClipPath**(): `boolean`

#### Returns

`boolean`

#### Overrides

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[shouldLayoutClipPath](/apidocs/classes/LayoutStrategy.md#shouldlayoutclippath)

#### Defined in

[src/LayoutManager/LayoutStrategies/ClipPathLayout.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/ClipPathLayout.ts#L20)

___

### shouldPerformLayout

**shouldPerformLayout**(`context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`boolean`

#### Overrides

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[shouldPerformLayout](/apidocs/classes/LayoutStrategy.md#shouldperformlayout)

#### Defined in

[src/LayoutManager/LayoutStrategies/ClipPathLayout.ts:16](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/ClipPathLayout.ts#L16)

___

### shouldResetTransform

**shouldResetTransform**(`context`): `boolean`

called from the `onAfterLayout` hook

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`boolean`

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[shouldResetTransform](/apidocs/classes/LayoutStrategy.md#shouldresettransform)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:67](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L67)
